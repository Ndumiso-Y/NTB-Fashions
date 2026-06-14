import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  align = "center",
  className = "",
  light = false,
}) => {
  const isCenter = align === "center";
  
  return (
    <div
      className={`flex flex-col mb-12 md:mb-16 max-w-3xl ${
        isCenter ? "mx-auto text-center items-center" : "items-start text-left"
      } ${className}`}
    >
      {subtitle && (
        <span className="subtitle-editorial mb-3 animate-fade-in-simple">
          {subtitle}
        </span>
      )}
      
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight font-medium ${
          light ? "text-brand-bg" : "text-brand-black"
        }`}
      >
        {title}
      </h2>

      {/* Decorative luxury hairline accent */}
      <div
        className={`w-16 h-[2px] mt-5 mb-5 ${
          light ? "bg-brand-gold/40" : "bg-brand-gold/60"
        }`}
      />

      {description && (
        <p
          className={`font-sans text-sm md:text-base leading-relaxed ${
            light ? "text-brand-bg/75" : "text-brand-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
