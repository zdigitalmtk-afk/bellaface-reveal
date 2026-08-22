# Bella Face Launch

Página de vendas do Creme Bella Face

Versão: 1.0

Status: Especificação inicial para desenvolvimento no IDE

Produto principal: Creme Bella Face — removedor de manchas, uso tópico, 30 g

Preço inicial de referência: R$ 159,90 — valor fictício, configurável

Referência de experiência: The Nue Co.

Autoria: Manus AI

1. Resumo executivo

Este documento especifica uma página de vendas editorial e interativa para o Creme Bella Face, inspirada no uso de espaço negativo, produto central, tipografia elegante, objetos visuais em movimento e blocos de método observados na página inicial da The Nue Co.

A proposta não é criar uma página que pareça uma loja virtual tradicional. A página deve funcionar como uma experiência de descoberta do produto: a visitante entende o problema, visualiza o Creme como protagonista, conhece os tipos de manchas que a rotina pretende tratar cosmeticamente, aprende como usar e recebe uma oferta clara em R$ 159,90.

O conceito central é:

“Uma rotina mais simples para uma pele com aparência mais uniforme.”

A primeira dobra deve causar impacto visual por meio de um módulo sticky controlado pela rolagem. Enquanto a pessoa desce a página, o Creme permanece como objeto principal, faz um movimento sutil de rotação/elevação, e os problemas — melasma, manchas solares e marcas pós-acne — entram em camadas visuais atrás ou ao redor da embalagem. Em seguida, a composição revela o benefício, o passo a passo e o CTA.

2. Objetivos do produto

Objetivo

Descrição

Indicador de sucesso

Impacto inicial

Fazer a visitante parar e entender imediatamente que a página é sobre o Creme Bella Face.

Clareza do produto e da proposta nos primeiros segundos.

Educação

Explicar para quem o Creme é indicado cosmeticamente, como ele entra na rotina e quais expectativas são realistas.

Redução de dúvidas antes do checkout.

Conversão

Apresentar uma oferta objetiva, com preço, conteúdo, condições e CTA recorrente.

Clique no CTA e início do checkout.

Diferenciação

Posicionar a Bella Face como uma marca de skincare contemporânea, visualmente sofisticada e fácil de entender.

Percepção premium sem perder clareza comercial.

Acessibilidade

Garantir que a página funcione sem animações e em telas pequenas.

Conteúdo completo em reduced motion, teclado e mobile.

Fora do escopo desta versão

Esta especificação não inclui a construção do site, integração final com gateway, definição de claims regulatórios, criação de novas fotografias, modelagem 3D ou validação dermatológica. Esses itens devem ser tratados como dependências antes da publicação.

3. Público e contexto de uso

A página será acessada principalmente por pessoas que percebem manchas no rosto e procuram uma solução de skincare para uniformizar visualmente o tom da pele. Parte do tráfego poderá chegar de anúncios, redes sociais ou WhatsApp; por isso, a página precisa ser compreendida por uma visitante que nunca teve contato com a Bella Face.

A visitante pode estar frustrada com produtos isolados, insegura sobre como aplicar um creme clareador ou receosa de irritação e de não obter resultado. A página deve responder a essas objeções com clareza, sem diagnóstico, sem promessa de cura e sem afirmar que uma fórmula funciona da mesma maneira para todos os tipos de melasma ou hiperpigmentação.

4. Posicionamento e mensagem

Mensagem principal

Creme Bella Face para ajudar a uniformizar a aparência da pele e reduzir visualmente a aparência de manchas, dentro de uma rotina simples e consistente.

Mensagem de apoio

Um cuidado tópico desenvolvido para acompanhar a rotina de quem deseja cuidar de áreas com tom irregular, manchas solares, marcas pós-acne e outras alterações visíveis de pigmentação.

CTA principal

Quero conhecer o protocolo Bella Face

CTA de compra

Comprar o Creme Bella Face — R$ 159,90

Texto auxiliar sugerido

Uso tópico · 30 g · Para a rotina de cuidado da pele

Todo texto definitivo sobre “tratar”, “clarear”, “remover”, “melasma”, “resultado”, prazo, ativos, segurança e indicação deve ser revisado com base na composição, registro, documentação e orientação regulatória do produto. Nesta especificação, “ajudar”, “reduzir a aparência” e “uniformizar visualmente” são direções de comunicação mais seguras do que promessas absolutas.

5. Conceito visual

Direção criativa

A direção de arte deve ser editorial, clínica sem ser fria, minimalista e sensorial. O produto precisa ser tratado como um objeto de design. Em vez de uma sequência de banners promocionais, a página terá grandes blocos de respiro, títulos curtos, imagens recortadas, linhas finas e transições suaves.

A referência The Nue Co. usa uma composição de produto central e atributos visuais que entram durante a navegação . Para a Bella Face, os “ingredientes” visuais serão substituídos por problemas de aparência que a cliente reconhece: melasma, manchas solares e marcas pós-acne. A diferença é que a Bella Face deve manter a linguagem cosmética e responsável, evitando representar o produto como tratamento médico.

Paleta provisória

As cores abaixo foram inferidas das embalagens fornecidas e devem ser refinadas a partir do manual de marca ou de amostras oficiais.

Token

Cor

Uso

--bf-ink

#15151A

Títulos, textos de alto contraste e preço.

--bf-violet

#3931A6

Logo, CTAs, molduras e elementos de destaque.

--bf-violet-deep

#211C70

Hover, estados ativos e contraste sobre fundos claros.

--bf-teal

#73C9C5

Filetes, marcadores, microdetalhes e estados de apoio.

--bf-paper

#FAFAF8

Fundo principal editorial.

--bf-lilac

#F0EFF9

Fundo de transição do hero e seções de método.

--bf-mist

#E9EBF0

Fundos de cards e áreas de informação.

--bf-white

#FFFFFF

Conteúdo sobre violetas e contraste de cartões.

A paleta deve permanecer predominantemente clara. O violeta é a cor de ação e identidade; o turquesa deve funcionar como detalhe, não como uma segunda cor dominante. Não usar gradientes chamativos, fundos excessivamente saturados ou excesso de sombras.

Tipografia

Função

Fonte recomendada

Peso e orientação

Display/H1

Bodoni Moda ou Cormorant Garamond

Regular ou Medium; grande, elegante, com bastante entrelinha.

Texto, navegação e CTA

Manrope

Regular, Medium e Semibold.

Números e preço

Manrope Semibold ou Bold

Grande, com leitura imediata.

Rótulos e microcopy

Manrope Medium

Caixa alta somente em pequenas doses e com espaçamento entre letras.

A fonte de display deve ser usada para criar personalidade, não para textos longos. Para preservar performance, carregar apenas os pesos necessários e aplicar font-display: swap. O logotipo Bella Face deve ser utilizado como arquivo de marca, sem tentar recriá-lo com uma fonte genérica.

Linguagem de imagem

As embalagens devem aparecer recortadas sobre fundos claros ou em composições com sombras suaves. A primeira dobra não deve usar fotografia genérica de uma modelo com pele perfeita como elemento principal. Caso sejam incluídas pessoas, priorizar retratos naturais, diversidade de tons de pele e textura real, evitando reforçar inseguranças.

6. Arquivos de origem fornecidos

Arquivo

Papel no produto

/home/ubuntu/upload/Creme.png

Produto protagonista da primeira dobra e da oferta.

/home/ubuntu/upload/Vitaminac.png

Produto complementar na faixa da linha Bella Face.

/home/ubuntu/upload/Demaquilante.png

Etapa de limpeza/preparação na rotina.

/home/ubuntu/upload/Sun+Care.png

Etapa de proteção solar e manutenção da rotina.

/home/ubuntu/upload/pasted_file_vFyJhq_image.png

Referência visual dos problemas/categorias: cicatrizes de acne, melasma, manchas solares/de idade e sardas.

Os arquivos PNG devem preservar transparência, caso existente. Para produção, gerar versões otimizadas em WebP/AVIF e manter PNG como fallback apenas quando necessário. O arquivo Creme.png deve receber prioridade de carregamento por ser o visual principal da primeira dobra.

7. Arquitetura geral da página

A página será uma landing page de venda editorial, com navegação mínima e CTA persistente, não uma página de catálogo. A ordem de conteúdo recomendada é:

1.Barra superior de benefício e navegação mínima.

2.Hero interativo do Creme.

3.Seção “o que ele ajuda a cuidar” com problemas/categorias.

4.Seção de mecanismo cosmético e protocolo de uso.

5.Seção “a rotina Bella Face” com os quatro produtos em movimento lento.

6.Seção de resultado esperado e consistência de uso.

7.Prova social autorizada e contextualizada.

8.Oferta do Creme por R$ 159,90.

9.Garantia, entrega, pagamento e suporte — somente com dados reais.

10.FAQ.

11.CTA final e rodapé de confiança.

A navegação do topo deve conter apenas o logo, âncoras “Como funciona”, “Rotina” e “Dúvidas”, além de um CTA curto “Comprar”. Em mobile, o menu pode ser reduzido para logo, CTA e menu de três linhas.

8. Especificação da primeira dobra

8.1 Estrutura visual

A primeira dobra ocupará uma altura mínima de 100svh e terá uma área de scroll estendida de aproximadamente 260svh a 320svh em desktop. O conteúdo interno ficará em position: sticky; top: 0, de modo que o viewport pareça um palco enquanto o scroll controla a progressão dos elementos.

Plain Text

┌──────────────────────────────────────────────────────────────┐ │ Logo Bella Face Como funciona Rotina Dúvidas Comprar│ ├──────────────────────────────────────────────────────────────┤ │ │ │ O cuidado que ajuda a │ │ devolver uniformidade │ │ à aparência da pele. [PRODUTO CREME] │ │ │ │ Para manchas visíveis, │ │ marcas e tom irregular. │ │ │ │ [Ver como funciona] │ │ │ │ R$ 159,90 [Comprar agora] │ │ ↓ role para descobrir │ └──────────────────────────────────────────────────────────────┘

No início, o Creme aparece grande e centralizado, com leve deslocamento para a direita. O título começa à esquerda com opacidade reduzida e ganha presença à medida que a visitante avança. A composição deve manter leitura mesmo se a animação for desativada.

8.2 Conteúdo sugerido do hero

Eyebrow: BELLA FACE · CUIDADO TÓPICO

Headline: Uma rotina mais simples para uma pele com aparência mais uniforme.

Subheadline: Conheça o Creme Bella Face, criado para acompanhar o cuidado diário de áreas com manchas e tom irregular.

CTA primário: Comprar por R$ 159,90

CTA secundário: Descobrir como funciona

Microcopy: 30 g · Uso tópico · Consulte as informações completas antes de usar

O texto pode ser refinado após a validação dos claims e da oferta real. A primeira tela deve evitar parágrafos longos, selos inventados, contagem regressiva e excesso de descontos.

9. Timeline da animação de scroll

A animação deve ser contínua, mas não pode ser necessária para compreender o conteúdo. A implementação deve preferir propriedades compositor-friendly, principalmente transform e opacity, evitando alterações contínuas de width, height, top ou left.

As animações baseadas em scroll podem ser implementadas com uma timeline de rolagem nativa quando o suporte for adequado, ou com um controlador JavaScript progressivo. A documentação do MDN descreve como animações podem ser ligadas ao progresso do scroll em vez de depender de tempo .

Progresso

Composição

Movimento do Creme

Conteúdo que entra

0–15%

Hero limpo, produto dominante.

scale(1.00) para scale(0.94); leve translateY(-2vh).

Eyebrow e headline aparecem.

15–32%

Produto continua em primeiro plano.

Rotação sutil de 0deg a -3deg; sombra aumenta discretamente.

“Manchas visíveis” surge como texto lateral.

32–50%

Camadas de problemas aparecem atrás.

Produto desloca-se para o centro-direita; translateX(5vw).

Orb/carta “Melasma” entra atrás do produto.

50–68%

Segundo atributo visual.

Rotação retorna a +2deg; escala permanece entre 0.90 e 0.94.

“Manchas solares” entra em plano intermediário.

68–84%

Terceiro atributo visual.

Produto reduz até 0.88 e revela mais área de copy.

“Marcas pós-acne” entra; sardas pode ser opcional mediante validação de claim.

84–100%

Fechamento do hero.

Produto fixa em composição menor, com rotação neutra.

Preço, CTA e mensagem “conheça o protocolo” ficam totalmente legíveis.

Tratamento visual dos problemas

Cada problema deve ser apresentado como uma unidade visual leve, não como um selo agressivo. Usar uma fotografia de textura ou detalhe de pele autorizada, recortada em círculo ou retângulo de cantos amplos, acompanhada de um título curto e uma frase responsável.

Exemplos de copy provisória:

Categoria

Título

Texto direcional

Melasma

Tom irregular

Para a rotina de cuidado de áreas com aparência de melasma, respeitando a individualidade da pele.

Manchas solares

Marcas do sol

Ajuda a cuidar da aparência de manchas associadas à exposição solar.

Marcas pós-acne

Marcas visíveis

Para quem deseja cuidar da aparência de marcas e tom irregular após inflamações.

Sardas

Sardas

Usar somente se a indicação estiver validada para essa comunicação.

Não usar imagens que façam a pessoa acreditar que o produto foi clinicamente testado em determinada condição sem apresentar estudo correspondente.

Rotação da embalagem

O arquivo fornecido é uma imagem frontal. Não aplicar uma rotação 3D de 360 graus diretamente em uma imagem 2D, pois isso pode gerar um efeito artificial, espelhado ou visualmente quebrado. Para a primeira versão, utilizar uma rotação cenográfica de baixa amplitude, entre -3deg e +3deg, combinada com escala, deslocamento e sombra.

Se a marca quiser uma rotação real da bisnaga, produzir antes uma sequência de 12 a 24 renders transparentes em ângulos consistentes ou um modelo 3D otimizado. A implementação deve aceitar tanto product-front.webp quanto uma sequência de frames, sem alterar a estrutura da página.

Camadas e profundidade

A ordem de empilhamento sugerida é:

Plain Text

background / texture → problem-orbs → ingredient-or-decoration-lines → product-shadow → product → CTA / foreground copy

O produto deve permanecer reconhecível e não pode ser encoberto por mais de 20% da sua área durante a animação. Os problemas entram atrás ou nas laterais, mas nunca escondem o rótulo principal.

10. Seção “O que o Creme ajuda a cuidar”

Após o hero, usar uma seção de fundo --bf-paper com o título em serifada:

Cuidar da aparência da pele começa por entender o que incomoda você.

Abaixo, apresentar três ou quatro categorias em uma composição ampla. A interação pode usar cards que se deslocam horizontalmente de forma controlada, mas o conteúdo precisa aparecer em uma grade estática no mobile e em reduced motion.

Cada card deve conter uma imagem, um título e uma explicação de duas linhas. O CTA da seção será Ver como o Creme entra na rotina, ancorando para o protocolo.

11. Seção de método e protocolo

Título sugerido

Um passo simples dentro de uma rotina consistente.

O bloco deve explicar a utilização real do Creme sem inventar frequência, ativos ou compatibilidades. A estrutura visual pode ser composta por três colunas:

Etapa

Conteúdo

Direção visual

01

Preparar a pele conforme a orientação oficial.

Demaquilante Bella Face ao fundo, menor.

02

Aplicar o Creme na frequência recomendada.

Creme em primeiro plano, com linha violeta.

03

Proteger a pele durante o dia.

Sun+Care 30 FPS e lembrete de reaplicação conforme orientação oficial.

A Vitamina C deve ser apresentada como produto complementar da linha, não como parte obrigatória do protocolo do Creme, a menos que a formulação e o modo de uso oficiais indiquem essa combinação.

Adicionar um aviso curto: A rotina ideal depende do produto, da pele e das orientações de uso. Em caso de dúvida ou sensibilidade, interrompa e procure orientação profissional.

12. Seção da linha Bella Face com movimento lento

Conceito

Inspirada na faixa de produtos em movimento da The Nue Co. , esta seção apresenta a linha Bella Face como um sistema visual. O movimento deve ser lento e elegante, semelhante a um editorial de produtos, sem parecer um carrossel de marketplace.

Produtos

1.Creme Bella Face — protagonista.

2.Vitamina C Sérum Facial 20% — antioxidante, clareador e antidade, conforme rótulo fornecido; confirmar claims antes da publicação.

3.Demaquilante — espuma de limpeza facial.

4.Sun+Care 30 FPS — proteção solar facial com proteção UVA/UVB e toque hidratante, conforme embalagem fornecida; confirmar documentação e claims.

Comportamento

Em desktop, exibir uma faixa horizontal com os quatro produtos, alternando deslocamento suave automático e controle pelo scroll. Ao passar o mouse sobre um item, pausar o movimento e aumentar o produto em até 4%.

Em mobile, substituir o auto-scroll contínuo por uma faixa horizontal arrastável com scroll-snap-type: x mandatory. O primeiro cartão deve ser o Creme, e a pessoa deve visualizar uma indicação “deslize para conhecer a linha”.

Se prefers-reduced-motion estiver ativo, desabilitar o deslocamento automático e mostrar cards estáticos. Essa preferência deve ser respeitada porque a media feature permite detectar quando a pessoa solicitou redução de movimento não essencial .

13. Oferta e conversão

A conversão deve aparecer em três momentos: no fim da primeira dobra, após a seção de protocolo e na seção final. Os botões devem apontar para a mesma ação de compra ou âncora de oferta.

Módulo de oferta

Plain Text

CREME BELLA FACE Removedor de manchas · Uso tópico · 30 g Para uma rotina de cuidado de áreas com manchas e tom irregular. R$ 159,90 [Comprar o Creme Bella Face] Pagamento seguro · Atendimento Bella Face · Consulte condições

O preço de R$ 159,90 é fictício e deve ser configurado como variável de conteúdo. Não apresentar desconto riscado, frete grátis, brinde, parcelamento, garantia ou escassez antes da confirmação comercial.

Barra de compra persistente

Depois que a visitante ultrapassar o hero, exibir uma barra inferior discreta no desktop e no mobile:

Creme Bella Face · R$ 159,90 — [Comprar agora]

A barra não deve cobrir conteúdo, campo de formulário ou botão de acessibilidade. No mobile, manter altura máxima aproximada de 72 px, com preço e CTA suficientemente grandes para toque.

Confiança

Adicionar apenas itens comprovados. Possíveis campos: política de troca, prazo de envio, formas de pagamento, suporte, empresa responsável, composição, lote, validade e canal de atendimento. Se algum dado não estiver confirmado, usar um placeholder no desenvolvimento e não publicar texto genérico.

14. Prova social e resultados

A página deve reservar espaço para depoimentos, mas não criar avaliações fictícias. Cada depoimento deve ter autorização, contexto e, quando houver foto, consentimento de uso e indicação sobre edição ou não edição.

A seção pode utilizar um título editorial:

O cuidado diário também é uma forma de constância.

Se houver dados de teste de percepção, pesquisa de consumidor ou estudo instrumental, informar método, amostra, período, modo de uso e limitações. Não usar percentuais sem documentação. Resultados individuais não devem ser apresentados como garantia de resultado universal.

15. FAQ de conversão

A FAQ deve responder às dúvidas que impedem a compra. As respostas finais dependem das informações oficiais do produto, mas a estrutura recomendada é:

Pergunta

Direção da resposta

Para quem é o Creme Bella Face?

Explicar o perfil cosmético e o objetivo de aparência, sem diagnosticar.

Como devo usar?

Informar a orientação oficial de uso, quantidade, frequência e ordem da rotina.

Posso usar no rosto todo?

Responder somente com base no rótulo e modo de uso oficial.

Posso usar em pele sensível?

Informar teste de contato, cuidados e orientação oficial; não garantir tolerância.

Posso combinar com Vitamina C?

Responder com a recomendação oficial da marca e as compatibilidades documentadas.

Preciso usar protetor solar?

Explicar o papel da proteção solar na rotina de cuidados, sem afirmar que o Sun+Care substitui qualquer orientação profissional.

Quanto tempo dura o produto?

Informar somente após validar volume, frequência e rendimento real.

Melasma desaparece?

Esclarecer que melasma é uma condição individual e que o produto é cosmético; incentivar avaliação profissional quando necessário.

O que faço se sentir desconforto?

Interromper conforme orientação, consultar as informações oficiais e buscar profissional se necessário.

Como funciona a entrega e a troca?

Inserir políticas reais e atualizadas.

16. Responsividade

Desktop — 1280 px ou mais

Usar hero com duas zonas: copy em aproximadamente 40% da largura e produto/cenografia em 60%. O módulo sticky deve ter bastante espaço negativo e não ultrapassar as bordas do viewport. A faixa de produtos pode mostrar quatro itens parcialmente, permitindo sensação de continuidade.

Tablet — 768 px a 1279 px

Reduzir a área de copy, manter o produto como foco e diminuir a amplitude das transições. Os cards de problemas podem utilizar duas colunas. O CTA persistente deve ser mantido, mas com menos elementos auxiliares.

Mobile — abaixo de 768 px

O produto deve aparecer acima do texto ou centralizado entre o título e o CTA. Não exigir scroll horizontal para entender o hero. A animação deve ser encurtada para uma sequência de entrada, escala e fade; não usar rotação intensa. Os problemas devem virar cards empilhados ou carrossel nativo arrastável.

Reduced motion

Quando prefers-reduced-motion: reduce estiver ativo, manter o produto estático, remover auto-scroll, parallax e rotação, e substituir todas as transições por fades curtos ou estados estáticos. O conteúdo e os CTAs devem permanecer na mesma ordem lógica.

17. Requisitos técnicos

ID

Requisito

TEC-01

A estrutura deve ser semanticamente composta por header, main, section, article, nav e footer.

TEC-02

A primeira dobra deve continuar compreensível sem JavaScript.

TEC-03

A animação deve usar transform e opacity sempre que possível.

TEC-04

Implementar fallback de scroll progress para navegadores sem suporte à timeline nativa.

TEC-05

Respeitar prefers-reduced-motion.

TEC-06

O CTA deve funcionar por teclado e possuir estado de foco visível.

TEC-07

A imagem do Creme deve ter alt descritivo e não depender de texto embutido para transmitir a proposta.

TEC-08

Os elementos de produto não devem causar layout shift perceptível. Reservar dimensões antes do carregamento.

TEC-09

Lazy-load para imagens abaixo do hero; preload apenas do logo, fonte crítica e Creme.

TEC-10

O carrossel de linha deve permitir navegação por teclado, toque e leitores de tela.

TEC-11

Não usar autoplay de vídeo ou som.

TEC-12

Todos os links de compra devem levar ao mesmo destino configurado, com parâmetros de campanha preservados.

TEC-13

O preço deve ser um token/variável de conteúdo e não texto hardcoded espalhado pelo código.

TEC-14

Implementar eventos analíticos para view hero, clique CTA hero, clique CTA sticky, interação com protocolo, interação com carrossel e início de checkout.

18. Critérios de aceite

A página será considerada pronta quando cumprir todos os itens abaixo:

ID

Critério de aceite

ACE-01

Uma visitante entende, na primeira dobra, que o produto central é o Creme Bella Face e que o preço de referência é R$ 159,90.

ACE-02

A rolagem aciona a entrada gradual de melasma, manchas solares e marcas pós-acne sem esconder o rótulo do Creme.

ACE-03

O movimento parece contínuo e premium, sem travamentos, saltos de layout ou rotação artificial da embalagem.

ACE-04

Ao desativar JavaScript, o conteúdo aparece em ordem lógica e o CTA continua disponível.

ACE-05

Em mobile, a primeira dobra não exige rolagem horizontal para ser compreendida.

ACE-06

Com reduced motion, nenhum movimento automático ou parallax obrigatório é executado.

ACE-07

A linha Bella Face apresenta Creme, Vitamina C, Demaquilante e Sun+Care em uma faixa visual coerente e navegável.

ACE-08

A oferta contém preço, conteúdo do produto, CTA e informações de confiança somente quando confirmadas.

ACE-09

Não existem claims de cura, garantia de resultado, números, selos, reviews ou antes/depois sem comprovação e autorização.

ACE-10

O contraste, foco de teclado, ordem de leitura e textos alternativos são validados antes da publicação.

ACE-11

O primeiro carregamento prioriza o Creme e mantém o conteúdo visualmente estável.

ACE-12

Os eventos analíticos definidos em TEC-14 são disparados corretamente em desktop e mobile.

19. Checklist de conteúdo pendente

Antes de enviar a implementação para produção, preencher:

Item

Responsável

Status

Lista completa de ingredientes do Creme

Produto/Regulatório

Pendente

Modo de uso oficial

Produto/Regulatório

Pendente

Indicações, advertências e contraindicações

Produto/Regulatório

Pendente

Política de troca e reembolso

Operação

Pendente

Prazo, preço e condições de frete

Comercial

Pendente

Formas de pagamento e parcelamento

Comercial

Pendente

Destino final dos CTAs

Tecnologia/Comercial

Pendente

Depoimentos e autorização de uso

Marketing/Legal

Pendente

Fotos adicionais e eventuais ângulos 3D

Direção de arte

Pendente

Validação da paleta com manual de marca

Branding

Pendente

20. Resumo para entregar ao time de desenvolvimento

Construir uma landing page de venda editorial para o Creme Bella Face. Usar fundo claro, serifada elegante nos títulos, Manrope no corpo, violeta profundo como cor de ação, turquesa como detalhe e o Creme como objeto central.

A primeira dobra deve ter um palco sticky de aproximadamente 260–320vh em desktop. Conforme o scroll avança, o Creme faz uma movimentação sutil, mantém-se reconhecível e os problemas de aparência entram em camadas atrás ou ao redor: melasma, manchas solares e marcas pós-acne. No fechamento do hero, aparecerão preço fictício de R$ 159,90 e CTA de compra.

Depois, seguir com seção de problemas, método em três etapas, faixa horizontal lenta da linha Bella Face, prova social real, oferta, garantia/políticas verdadeiras, FAQ e CTA final. Toda animação deve possuir fallback estático, suporte a mobile, reduced motion, teclado e ausência de JavaScript.

A inspiração é a lógica de experiência da The Nue Co., não uma cópia de layout ou conteúdo. A Bella Face deve preservar sua própria embalagem, cores, produtos e posicionamento.

Referências

[1] The Nue Co. — Homepage — referência visual para produto central, espaço negativo, atributos que entram durante a navegação e faixa de produtos.

[2] MDN — CSS scroll-driven animations — referência técnica para ligar progressão de animação ao scroll.

[3] MDN — prefers-reduced-motion — referência técnica para respeitar preferências de redução de movimento.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/daab9366-aea8-4891-b6ee-f093c35c9c4b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
