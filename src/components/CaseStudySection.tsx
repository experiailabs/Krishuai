/*
 * KrishuAI — CaseStudySection Component
 * Design: Full case study layout with challenge/solution/outcome structure
 * Used by: All four pillar deep-dive pages
 */

import { motion } from "framer-motion";

export interface CaseStudy {
  id: string;
  badge: string;
  client: string;
  clientType: string;
  image: string;
  challenge: string;
  solution: string;
  outcomes: { metric: string; label: string; color: string }[];
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  tags: string[];
}

interface CaseStudySectionProps {
  caseStudies: CaseStudy[];
  accentColor: string;
  glowRgb: string;
}

function CaseStudyCard({ cs, accentColor, glowRgb, index }: { cs: CaseStudy; accentColor: string; glowRgb: string; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Image header */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={cs.image}
          alt={cs.client}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(5,10,20,0.3) 0%, rgba(5,10,20,0.85) 100%)`,
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div
            className="mono-label text-xs mb-2 inline-block px-2.5 py-1 rounded-full"
            style={{
              background: `rgba(${glowRgb}, 0.15)`,
              border: `1px solid rgba(${glowRgb}, 0.3)`,
              color: accentColor,
            }}
          >
            {cs.badge}
          </div>
          <h3
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "Space Grotesk" }}
          >
            {cs.client}
          </h3>
          <div className="text-sm text-white/50 mt-1" style={{ fontFamily: "DM Sans" }}>
            {cs.clientType}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 lg:p-8 flex flex-col gap-6">
        {/* Challenge / Solution */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div
              className="mono-label text-xs mb-2"
              style={{ color: "rgba(255,100,100,0.7)" }}
            >
              ◆ The Challenge
            </div>
            <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: "DM Sans" }}>
              {cs.challenge}
            </p>
          </div>
          <div>
            <div
              className="mono-label text-xs mb-2"
              style={{ color: accentColor + "CC" }}
            >
              ◆ The KrishuAI Solution
            </div>
            <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: "DM Sans" }}>
              {cs.solution}
            </p>
          </div>
        </div>

        {/* Outcome metrics */}
        <div>
          <div className="mono-label text-xs mb-3 text-white/40">Measured Outcomes</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {cs.outcomes.map((o) => (
              <div
                key={o.label}
                className="rounded-xl p-4 text-center"
                style={{
                  background: `${o.color}10`,
                  border: `1px solid ${o.color}20`,
                }}
              >
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "Space Grotesk", color: o.color }}
                >
                  {o.metric}
                </div>
                <div className="text-xs text-white/50" style={{ fontFamily: "DM Sans" }}>
                  {o.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div
          className="rounded-xl p-5"
          style={{
            background: `rgba(${glowRgb}, 0.05)`,
            border: `1px solid rgba(${glowRgb}, 0.12)`,
          }}
        >
          <div
            className="text-2xl mb-2"
            style={{ color: `rgba(${glowRgb}, 0.4)` }}
          >
            "
          </div>
          <p
            className="text-sm text-white/70 leading-relaxed italic mb-3"
            style={{ fontFamily: "DM Sans" }}
          >
            {cs.quote}
          </p>
          <div>
            <div className="text-sm font-semibold text-white" style={{ fontFamily: "Space Grotesk" }}>
              {cs.quoteAuthor}
            </div>
            <div className="text-xs text-white/40" style={{ fontFamily: "DM Sans" }}>
              {cs.quoteRole}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {cs.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                background: `rgba(${glowRgb}, 0.08)`,
                border: `1px solid rgba(${glowRgb}, 0.15)`,
                color: `rgba(${glowRgb === "14, 165, 233" ? "125, 211, 252" : glowRgb}, 0.9)`,
                fontFamily: "DM Sans",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudySection({ caseStudies, accentColor, glowRgb }: CaseStudySectionProps) {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.085 0.015 240)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(${glowRgb}, 0.25), transparent)`,
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div
            className="mono-label text-xs mb-4 inline-block px-3 py-1.5 rounded-full border"
            style={{
              borderColor: `rgba(${glowRgb}, 0.3)`,
              color: accentColor,
              background: `rgba(${glowRgb}, 0.08)`,
            }}
          >
            ◆ Case Studies
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Outcomes, Not Promises
          </h2>
          <p
            className="text-lg text-white/50 max-w-2xl"
            style={{ fontFamily: "DM Sans" }}
          >
            Every engagement is measured against real-world transformation metrics.
            Here are deployments where KrishuAI moved the needle.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard
              key={cs.id}
              cs={cs}
              accentColor={accentColor}
              glowRgb={glowRgb}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
