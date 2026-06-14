import React from "react";

interface LogoMarkProps {
  className?: string;
  size?: number;
  showText?: boolean;
  light?: boolean;
}

export const LogoMark: React.FC<LogoMarkProps> = ({
  className = "",
  size = 40,
  showText = true,
  light = false,
}) => {
  const primaryColor = light ? "#F7F4EF" : "#050505";
  const accentColor = "#B08A45";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Premium Geometric Monogram Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 hover:rotate-180"
        aria-hidden="true"
      >
        {/* Outer Minimal Diamond (African beadwork inspired geometry) */}
        <path
          d="M50 5L95 50L50 95L5 50L50 5Z"
          stroke={primaryColor}
          strokeWidth="4"
          strokeLinejoin="miter"
        />
        {/* Inner Gold Diamond Accent */}
        <path
          d="M50 20L80 50L50 80L20 50L50 20Z"
          fill={accentColor}
          opacity="0.15"
        />
        {/* Central Geometric Intersecting Linework - forming NT/NB silhouette */}
        <path
          d="M35 30V70"
          stroke={primaryColor}
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path
          d="M65 30V70"
          stroke={primaryColor}
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path
          d="M35 30L65 70"
          stroke={primaryColor}
          strokeWidth="3"
          strokeLinecap="square"
        />
        <path
          d="M35 50H65"
          stroke={accentColor}
          strokeWidth="4"
          strokeLinecap="square"
        />
        {/* Top & Bottom Accent Dots */}
        <circle cx="50" cy="35" r="3" fill={primaryColor} />
        <circle cx="50" cy="65" r="3" fill={primaryColor} />
      </svg>

      {/* Brand Text Branding */}
      {showText && (
        <div className="flex flex-col items-start leading-none">
          <span
            className="font-serif font-bold text-lg tracking-[0.2em] transition-colors"
            style={{ color: primaryColor }}
          >
            NTB
          </span>
          <span
            className="font-sans text-[9px] font-semibold tracking-[0.35em] uppercase"
            style={{ color: accentColor }}
          >
            Fashions
          </span>
        </div>
      )}
    </div>
  );
};
export default LogoMark;
