/*
 * KrishuAI — Research Papers Page
 * Route: /research
 * Design: Academic but cinematic — dark canvas, Electric Blue accent
 */

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const categories = ["All", "Governance AI", "EdTech AI", "Multimodal NLP", "Agentic Systems", "Policy"];

const papers = [
  {
    category: "Governance AI",
    accent: "#D4A847",
    year: "2025",
    type: "Whitepaper",
    title: "Digital Twin States: A Framework for AI-Driven Governance in India",
    authors: ["Krishu Sharma", "Arjun Mehta", "Dr. Ravi Shankar"],
    abstract:
      "We present the Digital Twin State (DTS) framework — a methodology for constructing living AI models of state economies that enable evidence-based policy simulation before implementation. Applied to 3 Indian states, DTS reduced policy decision cycles by 40% and improved welfare targeting accuracy by 62%.",
    tags: ["Digital Twin", "Policy Simulation", "Governance", "Bharat Stack"],
    pages: 34,
  },
  {
    category: "Multimodal NLP",
    accent: "#0EA5E9",
    year: "2025",
    type: "Research Paper",
    title: "Bharat Speech: A Multilingual ASR/TTS System for 22 Indian Languages",
    authors: ["Priya Nair", "Krishu Sharma", "Dr. Ananya Iyer"],
    abstract:
      "We introduce Bharat Speech, a sovereign automatic speech recognition and text-to-speech system trained exclusively on Indian-origin corpora. Bharat Speech achieves state-of-the-art WER on 18 of 22 Indian languages, with particular improvements in low-resource languages like Santali and Dogri.",
    tags: ["ASR", "TTS", "Indian Languages", "Sovereign AI"],
    pages: 28,
  },
  {
    category: "EdTech AI",
    accent: "#22D3EE",
    year: "2024",
    type: "Whitepaper",
    title: "Sovereign Learning Agents: Personalised Education for 500M Indian Students",
    authors: ["Priya Nair", "Dr. Meera Krishnamurthy"],
    abstract:
      "This paper presents the architecture and deployment results of KrishuAI's Sovereign Learning Agent system — adaptive AI tutors that personalise curriculum, teaching style, and language for each student. Deployed across 3 national education boards, the system improved standardised test scores by 34%.",
    tags: ["Adaptive Learning", "EdTech", "Personalisation", "Sovereign AI"],
    pages: 22,
  },
  {
    category: "Agentic Systems",
    accent: "#A78BFA",
    year: "2024",
    type: "Research Paper",
    title: "Multi-Agent Orchestration for Government Service Delivery at Scale",
    authors: ["Krishu Sharma", "Arjun Mehta"],
    abstract:
      "We describe the multi-agent orchestration architecture underlying the Bharat Agentic Stack's citizen services layer. Our approach enables autonomous handling of complex government workflows — pension processing, land records, and grievance redressal — with 99.2% accuracy and sub-72-hour resolution times.",
    tags: ["Multi-Agent", "Orchestration", "Citizen Services", "Automation"],
    pages: 19,
  },
  {
    category: "Policy",
    accent: "#D4A847",
    year: "2024",
    type: "Policy Brief",
    title: "The Case for AI Sovereignty: Why India Cannot Afford Foreign AI Dependency",
    authors: ["Arjun Mehta", "Krishu Sharma"],
    abstract:
      "A policy argument for India's AI sovereignty mandate. We analyse the strategic, economic, and constitutional risks of dependency on foreign AI infrastructure, and propose a legislative framework for the Bharat Agentic Stack as national AI infrastructure.",
    tags: ["AI Policy", "Sovereignty", "National Security", "Legislation"],
    pages: 16,
  },
  {
    category: "Governance AI",
    accent: "#D4A847",
    year: "2023",
    type: "Research Paper",
    title: "Predictive Policy Engine: Forecasting Legislative Impact with Agentic AI",
    authors: ["Arjun Mehta", "Dr. Ravi Shankar", "Krishu Sharma"],
    abstract:
      "We present the Predictive Policy Engine (PPE) — an agentic AI system that analyses legislative data, economic indicators, and citizen feedback to forecast policy impact before bills are enacted. Validated against 5 years of historical policy data with 78% accuracy.",
    tags: ["Policy AI", "Prediction", "Legislative Analysis", "Government"],
    pages: 31,
  },
];

export default function ResearchPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? papers : papers.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.08 0.015 240)" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(14, 165, 233, 0.06) 0%, transparent 70%)",
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
                borderColor: "rgba(14, 165, 233, 0.3)",
                color: "rgba(14, 165, 233, 0.9)",
                background: "rgba(14, 165, 233, 0.08)",
              }}
            >
              ◆ Research & Publications
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Intelligence,{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #0EA5E9, #D4A847)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Published
              </span>
            </h1>
            <p
              className="text-lg text-white/55 leading-relaxed"
              style={{ fontFamily: "DM Sans" }}
            >
              KrishuAI's research team publishes whitepapers, research papers, and policy briefs
              that advance the science and practice of sovereign AI for India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12">
        <div className="container">
          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className="px-4 py-2 rounded-full text-sm transition-all duration-200"
                style={{
                  background: activeCategory === c ? "rgba(14, 165, 233, 0.15)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${activeCategory === c ? "rgba(14, 165, 233, 0.4)" : "rgba(255,255,255,0.08)"}`,
                  color: activeCategory === c ? "#0EA5E9" : "rgba(255,255,255,0.5)",
                  fontFamily: "DM Sans",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Papers */}
      <section className="pb-24">
        <div className="container">
          <div className="flex flex-col gap-5">
            {filtered.map((paper, i) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-7 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid rgba(255,255,255,0.07)`,
                }}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: `${paper.accent}15`,
                        border: `1px solid ${paper.accent}30`,
                        color: paper.accent,
                        fontFamily: "DM Sans",
                      }}
                    >
                      {paper.type}
                    </span>
                    <span className="text-xs text-white/35 mono-label">{paper.year}</span>
                    <span className="text-xs text-white/35 mono-label">{paper.pages} pages</span>
                  </div>
                  <button
                    onClick={() => toast.success("Download requested!", { description: "The paper will be sent to your email. Please contact us to receive it." })}
                    className="text-xs px-4 py-2 rounded-full transition-all duration-200 hover:scale-[1.03] flex-shrink-0"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.7)",
                      fontFamily: "DM Sans",
                    }}
                  >
                    ↓ Download PDF
                  </button>
                </div>

                <h3
                  className="text-lg font-bold text-white mb-2 leading-tight"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  {paper.title}
                </h3>
                <div
                  className="text-xs text-white/40 mb-4"
                  style={{ fontFamily: "DM Sans" }}
                >
                  {paper.authors.join(", ")}
                </div>
                <p
                  className="text-sm text-white/55 leading-relaxed mb-4"
                  style={{ fontFamily: "DM Sans" }}
                >
                  {paper.abstract}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {paper.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-lg"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.4)",
                        fontFamily: "DM Sans",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
