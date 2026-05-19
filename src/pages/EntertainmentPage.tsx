/*
 * KrishuAI — AI Entertainment Deep-Dive Page
 * Route: /solutions/entertainment
 * Design: Violet accent, generative media aesthetic, Bollywood/streaming focus
 */

import { Link } from "wouter";
import PillarLayout, { type PillarMeta } from "@/components/PillarLayout";
import CapabilitiesSection, { type Capability } from "@/components/CapabilitiesSection";
import CaseStudySection, { type CaseStudy } from "@/components/CaseStudySection";
import BharatAgenticStack from "@/components/BharatAgenticStack";
import PillarCTA from "@/components/PillarCTA";

const RELATED_INSIGHTS = [
  {
    slug: "bollywood-meets-ai-generative-media-revolution",
    title: "Bollywood Meets AI: The Generative Media Revolution",
    subtitle: "How AI is Transforming India's ₹19,000 Crore Film Industry",
    category: "Entertainment AI",
    accent: "#A78BFA",
    readTime: "9 min read",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/article_entertainment_hero-Pvp92ihwayPZkLzP7BR6P6.webp",
  },
  {
    slug: "bharat-agentic-stack-technical-architecture",
    title: "Bharat Agentic Stack: The Technical Architecture of India's Sovereign AI Future",
    subtitle: "From Silicon to Citizen — A Five-Layer Blueprint",
    category: "Technology Strategy",
    accent: "#3B82F6",
    readTime: "11 min read",
    heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/article_agentic_stack_hero-LaHSrWeWG38DSWfASECMdG.webp",
  },
];

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/pillar_entertainment-GiFA2EaBejPQVCMdS8Qg4X.webp";
const CASE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/case_entertainment-4bEH8c7k2N58nB7jC6UD8C.webp";

const meta: PillarMeta = {
  id: "entertainment",
  number: "04",
  title: "AI Entertainment",
  subtitle: "Generative Media & Storytelling",
  tagline: "The Infrastructure for the Next Era of Human Storytelling",
  description:
    "AI-driven creative pipelines that generate scripts, characters, visual assets, and immersive narratives. From Bollywood to global streaming — KrishuAI is building the infrastructure that will define how stories are created, distributed, and experienced in the AI era.",
  heroImage: HERO_IMG,
  heroImageAlt: "KrishuAI AI Entertainment — generative media and storytelling infrastructure for Bollywood and India's film industry",
  accentColor: "#A78BFA",
  glowRgb: "167, 139, 250",
  label: "Generative Media & Storytelling",
  keywords: "AI entertainment India, Bollywood AI, generative media India, AI film production India, AI dubbing India, KrishuAI entertainment, Indian cinema AI",
  canonicalPath: "/solutions/entertainment",
};

const capabilities: Capability[] = [
  {
    icon: "🎬",
    title: "Generative Storytelling Engine",
    description:
      "AI that generates original scripts, story arcs, and character development — trained on Indian narrative traditions, regional storytelling formats, and global genre conventions.",
    features: [
      "Multi-genre script generation",
      "Indian narrative tradition training",
      "Character arc development AI",
      "Dialogue localization engine",
    ],
    highlight: true,
  },
  {
    icon: "◎",
    title: "AI Film Production Pipeline",
    description:
      "End-to-end AI assistance for film production — from storyboard generation to visual effects, color grading, and post-production automation.",
    features: [
      "Automated storyboard generation",
      "AI visual effects pipeline",
      "Color grading automation",
      "Post-production workflow AI",
    ],
  },
  {
    icon: "⬡",
    title: "Immersive Experience Design",
    description:
      "AI systems that create interactive, branching narratives for gaming, VR, and immersive entertainment — where the story adapts to each viewer's choices in real time.",
    features: [
      "Branching narrative generation",
      "Real-time story adaptation",
      "VR/AR content generation",
      "Interactive character AI",
    ],
  },
  {
    icon: "◈",
    title: "Creative Intelligence Platform",
    description:
      "AI tools for writers, directors, and producers — a creative co-pilot that enhances human creativity rather than replacing it, offering alternatives, catching inconsistencies, and suggesting improvements.",
    features: [
      "Script consistency analysis",
      "Creative alternative generation",
      "Market viability prediction",
      "Cultural sensitivity review",
    ],
    highlight: true,
  },
  {
    icon: "◉",
    title: "Content Localization AI",
    description:
      "AI that localizes content across India's 22+ languages — not just translation, but cultural adaptation, lip-sync dubbing, and regional humor calibration.",
    features: [
      "AI dubbing with lip-sync",
      "Cultural humor adaptation",
      "Regional dialect localization",
      "Subtitle generation AI",
    ],
  },
  {
    icon: "⬟",
    title: "Audience Intelligence",
    description:
      "AI that predicts audience response to content before release — analyzing story elements, cast, genre, and market timing to optimize release strategy.",
    features: [
      "Pre-release audience modeling",
      "Genre performance prediction",
      "Optimal release timing AI",
      "Streaming platform optimization",
    ],
  },
];

const caseStudies: CaseStudy[] = [
  {
    id: "ent-cs-1",
    badge: "Bollywood Production House · Mumbai",
    client: "10x Production Speed with Generative AI",
    clientType: "Major Bollywood Production House",
    image: CASE_IMG,
    challenge:
      "A leading Bollywood production house was spending 18 months in pre-production for each film — script development, storyboarding, VFX pre-visualization, and localization for 6 regional markets. The process was expensive, slow, and heavily dependent on a small pool of senior creative talent.",
    solution:
      "KrishuAI deployed a Generative Storytelling Engine and AI Film Production Pipeline — AI co-pilots for every stage of pre-production. Scripts were developed 10x faster with AI generating alternatives and catching continuity errors. Storyboards were generated from script descriptions. VFX pre-visualization was automated.",
    outcomes: [
      { metric: "10x", label: "Faster pre-production", color: "#A78BFA" },
      { metric: "−65%", label: "Pre-production cost reduction", color: "#0EA5E9" },
      { metric: "6", label: "Regional versions simultaneously", color: "#D4A847" },
      { metric: "3mo", label: "Average pre-production time", color: "#22D3EE" },
    ],
    quote:
      "KrishuAI's AI pipeline didn't replace our creative team — it gave them superpowers. Our writers now explore 10x more story directions in the same time. Our VFX team pre-visualizes entire sequences before a single frame is shot. We've gone from 18 months to 3 months in pre-production.",
    quoteAuthor: "Creative Director",
    quoteRole: "Major Bollywood Production House",
    tags: ["Generative Storytelling", "AI Film Production", "Pre-production AI", "Bollywood AI", "Creative Pipeline"],
  },
  {
    id: "ent-cs-2",
    badge: "Streaming Platform · Pan-India",
    client: "AI-Powered Content Localization at Scale",
    clientType: "Pan-India OTT Streaming Platform",
    image: CASE_IMG,
    challenge:
      "A pan-India OTT platform with 45 million subscribers was losing viewers in non-Hindi markets because content localization was too slow and expensive. Dubbing a single show into 6 regional languages took 8 weeks and cost ₹40 lakhs. Only 15% of their catalog was available in regional languages.",
    solution:
      "KrishuAI built a Content Localization AI — automated dubbing with lip-sync, cultural adaptation, and regional dialect calibration. The system processes a 45-minute episode into 6 regional languages in 72 hours. Cultural humor and references are automatically adapted, not just translated.",
    outcomes: [
      { metric: "8wk→72hr", label: "Localization time per episode", color: "#A78BFA" },
      { metric: "−82%", label: "Localization cost reduction", color: "#0EA5E9" },
      { metric: "85%", label: "Catalog now in regional languages", color: "#D4A847" },
      { metric: "2.4x", label: "Subscriber growth in Tier-2 cities", color: "#34D399" },
    ],
    quote:
      "The AI localization platform transformed our regional strategy. We went from 15% to 85% of our catalog in regional languages in six months. The quality is indistinguishable from human dubbing — our regional subscribers can't tell the difference.",
    quoteAuthor: "Head of Content Operations",
    quoteRole: "Pan-India OTT Streaming Platform",
    tags: ["Content Localization", "AI Dubbing", "Regional Languages", "OTT AI", "Streaming Intelligence"],
  },
];

export default function EntertainmentPage() {
  return (
    <PillarLayout meta={meta}>
      <CapabilitiesSection
        capabilities={capabilities}
        accentColor="#A78BFA"
        glowRgb="167, 139, 250"
        sectionTitle="Entertainment AI Capabilities"
        sectionSubtitle="Six AI modules that power the full creative lifecycle — from generative storytelling to audience intelligence and content localization."
      />
      <CaseStudySection
        caseStudies={caseStudies}
        accentColor="#A78BFA"
        glowRgb="167, 139, 250"
      />
      <BharatAgenticStack accentColor="#A78BFA" glowRgb="167, 139, 250" showHeader={true} />

      {/* Related Insights — internal linking for SEO */}
      <section className="py-16" style={{ background: "oklch(0.09 0.015 240)" }}>
        <div className="container">
          <div className="mono-label text-xs text-white/40 mb-2">◆ Related Insights</div>
          <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "Space Grotesk" }}>
            From the Intelligence Dispatch
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {RELATED_INSIGHTS.map((article) => (
              <Link key={article.slug} href={`/insights/${article.slug}`}>
                <div
                  className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={article.heroImage} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                    <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `rgba(167,139,250,0.12)`, color: article.accent, border: `1px solid rgba(167,139,250,0.2)`, fontFamily: "Space Grotesk" }}>{article.category}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-white/40 mb-1" style={{ fontFamily: "DM Sans" }}>{article.readTime}</p>
                    <h3 className="font-semibold text-white text-sm leading-snug mb-1" style={{ fontFamily: "Space Grotesk" }}>{article.title}</h3>
                    <p className="text-xs text-white/50" style={{ fontFamily: "DM Sans" }}>{article.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PillarCTA
        accentColor="#A78BFA"
        glowRgb="167, 139, 250"
        ctaLabel="Ready to Build Your AI Creative Pipeline?"
        ctaSubtext="Whether you're a production house, streaming platform, or gaming studio — KrishuAI will design your generative media infrastructure for the AI era of storytelling."
        buttonText="Explore Generative Media AI"
      />
    </PillarLayout>
  );
}
