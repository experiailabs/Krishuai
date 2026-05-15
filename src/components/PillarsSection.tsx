/*
 * KrishuAI — PillarsSection Component
 * Design: Bento-box asymmetric grid, glassmorphic cards
 * Hover: Each pillar morphs its glow color and shows blueprint/fluid aesthetic
 * Pillars: Governance (gold/blueprint), EdTech (cyan/neural), Travel (amber/warm), Entertainment (violet/fluid)
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const GOVERNANCE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/pillar_governance-gEMvZ7T8NLwiDMNyMovAvK.webp";
const EDTECH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/pillar_edtech-mDfQ3ELRBu4wvYwuoZbNEe.webp";
const TRAVEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/pillar_travel-DkMUMrhPssqX3BTGRci2AA.webp";
const ENTERTAINMENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/pillar_entertainment-GiFA2EaBejPQVCMdS8Qg4X.webp";

const pillars = [
  {
    id: "governance",
    href: "/solutions/governance",
    number: "01",
    title: "AI for Governance",
    subtitle: "G2B / G2G Intelligence",
    description:
      "Designing the Bharat Agentic Stack — a localized, multimodal AI framework that understands regional Indian languages to autonomously deliver government services: pensions, agriculture, healthcare, and predictive policy-making.",
    image: GOVERNANCE_IMG,
    accentColor: "#D4A847",
    glowClass: "glow-gold",
    tags: ["Digital Twin States", "Citizen Services AI", "Policy Automation", "National Intelligence Layer"],
    stat: { value: "1B+", label: "Citizens Impacted" },
    hoverBg: "rgba(212, 168, 71, 0.06)",
    borderHover: "rgba(212, 168, 71, 0.3)",
  },
  {
    id: "edtech",
    href: "/solutions/edtech",
    number: "02",
    title: "AI EdTech",
    subtitle: "Sovereign Learning Agents",
    description:
      "Lifelong learning agents that adapt to each learner's cognitive profile, delivering automated pedagogy in 22+ Indian languages. Building the infrastructure for India's knowledge sovereignty.",
    image: EDTECH_IMG,
    accentColor: "#22D3EE",
    glowClass: "glow-blue",
    tags: ["Adaptive Learning AI", "Multilingual Pedagogy", "Autonomous Tutors", "Skill Intelligence"],
    stat: { value: "500M+", label: "Learners Addressable" },
    hoverBg: "rgba(34, 211, 238, 0.06)",
    borderHover: "rgba(34, 211, 238, 0.3)",
  },
  {
    id: "travel",
    href: "/solutions/travel",
    number: "03",
    title: "AI Travel & Hospitality",
    subtitle: "Hyper-Personalized Journeys",
    description:
      "Multimodal concierge systems that anticipate guest preferences before they're expressed. From booking to checkout, every touchpoint is orchestrated by an AI that knows your guest better than they know themselves.",
    image: TRAVEL_IMG,
    accentColor: "#FBBF24",
    glowClass: "glow-amber",
    tags: ["Multimodal Concierge", "Predictive Hospitality", "Guest Journey AI", "Revenue Intelligence"],
    stat: { value: "3.2x", label: "Revenue Uplift" },
    hoverBg: "rgba(251, 191, 36, 0.06)",
    borderHover: "rgba(251, 191, 36, 0.3)",
  },
  {
    id: "entertainment",
    href: "/solutions/entertainment",
    number: "04",
    title: "AI Entertainment",
    subtitle: "Generative Media & Storytelling",
    description:
      "AI-driven creative pipelines that generate scripts, characters, visual assets, and immersive narratives. From Bollywood to global streaming — we're building the infrastructure for the next era of human storytelling.",
    image: ENTERTAINMENT_IMG,
    accentColor: "#A78BFA",
    glowClass: "glow-violet",
    tags: ["Generative Storytelling", "AI Film Production", "Immersive Experiences", "Creative Intelligence"],
    stat: { value: "10x", label: "Production Speed" },
    hoverBg: "rgba(167, 139, 250, 0.06)",
    borderHover: "rgba(167, 139, 250, 0.3)",
  },
];

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={pillar.href}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass-card rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500"
      style={{
        border: `1px solid ${hovered ? pillar.borderHover : "rgba(255,255,255,0.08)"}`,
        background: hovered ? pillar.hoverBg : "rgba(255, 255, 255, 0.04)",
        boxShadow: hovered
          ? `0 0 40px ${pillar.accentColor}25, 0 0 80px ${pillar.accentColor}10`
          : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={pillar.image}
          alt={pillar.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 40%, oklch(0.08 0.015 240) 100%)`,
          }}
        />
        {/* Number badge */}
        <div
          className="absolute top-4 left-4 mono-label text-xs px-2 py-1 rounded-md"
          style={{
            background: `${pillar.accentColor}20`,
            border: `1px solid ${pillar.accentColor}40`,
            color: pillar.accentColor,
          }}
        >
          {pillar.number}
        </div>
        {/* Stat badge */}
        <div className="absolute top-4 right-4 glass-card rounded-lg px-3 py-1.5">
          <div className="text-lg font-bold" style={{ fontFamily: "Space Grotesk", color: pillar.accentColor }}>
            {pillar.stat.value}
          </div>
          <div className="text-xs text-white/50" style={{ fontFamily: "DM Sans" }}>
            {pillar.stat.label}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        <div>
          <div className="mono-label text-xs mb-1" style={{ color: `${pillar.accentColor}90` }}>
            {pillar.subtitle}
          </div>
          <h3
            className="text-xl font-bold text-white"
            style={{ fontFamily: "Space Grotesk" }}
          >
            {pillar.title}
          </h3>
        </div>

        <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: "DM Sans" }}>
          {pillar.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {pillar.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                background: `${pillar.accentColor}12`,
                border: `1px solid ${pillar.accentColor}25`,
                color: `${pillar.accentColor}CC`,
                fontFamily: "DM Sans",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex items-center gap-2 text-sm font-medium mt-1 transition-all duration-300"
          style={{
            color: pillar.accentColor,
            fontFamily: "Space Grotesk",
            opacity: hovered ? 1 : 0.7,
          }}
        >
          Explore Deep-Dive
          <motion.span
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}

export default function PillarsSection() {
  return (
    <section id="pillars" className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.08 0.015 240)" }}>
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(14, 165, 233, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div
            className="mono-label text-xs mb-4 inline-block px-3 py-1.5 rounded-full border"
            style={{
              borderColor: "rgba(14, 165, 233, 0.3)",
              color: "rgba(14, 165, 233, 0.9)",
              background: "rgba(14, 165, 233, 0.08)",
            }}
          >
            ◆ Four Strategic Pillars
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Where AI Meets{" "}
            <span className="text-gradient-mixed">Human Ambition</span>
          </h2>
          <p
            className="text-lg text-white/50 max-w-2xl"
            style={{ fontFamily: "DM Sans" }}
          >
            Four verticals. One unified intelligence architecture. Each pillar
            is a sovereign domain where KrishuAI deploys outcome-driven agentic
            systems that don't just assist — they deliver.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
