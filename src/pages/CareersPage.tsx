/*
 * KrishuAI — Careers Page
 * Route: /careers
 * Design: "Digital Sovereignty" — dark cosmic canvas, Electric Blue accent
 */

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const departments = ["All", "Engineering", "Design", "Research", "Strategy", "Operations"];

const roles = [
  {
    title: "Senior AI/ML Engineer — Bharat Agentic Stack",
    department: "Engineering",
    location: "New Delhi, India",
    type: "Full-time",
    accent: "#0EA5E9",
    description:
      "Build the core intelligence layer of the Bharat Agentic Stack. You'll design and train multimodal models that understand 22+ Indian languages, deploy sovereign AI infrastructure, and architect agentic systems that serve millions of citizens.",
    requirements: [
      "5+ years in ML/AI engineering with production deployments",
      "Experience with LLM fine-tuning and multimodal architectures",
      "Proficiency in Python, PyTorch, and distributed training",
      "Understanding of Indian language NLP challenges",
    ],
  },
  {
    title: "AI Product Designer — Multimodal Interfaces",
    department: "Design",
    location: "New Delhi / Remote",
    type: "Full-time",
    accent: "#A78BFA",
    description:
      "Design AI interfaces that work for a pension-age farmer in Bihar and a CTO in Bengaluru. You'll create voice-first, multilingual, and accessibility-first experiences that make sovereign AI usable by 1.4 billion people.",
    requirements: [
      "4+ years in product design with AI/conversational UI experience",
      "Portfolio demonstrating multilingual or accessibility-focused work",
      "Proficiency in Figma, prototyping, and design systems",
      "Empathy for low-literacy and rural user populations",
    ],
  },
  {
    title: "AI Research Scientist — Government Intelligence",
    department: "Research",
    location: "New Delhi, India",
    type: "Full-time",
    accent: "#D4A847",
    description:
      "Research and develop AI systems for government applications — from digital twin state modeling to predictive policy engines. You'll work directly with state governments and central ministries on India's most impactful AI deployments.",
    requirements: [
      "PhD or equivalent research experience in AI/ML",
      "Publications in NLP, multi-agent systems, or policy AI",
      "Experience with simulation and agent-based modeling",
      "Understanding of Indian governance structures",
    ],
  },
  {
    title: "AI Strategy Consultant — EdTech",
    department: "Strategy",
    location: "New Delhi / Mumbai",
    type: "Full-time",
    accent: "#22D3EE",
    description:
      "Lead AI transformation engagements for education boards, universities, and EdTech platforms. You'll design sovereign learning architectures, present to government stakeholders, and translate AI capability into educational outcomes.",
    requirements: [
      "5+ years in management consulting or EdTech strategy",
      "Deep understanding of India's education ecosystem",
      "Experience presenting to senior government officials",
      "Ability to translate technical AI concepts for non-technical audiences",
    ],
  },
  {
    title: "Full-Stack Engineer — AI Products",
    department: "Engineering",
    location: "New Delhi / Remote",
    type: "Full-time",
    accent: "#0EA5E9",
    description:
      "Build the product layer on top of KrishuAI's AI infrastructure. You'll create dashboards, agent interfaces, and citizen-facing applications that make the Bharat Agentic Stack accessible and actionable.",
    requirements: [
      "4+ years in full-stack development (React, Node.js, Python)",
      "Experience building real-time AI-powered applications",
      "Understanding of accessibility and performance optimization",
      "Familiarity with cloud infrastructure (AWS, Azure, or GCP)",
    ],
  },
  {
    title: "Operations Lead — Government Partnerships",
    department: "Operations",
    location: "New Delhi, India",
    type: "Full-time",
    accent: "#D4A847",
    description:
      "Manage KrishuAI's government engagement pipeline — from tender responses to deployment coordination. You'll be the operational backbone of our most impactful projects, working directly with state and central government clients.",
    requirements: [
      "5+ years in government relations or public sector operations",
      "Experience with government procurement processes",
      "Excellent written and verbal communication in Hindi and English",
      "Ability to manage complex multi-stakeholder projects",
    ],
  },
];

const perks = [
  { icon: "🌍", title: "Work on India's Most Impactful AI", desc: "Your work will directly affect millions of citizens, students, and travellers." },
  { icon: "🧠", title: "Frontier Research Access", desc: "Full access to our research lab, compute resources, and academic partnerships." },
  { icon: "✈️", title: "Global Exposure", desc: "Regular collaboration with ExperiAI Labs in Dubai and partners across 12 countries." },
  { icon: "📚", title: "Learning Budget", desc: "₹1.5L annual learning budget for courses, conferences, and certifications." },
  { icon: "🏥", title: "Comprehensive Health Cover", desc: "Full family health insurance including mental health and wellness benefits." },
  { icon: "⚡", title: "Equity Participation", desc: "ESOPs for all full-time employees — share in the value we create together." },
];

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState("All");

  const filtered = activeDept === "All" ? roles : roles.filter((r) => r.department === activeDept);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.08 0.015 240)" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 70% 30%, rgba(14, 165, 233, 0.07) 0%, transparent 70%)",
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
              ◆ Careers at KrishuAI
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Build India's{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #0EA5E9, #D4A847)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI Future
              </span>
            </h1>
            <p
              className="text-xl text-white/55 leading-relaxed"
              style={{ fontFamily: "DM Sans" }}
            >
              We're looking for people who believe that AI should be sovereign, multilingual, and
              outcome-driven — and who want to spend their careers proving it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16" style={{ background: "oklch(0.09 0.015 240)" }}>
        <div className="container">
          <div className="mono-label text-xs text-white/40 mb-8">◆ Why KrishuAI</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="text-2xl flex-shrink-0">{p.icon}</div>
                <div>
                  <div
                    className="font-semibold text-white text-sm mb-1"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    {p.title}
                  </div>
                  <p className="text-xs text-white/45 leading-relaxed" style={{ fontFamily: "DM Sans" }}>
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
            <div>
              <div className="mono-label text-xs text-white/40 mb-2">◆ Open Roles</div>
              <h2
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "Space Grotesk" }}
              >
                {filtered.length} Position{filtered.length !== 1 ? "s" : ""} Available
              </h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {departments.map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDept(d)}
                  className="px-3.5 py-1.5 rounded-full text-xs transition-all duration-200"
                  style={{
                    background: activeDept === d ? "rgba(14, 165, 233, 0.15)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${activeDept === d ? "rgba(14, 165, 233, 0.4)" : "rgba(255,255,255,0.08)"}`,
                    color: activeDept === d ? "#0EA5E9" : "rgba(255,255,255,0.5)",
                    fontFamily: "DM Sans",
                  }}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {filtered.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid rgba(255,255,255,0.07)`,
                }}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div>
                    <h3
                      className="font-bold text-white text-base mb-1"
                      style={{ fontFamily: "Space Grotesk" }}
                    >
                      {role.title}
                    </h3>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{
                          background: `${role.accent}15`,
                          border: `1px solid ${role.accent}30`,
                          color: role.accent,
                          fontFamily: "DM Sans",
                        }}
                      >
                        {role.department}
                      </span>
                      <span className="text-xs text-white/40" style={{ fontFamily: "DM Sans" }}>
                        📍 {role.location}
                      </span>
                      <span className="text-xs text-white/40" style={{ fontFamily: "DM Sans" }}>
                        ⏱ {role.type}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toast.success("Application form coming soon!", { description: `We'll notify you when applications open for ${role.title}.` })}
                    className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03] flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${role.accent}, ${role.accent}CC)`,
                      color: role.accent === "#D4A847" ? "#050A14" : "white",
                      fontFamily: "Space Grotesk",
                    }}
                  >
                    Apply Now
                  </button>
                </div>
                <p className="text-sm text-white/50 leading-relaxed mb-4" style={{ fontFamily: "DM Sans" }}>
                  {role.description}
                </p>
                <div className="flex flex-col gap-1.5">
                  {role.requirements.map((req, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span className="text-xs mt-0.5 flex-shrink-0" style={{ color: role.accent }}>◆</span>
                      <span className="text-xs text-white/45" style={{ fontFamily: "DM Sans" }}>{req}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-white/40 text-sm mb-4" style={{ fontFamily: "DM Sans" }}>
              Don't see the right role? We're always looking for exceptional people.
            </p>
            <button
              onClick={() => toast.success("Speculative application noted!", { description: "We'll reach out when a suitable role opens." })}
              className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "Space Grotesk",
              }}
            >
              Send a Speculative Application
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
