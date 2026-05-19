/*
 * KrishuAI — Blog / Insights Page
 * Route: /blog
 * Design: Thought leadership — dark canvas, Electric Blue accent
 */

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { toast } from "sonner";
import { ARTICLES } from "./ArticlePage";

const categories = ["All", "Technology Strategy", "Governance AI", "Governance & Policy", "AI EdTech", "AI Travel & Hospitality", "Entertainment AI"];

// Real published articles from ArticlePage
const realArticles = Object.values(ARTICLES).map((a) => ({
  category: a.category,
  accent: a.categoryColor,
  date: a.publishedDate,
  readTime: a.readTime,
  featured: a.slug === "why-india-needs-a-sovereign-ai-stack",
  title: a.title,
  subtitle: a.subtitle,
  excerpt: a.excerpt,
  author: a.author,
  authorRole: a.authorRole,
  heroImage: a.heroImage,
  slug: a.slug,
}));

const articles = [
  ...realArticles,
  {
    category: "Governance AI",
    accent: "#10B981",
    date: "May 2025",
    readTime: "10 min read",
    featured: false,
    title: "Digital Twin States: How AI Is Creating a Mirror India for Governance",
    subtitle: "The Architecture of Real-Time Sovereign Intelligence",
    excerpt:
      "Somewhere in a government control room in Hubballi-Dharwad, operators are watching two cities simultaneously — the physical one outside their windows, and its perfect digital mirror on the screens in front of them. This is the beginning of Digital Twin States.",
    author: "Shailendra Kumar",
    authorRole: "Founder & Chief AI Architect, KrishuAI",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/article_digital_twin_hero-2u8LbEGHxxa9sqc7tLM46f.webp",
    slug: "digital-twin-states-india-governance",
  },

  {
    category: "Technology Strategy",
    accent: "#3B82F6",
    date: "May 2025",
    readTime: "11 min read",
    featured: false,
    title: "Bharat Agentic Stack: The Technical Architecture of India's Sovereign AI Future",
    subtitle: "From Silicon to Citizen — A Five-Layer Blueprint",
    excerpt:
      "India's AI ambition is not merely to adopt artificial intelligence — it is to own the entire stack. From the silicon that runs the models to the agents that serve its 1.4 billion citizens, the Bharat Agentic Stack is the technical blueprint for that ambition.",
    author: "Shailendra Kumar",
    authorRole: "Founder & Chief AI Architect, KrishuAI",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/article_agentic_stack_hero-LaHSrWeWG38DSWfASECMdG.webp",
    slug: "bharat-agentic-stack-technical-architecture",
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
      <SEO
        title="AI Insights & Research | KrishuAI Intelligence Dispatch"
        description="Expert analysis on sovereign AI, Bharat Agentic Stack, AI governance, EdTech AI, Travel AI, and Bollywood generative media — from India's leading AI technology house, KrishuAI."
        keywords="KrishuAI insights, sovereign AI India blog, Bharat Agentic Stack articles, AI governance India, EdTech AI India, Bollywood AI, travel AI India, Shailendra Kumar AI"
        canonical="/blog"
        ogImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/article1_hero-mJjfiFEbb8tFyojBRkSa6h.webp"
        ogImageAlt="KrishuAI Intelligence Dispatch — Expert AI analysis and research from India's sovereign AI technology house"
        ogImageWidth={1200}
        ogImageHeight={630}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://krishuaitech-murffryc.manus.space/" },
            { "@type": "ListItem", position: 2, name: "Intelligence Dispatch", item: "https://krishuaitech-murffryc.manus.space/blog" }
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
              className="rounded-3xl cursor-pointer overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(212, 168, 71, 0.08) 0%, rgba(14, 165, 233, 0.04) 100%)",
                border: "1px solid rgba(212, 168, 71, 0.2)",
              }}
            >
              {featured.heroImage && (
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img src={featured.heroImage} alt={featured.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-[#050A14]/40 to-transparent" />
                </div>
              )}
              <div className="p-8 lg:p-10" onClick={() => featured.slug ? window.location.href = `/insights/${featured.slug}` : toast.info("Full article coming soon!")}>
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
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ duration: 0.4, delay: i * 0.08, type: "spring", stiffness: 300, damping: 24 }}
                className="p-6 rounded-2xl flex flex-col gap-4 cursor-pointer group relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${article.accent}22`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  transition: "border-color 0.35s ease, box-shadow 0.35s ease, background 0.35s ease",
                }}
                onHoverStart={(e) => {
                  const el = e.target as HTMLElement;
                  const card = el.closest(".group") as HTMLElement;
                  if (card) {
                    card.style.borderColor = `${article.accent}55`;
                    card.style.boxShadow = `0 0 30px ${article.accent}18, 0 20px 50px rgba(0,0,0,0.35)`;
                    card.style.background = `${article.accent}06`;
                  }
                }}
                onHoverEnd={(e) => {
                  const el = e.target as HTMLElement;
                  const card = el.closest(".group") as HTMLElement;
                  if (card) {
                    card.style.borderColor = `${article.accent}22`;
                    card.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
                    card.style.background = "rgba(255,255,255,0.03)";
                  }
                }}
                onClick={() => article.slug ? (window.location.href = `/insights/${article.slug}`) : toast.info("Full article coming soon!", { description: "Subscribe to The Intelligence Dispatch to be notified." })}
              >
                {article.heroImage && (
                  <div className="-mx-6 -mt-6 mb-2 h-40 overflow-hidden rounded-t-2xl">
                    <img
                      src={article.heroImage}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      style={{ transition: "transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
                    />
                  </div>
                )}
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
                    <img
                      src="/manus-storage/shailendra_kumar_headshot_5d0bf9c3.webp"
                      alt={article.author}
                      className="w-6 h-6 rounded-full object-cover flex-shrink-0"
                      style={{ border: `1px solid ${article.accent}40` }}
                    />
                    <span className="text-xs text-white/35" style={{ fontFamily: "DM Sans" }}>
                      {article.author}
                    </span>
                  </div>
                  <motion.span
                    className="text-xs flex items-center gap-0.5"
                    style={{ color: article.accent, fontFamily: "DM Sans" }}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  >
                    Read
                    <motion.span
                      className="inline-block"
                      animate={{}}
                      whileHover={{ x: 2 }}
                    >
                       →
                    </motion.span>
                  </motion.span>
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
