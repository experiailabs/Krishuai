/*
 * KrishuAI — BharatAgenticStack Component (v3.0)
 * Design: Full interactive architecture diagram — pure React/CSS, no static image
 * Features:
 *   - Six animated layer cards with live pulse flow lines
 *   - Click-to-expand component detail panel per layer
 *   - Animated SVG data-flow arrows between layers
 *   - Glowing accent per layer, blueprint grid background
 *   - Fully responsive, mobile-first
 * Used on: BharatStackPage, all four pillar pages (replaces old BharatStackDiagram)
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const LAYERS = [
  {
    number: "L1",
    title: "Data Sovereignty Layer",
    subtitle: "The Foundation",
    accent: "#D4A847",
    glowRgb: "212, 168, 71",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    tagline: "Sovereign by default. Indian jurisdiction. Zero foreign cloud dependency.",
    description: "The bedrock of the Bharat Agentic Stack. All data ingestion, storage, and processing occurs within Indian jurisdiction — on NIC cloud, state data centres, or approved private infrastructure.",
    components: [
      { name: "Sovereign Data Lake", desc: "Federated storage across state and central government data centres" },
      { name: "Indian Language Corpus", desc: "22+ language training data curated from government, academic, and cultural sources" },
      { name: "Privacy Vault", desc: "Differential privacy and data anonymisation for citizen data protection" },
      { name: "Audit Trail Engine", desc: "Immutable logs of all data access and model decisions for regulatory compliance" },
    ],
    inputs: ["Citizen Data", "Government Records", "IoT Sensors", "Social Signals"],
  },
  {
    number: "L2",
    title: "Multimodal Understanding Layer",
    subtitle: "The Perception Engine",
    accent: "#38BDF8",
    glowRgb: "56, 189, 248",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tagline: "22 languages. Voice, vision, text — simultaneously. India-native.",
    description: "India communicates through voice, image, gesture, and text — often simultaneously. This layer processes all modalities in real time, understanding context across 22 official languages and hundreds of regional dialects.",
    components: [
      { name: "Bharat Speech Engine", desc: "ASR/TTS for 22 Indian languages with dialect adaptation" },
      { name: "Document Intelligence", desc: "OCR and understanding for handwritten Hindi, regional scripts, and government forms" },
      { name: "Visual Context Engine", desc: "Image and video understanding trained on Indian visual contexts" },
      { name: "Cross-Modal Fusion", desc: "Unified understanding across simultaneous voice, image, and text inputs" },
    ],
    inputs: ["Voice Input", "Document Scans", "Video Streams", "Text Queries"],
  },
  {
    number: "L3",
    title: "Reasoning & Knowledge Layer",
    subtitle: "The Intelligence Core",
    accent: "#A78BFA",
    glowRgb: "167, 139, 250",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    tagline: "Indic-tuned LLM. Domain knowledge graphs. Explainable by design.",
    description: "The cognitive engine of the Stack. Domain-specific reasoning models trained on Indian governance, law, agriculture, healthcare, and education — enabling accurate, contextually appropriate decisions.",
    components: [
      { name: "Policy Reasoning Engine", desc: "Understands Indian law, government schemes, and constitutional provisions" },
      { name: "Domain Knowledge Graphs", desc: "Structured knowledge for agriculture, healthcare, education, and finance" },
      { name: "Predictive Analytics Core", desc: "Time-series forecasting for policy impact, demand prediction, and resource planning" },
      { name: "Explainability Module", desc: "Generates human-readable explanations for every AI decision" },
    ],
    inputs: ["Structured Queries", "Policy Documents", "Historical Data", "Domain Context"],
  },
  {
    number: "L4",
    title: "Agentic Orchestration Layer",
    subtitle: "The Action Engine",
    accent: "#F472B6",
    glowRgb: "244, 114, 182",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    tagline: "Autonomous agents. Multi-step workflows. Human-in-the-loop when it matters.",
    description: "Transforms intelligence into action. Autonomous agents that plan, execute, and adapt — handling complex multi-step workflows like pension processing, student assessment, and guest service delivery without human intervention.",
    components: [
      { name: "Task Planning Agent", desc: "Decomposes complex goals into executable sub-tasks with dependency management" },
      { name: "Tool Use Framework", desc: "Agents that interface with government APIs, databases, and external services" },
      { name: "Multi-Agent Coordinator", desc: "Orchestrates specialist agents for complex cross-domain workflows" },
      { name: "Human-in-the-Loop Gateway", desc: "Escalation protocols for decisions requiring human judgment or oversight" },
    ],
    inputs: ["Reasoning Output", "Tool Calls", "Agent Memory", "Workflow State"],
  },
  {
    number: "L5",
    title: "Integration & Delivery Layer",
    subtitle: "The Connection Fabric",
    accent: "#FB923C",
    glowRgb: "251, 146, 60",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    tagline: "NIC. DigiLocker. UIDAI. Legacy bridges. Offline-first for Bharat.",
    description: "Connects the Stack to existing government and enterprise systems — legacy databases, state portals, mobile apps, and physical kiosks — without requiring complete system replacement.",
    components: [
      { name: "Government API Gateway", desc: "Pre-built connectors for NIC systems, DigiLocker, UIDAI, and state portals" },
      { name: "Legacy System Bridge", desc: "Adapters for COBOL, Oracle, and other legacy government infrastructure" },
      { name: "Omnichannel Delivery", desc: "Unified output across web, mobile, WhatsApp, IVR, and physical kiosks" },
      { name: "Offline Sync Engine", desc: "Enables AI functionality in low-connectivity rural environments" },
    ],
    inputs: ["Agent Actions", "API Calls", "Webhook Events", "Sync Requests"],
  },
  {
    number: "L6",
    title: "Outcome Measurement Layer",
    subtitle: "The Impact Engine",
    accent: "#22C55E",
    glowRgb: "34, 197, 94",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    tagline: "Outcome dashboards. Bias monitoring. ROI attribution. Continuous improvement.",
    description: "Closes the loop. Continuously measures whether the AI system is achieving its intended outcomes — not just functioning correctly — and feeds insights back to improve all layers above.",
    components: [
      { name: "Outcome Dashboard", desc: "Real-time tracking of citizen impact metrics, not just system performance metrics" },
      { name: "Feedback Loop Engine", desc: "Captures citizen and officer feedback to continuously improve AI responses" },
      { name: "Bias Detection Monitor", desc: "Ongoing monitoring for demographic, linguistic, and geographic bias" },
      { name: "ROI Attribution Engine", desc: "Quantifies the economic and social return on AI investment for each deployment" },
    ],
    inputs: ["Delivery Results", "Citizen Feedback", "System Telemetry", "Outcome Metrics"],
  },
];

// Animated flow dot that travels down the connector line
function FlowDot({ color, delay = 0 }: { color: string; delay?: number }) {
  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
      style={{ background: color, boxShadow: `0 0 6px ${color}` }}
      animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 1.8, delay, repeat: Infinity, ease: "linear" }}
    />
  );
}

// Connector between two layers
function LayerConnector({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div className="relative flex justify-center items-center h-8 my-0">
      {/* Vertical line */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-px h-full"
        style={{
          background: `linear-gradient(180deg, ${fromColor}60, ${toColor}60)`,
        }}
      />
      {/* Animated dots */}
      <FlowDot color={fromColor} delay={0} />
      <FlowDot color={toColor} delay={0.9} />
      {/* Arrow head */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: 0,
          height: 0,
          borderLeft: "5px solid transparent",
          borderRight: "5px solid transparent",
          borderTop: `7px solid ${toColor}80`,
        }}
      />
    </div>
  );
}

// Single layer card
function LayerCard({
  layer,
  index,
  isActive,
  onClick,
}: {
  layer: typeof LAYERS[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.06 }}
    >
      {/* Layer card */}
      <div
        className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
        style={{
          background: isActive
            ? `linear-gradient(135deg, rgba(${layer.glowRgb}, 0.10) 0%, rgba(255,255,255,0.02) 100%)`
            : "rgba(255,255,255,0.025)",
          border: `1px solid ${isActive ? `rgba(${layer.glowRgb}, 0.35)` : "rgba(255,255,255,0.06)"}`,
          boxShadow: isActive ? `0 0 40px rgba(${layer.glowRgb}, 0.12), inset 0 1px 0 rgba(${layer.glowRgb}, 0.1)` : "none",
        }}
        onClick={onClick}
      >
        {/* Header row */}
        <div className="flex items-center gap-4 p-5">
          {/* Layer number badge */}
          <div
            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mono-label text-xs font-bold"
            style={{
              background: `rgba(${layer.glowRgb}, 0.15)`,
              border: `1px solid rgba(${layer.glowRgb}, 0.3)`,
              color: layer.accent,
            }}
          >
            {layer.number}
          </div>

          {/* Icon */}
          <div
            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: `rgba(${layer.glowRgb}, 0.08)`,
              color: layer.accent,
            }}
          >
            {layer.icon}
          </div>

          {/* Title block */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3
                className="text-base font-bold text-white leading-tight"
                style={{ fontFamily: "Space Grotesk" }}
              >
                {layer.title}
              </h3>
              <span
                className="mono-label text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                style={{
                  background: `rgba(${layer.glowRgb}, 0.12)`,
                  color: layer.accent,
                  border: `1px solid rgba(${layer.glowRgb}, 0.2)`,
                }}
              >
                {layer.subtitle}
              </span>
            </div>
            <p
              className="text-xs text-white/45 mt-0.5 leading-tight hidden sm:block"
              style={{ fontFamily: "DM Sans" }}
            >
              {layer.tagline}
            </p>
          </div>

          {/* Input tags — desktop only */}
          <div className="hidden lg:flex gap-1.5 flex-shrink-0">
            {layer.inputs.map((inp) => (
              <span
                key={inp}
                className="text-xs px-2 py-0.5 rounded-md"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "DM Mono, monospace",
                  fontSize: "0.65rem",
                }}
              >
                {inp}
              </span>
            ))}
          </div>

          {/* Expand chevron */}
          <motion.div
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="flex-shrink-0 text-white/30"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </motion.div>
        </div>

        {/* Expanded detail panel */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div
                className="px-5 pb-5 pt-0"
                style={{
                  borderTop: `1px solid rgba(${layer.glowRgb}, 0.12)`,
                }}
              >
                {/* Description */}
                <p
                  className="text-sm text-white/55 leading-relaxed mt-4 mb-5"
                  style={{ fontFamily: "DM Sans" }}
                >
                  {layer.description}
                </p>

                {/* Component grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {layer.components.map((comp, ci) => (
                    <motion.div
                      key={comp.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: ci * 0.06 }}
                      className="rounded-xl p-3"
                      style={{
                        background: `rgba(${layer.glowRgb}, 0.05)`,
                        border: `1px solid rgba(${layer.glowRgb}, 0.12)`,
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mb-2"
                        style={{ background: layer.accent }}
                      />
                      <div
                        className="text-xs font-semibold text-white/85 mb-1 leading-tight"
                        style={{ fontFamily: "Space Grotesk" }}
                      >
                        {comp.name}
                      </div>
                      <div
                        className="text-xs text-white/40 leading-tight"
                        style={{ fontFamily: "DM Sans" }}
                      >
                        {comp.desc}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── Main exported component ───────────────────────────────────────────────────
export default function BharatAgenticStack({
  accentColor = "#D4A847",
  glowRgb = "212, 168, 71",
  showHeader = true,
}: {
  accentColor?: string;
  glowRgb?: string;
  showHeader?: boolean;
}) {
  const [activeLayer, setActiveLayer] = useState<string | null>("L1");
  const [pulse, setPulse] = useState(0);

  // Auto-cycle through layers every 4s when none is manually selected
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => (p + 1) % LAYERS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleLayerClick = (num: string) => {
    setActiveLayer((prev) => (prev === num ? null : num));
  };

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.07 0.015 240)" }}
    >
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, rgba(${glowRgb}, 0.06) 0%, transparent 70%)`,
        }}
      />

      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(${glowRgb}, 0.3), transparent)`,
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <div
              className="mono-label text-xs mb-4 inline-block px-3 py-1.5 rounded-full border"
              style={{
                borderColor: `rgba(${glowRgb}, 0.3)`,
                color: accentColor,
                background: `rgba(${glowRgb}, 0.08)`,
              }}
            >
              ◆ Technical Architecture
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <h2
                  className="text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  The Bharat{" "}
                  <span style={{ color: accentColor }}>Agentic Stack</span>
                </h2>
                <p
                  className="text-lg text-white/45 max-w-2xl leading-relaxed"
                  style={{ fontFamily: "DM Sans" }}
                >
                  Six sovereign layers — from raw multimodal inputs to measurable outcome delivery.
                  Click any layer to explore its components.
                </p>
              </div>
              {/* Live pulse indicator */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#22C55E" }}
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span
                  className="mono-label text-xs text-white/40"
                >
                  Live Architecture · v3.0
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stack diagram — layers with connectors */}
        <div className="max-w-5xl mx-auto">
          {/* Top label */}
          <div className="flex items-center justify-center mb-4">
            <div
              className="mono-label text-xs px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              ↑ Raw Inputs: Citizens · Data · Signals · Documents
            </div>
          </div>

          {LAYERS.map((layer, i) => (
            <div key={layer.number}>
              <LayerCard
                layer={layer}
                index={i}
                isActive={activeLayer === layer.number}
                onClick={() => handleLayerClick(layer.number)}
              />
              {i < LAYERS.length - 1 && (
                <LayerConnector
                  fromColor={layer.accent}
                  toColor={LAYERS[i + 1].accent}
                />
              )}
            </div>
          ))}

          {/* Bottom label */}
          <div className="flex items-center justify-center mt-4">
            <div
              className="mono-label text-xs px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.2)",
                color: "rgba(34,197,94,0.7)",
              }}
            >
              ↓ Outcomes: Governance · Education · Travel · Entertainment
            </div>
          </div>
        </div>

        {/* Layer quick-nav pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mt-12"
        >
          {LAYERS.map((layer) => (
            <button
              key={layer.number}
              onClick={() => handleLayerClick(layer.number)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
              style={{
                background: activeLayer === layer.number
                  ? `rgba(${layer.glowRgb}, 0.18)`
                  : "rgba(255,255,255,0.04)",
                border: `1px solid ${activeLayer === layer.number ? `rgba(${layer.glowRgb}, 0.4)` : "rgba(255,255,255,0.08)"}`,
                color: activeLayer === layer.number ? layer.accent : "rgba(255,255,255,0.4)",
                fontFamily: "Space Grotesk",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: layer.accent }}
              />
              {layer.number} · {layer.subtitle}
            </button>
          ))}
        </motion.div>

        {/* Caption */}
        <div className="mt-8 text-center mono-label text-xs text-white/25">
          Bharat Agentic Stack v3.0 · National Intelligence Layer · KrishuAI Architecture · Click any layer to expand
        </div>
      </div>
    </section>
  );
}
