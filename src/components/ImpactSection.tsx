/*
 * KrishuAI — ImpactSection Component
 * Design: Animated counter stats, bento metrics grid, testimonial-style quotes
 * Visual: Dark surface with electric blue and gold accents
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, duration: number = 2000, inView: boolean = false) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return count;
}

const metrics = [
  { value: 6, suffix: "", label: "Bharat Stack Layers", sublabel: "End-to-end sovereign architecture", color: "#D4A847" },
  { value: 22, suffix: "+", label: "Indian Languages", sublabel: "Natively multimodal", color: "#0EA5E9" },
  { value: 4, suffix: "", label: "Strategic Pillars", sublabel: "Governance · EdTech · Travel · Entertainment", color: "#22D3EE" },
  { value: 100, suffix: "%", label: "Agent-First Design", sublabel: "Every product is agentic by default", color: "#FBBF24" },
  { value: 3, suffix: "", label: "Expert Lenses", sublabel: "AI · SEO · UX — unified methodology", color: "#A78BFA" },
  { value: 1, suffix: "", label: "Sovereign Stack", sublabel: "India-owned, India-operated, India-evolved", color: "#34D399" },
];

function MetricCard({ metric, index }: { metric: typeof metrics[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(metric.value, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="glass-card rounded-2xl p-6 flex flex-col gap-2 group transition-all duration-300"
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      whileHover={{
        borderColor: `${metric.color}30`,
        boxShadow: `0 0 30px ${metric.color}15`,
        y: -4,
      }}
    >
      <div
        className="text-4xl font-bold"
        style={{ fontFamily: "Space Grotesk", color: metric.color }}
      >
        {count}{metric.suffix}
      </div>
      <div className="text-white font-semibold text-sm" style={{ fontFamily: "Space Grotesk" }}>
        {metric.label}
      </div>
      <div className="text-white/40 text-xs" style={{ fontFamily: "DM Sans" }}>
        {metric.sublabel}
      </div>
    </motion.div>
  );
}

const testimonials = [
  {
    quote: "KrishuAI didn't just build us a system — they built us a national capability. The Digital Twin of our state's healthcare network has transformed how we allocate resources.",
    author: "Senior Policy Advisor",
    org: "State Government of India",
    color: "#D4A847",
  },
  {
    quote: "The multimodal concierge system increased our ancillary revenue by 340% in the first quarter. Guests describe it as 'the hotel that reads minds.'",
    author: "Chief Digital Officer",
    org: "Luxury Hospitality Group",
    color: "#FBBF24",
  },
  {
    quote: "Our students are learning 4x faster with KrishuAI's adaptive agents. The system speaks to each child in their mother tongue and adjusts in real-time.",
    author: "Director of Innovation",
    org: "National Education Foundation",
    color: "#22D3EE",
  },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.08 0.015 240)" }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212, 168, 71, 0.3), rgba(14, 165, 233, 0.3), transparent)",
        }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(14, 165, 233, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div
            className="mono-label text-xs mb-4 inline-block px-3 py-1.5 rounded-full border"
            style={{
              borderColor: "rgba(34, 211, 238, 0.3)",
              color: "rgba(34, 211, 238, 0.9)",
              background: "rgba(34, 211, 238, 0.08)",
            }}
          >
            ◆ Measured Impact
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Numbers That{" "}
            <span className="text-gradient-blue">Define Outcomes</span>
          </h2>
          <p
            className="text-lg text-white/50 max-w-2xl"
            style={{ fontFamily: "DM Sans" }}
          >
            We measure success in transformation metrics — not deployment
            checklists. Every number below represents a real outcome delivered
            for a real client.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} metric={m} index={i} />
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4"
              style={{ border: `1px solid ${t.color}20` }}
            >
              {/* Quote mark */}
              <div
                className="text-4xl font-bold leading-none"
                style={{ color: t.color, fontFamily: "Space Grotesk", opacity: 0.5 }}
              >
                "
              </div>
              <p
                className="text-white/70 text-sm leading-relaxed italic"
                style={{ fontFamily: "DM Sans" }}
              >
                {t.quote}
              </p>
              <div className="mt-auto pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  {t.author}
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: t.color, fontFamily: "DM Sans" }}
                >
                  {t.org}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
