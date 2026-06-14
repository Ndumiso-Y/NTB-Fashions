import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ImageCard from "../ui/ImageCard";
import Button from "../ui/Button";
import { generatedImages, garmentImages } from "../../data/images";

interface CategoryCard {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const SignatureCategories: React.FC = () => {
  const categories: CategoryCard[] = [
    {
      id: "wedding-attire",
      title: "Wedding Attire",
      description: "Tailored wedding looks shaped around presence, fit, and cultural detail.",
      image: garmentImages.groomBride2.src,
      alt: garmentImages.groomBride2.alt,
    },
    {
      id: "matric-dance",
      title: "Matric Dance Dresses",
      description: "Statement dresses made for confidence, memory, and a once-in-a-lifetime entrance.",
      image: generatedImages.matricDance.src,
      alt: generatedImages.matricDance.alt,
    },
    {
      id: "traditional-wear",
      title: "Traditional Wear",
      description: "Modern traditional garments that carry heritage with refinement.",
      image: generatedImages.traditionalWear.src,
      alt: generatedImages.traditionalWear.alt,
    },
    {
      id: "custom-suits",
      title: "Custom Suits",
      description: "Sharp bespoke suits designed for formal moments, weddings, and professional presence.",
      image: generatedImages.weddingGroom.src,
      alt: generatedImages.weddingGroom.alt,
    },
    {
      id: "event-dresses",
      title: "Event Dresses",
      description: "Elegant custom dresses made for galas, red carpets, and special occasions.",
      image: garmentImages.dress.src,
      alt: garmentImages.dress.alt,
    },
    {
      id: "his-hers-sets",
      title: "His & Hers Sets",
      description: "Coordinated custom looks for couples, ceremonies, and meaningful celebrations.",
      image: garmentImages.traditionalHisHersSet.src,
      alt: garmentImages.traditionalHisHersSet.alt,
    },
  ];

  return (
    <section className="py-20 bg-brand-bg-secondary/40 border-t border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeader
          title="Signature Bespoke Offerings"
          subtitle="Our Creations"
          description="We do not follow trends; we craft garments that mark pivotal moments in your life. Explore our custom specialties."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col bg-brand-bg border border-brand-gold/15 p-4 hover:shadow-xl transition-all duration-500 group"
            >
              {/* Image Card Element */}
              <div className="overflow-hidden mb-6">
                <ImageCard
                  src={cat.image}
                  alt={cat.alt}
                  aspectRatio="portrait"
                />
              </div>

              {/* Title & Description Details */}
              <div className="flex flex-col flex-grow px-2 pb-2">
                <h3 className="font-serif text-xl text-brand-black mb-2.5 group-hover:text-brand-gold transition-colors">
                  {cat.title}
                </h3>
                <p className="font-sans text-brand-muted text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                  {cat.description}
                </p>
                <div className="pt-2">
                  <Button
                    to="/contact"
                    variant="outline"
                    className="w-full !py-3 !text-[9px] tracking-[0.15em] hover:bg-brand-black hover:text-brand-bg hover:border-brand-black"
                  >
                    Enquire About This
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="text-center mt-12">
          <Button to="/collections" variant="secondary">
            Explore All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignatureCategories;
