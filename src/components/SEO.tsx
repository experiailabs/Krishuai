/*
 * KrishuAI — SEO Component
 * Injects dynamic <title>, <meta>, JSON-LD structured data, and full
 * Open Graph + Twitter Card tags into <head> for every page.
 *
 * OG spec: https://ogp.me/
 * Twitter Card spec: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
 * Schema.org Article: https://schema.org/Article
 */

import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  /** Absolute URL to the OG preview image (min 1200×630 recommended) */
  ogImage?: string;
  ogImageAlt?: string;
  /** Width of ogImage in pixels (default: 1200) */
  ogImageWidth?: number;
  /** Height of ogImage in pixels (default: 630) */
  ogImageHeight?: number;
  ogType?: "website" | "article";
  /** ISO date string for article published date, e.g. "2025-05-01" */
  articlePublishedTime?: string;
  /** ISO date string for article modified date */
  articleModifiedTime?: string;
  /** Article section / category */
  articleSection?: string;
  /** Comma-separated article tags */
  articleTags?: string;
  structuredData?: object;
  noIndex?: boolean;
}

export const SITE_NAME = "KrishuAI";
export const BASE_URL = "https://krishuaitech-murffryc.manus.space";
export const DEFAULT_OG_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/article1_hero-mJjfiFEbb8tFyojBRkSa6h.webp";
export const DEFAULT_OG_IMAGE_ALT = "KrishuAI — India's Sovereign AI Technology House";

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = DEFAULT_OG_IMAGE_ALT,
  ogImageWidth = 1200,
  ogImageHeight = 630,
  ogType = "website",
  articlePublishedTime,
  articleModifiedTime,
  articleSection,
  articleTags,
  structuredData,
  noIndex = false,
}: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  useEffect(() => {
    // ── Title ────────────────────────────────────────────────────────────────
    document.title = fullTitle;

    // ── Helper: set or create a <meta> tag ──────────────────────────────────
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        // Parse selector like meta[property="og:title"] → set property="og:title"
        const match = selector.match(/\[([^=]+)="([^"]+)"\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // ── Standard meta ────────────────────────────────────────────────────────
    setMeta('meta[name="description"]', "content", description);
    if (keywords) setMeta('meta[name="keywords"]', "content", keywords);
    setMeta(
      'meta[name="robots"]',
      "content",
      noIndex
        ? "noindex, nofollow"
        : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    );
    setMeta('meta[name="author"]', "content", "KrishuAI — Krishu Techventures Pvt. Ltd.");

    // ── Canonical ────────────────────────────────────────────────────────────
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonicalUrl);

    // ── Open Graph — core ────────────────────────────────────────────────────
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:type"]', "content", ogType);
    setMeta('meta[property="og:site_name"]', "content", SITE_NAME);
    setMeta('meta[property="og:locale"]', "content", "en_IN");

    // ── Open Graph — image ───────────────────────────────────────────────────
    setMeta('meta[property="og:image"]', "content", ogImage);
    setMeta('meta[property="og:image:secure_url"]', "content", ogImage);
    setMeta('meta[property="og:image:alt"]', "content", ogImageAlt);
    setMeta('meta[property="og:image:width"]', "content", String(ogImageWidth));
    setMeta('meta[property="og:image:height"]', "content", String(ogImageHeight));
    setMeta('meta[property="og:image:type"]', "content", ogImage.endsWith(".png") ? "image/png" : "image/jpeg");

    // ── Open Graph — article-specific ────────────────────────────────────────
    if (ogType === "article") {
      if (articlePublishedTime)
        setMeta('meta[property="article:published_time"]', "content", articlePublishedTime);
      if (articleModifiedTime)
        setMeta('meta[property="article:modified_time"]', "content", articleModifiedTime);
      if (articleSection)
        setMeta('meta[property="article:section"]', "content", articleSection);
      setMeta('meta[property="article:author"]', "content", `${BASE_URL}/about`);
      if (articleTags) {
        // article:tag supports multiple values; set the first tag as the primary
        const tags = articleTags.split(",").map((t) => t.trim());
        setMeta('meta[property="article:tag"]', "content", tags[0] || "");
      }
    }

    // ── Twitter Card ─────────────────────────────────────────────────────────
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", ogImage);
    setMeta('meta[name="twitter:image:alt"]', "content", ogImageAlt);
    setMeta('meta[name="twitter:site"]', "content", "@KrishuAI");
    setMeta('meta[name="twitter:creator"]', "content", "@KrishuAI");

    // ── JSON-LD Structured Data ───────────────────────────────────────────────
    if (structuredData) {
      let ldEl = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
      if (!ldEl) {
        ldEl = document.createElement("script");
        ldEl.setAttribute("type", "application/ld+json");
        document.head.appendChild(ldEl);
      }
      ldEl.textContent = JSON.stringify(structuredData);
    }

    return () => {
      // Clean up structured data on unmount to prevent stale JSON-LD across routes
      const ldEl = document.querySelector('script[type="application/ld+json"]');
      if (ldEl && structuredData) ldEl.remove();
    };
  }, [
    fullTitle,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    ogImageAlt,
    ogImageWidth,
    ogImageHeight,
    ogType,
    articlePublishedTime,
    articleModifiedTime,
    articleSection,
    articleTags,
    noIndex,
    structuredData,
  ]);

  return null;
}

// ─── Pre-built structured data generators ────────────────────────────────────

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KrishuAI",
  alternateName: "Krishu Techventures Pvt. Ltd.",
  url: BASE_URL,
  logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/logo_nav_white_3b04756b.png",
  description:
    "KrishuAI is India's premier Global AI Technology House — building sovereign, Bharat-native AI solutions for Government, EdTech, Travel & Hospitality, and Entertainment.",
  foundingDate: "2025",
  foundingLocation: "New Delhi, India",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@krishuai.com",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.linkedin.com/company/krishuai",
    "https://twitter.com/KrishuAI",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "KrishuAI",
  url: BASE_URL,
  description:
    "India's sovereign AI technology house — Bharat Agentic Stack, AI Governance, EdTech AI, Travel AI, and Entertainment AI.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/solution-library?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

/**
 * Generates a complete Schema.org Article structured data object.
 * Pass this to the SEO component's structuredData prop on article pages.
 */
export function articleSchema({
  title,
  description,
  heroImage,
  heroImageAlt,
  slug,
  publishedDate,
  category,
  keywords,
}: {
  title: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  slug: string;
  publishedDate: string;
  category: string;
  keywords: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: {
      "@type": "ImageObject",
      url: heroImage,
      caption: heroImageAlt,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Organization",
      name: "KrishuAI",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "KrishuAI",
      logo: {
        "@type": "ImageObject",
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663121212955/mURFFRyCHHRtAv6MhrB5ET/logo_icon_512-LaHSrWeWG38DSWfASECMdG.webp",
        width: 512,
        height: 512,
      },
    },
    datePublished: publishedDate,
    dateModified: publishedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/insights/${slug}`,
    },
    articleSection: category,
    keywords: keywords.split(",").map((k) => k.trim()),
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "Blog",
      name: "The Intelligence Dispatch",
      url: `${BASE_URL}/blog`,
    },
  };
}
