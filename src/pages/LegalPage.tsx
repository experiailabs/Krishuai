/*
 * KrishuAI — Legal Pages (Privacy Policy, Terms of Service, Cookie Policy)
 * Routes: /privacy, /terms, /cookies
 * Design: Clean, readable legal text on dark canvas
 */

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface LegalSection {
  heading: string;
  content: string;
}

interface LegalPageProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}

function LegalLayout({ title, subtitle, lastUpdated, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.08 0.015 240)" }}>
      <Navigation />
      <section className="pt-32 pb-16">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="mono-label text-xs mb-4 inline-block px-3 py-1.5 rounded-full border"
              style={{
                borderColor: "rgba(14, 165, 233, 0.3)",
                color: "rgba(14, 165, 233, 0.9)",
                background: "rgba(14, 165, 233, 0.08)",
              }}
            >
              ◆ Legal
            </div>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight"
              style={{ fontFamily: "Space Grotesk" }}
            >
              {title}
            </h1>
            <p className="text-white/50 mb-2" style={{ fontFamily: "DM Sans" }}>{subtitle}</p>
            <p className="text-xs text-white/30 mono-label">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>
      <section className="pb-24">
        <div className="container max-w-3xl">
          <div className="flex flex-col gap-10">
            {sections.map((s, i) => (
              <motion.div
                key={s.heading}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <h2
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  {s.heading}
                </h2>
                <p
                  className="text-sm text-white/55 leading-relaxed"
                  style={{ fontFamily: "DM Sans" }}
                >
                  {s.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How KrishuAI collects, uses, and protects your information."
      lastUpdated="1 April 2026"
      sections={[
        { heading: "1. Information We Collect", content: "KrishuAI collects information you provide directly, such as name, email address, organisation, and message content when you contact us through our website. We also collect usage data automatically, including IP address, browser type, pages visited, and time spent on pages, to improve our services." },
        { heading: "2. How We Use Your Information", content: "We use the information we collect to respond to your enquiries, provide information about our services, improve our website and communications, and comply with legal obligations. We do not sell your personal information to third parties." },
        { heading: "3. Data Sovereignty and Storage", content: "In alignment with our core principle of Digital Sovereignty, all data collected through this website is stored on servers located within India. We do not transfer personal data to foreign jurisdictions without explicit consent and appropriate safeguards." },
        { heading: "4. Cookies", content: "We use essential cookies to ensure the website functions correctly, and analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings. See our Cookie Policy for full details." },
        { heading: "5. Data Retention", content: "We retain personal information for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Contact enquiries are retained for 24 months. Analytics data is retained for 12 months." },
        { heading: "6. Your Rights", content: "Under applicable Indian data protection law, you have the right to access, correct, or delete your personal information. You may also object to processing or request restriction of processing. To exercise these rights, contact privacy@krishuai.com." },
        { heading: "7. Security", content: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction. All data transmission is encrypted using TLS 1.3." },
        { heading: "8. Changes to This Policy", content: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website. The date of the most recent revision is shown at the top of this page." },
        { heading: "9. Contact", content: "For privacy-related enquiries, contact our Data Protection Officer at privacy@krishuai.com or write to KrishuAI, Cyber Hub, Gurugram, Haryana 122002, India." },
      ]}
    />
  );
}

export function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The terms governing your use of the KrishuAI website and services."
      lastUpdated="1 April 2026"
      sections={[
        { heading: "1. Acceptance of Terms", content: "By accessing or using the KrishuAI website (krishuai.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website." },
        { heading: "2. Use of the Website", content: "You may use this website for lawful purposes only. You agree not to use the website in any way that violates applicable laws or regulations, infringes the rights of others, or interferes with the operation of the website." },
        { heading: "3. Intellectual Property", content: "All content on this website — including text, graphics, logos, images, and software — is the property of KrishuAI or its content suppliers and is protected by Indian and international intellectual property laws. The Bharat Agentic Stack and all associated trademarks are proprietary to KrishuAI." },
        { heading: "4. Disclaimer of Warranties", content: "The website is provided on an 'as is' and 'as available' basis without warranties of any kind, either express or implied. KrishuAI does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components." },
        { heading: "5. Limitation of Liability", content: "To the fullest extent permitted by law, KrishuAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the website." },
        { heading: "6. Third-Party Links", content: "Our website may contain links to third-party websites, including ExperiAI Labs (experiailabs.com). These links are provided for convenience only. KrishuAI is not responsible for the content or privacy practices of third-party websites." },
        { heading: "7. Governing Law", content: "These Terms of Service are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of New Delhi, India." },
        { heading: "8. Changes to Terms", content: "KrishuAI reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes constitutes acceptance of the revised terms." },
        { heading: "9. Contact", content: "For questions about these Terms of Service, contact legal@krishuai.com or write to KrishuAI, Cyber Hub, Gurugram, Haryana 122002, India." },
      ]}
    />
  );
}

export function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="How KrishuAI uses cookies and similar technologies on this website."
      lastUpdated="1 April 2026"
      sections={[
        { heading: "1. What Are Cookies", content: "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently, provide information to website owners, and personalise your experience." },
        { heading: "2. Cookies We Use", content: "We use three categories of cookies: Essential cookies (required for the website to function — cannot be disabled), Analytics cookies (help us understand how visitors interact with our website using aggregated, anonymised data), and Preference cookies (remember your choices such as language preference)." },
        { heading: "3. Essential Cookies", content: "These cookies are necessary for the website to function and cannot be switched off. They include session management cookies and security cookies. No personal data is stored in essential cookies." },
        { heading: "4. Analytics Cookies", content: "We use Umami Analytics, a privacy-first analytics platform that does not use cookies to track individuals and does not collect personally identifiable information. Analytics data is aggregated and anonymised." },
        { heading: "5. Third-Party Cookies", content: "We do not use third-party advertising cookies. Any third-party services embedded in our website (such as video players) may set their own cookies, which are governed by their respective privacy policies." },
        { heading: "6. Managing Cookies", content: "You can control and delete cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing cookies. Note that disabling cookies may affect the functionality of our website." },
        { heading: "7. Cookie Retention", content: "Session cookies are deleted when you close your browser. Persistent cookies remain on your device for the period specified in the cookie, or until you delete them. Our analytics cookies are retained for 12 months." },
        { heading: "8. Changes to This Policy", content: "We may update this Cookie Policy from time to time. We will notify you of significant changes by posting a notice on our website." },
        { heading: "9. Contact", content: "For questions about our use of cookies, contact privacy@krishuai.com." },
      ]}
    />
  );
}
