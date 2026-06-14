import React, { useState, useEffect } from "react";
import { X, Search } from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader";
import ImageCard from "../components/ui/ImageCard";
import { galleryItems, type GalleryItem } from "../data/gallery";

type FilterType = "all" | "wedding" | "traditional" | "matric-dance" | "suits" | "event-wear";

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    document.title = "Our Gallery | NTB Fashions";
  }, []);

  // Filter items
  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const filters: { label: string; value: FilterType }[] = [
    { label: "All Works", value: "all" },
    { label: "Wedding Attire", value: "wedding" },
    { label: "Traditional Wear", value: "traditional" },
    { label: "Matric Dance", value: "matric-dance" },
    { label: "Bespoke Suits", value: "suits" },
    { label: "Event Dresses", value: "event-wear" },
  ];

  return (
    <div className="pt-24 bg-brand-bg min-h-screen">
      {/* Editorial Header */}
      <section className="py-16 border-b border-brand-gold/10 bg-brand-bg-secondary/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeader
            title="Bespoke Portfolio"
            subtitle="Proof of Craftsmanship"
            description="Explore our gallery of actual client commissions, wedding attire, traditional ceremony sets, and custom gowns designed in our South African workshop."
            align="left"
            className="!mb-0"
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-start gap-3 md:gap-4 mb-12 border-b border-brand-gold/10 pb-6">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`font-sans text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] px-4 py-2.5 border transition-all duration-300 cursor-pointer ${
                  activeFilter === f.value
                    ? "bg-brand-black border-brand-black text-brand-bg"
                    : "bg-transparent border-brand-gold/25 text-brand-text hover:border-brand-gold"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="border border-brand-gold/15 p-2 bg-brand-bg hover:shadow-lg hover:border-brand-gold/40 transition-all duration-300 animate-fade-in-simple"
              >
                <div className="relative group">
                  <ImageCard
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    subtitle={item.category.replace("-", " ")}
                    aspectRatio="portrait"
                    onClick={() => setSelectedItem(item)}
                  />
                  {/* Floating Magnifier Trigger */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-brand-black/40 border border-brand-bg/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <Search size={12} className="text-brand-bg" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif italic text-lg text-brand-muted">
                No designs found in this category. Check back soon for updates.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox zoom modal component */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Dimmer */}
          <div
            className="absolute inset-0 bg-brand-black/90 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          />

          {/* Close trigger */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 p-2 text-brand-bg-secondary cursor-pointer hover:text-brand-gold transition-colors z-50"
            aria-label="Close image lightbox"
          >
            <X size={28} />
          </button>

          {/* Modal Content */}
          <div className="relative max-w-4xl max-h-[90vh] bg-brand-black border border-brand-gold/30 p-2 overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 animate-fade-in-simple">
            {/* Image display */}
            <div className="md:w-7/12 flex items-center justify-center bg-[#0d0d0d] overflow-hidden max-h-[50vh] md:max-h-[80vh]">
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="w-full h-full object-contain max-h-[50vh] md:max-h-[80vh]"
              />
            </div>

            {/* Description side */}
            <div className="md:w-5/12 p-6 md:p-8 bg-brand-black text-brand-bg-secondary flex flex-col justify-between items-start">
              <div>
                <span className="font-sans text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] block mb-2">
                  {selectedItem.category.replace("-", " ")}
                </span>
                
                <h3 className="font-serif text-2xl text-brand-bg-secondary mb-4">
                  {selectedItem.title}
                </h3>
                
                <div className="w-12 h-[1px] bg-brand-gold/40 mb-4" />
                
                <p className="font-sans text-brand-bg-secondary/70 text-xs md:text-sm leading-relaxed mb-6">
                  {selectedItem.description}
                </p>
              </div>

              <div className="w-full pt-4 border-t border-brand-bg-secondary/15 flex flex-col gap-3">
                <p className="font-sans text-[10px] text-brand-bg-secondary/55">
                  Interested in a similar bespoke garment? Book a design call.
                </p>
                <a
                  href={`https://wa.me/27000000000?text=Hi%20Ntombis%20Fashions,%20I'd%20like%20to%20enquire%20about%20the%20style:%20${encodeURIComponent(selectedItem.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center inline-flex items-center justify-center gap-2 font-sans uppercase text-[10px] font-bold tracking-[0.2em] py-3.5 border border-brand-gold text-brand-gold bg-transparent hover:bg-brand-gold hover:text-brand-black transition-colors"
                >
                  Enquire About Style
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
