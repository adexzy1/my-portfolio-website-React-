---
title: "GridCore"
order: 1
featured: true
kind: "Payments platform"
period: "2026 rewrite"
tagline: "Prepaid electricity vending, wallets and settlements"
pitch: "I led the ground-up Go rewrite of a prepaid-electricity payments platform: fourteen bounded contexts, a double-entry ledger, hardware token vending, and a four-app React monorepo."
highlights:
  - "Led the Go rewrite: ~94k lines, 14 bounded contexts, 58 tables, a vend-order state machine and an STS hardware-security-module layer with per-host circuit breakers and failover."
  - "Designed the double-entry ledger: balanced, idempotent journal entries with the trial balance enforced as a standing test. 149 legacy wallets reconciled to the kobo against Paystack."
  - "Rebuilt four frontends as one Turborepo monorepo (~35k lines of TypeScript): operator and merchant console, white-label customer portal, Astro marketing site."
role: "Lead engineer, backend and frontend"
stack: ["Go", "PostgreSQL", "Redis", "River", "React", "TypeScript", "Turborepo", "shadcn/ui"]
scale: "160+ API operations · 499 Go tests · 100+ Vitest tests"
status: "Production"
url: "https://gridcoreinc.com"
urlLabel: "gridcoreinc.com"
cover: "./cover.png"
video: "/media/work/gridcore.mp4"
coverAlt: "GridCore operator console showing meter vending and wallet balances"
headline: "Rewriting a payments platform in Go, ledger first."
meta: "Lead engineer · Go, PostgreSQL, React"
stat:
  value: "94k lines"
  caption: "of Go across 14 bounded contexts, with a double-entry ledger whose trial balance is a standing test"
  detail: "499 tests · 160+ API operations"
accent: "#000248"
wash: "color-mix(in srgb, #e0e04c 11%, #fafaf8)"
---
