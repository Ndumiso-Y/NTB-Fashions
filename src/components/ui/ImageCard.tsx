import React from "react";

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  category?: string;
  aspectRatio?: "square" | "portrait" | "video" | "auto";
  onClick?: () => void;
  className?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  title,
  subtitle,
  category,
  aspectRatio = "portrait",
  onClick,
  className = "",
}) => {
  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    video: "aspect-video",
    auto: "h-full",
  };

  const isClickable = !!onClick;

  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden bg-brand-bg-secondary cursor-pointer ${
        aspectClasses[aspectRatio]
      } ${isClickable ? "pointer-events-auto" : ""} ${className}`}
    >
      {/* Zoom-on-hover background image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110"
      />

      {/* Subtle overlay layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Category Tag Overlay (Top Right) */}
      {category && (
        <span className="absolute top-4 right-4 bg-brand-black/40 text-brand-bg text-[9px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 backdrop-blur-md border border-brand-bg/10">
          {category}
        </span>
      )}

      {/* Text overlays (Bottom) */}
      {(title || subtitle) && (
        <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          {subtitle && (
            <span className="font-sans text-[10px] font-semibold text-brand-gold uppercase tracking-[0.2em] mb-1.5">
              {subtitle}
            </span>
          )}
          {title && (
            <h3 className="font-serif text-lg md:text-xl text-brand-bg leading-tight">
              {title}
            </h3>
          )}
          
          {/* Subtle gold line drawing out on hover */}
          <div className="w-0 group-hover:w-12 h-[1px] bg-brand-gold mt-3 transition-all duration-500" />
        </div>
      )}
    </div>
  );
};

export default ImageCard;
