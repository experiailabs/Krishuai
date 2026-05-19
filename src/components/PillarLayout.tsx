/*
 * KrishuAI — PillarLayout Component
 * Design: Shared wrapper for all four pillar deep-dive pages
 * Includes: Pillar-specific hero, breadcrumb nav, back-to-home link
 * Used by: GovernancePage, EdTechPage, TravelPage, EntertainmentPage
 */

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export interface PillarMeta {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  /** Alt text for the hero image (used for OG image alt) */
  heroImageAlt?: string;
  accentColor: string;
  glowRgb: string; // e.g. "212, 168, 71"
  label: string;
  /** SEO keywords for this pillar page */
  keywords?: string;
  /** Canonical path, e.g. "/solutions/governance" */
  canonicalPath?: string;
}

interface PillarLayoutProps {
  meta: PillarMeta;
  children: React.ReactNode;
}

export default function PillarLayout({ meta, children }: PillarLayoutProps) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.08 0.015 240)" }}>
      <SEO
        title={`${meta.title} — Bharat Agentic Stack | KrishuAI`}
        description={meta.description}
        keywords={meta.keywords}
        canonical={meta.canonicalPath}
        ogImage={meta.heroImage}
        ogImageAlt={meta.heroImageAlt ?? meta.title}
        ogImageWidth={1200}
        ogImageHeight={630}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://krishuaitech-murffryc.manus.space/" },
            { "@type": "ListItem", position: 2, name: "Solutions", item: "https://krishuaitech-murffryc.manus.space/#pillars" },
            { "@type": "ListItem", position: 3, name: meta.title, item: `https://krishuaitech-murffryc.manus.space${meta.canonicalPath ?? "/"}` }
          ]
        }}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-20">
        {/* Hero image */}
        <div className="absolute inset-0">
          <img
            src={meta.heroImage}
            alt={meta.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, rgba(5,10,20,0.5) 0%, rgba(5,10,20,0.7) 40%, oklch(0.08 0.015 240) 100%)`,
            }}
          />
          {/* Accent glow overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 20% 60%, rgba(${meta.glowRgb}, 0.12) 0%, transparent 70%)`,
            }}
          />
        </div>

        {/* Blueprint grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(${meta.glowRgb},0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(${meta.glowRgb},0.03) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container relative z-10 pb-16">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8 text-sm"
            style={{ fontFamily: "DM Sans" }}
          >
            <Link href="/">
              <span className="text-white/40 hover:text-white/70 transition-colors cursor-pointer">
                KrishuAI
              </span>
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/40">Solutions</span>
            <span className="text-white/20">/</span>
            <span style={{ color: meta.accentColor }}>{meta.title}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl"
          >
            <div
              className="mono-label text-xs mb-4 inline-block px-3 py-1.5 rounded-full border"
              style={{
                borderColor: `rgba(${meta.glowRgb}, 0.4)`,
                color: meta.accentColor,
                background: `rgba(${meta.glowRgb}, 0.1)`,
              }}
            >
              {meta.number} · {meta.label}
            </div>

            <h1
              className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "Space Grotesk" }}
            >
              {meta.title}
            </h1>

            <p
              className="text-xl font-medium mb-4"
              style={{ color: meta.accentColor, fontFamily: "Space Grotesk" }}
            >
              {meta.tagline}
            </p>

            <p
              className="text-lg text-white/60 leading-relaxed max-w-2xl"
              style={{ fontFamily: "DM Sans" }}
            >
              {meta.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Page content */}
      {children}

      <Footer />
    </div>
  );
}
