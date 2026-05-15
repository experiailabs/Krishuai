/*
 * KrishuAI — Case Studies Page
 * Route: /case-studies
 * Design: Filterable grid of case studies across all four pillars
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const filters = ["All", "Governance", "EdTech", "Travel", "Entertainment"];

const cases = [
  {
    pillar: "Governance",
    accent: "#D4A847",
    glowRgb: "212, 168, 71",
    icon: "🏛️",
    title: "Rajasthan Digital Twin State",
    client: "Government of Rajasthan",
    metric: "40% faster policy decisions",
    tags: ["Digital Twin", "Policy AI", "Multilingual"],
    challenge:
      "The state government needed real-time visibility into agricultural yield, healthcare resource allocation, and welfare scheme uptake across 33 districts — with data arriving in 4 different languages.",
    solution:
      "KrishuAI deployed a Digital Twin State model that aggregates 200+ data streams, simulates policy outcomes using agent-based modeling, and surfaces actionable insights in Hindi and English through a voice-accessible dashboard.",
    outcome:
      "Policy decision cycles reduced from 6 weeks to 10 days. Welfare scheme targeting accuracy improved by 62%. Agricultural advisory reach expanded to 2.3M farmers.",
    quote: "KrishuAI gave us a living model of our state. We no longer govern with yesterday's data.",
    quotePerson: "Principal Secretary, Planning Department, Government of Rajasthan",
  },
  {
    pillar: "Governance",
    accent: "#D4A847",
    glowRgb: "212, 168, 71",
    icon: "🏛️",
    title: "National Pension AI Agent",
    client: "Central Government Ministry",
    metric: "8M pensioners served autonomously",
    tags: ["Citizen Services", "Voice AI", "Automation"],
    challenge:
      "8 million pensioners were experiencing 3–6 month delays in pension processing due to manual document verification and language barriers across 28 states.",
    solution:
      "Deployed a multimodal AI agent that handles document verification, eligibility checks, and disbursement authorization in 12 Indian languages — voice-first for low-literacy users.",
    outcome:
      "Processing time reduced from 90 days to 72 hours. Call centre volume dropped 78%. Pensioner satisfaction score reached 4.7/5.",
    quote: "My mother received her pension in 3 days. She didn't even need to visit the office.",
    quotePerson: "Beneficiary, Rural Maharashtra",
  },
  {
    pillar: "EdTech",
    accent: "#22D3EE",
    glowRgb: "34, 211, 238",
    icon: "🧠",
    title: "CBSE Adaptive Learning Platform",
    client: "National Education Board Partnership",
    metric: "34% improvement in learning outcomes",
    tags: ["Adaptive AI", "22 Languages", "Sovereign Learning"],
    challenge:
      "A national education board needed to serve 50M students across urban and rural India with personalised learning — in 22 languages, across devices ranging from smartphones to basic feature phones.",
    solution:
      "KrishuAI built sovereign learning agents that adapt curriculum difficulty, teaching style, and language in real time based on each student's performance patterns — deployable offline on low-end devices.",
    outcome:
      "34% improvement in standardised test scores. 89% student retention rate. 15M students in rural areas gained access to personalised learning for the first time.",
    quote: "The AI tutor speaks my child's language — literally. It teaches in our dialect.",
    quotePerson: "Parent, Tier-3 City, Uttar Pradesh",
  },
  {
    pillar: "EdTech",
    accent: "#22D3EE",
    glowRgb: "34, 211, 238",
    icon: "🧠",
    title: "Skill India AI Upskilling Engine",
    client: "Vocational Training Institute",
    metric: "3x placement rate improvement",
    tags: ["Vocational AI", "Job Matching", "Skills Assessment"],
    challenge:
      "A major vocational training network needed to match 500,000 annual graduates with industry roles — but lacked the intelligence to assess skills in regional languages or predict employer demand.",
    solution:
      "Deployed an AI upskilling engine that assesses competencies through voice and practical demonstrations, predicts regional job market demand, and generates personalised learning paths for each trainee.",
    outcome:
      "Placement rate tripled from 28% to 84%. Average time-to-employment reduced from 6 months to 6 weeks. Employer satisfaction with hire quality reached 91%.",
    quote: "We finally have an AI that understands what Bharat's workforce actually needs.",
    quotePerson: "Director, National Skill Development Corporation Partner",
  },
  {
    pillar: "Travel",
    accent: "#FBBF24",
    glowRgb: "251, 191, 36",
    icon: "✈️",
    title: "Taj Hotels Multimodal Concierge",
    client: "Luxury Hospitality Group",
    metric: "3.2x revenue uplift per guest",
    tags: ["Concierge AI", "Hyper-Personalisation", "Multimodal"],
    challenge:
      "A luxury hotel group with 40 properties needed to deliver hyper-personalised guest experiences at scale — anticipating preferences before check-in and adapting in real time during the stay.",
    solution:
      "KrishuAI deployed a multimodal concierge AI that learns guest preferences from booking history, social signals, and in-stay interactions — proactively recommending dining, activities, and services in the guest's preferred language.",
    outcome:
      "Revenue per guest increased 3.2x through AI-driven upsell. Guest satisfaction NPS rose from 62 to 89. Repeat booking rate improved by 47%.",
    quote: "The AI knew I preferred a corner room and jasmine tea before I even asked. That's magic.",
    quotePerson: "Frequent Guest, Taj Hotels",
  },
  {
    pillar: "Travel",
    accent: "#FBBF24",
    glowRgb: "251, 191, 36",
    icon: "✈️",
    title: "IndiGo AI Travel Companion",
    client: "Major Indian Airline",
    metric: "58% reduction in support costs",
    tags: ["Travel AI", "Disruption Management", "Voice Assistant"],
    challenge:
      "India's largest airline needed to manage 200,000 daily passengers across disruption scenarios — flight delays, rebooking, and compensation — without scaling its support team proportionally.",
    solution:
      "Built an AI travel companion that proactively manages disruptions: automatically rebooking passengers, issuing compensation, and communicating in the passenger's preferred language — before they even know there's a problem.",
    outcome:
      "Support cost reduced 58%. Passenger complaint rate dropped 71%. Average disruption resolution time fell from 4 hours to 18 minutes.",
    quote: "The AI rebooked me and sent a meal voucher before I landed. I didn't have to do anything.",
    quotePerson: "Frequent Flyer, IndiGo Airlines",
  },
  {
    pillar: "Entertainment",
    accent: "#A78BFA",
    glowRgb: "167, 139, 250",
    icon: "🎬",
    title: "OTT Generative Content Pipeline",
    client: "Major Indian OTT Platform",
    metric: "10x content production speed",
    tags: ["Generative Media", "Content AI", "Localisation"],
    challenge:
      "A leading OTT platform needed to produce 500+ hours of localised content annually across 12 regional languages — but traditional production pipelines were too slow and expensive to meet demand.",
    solution:
      "KrishuAI built a generative media pipeline that automates script adaptation, voice dubbing, subtitle generation, and thumbnail creation — reducing the human effort in localisation by 80%.",
    outcome:
      "Content production speed increased 10x. Localisation cost reduced 75%. Regional language viewership grew 340% within 6 months of launch.",
    quote: "We went from 2 regional languages to 12 in one quarter. KrishuAI made that possible.",
    quotePerson: "Chief Content Officer, OTT Platform",
  },
  {
    pillar: "Entertainment",
    accent: "#A78BFA",
    glowRgb: "167, 139, 250",
    icon: "🎬",
    title: "Bollywood AI Script Intelligence",
    client: "Film Production House",
    metric: "60% faster pre-production",
    tags: ["Script AI", "Audience Intelligence", "Pre-Production"],
    challenge:
      "A major Bollywood production house needed to evaluate 200+ script submissions annually and predict audience reception — without relying solely on gut instinct and expensive test screenings.",
    solution:
      "Deployed an AI script intelligence system that analyses narrative structure, character arcs, dialogue authenticity, and cultural resonance — generating audience reception predictions with 78% accuracy.",
    outcome:
      "Pre-production cycle shortened by 60%. Script evaluation time reduced from 3 weeks to 48 hours. Two AI-shortlisted films became box office successes.",
    quote: "The AI caught a plot hole in Act 2 that three script readers missed. It's now part of our process.",
    quotePerson: "Creative Director, Film Production House",
  },
];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = activeFilter === "All" ? cases : cases.filter((c) => c.pillar === activeFilter);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.08 0.015 240)" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 60% 30%, rgba(14, 165, 233, 0.06) 0%, transparent 70%)",
          }}
        />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div
              className="mono-label text-xs mb-5 inline-block px-3 py-1.5 rounded-full border"
              style={{
                borderColor: "rgba(14, 165, 233, 0.3)",
                color: "rgba(14, 165, 233, 0.9)",
                background: "rgba(14, 165, 233, 0.08)",
              }}
            >
              ◆ Case Studies
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Outcomes We've{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #0EA5E9, #D4A847)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Designed
              </span>
            </h1>
            <p
              className="text-lg text-white/55 leading-relaxed"
              style={{ fontFamily: "DM Sans" }}
            >
              Real engagements. Measurable impact. Across Governance, Education, Travel, and Entertainment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="pb-12">
        <div className="container">
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-4 py-2 rounded-full text-sm transition-all duration-200"
                style={{
                  background: activeFilter === f ? "rgba(14, 165, 233, 0.15)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${activeFilter === f ? "rgba(14, 165, 233, 0.4)" : "rgba(255,255,255,0.08)"}`,
                  color: activeFilter === f ? "#0EA5E9" : "rgba(255,255,255,0.5)",
                  fontFamily: "DM Sans",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases grid */}
      <section className="pb-24">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {filtered.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, rgba(${c.glowRgb}, 0.05) 0%, rgba(255,255,255,0.02) 100%)`,
                    border: `1px solid rgba(${c.glowRgb}, 0.15)`,
                  }}
                  onClick={() => setExpanded(expanded === c.title ? null : c.title)}
                >
                  <div className="p-7">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                          style={{
                            background: `rgba(${c.glowRgb}, 0.12)`,
                            border: `1px solid rgba(${c.glowRgb}, 0.25)`,
                          }}
                        >
                          {c.icon}
                        </div>
                        <div>
                          <div
                            className="text-xs mb-0.5"
                            style={{ color: c.accent, fontFamily: "DM Sans" }}
                          >
                            {c.pillar} · {c.client}
                          </div>
                          <h3
                            className="font-bold text-white text-base leading-tight"
                            style={{ fontFamily: "Space Grotesk" }}
                          >
                            {c.title}
                          </h3>
                        </div>
                      </div>
                      <div
                        className="text-xs px-3 py-1.5 rounded-full flex-shrink-0"
                        style={{
                          background: `rgba(${c.glowRgb}, 0.1)`,
                          border: `1px solid rgba(${c.glowRgb}, 0.2)`,
                          color: c.accent,
                          fontFamily: "DM Sans",
                        }}
                      >
                        {c.metric}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap mb-4">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-lg"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "rgba(255,255,255,0.45)",
                            fontFamily: "DM Sans",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Challenge preview */}
                    <p
                      className="text-sm text-white/50 leading-relaxed"
                      style={{ fontFamily: "DM Sans" }}
                    >
                      {c.challenge.slice(0, 120)}...
                    </p>

                    {/* Expand toggle */}
                    <div
                      className="mt-4 text-xs flex items-center gap-1.5 transition-colors duration-200"
                      style={{ color: c.accent, fontFamily: "DM Sans" }}
                    >
                      {expanded === c.title ? "▲ Show less" : "▼ Read full case study"}
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {expanded === c.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5 flex flex-col gap-5">
                            {[
                              { label: "Challenge", text: c.challenge },
                              { label: "Solution", text: c.solution },
                              { label: "Outcome", text: c.outcome },
                            ].map((section) => (
                              <div key={section.label}>
                                <div
                                  className="mono-label text-xs mb-2"
                                  style={{ color: `rgba(${c.glowRgb}, 0.7)` }}
                                >
                                  {section.label}
                                </div>
                                <p
                                  className="text-sm text-white/60 leading-relaxed"
                                  style={{ fontFamily: "DM Sans" }}
                                >
                                  {section.text}
                                </p>
                              </div>
                            ))}
                            <blockquote
                              className="px-4 py-3 rounded-xl border-l-2 italic"
                              style={{
                                borderColor: c.accent,
                                background: `rgba(${c.glowRgb}, 0.06)`,
                              }}
                            >
                              <p
                                className="text-sm text-white/65 mb-2"
                                style={{ fontFamily: "DM Sans" }}
                              >
                                "{c.quote}"
                              </p>
                              <cite
                                className="text-xs not-italic"
                                style={{ color: c.accent, fontFamily: "DM Sans" }}
                              >
                                — {c.quotePerson}
                              </cite>
                            </blockquote>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="container text-center max-w-xl mx-auto">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Ready to Become a Case Study?
          </h2>
          <p className="text-white/50 mb-8" style={{ fontFamily: "DM Sans" }}>
            Let's design your outcome together.
          </p>
          <Link href="/contact">
            <button
              className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #0EA5E9, #D4A847)",
                color: "#050A14",
                fontFamily: "Space Grotesk",
                boxShadow: "0 0 40px rgba(14, 165, 233, 0.3)",
              }}
            >
              Start Your Engagement
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
