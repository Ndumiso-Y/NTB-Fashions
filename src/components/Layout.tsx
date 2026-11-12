import React, { useState, useEffect, useRef } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { brand } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";

import { cn } from "@/lib/utils";
// Header wordmark. Owned copy of the transparent-background artwork, served
// from our own /public so the header makes no request to any external host.
const LOGO_TRANSPARENT_SRC = "/images/ntombis-logo-transparent.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu: while open it behaves like a modal overlay. Escape closes it,
  // focus moves into the menu, the page behind it is made inert (so keyboard
  // and screen-reader focus cannot land behind the overlay), background
  // scrolling is locked, and focus returns to the toggle on close.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const toggle = toggleRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const inertTargets = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    inertTargets.forEach((el) => el.setAttribute("inert", ""));
    menuRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      inertTargets.forEach((el) => el.removeAttribute("inert"));
      toggle?.focus();
    };
  }, [mobileMenuOpen]);


  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Collections", to: "/collections" },
    { name: "Process", to: "/process" },
    { name: "Gallery", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ];

  // Contrast (WCAG 1.4.3): on the home page the header overlays the hero, whose
  // artwork swings from a near-white studio backdrop to the near-black clothing
  // rails and garments that cross the header band on some video frames. Measured
  // over the poster and eleven frames spanning the loop, the dark-green nav text
  // drops to 1.03:1 on the right-hand links, where a rail or the black gown sits
  // behind them, so the header does need help. A full cream surface plus a
  // backdrop blur (the previous fix) supplied it but frosted the artwork and cost
  // the hero its impact. Instead the unscrolled header stays transparent and
  // unblurred and a cream gradient scrim fades out across the header band: it is
  // translucent, so the garments read through it undistorted, while lifting the
  // worst measured pixel behind the links to >= 4.5:1. Once scrolled, the header
  // takes the solid cream surface and contrast stops depending on the artwork.
  return (
    <nav
      aria-label="Main"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 text-brand-green",
        isScrolled
          ? "bg-brand-cream/95 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-4 lg:py-8",
      )}
    >
      {/* Contrast scrim for the transparent-over-hero state. Top-anchored and fully
          faded out by its own bottom edge, so it reads as light falling across the
          top of the artwork rather than as a bar: no blur, and the garments
          underneath keep their detail. Every interactive element in the header sits
          between 31% and 69% of the header's height at every breakpoint, so the
          gradient holds its plateau to 66% of 110% (= 73% of the header) and then
          falls away - long enough to cover the links, short enough that the haze
          is gone before the garments below the header. */}
      {isHome && !isScrolled && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[110%] bg-[linear-gradient(to_bottom,rgba(249,246,241,0.58)_0%,rgba(249,246,241,0.56)_66%,rgba(249,246,241,0.16)_85%,rgba(249,246,241,0)_100%)]"
        />
      )}
      {/* Skip link (WCAG 2.4.1). Hidden while the mobile menu is open because
          the page content behind the menu is inert at that point. */}
      {!mobileMenuOpen && (
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-brand-green focus:text-brand-cream focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-widest"
        >
          Skip to content
        </a>
      )}
      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="transition-opacity hover:opacity-90 block">
          <img 
            src={LOGO_TRANSPARENT_SRC}
            alt={brand.name} 
            className="w-32 sm:w-52 lg:w-64 xl:w-72 h-auto block relative z-50" 
          />
        </Link>

        {/* Desktop Nav - Breakpoint set to xl to prevent clipping on mid-size viewports like 819px */}
        <div className="hidden xl:flex items-center space-x-4 xl:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-xs uppercase tracking-widest font-medium hover:opacity-60 transition-all"
              activeProps={{ className: "border-b border-current" }}

            >
              {link.name}
            </Link>
          ))}
          <a
            href={brand.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_enquiry", { location: "nav_desktop" })}
            className="bg-brand-green text-brand-cream px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-brand-green/90 transition-all font-bold"
          >
            Consultation
          </a>
        </div>

        {/* Mobile/Tablet Toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="xl:hidden p-2 text-brand-green relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="fixed inset-0 z-40 bg-brand-cream xl:hidden pt-24 px-6 overflow-y-auto"
        >
          <div className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={closeMenu}
                className="text-2xl font-serif"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={brand.contact.whatsapp}
              onClick={() => {
                trackEvent("whatsapp_enquiry", { location: "nav_mobile" });
                closeMenu();
              }}
              className="bg-brand-green text-brand-cream py-4 text-sm uppercase tracking-widest"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-green text-brand-cream py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-brand-cream/10 pb-16">
        <div>
          <h3 className="text-2xl font-serif mb-6">{brand.name}</h3>
          <p className="text-brand-cream/70 max-w-xs text-sm leading-relaxed">
            {brand.fullName} creates custom garments for people who want to look distinct, feel confident, and carry their identity into every occasion.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-brand-cream/70">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/collections" className="hover:text-white transition-colors">Collections</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/process" className="hover:text-white transition-colors">The Process</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Consultations</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest mb-6">Connect</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-3 text-xs uppercase tracking-widest font-medium">
            <a
              href={brand.contact.socials.facebook}
              target="_blank"
              rel="noopener noreferrer me"
              className="text-brand-cream/80 hover:text-brand-cream transition-colors"
            >
              Facebook
            </a>
          </div>
          <p className="text-[10px] text-brand-cream/60 mb-8 tracking-widest uppercase">Instagram &amp; TikTok coming soon</p>
          <h4 className="text-[10px] text-brand-cream/60 mb-2 tracking-widest uppercase">Visit Us</h4>
          <p className="text-sm text-brand-cream/70 mb-2">
            {brand.contact.address}, {brand.contact.postalCode}
          </p>
          <ul className="text-sm text-brand-cream/70 mb-4 space-y-0.5">
            {brand.contact.hours.map((h) => (
              <li key={h.days}>
                {h.days}: {h.time}
              </li>
            ))}
          </ul>
          <p className="text-sm text-brand-cream/70 mb-1">
            <a
              href={`tel:${brand.contact.phone.replace(/\s+/g, '')}`}
              onClick={() => trackEvent("phone_enquiry", { location: "site_footer" })}
            >
              {brand.contact.phone}
            </a>
          </p>
          <p className="text-sm text-brand-cream/70">
            <a
              href={`mailto:${brand.contact.email}`}
              onClick={() => trackEvent("email_enquiry", { location: "site_footer" })}
            >
              {brand.contact.email}
            </a>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-[10px] uppercase tracking-[0.2em] text-brand-cream/60">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <p>&copy; {new Date().getFullYear()} {brand.fullName}. All rights reserved.</p>
          <span aria-hidden="true" className="opacity-40">&middot;</span>
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
        </div>
        <p>Custom African Fashion for Unforgettable Moments.</p>
      </div>
    </footer>
  );
}
