/*
 * KrishuAI — AI Travel & Hospitality Deep-Dive Page
 * Route: /solutions/travel
 * Design: Amber/gold accent, warm luxury aesthetic, concierge AI focus
 */

import PillarLayout, { type PillarMeta } from "@/components/PillarLayout";
import CapabilitiesSection, { type Capability } from "@/components/CapabilitiesSection";
import CaseStudySection, { type CaseStudy } from "@/components/CaseStudySection";
import BharatStackDiagram from "@/components/BharatStackDiagram";
import PillarCTA from "@/components/PillarCTA";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/pillar_travel-DkMUMrhPssqX3BTGRci2AA.webp";
const CASE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/case_travel_cs-ECWBjnVh2fhLKQ3is752np.webp";

const meta: PillarMeta = {
  id: "travel",
  number: "03",
  title: "AI Travel & Hospitality",
  subtitle: "Hyper-Personalized Journeys",
  tagline: "The Hotel That Reads Minds",
  description:
    "Multimodal concierge systems that anticipate guest preferences before they're expressed. From booking to checkout, every touchpoint is orchestrated by an AI that knows your guest better than they know themselves — driving revenue uplift and loyalty simultaneously.",
  heroImage: HERO_IMG,
  accentColor: "#FBBF24",
  glowRgb: "251, 191, 36",
  label: "Hyper-Personalized Journeys",
};

const capabilities: Capability[] = [
  {
    icon: "✈️",
    title: "Multimodal Concierge AI",
    description:
      "An AI concierge that communicates via voice, text, and visual interfaces — understanding guest preferences from past stays, social signals, and real-time behavior to deliver anticipatory service.",
    features: [
      "Voice + text + visual interface",
      "Preference learning from past stays",
      "Anticipatory service recommendations",
      "Multilingual guest communication",
    ],
    highlight: true,
  },
  {
    icon: "◎",
    title: "Predictive Hospitality Engine",
    description:
      "AI that predicts what each guest will want next — room temperature, dining preferences, spa bookings, and local experiences — before they ask.",
    features: [
      "Real-time preference modeling",
      "Proactive service triggers",
      "F&B demand forecasting",
      "Spa and activity pre-booking AI",
    ],
  },
  {
    icon: "⬡",
    title: "Guest Journey Orchestration",
    description:
      "End-to-end AI management of the guest journey — from pre-arrival personalization to post-checkout loyalty nurturing — as a single continuous experience.",
    features: [
      "Pre-arrival preference capture",
      "In-stay real-time adaptation",
      "Post-checkout loyalty AI",
      "Cross-property profile sync",
    ],
  },
  {
    icon: "◈",
    title: "Revenue Intelligence",
    description:
      "Dynamic pricing and upsell AI that maximizes RevPAR by identifying the right offer for the right guest at the right moment — without feeling transactional.",
    features: [
      "Dynamic room pricing AI",
      "Personalized upsell timing",
      "Package bundling optimization",
      "Competitor rate intelligence",
    ],
    highlight: true,
  },
  {
    icon: "◉",
    title: "Operations Intelligence",
    description:
      "AI that optimizes hotel operations — housekeeping routing, maintenance prediction, staff scheduling, and energy management — reducing costs while improving guest experience.",
    features: [
      "Predictive maintenance AI",
      "Housekeeping route optimization",
      "Energy consumption AI",
      "Staff demand forecasting",
    ],
  },
  {
    icon: "⬟",
    title: "Destination Intelligence",
    description:
      "AI that positions your property as a destination intelligence hub — curating hyper-local experiences, partnerships, and itineraries that create emotional loyalty.",
    features: [
      "Hyper-local experience curation",
      "Local partner integration AI",
      "Itinerary personalization",
      "Cultural sensitivity adaptation",
    ],
  },
];

const caseStudies: CaseStudy[] = [
  {
    id: "travel-cs-1",
    badge: "Luxury Hospitality Group · India",
    client: "The Hotel That Reads Minds",
    clientType: "Luxury Hospitality Group — 12 Properties",
    image: CASE_IMG,
    challenge:
      "A luxury hospitality group with 12 properties across India was struggling with declining repeat guest rates despite high satisfaction scores. Guests felt the service was excellent but impersonal — they had to re-explain preferences at every stay, and upsell attempts felt intrusive and poorly timed.",
    solution:
      "KrishuAI deployed a Multimodal Concierge AI across all 12 properties — a unified guest intelligence layer that maintains a persistent profile across every stay, anticipates preferences, and triggers service moments at the exact right time. The AI communicates via WhatsApp, in-room voice, and the hotel app.",
    outcomes: [
      { metric: "3.2x", label: "Ancillary revenue uplift", color: "#FBBF24" },
      { metric: "67%", label: "Increase in repeat bookings", color: "#0EA5E9" },
      { metric: "94%", label: "Guest satisfaction score", color: "#22D3EE" },
      { metric: "340%", label: "F&B upsell conversion", color: "#A78BFA" },
    ],
    quote:
      "The multimodal concierge system increased our ancillary revenue by 340% in the first quarter. Guests describe it as 'the hotel that reads minds.' The AI knows that Mr. Sharma prefers his room at 22°C, needs a vegetarian breakfast by 7am, and will likely book a spa treatment on day two.",
    quoteAuthor: "Chief Digital Officer",
    quoteRole: "Luxury Hospitality Group",
    tags: ["Multimodal Concierge", "Predictive Hospitality", "Revenue Intelligence", "Guest Journey AI", "Luxury AI"],
  },
  {
    id: "travel-cs-2",
    badge: "Online Travel Agency · Southeast Asia",
    client: "Hyper-Personalized Travel Planning at Scale",
    clientType: "Regional OTA — 8 Million Monthly Users",
    image: CASE_IMG,
    challenge:
      "A regional OTA with 8 million monthly users had a 2.3% booking conversion rate — industry average is 3.5%. Users were overwhelmed by choice, and the recommendation engine was based on popularity rather than individual preference. Average session time was 22 minutes with high abandonment.",
    solution:
      "KrishuAI built a Guest Journey Orchestration system — an AI that builds a real-time preference model from browsing behavior, past bookings, and contextual signals (travel dates, group composition, budget signals), then presents a curated shortlist of 3-5 options with personalized narrative explanations.",
    outcomes: [
      { metric: "2.3→4.8%", label: "Booking conversion rate", color: "#FBBF24" },
      { metric: "−38%", label: "Reduction in session time", color: "#0EA5E9" },
      { metric: "2.7x", label: "Average order value increase", color: "#22D3EE" },
      { metric: "8M+", label: "Users served monthly", color: "#34D399" },
    ],
    quote:
      "KrishuAI's AI didn't just improve our conversion — it changed how users experience travel planning. Instead of searching, they're now discovering. The AI tells them what they want before they know it themselves.",
    quoteAuthor: "Chief Product Officer",
    quoteRole: "Regional Online Travel Agency",
    tags: ["OTA Personalization", "Conversion Optimization", "Travel AI", "Recommendation Engine", "Guest Journey"],
  },
];

export default function TravelPage() {
  return (
    <PillarLayout meta={meta}>
      <CapabilitiesSection
        capabilities={capabilities}
        accentColor="#FBBF24"
        glowRgb="251, 191, 36"
        sectionTitle="Travel & Hospitality AI Capabilities"
        sectionSubtitle="Six AI modules that transform every touchpoint of the guest journey — from anticipatory concierge to revenue intelligence."
      />
      <CaseStudySection
        caseStudies={caseStudies}
        accentColor="#FBBF24"
        glowRgb="251, 191, 36"
      />
      <BharatStackDiagram accentColor="#FBBF24" glowRgb="251, 191, 36" />
      <PillarCTA
        accentColor="#FBBF24"
        glowRgb="251, 191, 36"
        ctaLabel="Ready to Deploy Your AI Concierge?"
        ctaSubtext="Whether you're a luxury hotel group, OTA, or destination management company — KrishuAI will design your hyper-personalized guest intelligence system."
        buttonText="Book a Concierge AI Demo"
      />
    </PillarLayout>
  );
}
