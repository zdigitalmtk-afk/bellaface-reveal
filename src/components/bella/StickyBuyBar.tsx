import { useEffect, useState } from "react";
import { BuyButton } from "./BuyButton";
import { PRICE_LABEL, PRODUCT } from "@/lib/bella-face";

export function StickyBuyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 1.2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:flex sm:justify-between">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">{PRODUCT.name}</p>
          <p className="truncate text-xs text-muted-foreground">
            {PRICE_LABEL} · 30 g
          </p>
        </div>
        <BuyButton source="sticky_bar" className="shrink-0 px-5 py-2.5">
          Comprar agora
        </BuyButton>
      </div>
    </div>
  );
}
