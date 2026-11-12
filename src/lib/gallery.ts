// Source images were originally hosted in the studio's Google Drive folder
// (https://drive.google.com/drive/folders/1VzUQ0zpPMY5Wk9EbcWZOhpYRX_1ozcMx).
// They are now served from /public/images (see image-manifest.ts); the Drive
// file id is kept on each item purely as provenance.
//
// Categories, titles and alt text are based only on what is visible in each
// garment photo. No fabric, origin, designer or customer details are asserted.
// Duplicate Drive files noted in the original list are still omitted; #21 was
// also removed because it is byte-identical to the former matric dance dress.

export type GalleryCategory =
  | "Wedding"
  | "Traditional"
  | "Evening & Matric Gowns"
  | "Suits & Menswear"
  | "Event Wear";

export const galleryCategories: Array<GalleryCategory | "All"> = [
  "All",
  "Wedding",
  "Traditional",
  "Evening & Matric Gowns",
  "Suits & Menswear",
  "Event Wear",
];

import { imageSrc, imageSrcSet, images, type ImageKey } from "./image-manifest";

type RawItem = {
  id: string;
  image: ImageKey;
  category: GalleryCategory;
  title: string;
  alt: string;
};

const rawItems: RawItem[] = [
  {
    id: "1ubIeRIQkID1cVlRrX5Ped-jO6T3oZDuq", // Former matric dance dress
    image: "red-bell-sleeve-dress-black-applique",
    category: "Evening & Matric Gowns",
    title: "Red Bell-Sleeve Dress with Black Appliqué",
    alt: "Red midi dress with tiered bell sleeves and black beaded floral appliqué across the bodice, previously featured as a matric dance dress",
  },
  {
    id: "1yQPx-GbF_HFMe3KWOXFlBe_ttv_deAAJ", // #1
    image: "champagne-beaded-gown-front-slit",
    category: "Evening & Matric Gowns",
    title: "Champagne Beaded Gown with Front Slit",
    alt: "Champagne strapless gown with beaded plunging neckline, textured beadwork and a front slit",
  },
  {
    id: "1OG9rzzCjGj9IU2SU9YDLRuyxeFgP80Mh", // #2
    image: "iridescent-blue-violet-mermaid-gown",
    category: "Evening & Matric Gowns",
    title: "Iridescent Blue-Violet Mermaid Gown",
    alt: "Shimmering blue and violet mermaid gown with a deep V neckline and thigh-high slit",
  },
  {
    id: "18Yybk1RcAmolJsCgpb1AQNyMHrZu8E-R", // #3 (31 is duplicate)
    image: "mens-asymmetric-print-two-piece",
    category: "Suits & Menswear",
    title: "Men's Asymmetric Print Two-Piece",
    alt: "Men's two-piece set with an asymmetric white and navy-and-gold circular print shirt and matching trousers",
  },
  {
    id: "1kTxEaY5WcPeSYGicvu4WtpQKAHy3GDsg", // #4
    image: "white-mermaid-bridal-gown-illusion-sleeves",
    category: "Wedding",
    title: "White Mermaid Bridal Gown with Illusion Sleeves",
    alt: "White mermaid bridal gown with sheer long sleeves, swirling lace embroidery and a tulle skirt",
  },
  {
    id: "12qrx7p_lUdKcVODEWm1NYRLGjmbIZ_A-", // #5
    image: "dashiki-print-mermaid-dress-headwrap",
    category: "Traditional",
    title: "Dashiki Print Mermaid Dress with Headwrap",
    alt: "Black and green dashiki-print dress with a tiered tulle hem and matching headwrap",
  },
  {
    id: "1jMcuXa0f9HpjYO5CGqlo1tQNyOk_q--t", // #6 (35 is duplicate)
    image: "blue-print-strapless-fit-and-flare-dress",
    category: "Traditional",
    title: "Blue Print Strapless Fit-and-Flare Dress",
    alt: "Royal blue printed strapless dress with a full flared skirt and embellished waistband",
  },
  {
    id: "1PFVZ64aUQSXuZ5ynQaCrPrS-J1uOVgCP", // #7
    image: "mens-red-print-polo-set",
    category: "Suits & Menswear",
    title: "Men's Red Print Polo Set",
    alt: "Men's red patterned short-sleeve polo shirt with black trim and black trousers",
  },
  {
    id: "11sO5yTz3gLdFrlANhnnjG0l8tgUp1XzY", // #8
    image: "mens-navy-set-pink-chevron-panel",
    category: "Suits & Menswear",
    title: "Men's Navy Set with Pink Chevron Panel",
    alt: "Men's navy short-sleeve top with a pink chevron print yoke and matching navy trousers",
  },
  {
    id: "1u2F85lyJGwtX5sUU_Lk0yroy_9WAQpwa", // #9
    image: "emerald-lace-gown-floral-tulle-skirt",
    category: "Evening & Matric Gowns",
    title: "Emerald Lace Gown with Floral Tulle Skirt",
    alt: "Emerald green beaded lace gown with a one-shoulder ruffle, floral tiered skirt and tulle hem",
  },
  {
    id: "1S1S03jMwQBNy8_T7jlo4EioGDg8G906S", // #10 (12 is duplicate)
    image: "navy-sequinned-one-shoulder-mermaid-gown",
    category: "Evening & Matric Gowns",
    title: "Navy Sequinned One-Shoulder Mermaid Gown",
    alt: "Navy one-shoulder mermaid gown with a sequinned bodice and crystal-scattered satin skirt",
  },
  {
    id: "1gUOdCqX0_tzx2FGH05zkOZzboWOoo2Cx", // #11
    image: "navy-three-piece-suit",
    category: "Suits & Menswear",
    title: "Navy Three-Piece Suit",
    alt: "Navy three-piece suit with waistcoat, white shirt, bow tie and lapel flower",
  },
  {
    id: "1hSRNVTj0fLOXgxZal9wNDW6CZFGYKVgf", // #13
    image: "blue-white-ensemble-fringed-shawl",
    category: "Traditional",
    title: "Blue and White Ensemble with Fringed Shawl",
    alt: "Royal blue dress with a white fringed shawl fastened with a brooch and a matching blue headwrap",
  },
  {
    id: "134J_8eCvamv9gXhHfK8yxPH0c_Elg-0o", // #14
    image: "pink-chevron-print-corset-skirt-set",
    category: "Traditional",
    title: "Pink Chevron Print Corset and Skirt Set",
    alt: "Two-piece set with a pink corset top and matching chevron-print pencil skirt with a front slit",
  },
  {
    id: "1IGPZrg5t8Je6X4VuL9l6qbhS6MFxAjbc", // #15
    image: "powder-blue-beaded-gown-ruffled-hem",
    category: "Evening & Matric Gowns",
    title: "Powder Blue Beaded Gown with Ruffled Hem",
    alt: "Powder blue beaded gown with a V neckline and layered ruffled tulle hem",
  },
  {
    id: "1ECO9BkX3bFONG-G8aJybKUSqYV-88JP-", // #16
    image: "black-white-striped-peplum-dress",
    category: "Event Wear",
    title: "Black and White Striped Peplum Dress",
    alt: "Black dress with a beaded neckline, structured shoulder detail and black-and-white striped flared skirt",
  },
  {
    id: "1MIiIwKny2GnQzfpeuTQA1GeTTQl0SVR8", // #17 (30 is duplicate)
    image: "burgundy-satin-gown-beaded-bodice",
    category: "Evening & Matric Gowns",
    title: "Burgundy Satin Gown with Beaded Bodice",
    alt: "Burgundy satin column gown with a sculpted, beaded floral bodice",
  },
  {
    id: "1Or7cQCDv_FaccCNcfJuVPMono1NjLzo2", // #18
    image: "mens-white-set-blue-print-trim",
    category: "Suits & Menswear",
    title: "Men's White Set with Blue Print Trim",
    alt: "Men's white short-sleeve shirt with blue print trim on the collar, placket and shoulders, with navy trousers",
  },
  {
    id: "16rmaxEYE0H1c1br-QYrS23EFFetbNsrI", // #19 (23, 28, 45 duplicates)
    image: "royal-blue-strapless-cocktail-dress",
    category: "Event Wear",
    title: "Royal Blue Strapless Cocktail Dress",
    alt: "Royal blue strapless cocktail dress with an embellished bodice and full satin skirt",
  },
  {
    id: "1W6vZiCsDuFKFmZjjLgVtFTcDSiNPOCsJ", // #20
    image: "red-off-shoulder-satin-gown",
    category: "Evening & Matric Gowns",
    title: "Red Off-Shoulder Satin Gown",
    alt: "Red satin off-the-shoulder gown with a textured floral neckline and front slit",
  },
  // #21 omitted: identical image to the former matric dance dress above
  {
    id: "1ZwQ2vQX3NpYzhJGUr5iLYFVpN7J6-n4H", // #22
    image: "mens-navy-wrap-top-trousers",
    category: "Suits & Menswear",
    title: "Men's Navy Wrap Top and Trousers",
    alt: "Men's navy wrap-front top with a printed tie and trim, worn with matching navy trousers",
  },
  {
    id: "1U_MtXzZ4pqeTG6P3aaGTx80ZNBKDFnQv", // #24
    image: "emerald-jumpsuit-yellow-ruffles",
    category: "Event Wear",
    title: "Emerald Jumpsuit with Yellow Ruffles",
    alt: "Emerald green tailored jumpsuit with yellow ruffled shoulders and a yellow waist belt",
  },
  {
    id: "1Zqc-GwoyFW3gh-3Z2iA2FCIkN_ukGbGS", // #25
    image: "blue-print-one-shoulder-dress",
    category: "Traditional",
    title: "Blue Print One-Shoulder Dress",
    alt: "Blue one-shoulder dress with a studded satin bodice, printed flared skirt and tulle hem",
  },
  {
    id: "1Zg_I9MpvIjFANHV21_DrHSULGKz5zULE", // #26
    image: "teal-one-shoulder-dress-floral-detail",
    category: "Event Wear",
    title: "Teal One-Shoulder Dress with Floral Detail",
    alt: "Teal one-shoulder dress with a floral draped bodice and full skirt",
  },
  {
    id: "1lXqJdkOrirZVG8TN7Jm6h4ISJ4pVH7eB", // #27
    image: "orange-print-strapless-maxi-dress",
    category: "Traditional",
    title: "Orange Print Strapless Maxi Dress",
    alt: "Orange and green printed strapless maxi dress with a black belt and lace-trimmed neckline",
  },
  {
    id: "16lqEe7RIWlbSjiIN2dSi5kASJPmUx9hp", // #29
    image: "black-striped-dress-orange-sash",
    category: "Traditional",
    title: "Black Striped Dress with Orange Sash",
    alt: "Black sleeveless dress with waist cut-outs, white and orange striped skirt and a printed orange sash",
  },
  {
    id: "1MLSQFCYGZmXMijuf13BnS4_Pn82bZDS9", // #32
    image: "mens-orange-set-print-panel",
    category: "Suits & Menswear",
    title: "Men's Orange Set with Print Panel",
    alt: "Men's orange short-sleeve shirt with a printed side panel and matching orange trousers",
  },
  {
    id: "10LT1BC8Bg4cbZLex5AYTGZyl_T9cyi7N", // #33 (34, 37, 49 duplicates)
    image: "navy-print-gown-tulle-skirt",
    category: "Traditional",
    title: "Navy Print Gown with Tulle Skirt",
    alt: "Navy off-the-shoulder gown with a puff-sleeve printed bodice and scalloped peplum over a tulle skirt",
  },
  {
    id: "1Q5mGzC6zURru_2GqZYMWcMqKLRE0DUIo", // #36
    image: "yellow-print-top-wide-leg-trousers",
    category: "Traditional",
    title: "Yellow Print Top and Wide-Leg Trousers",
    alt: "Yellow set with a geometric printed cap-sleeve top, tie belt and wide-leg trousers",
  },
  {
    id: "1qcZKVHMDMPmVIx2nmSoDUFRDBOioIAUi", // #38 (39 duplicate)
    image: "navy-print-gown-tulle-skirt-front-view",
    category: "Traditional",
    title: "Navy Print Gown with Tulle Skirt, Front View",
    alt: "Navy off-the-shoulder gown with a printed puff-sleeve bodice and scalloped peplum over a tulle skirt, seen from the front",
  },
  {
    id: "1p7ZdQyn1M_AWDbLQSCwKOnSHhRIE04fs", // #40
    image: "cream-dress-black-stripe-hem",
    category: "Event Wear",
    title: "Cream Dress with Black Stripe Hem",
    alt: "Cream three-quarter-sleeve dress with hook-and-eye front fastenings and black striped cuffs and hem",
  },
  {
    id: "1nn3f3GMQJyg0oU0SWqS3ajgBeosYlI3p", // #41 (50 duplicate)
    image: "blue-print-peplum-dress-ruffled-shoulder",
    category: "Traditional",
    title: "Blue Print Peplum Dress with Ruffled Shoulder",
    alt: "Blue one-shoulder dress with a satin peplum bodice, ruffled shoulder and printed skirt",
  },
  {
    id: "1WXhohNbQAin1trTpNyEX_9dFqPvuwcbq", // #42
    image: "emerald-tiered-dress-print-applique",
    category: "Event Wear",
    title: "Emerald Tiered Dress with Print Appliqué",
    alt: "Emerald satin sleeveless dress with a printed appliqué at the waist and tiered tulle skirt",
  },
  {
    id: "1aq7YZRQcQ-mhOw1eqoers1kS_CJ5xp2j", // #43
    image: "red-print-knotted-headwrap",
    category: "Traditional",
    title: "Red Print Knotted Headwrap",
    alt: "Red and white printed headwrap with a knotted front",
  },
  {
    id: "1PBoeycT9JBa5kB4lM9EwjEAb3jlNFwC-", // #44
    image: "orange-print-mermaid-dress-tulle",
    category: "Traditional",
    title: "Orange Print Mermaid Dress with Tulle",
    alt: "Orange strapless mermaid dress with printed panels, a tulle shoulder accent and tiered tulle hem",
  },
  {
    id: "1geT-RpaDvCoph7KVaNHUvDoRTIf9H7hw", // #46
    image: "black-beaded-corset",
    category: "Event Wear",
    title: "Black Beaded Corset",
    alt: "Black satin corset with eyelet front lacing and beaded edges",
  },
  {
    id: "1IKsrHMi_E8fbrUjba9Xy3mRHSx0K55T0", // #47
    image: "yellow-beaded-gown-print-skirt",
    category: "Traditional",
    title: "Yellow Beaded Gown with Print Skirt",
    alt: "Strapless gown with a yellow beaded bodice, shoulder accent and a red, blue and yellow printed flared skirt",
  },
  {
    id: "1SQgwPnYEfHgv_eLHiDSd4xBKvXWS_Ebc", // #48
    image: "black-white-print-dress-bow",
    category: "Event Wear",
    title: "Black and White Print Dress with Bow",
    alt: "Black and white geometric print pencil dress with an oversized black bow at the neckline",
  },
];

export const galleryItems = rawItems.map((item, index) => ({
  id: String(index + 1),
  title: item.title,
  alt: item.alt,
  category: item.category,
  image: imageSrc(item.image),
  srcSet: imageSrcSet(item.image),
  width: images[item.image].width,
  height: images[item.image].height,
}));
