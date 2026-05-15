/*
 * KrishuAI — Home Page
 * Design: "Digital Sovereignty" — Neon-Brutalism meets Cinematic Glassmorphism
 * Sections: Navigation, Hero, Marquee, Pillars, Philosophy, Approach, Impact, Contact, Footer
 */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StackDifferentiator from "@/components/StackDifferentiator";
import MarqueeStrip from "@/components/MarqueeStrip";
import PillarsSection from "@/components/PillarsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ApproachSection from "@/components/ApproachSection";
import SisterCompanySection from "@/components/SisterCompanySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.08 0.015 240)" }}
    >
      <Navigation />
      <HeroSection />
      <StackDifferentiator />
      <MarqueeStrip />
      <PillarsSection />
      <PhilosophySection />
      <ApproachSection />
      <SisterCompanySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
