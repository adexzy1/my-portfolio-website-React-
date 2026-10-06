export type Stop = {
  place: string;
  role: string;
  period: string;
  note: string;
};

/** "My route here", oldest first. */
export const route: Stop[] = [
  { place: 'One Purse Inc.', role: 'Frontend Engineer', period: '2022', note: 'Remote, US. Next.js e-commerce and a live-bidding auction marketplace.' },
  { place: 'Fountain of Hope', role: 'Frontend Engineer, volunteer', period: '2022 — now', note: 'Event registration and reporting for 1,000+ participants per event.' },
  { place: 'Stransact', role: 'Full-Stack Engineer', period: '2022 — now', note: 'RSM International, Lagos. Lead engineer across iPaySuite, NRS Compliance, TimeX and GridCore; 130+ PRs merged as maintainer.' },
];

export const education = [
  { title: 'BSc Accounting', org: 'University of Ilorin', year: '2021' },
  { title: 'MSc Information Technology', org: 'Miva Open University', year: 'expected 2026' },
];
