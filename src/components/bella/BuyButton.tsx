import type { ReactNode } from "react";
import { CHECKOUT_URL, track } from "@/lib/bella-face";

type Props = {
  children: ReactNode;
  source: string;
  variant?: "solid" | "outline";
  className?: string;
  href?: string;
};

export function BuyButton({
  children,
  source,
  variant = "solid",
  className = "",
  href = CHECKOUT_URL,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-violet-deep"
      : "border border-violet/40 text-violet-deep hover:bg-secondary";

  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      onClick={() => track("cta_click", { source })}
    >
      {children}
    </a>
  );
}
