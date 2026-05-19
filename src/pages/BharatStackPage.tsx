/*
 * KrishuAI — Bharat Agentic Stack Page (v3.0)
 * Route: /bharat-stack
 * Design: Cinematic hero + interactive BharatAgenticStack component
 * Tech-Gold accent, blueprint grid, FAQ accordion
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import BharatAgenticStack from "@/components/BharatAgenticStack";
import { Link } from "wouter";
import { toast } from "sonner";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/bharat_stack_hero-GGgz9ZZaPQxArfHupPPxRY.webp";

const faqs = [
  {
    q: "Can the Bharat Agentic Stack be deployed on-premise?",
    a: "Yes. The Stack is designed for on-premise deployment on NIC cloud, state data centres, or approved private infrastructure. We do not require any foreign cloud dependency.",
  },
  {
    q: "How does it handle India's linguistic diversity?",
    a: "The Multimodal Understanding Layer (L2) supports 22 official Indian languages with dialect adaptation. Models are trained on Indian-origin corpora, not adapted from English-first models.",
  },
  {
    q: "What is the typical deployment timeline?",
    a: "A pilot deployment for a single use case (e.g., citizen services AI for one district) typically takes 8–12 weeks. Full state-wide deployment is typically 6–12 months depending on integration complexity.",
  },
  {
    q: "How is citizen data protected?",
    a: "The Data Sovereignty Layer (L1) implements differential privacy, data anonymisation, and immutable audit trails. All data remains within Indian jurisdiction and is governed by Indian data protection law.",
  },
  {
    q: "Can it integrate with existing government systems?",
    a: "Yes. The Integration & Delivery Layer (L5) includes pre-built connectors for NIC systems, DigiLocker, UIDAI, and state portals, as well as adapters for legacy infrastructure.",
  },
  {
    q: "Is the Stack available for private enterprise use?",
    a: "Yes. While designed with government-grade sovereignty requirements, the Stack is fully applicable to enterprise use cases in hospitality, education, and entertainment — with configurable compliance profiles.",
  },
];

const pillars = [
  { label: "AI Governance", href: "/solutions/governance", color: "#D4A847", icon: "⚖️" },
  { label: "AI EdTech", href: "/solutions/edtech", color: "#38BDF8", icon: "🎓" },
  { label: "AI Travel", href: "/solutions/travel", color: "#22D3EE", icon: "✈️" },
  { label: "AI Entertainment", href: "/solutions/entertainment", color: "#A78BFA", icon: "🎬" },
];

export default function BharatStackPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.07 0.015 240)" }}>
      <SEO
        title="Bharat Agentic Stack — India's Sovereign AI Architecture | KrishuAI"
        description="The Bharat Agentic Stack is India's first sovereign, multilingual, multimodal AI framework — purpose-built for government, enterprise, EdTech, and entertainment at national scale."
        keywords="Bharat Agentic Stack, India sovereign AI architecture, multilingual AI India, agentic AI framework India, KrishuAI Bharat Stack, sovereign AI infrastructure"
        canonical="/bharat-stack"
        ogImage={HERO_IMG}
        ogImageAlt="Bharat Agentic Stack — India's sovereign AI architecture visualised as a six-layer holographic stack"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://krishuaitech-murffryc.manus.space/" },
            { "@type": "ListItem", position: 2, name: "Bharat Agentic Stack", item: "https://krishuaitech-murffryc.manus.space/bharat-stack" }
          ]
        }}
      />
      <Navigation />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-0 relative overflow-hidden">
        {/* Ambient gold glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(212,168,71,0.09) 0%, transparent 70%)",
          }}
        />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center pb-12">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
            >
              <div
                className="mono-label text-xs mb-5 inline-block px-3 py-1.5 rounded-full border"
                style={{
                  borderColor: "rgba(212,168,71,0.35)",
                  color: "rgba(212,168,71,0.9)",
                  background: "rgba(212,168,71,0.08)",
                }}
              >
                ◆ Bharat Agentic Stack · v3.0
              </div>
              <h1
                className="text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "Space Grotesk" }}
              >
                India's Sovereign{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #D4A847, #F5D98B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  AI Architecture
                </span>
              </h1>
              <p
                className="text-lg text-white/50 leading-relaxed mb-8"
                style={{ fontFamily: "DM Sans" }}
              >
                A six-layer multimodal agentic AI framework designed specifically for India —
                sovereign by default, multilingual by design, and outcome-driven at every layer.
              </p>

              {/* Stats row */}
              <div className="flex gap-6 mb-8 flex-wrap">
                {[
                  { val: "6", label: "Architecture Layers" },
                  { val: "22+", label: "Indian Languages" },
                  { val: "4", label: "Domain Pillars" },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      className="text-3xl font-bold"
                      style={{
                        fontFamily: "Space Grotesk",
                        color: "#D4A847",
                      }}
                    >
                      {s.val}
                    </div>
                    <div
                      className="text-xs text-white/40 mt-0.5"
                      style={{ fontFamily: "DM Sans" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() =>
                    toast.success("Architecture brief requested!", {
                      description:
                        "Our team will send the detailed technical brief within 24 hours.",
                    })
                  }
                  className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    background: "linear-gradient(135deg, #D4A847, #B8922E)",
                    color: "#050A14",
                    fontFamily: "Space Grotesk",
                    boxShadow: "0 0 30px rgba(212,168,71,0.3)",
                  }}
                >
                  Request Architecture Brief
                </button>
                <Link href="/solutions/governance">
                  <button
                    className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.8)",
                      fontFamily: "Space Grotesk",
                    }}
                  >
                    See It in Action →
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Right — cinematic hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.15 }}
              className="relative rounded-3xl overflow-hidden"
              style={{
                border: "1px solid rgba(212,168,71,0.15)",
                boxShadow: "0 0 80px rgba(212,168,71,0.12), 0 40px 80px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={HERO_IMG}
                alt="Bharat Agentic Stack — Six Layer Architecture"
                className="w-full h-auto"
                style={{ display: "block" }}
              />
              {/* Overlay gradient at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.07 0.015 240) 0%, transparent 100%)",
                }}
              />
              {/* Corner badge */}
              <div
                className="absolute top-4 right-4 mono-label text-xs px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(212,168,71,0.15)",
                  border: "1px solid rgba(212,168,71,0.3)",
                  color: "#D4A847",
                  backdropFilter: "blur(8px)",
                }}
              >
                Bharat Stack v3.0
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Interactive Stack Diagram ─────────────────────────────────────── */}
      <BharatAgenticStack showHeader={true} />

      {/* ── Pillar Applications ──────────────────────────────────────────── */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(56,189,248,0.04) 0%, transparent 70%)",
          }}
        />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="mono-label text-xs text-white/40 mb-3">◆ Domain Applications</div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-3"
              style={{ fontFamily: "Space Grotesk" }}
            >
              The Stack Powers All Four Pillars
            </h2>
            <p
              className="text-base text-white/45 max-w-2xl"
              style={{ fontFamily: "DM Sans" }}
            >
              Every KrishuAI solution is built on the Bharat Agentic Stack — the same sovereign
              architecture adapts to each domain's unique requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link href={p.href}>
                  <div
                    className="rounded-2xl p-5 cursor-pointer group transition-all duration-300 hover:scale-[1.03]"
                    style={{
                      background: `rgba(${p.color.replace("#", "").match(/.{2}/g)?.map((h) => parseInt(h, 16)).join(", ")}, 0.06)`,
                      border: `1px solid ${p.color}20`,
                    }}
                  >
                    <div className="text-3xl mb-3">{p.icon}</div>
                    <div
                      className="text-sm font-semibold text-white/85 mb-1"
                      style={{ fontFamily: "Space Grotesk" }}
                    >
                      {p.label}
                    </div>
                    <div
                      className="text-xs group-hover:translate-x-1 transition-transform duration-200"
                      style={{ color: p.color, fontFamily: "DM Sans" }}
                    >
                      Explore →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 relative">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(212,168,71,0.2), transparent)",
          }}
        />
        <div className="container relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="mono-label text-xs text-white/40 mb-3">◆ Technical FAQ</div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Common Questions
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background:
                    expandedFaq === i
                      ? "rgba(212,168,71,0.06)"
                      : "rgba(255,255,255,0.025)",
                  border: `1px solid ${expandedFaq === i ? "rgba(212,168,71,0.25)" : "rgba(255,255,255,0.06)"}`,
                }}
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between gap-4 p-5">
                  <span
                    className="text-sm font-semibold text-white/85"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 text-white/30"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                </div>
                <AnimatePresence initial={false}>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="px-5 pb-5 text-sm text-white/50 leading-relaxed"
                        style={{
                          fontFamily: "DM Sans",
                          borderTop: "1px solid rgba(212,168,71,0.1)",
                          paddingTop: "1rem",
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(212,168,71,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(212,168,71,0.25), transparent)",
          }}
        />
        <div className="container relative z-10 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="mono-label text-xs text-white/40 mb-4">◆ Get Started</div>
            <h2
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Ready to Deploy{" "}
              <span style={{ color: "#D4A847" }}>Sovereign AI?</span>
            </h2>
            <p
              className="text-base text-white/45 mb-8 leading-relaxed"
              style={{ fontFamily: "DM Sans" }}
            >
              Request a detailed architecture brief or speak with our team about deploying the
              Bharat Agentic Stack for your organisation.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() =>
                  toast.success("Architecture brief requested!", {
                    description:
                      "Our team will send the detailed technical brief within 24 hours.",
                  })
                }
                className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(135deg, #D4A847, #B8922E)",
                  color: "#050A14",
                  fontFamily: "Space Grotesk",
                  boxShadow: "0 0 30px rgba(212,168,71,0.3)",
                }}
              >
                Request Architecture Brief
              </button>
              <Link href="/contact">
                <button
                  className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "Space Grotesk",
                  }}
                >
                  Talk to Our Team →
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
