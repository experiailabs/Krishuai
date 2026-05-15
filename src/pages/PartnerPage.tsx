/*
 * KrishuAI — Partner Program Page
 * Route: /partner
 * Design: "Digital Sovereignty" — dark canvas, Tech-Gold accent
 */

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const tiers = [
  {
    name: "Integration Partner",
    accent: "#0EA5E9",
    glowRgb: "14, 165, 233",
    icon: "⬡",
    desc: "Technology companies that integrate the Bharat Agentic Stack into their own products and platforms.",
    benefits: [
      "API access to Bharat Agentic Stack modules",
      "Co-branded solution development support",
      "Technical integration documentation",
      "Joint go-to-market for enterprise clients",
      "Revenue share on referred engagements",
    ],
    ideal: "SaaS companies, cloud providers, system integrators",
  },
  {
    name: "Delivery Partner",
    accent: "#D4A847",
    glowRgb: "212, 168, 71",
    icon: "◎",
    desc: "Consulting and implementation firms that deploy KrishuAI solutions for government and enterprise clients.",
    benefits: [
      "Certified KrishuAI implementation training",
      "Access to solution deployment playbooks",
      "Priority support for client engagements",
      "Co-selling with KrishuAI sales team",
      "Preferred partner listing and referrals",
    ],
    ideal: "Management consultancies, IT services firms, government contractors",
  },
  {
    name: "Research Partner",
    accent: "#A78BFA",
    glowRgb: "167, 139, 250",
    icon: "✦",
    desc: "Academic institutions and research organisations that collaborate on advancing sovereign AI science.",
    benefits: [
      "Access to KrishuAI research datasets and models",
      "Joint publication opportunities",
      "Research grant co-applications",
      "PhD and postdoc placement programme",
      "Annual KrishuAI Research Summit access",
    ],
    ideal: "IITs, IIMs, national research labs, international universities",
  },
];

const currentPartners = [
  { name: "National Informatics Centre", type: "Government", accent: "#D4A847" },
  { name: "IIT Delhi AI Lab", type: "Research", accent: "#A78BFA" },
  { name: "ExperiAI Labs, Dubai", type: "Sister Company", accent: "#FB923C" },
  { name: "NASSCOM AI Council", type: "Industry", accent: "#0EA5E9" },
  { name: "Ministry of Education", type: "Government", accent: "#D4A847" },
  { name: "Tata Consultancy Services", type: "Delivery", accent: "#22D3EE" },
];

export default function PartnerPage() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.08 0.015 240)" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 40% 30%, rgba(212, 168, 71, 0.07) 0%, transparent 70%)",
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
                borderColor: "rgba(212, 168, 71, 0.3)",
                color: "rgba(212, 168, 71, 0.9)",
                background: "rgba(212, 168, 71, 0.08)",
              }}
            >
              ◆ Partner Programme
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Build India's AI{" "}
              <span style={{ color: "#D4A847" }}>Together</span>
            </h1>
            <p
              className="text-xl text-white/55 leading-relaxed"
              style={{ fontFamily: "DM Sans" }}
            >
              KrishuAI's partner ecosystem brings together technology companies, consulting firms,
              and research institutions to accelerate India's sovereign AI transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner tiers */}
      <section className="py-16">
        <div className="container">
          <div className="mono-label text-xs text-white/40 mb-8">◆ Partnership Tiers</div>
          <div className="grid lg:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-2xl flex flex-col gap-5"
                style={{
                  background: `linear-gradient(135deg, rgba(${tier.glowRgb}, 0.06) 0%, rgba(255,255,255,0.02) 100%)`,
                  border: `1px solid rgba(${tier.glowRgb}, 0.15)`,
                }}
              >
                <div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4"
                    style={{
                      background: `rgba(${tier.glowRgb}, 0.12)`,
                      border: `1px solid rgba(${tier.glowRgb}, 0.25)`,
                      color: tier.accent,
                    }}
                  >
                    {tier.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className="text-sm text-white/50 leading-relaxed mb-1"
                    style={{ fontFamily: "DM Sans" }}
                  >
                    {tier.desc}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: tier.accent, fontFamily: "DM Sans" }}
                  >
                    Ideal for: {tier.ideal}
                  </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <div className="mono-label text-xs text-white/30 mb-1">Benefits</div>
                  {tier.benefits.map((b, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span className="text-xs mt-0.5 flex-shrink-0" style={{ color: tier.accent }}>◆</span>
                      <span className="text-xs text-white/55 leading-relaxed" style={{ fontFamily: "DM Sans" }}>{b}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => toast.success("Application received!", { description: `We'll review your ${tier.name} application and respond within 5 business days.` })}
                  className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: `rgba(${tier.glowRgb}, 0.15)`,
                    border: `1px solid rgba(${tier.glowRgb}, 0.3)`,
                    color: tier.accent,
                    fontFamily: "Space Grotesk",
                  }}
                >
                  Apply as {tier.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current partners */}
      <section className="py-16" style={{ background: "oklch(0.09 0.015 240)" }}>
        <div className="container">
          <div className="mono-label text-xs text-white/40 mb-8">◆ Current Partners</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {currentPartners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-4 rounded-xl text-center"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="text-xs mb-1"
                  style={{ color: p.accent, fontFamily: "DM Sans" }}
                >
                  {p.type}
                </div>
                <div
                  className="text-xs font-semibold text-white leading-tight"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  {p.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center max-w-xl mx-auto">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Ready to Join the Ecosystem?
          </h2>
          <p className="text-white/50 mb-8" style={{ fontFamily: "DM Sans" }}>
            Contact our partnerships team to discuss the right tier for your organisation.
          </p>
          <button
            onClick={() => toast.success("Partnership enquiry sent!", { description: "Our partnerships team will reach out within 2 business days." })}
            className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, #D4A847, #B8922E)",
              color: "#050A14",
              fontFamily: "Space Grotesk",
              boxShadow: "0 0 40px rgba(212, 168, 71, 0.3)",
            }}
          >
            Contact Partnerships Team
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
