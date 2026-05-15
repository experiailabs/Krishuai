/*
 * KrishuAI — StackDifferentiator Component
 * Design: "Digital Sovereignty" — Neon-Brutalism meets Cinematic Glassmorphism
 * Purpose: Sharp side-by-side comparison of Foreign AI vs KrishuAI Bharat-native stack
 * Layout: Two-column table with a glowing centre divider and animated row reveals
 */

import { motion } from "framer-motion";

const comparisons = [
  {
    dimension: "Training Data",
    foreign: "Trained on Western internet data — biased toward English, American cultural context",
    krishu: "Bharat-native corpus — 22+ Indian languages, regional dialects, government schemas",
    icon: "◎",
  },
  {
    dimension: "Architecture",
    foreign: "General-purpose LLMs retrofitted for local use cases via prompt engineering",
    krishu: "Purpose-built 6-layer Agentic Stack — each layer designed for Indian governance and scale",
    icon: "⬡",
  },
  {
    dimension: "Data Sovereignty",
    foreign: "Citizen and institutional data processed on foreign cloud infrastructure",
    krishu: "100% on-premise or India-sovereign cloud — data never leaves the jurisdiction",
    icon: "✦",
  },
  {
    dimension: "Language Support",
    foreign: "English-first with limited, often inaccurate support for Indian languages",
    krishu: "22+ Indian languages as first-class citizens — voice, text, and multimodal natively",
    icon: "◈",
  },
  {
    dimension: "Deployment Model",
    foreign: "SaaS APIs with opaque model updates, vendor lock-in, and usage-based pricing",
    krishu: "Outcome-owned deployments — clients own the model, the data, and the results",
    icon: "◇",
  },
  {
    dimension: "Design Philosophy",
    foreign: "Tool-first: AI as a feature added to existing workflows",
    krishu: "Agent-first: Autonomous systems designed to reduce toil and amplify human judgment",
    icon: "△",
  },
];

export default function StackDifferentiator() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: "oklch(0.08 0.015 240)" }}
    >
      {/* Subtle blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,165,233,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow behind centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(14, 165, 233, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div
            className="mono-label text-xs px-3 py-1.5 rounded-full border inline-block mb-4"
            style={{
              borderColor: "rgba(14, 165, 233, 0.3)",
              color: "rgba(14, 165, 233, 0.9)",
              background: "rgba(14, 165, 233, 0.08)",
            }}
          >
            ◆ Stack Differentiation
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk" }}
          >
            What makes our stack{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #0EA5E9, #D4A847)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              fundamentally different
            </span>
          </h2>
          <p
            className="text-white/45 max-w-xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "DM Sans" }}
          >
            Foreign AI systems are retrofitted for India. The Bharat Agentic Stack is
            architected from the ground up — sovereign by design, not by configuration.
          </p>
        </motion.div>

        {/* Column headers */}
        <div className="grid grid-cols-[1fr_48px_1fr] lg:grid-cols-[1fr_64px_1fr] gap-0 mb-4 px-2">
          {/* Foreign AI header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl px-5 py-3 flex items-center gap-3"
            style={{
              background: "rgba(239, 68, 68, 0.06)",
              border: "1px solid rgba(239, 68, 68, 0.15)",
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm"
              style={{ background: "rgba(239, 68, 68, 0.15)", color: "#EF4444" }}
            >
              ✕
            </div>
            <div>
              <div
                className="text-sm font-bold"
                style={{ color: "#EF4444", fontFamily: "Space Grotesk" }}
              >
                Foreign AI
              </div>
              <div className="text-xs text-white/30" style={{ fontFamily: "DM Sans" }}>
                Retrofitted for India
              </div>
            </div>
          </motion.div>

          {/* Centre spacer */}
          <div />

          {/* KrishuAI header */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl px-5 py-3 flex items-center gap-3"
            style={{
              background: "rgba(14, 165, 233, 0.08)",
              border: "1px solid rgba(14, 165, 233, 0.2)",
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold"
              style={{
                background: "linear-gradient(135deg, #0EA5E9, #D4A847)",
                color: "white",
                fontFamily: "Space Grotesk",
              }}
            >
              K
            </div>
            <div>
              <div
                className="text-sm font-bold"
                style={{
                  background: "linear-gradient(90deg, #0EA5E9, #D4A847)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Space Grotesk",
                }}
              >
                KrishuAI Bharat Stack
              </div>
              <div className="text-xs text-white/30" style={{ fontFamily: "DM Sans" }}>
                Sovereign by architecture
              </div>
            </div>
          </motion.div>
        </div>

        {/* Comparison rows */}
        <div className="flex flex-col gap-3">
          {comparisons.map((row, i) => (
            <motion.div
              key={row.dimension}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="grid grid-cols-[1fr_48px_1fr] lg:grid-cols-[1fr_64px_1fr] gap-0 items-stretch group"
            >
              {/* Foreign AI cell */}
              <div
                className="rounded-l-xl px-5 py-4 flex flex-col gap-2 transition-all duration-300"
                style={{
                  background: "rgba(239, 68, 68, 0.04)",
                  border: "1px solid rgba(239, 68, 68, 0.10)",
                  borderRight: "none",
                }}
              >
                <div
                  className="mono-label text-xs"
                  style={{ color: "rgba(239, 68, 68, 0.5)" }}
                >
                  {row.dimension}
                </div>
                <p
                  className="text-sm text-white/40 leading-relaxed"
                  style={{ fontFamily: "DM Sans" }}
                >
                  {row.foreign}
                </p>
              </div>

              {/* Centre divider with icon */}
              <div className="flex flex-col items-center justify-center relative">
                {/* Vertical line */}
                <div
                  className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, rgba(14,165,233,0.3), rgba(212,168,71,0.3), transparent)",
                  }}
                />
                {/* Icon bubble */}
                <div
                  className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "oklch(0.08 0.015 240)",
                    border: "1px solid rgba(14, 165, 233, 0.25)",
                    color: "rgba(14, 165, 233, 0.7)",
                    boxShadow: "0 0 12px rgba(14, 165, 233, 0.1)",
                  }}
                >
                  {row.icon}
                </div>
              </div>

              {/* KrishuAI cell */}
              <div
                className="rounded-r-xl px-5 py-4 flex flex-col gap-2 transition-all duration-300 group-hover:border-[rgba(14,165,233,0.25)]"
                style={{
                  background: "rgba(14, 165, 233, 0.05)",
                  border: "1px solid rgba(14, 165, 233, 0.12)",
                  borderLeft: "none",
                }}
              >
                <div
                  className="mono-label text-xs"
                  style={{ color: "rgba(14, 165, 233, 0.6)" }}
                >
                  {row.dimension}
                </div>
                <p
                  className="text-sm text-white/75 leading-relaxed font-medium"
                  style={{ fontFamily: "DM Sans" }}
                >
                  {row.krishu}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background:
              "linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(212, 168, 71, 0.06) 100%)",
            border: "1px solid rgba(14, 165, 233, 0.15)",
          }}
        >
          <div>
            <div
              className="text-base font-semibold text-white mb-1"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Ready to see the Bharat Agentic Stack in action?
            </div>
            <div className="text-sm text-white/45" style={{ fontFamily: "DM Sans" }}>
              Explore the six-layer architecture that powers India's sovereign AI infrastructure.
            </div>
          </div>
          <a
            href="/bharat-stack"
            className="flex-shrink-0 px-6 py-2.5 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
              fontFamily: "Space Grotesk",
              boxShadow: "0 0 20px rgba(14, 165, 233, 0.3)",
              whiteSpace: "nowrap",
            }}
          >
            Explore the Stack →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
