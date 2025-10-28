import type { Metadata } from "next"
import Link from "next/link"
import ParticleBackground from "@/components/particle-background"

export const metadata: Metadata = {
  title: "Privacy Policy | Agentic Intelligence Lisbon",
  description: "Privacy Policy for Agentic Intelligence Lisbon community website",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-16">
      <ParticleBackground className="opacity-30" particleCount={30} />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-sm rounded-xl p-6 md:p-10 shadow-lg border border-border/50">
          <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-8 text-center">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8 text-center">Last Updated: April 16, 2024</p>

          <div className="prose prose-lg max-w-none dark:prose-invert font-roboto">
            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to Agentic Intelligence Lisbon ("we," "our," or "us"). We are committed to protecting your privacy
              and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website, participate in our events, or engage with our community.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our website and services, you acknowledge
              that you have read, understood, and agree to be bound by the terms of this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium font-poppins mt-6 mb-3">2.1 Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li>
                <strong>Contact Information:</strong> Name, email address, phone number, and mailing address.
              </li>
              <li>
                <strong>Account Information:</strong> Username, password, and profile information.
              </li>
              <li>
                <strong>Professional Information:</strong> Job title, company, professional background, skills, and
                expertise.
              </li>
              <li>
                <strong>Event Information:</strong> Registration details, attendance records, and feedback for events
                you participate in.
              </li>
              <li>
                <strong>Communications:</strong> Messages, comments, and other content you share on our platform.
              </li>
              <li>
                <strong>Payment Information:</strong> Credit card details, billing address, and other payment details
                (processed by our secure third-party payment processors).
              </li>
            </ul>

            <h3 className="text-xl font-medium font-poppins mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information, including:</p>
            <ul>
              <li>
                <strong>Device Information:</strong> IP address, browser type, operating system, device type, and unique
                device identifiers.
              </li>
              <li>
                <strong>Usage Information:</strong> Pages visited, time spent on pages, links clicked, and other actions
                taken on our website.
              </li>
              <li>
                <strong>Location Information:</strong> General location based on IP address.
              </li>
              <li>
                <strong>Cookies and Similar Technologies:</strong> Information collected through cookies, web beacons,
                and similar technologies (see Section 7 for more details).
              </li>
            </ul>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing, maintaining, and improving our website and services</li>
              <li>Processing event registrations and managing event participation</li>
              <li>Creating and managing your account</li>
              <li>Facilitating community interactions and discussions</li>
              <li>Sending you important information, updates, and notifications</li>
              <li>Responding to your inquiries, comments, or concerns</li>
              <li>Sending newsletters, marketing communications, and promotional materials</li>
              <li>Analyzing usage patterns and improving user experience</li>
              <li>Protecting our rights, property, or safety, and that of our users</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">4. How We Share Your Information</h2>
            <p>We may share your information with the following parties:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who provide services on our behalf, such as
                hosting, payment processing, email delivery, and analytics.
              </li>
              <li>
                <strong>Event Partners:</strong> Organizations or individuals who collaborate with us on events or
                initiatives, but only with your consent.
              </li>
              <li>
                <strong>Community Members:</strong> Information you choose to share publicly on our platform will be
                visible to other community members.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, where
                your information may be transferred as a business asset.
              </li>
            </ul>
            <p>
              We do not sell your personal information to third parties for their marketing purposes without your
              explicit consent.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">5. Your Rights and Choices</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul>
              <li>
                <strong>Access:</strong> You can request access to the personal information we hold about you.
              </li>
              <li>
                <strong>Correction:</strong> You can request that we correct inaccurate or incomplete information.
              </li>
              <li>
                <strong>Deletion:</strong> You can request that we delete your personal information in certain
                circumstances.
              </li>
              <li>
                <strong>Restriction:</strong> You can request that we restrict the processing of your information.
              </li>
              <li>
                <strong>Data Portability:</strong> You can request a copy of your information in a structured, commonly
                used, and machine-readable format.
              </li>
              <li>
                <strong>Objection:</strong> You can object to our processing of your information in certain
                circumstances.
              </li>
              <li>
                <strong>Withdrawal of Consent:</strong> You can withdraw your consent at any time where we rely on
                consent to process your information.
              </li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in Section 10. We will respond
              to your request within the timeframe required by applicable law.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">6. Data Retention and Security</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, accidental loss, alteration, or destruction. However, no method of
              transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
              security.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing activities and
              to improve your experience on our website. Cookies are small text files that are stored on your device
              when you visit a website.
            </p>
            <p>We use the following types of cookies:</p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> Necessary for the website to function properly.
              </li>
              <li>
                <strong>Analytical/Performance Cookies:</strong> Help us understand how visitors interact with our
                website.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Allow the website to remember choices you make and provide
                enhanced features.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> Record your visit to our website, the pages you visit, and the links
                you follow.
              </li>
            </ul>
            <p>
              You can control cookies through your browser settings. However, disabling certain cookies may limit your
              ability to use some features of our website.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">8. Children's Privacy</h2>
            <p>
              Our website and services are not directed to individuals under the age of 16. We do not knowingly collect
              personal information from children. If you are a parent or guardian and believe that your child has
              provided us with personal information, please contact us, and we will take steps to delete such
              information.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than the country in which you
              reside. These countries may have data protection laws that are different from the laws of your country.
            </p>
            <p>
              When we transfer your information to other countries, we will take appropriate measures to ensure that
              your information remains protected in accordance with this Privacy Policy and applicable law.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal
              requirements. We will notify you of any material changes by posting the updated Privacy Policy on our
              website and updating the "Last Updated" date at the top of this page.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use,
              and protect your information.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">11. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
              please contact us at:
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:privacy@agenticlisbon.ai" className="text-primary hover:underline">
                privacy@agenticlisbon.ai
              </a>
            </p>
            <p>
              <strong>Address:</strong> Agentic Intelligence Lisbon, Rua da Prata 80, 1100-420 Lisboa, Portugal
            </p>
            <p className="mt-8">
              <Link href="/" className="text-primary hover:underline">
                ← Back to Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
