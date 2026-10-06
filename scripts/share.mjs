#!/usr/bin/env node
/**
 * Share the working tree with another machine through an ngrok tunnel.
 *
 *   corepack pnpm share          # packs the repo (uncommitted changes included) and serves it
 *   ngrok http 8787              # in another terminal; give the https URL to the other machine
 *
 * Serves:  GET  /                      short instructions
 *          GET  /portfolio-src.tar.gz  the repo without node_modules, dist, .git
 *          GET  /ios-app-brief.md      the brief on its own
 *          GET  /inbox/                what has been uploaded so far
 * Accepts: PUT  /upload/<file>         saved to snapshot/inbox/<file> (letters, digits, . _ - only)
 */
import http from 'node:http';
import { createReadStream, createWriteStream, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'snapshot');
const inbox = path.join(out, 'inbox');
mkdirSync(inbox, { recursive: true });
const port = Number(process.env.PORT || 8787);
const maxUpload = 800 * 1024 * 1024;

const archive = path.join(out, 'portfolio-src.tar.gz');
execFileSync(
  'tar',
  ['-czf', archive, '-C', root, '--exclude=./node_modules', '--exclude=./dist', '--exclude=./.astro', '--exclude=./.git', '--exclude=./snapshot', '--exclude=./.vercel', '.'],
  { stdio: 'inherit' },
);
console.log(`packed ${(statSync(archive).size / 1024 / 1024).toFixed(1)} MB -> snapshot/portfolio-src.tar.gz`);

const send = (res, code, body, type = 'text/plain; charset=utf-8') => {
  res.writeHead(code, { 'content-type': type });
  res.end(body);
};
const file = (res, p, type) => {
  if (!existsSync(p)) return send(res, 404, 'not found\n');
  res.writeHead(200, { 'content-type': type, 'content-length': statSync(p).size });
  createReadStream(p).pipe(res);
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  console.log(new Date().toISOString(), req.method, url.pathname);

  if (req.method === 'GET' && url.pathname === '/') {
    return send(
      res,
      200,
      [
        'portfolio share server',
        '',
        'GET  /portfolio-src.tar.gz   repo snapshot (uncommitted changes included)',
        'GET  /ios-app-brief.md       the brief',
        'GET  /inbox/                 uploads received so far',
        'PUT  /upload/<file>          send a file back, e.g. curl -T ios-apps.tar.gz <url>/upload/ios-apps.tar.gz',
        '',
        'Add the header  ngrok-skip-browser-warning: 1  to every request made through ngrok.',
        '',
      ].join('\n'),
    );
  }
  if (req.method === 'GET' && url.pathname === '/portfolio-src.tar.gz') return file(res, archive, 'application/gzip');
  if (req.method === 'GET' && url.pathname === '/ios-app-brief.md') return file(res, path.join(root, 'docs', 'ios-app-brief.md'), 'text/markdown; charset=utf-8');
  if (req.method === 'GET' && url.pathname === '/inbox/') {
    const rows = readdirSync(inbox).map((f) => `${statSync(path.join(inbox, f)).size}\t${f}`);
    return send(res, 200, (rows.length ? rows.join('\n') : '(empty)') + '\n');
  }
  if ((req.method === 'PUT' || req.method === 'POST') && url.pathname.startsWith('/upload/')) {
    const name = path.basename(url.pathname.slice('/upload/'.length));
    if (!/^[A-Za-z0-9._-]{1,120}$/.test(name) || name.startsWith('.')) return send(res, 400, 'bad file name\n');
    const dest = path.join(inbox, name);
    let size = 0;
    const ws = createWriteStream(dest);
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > maxUpload) {
        req.destroy();
        ws.destroy();
      }
    });
    req.pipe(ws);
    ws.on('finish', () => send(res, 201, `saved ${name} (${size} bytes) to snapshot/inbox/\n`));
    ws.on('error', (e) => send(res, 500, `write failed: ${e.message}\n`));
    return;
  }
  send(res, 404, 'not found\n');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`serving on http://localhost:${port}  ->  now run:  ngrok http ${port}`);
});
