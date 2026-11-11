// One title and description per page. Used by the pages at runtime and by the
// prerender script, so every page ships with its own <title> and meta tags.
export interface PageSeo {
  path: string;
  title: string;
  description: string;
}

export const pageSeo: PageSeo[] = [
  {
    path: "/",
    title: "Ntombis Fashion | Bespoke African Fashion in Rustenburg",
    description:
      "Ntombis Fashion makes custom wedding attire, matric dance dresses, traditional wear and suits in shweshwe and Ankara. Visit us at 121 President Mbeki Drive, Rustenburg, or book on WhatsApp.",
  },
  {
    path: "/about",
    title: "Our Story | Ntombis Fashion",
    description:
      "Ntombis Fashion (NTB Fashions) is a Rustenburg fashion house blending African heritage, modern style and custom tailoring for weddings, matric dances and ceremonies.",
  },
  {
    path: "/collections",
    title: "Collections | Wedding, Matric Dance & Traditional Wear | Ntombis Fashion",
    description:
      "Explore Ntombis Fashion collections: bridal and groom wear, matric dance dresses, traditional and cultural ceremony outfits, and tailored suits, all made to measure.",
  },
  {
    path: "/process",
    title: "How Custom Tailoring Works | Ntombis Fashion",
    description:
      "From consultation and design to measurements, fittings and collection: how a made-to-measure outfit from Ntombis Fashion in Rustenburg comes together.",
  },
  {
    path: "/gallery",
    title: "Gallery of Custom Garments | Ntombis Fashion",
    description:
      "Photos of real Ntombis Fashion work: wedding couples, matric dance dresses, traditional sets and suits made in Rustenburg, South Africa.",
  },
  {
    path: "/contact",
    title: "Book a Consultation | Ntombis Fashion, Rustenburg",
    description:
      "Book a consultation with Ntombis Fashion at 121 President Mbeki Drive, Rustenburg. WhatsApp 072 340 0477 or email info@ntombis.com. Open Mon–Fri 09:00–17:00, Sat 09:00–14:00.",
  },
];

export const notFoundSeo = {
  title: "Page Not Found | Ntombis Fashion",
  description: "This page doesn't exist. Visit Ntombis Fashion for bespoke African fashion in Rustenburg.",
};

export const seoFor = (path: string) => pageSeo.find((p) => p.path === path);
