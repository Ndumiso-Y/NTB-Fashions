import { generatedImages, garmentImages } from "./images";

export interface Collection {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  futureShopEnabled: boolean;
  ctaLabel: string;
}

export const collections: Collection[] = [
  {
    id: "bridal-wedding",
    title: "Bridal & Wedding",
    slug: "bridal-wedding",
    description: "Custom bridal gowns and ceremony attire shaped around presence, fit, and cultural detail.",
    image: garmentImages.groomBride2.src,
    alt: garmentImages.groomBride2.alt,
    tags: ["Bridal", "Bespoke Gowns", "Traditional Wedding"],
    futureShopEnabled: false,
    ctaLabel: "Enquire About Bridal Wear",
  },
  {
    id: "groom-suits",
    title: "Groom & Men’s Suits",
    slug: "groom-suits",
    description: "Sharp bespoke suits and formal tailoring designed for weddings, galas, and professional presence.",
    image: generatedImages.weddingGroom.src,
    alt: generatedImages.weddingGroom.alt,
    tags: ["Bespoke Suits", "Tuxedos", "Luxury Tailoring"],
    futureShopEnabled: false,
    ctaLabel: "Enquire About Suits",
  },
  {
    id: "matric-dance",
    title: "Matric Dance",
    slug: "matric-dance",
    description: "Statement dresses made for confidence, memory, and a once-in-a-lifetime entrance.",
    image: generatedImages.matricDance.src,
    alt: generatedImages.matricDance.alt,
    tags: ["Matric Gowns", "Occasion Wear", "Custom Silhouette"],
    futureShopEnabled: false,
    ctaLabel: "Enquire About Matric Gowns",
  },
  {
    id: "traditional-wear",
    title: "Traditional Wear",
    slug: "traditional-wear",
    description: "Modern traditional garments that carry heritage, pride, and cultural identity with refinement.",
    image: generatedImages.traditionalWear.src,
    alt: generatedImages.traditionalWear.alt,
    tags: ["Cultural Attire", "Traditional Print", "Modern African"],
    futureShopEnabled: false,
    ctaLabel: "Enquire About Traditional Wear",
  },
  {
    id: "african-fusion",
    title: "African Fusion",
    slug: "african-fusion",
    description: "High-fashion knitwear and custom garments combining modern silhouettes with bold African details.",
    image: garmentImages.maxhosa.src,
    alt: garmentImages.maxhosa.alt,
    tags: ["Modern Heritage", "Contemporary Knit", "Kasi Chic"],
    futureShopEnabled: false,
    ctaLabel: "Enquire About Fusion Wear",
  },
  {
    id: "event-gala",
    title: "Event & Gala Wear",
    slug: "event-gala",
    description: "Elegant custom dresses made for galas, red carpets, cocktail nights, and major occasions.",
    image: garmentImages.dress.src,
    alt: garmentImages.dress.alt,
    tags: ["Red Carpet", "Evening Wear", "Cocktail Dresses"],
    futureShopEnabled: false,
    ctaLabel: "Enquire About Gala Dresses",
  },
  {
    id: "his-hers-sets",
    title: "His & Hers Sets",
    slug: "his-hers-sets",
    description: "Coordinated custom looks for couples, traditional ceremonies, weddings, and celebrations.",
    image: garmentImages.traditionalHisHersSet.src,
    alt: garmentImages.traditionalHisHersSet.alt,
    tags: ["Coordinated Sets", "Matching Traditional", "Ceremony Wear"],
    futureShopEnabled: false,
    ctaLabel: "Enquire About Sets",
  },
  {
    id: "shirts-custom",
    title: "Shirts & Custom Pieces",
    slug: "shirts-custom",
    description: "Signature tailored shirts, smart casual wear, and unique statement garments.",
    image: garmentImages.otsile.src,
    alt: garmentImages.otsile.alt,
    tags: ["Custom Shirts", "Smart Casual", "Men's Bespoke"],
    futureShopEnabled: false,
    ctaLabel: "Enquire About Custom Shirts",
  },
];
