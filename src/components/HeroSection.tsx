/*
 * KrishuAI — HeroSection Component
 * Design: Full-bleed dark canvas, crystal compass 3D render, particle field overlay
 * Accents: Electric Blue + Tech-Gold gradient text
 * Layout: Asymmetric — headline left-anchored, compass image right
 */

import { motion } from "framer-motion";
import ParticleField from "./ParticleField";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/hero_crystal_compass-ZkqZYo3v8RKBmGGR4X3ytw.webp";

const stats = [
  { value: "4", label: "Strategic Pillars", suffix: "" },
  { value: "6", label: "Stack Layers Deep", suffix: "" },
  { value: "22", label: "Indian Languages", suffix: "+" },
  { value: "100", label: "Agent-First by Design", suffix: "%" },
];

export default function HeroSection() {
  const scrollToPillars = () => {
    document.querySelector("#pillars")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "oklch(0.08 0.015 240)" }}
    >
      {/* Particle field background */}
      <ParticleField />

      {/* Radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(14, 165, 233, 0.08) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 60%, rgba(212, 168, 71, 0.06) 0%, transparent 60%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,165,233,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="mono-label text-xs px-3 py-1.5 rounded-full border"
                style={{
                  borderColor: "rgba(14, 165, 233, 0.3)",
                  color: "rgba(14, 165, 233, 0.9)",
                  background: "rgba(14, 165, 233, 0.08)",
                }}>
                ◆ Global AI Technology House
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1
                className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
                style={{ fontFamily: "Space Grotesk" }}
              >
                <span className="text-white">Beyond</span>
                <br />
                <span className="text-gradient-blue">Implementation.</span>
                <br />
                <span className="text-gradient-gold">Outcome Design.</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-lg text-white/60 leading-relaxed max-w-lg"
              style={{ fontFamily: "DM Sans" }}
            >
              KrishuAI architects high-impact Multimodal Agentic AI systems for
              India and the world — transforming Governance, Education, Travel,
              and Entertainment through sovereign intelligence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={scrollToPillars}
                className="relative px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
                  fontFamily: "Space Grotesk",
                  boxShadow: "0 0 30px rgba(14, 165, 233, 0.4)",
                }}
              >
                Explore Our Pillars
              </button>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-full font-semibold border transition-all duration-300 hover:bg-white/8"
                style={{
                  borderColor: "rgba(212, 168, 71, 0.4)",
                  color: "rgba(212, 168, 71, 0.9)",
                  fontFamily: "Space Grotesk",
                }}
              >
                Partner With Us
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="grid grid-cols-4 gap-4 pt-6 border-t"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span
                    className="text-2xl font-bold text-gradient-blue"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    {s.value}{s.suffix}
                  </span>
                  <span className="text-xs text-white/40 leading-tight" style={{ fontFamily: "DM Sans" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Crystal Compass image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)",
              }}
            />
            <img
              src={HERO_IMAGE}
              alt="KrishuAI Crystal Compass — Four Pillars of AI"
              className="relative z-10 w-full max-w-xl rounded-2xl"
              style={{
                filter: "drop-shadow(0 0 40px rgba(14, 165, 233, 0.3))",
              }}
            />
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 left-4 glass-card rounded-xl px-4 py-3 z-20"
            >
              <div className="mono-label text-xs" style={{ color: "rgba(212, 168, 71, 0.9)" }}>
                BHARAT AGENTIC STACK
              </div>
              <div className="text-white text-sm font-semibold mt-0.5" style={{ fontFamily: "Space Grotesk" }}>
                National Intelligence Layer
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, oklch(0.08 0.015 240))",
        }}
      />
    </section>
  );
}
