const faqItems = [
  {
    question: 'What can SecurePal help with?',
    answer:
      'SecurePal works across managed IT support, cybersecurity, Microsoft 365 and cloud, and practical AI automation for Australian businesses.',
  },
  {
    question: 'Do you publish fixed package prices?',
    answer:
      'Pricing depends on the agreed scope. A proposal confirms included services, responsibilities, service arrangements, third-party costs, and any usage or additional-work charges before you proceed.',
  },
  {
    question: 'Is the cybersecurity health check a formal audit?',
    answer:
      'No. It is a self-check for general awareness. It does not test or verify controls and is not a formal audit, certification, or compliance assessment.',
  },
  {
    question: 'Are the AI demonstrations live services?',
    answer:
      'No. They are interactive examples using synthetic information and do not connect to a phone system, customer records, or a live AI service.',
  },
  {
    question: 'How is AI information handling agreed?',
    answer:
      'Before implementation, the proposed platform, information processed, access, retention, call recording or transcription, and human review arrangements should be confirmed for the specific workflow.',
  },
];

export default function HomepageFaq() {
  return (
    <section
      aria-labelledby="homepage-faq-title"
      className="bg-white px-4 py-16 md:py-24"
    >
      <div className="container grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div>
          <p className="text-sm font-semibold text-primary">
            Before you get in touch
          </p>
          <h2
            id="homepage-faq-title"
            className="mt-3 max-w-md text-3xl font-bold tracking-tight text-navy sm:text-4xl"
          >
            A few useful answers
          </h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {faqItems.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-heading font-bold text-navy marker:hidden focus-visible:rounded-sm">
                {question}
                <span
                  aria-hidden="true"
                  className="text-xl font-normal text-primary transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-1 pt-3 text-sm leading-6 text-muted-foreground">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
