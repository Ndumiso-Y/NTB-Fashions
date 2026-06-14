import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { processSteps } from "../../data/processSteps";

export const ProcessPreview: React.FC = () => {
  // Take first 4 steps for home page preview, or show all 5. Let's show all 5 as a timeline.
  return (
    <section className="py-20 bg-brand-bg-secondary/25 border-t border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <SectionHeader
          title="The Custom Design Experience"
          subtitle="How It Works"
          description="Creating a custom garment is a collaborative process. We guide you through each stage to ensure your piece is tailored to perfection."
        />

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 relative mb-12">
          {processSteps.map((step, index) => {
            const isLast = index === processSteps.length - 1;
            
            return (
              <div key={step.number} className="relative flex flex-col items-start bg-brand-bg border border-brand-gold/15 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                {/* Number Badge */}
                <div className="w-10 h-10 rounded-full bg-brand-black text-brand-bg flex items-center justify-center font-serif font-bold text-sm mb-6 border border-brand-gold/25">
                  0{step.number}
                </div>

                {/* Connecting arrow (desktop only) */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-[44px] -right-[12px] translate-x-0.5 z-20 text-brand-gold/40">
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </div>
                )}

                <h3 className="font-serif text-lg font-medium text-brand-black mb-3">
                  {step.title}
                </h3>
                
                <p className="font-sans text-brand-muted text-xs md:text-sm leading-relaxed mb-4 flex-grow">
                  {step.shortDescription}
                </p>

                <span className="font-sans text-[10px] font-bold text-brand-gold uppercase tracking-wider block mt-auto pt-2 border-t border-brand-gold/10 w-full">
                  {step.timelineEstimate}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer link to full process page */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 bg-brand-bg border border-brand-gold/20 p-6 max-w-2xl mx-auto text-center md:text-left">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold shrink-0">
            <Sparkles size={20} />
          </div>
          <p className="font-sans text-xs md:text-sm text-brand-muted flex-grow">
            Timelines depend on garment complexity and fitting schedules. Need more details on fabric selection or measurements?
          </p>
          <Button to="/process" variant="outline" className="!py-2.5 !px-5 !text-[9px] shrink-0">
            Read Full Process
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ProcessPreview;
