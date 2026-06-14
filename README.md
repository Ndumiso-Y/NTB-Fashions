# NTB Fashions / Ntombis Web

A premium, mobile-responsive editorial website designed for **NTB Fashions** (publicly expressed as **Ntombis**). The platform positions the brand as a luxury African fashion house specializing in **African-Inspired Bespoke Event Wear**.

The codebase is scaffolded using React, Vite, TypeScript, and Tailwind CSS. It is configured to run smoothly as a marketing portfolio, while offering structured models and routes for future e-commerce expansions.

---

## Technical Stack

* **Core**: React 19, TypeScript 6.0, Vite 8.0
* **Routing**: React Router (v6+)
* **Styling**: Tailwind CSS (Vite integration plugin)
* **Icons**: Lucide React
* **Typography**: Playfair Display (Luxury serif heading font) & Inter (Clean sans-serif body font) loaded via Google Fonts.

---

## Setup & Running Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Dev Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Compile Production Build**:
   ```bash
   npm run build
   ```
   Generates a optimized production bundle inside the `/dist` directory.

---

## Vercel Deployment

This project is fully ready for deployment on **Vercel**:
1. Push the code to a GitHub repository.
2. Link the repository on the Vercel Dashboard.
3. Vercel will automatically detect the **Vite** project configuration.
4. Set the Build Command as `npm run build` and the Output Directory as `dist`.
5. Deploy. Every update to your main branch will trigger a Vercel preview build.

---

## Image Asset Reorganization Map

To support clean web-ready paths, all 25 images have been moved from the root folder to `/public/images/ntb/`. Spaces and inconsistent casing have been removed:

### 1. Generated Premium Website Visuals (`/public/images/ntb/generated/`)
* `HeroImage.png` -> `hero-image.png`
* `Wedding_groom visual.png` -> `wedding-groom-visual.png`
* `Matric dance dress visual.png` -> `matric-dance-dress-visual.png`
* `Traditional wear visual.png` -> `traditional-wear-visual.png`

### 2. Garment Proof-of-Work Images (`/public/images/ntb/garments/`)
* `Dress .jpg` -> `dress.jpg`
* `dress 3.jpg` -> `dress-3.jpg`
* `Groom and Bride.jpg` -> `groom-and-bride.jpg`
* `Groom and Bride 2.jpg` -> `groom-and-bride-2.jpg`
* `Male suits.jpg` -> `male-suits.jpg`
* `men suit.jpg` -> `men-suit.jpg`
* `matric dance dress.jpg` -> `matric-dance-dress.jpg`
* `matric-dance-dress-2.jpg` -> `matric-dance-dress-2.jpg`
* `Maxhosa.jpg` -> `maxhosa.jpg`
* `Maxhosa 2.jpg` -> `maxhosa-2.jpg`
* `Otsile .jpg` -> `otsile.jpg`
* `Thando.jpg` -> `thando.jpg`
* `Tradional skirt.jpg` -> `traditional-skirt.jpg`
* `Traditional dress 3.jpg` -> `traditional-dress-3.jpg`
* `Traditional his and hers set.jpg` -> `traditional-his-and-hers-set.jpg`
* `Traditional set.jpg` -> `traditional-set.jpg`
* `Traditional Set 2.jpg` -> `traditional-set-2.jpg`
* `Traditional set 3.jpg` -> `traditional-set-3.jpg`
* `Traditional.jpg` -> `traditional.jpg`
* `Traditonal Dress.jpg` -> `traditional-dress.jpg`
* `WhatsApp Image 2025-05-02 at 07.02.39_eb51cb33.jpg` -> `traditional-attire.jpg`

---

## Logo Customization

There is no final official logo for the brand yet. We have integrated an elegant, geometric, African-inspired placeholder SVG in `src/components/ui/LogoMark.tsx`. 

When the official logo is finalized:
* **For SVG logo**: Open [LogoMark.tsx](file:///D:/Digital%20Agency/Ntombis/Website/src/components/ui/LogoMark.tsx) and replace the inner `<svg>` element with your official vector content.
* **For PNG logo**: Place the image in `public/images/ntb/logo.png`, delete the `<svg>` node inside [LogoMark.tsx](file:///D:/Digital%20Agency/Ntombis/Website/src/components/ui/LogoMark.tsx), and render an `<img>` tag pointing to `"/images/ntb/logo.png"`.

---

## Future E-Commerce Expansion

This site is scaffolded with e-commerce in mind:
* Centralized categories/collections are stored in [collections.ts](file:///D:/Digital%20Agency/Ntombis/Website/src/data/collections.ts) with `futureShopEnabled` toggles.
* Product schemas and catalog draft models are documented in [products.ts](file:///D:/Digital%20Agency/Ntombis/Website/src/data/products.ts).
* Pages (like [Collections.tsx](file:///D:/Digital%20Agency/Ntombis/Website/src/pages/Collections.tsx)) contain detailed developer comments showing exactly where products list queries and detail routing should plug in.
* **Live checkout, fake shopping carts, and fake prices are omitted** to ensure brand authenticity. All actions trigger a direct consultation request or WhatsApp path.

---

## Placeholder Contact Info

We have explicitly avoided inventing fake phone numbers or addresses. Contact coordinates are configured as string constants in [brand.ts](file:///D:/Digital%20Agency/Ntombis/Website/src/data/brand.ts):
* **WhatsApp**: `"Add official WhatsApp number here"`
* **Email**: `"Add official email here"`
* **Location**: `"South Africa"`
* **Fitting Hours**: `"Mon – Fri: 09:00 – 17:00 / Sat: 09:00 – 13:00 (Appointments Required)"`

Update [brand.ts](file:///D:/Digital%20Agency/Ntombis/Website/src/data/brand.ts) to push these changes live across all headers, footers, forms, and WhatsApp fallback links.
