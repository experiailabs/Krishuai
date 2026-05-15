/*
 * KrishuAI — BharatStackDiagram Component
 * Design: Full-width section with the rendered D2 architecture diagram
 * Features: Layer annotations, zoom-on-click lightbox, accent glow
 * Used on: All four pillar deep-dive pages
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DIAGRAM_URL = "/manus-storage/bharat_stack_diagram_dcb451a7.png";

const layers = [
  { label: "Input Sources", color: "#38BDF8", desc: "Citizens, government data, IoT sensors, and social signals" },
  { label: "Multimodal Ingestion", color: "#0EA5E9", desc: "Speech (22+ languages), vision, text, and real-time streams" },
  { label: "Sovereign Intelligence Core", color: "#D4A847", desc: "Indic-tuned LLM, RAG, reasoning engine, and long-term memory" },
  { label: "Agentic Orchestration", color: "#A78BFA", desc: "Task planner, multi-agent executor, validator, and domain router" },
  { label: "Domain Pillars", color: "#22D3EE", desc: "Governance, EdTech, Travel & Hospitality, Entertainment" },
  { label: "Delivery & Impact", color: "#34D399", desc: "Outcome dashboards, sovereign API gateway, compliance audit trail" },
];

export default function BharatStackDiagram({ accentColor = "#0EA5E9", glowRgb = "14, 165, 233" }: { accentColor?: string; glowRgb?: string }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.07 0.015 240)" }}
    >
      {/* Divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(${glowRgb}, 0.3), transparent)`,
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
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
            ◆ Technical Architecture
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk" }}
          >
            The Bharat Agentic Stack
          </h2>
          <p
            className="text-lg text-white/50 max-w-2xl"
            style={{ fontFamily: "DM Sans" }}
          >
            A six-layer sovereign intelligence framework — from raw multimodal inputs to
            measurable outcome delivery. Every component is designed for India's scale,
            languages, and governance requirements.
          </p>
        </motion.div>

        {/* Layer legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10"
        >
          {layers.map((layer, i) => (
            <div
              key={layer.label}
              className="flex flex-col gap-2 p-3 rounded-xl"
              style={{
                background: `${layer.color}08`,
                border: `1px solid ${layer.color}20`,
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: layer.color }}
                />
                <span
                  className="mono-label text-xs"
                  style={{ color: layer.color, fontSize: "0.65rem" }}
                >
                  L{i}
                </span>
              </div>
              <div
                className="text-xs font-medium text-white/80 leading-tight"
                style={{ fontFamily: "Space Grotesk" }}
              >
                {layer.label}
              </div>
              <div
                className="text-xs text-white/40 leading-tight"
                style={{ fontFamily: "DM Sans" }}
              >
                {layer.desc}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden cursor-zoom-in group"
          style={{
            border: `1px solid rgba(${glowRgb}, 0.15)`,
            boxShadow: `0 0 60px rgba(${glowRgb}, 0.08)`,
          }}
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={DIAGRAM_URL}
            alt="Bharat Agentic Stack Architecture Diagram"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
            style={{ background: "#050A14" }}
          />
          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "rgba(5, 10, 20, 0.4)" }}
          >
            <div
              className="px-4 py-2 rounded-full text-sm font-medium text-white flex items-center gap-2"
              style={{
                background: `rgba(${glowRgb}, 0.2)`,
                border: `1px solid rgba(${glowRgb}, 0.4)`,
                fontFamily: "Space Grotesk",
              }}
            >
              <span>⊕</span> Click to expand
            </div>
          </div>
        </motion.div>

        {/* Caption */}
        <div
          className="mt-4 text-center mono-label text-xs text-white/30"
        >
          Bharat Agentic Stack v2.0 · National Intelligence Layer · KrishuAI Architecture
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 cursor-zoom-out"
            style={{ background: "rgba(5, 10, 20, 0.95)" }}
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={DIAGRAM_URL}
                alt="Bharat Agentic Stack Architecture Diagram"
                className="w-full h-auto rounded-2xl"
                style={{ border: `1px solid rgba(${glowRgb}, 0.2)` }}
              />
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
                style={{ background: "rgba(5, 10, 20, 0.8)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
