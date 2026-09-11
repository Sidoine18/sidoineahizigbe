import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
  className?: string;
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  icon = true,
  type = "button",
  disabled,
  external,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors duration-200 border";

  const styles: Record<string, string> = {
    primary: "bg-signal border-signal text-white hover:bg-signal/90",
    secondary: "bg-transparent border-line text-ink hover:border-signal hover:text-signal",
    ghost: "bg-transparent border-transparent text-mute hover:text-ink px-0",
  };

  const classes = `${base} ${styles[variant]} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight size={15} className="shrink-0" />}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
