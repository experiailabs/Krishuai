/*
 * KrishuAI — About Page
 * Route: /about
 * Design: "Digital Sovereignty" — dark cosmic canvas, Electric Blue + Tech-Gold
 */

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const values = [
  {
    icon: "◎",
    title: "Sovereignty First",
    description:
      "Every system we build is designed to be owned, operated, and evolved by India — not dependent on foreign infrastructure or opaque cloud models.",
    accent: "#D4A847",
  },
  {
    icon: "⬡",
    title: "Outcome Over Output",
    description:
      "We do not measure success in lines of code or dashboards deployed. We measure it in pension disbursements processed, students who learned, and guests who returned.",
    accent: "#0EA5E9",
  },
  {
    icon: "✦",
    title: "Multimodal by Default",
    description:
      "India speaks 22+ languages and communicates through voice, image, and gesture. Our AI systems are built from the ground up to understand all of them.",
    accent: "#22D3EE",
  },
  {
    icon: "◈",
    title: "Agent-First Architecture",
    description:
      "We build autonomous agents that act, not just tools that assist. Every product we ship is designed to reduce human toil and amplify human judgment.",
    accent: "#A78BFA",
  },
];

const milestones = [
  { year: "2025", event: "Krishu Techventures founded in New Delhi with a mandate to build India-native, sovereign AI infrastructure for Bharat and the world." },
  { year: "2025", event: "Bharat Agentic Stack architecture designed — a six-layer multimodal intelligence framework purpose-built for Indian languages, contexts, and governance needs." },
  { year: "2025", event: "Four strategic pillars established: AI for Governance, AI EdTech, AI Travel & Hospitality, and AI Entertainment." },
  { year: "2025", event: "Sister company ExperiAI Labs incorporated in Dubai to lead global experience delivery and MENA market expansion." },
  { year: "2026", event: "First enterprise and government engagements initiated across multiple pillars. KrishuAI begins operating as a premier Global AI Technology House." },
];

const team = [
  {
    name: "Ashwini Sharma",
    role: "Chief Executive Officer",
    bio: "Visionary leader driving KrishuAI's mission to architect sovereign AI systems for India and the world. Brings deep expertise in enterprise technology strategy and large-scale digital transformation across government and industry.",
    accent: "#D4A847",
    initials: "AS",
    photo: "/images/AshwiniSharma.png",
    linkedin: "https://www.linkedin.com/in/ashwini-sharma-59b2748/",
    badge: "CEO",
  },
  {
    name: "Shailendra Kumar",
    role: "Chief AI Officer",
    bio: "Architect of the Bharat Agentic Stack. A frontier AI researcher and practitioner who has designed intelligence systems for governments and global enterprises across India, Australia, and the Middle East.",
    accent: "#0EA5E9",
    initials: "SK",
    photo: "/images/ShailendraKumar.png",
    linkedin: "https://www.linkedin.com/in/shaily/",
    badge: "CAIO",
  },
  {
    name: "Swapnil Kumar",
    role: "Director",
    bio: "Leads KrishuAI's strategic partnerships and delivery operations. Combines deep technical acumen with business leadership to ensure every engagement moves from design to measurable outcome.",
    accent: "#22D3EE",
    initials: "SK",
    photo: "/images/SwapnilKumar.png",
    linkedin: "https://www.linkedin.com/in/swapnil-hemant-kumar-3b0b481b/",
    badge: "DIR",
  },
  {
    name: "Anshul Kumar",
    role: "Strategic Advisor",
    bio: "Brings extensive experience in technology investment, product strategy, and scaling AI ventures. Guides KrishuAI's growth trajectory and market positioning across enterprise and government sectors.",
    accent: "#A78BFA",
    initials: "AK",
    photo: "/images/AnshulKumar.png",
    linkedin: "https://www.linkedin.com/in/anshulkumar/",
    badge: "ADV",
  },
  {
    name: "Dinesh Krishnan",
    role: "Strategic Advisor",
    bio: "Seasoned leader with a track record in building and scaling technology organisations. Advises on governance AI strategy, institutional partnerships, and the deployment of agentic systems at national scale.",
    accent: "#FB923C",
    initials: "DK",
    photo: "/images/DineshKrishnan.png",
    linkedin: "https://www.linkedin.com/in/dineshkrishnan/",
    badge: "ADV",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.08 0.015 240)" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 40%, rgba(14, 165, 233, 0.07) 0%, transparent 70%)",
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
              ◆ About KrishuAI
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk" }}
            >
              We Build India's{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #0EA5E9, #D4A847)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Intelligence Layer
              </span>
            </h1>
            <p
              className="text-xl text-white/55 leading-relaxed mb-8"
              style={{ fontFamily: "DM Sans" }}
            >
              KrishuAI is a premier Global AI Technology House headquartered in New Delhi. We architect
              high-impact Multimodal Agentic AI systems that transform Governance, Education, Travel,
              and Entertainment — moving beyond implementation to outcome design.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/solutions/governance">
                <button
                  className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
                    color: "white",
                    fontFamily: "Space Grotesk",
                    boxShadow: "0 0 30px rgba(14, 165, 233, 0.3)",
                  }}
                >
                  Explore Our Work
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    fontFamily: "Space Grotesk",
                  }}
                >
                  Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 border-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8 max-w-sm mx-auto">
            {[
              { value: "2025", label: "Founded" },
              { value: "4", label: "Strategic Pillars" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl font-bold mb-1"
                  style={{
                    fontFamily: "Space Grotesk",
                    background: "linear-gradient(90deg, #0EA5E9, #D4A847)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm mono-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mono-label text-xs text-white/40 mb-4">◆ Our Mission</div>
              <h2
                className="text-4xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "Space Grotesk" }}
              >
                Sovereign Intelligence for a Billion People
              </h2>
              <p className="text-white/55 leading-relaxed mb-4" style={{ fontFamily: "DM Sans" }}>
                India is the world's largest democracy, home to 1.4 billion people speaking 22 official
                languages across urban megacities and rural villages. The AI systems that serve this
                population cannot be built on foreign infrastructure, trained on Western data, or
                dependent on opaque cloud models.
              </p>
              <p className="text-white/55 leading-relaxed" style={{ fontFamily: "DM Sans" }}>
                KrishuAI exists to build the intelligence layer that India deserves — sovereign,
                multilingual, multimodal, and outcome-driven. We call this the{" "}
                <span style={{ color: "#D4A847" }}>Bharat Agentic Stack</span>.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${v.accent}20`,
                  }}
                >
                  <div className="text-2xl mb-3" style={{ color: v.accent }}>{v.icon}</div>
                  <div
                    className="text-sm font-semibold text-white mb-2"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    {v.title}
                  </div>
                  <div className="text-xs text-white/45 leading-relaxed" style={{ fontFamily: "DM Sans" }}>
                    {v.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ background: "oklch(0.09 0.015 240)" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="mono-label text-xs text-white/40 mb-3">◆ Our Journey</div>
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "Space Grotesk" }}
            >
              From Vision to Sovereignty
            </h2>
          </motion.div>
          <div className="relative">
            <div
              className="absolute left-4 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(180deg, #0EA5E9, #D4A847, transparent)" }}
            />
            <div className="flex flex-col gap-8 pl-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={`milestone-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative"
                >
                  <div
                    className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full border-2"
                    style={{
                      background: "oklch(0.08 0.015 240)",
                      borderColor: i % 2 === 0 ? "#0EA5E9" : "#D4A847",
                    }}
                  />
                  <div className="flex items-start gap-4">
                    <div
                      className="mono-label text-xs flex-shrink-0 mt-0.5"
                      style={{ color: i % 2 === 0 ? "#0EA5E9" : "#D4A847" }}
                    >
                      {m.year}
                    </div>
                    <p className="text-white/65 text-sm leading-relaxed" style={{ fontFamily: "DM Sans" }}>
                      {m.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="mono-label text-xs text-white/40 mb-3">◆ Leadership</div>
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "Space Grotesk" }}
            >
              The Minds Behind the Stack
            </h2>
          </motion.div>
          {/* First row: 3 core team */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {team.slice(0, 3).map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl flex flex-col gap-4 group relative"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${member.accent}25`,
                }}
              >
                {/* Badge */}
                <div
                  className="absolute top-4 right-4 mono-label text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: `${member.accent}15`,
                    color: member.accent,
                    border: `1px solid ${member.accent}30`,
                  }}
                >
                  {member.badge}
                </div>
                <div className="flex items-center gap-4">
                  {/* Avatar: real B&W photo or styled initials fallback */}
                  <div className="relative flex-shrink-0">
                    {member.photo ? (
                      <div
                        className="w-16 h-16 rounded-full overflow-hidden"
                        style={{
                          border: `2px solid ${member.accent}50`,
                          boxShadow: `0 0 20px ${member.accent}25`,
                        }}
                      >
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                          style={{ filter: "grayscale(100%) contrast(1.1)" }}
                        />
                      </div>
                    ) : (
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold"
                        style={{
                          background: `radial-gradient(135deg at 30% 30%, ${member.accent}55 0%, ${member.accent}18 60%, oklch(0.08 0.015 240) 100%)`,
                          border: `2px solid ${member.accent}50`,
                          color: "white",
                          fontFamily: "Space Grotesk",
                          boxShadow: `0 0 20px ${member.accent}25`,
                        }}
                      >
                        {member.initials}
                      </div>
                    )}
                    <div
                      className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: `${member.accent}`, border: "2px solid oklch(0.08 0.015 240)" }}
                    >
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="white">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-semibold text-white text-sm mb-0.5"
                      style={{ fontFamily: "Space Grotesk" }}
                    >
                      {member.name}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: member.accent, fontFamily: "DM Sans" }}
                    >
                      {member.role}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-white/45 leading-relaxed flex-1" style={{ fontFamily: "DM Sans" }}>
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs transition-all duration-200 hover:opacity-100 opacity-50 group-hover:opacity-80"
                  style={{ color: member.accent, fontFamily: "DM Sans" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  View on LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
          {/* Second row: 2 advisors, centered */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {team.slice(3).map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
                className="p-6 rounded-2xl flex flex-col gap-4 group relative"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${member.accent}25`,
                }}
              >
                {/* Badge */}
                <div
                  className="absolute top-4 right-4 mono-label text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: `${member.accent}15`,
                    color: member.accent,
                    border: `1px solid ${member.accent}30`,
                  }}
                >
                  {member.badge}
                </div>
                <div className="flex items-center gap-4">
                  {/* Avatar: real B&W photo or styled initials fallback */}
                  <div className="relative flex-shrink-0">
                    {member.photo ? (
                      <div
                        className="w-16 h-16 rounded-full overflow-hidden"
                        style={{
                          border: `2px solid ${member.accent}50`,
                          boxShadow: `0 0 20px ${member.accent}25`,
                        }}
                      >
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                          style={{ filter: "grayscale(100%) contrast(1.1)" }}
                        />
                      </div>
                    ) : (
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold"
                        style={{
                          background: `radial-gradient(135deg at 30% 30%, ${member.accent}55 0%, ${member.accent}18 60%, oklch(0.08 0.015 240) 100%)`,
                          border: `2px solid ${member.accent}50`,
                          color: "white",
                          fontFamily: "Space Grotesk",
                          boxShadow: `0 0 20px ${member.accent}25`,
                        }}
                      >
                        {member.initials}
                      </div>
                    )}
                  </div>
                  <div>
                    <div
                      className="font-semibold text-white text-sm mb-0.5"
                      style={{ fontFamily: "Space Grotesk" }}
                    >
                      {member.name}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: member.accent, fontFamily: "DM Sans" }}
                    >
                      {member.role}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-white/45 leading-relaxed flex-1" style={{ fontFamily: "DM Sans" }}>
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs transition-all duration-200 hover:opacity-100 opacity-50 group-hover:opacity-80"
                  style={{ color: member.accent, fontFamily: "DM Sans" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  View on LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
