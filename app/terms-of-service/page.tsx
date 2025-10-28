import type { Metadata } from "next"
import Link from "next/link"
import ParticleBackground from "@/components/particle-background"

export const metadata: Metadata = {
  title: "Terms of Service | Agentic Intelligence Lisbon",
  description: "Terms of Service for Agentic Intelligence Lisbon community website",
}

export default function TermsOfServicePage() {
  return (
    <main className="relative min-h-screen pt-24 pb-16">
      <ParticleBackground className="opacity-30" particleCount={30} />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-sm rounded-xl p-6 md:p-10 shadow-lg border border-border/50">
          <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-8 text-center">Terms of Service</h1>
          <p className="text-muted-foreground mb-8 text-center">Last Updated: April 16, 2024</p>

          <div className="prose prose-lg max-w-none dark:prose-invert font-roboto">
            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">1. Introduction and Acceptance</h2>
            <p>
              Welcome to Agentic Intelligence Lisbon. These Terms of Service ("Terms") govern your access to and use of
              our website, services, events, and community platform (collectively, the "Services").
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do
              not agree to these Terms, you may not access or use our Services.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. Your continued use of our Services after any
              changes indicates your acceptance of the modified Terms.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">2. User Accounts and Registration</h2>
            <h3 className="text-xl font-medium font-poppins mt-6 mb-3">2.1 Account Creation</h3>
            <p>
              To access certain features of our Services, you may need to create an account. When you create an account,
              you must provide accurate, current, and complete information. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h3 className="text-xl font-medium font-poppins mt-6 mb-3">2.2 Account Responsibilities</h3>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and complete information when creating your account</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly update your account information if it changes</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
              <li>Take responsibility for all activities that occur under your account</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate your account if we suspect unauthorized access or if you
              violate these Terms.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">3. User Conduct and Content</h2>
            <h3 className="text-xl font-medium font-poppins mt-6 mb-3">3.1 Prohibited Activities</h3>
            <p>When using our Services, you agree not to:</p>
            <ul>
              <li>Violate any applicable law, regulation, or these Terms</li>
              <li>Infringe on the rights of others, including intellectual property rights</li>
              <li>
                Post, upload, or share content that is illegal, harmful, threatening, abusive, harassing, defamatory,
                vulgar, obscene, or otherwise objectionable
              </li>
              <li>Impersonate any person or entity or misrepresent your affiliation with a person or entity</li>
              <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
              <li>Attempt to gain unauthorized access to any part of the Services</li>
              <li>Use the Services for any commercial purpose without our prior written consent</li>
              <li>Collect or harvest user data without permission</li>
              <li>Transmit malware, viruses, or other malicious code</li>
              <li>Engage in any activity that could disable, overburden, or impair the Services</li>
            </ul>

            <h3 className="text-xl font-medium font-poppins mt-6 mb-3">3.2 User Content</h3>
            <p>
              You retain ownership of any content you submit, post, or display on or through our Services ("User
              Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to
              use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content in connection
              with providing and promoting our Services.
            </p>
            <p>You represent and warrant that:</p>
            <ul>
              <li>You own or have the necessary rights to your User Content</li>
              <li>Your User Content does not violate the rights of any third party</li>
              <li>Your User Content complies with these Terms and all applicable laws</li>
            </ul>
            <p>
              We reserve the right to remove any User Content that violates these Terms or that we find objectionable
              for any reason, without prior notice.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">4. Intellectual Property Rights</h2>
            <h3 className="text-xl font-medium font-poppins mt-6 mb-3">4.1 Our Intellectual Property</h3>
            <p>
              The Services and all content, features, and functionality thereof, including but not limited to text,
              graphics, logos, icons, images, audio clips, digital downloads, data compilations, software, and the
              design, selection, and arrangement thereof, are owned by us, our licensors, or other providers and are
              protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
              republish, download, store, or transmit any of our intellectual property, except as follows:
            </p>
            <ul>
              <li>
                Your computer may temporarily store copies in RAM incidental to your accessing and viewing content
              </li>
              <li>
                You may store files that are automatically cached by your web browser for display enhancement purposes
              </li>
              <li>
                You may print or download one copy of a reasonable number of pages for your personal, non-commercial use
              </li>
              <li>
                If we provide social media features with certain content, you may take such actions as are enabled by
                such features
              </li>
            </ul>

            <h3 className="text-xl font-medium font-poppins mt-6 mb-3">4.2 Trademarks</h3>
            <p>
              The Agentic Intelligence Lisbon name, logo, and all related names, logos, product and service names,
              designs, and slogans are trademarks of ours or our affiliates or licensors. You may not use such marks
              without our prior written permission.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">5. Third-Party Links and Content</h2>
            <p>
              Our Services may contain links to third-party websites, resources, or services that are not owned or
              controlled by us. We have no control over, and assume no responsibility for, the content, privacy
              policies, or practices of any third-party websites or services.
            </p>
            <p>
              You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any
              damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such
              content, goods, or services available on or through any such websites or services.
            </p>
            <p>
              We strongly advise you to read the terms and conditions and privacy policies of any third-party websites
              or services that you visit.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">
              6. Disclaimers and Limitations of Liability
            </h2>
            <h3 className="text-xl font-medium font-poppins mt-6 mb-3">6.1 Disclaimer of Warranties</h3>
            <p>
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
            </p>
            <p>
              WE DO NOT WARRANT THAT: (A) THE SERVICES WILL FUNCTION UNINTERRUPTED, SECURE, OR AVAILABLE AT ANY
              PARTICULAR TIME OR LOCATION; (B) ANY ERRORS OR DEFECTS WILL BE CORRECTED; (C) THE SERVICES ARE FREE OF
              VIRUSES OR OTHER HARMFUL COMPONENTS; OR (D) THE RESULTS OF USING THE SERVICES WILL MEET YOUR REQUIREMENTS.
            </p>

            <h3 className="text-xl font-medium font-poppins mt-6 mb-3">6.2 Limitation of Liability</h3>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE, OUR DIRECTORS, EMPLOYEES, AGENTS,
              PARTNERS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE
              LOSSES, RESULTING FROM: (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (B) ANY
              CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (C) ANY CONTENT OBTAINED FROM THE SERVICES; AND (D)
              UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY,
              CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF
              THE POSSIBILITY OF SUCH DAMAGE.
            </p>
            <p>
              IN JURISDICTIONS THAT DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR
              INCIDENTAL DAMAGES, OUR LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">7. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless us, our affiliates, licensors, and service providers,
              and our and their respective officers, directors, employees, contractors, agents, licensors, suppliers,
              successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses,
              costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
              violation of these Terms or your use of the Services, including, but not limited to, your User Content,
              any use of the Services' content, services, and products other than as expressly authorized in these
              Terms, or your use of any information obtained from the Services.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">8. Term and Termination</h2>
            <p>
              These Terms shall remain in full force and effect while you use the Services. We may terminate or suspend
              your access to the Services immediately, without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use the Services will immediately cease. If you wish to terminate your
              account, you may simply discontinue using the Services or contact us to request account deletion.
            </p>
            <p>
              All provisions of these Terms which by their nature should survive termination shall survive termination,
              including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of
              liability.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">9. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Portugal, without regard to
              its conflict of law provisions.
            </p>
            <p>
              Any dispute arising from or relating to the subject matter of these Terms shall be finally settled by
              arbitration in Lisbon, Portugal, using the Portuguese language in accordance with the Portuguese
              Arbitration Law then in effect, by one commercial arbitrator with substantial experience in resolving
              intellectual property and commercial contract disputes.
            </p>
            <p>
              The prevailing party in any arbitration or other proceeding arising under these Terms shall be entitled to
              receive reimbursement of its reasonable expenses (including reasonable attorneys' fees, expert witness
              fees, and all other expenses) incurred in connection therewith.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">10. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will
              provide notice of any changes by posting the updated Terms on this page and updating the "Last Updated"
              date at the top of these Terms.
            </p>
            <p>
              Your continued use of the Services after any such changes constitutes your acceptance of the new Terms. If
              you do not agree to the new Terms, you must stop using the Services.
            </p>

            <h2 className="text-2xl font-semibold font-poppins mt-8 mb-4">11. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:legal@agenticlisbon.ai" className="text-primary hover:underline">
                legal@agenticlisbon.ai
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
