/**
 * FUTURE E-COMMERCE PRODUCTS DATA ARCHITECTURE
 * 
 * This file sets up the TypeScript interfaces and scaffolding for the e-commerce expansion.
 * To adhere to NTB Fashions / Ntombis brand integrity:
 * - We DO NOT render fake prices in the UI.
 * - We DO NOT implement a mock checkout / cart flow now.
 * - These data models are prepared so they can be easily linked to a Shopify, WooCommerce, 
 *   or custom headless API (like Sanity/Stripe) later.
 */

export interface ProductSize {
  label: string;      // e.g., "S", "M", "L", "Custom"
  inStock: boolean;
  measurementsHint?: string; // e.g. "Chest 96cm, Waist 82cm"
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  categorySlug: string; // references collection slug (e.g. "groom-suits")
  images: string[];     // multiple image paths (primary, alternate, details)
  
  // Future E-commerce attributes:
  // When active, these will be populated from a database or CMS.
  price?: {
    amount: number;
    currency: string; // e.g., "ZAR"
    formatted: string; // e.g., "R 4,500"
  };
  
  sizes?: ProductSize[];
  
  // Customization Options:
  // Since NTB is a bespoke brand, ready-to-wear pieces will also support custom sizing.
  customFittingAvailable: boolean;
  
  // Inventory Control:
  inventoryCount: number; // For limited drops
  isPreOrder: boolean;
  isActive: boolean;      // Toggle visibility in future shop
  
  tags: string[];
}

/**
 * Placeholder products for upcoming Ready-to-Wear and Limited Drop releases.
 * Currently, these are not active in the main UI but serve as design documentation.
 */
export const futureProducts: Product[] = [
  /*
  {
    id: "prod-rtw-xhosa-jacket",
    title: "Signature Heritage Knit Jacket",
    slug: "signature-heritage-knit-jacket",
    description: "Limited drop premium knit jacket featuring classic Xhosa geometric patterns.",
    longDescription: "Crafted with 100% fine cotton yarns, this jacket combines structural modern tailoring with heritage geometric designs. Perfect as a statement overlay for formal occasion wear.",
    categorySlug: "african-fusion",
    images: [
      "/images/ntb/garments/maxhosa-2.jpg"
    ],
    price: {
      amount: 4800,
      currency: "ZAR",
      formatted: "R 4,800" // Note: Hidden in visual layout until active = true
    },
    sizes: [
      { label: "S", inStock: true },
      { label: "M", inStock: true },
      { label: "L", inStock: false },
      { label: "XL", inStock: true },
      { label: "Custom Fit", inStock: true, measurementsHint: "Submit custom measurements during consult" }
    ],
    customFittingAvailable: true,
    inventoryCount: 15, // Limited Drop
    isPreOrder: false,
    isActive: false, // Remains false (hidden) until e-commerce backend is launched
    tags: ["Knitwear", "Limited Drop", "Heritage"]
  },
  {
    id: "prod-rtw-bespoke-shirt",
    title: "Embroidered Cultural Cuff Shirt",
    slug: "embroidered-cultural-cuff-shirt",
    description: "Modern tailored white linen shirt with custom embroidered geometric collar.",
    categorySlug: "shirts-custom",
    images: [
      "/images/ntb/garments/otsile.jpg"
    ],
    price: {
      amount: 1450,
      currency: "ZAR",
      formatted: "R 1,450"
    },
    sizes: [
      { label: "M", inStock: true },
      { label: "L", inStock: true },
      { label: "Custom Fit", inStock: true }
    ],
    customFittingAvailable: true,
    inventoryCount: 30,
    isPreOrder: true,
    isActive: false,
    tags: ["Linen", "Shirts", "Embroidery"]
  }
  */
];
