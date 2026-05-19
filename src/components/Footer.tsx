/*
 * KrishuAI — Footer Component
 * Design: Dark minimal footer with gradient divider and brand statement
 * All links connected to their respective routes via wouter Link
 */

import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";

// ── Footer Logo: breathing pulse + shimmer hover + teal glow ─────────────────
function FooterLogo() {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="flex items-center cursor-pointer w-fit relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      style={{
        filter: hovered
          ? "drop-shadow(0 0 10px rgba(14, 165, 233, 0.6)) drop-shadow(0 0 24px rgba(14, 165, 233, 0.28))"
          : "drop-shadow(0 0 0px transparent)",
        transition: "filter 0.35s ease",
      }}
    >
      {/* Breathing pulse when idle */}
      <motion.img
        src="/manus-storage/logo_footer_white_80400ad3.png"
        alt="Krishu Techventures"
        style={{ height: '48px', width: 'auto', display: 'block' }}
        animate={!hovered ? { opacity: [1, 0.82, 1] } : { opacity: 1 }}
        transition={!hovered ? { duration: 3.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}
      />
      {/* Shimmer sweep on hover */}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.32) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
        }}
        initial={{ backgroundPosition: "-100% 0" }}
        animate={hovered ? { backgroundPosition: "200% 0" } : { backgroundPosition: "-100% 0" }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

// ── Footer Link: slide-right arrow reveal on hover ───────────────────────────
function FooterLink({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.span
      className="flex items-center gap-1 text-sm cursor-pointer"
      style={{
        fontFamily: "DM Sans",
        color: hovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)",
        transition: "color 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      <motion.span
        className="text-xs"
        style={{ color: "rgba(14, 165, 233, 0.8)" }}
        initial={{ opacity: 0, x: -4 }}
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -4 }}
        transition={{ duration: 0.18 }}
      >
        →
      </motion.span>
    </motion.span>
  );
}

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
              {/* Logo — breathing pulse + shimmer hover + glow */}
              <Link href="/">
                <FooterLogo />
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
              {links.map((link, li) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + li * 0.04, duration: 0.3 }}
                >
                  <Link href={link.href}>
                    <FooterLink label={link.label} />
                  </Link>
                </motion.div>
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
