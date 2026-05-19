/*
 * KrishuAI — Careers Page
 * Route: /careers
 * Design: "Digital Sovereignty" — dark cosmic canvas, Electric Blue accent
 */

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";


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

const PerkIcon = ({ type }: { type: string }) => {
  const props = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (type === "globe") return <svg {...props}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
  if (type === "brain") return <svg {...props}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.98-3 2.5 2.5 0 0 1-1.32-4.24 3 3 0 0 1 .34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.1-2.48Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.98-3 2.5 2.5 0 0 0 1.32-4.24 3 3 0 0 0-.34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.1-2.48Z"/></svg>;
  if (type === "plane") return <svg {...props}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4c-1 0-1.5.5-3.5 2.5L8 8 .8 6.2c-.5-.1-.9.4-.6.8l5.5 5.5c.2.2.2.5 0 .7l-1.5 1.5c-.2.2-.5.2-.7 0L2 19l1 1 5.1-1.5c.2-.1.5 0 .7.2l5.5 5.5c.4.3.9-.1.8-.6z"/></svg>;
  if (type === "book") return <svg {...props}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
  if (type === "heart") return <svg {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
  if (type === "equity") return <svg {...props}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
  return null;
};

const perks = [
  { icon: "globe", title: "Work on India's Most Impactful AI", desc: "Your work will directly affect millions of citizens, students, and travellers." },
  { icon: "brain", title: "Frontier Research Access", desc: "Full access to our research lab, compute resources, and academic partnerships." },
  { icon: "plane", title: "Global Exposure", desc: "Regular collaboration with ExperiAI Labs in Dubai and partners across 12 countries." },
  { icon: "book", title: "Learning Budget", desc: "₹1.5L annual learning budget for courses, conferences, and certifications." },
  { icon: "heart", title: "Comprehensive Health Cover", desc: "Full family health insurance including mental health and wellness benefits." },
  { icon: "equity", title: "Equity Participation", desc: "ESOPs for all full-time employees — share in the value we create together." },
];

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState("All");

  const filtered = activeDept === "All" ? roles : roles.filter((r) => r.department === activeDept);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.08 0.015 240)" }}>
      <SEO
        title="Careers at KrishuAI — Build India's Sovereign AI Future"
        description="Join KrishuAI and build India's sovereign AI infrastructure. Open roles in AI/ML Engineering, Research, Design, Strategy, and Operations in New Delhi and Remote."
        keywords="KrishuAI careers, AI jobs India, ML engineer India, AI research jobs New Delhi, sovereign AI careers, Krishu Techventures jobs, AI engineer India"
        canonical="/careers"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://krishuaitech-murffryc.manus.space/" },
            { "@type": "ListItem", position: 2, name: "Careers", item: "https://krishuaitech-murffryc.manus.space/careers" }
          ]
        }}
      />
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
                <div className="flex-shrink-0 text-white/50 mt-0.5">
                  <PerkIcon type={p.icon} />
                </div>
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
                  <a
                    href={`mailto:hello@krishuai.com?subject=${encodeURIComponent('Job Application: ' + role.title)}&body=${encodeURIComponent('Hi KrishuAI Team,\n\nI would like to apply for the following role:\n\nRole: ' + role.title + '\nDepartment: ' + role.department + '\nLocation: ' + role.location + '\n\nPlease find my CV attached. I look forward to hearing from you.\n\nThank you.')}`}
                    className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03] flex-shrink-0 inline-block"
                    style={{
                      background: `linear-gradient(135deg, ${role.accent}, ${role.accent}CC)`,
                      color: role.accent === "#D4A847" ? "#050A14" : "white",
                      fontFamily: "Space Grotesk",
                      textDecoration: "none",
                    }}
                  >
                    Apply Now
                  </a>
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
            <a
              href="mailto:hello@krishuai.com?subject=Speculative%20Application%20%E2%80%94%20KrishuAI&body=Hi%20KrishuAI%20Team%2C%0A%0AI%20am%20reaching%20out%20with%20a%20speculative%20application.%20I%20believe%20my%20skills%20and%20experience%20could%20be%20a%20strong%20fit%20for%20your%20team.%0A%0APlease%20find%20my%20CV%20attached.%20I%20look%20forward%20to%20hearing%20from%20you.%0A%0AThank%20you."
              className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03] inline-block"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "Space Grotesk",
                textDecoration: "none",
              }}
            >
              Send a Speculative Application
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
