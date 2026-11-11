import React from "react";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import { garmentImages } from "../data/images";

export const About: React.FC = () => {

  return (
    <div className="pt-24 bg-brand-bg">
      {/* Editorial Hero Block */}
      <section className="py-16 md:py-24 border-b border-brand-gold/10 bg-brand-bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="subtitle-editorial mb-3">About Ntombis Fashion</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-brand-black leading-tight mb-6">
              Identity, Culture & <br />
              <span className="text-gradient-gold italic font-normal">Bespoke Elegance</span>
            </h1>
            <p className="font-sans text-brand-muted text-base sm:text-lg leading-relaxed">
              We design custom garments for people who want to look distinct, feel confident, and carry their heritage into every milestone occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Philosophy Columns */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Editorial Image */}
          <div className="lg:col-span-5 relative h-[450px] md:h-[550px] bg-brand-bg-secondary border border-brand-gold/20 p-2 shadow-lg">
            <div className="absolute inset-4 border border-brand-gold/30 -z-10 translate-x-2.5 translate-y-2.5" />
            <img
              src={garmentImages.traditionalDress.src}
              alt="Tailoring details of a custom traditional garment by Ntombis Fashion"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start font-sans text-brand-muted text-sm sm:text-base leading-relaxed gap-6">
            <h2 className="font-serif text-2xl md:text-3xl text-brand-black font-medium leading-snug">
              “We do not design for the rack. We design for the person, the moment, and the meaning behind it.”
            </h2>

            <div className="w-16 h-[2px] bg-brand-gold/50 my-2" />

            <p>
              <strong>Ntombis Fashion</strong> (also known as Ntombis Fashion) is a premium South African fashion house specializing in custom clothing and bespoke occasion wear. Rooted in South Africa, we combine modern styling with African heritage accents and meticulous custom tailoring.
            </p>
            
            <p>
              Every garment we create begins as a direct consultation. We believe that clothing is more than just fabric—it is an expression of identity, confidence, and celebration. From cultural ceremonies and weddings to matric dances and red carpets, our mission is to craft garments that carry a unique story.
            </p>

            <p className="font-serif italic text-brand-black font-medium text-base">
              African-Inspired Bespoke Event Wear is our strategic positioning.
            </p>
            
            <p>
              We focus on young professionals and trendsetters who desire to stand out. Our design language is minimalist, elegant, and clean—providing cultural resonance without feeling like a costume, and presenting modern elegance at every fitting stage.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Callout with Icon styling */}
      <section className="py-20 bg-brand-black text-brand-bg-secondary border-t border-b border-brand-gold/10">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center flex flex-col items-center">
          <span className="subtitle-editorial mb-4">Our Commitment</span>
          <h2 className="font-serif text-3xl md:text-4xl text-gradient-gold italic mb-6">
            Bespoke Quality, Personal Legacy
          </h2>
          <p className="font-serif text-lg md:text-xl font-light text-brand-bg-secondary/80 leading-relaxed mb-8 max-w-3xl">
            Our long-term vision is to establish Ntombis Fashion as a recognized luxury African brand. We value the connection between the tailor and the wearer, ensuring that each garment fits perfectly and stands out with exclusivity.
          </p>
          <Button to="/contact" variant="gold">
            Book an Appointment
          </Button>
        </div>
      </section>

      {/* Signature Milestones info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeader
            title="Milestone Celebrations We Craft For"
            subtitle="Occasion Specialties"
            description="Our custom design templates are tailored specifically around these primary life moments."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="border border-brand-gold/15 p-8 bg-brand-bg-secondary/20">
              <h3 className="font-serif text-xl text-brand-black mb-3">Weddings & Grooms</h3>
              <p className="font-sans text-xs md:text-sm text-brand-muted leading-relaxed">
                Bespoke grooms' suits, custom bridal attire, and matching traditional bride-and-groom sets.
              </p>
            </div>
            <div className="border border-brand-gold/15 p-8 bg-brand-bg-secondary/20">
              <h3 className="font-serif text-xl text-brand-black mb-3">Matric Dances</h3>
              <p className="font-sans text-xs md:text-sm text-brand-muted leading-relaxed">
                Unforgettable statement gowns made for glamour, memory, and high visual social media impact.
              </p>
            </div>
            <div className="border border-brand-gold/15 p-8 bg-brand-bg-secondary/20">
              <h3 className="font-serif text-xl text-brand-black mb-3">Traditional Ceremony</h3>
              <p className="font-sans text-xs md:text-sm text-brand-muted leading-relaxed">
                Sophisticated modern representations of cultural heritage for pre-wedding and family gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
