import React, { useEffect } from "react";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";

export const Process: React.FC = () => {
  useEffect(() => {
    document.title = "Our Custom Process | NTB Fashions";
  }, []);

  const detailedSteps = [
    {
      num: "01",
      title: "Start with a Conversation",
      desc: "We schedule an initial 60-minute meeting (in-studio or virtual) to introduce ourselves. We chat about your personality, visual inspirations, and basic styling ideas. There is no pressure at this stage—just pure creative exchange.",
    },
    {
      num: "02",
      title: "Define the Occasion",
      desc: "Every event has a specific energy and code. We analyze the setting of your occasion—whether it is a formal wedding, a high-exposure matric dance, a traditional ceremony, or a red carpet event—to establish the design parameters.",
    },
    {
      num: "03",
      title: "Choose Style Direction",
      desc: "We refine your references into concrete design paths. We provide quick sketch configurations detailing collar styles, silhouettes, slits, lapels, and trains, aligning on a blueprint that matches your body profile.",
    },
    {
      num: "04",
      title: "Measurements",
      desc: "We take a comprehensive set of measurements (up to 30 body data points) to draft a unique body pattern. If you are remote, we guide you or your local tailor through our measurement checklist.",
    },
    {
      num: "05",
      title: "Fabric & Detailing",
      desc: "We source fabrics from premium merchants. You select from textured linen, heavy wool blends, structured satins, delicate silks, or traditional African pattern textiles, alongside lining textures and custom beadwork details.",
    },
    {
      num: "06",
      title: "Production",
      desc: "Your chosen fabric enters our South African studio. The master pattern is cut, interlinings are structured, and our master tailors begin sewing. We build in specific structural supports for stability and silhouette definition.",
    },
    {
      num: "07",
      title: "Fitting & Refinement",
      desc: "You attend 1 to 2 fitting sessions. We inspect the drape, make fine adjustments to seams, hem lengths, and collar placement, pinning and stitching details until the fit is completely perfected.",
    },
    {
      num: "08",
      title: "Final Delivery",
      desc: "The completed garment is pressed, steamed, and packaged in our signature garment bag. We conduct a final detail check and hand over your bespoke masterpiece, ready to be worn for your unforgettable moment.",
    },
  ];

  return (
    <div className="pt-24 bg-brand-bg min-h-screen">
      {/* Editorial Header */}
      <section className="py-16 border-b border-brand-gold/10 bg-brand-bg-secondary/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeader
            title="The Art of Custom Tailoring"
            subtitle="Our Custom Process"
            description="From initial sketch to the final steam, learn how we craft garments tailored exclusively around you."
            align="left"
            className="!mb-0"
          />
        </div>
      </section>

      {/* 8-Step Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {detailedSteps.map((step) => (
              <div
                key={step.num}
                className="flex items-start gap-6 bg-brand-bg border border-brand-gold/15 p-8 shadow-sm hover:border-brand-gold hover:shadow-md transition-all duration-300"
              >
                {/* Number Accent */}
                <span className="font-serif text-3xl font-light text-brand-gold/60 shrink-0">
                  {step.num}
                </span>
                
                {/* Details */}
                <div className="flex flex-col">
                  <h3 className="font-serif text-xl font-medium text-brand-black mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-brand-muted text-xs md:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Critical Note */}
          <div className="mt-16 bg-brand-black text-brand-bg-secondary p-8 md:p-10 border border-brand-gold/25 relative overflow-hidden">
            {/* Background design texture */}
            <div className="absolute right-[-50px] bottom-[-50px] w-48 h-48 rounded-full border border-brand-gold/10 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="font-sans text-[10px] font-bold text-brand-gold uppercase tracking-wider block mb-2">
                  Important Notice
                </span>
                <p className="font-serif text-lg md:text-xl font-light leading-relaxed text-brand-bg-secondary/95">
                  “Because each garment is custom-made, timelines depend on garment complexity, fabric availability, and fitting requirements.”
                </p>
                <p className="font-sans text-xs text-brand-bg-secondary/60 mt-3">
                  We recommend booking wedding consultations 8-12 weeks in advance, and matric dance dresses 6-8 weeks in advance.
                </p>
              </div>

              <Button to="/contact" variant="gold" className="shrink-0 w-full md:w-auto">
                Request a Consultation
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Process;
