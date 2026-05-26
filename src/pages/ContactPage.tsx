/*
 * KrishuAI — Contact Page
 * Route: /contact
 * Design: "Digital Sovereignty" — agent-first visitor routing
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const ProfileIcons: Record<string, React.FC<{ color: string }>> = {
  government: ({ color }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 22h18M6 18V10m4 8V10m4 8V10m4 8V10M2 10l10-7 10 7"/>
    </svg>
  ),
  enterprise: ({ color }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12"/>
    </svg>
  ),
  travel: ({ color }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4c-1 0-1.5.5-3.5 2.5L8 8 .8 6.2c-.5-.1-.9.4-.6.8l5.5 5.5c.2.2.2.5 0 .7l-1.5 1.5c-.2.2-.5.2-.7 0L2 19l1 1 5.1-1.5c.2-.1.5 0 .7.2l5.5 5.5c.4.3.9-.1.8-.6z"/>
    </svg>
  ),
  educator: ({ color }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  investor: ({ color }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  media: ({ color }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
};

const profiles = [
  { id: "government", label: "Government / IAS Officer", accent: "#D4A847", glowRgb: "212, 168, 71", placeholder: "Describe your state or ministry's AI challenge...", cta: "Request Government Briefing" },
  { id: "enterprise", label: "Enterprise / CXO", accent: "#0EA5E9", glowRgb: "14, 165, 233", placeholder: "Describe your organisation's AI transformation goal...", cta: "Schedule Executive Briefing" },
  { id: "travel", label: "Hospitality / Travel Brand", accent: "#FBBF24", glowRgb: "251, 191, 36", placeholder: "Tell us about your guest experience challenge...", cta: "Request Travel AI Demo" },
  { id: "educator", label: "Educator / EdTech Platform", accent: "#22D3EE", glowRgb: "34, 211, 238", placeholder: "Describe your learning platform or institution's needs...", cta: "Request EdTech Demo" },
  { id: "investor", label: "Investor / VC", accent: "#A78BFA", glowRgb: "167, 139, 250", placeholder: "Tell us about your investment focus and interest in KrishuAI...", cta: "Request Investor Deck" },
  { id: "media", label: "Journalist / Researcher", accent: "#FB923C", glowRgb: "251, 146, 60", placeholder: "Tell us about your story or research focus...", cta: "Request Press Materials" },
];

const offices = [
  { city: "New Delhi", country: "India", role: "Headquarters", address: "Cyber Hub, Gurugram, Haryana 122002", accent: "#D4A847" },
  { city: "Dubai", country: "UAE", role: "Sister Company — ExperiAI Labs", address: "DIFC, Gate Avenue, Dubai", accent: "#FB923C" },
];

export default function ContactPage() {
  const [selectedProfile, setSelectedProfile] = useState("government");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");

  const active = profiles.find((p) => p.id === selectedProfile)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    toast.success("Message sent!", {
      description: `Thank you, ${name}. Our team will respond within 24 hours.`,
    });
    setName(""); setEmail(""); setOrg(""); setMessage("");
  };

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.08 0.015 240)" }}>
      <SEO
        title="Contact KrishuAI — Partner with India's Sovereign AI Technology House"
        description="Connect with KrishuAI to co-build sovereign AI solutions. Government bodies, enterprises, EdTech institutions, and travel brands — partner with India's Bharat Agentic Stack architects."
        keywords="contact KrishuAI, KrishuAI partnership, AI consulting India, sovereign AI contact, Krishu Techventures contact, AI partner India"
        canonical="/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://krishuaitech-murffryc.manus.space/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://krishuaitech-murffryc.manus.space/contact" }
          ]
        }}
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 40% 40%, rgba(${active.glowRgb}, 0.07) 0%, transparent 70%)`,
            transition: "background 0.5s ease",
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
                borderColor: `rgba(${active.glowRgb}, 0.3)`,
                color: `rgba(${active.glowRgb}, 0.9)`,
                background: `rgba(${active.glowRgb}, 0.08)`,
                transition: "all 0.4s ease",
              }}
            >
              ◆ Get in Touch
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Start the{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${active.accent}, #0EA5E9)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "background 0.4s ease",
                }}
              >
                Conversation
              </span>
            </h1>
            <p
              className="text-lg text-white/55 leading-relaxed"
              style={{ fontFamily: "DM Sans" }}
            >
              Tell us who you are and we'll route you to the right team. Every engagement begins
              with understanding your specific outcome.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Profile selector + form */}
            <div>
              {/* Profile selector */}
              <div className="mb-8">
                <div className="mono-label text-xs text-white/40 mb-4">I am a...</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {profiles.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProfile(p.id)}
                      className="px-3 py-3 rounded-xl text-left transition-all duration-300"
                      style={{
                        background: selectedProfile === p.id ? `rgba(${p.glowRgb}, 0.12)` : "rgba(255,255,255,0.03)",
                        border: `1px solid ${selectedProfile === p.id ? `rgba(${p.glowRgb}, 0.35)` : "rgba(255,255,255,0.07)"}`,
                      }}
                    >
                      <div className="mb-1.5">
                        {ProfileIcons[p.id] && (
                          React.createElement(ProfileIcons[p.id], {
                            color: selectedProfile === p.id ? p.accent : "rgba(255,255,255,0.4)"
                          })
                        )}
                      </div>
                      <div
                        className="text-xs font-semibold leading-tight"
                        style={{
                          color: selectedProfile === p.id ? p.accent : "rgba(255,255,255,0.6)",
                          fontFamily: "Space Grotesk",
                        }}
                      >
                        {p.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mono-label text-xs text-white/40 mb-1.5 block">Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: `1px solid rgba(${active.glowRgb}, 0.2)`,
                        fontFamily: "DM Sans",
                      }}
                    />
                  </div>
                  <div>
                    <label className="mono-label text-xs text-white/40 mb-1.5 block">Email *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: `1px solid rgba(${active.glowRgb}, 0.2)`,
                        fontFamily: "DM Sans",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label className="mono-label text-xs text-white/40 mb-1.5 block">Organisation</label>
                  <input
                    type="text"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder="Your organisation or ministry"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid rgba(${active.glowRgb}, 0.2)`,
                      fontFamily: "DM Sans",
                    }}
                  />
                </div>
                <div>
                  <label className="mono-label text-xs text-white/40 mb-1.5 block">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={active.placeholder}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none resize-none"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid rgba(${active.glowRgb}, 0.2)`,
                      fontFamily: "DM Sans",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.01]"
                  style={{
                    background: `linear-gradient(135deg, ${active.accent}, ${active.accent}CC)`,
                    color: active.id === "government" || active.id === "travel" ? "#050A14" : "white",
                    fontFamily: "Space Grotesk",
                    boxShadow: `0 0 30px rgba(${active.glowRgb}, 0.25)`,
                    transition: "all 0.4s ease",
                  }}
                >
                  {active.cta}
                </button>
              </form>
            </div>

            {/* Right: Offices + info */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="mono-label text-xs text-white/40 mb-5">◆ Our Offices</div>
                <div className="flex flex-col gap-4">
                  {offices.map((o) => (
                    <div
                      key={o.city}
                      className="p-5 rounded-2xl"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: `1px solid ${o.accent}18`,
                      }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div
                            className="font-bold text-white text-base"
                            style={{ fontFamily: "Space Grotesk" }}
                          >
                            {o.city}, {o.country}
                          </div>
                          <div
                            className="text-xs mt-0.5"
                            style={{ color: o.accent, fontFamily: "DM Sans" }}
                          >
                            {o.role}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-white/40" style={{ fontFamily: "DM Sans" }}>
                        {o.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="mono-label text-xs text-white/40 mb-4">◆ Response Times</div>
                <div className="flex flex-col gap-3">
                  {[
                    { type: "Government Enquiries", time: "Within 4 hours", accent: "#D4A847" },
                    { type: "Enterprise Briefings", time: "Within 24 hours", accent: "#0EA5E9" },
                    { type: "Media & Press", time: "Within 4 hours", accent: "#22D3EE" },
                    { type: "Investor Relations", time: "Within 24 hours", accent: "#A78BFA" },
                    { type: "Partnership Enquiries", time: "Within 48 hours", accent: "#FB923C" },
                  ].map((r) => (
                    <div key={r.type} className="flex items-center justify-between">
                      <span className="text-xs text-white/50" style={{ fontFamily: "DM Sans" }}>{r.type}</span>
                      <span className="text-xs mono-label" style={{ color: r.accent }}>{r.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="mono-label text-xs text-white/40 mb-3">◆ Follow KrishuAI</div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/krishuai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/10 text-white/50 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/8 transition-all duration-200 group flex-1 justify-center"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    <span className="text-xs font-medium" style={{ fontFamily: "DM Sans" }}>LinkedIn</span>
                  </a>
                  <a
                    href="https://twitter.com/krishuai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/6 transition-all duration-200 group flex-1 justify-center"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span className="text-xs font-medium" style={{ fontFamily: "DM Sans" }}>Twitter / X</span>
                  </a>
                </div>
              </div>

              <div
                className="p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="mono-label text-xs text-white/40 mb-3">◆ Direct Contacts</div>
                <div className="flex flex-col gap-2">
                  {[
                    { role: "General", email: "hello@krishuai.com" },
                    { role: "Press", email: "press@krishuai.com" },
                    { role: "Investors", email: "investors@krishuai.com" },
                    { role: "Partnerships", email: "partners@krishuai.com" },
                  ].map((c) => (
                    <div key={c.role} className="flex items-center justify-between">
                      <span className="text-xs text-white/40 mono-label">{c.role}</span>
                      <span className="text-xs text-white/60" style={{ fontFamily: "DM Sans" }}>{c.email}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
