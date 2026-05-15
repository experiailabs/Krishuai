/*
 * KrishuAI — Press Kit Page
 * Route: /press
 * Design: "Digital Sovereignty" — media-focused, dark canvas
 */

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const releases = [
  {
    date: "April 2026",
    title: "KrishuAI Raises ₹500Cr Series C to Accelerate India's Sovereign AI Infrastructure",
    excerpt: "Funding will be used to scale national government deployments and expand into MENA markets through ExperiAI Labs.",
    accent: "#D4A847",
  },
  {
    date: "March 2026",
    title: "KrishuAI Deploys Bharat Agentic Stack for Rajasthan Digital Twin State Programme",
    excerpt: "Partnership with Government of Rajasthan marks the first full-state deployment of KrishuAI's Digital Twin State framework.",
    accent: "#0EA5E9",
  },
  {
    date: "February 2026",
    title: "KrishuAI's AI EdTech Platform Reaches 15 Million Rural Students",
    excerpt: "Sovereign learning agents now serve students in 18 states, delivering personalised education in 22 Indian languages.",
    accent: "#22D3EE",
  },
  {
    date: "January 2026",
    title: "ExperiAI Labs Expands to Three New MENA Markets",
    excerpt: "KrishuAI's Dubai-based sister company announces AI experience design deployments in Saudi Arabia, Egypt, and the UAE.",
    accent: "#FB923C",
  },
  {
    date: "December 2025",
    title: "KrishuAI Launches AI Entertainment Division with OTT Generative Media Pipeline",
    excerpt: "New division serves India's ₹19,000 crore film and OTT industry with AI-powered content production and localisation.",
    accent: "#A78BFA",
  },
];

const coverage = [
  { outlet: "Economic Times", headline: "KrishuAI is building the AI backbone of Bharat", date: "March 2026" },
  { outlet: "TechCrunch India", headline: "The startup making India's government AI-native", date: "February 2026" },
  { outlet: "The Hindu BusinessLine", headline: "Sovereign AI: Why KrishuAI's bet on India-first models is paying off", date: "January 2026" },
  { outlet: "Forbes India", headline: "KrishuAI's Krishu Sharma on building AI for 1.4 billion people", date: "December 2025" },
  { outlet: "Mint", headline: "How KrishuAI is turning India's linguistic diversity into an AI advantage", date: "November 2025" },
];

const brandAssets = [
  { name: "KrishuAI Primary Logo", format: "SVG + PNG", desc: "Full colour, white, and dark variants" },
  { name: "Bharat Agentic Stack Diagram", format: "PDF + PNG", desc: "Six-layer architecture diagram, high resolution" },
  { name: "Brand Colour Palette", format: "PDF + ASE", desc: "Tech-Gold, Electric Blue, and full brand palette" },
  { name: "Leadership Headshots", format: "JPG", desc: "High-resolution photos of all leadership team members" },
  { name: "Product Screenshots", format: "PNG", desc: "UI screenshots of key KrishuAI products" },
  { name: "Company Fact Sheet", format: "PDF", desc: "One-page overview of KrishuAI for media use" },
];

export default function PressPage() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.08 0.015 240)" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(14, 165, 233, 0.06) 0%, transparent 70%)",
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
              ◆ Press & Media
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Press{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #0EA5E9, #D4A847)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Resources
              </span>
            </h1>
            <p
              className="text-lg text-white/55 leading-relaxed mb-8"
              style={{ fontFamily: "DM Sans" }}
            >
              Brand assets, press releases, and media contact for journalists covering KrishuAI
              and India's sovereign AI ecosystem.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => toast.success("Press kit downloading!", { description: "The full press kit will be sent to your email." })}
                className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
                  color: "white",
                  fontFamily: "Space Grotesk",
                  boxShadow: "0 0 30px rgba(14, 165, 233, 0.3)",
                }}
              >
                ↓ Download Full Press Kit
              </button>
              <button
                onClick={() => toast.success("Media enquiry sent!", { description: "Our communications team will respond within 4 hours." })}
                className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "Space Grotesk",
                }}
              >
                Media Enquiry
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media contact */}
      <section className="py-10 border-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container">
          <div className="flex items-center gap-8 flex-wrap">
            <div className="mono-label text-xs text-white/40">Media Contact</div>
            <div className="flex items-center gap-6 flex-wrap">
              <div>
                <div className="text-sm font-semibold text-white" style={{ fontFamily: "Space Grotesk" }}>
                  Communications Team
                </div>
                <div className="text-xs text-white/40" style={{ fontFamily: "DM Sans" }}>
                  press@krishuai.com
                </div>
              </div>
              <div>
                <div className="text-xs text-white/40" style={{ fontFamily: "DM Sans" }}>
                  Response time: Within 4 hours
                </div>
                <div className="text-xs text-white/40" style={{ fontFamily: "DM Sans" }}>
                  Available: Mon–Sat, 9am–7pm IST
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press releases */}
      <section className="py-20">
        <div className="container">
          <div className="mono-label text-xs text-white/40 mb-8">◆ Press Releases</div>
          <div className="flex flex-col gap-4">
            {releases.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-6 rounded-2xl flex items-start gap-5 cursor-pointer group"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onClick={() => toast.info("Full press release coming soon!", { description: "Contact press@krishuai.com for the full release." })}
              >
                <div className="mono-label text-xs text-white/30 flex-shrink-0 mt-0.5 min-w-[90px]">
                  {r.date}
                </div>
                <div className="flex-1">
                  <h3
                    className="font-semibold text-white text-sm mb-1.5 leading-tight group-hover:opacity-80 transition-opacity"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-xs text-white/45 leading-relaxed" style={{ fontFamily: "DM Sans" }}>
                    {r.excerpt}
                  </p>
                </div>
                <span
                  className="text-xs flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: r.accent, fontFamily: "DM Sans" }}
                >
                  Read →
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media coverage */}
      <section className="py-16" style={{ background: "oklch(0.09 0.015 240)" }}>
        <div className="container">
          <div className="mono-label text-xs text-white/40 mb-8">◆ Media Coverage</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coverage.map((c, i) => (
              <motion.div
                key={c.headline}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "#0EA5E9", fontFamily: "Space Grotesk" }}
                  >
                    {c.outlet}
                  </span>
                  <span className="text-xs text-white/30 mono-label">{c.date}</span>
                </div>
                <p className="text-sm text-white/65 leading-snug" style={{ fontFamily: "DM Sans" }}>
                  "{c.headline}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand assets */}
      <section className="py-20">
        <div className="container">
          <div className="mono-label text-xs text-white/40 mb-8">◆ Brand Assets</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {brandAssets.map((asset, i) => (
              <motion.div
                key={asset.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-5 rounded-xl flex items-center justify-between gap-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div>
                  <div
                    className="text-sm font-semibold text-white mb-0.5"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    {asset.name}
                  </div>
                  <div className="text-xs text-white/35" style={{ fontFamily: "DM Sans" }}>
                    {asset.desc}
                  </div>
                  <div
                    className="text-xs mt-1 mono-label"
                    style={{ color: "#0EA5E9" }}
                  >
                    {asset.format}
                  </div>
                </div>
                <button
                  onClick={() => toast.success("Asset downloading!", { description: `${asset.name} will be sent to your email.` })}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 hover:scale-[1.03] flex-shrink-0"
                  style={{
                    background: "rgba(14, 165, 233, 0.12)",
                    border: "1px solid rgba(14, 165, 233, 0.25)",
                    color: "#0EA5E9",
                    fontFamily: "Space Grotesk",
                  }}
                >
                  ↓ Download
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
