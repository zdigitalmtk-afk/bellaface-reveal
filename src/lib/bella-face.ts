/** TEC-13: preço como token de conteúdo, nunca hardcoded nas telas. */
export const PRICE_BRL = 159.9;
export const PRICE_LABEL = PRICE_BRL.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/** TEC-12: destino único de compra, com parâmetros de campanha preservados. */
export const CHECKOUT_URL = "#oferta";

export const PRODUCT = {
  name: "Creme Bella Face",
  descriptor: "Removedor de manchas · Uso tópico · 30 g",
  image: "/Creme.png",
  alt: "Bisnaga do Creme Bella Face, removedor de manchas de uso tópico, 30 g",
};

export const LINE = [
  {
    name: "Creme Bella Face",
    detail: "Removedor de manchas · Uso tópico · 30 g",
    image: "/Creme.png",
    alt: "Bisnaga do Creme Bella Face, 30 g",
  },
  {
    name: "Vitamina C 20%",
    detail: "Sérum facial · 20 ml",
    image: "/Vitamina_c.png",
    alt: "Frasco do sérum facial Vitamina C 20% Bella Face, 20 ml",
  },
  {
    name: "Demaquilante",
    detail: "Espuma de limpeza facial · 50 ml",
    image: "/Demaquilante.png",
    alt: "Frasco pump do Demaquilante Bella Face em espuma, 50 ml",
  },
  {
    name: "Sun+Care 30 FPS",
    detail: "Proteção solar facial · 60 g",
    image: "/Sun_Care.png",
    alt: "Bisnaga do protetor solar facial Sun+Care 30 FPS Bella Face, 60 g",
  },
] as const;

export const CONCERNS = [
  {
    key: "acne",
    title: "Cicatrizes de acne",
    subtitle: "Rosto",
    text: "A inflamação causada por erupções cutâneas prejudica o colágeno, deixando a textura da pele irregular e manchas escuras.",
    previewColor: "oklch(0.68 0.08 35)",
  },
  {
    key: "melasma",
    title: "Melasma",
    subtitle: "Rosto",
    text: "O sol, os hormônios e os fatores genéticos aumentam os melanócitos, causando a pigmentação da pele.",
    previewColor: "oklch(0.58 0.09 50)",
  },
  {
    key: "solares",
    title: "Manchas solares/de idade",
    subtitle: "Rosto",
    text: "A exposição aos raios UV aumenta a melanina, fazendo com que o pigmento se aglomere em manchas visíveis.",
    previewColor: "oklch(0.62 0.1 60)",
  },
  {
    key: "sardas",
    title: "Sardas",
    subtitle: "Rosto",
    text: "A exposição aos raios UV acelera a produção de melanina, causando pequenas manchas pigmentadas.",
    previewColor: "oklch(0.72 0.09 65)",
    optional: true,
  },
] as const;

/** TEC-14: eventos analíticos. */
type AnalyticsPayload = Record<string, string | number | boolean>;

export function track(event: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...payload });
}
