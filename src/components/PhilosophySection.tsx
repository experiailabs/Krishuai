/*
 * KrishuAI — PhilosophySection Component
 * Design: Full-width dark section with asymmetric bento cards
 * Content: Digital Sovereignty Engine concept, Bharat Agentic Stack details
 * Visual: Blueprint-style grid overlay on governance card
 */

import { motion } from "framer-motion";

const capabilities = [
  {
    icon: "⬡",
    title: "Multimodal Intelligence",
    description: "Vision, speech, text, and structured data — unified in a single agentic reasoning layer.",
    color: "#0EA5E9",
  },
  {
    icon: "◎",
    title: "Autonomous Orchestration",
    description: "AI agents that plan, execute, and self-correct across complex multi-step workflows.",
    color: "#D4A847",
  },
  {
    icon: "◈",
    title: "Sovereign Data Architecture",
    description: "On-premise and hybrid deployments that keep sensitive government and enterprise data within jurisdiction.",
    color: "#22D3EE",
  },
  {
    icon: "◉",
    title: "Outcome Measurement",
    description: "Every deployment ships with a real-time outcome dashboard — measuring impact, not just usage.",
    color: "#A78BFA",
  },
  {
    icon: "⬟",
    title: "Regional Language AI",
    description: "22+ Indian languages supported natively, enabling true last-mile AI delivery.",
    color: "#34D399",
  },
  {
    icon: "◐",
    title: "Overseas Scalability",
    description: "Architecture designed to replicate from a single Indian state to any global jurisdiction.",
    color: "#FBBF24",
  },
];

export default function PhilosophySection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.085 0.015 240)" }}
    >
      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,165,233,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.025) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <div
            className="mono-label text-xs mb-4 inline-block px-3 py-1.5 rounded-full border"
            style={{
              borderColor: "rgba(14, 165, 233, 0.3)",
              color: "rgba(14, 165, 233, 0.9)",
              background: "rgba(14, 165, 233, 0.08)",
            }}
          >
            ◆ The Digital Sovereignty Engine
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Built for India.{" "}
            <span className="text-gradient-blue">Designed for the World.</span>
          </h2>
          <p
            className="text-lg text-white/50 leading-relaxed"
            style={{ fontFamily: "DM Sans" }}
          >
            The Bharat Agentic Stack is not software. It is a localized,
            multimodal AI framework that understands the nuances of India's
            22+ languages, its governance structures, and its cultural
            diversity — then scales that intelligence globally.
          </p>
        </motion.div>

        {/* Capabilities bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-3 group transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              whileHover={{
                borderColor: `${cap.color}30`,
                boxShadow: `0 0 30px ${cap.color}12`,
                y: -3,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{
                  background: `${cap.color}15`,
                  border: `1px solid ${cap.color}25`,
                  color: cap.color,
                }}
              >
                {cap.icon}
              </div>
              <h3
                className="text-base font-semibold text-white"
                style={{ fontFamily: "Space Grotesk" }}
              >
                {cap.title}
              </h3>
              <p
                className="text-sm text-white/50 leading-relaxed"
                style={{ fontFamily: "DM Sans" }}
              >
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 rounded-2xl p-8 lg:p-10 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(212, 168, 71, 0.08) 100%)",
            border: "1px solid rgba(14, 165, 233, 0.15)",
          }}
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            <div className="flex-1">
              <div
                className="mono-label text-xs mb-2"
                style={{ color: "rgba(212, 168, 71, 0.8)" }}
              >
                BHARAT AGENTIC STACK · v2.0
              </div>
              <h3
                className="text-2xl lg:text-3xl font-bold text-white"
                style={{ fontFamily: "Space Grotesk" }}
              >
                Ready to architect your{" "}
                <span className="text-gradient-gold">National Intelligence Layer?</span>
              </h3>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
                  fontFamily: "Space Grotesk",
                  boxShadow: "0 0 25px rgba(14, 165, 233, 0.35)",
                }}
              >
                Request Architecture Brief
              </button>
              <button
                onClick={() => document.querySelector("#pillars")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-full font-semibold text-sm border transition-all duration-300 hover:bg-white/8"
                style={{
                  borderColor: "rgba(212, 168, 71, 0.4)",
                  color: "rgba(212, 168, 71, 0.9)",
                  fontFamily: "Space Grotesk",
                }}
              >
                View All Pillars
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
