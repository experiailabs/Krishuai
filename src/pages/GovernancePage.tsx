/*
 * KrishuAI — AI for Governance Deep-Dive Page
 * Route: /solutions/governance
 * Design: Tech-Gold accent, blueprint grid, G2B/G2G intelligence focus
 */

import PillarLayout, { type PillarMeta } from "@/components/PillarLayout";
import CapabilitiesSection, { type Capability } from "@/components/CapabilitiesSection";
import CaseStudySection, { type CaseStudy } from "@/components/CaseStudySection";
import BharatStackDiagram from "@/components/BharatStackDiagram";
import PillarCTA from "@/components/PillarCTA";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/pillar_governance-gEMvZ7T8NLwiDMNyMovAvK.webp";
const CASE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/case_governance-g5o3TACXqH7xMQBCtoQSFh.webp";

const meta: PillarMeta = {
  id: "governance",
  number: "01",
  title: "AI for Governance",
  subtitle: "G2B / G2G Intelligence",
  tagline: "Designing India's National Intelligence Layer",
  description:
    "KrishuAI builds the Bharat Agentic Stack — a localized, multimodal AI framework that understands 22+ Indian languages to autonomously deliver government services at scale: pensions, agriculture, healthcare, and predictive policy-making.",
  heroImage: HERO_IMG,
  accentColor: "#D4A847",
  glowRgb: "212, 168, 71",
  label: "G2B / G2G Intelligence",
};

const capabilities: Capability[] = [
  {
    icon: "🏛️",
    title: "Digital Twin States",
    description:
      "Living AI models of entire state economies and healthcare systems that simulate policy outcomes before implementation — enabling evidence-based governance at scale.",
    features: [
      "Real-time state economy simulation",
      "Healthcare resource allocation modeling",
      "Agricultural yield prediction",
      "Disaster response pre-planning",
    ],
    highlight: true,
  },
  {
    icon: "◎",
    title: "Citizen Services AI",
    description:
      "Autonomous agents that handle pension disbursement, land record queries, and welfare scheme eligibility — in the citizen's native language, 24/7.",
    features: [
      "22+ Indian language support",
      "Voice-first interface for low-literacy users",
      "Automated document verification",
      "Grievance redressal automation",
    ],
  },
  {
    icon: "⬡",
    title: "Predictive Policy Engine",
    description:
      "AI that analyzes legislative data, economic indicators, and citizen feedback to forecast policy impact before bills are enacted.",
    features: [
      "Legislative impact modeling",
      "Economic scenario analysis",
      "Citizen sentiment aggregation",
      "Cross-ministry data fusion",
    ],
  },
  {
    icon: "◈",
    title: "G2B Intelligence Portal",
    description:
      "A unified AI gateway for businesses to interact with government — licensing, compliance, tenders, and regulatory queries resolved through a single agentic interface.",
    features: [
      "Automated tender matching",
      "Compliance gap analysis",
      "License application AI",
      "Regulatory change alerts",
    ],
  },
  {
    icon: "◉",
    title: "National Intelligence Layer",
    description:
      "A sovereign, on-premise AI infrastructure that aggregates intelligence across ministries without compromising data sovereignty or security.",
    features: [
      "Air-gapped deployment option",
      "Ministry-level data isolation",
      "Cross-department insight sharing",
      "Audit trail and compliance logging",
    ],
    highlight: true,
  },
  {
    icon: "⬟",
    title: "Multilingual Policy Comms",
    description:
      "AI that translates, simplifies, and distributes government communications in all 22 scheduled languages — ensuring last-mile policy reach.",
    features: [
      "Real-time policy translation",
      "Plain-language simplification",
      "SMS and WhatsApp distribution",
      "Regional dialect adaptation",
    ],
  },
];

const caseStudies: CaseStudy[] = [
  {
    id: "gov-cs-1",
    badge: "State Government · India",
    client: "Digital Twin for a State Healthcare Network",
    clientType: "State Ministry of Health & Family Welfare",
    image: CASE_IMG,
    challenge:
      "A major Indian state with 85 million citizens faced chronic inefficiencies in healthcare resource allocation — hospitals in some districts were overwhelmed while others ran at 30% capacity. Policy decisions were reactive, not predictive.",
    solution:
      "KrishuAI deployed a Digital Twin of the state's healthcare network — a live AI model ingesting real-time hospital occupancy, disease surveillance data, and demographic patterns. The system generates daily resource allocation recommendations and simulates the impact of policy changes before implementation.",
    outcomes: [
      { metric: "34%", label: "Reduction in hospital overcrowding", color: "#D4A847" },
      { metric: "2.1x", label: "Faster emergency response routing", color: "#0EA5E9" },
      { metric: "₹420Cr", label: "Annual resource savings", color: "#22D3EE" },
      { metric: "171M+", label: "Citizens served through the system", color: "#A78BFA" },
    ],
    quote:
      "KrishuAI didn't just build us a system — they built us a national capability. The Digital Twin of our state's healthcare network has transformed how we allocate resources. We now make decisions based on what will happen, not what already happened.",
    quoteAuthor: "Senior Policy Advisor",
    quoteRole: "State Government of India",
    tags: ["Digital Twin", "Healthcare AI", "Resource Allocation", "Predictive Policy", "Bharat Agentic Stack"],
  },
  {
    id: "gov-cs-2",
    badge: "G2B Portal · National",
    client: "Unified G2B Intelligence Gateway",
    clientType: "Central Government Ministry",
    image: CASE_IMG,
    challenge:
      "Businesses filing for licenses, compliance certificates, and government tenders had to navigate 14 separate portals across 6 ministries. Average processing time was 47 days. Corruption risk was high due to manual touchpoints.",
    solution:
      "KrishuAI built a single agentic G2B portal — an AI that understands business queries in natural language, routes them to the correct ministry, pre-fills applications using company data, and tracks status autonomously. The system integrates with all 14 existing portals via API.",
    outcomes: [
      { metric: "47→4", label: "Days to license approval", color: "#D4A847" },
      { metric: "89%", label: "Reduction in manual touchpoints", color: "#0EA5E9" },
      { metric: "12K+", label: "Businesses onboarded in 90 days", color: "#22D3EE" },
      { metric: "Zero", label: "Corruption incidents reported", color: "#34D399" },
    ],
    quote:
      "The AI portal reduced our compliance overhead by 80%. What used to take our legal team three weeks now takes three hours. KrishuAI understood that government AI isn't about replacing people — it's about removing friction.",
    quoteAuthor: "Chief Digital Officer",
    quoteRole: "Large Indian Manufacturing Conglomerate",
    tags: ["G2B Intelligence", "License Automation", "Compliance AI", "Anti-Corruption", "Agentic Portal"],
  },
];

export default function GovernancePage() {
  return (
    <PillarLayout meta={meta}>
      <CapabilitiesSection
        capabilities={capabilities}
        accentColor="#D4A847"
        glowRgb="212, 168, 71"
        sectionTitle="Governance AI Capabilities"
        sectionSubtitle="Six purpose-built AI modules that collectively form the National Intelligence Layer — from citizen services to predictive policy."
      />
      <CaseStudySection
        caseStudies={caseStudies}
        accentColor="#D4A847"
        glowRgb="212, 168, 71"
      />
      <BharatStackDiagram accentColor="#D4A847" glowRgb="212, 168, 71" />
      <PillarCTA
        accentColor="#D4A847"
        glowRgb="212, 168, 71"
        ctaLabel="Ready to Build Your State's AI Layer?"
        ctaSubtext="Whether you're a state government, central ministry, or public sector enterprise — KrishuAI will design your sovereign intelligence architecture from first principles."
        buttonText="Request a Governance Briefing"
      />
    </PillarLayout>
  );
}
