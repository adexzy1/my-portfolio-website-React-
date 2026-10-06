---
# Product name as it appears on the home screen.
name: "iPaySuite"

# One sentence, max ~90 characters, what it does and for whom.
tagline: "Payslips, pay history and a PAYE tax estimator for employees on iPaySuite payroll."

# Display order among the iOS apps. 1 = first.
order: 2

# Keep true until the brief and screenshots are complete.
draft: false

# App Store category or the closest fit: Finance, Productivity, Health & Fitness, Utilities…
category: "Finance"

# One of: "App Store" | "TestFlight" | "Private beta" | "In development"
status: "App Store"

# Year shipped or started, e.g. "2025" or "2024 — 2025"
year: "2025 — 2026"

# e.g. ["iOS 17+", "iPadOS"] or ["iOS 16+"]
platforms: ["iOS 16.6+", "iPadOS"]

# e.g. "Solo developer, design to App Store submission"
role: "iOS developer in a team"

# Frameworks and services actually used, most important first. Max ~8.
stack: ["SwiftUI", "NavigationStack", "Swift Concurrency", "WebKit", "Keychain Services"]

# 2 to 3 sentences: the problem, who uses it, what makes it worth showing.
summary: "iPaySuite puts an employee's payroll on their phone: payslips, one-off and recurring payments and deductions, accruals, arrears and absences, plus a PAYE estimator that accounts for Nigerian reliefs such as consolidated relief, pension and NHF. It is live on the App Store for staff of companies that run payroll on iPaySuite."

# 3 to 4 bullets. Each one a concrete engineering decision or result, not a feature list.
highlights:
  - "Session handling that tells a real expiry from a flaky endpoint: on a 401 the client checks the token against /user before signing anyone out, retries once for freshly issued tokens, and reports access denied when only one endpoint refuses."
  - "Typed navigation: an AppRoute enum drives a single NavigationStack path, which also lets demo builds open any screen directly at launch."
  - "API models decode through a @Lenient property wrapper, with only record identifiers kept strict, and lists load through a shared ListLoader with a single-flight guard, so mixed API types and overlapping refreshes don't break screens."
  - "All screens read colours from one ThemePalette, so the brand palette switches with a single line."

# Only the links that exist. Remove the others.
links:
  appStore: "https://apps.apple.com/us/app/ipaysuite/id1588235952"

# The app's primary brand colour as hex, taken from the icon or the primary button.
accent: "#891A3F"

# Relative path to the icon file beside this brief.
icon: "./icon.png"

# Optional. A silent looping demo recording. The first screenshot below is its poster frame.
video: "/media/apps/ipaysuite.mp4"

# 3 to 4 screenshots in the order they should appear.
screenshots:
  - src: "./01-home.png"
    alt: "Home: latest net pay, gross and net pay totals for the year, shortcuts to payslips, payments, deductions, the tax calculator and more, and recent payslips."
    caption: "Home"
  - src: "./02-payslips.png"
    alt: "Payslips grouped by year, each showing the month, gross pay and net pay."
    caption: "Payslips"
  - src: "./03-calculator.png"
    alt: "Tax calculator: choose a monthly or yearly period to estimate PAYE."
    caption: "Tax calculator"
  - src: "./04-profile.png"
    alt: "Profile: gross salary, staff number, and employment and personal details."
    caption: "Profile"
---
