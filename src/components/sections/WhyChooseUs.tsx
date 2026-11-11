import React from "react";
import { Scissors, UserCheck, ShieldAlert, Award, Star, Compass } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

interface Differentiator {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const WhyChooseUs: React.FC = () => {
  const items: Differentiator[] = [
    {
      icon: <Scissors size={22} className="text-brand-gold" />,
      title: "Bespoke Custom Fit",
      description: "No standard racks or generic charts. We map your garment to your precise individual body measurements, ensuring absolute drape, structure, and movement comfort.",
    },
    {
      icon: <Compass size={22} className="text-brand-gold" />,
      title: "African-Inspired Sophistication",
      description: "We merge rich heritage print patterns and cultural identifiers with sharp, modern silhouettes, presenting modern African identity with clean fashion-house levels.",
    },
    {
      icon: <UserCheck size={22} className="text-brand-gold" />,
      title: "One-on-One Collaboration",
      description: "You work directly with a creative tailoring consultant. We sketch design directions, analyze fabric drapes, and curate accents specifically to fit your vision.",
    },
    {
      icon: <Award size={22} className="text-brand-gold" />,
      title: "Bespoke Craftsmanship",
      description: "Our clothing is handcrafted. From invisible zippers to custom structured linings and hand-beaded details, every stitch is executed with attention to detail.",
    },
    {
      icon: <Star size={22} className="text-brand-gold" />,
      title: "Occasion-Specific Execution",
      description: "A matric dance, a wedding, a gala night, or a Lobola set require specific styling rules. We align fabrics and structure to match the formality and theme of your event.",
    },
    {
      icon: <ShieldAlert size={22} className="text-brand-gold" />,
      title: "Exclusivity Guaranteed",
      description: "We do not mass produce. Every custom item we design is unique to the wearer. You will walk into the room knowing your garment cannot be purchased off a shelf.",
    },
  ];

  return (
    <section className="py-20 bg-brand-bg-secondary/45 border-t border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <SectionHeader
          title="What Defines Ntombis Fashion"
          subtitle="Our Standards"
          description="We do not compromise on fabric quality, structural integrity, or identity. Here is why clients trust us with their milestone moments."
        />

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-brand-bg border border-brand-gold/15 p-8 flex flex-col items-start hover:border-brand-gold transition-colors duration-500 shadow-sm"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-full border border-brand-gold/20 flex items-center justify-center mb-6 bg-brand-bg-secondary/40 shrink-0">
                {item.icon}
              </div>

              <h3 className="font-serif text-xl font-medium text-brand-black mb-3">
                {item.title}
              </h3>
              
              <p className="font-sans text-brand-muted text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
