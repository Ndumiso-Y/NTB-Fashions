import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/Layout";
import { categories, brand } from "@/lib/data";
import { imageSrc, imageSrcSet, images } from "@/lib/image-manifest";
import { pageHead } from "@/lib/seo";
import { trackEvent, toCollectionId } from "@/lib/analytics";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/collections")({
  component: Collections,
  head: () =>
    pageHead({
      path: "/collections",
      title: "Collections | Wedding, Traditional & Event Wear | Ntombis Fashion",
      description:
        "Explore Ntombis Fashion collections: custom wedding attire, matric dance dresses, modern traditional wear, tailor made suits, event dresses and his & hers sets.",
    }),
});

/**
 * Reports `collection_view` the first time a collection reaches the middle of
 * the viewport. One event per collection per page view - the observer
 * disconnects from a section as soon as it has been counted - so this reads as
 * "which collections were actually looked at" rather than as a stream of scroll
 * events. Falls back to reporting nothing where IntersectionObserver is absent.
 */
function useCollectionViews(ids: readonly string[]) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          trackEvent("collection_view", {
            collection: toCollectionId((entry.target as HTMLElement).dataset["collection"]),
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 },
    );

    const sections = container.querySelectorAll<HTMLElement>("[data-collection]");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return containerRef;
}

function Collections() {
  const collectionsRef = useCollectionViews(categories.map((c) => c.id));

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main id="main-content" className="pt-48 md:pt-56 pb-24 container-custom">
        <span className="text-xs tracking-[0.3em] uppercase mb-4 block text-brand-green/70">OUR WORK</span>
        <h1 className="text-4xl md:text-6xl mb-16">Collections</h1>

        <div ref={collectionsRef} className="space-y-32">
          {categories.map((cat, index) => (
            <div key={cat.id} data-collection={cat.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
              <div className="flex-1 w-full">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={imageSrc(cat.image)}
                    srcSet={imageSrcSet(cat.image)}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    width={images[cat.image].width}
                    height={images[cat.image].height}
                    alt={cat.imageAlt}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-5xl">{cat.name}</h2>
                <p className="text-lg text-brand-green/80 leading-relaxed">
                  {cat.description}
                </p>
                <div className="pt-6">
                  <a 
                    href={brand.contact.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("whatsapp_enquiry", {
                        location: "collections_category",
                        collection: toCollectionId(cat.id),
                      })
                    }
                    className="border border-brand-green px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-brand-green hover:text-brand-cream transition-all inline-block"
                  >
                    Enquire About This Style
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-40 text-center bg-brand-green text-brand-cream p-12 md:p-24">
          <h2 className="text-3xl md:text-5xl mb-8 font-serif">Ready-to-wear coming soon</h2>
          <p className="text-brand-cream/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Ntombis Fashion is preparing selected capsule pieces and limited releases for clients who want the Ntombis signature beyond custom orders.
          </p>
          <a href="/contact" className="underline underline-offset-8 uppercase tracking-widest text-xs">Notify Me</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
