/*
 * KrishuAI — Philosophy Page
 * Route: /philosophy
 * Design: "Digital Sovereignty" — three expert lenses, bento layout
 */

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const lenses = [
  {
    number: "01",
    icon: "◎",
    title: "AI Luminary",
    subtitle: "The Technical Foundation",
    accent: "#0EA5E9",
    glowRgb: "14, 165, 233",
    description:
      "Every KrishuAI engagement begins with deep technical architecture. We design multimodal agentic systems that are sovereign by default — trained on Indian data, deployed on Indian infrastructure, and governed by Indian institutions.",
    principles: [
      "Bharat Agentic Stack as the core intelligence layer",
      "22+ Indian language multimodal understanding",
      "On-premise and sovereign cloud deployment",
      "Federated learning to preserve data sovereignty",
      "Explainable AI for regulatory compliance",
    ],
  },
  {
    number: "02",
    icon: "⬡",
    title: "SEO Alchemist",
    subtitle: "The Distribution Engine",
    accent: "#D4A847",
    glowRgb: "212, 168, 71",
    description:
      "Intelligence without reach is irrelevant. KrishuAI's SEO Alchemist lens ensures every solution we build is discoverable, indexable, and positioned to attract the right stakeholders — from government procurement officers to enterprise CIOs.",
    principles: [
      "Programmatic content generation for solution libraries",
      "Technical SEO architecture for AI product pages",
      "Thought leadership positioning for each pillar",
      "Government tender and procurement visibility",
      "Enterprise buyer journey mapping",
    ],
  },
  {
    number: "03",
    icon: "✦",
    title: "UX Visionary",
    subtitle: "The Human Interface",
    accent: "#A78BFA",
    glowRgb: "167, 139, 250",
    description:
      "The most powerful AI system fails if its users cannot engage with it. Our UX Visionary lens designs interfaces that work for a pension-age farmer in Bihar as elegantly as they work for a CTO in Bengaluru — voice-first, multilingual, and outcome-oriented.",
    principles: [
      "Agent-first navigation that routes users by intent",
      "Voice and gesture interfaces for low-literacy users",
      "Accessibility-first design for 1.4B diverse users",
      "Outcome dashboards over feature dashboards",
      "Continuous feedback loops built into every interface",
    ],
  },
];

const sovereignty = [
  {
    title: "Data Sovereignty",
    description: "All training data, inference data, and user data remains within Indian jurisdiction. No foreign cloud dependency.",
    icon: "🔒",
    accent: "#D4A847",
  },
  {
    title: "Model Sovereignty",
    description: "Foundation models fine-tuned on Indian languages, dialects, and cultural contexts — not adapted from foreign models.",
    icon: "🧠",
    accent: "#0EA5E9",
  },
  {
    title: "Infrastructure Sovereignty",
    description: "Deployable on NIC cloud, state data centres, and private enterprise infrastructure — never dependent on AWS or Azure.",
    icon: "🏗️",
    accent: "#22D3EE",
  },
  {
    title: "Governance Sovereignty",
    description: "AI systems governed by Indian institutions, auditable by Indian regulators, and aligned with Indian constitutional values.",
    icon: "⚖️",
    accent: "#A78BFA",
  },
];

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.08 0.015 240)" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(167, 139, 250, 0.06) 0%, transparent 70%)",
          }}
        />
        <div className="container relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="mono-label text-xs mb-5 inline-block px-3 py-1.5 rounded-full border"
              style={{
                borderColor: "rgba(167, 139, 250, 0.3)",
                color: "rgba(167, 139, 250, 0.9)",
                background: "rgba(167, 139, 250, 0.08)",
              }}
            >
              ◆ Our Philosophy
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Three Lenses.{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #A78BFA, #0EA5E9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                One Outcome.
              </span>
            </h1>
            <p
              className="text-xl text-white/55 leading-relaxed"
              style={{ fontFamily: "DM Sans" }}
            >
              KrishuAI operates through three expert lenses that work in concert on every engagement.
              No lens is optional. Together, they ensure that what we build is technically excellent,
              commercially visible, and humanly usable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Lenses */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col gap-8">
            {lenses.map((lens, i) => (
              <motion.div
                key={lens.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-3xl overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, rgba(${lens.glowRgb}, 0.05) 0%, rgba(255,255,255,0.02) 100%)`,
                  border: `1px solid rgba(${lens.glowRgb}, 0.15)`,
                }}
              >
                <div className="p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-start">
                  {/* Left */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="mono-label text-xs"
                        style={{ color: `rgba(${lens.glowRgb}, 0.6)` }}
                      >
                        {lens.number}
                      </div>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                        style={{
                          background: `rgba(${lens.glowRgb}, 0.12)`,
                          border: `1px solid rgba(${lens.glowRgb}, 0.25)`,
                          color: lens.accent,
                        }}
                      >
                        {lens.icon}
                      </div>
                    </div>
                    <h2
                      className="text-3xl font-bold text-white mb-1"
                      style={{ fontFamily: "Space Grotesk" }}
                    >
                      {lens.title}
                    </h2>
                    <div
                      className="text-sm mb-5"
                      style={{ color: lens.accent, fontFamily: "DM Sans" }}
                    >
                      {lens.subtitle}
                    </div>
                    <p
                      className="text-white/55 leading-relaxed"
                      style={{ fontFamily: "DM Sans" }}
                    >
                      {lens.description}
                    </p>
                  </div>
                  {/* Right: Principles */}
                  <div className="flex flex-col gap-3">
                    <div
                      className="mono-label text-xs text-white/30 mb-1"
                    >
                      Core Principles
                    </div>
                    {lens.principles.map((p, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-3 px-4 py-3 rounded-xl"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: `1px solid rgba(${lens.glowRgb}, 0.1)`,
                        }}
                      >
                        <span
                          className="text-xs mt-0.5 flex-shrink-0"
                          style={{ color: lens.accent }}
                        >
                          ◆
                        </span>
                        <span
                          className="text-sm text-white/65"
                          style={{ fontFamily: "DM Sans" }}
                        >
                          {p}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Sovereignty */}
      <section className="py-20" style={{ background: "oklch(0.09 0.015 240)" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-2xl"
          >
            <div className="mono-label text-xs text-white/40 mb-3">◆ The Sovereignty Mandate</div>
            <h2
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Space Grotesk" }}
            >
              What We Mean by{" "}
              <span style={{ color: "#D4A847" }}>Digital Sovereignty</span>
            </h2>
            <p className="text-white/55 leading-relaxed" style={{ fontFamily: "DM Sans" }}>
              Sovereignty is not just a technical property — it is a political, cultural, and
              constitutional commitment. Every layer of the Bharat Agentic Stack is designed to
              honour this commitment.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {sovereignty.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${s.accent}20`,
                }}
              >
                <div className="text-2xl mb-4">{s.icon}</div>
                <div
                  className="font-semibold text-white text-sm mb-2"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  {s.title}
                </div>
                <p className="text-xs text-white/45 leading-relaxed" style={{ fontFamily: "DM Sans" }}>
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Ready to Design Your Outcome?
            </h2>
            <p className="text-white/50 mb-8" style={{ fontFamily: "DM Sans" }}>
              Let's apply all three lenses to your specific challenge.
            </p>
            <Link href="/contact">
              <button
                className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(135deg, #A78BFA, #0EA5E9)",
                  color: "white",
                  fontFamily: "Space Grotesk",
                  boxShadow: "0 0 40px rgba(167, 139, 250, 0.3)",
                }}
              >
                Start the Conversation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
