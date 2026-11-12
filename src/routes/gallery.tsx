import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/Layout";
import { brand } from "@/lib/data";
import { pageHead } from "@/lib/seo";
import { trackEvent } from "@/lib/analytics";
import { useState } from "react";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () =>
    pageHead({
      path: "/gallery",
      title: "Gallery | Ntombis Fashion Custom Garments",
      description:
        "Custom occasion wear by Ntombis Fashion: wedding gowns, traditional wear, evening and matric gowns, menswear and event pieces from the Rustenburg studio.",
    }),
});

import { galleryItems, galleryCategories } from "@/lib/gallery";

function Gallery() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const categories = galleryCategories;

  const filteredItems = filter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main id="main-content" className="pt-48 md:pt-56 pb-24 container-custom">
        <span className="text-xs tracking-[0.3em] uppercase mb-4 block text-brand-green/70">GALLERY</span>
        <h1 className="text-4xl md:text-6xl mb-8">A Preview of Custom Occasion Wear</h1>
        <p className="text-brand-green/70 max-w-xl mb-16 leading-relaxed">
          Explore selected Ntombis Fashion garments across wedding attire, traditional wear, matric dance pieces, suits, and event-focused looks. Every piece is made to order:{" "}
          <Link
            to="/process"
            onClick={() => trackEvent("process_cta_click", { location: "gallery_intro" })}
            className="underline underline-offset-4"
          >
            see how the process works
          </Link> or{" "}
          <Link to="/contact" className="underline underline-offset-4">book a consultation</Link>.
        </p>

        <div
          role="group"
          aria-label="Filter gallery by category"
          className="flex flex-wrap gap-x-8 gap-y-4 mb-16 border-b border-brand-green/10 pb-6 overflow-x-auto no-scrollbar whitespace-nowrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setFilter(cat);
                trackEvent("gallery_filter_used", { category: cat });
              }}
              aria-pressed={filter === cat}
              className={`text-[10px] sm:text-xs uppercase tracking-widest transition-all relative pb-2 ${filter === cat ? 'text-brand-green font-bold' : 'text-brand-green/70 hover:text-brand-green'}`}
            >
              {cat}
              {filter === cat && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-green"></span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filteredItems.map((item, i) => (
            <div key={item.id} className="group relative aspect-[3/4] overflow-hidden bg-brand-green/5">
              <img
                src={item.image}
                srcSet={item.srcSet}
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                width={item.width}
                height={item.height}
                alt={item.alt}
                loading={i < 4 ? "eager" : "lazy"}
                decoding="async"
                {...(i < 4 ? { fetchPriority: "high" as const } : {})}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
              />
              {/* Pointer + keyboard: full overlay, revealed on hover or when the
                  enquiry link inside it receives keyboard focus (focus-within). */}
              <div className="absolute inset-0 bg-brand-green/80 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center [@media(hover:none)]:hidden">
                <span className="text-[10px] uppercase tracking-widest text-brand-cream/60 mb-2">{item.category}</span>
                <h2 className="text-brand-cream text-lg mb-6 font-serif">{item.title}</h2>
                <a
                  href={brand.contact.whatsapp}
                  onClick={() => trackEvent("gallery_enquiry", { category: item.category, surface: "overlay" })}
                  className="bg-brand-cream text-brand-green px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Enquire About Similar Style<span className="sr-only">: {item.title}</span>
                </a>
              </div>
              {/* Touch devices (no hover): a compact, always-visible caption so the
                  enquiry CTA is discoverable without a hover state. */}
              <div className="hidden [@media(hover:none)]:flex absolute inset-x-0 bottom-0 items-end justify-between gap-3 p-4 pt-12 bg-gradient-to-t from-brand-green/90 via-brand-green/60 to-transparent text-brand-cream">
                <div className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-widest text-brand-cream/70 mb-1">{item.category}</span>
                  <h2 className="text-base leading-tight font-serif truncate">{item.title}</h2>
                </div>
                <a
                  href={brand.contact.whatsapp}
                  onClick={() => trackEvent("gallery_enquiry", { category: item.category, surface: "caption" })}
                  className="shrink-0 bg-brand-cream text-brand-green px-4 py-2 text-[10px] uppercase tracking-widest"
                >
                  Enquire<span className="sr-only"> about a similar style to {item.title}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
