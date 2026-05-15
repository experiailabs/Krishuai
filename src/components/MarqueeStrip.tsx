/*
 * KrishuAI — MarqueeStrip Component
 * Design: Scrolling horizontal marquee with tech keywords
 * Visual: Dark background with gold/blue alternating text
 */

import { motion } from "framer-motion";

const keywords = [
  "Multimodal Agentic AI",
  "◆",
  "Bharat Agentic Stack",
  "◆",
  "Digital Twin States",
  "◆",
  "Sovereign Learning",
  "◆",
  "National Intelligence Layer",
  "◆",
  "Outcome Design",
  "◆",
  "AI for Governance",
  "◆",
  "Generative Media",
  "◆",
  "Hyper-Personalization",
  "◆",
  "G2B / G2G Intelligence",
  "◆",
  "Predictive Policy",
  "◆",
  "AI EdTech",
  "◆",
];

export default function MarqueeStrip() {
  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        background: "oklch(0.10 0.015 240)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, oklch(0.10 0.015 240), transparent)",
        }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, oklch(0.10 0.015 240), transparent)",
        }}
      />

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...keywords, ...keywords].map((word, i) => (
          <span
            key={i}
            className="text-sm font-medium flex-shrink-0"
            style={{
              fontFamily: word === "◆" ? "inherit" : "Space Grotesk",
              color:
                word === "◆"
                  ? "rgba(212, 168, 71, 0.4)"
                  : i % 6 < 3
                  ? "rgba(14, 165, 233, 0.7)"
                  : "rgba(212, 168, 71, 0.7)",
            }}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
