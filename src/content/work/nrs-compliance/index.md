---
title: "NRS Compliance"
order: 3
featured: true
kind: "Tax compliance infrastructure"
tagline: "Multi-tenant e-invoicing for Nigeria's FIRS mandate"
pitch: "I founded and architected the access-point platform that signs, encrypts and submits invoices to the tax authority, with three pluggable drivers and Xero, Zoho and QuickBooks integrations."
highlights:
  - "Sole author of the original codebase (110 commits, 326 files) with clean-architecture layering and tool-enforced dependency boundaries."
  - "Built the cryptographic core: RSA SHA-256 signing with deterministic canonicalisation, spec-compliant QR encryption and invoice reference number generation."
  - "Three pluggable submission drivers behind one contract, plus Xero, Zoho Books and QuickBooks integrations with OAuth2 and signature-verified webhooks."
role: "Founding engineer and architect"
stack: ["Laravel 12", "React 19", "Inertia", "PostgreSQL", "Pest"]
scale: "81 tests incl. 14 property-based suites · 3 drivers · 3 accounting integrations"
status: "Production, private"
specs:
  - "RSA/SHA-256 signing · deterministic canonical payload"
  - "IRN generation · QR encryption to the FIRS spec"
  - "drivers: direct API · SmartVAT · in-house gateway"
  - "Xero · Zoho Books · QuickBooks via OAuth2 + HMAC webhooks"
  - "idempotency keys · append-only audit ledger"
  - "exponential-backoff retries · forward-only status transitions"
  - "81 tests · 14 property-based suites"
headline: "Compliance infrastructure for Nigeria's e-invoicing mandate."
meta: "Founding engineer · Laravel, React, PostgreSQL"
stat:
  value: "14 suites"
  caption: "of property-based tests over signing, encryption and idempotency, in a codebase I authored solo"
  detail: "81 tests · 3 submission drivers"
accent: "#2258e5"
---
