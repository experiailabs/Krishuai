/*
 * KrishuAI — Investor Relations Page
 * Route: /investors
 * Design: "Digital Sovereignty" — authoritative, dark canvas, Tech-Gold accent
 */

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const thesis = [
  {
    icon: "🇮🇳",
    title: "India's AI Sovereignty Mandate",
    desc: "India's government has committed to building sovereign AI infrastructure. KrishuAI is positioned as the primary private-sector partner for this national mandate — with existing government relationships and the only India-native agentic AI stack.",
    accent: "#D4A847",
  },
  {
    icon: "📊",
    title: "₹2.5 Trillion Addressable Market",
    desc: "The combined AI opportunity across Governance, EdTech, Travel, and Entertainment in India and the MENA region represents a ₹2.5 trillion market by 2030 — largely untapped by sovereign AI solutions.",
    accent: "#0EA5E9",
  },
  {
    icon: "🔒",
    title: "Defensible Moat",
    desc: "The Bharat Agentic Stack took 5 years and ₹180Cr to build. It is trained on proprietary Indian data, integrated with government systems, and certified for sovereign deployment — creating a moat that cannot be replicated quickly.",
    accent: "#22D3EE",
  },
  {
    icon: "🌍",
    title: "Global Expansion via ExperiAI Labs",
    desc: "Our Dubai-based sister company ExperiAI Labs provides a bridge to MENA markets, enabling KrishuAI to export India's sovereign AI model to governments and enterprises across the Middle East and Africa.",
    accent: "#FB923C",
  },
];

const metrics = [
  { label: "Bharat Stack Layers", value: "6", sub: "End-to-end sovereign architecture" },
  { label: "Strategic Pillars", value: "4", sub: "Governance · EdTech · Travel · Entertainment" },
  { label: "Indian Languages", value: "22+", sub: "Natively multimodal by design" },
  { label: "Agent-First by Design", value: "100%", sub: "Every product is agentic" },
];

const milestones = [
  { phase: "Seed", year: "2019–2021", amount: "₹12Cr", use: "Bharat Agentic Stack R&D and first government pilot" },
  { phase: "Series A", year: "2022–2023", amount: "₹85Cr", use: "EdTech and Travel pillar development, team expansion" },
  { phase: "Series B", year: "2024–2025", amount: "₹180Cr", use: "ExperiAI Labs establishment, Entertainment pillar, global expansion" },
  { phase: "Series C", year: "2026 (Open)", amount: "₹500Cr target", use: "National-scale government deployments, MENA expansion, IPO preparation" },
];

export default function InvestorPage() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.08 0.015 240)" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 40%, rgba(212, 168, 71, 0.07) 0%, transparent 70%)",
          }}
        />
        <div className="container relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="mono-label text-xs mb-5 inline-block px-3 py-1.5 rounded-full border"
              style={{
                borderColor: "rgba(212, 168, 71, 0.3)",
                color: "rgba(212, 168, 71, 0.9)",
                background: "rgba(212, 168, 71, 0.08)",
              }}
            >
              ◆ Investor Relations
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Investing in India's{" "}
              <span style={{ color: "#D4A847" }}>AI Sovereignty</span>
            </h1>
            <p
              className="text-xl text-white/55 leading-relaxed mb-8"
              style={{ fontFamily: "DM Sans" }}
            >
              KrishuAI is building the intelligence infrastructure for the world's largest democracy.
              We are currently raising our Series C to accelerate national-scale government deployments
              and MENA expansion.
            </p>
            <button
              onClick={() => toast.success("Investor deck requested!", { description: "Our investor relations team will send the deck within 24 hours under NDA." })}
              className="px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #D4A847, #B8922E)",
                color: "#050A14",
                fontFamily: "Space Grotesk",
                boxShadow: "0 0 30px rgba(212, 168, 71, 0.3)",
              }}
            >
              Request Investor Deck
            </button>
          </motion.div>
        </div>
      </section>

      {/* Key metrics */}
      <section className="py-12 border-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <div
                  className="text-3xl font-bold mb-1"
                  style={{
                    fontFamily: "Space Grotesk",
                    background: "linear-gradient(90deg, #D4A847, #0EA5E9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {m.value}
                </div>
                <div className="text-white/60 text-sm font-semibold" style={{ fontFamily: "Space Grotesk" }}>
                  {m.label}
                </div>
                <div className="text-white/30 text-xs mono-label">{m.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment thesis */}
      <section className="py-20">
        <div className="container">
          <div className="mono-label text-xs text-white/40 mb-8">◆ Investment Thesis</div>
          <div className="grid md:grid-cols-2 gap-6">
            {thesis.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-2xl flex gap-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${t.accent}18`,
                }}
              >
                <div className="text-3xl flex-shrink-0">{t.icon}</div>
                <div>
                  <h3
                    className="font-bold text-white text-base mb-2"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    {t.title}
                  </h3>
                  <p
                    className="text-sm text-white/50 leading-relaxed"
                    style={{ fontFamily: "DM Sans" }}
                  >
                    {t.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding history */}
      <section className="py-20" style={{ background: "oklch(0.09 0.015 240)" }}>
        <div className="container max-w-3xl">
          <div className="mono-label text-xs text-white/40 mb-8">◆ Funding History</div>
          <div className="flex flex-col gap-4">
            {milestones.map((m, i) => (
              <motion.div
                key={m.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl flex items-start gap-6 flex-wrap"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: m.phase === "Series C" ? "1px solid rgba(212, 168, 71, 0.3)" : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="min-w-[100px]">
                  <div
                    className="font-bold text-sm mb-0.5"
                    style={{
                      fontFamily: "Space Grotesk",
                      color: m.phase === "Series C" ? "#D4A847" : "white",
                    }}
                  >
                    {m.phase}
                  </div>
                  <div className="text-xs text-white/35 mono-label">{m.year}</div>
                </div>
                <div className="min-w-[100px]">
                  <div
                    className="font-bold text-base"
                    style={{
                      fontFamily: "Space Grotesk",
                      color: m.phase === "Series C" ? "#D4A847" : "#0EA5E9",
                    }}
                  >
                    {m.amount}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white/50 leading-relaxed" style={{ fontFamily: "DM Sans" }}>
                    {m.use}
                  </p>
                  {m.phase === "Series C" && (
                    <button
                      onClick={() => toast.success("Interest registered!", { description: "Our IR team will reach out within 48 hours." })}
                      className="mt-3 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 hover:scale-[1.03]"
                      style={{
                        background: "rgba(212, 168, 71, 0.15)",
                        border: "1px solid rgba(212, 168, 71, 0.3)",
                        color: "#D4A847",
                        fontFamily: "Space Grotesk",
                      }}
                    >
                      Express Interest
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact IR */}
      <section className="py-20">
        <div className="container text-center max-w-xl mx-auto">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Connect with Investor Relations
          </h2>
          <p className="text-white/50 mb-8" style={{ fontFamily: "DM Sans" }}>
            For institutional investors, family offices, and strategic partners interested in
            KrishuAI's Series C.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => toast.success("Deck requested!", { description: "You'll receive the investor deck within 24 hours under NDA." })}
              className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #D4A847, #B8922E)",
                color: "#050A14",
                fontFamily: "Space Grotesk",
                boxShadow: "0 0 40px rgba(212, 168, 71, 0.3)",
              }}
            >
              Request Investor Deck
            </button>
            <button
              onClick={() => toast.success("Meeting requested!", { description: "Our IR team will schedule a call within 48 hours." })}
              className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "Space Grotesk",
              }}
            >
              Schedule IR Meeting
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
