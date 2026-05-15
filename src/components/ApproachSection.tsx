/*
 * KrishuAI — ApproachSection Component
 * Design: Three expert lenses in asymmetric bento layout
 * Lenses: AI Luminary, SEO/Growth Alchemist, UI/UX Visionary
 * Visual: Glassmorphic cards with numbered accent labels
 */

import { motion } from "framer-motion";

const lenses = [
  {
    number: "L1",
    role: "The AI Luminary",
    experience: "30+ Years Experience",
    title: "National Intelligence Layer",
    description:
      "The Bharat Agentic Stack positions KrishuAI as a national asset — not just a vendor. We build Digital Twins of state economies and healthcare systems, creating living AI models that simulate policy outcomes before implementation. This sovereign intelligence framework scales from a single district to an entire nation.",
    highlights: [
      "Digital Twin of State Economies",
      "Predictive Policy Simulation",
      "Multilingual AI (22+ Languages)",
      "Overseas Scalability Framework",
    ],
    accentColor: "#D4A847",
    icon: "⬡",
    size: "lg",
  },
  {
    number: "L2",
    role: "The SEO Growth Alchemist",
    experience: "Trust-Signal Strategy",
    title: "Programmatic Solution Library",
    description:
      "Dominating 'AI Government Solutions India' and 'Agentic AI Workflows' through Hreflang architecture, dedicated solution sub-folders, and high-intent long-tail keyword targeting that captures government tenders before they hit the open market.",
    highlights: [
      "Hreflang + Geo-Fencing SEO",
      "/solutions/india-government",
      "High-Intent Keyword Capture",
      "Programmatic Solution Pages",
    ],
    accentColor: "#0EA5E9",
    icon: "◈",
    size: "sm",
  },
  {
    number: "L3",
    role: "The UI/UX Visionary",
    experience: "30+ Years Experience",
    title: "Agent-First Navigation",
    description:
      "The site greets every visitor with an AI assistant that reads their intent — Government Official, Travel Executive, or Educator — and adapts the entire UI accordingly. Blueprint aesthetics for governance. Fluid glow for entertainment. The interface is the product.",
    highlights: [
      "Adaptive UI by Visitor Profile",
      "Micro-Interaction Morphing",
      "Real-Time Generative Data Map",
      "Multimodal Interaction Layer",
    ],
    accentColor: "#A78BFA",
    icon: "◉",
    size: "sm",
  },
];

function LensCard({ lens, index }: { lens: typeof lenses[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="glass-card rounded-2xl p-6 lg:p-8 flex flex-col gap-5 group hover:border-opacity-30 transition-all duration-500"
      style={{
        border: `1px solid rgba(255,255,255,0.08)`,
        position: "relative",
        overflow: "hidden",
      }}
      whileHover={{
        borderColor: `${lens.accentColor}30`,
        boxShadow: `0 0 40px ${lens.accentColor}15`,
      }}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${lens.accentColor}08 0%, transparent 70%)`,
        }}
      />

      {/* Header */}
      <div className="flex items-start justify-between relative z-10">
        <div>
          <div
            className="mono-label text-xs mb-2"
            style={{ color: `${lens.accentColor}90` }}
          >
            {lens.number} · {lens.experience}
          </div>
          <div
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "Space Grotesk" }}
          >
            {lens.title}
          </div>
        </div>
        <div
          className="text-3xl w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0"
          style={{
            background: `${lens.accentColor}15`,
            color: lens.accentColor,
            border: `1px solid ${lens.accentColor}25`,
          }}
        >
          {lens.icon}
        </div>
      </div>

      {/* Role badge */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium w-fit relative z-10"
        style={{
          background: `${lens.accentColor}12`,
          border: `1px solid ${lens.accentColor}25`,
          color: lens.accentColor,
          fontFamily: "Space Grotesk",
        }}
      >
        {lens.role}
      </div>

      {/* Description */}
      <p
        className="text-white/60 text-sm leading-relaxed relative z-10"
        style={{ fontFamily: "DM Sans" }}
      >
        {lens.description}
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-2 gap-2 relative z-10">
        {lens.highlights.map((h) => (
          <div
            key={h}
            className="flex items-center gap-2 text-xs text-white/50"
            style={{ fontFamily: "DM Sans" }}
          >
            <span style={{ color: lens.accentColor, fontSize: "8px" }}>●</span>
            {h}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.09 0.015 240)" }}
    >
      {/* Subtle divider glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.3), rgba(212, 168, 71, 0.3), transparent)",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div
            className="mono-label text-xs mb-4 inline-block px-3 py-1.5 rounded-full border"
            style={{
              borderColor: "rgba(212, 168, 71, 0.3)",
              color: "rgba(212, 168, 71, 0.9)",
              background: "rgba(212, 168, 71, 0.08)",
            }}
          >
            ◆ Multi-Expert Strategy
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Three Lenses.{" "}
            <span className="text-gradient-gold">One Vision.</span>
          </h2>
          <p
            className="text-lg text-white/50 max-w-2xl"
            style={{ fontFamily: "DM Sans" }}
          >
            Every KrishuAI engagement is stress-tested through three expert
            perspectives — ensuring technical depth, market dominance, and
            human-centered design converge into a single outcome.
          </p>
        </motion.div>

        {/* Cards — asymmetric bento */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {lenses.map((lens, i) => (
            <LensCard key={lens.number} lens={lens} index={i} />
          ))}
        </div>

        {/* Bottom philosophy strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 glass-card rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-6"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex-1">
            <div
              className="mono-label text-xs mb-2"
              style={{ color: "rgba(14, 165, 233, 0.7)" }}
            >
              Core Philosophy
            </div>
            <h3
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Moving Beyond "Implementation" to{" "}
              <span className="text-gradient-blue">"Outcome Design"</span>
            </h3>
          </div>
          <div className="flex-1">
            <p
              className="text-white/50 text-sm leading-relaxed"
              style={{ fontFamily: "DM Sans" }}
            >
              We don't deploy AI tools. We architect intelligence systems that
              own their outcomes — measuring success not in features shipped,
              but in lives improved, revenues grown, and governance transformed.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(212, 168, 71, 0.2))",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              ◎
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
