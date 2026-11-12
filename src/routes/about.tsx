import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/Layout";
import { brand } from "@/lib/data";
import { pageHead } from "@/lib/seo";
import { trackEvent } from "@/lib/analytics";
import { imageSrc, imageSrcSet, images } from "@/lib/image-manifest";

// Re-encoded from the original 2.44 MB remote PNG into the owned /public/images
// WebP set, so the page no longer depends on the Lovable asset host at runtime.
const ABOUT_IMAGE = "menswear-rail-ntombis-custom-clothing";

// Phones render this image at roughly 364 CSS px wide. On a 2.6x screen that
// makes the browser ask for ~955px and pick the full 1122 rendition (173 KB),
// even though the 800 one (100 KB) already outresolves the box. Below the `md`
// breakpoint the candidate list is therefore capped at 800w; desktop keeps the
// full ladder so 2x displays still get the native width.
const MOBILE_MAX_WIDTH = 800;
const mobileSrcSet = images[ABOUT_IMAGE].sources
  .filter((s) => s.w <= MOBILE_MAX_WIDTH)
  .map((s) => `${s.src} ${s.w}w`)
  .join(", ");

export const Route = createFileRoute("/about")({
  component: About,
  head: () =>
    pageHead({
      path: "/about",
      title: "About Ntombis Fashion | Custom Clothing Studio in Rustenburg",
      description:
        "Learn about Ntombis Fashion, a South African fashion house in Rustenburg, North West, creating custom garments built around identity, fit and occasion.",
    }),
});

function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main id="main-content" className="pt-48 md:pt-56 pb-24 container-custom">
        <span className="text-xs tracking-[0.3em] uppercase mb-4 block text-brand-green/70">ABOUT NTOMBIS FASHION</span>
        <h1 className="text-4xl md:text-6xl mb-12 max-w-4xl">
          A South African Fashion House Built Around Identity, Fit, and Occasion
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8 text-lg text-brand-green/80 leading-relaxed">
            <p>
              Ntombis Fashion creates custom garments for people who want to look distinct, feel confident, and carry their identity into every occasion. The brand brings together modern fashion, African heritage, tailored fit, and personal design consultation to create garments that cannot simply be bought off a shelf.
            </p>
            <p>
              Every garment begins with a story. It may be a wedding, a matric dance, a cultural ceremony, a gala, or a professional milestone. Ntombis Fashion treats each piece as a personal expression of who the wearer is and how they want to be seen.
            </p>
            <p>
              Ntombis Fashion is based in Rustenburg, North West, South Africa. Explore the{" "}
              <Link to="/collections" className="underline underline-offset-4">collections</Link>, browse the{" "}
              <Link to="/gallery" className="underline underline-offset-4">gallery</Link>, or see how{" "}
              <Link to="/process" className="underline underline-offset-4">the custom process</Link> works.
            </p>
          </div>
          <div className="aspect-[4/5]">
            <picture className="block w-full h-full">
              <source
                media="(min-width: 768px)"
                srcSet={imageSrcSet(ABOUT_IMAGE)}
                sizes="(min-width: 1280px) 560px, 45vw"
              />
              <img
                src={imageSrc(ABOUT_IMAGE)}
                srcSet={mobileSrcSet}
                sizes="calc(100vw - 3rem)"
                width={images[ABOUT_IMAGE].width}
                height={images[ABOUT_IMAGE].height}
                alt="A white clothing rail holding three navy menswear looks: a long-sleeve top and trousers in a navy and yellow circular dot print, a navy three-piece suit worn with a white shirt, navy bow tie and white flower on the lapel, and a white short-sleeve shirt with a navy and white circular print panel over navy trousers. A folded newspaper propped in front reads Ntombis Custom Clothing, made for you, designed to last, and the Ntombis Custom Clothing wordmark sits below the rail."
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale opacity-90"
              />
            </picture>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-y border-brand-green/10">
          <div>
            <h2 className="text-xl mb-4 font-serif italic">What makes NTB different</h2>
            <p className="text-sm text-brand-green/70 leading-relaxed">
              Ntombis Fashion combines cultural relevance, personal service, modern silhouettes, and custom craftsmanship. The result is not mass-produced fashion, but occasion-specific clothing shaped around meaning, fit, and presence.
            </p>
          </div>
          <div>
            <h2 className="text-xl mb-4 font-serif italic">Who we serve</h2>
            <p className="text-sm text-brand-green/70 leading-relaxed">
              From brides and grooms to matric dance clients, cultural ceremony guests, professionals, and event-ready individuals, Ntombis Fashion designs for people who want to be remembered.
            </p>
          </div>
          <div>
            <h2 className="text-xl mb-4 font-serif italic">Long-term vision</h2>
            <p className="text-sm text-brand-green/70 leading-relaxed">
              The vision is to grow Ntombis Fashion into a recognised African fashion brand known for premium custom garments and culturally inspired event wear.
            </p>
          </div>
        </div>

        <div className="mt-24 text-center">
           <a
            href={brand.contact.whatsapp}
            onClick={() => trackEvent("whatsapp_enquiry", { location: "about_footer" })}
            className="bg-brand-green text-brand-cream px-12 py-4 uppercase tracking-widest text-sm inline-block"
          >
            Start Your Custom Journey
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
