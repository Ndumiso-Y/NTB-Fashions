import React, { useEffect } from "react";
import Hero from "../components/sections/Hero";
import SignatureCategories from "../components/sections/SignatureCategories";
import BrandStatement from "../components/sections/BrandStatement";
import GalleryPreview from "../components/sections/GalleryPreview";
import ProcessPreview from "../components/sections/ProcessPreview";
import OccasionCTA from "../components/sections/OccasionCTA";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import EcommerceTeaser from "../components/sections/EcommerceTeaser";
import FinalCTA from "../components/sections/FinalCTA";

export const Home: React.FC = () => {
  // Update document title for SEO
  useEffect(() => {
    document.title = "NTB Fashions | Bespoke African Fashion & Custom Event Wear";
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <BrandStatement />
      <SignatureCategories />
      <ProcessPreview />
      <OccasionCTA />
      <GalleryPreview />
      <WhyChooseUs />
      <EcommerceTeaser />
      <FinalCTA />
    </div>
  );
};

export default Home;
