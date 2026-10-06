export type SkillGroup = { label: string; items: string };

export const toolbox: SkillGroup[] = [
  { label: 'Frontend', items: 'React, TypeScript, Next.js, Astro, Inertia, Tailwind, shadcn/ui, TanStack Query, Storybook' },
  { label: 'Mobile', items: 'SwiftUI, iOS' },
  { label: 'Backend', items: 'Go (chi, GORM, River), Laravel, NestJS, REST and OpenAPI, OAuth2, BullMQ' },
  { label: 'Data', items: 'PostgreSQL, MySQL, schema design, double-entry ledgers' },
  { label: 'Fintech', items: 'E-invoicing and RSA signing, Paystack, Monnify, multi-currency, withholding tax, maker-checker, STS vending' },
  { label: 'Quality', items: 'Pest, Go integration tests, property-based testing, Vitest, RTL, Sentry, GitHub Actions' },
];
