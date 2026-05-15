/*
 * KrishuAI — Bharat Agentic Stack Page
 * Route: /bharat-stack
 * Design: Blueprint grid, Tech-Gold accent, architecture deep-dive
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { toast } from "sonner";

const layers = [
  {
    number: "L1",
    title: "Data Sovereignty Layer",
    subtitle: "The Foundation",
    accent: "#D4A847",
    icon: "🔒",
    description:
      "The bedrock of the Bharat Agentic Stack. All data ingestion, storage, and processing occurs within Indian jurisdiction — on NIC cloud, state data centres, or approved private infrastructure. No foreign cloud dependency.",
    components: [
      { name: "Sovereign Data Lake", desc: "Federated storage across state and central government data centres" },
      { name: "Indian Language Corpus", desc: "22+ language training data curated from government, academic, and cultural sources" },
      { name: "Privacy Vault", desc: "Differential privacy and data anonymisation for citizen data protection" },
      { name: "Audit Trail Engine", desc: "Immutable logs of all data access and model decisions for regulatory compliance" },
    ],
  },
  {
    number: "L2",
    title: "Multimodal Understanding Layer",
    subtitle: "The Perception Engine",
    accent: "#0EA5E9",
    icon: "👁️",
    description:
      "India communicates through voice, image, gesture, and text — often simultaneously. This layer processes all modalities in real time, understanding context across 22 official languages and hundreds of regional dialects.",
    components: [
      { name: "Bharat Speech Engine", desc: "ASR/TTS for 22 Indian languages with dialect adaptation" },
      { name: "Document Intelligence", desc: "OCR and understanding for handwritten Hindi, regional scripts, and government forms" },
      { name: "Visual Context Engine", desc: "Image and video understanding trained on Indian visual contexts" },
      { name: "Cross-Modal Fusion", desc: "Unified understanding across simultaneous voice, image, and text inputs" },
    ],
  },
  {
    number: "L3",
    title: "Reasoning & Knowledge Layer",
    subtitle: "The Intelligence Core",
    accent: "#22D3EE",
    icon: "🧠",
    description:
      "The cognitive engine of the Stack. Domain-specific reasoning models trained on Indian governance, law, agriculture, healthcare, and education — enabling accurate, contextually appropriate decisions.",
    components: [
      { name: "Policy Reasoning Engine", desc: "Understands Indian law, government schemes, and constitutional provisions" },
      { name: "Domain Knowledge Graphs", desc: "Structured knowledge for agriculture, healthcare, education, and finance" },
      { name: "Predictive Analytics Core", desc: "Time-series forecasting for policy impact, demand prediction, and resource planning" },
      { name: "Explainability Module", desc: "Generates human-readable explanations for every AI decision" },
    ],
  },
  {
    number: "L4",
    title: "Agentic Orchestration Layer",
    subtitle: "The Action Engine",
    accent: "#A78BFA",
    icon: "⚡",
    description:
      "Transforms intelligence into action. Autonomous agents that plan, execute, and adapt — handling complex multi-step workflows like pension processing, student assessment, and guest service delivery without human intervention.",
    components: [
      { name: "Task Planning Agent", desc: "Decomposes complex goals into executable sub-tasks with dependency management" },
      { name: "Tool Use Framework", desc: "Agents that interface with government APIs, databases, and external services" },
      { name: "Multi-Agent Coordinator", desc: "Orchestrates specialist agents for complex cross-domain workflows" },
      { name: "Human-in-the-Loop Gateway", desc: "Escalation protocols for decisions requiring human judgment or oversight" },
    ],
  },
  {
    number: "L5",
    title: "Integration & Delivery Layer",
    subtitle: "The Connection Fabric",
    accent: "#FB923C",
    icon: "🔗",
    description:
      "Connects the Stack to existing government and enterprise systems — legacy databases, state portals, mobile apps, and physical kiosks — without requiring complete system replacement.",
    components: [
      { name: "Government API Gateway", desc: "Pre-built connectors for NIC systems, DigiLocker, UIDAI, and state portals" },
      { name: "Legacy System Bridge", desc: "Adapters for COBOL, Oracle, and other legacy government infrastructure" },
      { name: "Omnichannel Delivery", desc: "Unified output across web, mobile, WhatsApp, IVR, and physical kiosks" },
      { name: "Offline Sync Engine", desc: "Enables AI functionality in low-connectivity rural environments" },
    ],
  },
  {
    number: "L6",
    title: "Outcome Measurement Layer",
    subtitle: "The Impact Engine",
    accent: "#22C55E",
    icon: "📊",
    description:
      "Closes the loop. Continuously measures whether the AI system is achieving its intended outcomes — not just functioning correctly — and feeds insights back to improve all layers above.",
    components: [
      { name: "Outcome Dashboard", desc: "Real-time tracking of citizen impact metrics, not just system performance metrics" },
      { name: "Feedback Loop Engine", desc: "Captures citizen and officer feedback to continuously improve AI responses" },
      { name: "Bias Detection Monitor", desc: "Ongoing monitoring for demographic, linguistic, and geographic bias" },
      { name: "ROI Attribution Engine", desc: "Quantifies the economic and social return on AI investment for each deployment" },
    ],
  },
];

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
];

export default function BharatStackPage() {
  const [expandedLayer, setExpandedLayer] = useState<string | null>("L1");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.08 0.015 240)" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 40% 40%, rgba(212, 168, 71, 0.07) 0%, transparent 70%)",
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
                borderColor: "rgba(212, 168, 71, 0.3)",
                color: "rgba(212, 168, 71, 0.9)",
                background: "rgba(212, 168, 71, 0.08)",
              }}
            >
              ◆ Bharat Agentic Stack
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk" }}
            >
              India's Sovereign{" "}
              <span style={{ color: "#D4A847" }}>AI Architecture</span>
            </h1>
            <p
              className="text-xl text-white/55 leading-relaxed mb-8"
              style={{ fontFamily: "DM Sans" }}
            >
              A six-layer multimodal agentic AI framework designed specifically for India — sovereign
              by default, multilingual by design, and outcome-driven at every layer.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => toast.success("Architecture brief requested!", { description: "Our team will send the detailed technical brief within 24 hours." })}
                className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(135deg, #D4A847, #B8922E)",
                  color: "#050A14",
                  fontFamily: "Space Grotesk",
                  boxShadow: "0 0 30px rgba(212, 168, 71, 0.3)",
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
        </div>
      </section>

      {/* Six Layers */}
      <section className="py-16">
        <div className="container">
          <div className="mono-label text-xs text-white/40 mb-8">◆ The Six Layers</div>
          <div className="flex flex-col gap-3">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: expandedLayer === layer.number
                    ? `linear-gradient(135deg, rgba(${layer.accent.replace("#", "").match(/.{2}/g)?.map(h => parseInt(h, 16)).join(", ")}, 0.08) 0%, rgba(255,255,255,0.02) 100%)`
                    : "rgba(255,255,255,0.03)",
                  border: `1px solid ${expandedLayer === layer.number ? layer.accent + "30" : "rgba(255,255,255,0.07)"}`,
                  transition: "all 0.3s ease",
                }}
                onClick={() => setExpandedLayer(expandedLayer === layer.number ? null : layer.number)}
              >
                <div className="p-6 flex items-center gap-5">
                  <div
                    className="mono-label text-xs flex-shrink-0 w-8"
                    style={{ color: layer.accent }}
                  >
                    {layer.number}
                  </div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{
                      background: `${layer.accent}15`,
                      border: `1px solid ${layer.accent}25`,
                    }}
                  >
                    {layer.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="font-semibold text-white text-sm"
                      style={{ fontFamily: "Space Grotesk" }}
                    >
                      {layer.title}
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: layer.accent, fontFamily: "DM Sans" }}
                    >
                      {layer.subtitle}
                    </div>
                  </div>
                  <div
                    className="text-white/30 text-sm flex-shrink-0 transition-transform duration-300"
                    style={{ transform: expandedLayer === layer.number ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    ▼
                  </div>
                </div>

                <AnimatePresence>
                  {expandedLayer === layer.number && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-6 pb-6 pt-0 border-t"
                        style={{ borderColor: `${layer.accent}15` }}
                      >
                        <p
                          className="text-sm text-white/55 leading-relaxed mb-5 pt-5"
                          style={{ fontFamily: "DM Sans" }}
                        >
                          {layer.description}
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          {layer.components.map((comp) => (
                            <div
                              key={comp.name}
                              className="p-4 rounded-xl"
                              style={{
                                background: "rgba(255,255,255,0.03)",
                                border: `1px solid ${layer.accent}15`,
                              }}
                            >
                              <div
                                className="text-sm font-semibold text-white mb-1"
                                style={{ fontFamily: "Space Grotesk" }}
                              >
                                {comp.name}
                              </div>
                              <p
                                className="text-xs text-white/45 leading-relaxed"
                                style={{ fontFamily: "DM Sans" }}
                              >
                                {comp.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "oklch(0.09 0.015 240)" }}>
        <div className="container max-w-3xl">
          <div className="mono-label text-xs text-white/40 mb-4">◆ Technical FAQ</div>
          <h2
            className="text-3xl font-bold text-white mb-10"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Common Questions
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-xl overflow-hidden cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
              >
                <div className="p-5 flex items-center justify-between gap-4">
                  <span
                    className="text-sm font-semibold text-white"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="text-white/30 flex-shrink-0 transition-transform duration-300"
                    style={{ transform: expandedFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    ▼
                  </span>
                </div>
                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p
                        className="px-5 pb-5 text-sm text-white/55 leading-relaxed"
                        style={{ fontFamily: "DM Sans" }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Ready to Deploy the Stack?
            </h2>
            <p className="text-white/50 mb-8" style={{ fontFamily: "DM Sans" }}>
              Request a detailed architecture brief or schedule a technical deep-dive with our team.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => toast.success("Brief requested!", { description: "Our architecture team will reach out within 24 hours." })}
                className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(135deg, #D4A847, #B8922E)",
                  color: "#050A14",
                  fontFamily: "Space Grotesk",
                  boxShadow: "0 0 40px rgba(212, 168, 71, 0.3)",
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
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "Space Grotesk",
                  }}
                >
                  Schedule a Deep-Dive
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
