# branding-projeta-food

**A identidade visual da Projeta Food e o kit de produção para os restaurantes dela, empacotados como uma Skill do Claude.** Sistema Plataforma Ignição v1.

Instale uma vez e peça o material em português. O Claude passa a produzir post, carrossel, story, reels, anúncio, bio, site, landing, e-mail, WhatsApp, raio-X do diagnóstico gratuito, proposta, deck, plano de 90 dias, relatório mensal co-assinado, case, cartão, crachá e uniforme **já no padrão da Projeta Food**: cor certa, fonte certa, marca certa, voz certa, número com régua e as regras de publicidade de agência e de comida, sem você precisar explicar nada disso de novo.

E faz o trabalho que mais pesa numa agência food, o **modo cliente**: peças para cada restaurante com a marca **dele** na arte (cores, fontes, logo, voz) e a estrutura da Projeta por baixo (modelo travado, foto-mestra, playbook do segmento, medidas de cada plataforma, conformidade, aprovação registrada). Se o restaurante tiver uma skill de marca própria instalada, como a `branding-royal-parma`, ela dá a identidade e esta dá a estrutura.

> "No padrão da Projeta Food, faz um anúncio 4:5 e um story 9:16 convidando donos de pizzaria para o diagnóstico gratuito de 40 minutos."
> "Peça de camada 1 para o restaurante desta ficha de marca: [colar a ficha]. Post 4:5 da oferta de parmegiana para 2, com a condição inteira."
> "Monta o relatório mensal co-assinado do [restaurante] de setembro com estes números: [colar]. Cada número com régua."

**Ver o brand book no navegador:** [rafaelnasch.github.io/branding-projeta-food](https://rafaelnasch.github.io/branding-projeta-food/) (abre em qualquer aparelho, sem instalar nada). Pedidos prontos para copiar: [guia de uso](https://rafaelnasch.github.io/branding-projeta-food/guia-de-uso.html). Ferramenta para produzir peças de restaurante: [kit do cliente](https://rafaelnasch.github.io/branding-projeta-food/kit-cliente.html).

---

## O que vem na caixa

| Arquivo | O que é |
|---|---|
| `SKILL.md` | O estilo inteiro, travado: as três camadas, cores, tipografia, a marca, as cinco leis, os 14 recursos assinatura, voz, conformidade, medidas de cada peça e de cada plataforma, o fluxo do modo cliente, celular e PDF. É o que o Claude lê. |
| `brand-book.html` | **Abra primeiro.** O manual vivo em 30 seções e 7 partes, com as peças em tamanho real, o kit de produção para restaurantes (ficha de marca, foto-mestra, playbook de nove segmentos, medidas de cada vitrine, 12 fórmulas de criativo) e o template pronto de **documento**. |
| `deck-template.html` | O esqueleto de **apresentação** em 1440 × 900: capa, capítulo, virada, colunas, telemetria, dados, processo, diagnóstico, número, cronograma, case, comparação, proposta, equipe e fechamento; navegação por seta, notas na tecla **P**. |
| `lockup.html` | Os trechos prontos: marca em arquivo e em data URI, avatar, favicon, co-assinatura com o restaurante, crédito em material de cliente, selos, número com régua, Faixa de Telemetria, aviso de resultado, bloco de case, preço com condição, item de cardápio, assinatura de e-mail, bio e WhatsApp. |
| `guia-de-uso.html` | 40 pedidos prontos por público (time interno, social media, tráfego, design, comercial, atendimento, restaurante cliente, gráfica, vídeo), com o que sai e a seção do manual que manda. |
| `relatorio-template.html` | O **relatório mensal** ao restaurante cliente, co-assinado, em A4: capa com a marca do restaurante, resumo em três frases, números com régua (medido, calculado, referência, estimado), gráficos na cor do cliente, o que fizemos, o que aprendemos, próximos passos e anexo de criativos. Bloco de configuração no topo do arquivo e modo neutro para marca vermelha. Dados de exemplo fictícios. |
| `kit-cliente.html` | O **kit do cliente**, ferramenta de produção para restaurantes: preencha a ficha de marca na própria página (cores com contraste conferido, aviso de modo neutro, fontes do Google Fonts por segmento, logo, tom, cidade e canais) e as cinco peças de delivery trocam de identidade na hora: post 4:5, story 9:16, capa de destaque, banner do cardápio próprio e foto do Perfil da Empresa no Google. Exporta cada peça em PNG no tamanho real, guarda a ficha num arquivo para a pasta do cliente e traz o checklist de aprovação. Começa pelas nove marcas fictícias do manual. |
| `pviz.js` | Motor de gráficos em SVG puro, com a régua embutida: barras, ranking, linha com ponto de ignição, composição, anel, funil, fluxo, número, linha do tempo, cota da meta, antes e depois, contador e Faixa de Telemetria. Entra sozinho no modo neutro quando a marca do cliente é vermelha. |
| `pforms.js` | Motor das formas da casa, medidas no logotipo: Moldura O, Seta A, Trajetória, Contagem, Chama de Status, Anel de Ignição, Brasa, Grade, Mira, Fio com Fenda, Pavio e a moldura de construção de peça com as áreas seguras de cada plataforma. |
| `dist/` | **Para enviar a alguém.** Versões de arquivo único (imagens, fontes livres e motores embutidos) do manual, da apresentação, do código da marca, do guia, do relatório mensal e do kit do cliente, mais os PDFs. Abrem sozinhas no e-mail, WhatsApp, Drive e celular. |
| `autocontido.py` | Gera o `dist/` de novo: `python3 autocontido.py`. Também transforma qualquer HTML novo feito com a skill: `python3 autocontido.py meu-material.html`. |
| `exportar_pdf.py` | Exporta documento ou apresentação em PDF com o Playwright. |
| `assets/` | A marca em SVG e PNG (completa, reduzida e símbolo, em cinco cores), foguete de construção, avatar, favicon, imagem de compartilhamento, `marca.json` com medidas, a Saira Larga Projeta (`fontes/`), a assinatura com placa (`aplicacoes/`) e o vetor original do site (`referencia-original/`). |

## Instalar

O nome da pasta tem que ser exatamente `branding-projeta-food`, com o `SKILL.md` dentro.

### Claude Code (terminal, VS Code, app de desktop)

```bash
git clone https://github.com/rafaelnasch/branding-projeta-food.git ~/.claude/skills/branding-projeta-food
```

Abra uma sessão nova e digite `/branding-projeta-food`, ou simplesmente peça "faz no padrão da Projeta Food". Para atualizar:

```bash
cd ~/.claude/skills/branding-projeta-food && git pull
```

### Claude no navegador ou no celular (claude.ai)

1. Baixe o ZIP pronto na página de **[Releases](https://github.com/rafaelnasch/branding-projeta-food/releases/latest)**: o arquivo `branding-projeta-food.zip`.
2. No Claude, vá em **Configurações, Capacidades, Skills** e envie o ZIP.

> Use o ZIP do Releases, **não** o "Code, Download ZIP" do GitHub: aquele vem com o nome da pasta trocado (`branding-projeta-food-main`) e a skill sobe com o nome errado.

No navegador o material sai como arquivo único, com a marca e os gráficos embutidos. A skill já sabe fazer isso. Só o PDF muda: ela entrega o HTML e você imprime pelo Chrome (instruções abaixo).

### Codex CLI

```bash
git clone https://github.com/rafaelnasch/branding-projeta-food.git ~/.codex/skills/branding-projeta-food
```

## O primeiro teste

Abra uma conversa nova e peça:

> "No padrão da Projeta Food, faz um post 1080 × 1350 convidando donos de restaurante para o diagnóstico gratuito de 40 minutos."

Se vier campo Noite (quase preto), título largo em caixa alta com **uma** palavra em vermelho, a marca reduzida no rodapé, nenhum número sem data e fonte e nenhuma promessa do tipo "dobre suas vendas", está funcionando. Se vier um post genérico, a skill não carregou: feche e abra o Claude de novo e confira se a pasta se chama exatamente `branding-projeta-food` e tem o `SKILL.md` dentro.

## Usar

- **"faz no padrão da Projeta Food"** já aciona a skill;
- diga **quem vai ler**: o consumidor do restaurante (camada 1, só a marca do restaurante), o dono do restaurante (camada 2, relatório e proposta co-assinados) ou o próximo cliente da Projeta (camada 3, case e deck);
- diga **qual peça** (post, carrossel, story, reels, anúncio, foto de item do iFood, cardápio próprio, WhatsApp, raio-X, proposta, relatório, deck, e-mail, cartão) e, no modo cliente, **o restaurante**, com a ficha de marca colada ou a skill de marca dele instalada;
- diga se é para **ler** (documento) ou para **apresentar** (deck);
- preço, data, telefone, CNPJ, número de porte da Projeta e resultado sem base saem em colchete: preencha antes de publicar;
- toda peça de restaurante só vai ao ar com a **aprovação escrita** dele (quem, quando, canal e versão);
- para **PDF**: abra o HTML no Chrome, role até o fim, `Cmd+P`, **Salvar como PDF** e, em "Mais definições", ligue **Gráficos de segundo plano**. Sem isso o fundo escuro some. Apresentação: layout **Paisagem**, margens **Nenhuma**.

## As cinco leis da casa

1. **O restaurante é a estrela; a Projeta é a plataforma.** Na arte que o consumidor do restaurante vê, a Projeta não aparece. No relatório, o logo do restaurante tem 1,5 vez a altura das maiúsculas do PROJETA.
2. **Vermelho é ignição, não parede.** O campo é Noite. O vermelho Ignição acende uma informação por peça, em no máximo 15% da área.
3. **Tudo sobe.** Trajetória, seta e leitura vão de baixo para cima e terminam numa ação. Queda num dado é rosa, nunca vermelho.
4. **Todo número tem régua.** Período, base e fonte em todo número público. Sem prova, colchete ou "dado em validação". Sem dado nunca vira zero.
5. **O que a peça mostra é o que chega.** Foto real do prato, na porção e na embalagem que o cliente recebe. Nada de prato gerado por inteligência artificial.

No manual, cada lei tem o porquê, o teste de cinco segundos e a mesma peça feita do jeito certo e do jeito errado (seção 03). A grade, as margens e as áreas seguras estão na seção 11, a escrita de números na seção 15 e o checklist de aprovação, com versão para marcar na tela e copiar, na seção 28.

## A marca

O logotipo da Projeta Food **nunca** é redesenhado, redigitado, girado, recolorido fora das versões ou vetorizado por conta própria. É sempre um dos arquivos de `assets/brand/`. Fundo escuro pede a negativa (a oficial); fundo claro pede a positiva; campo vermelho, foto ou cor de outra marca pedem a branca de uma cor. Abaixo de 240 px de largura entra a reduzida (sem FOOD MARKETING); abaixo de 96 px, o símbolo. Os arquivos são a **versão mestra a partir do vetor oficial** do site, com o vermelho unificado em `#ED0012`, e aguardam a aprovação da Projeta.

## As fontes

Títulos em **Saira** com largura de 112,5% e selos em **Unbounded**, substitutas livres da Transducer e da Kallisto que o site usa; texto em **Barlow**, a mesma do site. As três vêm do Google Fonts com licença aberta. A Transducer e a Kallisto são fontes comerciais: entram na frente da pilha onde a Projeta tiver a licença, e os arquivos delas **nunca** entram neste repositório, no arquivo único, no Canva nem em pasta de cliente.

## Publicidade de agência e de comida

O manual segue o Código de Defesa do Consumidor, o Código do CONAR (o conselho de autorregulamentação publicitária) e o guia de influenciadores, a lei das promoções com prêmio (sorteio só com autorização federal pedida de 40 a 120 dias antes), as regras de informação de preço, de rotulagem da ANVISA (Agência Nacional de Vigilância Sanitária), de comércio eletrônico, a Lei Geral de Proteção de Dados (LGPD), o ECA Digital, a lei de bebidas e as políticas da Meta, do Google, do WhatsApp, do iFood e do 99Food, sempre na leitura mais cuidadosa. Ele não substitui orientação jurídica. Detalhe, fontes e textos fixos na seção 27 do brand book.

## Pendências com a Projeta Food

Até cada uma ser resolvida, a skill entrega só a versão permitida. A lista completa (18 itens: vermelho único, versões do logo, licença das fontes, números de porte, selos de parceria, autorizações de clientes, contatos e identificação da empresa, entre outros), com o que fica travado e o que fazer enquanto isso, está na seção 30 do brand book e no `SKILL.md`.

## Este repositório é público

Exemplos só com as nove marcas fictícias do manual (Forno Vivo, Chapa Norte, Kaze Sushi, Nonna Rosa, Marmita Certa, Tábua do Tião, Roxo Açaí, Aurora Padaria, Folha & Grão). Logotipo, foto, número ou qualquer material real de restaurante cliente fica na pasta do cliente, no drive da Projeta, nunca aqui.

## Navegador

Chrome, Edge ou Safari recentes (iOS 16 ou mais novo, Chrome 105 ou mais novo).

---

Marca e logotipo são propriedade da **Projeta Food**. Os motores `pviz.js` e `pforms.js` foram escritos para este sistema. Sistema de identidade organizado com a GrowAI. Plataforma Ignição v1 · outubro de 2026.
