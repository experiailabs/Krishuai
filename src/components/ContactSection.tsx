/*
 * KrishuAI — ContactSection Component
 * Design: Agent-first navigation — visitor identifies their profile
 * Profiles: Government Official, Enterprise Leader, Travel Executive, Educator
 * Visual: Glassmorphic form with profile-adaptive accent colors
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const profiles = [
  {
    id: "government",
    label: "Government Official",
    icon: "🏛️",
    color: "#D4A847",
    placeholder: "Tell us about your state or ministry's AI vision...",
    cta: "Request a Governance Briefing",
    description: "Explore the Bharat Agentic Stack for your jurisdiction",
  },
  {
    id: "enterprise",
    label: "Enterprise Leader",
    icon: "⚡",
    color: "#0EA5E9",
    placeholder: "Describe your enterprise AI transformation goals...",
    cta: "Schedule a Strategy Session",
    description: "Design outcome-driven AI for your organization",
  },
  {
    id: "travel",
    label: "Travel Executive",
    icon: "✈️",
    color: "#FBBF24",
    placeholder: "Share your hospitality or travel brand's challenges...",
    cta: "Book a Concierge AI Demo",
    description: "See our multimodal guest experience platform",
  },
  {
    id: "educator",
    label: "Educator / EdTech",
    icon: "📚",
    color: "#22D3EE",
    placeholder: "Tell us about your learning platform or institution...",
    cta: "Explore Sovereign Learning",
    description: "Deploy adaptive AI agents for your learners",
  },
];

export default function ContactSection() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const profile = profiles.find((p) => p.id === selectedProfile);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProfile) {
      toast.error("Please select your profile first");
      return;
    }
    toast.success("Message sent! Our team will reach out within 24 hours.", {
      description: `We'll tailor our response for a ${profile?.label}.`,
    });
    setName("");
    setEmail("");
    setMessage("");
    setSelectedProfile(null);
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.09 0.015 240)" }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(167, 139, 250, 0.3), rgba(14, 165, 233, 0.3), transparent)",
        }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(14, 165, 233, 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            <div>
              <div
                className="mono-label text-xs mb-4 inline-block px-3 py-1.5 rounded-full border"
                style={{
                  borderColor: "rgba(167, 139, 250, 0.3)",
                  color: "rgba(167, 139, 250, 0.9)",
                  background: "rgba(167, 139, 250, 0.08)",
                }}
              >
                ◆ Agent-First Contact
              </div>
              <h2
                className="text-4xl lg:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: "Space Grotesk" }}
              >
                Let's Design Your{" "}
                <span className="text-gradient-mixed">Outcome</span>
              </h2>
              <p
                className="text-lg text-white/50 leading-relaxed"
                style={{ fontFamily: "DM Sans" }}
              >
                Tell us who you are, and our AI will route your inquiry to the
                right specialist team — ensuring your first conversation is
                already tailored to your context.
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              {[
                { label: "Headquarters", value: "New Delhi, India", icon: "◎" },
                { label: "Sister Company", value: "ExperiAI Labs · Dubai, UAE", icon: "◈" },
                { label: "Response Time", value: "< 24 Hours", icon: "◉" },
                { label: "Engagement Model", value: "Project · Retainer · Partnership", icon: "⬡" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm flex-shrink-0"
                    style={{
                      background: "rgba(14, 165, 233, 0.1)",
                      border: "1px solid rgba(14, 165, 233, 0.2)",
                      color: "#0EA5E9",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="mono-label text-xs text-white/40">{item.label}</div>
                    <div className="text-white/80 text-sm mt-0.5" style={{ fontFamily: "DM Sans" }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Profile selector */}
              <div>
                <label
                  className="mono-label text-xs mb-3 block"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  I am a...
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {profiles.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedProfile(p.id === selectedProfile ? null : p.id)}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 text-left"
                      style={{
                        background:
                          selectedProfile === p.id
                            ? `${p.color}15`
                            : "rgba(255,255,255,0.04)",
                        border: `1px solid ${selectedProfile === p.id ? p.color + "40" : "rgba(255,255,255,0.08)"}`,
                        color: selectedProfile === p.id ? p.color : "rgba(255,255,255,0.6)",
                        fontFamily: "DM Sans",
                      }}
                    >
                      <span>{p.icon}</span>
                      <span className="text-xs leading-tight">{p.label}</span>
                    </button>
                  ))}
                </div>
                <AnimatePresence>
                  {profile && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 text-xs px-3 py-2 rounded-lg"
                      style={{
                        background: `${profile.color}10`,
                        border: `1px solid ${profile.color}20`,
                        color: `${profile.color}CC`,
                        fontFamily: "DM Sans",
                      }}
                    >
                      {profile.description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Name + Email */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="mono-label text-xs text-white/40">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="px-4 py-2.5 rounded-xl text-sm text-white placeholder-white/30 outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid ${profile ? profile.color + "30" : "rgba(255,255,255,0.1)"}`,
                      fontFamily: "DM Sans",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="mono-label text-xs text-white/40">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="px-4 py-2.5 rounded-xl text-sm text-white placeholder-white/30 outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid ${profile ? profile.color + "30" : "rgba(255,255,255,0.1)"}`,
                      fontFamily: "DM Sans",
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="mono-label text-xs text-white/40">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  placeholder={profile?.placeholder ?? "Tell us about your AI vision..."}
                  className="px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 outline-none resize-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: `1px solid ${profile ? profile.color + "30" : "rgba(255,255,255,0.1)"}`,
                    fontFamily: "DM Sans",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: profile
                    ? `linear-gradient(135deg, ${profile.color}, ${profile.color}CC)`
                    : "linear-gradient(135deg, #0EA5E9, #0284C7)",
                  color: profile?.id === "government" || profile?.id === "travel" ? "#050A14" : "white",
                  fontFamily: "Space Grotesk",
                  boxShadow: profile
                    ? `0 0 30px ${profile.color}30`
                    : "0 0 30px rgba(14, 165, 233, 0.3)",
                }}
              >
                {profile?.cta ?? "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
