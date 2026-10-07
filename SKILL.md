---
name: branding-projeta-food
description: "A identidade da Projeta Food (marketing para delivery do Grupo Projeta, método Delivery Blindado) no sistema Plataforma Ignição v1: Noite como campo, Ignição #ED0012 em até 15% da área, logotipo sempre em arquivo, Saira larga em caixa alta com uma palavra em Ignição, Unbounded e Barlow, 14 recursos assinatura, cinco leis, três camadas, voz de sócia de operação, régua em todo número, gráficos (pviz), formas (pforms) e regras de publicidade de agência e de comida. Use em todo material da Projeta (redes, anúncio, site, e-mail, WhatsApp, diagnóstico, proposta, deck, relatório, case) e no MODO CLIENTE: peças para os restaurantes clientes com a marca do restaurante na arte e as regras food por baixo (ficha de marca, modelo travado, foto-mestra, segmentos, medidas de iFood, Google, Meta e WhatsApp, aprovação). Com skill de marca do cliente instalada (ex.: branding-fornovivo), ela dá a identidade e esta, estrutura e conformidade. Triggers: projeta food, padrão projeta, plataforma ignição, modo cliente."
---

# /branding-projeta-food · A identidade da Projeta Food e o kit para os restaurantes dela

Um estilo de casa travado, chamado **Plataforma Ignição**. A Projeta Food é a plataforma de lançamento de onde dezenas de restaurantes decolam. A base é sempre a mesma: preta, firme, com método, régua e rigor de produção. O foguete é de cada cliente, com a cor, a letra e a voz dele. O logotipo já desenha isso: o foguete vermelho decola de dentro de um O partido, apoiado numa fenda de base. No sistema, isso vira três regras: **o Noite é a plataforma, o vermelho acende só onde algo começa a subir, e todo número sai com data, base e fonte.** E uma quarta, que separa a Projeta das outras agências: **nas peças dos clientes, quem brilha é o restaurante.**

Manifesto: "A gente monta a plataforma. O seu restaurante decola." Frase do método: "Blindar antes de acelerar. Medir antes de prometer."

Palavras-guia: firme, preciso, ascendente, operacional, generoso, técnico com calor. Nunca: vendedora de post, promessa de resultado, inimiga do aplicativo, estrela da peça do cliente, número solto, uniforme da categoria (neon, vidro, halo, gradiente roxo, foguete de desenho animado).

**Abra PRIMEIRO:** [`brand-book.html`](brand-book.html), o manual em 30 seções e 7 partes, com a marca, as fichas de cor, os pares de contraste calculados, as escalas, os 14 recursos assinatura, as peças em tamanho real, o kit de produção para restaurantes e as regras de conformidade. O `<head>` e a `<style>` dele são o template portátil de **documento**. Para **apresentação**, o esqueleto pronto é [`deck-template.html`](deck-template.html). Os motores vivem em [`pviz.js`](pviz.js) (gráficos com régua) e [`pforms.js`](pforms.js) (formas da casa). Os trechos prontos da marca, da co-assinatura, dos selos, da régua, do preço com condição, do e-mail e do WhatsApp estão em [`lockup.html`](lockup.html). Os pedidos prontos por público estão em [`guia-de-uso.html`](guia-de-uso.html). Quando a peça parece com esses arquivos, está certa.

Os números de bloco citados aqui (04.2, 22.5, 25.10) são os do `brand-book.html`: cada um abre direto em `brand-book.html#s04-2`, `#s22-5`, `#s25-10`.

---

## A primeira pergunta: quem vai ler?

Antes de cor, fonte ou formato, decida a **camada**. Ela decide de quem é a marca.

| Camada | Quem lê | Quem manda | Exemplos | Bloco |
|---|---|---|---|---|
| **1** | o consumidor do restaurante | **o restaurante**, 100% | anúncio, post, story, reels, foto de item no aplicativo, cardápio próprio, Google, WhatsApp, embalagem | 22.5 |
| **2** | o dono do restaurante | **a moldura é da Projeta, o título é do restaurante** | relatório mensal, raio-X do diagnóstico, proposta, plano de 90 dias, mini guia, reunião de resultado | 18.2 |
| **3** | o próximo cliente da Projeta | **a Projeta**, com o cliente intacto dentro da Moldura O e autorização escrita | case, post de resultado, deck comercial, portfólio, site, anúncio da Projeta | 19.2 |

Frase-guia: **se quem vai ler é o consumidor do restaurante, manda o restaurante. Se é o dono do restaurante, divide a moldura. Se é o próximo cliente da Projeta, manda a Projeta, com autorização.**

Na camada 1 a Projeta **não aparece na arte**: nem logo, nem símbolo, nem Seta A, nem Noite, nem Ignição, nem Saira. Entra só o método invisível (grade, áreas seguras, espaço do preço, piso de letra, foto-mestra, checklist). Na camada 2, o logo do restaurante tem **pelo menos 1,5 vez a altura do PROJETA**, que vai reduzido no canto.

---

## Onde a skill roda (e o que muda em cada lugar)

| Ambiente | Onde instalar | O que muda |
|---|---|---|
| **Claude Code** (terminal, VS Code, app de desktop) | `~/.claude/skills/branding-projeta-food` (clone do repositório) | Nada. Ambiente completo: escreve arquivo, usa `assets/`, roda os motores, exporta PDF. |
| **Codex** (CLI, IDE, app) | `~/.agents/skills/branding-projeta-food` (versões antigas: `~/.codex/skills/`) | Nada. `agents/openai.yaml` dá o nome e a descrição da lista de skills. |
| **claude.ai** (navegador e celular) | Personalizar > Skills > + > Enviar uma skill: o `branding-projeta-food.zip` do Releases (execução de código ligada) | **O artefato é um arquivo só: não enxerga `assets/` nem os `.js`.** |
| **ChatGPT** | Skills do app, onde a conta liberar o envio: o mesmo `branding-projeta-food.zip` | Igual ao claude.ai: material em arquivo único. |

**O que o ZIP leva e o que fica no site do manual.** O pacote traz tudo o que a skill usa para produzir (marca em SVG e PNG web, favicon, avatar, imagem de compartilhamento, `marca.json`, assinatura com placa, fontes livres em woff2 e a Saira Larga Projeta, motores, modelos, kit do cliente e guia de uso). Ficam só no endereço público `https://rafaelnasch.github.io/branding-projeta-food/`: o vetor original do site (`assets/referencia-original/`), as PNG da marca em resolução de impressão (2400 px) e as versões autocontidas e PDFs do `dist/`. Para impressão, baixe a PNG grande de lá.

**REGRA DO NAVEGADOR (claude.ai):** todo HTML gerado ali é **autocontido**.
1. **Marca da Projeta:** use os blocos em **data URI** do [`lockup.html`](lockup.html) (completa, reduzida, símbolo e favicon, seções "A completa em data URI", "A reduzida em data URI" e "O símbolo e o favicon em data URI"). Copie o `src` inteiro; nunca digite, resuma ou reconstrua um data URI, nunca desenhe o logotipo em `<path>`.
2. **Marca do restaurante (modo cliente):** só o arquivo que o cliente mandou ou o da skill de marca dele, convertido em data URI por código, sem alterar. Sem arquivo, espaço reservado com o nome do restaurante em texto e a pendência dita. Nunca redesenhe o logo de um cliente.
3. **Motores:** cole `pviz.js` e `pforms.js` dentro de um `<script>` do próprio arquivo.
4. **Fontes:** continuam pelo link do Google Fonts (Saira, Unbounded, Barlow e as fontes livres do cliente). **Transducer e Kallisto nunca entram**, em lugar nenhum.
5. **PDF:** entregue o HTML e mande imprimir pelo Chrome (seção "Celular e PDF").

**Para ENVIAR um HTML a alguém**, use a versão autocontida: `python3 autocontido.py <arquivo.html>` grava em `dist/` com imagens, fontes livres e motores embutidos. As versões prontas do manual, da apresentação, do código da marca e deste guia estão em `dist/` no repositório e no endereço público (fora do ZIP; rode `python3 autocontido.py` para gerar de novo).

## Cores (TRAVADAS)

O sistema é escuro por natureza: **não existe modo claro ou escuro automático**, a cor é da marca. `body` sempre com background explícito (`var(--noite)`) e `color-scheme: dark`; documentos de leitura longa trocam o campo para Branco por seção, nunca pelo tema do aparelho.

**Sete campos.** **Noite** é o campo principal (capa, post, story, deck, site, abertura de relatório): ocupa a maior parte de qualquer conjunto. **Grafite Brasa** alterna em faixa. **Superfície** e **Superfície Alta** são cartão e item ativo sobre Noite. **Preto** é mídia (vídeo, foto de estúdio, logo em imagem para anúncio), nunca campo de documento longo. **Branco** é leitura longa, documento impresso e o campo que mostra a cor do restaurante com fidelidade. **Bancada** é cartão, zebra de tabela e placa do logo do cliente (raio 12 px) sobre Branco. **Ignição** como campo inteiro é **campo de evento**: manifesto, abertura de capítulo, virada, fecho de carrossel.

| Token | Nome | HEX | Uso |
|---|---|---|---|
| `--noite` | Noite | `#050203` | campo da marca; texto sobre Branco |
| `--preto` | Preto | `#000000` | mídia, vídeo, logo aplicado em imagem de anúncio |
| `--superficie` | Superfície | `#10090B` | cartão e painel sobre Noite |
| `--superficie-alta` | Superfície Alta | `#1A0D10` | cartão em destaque, item ativo, campo de formulário escuro |
| `--grafite` | Grafite Brasa | `#221E1E` | faixa alternada, perguntas frequentes, rodapé de deck |
| `--branco` | Branco | `#FFFFFF` | leitura longa, documento impresso, campo da cor do cliente |
| `--bancada` | Bancada | `#F7F7F7` | cartão sobre Branco, zebra, placa do logo do cliente |
| `--ignicao` | **Ignição** (500) | `#ED0012` | **o vermelho único**: botão, Faixa de Telemetria, Seta A, foguete e FOOD do logo, uma palavra ou linha por título grande, numeral grande |
| `--chama` | Chama (300) | `#FF5A67` | o vermelho de TEXTO PEQUENO no escuro (link, rótulo, número de 14 a 23 px) |
| `--rubro` | Rubro (600) | `#AD000D` | o vermelho de TEXTO no claro; botão pressionado; borda de campo claro |
| escala | Rosado 50 · Faísca Clara 100 · Faísca 200 · Brilho 400 | `#FEDADE` · `#FA949D` · `#FF7A85` · `#FF2638` | nota em documento claro · quarta série no escuro · destaque pequeno · **só luz em tela** |
| escala | Brasa Funda 700 · Vinho 800 · Vinho Noite 900 · Carvão Rubro 950 | `#7E000A` · `#560007` · `#300008` · `#120002` | quarta série no claro · cartão de método · faixa de diagnóstico do site · transição de gradiente |
| `--divisa` | Divisa | `#650008` | **só** o fio de 2 px entre colunas da Faixa de Telemetria |
| fumaça | Fumaça 50 · 200 · 400 · 600 · 800 | `#F0EEEE` · `#BDB8B8` · `#8C8686` · `#5E5858` · `#3A3434` | cinzas quentes: 200 e 400 no escuro, 600 e 800 no claro |
| fios | Fio escuro · Fio claro | `#FFFFFF24` · `#E2DEDE` | só fio, nunca texto |
| estados | Positivo · Atenção · Negativo · Informação | escuro `#75DC91` `#FFC145` `#FF8FB0` `#8FB8FF` · claro `#1E7B45` `#8A5A00` `#A3175A` `#1F5FBF` | sempre com ícone e palavra |

**Regra de bolso do vermelho:** vermelho pequeno no escuro é **Chama**; vermelho pequeno no claro é **Rubro**; **Ignição** é para área, botão, número grande, título grande (18 px ou mais; sobre Grafite, Superfície e vinhos, 24 px ou mais) e logotipo. **Erro e queda são rosa (Negativo), nunca vermelho:** na marca, vermelho quer dizer foco.

**Pares de leitura (norma internacional de acessibilidade da web, WCAG 2, calculados em 05/10/2026):** Branco/Noite 20,66 · Branco/Grafite 16,50 · Chama/Noite 6,80 · Chama/Grafite 5,43 · Fumaça 200/Noite 10,54 · Fumaça 400/Noite 5,77 · Noite/Branco 20,66 · Rubro/Branco 7,55 · Rubro/Bancada 7,04 · Fumaça 600/Branco 6,97 · Rubro/Rosado 5,86 · Branco/Rubro 7,55. **Com condição:** Branco sobre Ignição 4,56 (peso 600 e 16 px no mínimo: botão e régua da Telemetria) · Noite sobre Ignição 4,54 (peso 600) · Ignição sobre Noite 4,54 e sobre Branco 4,56 (só a partir de 18 px) · Ignição sobre Grafite 3,62, Superfície 4,32, Bancada 4,25 (só 24 px ou mais e ícone). **Proibidos como texto:** Branco sobre Brilho (3,76), Ignição sobre Divisa (2,96), Branco abaixo de 55% de opacidade. A tabela completa (67 pares) está em 08.2. Par que não está lá não está liberado.

**Branco em quatro opacidades** (hierarquia no escuro): 100% título · 86% corpo · 68% apoio · 55% legenda (o piso). Abaixo de 55% é decoração.

**Orçamento do vermelho (LEI 2):** Ignição ocupa **no máximo 15% da área** de cada peça. Num post de 1080 × 1350, isso é cerca de 218 mil px², uma faixa de 1080 × 202 px. **Exceções nomeadas, uma por peça:** a Faixa de Telemetria e o campo de evento. Deck e carrossel: no máximo **uma tela em Ignição a cada seis**, nunca duas seguidas. No conjunto das peças (feed, deck, site): Noite e Preto 55 · Superfície, Superfície Alta e Grafite 15 · Branco e Bancada 15 · escala Ignição 12 · Fumaça e fios 3. A foto de comida fica fora da conta.

**Saem:** o vermelho do vetor antigo `#FF0013` (convertido para `#ED0012` na versão mestra) e o `#E31625` de PNGs antigos; o **laranja do Grupo Projeta** em qualquer peça da Projeta Food; neon, vidro fosco, halo atrás de botão, brilho, degradê arco-íris (o único degradê é Ignição para Noite, por Vinho e Carvão Rubro, em fundo de vídeo e capa); verde de aplicativo de mensagem como cor de marca; dezenas de opacidades soltas (ficam 100, 86, 68 e 55%). **Na gráfica:** partida C0 M100 Y92 K0 e Pantone 185 C, a validar em prova física (pendência 05).

## Tipografia (TRAVADA)

```html
<link href="https://fonts.googleapis.com/css2?family=Saira:wdth,wght@100..125,400..800&family=Unbounded:wght@500..700&family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
```

```css
--font-titulo:"Transducer","Transducer Projeta","Saira",Arial,sans-serif;
--font-display:"Kallisto","Kallisto Projeta","Unbounded","Arial Black",sans-serif;
--font-texto:"Barlow",Arial,sans-serif;
--largo:112.5%;   /* font-stretch da Saira */
```

| Papel | Fonte | Regras |
|---|---|---|
| Título | **Saira 700** (800 em capa e impacto), `font-stretch:112.5%` | Substitui a Transducer do site. **Sempre caixa alta**, entreletra **-0,055em**, entrelinha **1,0** (**0,98 no mínimo** com acento ou cedilha). Uma linha ou a palavra decisiva em Ignição (`<em>` dentro de `.acento`). |
| Numeral | **Saira 500** (600 sobre Ignição e na Contagem) | Entreletra -0,06em, entrelinha 0,9, `lining-nums tabular-nums`. Sinal (%, +, R$, x) a 60% do corpo, em Ignição. |
| Selo, botão, etiqueta, subtítulo curto | **Unbounded 600** (700 em botão pequeno) | Substitui a Kallisto. Caixa alta, entreletra 0 a 0,02em, **no máximo três palavras seguidas**. Nunca texto corrido. |
| Texto | **Barlow** 400 · 500 · 600 · 700 | A mesma do site, livre. Corpo 400, chamada 500, rótulo 600, destaque curto 700. **Pavio** (sobretítulo): Barlow 600, 12 px, caixa alta, 0,34em (0,24em abaixo de 768 px), com o traço Ignição de 16 × 2 px. |

- **Fonte oficial licenciada:** Transducer (James Todd Design) e Kallisto (Device, Rian Hughes) entram na frente da pilha e mandam onde a licença existir. **Proibido** embutir, copiar, enviar ou publicar arquivos delas (repositório, HTML autocontido, Drive, kit do Canva, pasta de cliente ou fornecedor). Até a pendência 04 fechar, **todo material público sai com Saira e Unbounded**.
- **Escala do documento** (computador/celular): display 88/44 (Saira 800) · título de seção 60/34 · subtítulo 36/26 · intertítulo 24/20 (Saira 700 ou Unbounded 600) · chamada 21/18 (Barlow 500, entrelinha 1,5) · corpo 18/17 (Barlow 400, entrelinha 1,6, 60 a 75 caracteres) · apoio 15 · legenda e régua 13 (o piso do documento para texto de leitura) · Pavio 12 · numeral grande 96 a 160 / 56 a 88. **A Barlow só aparece em 21, 18 (17), 15, 13 e 12 px.** Saira só a partir de 20 px. **Piso de 13 px para texto de leitura; o Pavio (12 px, caixa alta, 600) e o texto da Etiqueta de Crédito (11 px, Unbounded 600) são as únicas exceções.** Título de seção cabe em 320 px sem quebrar palavra e nunca fica abaixo de 30 px.
- **Escala da peça de 1080 px** (unidade `--u: calc(100cqw/1080)` dentro de `.mock`): título 88 a 128, padrão 104 (até 3 linhas) · numeral do Contador 140 a 220, padrão 200 · subtítulo 48 a 60 · corpo e chamada 32 a 38 · botão 30 (Unbounded 600) · sobretítulo e régua 26 · **piso absoluto de 26 px para qualquer texto da peça**, inclusive régua, condição de promoção e aviso legal (o post aparece a cerca de 36% no celular) · margem 60 nos quatro lados · módulo 1 T = 8 px · story e reels na mesma escala, dentro de 270 px do topo e 670 da base.
- **Na camada 1, a tipografia é a do cliente** (`--cliente-fonte-titulo`, `--cliente-fonte-texto`). O que não muda: piso de 26 px, margem de 60 px, título em até 3 linhas.
- **Substitutas por ferramenta:** Saira Larga Projeta (a Saira fixada em 112,5%, quatro pesos, licença aberta) em `assets/fontes/saira-larga-projeta/` para Figma, Canva com envio de fonte, PowerPoint, Keynote e editor de vídeo; Canva sem envio, Google Slides e Docs: Saira 800 na largura normal, entreletra -2%; corpo de e-mail: Arial Black ou Arial Bold e Arial. Nunca uma fonte "parecida de olho"; nunca letra estilizada com caracteres especiais em legenda.
- **Saem:** entreletra aberta no título, palavra esticada (só a Contagem estica, e só numeral), Unbounded em texto corrido, duas palavras em Ignição no mesmo título, itálico, brilho, contorno ou sombra de texto, caixa alta em texto longo, condição ou aviso legal.

## A marca (TRAVADA)

O logotipo é um sistema de quatro peças medidas no vetor oficial do site: a palavra **PROJETA** (letras largas de traço único, espaçamento irregular que faz parte do desenho), o **foguete** que decola do **O partido** (cunha em cima, fenda reta embaixo), o **A final como Seta A** (chevron vermelho de topo chato a cerca de 64,6 graus, sem barra) e a linha **FOOD** (vermelho, espaçado) **MARKETING** (branco, menor). Medidas: altura das maiúsculas A = 35,75 u · traço T = 6,41 u · raio R = 11,78 u (u = unidade do arquivo de 239,97 u de largura). As versões de `assets/brand/` são a **versão mestra a partir do vetor oficial**: vermelho convertido de `#FF0013` para `#ED0012`, caminho duplicado do O removido, nenhuma coordenada de forma alterada (sobreposição de 99,9% com o original). Rótulo em material que apresenta a marca: "versão mestra a partir do vetor oficial · cor unificada em #ED0012 · aguarda aprovação". O vetor sem alteração fica em `assets/referencia-original/` só como prova de origem.

A marca é **sempre um arquivo** de `assets/brand/`: nunca redesenhe, redigite PROJETA ou FOOD MARKETING em fonte, corrija o espaçamento entre as letras, recolora fora das versões (nem com o laranja do grupo), gire, incline, estique, contorne, aplique sombra, brilho, neon, relevo ou degradê, separe ou gire o foguete, use o foguete solto como marca, ponha a negativa no claro ou a colorida no campo Ignição, nem use o vetor antigo.

| Composição | Arquivo | Uso |
|---|---|---|
| Completa | `projeta-completa-<cor>.svg` / `.png` (2400 px) / `-web.png` (800 px) | assinatura padrão, a partir de **240 px** de largura (60 mm no impresso) |
| Reduzida | `projeta-reduzida-<cor>.*` | sem FOOD MARKETING, de **96 a 239 px** (25 mm): cabeçalho de celular, rodapé de slide e relatório, co-assinatura, rodapé de post |
| Símbolo | `projeta-simbolo-<cor>.*` | O partido com o foguete (0,675 : 1), a partir de **24 px de altura** (8 mm): marca-d'água, Etiqueta de Crédito, carimbo. Não substitui o logotipo em peça de apresentação |
| Avatar | `projeta-avatar.svg` / `-1080.png` / `-640.png` | perfil de Instagram, WhatsApp, Google, LinkedIn: símbolo com 64% da altura de um quadrado Noite, dentro do círculo de 80%; mínimo 40 px |
| Favicon | `projeta-favicon.svg` / `-16` `-32` `-180` `-512.png` | aba do navegador; o SVG troca a cor do O conforme o tema do navegador; os PNG vêm em placa Noite |
| Compartilhamento | `projeta-compartilhamento-1200x630.png` | imagem do link do site |
| Foguete | `projeta-foguete-<cor>.*` | **elemento de construção** de recursos e ícones. Não é marca e nunca assina peça sozinho |

**Cores de cada composição:** `negativa` (a oficial: PROJET e MARKETING em Branco; foguete, A e FOOD em Ignição) sobre Noite, Preto, Superfície, Superfície Alta, Grafite Brasa e foto escurecida (véu Noite de 70 a 75%); Vinho Noite com cautela · `positiva` (Branco vira Noite, o vermelho fica) sobre Branco, Bancada e Rosado · `branca` (uma cor) é a **única** no campo Ignição, e também sobre vídeo, foto e cor de outra marca escura · `noite` (uma cor, `#050203`) para gravação, carimbo, impressão a uma cor e cor clara de outra marca · `ignicao` (uma cor) raro, só brinde e gravação sobre claro neutro. Foto movimentada sem véu: nenhuma versão.

Proporções (`width`/`height`): completa **239,97 × 71,09** (3,3756) · reduzida **239,97 × 55,68** (4,3098) · símbolo **66,69 × 98,84** (0,6747) · avatar 1080 × 1080. Medidas completas, respiros e testes de leitura em `assets/brand/marca.json`.

- **Respiro:** x = R = 11,78 u, livre nos quatro lados (da ponta do foguete em cima, da linha FOOD MARKETING embaixo, da haste do P e da perna do A nos lados). Em CSS: `padding: calc(largura * .0491)` na completa e na reduzida; `.3135` no símbolo. Logo de 240 px: cerca de 12 px; 60 mm: cerca de 3 mm.
- **Na peça de 1080:** reduzida ou completa negativa com **300 u** de largura no rodapé; completa só na capa, na última lâmina e em peça institucional; sobre Ignição, a branca; sobre Branco, a positiva.
- **Google Ads:** nunca PNG branco com fundo transparente; suba o avatar ou a negativa aplicada sobre Preto dentro da imagem.
- **Nome em texto:** **Projeta Food** (duas palavras, iniciais maiúsculas) na primeira menção; depois "a Projeta" quando não houver dúvida com o grupo; a Projeta fala de si como "a gente" na peça e "a Projeta" no documento. Método: **método Delivery Blindado** (sem sigla, sem "DB", sem ® até o registro: pendência 06). Domínio e redes: `projetafood.com.br` · `@projetafood`. Nunca "ProjetaFood", "PROJETA FOOD" corrido fora do logotipo, "PF", "a agência" no primeiro uso.

## As cinco leis da casa (TRAVADAS)

1. **O restaurante é a estrela; a Projeta é a plataforma.** Na peça para o consumidor do restaurante, a marca do restaurante manda e a Projeta não aparece na arte. Nos documentos de gestão, o nome e o logo do restaurante são maiores que os da Projeta (1,5 vez a altura do PROJETA).
2. **Vermelho é ignição, não parede.** O campo é Noite. A Ignição acende uma informação por peça e ocupa no máximo 15% da área. Exceções nomeadas: Faixa de Telemetria e campo de evento, uma por peça.
3. **Tudo sobe.** Trajetória, Seta A, gráfico de evolução e ordem de leitura vão de baixo para cima e da esquerda para a direita, e terminam numa ação. Seta A só para cima ou para a direita. Queda num dado é o ícone `trending-down` na cor semântica, nunca Seta A invertida e nunca Ignição.
4. **Todo número tem régua.** Nenhum número público sai sem período, base e fonte. Sem prova, entra o Contador vazio com "dado em validação", ou o valor em colchete. **Sem dado nunca vira zero.** A frase completa tem cinco partes, nesta ordem: número, o quê, de quem e de quantos, quando, fonte ("38% dos pedidos vieram do cardápio próprio, numa unidade da Forno Vivo, em set/2026, segundo o painel do cardápio"). Gerador da régua, pares Assim e Não assim, números de porte e pasta de comprovação (`06_provas/`, um número por pasta, guarda de cinco anos) na seção 15.
5. **O que a peça mostra é o que chega.** Foto real do prato, na porção, no acompanhamento e na embalagem que o cliente recebe. O fogo é do sistema gráfico, nunca efeito colado na comida. Inteligência artificial só para tratar foto real, nunca para inventar prato.

Cada lei tem, na seção 03 do manual, o porquê, o teste de cinco segundos, Assim e Não assim em peça real e a tabela de cruzamentos (03.7: quando duas leis brigam, vence a de número menor).

Quando o manual não responde: procure pelo trabalho (atalhos da introdução), aplique a lei mais próxima, entregue a versão permitida (colchete e espaço reservado) e leve a dúvida à direção de arte para virar regra na próxima versão.

## Arquitetura de marca

| Marca | Papel | Como aparece |
|---|---|---|
| **Grupo Projeta** (marca-mãe) | grupo; assina "Marketing & Tech", laranja e foguete solto | só em documento institucional do grupo, com o arquivo oficial dele. O laranja não entra na Plataforma Ignição |
| **Projeta Food** (esta skill) | marketing para delivery e restaurantes; vermelha, FOOD MARKETING, foguete dentro do O | logotipo; avatar `projeta-avatar` |
| **Projeta Clinic** (marca irmã) | marketing para clínicas, sistema próprio | nunca divide peça com a Projeta Food, salvo assunto do grupo |
| **Delivery Blindado** (método) | o produto: quatro etapas fixas, nesta ordem: **Diagnóstico, Estratégia, Execução, Otimização** | nome em texto, numerado 01 a 04, desenhado com a Trajetória; nunca logotipo, nunca quinta etapa, nunca sinônimo |
| **Marcas de comida do grupo** | para a Projeta Food, são **clientes** com sistema próprio | camada 1 com a marca delas; em case, relatório ou proposta da Projeta, a nota "empresa do Grupo Projeta"; mesma régua e autorização de qualquer cliente |
| **Restaurantes clientes** | a estrela das peças | camada 1 inteira na marca deles; camada 2 com co-assinatura; camada 3 só com autorização escrita |
| **Sócios** | Clívio Ferreira (CEO), Enio Alves (sócio e diretor comercial), Bruno Lima (sócio) | cargos conforme o site, com "confirmação pendente" nos modelos (pendência 14); retrato só com termo de imagem |

**Selos de parceiro** (Meta Business Partner, Google Partner, selo de consultoria do grupo) são prova, não decoração: só com status vigente confirmado e arquivo oficial do programa; depois do logotipo, menores que ele, respiro de metade da altura do selo; no site, o selo do Google entra pelo código oficial; o selo de consultoria fica separado dos de plataforma e nunca sob "certificados"; nunca em peça de cliente, roupa, brinde ou cartão. Até a pendência 09 fechar, entram como `[selo oficial vigente]`.

## O que a Projeta é e promete

- **Posicionamento (do site, sem trocar palavras):** "Marketing, tecnologia e estratégia comercial para restaurantes que querem crescer com previsibilidade."
- **Para quem:** donos e sócios de restaurantes que já vendem todo dia (delivery, salão, retirada, cardápio próprio) e querem previsibilidade. Não é curso para quem está começando.
- **Promessa:** de método, não de resultado: "um método para dar previsibilidade às vendas do seu delivery".
- **A bandeira:** o tráfego pago entra como combustível só depois que a base está organizada (canais, cardápio próprio, rastreamento e dados). Toda peça que fala de anúncio respeita essa ordem.
- **Inimigo certo:** a venda sem estrutura (promoção solta, ação isolada, post bonito sem pedido, anúncio sem rastreio). **Inimigo errado:** o aplicativo de delivery, que é canal a equilibrar. Nada de logo de aplicativo riscado, tela de aplicativo imitada ou "fuja do aplicativo".
- **Os cinco desafios** (os do site): dependência do aplicativo · conteúdo que não vira pedido · cardápio próprio sem estratégia · anúncio sem clareza · vendas que oscilam.
- **Seis serviços, cada um numa etapa:** tráfego pago Meta e Google (03) · estratégia de conteúdo, inclusive conteúdo gravado por clientes e criadores (03) · Google Meu Negócio (01 e 03) · cardápio digital próprio (03) · relatórios e dados (04) · acompanhamento mensal (02 e 04).
- **Porta de entrada:** diagnóstico gratuito de 40 minutos. O formulário pergunta o principal desafio, com sete opções: dependência de aplicativos de delivery, margem baixa, poucas vendas, cardápio próprio, tráfego e anúncios, conteúdo e redes sociais, organização e processo.
- **Sede e contato:** Pouso Alegre (MG) · contato@projetafood.com.br · @projetafood. Telefone, WhatsApp, razão social e CNPJ entram em colchete (pendências 15 e 16).
- **Números de porte** (operações ativas, estados, cidades) só com **um único valor aprovado**, definição, data de corte e fonte, igual em todo canal: até a pendência 07, `[valor aprovado]` com a régua. **Percentuais de resultado** só com base, período e fonte, ou Contador vazio (pendência 08). Nunca copie números do site para uma peça.

## Voz e tom

A Projeta fala como **sócia de operação**, não vendedora de post: quem entende de cozinha e de caixa. Seis traços, cada um entre dois excessos: **firme** (afirma o que sabe e diz o que não sabe), **direta** (primeira frase com o assunto), **operacional** (pedido, horário de pico, taxa, recompra; termo técnico sempre traduzido), **generosa** (o restaurante é o sujeito da frase), **honesta com número** (todo número com régua; mês ruim dito com causa e próximo passo), **calor** ("você" e "seu restaurante", nunca "prezado cliente", sem gíria de vendedor).

- **Frase em batida:** frases curtas que terminam em ponto e avançam como etapas ("Atrair. Converter. Pedir de novo."). Comece pelo que o dono viveu ("Sexta lota. Terça some."), mostre a ordem do método ("Primeiro a base. Depois a subida.") e **feche com um convite**. Até **14 palavras** por frase em peça e anúncio, até **25** em documento; no máximo três batidas curtas seguidas; voz ativa; batida sem conteúdo ("Mais. Melhor. Maior.") está fora.
- **Assinaturas** (uma por peça): "Atenção que vira pedido." · "Base organizada antes de acelerar." · "A moldura é nossa. A estrela é sua."
- **Palavras que usamos:** pedido, margem, taxa, comissão, canal próprio, cardápio próprio, recorrência, cliente que volta, movimento, horário de pico, previsibilidade, rastreamento, diagnóstico, base organizada, método, régua.
- **Palavras que evitamos (nunca, em nenhum texto público):** explodir, bombar, escalar sem limites, garantido, segredo, hack, fórmula mágica, fique rico, fuja do iFood, "o melhor da cidade" sem prova, sinergia, disruptivo, depoimento inventado, resultado de um cliente vendido como típico. **Só com prova na pasta:** "o mais pedido", "o primeiro", "o único", "mais rápido", qualquer porcentagem e qualquer número de porte.
- **Jargão traduzido** (em peça pública a sigla nunca aparece sozinha; em documento de gestão pode vir entre parênteses depois da tradução): ROI = retorno · ROAS = faturamento gerado por real investido em anúncio · CAC = custo para conquistar cada cliente · CPA = custo por pedido · CTR = taxa de clique · UGC = conteúdo gravado por clientes e criadores · ticket médio = valor médio do pedido · lead = contato interessado · funil = caminho do primeiro contato até o pedido · LTV = quanto um cliente compra ao longo do tempo.
- **Chamadas aprovadas:** "Quero um diagnóstico" (botão cheio) · "Agendar diagnóstico gratuito" (landing e anúncio) · "Solicitar diagnóstico gratuito" (envio do formulário) · "Conhecer o método" (contorno) · "Falar com a Projeta pelo WhatsApp" · "Ver o relatório completo". Nunca "clique aqui", "saiba mais", "quero bombar", "chama no zap".
- **Por público:** dono que ainda não é cliente (parceiro de gestão, convite ao diagnóstico) · dono que já é cliente (sócia que presta contas: dado primeiro, opinião depois, em três frases) · parceiro (claro como contrato: entrega, prazo, formato, direitos, #publi, quem aprova) · time (checklist: cliente, peça, versão, situação). **O consumidor do restaurante não é público da Projeta:** na peça dele, a voz é a do restaurante, definida na ficha de marca. Nada de "atenção que vira pedido" no story da pizzaria.
- **Pontuação e grafia:** **zero travessão** (nem longo nem curto) · intervalo com "a" (18h a 23h) · no máximo **uma exclamação** por peça, nunca em título de relatório · **emoji só em legenda e WhatsApp da Projeta**, no máximo dois, no fim da frase, nunca na arte, documento, proposta ou relatório · sem reticências · caixa alta só em título curto, selo, botão e rótulo · R$ 39,90 e R$ 1.250,00 · 18h30 · 05/10/2026 · out/2026 em gráfico · 38% colado e 4,2% com vírgula · valor pendente sempre entre colchetes, e colchete nunca vai ao ar.
- **Teste de voz (14.10), seis perguntas:** o dono reconhece a situação? método, não milagre? todo número com régua? sigla traduzida? inimigo certo? pontuação limpa e convite no fim? Um "não" segura a peça.

## Recursos assinatura (os 14)

Nenhum enfeite da Projeta é inventado: cada recurso sai de uma medida do logotipo ou de um gesto do site. **Todos são da Projeta: nenhum entra na camada 1.** Um de cada por peça. Desenhe pelo `pforms.js` ou pelas classes da base, nunca à mão, nunca com banco de imagem, nunca com emoji.

| Recurso | Vem de | Regra principal |
|---|---|---|
| **Moldura O** (`.moldura-o`, `pforms moldura`) | o O partido | cantos com raio de um terço da altura, espessura de 1 traço, cunha em cima (13% por dentro, 27% por fora), fenda reta embaixo (9%); emoldura UMA coisa: o logo do cliente na capa do relatório, a foto real do prato no case, o resultado principal. Branco no Noite, Noite no Branco, Ignição só se for o único vermelho |
| **Seta A** (`.seta-a`, `pforms seta`) | o A final | chevron de topo chato (7,14 u sobre base de 41,12 u, pernas a cerca de 64,6 graus); marcador de lista (12 a 16 px), sinal de alta (até 48 px), escada de 2 a 4 setas (30, 60 e 100%). Nunca para baixo, nunca preenchida, nunca caractere de teclado |
| **Trajetória** (`pforms trajetoria`) | a rota do foguete | nasce tracejada embaixo à esquerda e sobe contínua em Ignição a partir de cerca de 62% do caminho até a Seta A; marcos = as quatro etapas; 2:1 no computador, 4:3 abaixo de 520 px; nunca desce, faz laço ou cruza texto; com dado real, vira gráfico no pviz |
| **Contagem** (`.contagem`, `pforms contagem`) | os numerais dos cartões do site | Saira 600 esticada 1,5 vez, sempre dois dígitos, só para ordem (seção, etapa, passo, slide); rótulo "ETAPA 01 · DIAGNÓSTICO"; sempre texto, nunca curva |
| **Contador com régua** (`.contador`, `pviz contador`) | a Lei 4 | numeral Saira 500, sinal a 60% em Ignição, rótulo, régua obrigatória (período, base, fonte) e marca de origem (traço de 3 px: cheio medido, cheio fino calculado, tracejado azul referência, pontilhado amarelo estimado); sem prova, Contador vazio "dado em validação" |
| **Faixa de Telemetria** (`.telemetria`, `pviz faixa`) | a faixa vermelha de números do site | exceção nomeada da Lei 2, uma por peça; 3 a 5 colunas, fios de 2 px em Divisa, numeral Saira 600 branco, régua embaixo obrigatória; versão escura (Superfície com numerais em Ignição) para relatório |
| **Brasa Controlada** (`.brasa`, `pforms brasa`) | o halo do topo do site | degradê radial num único canto (superior direito), até 30% da área, centro com no máximo 52%: `radial-gradient(circle at 100% 0%, #ED001285 0%, #AD000D42 37%, transparent 70%), #050203`; contra-halo Vinho Noite opcional; nunca atrás de texto pequeno, em volta do logo ou sobre comida |
| **Pavio** (`.pavio`) | o traço do sobretítulo do site | 16 × 2 px em Ignição antes do sobretítulo (40 × 2 centralizado); abre seção e marca categoria |
| **Chama de Status** (`.chama`, `.status`) | a chama oficial do foguete | 8 a 14 px, sempre com rótulo: "em andamento", campanha no ar, etapa atual, mês da mudança no gráfico; pulso só de opacidade (1,6 s). Não é "promoção quente": pico de vendas é o ícone `flame` |
| **Grade de Lançamento** (`.grade-lanc`, `pforms grade`) | o traço T | módulo de 8 u; 12 colunas e margem 60 u; textura só nas peças da Projeta (malha de 48 px a 6%); modo "construcao" mostra colunas e áreas seguras |
| **Mira de Diagnóstico** (`.mira`, `pforms mira`) | os visuais do método | quatro cantos em L (braço 3 T, traço 0,5 T, afastados 1 T) enquadrando print, captura ou foto analisada; Ignição para o problema; só diagnóstico, relatório e case |
| **Etiqueta de Crédito** (`.etiqueta-credito`) | o símbolo | pílula de 24 px com o símbolo e "FEITO COM PROJETA FOOD" ou "RELATÓRIO PREPARADO PELA PROJETA FOOD" (Unbounded 600, 11 px), monocromática; nunca na camada 1 |
| **Fio com Fenda** (`.fio-fenda`, `pforms fio`) | a fenda de base do O | fio de 1 a 2 px interrompido no centro (9%), com Seta A ou Chama pousada; um por tela; vertical de 1 px na co-assinatura |
| **Anel de Ignição** (`.anel`, `pforms anel`) | o contorno em giro do site | contorno a 14% com arco de 25% em Ignição no canto superior direito; marca o cartão ativo, o plano recomendado, o formulário; um por vez; gira só em tela (5,2 s) |

Onde cada recurso entra (10.15): rede e anúncio da Projeta, diagnóstico e proposta, relatório (Moldura O com o logo do cliente, Telemetria escura, Etiqueta de Crédito) e case (foto real dentro da Moldura O). **Na peça do restaurante: nenhum.** Clichês vedados: foguete de desenho animado, fumaça, estrelas, planeta, astronauta, seta para a lua, chama realista, fogo aplicado sobre comida.

## Ícones e movimento

**Lucide** em contorno, traço 2 (1,75 em 16 px), pontas arredondadas, sempre com palavra ao lado. Tamanhos do documento: 16, 20, 24 (padrão), 32, 48; na peça de 1080: 48 a 72 u, com 16 u de folga do texto. Cor do texto por padrão; destaque em Chama no escuro e Rubro no claro; Ignição só a partir de 24 px; estado na cor semântica com palavra. **Mapa da casa:** pedido `shopping-bag` · entrega `bike` · cardápio `book-open` · cupom `ticket` · horário `clock` · avaliação `star` · local `map-pin` · WhatsApp `message-circle` (sempre com a palavra; o manual não desenha marca de terceiro) · tráfego pago `megaphone` · conteúdo `clapperboard` · Google `search` · relatório `chart-column` · diagnóstico `scan-search` · meta `target` · alta `trending-up` (ou a Seta A) · queda `trending-down` · alerta `triangle-alert` · pico de vendas `flame` · alergênicos `wheat`, `milk`, `egg` (sempre com "Contém glúten", nunca o ícone sozinho). Destaques do Instagram da Projeta: Método (Seta A), Diagnóstico (o único em Ignição), Cardápio, Tráfego, Prova, Bastidor opcional; ícone branco ocupando até 40% do círculo; nome digitado no aplicativo. Na peça do restaurante, o ícone veste a paleta dele. **Nunca emoji na arte**, ícone preenchido, outra biblioteca misturada, ícone redesenhado ou ícone sem palavra.

**Movimento:** tudo entra rápido e assenta. Três durações: 180 ms (botão sobe 2 px, foco), 420 ms (entrada de bloco, sanfona, sumário), 800 ms (contador, gráfico). Curva `cubic-bezier(.22,1,.36,1)` (`--curva`). Um elemento animado por vez. Com `prefers-reduced-motion`, na impressão e no PDF: tudo parado no estado final. O valor final do contador já está no HTML.

## Dados e gráficos

Todo gráfico sai do **`pviz.js`**: `<div data-pviz='{"tipo":"barras","titulo":"Sexta vende quase o dobro da terça","rotulos":[...],"valores":[...],"periodo":"set/2026","base":"1 restaurante","fonte":"painel do cardápio próprio","origem":"medido"}'></div>`. Tipos: `barras`, `barras-h` (ranking), `linha` (com `ignicao` para o mês da mudança e `projecao` tracejada), `composicao` (100%; nunca pizza), `anel`, `funil` (Atenção, Clique, Pedido, Recompra), `fluxo`, `numero`, `linha-tempo`, `meta` (cota com ritmo esperado), `cota`, `comparativo` (antes e depois, com o aviso fixo), `contador`, `faixa`. `PViz.svg(...)` devolve o SVG para Canva, Figma e slides.

- **Anatomia:** sobretítulo com Pavio (do que é) · **título que afirma a conclusão** (fórmulas: comparação, mudança, alerta) · **um destaque só**, em Ignição, marcado pela Seta A · linha de base de 2 px com ressalto (a plataforma), barras do zero e de topo reto · meta tracejada com rótulo à direita · **régua** (origem, período, base, fonte, em Barlow de 13 px no mínimo).
- **Régua:** período ("set/2026", "1 a 30/09/2026", "1 a 19/10/2026 (parcial)") · base ("1 restaurante", "12 restaurantes acompanhados") · fonte com nome ("painel do cardápio próprio", "gerenciador de anúncios da Meta", "Perfil da Empresa no Google", "relatórios mensais"; nunca "dados internos") · origem (na dúvida, a mais fraca) · aviso quando pede contexto. Sem dado: `null`, e o motor escreve "sem dado". "Dado ilustrativo · sem fonte" nunca chega ao cliente nem ao público.
- **Séries:** no máximo 4, sempre na mesma ordem de papel. Escuro: Ignição, Branco, Fumaça 400, Faísca Clara. Claro: Ignição (rótulo em Rubro), Noite, Fumaça 600, Brasa Funda.
- **Cor do cliente e modo neutro:** no relatório (camada 2), a série principal vira a cor do restaurante (`"cor":"#14213D"` ou `--cliente-cor` no contêiner); moldura, títulos, Seta A e régua continuam da Projeta. Se a cor do cliente for vermelha, laranja, rosa ou vinho (matiz até cerca de 40 graus do vermelho da marca, `PViz` detecta sozinho; `"neutro":true` força), entra o **modo neutro**: documento em campo Branco, sem Brasa, Telemetria vermelha nem Anel; palavra do título em Noite; série principal na cor do cliente; comparação em Fumaça; o vermelho da Projeta fica só no logo reduzido positivo. Cor do cliente clara demais (amarelo, lima, creme): use a cor de destaque escura da ficha ou force o neutro; a série precisa de 3 : 1 com o fundo.
- **Resultado no relatório (sete regras):** meses fechados · períodos do mesmo tamanho · mesma base · mesma fonte por canal · mudança marcada como ponto de ignição · "pedidos vindos do anúncio" só com rastreamento · um restaurante não é média.
- **Nunca:** pizza, 3D, sombra, degradê, eixo cortado, vários destaques, seta para a lua, número sem régua, queda em Ignição, grade de fundo, rótulo abaixo de 13 px, mais de 4 séries, gráfico da casa na camada 1, faturamento de cliente como promessa.

## Conformidade · agência e food (TRAVADA)

Base conferida em 05/10/2026 (detalhe, artigos e fontes na seção 27 do brand book): Código de Defesa do Consumidor (CDC, Lei 8.078/1990: oferta vincula, art. 30; informação clara, art. 31; publicidade identificável e prova guardada, art. 36; enganosa inclusive por omissão e abusiva, art. 37; prova cabe a quem anuncia, art. 38); Código do CONAR (conselho de autorregulamentação publicitária: apresentação verdadeira, art. 27; identificação, art. 28; comparação, art. 32; crianças, art. 37; anexos H alimentos, Q testemunhos, A, P e T bebidas, U apelos ambientais) e o Guia de Publicidade por Influenciadores Digitais (12/05/2026, em vigor desde 01/06/2026); promoções com prêmio (Lei 5.768/1971, Decreto 70.951/1972, Portaria 7.638/2022 da Secretaria de Advocacia da Concorrência e Competitividade do Ministério da Economia (SEAE/ME), autorização da Secretaria de Prêmios e Apostas do Ministério da Fazenda, SPA/MF, regras em revisão pela Portaria SPA/MF 230/2026); preço (Lei 10.962/2004, Decreto 5.903/2006, Lei 13.455/2017); rotulagem (Resoluções ANVISA 727/2022 e 429/2020, Instrução Normativa 75/2020 da ANVISA, Lei 10.674/2003 do glúten, Lei 10.831/2003 dos orgânicos); comércio eletrônico (Decreto 7.962/2013); dados pessoais (LGPD, Lei 13.709/2018, e Guia de Legítimo Interesse da ANPD, a autoridade de proteção de dados); imagem e direito autoral (Código Civil art. 20, Súmula 403 do Superior Tribunal de Justiça (STJ), Lei 9.610/1998); crianças (CDC art. 37 § 2º, Resolução 163/2014 do conselho nacional dos direitos da criança (Conanda), ECA Digital, Lei 15.211/2025, em vigor desde 17/03/2026); bebida alcoólica (Lei 9.294/1996); marca de terceiros (Lei 9.279/1996); políticas da Meta, do Google Ads, do Google Maps, do WhatsApp Business, do iFood e do 99Food. **O manual adota sempre a leitura conservadora e não substitui orientação jurídica.** Três casos pedem advogado antes de ir ao ar: promoção com prêmio, campanha de bebida destilada e qualquer peça com imagem de criança.

- **Oferta (camada 1):** preço com **R$ e centavos**, igual ao do canal de destino no dia, e **logo ao lado** a condição completa: validade, canal, área de entrega e limite, no mesmo tamanho de leitura (26 px na peça). "De / por" só com o "de" que o cardápio praticou de verdade. "A partir de" só com o tamanho. Anúncio pausado no último dia da promoção. Desconto no Pix visível na vitrine, não só no fechamento. Preço do anúncio igual ao da página de destino.
- **Foto e descrição:** porção, acompanhamento e embalagem reais; acompanhamento não incluso vira "sugestão de acompanhamento". **"Imagem meramente ilustrativa" não salva foto enganosa** (o CONAR recusou esse argumento em 2019). Tamanho, peso ou quantas pessoas serve, itens inclusos, taxa e raio, principais alergênicos.
- **Superlativo:** "o melhor da cidade" só com prova verificável; prefira o fato ("massa de 48 horas"). Exagero de opinião passa ("a pizza que a gente ama fazer"); afirmação mensurável exige base.
- **Promoção com prêmio:** sorteio, "comente e marque três amigos", vale-brinde, raspadinha, concurso "cultural" com compra ou marca: **autorização da SPA/MF pedida de 40 a 120 dias antes**, número do certificado em toda peça e regulamento. Prêmio nunca é bebida alcoólica. Sem autorização, a mecânica vira **benefício garantido a todos** ("todo pedido acima de R$ 80,00 no domingo ganha sobremesa"). "Os primeiros N ganham" tem enquadramento duvidoso: só com revisão de advogado.
- **Comparação com aplicativo:** permitida quando factual, com os dois preços reais, data e sem logo alheio; validar antes com o restaurante por escrito (pode ferir contrato com o aplicativo). Nunca "fuja", "abusivo" ou logo riscado.
- **Criadores:** qualquer vínculo (dinheiro, permuta de rodízio, embaixador) usa a ferramenta "parceria paga" e **#publi** na primeira linha, visível sem tocar em "mais"; presente sem acordo prévio leva #recebido; conteúdo feito com inteligência artificial segue as mesmas regras.
- **Depoimento:** de quem viveu, com as palavras dele, versão final aprovada por escrito, nome, função e data; ator nunca se apresenta como cliente; contrapartida dita.
- **Bebida alcoólica:** "Beba com moderação. Venda proibida para menores de 18 anos." (mais "Se beber, não dirija." com salão ou deslocamento), elenco com 25 anos ou mais e aparência de 25 ou mais, público 18+ no gerenciador, nada de esporte, carro, sedução, excesso ou universo infantil.
- **Crianças:** a comunicação é para os pais; nada de "colecione", apelo direto ou estímulo a comer em excesso; imagem de criança só com autorização dos dois responsáveis e revisão jurídica; nada de público abaixo de 18 anos nem perfilamento de jovens (ECA Digital, fiscalizado pela ANPD).
- **Rótulo e alergênico:** prato de restaurante segue o CDC ("Receita sem glúten. Preparada em cozinha que manipula trigo."); produto embalado sem o consumidor presente segue a ANVISA e a peça nunca contradiz o rótulo; alegação nutricional, "orgânico" e "sem açúcar" só com ficha técnica ou certificação; saúde sem "emagrece", "cura" ou "desintoxica".
- **Dados e WhatsApp:** consentimento de marketing em caixa separada, desmarcada, com o nome da empresa e saída fácil ("Para não receber mais, responda SAIR."); autorização com data e origem; nunca lista comprada, número de grupo ou comentário; **a base de um restaurante nunca é usada em campanha de outro nem da Projeta** (com os clientes do restaurante, a agência opera sob instrução dele); rastreamento só depois de política e aviso de cookies com "Aceitar" e "Recusar" do mesmo tamanho; cardápio digital de cliente com razão social, CNPJ e política de privacidade do restaurante no rodapé.
- **Meta, Google e avaliações:** o anúncio fala do produto, nunca da condição de quem vê ("Você é celíaco?", "Apertado no fim do mês?" estão fora); anúncio da Projeta sem promessa de resultado ("Dobre seu faturamento em 30 dias" viola a política de deturpação do Google Ads: reprova o anúncio e, em caso grave, pode suspender a conta); pedido de avaliação neutro, para todos, sem brinde em troca.
- **Imagem e direito autoral:** termo de cessão antes de gravar (cliente do salão, garçom, cozinheiro, entregador, equipe); música só da biblioteca comercial; foto de banco só com licença guardada; foto feita pela Projeta com cessão para todos os canais do cliente em contrato.
- **Prova da Projeta:** resultado com régua de resultado pública: "Base: [n] restaurantes acompanhados · [mês/ano] a [mês/ano] · fonte: [relatórios mensais]. Resultados variam por operação." Case com ficha completa, "de [A] para [B]" com os dois números absolutos, base de comparação (preferência: mesmo período do ano anterior), fonte e o aviso "Resultado de um restaurante em um período. Não é média nem promessa." Faturamento em reais do cliente só com autorização específica. Faixa de logos só com quem autorizou e ainda é cliente, uma cor, mesma altura óptica, empresa do grupo identificada. Toda afirmação publicada tem pasta de comprovação (CDC art. 36).

**Textos fixos** (entram como estão, com os colchetes preenchidos; 13 px no documento, 26 u na peça):
- `.regua-resultado` "Base: [n] restaurantes acompanhados · [mês/ano] a [mês/ano] · fonte: [relatórios mensais]. Resultados variam por operação."
- `.aviso-promo` "Válido de [data] a [data], [canal], [área de entrega], [limite]. Não cumulativo com outras promoções."
- `.aviso-sorteio` "Certificado de autorização SPA/MF nº [número]. Regulamento em [link]. Esta promoção não é patrocinada pelo [rede social]."
- `.aviso-bebida` "Beba com moderação. Venda proibida para menores de 18 anos. Se beber, não dirija."
- `.marca-publi` etiqueta "Parceria paga com [restaurante]" e "#publi" na primeira linha.
- `.consentimento` "Quero receber ofertas do [restaurante] pelo WhatsApp. Posso sair a qualquer momento respondendo SAIR."
- `.id-projeta` "Projeta Food · [razão social] · CNPJ [nº] · Pouso Alegre (MG) · contato@projetafood.com.br"
- Pedido de avaliação: "Gostou? Conta como foi no Google. [link ou QR Code do perfil]"

## Fotografia e vídeo de comida

**Foto-mestra:** uma por prato, horizontal 4:3, na resolução máxima, com o prato no centro ocupando **55% a 65% da largura** e respiro igual nos quatro lados; uma vertical na mesma sessão; versão **limpa** (só o prato, para aplicativo) e **contexto** (bebida, acompanhamento, embalagem, mão, para anúncio e redes). Sem foto-mestra aprovada pelo cliente, nenhuma peça daquele prato. Ordem da sessão: os mais vendidos, depois os de boa margem e pouca saída, por último sobremesas e bebidas.

**Pacote de exportação por prato** (JPG qualidade 80 a 85, sRGB): `_1x1` 1200 × 1200 (99Food, Keeta, cardápio próprio, catálogo de WhatsApp e da Meta) · `_4x3` 1200 × 900 (iFood, Perfil da Empresa no Google) · `_16x9` 1600 × 900 (Goomer com o prato no quadrado central, capa do Perfil da Empresa, banner) · `_4x5` 1080 × 1350 (feed e anúncio de feed) · `_9x16` 1080 × 1920 (story, reels, TikTok, status) · `_191x1` 1200 × 628 (Google Ads horizontal). Abaixo de 1 MB para painel, abaixo de 300 KB para cardápio próprio.

- **Luz:** de janela, de lado ou por trás; rebatedor do lado oposto; uma temperatura só; prato branco parece branco; **nunca flash direto**.
- **Ângulo pela forma do prato:** **de cima** (pizza inteira, marmita aberta, combinado japonês, açaí na tigela, poke, tábua de churrasco, salada, combo) · **45 graus** (parmegiana, risoto, massa, porção, executivo, sobremesa em taça) · **lateral de 0 a 15 graus** (hambúrguer, sanduíche, bolo em fatia, milkshake, copo de açaí, temaki).
- **Os sete momentos que vendem em vídeo:** vapor · queijo esticando · corte · molho caindo · mordida (só com termo) · montagem rápida · como chega. Vídeo curto em três tempos: **gancho** em até 1,5 s (já em movimento), **prova** (porção, nome e preço com centavos) até 8 s, **chamada** (canal e condição) até 11 s. **Nome do restaurante nos 3 primeiros segundos**, legenda embutida, música só da biblioteca comercial, som real gravado de perto.
- **Edição permitida:** brilho, contraste, saturação e nitidez em ajuste leve (até cerca de 10%), balanço de branco, remover migalha e reflexo, fundo sólido mantendo a sombra, inteligência artificial para tratar a foto real. **Proibida:** filtro forte, cor irreal, porção aumentada, ingrediente duplicado ou colado, prato gerado ou completado por inteligência artificial, fogo ou faísca sobre a comida.
- **Embalagem:** item no aplicativo nunca é a caixa fechada; prova de entrega com sacola lacrada; caixa limpa, sem gordura, tampa sem condensação, nada de sacola de outro estabelecimento.
- **A Projeta na própria câmera:** foto escura de luz lateral e contraste alto; retratos só dos sócios com termo; bastidor com tela desfocada (nenhum dado de cliente legível); na cozinha do cliente, o restaurante na frente e a equipe da Projeta com **roupa lisa**. Nunca filtro vermelho, fumaça ou fogo aplicado, banco de imagem "equipe sorrindo". O manual não traz foto de pessoa real (pendência 12).

## Playbook por segmento (horários são hipótese até haver dado)

| Segmento | Ângulo | Momento que vende | Pico provável | Orgânico | Story de oferta | Data forte | Cuidado obrigatório |
|---|---|---|---|---|---|---|---|
| Pizzaria | de cima (inteira), 45 graus (fatia) | queijo esticando | 19h a 22h, sexta a domingo, jogos | 17h a 18h | 18h | Dia da Pizza (10/07), jogos | tamanho e fatias iguais ao cardápio |
| Hamburgueria | lateral, altura da mesa | corte ao meio, chiado | 19h a 23h; 16h a 18h secundário | 17h a 18h | 18h | Dia do Hambúrguer (28/05) | gramatura e itens do combo iguais aos da foto |
| Japonês | de cima (barca), lateral (temaki) | salmão fatiado, hot roll partido | 19h a 22h, quinta a domingo; almoço executivo | 17h a 18h | 18h | Dia dos Namorados (12/06) | número de peças igual ao entregue |
| Parmegiana e italiano | 45 graus | corte com queijo puxando | 11h30 a 14h e 19h a 22h; domingo no almoço | 10h e 17h30 | 10h30 e 18h | Dia das Mães | "serve 2" só se servir dois de fato |
| Marmita e executivo | de cima, aberta | montagem rápida | 11h a 13h30, segunda a sexta | 9h a 10h | 10h30 | segunda-feira, começo de mês | prazo de entrega anunciado igual ao praticado |
| Churrasco | de cima (tábua), 45 graus (corte) | faca na picanha | 11h a 15h, sábado, domingo, feriado | sexta à noite e 9h a 10h | 10h30 | Dia dos Pais, jogos | kit com bebida alcoólica leva o aviso |
| Açaí e sobremesa | lateral (copo), de cima (tigela) | calda caindo | 14h a 18h e 20h a 23h, dias quentes | 13h e 19h | 14h | dias de calor, verão | coberturas da foto iguais aos do tamanho |
| Cafeteria e padaria | de cima (café), lateral (folhado) | vapor e crocância | 7h a 10h e 15h a 18h | véspera à noite e 14h | 7h e 15h | Dia das Mães, frio e chuva | itens do kit iguais aos da foto |
| Saudável | de cima, cores separadas | montagem do poke | 11h30 a 14h, dias úteis | 10h | 10h30 | segunda-feira, janeiro | sem promessa de saúde; nutrição só medida |

Regra de programação: orgânico 1 a 2 horas antes do pico; verba do pico menos uma hora até o fim do pico; story de oferta às 10h30 (almoço) e 18h (jantar). **O horário do cliente vence a tabela:** com 4 semanas de pedidos por hora, o campo "horário de pico" da ficha passa de estimado para medido e nunca volta à hipótese. Restaurante com dois segmentos: horário do item que mais vende, peças separadas por categoria. Mesmo gancho em dois clientes do mesmo segmento: a estrutura sim, texto, foto e identidade nunca. Dois restaurantes da mesma cidade nunca recebem a mesma peça com o logo trocado.

## Medidas de cada peça (na arte final)

**Grade da casa (seção 11):** 1 T = 8 px no documento e 8 u na peça de 1080 (sai do traço de 6,41 u do logotipo). Doze colunas em tudo: na peça de 1080, margem de 60 u, colunas de 58 u e calha de 24 u; slide 1440 com margem de 96 u; A4 com 64 u; e-mail 600 com 32 u; celular 390 com 20 u. Raios: cartão 26 px (grande 32), campo 14, placa do cliente 12, pílula em todo botão, Moldura O com um terço da altura, cartão dentro da peça 48 u no post. A área segura é camada travada do modelo (11.5).

**Vitrines dos restaurantes (tabela-mestra 25.10, consulta em 05/10/2026; na hora de subir, vale o aviso do painel):**

| Vitrine | Arquivo | Tamanho | Topo | Base | Esquerda | Direita | Texto sobre a foto |
|---|---|---|---|---|---|---|---|
| iFood item e destaque | `_4x3` | 1200 × 900 | centro | centro | centro | centro | Não |
| 99Food e Keeta | `_1x1` | 1200 × 1200 | centro | centro | centro | centro | Não (e sem mãos no 99Food) |
| Goomer | `_16x9` | 1600 × 900 | 0 | 0 | 350 | 350 | Não |
| Perfil da Empresa no Google | `_4x3` · `_16x9` | 1200 × 900 · 1600 × 900 | centro | centro | centro | centro | Não |
| Feed Instagram e Facebook | `_4x5` | 1080 × 1350 | 60 | 60 | 94 | 94 | Sim |
| Story e reels (Meta) | `_9x16` | 1080 × 1920 | 270 | 670 | 60 | 60 | Sim |
| TikTok | `_9x16` | 1080 × 1920 | 130 | 560 | 60 | 140 | Sim |
| Capa do Facebook | arte própria | 1640 × 720 | 160 | 160 | 270 | 270 | Pouco |
| Google Ads horizontal | `_191x1` | 1200 × 628 | 63 | 63 | 120 | 120 | Com versão limpa |
| Google Ads quadrado | `_1x1` | 1200 × 1200 | 120 | 120 | 120 | 120 | Com versão limpa |
| Catálogo Meta e WhatsApp | `_1x1` | 1200 × 1200 | centro | centro | centro | centro | Não |
| Status do WhatsApp | `_9x16` | 1080 × 1920 | 270 | 670 | 60 | 60 | Sim |
| Logo em círculo (iFood, redes, WhatsApp) | logo quadrado | 800 × 800 · 640 × 640 | 15% | 15% | 15% | 15% | Só o símbolo |

Também: capa da loja no iFood 1600 px de largura sem texto; logo do iFood 800 × 800 PNG com o símbolo nos 70% centrais; foto do Google de 720 × 720 recomendado, vídeo até 30 s; Google Ads vertical 960 × 1200, logo quadrado 1200 × 1200 e horizontal 1200 × 300, conteúdo nos 80% centrais, pacote mínimo de 4 horizontais, 4 quadradas e 2 verticais; Meta Ads sempre em 1080 × 1350 e 1080 × 1920 da mesma arte, mais uma versão sem texto; cardápio próprio com banner de 1270 × 460 (Cardápio Web) ou 1920 × 640, logo 800 × 800. Saipos, Neemo, Delivery Much e Keeta não publicam medida: pacote `_1x1` e `_16x9` até conferir no painel.

**Peças da própria Projeta:**

| Peça | Formato | Regra principal |
|---|---|---|
| Post e carrossel | 1080 × 1350, margem 60 (94 nas laterais por causa do recorte 3:4) | campo Noite, Pavio 26 u, título 88 a 128 u com uma palavra em Ignição, régua quando há número, marca reduzida de 300 u no rodapé; carrossel de 5 a 7 lâminas com numeração 01/05, capa que funciona sozinha, só o fecho em campo Ignição com marca branca |
| Story e capa de reels | 1080 × 1920 | tudo entre 270 u do topo e 670 da base; figurinha nativa com espaço reservado; capa com título no miolo de 1080 × 1440; legenda na tela Barlow 600 46 u entre 900 e 1250 u; marca nos 3 primeiros segundos |
| Capa de destaque | 1080 × 1920 | ícone de 360 u no quadrado central, até 40% do círculo; Diagnóstico em Ignição |
| Bio do Instagram | até 150 caracteres | "Marketing para delivery e restaurantes. Método Delivery Blindado: blindar antes de acelerar. Diagnóstico gratuito de 40 minutos no link." Nome de exibição "Projeta Food · Marketing para delivery"; avatar `projeta-avatar-1080.png`; link único do diagnóstico com `?origem=instagram-bio` |
| Ritmo da grade | a cada 9 posts | 4 método, 2 prova com régua, 2 bastidor, 1 convite; no máximo 1 em Ignição e 1 a 2 em Branco, nunca dois em Ignição lado a lado |
| Raio-X do diagnóstico | A4 retrato, 4 páginas | capa Noite com Brasa, Mira e Trajetória; seis frentes com estado (Sólido, Atenção, Prioridade em rosa, no máximo três prioridades); até três achados com print do canal do próprio restaurante; caminho nas quatro etapas; sem projeção de resultado |
| Proposta comercial | A4 retrato, 7 páginas fixas | capa co-assinada · o que entendemos · como vamos medir · escopo · etapas · investimento (página 6, até três planos, recomendado com Anel) · condições e aceite; validade na capa; verba de anúncio à parte |
| Plano de 90 dias | A4, 2 a 4 páginas | camada 2 |
| Relatório mensal | A4 retrato, 8 páginas | capa co-assinada com Moldura O · o mês em uma página (Telemetria escura) · pedidos e faturamento por canal · anúncios · conteúdo, Google e avaliações · etapas do método · próximos passos (até 5, com responsável, prazo e "como saberemos") · régua e glossário; mesmo dia útil todo mês |
| Página interna A4 | 794 u = 210 mm | margem 64 u (17 mm), 12 colunas com calha de 24 u, fólio Barlow 600 10 u, título Saira 700 32 a 40 u, corpo Barlow 12 a 13 u, régua 10 u, rodapé com identificação e reduzida de 96 u (25 mm) |
| Deck | `deck-template.html`, 1440 × 900 | margem 96 u, 12 colunas, título 56 a 88 u, corpo 20 a 24 u (nunca abaixo de 20), régua 14 u, até 30 palavras por tela, completa na capa e reduzida de 150 a 180 u no rodapé; uma tela Ignição a cada seis |
| Site e landing | 13 faixas; landing sem menu | uma chamada principal por tela, uma faixa Ignição por página, formulário de seis campos (rótulo visível, letra de 16 px, campo de 52 px, caixa de autorização desmarcada, política ao lado do botão), dois passos no celular |
| Botão | pílula, altura 48 (56 no formulário do celular) | Unbounded 600 16 px; repouso Ignição chapada; foco 2 px em Chama a 3 px; pressionado Rubro; desativado Superfície com Fumaça 400; no campo Ignição o cheio vira Noite |
| E-mail | 600 px, uma coluna, recuo 32 | cabeçalho Noite com a reduzida negativa, corpo Branco com texto Fumaça 800 em Arial 16 px, um botão HTML em Ignição, assunto até 45 caracteres, pré-cabeçalho de 40 a 90, abaixo de 100 KB, rodapé com por que recebe, identificação e saída |
| Assinatura de e-mail | tabela HTML | reduzida positiva de 120 px (versão com placa para modo escuro: `assets/aplicacoes/assinatura-reduzida-placa-web.png`), nome Arial 700 16 px, chamada em Rubro, altura até 140 px, sem foto e sem emoji (código em `lockup.html`) |
| WhatsApp Business | perfil comercial | nome "Projeta Food", avatar de 640, link `wa.me` com a frase pronta, mensagens prontas de 20.8, saída com SAIR |
| Compartilhamento · LinkedIn · videochamada | 1200 × 630 · 1584 × 396 (a confirmar) · 1920 × 1080 | Noite com Brasa, título em duas cores; texto do LinkedIn à direita; marca no canto superior direito da videochamada |
| Cartão de visita | 90 × 50 mm, sangria 3 mm | completa de 60 mm, texto de 7,4 pt no mínimo, QR de 22 mm; couché fosco 300 g/m² |
| Papel timbrado | A4, margem 17 mm | Branco, reduzida de 25 mm, sem campo escuro |
| Lacre de kit | círculo de 40 mm | Noite com símbolo de 14 mm |
| Crachá | PVC 54 × 86 mm vertical | nome em Saira 700 de 5 mm; visitante com faixa Ignição de 12 mm (14% da área); evento com clientes em Branco |
| Uniforme | camiseta M | reduzida de 90 mm no peito esquerdo, completa de 240 mm nas costas; polo com reduzida de 80 mm bordada (prova antes do lote); **gravando para o restaurante, roupa lisa** |

Nome de arquivo: `cliente_campanha_peca_formato_versao` (minúsculas, sem acento, sem espaço; sublinhado entre campos, hífen dentro do campo); a Projeta usa o identificador `projetafood` (`projetafood_diagnostico_anuncio_4x5_v1.png`); foto de prato `cliente_categoria_prato_angulo_versao` (`fornovivo_pizzas_margherita_45graus_v1.jpg`); versão sobe a cada envio ao cliente, nunca "final".

## Modo cliente · produzir para um restaurante da Projeta

O modo cliente é o dia a dia da agência: peças de camada 1 para dezenas de restaurantes, cada um com a sua marca. **A marca do restaurante manda na arte; a Projeta entra por baixo, com estrutura, produção e conformidade.** Nada de Noite, Ignição, Saira, Unbounded, Barlow, Seta A, Brasa, Moldura O, logo ou Etiqueta da Projeta na peça.

**1 · Confirme a camada e o restaurante.** Peça para o consumidor do restaurante = camada 1. Identifique o restaurante e o segmento (seção 24).

**2 · De onde vem a identidade (nesta ordem):**
- **Existe uma skill de marca do cliente instalada** (por exemplo `branding-<restaurante>`, como `branding-fornovivo`)? Carregue-a e use a dela para **tudo que é identidade**: cores, fontes, logotipo e versões, palavras-guia, voz, leis da marca, avisos e blocos próprios, pendências do cliente. Esta skill continua valendo para **estrutura e conformidade**: camadas, modelo travado (26.1), piso de letra, medidas e áreas seguras por plataforma (25 e 11.5), foto-mestra e pacote de exportação (23), playbook do segmento (24), fórmulas de criativo (26.2), regras de publicidade (27), fluxo de aprovação e nome de arquivo (22.4, 22.6), checklist de aprovação (28). **Conflito:** em identidade, vale a skill do cliente; em lei e regra de plataforma, vale a mais restritiva das duas; nunca se resolve um conflito com a identidade da Projeta. Se a marca for empresa do Grupo Projeta (caso D), o manual dela manda do mesmo jeito e, quando ela aparecer em material da Projeta, entra a nota "empresa do Grupo Projeta".
- **Não existe skill, mas existe ficha de marca** (22.2, em `00_ficha-de-marca/` da pasta do cliente; o [`kit-cliente.html`](kit-cliente.html) preenche, exporta e importa a ficha e gera as cinco peças básicas de delivery com camadas travadas): use os tokens `--cliente-cor-1` (campo), `--cliente-cor-2` (texto), `--cliente-cor-3` (destaque: preço e botão), `--cliente-fonte-titulo`, `--cliente-fonte-texto` e `--cliente-logo`, o tom em três palavras, as chamadas oficiais, os canais de pedido, as proibições e o aprovador.
- **Não existe ficha:** faça a triagem dos quatro casos (22.1). Pergunta 1: é do grupo? (caso D, peça o manual do grupo). Pergunta 2: tem manual em arquivo? (caso A: copie os valores para a ficha e confira contraste). Pergunta 3: o logo aguenta (vetor ou 1000 px de largura, nítido no claro e no escuro)? (caso B: mini guia em 1 dia útil a partir do logo, da fachada, da embalagem e do perfil; caso C: mini guia provisório e identidade definitiva como serviço separado). O mini guia (22.3) tira três cores com papel das cores que aparecem em pelo menos dois pontos (texto sobre campo com 4,5 : 1 ou mais; destaque sem contraste vira só área, fio ou ícone), uma fonte livre por estilo de letra (tabela 22.3: Playfair Display + Lato para serifa clássica, Fraunces + Inter para serifa suave, Bebas Neue ou Archivo Black para condensada, Baloo 2 ou Nunito para arredondada, Outfit para geométrica, Zen Kaku Gothic New + Noto Sans para traço oriental; letra manuscrita fica só no logo), cinco fotos-mestras e o tom. Sai marcado "provisório" e "aguarda aprovação do cliente". **Campo vazio na ficha vira pendência com data, nunca a identidade da Projeta.** Logo do cliente nunca é redesenhado, recolorido ou convertido para branco sem a versão oficial dele; reconstrução só com autorização e rótulo "reconstrução".

**3 · Monte no modelo travado (26.1).** A Projeta trava: logo do cliente no canto superior esquerdo (52 a 64 u de altura), **comida como maior elemento (40% da área, no mínimo)**, título de até 2 linhas e 7 palavras (84 a 104 u), espaço do preço grande e colado ao produto, condição nunca abaixo de 26 u, uma chamada com o canal certo, margem de 60 u e áreas seguras. O restaurante preenche: as três cores, as duas fontes, o logo, a foto real e o texto no tom dele. Destaque sem contraste com o campo: preço e botão passam para a cor de texto da própria marca, nunca uma cor nova, nunca o vermelho da Projeta. Cada fórmula sai em 4:5 e 9:16 da mesma arte, mais a versão sem texto.

**4 · Escolha a fórmula (26.2), pela pergunta de quem está com fome:** 01 oferta com condição · 02 combo (o "separado" é a soma real do cardápio) · 03 cupom com regra (teste o cupom antes) · 04 novidade do cardápio (só com o item ativo em todos os canais) · 05 prova social (nota real com data, avaliação sem nome nem foto) · 06 bastidor (fato de processo, cozinha impecável, termo de quem aparece) · 07 como chega (entrega real, tempo só com régua do painel) · 08 desejo puro (imagem e som, uma palavra) · 09 comparação de canal (dois preços reais com data, validados com o restaurante, sem logo de aplicativo) · 10 ocasião (chuva, jogo, sexta; fale da situação, nunca da condição da pessoa) · 11 dono (autêntico, nome nos 3 primeiros segundos) · 12 escolha guiada ("Comenta A ou B"; se "quem comentar ganha" entrar, vira promoção com prêmio).

**5 · Para onde a peça leva decide o que vai na imagem (26.4):** item no iFood, 99Food ou Keeta = só o prato, sem texto, preço, telefone, link, selo, logo ou mão · cardápio próprio = foto limpa, nome, descrição e preço ao lado, fora da imagem, chamada "Adicionar ao pedido" · anúncio para o cardápio próprio = oferta, preço com centavos, condição completa, logo do restaurante, "Peça pelo link da bio" · anúncio para o aplicativo = mesmo preço do aplicativo no dia, sem logo nem cor dele, "Peça no [nome do aplicativo]" · status e catálogo de WhatsApp = oferta do dia com prazo; catálogo com as fotos 1:1.

**6 · Confira antes de enviar:** a voz é a do restaurante (as três palavras da ficha), não a da Projeta; conformidade (seção 27 e as 12 regras de 26.6); medidas e áreas seguras (25.10, com "Mostrar grade"); checklist final do arquivo (29.9).

**7 · Aprovação registrada (22.4).** Briefing com a ficha (preço conferido com o cardápio vigente) → produção no modelo travado → revisão interna da direção de arte → envio da prévia no contexto, com nome de arquivo e versão, pelo canal oficial da ficha → **aprovação escrita** (quem, quando, canal, versão; áudio só vale confirmado por texto; silêncio não é aprovação) → publicação da versão aprovada e arquivo no mesmo dia (`05_aprovacoes/` e prova em `06_provas/`). Qualquer troca depois do "aprovado" gera nova versão e nova aprovação. Mensagem-modelo: "Oi, [nome]. Segue a v3 do post [campanha] para o feed (arquivo [nome do arquivo]). Confere por favor: preço R$ [valor], validade de [data] a [data] e área de entrega [bairros]. Se estiver tudo certo, responda "APROVADO V3" por aqui. A peça só sobe depois da sua aprovação escrita."

**8 · Crédito da Projeta (22.5):** na arte, **nenhum**. Na legenda ou bio do restaurante, "Gestão de marketing: @projetafood", e no rodapé do cardápio digital ou site dele, "Feito com Projeta Food" (Barlow 400, 11 px, cor neutra do layout, sem logo), **só com autorização escrita** (pendência 11). Variações como "by Projeta" ou "powered by" ficam de fora.

**9 · Pasta e acesso (22.7):** cada restaurante tem a mesma árvore (`00_ficha-de-marca`, `01_marca` com `recebidos/`, `02_fotos` com `mestras/`, `recortes/`, `autorizacoes/`, `03_modelos`, `04_campanhas/aaaa-mm_campanha/` com `briefing/`, `producao/`, `enviados/`, `publicados/`, `05_aprovacoes`, `06_provas`, `07_relatorios`), no drive da Projeta, **nunca neste repositório**. Material de um restaurante nunca é ponto de partida para outro: o ponto de partida é o modelo vazio. Base de clientes, prints de painel e números de um restaurante nunca aparecem no material de outro.

**Kits nas ferramentas (29.4 e 29.5):** no Canva, um kit da casa ("Projeta Food · Plataforma Ignição", camadas 2 e 3, só a direção de arte edita) e **um kit por restaurante** com o nome da pasta ("fornovivo · kit", camada 1); o kit da Projeta nunca entra numa peça que o consumidor do restaurante vê; Transducer e Kallisto nunca vão ao kit. No Figma, uma coleção "Cliente" com um modo por restaurante; teste cada modelo novo primeiro com a marca fictícia mais difícil (Nonna Rosa, vermelha, testa o modo neutro).

## Componentes canônicos

Os nomes de classe são a interface do sistema: **nunca renomeie**. Todos estão na `<style>` do `brand-book.html` e vivos nas seções do manual.

| Classe | Uso |
|---|---|
| `.campo-noite` · `-preto` · `-superficie` · `-superficie-alta` · `-grafite` · `-branco` · `-bancada` · `-ignicao` · `-vinho` | troca o campo e, com ele, a cor de texto, de ênfase e de fio |
| `.sec` + campo · `.folio` · `.sec-head` (`.contagem.sec-num`, `.pavio.sec-kicker`, `h2.acento` com `<em>`, `.sec-apoio`) | seção com fólio, Contagem e título em duas cores |
| `.bloco` > `.bloco-head` (`.bloco-n` + `h3` + `.bloco-apoio`) · `.faixa` | subseção numerada NN.N; faixa de outro campo de ponta a ponta |
| `.cols-2` `.cols-3` `.cols-4` `.cols-5` `.cols-7-5` `.cols-5-7` `.cols-8-4` `.cols-4-8` `.grade-12` `.auto-grade` `.mesa` | grades de 12 colunas que empilham no celular |
| `.pavio` · `.acento` + `em` · `.chamada` · `.apoio` · `.legenda` · `.regua` · `.rotulo` · `.caixa-alta` | tipografia |
| `.cartao` (`__icone`, `__titulo`, `__texto`, `__rodape`) · `.pilula` · `.botao` `--contorno` `--fantasma` | cartões, pílulas e botões (altura mínima 48) |
| `.moldura-o` · `.seta-a` `--dir` · `.chama` `.status` · `.fio-fenda` `--v` · `.anel` `--gira` · `.mira` `--problema` · `.brasa` `--contra` · `.grade-lanc` · `.contagem` | recursos assinatura em CSS |
| `.contador` (`data-origem`, `--vazio`) · `.origem` · `.telemetria` `--escura` · `.regua-resultado` | prova com régua |
| `.etiqueta-credito` · `.placa-cliente` · `.coassinatura` (`__cliente`, `__projeta`) | co-assinatura e crédito (camadas 2 e 3) |
| `.nota` · `.alerta` · `.proibido` · `.regra` · `.dica` · `.resumo` · `.assim-nao` > `.an` · `.galeria--nao-faca` | avisos; Assim / Não assim; galeria "Não faça" |
| `.cor` · `.pares` > `.par` · `.escala` · `.orcamento` | fichas de cor e contraste |
| `.table-wrap` > `table.consulta` · `.table-wrap.matriz` · `.ficha` · `.selo-fonte[data-selo]` · `.situacao` `--sim` `--cond` `--nao` | tabela que vira cartão no celular; matriz com rolagem local; selos de confiança; veredito com ícone e palavra |
| `.codigo` + `.copiar` · `.modelo` (`__cab`, `.modelo-texto`) · `.sanfona` · `.checklist` · `.passos` · `.lista-seta` | código e texto para copiar, perguntas, listas |
| `.aviso-promo` · `.aviso-sorteio` · `.aviso-bebida` · `.marca-publi` · `.consentimento` · `.id-projeta` | textos fixos de conformidade |
| `.mock` + formato (`post-45`, `post`, `story`, `reels`, `slide`, `tela`, `a4`, `celular`, `email`, `compartilhamento`) > `.peca` + `.pc-*` · `.grade-overlay` · `.area-segura[data-plataforma]` · `.foto-mestra` | peças em escala real com `--u`; camadas de grade e área segura |
| `.peca--cliente` + `.cl-titulo` `.cl-texto` `.cl-preco` `.cl-condicao` `.cl-botao` `.cl-logo` · `[data-cliente="..."]` · `.marca-ficticia` | peça de camada 1 inteira pelas variáveis `--cliente-*`; as nove marcas fictícias do manual |
| `.grafico-svg[data-pviz]` · `[data-pforms]` | motores |
| deck: `.slide` + `capa` `capitulo` `frase` `colunas` `telemetria-slide` `dados` `processo` `diagnostico` `numero` `cronograma` `case` `compara` `proposta` `equipe` `fechamento` | apresentação |

Espaço na escala de 4 (4, 8, 12, 16, 24, 32, 48, 64, e os fluidos `--e-9` e `--e-10`). Raios: cartão 26 e 32, placa 12, pílula 999. Largura de leitura `--wrap: 1240px`; respiro lateral `--gut: clamp(16px, 4vw, 56px)` (16 px no celular).

## Dois formatos de primeira classe

**Documento** (`brand-book.html` é o template): leitura, raio-X, proposta, relatório, manual. O relatório mensal ao cliente já tem modelo pronto: [`relatorio-template.html`](relatorio-template.html). Uma coluna de leitura, seções numeradas com fólio e Contagem, sumário depois da introdução, Noite como campo com Grafite e Branco alternando (Branco nas seções de leitura longa e de cliente), barra fixa com a seção atual e sumário lateral.

**Deck** (`deck-template.html`): reunião de venda, plano para cliente, resultado, aula, evento. Canvas 1440 × 900 escalado; `<section class="slide TIPO campo-*">`; setas, espaço, Home/End e toque; barra de progresso; contador; **P** abre as notas; no celular os slides empilham. Ordem da reunião de venda (17.4): capa · os cinco desafios · virada em Ignição ("Primeiro a base. Depois a subida.") · método em quatro etapas · seis serviços · como medimos · casos (só autorizados) · porte em `[valor aprovado]` · como começamos · encerramento. Deck para cliente (camada 2): o modo co-assinado troca o rodapé de todas as telas.

Vai ser **lido** → documento. Vai ser **apresentado** → deck. Não refaça documento no Canva: o gráfico perde a régua e a fonte perde a largura.

## Celular e PDF

**Sistema de celular v1 (TRAVADO).** Tudo legível e sem corte entre **320 e 430 px**. Breakpoints 1024 e 640 (e 380 para o display). Grades empilham; tabelas `table.consulta` viram cartões no celular pelo script `<script data-projeta-responsive="v1">` do fim do `brand-book.html` (copie literal, não reescreva); `.table-wrap.matriz` e carrossel com rolagem local sinalizada ("Deslize para ver..."); `overflow-wrap:anywhere` em texto corrido; mídia com `max-width:100%`; botões de 48 px; campo de formulário com letra de 16 px. API: `window.projetaMobile(raiz)`, `projetaGrade`, `projetaAmpliar`, `projetaContador`, `projetaReveal`, `projetaNav.atualiza()` e `projetaAtualiza(raiz)` (roda tudo, inclusive os motores, sobre conteúdo criado depois). **PROIBIDO `overflow-x:hidden` no `html` ou no `body`.** Peça de 1080 conferida reduzida a 36% (o tamanho no feed): se não lê, corta texto, nunca diminui abaixo do piso.

**Exportar PDF pelo Chrome:** abra o HTML, role até o fim (fontes e gráficos carregam), `Cmd+P` (Mac) ou `Ctrl+P` (Windows), Salvar como PDF e, em Mais definições, **Gráficos de segundo plano LIGADO** (sem isso o Noite e o vermelho somem e o documento sai branco). Documento: A4, margens padrão, escala 100%. Deck: Paisagem, margens Nenhuma.

**Automatizado:** `python3 exportar_pdf.py [arquivo.html]` (Playwright com Chromium, `print_background=True`, grava em `dist/`). **Nunca use `--print-to-pdf` do Chrome.** Arquivo único: `python3 autocontido.py [arquivo.html]`; teste no celular com a internet desligada antes de enviar; nunca mande caminho `file:///`.

## Pendências com a Projeta Food (não resolva por conta própria)

**Marca e arquivos:** 01 vermelho único `#ED0012` · 02 versões novas do logotipo (positiva, reduzida, símbolo, avatar, uma cor; até lá, em material público, a completa negativa sobre fundo escuro) · 03 arquivo de origem do logotipo e autoria · 04 licença da Transducer e da Kallisto · 05 cor impressa e prova de gráfica · 06 registro do nome Delivery Blindado no Instituto Nacional da Propriedade Industrial (INPI).
**Números e selos:** 07 números oficiais de porte · 08 prova dos percentuais de resultado · 09 selos de parceria vigentes.
**Clientes e autorizações:** 10 autorização dos logos de clientes e lista das empresas do grupo · 11 crédito da Projeta nos perfis dos clientes · 12 imagem da equipe, vídeos e trilhas · 13 quem aprova pela Projeta e em quanto tempo o restaurante aprova.
**Pessoas e contato:** 14 cargos dos sócios · 15 telefone e WhatsApp oficiais · 16 razão social e CNPJ · 17 prazo de resposta e horário · 18 formato do diagnóstico gratuito (videochamada, presencial ou os dois, e quem conduz).

Nenhuma pendência trava a produção: **entregue a versão permitida** (dado em colchete, selo como `[selo oficial vigente]`, número como `[valor aprovado]` com a régua, método sem ®, cargos com "confirmação pendente") **e diga em uma linha qual pendência trava o resto.** Pendência fechada sobe a versão (v1.1, v1.2); mudança de cor, logotipo, fonte, recurso ou lei abre a v2, com aprovação dos sócios.

## Checklist de aprovação de peça

Versão interativa, com contador e "Copiar o resultado" para colar no registro, na seção 28 do manual: 28.2 para a peça do restaurante, 28.3 para o que a Projeta assina, 28.4 para os itens condicionais e 28.6 para o modelo de registro de aprovação. Resumo:

- [ ] **Camada certa** e marca certa para ela: camada 1 sem nada da Projeta na arte; camada 2 com o restaurante no título e o logo dele 1,5 vez o PROJETA; camada 3 com autorização escrita.
- [ ] Marca é arquivo oficial (`assets/brand/` ou o do cliente), versão certa para o fundo, respiro x livre, acima do mínimo (completa 240 px ou 60 mm; reduzida 96 px ou 25 mm; símbolo 24 px ou 8 mm), sem efeito, sem redigitar, sem recolorir.
- [ ] Só cores da tabela; Ignição no máximo 15% da área, uma informação; Chama e Rubro no texto pequeno; erro e queda em rosa; contraste mínimo de 4,5 : 1 (nível AA) conferido nos pares liberados.
- [ ] Saira larga em caixa alta com **uma** palavra em Ignição; Unbounded em no máximo três palavras; Barlow no texto; nada abaixo de 26 px na peça de 1080 nem de 13 px no documento (exceções: Pavio de 12 px e Etiqueta de Crédito de 11 px); entrelinha 0,98 com acento.
- [ ] Todo número com período, base e fonte, ou em colchete; sem dado nunca vira zero; número de porte como `[valor aprovado]`; resultado com "de [A] para [B]" e o aviso.
- [ ] Oferta com R$ e centavos igual ao canal e condição completa ao lado; foto real do prato como chega, sem inteligência artificial, sem texto sobre a foto de item em aplicativo.
- [ ] Nada de sorteio ou "comente e concorra" sem certificado SPA/MF; "os primeiros N ganham" só com revisão de advogado; bebida com advertência e público 18+; criança só pelos pais; criador com #publi; consentimento separado e desmarcado.
- [ ] Voz certa (Projeta: sócia de operação, método e não milagre; restaurante: as três palavras da ficha); sigla traduzida; inimigo certo.
- [ ] **Zero travessão**, zero emoji na arte (no máximo dois na legenda), no máximo uma exclamação, convite claro no fim.
- [ ] Medida e área segura da plataforma conferidas com "Mostrar grade"; tamanho do pacote da casa, não o mínimo da plataforma; versão sem texto para anúncio.
- [ ] Nome de arquivo `cliente_campanha_peca_formato_versao`; texto alternativo em toda imagem.
- [ ] Testado no celular: peça a 36% ainda se lê; página sem corte de 320 a 430 px; PDF com fundo Noite; arquivo único sem Transducer nem Kallisto.
- [ ] Aprovação escrita registrada (quem, quando, canal, versão) antes de ir ao ar.

## Armadilhas (vão te morder)

1. **Uma única `<style>` por arquivo.** Impressão, grade e gráfico entram nela.
2. **A marca é arquivo, não código.** Se você está escrevendo `<path>` de logotipo, PROJETA em fonte ou data URI de memória, pare: use `assets/brand/` ou o `lockup.html`. Nunca cole o SVG do logotipo no HTML: use `<img>`.
3. **O A do logotipo tem topo chato** a cerca de 64,6 graus: toda seta da casa reproduz esse polígono (`0,35.75 16.99,0 24.13,0 41.12,35.75 34.02,35.75 20.56,7.43 7.1,35.75`), nunca uma ponta aguda.
4. **Ignição em texto pequeno reprova:** abaixo de 18 px no Noite use Chama; no Branco, Rubro. Sobre Grafite, Superfície e Bancada, Ignição só a partir de 24 px.
5. **A completa some abaixo de 240 px** (FOOD MARKETING vira risco): no rodapé de post, cabeçalho de celular e co-assinatura, a reduzida.
6. **Camada 1 não tem nada da Projeta.** Nem a Etiqueta de Crédito, nem a Seta A como marcador, nem o vermelho "para combinar". Restaurante sem identidade ganha mini guia próprio, nunca a nossa.
7. **Marca do cliente vermelha** (Nonna Rosa, parmegianarias, pizzarias): na peça dela nada muda; no documento da Projeta para ela, modo neutro.
8. **Sem dado nunca vira zero.** `null` no pviz, Contador vazio na peça, "dado em validação" no texto. Zero é resultado medido.
9. **Número de porte, telefone, CNPJ, preço, selo e resultado nunca inventados.** Colchete até a Projeta (ou o restaurante) confirmar, e colchete nunca vai ao ar.
10. **Transducer e Kallisto nunca viajam:** nem no repositório, nem no autocontido, nem no kit do Canva, nem em pasta de cliente.
11. **`print_background=True`** ou "Gráficos de segundo plano" ligado, senão o Noite some.
12. **Caminho relativo sempre** (`assets/brand/...`); para enviar, `python3 autocontido.py`.
13. **IDs de SVG únicos** por página (prefixe); os motores já numeram os deles (`pv1`, `pv2`).
14. **Nenhum dado real de cliente neste repositório**: ele é público. Exemplos só com as nove marcas fictícias (Forno Vivo, Chapa Norte, Kaze Sushi, Nonna Rosa, Marmita Certa, Tábua do Tião, Roxo Açaí, Aurora Padaria, Folha & Grão) e a nota "Marcas fictícias criadas para este manual."

## O que a Plataforma Ignição NÃO é

- Não é parede vermelha: é um ponto de ignição por peça, em até 15% da área.
- Não é foguete de desenho animado, fumaça, estrela, planeta ou seta para a lua.
- Não é neon, vidro, halo, brilho, gradiente roxo nem o laranja do grupo.
- Não é promessa de resultado: não diz explodir, dobrar, garantir nem "fórmula".
- Não é inimiga do aplicativo: o adversário é a venda sem estrutura.
- Não é número solto: todo número tem data, base e fonte.
- Não é a estrela da peça do cliente: na arte do restaurante, a Projeta não aparece.
- Não é o logotipo redesenhado, redigitado, girado ou recolorido.

## Mapa de arquivos

| Arquivo | O que é |
|---|---|
| `SKILL.md` | Este arquivo: o sistema travado para o Claude seguir sem improvisar. |
| `README.md` | Instalação e uso para pessoas. |
| `brand-book.html` | O manual vivo em 30 seções e 7 partes; cabeçalho e estilo são o template de documento. |
| `deck-template.html` | Apresentação 1440 × 900 com os tipos de slide da casa e notas na tecla P. |
| `lockup.html` | Trechos prontos: marca em arquivo e em data URI, avatar, favicon, co-assinatura, crédito em material de cliente, selos, número com régua, Faixa de Telemetria, aviso de resultado, bloco de case, preço com condição, item de cardápio, assinatura de e-mail, bio, WhatsApp e rodapé de documento. |
| `guia-de-uso.html` | Pedidos prontos por público (time interno, social media, tráfego, design, comercial, atendimento, restaurante cliente, gráfica, vídeo), com o que sai e a seção do manual que manda. |
| `relatorio-template.html` | Relatório mensal ao restaurante (camada 2), A4 em nove folhas na ordem da seção 18: capa co-assinada, o mês em uma página, canais, anúncios, o que fizemos, método e aprendizados, próximos passos, régua e glossário, anexo de criativos. Bloco `RELATORIO` no topo troca nome, logo, cores, fontes, período e modo neutro; gráficos `pviz.js` na cor do cliente. PDF: `python3 exportar_pdf.py relatorio-template.html`. |
| `kit-cliente.html` | Kit do cliente (camada 1): ficha de marca do restaurante editável na página, com contraste conferido na hora, aviso de modo neutro, fontes livres curadas por segmento, logo enviado por arquivo, tom, cidade e canais; cinco peças em canvas no tamanho real que trocam de identidade com a ficha (post 4:5, story 9:16, capa de destaque, banner do cardápio próprio 1920 × 640, foto do Perfil da Empresa no Google 1200 × 900), com áreas seguras, condição da oferta obrigatória (sem ela a peça não exporta) e crédito "Feito com Projeta Food" só no rodapé do cardápio, fora da imagem e com autorização; nove marcas fictícias; exportação em PNG com o nome `cliente_campanha_peca_formato_versao`; ficha exportada e importada em JSON e guardada no navegador; checklist de aprovação resumido. Segue as seções 22, 25 e 26 do manual. |
| `pviz.js` · `pforms.js` | Motores de gráficos com régua e de formas da casa, em SVG puro, também para Canva e Figma. |
| `autocontido.py` · `exportar_pdf.py` | Geram o arquivo único (em `dist/`) e o PDF. |
| `agents/openai.yaml` · `tools/empacotar_skill.py` | Nome, ícone e pedido de exemplo no Codex e no ChatGPT (o Claude ignora); gerador do ZIP de instalação com as travas de tamanho (fica fora do ZIP). |
| `index.html` | Abre o manual (página de entrada do site publicado). |
| `assets/brand/` | A marca em SVG e PNG (completa, reduzida, símbolo, em cinco cores), foguete de construção, avatar, favicon, compartilhamento e `marca.json` com medidas, respiros e testes de leitura. |
| `assets/aplicacoes/` | Arquivos de aplicação, como a assinatura de e-mail com placa para modo escuro. |
| `assets/fontes/` | Só fontes livres: a Saira Larga Projeta (quatro pesos, licença aberta) e a reserva em woff2 das fontes do Google usadas pelo autocontido. |
| `assets/referencia-original/` | O vetor e o favicon do site sem nenhuma alteração: prova de origem, não usar em peça. |
| `dist/` | Versões de arquivo único, prontas para e-mail, WhatsApp e Drive, e o PDF. |

**Nunca nesta pasta:** arquivos da Transducer ou da Kallisto, logotipo, foto, planilha, relatório ou qualquer dado real de restaurante cliente. O material de cada restaurante mora na pasta dele, no drive da Projeta.

---

Marca e logotipo são propriedade da Projeta Food. Sistema de identidade organizado com a GrowAI a partir do vetor oficial e do site da Projeta Food. Plataforma Ignição v1 · outubro de 2026 · aguarda aprovação. Este manual é um mapa de regras para o dia a dia e não substitui orientação jurídica.
