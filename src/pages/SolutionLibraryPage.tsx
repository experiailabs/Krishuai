/*
 * KrishuAI — Solution Library Page
 * Route: /solution-library
 * Design: Searchable catalogue of AI solutions across all pillars
 */

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { Link } from "wouter";


const pillars = ["All", "Governance", "EdTech", "Travel", "Entertainment"];

const solutions = [
  // Governance
  { pillar: "Governance", accent: "#D4A847", glowRgb: "212, 168, 71", icon: "🏛️", name: "Digital Twin State Engine", desc: "Living AI model of a state economy enabling real-time policy simulation and resource allocation.", deployTime: "12 weeks", impact: "40% faster decisions", href: "/solutions/governance" },
  { pillar: "Governance", accent: "#D4A847", glowRgb: "212, 168, 71", icon: "👤", name: "Citizen Services AI Agent", desc: "Autonomous agent for pension, land records, and welfare scheme delivery in 22 Indian languages.", deployTime: "8 weeks", impact: "72hr processing", href: "/solutions/governance" },
  { pillar: "Governance", accent: "#D4A847", glowRgb: "212, 168, 71", icon: "📋", name: "Predictive Policy Engine", desc: "Forecasts legislative impact using economic indicators, citizen feedback, and historical data.", deployTime: "10 weeks", impact: "78% accuracy", href: "/solutions/governance" },
  { pillar: "Governance", accent: "#D4A847", glowRgb: "212, 168, 71", icon: "🌾", name: "Agricultural Intelligence Platform", desc: "AI-driven crop yield prediction, weather advisory, and market price forecasting for farmers.", deployTime: "6 weeks", impact: "2.3M farmers reached", href: "/solutions/governance" },
  // EdTech
  { pillar: "EdTech", accent: "#22D3EE", glowRgb: "34, 211, 238", icon: "🧠", name: "Sovereign Learning Agent", desc: "Adaptive AI tutor that personalises curriculum, teaching style, and language for each student.", deployTime: "8 weeks", impact: "34% score improvement", href: "/solutions/edtech" },
  { pillar: "EdTech", accent: "#22D3EE", glowRgb: "34, 211, 238", icon: "📊", name: "Learning Analytics Dashboard", desc: "Real-time insights into student performance, engagement, and learning gap identification.", deployTime: "4 weeks", impact: "89% retention", href: "/solutions/edtech" },
  { pillar: "EdTech", accent: "#22D3EE", glowRgb: "34, 211, 238", icon: "🎯", name: "Skill Assessment Engine", desc: "AI-powered competency assessment through voice, practical demonstration, and adaptive testing.", deployTime: "6 weeks", impact: "3x placement rate", href: "/solutions/edtech" },
  { pillar: "EdTech", accent: "#22D3EE", glowRgb: "34, 211, 238", icon: "🌐", name: "Multilingual Content Generator", desc: "Automatically adapts educational content across 22 Indian languages with cultural localisation.", deployTime: "4 weeks", impact: "22 languages", href: "/solutions/edtech" },
  // Travel
  { pillar: "Travel", accent: "#FBBF24", glowRgb: "251, 191, 36", icon: "✈️", name: "Multimodal Concierge AI", desc: "Hyper-personalised guest experience system that anticipates preferences before check-in.", deployTime: "10 weeks", impact: "3.2x revenue uplift", href: "/solutions/travel" },
  { pillar: "Travel", accent: "#FBBF24", glowRgb: "251, 191, 36", icon: "🔄", name: "Disruption Management Agent", desc: "Proactively manages flight delays, rebooking, and compensation in the passenger's language.", deployTime: "6 weeks", impact: "58% cost reduction", href: "/solutions/travel" },
  { pillar: "Travel", accent: "#FBBF24", glowRgb: "251, 191, 36", icon: "📍", name: "Destination Intelligence Engine", desc: "AI-powered destination recommendations, itinerary planning, and real-time travel advisory.", deployTime: "8 weeks", impact: "47% repeat bookings", href: "/solutions/travel" },
  { pillar: "Travel", accent: "#FBBF24", glowRgb: "251, 191, 36", icon: "💬", name: "Guest Feedback Intelligence", desc: "Analyses guest reviews, surveys, and in-stay signals to drive continuous service improvement.", deployTime: "4 weeks", impact: "NPS +27 points", href: "/solutions/travel" },
  // Entertainment
  { pillar: "Entertainment", accent: "#A78BFA", glowRgb: "167, 139, 250", icon: "🎬", name: "Generative Media Pipeline", desc: "End-to-end content production automation for script adaptation, dubbing, and localisation.", deployTime: "12 weeks", impact: "10x production speed", href: "/solutions/entertainment" },
  { pillar: "Entertainment", accent: "#A78BFA", glowRgb: "167, 139, 250", icon: "📝", name: "Script Intelligence System", desc: "AI analysis of narrative structure, character arcs, and audience reception prediction.", deployTime: "6 weeks", impact: "60% faster pre-production", href: "/solutions/entertainment" },
  { pillar: "Entertainment", accent: "#A78BFA", glowRgb: "167, 139, 250", icon: "🎵", name: "AI Music & Audio Engine", desc: "Generative music composition and audio design for film, OTT, and gaming applications.", deployTime: "8 weeks", impact: "75% cost reduction", href: "/solutions/entertainment" },
  { pillar: "Entertainment", accent: "#A78BFA", glowRgb: "167, 139, 250", icon: "👥", name: "Audience Intelligence Platform", desc: "Predicts content performance, audience segmentation, and optimal release timing.", deployTime: "6 weeks", impact: "78% prediction accuracy", href: "/solutions/entertainment" },
];

export default function SolutionLibraryPage() {
  const [activePillar, setActivePillar] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = solutions.filter((s) => {
    const matchesPillar = activePillar === "All" || s.pillar === activePillar;
    const matchesSearch = search === "" || s.name.toLowerCase().includes(search.toLowerCase()) || s.desc.toLowerCase().includes(search.toLowerCase());
    return matchesPillar && matchesSearch;
  });

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.08 0.015 240)" }}>
      <SEO
        title="AI Solution Library — Browse 40+ Sovereign AI Modules | KrishuAI"
        description="Browse KrishuAI's complete library of 40+ sovereign AI solutions across Governance, EdTech, Travel & Hospitality, and Entertainment. Find the right AI module for your sector."
        keywords="KrishuAI solution library, AI solutions India, sovereign AI modules, government AI solutions, EdTech AI solutions, travel AI solutions, entertainment AI India"
        canonical="/solution-library"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://krishuaitech-murffryc.manus.space/" },
            { "@type": "ListItem", position: 2, name: "Solution Library", item: "https://krishuaitech-murffryc.manus.space/solution-library" }
          ]
        }}
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(14, 165, 233, 0.06) 0%, transparent 70%)",
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
              ◆ Solution Library
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk" }}
            >
              16 AI Solutions.{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #0EA5E9, #D4A847)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                One Stack.
              </span>
            </h1>
            <p
              className="text-lg text-white/55 leading-relaxed"
              style={{ fontFamily: "DM Sans" }}
            >
              Every solution in this library is built on the Bharat Agentic Stack — sovereign,
              multilingual, and outcome-driven.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="pb-10">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between flex-wrap">
            <div className="flex gap-2 flex-wrap">
              {pillars.map((p) => (
                <button
                  key={p}
                  onClick={() => setActivePillar(p)}
                  className="px-4 py-2 rounded-full text-sm transition-all duration-200"
                  style={{
                    background: activePillar === p ? "rgba(14, 165, 233, 0.15)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${activePillar === p ? "rgba(14, 165, 233, 0.4)" : "rgba(255,255,255,0.08)"}`,
                    color: activePillar === p ? "#0EA5E9" : "rgba(255,255,255,0.5)",
                    fontFamily: "DM Sans",
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search solutions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 rounded-full text-sm text-white placeholder-white/30 outline-none"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                fontFamily: "DM Sans",
                minWidth: "220px",
              }}
            />
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="pb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-5 rounded-2xl flex flex-col gap-4"
                style={{
                  background: `linear-gradient(135deg, rgba(${s.glowRgb}, 0.05) 0%, rgba(255,255,255,0.02) 100%)`,
                  border: `1px solid rgba(${s.glowRgb}, 0.12)`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{
                    background: `rgba(${s.glowRgb}, 0.12)`,
                    border: `1px solid rgba(${s.glowRgb}, 0.2)`,
                  }}
                >
                  {s.icon}
                </div>
                <div className="flex-1">
                  <div
                    className="font-semibold text-white text-sm mb-1.5 leading-tight"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    {s.name}
                  </div>
                  <p
                    className="text-xs text-white/45 leading-relaxed mb-3"
                    style={{ fontFamily: "DM Sans" }}
                  >
                    {s.desc}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span
                      className="text-xs px-2 py-0.5 rounded-md"
                      style={{
                        background: `rgba(${s.glowRgb}, 0.1)`,
                        color: s.accent,
                        fontFamily: "DM Sans",
                      }}
                    >
                      {s.impact}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-md"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.4)",
                        fontFamily: "DM Sans",
                      }}
                    >
                      {s.deployTime}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link href={s.href}>
                    <button
                      className="flex-1 py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-[1.02]"
                      style={{
                        background: `rgba(${s.glowRgb}, 0.12)`,
                        border: `1px solid rgba(${s.glowRgb}, 0.2)`,
                        color: s.accent,
                        fontFamily: "Space Grotesk",
                      }}
                    >
                      Learn More
                    </button>
                  </Link>
                  <a
                    href={`mailto:hello@krishuai.com?subject=${encodeURIComponent('Demo Request: ' + s.name)}&body=${encodeURIComponent('Hi KrishuAI Team,\n\nI would like to request a demo of the following solution:\n\nSolution: ' + s.name + '\nPillar: ' + s.pillar + '\nExpected Deployment: ' + s.deployTime + '\n\nPlease get in touch to schedule a demo.\n\nThank you.')}`}
                    className="flex-1 py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-[1.02] inline-block text-center"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.6)",
                      fontFamily: "Space Grotesk",
                      textDecoration: "none",
                    }}
                  >
                    Request Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/30" style={{ fontFamily: "DM Sans" }}>
                No solutions match your search. Try a different keyword.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
