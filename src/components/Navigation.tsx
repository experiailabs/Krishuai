/*
 * KrishuAI — Navigation Component
 * Design: Floating glassmorphic pill nav with blur background
 *
 * Logo Animations:
 *   - Entrance: slides in from left, fades in on mount
 *   - Hover: 1.04× scale + teal drop-shadow glow + diagonal shimmer sweep
 *   - Scroll-shrink: logo height transitions 36px → 28px when scrolled
 *
 * Nav Interactions:
 *   - Links: animated sliding underline on hover (left → right)
 *   - Solutions dropdown: staggered item entrance with slide-in
 *   - CTA button: shimmer sweep + scale on hover
 *   - Mobile hamburger: smooth morph to X
 */

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

const solutions = [
  { label: "AI for Governance", href: "/solutions/governance", accent: "#D4A847", icon: "🏛️" },
  { label: "AI EdTech", href: "/solutions/edtech", accent: "#22D3EE", icon: "🧠" },
  { label: "AI Travel & Hospitality", href: "/solutions/travel", accent: "#FBBF24", icon: "✈️" },
  { label: "AI Entertainment", href: "/solutions/entertainment", accent: "#A78BFA", icon: "🎬" },
];

const homeNavItems = [
  { label: "Home", href: "#hero", isScroll: true },
  { label: "Pillars", href: "#pillars", isScroll: true },
  { label: "Approach", href: "#approach", isScroll: true },
  { label: "About", href: "/about", isScroll: false },
  { label: "Contact", href: "#contact", isScroll: true },
];

// ── Animated nav link with sliding underline ─────────────────────────────────
function NavLink({
  children,
  onClick,
  asSpan = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  asSpan?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const commonProps = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    className: "relative px-3 py-1.5 text-sm transition-colors duration-200 cursor-pointer select-none",
    style: {
      fontFamily: "DM Sans",
      color: hovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.65)",
      display: "inline-flex",
      alignItems: "center",
    } as React.CSSProperties,
  };
  const underline = (
    <motion.span
      className="absolute bottom-0.5 left-3 right-3 h-px rounded-full"
      style={{ background: "linear-gradient(90deg, #0EA5E9, #38BDF8)" }}
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: hovered ? 1 : 0, originX: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    />
  );
  if (asSpan) {
    return (
      <span {...commonProps}>
        {children}
        {underline}
      </span>
    );
  }
  return (
    <button onClick={onClick} {...commonProps}>
      {children}
      {/* Sliding underline */}
      {underline}
    </button>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const scrollTo = (href: string) => {
    if (!isHome) {
      window.location.href = "/" + href;
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      <div
        className={`glass-card rounded-full px-6 py-3 flex items-center gap-6 transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-black/40" : ""
        }`}
        style={{
          background: scrolled
            ? "rgba(5, 10, 20, 0.88)"
            : "rgba(5, 10, 20, 0.6)",
        }}
      >
        {/* ── Logo ─────────────────────────────────────────────────────────── */}
        <Link href="/">
          <motion.div
            className="flex items-center cursor-pointer relative overflow-hidden"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              filter: logoHovered
                ? "drop-shadow(0 0 8px rgba(14, 165, 233, 0.55)) drop-shadow(0 0 20px rgba(14, 165, 233, 0.25))"
                : "drop-shadow(0 0 0px transparent)",
              transition: "filter 0.35s ease",
            }}
          >
            <motion.img
              src="/images/logo_nav_white.png"
              alt="Krishu Techventures"
              animate={{ height: scrolled ? 28 : 36 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ width: "auto", display: "block" }}
            />

            {/* Shimmer sweep on hover */}
            <motion.span
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.35) 50%, transparent 65%)",
                backgroundSize: "200% 100%",
              }}
              initial={{ backgroundPosition: "-100% 0" }}
              animate={
                logoHovered
                  ? { backgroundPosition: "200% 0" }
                  : { backgroundPosition: "-100% 0" }
              }
              transition={{ duration: 0.55, ease: "easeInOut" }}
            />
          </motion.div>
        </Link>

        {/* ── Desktop Nav ───────────────────────────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-1">
          {homeNavItems.map((item) =>
            item.isScroll ? (
              <NavLink key={item.label} onClick={() => scrollTo(item.href)}>
                {item.label}
              </NavLink>
            ) : (
              <Link key={item.label} href={item.href}>
                <NavLink asSpan>{item.label}</NavLink>
              </Link>
            )
          )}

          {/* Solutions Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <NavLink onClick={() => setSolutionsOpen(!solutionsOpen)}>
              <span className="flex items-center gap-1">
                Solutions
                <motion.span
                  animate={{ rotate: solutionsOpen ? 180 : 0 }}
                  transition={{ duration: 0.22 }}
                  className="text-xs inline-block"
                >
                  ▾
                </motion.span>
              </span>
            </NavLink>

            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full mt-3 left-1/2 -translate-x-1/2 rounded-2xl p-2 min-w-[220px]"
                  style={{
                    background: "rgba(5, 10, 20, 0.97)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                  }}
                >
                  {solutions.map((sol, i) => (
                    <motion.div
                      key={sol.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.055, duration: 0.18 }}
                    >
                      <Link href={sol.href}>
                        <div
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-150 hover:bg-white/5 group"
                          onClick={() => setSolutionsOpen(false)}
                        >
                          <motion.span
                            className="text-base"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            {sol.icon}
                          </motion.span>
                          <span
                            className="text-sm text-white/70 group-hover:text-white transition-colors"
                            style={{ fontFamily: "DM Sans" }}
                          >
                            {sol.label}
                          </span>
                          <motion.span
                            className="ml-auto text-xs"
                            style={{ color: sol.accent }}
                            initial={{ opacity: 0, x: -4 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            animate={{}}
                          >
                            →
                          </motion.span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* ── CTA Button with shimmer ───────────────────────────────────────── */}
        <motion.button
          onClick={() => scrollTo("#contact")}
          className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
            fontFamily: "Space Grotesk",
            color: "white",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {/* Shimmer layer */}
          <motion.span
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.28) 50%, transparent 70%)",
              backgroundSize: "200% 100%",
            }}
            initial={{ backgroundPosition: "-100% 0" }}
            whileHover={{ backgroundPosition: "200% 0" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <span className="relative z-10">Get Started</span>
        </motion.button>

        {/* ── Mobile hamburger ─────────────────────────────────────────────── */}
        <button
          className="md:hidden text-white/70 hover:text-white p-1 transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5 relative h-4">
            <motion.span
              className="block h-0.5 bg-current rounded-full absolute top-0 w-full"
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block h-0.5 bg-current rounded-full absolute top-1/2 -translate-y-1/2 w-full"
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 bg-current rounded-full absolute bottom-0 w-full"
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </div>
        </button>
      </div>

      {/* ── Mobile menu ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="absolute top-full mt-2 left-4 right-4 glass-card rounded-2xl p-4 flex flex-col gap-1"
            style={{ background: "rgba(5, 10, 20, 0.97)" }}
          >
            {homeNavItems.map((item, i) =>
              item.isScroll ? (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => { scrollTo(item.href); setMobileOpen(false); }}
                  className="text-left px-4 py-2.5 text-white/80 hover:text-white hover:bg-white/8 rounded-xl transition-all duration-200 text-sm"
                  style={{ fontFamily: "DM Sans" }}
                >
                  {item.label}
                </motion.button>
              ) : (
                <Link key={item.label} href={item.href}>
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-left px-4 py-2.5 text-white/80 hover:text-white hover:bg-white/8 rounded-xl transition-all duration-200 text-sm cursor-pointer"
                    style={{ fontFamily: "DM Sans" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              )
            )}

            {/* Mobile Solutions */}
            <div className="mt-1 border-t border-white/8 pt-2">
              <div className="px-4 py-1.5 mono-label text-xs text-white/30">Solutions</div>
              {solutions.map((sol, i) => (
                <Link key={sol.href} href={sol.href}>
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (homeNavItems.length + i) * 0.05 }}
                    className="flex items-center gap-3 px-4 py-2.5 text-white/80 hover:text-white hover:bg-white/8 rounded-xl transition-all duration-200 text-sm cursor-pointer"
                    style={{ fontFamily: "DM Sans" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{sol.icon}</span>
                    <span>{sol.label}</span>
                  </motion.div>
                </Link>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => { scrollTo("#contact"); setMobileOpen(false); }}
              className="mt-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
                fontFamily: "Space Grotesk",
              }}
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
