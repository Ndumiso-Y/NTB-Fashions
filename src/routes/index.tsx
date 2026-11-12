import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/Layout";
import { brand, categories } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { imageSrc, imageSrcSet, images } from "@/lib/image-manifest";
import { pageHead } from "@/lib/seo";
import { trackEvent } from "@/lib/analytics";

// Hero media lives in /public/media (owned hosting). Desktop and mobile are
// different compositions (16:9 vs 9:16), so each has its own poster + video.
const HERO_BREAKPOINT = "(min-width: 640px)"; // matches Tailwind `sm:`
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const hero = {
  desktop: { video: "/media/hero-desktop.mp4", poster: "/media/hero-desktop-poster.webp", width: 1672, height: 941 },
  mobile: { video: "/media/hero-mobile.mp4", poster: "/media/hero-mobile-poster.webp", width: 941, height: 1672 },
};

/**
 * Hero background: a `<picture>` poster (only the matching breakpoint's source is
 * fetched) under a single `<video>` whose source is assigned on the client after
 * hydration based on the same media query. The server never emits a video `src`,
 * so the browser cannot start downloading the wrong breakpoint's file, and a
 * `display:none` sibling video (which browsers still fetch) no longer exists.
 *
 * Accessibility: when the visitor prefers reduced motion the looping video is
 * never loaded or played; the static poster (same composition) stays in place.
 */
function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const mq = window.matchMedia(HERO_BREAKPOINT);
    const motionMq = window.matchMedia(REDUCED_MOTION);

    const apply = () => {
      if (motionMq.matches) {
        if (video.hasAttribute("src")) {
          video.pause();
          video.removeAttribute("src");
          video.load();
        }
        return;
      }
      const next = mq.matches ? hero.desktop.video : hero.mobile.video;
      if (video.getAttribute("src") === next) return;
      video.setAttribute("src", next);
      video.load();
      video.play().catch(() => {
        /* Autoplay may be blocked; the poster stays visible. */
      });
    };

    apply();
    mq.addEventListener("change", apply);
    motionMq.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      motionMq.removeEventListener("change", apply);
    };
  }, []);

  return (
    <div className="relative w-full aspect-[941/1672] sm:aspect-[1672/941]">
      <picture>
        <source media={HERO_BREAKPOINT} srcSet={hero.desktop.poster} width={hero.desktop.width} height={hero.desktop.height} />
        <img
          src={hero.mobile.poster}
          width={hero.mobile.width}
          height={hero.mobile.height}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
  head: () =>
    pageHead({
      path: "/",
      title: "Ntombis Fashion | Custom African Fashion & Event Wear, Rustenburg",
      description:
        "Tailor made wedding attire, matric dance dresses, traditional wear, suits and event dresses, made around you at the Ntombis Fashion studio in Rustenburg, North West.",
    }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main id="main-content">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-brand-cream animate-fade-in">
        <div className="relative w-full">
          {/* Main Hero Artwork - Video background with static fallback */}
          <div className="w-full relative">
            <HeroMedia />
          </div>

          {/* Text Overlay - Positioned relative to the artwork's intentional negative space.
              The artwork swaps from the 9:16 mobile composition to the 16:9 desktop one at `sm`
              (640px), so the text composition switches at `sm` too. It used to switch at `md`
              (768px), which left 640-767px running the centred mobile text layout on top of the
              desktop artwork - straight over the garment rail, where the dark-green type measured
              1.07:1 against the poster and dropped below 4.5:1 across roughly a third of the
              headline's area. Aligning the two breakpoints puts the text back in the negative
              space the artwork reserves for it. Only the horizontal placement and type scale
              move to `sm`; the vertical rhythm and the call-to-action arrangement stay on `md`,
              because the 16:9 hero is only ~360-430px tall at 640-767px and the centred desktop
              stack would start behind the header there.
              From `sm` up the block cancels `container-custom`'s horizontal padding so it sits
              flush with the container's outer edge; the negative margins must therefore mirror
              that padding exactly (px-6 -> -ml-6, lg:px-12 -> lg:-ml-12). Overshooting pushes the
              headline past the viewport edge, where the section's `overflow-hidden` clips it. */}
          <div className="absolute inset-0 z-20 flex md:items-center items-start pt-[25%] sm:pt-[22%] md:pt-8">
            <div className="container-custom w-full">
              <div className="w-[90%] sm:w-[42%] mx-auto sm:-ml-6 lg:-ml-12 md:-translate-y-[5%] text-center sm:text-left flex flex-col items-center sm:items-start">
                <span className="text-[clamp(9px,2.5vw,11px)] sm:text-[clamp(8px,1vw,11px)] tracking-[0.8em] uppercase mb-[4%] sm:mb-[2%] block font-medium text-brand-green/80">
                  AFRICAN-INSPIRED <br className="sm:hidden" /> TAILOR MADE EVENT WEAR
                </span>
                <h1 className="text-[clamp(36px,9vw,82px)] sm:text-[clamp(32px,5.2vw,82px)] mb-[4%] leading-[0.9] text-brand-green font-serif tracking-tight">
                  Tailor made <br /> Masterpieces
                </h1>
                <p className="max-w-full sm:max-w-[85%] text-[clamp(14px,3.5vw,18px)] sm:text-[clamp(12px,1.2vw,18px)] text-brand-green/90 mb-[8%] sm:mb-[6%] leading-relaxed font-medium tracking-tight">
                  {brand.fullName} crafts unique wedding attire, matric dance dresses, and traditional wear designed around your story.
                </p>
                <div className="hidden md:flex flex-col sm:flex-row items-center gap-[5%] w-full sm:w-auto">
                  <a
                    href={brand.contact.whatsapp}
                    onClick={() => {
                      trackEvent("primary_cta_click", { location: "hero_desktop", cta: "book_consultation" });
                      trackEvent("whatsapp_enquiry", { location: "hero_desktop" });
                    }}
                    className="bg-brand-green text-brand-cream px-[8%] py-[4%] sm:py-[3%] uppercase tracking-[0.2em] text-[clamp(10px,2vw,10px)] sm:text-[clamp(8px,0.7vw,10px)] hover:bg-brand-green/90 transition-all transform hover:-translate-y-1 w-full sm:w-auto text-center font-bold shadow-2xl mb-4 sm:mb-0"
                  >
                    Book Consultation
                  </a>
                  <a
                    href="/collections"
                    onClick={() => trackEvent("primary_cta_click", { location: "hero_desktop", cta: "view_collections" })}
                    className="group flex items-center space-x-3 text-[clamp(10px,2vw,10px)] md:text-[clamp(8px,0.7vw,10px)] uppercase tracking-[0.2em] font-bold text-brand-green border-b-2 border-brand-green/20 hover:border-brand-green transition-all pb-1 whitespace-nowrap mt-4 sm:mt-0"
                  >
                    <span>View Collections</span>
                    <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle Ambient Lighting (Non-distorting) */}
          <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-brand-green/5 mix-blend-multiply"></div>
          </div>
        </div>
        
        {/* Mobile Action Buttons - Positioned below video to prevent overlap */}
        <div className="flex md:hidden flex-col items-center gap-6 w-full px-6 py-8 bg-brand-cream relative z-20 shadow-[0_-20px_40px_-15px_rgba(250,246,240,1)]">
          <a
            href={brand.contact.whatsapp}
            onClick={() => {
              trackEvent("primary_cta_click", { location: "hero_mobile", cta: "book_consultation" });
              trackEvent("whatsapp_enquiry", { location: "hero_mobile" });
            }}
            className="bg-brand-green text-brand-cream px-[8%] py-[4%] uppercase tracking-[0.2em] text-[clamp(10px,2vw,10px)] hover:bg-brand-green/90 transition-all transform hover:-translate-y-1 w-full text-center font-bold shadow-2xl"
          >
            Book Consultation
          </a>
          <a
            href="/collections"
            onClick={() => trackEvent("primary_cta_click", { location: "hero_mobile", cta: "view_collections" })}
            className="group flex items-center space-x-3 text-[clamp(10px,2vw,10px)] uppercase tracking-[0.2em] font-bold text-brand-green border-b-2 border-brand-green/20 hover:border-brand-green transition-all pb-1 whitespace-nowrap"
          >
            <span>View Collections</span>
            <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-24 md:py-32 container-custom">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl mb-8 leading-tight">
            Not off the shelf. <br /> Made around you.
          </h2>
          <p className="text-xl md:text-2xl text-brand-green/80 font-light leading-relaxed mb-12">
            Every NTB garment begins with the person, the occasion, and the story behind it. From cultural ceremonies to once-in-a-lifetime celebrations, we design pieces that feel personal, refined, and unforgettable.
          </p>
          <div className="h-px w-24 bg-brand-green/20"></div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="pb-32 container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {categories.map((cat) => (
            <div key={cat.id} className="group">
              <div className="aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={imageSrc(cat.image)}
                  srcSet={imageSrcSet(cat.image)}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  width={images[cat.image].width}
                  height={images[cat.image].height}
                  alt={cat.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl mb-2">{cat.name}</h3>
              <p className="text-brand-green/70 text-sm mb-6 leading-relaxed">
                {cat.description}
              </p>
              <a 
                href="/contact" 
                className="inline-block text-[10px] uppercase tracking-[0.2em] border-b border-brand-green/20 pb-1 hover:border-brand-green transition-colors"
              >
                {cat.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Process Teaser */}
      <section className="bg-white py-32">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs tracking-widest uppercase mb-4 block text-brand-green/70">OUR CRAFT</span>
            <h2 className="text-4xl md:text-5xl mb-8">Why Ntombis Fashion</h2>
            <p className="text-lg text-brand-green/80 mb-8 leading-relaxed">
              Because the right garment should not only fit your body. It should fit the occasion, the culture, and the confidence you want to carry into the room.
            </p>
            <a
              href="/process"
              onClick={() => trackEvent("process_cta_click", { location: "home_craft" })}
              className="bg-brand-green text-brand-cream px-8 py-4 uppercase tracking-widest text-sm inline-block"
            >
              Learn Our Process
            </a>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-brand-cream">
              <img
                src={imageSrc("mens-asymmetric-print-two-piece-home")}
                srcSet={imageSrcSet("mens-asymmetric-print-two-piece-home")}
                sizes="(min-width: 1024px) 50vw, 100vw"
                width={images["mens-asymmetric-print-two-piece-home"].width}
                height={images["mens-asymmetric-print-two-piece-home"].height}
                alt="Men's two-piece set with an asymmetric white and navy-and-gold circular print shirt and matching trousers"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-2/3 aspect-square bg-brand-cream p-4 hidden md:block">
              <img
                src={imageSrc("emerald-lace-gown-floral-tulle-skirt")}
                srcSet={imageSrcSet("emerald-lace-gown-floral-tulle-skirt")}
                sizes="(min-width: 1024px) 33vw, 50vw"
                width={images["emerald-lace-gown-floral-tulle-skirt"].width}
                height={images["emerald-lace-gown-floral-tulle-skirt"].height}
                alt="Emerald green beaded lace gown with a one-shoulder ruffle, floral tiered skirt and tulle hem"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 container-custom text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl mb-8">Start Your Custom Garment Journey</h2>
          <p className="text-brand-green/70 mb-10 leading-relaxed">
            Tell us about the occasion, the garment, and the feeling you want to create. We will guide the next step from there.
          </p>
          <a
            href={brand.contact.whatsapp}
            onClick={() => {
              trackEvent("primary_cta_click", { location: "home_final", cta: "request_consultation" });
              trackEvent("whatsapp_enquiry", { location: "home_final" });
            }}
            className="bg-brand-green text-brand-cream px-12 py-5 uppercase tracking-[0.2em] text-sm hover:bg-brand-green/90 transition-all inline-block"
          >
            Request a Consultation
          </a>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
