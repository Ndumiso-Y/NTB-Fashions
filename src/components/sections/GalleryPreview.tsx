import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ImageCard from "../ui/ImageCard";
import Button from "../ui/Button";
import { galleryItems } from "../../data/gallery";

export const GalleryPreview: React.FC = () => {
  // Take a structured selection of 6 images combining generated and actual photos
  const previewItems = [
    galleryItems.find((item) => item.id === "gal-hero"),
    galleryItems.find((item) => item.id === "gal-garment-couple1"),
    galleryItems.find((item) => item.id === "gal-garment-dress"),
    galleryItems.find((item) => item.id === "gal-trad-1"),
    galleryItems.find((item) => item.id === "gal-garment-matric2"),
    galleryItems.find((item) => item.id === "gal-wedding-1"),
  ].filter(Boolean); // Clean any undefined

  return (
    <section className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header with Left Alignment option */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            title="Bespoke Portfolio Preview"
            subtitle="Proof of Craftsmanship"
            description="A visual curation of recent custom pieces designed for clients, weddings, and premium cultural galas."
            align="left"
            className="!mb-0"
          />
          <div className="shrink-0">
            <Button to="/gallery" variant="secondary" className="w-full md:w-auto">
              View Full Gallery
            </Button>
          </div>
        </div>

        {/* Editorial Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {previewItems.map((item, index) => {
            // Apply different heights or spans on desktop for editorial variation
            const spanClass = 
              index === 0 ? "lg:col-span-2 lg:row-span-1" : 
              index === 3 ? "lg:col-span-1 lg:row-span-1" : "";
            
            const aspectType = 
              index === 0 ? "square" : 
              "portrait";

            if (!item) return null;

            return (
              <div 
                key={item.id} 
                className={`${spanClass} border border-brand-gold/10 p-2 bg-brand-bg-secondary/20 hover:border-brand-gold/40 transition-colors duration-500`}
              >
                <ImageCard
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  subtitle={item.category.replace("-", " ")}
                  aspectRatio={aspectType}
                  className="shadow-md"
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GalleryPreview;
