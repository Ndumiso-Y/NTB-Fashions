import { brand, categories } from "./data";

/**
 * Canonical production origin. Verified 2026-08-27: www.ntombis.com resolves to
 * Lovable's custom-domain address and serves this exact site (the Lovable
 * preview host ntb-fashion.lovable.app is a mirror, not the canonical host).
 */
export const SITE_URL = "https://www.ntombis.com";
export const SITE_NAME = brand.fullName; // "Ntombis Fashion"

export const OG_IMAGE = {
  url: `${SITE_URL}/og/ntombis-fashion.jpg`,
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — custom clothing, Rustenburg`,
};

export const LOGO_URL = `${SITE_URL}/images/ntombis-logo.png`;

/** Public, indexable routes — the single source for the sitemap and breadcrumbs. */
export const publicRoutes = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/collections", name: "Collections" },
  { path: "/process", name: "Process" },
  { path: "/gallery", name: "Gallery" },
  { path: "/contact", name: "Contact" },
] as const;

export type PublicPath = (typeof publicRoutes)[number]["path"];

/**
 * Utility pages: canonical and linked from the footer, but deliberately kept
 * out of `publicRoutes` so the sitemap above stays exactly as submitted to
 * Search Console. They still get a title, description, canonical and
 * breadcrumb through `pageHead`.
 */
export const utilityRoutes = [{ path: "/privacy", name: "Privacy" }] as const;

export type UtilityPath = (typeof utilityRoutes)[number]["path"];

export function absoluteUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/** Serialise JSON-LD safely for an inline <script> (no premature `</script>`). */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/**
 * Per-route <head> entries: title, description, canonical, Open Graph and
 * Twitter cards. Root-level defaults (site_name, locale, JSON-LD) live in
 * __root.tsx; TanStack de-duplicates meta by name/property so route values win.
 */
export function pageHead({ path, title, description }: { path: PublicPath | UtilityPath; title: string; description: string }) {
  const url = absoluteUrl(path);
  const route = [...publicRoutes, ...utilityRoutes].find((r) => r.path === path);
  const breadcrumb =
    path === "/"
      ? null
      : {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: route?.name ?? title, item: url },
          ],
        };

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: OG_IMAGE.url },
      { property: "og:image:width", content: String(OG_IMAGE.width) },
      { property: "og:image:height", content: String(OG_IMAGE.height) },
      { property: "og:image:alt", content: OG_IMAGE.alt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE.url },
      { name: "twitter:image:alt", content: OG_IMAGE.alt },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: breadcrumb ? [{ type: "application/ld+json", children: jsonLd(breadcrumb) }] : [],
  };
}

/**
 * Site-wide entity data. Every value below is taken from information already
 * visible on the site (brand data, footer, About page). Nothing unverified —
 * opening hours, prices, ratings, postal code, social profiles — is included.
 */
export function organizationJsonLd(): string {
  return jsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ClothingStore"],
        "@id": `${SITE_URL}/#business`,
        name: SITE_NAME,
        // Only names the site actually presents as its own. `brand.name` is the
        // uppercase lock-up in the footer heading; "Ntombis Custom Clothing" is
        // the wordmark set into the header logo on every page and into the About
        // photograph. "NTB Fashions" was removed — it appears nowhere in the
        // visible site ("NTB" is used only as a shorthand adjective in body
        // copy), so it is not a verifiable public-facing name for this business.
        alternateName: [brand.name, "Ntombis Custom Clothing"],
        description:
          "Ntombis Fashion is a South African fashion house in Rustenburg, North West, creating custom garments made around your story, body, culture, and occasion: wedding attire, matric dance dresses, traditional wear, tailor made suits, event dresses and coordinated his & hers sets.",
        slogan: brand.positioning,
        url: `${SITE_URL}/`,
        logo: LOGO_URL,
        image: OG_IMAGE.url,
        telephone: `+${brand.contact.phone.replace(/\D/g, "")}`,
        email: brand.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "121 President Mbeki Dr",
          addressLocality: "Rustenburg",
          addressRegion: "North West",
          addressCountry: "ZA",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Custom garment services",
          itemListElement: categories.map((cat) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: cat.name, description: cat.description, url: `${SITE_URL}/collections` },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#business` },
      },
    ],
  });
}
