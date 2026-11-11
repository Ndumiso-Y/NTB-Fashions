export interface ImageAsset {
  src: string;
  alt: string;
  category?: string;
  title?: string;
}

export const generatedImages = {
  hero: {
    src: "/images/ntb/generated/hero-image.webp",
    alt: "African-inspired bespoke fashion garment by Ntombis Fashion",
  },
  weddingGroom: {
    src: "/images/ntb/generated/wedding-groom-visual.webp",
    alt: "Custom groom suit with African-inspired detailing by Ntombis Fashion",
  },
  matricDance: {
    src: "/images/ntb/generated/matric-dance-dress-visual.webp",
    alt: "Custom matric dance dress designed for a premium special occasion",
  },
  traditionalWear: {
    src: "/images/ntb/generated/traditional-wear-visual.webp",
    alt: "Modern African-inspired traditional attire by Ntombis Fashion",
  },
};

export const garmentImages: Record<string, ImageAsset> = {
  dress: {
    src: "/images/ntb/garments/dress.jpg",
    alt: "Premium custom event dress with fine detailing and elegant fit",
    category: "event-wear",
  },
  dress3: {
    src: "/images/ntb/garments/dress-3.jpg",
    alt: "Editorial evening gown custom designed for gala events",
    category: "event-wear",
  },
  groomBride: {
    src: "/images/ntb/garments/groom-and-bride.jpg",
    alt: "Bespoke wedding set showing couples traditional attire with cultural motifs",
    category: "wedding",
  },
  groomBride2: {
    src: "/images/ntb/garments/groom-and-bride-2.jpg",
    alt: "Elegant couple in custom tailored wedding suits and gown details",
    category: "wedding",
  },
  maleSuits: {
    src: "/images/ntb/garments/male-suits.jpg",
    alt: "Premium three-piece bespoke tailored men suits for groom party",
    category: "suits",
  },
  menSuit: {
    src: "/images/ntb/garments/men-suit.jpg",
    alt: "Bespoke formal mens double-breasted suit detailing precision crafting",
    category: "suits",
  },
  matricDanceDress: {
    src: "/images/ntb/garments/matric-dance-dress.jpg",
    alt: "Premium custom designed matric dance dress with dramatic silhouette",
    category: "matric-dance",
  },
  matricDanceDress2: {
    src: "/images/ntb/garments/matric-dance-dress-2.jpg",
    alt: "Custom occasion gown featuring luxury embroidery and custom tailoring",
    category: "matric-dance",
  },
  maxhosa: {
    src: "/images/ntb/garments/maxhosa.jpg",
    alt: "Modern South African knitwear traditional print fusion garment",
    category: "traditional",
  },
  maxhosa2: {
    src: "/images/ntb/garments/maxhosa-2.jpg",
    alt: "African heritage inspired modern tailored clothing showcasing cultural pride",
    category: "traditional",
  },
  otsile: {
    src: "/images/ntb/garments/otsile.jpg",
    alt: "Custom-made formal attire showcasing precision stitching and bespoke fit",
    category: "suits",
  },
  thando: {
    src: "/images/ntb/garments/thando.jpg",
    alt: "Tailored modern African jacket with signature cultural design accents",
    category: "traditional",
  },
  traditionalSkirt: {
    src: "/images/ntb/garments/traditional-skirt.jpg",
    alt: "Detailed cultural traditional skirt featuring local South African bead patterns",
    category: "traditional",
  },
  traditionalDress3: {
    src: "/images/ntb/garments/traditional-dress-3.jpg",
    alt: "Vibrant custom event wear representing heritage and luxury",
    category: "traditional",
  },
  traditionalHisHersSet: {
    src: "/images/ntb/garments/traditional-his-and-hers-set.jpg",
    alt: "Matching luxury traditional custom outfits designed for premium ceremony hosts",
    category: "traditional",
  },
  traditionalSet: {
    src: "/images/ntb/garments/traditional-set.jpg",
    alt: "Custom African prints tailored set for couples and family members",
    category: "traditional",
  },
  traditionalSet2: {
    src: "/images/ntb/garments/traditional-set-2.jpg",
    alt: "Intricate traditional beadwork details on couples formal attire",
    category: "traditional",
  },
  traditionalSet3: {
    src: "/images/ntb/garments/traditional-set-3.jpg",
    alt: "Heritage traditional silhouettes tailored with premium luxury fabrics",
    category: "traditional",
  },
  traditional: {
    src: "/images/ntb/garments/traditional.jpg",
    alt: "Custom traditional attire showcasing high-end embroidery work",
    category: "traditional",
  },
  traditionalDress: {
    src: "/images/ntb/garments/traditional-dress.jpg",
    alt: "Custom tailored Xhosa inspired wedding dress for premium event appearance",
    category: "traditional",
  },
  traditionalAttire: {
    src: "/images/ntb/garments/traditional-attire.jpg",
    alt: "Bespoke African print custom set capturing cultural details and identity",
    category: "traditional",
  },
};
