/**
 * shailendraaKumarPage — /team/shailendraa-kumar
 *
 * Design philosophy: Dark Sovereign Tech (matching site theme)
 * - Deep navy #050A14 base with teal accent #00D4AA
 * - Asymmetric two-column layout for authority and depth
 * - Cinematic hero with world-map neural network background
 * - Credential cards with hover glow, staggered entrance animations
 * - Premium typography: display weight for name, readable body for bio
 */

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink, BookOpen, Mic, GraduationCap, Globe, Award, Users, TrendingUp, Linkedin, Landmark, Bot, BarChart3, Sparkles, Building2, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/author_shailendraa_hero_bg-W8Y4KdrUdyD6veuSeQB4fy.webp";
const HEADSHOT = "/images/shailendraa_kumar_headshot.png";

const stats = [
  { value: "AU$6B+", label: "Client Value Delivered", icon: TrendingUp },
  { value: "30+", label: "Years of Leadership", icon: Award },
  { value: "300+", label: "Global Keynote Events", icon: Mic },
  { value: "Top 20", label: "Global AI Professionals", icon: Globe },
];

const expertiseAreas = [
  {
    title: "Sovereign AI Architecture",
    description: "Designing India-native AI stacks that operate independently of foreign cloud dependencies — from silicon to citizen-facing applications across 22 Indian languages.",
    Icon: Landmark,
  },
  {
    title: "Multimodal Agentic Systems",
    description: "Orchestrating multi-agent pipelines that perceive, reason, and act across text, voice, image, and sensor modalities for enterprise and government deployments.",
    Icon: Bot,
  },
  {
    title: "AI for Government & Governance",
    description: "Policy simulation engines, digital twin states, and AI-powered public service delivery — turning governance data into proactive citizen outcomes at scale.",
    Icon: Building2,
  },
  {
    title: "Enterprise AI Strategy",
    description: "End-to-end AI transformation from boardroom strategy to production implementation, with a proven track record of AU$6 billion in measurable business value.",
    Icon: BarChart3,
  },
  {
    title: "EdTech AI & Adaptive Learning",
    description: "Building sovereign learning agents for India's 500 million students — multilingual, curriculum-aligned, and accessible across the digital divide.",
    Icon: GraduationCap,
  },
  {
    title: "Generative AI & LLMs",
    description: "Deploying and fine-tuning large language models for multilingual Indian contexts, including Sarvam-2B, Krutrim, and custom domain-specific models.",
    Icon: Sparkles,
  },
];

const publications = [
  {
    type: "Book",
    title: "Making Money Out of Data",
    description: "Amazon Bestselling book that reveals the playbook responsible for AU$6 billion in business results — proven frameworks for non-technical leaders to monetise data and AI.",
    tag: "Amazon Bestseller",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    icon: BookOpen,
  },
  {
    type: "Whitepaper",
    title: "Bharat Agentic Stack: A Sovereign AI Blueprint",
    description: "The definitive technical architecture for India's five-layer sovereign AI infrastructure — from GPU clusters and Indian-language LLMs to citizen-facing agentic interfaces.",
    tag: "KrishuAI Research",
    tagColor: "text-teal-400 bg-teal-400/10 border-teal-400/30",
    icon: BookOpen,
    href: "/insights/bharat-agentic-stack-technical-architecture",
  },
  {
    type: "Article",
    title: "Why India Needs a Sovereign AI Stack",
    description: "The foundational case for India's AI independence — why data sovereignty, multilingual models, and indigenous infrastructure are non-negotiable for national security and economic growth.",
    tag: "KrishuAI Insights",
    tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    icon: BookOpen,
    href: "/insights/why-india-needs-a-sovereign-ai-stack",
  },
  {
    type: "Article",
    title: "Digital Twin States: How AI Is Reinventing Indian Governance",
    description: "How India's state governments are deploying AI-powered digital replicas of physical infrastructure to predict failures, optimise resource allocation, and deliver proactive governance.",
    tag: "KrishuAI Insights",
    tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    icon: BookOpen,
    href: "/insights/digital-twin-states-india-governance",
  },
];

const testimonials = [
  {
    quote: "shailendraa's AI strategy session completely transformed how our board thinks about data monetisation. He translated complex AI concepts into clear commercial outcomes — and the AU$6 billion figure is not marketing; we saw it firsthand.",
    name: "Chief Digital Officer",
    company: "ASX 50 Retail Group",
    industry: "Retail",
  },
  {
    quote: "One of the most compelling keynotes I have attended in 20 years of technology leadership. shailendraa doesn't just talk about AI — he shows you exactly where the value is and how to capture it. Our executive team left with a concrete roadmap.",
    name: "Group CTO",
    company: "Global Telecommunications",
    industry: "Telecom",
  },
  {
    quote: "We engaged shailendraa to advise on our sovereign AI strategy for public sector deployment. His depth of knowledge on Indian-language models and agentic governance systems is unmatched. A true architect of the future.",
    name: "Secretary, Digital Infrastructure",
    company: "State Government Ministry",
    industry: "Government",
  },
  {
    quote: "shailendraa's workshop on Generative AI for our C-suite was the highest-rated session in our annual leadership summit — 97% satisfaction. He has a rare gift for making the technically complex feel immediately actionable.",
    name: "Chief People & Culture Officer",
    company: "Fortune 500 Energy Company",
    industry: "Energy",
  },
  {
    quote: "The Bharat Agentic Stack blueprint shailendraa presented to our investment committee was the most rigorous AI architecture document we have reviewed. It gave us the confidence to commit to a sovereign AI infrastructure programme.",
    name: "Managing Partner",
    company: "Asia-Pacific Technology Fund",
    industry: "Finance",
  },
];

const clientLogos = [
  { name: "Woolworths", industry: "Retail" },
  { name: "Coles", industry: "Retail" },
  { name: "Telstra", industry: "Telecom" },
  { name: "ExxonMobil", industry: "Energy" },
  { name: "QBE Insurance", industry: "Finance" },
  { name: "AMP", industry: "Finance" },
  { name: "NBN Co", industry: "Infrastructure" },
  { name: "Cricket Australia", industry: "Sports" },
];

const speakingTopics = [
  "AI Strategy & Implementation for Enterprise",
  "Generative AI for Business Professionals",
  "Data Monetisation & ROI from AI",
  "AI for Government & Public Sector",
  "Digital Transformation through Agentic AI",
  "Sovereign AI & National Technology Independence",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setActive(next);
  }, []);

  const prev = useCallback(() => go((active - 1 + testimonials.length) % testimonials.length), [active, go]);
  const next = useCallback(() => go((active + 1) % testimonials.length), [active, go]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const variants = {
    enter: { opacity: 0, y: 12 },
    center: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.4 } },
  };

  const t = testimonials[active];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Large quote mark */}
      <Quote className="absolute -top-2 left-0 w-12 h-12 text-teal-400/15 fill-teal-400/10" />

      <div className="relative min-h-[220px] flex items-center">
        {/* Left side arrow */}
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute -left-5 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-teal-400/60 hover:bg-teal-400/10 flex items-center justify-center text-white/40 hover:text-teal-400 transition-all duration-200 hover:scale-110 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            <blockquote className="text-xl md:text-2xl font-medium text-white/85 leading-relaxed text-center max-w-3xl mx-auto px-12 md:px-16 mb-10"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-px bg-teal-400/40 mb-3" />
              <span className="text-sm font-semibold text-white">{t.name}</span>
              <span className="text-xs text-white/40">{t.company}</span>
              <span className="mt-1 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full border border-teal-400/25 text-teal-400/70">
                {t.industry}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right side arrow */}
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="absolute -right-5 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-teal-400/60 hover:bg-teal-400/10 flex items-center justify-center text-white/40 hover:text-teal-400 transition-all duration-200 hover:scale-110 group"
        >
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-xs mx-auto h-px bg-white/10 rounded-full overflow-hidden mt-10 mb-0">
        <motion.div
          key={`${active}-${paused}`}
          className="h-full bg-teal-400/60 rounded-full origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: paused ? undefined : 1 }}
          transition={paused ? {} : { duration: 6, ease: "linear" }}
        />
      </div>

      {/* Dot navigation */}
      <div className="flex items-center justify-center gap-4 mt-5">
        <div className="flex items-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 h-2 bg-teal-400"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
          <AnimatePresence>
            {paused && (
              <motion.span
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.2 }}
                className="text-[10px] font-semibold tracking-widest uppercase text-teal-400/60 ml-1"
              >
                Paused
              </motion.span>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

export default function shailendraaKumarPage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-white">
      <SEO
        title="shailendraa Kumar — Chief AI Officer & Global AI Strategist | KrishuAI"
        description="shailendraa Kumar is a Top 20 Global AI Professional, Amazon Bestselling Author, and Chief AI Officer who has delivered AU$6 billion in client value across 300+ global keynotes. Founder of KrishuAI Techventures."
        keywords="shailendraa Kumar, AI strategist, Chief AI Officer, KrishuAI, sovereign AI India, AI keynote speaker, Making Money Out of Data, Bharat Agentic Stack"
        ogImage={HERO_BG}
        ogImageAlt="shailendraa Kumar — Chief AI Officer and Global AI Strategist"
        ogImageWidth={1200}
        ogImageHeight={630}
        ogType="website"
        canonical="/team/shailendraa-kumar"
      />
      <Navigation />

      {/* -- Hero Section -- */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-[#050A14]/60 to-[#050A14]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A14]/80 via-transparent to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 w-full">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-10 md:gap-16">
            {/* Headshot portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex-shrink-0 hidden md:block"
            >
              <div className="relative w-52 h-52 rounded-full overflow-hidden ring-4 ring-teal-400/30 shadow-2xl shadow-teal-500/20">
                <img
                  src={HEADSHOT}
                  alt="shailendraa Kumar — Chief AI Officer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
              </div>
            </motion.div>
            <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-400 text-xs font-medium tracking-widest uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Chief AI Officer · KrishuAI Techventures
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-black tracking-tight text-white mb-4 leading-none"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              shailendraaa
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                Kumar
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55 }}
              className="text-lg text-white/70 max-w-xl leading-relaxed mb-8"
            >
              Top 20 Global AI Professional · Amazon Bestselling Author · Keynote Speaker at 300+ global events · Architect of India's Sovereign AI future
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="https://www.linkedin.com/in/shaily/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A66C2] hover:bg-[#0A66C2]/80 text-white text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#0A66C2]/30"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
              <a
                href="https://www.shailykumar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-teal-400/50 text-white/80 hover:text-white text-sm font-semibold transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Website
              </a>
            </motion.div>
            </div>{/* end max-w-2xl */}
          </div>{/* end flex row */}
        </div>{/* end max-w-6xl */}
      </section>
      {/* -- Stats Bar -- */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -- About / Bio -- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Bio text */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase mb-3 block">About</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Leading the Global AI Revolution
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="space-y-4 text-white/70 leading-relaxed"
            >
              <p>
                shailendraa Kumar is one of the world's Top 20 Global AI Professionals — a Chief AI Officer, strategist, and practitioner with over 30 years of leadership in Artificial Intelligence, Machine Learning, Analytics, and Cognitive Science. His work has been instrumental in generating more than <strong className="text-white">AU$6 billion in incremental value</strong> for clients across retail, finance, energy, telecommunications, and government sectors.
              </p>
              <p>
                As the Founder and Chief AI Architect of <strong className="text-white">KrishuAI Techventures</strong>, shailendraa leads India's most ambitious sovereign AI initiative — designing the Bharat Agentic Stack, a five-layer national AI infrastructure blueprint that positions India as a self-reliant AI superpower. His work spans multilingual language models for 22 Indian languages, AI-powered governance systems, adaptive EdTech agents for 500 million students, and hyper-personalised travel intelligence.
              </p>
              <p>
                A sought-after keynote speaker who has addressed more than <strong className="text-white">300 global events</strong>, shailendraa has delivered transformative AI strategies to Fortune 500 boards, government ministries, and technology leaders across Australia, Saudi Arabia, India, and the United States. He has advised heads of state, senior ministers, and C-suite executives on translating AI strategy into implemented, measurable solutions.
              </p>
              <p>
                shailendraa is also the Amazon Bestselling author of <em className="text-white">"Making Money Out of Data"</em> — a practical playbook that has helped thousands of business leaders unlock the commercial potential of AI and analytics without requiring a technical background.
              </p>
            </motion.div>
          </div>

          {/* Right: Headshot + Credential cards */}
          <div className="space-y-6">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center md:justify-start"
            >
              <div className="relative w-44 h-44 rounded-2xl overflow-hidden ring-2 ring-teal-400/30 shadow-xl shadow-teal-500/10">
                <img
                  src={HEADSHOT}
                  alt="shailendraa Kumar professional portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            {[
              {
                icon: Award,
                title: "Top 20 Global AI Professionals",
                sub: "Globally recognised ranking across AI strategy, implementation, and thought leadership",
                color: "text-amber-400",
                bg: "bg-amber-400/10 border-amber-400/20",
              },
              {
                icon: BookOpen,
                title: "Amazon Bestselling Author",
                sub: '"Making Money Out of Data" — the definitive guide to monetising AI for business leaders',
                color: "text-teal-400",
                bg: "bg-teal-400/10 border-teal-400/20",
              },
              {
                icon: Mic,
                title: "300+ Global Keynote Events",
                sub: "Praised by Fortune 500 executives, government ministers, and technology leaders worldwide",
                color: "text-blue-400",
                bg: "bg-blue-400/10 border-blue-400/20",
              },
              {
                icon: GraduationCap,
                title: "AI Skills Academy Founder",
                sub: "Practical AI training programs for business professionals, entrepreneurs, and career changers",
                color: "text-purple-400",
                bg: "bg-purple-400/10 border-purple-400/20",
              },
              {
                icon: Users,
                title: "Enterprise & Government Advisor",
                sub: "AI transformation advisory for Woolworths, Telstra, ExxonMobil, QBE, AMP, NBN Co, and more",
                color: "text-rose-400",
                bg: "bg-rose-400/10 border-rose-400/20",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className={`flex items-start gap-4 p-4 rounded-xl border ${card.bg} transition-all`}
              >
                <div className={`p-2 rounded-lg bg-white/5 ${card.color} flex-shrink-0`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-sm font-semibold ${card.color} mb-0.5`}>{card.title}</div>
                  <div className="text-xs text-white/50 leading-relaxed">{card.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Expertise Areas -- */}
      <section className="bg-white/[0.02] border-y border-white/5 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="mb-12"
          >
            <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase mb-3 block">Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Areas of Deep Specialisation</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, i) => (
              <motion.div
                key={area.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-teal-400/30 hover:bg-teal-400/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center mb-4 group-hover:bg-teal-400/20 transition-colors">
                  <area.Icon className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Publications & Articles -- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="mb-12"
        >
          <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase mb-3 block">Publications</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Books, Research & Insights</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, i) => {
            const Wrapper = pub.href ? Link : "div";
            const wrapperProps = pub.href ? { href: pub.href } : {};
            return (
              <motion.div
                key={pub.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Wrapper {...(wrapperProps as any)}>
                  <div className={`h-full p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-teal-400/30 transition-all cursor-pointer group ${pub.href ? "hover:bg-teal-400/5" : ""}`}>
                    <div className="flex items-start justify-between mb-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${pub.tagColor}`}>
                        {pub.tag}
                      </span>
                      <span className="text-xs text-white/30 font-medium uppercase tracking-wider">{pub.type}</span>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">{pub.description}</p>
                    {pub.href && (
                      <div className="mt-4 flex items-center gap-1 text-xs text-teal-400 font-medium">
                        Read Article
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* -- Speaking Topics -- */}
      <section className="bg-white/[0.02] border-y border-white/5 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase mb-3 block">Speaking</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Keynotes That Drive Transformation
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                shailendraa's presentations are custom-tailored to spark momentum, inspire leadership teams, and deliver measurable change. With 300+ global events and praise from Fortune 500 executives, he brings practitioner-grade insight to every stage.
              </p>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all cursor-pointer">
                  <Mic className="w-4 h-4" />
                  Book a Keynote
                </span>
              </Link>
            </motion.div>

            <div className="space-y-3">
              {speakingTopics.map((topic, i) => (
                <motion.div
                  key={topic}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/8 bg-white/[0.03] hover:border-teal-400/30 hover:bg-teal-400/5 transition-all group"
                >
                  <span className="w-2 h-2 rounded-full bg-teal-400 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors">{topic}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- Client Impact -- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase mb-3 block">Client Impact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Trusted by Global Enterprises
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm">
            shailendraa's AI expertise has transformed operations, strategy, and customer experience across some of the world's most recognisable organisations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clientLogos.map((client, i) => (
            <motion.div
              key={client.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-5 rounded-xl border border-white/8 bg-white/[0.03] hover:border-teal-400/30 hover:bg-teal-400/5 transition-all text-center group"
            >
              <div className="text-base font-bold text-white group-hover:text-teal-300 transition-colors mb-1">
                {client.name}
              </div>
              <div className="text-xs text-white/30 font-medium">{client.industry}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -- Testimonials -- */}
      <section className="bg-white/[0.02] border-y border-white/5 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase mb-3 block">What Leaders Say</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Trusted by Executives Worldwide</h2>
          </motion.div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* -- CTA -- */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl border border-teal-400/20 bg-gradient-to-br from-teal-900/30 via-blue-900/20 to-[#050A14] p-12 text-center"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-teal-400/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Work with shailendraa
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
              Whether you need a transformative keynote, boardroom AI strategy, or a sovereign AI architecture for your organisation — shailendraa brings 30 years of practitioner expertise to every engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/shaily/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-teal-500/25"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
              <a
                href="https://www.shailykumar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/20 hover:border-teal-400/50 text-white/80 hover:text-white text-sm font-semibold transition-all hover:scale-105"
              >
                <Globe className="w-4 h-4" />
                Visit shailykumar.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
