export const profile = {
  name: 'John Adekoya',
  initials: 'ja',
  role: 'Full-Stack Engineer',
  headline: ['Building the software ', 'money moves through.'] as const,
  lead: {
    before: 'Full-Stack Engineer at ',
    strong: 'Stransact (RSM International)',
    after: '.',
    line: 'I turn payroll, payments and tax rules into systems people can trust.',
  },
  subline: 'Five years across iPaySuite, GridCore, NRS Compliance and TimeX. BSc Accounting.',
  location: 'Lagos, Nigeria',
  timezone: 'Africa/Lagos',
  remote: 'Remote-first',
  availability: 'Open to senior frontend and full-stack roles, remote or Lagos.',
  email: 'adebisimartins3@gmail.com',
  resume: '/Adekoya_John_Resume.pdf',
  site: 'https://johns-portfolio-bice.vercel.app',
  description:
    'John Adekoya is a full-stack engineer in Lagos building payroll, payments, tax-compliance and prepaid-electricity platforms with React, TypeScript, Laravel, Go and SwiftUI.',
  socials: [
    { label: 'LinkedIn', handle: 'john-adekoya', href: 'https://www.linkedin.com/in/john-adekoya/' },
    { label: 'GitHub', handle: 'adexzy1', href: 'https://github.com/adexzy1' },
    { label: 'X', handle: '@iamthebravo', href: 'https://twitter.com/iamthebravo' },
  ],
  about: {
    eyebrow: 'Engineer at work. Accountant by training.',
    title: ['Lagos roots.', 'A finance route.'],
    paragraphs: [
      'I’m John. I studied accounting, then spent five years building the software that runs payroll, invoicing, tax filings and prepaid electricity for Nigerian businesses. The degree is not decorative: I understand the ledger I am writing to.',
      'I own features from the database schema and the API contract to the React screen, and I like boundaries you can lint, tests that pin down invariants, and numbers that reconcile to the kobo.',
    ],
  },
};
