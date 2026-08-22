import cremeAsset from "@/assets/Creme.png.asset.json";
import vitaminaAsset from "@/assets/Vitamina_c.png.asset.json";
import demaquilanteAsset from "@/assets/Demaquilante.png.asset.json";
import sunCareAsset from "@/assets/Sun_Care.png.asset.json";

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
  image: cremeAsset.url,
  alt: "Bisnaga do Creme Bella Face, removedor de manchas de uso tópico, 30 g",
};

export const LINE = [
  {
    name: "Creme Bella Face",
    detail: "Removedor de manchas · Uso tópico · 30 g",
    image: cremeAsset.url,
    alt: "Bisnaga do Creme Bella Face, 30 g",
  },
  {
    name: "Vitamina C 20%",
    detail: "Sérum facial · 20 ml",
    image: vitaminaAsset.url,
    alt: "Frasco do sérum facial Vitamina C 20% Bella Face, 20 ml",
  },
  {
    name: "Demaquilante",
    detail: "Espuma de limpeza facial · 50 ml",
    image: demaquilanteAsset.url,
    alt: "Frasco pump do Demaquilante Bella Face em espuma, 50 ml",
  },
  {
    name: "Sun+Care 30 FPS",
    detail: "Proteção solar facial · 60 g",
    image: sunCareAsset.url,
    alt: "Bisnaga do protetor solar facial Sun+Care 30 FPS Bella Face, 60 g",
  },
] as const;

export const CONCERNS = [
  {
    key: "melasma",
    title: "Tom irregular",
    text: "Para a rotina de cuidado de áreas com aparência de melasma, respeitando a individualidade de cada pele.",
  },
  {
    key: "solares",
    title: "Marcas do sol",
    text: "Ajuda a cuidar da aparência de manchas associadas à exposição solar ao longo do tempo.",
  },
  {
    key: "acne",
    title: "Marcas visíveis",
    text: "Para quem deseja cuidar da aparência de marcas e tom irregular após inflamações.",
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
