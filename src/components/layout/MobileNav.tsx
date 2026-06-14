import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, MessageSquare, Mail, MapPin } from "lucide-react";
import { navigationItems } from "../../data/navigation";
import { brandDetails } from "../../data/brand";
import LogoMark from "../ui/LogoMark";
import Button from "../ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Handle locking page scroll when mobile drawer is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex md:hidden">
      {/* Background Dimmer Backdrop */}
      <div
        className="absolute inset-0 bg-brand-black/45 backdrop-blur-md transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Slide-out Panel */}
      <div className="relative ml-auto w-full max-w-sm h-full bg-[#FAF8F5] border-l border-brand-gold/10 p-8 flex flex-col justify-between shadow-2xl animate-fade-in-simple">
        <div>
          {/* Header Area */}
          <div className="flex items-center justify-between mb-12">
            <LogoMark size={38} showText={true} />
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-brand-black cursor-pointer hover:text-brand-gold transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={onClose}
                  className={`font-serif text-2xl tracking-wide transition-colors duration-300 ${
                    isActive ? "text-brand-gold" : "text-brand-black"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Info Area */}
        <div className="flex flex-col gap-8">
          <div className="h-[1px] bg-brand-gold/15" />

          {/* Consultation and Contact actions */}
          <div className="flex flex-col gap-3">
            <Button to="/contact" variant="primary" onClick={onClose} className="w-full">
              Book Consultation
            </Button>
            <a
              href={brandDetails.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-sans uppercase text-[10px] font-bold tracking-[0.2em] py-3.5 border border-emerald-600/30 text-emerald-700 bg-emerald-50/20 hover:bg-emerald-50/50 transition-colors"
            >
              <MessageSquare size={16} />
              WhatsApp Us
            </a>
          </div>

          {/* Core Info details */}
          <div className="flex flex-col gap-3 text-xs text-brand-muted">
            <div className="flex items-center gap-3">
              <Mail size={14} className="text-brand-gold" />
              <span>{brandDetails.contact.emailPlaceholder}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={14} className="text-brand-gold" />
              <span>{brandDetails.contact.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
