---
# Product name as it appears on the home screen.
name: "TimeXP"

# One sentence, max ~90 characters, what it does and for whom.
tagline: "Clock-in, timesheets, leave and expense claims for teams, with approvals built in."

# Display order among the iOS apps. 1 = first.
order: 1

# Keep true until the brief and screenshots are complete.
draft: false

# App Store category or the closest fit: Finance, Productivity, Health & Fitness, Utilities…
category: "Business"

# One of: "App Store" | "TestFlight" | "Private beta" | "In development"
status: "App Store"

# Year shipped or started, e.g. "2025" or "2024 — 2025"
year: "2024 — 2026"

# e.g. ["iOS 17+", "iPadOS"] or ["iOS 16+"]
platforms: ["iOS 15+", "iPadOS"]

# e.g. "Solo developer, design to App Store submission"
role: "iOS developer in a team"

# Frameworks and services actually used, most important first. Max ~8.
stack: ["SwiftUI", "Swift Concurrency", "Combine", "Swift Charts", "AVFoundation", "PhotosUI", "Keychain Services"]

# 2 to 3 sentences: the problem, who uses it, what makes it worth showing.
summary: "TimeXP is the mobile side of a company time and HR system: staff clock in by scanning the office QR code, log hours against projects, request leave and claim expenses, and approvers review time, leave and expenses in the same app. It is live on the App Store for iPhone and iPad back to iOS 15. The latest version reorganises it around a Today screen and five tabs, so each day's tasks are a tap away."

# 3 to 4 bullets. Each one a concrete engineering decision or result, not a feature list.
highlights:
  - "A @Lenient property-wrapper decoding layer absorbs the API's inconsistent types (\"1500.00\", 1500, null, PHP's [] for an empty map) and decodes lists item by item, so one malformed record no longer blanks a screen."
  - "Targets iOS 15 while using Swift Charts, MultiDatePicker and PhotosPicker on iOS 16+, each with a hand-built fallback for older devices."
  - "Every list shares one loading model: placeholder rows on first load, inline errors with retry instead of alerts, and a single-flight helper that merges overlapping requests from pull-to-refresh and navigation."
  - "A DEBUG-only demo mode injects a mock URLProtocol with deliberately messy fixtures, failure scenarios and launch routes, used to check every screen and error state in the simulator."

# Only the links that exist. Remove the others.
links:
  appStore: "https://apps.apple.com/ng/app/time-x/id6748143199"

# The app's primary brand colour as hex, taken from the icon or the primary button.
accent: "#27AE60"

# Relative path to the icon file beside this brief.
icon: "./icon.png"

# Optional. A silent looping demo recording. The first screenshot below is its poster frame.
video: "/media/apps/timexp.mp4"

# 3 to 4 screenshots in the order they should appear.
screenshots:
  - src: "./01-home.png"
    alt: "Today screen with the user's clock-in status and time at work, this week's logged hours as a bar per day, and shortcuts to log time, request leave or claim an expense."
    caption: "Today"
  - src: "./02-timesheet.png"
    alt: "This week's timesheet: 15 hours logged with a billable and non-billable split, counts of draft and rejected entries, a Submit 3 drafts button, and the days that have entries."
    caption: "Timesheet"
  - src: "./03-history.png"
    alt: "Time history: a bar chart of billable and non-billable hours for each month of 2026, above approved entries grouped by month."
    caption: "History"
  - src: "./04-leave.png"
    alt: "Leave: 14 of 20 days available shown with a progress ring, allowance by leave type, and upcoming requests marked pending and approved."
    caption: "Leave"
---
