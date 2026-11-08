import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | SecurePal',
  description:
    'Read our terms and conditions to understand how SecurePal collects, uses, and protects your data.',
};

export default function TermsConditions() {
  return (
    <main className="container mx-auto px-6 py-16 md:px-12 lg:px-24">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-primary">
          Terms & Conditions
        </h1>

        <p className="text-muted-foreground mb-6">
          Welcome to{' '}
          <span className="text-primary text-2xl font-bold">SecurePal</span> .
          Your privacy is critically important to us. This Terms & Conditions
          outlines how we collect, use, disclose, and safeguard your information
          when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Terms</h2>
        <p className="text-muted-foreground mb-4">
          By accessing or using our website, you agree to be bound by these
          terms and conditions. If you do not agree to these terms and
          conditions, please do not access or use our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Privacy Policy</h2>
        <p className="text-muted-foreground mb-4">
          Please read our Privacy Policy for more information about how we
          collect, use, disclose, and safeguard your information when you visit
          our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Limitations</h2>
        <p className="text-muted-foreground mb-4">
          Our website may contain links to third-party sites. We are not
          responsible for their privacy practices.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Changes to This Policy
        </h2>
        <p className="text-muted-foreground mb-4">
          We may update this policy periodically. Any changes will be posted on
          this page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
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
