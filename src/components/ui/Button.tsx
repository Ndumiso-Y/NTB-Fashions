import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "gold";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}) => {
  // Base classes for luxury appearance, smooth scaling, letter spacing, and hover state
  const baseClasses =
    "inline-flex items-center justify-center font-sans uppercase text-xs font-semibold tracking-[0.2em] px-8 py-4 border transition-all duration-500 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

  // Variant styling map
  const variantClasses = {
    primary:
      "bg-brand-black border-brand-black text-brand-bg hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black",
    secondary:
      "bg-transparent border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-bg",
    outline:
      "bg-transparent border-brand-gold/40 text-brand-text hover:border-brand-gold hover:bg-brand-gold/5",
    gold:
      "bg-brand-gold border-brand-gold text-brand-black hover:bg-brand-black hover:border-brand-black hover:text-brand-bg",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default Button;
