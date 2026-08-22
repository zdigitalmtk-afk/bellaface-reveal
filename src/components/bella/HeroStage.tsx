import { useEffect, useRef, useState } from "react";
import { BuyButton } from "./BuyButton";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { CONCERNS, PRICE_LABEL, PRODUCT, track } from "@/lib/bella-face";

/** Interpolação linear com clamp por faixa de progresso. */
function seg(p: number, from: number, to: number) {
  if (p <= from) return 0;
  if (p >= to) return 1;
  return (p - from) / (to - from);
}

const ORB_POSITIONS = [
  "left-[4%] top-[18%] md:left-[6%] md:top-[16%]",
  "right-[4%] top-[38%] md:right-[7%] md:top-[30%]",
  "left-[8%] bottom-[16%] md:left-[12%] md:bottom-[14%]",
];

export function HeroStage() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const reduced = useReducedMotion();
  const seen = useRef(false);

  useEffect(() => {
    track("hero_view");
    seen.current = true;
  }, []);

  useEffect(() => {
    if (reduced) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = wrapperRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
        setProgress(p);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced]);

  const p = progress;
  const scale = reduced ? 0.92 : 1 - 0.12 * seg(p, 0, 0.84);
  const rotate = reduced
    ? 0
    : -3 * seg(p, 0.15, 0.5) + 5 * seg(p, 0.5, 0.68) - 2 * seg(p, 0.84, 1);
  const shiftX = reduced ? 0 : 5 * seg(p, 0.32, 0.68);
  const shiftY = reduced ? 0 : -2 * seg(p, 0, 0.32);
  const copyIn = reduced ? 1 : seg(p, 0.02, 0.18);
  const offerIn = reduced ? 1 : seg(p, 0.8, 0.97);
  const orbIn = [seg(p, 0.32, 0.5), seg(p, 0.5, 0.68), seg(p, 0.68, 0.84)];

  return (
    <div
      ref={wrapperRef}
      className="relative bg-lilac"
      style={{ minHeight: reduced ? undefined : "300svh" }}
    >
      <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-6 py-20 md:grid-cols-[42%_58%] md:py-0">
          {/* Copy */}
          <div
            className="order-2 md:order-1"
            style={{ opacity: reduced ? 1 : 0.35 + 0.65 * copyIn }}
          >
            <p className="label-caps text-violet-deep">Bella Face · Cuidado tópico</p>
            <h1 className="mt-6 text-4xl leading-[1.08] text-ink sm:text-5xl md:text-6xl">
              Uma rotina mais simples para uma pele com aparência mais uniforme.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Conheça o Creme Bella Face, criado para acompanhar o cuidado diário de
              áreas com manchas e tom irregular.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <BuyButton source="hero">Comprar por {PRICE_LABEL}</BuyButton>
              <a
                href="#como-funciona"
                className="text-sm font-medium text-violet-deep underline underline-offset-4 hover:text-violet"
              >
                Descobrir como funciona
              </a>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              30 g · Uso tópico · Consulte as informações completas antes de usar.
            </p>

            <div
              className="mt-10 hidden items-baseline gap-4 md:flex"
              style={{ opacity: 0.25 + 0.75 * offerIn }}
            >
              <span className="text-3xl font-bold tracking-tight text-ink">
                {PRICE_LABEL}
              </span>
              <span className="text-xs text-muted-foreground">
                Conheça o protocolo Bella Face
              </span>
            </div>
          </div>

          {/* Palco do produto */}
          <div className="relative order-1 mx-auto aspect-square w-full max-w-[520px] md:order-2">
            {CONCERNS.map((c, i) => (
              <div
                key={c.key}
                className={`pointer-events-none absolute ${ORB_POSITIONS[i]} w-36 rounded-3xl bg-white/80 p-4 backdrop-blur-sm sm:w-44`}
                style={{
                  opacity: orbIn[i],
                  transform: `translateY(${(1 - (orbIn[i] ?? 0)) * 24}px)`,
                  transition: reduced ? "none" : "opacity .2s linear",
                }}
                aria-hidden="true"
              >
                <span className="block h-1 w-8 bg-teal" />
                <p className="mt-3 font-display text-lg text-ink">{c.title}</p>
              </div>
            ))}

            <img
              src={PRODUCT.image}
              alt={PRODUCT.alt}
              width={520}
              height={520}
              fetchPriority="high"
              decoding="async"
              className="relative z-10 h-full w-full object-contain drop-shadow-[0_28px_45px_rgba(33,28,112,0.16)]"
              style={{
                transform: `translate(${shiftX}vw, ${shiftY}vh) rotate(${rotate}deg) scale(${scale})`,
                willChange: "transform",
              }}
            />
          </div>
        </div>

        <p className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
          ↓ role para descobrir
        </p>
      </div>
    </div>
  );
}
