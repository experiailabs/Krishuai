/*
 * KrishuAI — BharatStackDiagram Component
 * Design: Full-width section with the rendered D2 architecture diagram
 * Features: Layer annotations, zoom-on-click lightbox, accent glow
 * Used on: All four pillar deep-dive pages
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BharatAgenticStack from "./BharatAgenticStack";

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
  

        {/* Layer legend */}
     

        {/* Diagram */}
        <BharatAgenticStack />

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
