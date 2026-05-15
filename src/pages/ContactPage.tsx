/*
 * KrishuAI — Contact Page
 * Route: /contact
 * Design: "Digital Sovereignty" — agent-first visitor routing
 */

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const profiles = [
  { id: "government", label: "Government / IAS Officer", icon: "🏛️", accent: "#D4A847", glowRgb: "212, 168, 71", placeholder: "Describe your state or ministry's AI challenge...", cta: "Request Government Briefing" },
  { id: "enterprise", label: "Enterprise / CXO", icon: "🏢", accent: "#0EA5E9", glowRgb: "14, 165, 233", placeholder: "Describe your organisation's AI transformation goal...", cta: "Schedule Executive Briefing" },
  { id: "travel", label: "Hospitality / Travel Brand", icon: "✈️", accent: "#FBBF24", glowRgb: "251, 191, 36", placeholder: "Tell us about your guest experience challenge...", cta: "Request Travel AI Demo" },
  { id: "educator", label: "Educator / EdTech Platform", icon: "🎓", accent: "#22D3EE", glowRgb: "34, 211, 238", placeholder: "Describe your learning platform or institution's needs...", cta: "Request EdTech Demo" },
  { id: "investor", label: "Investor / VC", icon: "💼", accent: "#A78BFA", glowRgb: "167, 139, 250", placeholder: "Tell us about your investment focus and interest in KrishuAI...", cta: "Request Investor Deck" },
  { id: "media", label: "Journalist / Researcher", icon: "📰", accent: "#FB923C", glowRgb: "251, 146, 60", placeholder: "Tell us about your story or research focus...", cta: "Request Press Materials" },
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
                      <div className="text-lg mb-1">{p.icon}</div>
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
