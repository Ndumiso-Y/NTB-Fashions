import React, { useState } from "react";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import { garmentImages } from "../../data/images";

export const EcommerceTeaser: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please check your email formatting.");
      return;
    }

    setError("");
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 bg-brand-black text-brand-bg-secondary overflow-hidden border-t border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Visual Teaser side */}
        <div className="lg:col-span-5 relative h-[380px] md:h-[450px] overflow-hidden bg-brand-bg-secondary border border-brand-gold/25 p-2 shrink-0">
          <img
            src={garmentImages.maxhosa.src}
            alt="Ready-to-wear knit capsule teaser by NTB Fashions"
            loading="lazy"
            className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-[1000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="font-sans text-[9px] font-bold text-brand-gold uppercase tracking-[0.2em] block mb-2">
              Preview Release
            </span>
            <h4 className="font-serif text-lg text-brand-bg-secondary">
              Heritage Knitwear Capsule
            </h4>
          </div>
        </div>

        {/* Text and SignUp side */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-3 bg-brand-gold/10 px-3.5 py-1.5 border border-brand-gold/20 text-brand-gold">
            <Sparkles size={12} />
            <span className="font-sans text-[9px] font-bold uppercase tracking-widest leading-none">
              Future E-Commerce Expansion
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
            Ready-to-Wear & <br className="hidden sm:inline" />
            <span className="text-gradient-gold italic font-normal">Limited Drops</span> Coming Soon
          </h2>

          <p className="font-sans text-brand-bg-secondary/70 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            While our custom orders remain our primary core, we are designing a line of limited-edition ready-to-wear shirts, jackets, knitwear, and occasion accessories. Register for exclusive early access to drops.
          </p>

          {/* Controlled waitlist form */}
          <div className="w-full max-w-md">
            {isSubmitted ? (
              <div className="p-5 border border-brand-gold/30 bg-brand-gold/5 flex flex-col gap-2">
                <p className="font-serif text-lg text-brand-gold">You are on the waitlist.</p>
                <p className="font-sans text-xs text-brand-bg-secondary/60">
                  Thank you. We will send you notification details and previews before the capsule drops live.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold/60" size={16} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full font-sans text-sm bg-brand-bg-secondary/5 border border-brand-bg-secondary/15 py-4 pl-12 pr-4 text-brand-bg-secondary focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-bg-secondary/35"
                    />
                  </div>
                  <Button type="submit" variant="gold" className="group shrink-0 font-bold">
                    Join Waitlist
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                {error && (
                  <p className="font-sans text-xs text-rose-400 mt-1 pl-1">{error}</p>
                )}
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default EcommerceTeaser;
