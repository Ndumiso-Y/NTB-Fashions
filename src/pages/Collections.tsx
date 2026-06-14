import React, { useEffect } from "react";
import SectionHeader from "../components/ui/SectionHeader";
import ImageCard from "../components/ui/ImageCard";
import Button from "../components/ui/Button";
import { collections } from "../data/collections";

export const Collections: React.FC = () => {
  useEffect(() => {
    document.title = "Our Collections | NTB Fashions";
  }, []);

  return (
    <div className="pt-24 bg-brand-bg min-h-screen">
      {/* Intro Header */}
      <section className="py-16 border-b border-brand-gold/10 bg-brand-bg-secondary/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeader
            title="Signature Collections"
            subtitle="Explore Our Style"
            description="Discover our diverse ranges of custom-made event wear, tailored suits, and modern traditional garments designed to carry cultural identity and confidence."
            align="left"
            className="!mb-0"
          />
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          {/* E-COMMERCE INTEGRATION POINT:
              In the future, this collections overview will link to dynamic collection detail pages.
              Example routing: `/collections/${collection.slug}` which queries `futureProducts` from `src/data/products.ts`
              filtered by `categorySlug`.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {collections.map((col) => (
              <div
                key={col.id}
                className="flex flex-col bg-brand-bg border border-brand-gold/15 p-6 hover:shadow-xl transition-all duration-500 group"
              >
                {/* Visual Image */}
                <div className="mb-6 overflow-hidden">
                  <ImageCard
                    src={col.image}
                    alt={col.alt}
                    aspectRatio="portrait"
                  />
                </div>

                {/* Info and Tags Details */}
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-serif text-2xl text-brand-black group-hover:text-brand-gold transition-colors duration-300">
                      {col.title}
                    </h2>
                    
                    {/* E-commerce indicator comments (hidden or subtle label) */}
                    {col.futureShopEnabled && (
                      <span className="font-sans text-[8px] font-bold text-brand-gold bg-brand-gold/10 px-2 py-1 uppercase tracking-wider">
                        Online Shop Ready
                      </span>
                    )}
                  </div>

                  <p className="font-sans text-brand-muted text-sm leading-relaxed mb-6 flex-grow">
                    {col.description}
                  </p>

                  {/* Tags list */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {col.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-[9px] font-semibold text-brand-muted bg-brand-bg-secondary px-3 py-1.5 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="h-[1px] bg-brand-gold/10 w-full mb-6" />

                  {/* Enquiry trigger path */}
                  <Button
                    to={`/contact?collection=${col.slug}`}
                    variant="primary"
                    className="w-full text-center"
                  >
                    {col.ctaLabel}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Placeholder Notice for developer handover */}
          <div className="mt-20 p-8 border border-dashed border-brand-gold/30 bg-brand-bg-secondary/25 text-center max-w-3xl mx-auto">
            <h4 className="font-serif text-lg text-brand-black mb-3">E-Commerce Ready Architecture</h4>
            <p className="font-sans text-xs md:text-sm text-brand-muted leading-relaxed">
              This collections layout is driven by structured data in <code className="text-brand-gold px-1 font-mono">src/data/collections.ts</code>. The template is pre-configured to link individual collection detail endpoints to catalog lists when inventory systems or Stripe integrations are implemented later.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Collections;
