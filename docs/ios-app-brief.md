# iOS app brief

Instructions for the Claude Code session on the Mac.

## 0. Get the code onto the Mac through the tunnel

Nothing is on GitHub yet, so the code comes straight from John's laptop
through an ngrok tunnel. John sends one https URL that looks like
`https://xxxx.ngrok-free.app`. Every request to it needs the header
`ngrok-skip-browser-warning: 1`, or ngrok answers with an HTML warning page
instead of the file.

In a terminal on the Mac:

```bash
URL="https://xxxx.ngrok-free.app"        # the URL John sends
mkdir -p ~/portfolio && cd ~/portfolio
curl -fL -H "ngrok-skip-browser-warning: 1" "$URL/portfolio-src.tar.gz" -o portfolio-src.tar.gz
tar xzf portfolio-src.tar.gz && rm portfolio-src.tar.gz
corepack enable                           # Node 22+ required; pnpm comes through corepack
corepack pnpm install
```

Then start Claude Code inside `~/portfolio` and open with a prompt like:

> Read `docs/ios-app-brief.md` and follow it for the SwiftUI app at
> `~/path/to/AppOne.xcodeproj` and the one at `~/path/to/AppTwo.xcodeproj`.
> Do not invent any facts about the apps; read them from the Xcode projects.
> When everything builds, send the result back as described in section 6 using
> `https://xxxx.ngrok-free.app`.

There is no git remote to push to. Do not try to push, and do not commit; the
result travels back as an archive (section 6).

Claude can run the `xcrun simctl` commands below itself, but Xcode must be
installed and each app must build in the simulator first.

The portfolio renders each iOS app from one folder:

```
src/content/apps/<slug>/
├── index.md        # the brief (frontmatter below)
├── icon.png        # 1024×1024 app icon, square corners
├── 01-home.png     # simulator screenshots, 3 to 4 of them
├── 02-<screen>.png
├── 03-<screen>.png
└── 04-<screen>.png # optional
```

Two folders already exist as blank drafts: `app-one` and `app-two`. Rename each
folder to the app's slug (lowercase, kebab-case, e.g. `ledgerly`), fill the
brief, drop the images beside it, and set `draft: false`. Delete `app-one` and
`app-two` once the real folders exist. Nothing else on the site needs to change:
the "Apps" link in the navigation and the iOS section appear automatically once
at least one app is not a draft.

## 1. The brief (`index.md`)

Copy this exactly. Every field is explained in the comment above it. Leave a
field out if it does not apply; do not invent values.

```markdown
---
# Product name as it appears on the home screen.
name: ""

# One sentence, max ~90 characters, what it does and for whom.
# Example shape: "Offline-first expense tracker for freelancers in Nigeria."
tagline: ""

# Display order among the iOS apps. 1 = first.
order: 1

# Keep true until the brief and screenshots are complete.
draft: true

# App Store category or the closest fit: Finance, Productivity, Health & Fitness, Utilities…
category: ""

# One of: "App Store" | "TestFlight" | "Private beta" | "In development"
status: ""

# Year shipped or started, e.g. "2025" or "2024 — 2025"
year: ""

# e.g. ["iOS 17+", "iPadOS"] or ["iOS 16+"]
platforms: []

# e.g. "Solo developer, design to App Store submission"
role: ""

# Frameworks and services actually used, most important first. Max ~8.
# e.g. ["SwiftUI", "SwiftData", "Combine", "CloudKit", "StoreKit 2", "WidgetKit", "XCTest"]
stack: []

# 2 to 3 sentences: the problem, who uses it, what makes it worth showing.
summary: ""

# 3 to 4 bullets. Each one a concrete engineering decision or result, not a feature list.
# Good: "Offline-first with SwiftData; a background sync engine reconciles conflicts last-writer-wins per field."
# Weak: "Users can add expenses."
highlights:
  - ""
  - ""
  - ""

# Optional hard numbers. Only include what is true and checkable.
# e.g. { value: "1.2k", label: "downloads" }, { value: "180", label: "unit tests" }, { value: "4.8★", label: "App Store" }
metrics: []

# Only the links that exist. Remove the others.
links:
  appStore: ""
  testflight: ""
  github: ""
  website: ""

# The app's primary brand colour as hex, taken from the icon or the primary button.
# A faded version of it tints the card behind the phone.
accent: "#2258e5"

# Relative path to the icon file beside this brief.
icon: "./icon.png"

# Optional. A silent looping demo recording (see section 4). The MP4 lives under public/,
# not beside this file, and the first screenshot below becomes its poster frame.
# video: "/media/apps/<slug>.mp4"

# 3 to 4 screenshots in the order they should appear. The first one is shown in the
# phone on the card and is also the poster frame for the optional video.
# alt = what a screen reader should say. caption = short label, optional.
screenshots:
  - src: "./01-home.png"
    alt: ""
    caption: "Home"
  - src: "./02-detail.png"
    alt: ""
    caption: ""
  - src: "./03-flow.png"
    alt: ""
    caption: ""
---
```

Pull the facts from the Xcode project, not from memory: `Package.swift` or the
project's package dependencies for the stack, the `Info.plist` / target settings
for the minimum iOS version, the test target for test counts, App Store Connect
for downloads and rating if applicable.

## 2. Screenshots

Capture from the simulator, not a physical device, so the status bar can be
cleaned. The site adds the phone frame and dynamic island, so export the raw
screen only.

```bash
# 1. Boot a 6.3" or 6.1" device and launch the app from Xcode on it
xcrun simctl boot "iPhone 16 Pro"

# 2. Light appearance (the site is light paper); add a dark variant of the home screen if the app supports it
xcrun simctl ui booted appearance light

# 3. Clean status bar: 9:41, full battery, full signal
xcrun simctl status_bar booted override --time "9:41" --batteryState charged --batteryLevel 100 \
  --dataNetwork wifi --wifiMode active --wifiBars 3 --cellularMode active --cellularBars 4

# 4. Navigate to each screen, then capture at native resolution (do not downscale)
xcrun simctl io booted screenshot --type=png ~/Desktop/<slug>/01-home.png
xcrun simctl io booted screenshot --type=png ~/Desktop/<slug>/02-<screen>.png
xcrun simctl io booted screenshot --type=png ~/Desktop/<slug>/03-<screen>.png

# 5. Reset the status bar when done
xcrun simctl status_bar booted clear
```

Which screens, in order:

| File | What to show |
|---|---|
| `01-home.png` | The main screen, populated with realistic demo data. This is the one people see first. |
| `02-<screen>.png` | The core flow or detail view that proves the app does its job. |
| `03-<screen>.png` | A second distinct capability: a chart, a form, a sync state, a widget. |
| `04-<screen>.png` | Optional. Onboarding, settings or an iPad layout if it exists. |

Rules for every capture:

- Portrait, PNG, native resolution (1206×2622 for iPhone 16 Pro, 1179×2556 for 15 Pro). Keep them all from the same device.
- Realistic demo data. No empty states, no `Lorem ipsum`, no real customer or personal data, no Xcode debug overlays or alerts.
- The same appearance mode across the set unless a dark variant is deliberately included.
- Do not add a device bezel, shadow or background. The site does that.

## 3. Icon

Export the 1024×1024 PNG from the asset catalog (`AppIcon` → the App Store
slot), square corners, no transparency. Save it as `icon.png` beside the brief.
The site rounds the corners.

## 4. Optional: short demo video

The site plays silent, looping recordings inside the phone frame, the same way
michaeltsirakis.com does. If the app has a flow worth seeing in motion, record
8 to 12 seconds with no audio, portrait, same device and appearance as the
screenshots, starting on the same screen as `01-home.png` so the poster matches.

```bash
xcrun simctl io booted recordVideo --codec h264 ~/Desktop/<slug>/demo.mp4
# then shrink it for the web (H.264, no audio, ~2 MB):
ffmpeg -i ~/Desktop/<slug>/demo.mp4 -an -vf "scale=720:-2" -c:v libx264 -crf 28 -preset slow -movflags +faststart public/media/apps/<slug>.mp4
```

Save it as `public/media/apps/<slug>.mp4` and set `video: "/media/apps/<slug>.mp4"`
in the brief.

## 5. Check it builds

```bash
corepack pnpm build
```

The build validates the frontmatter against the schema in
`src/content.config.ts` and fails loudly if a field or an image path is wrong.
Then `corepack pnpm dev`, open http://localhost:4321 and scroll to the iOS
section to see the result. Fix anything that looks off before sending.

## 6. Send it back through the tunnel

Only the app folders and any demo videos travel back; the rest of the repo
already exists on John's laptop.

```bash
cd ~/portfolio
mkdir -p public/media/apps
tar czf ios-apps.tar.gz src/content/apps public/media/apps
curl -fL -H "ngrok-skip-browser-warning: 1" -T ios-apps.tar.gz "$URL/upload/ios-apps.tar.gz"
```

A `201 saved ios-apps.tar.gz` reply means it landed in `snapshot/inbox/` on
John's laptop, where it replaces `src/content/apps` and `public/media/apps`
before the site is built and deployed. If the upload fails, AirDrop the
archive instead.
