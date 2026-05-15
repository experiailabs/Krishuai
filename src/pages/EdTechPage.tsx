/*
 * KrishuAI — AI EdTech Deep-Dive Page
 * Route: /solutions/edtech
 * Design: Cyan accent, neural network aesthetic, Sovereign Learning focus
 */

import PillarLayout, { type PillarMeta } from "@/components/PillarLayout";
import CapabilitiesSection, { type Capability } from "@/components/CapabilitiesSection";
import CaseStudySection, { type CaseStudy } from "@/components/CaseStudySection";
import BharatStackDiagram from "@/components/BharatStackDiagram";
import PillarCTA from "@/components/PillarCTA";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/pillar_edtech-mDfQ3ELRBu4wvYwuoZbNEe.webp";
const CASE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/case_edtech-Ldd2r2DWGQzGtZzcZL4oJW.webp";

const meta: PillarMeta = {
  id: "edtech",
  number: "02",
  title: "AI EdTech",
  subtitle: "Sovereign Learning Agents",
  tagline: "Building India's Knowledge Sovereignty",
  description:
    "Lifelong learning agents that adapt to each learner's cognitive profile, delivering automated pedagogy in 22+ Indian languages. KrishuAI is building the infrastructure for India's knowledge sovereignty — from primary classrooms to professional upskilling.",
  heroImage: HERO_IMG,
  accentColor: "#22D3EE",
  glowRgb: "34, 211, 238",
  label: "Sovereign Learning Agents",
};

const capabilities: Capability[] = [
  {
    icon: "🧠",
    title: "Adaptive Learning AI",
    description:
      "AI tutors that build a cognitive model of each learner — identifying knowledge gaps, learning pace, and preferred modality — then dynamically adjust content delivery.",
    features: [
      "Real-time cognitive profiling",
      "Spaced repetition optimization",
      "Multimodal content switching (text/audio/visual)",
      "Mastery-based progression gates",
    ],
    highlight: true,
  },
  {
    icon: "◎",
    title: "Multilingual Pedagogy",
    description:
      "Native-language instruction across all 22 scheduled Indian languages — not translation, but true pedagogical design in each language's cognitive framework.",
    features: [
      "22+ Indian languages natively",
      "Regional dialect adaptation",
      "Code-switching support",
      "Script-to-speech for low-literacy learners",
    ],
  },
  {
    icon: "⬡",
    title: "Autonomous AI Tutors",
    description:
      "Persistent AI tutor agents that maintain a long-term relationship with each learner — tracking progress across months, adapting to life events, and celebrating milestones.",
    features: [
      "Long-term learner memory",
      "Motivational intelligence",
      "Parent/guardian progress reports",
      "Peer comparison and cohort insights",
    ],
  },
  {
    icon: "◈",
    title: "Skill Intelligence Engine",
    description:
      "An AI that maps learner skills to real-world job market demand — identifying the shortest path from current capability to employment-ready competency.",
    features: [
      "Real-time job market integration",
      "Skill gap analysis",
      "Career pathway simulation",
      "Industry certification alignment",
    ],
    highlight: true,
  },
  {
    icon: "◉",
    title: "Educator Augmentation",
    description:
      "AI tools that amplify teacher effectiveness — automated lesson planning, student performance analytics, and real-time classroom intervention suggestions.",
    features: [
      "AI-generated lesson plans",
      "Student at-risk early warning",
      "Automated grading and feedback",
      "Professional development AI",
    ],
  },
  {
    icon: "⬟",
    title: "Sovereign Learning Platform",
    description:
      "On-premise or hybrid deployment ensuring student data never leaves the institution or jurisdiction — compliant with India's data protection framework.",
    features: [
      "On-premise deployment option",
      "DPDP Act compliance",
      "Institutional data isolation",
      "Audit trail for all AI decisions",
    ],
  },
];

const caseStudies: CaseStudy[] = [
  {
    id: "edtech-cs-1",
    badge: "National EdTech Platform · India",
    client: "Sovereign Learning for 4 Million Students",
    clientType: "National Education Foundation",
    image: CASE_IMG,
    challenge:
      "A national education initiative serving 4 million students across 12 Indian states faced a critical problem: 67% of students were learning in their second or third language, causing comprehension gaps that compounded over time. Teacher shortages meant one teacher per 45 students on average.",
    solution:
      "KrishuAI deployed adaptive AI tutors in 22 Indian languages — each student received a personalized learning agent that spoke their mother tongue, adapted to their learning pace, and maintained a continuous cognitive profile. Teachers received AI-generated daily briefings on each student's progress.",
    outcomes: [
      { metric: "4x", label: "Faster learning in mother tongue", color: "#22D3EE" },
      { metric: "78%", label: "Improvement in comprehension scores", color: "#0EA5E9" },
      { metric: "4M+", label: "Students on the platform", color: "#D4A847" },
      { metric: "22", label: "Indian languages supported", color: "#34D399" },
    ],
    quote:
      "Our students are learning 4x faster with KrishuAI's adaptive agents. The system speaks to each child in their mother tongue and adjusts in real-time. For the first time, a child in rural Odisha has the same quality of education as one in urban Mumbai.",
    quoteAuthor: "Director of Innovation",
    quoteRole: "National Education Foundation",
    tags: ["Adaptive Learning", "Multilingual AI", "Mother Tongue Education", "Sovereign Learning", "EdTech AI"],
  },
  {
    id: "edtech-cs-2",
    badge: "Professional Upskilling · Enterprise",
    client: "AI-Powered Workforce Reskilling at Scale",
    clientType: "Large Indian IT Services Company",
    image: CASE_IMG,
    challenge:
      "A major IT services company with 180,000 employees needed to reskill 40,000 engineers in AI/ML technologies within 18 months to remain competitive. Traditional training had a 23% completion rate and poor knowledge retention.",
    solution:
      "KrishuAI built a Skill Intelligence Engine that mapped each employee's existing skills, identified the shortest path to AI/ML proficiency, and deployed personalized learning agents. The system integrated with the company's HR platform to track skill acquisition against project requirements.",
    outcomes: [
      { metric: "91%", label: "Course completion rate", color: "#22D3EE" },
      { metric: "6mo", label: "Average time to AI proficiency", color: "#0EA5E9" },
      { metric: "40K", label: "Engineers reskilled", color: "#D4A847" },
      { metric: "3.2x", label: "ROI vs traditional training", color: "#A78BFA" },
    ],
    quote:
      "The Skill Intelligence Engine didn't just train our people — it built a living map of our organization's capabilities. We now know exactly which engineers can be deployed on which AI projects, and the system continuously updates as skills evolve.",
    quoteAuthor: "Chief Learning Officer",
    quoteRole: "Top-5 Indian IT Services Company",
    tags: ["Workforce Reskilling", "Skill Intelligence", "Corporate Learning", "AI Training", "Knowledge Sovereignty"],
  },
];

export default function EdTechPage() {
  return (
    <PillarLayout meta={meta}>
      <CapabilitiesSection
        capabilities={capabilities}
        accentColor="#22D3EE"
        glowRgb="34, 211, 238"
        sectionTitle="EdTech AI Capabilities"
        sectionSubtitle="Six AI modules that together form a complete Sovereign Learning ecosystem — from adaptive tutors to skill intelligence."
      />
      <CaseStudySection
        caseStudies={caseStudies}
        accentColor="#22D3EE"
        glowRgb="34, 211, 238"
      />
      <BharatStackDiagram accentColor="#22D3EE" glowRgb="34, 211, 238" />
      <PillarCTA
        accentColor="#22D3EE"
        glowRgb="34, 211, 238"
        ctaLabel="Ready to Deploy Sovereign Learning?"
        ctaSubtext="Whether you're a national education board, state government, or enterprise L&D team — KrishuAI will design your adaptive AI learning infrastructure from the ground up."
        buttonText="Explore Sovereign Learning"
      />
    </PillarLayout>
  );
}
