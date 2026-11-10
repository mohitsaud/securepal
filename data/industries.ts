export interface IndustryProfile {
  slug: string;
  name: string;
  intro: string;
  challenges: string[];
  opportunities: string[];
  services: { label: string; href: string }[];
}

export const industryProfiles: IndustryProfile[] = [
  {
    slug: 'accounting-firms',
    name: 'Accounting firms',
    intro:
      'Technology support for teams working with sensitive documents, client deadlines, and cloud-based accounting systems.',
    challenges: [
      'Keeping client documents organised and access appropriately controlled.',
      'Reducing time spent sorting routine enquiries and reminders.',
      'Keeping Microsoft 365, devices, and backups maintained.',
    ],
    opportunities: [
      'Review document intake and classification with staff approval.',
      'Prepare client reminders and enquiry follow-ups for review.',
      'Support secure Microsoft 365 and business continuity planning.',
    ],
    services: [
      { label: 'Managed IT support', href: '/services/it-support' },
      { label: 'Cybersecurity', href: '/services/cybersecurity' },
      { label: 'Microsoft 365 and cloud', href: '/services/cloud-solutions' },
    ],
  },
  {
    slug: 'mortgage-brokers',
    name: 'Mortgage brokers',
    intro:
      'Practical IT and workflow support for mortgage teams handling new leads, appointments, and customer documents.',
    challenges: [
      'Capturing new enquiries and arranging timely callbacks.',
      'Coordinating appointment and document checklist reminders.',
      'Connecting tools without compromising customer privacy.',
    ],
    opportunities: [
      'Capture lead details and preferred callback times.',
      'Prepare approved document checklist reminders for staff review.',
      'Connect suitable enquiry workflows to existing systems after a feasibility review.',
    ],
    services: [
      { label: 'Managed IT support', href: '/services/it-support' },
      { label: 'Cybersecurity', href: '/services/cybersecurity' },
      { label: 'AI solutions', href: '/services/ai-solutions' },
    ],
  },
  {
    slug: 'conveyancers',
    name: 'Conveyancers',
    intro:
      'Support for conveyancing teams coordinating client intake, documents, and matter-related enquiries.',
    challenges: [
      'Routing status enquiries to the right team member.',
      'Tracking document collection and appointment requests.',
      'Protecting access to client information across business systems.',
    ],
    opportunities: [
      'Prepare intake details and document checklists for staff review.',
      'Route matter-status questions without providing legal advice.',
      'Improve account, device, and file-sharing security.',
    ],
    services: [
      { label: 'Cybersecurity', href: '/services/cybersecurity' },
      { label: 'Microsoft 365 and cloud', href: '/services/cloud-solutions' },
      { label: 'AI solutions', href: '/services/ai-solutions' },
    ],
  },
  {
    slug: 'professional-services',
    name: 'Professional services',
    intro:
      'A technology partner for professional teams balancing client service, staff collaboration, and business information.',
    challenges: [
      'Supporting staff across devices, accounts, and locations.',
      'Managing repeat enquiries and administrative follow-up.',
      'Planning technology changes without disrupting client work.',
    ],
    opportunities: [
      'Improve helpdesk, onboarding, and account management processes.',
      'Explore approved knowledge search and enquiry automation.',
      'Plan practical cloud, security, and infrastructure improvements.',
    ],
    services: [
      { label: 'Managed IT support', href: '/services/it-support' },
      { label: 'IT strategy', href: '/services/infrastructure' },
      { label: 'AI solutions', href: '/services/ai-solutions' },
    ],
  },
  {
    slug: 'education-providers',
    name: 'Education providers',
    intro:
      'Technology and workflow support for education and consulting teams responding to learner and client enquiries.',
    challenges: [
      'Answering recurring questions about courses and services.',
      'Coordinating appointments, information requests, and follow-ups.',
      'Keeping staff collaboration and shared files organised.',
    ],
    opportunities: [
      'Share approved course information through a website assistant.',
      'Prepare enquiry details and follow-ups for staff.',
      'Support Microsoft 365, endpoint, and backup requirements.',
    ],
    services: [
      { label: 'Managed IT support', href: '/services/it-support' },
      { label: 'Microsoft 365 and cloud', href: '/services/cloud-solutions' },
      { label: 'AI solutions', href: '/services/ai-solutions' },
    ],
  },
  {
    slug: 'retail-hospitality',
    name: 'Retail and hospitality',
    intro:
      'Technology support for customer-facing teams that rely on dependable systems, clear communications, and timely service.',
    challenges: [
      'Keeping business systems and staff devices ready for busy periods.',
      'Handling routine customer questions and booking requests.',
      'Maintaining network, Wi-Fi, and backup arrangements.',
    ],
    opportunities: [
      'Answer common questions using business-approved information.',
      'Capture booking or service requests for staff confirmation.',
      'Review network, infrastructure, and continuity requirements.',
    ],
    services: [
      { label: 'Managed IT support', href: '/services/it-support' },
      { label: 'Network and infrastructure', href: '/services/infrastructure' },
      { label: 'Business continuity', href: '/services/data-backup' },
    ],
  },
  {
    slug: 'small-business-offices',
    name: 'Small business offices',
    intro:
      'Joined-up IT, cloud, and security support for small teams that need their technology to work without adding unnecessary complexity.',
    challenges: [
      'Getting prompt help with day-to-day user and device issues.',
      'Keeping business email, accounts, and backups in good order.',
      'Planning upgrades and technology spending with a clear scope.',
    ],
    opportunities: [
      'Set up consistent support, onboarding, and device processes.',
      'Review Microsoft 365 security and recovery arrangements.',
      'Identify repetitive tasks that may be suitable for automation.',
    ],
    services: [
      { label: 'Managed IT support', href: '/services/it-support' },
      { label: 'Cybersecurity', href: '/services/cybersecurity' },
      { label: 'Pricing and packages', href: '/pricing' },
    ],
  },
];
