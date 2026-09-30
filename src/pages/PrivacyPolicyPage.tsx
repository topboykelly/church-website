import { Link } from "react-router-dom";
import { siteConfig } from "../lib/siteConfig";

export default function PrivacyPolicyPage() {
  return (
    <section
      data-nav-theme="light"
      className="pt-40 pb-20 px-6 md:px-12 max-w-3xl mx-auto min-h-screen"
    >
      <p className="text-coral-500 text-xs tracking-wide uppercase mb-3">
        Your Privacy
      </p>
      <h1 className="text-3xl md:text-4xl font-medium mb-6">Privacy Policy</h1>
      <div className="space-y-4 text-charcoal leading-relaxed text-sm">
        <p>
          {siteConfig.churchName} respects your privacy. This site collects
          minimal information — mainly anonymous usage data through standard
          hosting analytics when you visit our pages.
        </p>
        <p>
          When you contact us or register through linked services, any personal
          information you provide is used only to respond to your request or
          manage church-related services.
        </p>
        <p>
          We do not sell your personal information. Third-party services we link
          to (such as YouTube, social media, or registration platforms) have
          their own privacy policies.
        </p>
        <p>
          Questions? Email us at{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-coral-500 hover:underline"
          >
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </div>
      <Link
        to="/"
        className="inline-block mt-10 border border-charcoal-dark/20 hover:bg-charcoal-dark/5 transition-colors rounded-full px-6 py-3 text-sm font-medium"
      >
        Back to Home
      </Link>
    </section>
  );
}
