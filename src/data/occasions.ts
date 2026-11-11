export interface OccasionInfo {
  id: string;
  title: string;
  avatarTitle: string;
  tagline: string;
  description: string;
  image: string;
  ctaText: string;
}

export const occasions: OccasionInfo[] = [
  {
    id: "weddings",
    title: "Weddings & Grooms",
    avatarTitle: "The Trendsetter Groom & Elegant Bride",
    tagline: "Unforgettable bespoke bridal dresses and tailored groom suits with heritage accents.",
    description: "Your wedding day demands presence. We design custom wedding gowns, tailored groomsmen suits, and matching traditional bride-and-groom ceremony sets that ensure you stand out together in harmony.",
    image: "/images/ntb/garments/groom-and-bride.jpg",
    ctaText: "Book Wedding Consultation",
  },
  {
    id: "matric-dance",
    title: "Matric Dances",
    avatarTitle: "The Matric Dance Diva",
    tagline: "A once-in-a-lifetime statement gown made for glamour, memory, and confidence.",
    description: "Make an entrance everyone will remember. From dramatic silhouettes to sleek custom modern cuts, we tailor your dream dress to fit you flawlessly, giving you confidence and content that shines on social media.",
    image: "/images/ntb/generated/matric-dance-dress-visual.webp",
    ctaText: "Book Matric Dress Consultation",
  },
  {
    id: "traditional-ceremonies",
    title: "Cultural & Traditional Ceremonies",
    avatarTitle: "The Cultural Pride Professional",
    tagline: "Representing heritage with high-fashion sophistication and modern custom tailoring.",
    description: "Honor your heritage with pride. We combine authentic textures, patterns, and symbols with modern silhouettes to design traditional skirts, dresses, and matching sets perfect for Lobola celebrations, Umabo, or cultural heritage events.",
    image: "/images/ntb/generated/traditional-wear-visual.webp",
    ctaText: "Book Traditional Wear Consultation",
  },
  {
    id: "gala-red-carpet",
    title: "Red Carpet & Gala Nights",
    avatarTitle: "The Red Carpet Queen",
    tagline: "One-of-a-kind statement garments designed for exclusivity and high impact visibility.",
    description: "Galas, pageants, awards ceremonies, and red carpets require drama and exclusivity. We design custom-tailored evening dresses and luxury jackets that guarantee all eyes are on you the moment you enter.",
    image: "/images/ntb/garments/dress.jpg",
    ctaText: "Book Red Carpet Consultation",
  },
];
