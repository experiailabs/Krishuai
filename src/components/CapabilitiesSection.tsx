/*
 * KrishuAI — CapabilitiesSection Component
 * Design: Bento-grid capability breakdown for each pillar
 * Used by: All four pillar deep-dive pages
 */

import { motion } from "framer-motion";

export interface Capability {
  icon: string;
  title: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

interface CapabilitiesSectionProps {
  capabilities: Capability[];
  accentColor: string;
  glowRgb: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
}

export default function CapabilitiesSection({
  capabilities,
  accentColor,
  glowRgb,
  sectionTitle = "Core Capabilities",
  sectionSubtitle = "Purpose-built AI modules that work together as a unified intelligence system.",
}: CapabilitiesSectionProps) {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.09 0.015 240)" }}
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(${glowRgb},0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(${glowRgb},0.02) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10">
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
            ◆ {sectionTitle}
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk" }}
          >
            What We Deploy
          </h2>
          <p
            className="text-lg text-white/50 max-w-2xl"
            style={{ fontFamily: "DM Sans" }}
          >
            {sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="rounded-2xl p-6 flex flex-col gap-4 group transition-all duration-300"
              style={{
                background: cap.highlight
                  ? `rgba(${glowRgb}, 0.08)`
                  : "rgba(255,255,255,0.03)",
                border: cap.highlight
                  ? `1px solid rgba(${glowRgb}, 0.25)`
                  : "1px solid rgba(255,255,255,0.07)",
              }}
              whileHover={{
                borderColor: `rgba(${glowRgb}, 0.3)`,
                boxShadow: `0 0 30px rgba(${glowRgb}, 0.1)`,
                y: -3,
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{
                  background: `rgba(${glowRgb}, 0.12)`,
                  border: `1px solid rgba(${glowRgb}, 0.2)`,
                  color: accentColor,
                }}
              >
                {cap.icon}
              </div>

              <div>
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  {cap.title}
                </h3>
                <p
                  className="text-sm text-white/55 leading-relaxed"
                  style={{ fontFamily: "DM Sans" }}
                >
                  {cap.description}
                </p>
              </div>

              {/* Feature list */}
              <ul className="flex flex-col gap-1.5 mt-auto">
                {cap.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-xs text-white/50"
                    style={{ fontFamily: "DM Sans" }}
                  >
                    <span style={{ color: accentColor, flexShrink: 0, marginTop: "2px" }}>◆</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
