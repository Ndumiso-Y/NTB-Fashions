import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigationItems } from "../../data/navigation";
import LogoMark from "../ui/LogoMark";
import Button from "../ui/Button";
import MobileNav from "./MobileNav";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event to add background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "glass-premium border-b border-brand-gold/15 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo Brand area */}
          <Link to="/" aria-label="Go to homepage">
            <LogoMark size={44} />
          </Link>

          {/* Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`font-sans text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 relative py-1 cursor-pointer hover:text-brand-gold ${
                    isActive ? "text-brand-gold" : "text-brand-text/80"
                  }`}
                >
                  {item.label}
                  {/* Subtle underline for active link */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-gold animate-fade-in-simple" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Action button (Desktop) */}
          <div className="hidden md:block">
            <Button
              to="/contact"
              variant="primary"
              className="!py-2.5 !px-5 !text-[10px] tracking-[0.15em]"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile hamburger menu trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-brand-black cursor-pointer hover:text-brand-gold transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Render Mobile Navigation overlay drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;
