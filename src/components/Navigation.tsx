/*
 * KrishuAI — Navigation Component
 * Design: Floating glassmorphic pill nav with blur background
 * Behavior: Shrinks on scroll, highlights active section
 * New: Solutions dropdown with links to all 4 pillar deep-dive pages
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
  { label: "Home", href: "#hero" },
  { label: "Pillars", href: "#pillars" },
  { label: "Approach", href: "#approach" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
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
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0EA5E9, #D4A847)" }}>
              <span className="text-white font-bold text-xs" style={{ fontFamily: 'Space Grotesk' }}>K</span>
            </div>
            <span className="text-white font-semibold text-sm hidden sm:block" style={{ fontFamily: 'Space Grotesk' }}>
              Krishu<span className="text-gradient-blue">AI</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {homeNavItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="px-3 py-1.5 text-sm text-white/70 hover:text-white rounded-full hover:bg-white/8 transition-all duration-200"
              style={{ fontFamily: 'DM Sans' }}
            >
              {item.label}
            </button>
          ))}

          {/* Solutions Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="px-3 py-1.5 text-sm text-white/70 hover:text-white rounded-full hover:bg-white/8 transition-all duration-200 flex items-center gap-1"
              style={{ fontFamily: 'DM Sans' }}
            >
              Solutions
              <motion.span
                animate={{ rotate: solutionsOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-xs"
              >
                ▾
              </motion.span>
            </button>

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
                  {solutions.map((sol) => (
                    <Link key={sol.href} href={sol.href}>
                      <div
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-150 hover:bg-white/5 group"
                        onClick={() => setSolutionsOpen(false)}
                      >
                        <span className="text-base">{sol.icon}</span>
                        <span
                          className="text-sm text-white/70 group-hover:text-white transition-colors"
                          style={{ fontFamily: 'DM Sans' }}
                        >
                          {sol.label}
                        </span>
                        <span
                          className="ml-auto text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: sol.accent }}
                        >
                          →
                        </span>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* CTA */}
        <button
          onClick={() => scrollTo("#contact")}
          className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
            fontFamily: 'Space Grotesk',
            color: 'white',
          }}
        >
          Get Started
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-4 right-4 glass-card rounded-2xl p-4 flex flex-col gap-1"
            style={{ background: "rgba(5, 10, 20, 0.97)" }}
          >
            {homeNavItems.map((item) => (
              <button
                key={item.label}
                onClick={() => { scrollTo(item.href); setMobileOpen(false); }}
                className="text-left px-4 py-2.5 text-white/80 hover:text-white hover:bg-white/8 rounded-xl transition-all duration-200 text-sm"
                style={{ fontFamily: 'DM Sans' }}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Solutions */}
            <div className="mt-1 border-t border-white/8 pt-2">
              <div className="px-4 py-1.5 mono-label text-xs text-white/30">Solutions</div>
              {solutions.map((sol) => (
                <Link key={sol.href} href={sol.href}>
                  <div
                    className="flex items-center gap-3 px-4 py-2.5 text-white/80 hover:text-white hover:bg-white/8 rounded-xl transition-all duration-200 text-sm cursor-pointer"
                    style={{ fontFamily: 'DM Sans' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{sol.icon}</span>
                    <span>{sol.label}</span>
                  </div>
                </Link>
              ))}
            </div>

            <button
              onClick={() => { scrollTo("#contact"); setMobileOpen(false); }}
              className="mt-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white"
              style={{
                background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
                fontFamily: 'Space Grotesk',
              }}
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
