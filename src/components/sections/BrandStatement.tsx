import React from "react";
import { Quote } from "lucide-react";
import { brandDetails } from "../../data/brand";

export const BrandStatement: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-brand-black text-brand-bg-secondary overflow-hidden">
      {/* Decorative vertical lines and faint typography background */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-brand-bg-secondary/5 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-brand-bg-secondary/5 hidden md:block" />
      
      <div className="absolute left-[5%] top-1/2 -translate-y-1/2 opacity-2 text-[120px] font-serif font-black select-none pointer-events-none text-brand-bg-secondary/[0.02] hidden xl:block uppercase tracking-[0.1em]">
        NTOMBIS
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative flex flex-col items-center text-center">
        {/* Gold Monogram Icon / Accent Symbol */}
        <div className="mb-8 flex items-center justify-center">
          <Quote className="text-brand-gold opacity-60" size={36} strokeWidth={1} />
        </div>

        <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase mb-6 animate-fade-in-simple">
          Our Philosophy
        </span>

        {/* Major Headline Quote */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light italic leading-tight mb-8">
          “Not off the shelf. <br className="sm:hidden" />
          <span className="font-normal not-italic text-gradient-gold">Made around you.</span>”
        </h2>

        {/* Custom luxury divider */}
        <div className="w-20 h-[1px] bg-brand-gold/40 mb-8" />

        {/* Detailed Copy */}
        <p className="font-serif text-lg sm:text-xl lg:text-2xl font-light text-brand-bg-secondary/80 leading-relaxed max-w-3xl mb-8">
          Every Ntombis garment begins with the person, the occasion, and the story behind it. From cultural ceremonies to once-in-a-lifetime celebrations, we design pieces that feel personal, refined, and unforgettable.
        </p>

        {/* Differentiator Subtext */}
        <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-brand-gold/70 font-semibold">
          {brandDetails.differentiator}
        </p>
      </div>
    </section>
  );
};

export default BrandStatement;
