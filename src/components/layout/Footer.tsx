import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { brandDetails } from "../../data/brand";
import { navigationItems } from "../../data/navigation";
import { collections } from "../../data/collections";
import LogoMark from "../ui/LogoMark";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-brand-bg-secondary pt-16 pb-8 border-t border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info Column */}
          <div className="flex flex-col gap-6">
            <LogoMark size={40} showText={true} light={true} />
            <p className="text-sm text-brand-bg-secondary/70 leading-relaxed font-sans mt-2">
              {brandDetails.brandStatement}
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href={brandDetails.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-brand-bg-secondary/15 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
                aria-label="Facebook Page"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-brand-bg-secondary/70 hover:text-brand-gold transition-colors duration-300 flex items-center gap-1 group font-sans"
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections Shortcuts */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Our Collections
            </h4>
            <ul className="flex flex-col gap-3">
              {collections.slice(0, 5).map((col) => (
                <li key={col.id}>
                  <Link
                    to={`/collections`}
                    className="text-sm text-brand-bg-secondary/70 hover:text-brand-gold transition-colors duration-300 font-sans"
                  >
                    {col.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact coordinates Column */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Contact & Studio
            </h4>
            <div className="flex flex-col gap-4 font-sans text-sm text-brand-bg-secondary/70">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-brand-gold/75 mb-1">WhatsApp</span>
                <a
                  href={brandDetails.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors duration-300"
                >
                  {brandDetails.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-brand-gold/75 mb-1">Email</span>
                <a
                  href={`mailto:${brandDetails.contact.email}`}
                  className="hover:text-brand-gold transition-colors duration-300 break-all"
                >
                  {brandDetails.contact.email}
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-brand-gold/75 mb-1">Location</span>
                <span>{brandDetails.contact.street}<br />{brandDetails.contact.city}, {brandDetails.contact.province}, {brandDetails.contact.postcode}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-brand-bg-secondary/10 w-full mb-8" />

        {/* Copyrights and Terms */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-bg-secondary/40 font-sans">
          <span>&copy; {new Date().getFullYear()} Ntombis Fashion. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <span className="hover:text-brand-gold transition-colors cursor-pointer">Bespoke Terms</span>
            <span className="hover:text-brand-gold transition-colors cursor-pointer">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
