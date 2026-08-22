import { SkinVisual } from "./SkinVisual";

export interface ProblemOrbData {
  key: "acne" | "melasma" | "solares" | "sardas";
  title: string;
  subtitle: string;
  text: string;
}

interface ProblemOrbCardProps {
  data: ProblemOrbData;
  x: number;
  y: number;
  scale: number;
  opacity: number;
  zIndex: number;
  isBehind?: boolean;
}

export function ProblemOrbCard({
  data,
  x,
  y,
  scale,
  opacity,
  zIndex,
  isBehind = false,
}: ProblemOrbCardProps) {
  if (opacity <= 0.001) return null;

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 will-change-transform select-none"
      style={{
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`,
        opacity,
        zIndex,
      }}
      aria-hidden="true"
    >
      <div
        className={`flex flex-col items-center text-center transition-all duration-75 ${
          isBehind ? "filter brightness-90 contrast-95" : ""
        }`}
      >
        {/* Circular photo crop */}
        <div className="relative h-28 w-28 sm:h-36 sm:w-36 overflow-hidden rounded-full border-2 border-white/80 bg-white shadow-[0_16px_32px_-8px_rgba(33,28,112,0.18)] ring-4 ring-violet-500/10 backdrop-blur-md">
          <SkinVisual type={data.key} />
          {/* Subtle inner gloss highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-black/10 via-transparent to-white/30" />
        </div>

        {/* Floating pill with problem name */}
        <div className="mt-3.5 max-w-[200px] rounded-full border border-border/80 bg-white/95 px-4 py-1.5 shadow-[0_8px_20px_-4px_rgba(33,28,112,0.12)] backdrop-blur-md">
          <p className="font-display text-sm font-semibold tracking-tight text-ink sm:text-base leading-snug">
            {data.title}
          </p>
          <p className="label-caps mt-0.5 text-[0.625rem] text-violet-deep opacity-80">
            {data.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
