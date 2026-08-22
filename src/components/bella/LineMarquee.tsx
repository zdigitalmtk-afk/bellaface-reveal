import { useState } from "react";
import { LINE, track } from "@/lib/bella-face";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function Card({ item }: { item: (typeof LINE)[number] }) {
  return (
    <article className="w-[248px] shrink-0 snap-center rounded-sm bg-mist p-6 transition-transform duration-500 hover:scale-[1.04] sm:w-[300px]">
      <img
        src={item.image}
        alt={item.alt}
        width={300}
        height={360}
        loading="lazy"
        decoding="async"
        className="mx-auto h-56 w-auto object-contain sm:h-72"
      />
      <h3 className="mt-6 text-xl text-ink">{item.name}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
    </article>
  );
}

export function LineMarquee() {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);

  if (reduced) {
    return (
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {LINE.map((item) => (
          <Card key={item.name} item={item} />
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Mobile: faixa arrastável com scroll-snap */}
      <div
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:hidden"
        tabIndex={0}
        role="region"
        aria-label="Linha Bella Face"
        onScroll={() => track("carousel_interaction", { mode: "swipe" })}
      >
        {LINE.map((item) => (
          <Card key={item.name} item={item} />
        ))}
      </div>
      <p className="px-6 text-xs text-muted-foreground md:hidden">
        Deslize para conhecer a linha
      </p>

      {/* Desktop: faixa em movimento lento */}
      <div
        className="hidden overflow-hidden md:block"
        onMouseEnter={() => {
          setPaused(true);
          track("carousel_interaction", { mode: "hover" });
        }}
        onMouseLeave={() => setPaused(false)}
      >
        <ul
          className="marquee-track flex w-max gap-5"
          style={paused ? { animationPlayState: "paused" } : undefined}
        >
          {[...LINE, ...LINE].map((item, i) => (
            <li key={`${item.name}-${i}`} aria-hidden={i >= LINE.length}>
              <Card item={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
