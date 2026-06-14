import React from "react";
import { ArrowRight } from "lucide-react";
import { brandDetails } from "../../data/brand";
import { generatedImages } from "../../data/images";
import Button from "../ui/Button";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[100vh] flex items-center pt-24 pb-16 bg-brand-bg overflow-hidden">
      {/* Decorative background geometry */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-bg-secondary -z-10 opacity-30 lg:opacity-100" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Text Details Column */}
        <div className="lg:col-span-7 flex flex-col items-start z-10 animate-fade-in">
          <span className="subtitle-editorial mb-4">
            {brandDetails.positioning}
          </span>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-brand-black leading-tight lg:leading-[1.1] mb-6">
            Bespoke African Fashion <br className="hidden sm:inline" />
            <span className="text-gradient-gold italic font-normal">for Unforgettable</span> Moments
          </h1>
          
          <p className="font-sans text-brand-muted text-sm sm:text-base leading-relaxed max-w-xl mb-8">
            {brandDetails.subtext}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button to="/contact" variant="primary">
              Book a Consultation
            </Button>
            <Button to="/collections" variant="outline" className="group">
              Explore Collections
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Social Proof and heritage footnote */}
          <div className="mt-12 flex items-center gap-6 text-[10px] uppercase font-bold tracking-[0.2em] text-brand-muted/70">
            <span>Occasion Wear</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span>Heritage Tailoring</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span>Exclusively Custom</span>
          </div>
        </div>

        {/* Visual Column */}
        <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[550px] lg:h-[620px] animate-fade-in-delayed">
          {/* Frameless luxury image container with custom accent frame */}
          <div className="absolute inset-4 border border-brand-gold/40 -z-10 translate-x-3 translate-y-3" />
          <div className="w-full h-full bg-brand-bg-secondary overflow-hidden shadow-2xl">
            <img
              src={generatedImages.hero.src}
              alt={generatedImages.hero.alt}
              className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
            />
          </div>

          {/* Floater overlay tag */}
          <div className="absolute -left-6 bottom-10 bg-brand-black text-brand-bg-secondary p-5 shadow-lg max-w-[200px] border border-brand-gold/20 hidden sm:block">
            <p className="font-serif italic text-xs text-brand-gold mb-1">Authentic Craft</p>
            <p className="font-sans text-[10px] uppercase tracking-wider text-brand-bg-secondary/70">Hand-finished details from South Africa</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
