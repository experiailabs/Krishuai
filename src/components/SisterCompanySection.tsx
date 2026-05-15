/*
 * KrishuAI — SisterCompanySection Component
 * Design: Warm sunset gradient card contrasting the cool cosmic KrishuAI palette
 * Highlights ExperiAI Labs as Dubai-based sister company
 * ExperiAI Labs: "Designing Intelligent Experiences at Scale" — sunset orange-to-violet identity
 */

import { motion } from "framer-motion";

export default function SisterCompanySection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "oklch(0.08 0.015 240)" }}
    >
      {/* Subtle top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.25), rgba(167, 139, 250, 0.25), transparent)",
        }}
      />

      <div className="container relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-3"
        >
          <div
            className="mono-label text-xs px-3 py-1.5 rounded-full border"
            style={{
              borderColor: "rgba(251, 146, 60, 0.3)",
              color: "rgba(251, 146, 60, 0.9)",
              background: "rgba(251, 146, 60, 0.08)",
            }}
          >
            ◆ Sister Company
          </div>
          <div
            className="h-px flex-1 max-w-xs"
            style={{
              background:
                "linear-gradient(90deg, rgba(251, 146, 60, 0.3), transparent)",
            }}
          />
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            border: "1px solid rgba(251, 146, 60, 0.15)",
            background:
              "linear-gradient(135deg, rgba(251, 146, 60, 0.06) 0%, rgba(167, 139, 250, 0.06) 100%)",
          }}
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(251, 146, 60, 0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-0">
            {/* Left: Content */}
            <div className="p-10 lg:p-14 flex flex-col justify-center gap-8">
              {/* Logo mark */}
              <div className="flex items-center gap-4">
                {/* Sunset circle logo recreation */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(160deg, #FB923C 0%, #EF4444 40%, #9333EA 100%)",
                    boxShadow: "0 0 30px rgba(251, 146, 60, 0.35)",
                  }}
                >
                  {/* Horizontal lines motif inspired by their logo */}
                  <div className="flex flex-col gap-0.5 w-7">
                    {[7, 6, 5, 4, 3].map((w, i) => (
                      <div
                        key={i}
                        className="rounded-full"
                        style={{
                          height: "2px",
                          width: `${w * 4}px`,
                          background: "rgba(255,255,255,0.85)",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <div
                    className="text-xl font-bold"
                    style={{
                      fontFamily: "Space Grotesk",
                      background:
                        "linear-gradient(90deg, #FB923C, #EF4444, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ExperiAI Labs
                  </div>
                  <div
                    className="text-xs text-white/40 mt-0.5"
                    style={{ fontFamily: "DM Sans" }}
                  >
                    Dubai, United Arab Emirates
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <div>
                <h3
                  className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4"
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  Designing Intelligent{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, #FB923C, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Experiences
                  </span>{" "}
                  at Scale
                </h3>
                <p
                  className="text-white/55 leading-relaxed"
                  style={{ fontFamily: "DM Sans", fontSize: "0.95rem" }}
                >
                  KrishuAI's Dubai-based sister company, ExperiAI Labs, specialises
                  in AI-powered experience design and hyper-personalisation for
                  global brands — bridging the intelligence infrastructure we build
                  in India with world-class customer experience delivery across the
                  Middle East, Europe, and beyond.
                </p>
              </div>

              {/* Partnership pillars */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "AI Experience Design", icon: "✦" },
                  { label: "Hyper-Personalisation", icon: "◈" },
                  { label: "Global Brand Intelligence", icon: "⬡" },
                  { label: "Middle East & MENA Markets", icon: "◎" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(251, 146, 60, 0.12)",
                    }}
                  >
                    <span
                      className="text-sm flex-shrink-0"
                      style={{ color: "#FB923C" }}
                    >
                      {item.icon}
                    </span>
                    <span
                      className="text-xs text-white/65"
                      style={{ fontFamily: "DM Sans" }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="https://experiailabs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    background:
                      "linear-gradient(135deg, #FB923C, #9333EA)",
                    color: "white",
                    fontFamily: "Space Grotesk",
                    boxShadow: "0 0 30px rgba(251, 146, 60, 0.25)",
                  }}
                >
                  Visit ExperiAI Labs
                  <span>↗</span>
                </a>
                <div
                  className="text-xs text-white/35 flex items-center gap-1.5"
                  style={{ fontFamily: "DM Sans" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full inline-block"
                    style={{ background: "#22C55E" }}
                  />
                  Active Partnership
                </div>
              </div>
            </div>

            {/* Right: Visual panel */}
            <div
              className="relative hidden lg:flex items-center justify-center p-14"
              style={{
                borderLeft: "1px solid rgba(251, 146, 60, 0.1)",
              }}
            >
              {/* Decorative concentric arcs */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                {[240, 200, 160, 120].map((size, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: size,
                      height: size,
                      border: `1px solid rgba(251, 146, 60, ${0.08 + i * 0.04})`,
                    }}
                  />
                ))}

                {/* Center emblem */}
                <div
                  className="relative z-10 w-24 h-24 rounded-2xl flex flex-col items-center justify-center gap-1"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(251,146,60,0.15), rgba(147,51,234,0.15))",
                    border: "1px solid rgba(251, 146, 60, 0.3)",
                    boxShadow:
                      "0 0 40px rgba(251, 146, 60, 0.15), inset 0 0 20px rgba(251, 146, 60, 0.05)",
                  }}
                >
                  <div
                    className="text-xs font-bold"
                    style={{
                      fontFamily: "Space Grotesk",
                      background: "linear-gradient(90deg, #FB923C, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ExperiAI
                  </div>
                  <div className="text-white/30 text-xs" style={{ fontFamily: "DM Sans" }}>
                    Labs
                  </div>
                  <div
                    className="text-xs mt-1 px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(251,146,60,0.15)",
                      color: "#FB923C",
                      fontFamily: "DM Sans",
                    }}
                  >
                    🇦🇪 Dubai
                  </div>
                </div>

                {/* Orbiting dots */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: i % 2 === 0 ? "#FB923C" : "#A855F7",
                      opacity: 0.6,
                      top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 100}px - 4px)`,
                      left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 100}px - 4px)`,
                    }}
                  />
                ))}
              </div>

              {/* Connection label */}
              <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
              >
                <div
                  className="mono-label text-xs text-white/30 mb-1"
                >
                  KrishuAI × ExperiAI Labs
                </div>
                <div
                  className="text-xs text-white/20"
                  style={{ fontFamily: "DM Sans" }}
                >
                  India Intelligence · Global Experience
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
