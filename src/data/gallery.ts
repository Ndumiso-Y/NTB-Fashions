import { garmentImages, generatedImages } from "./images";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "wedding" | "traditional" | "matric-dance" | "suits" | "event-wear";
  title: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-hero",
    src: generatedImages.hero.src,
    alt: generatedImages.hero.alt,
    category: "event-wear",
    title: "Signature Bespoke Gown",
    description: "Premium editorial African-inspired gown custom tailored for event presence."
  },
  {
    id: "gal-wedding-1",
    src: generatedImages.weddingGroom.src,
    alt: generatedImages.weddingGroom.alt,
    category: "suits",
    title: "Classic Groom Suit",
    description: "Bespoke double-breasted groom suit with custom African interior trim."
  },
  {
    id: "gal-matric-1",
    src: generatedImages.matricDance.src,
    alt: generatedImages.matricDance.alt,
    category: "matric-dance",
    title: "Matric Statement Dress",
    description: "Luxury tulle matric dance dress styled for visual impact and unique fit."
  },
  {
    id: "gal-trad-1",
    src: generatedImages.traditionalWear.src,
    alt: generatedImages.traditionalWear.alt,
    category: "traditional",
    title: "Modern Traditional Attire",
    description: "Contemporary representation of cultural symbols in high-fashion evening wear."
  },
  {
    id: "gal-garment-dress",
    src: garmentImages.dress.src,
    alt: garmentImages.dress.alt,
    category: "event-wear",
    title: "Red Carpet Gown",
    description: "Exquisite emerald custom gown with high leg slit and elegant wrap style."
  },
  {
    id: "gal-garment-dress3",
    src: garmentImages.dress3.src,
    alt: garmentImages.dress3.alt,
    category: "event-wear",
    title: "Golden Hour Evening Wear",
    description: "Tailored luxury satin dress that highlights the silhouette with grace."
  },
  {
    id: "gal-garment-couple1",
    src: garmentImages.groomBride.src,
    alt: garmentImages.groomBride.alt,
    category: "wedding",
    title: "Couples Xhosa Ceremony Set",
    description: "Bespoke traditional matching attire for wedding couple, displaying Umbhaco styling."
  },
  {
    id: "gal-garment-couple2",
    src: garmentImages.groomBride2.src,
    alt: garmentImages.groomBride2.alt,
    category: "wedding",
    title: "Modern White & Gold Wedding Set",
    description: "Tailored suit and custom white gown with gold accents for a luxury wedding."
  },
  {
    id: "gal-garment-suits1",
    src: garmentImages.maleSuits.src,
    alt: garmentImages.maleSuits.alt,
    category: "suits",
    title: "Three-Piece Groomsmen Collection",
    description: "Impeccably tailored suits styled for wedding attendants and groom party."
  },
  {
    id: "gal-garment-suit2",
    src: garmentImages.menSuit.src,
    alt: garmentImages.menSuit.alt,
    category: "suits",
    title: "Sleek Groom Tuxedo",
    description: "Bespoke formal double-breasted suit detailing precision hand-stitched lapels."
  },
  {
    id: "gal-garment-matric2",
    src: garmentImages.matricDanceDress.src,
    alt: garmentImages.matricDanceDress.alt,
    category: "matric-dance",
    title: "Royal Blue Matric Dress",
    description: "Form-fitting custom gown with dramatic sheer detail and sequin clusters."
  },
  {
    id: "gal-garment-matric3",
    src: garmentImages.matricDanceDress2.src,
    alt: garmentImages.matricDanceDress2.alt,
    category: "matric-dance",
    title: "Midnight Gala Gown",
    description: "Custom matric dance dress featuring luxury embroidery work and full train."
  },
  {
    id: "gal-garment-maxhosa",
    src: garmentImages.maxhosa.src,
    alt: garmentImages.maxhosa.alt,
    category: "traditional",
    title: "Heritage Knit Dress",
    description: "Contemporary Xhosa knit dress combining traditional identity with modern streetwear."
  },
  {
    id: "gal-garment-maxhosa2",
    src: garmentImages.maxhosa2.src,
    alt: garmentImages.maxhosa2.alt,
    category: "traditional",
    title: "Cultural Pride Suit Set",
    description: "Bold geometric knitwear suit reflecting premium African heritage styling."
  },
  {
    id: "gal-garment-otsile",
    src: garmentImages.otsile.src,
    alt: garmentImages.otsile.alt,
    category: "suits",
    title: "Bespoke Modern Groom Suit",
    description: "Tailored jacket with cultural pocket styling and precision formal trousers."
  },
  {
    id: "gal-garment-thando",
    src: garmentImages.thando.src,
    alt: garmentImages.thando.alt,
    category: "traditional",
    title: "Signature Print Blazer",
    description: "Custom modern blazer with integrated traditional fabric accents."
  },
  {
    id: "gal-garment-skirt",
    src: garmentImages.traditionalSkirt.src,
    alt: garmentImages.traditionalSkirt.alt,
    category: "traditional",
    title: "Beaded Heritage Skirt",
    description: "Custom South African cultural skirt featuring hand-crafted bead patterns."
  },
  {
    id: "gal-garment-trad3",
    src: garmentImages.traditionalDress3.src,
    alt: garmentImages.traditionalDress3.alt,
    category: "traditional",
    title: "Elegant Xhosa Gown",
    description: "Classic black and white print dress layered for high formal events."
  },
  {
    id: "gal-garment-his-hers",
    src: garmentImages.traditionalHisHersSet.src,
    alt: garmentImages.traditionalHisHersSet.alt,
    category: "traditional",
    title: "Signature His & Hers Traditional Set",
    description: "Perfectly coordinated couple wear celebrating South African heritage with sophistication."
  },
  {
    id: "gal-garment-set1",
    src: garmentImages.traditionalSet.src,
    alt: garmentImages.traditionalSet.alt,
    category: "traditional",
    title: "Traditional Heritage Co-Ord",
    description: "Hand-tailored set designed for traditional wedding celebrations and pre-wedding consults."
  },
  {
    id: "gal-garment-set2",
    src: garmentImages.traditionalSet2.src,
    alt: garmentImages.traditionalSet2.alt,
    category: "traditional",
    title: "Cultural Ceremony Gown Detail",
    description: "Showing the close-up texture, stitching, and bead embroidery on a custom traditional gown."
  },
  {
    id: "gal-garment-set3",
    src: garmentImages.traditionalSet3.src,
    alt: garmentImages.traditionalSet3.alt,
    category: "traditional",
    title: "African Royalty Celebration Look",
    description: "Bespoke full-skirt dress designed for high-end cultural ceremonies."
  },
  {
    id: "gal-garment-traditional",
    src: garmentImages.traditional.src,
    alt: garmentImages.traditional.alt,
    category: "traditional",
    title: "Deluxe Traditional Wedding Wear",
    description: "Stunning custom dress illustrating complex geometric trims and custom fit."
  },
  {
    id: "gal-garment-traddress",
    src: garmentImages.traditionalDress.src,
    alt: garmentImages.traditionalDress.alt,
    category: "traditional",
    title: "Classic Cream Traditional Dress",
    description: "Crafted Umbhaco fabric with black braid detail, cut for a modern luxury bride."
  },
  {
    id: "gal-garment-attire",
    src: garmentImages.traditionalAttire.src,
    alt: garmentImages.traditionalAttire.alt,
    category: "traditional",
    title: "Cultural Pride Ceremonial Attire",
    description: "Stunning custom matching set tailored around heritage print patterns."
  }
];
