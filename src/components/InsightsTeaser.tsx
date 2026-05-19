/**
 * InsightsTeaser — KrishuAI Home Page
 * Design: Digital Sovereignty / Neon-Brutalism meets Cinematic Glassmorphism
 * Compact section: 1 featured article (3/5) + 2 side articles (2/5)
 * Shows exactly 3 articles — the three most recent from ARTICLES
 */

import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import { ARTICLES } from "@/pages/ArticlePage";

// Pick the three most recent articles (last three entries in the record)
const allArticles = Object.values(ARTICLES);
const featured = allArticles[allArticles.length - 1];
const sideArticles = allArticles.slice(-3, -1).reverse();

export default function InsightsTeaser() {
  if (allArticles.length === 0) return null;

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-[0.035] blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #3B82F6 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header — compact */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              The Intelligence Dispatch
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-none">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]">Insights</span>
            </h2>
          </div>
          <Link href="/blog">
            <span className="inline-flex items-center gap-1.5 text-[#3B82F6] font-semibold hover:gap-2.5 transition-all text-sm">
              View all <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        {/* Featured (3/5) + Side articles (2/5) — fixed height grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-start">

          {/* Featured article */}
          <Link href={`/insights/${featured.slug}`} className="lg:col-span-3 block">
            <div className="group rounded-xl overflow-hidden border border-white/10 hover:border-[#3B82F6]/30 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.04]">
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={featured.heroImage}
                  alt={featured.heroImageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-[#050A14]/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-widest"
                    style={{
                      backgroundColor: `${featured.categoryColor}25`,
                      color: featured.categoryColor,
                      border: `1px solid ${featured.categoryColor}40`,
                    }}
                  >
                    {featured.category}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2 text-white/40 text-xs">
                  <Clock className="w-3 h-3" />
                  <span>{featured.readTime}</span>
                  <span className="text-white/20">·</span>
                  <span>{featured.publishedDate}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#3B82F6] transition-colors line-clamp-2">
                  {featured.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-3">
                  {featured.excerpt}
                </p>
                <div className="inline-flex items-center gap-1.5 text-[#3B82F6] text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>

          {/* Side articles — exactly 2 */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {sideArticles.map(article => (
              <Link key={article.slug} href={`/insights/${article.slug}`} className="block">
                <div className="group rounded-xl overflow-hidden border border-white/10 hover:border-[#3B82F6]/30 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.04] flex gap-0 flex-col">
                  {/* Thumbnail */}
                  <div className="relative h-32 overflow-hidden flex-shrink-0">
                    <img
                      src={article.heroImage}
                      alt={article.heroImageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050A14]/50 to-transparent" />
                    <div className="absolute top-2 left-2">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-widest"
                        style={{
                          backgroundColor: `${article.categoryColor}25`,
                          color: article.categoryColor,
                          border: `1px solid ${article.categoryColor}40`,
                        }}
                      >
                        {article.category}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-1.5 mb-1.5 text-white/40 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-display text-sm font-bold text-white leading-snug group-hover:text-[#3B82F6] transition-colors line-clamp-2 mb-2">
                      {article.title}
                    </h3>
                    <div className="inline-flex items-center gap-1 text-[#3B82F6] text-xs font-semibold group-hover:gap-1.5 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* View all CTA — compact */}
            <Link href="/blog">
              <div className="rounded-xl border border-dashed border-white/10 hover:border-[#3B82F6]/30 px-5 py-4 flex items-center justify-between text-white/40 hover:text-[#3B82F6] transition-all cursor-pointer group">
                <span className="text-sm font-medium">Explore all {allArticles.length} articles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
