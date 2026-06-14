import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { occasions } from "../../data/occasions";

export const OccasionCTA: React.FC = () => {
  return (
    <section className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <SectionHeader
          title="Designed for Your Moment"
          subtitle="Occasion-Driven Luxury"
          description="Whatever the milestone, we design garments that amplify your confidence, represent your culture, and ensure your presence is unforgettable."
        />

        {/* Occasions Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {occasions.map((occ) => (
            <div
              key={occ.id}
              className="flex flex-col md:flex-row bg-brand-bg-secondary/35 border border-brand-gold/15 hover:border-brand-gold transition-colors duration-500 overflow-hidden shadow-sm"
            >
              {/* Image side */}
              <div className="md:w-5/12 h-[260px] md:h-auto relative overflow-hidden bg-brand-bg-secondary shrink-0">
                <img
                  src={occ.image}
                  alt={occ.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-black/40 to-transparent" />
              </div>

              {/* Text side */}
              <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-between items-start">
                <div>
                  <span className="font-sans text-[9px] font-bold text-brand-gold uppercase tracking-[0.2em] block mb-2">
                    {occ.avatarTitle}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-brand-black mb-3">
                    {occ.title}
                  </h3>
                  <p className="font-serif italic text-xs text-brand-muted mb-4">
                    {occ.tagline}
                  </p>
                  <p className="font-sans text-brand-muted text-xs md:text-sm leading-relaxed mb-6">
                    {occ.description}
                  </p>
                </div>
                
                <Button
                  to={`/contact?occasion=${occ.id}`}
                  variant="primary"
                  className="!py-2.5 !px-5 !text-[9px] tracking-[0.15em] w-full md:w-auto"
                >
                  {occ.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OccasionCTA;
