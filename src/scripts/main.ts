/* header: hairline and tint once the page scrolls */
const header = document.querySelector<HTMLElement>('[data-header]');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
addEventListener('scroll', onScroll, { passive: true });

/* mobile nav */
const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
const mobileNav = document.querySelector<HTMLElement>('[data-mobile-nav]');
const setOpen = (open: boolean) => {
  mobileNav?.classList.toggle('hidden', !open);
  mobileNav?.classList.toggle('flex', open);
  toggle?.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('overflow-hidden', open);
};
toggle?.addEventListener('click', () => setOpen(mobileNav?.classList.contains('hidden') ?? false));
mobileNav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setOpen(false);
});

/* copy-to-clipboard buttons */
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  const original = btn.textContent;
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy ?? '');
      btn.textContent = 'Copied';
      btn.classList.add('is-copied');
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove('is-copied');
      }, 1600);
    } catch {
      /* clipboard unavailable; the mailto link still works */
    }
  });
});

/* silent looping recordings: fetch a little early, but only play while actually in view */
const videos = document.querySelectorAll<HTMLVideoElement>('video.motion-video');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (videos.length && !reducedMotion && 'IntersectionObserver' in window) {
  const attach = (v: HTMLVideoElement) => {
    if (v.dataset.loaded) return;
    v.querySelectorAll<HTMLSourceElement>('source').forEach((s) => {
      s.src = s.dataset.src ?? '';
    });
    v.load();
    v.dataset.loaded = '1';
  };
  const preload = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          attach(entry.target as HTMLVideoElement);
          preload.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '400px 0px' },
  );
  const playback = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const v = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          attach(v);
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      }
    },
    { threshold: 0.45 },
  );
  videos.forEach((v) => {
    preload.observe(v);
    playback.observe(v);
  });
}

/* work section background takes the hovered project's faded colour */
const scene = document.querySelector<HTMLElement>('[data-scene]');
if (scene) {
  const reset = () => scene.style.setProperty('--scene-wash', 'var(--color-paper)');
  scene.querySelectorAll<HTMLElement>('[data-wash]').forEach((row) => {
    row.addEventListener('mouseenter', () => scene.style.setProperty('--scene-wash', row.dataset.wash ?? ''));
    row.addEventListener('mouseleave', reset);
  });
}
