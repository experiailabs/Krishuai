/*
 * KrishuAI — Footer Component
 * Design: Dark minimal footer with gradient divider and brand statement
 * All links connected to their respective routes via wouter Link
 */

import { motion } from "framer-motion";
import { Link } from "wouter";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  "Solutions": [
    { label: "AI for Governance", href: "/solutions/governance" },
    { label: "AI EdTech", href: "/solutions/edtech" },
    { label: "AI Travel & Hospitality", href: "/solutions/travel" },
    { label: "AI Entertainment", href: "/solutions/entertainment" },
  ],
  "Company": [
    { label: "About KrishuAI", href: "/about" },
    { label: "Our Philosophy", href: "/philosophy" },
    { label: "Careers", href: "/careers" },
  ],
  "Resources": [
    { label: "Bharat Agentic Stack", href: "/bharat-stack" },
    { label: "Research Papers", href: "/research" },
    { label: "Solution Library", href: "/solution-library" },
    { label: "Blog", href: "/blog" },
  ],
  "Connect": [
    { label: "Contact Us", href: "/contact" },
    { label: "Partner Program", href: "/partner" },
    { label: "Investor Relations", href: "/investors" },
    { label: "Press Kit", href: "/press" },
  ],
};

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8"
      style={{ background: "oklch(0.07 0.015 240)" }}
    >
      {/* Top gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.4), rgba(212, 168, 71, 0.4), transparent)",
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              {/* Logo */}
              <Link href="/">
                <div className="flex items-center gap-3 cursor-pointer w-fit">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #0EA5E9, #D4A847)" }}
                  >
                    <span className="text-white font-bold text-base" style={{ fontFamily: "Space Grotesk" }}>K</span>
                  </div>
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "Space Grotesk" }}>
                    Krishu<span style={{ color: "#0EA5E9" }}>AI</span>
                  </span>
                </div>
              </Link>

              <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: "DM Sans" }}>
                A premier Global AI Technology House. Moving beyond Implementation to Outcome Design.
              </p>

              {/* Tagline */}
              <div
                className="mono-label text-xs px-3 py-1.5 rounded-full border w-fit"
                style={{
                  borderColor: "rgba(212, 168, 71, 0.3)",
                  color: "rgba(212, 168, 71, 0.7)",
                  background: "rgba(212, 168, 71, 0.06)",
                }}
              >
                India · Global · Sovereign
              </div>

              {/* Sister company */}
              <div className="flex flex-col gap-1.5 mt-1">
                <div className="mono-label text-xs text-white/30">Sister Company</div>
                <a
                  href="https://experiailabs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group w-fit"
                >
                  <div
                    className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #FB923C, #9333EA)" }}
                  >
                    <span className="text-white text-xs font-bold" style={{ fontFamily: 'Space Grotesk' }}>E</span>
                  </div>
                  <span
                    className="text-sm text-white/50 group-hover:text-white/80 transition-colors duration-200"
                    style={{ fontFamily: 'DM Sans' }}
                  >
                    ExperiAI Labs
                  </span>
                  <span className="text-white/25 group-hover:text-white/50 text-xs transition-colors">↗</span>
                </a>
                <div className="text-xs text-white/25" style={{ fontFamily: 'DM Sans' }}>Dubai, United Arab Emirates</div>
              </div>
            </motion.div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col gap-3"
            >
              <div className="mono-label text-xs text-white/40 mb-1">
                {category}
              </div>
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 cursor-pointer block"
                    style={{ fontFamily: "DM Sans" }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="text-white/30 text-xs" style={{ fontFamily: "DM Sans" }}>
            © 2026 KrishuAI. All rights reserved. Building India's AI Sovereignty.
          </div>
          <div className="flex items-center gap-6">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200 cursor-pointer"
                  style={{ fontFamily: "DM Sans" }}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
