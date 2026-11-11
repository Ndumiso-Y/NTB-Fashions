import React from "react";
import { ArrowLeft } from "lucide-react";
import Button from "../components/ui/Button";

export const NotFound: React.FC = () => {

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Editorial layout borders */}
      <div className="absolute inset-8 border border-brand-gold/15 pointer-events-none" />
      <div className="absolute inset-10 border border-brand-gold/5 pointer-events-none" />

      <div className="max-w-md mx-auto text-center flex flex-col items-center relative z-10">
        <span className="font-sans text-[11px] font-bold text-brand-gold uppercase tracking-[0.25em] mb-4">
          Error Code 404
        </span>

        <h1 className="font-serif text-6xl sm:text-7xl font-light italic text-brand-gold mb-6">
          Lost
        </h1>

        <h2 className="font-serif text-2xl text-brand-black mb-4">
          This Path Is Not Tailored
        </h2>

        <p className="font-sans text-brand-muted text-sm leading-relaxed mb-8">
          The page you are looking for does not exist or has been relocated. Let us guide you back to our primary collections.
        </p>

        <Button to="/" variant="primary" className="flex items-center gap-2">
          <ArrowLeft size={14} />
          Back to Homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
