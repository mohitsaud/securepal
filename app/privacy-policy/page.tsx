import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | SecurePal',
  description:
    'Read our privacy policy to understand how SecurePal collects, uses, and protects your data.',
};

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-6 py-16 md:px-12 lg:px-24">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-primary">Privacy Policy</h1>

        <p className="text-muted-foreground mb-6">
          Welcome to{' '}
          <span className="text-primary text-2xl font-bold">SecurePal</span> .
          Your privacy is critically important to us. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard your information
          when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="text-muted-foreground mb-4">
          We may collect different types of information to improve our services
          and enhance your experience.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            <strong>Personal Information:</strong> Name, email, phone, address,
            and payment details.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> IP address, browser type,
            device information, and usage patterns.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>To provide and improve our services.</li>
          <li>To process transactions and customer support requests.</li>
          <li>To send important updates and promotional materials.</li>
          <li>To detect security risks and prevent fraud.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          3. Sharing Your Information
        </h2>
        <p className="text-muted-foreground mb-4">
          We do not sell or rent your personal information. However, we may
          share data with:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            <strong>Service Providers:</strong> To help us operate our business.
          </li>
          <li>
            <strong>Legal Compliance:</strong> If required by law or to protect
            our rights.
          </li>
          <li>
            <strong>Business Transfers:</strong> In case of a company merger or
            acquisition.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
        <p className="text-muted-foreground mb-4">
          We implement industry-standard security measures to protect your
          information, but no method is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          5. Your Rights & Choices
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Request access to or correction of your personal information.</li>
          <li>Unsubscribe from marketing emails at any time.</li>
          <li>Request data deletion (subject to legal limitations).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          6. Third-Party Links
        </h2>
        <p className="text-muted-foreground mb-4">
          Our website may contain links to third-party sites. We are not
          responsible for their privacy practices.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          8. Changes to This Policy
        </h2>
        <p className="text-muted-foreground mb-4">
          We may update this policy periodically. Any changes will be posted on
          this page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
        <p className="text-muted-foreground">
          If you have any questions, please contact us at:
        </p>
        <ul className="list-none pl-0 mt-2 text-muted-foreground space-y-4">
          <li>
            📩 <strong>Email:</strong>{' '}
            <Link
              href="mailto:support@securepal.com.au"
              className="text-primary hover:underline"
            >
              support@securepal.com.au
            </Link>
          </li>
          <li>
            📞 <strong>Phone:</strong> +61 (450) 506907, +61 (451) 533354
          </li>
          <li>
            🌍 <strong>Website:</strong>{' '}
            <Link href="/" className="text-primary hover:underline">
              securepal.com.au
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
