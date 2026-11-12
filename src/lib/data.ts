export const brand = {
  name: "NTOMBIS FASHION",
  fullName: "Ntombis Fashion",
  positioning: "Tailor made African Fashion for Unforgettable Moments",
  promise: "Custom garments made around your story, body, culture, and occasion.",
  differentiator: "We do not design for the rack. We design for the person, the moment, and the meaning behind it.",
  contact: {
    whatsapp: "https://wa.me/27723400477",
    phone: "+27 72 3400 477",
    email: "info@ntombis.com",
    address: "121 President Mbeki Dr, Rustenburg, North West",
    socials: {
      instagram: "#",
      facebook: "#",
      tiktok: "#",
    },
  },
};

import type { ImageKey } from "./image-manifest";

export const categories: Array<{
  id: string;
  name: string;
  description: string;
  cta: string;
  /** Key into image-manifest.ts (owned /public/images renditions). */
  image: ImageKey;
  /** Describes the garment actually shown in the card image. */
  imageAlt: string;
}> = [
  {
    id: "wedding",
    name: "Wedding Attire",
    description: "Tailored wedding looks shaped around presence, fit, and cultural detail.",
    cta: "Enquire About Wedding Wear",
    image: "white-mermaid-bridal-gown-illusion-sleeves",
    imageAlt: "White mermaid bridal gown with sheer long sleeves and lace embroidery",
  },
  {
    id: "matric-dance",
    name: "Matric Dance Dresses",
    description: "Statement dresses made for confidence, memory, and a once-in-a-lifetime entrance.",
    cta: "Start Your Matric Dress",
    image: "champagne-beaded-mermaid-gown-ntb-054",
    imageAlt: "Champagne beaded mermaid evening gown",
  },
  {
    id: "traditional",
    name: "Traditional Wear",
    description: "Modern traditional garments that carry heritage with refinement.",
    cta: "Explore Traditional Wear",
    image: "orange-print-mermaid-dress-tulle",
    imageAlt: "Orange strapless mermaid dress with printed panels and a tiered tulle hem",
  },
  {
    id: "suits",
    name: "Tailor made Suits",
    description: "Sharp tailor made suits designed for formal moments, weddings, and professional presence.",
    cta: "Request a Tailor made Suit",

    image: "navy-three-piece-suit",
    imageAlt: "Navy three-piece suit with waistcoat, white shirt and bow tie",
  },
  {
    id: "event-dresses",
    name: "Event Dresses",
    description: "Elegant custom dresses made for galas, red carpets, and special occasions.",
    cta: "Enquire About Event Dresses",
    image: "burgundy-satin-gown-beaded-bodice-event-dresses",
    imageAlt: "Burgundy satin column gown with a sculpted, beaded floral bodice",
  },
  {
    id: "coordinated",
    name: "His & Hers Sets",
    description: "Coordinated custom looks for couples, ceremonies, and meaningful celebrations.",
    cta: "Plan a Coordinated Look",
    image: "mens-navy-set-pink-chevron-panel",
    imageAlt: "Men's navy short-sleeve top with a pink chevron print yoke and matching trousers",
  },
];


export const processSteps = [
  {
    number: "01",
    title: "Start with a conversation",
    description: "We begin by understanding the occasion, the garment you have in mind, your timeline, and the feeling you want to create.",
  },
  {
    number: "02",
    title: "Define the occasion",
    description: "A wedding, matric dance, cultural ceremony, gala, or formal event each requires a different design approach.",
  },
  {
    number: "03",
    title: "Choose the style direction",
    description: "We discuss silhouette, colour, cultural inspiration, detailing, and the level of statement you want the garment to carry.",
  },
  {
    number: "04",
    title: "Measurements",
    description: "Accurate measurements guide the fit and help ensure the garment is shaped around your body.",
  },
  {
    number: "05",
    title: "Fabric and detailing",
    description: "Fabric, texture, pattern, embellishment, and finishing details are considered according to the design and occasion.",
  },
  {
    number: "06",
    title: "Production",
    description: "The garment moves into creation, with attention to construction, proportions, and finish.",
  },
  {
    number: "07",
    title: "Fitting and refinement",
    description: "Fittings allow the garment to be adjusted and refined before final completion.",
  },
  {
    number: "08",
    title: "Final delivery",
    description: "The completed piece is prepared for your occasion, ready to be worn with confidence.",
  },
];
