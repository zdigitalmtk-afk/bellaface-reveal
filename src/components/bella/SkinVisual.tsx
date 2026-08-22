const CONCERN_IMAGES: Record<string, string> = {
  acne: "/concerns/acne.png",
  melasma: "/concerns/melasma.png",
  solares: "/concerns/solares.png",
  sardas: "/concerns/sardas.png",
};

interface SkinVisualProps {
  type: "acne" | "melasma" | "solares" | "sardas";
  className?: string;
}

export function SkinVisual({ type, className = "" }: SkinVisualProps) {
  const src = CONCERN_IMAGES[type];
  if (!src) return null;

  return (
    <img
      src={src}
      alt={`Exemplo de pele com ${type}`}
      loading="lazy"
      decoding="async"
      className={`h-full w-full object-cover object-center select-none ${className}`}
    />
  );
}
