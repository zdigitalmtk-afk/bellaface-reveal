import { createFileRoute } from "@tanstack/react-router";
import { HeroStage } from "@/components/bella/HeroStage";
import { LineMarquee } from "@/components/bella/LineMarquee";
import { StickyBuyBar } from "@/components/bella/StickyBuyBar";
import { BuyButton } from "@/components/bella/BuyButton";
import { SkinVisual } from "@/components/bella/SkinVisual";
import { CONCERNS, LINE, PRICE_LABEL, PRODUCT, track } from "@/lib/bella-face";

const TITLE = "Creme Bella Face — cuidado tópico para manchas | 30 g";
const DESCRIPTION =
  "Creme Bella Face, 30 g: cuidado tópico para a rotina de áreas com manchas e tom irregular. Conheça o protocolo Bella Face por R$ 159,90.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STEPS = [
  {
    n: "01",
    title: "Preparar a pele",
    text: "Limpe o rosto conforme a orientação oficial antes da aplicação.",
    product: LINE[2],
  },
  {
    n: "02",
    title: "Aplicar o Creme",
    text: "Aplique nas áreas desejadas na frequência recomendada no rótulo.",
    product: LINE[0],
  },
  {
    n: "03",
    title: "Proteger durante o dia",
    text: "Use proteção solar e reaplique conforme a orientação oficial.",
    product: LINE[3],
  },
] as const;

const FAQ = [
  {
    q: "Para quem é o Creme Bella Face?",
    a: "É um cosmético de uso tópico para quem deseja cuidar da aparência de áreas com manchas e tom irregular. Não realiza diagnóstico nem substitui avaliação profissional.",
  },
  {
    q: "Como devo usar?",
    a: "Siga o modo de uso oficial descrito no rótulo quanto à quantidade, frequência e ordem na rotina. (Conteúdo pendente de validação regulatória.)",
  },
  {
    q: "Posso usar no rosto todo?",
    a: "A área de aplicação deve seguir exatamente o que consta no rótulo e no modo de uso oficial do produto.",
  },
  {
    q: "Posso usar em pele sensível?",
    a: "Recomenda-se teste de contato prévio e atenção às advertências oficiais. Não garantimos tolerância individual.",
  },
  {
    q: "Posso combinar com a Vitamina C?",
    a: "A Vitamina C é um produto complementar da linha. A combinação deve seguir a recomendação oficial da marca.",
  },
  {
    q: "Preciso usar protetor solar?",
    a: "A proteção solar faz parte de uma rotina de cuidados com a pele. O Sun+Care não substitui orientação profissional.",
  },
  {
    q: "Melasma desaparece?",
    a: "Melasma é uma condição individual. O Creme Bella Face é um cosmético e atua na aparência da pele; avaliação profissional é recomendada.",
  },
  {
    q: "O que faço se sentir desconforto?",
    a: "Interrompa o uso conforme as advertências oficiais e procure orientação profissional se necessário.",
  },
  {
    q: "Como funciona a entrega e a troca?",
    a: "Políticas de entrega e troca a confirmar antes da publicação.",
  },
];

function Index() {
  return (
    <div className="bg-paper text-ink">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-paper/90 backdrop-blur">
        <nav
          aria-label="Principal"
          className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 sm:flex sm:justify-between"
        >
          <a href="#top" className="min-w-0 truncate text-lg tracking-tight">
            <span className="font-display font-semibold text-violet">Bella</span>
            <span className="font-display text-ink/70">Face</span>
          </a>
          <div className="flex shrink-0 items-center gap-6">
            <div className="hidden gap-6 text-sm text-muted-foreground md:flex">
              <a href="#como-funciona" className="hover:text-violet-deep">
                Como funciona
              </a>
              <a href="#rotina" className="hover:text-violet-deep">
                Rotina
              </a>
              <a href="#duvidas" className="hover:text-violet-deep">
                Dúvidas
              </a>
            </div>
            <BuyButton source="nav" className="px-5 py-2 text-xs">
              Comprar
            </BuyButton>
          </div>
        </nav>
      </header>

      <main id="top">
        <HeroStage />

        {/* Preocupações */}
        <section className="bg-paper py-24" aria-labelledby="concerns-title">
          <div className="mx-auto max-w-6xl px-6">
            <h2
              id="concerns-title"
              className="max-w-2xl text-3xl leading-tight sm:text-4xl"
            >
              Cuidar da aparência da pele começa por entender o que incomoda você.
            </h2>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {CONCERNS.map((c) => (
                <article
                  key={c.key}
                  className="group rounded-2xl bg-white p-5 border border-border/80 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col"
                >
                  <div className="mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl bg-mist border border-border/50">
                    <SkinVisual
                      type={c.key as "acne" | "melasma" | "solares" | "sardas"}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-serif font-medium text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {c.text}
                  </p>
                </article>
              ))}
            </div>
            <a
              href="#como-funciona"
              className="mt-10 inline-block text-sm font-medium text-violet-deep underline underline-offset-4"
            >
              Ver como o Creme entra na rotina
            </a>
          </div>
        </section>

        {/* Método */}
        <section
          id="como-funciona"
          className="bg-lilac py-24"
          aria-labelledby="method-title"
          onMouseEnter={() => track("protocol_interaction")}
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="label-caps text-violet-deep">Protocolo</p>
            <h2 id="method-title" className="mt-5 max-w-xl text-3xl sm:text-4xl">
              Um passo simples dentro de uma rotina consistente.
            </h2>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {STEPS.map((s) => (
                <article key={s.n} className="rounded-sm bg-white p-8">
                  <img
                    src={s.product.image}
                    alt={s.product.alt}
                    width={240}
                    height={240}
                    loading="lazy"
                    decoding="async"
                    className="mx-auto h-44 w-auto object-contain"
                  />
                  <p className="mt-8 font-mono text-xs text-teal">{s.n}</p>
                  <h3 className="mt-2 text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted-foreground">
              A rotina ideal depende do produto, da pele e das orientações de uso. Em
              caso de dúvida ou sensibilidade, interrompa e procure orientação
              profissional.
            </p>
          </div>
        </section>

        {/* Linha */}
        <section id="rotina" className="bg-paper py-24" aria-labelledby="line-title">
          <div className="mx-auto mb-12 max-w-6xl px-6">
            <p className="label-caps text-violet-deep">A linha</p>
            <h2 id="line-title" className="mt-5 max-w-xl text-3xl sm:text-4xl">
              Quatro produtos, uma mesma lógica de cuidado.
            </h2>
          </div>
          <LineMarquee />
        </section>

        {/* Constância / prova social */}
        <section className="bg-mist py-24" aria-labelledby="social-title">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 id="social-title" className="text-3xl sm:text-4xl">
              O cuidado diário também é uma forma de constância.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Esta área é reservada a depoimentos reais, com autorização de uso e
              contexto. Nenhum relato, percentual ou imagem de antes e depois será
              publicado sem documentação e consentimento.
            </p>
          </div>
        </section>

        {/* Oferta */}
        <section id="oferta" className="bg-paper py-24" aria-labelledby="offer-title">
          <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-2">
            <img
              src={PRODUCT.image}
              alt={PRODUCT.alt}
              width={420}
              height={520}
              loading="lazy"
              decoding="async"
              className="mx-auto h-[380px] w-auto object-contain drop-shadow-[0_24px_40px_rgba(33,28,112,0.14)]"
            />
            <div>
              <p className="label-caps text-violet-deep">Creme Bella Face</p>
              <h2 id="offer-title" className="mt-5 text-3xl sm:text-4xl">
                {PRODUCT.descriptor}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Para uma rotina de cuidado de áreas com manchas e tom irregular.
              </p>
              <p className="mt-8 text-4xl font-bold tracking-tight">{PRICE_LABEL}</p>
              <BuyButton source="oferta" className="mt-6 w-full sm:w-auto">
                Comprar o Creme Bella Face
              </BuyButton>
              <p className="mt-4 text-xs text-muted-foreground">
                Pagamento seguro · Atendimento Bella Face · Consulte condições
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="bg-lilac py-24" aria-labelledby="faq-title">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="faq-title" className="text-3xl sm:text-4xl">
              Dúvidas antes de começar.
            </h2>
            <div className="mt-10 divide-y divide-border">
              {FAQ.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="cursor-pointer list-none text-base font-medium text-ink marker:hidden">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-mist py-12">
        <div className="mx-auto max-w-6xl px-6 text-xs leading-relaxed text-muted-foreground">
          <p className="font-display text-lg text-ink">BellaFace</p>
          <p className="mt-4 max-w-2xl">
            Produto cosmético de uso tópico. Informações de composição, modo de uso,
            advertências, entrega, pagamento e políticas de troca serão publicadas
            após confirmação oficial. Este conteúdo não substitui orientação
            profissional.
          </p>
          <p className="mt-6">© {new Date().getFullYear()} Bella Face</p>
        </div>
      </footer>

      <StickyBuyBar />
    </div>
  );
}
