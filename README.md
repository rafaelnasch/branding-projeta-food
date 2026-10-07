# branding-projeta-food · a identidade da Projeta Food como skill

**O que é:** a identidade visual da **Projeta Food** (marketing para delivery e restaurantes do Grupo Projeta, método Delivery Blindado), no sistema **Plataforma Ignição v1**, mais o kit de produção para os restaurantes clientes, empacotados como uma *skill*. Uma skill é um pacote de instruções e arquivos que o assistente de IA (Claude, Codex ou ChatGPT) carrega sozinho quando o pedido combina com ela.

**O que muda depois de instalar:** você pede o material em português, como pediria a um designer, e ele já sai **no padrão da Projeta Food**. Isso vale para post, carrossel, story, reels, anúncio, bio, site, landing, e-mail, WhatsApp, raio-X do diagnóstico gratuito, proposta, deck, plano de 90 dias, relatório mensal co-assinado, case, cartão, crachá e uniforme, com cor, fonte, marca e voz certas, número com régua e as regras de publicidade de agência e de comida. Não é preciso explicar nada disso de novo a cada conversa.

E ela faz o trabalho que mais pesa numa agência food, o **modo cliente**: peças para cada restaurante com a marca **dele** na arte e a estrutura da Projeta por baixo (veja a [seção 7](#7-como-a-skill-funciona-por-dentro)).

> "No padrão da Projeta Food, faz um anúncio 4:5 e um story 9:16 convidando donos de pizzaria para o diagnóstico gratuito de 40 minutos."
> "Peça de camada 1 para o restaurante desta ficha de marca: [colar a ficha]. Post 4:5 da oferta de parmegiana para 2, com a condição inteira."
> "Monta o relatório mensal co-assinado do [restaurante] de setembro com estes números: [colar]. Cada número com régua."

**Ver o manual da marca sem instalar nada:** [rafaelnasch.github.io/branding-projeta-food](https://rafaelnasch.github.io/branding-projeta-food/) (abre em qualquer aparelho). Pedidos prontos para copiar: [guia de uso](https://rafaelnasch.github.io/branding-projeta-food/guia-de-uso.html). Ferramenta para produzir peças de restaurante: [kit do cliente](https://rafaelnasch.github.io/branding-projeta-food/kit-cliente.html).

**Baixar o pacote de instalação (ZIP):** [branding-projeta-food.zip](https://github.com/rafaelnasch/branding-projeta-food/releases/latest/download/branding-projeta-food.zip). O link entrega sempre a versão mais recente.

---

## Sumário

1. [Antes de começar: qual caminho é o seu](#1-antes-de-começar-qual-caminho-é-o-seu)
2. [Instalar no Claude pelo navegador (claude.ai)](#2-instalar-no-claude-pelo-navegador-claudeai)
3. [Instalar no Claude Code](#3-instalar-no-claude-code)
4. [Instalar no Codex](#4-instalar-no-codex)
5. [ChatGPT](#5-chatgpt)
6. [Conferir se funcionou](#6-conferir-se-funcionou)
7. [Como a skill funciona por dentro](#7-como-a-skill-funciona-por-dentro)
8. [Como pedir: o pedido que dá certo](#8-como-pedir-o-pedido-que-dá-certo)
9. [O que você recebe e como finalizar](#9-o-que-você-recebe-e-como-finalizar)
10. [As regras que a skill aplica sozinha](#10-as-regras-que-a-skill-aplica-sozinha)
11. [Atualizar, compartilhar com a equipe e remover](#11-atualizar-compartilhar-com-a-equipe-e-remover)
12. [Problemas comuns](#12-problemas-comuns)
13. [O que vem no repositório](#13-o-que-vem-no-repositório)
14. [Pendências com a Projeta Food](#14-pendências-com-a-projeta-food)
15. [Para quem mantém a skill](#15-para-quem-mantém-a-skill)

---

## 1. Antes de começar: qual caminho é o seu

| Você usa | Caminho | Precisa de | Tempo |
|---|---|---|---|
| **Claude no navegador ou no app** (claude.ai) | [Seção 2](#2-instalar-no-claude-pelo-navegador-claudeai): envia o ZIP | Conta Claude (Free, Pro, Max, Team ou Enterprise) e um computador para o envio | 3 minutos |
| **Claude Code** (terminal, VS Code, app de desktop) | [Seção 3](#3-instalar-no-claude-code): um comando | Git instalado | 1 minuto |
| **Codex** (app, CLI ou extensão de IDE) | [Seção 4](#4-instalar-no-codex): um comando | Git instalado | 1 minuto |
| **ChatGPT** | [Seção 5](#5-chatgpt) | Depende do que a sua conta libera | Leia a seção |

**Regra de ouro para o ZIP:** use sempre o link de download acima ou a página de [Releases](https://github.com/rafaelnasch/branding-projeta-food/releases/latest). **Nunca** use o botão verde "Code > Download ZIP" do GitHub. Esse botão baixa o repositório inteiro (cerca de 45 MB, com as versões prontas de `dist/`), com a pasta chamada `branding-projeta-food-main`, e a skill sobe com o nome errado ou grande demais.

---

## 2. Instalar no Claude pelo navegador (claude.ai)

Faça uma vez, no computador. Depois disso a skill fica na sua conta.

**Passo 1 · Ligue a execução de código** (só na primeira vez)
1. Abra [claude.ai](https://claude.ai) e entre na sua conta.
2. Vá em **Configurações** (Settings) > **Capacidades** (Capabilities).
3. Ligue **Execução de código e criação de arquivos** (Code execution and file creation). Sem isso, nenhuma skill funciona.

> Em conta **Team** ou **Enterprise**, quem administra a organização precisa ter liberado skills e execução de código. Se a opção não aparecer, peça ao administrador.

**Passo 2 · Baixe o pacote**
- Clique em [branding-projeta-food.zip](https://github.com/rafaelnasch/branding-projeta-food/releases/latest/download/branding-projeta-food.zip). Ele tem cerca de 3 MB.
- **Não descompacte.** O Claude recebe o ZIP do jeito que ele veio.

**Passo 3 · Envie a skill**
1. No claude.ai, abra **Personalizar** (Customize) > **Skills**.
2. Clique em **+** e depois em **Criar skill** (Create skill).
3. Escolha **Enviar uma skill** (Upload a skill) e selecione o `branding-projeta-food.zip`.
4. A skill `branding-projeta-food` aparece na lista. Confira se a chave ao lado dela está **ligada**.

**Passo 4 · Teste**
- Abra uma **conversa nova** e siga a [seção 6](#6-conferir-se-funcionou).

**Bom saber no navegador:** o que o Claude cria ali sai como **arquivo único** (um HTML com a marca, os gráficos e as formas embutidos), porque o artefato não enxerga as outras pastas do pacote. A skill já sabe disso e faz sozinha: a marca da Projeta entra pelos blocos prontos do `lockup.html`, e a marca do restaurante só a partir do arquivo que o cliente mandou. Para virar PDF, veja a [seção 9](#9-o-que-você-recebe-e-como-finalizar).

---

## 3. Instalar no Claude Code

Abra o terminal e rode:

```bash
git clone https://github.com/rafaelnasch/branding-projeta-food.git ~/.claude/skills/branding-projeta-food
```

1. Abra uma sessão **nova** do Claude Code.
2. Digite `/branding-projeta-food` para chamar a skill na hora, ou só peça "faz no padrão da Projeta Food", e ela entra sozinha.

No Claude Code o ambiente é completo: a skill grava os arquivos no seu computador, usa a marca de `assets/`, roda os motores de gráfico e de forma e exporta PDF direto (`exportar_pdf.py`).

> **Para um projeto só:** se preferir que a skill valha apenas dentro de uma pasta de projeto, clone em `<pasta-do-projeto>/.claude/skills/branding-projeta-food`.

---

## 4. Instalar no Codex

Abra o terminal e rode:

```bash
git clone https://github.com/rafaelnasch/branding-projeta-food.git ~/.agents/skills/branding-projeta-food
```

1. Reinicie o Codex (app, CLI ou extensão de IDE).
2. Digite `/skills` para ver a lista. A skill aparece como **Projeta Food · Plataforma Ignição**, nome dado pelo arquivo `agents/openai.yaml`.
3. Para chamar a skill na hora, escreva `$branding-projeta-food` no começo do pedido. Ou só peça "faz no padrão da Projeta Food", e ela entra sozinha.

> **Versões antigas do Codex** leem `~/.codex/skills/` em vez de `~/.agents/skills/`. Se a skill não aparecer em `/skills`, rode o mesmo comando trocando a pasta de destino.

---

## 5. ChatGPT

O ChatGPT usa o mesmo formato de skill (pasta com `SKILL.md`), e este pacote já traz o arquivo que o ChatGPT e o Codex leem para mostrar nome, ícone e pedido de exemplo (`agents/openai.yaml`).

**O envio de uma skill avulsa pelo ChatGPT web ainda não está documentado pela OpenAI** (consulta de 07/10/2026). Hoje a documentação oficial descreve skills no **Codex** e skills que chegam ao ChatGPT por meio de *plugins*.

- Se o seu ChatGPT mostra **Skills** na barra lateral com a opção de **criar ou enviar** uma skill, envie o mesmo [branding-projeta-food.zip](https://github.com/rafaelnasch/branding-projeta-food/releases/latest/download/branding-projeta-food.zip), sem descompactar. Depois, chame a skill digitando `@` e escolhendo `branding-projeta-food`.
- Se essa opção não aparece na sua conta, use o **claude.ai** ([seção 2](#2-instalar-no-claude-pelo-navegador-claudeai)) ou o **Codex** ([seção 4](#4-instalar-no-codex)), que funcionam hoje.

---

## 6. Conferir se funcionou

Abra uma **conversa nova** (a skill não entra numa conversa que já estava aberta antes da instalação) e peça:

> "No padrão da Projeta Food, faz um post 1080 × 1350 convidando donos de restaurante para o diagnóstico gratuito de 40 minutos."

**Funcionou se vier:**
- [ ] campo **Noite** (quase preto, `#050203`), com no máximo um ponto vermelho grande;
- [ ] título **largo, em caixa alta** (Saira), com **uma única** palavra em vermelho Ignição;
- [ ] a marca **reduzida no rodapé, em arquivo** (nunca PROJETA digitado numa fonte qualquer);
- [ ] a chamada aprovada, como "Agendar diagnóstico gratuito" ou "Quero um diagnóstico";
- [ ] nenhum número sem data, base e fonte, nenhuma promessa do tipo "dobre suas vendas", nenhum emoji na arte e nenhum travessão.

**Teste do modo cliente (opcional):** peça "post 4:5 de camada 1 para a Forno Vivo, marca fictícia do manual, com a pizza margherita a R$ 59,90". Funcionou se a arte sair **na marca da Forno Vivo, sem nada da Projeta** (nem logo, nem Noite, nem vermelho Ignição, nem Saira), com a comida como maior elemento e a condição da oferta inteira ao lado do preço.

**Não funcionou se vier** um post genérico, com cores aleatórias, com "PROJETA" escrito numa fonte qualquer ou com a marca da Projeta na peça do restaurante. Veja a [seção 12](#12-problemas-comuns).

---

## 7. Como a skill funciona por dentro

A skill não fica "lendo tudo" o tempo todo. Ela carrega em camadas, só o que o pedido precisa:

1. **A descrição (sempre carregada).** O assistente vê só o nome `branding-projeta-food` e um parágrafo que diz quando usar a skill: material da Projeta Food e peças dos restaurantes clientes, e palavras como "projeta food", "padrão projeta", "plataforma ignição" e "modo cliente". É isso que faz a skill entrar sozinha quando o pedido combina.
2. **O `SKILL.md` (quando a skill entra).** Traz as regras travadas: as três camadas, cores e pares de contraste, tipografia, as versões da marca, as cinco leis da casa, os 14 recursos assinatura, a voz, as regras de publicidade de agência e de comida, a fotografia de comida, o playbook por segmento, as medidas de cada vitrine, o fluxo do modo cliente, o celular e o PDF.
3. **Os arquivos de apoio (só quando a peça pede):**

| Arquivo | Quando o assistente abre |
|---|---|
| `brand-book.html` | Para copiar o modelo de **documento** (raio-X, proposta, plano, página de leitura) e conferir peças em tamanho real. É o manual completo em 30 seções e 7 partes. |
| `deck-template.html` | Para montar uma **apresentação**: os tipos de slide da casa em 1440 × 900, navegação por seta e notas na tecla P. |
| `relatorio-template.html` | Para o **relatório mensal** ao restaurante (camada 2), em A4, co-assinado, com bloco de configuração no topo (nome, logo, cores, fontes, período, modo neutro). |
| `kit-cliente.html` | Para as **peças de camada 1** de um restaurante: ficha de marca editável na página e cinco peças de delivery com camadas travadas, exportadas em PNG. |
| `lockup.html` | Para pegar a **marca pronta**, inclusive em *data URI* (a imagem embutida no próprio HTML, usada no navegador), a co-assinatura, os selos, a régua, o preço com condição, a assinatura de e-mail e as mensagens de WhatsApp. |
| `guia-de-uso.html` | Para os **40 pedidos prontos** por público (time interno, social media, tráfego, design, comercial, atendimento, restaurante cliente, gráfica, vídeo). |
| `pviz.js` | Para desenhar **gráficos** com régua: barras, ranking, linha com ponto de ignição, composição, anel, funil, número, linha do tempo, cota, antes e depois, contador e Faixa de Telemetria. |
| `pforms.js` | Para desenhar as **formas da casa** medidas no logotipo: Moldura O, Seta A, Trajetória, Contagem, Brasa, Grade, Mira, Fio com Fenda, Anel e a moldura de construção de peça com as áreas seguras. |
| `assets/` | Marca em SVG e PNG de tela (completa, reduzida, símbolo, em cinco cores), foguete de construção, avatar, favicon, imagem de compartilhamento, `marca.json` com as medidas, assinatura com placa, fontes livres e a Saira Larga Projeta. |
| `autocontido.py` e `exportar_pdf.py` | Para gerar a versão de arquivo único e o PDF (ambientes com terminal: Claude Code e Codex). |

**Por que isso importa para você:** a resposta sai rápida, e as regras entram sempre que o assunto é a Projeta ou um restaurante dela, sem você colar instruções.

**As três camadas: quem vai ler decide de quem é a marca.**

| Camada | Quem lê | Quem manda na marca | Exemplos |
|---|---|---|---|
| **1** | o consumidor do restaurante | **o restaurante**, 100% | anúncio, post, story, foto de item no aplicativo, cardápio próprio, WhatsApp |
| **2** | o dono do restaurante | moldura da Projeta, título do restaurante (logo dele 1,5 vez a altura do PROJETA) | relatório mensal, raio-X, proposta, plano de 90 dias |
| **3** | o próximo cliente da Projeta | **a Projeta**, com o cliente intacto e autorização escrita | case, deck comercial, site, anúncio da Projeta |

**O modo cliente.** É o dia a dia da agência: peças de camada 1 para dezenas de restaurantes, cada um com a sua marca. Na arte, a marca do restaurante manda e a Projeta **não aparece** (nada de Noite, Ignição, Saira, Unbounded, Seta A, logo ou crédito). A Projeta entra por baixo, com o modelo travado (logo do cliente no canto, comida em pelo menos 40% da área, preço grande colado ao produto, condição nunca abaixo de 26 px), a foto-mestra, o playbook do segmento, as medidas de iFood, 99Food, Google, Meta, TikTok e WhatsApp, as regras de publicidade e a aprovação escrita registrada.

**De onde vem a identidade do restaurante, nesta ordem:**
1. **Skill de marca do restaurante instalada** (por exemplo `branding-<restaurante>`, como a `branding-royal-parma`). As duas trabalham juntas: a do restaurante dá **tudo o que é identidade** (cores, fontes, logo, voz, leis e avisos próprios), e esta dá **estrutura e conformidade** (camadas, modelo travado, medidas e áreas seguras, foto-mestra, fórmulas de criativo, regras de publicidade, aprovação e nome de arquivo). Em conflito de identidade, vale a do restaurante; em lei e regra de plataforma, vale a mais restritiva das duas. Instale as duas e cite as duas no pedido ("no padrão da Projeta Food, peça de camada 1 da Royal Parma...").
2. **Sem skill, com ficha de marca** (cores, fontes, logo aprovado, tom em três palavras, canais de pedido, quem aprova): cole a ficha no pedido ou preencha no `kit-cliente.html`.
3. **Sem ficha:** a skill faz a triagem (é do grupo? tem manual? o logo aguenta?) e monta um **mini guia provisório**, marcado "aguarda aprovação do cliente". Campo vazio vira pendência com data, **nunca** a identidade da Projeta. O logo do cliente nunca é redesenhado nem recolorido.

---

## 8. Como pedir: o pedido que dá certo

Um bom pedido tem cinco partes:

| Parte | Exemplos |
|---|---|
| **A camada (quem vai ler)** | o consumidor do restaurante (1) · o dono do restaurante (2) · o próximo cliente da Projeta (3) |
| **A peça e o formato** | post 4:5, carrossel de 5 lâminas, story 9:16, foto de item do iFood, banner do cardápio próprio, raio-X A4, proposta, relatório, deck de 10 telas, e-mail, cartão |
| **A marca** | Projeta Food · o restaurante com a ficha colada · a skill de marca dele instalada |
| **O objetivo** | pedido no cardápio próprio, combo de sexta, convite ao diagnóstico, prestação de contas do mês |
| **Os dados com régua** | preço com centavos, condição (validade, canal, área, limite), período, base e fonte; o que faltar, "deixe em colchete" |

**Exemplos prontos para copiar:**

- "No padrão da Projeta Food, carrossel de 6 lâminas para o @projetafood sobre por que organizar a base antes de ligar o anúncio. Termina convidando para o diagnóstico gratuito."
- "Camada 1 para a Kaze Sushi (marca fictícia do manual): story 9:16 do combinado de 20 peças a R$ 89,90, válido de 10 a 12/10/2026, só no cardápio próprio, entrega no centro."
- "Relatório mensal co-assinado do [restaurante], set/2026, com os números que eu colar. Use o `relatorio-template.html` e ponha cada número com período, base e fonte."
- "Raio-X do diagnóstico em A4 para uma hamburgueria, com as seis frentes e no máximo três prioridades. Sem projeção de resultado."
- "Deck de venda de 10 telas da Projeta Food na ordem da reunião (17.4), com notas do apresentador."
- "Assinatura de e-mail do comercial da Projeta Food, com a versão de placa para modo escuro."
- "Pacote de exportação das fotos-mestras de um prato: quais tamanhos subo no iFood, no Google e no feed?"

**Dicas:**
- A skill já sabe a medida de cada formato e a área segura de cada plataforma. Só diga a medida se for diferente.
- Se faltar dado, ela **não inventa**: preço, telefone, CNPJ, número de porte da Projeta e resultado sem base saem em colchete (`[valor aprovado]`) para você preencher.
- Para ajustar, peça em cima do que veio: "troca o título da lâmina 3", "deixa o fundo Branco", "encurta o texto".
- Os 40 pedidos prontos, por público, estão no [guia de uso](https://rafaelnasch.github.io/branding-projeta-food/guia-de-uso.html).

---

## 9. O que você recebe e como finalizar

| Ambiente | O que chega | Como finalizar |
|---|---|---|
| **claude.ai** | Um artefato HTML de arquivo único, que você vê na tela e pode baixar | Para imagem: abra o HTML baixado no navegador e tire print da peça (no `kit-cliente.html`, exporte direto em PNG). Para PDF: veja abaixo. |
| **Claude Code / Codex** | Arquivos HTML (e PNG ou PDF, se você pedir) gravados na sua pasta | PDF direto: `python3 exportar_pdf.py <arquivo.html>`. Para mandar a alguém: `python3 autocontido.py <arquivo.html>` cria a versão de arquivo único em `dist/`. |

**PDF pelo Chrome (qualquer ambiente):**
1. Abra o HTML no Chrome, role até o fim (fontes e gráficos carregam) e espere uns 3 segundos.
2. `Cmd+P` (Mac) ou `Ctrl+P` (Windows) > **Salvar como PDF**.
3. Em **Mais configurações**, ligue **Gráficos de segundo plano**. Sem isso o Noite e o vermelho somem e o documento sai branco.
4. Documento: A4, retrato, margens padrão, escala 100%. Apresentação: **Paisagem**, margens **Nenhuma**.

**Antes de publicar qualquer peça**, rode o checklist da seção "Checklist de aprovação de peça" do `SKILL.md` (versão interativa na seção 28 do manual) e consiga a **aprovação escrita**: do restaurante para a peça dele (quem, quando, canal e versão; silêncio não é aprovação) e da direção de arte da Projeta para o que a Projeta assina.

---

## 10. As regras que a skill aplica sozinha

**As cinco leis da casa**
1. **O restaurante é a estrela; a Projeta é a plataforma.** Na peça para o consumidor do restaurante, a Projeta não aparece na arte. Nos documentos de gestão, o logo do restaurante tem 1,5 vez a altura do PROJETA.
2. **Vermelho é ignição, não parede.** O campo é Noite. O vermelho Ignição (`#ED0012`) acende uma informação por peça, em no máximo 15% da área.
3. **Tudo sobe.** Trajetória, Seta A e leitura vão de baixo para cima e terminam numa ação. Queda num dado é rosa, nunca vermelho.
4. **Todo número tem régua.** Período, base e fonte em todo número público. Sem prova, colchete ou "dado em validação". Sem dado nunca vira zero.
5. **O que a peça mostra é o que chega.** Foto real do prato, na porção, no acompanhamento e na embalagem que o cliente recebe. Nada de prato gerado por inteligência artificial.

**A marca:** o logotipo nunca é redesenhado, redigitado, girado, recolorido fora das versões, esticado ou com efeito. É sempre um arquivo de `assets/brand/`. Fundo escuro pede a negativa (a oficial); fundo claro, a positiva; campo vermelho, foto ou cor de outra marca, a branca. Abaixo de 240 px de largura entra a reduzida; abaixo de 96 px, o símbolo.

**As fontes:** títulos em **Saira** larga (112,5%) em caixa alta, selos e botões em **Unbounded** (no máximo três palavras), texto em **Barlow**. As três são livres. Transducer e Kallisto, as fontes comerciais do site, **nunca** entram no repositório, no arquivo único, no Canva nem em pasta de cliente.

**A voz:** a Projeta fala como **sócia de operação**, não vendedora de post. Frases curtas, sigla sempre traduzida, promessa de método e não de resultado, inimigo certo (a venda sem estrutura, nunca o aplicativo de delivery), zero travessão, no máximo uma exclamação, emoji só em legenda e WhatsApp da Projeta. Na peça do restaurante, a voz é a dele.

**Publicidade de agência e de comida**
- Preço com R$ e centavos, igual ao do canal no dia, e a condição completa ao lado (validade, canal, área de entrega, limite).
- Sorteio, "comente e concorra" e vale-brinde só com certificado de autorização federal (SPA/MF), pedido de 40 a 120 dias antes; sem ele, a mecânica vira benefício garantido a todos.
- Bebida alcoólica com a advertência e público 18+; criança só pelos pais e com revisão jurídica; criador com #publi na primeira linha; consentimento de WhatsApp em caixa separada e desmarcada.
- Anúncio fala do produto, nunca da condição de quem vê; anúncio da Projeta sem promessa de resultado ("dobre seu faturamento" reprova no Google Ads).
- Case e resultado da Projeta com régua, os dois números absolutos e o aviso "Resultado de um restaurante em um período. Não é média nem promessa."

O detalhe completo (leis, artigos e fontes) está no `SKILL.md` e na seção 27 do [manual](https://rafaelnasch.github.io/branding-projeta-food/). Este guia não substitui orientação jurídica: promoção com prêmio, bebida destilada e imagem de criança pedem advogado antes de ir ao ar.

---

## 11. Atualizar, compartilhar com a equipe e remover

**Atualizar**
- **claude.ai e ChatGPT:** baixe o [ZIP mais recente](https://github.com/rafaelnasch/branding-projeta-food/releases/latest/download/branding-projeta-food.zip), apague a skill antiga (passos abaixo) e envie a nova.
- **Claude Code:** `cd ~/.claude/skills/branding-projeta-food && git pull`
- **Codex:** `cd ~/.agents/skills/branding-projeta-food && git pull`

As novidades de cada versão ficam na página de [Releases](https://github.com/rafaelnasch/branding-projeta-food/releases).

**Compartilhar com a equipe (claude.ai)**
- Em **Personalizar > Skills**, clique em **...** ao lado da skill > **Compartilhar** e informe nome ou e-mail. Quem recebe pode ligar e usar a skill, mas não pode editar.
- Em conta Team ou Enterprise, **Publicar na organização** coloca a skill na biblioteca de todo o time.
- Para o time da Projeta, vale instalar também as skills de marca dos restaurantes atendidos: com as duas ligadas, o modo cliente sai na identidade certa sem colar ficha.

**Desligar ou remover**
- **claude.ai:** em **Personalizar > Skills**, desligue a chave. Para apagar: abra a skill, desligue, clique em **...** > **Excluir**.
- **Claude Code:** `rm -rf ~/.claude/skills/branding-projeta-food`
- **Codex:** `rm -rf ~/.agents/skills/branding-projeta-food`

---

## 12. Problemas comuns

| O que aconteceu | Causa provável | O que fazer |
|---|---|---|
| O envio do ZIP dá erro de **tamanho** | Você baixou pelo botão "Code > Download ZIP" (repositório inteiro) | Baixe o [branding-projeta-food.zip](https://github.com/rafaelnasch/branding-projeta-food/releases/latest/download/branding-projeta-food.zip) do Releases, de cerca de 3 MB |
| Erro de **nome da pasta**, de **nome de arquivo** ou falta de `SKILL.md` | ZIP descompactado e compactado de novo, pasta renomeada, ou o ZIP antigo da v1.0 (tinha arquivos de fonte com `?` e `&` no nome) | Envie o ZIP mais recente, sem mexer. A pasta de dentro tem de se chamar `branding-projeta-food` |
| A opção **Skills** não aparece no claude.ai | Execução de código desligada, ou bloqueio da organização | Ligue em Configurações > Capacidades; em Team/Enterprise, fale com o administrador |
| O resultado sai **genérico** | A skill está desligada, ou a conversa foi aberta antes da instalação | Confira a chave em Personalizar > Skills, abra uma **conversa nova** e cite "padrão da Projeta Food" no pedido |
| A marca aparece como **PROJETA digitado** ou com cor errada | A skill não carregou | Mesma solução da linha acima. A marca certa vem sempre de arquivo |
| A **marca da Projeta** apareceu na peça do restaurante | O pedido não disse a camada | Diga "camada 1" ou "para o consumidor do restaurante". Na camada 1 nada da Projeta entra na arte |
| A peça do restaurante saiu com **cores ou fontes inventadas** | Sem skill de marca do restaurante e sem ficha | Instale a skill de marca dele ou cole a ficha de marca; sem nenhuma das duas, a skill monta um mini guia marcado "provisório" |
| O **PDF** saiu com fundo branco | "Gráficos de segundo plano" desligado | Ligue a opção em Mais configurações na hora de imprimir |
| No Codex a skill **não aparece** em `/skills` | Pasta errada para a sua versão | Clone também em `~/.codex/skills/branding-projeta-food` e reinicie o Codex |
| Apareceu `[valor aprovado]` ou colchete na peça | Dado ainda não confirmado pela Projeta ou pelo restaurante (de propósito) | Preencha com o dado real antes de publicar. Colchete nunca vai ao ar |

---

## 13. O que vem no repositório

| Arquivo | O que é |
|---|---|
| `SKILL.md` | As regras travadas. É o que o assistente lê quando a skill entra. |
| `brand-book.html` | O manual vivo em 30 seções e 7 partes e o modelo de **documento**. |
| `deck-template.html` | O modelo de **apresentação** (1440 × 900, notas na tecla P). |
| `relatorio-template.html` | O relatório mensal co-assinado ao restaurante, em A4, com modo neutro para marca vermelha. |
| `kit-cliente.html` | O kit do cliente: ficha de marca do restaurante e cinco peças de delivery com camadas travadas. |
| `lockup.html` | Marca em arquivo e em data URI, co-assinatura, selos, régua, preço com condição, e-mail e WhatsApp. |
| `guia-de-uso.html` | Os 40 pedidos prontos por público. |
| `pviz.js` · `pforms.js` | Motores de gráfico com régua e de forma da casa. |
| `autocontido.py` | Gera versões de arquivo único (`dist/`) de qualquer HTML feito com a skill. |
| `exportar_pdf.py` | Exporta documento ou apresentação em PDF (Playwright). |
| `agents/openai.yaml` | Nome, descrição, ícone e pedido de exemplo no Codex e no ChatGPT. O Claude ignora este arquivo. |
| `index.html` | A página de entrada do site publicado (abre o manual). **Não vai no ZIP.** |
| `dist/` | Versões de arquivo único, prontas para mandar, e os PDFs: manual, apresentação, código da marca, guia, relatório e kit do cliente. **Não vai no ZIP.** |
| `assets/` | Marca (completa, reduzida, símbolo, em cinco cores; foguete, avatar, favicon, compartilhamento; `marca.json`), assinatura com placa, fontes livres (Saira Larga Projeta e a reserva em woff2 das fontes do Google) e o vetor original do site. |
| `tools/empacotar_skill.py` | Gera o ZIP de instalação dentro dos limites (ver a seção 15). |

**O que fica fora do ZIP** e continua no [endereço público do manual](https://rafaelnasch.github.io/branding-projeta-food/): o vetor original do site (`assets/referencia-original/`), as PNG da marca em resolução de impressão (2400 px), o `index.html` e o `dist/`. Dentro do pacote, o manual aponta para esses endereços. Para impressão em gráfica, baixe a PNG grande pelo endereço público ou pelo repositório.

**Este repositório é público.** Exemplos só com as nove marcas fictícias do manual (Forno Vivo, Chapa Norte, Kaze Sushi, Nonna Rosa, Marmita Certa, Tábua do Tião, Roxo Açaí, Aurora Padaria, Folha & Grão). Logotipo, foto, número ou qualquer material real de restaurante cliente fica na pasta do cliente, no drive da Projeta, nunca aqui.

---

## 14. Pendências com a Projeta Food

Enquanto cada uma não se resolve, a skill entrega só a versão permitida (dado em colchete, selo como `[selo oficial vigente]`, número como `[valor aprovado]`, método sem ®, cargos com "confirmação pendente") e avisa em uma linha:

**Marca e arquivos**
1. Vermelho único `#ED0012`.
2. Versões novas do logotipo (positiva, reduzida, símbolo, avatar, uma cor); até lá, em material público, a completa negativa sobre fundo escuro.
3. Arquivo de origem do logotipo e autoria.
4. Licença da Transducer e da Kallisto.
5. Cor impressa e prova de gráfica.
6. Registro do nome Delivery Blindado no INPI (Instituto Nacional da Propriedade Industrial).

**Números e selos**
7. Números oficiais de porte.
8. Prova dos percentuais de resultado.
9. Selos de parceria vigentes.

**Clientes e autorizações**
10. Autorização dos logos de clientes e lista das empresas do grupo.
11. Crédito da Projeta nos perfis dos clientes.
12. Imagem da equipe, vídeos e trilhas.
13. Quem aprova pela Projeta e em quanto tempo o restaurante aprova.

**Pessoas e contato**
14. Cargos dos sócios.
15. Telefone e WhatsApp oficiais.
16. Razão social e CNPJ.
17. Prazo de resposta e horário.
18. Formato do diagnóstico gratuito (videochamada, presencial ou os dois, e quem conduz).

O detalhe de cada uma está na seção 30 do manual.

---

## 15. Para quem mantém a skill

**Gerar o ZIP de uma versão nova**

```bash
python3 tools/empacotar_skill.py
```

O script grava `dist-skill/branding-projeta-food.zip` (fora do git) e **falha** se qualquer limite abaixo estourar. Depois, valide com o validador oficial da especificação e publique:

```bash
# validador oficial (precisa do uv; clone https://github.com/agentskills/agentskills antes)
uvx --from <pasta-do-clone>/skills-ref skills-ref validate .
gh release create vX.Y dist-skill/branding-projeta-food.zip -t "branding-projeta-food vX.Y" --latest
```

**Limites atendidos (conferidos em 07/10/2026)**

| Limite | Regra | Esta skill |
|---|---|---|
| `name` | minúsculas, números e hífen, até 64, igual ao nome da pasta | `branding-projeta-food` (20) |
| `description` | até 1.024 caracteres, sem `<` e `>`; caso de uso e gatilhos no começo | 1.009 caracteres |
| Campos do frontmatter | só os da especificação | `name` e `description` |
| `SKILL.md` | menos de 500 linhas | 498 linhas |
| Links relativos | todo link do `SKILL.md` aponta para arquivo do pacote | 0 quebrados |
| ZIP | até 30 MB (meta abaixo de 10 MB) | 3,20 MB (v1.0: 4,29 MB) |
| Descompactado | até 25 MB | 6,15 MB (v1.0: 7,29 MB) |
| Arquivos | até 400; nenhum acima de 10 MB; nomes só com letras, números, ponto, hífen e sublinhado | 142 (v1.0: 183); o maior é o `brand-book.html` (1,52 MB) |
| Estrutura | uma pasta `branding-projeta-food/` no topo, um só `SKILL.md` | sim |
| Fontes | todo CSS de fonte do pacote aponta para woff2 presente | sim; os woff2 órfãos com `?` e `&` no nome ficam fora |
| Validador oficial | `skills-ref validate` | "Valid skill: branding-projeta-food" no pacote e no repositório |

Os limites de nome, descrição, campos e linhas são os da [especificação Agent Skills](https://agentskills.io/specification). Os de tamanho são as travas do `tools/empacotar_skill.py`, mais rígidas que as dos apps (a ajuda do Claude não publica um número). **Regras para manter:** tudo o que é pesado e não serve para produzir peça fica fora do ZIP e é servido pelo endereço público; o `SKILL.md` está a duas linhas do limite, então detalhe novo vai para um arquivo em `references/` citado por link relativo (o empacotador já inclui essa pasta).

**Navegadores:** Chrome, Edge ou Safari recentes (iOS 16 ou mais novo, Chrome 105 ou mais novo).

---

Marca e logotipo são propriedade da **Projeta Food**. Os motores `pviz.js` e `pforms.js` foram escritos para este sistema. Sistema de identidade organizado com a GrowAI. Plataforma Ignição v1 · outubro de 2026.

Fontes das instruções de instalação: [Usar skills no Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) · [Build skills (OpenAI)](https://learn.chatgpt.com/docs/build-skills) · [Especificação Agent Skills](https://agentskills.io/specification).
