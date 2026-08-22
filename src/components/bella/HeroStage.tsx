import { useEffect, useRef, useState } from "react";
import { BuyButton } from "./BuyButton";
import { ProblemOrbCard, ProblemOrbData } from "./ProblemOrbCard";
import { SkinVisual } from "./SkinVisual";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { CONCERNS, PRODUCT, track } from "@/lib/bella-face";

// Configurações e Variáveis de Customização
const HERO_SCROLL_HEIGHT_DESKTOP = "300svh";
const HERO_SCROLL_HEIGHT_MOBILE = "220svh";
const INCLUDE_FRECKLES = true; // Flag modular para inclusão/exclusão de Sardas

interface OrbitWindow {
  key: "acne" | "melasma" | "solares" | "sardas";
  start: number;
  end: number;
  entryX: number; // direção de entrada (-1 = esquerda, 1 = direita)
  entryY: number;
  arcX: number;
  arcY: number;
}

const ORBIT_WINDOWS: OrbitWindow[] = [
  {
    key: "acne",
    start: 0.12,
    end: 0.36,
    entryX: -1,
    entryY: -0.4,
    arcX: -0.7,
    arcY: -0.2,
  },
  {
    key: "melasma",
    start: 0.34,
    end: 0.58,
    entryX: 1,
    entryY: 0.45,
    arcX: 0.75,
    arcY: 0.25,
  },
  {
    key: "solares",
    start: 0.56,
    end: 0.78,
    entryX: -1,
    entryY: 0.4,
    arcX: -0.7,
    arcY: 0.15,
  },
  {
    key: "sardas",
    start: 0.74,
    end: 0.94,
    entryX: 1,
    entryY: -0.4,
    arcX: 0.7,
    arcY: -0.2,
  },
];

/** Interpolação suave e determinística do produto 2D */
function getProductTransform(p: number) {
  if (p <= 0.08) {
    return { rotate: 0, scale: 1, translateY: 0 };
  }
  if (p >= 0.95) {
    return { rotate: 0, scale: 1, translateY: 0 };
  }

  let rotate = 0;
  let scale = 1;
  let translateY = 0;

  if (p < 0.34) {
    const t = (p - 0.08) / (0.34 - 0.08);
    const ease = Math.sin(t * Math.PI * 0.5);
    rotate = -4.8 * ease;
    scale = 1 - 0.02 * ease;
    translateY = -5 * ease;
  } else if (p < 0.56) {
    const t = (p - 0.34) / (0.56 - 0.34);
    const ease = 0.5 - 0.5 * Math.cos(t * Math.PI);
    rotate = -4.8 + 9.8 * ease; // -4.8deg -> +5.0deg
    scale = 0.98 + 0.04 * ease;
    translateY = -5 + 9 * ease;
  } else if (p < 0.76) {
    const t = (p - 0.56) / (0.76 - 0.56);
    const ease = 0.5 - 0.5 * Math.cos(t * Math.PI);
    rotate = 5.0 - 8.6 * ease; // +5.0deg -> -3.6deg
    scale = 1.02 - 0.03 * ease;
    translateY = 4 - 7 * ease;
  } else {
    const t = (p - 0.76) / (0.95 - 0.76);
    const ease = 0.5 - 0.5 * Math.cos(t * Math.PI);
    rotate = -3.6 + 3.6 * ease; // -3.6deg -> 0deg
    scale = 0.99 + 0.01 * ease;
    translateY = -3 + 3 * ease;
  }

  return { rotate, scale, translateY };
}

/** Cálculo da trajetória orbital paramétrica de cada card */
function getOrbCardState(
  windowDef: OrbitWindow,
  p: number,
  isMobile: boolean,
  viewportWidth: number
) {
  if (p < windowDef.start || p > windowDef.end) {
    return { visible: false, x: 0, y: 0, scale: 0.5, opacity: 0, zIndex: 15, isBehind: true };
  }

  // Progresso local normalizado [0, 1] dentro do intervalo do card
  const localP = (p - windowDef.start) / (windowDef.end - windowDef.start);

  const radiusX = isMobile ? Math.min(150, viewportWidth * 0.38) : 310;
  const radiusY = isMobile ? 120 : 180;

  let x = 0;
  let y = 0;
  let scale = 1;
  let opacity = 1;
  const isBehind = localP >= 0.48;
  const zIndex = isBehind ? 15 : 35; // Camada 2 (atrás: z=15) vs Camada 6 (frente: z=35)

  if (localP < 0.48) {
    // Fase 1: Entrada lateral até o arco próximo ao produto
    const entryT = localP / 0.48; // 0 -> 1
    const easeOut = 1 - Math.pow(1 - entryT, 3);
    const startX = windowDef.entryX * (radiusX * 1.55);
    const targetX = windowDef.arcX * radiusX;
    const startY = windowDef.entryY * (radiusY * 1.4);
    const targetY = windowDef.arcY * radiusY;

    x = startX + (targetX - startX) * easeOut;
    y = startY + (targetY - startY) * easeOut;
    opacity = Math.min(1, entryT * 2.8);
    scale = 0.85 + 0.15 * easeOut;
  } else {
    // Fase 2: Atravessa por trás do centro da embalagem e é absorvido / desaparece
    const absorbT = (localP - 0.48) / (1 - 0.48); // 0 -> 1
    const easeIn = Math.pow(absorbT, 2);
    const startX = windowDef.arcX * radiusX;
    const startY = windowDef.arcY * radiusY;

    // Desloca-se em direção ao centro exato atrás da embalagem (0, 0)
    x = startX * (1 - easeIn * 0.95);
    y = startY * (1 - easeIn * 0.95);

    // Redução gradual de opacidade e escala ao passar por trás
    opacity = Math.max(0, 1 - absorbT * 1.5);
    scale = 1 - 0.38 * absorbT;
  }

  return {
    visible: opacity > 0.005,
    x,
    y,
    scale,
    opacity,
    zIndex,
    isBehind,
  };
}

export function HeroStage() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1200);
  const reduced = useReducedMotion();
  const seen = useRef(false);

  useEffect(() => {
    track("hero_view");
    seen.current = true;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      setViewportWidth(w);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  // Filtragem dos dados de preocupações conforme configuração
  const activeConcerns = CONCERNS.filter(
    (c) => INCLUDE_FRECKLES || c.key !== "sardas"
  ) as ProblemOrbData[];

  const activeWindows = ORBIT_WINDOWS.filter(
    (w) => INCLUDE_FRECKLES || w.key !== "sardas"
  );

  const p = progress;
  const productTransform = reduced
    ? { rotate: 0, scale: 1, translateY: 0 }
    : getProductTransform(p);

  // Estados dos textos e badges editoriais
  const isFinalState = p >= 0.94;

  return (
    <div
      ref={wrapperRef}
      className="relative bg-gradient-to-b from-lilac via-[#f4edfc] to-paper"
      style={{
        minHeight: reduced
          ? undefined
          : isMobile
            ? HERO_SCROLL_HEIGHT_MOBILE
            : HERO_SCROLL_HEIGHT_DESKTOP,
      }}
    >
      {/* Palco Sticky */}
      <div className="sticky top-0 flex h-[100svh] min-h-[100svh] w-full items-center justify-center overflow-hidden">
        {/* Camada 1: Background & Iluminação de Ambiente (z-0 a z-10) */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <div className="h-[600px] w-[600px] rounded-full bg-violet-400/10 blur-[120px]" />
          <div className="absolute h-[380px] w-[380px] rounded-full bg-teal-300/15 blur-[90px]" />
        </div>

        {/* Linhas de Apoio e Órbita Sutil (Camada 3: z-20) */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <div className="h-[420px] w-[420px] sm:h-[580px] sm:w-[580px] rounded-full border border-violet-deep/5 border-dashed" />
        </div>

        {/* Grid Principal de Conteúdo */}
        <div className="relative z-40 mx-auto grid h-full w-full max-w-6xl grid-cols-1 items-center gap-6 px-6 py-12 md:grid-cols-[44%_56%] md:py-0">
          {/* Coluna Editorial / Textos e CTA */}
          <div className="order-2 flex flex-col justify-center md:order-1">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              <p className="label-caps text-violet-deep tracking-widest font-semibold">
                Bella Face · Cuidado tópico
              </p>
            </div>

            <h1 className="mt-4 text-3xl font-normal leading-[1.12] text-ink sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              Uma rotina mais simples para uma pele com aparência mais uniforme.
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Conheça o Creme Bella Face, desenvolvido para acompanhar o cuidado diário
              de áreas com marcas, manchas e tom irregular.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <BuyButton source="hero">Comprar o Creme Bella Face</BuyButton>
            </div>

            {/* Microcopy de suporte */}
            <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
              <span>✦ Fórmula de alta pureza</span>
              <span>✦ Cuidado diário</span>
              <span>✦ Textura leve</span>
            </div>
          </div>

          {/* Coluna do Palco Central (Produto + Cards Orbitais) */}
          <div className="relative order-1 flex h-[340px] w-full items-center justify-center sm:h-[480px] md:order-2 md:h-[560px]">
            {/* Cards Orbitais de Problemas (Camadas z-15 quando atrás e z-35 quando na frente) */}
            {!reduced &&
              activeConcerns.map((concern) => {
                const windowDef = activeWindows.find((w) => w.key === concern.key);
                if (!windowDef) return null;

                const orbState = getOrbCardState(
                  windowDef,
                  p,
                  isMobile,
                  viewportWidth
                );

                if (!orbState.visible) return null;

                return (
                  <ProblemOrbCard
                    key={concern.key}
                    data={concern}
                    x={orbState.x}
                    y={orbState.y}
                    scale={orbState.scale}
                    opacity={orbState.opacity}
                    zIndex={orbState.zIndex}
                    isBehind={orbState.isBehind}
                  />
                );
              })}

            {/* Sombra de Contato do Produto (Camada 4: z-25) */}
            <div
              className="pointer-events-none absolute z-25 h-10 w-44 rounded-full bg-violet-deep/20 blur-xl transition-transform duration-75"
              style={{
                transform: `translate(0, 160px) scale(${productTransform.scale * (1 + p * 0.05)})`,
                opacity: 0.85,
              }}
              aria-hidden="true"
            />

            {/* Imagem do Creme Bella Face em Primeiro Plano (Camada 5: z-30) */}
            <div
              className="relative z-30 flex h-full w-full items-center justify-center"
              style={{
                transform: `rotate(${productTransform.rotate}deg) scale(${productTransform.scale}) translateY(${productTransform.translateY}px)`,
                transformOrigin: "50% 50%",
                willChange: "transform",
              }}
            >
              <img
                src={PRODUCT.image}
                alt={PRODUCT.alt}
                width={520}
                height={520}
                fetchPriority="high"
                decoding="async"
                className="max-h-[300px] w-auto object-contain sm:max-h-[420px] md:max-h-[500px] drop-shadow-[0_24px_48px_rgba(33,28,112,0.18)] select-none pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Indicador de rolagem interativa no rodapé do sticky stage */}
        <div
          className="pointer-events-none absolute bottom-4 left-1/2 z-40 -translate-x-1/2 flex items-center gap-2 rounded-full border border-border/60 bg-white/70 px-4 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur-sm transition-opacity duration-300"
          style={{ opacity: isFinalState ? 0.3 : 0.85 }}
        >
          <span className="animate-bounce">↓</span>
          <span>Role para ver o efeito de absorção</span>
        </div>
      </div>

      {/* Fallback Acessível para prefers-reduced-motion */}
      {reduced && (
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-xl font-medium text-ink">
            Ação direcionada para os principais incômodos da pele:
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {activeConcerns.map((c) => (
              <div
                key={c.key}
                className="flex flex-col items-center rounded-2xl border border-border bg-white p-5 text-center shadow-sm"
              >
                <div className="h-20 w-20 overflow-hidden rounded-full border border-border">
                  <SkinVisual type={c.key} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
