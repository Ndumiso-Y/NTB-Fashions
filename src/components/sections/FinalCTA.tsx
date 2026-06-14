import React from "react";
import { MessageSquare, Calendar } from "lucide-react";
import { brandDetails } from "../../data/brand";
import Button from "../ui/Button";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-brand-bg-secondary relative overflow-hidden border-t border-brand-gold/10">
      {/* Editorial backdrop circles */}
      <div className="absolute right-[-10%] bottom-[-20%] w-[400px] h-[400px] rounded-full border border-brand-gold/5 pointer-events-none" />
      <div className="absolute left-[-10%] top-[-20%] w-[300px] h-[300px] rounded-full border border-brand-gold/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
        <span className="subtitle-editorial mb-4">
          Begin Your Consultation
        </span>
        
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-brand-black mb-6">
          Start Your <span className="text-gradient-gold italic font-normal">Custom Garment</span> Journey
        </h2>
        
        <p className="font-sans text-brand-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-10">
          Whether you have a fully formed concept or need design guidance, we are ready to assist. Secure an appointment at our studio or initiate a WhatsApp discussion.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <Button to="/contact" variant="primary" className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Calendar size={15} />
            Book Consultation
          </Button>
          
          <a
            href={brandDetails.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-sans uppercase text-xs font-semibold tracking-[0.2em] px-8 py-4 border border-brand-black text-brand-black bg-transparent hover:bg-brand-black hover:text-brand-bg transition-all duration-500 cursor-pointer select-none active:scale-[0.98]"
          >
            <MessageSquare size={15} />
            WhatsApp Enquiry
          </a>
        </div>

        <p className="font-sans text-[11px] text-brand-muted/75 mt-8">
          Initial consultations are 60 minutes and can be conducted in-studio or online.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
