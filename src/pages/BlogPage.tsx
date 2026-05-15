/*
 * KrishuAI — Blog / Insights Page
 * Route: /blog
 * Design: Thought leadership — dark canvas, Electric Blue accent
 */

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const categories = ["All", "AI Policy", "Governance", "EdTech", "Travel AI", "Entertainment AI", "Technology"];

const articles = [
  {
    category: "AI Policy",
    accent: "#D4A847",
    date: "April 2026",
    readTime: "8 min read",
    featured: true,
    title: "Why India Cannot Afford Foreign AI Dependency",
    subtitle: "The strategic, economic, and constitutional case for AI sovereignty",
    excerpt:
      "As global AI superpowers race to embed their infrastructure into India's digital backbone, a critical question emerges: what happens when the intelligence layer of a nation's governance is owned by a foreign corporation? This is not a hypothetical — it is the trajectory India is currently on.",
    author: "Arjun Mehta",
    authorRole: "Head of Governance & Policy AI",
  },
  {
    category: "Governance",
    accent: "#D4A847",
    date: "March 2026",
    readTime: "6 min read",
    featured: false,
    title: "Digital Twin States: The Future of Evidence-Based Governance",
    subtitle: "How AI simulation is transforming policy-making in India",
    excerpt:
      "For decades, Indian policymakers have governed with yesterday's data. A census conducted once a decade. Agricultural surveys completed months after harvest. Healthcare resource allocation based on projections, not reality. The Digital Twin State changes all of this.",
    author: "Krishu Sharma",
    authorRole: "Founder & Chief AI Architect",
  },
  {
    category: "EdTech",
    accent: "#22D3EE",
    date: "March 2026",
    readTime: "7 min read",
    featured: false,
    title: "Teaching 500 Million Students: The Personalisation Imperative",
    subtitle: "Why one-size-fits-all education is failing India's children",
    excerpt:
      "India's education system serves 500 million students across 22 languages, 28 states, and an economic spectrum that ranges from rural subsistence to urban affluence. The idea that a single curriculum, delivered in a single language, at a single pace, can serve this population is a fiction we can no longer afford.",
    author: "Priya Nair",
    authorRole: "Chief Experience Officer",
  },
  {
    category: "Technology",
    accent: "#0EA5E9",
    date: "February 2026",
    readTime: "10 min read",
    featured: false,
    title: "The Bharat Agentic Stack: Architecture for a Billion Users",
    subtitle: "A technical deep-dive into India's sovereign AI infrastructure",
    excerpt:
      "Building AI for India is not the same as building AI for the West and translating it. The scale, linguistic diversity, infrastructure constraints, and constitutional requirements of India demand a fundamentally different architecture. This is what we built.",
    author: "Krishu Sharma",
    authorRole: "Founder & Chief AI Architect",
  },
  {
    category: "Travel AI",
    accent: "#FBBF24",
    date: "February 2026",
    readTime: "5 min read",
    featured: false,
    title: "The AI Concierge Revolution in Indian Hospitality",
    subtitle: "How multimodal AI is redefining the guest experience",
    excerpt:
      "India's luxury hospitality sector is at an inflection point. International guests arrive with expectations shaped by global brands. Domestic guests bring cultural nuances that no foreign AI system understands. The solution is not to choose between them — it is to build AI that serves both.",
    author: "Zara Al-Rashid",
    authorRole: "Director, ExperiAI Labs",
  },
  {
    category: "Entertainment AI",
    accent: "#A78BFA",
    date: "January 2026",
    readTime: "6 min read",
    featured: false,
    title: "Bollywood Meets AI: The Generative Media Revolution",
    subtitle: "How AI is transforming India's ₹19,000 crore film industry",
    excerpt:
      "India produces more films than any other country on earth. Yet the production pipeline remains stubbornly manual — script evaluation by gut instinct, localisation by human translators, audience prediction by experience. Generative AI is about to change every one of these assumptions.",
    author: "Krishu Sharma",
    authorRole: "Founder & Chief AI Architect",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = articles.find((a) => a.featured);
  const filtered = articles.filter((a) => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    return matchesCategory && !a.featured;
  });

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.08 0.015 240)" }}>
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
              ◆ Insights & Thought Leadership
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk" }}
            >
              The Intelligence{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #0EA5E9, #D4A847)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Dispatch
              </span>
            </h1>
            <p
              className="text-lg text-white/55 leading-relaxed"
              style={{ fontFamily: "DM Sans" }}
            >
              Perspectives on sovereign AI, governance technology, and the future of India's
              digital intelligence layer — from the team building it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="pb-12">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 lg:p-10 rounded-3xl cursor-pointer"
              style={{
                background: "linear-gradient(135deg, rgba(212, 168, 71, 0.08) 0%, rgba(14, 165, 233, 0.04) 100%)",
                border: "1px solid rgba(212, 168, 71, 0.2)",
              }}
              onClick={() => toast.info("Full article coming soon!", { description: "Subscribe to The Intelligence Dispatch to be notified." })}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(212, 168, 71, 0.15)",
                    border: "1px solid rgba(212, 168, 71, 0.3)",
                    color: "#D4A847",
                    fontFamily: "DM Sans",
                  }}
                >
                  Featured
                </span>
                <span className="text-xs text-white/35 mono-label">{featured.date}</span>
                <span className="text-xs text-white/35 mono-label">{featured.readTime}</span>
              </div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight"
                style={{ fontFamily: "Space Grotesk" }}
              >
                {featured.title}
              </h2>
              <p
                className="text-base text-white/50 mb-4"
                style={{ fontFamily: "DM Sans" }}
              >
                {featured.subtitle}
              </p>
              <p
                className="text-sm text-white/45 leading-relaxed mb-6 max-w-3xl"
                style={{ fontFamily: "DM Sans" }}
              >
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "rgba(212, 168, 71, 0.2)",
                      color: "#D4A847",
                      fontFamily: "Space Grotesk",
                    }}
                  >
                    {featured.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white" style={{ fontFamily: "Space Grotesk" }}>
                      {featured.author}
                    </div>
                    <div className="text-xs text-white/35" style={{ fontFamily: "DM Sans" }}>
                      {featured.authorRole}
                    </div>
                  </div>
                </div>
                <span style={{ color: "#D4A847", fontSize: "0.875rem", fontFamily: "Space Grotesk" }}>
                  Read Article →
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filter */}
      <section className="pb-10">
        <div className="container">
          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className="px-4 py-2 rounded-full text-sm transition-all duration-200"
                style={{
                  background: activeCategory === c ? "rgba(14, 165, 233, 0.15)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${activeCategory === c ? "rgba(14, 165, 233, 0.4)" : "rgba(255,255,255,0.08)"}`,
                  color: activeCategory === c ? "#0EA5E9" : "rgba(255,255,255,0.5)",
                  fontFamily: "DM Sans",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="pb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-2xl flex flex-col gap-4 cursor-pointer group"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "border-color 0.3s ease",
                }}
                onClick={() => toast.info("Full article coming soon!", { description: "Subscribe to The Intelligence Dispatch to be notified." })}
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: `${article.accent}15`,
                      border: `1px solid ${article.accent}30`,
                      color: article.accent,
                      fontFamily: "DM Sans",
                    }}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-white/30 mono-label">{article.date}</span>
                  <span className="text-xs text-white/30 mono-label">{article.readTime}</span>
                </div>
                <div className="flex-1">
                  <h3
                    className="font-bold text-white text-base mb-1.5 leading-tight group-hover:text-opacity-80 transition-colors"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="text-xs text-white/40 mb-3"
                    style={{ fontFamily: "DM Sans" }}
                  >
                    {article.subtitle}
                  </p>
                  <p
                    className="text-sm text-white/45 leading-relaxed"
                    style={{ fontFamily: "DM Sans" }}
                  >
                    {article.excerpt.slice(0, 120)}...
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: `${article.accent}20`,
                        color: article.accent,
                        fontFamily: "Space Grotesk",
                      }}
                    >
                      {article.author.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="text-xs text-white/35" style={{ fontFamily: "DM Sans" }}>
                      {article.author}
                    </span>
                  </div>
                  <span
                    className="text-xs transition-colors"
                    style={{ color: article.accent, fontFamily: "DM Sans" }}
                  >
                    Read →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        className="py-16 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="container max-w-xl mx-auto text-center">
          <h2
            className="text-2xl font-bold text-white mb-3"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Subscribe to The Intelligence Dispatch
          </h2>
          <p className="text-white/45 text-sm mb-6" style={{ fontFamily: "DM Sans" }}>
            Monthly perspectives on sovereign AI, governance technology, and India's digital future.
          </p>
          <div className="flex gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded-full text-sm text-white placeholder-white/25 outline-none"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                fontFamily: "DM Sans",
              }}
            />
            <button
              onClick={() => toast.success("Subscribed!", { description: "Welcome to The Intelligence Dispatch." })}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03] flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
                color: "white",
                fontFamily: "Space Grotesk",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
