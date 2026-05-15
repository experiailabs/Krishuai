/*
 * KrishuAI — PillarCTA Component
 * Design: Bottom CTA section for pillar pages with back-to-home and contact links
 */

import { motion } from "framer-motion";
import { Link } from "wouter";

interface PillarCTAProps {
  accentColor: string;
  glowRgb: string;
  ctaLabel: string;
  ctaSubtext: string;
  buttonText: string;
}

export default function PillarCTA({ accentColor, glowRgb, ctaLabel, ctaSubtext, buttonText }: PillarCTAProps) {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.07 0.015 240)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(${glowRgb}, 0.3), transparent)`,
        }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 50% 60% at 50% 50%, rgba(${glowRgb}, 0.06) 0%, transparent 70%)`,
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div
            className="mono-label text-xs mb-6 inline-block px-3 py-1.5 rounded-full border"
            style={{
              borderColor: `rgba(${glowRgb}, 0.3)`,
              color: accentColor,
              background: `rgba(${glowRgb}, 0.08)`,
            }}
          >
            ◆ Ready to Deploy
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk" }}
          >
            {ctaLabel}
          </h2>

          <p
            className="text-lg text-white/50 mb-10"
            style={{ fontFamily: "DM Sans" }}
          >
            {ctaSubtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#contact">
              <button
                className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, rgba(${glowRgb}, 1), rgba(${glowRgb}, 0.7))`,
                  color: accentColor === "#D4A847" || accentColor === "#FBBF24" ? "#050A14" : "white",
                  fontFamily: "Space Grotesk",
                  boxShadow: `0 0 40px rgba(${glowRgb}, 0.35)`,
                }}
              >
                {buttonText}
              </button>
            </Link>
            <Link href="/">
              <button
                className="px-8 py-4 rounded-full font-semibold text-base border transition-all duration-300 hover:bg-white/5"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "Space Grotesk",
                }}
              >
                ← Back to All Pillars
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
