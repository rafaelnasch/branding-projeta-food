/* =====================================================================
   PVIZ · motor de gráficos da Projeta Food · sistema Plataforma Ignição v1
   SVG puro, zero dependências, JavaScript ES2015 simples e determinístico
   (sem Math.random, sem Date): a mesma entrada e a mesma largura geram sempre
   o mesmo desenho, na tela, no PDF e no arquivo levado ao Canva ou ao Figma.

   COMO USAR (três formas)
     1. Declarativa, sem escrever JavaScript (o motor monta sozinho):
        <div data-pviz='{"tipo":"barras","titulo":"Sexta vende o dobro da terça",
             "rotulos":["Seg","Ter","Qua","Qui","Sex"],"valores":[40,31,38,47,66],
             "periodo":"set/2026","base":"1 restaurante","fonte":"painel do aplicativo",
             "origem":"medido"}'></div>
     2. Por chamada: PViz.barras(el, {...}) ou PViz.render(el, 'barras', {...}).
     3. Para levar a outra ferramenta: PViz.svg('barras', {..., campo:'noite', largura:960})
        devolve o SVG pronto (texto com xmlns, width e height, cores em HEX).
        PViz.svg(el) devolve o SVG de um gráfico que já está na página.
     O mesmo objeto responde por window.PViz e window.pviz.

   CAMPOS (de onde saem as cores)
     Sem a opção campo, o motor olha a cor real atrás do gráfico e escolhe a paleta:
     noite #050203 (padrão), preto, superficie, superficie-alta, grafite, branco,
     bancada, ignicao e vinho. Variáveis CSS opcionais no contêiner:
     --pv-fundo, --pv-titulo, --pv-texto, --pv-apoio, --pv-principal.
     Série principal: Ignição #ED0012. Meta e período anterior: Branco no escuro e Noite
     no claro, sempre tracejado ou em contorno. Contexto: Fumaça. Quarta série: Faísca
     Clara #FA949D no escuro, Brasa Funda #7E000A no claro. No máximo 4 séries.
     Vermelho de TEXTO pequeno: Chama #FF5A67 no escuro, Rubro #AD000D no claro.

   COR DO CLIENTE E MODO NEUTRO (relatório co-assinado)
     cor: '#2F5D50' (ou a variável --cliente-cor no contêiner, ou --cliente-cor-1 com
     cliente:true) troca a série principal pela cor do cliente: ele se reconhece no
     próprio dado. Componentes (Seta A, Pavio, régua) continuam Plataforma Ignição.
     Modo neutro: se a cor do cliente for vermelha, laranja, rosa ou vinho (matiz até
     cerca de 40 graus do vermelho da marca), ou com neutro:true, a Ignição sai do gráfico
     inteiro, a série principal e os marcadores vão para a cor do cliente e a comparação
     fica em Fumaça. neutro:false desliga a detecção.

   RÉGUA (Lei 4: todo número tem régua)
     periodo  'ago/2026 a set/2026'   base 'base: 12 restaurantes'   fonte 'relatórios mensais'
     regua    texto pronto que substitui os três acima
     origem   'medido' | 'calculado' | 'referencia' | 'estimado' (marca de origem: traço de
              3 px à esquerda, no estilo do estado, com ícone Lucide e rótulo)
     aviso    linha extra, ex.: 'Resultados variam por operação.'
     Sem fonte e sem regua, o rodapé diz 'Dado ilustrativo · sem fonte'. rodape:false só
     quando a legenda em HTML logo abaixo já traz a régua inteira.

   OPÇÕES COMUNS (em português; os nomes em inglês também valem)
     titulo      título que AFIRMA a conclusão (Saira 112,5% 700, caixa alta)
     destaqueTitulo  true: a última linha do título em Ignição (Chama no texto menor)
     sobretitulo rótulo acima do título com o Pavio (traço vermelho de 16 por 2)
     destaque    índice do ÚNICO destaque (padrão: o último; -1 desliga)
     vrotulos    valores já escritos em pt-BR ("R$ 49,90", "38 min", "64%")
     unidade     unidade no fim da linha de base ("PEDIDOS", "%")
     meta        valor da meta (linha tracejada com rótulo), em barras, linha e anel
     campo       força a paleta (ver CAMPOS)
     altura      altura da área do gráfico
     largura     largura do viewBox; padrão = largura do contêiner entre 280 e 1200
                 (1 unidade = 1 px: o rótulo sai no tamanho real no celular)
     peca        dentro de .peca (o post de 1080) o desenho escala para o rótulo de 14
                 valer 26 unidades da peça (o piso tipográfico da peça)
     animar      true; nunca com movimento reduzido, na impressão ou em navegador automatizado
     aria, desc  nome e descrição acessíveis (gerados sozinhos quando faltam)

   TIPOS
     barras       { rotulos, valores, vrotulos, destaque, meta, unidade, series }
     barras-h     { rotulos, valores, vrotulos, destaque, posicao, empilhar }   ranking
     linha        { rotulos, valores, vrotulos, destaque, area, meta, projecao, ignicao, series }
     composicao   { segmentos:[{rotulo,valor,vrotulo}], destaque }              100%
                  { linhas:[{rotulo, segmentos:[...]}], nomes:[...] }            empilhada
     anel         { valor (0 a 100), vrotulo, rotulo, meta, tamanho }
     funil        { etapas:[{rotulo,valor,vrotulo}], destaque, escala:'log' }
                  padrão: Atenção, Clique, Pedido, Recompra
     fluxo        { passos:[{rotulo,sub}], destaque, numeros }
     numero       { valor, vrotulo, unidade, rotulo, sub, variacao, serie }     KPI
     linha-tempo  { eventos:[{data,rotulo,sub}], destaque }
     meta         { valor, meta, vrotulo, vmeta, esperado, rotulo }            cota de meta
     cota         { rotulo }                                                   medida técnica
     comparativo  { antes:{valor,vrotulo,rotulo}, depois:{...}, variacao, barras, aviso }
     contador     { valor, vrotulo, unidade, rotulo, vazio, contar }            Contador com régua
     faixa        { itens:[{valor,rotulo}], versao:'ignicao'|'escura' }         Faixa de Telemetria
   Funções: PViz.<tipo>(el, opts) · PViz.render(el, tipo, opts) · PViz.montar(raiz)
            PViz.redesenhar() · PViz.fmt(n, {dec, prefixo, sufixo}) · PViz.svg(el | tipo, opts)
            PViz.contraste(a, b) · PViz.paletas · PViz.animar = false desliga as entradas.

   REGRAS DA CASA EMBUTIDAS
     Um destaque por gráfico, em Ignição, marcado pela SETA A (o A final do logotipo:
     chevron de topo chato, nunca para baixo); o resto é neutro. Barras de topo reto e base
     zero. A linha de base é a PLATAFORMA: fio de 2 px com um ressalto à esquerda. Zero
     grade, zero 3D, zero sombra, zero pizza, zero degradê. Número em Saira 500 (Transducer
     quando instalada), rótulos e régua em Barlow (no mínimo 13 px). Ponto de ignição (o mês
     em que a mudança entrou) marcado pela Chama oficial. Queda só com trending-down na cor
     semântica, nunca em vermelho da marca. Cada SVG ganha id único (pv1, pv2...), estável
     entre redesenhos, com <title> e <desc> para leitor de tela.

   O QUE O MOTOR NÃO DESENHA NA COMUNICAÇÃO PÚBLICA
     Número sem régua, resultado de um cliente vendido como típico (o comparativo leva o
     aviso sempre), promessa absoluta ("dobre", "garantido") e ausência de dado como zero:
     escreva null e o motor mostra "sem dado".
   ===================================================================== */
(function (raiz) {
  'use strict';
  const temDoc = typeof document !== 'undefined';
  const registro = new Set();
  let seq = 0, seqX = 0;

  /* ---------- paletas (HEX por extenso) ---------- */
  const BRANCO = '#FFFFFF', NOITE = '#050203', IGNICAO = '#ED0012';
  const ESC = { titulo: BRANCO, texto: '#F0EEEE', apoio: '#BDB8B8', regua: '#8C8686', principal: IGNICAO, marca: IGNICAO,
    principalTxt: '#FF5A67', meta: BRANCO, contexto: '#8C8686', quarta: '#FA949D' };
  const CLA = { titulo: NOITE, texto: '#3A3434', apoio: '#5E5858', regua: '#5E5858', principal: IGNICAO, marca: IGNICAO,
    principalTxt: '#AD000D', meta: NOITE, contexto: '#5E5858', quarta: '#7E000A' };
  const PALETAS = {
    noite: Object.assign({ fundo: NOITE }, ESC),
    preto: Object.assign({ fundo: '#000000' }, ESC),
    superficie: Object.assign({ fundo: '#10090B' }, ESC),
    'superficie-alta': Object.assign({ fundo: '#1A0D10' }, ESC),
    grafite: Object.assign({ fundo: '#221E1E' }, ESC, { regua: '#BDB8B8' }),
    vinho: Object.assign({ fundo: '#300008' }, ESC, { apoio: '#FEDADE', regua: '#FA949D', principalTxt: '#FA949D', contexto: '#FA949D', quarta: '#FEDADE' }),
    branco: Object.assign({ fundo: BRANCO }, CLA),
    bancada: Object.assign({ fundo: '#F7F7F7' }, CLA),
    ignicao: { fundo: IGNICAO, titulo: BRANCO, texto: BRANCO, apoio: BRANCO, regua: BRANCO, principal: NOITE, marca: BRANCO,
      principalTxt: BRANCO, meta: BRANCO, contexto: '#7E000A', quarta: '#FEDADE', fio: '#650008' }
  };
  const SEM = {
    positivo: ['#75DC91', '#1E7B45'], atencao: ['#FFC145', '#8A5A00'],
    negativo: ['#FF8FB0', '#A3175A'], info: ['#8FB8FF', '#1F5FBF']
  };
  const ORIGENS = {
    medido: { nome: 'Medido', esc: BRANCO, cla: NOITE, w: 3, dash: '', icone: 'gauge' },
    calculado: { nome: 'Calculado', esc: '#BDB8B8', cla: '#5E5858', w: 2, dash: '', icone: 'calculator' },
    referencia: { nome: 'Referência de mercado', esc: '#8FB8FF', cla: '#1F5FBF', w: 3, dash: '5 3', icone: 'book-open' },
    estimado: { nome: 'Estimado', esc: '#FFC145', cla: '#8A5A00', w: 3, dash: '1 4', icone: 'flask-conical' }
  };
  const APELIDO_ORIGEM = { 'referência': 'referencia', mercado: 'referencia', estimativa: 'estimado', hipotese: 'estimado', 'hipótese': 'estimado', medida: 'medido', calculada: 'calculado' };

  /* ---------- cor ---------- */
  function hex(v) {
    v = String(v || '').trim();
    let m;
    if (/^#[0-9a-f]{3}$/i.test(v)) return ('#' + v[1] + v[1] + v[2] + v[2] + v[3] + v[3]).toUpperCase();
    if (/^#[0-9a-f]{6}$/i.test(v)) return v.toUpperCase();
    if (/^#[0-9a-f]{8}$/i.test(v)) return v.slice(0, 7).toUpperCase();
    m = v.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)(?:[\s,/]+([\d.]+%?))?/i);
    if (m) {
      if (m[4] != null && parseFloat(m[4]) === 0) return null;
      return '#' + [m[1], m[2], m[3]].map(n => ('0' + Math.max(0, Math.min(255, Math.round(+n))).toString(16)).slice(-2)).join('').toUpperCase();
    }
    return null;
  }
  const rgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  function mistura(a, b, t) {
    const x = rgb(a), y = rgb(b);
    return '#' + x.map((v, i) => ('0' + Math.round(v + (y[i] - v) * t).toString(16)).slice(-2)).join('').toUpperCase();
  }
  function luz(h) {
    const v = rgb(h).map(x => x / 255).map(x => (x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4)));
    return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
  }
  function contraste(a, b) {
    const la = luz(hex(a) || a), lb = luz(hex(b) || b);
    return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
  }
  function hsl(h) {
    const c = rgb(h).map(x => x / 255), mx = Math.max.apply(null, c), mn = Math.min.apply(null, c), l = (mx + mn) / 2;
    if (mx === mn) return [0, 0, l];
    const d = mx - mn, s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
    let H;
    if (mx === c[0]) H = (c[1] - c[2]) / d + (c[1] < c[2] ? 6 : 0);
    else if (mx === c[1]) H = (c[2] - c[0]) / d + 2;
    else H = (c[0] - c[1]) / d + 4;
    return [H * 60, s, l];
  }
  /* matiz até 40 graus do vermelho da marca (355 graus): vermelho, laranja-avermelhado, rosa, vinho */
  function pertoDoVermelho(h) {
    const x = hsl(h), d = Math.min(Math.abs(x[0] - 355), 360 - Math.abs(x[0] - 355));
    return d <= 40 && x[1] >= 0.3 && x[2] >= 0.12 && x[2] <= 0.85;
  }
  /* aproxima uma cor do preto ou do branco até fechar a razão pedida (só para TEXTO) */
  function ajusta(cor, fundo, alvoR) {
    if (contraste(cor, fundo) >= alvoR) return cor;
    const para = luz(fundo) < 0.2 ? BRANCO : NOITE;
    for (let t = 0.05; t <= 1.0001; t += 0.05) { const m = mistura(cor, para, t); if (contraste(m, fundo) >= alvoR) return m; }
    return para;
  }
  function completa(c) {
    c.vermelho = pertoDoVermelho(c.fundo) && luz(c.fundo) >= 0.06 && luz(c.fundo) < 0.3;
    c.escuro = !c.vermelho && luz(c.fundo) < 0.18;
    if (!c.fio) c.fio = c.escuro ? mistura(c.fundo, BRANCO, 0.14) : '#E2DEDE';
    c.base = c.escuro ? mistura(c.fundo, BRANCO, 0.42) : mistura(c.fundo, NOITE, 0.62);
    if (c.vermelho) c.base = BRANCO;
    c.neutro = c.escuro ? mistura(c.fundo, BRANCO, 0.34) : mistura(c.fundo, NOITE, 0.42);
    if (c.vermelho) c.neutro = '#7E000A';
    c.trilho = c.escuro ? mistura(c.fundo, BRANCO, 0.12) : mistura(c.fundo, NOITE, 0.08);
    if (c.vermelho) c.trilho = '#AD000D';
    if (contraste(c.apoio, c.fundo) < 4.5) c.apoio = c.texto;
    if (contraste(c.regua, c.fundo) < 4.5) c.regua = c.apoio;
    c.principalTxt = ajusta(c.principalTxt, c.fundo, 4.5);
    c.sem = k => SEM[k][c.escuro || c.vermelho ? 0 : 1];
    c.org = k => (c.vermelho ? BRANCO : ORIGENS[k][c.escuro ? 'esc' : 'cla']);
    return c;
  }
  function fundoReal(el) {
    try {
      for (let n = el; n && n.nodeType === 1; n = n.parentElement) {
        const bg = getComputedStyle(n).backgroundColor, m = bg && bg.match(/rgba?\(([^)]*)\)/);
        if (!m) continue;
        const partes = m[1].split(/[\s,/]+/).filter(Boolean);
        if (partes.length < 4 || parseFloat(partes[3]) > 0.5) return hex(bg);
      }
    } catch (err) { /* sem estilo calculado */ }
    return null;
  }
  function lerVar(el, nome) {
    try { return hex(getComputedStyle(el).getPropertyValue(nome)); } catch (err) { return null; }
  }
  function cores(el, o) {
    let c;
    if (o.campo && PALETAS[o.campo]) c = Object.assign({}, PALETAS[o.campo]);
    else {
      const real = el ? fundoReal(el) : null;
      const achada = real && Object.keys(PALETAS).filter(k => PALETAS[k].fundo === real)[0];
      if (achada) c = Object.assign({}, PALETAS[achada]);
      else if (real && pertoDoVermelho(real) && luz(real) > 0.08 && luz(real) < 0.3) c = Object.assign({}, PALETAS.ignicao, { fundo: real });
      else if (real && luz(real) < 0.18) c = Object.assign({}, PALETAS.noite, { fundo: real });
      else if (real) c = Object.assign({}, PALETAS.branco, { fundo: real });
      else c = Object.assign({}, PALETAS.noite);
      if (el) [['fundo', '--pv-fundo'], ['titulo', '--pv-titulo'], ['texto', '--pv-texto'], ['apoio', '--pv-apoio'], ['principal', '--pv-principal']]
        .forEach(p => { const v = lerVar(el, p[1]); if (v) c[p[0]] = v; });
    }
    completa(c);
    /* cor do cliente */
    let cli = hex(o.cor || o.clienteCor || '');
    if (!cli && el && o.cliente !== false) cli = lerVar(el, '--cliente-cor') || (o.cliente === true ? lerVar(el, '--cliente-cor-1') : null);
    if (cli && !c.vermelho) {
      c.cliente = cli;
      c.principal = cli;
      c.principalTxt = ajusta(cli, c.fundo, 4.5);
      c.neutroModo = o.neutro === true || (o.neutro !== false && pertoDoVermelho(cli));
      if (c.neutroModo) {
        c.marca = cli;
        c.contexto = c.escuro ? '#8C8686' : '#5E5858';
        c.quarta = c.escuro ? '#BDB8B8' : '#3A3434';
        c.marcaTxt = c.principalTxt;
      }
    } else if (o.neutro === true) c.neutroModo = true;
    if (!c.marcaTxt) c.marcaTxt = c.vermelho ? BRANCO : (c.marca === IGNICAO ? (c.escuro ? '#FF5A67' : '#AD000D') : ajusta(c.marca, c.fundo, 4.5));
    /* Ignição como texto grande (24 px ou mais): passa no Noite, Preto e Branco; nos outros, Chama ou Rubro */
    c.grande = contraste(c.principal, c.fundo) >= 3 ? c.principal : c.principalTxt;
    return c;
  }

  /* ---------- tipografia ---------- */
  const NUM = "font-family:'Transducer','Transducer Projeta','Saira',Arial,sans-serif;font-stretch:112.5%;font-variant-numeric:lining-nums";
  const LAB = "font-family:'Barlow',Arial,sans-serif;font-variant-numeric:lining-nums tabular-nums";
  const fonte = (f, peso, tam, ls) => `${f};font-weight:${peso};font-size:${r2(tam)}px` + (ls ? `;letter-spacing:${r2(ls)}px` : '');
  const r2 = v => Math.round(v * 100) / 100;
  const esc = s => String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  const alvo = e => (typeof e === 'string' ? (temDoc ? document.getElementById(e) : null) : e);
  const dois = n => (n < 10 ? '0' : '') + n;
  const caixa = s => String(s == null ? '' : s).toLocaleUpperCase('pt-BR');
  const FS = 14, FP = 13;
  function T(x, y, conteudo, f, peso, tam, cor, anc, ls, extra) {
    return `<text x="${r2(x)}" y="${r2(y)}"${anc && anc !== 'start' ? ` text-anchor="${anc}"` : ''} fill="${cor}" style="${fonte(f, peso, tam, ls)}"${extra || ''}>${esc(conteudo)}</text>`;
  }
  const R = (x, y, w, h, cor, extra) => `<rect x="${r2(x)}" y="${r2(y)}" width="${r2(Math.max(0, w))}" height="${r2(Math.max(0, h))}" fill="${cor}"${extra || ''}/>`;
  /* halo: recorta o fio que passa atrás de um rótulo (meta, grade da peça) com a cor do campo */
  const HALO = c => ` stroke="${c.fundo}" stroke-width="4" stroke-linejoin="round" paint-order="stroke"`;
  const L = (x1, y1, x2, y2, cor, w, extra) => `<line x1="${r2(x1)}" y1="${r2(y1)}" x2="${r2(x2)}" y2="${r2(y2)}" stroke="${cor}" stroke-width="${w || 1}"${extra || ''}/>`;
  /* a SETA A: o A final do logotipo (chevron de topo chato), centrada em (cx, cy), altura h.
     rot 0 = para cima; 90 = para a direita. Nunca para baixo. */
  const SETA_PTS = '0,35.75 16.99,0 24.13,0 41.12,35.75 34.02,35.75 20.56,7.43 7.1,35.75';
  function seta(cx, cy, h, cor, rot, extra) {
    rot = Math.max(0, Math.min(90, +rot || 0));
    const k = h / 35.75;
    return `<polygon points="${SETA_PTS}" transform="translate(${r2(cx)} ${r2(cy)}) rotate(${r2(rot)}) scale(${r2(k * 1000) / 1000}) translate(-20.56 -17.88)" fill="${cor}"${extra || ''}/>`;
  }
  /* a CHAMA oficial do foguete (vetor do logotipo), centrada em (cx, cy), altura h */
  const CHAMA_D = 'M91.05,26.43c-.98-1.28-2.53-3.64-3.14-6.01-1.87-7.23,7.34-7.57,5.91-.22-.47,2.41-1.87,4.88-2.77,6.23Z';
  function chama(cx, cy, h, cor, extra) {
    const k = h / 11.83;
    return `<path d="${CHAMA_D}" transform="translate(${r2(cx)} ${r2(cy)}) scale(${r2(k * 1000) / 1000}) translate(-90.86 -20.52)" fill="${cor}"${extra || ''}/>`;
  }
  /* ícones Lucide (viewBox 24, traço 2; 1,75 px em 16 px ou menos) */
  const ICONES = {
    gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
    calculator: '<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>',
    'book-open': '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
    'flask-conical': '<path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/>',
    'trending-up': '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    'trending-down': '<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/>',
    'triangle-alert': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    'circle-check': '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    minus: '<path d="M5 12h14"/>'
  };
  function icone(nome, x, y, tam, cor) {
    const d = ICONES[nome]; if (!d) return '';
    const sw = (tam <= 16 ? 1.75 : 2) * 24 / tam;
    return `<g transform="translate(${r2(x)} ${r2(y)}) scale(${r2(tam / 24 * 1000) / 1000})" fill="none" stroke="${cor}" stroke-width="${r2(sw)}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</g>`;
  }
  /* a PLATAFORMA: linha de base de 2 px com um ressalto de 6 px à esquerda */
  const BASE = (x1, x2, y, cor) => L(x1, y + 1, x2, y + 1, cor, 2) + L(x1 + 1, y - 5, x1 + 1, y + 2, cor, 2);

  /* ---------- medição de texto (SVG oculto; sem medida, estima) ---------- */
  const cache = new Map();
  let medidor = null;
  function mede(txt, f, peso, tam, ls) {
    txt = String(txt);
    const k = f.length + '|' + peso + '|' + tam + '|' + (ls || 0) + '|' + txt;
    if (cache.has(k)) return cache.get(k);
    let w = 0;
    try {
      if (temDoc && document.body) {
        if (!medidor || !medidor.isConnected) {
          const NS = 'http://www.w3.org/2000/svg';
          medidor = document.createElementNS(NS, 'svg');
          medidor.setAttribute('aria-hidden', 'true');
          medidor.setAttribute('width', '1'); medidor.setAttribute('height', '1');
          medidor.style.cssText = 'position:absolute;left:0;top:0;width:1px;height:1px;overflow:hidden;visibility:hidden;pointer-events:none';
          medidor.appendChild(document.createElementNS(NS, 'text'));
          document.body.appendChild(medidor);
        }
        const t = medidor.firstChild;
        t.setAttribute('style', fonte(f, peso, tam, ls));
        t.textContent = txt;
        w = t.getComputedTextLength();
      }
    } catch (err) { w = 0; }
    if (!w) w = txt.length * (f === NUM ? 0.66 : 0.5) * tam + (ls || 0) * txt.length;
    cache.set(k, w);
    return w;
  }
  function quebra(txt, f, peso, tam, maxW, maxL, ls) {
    const pal = String(txt == null ? '' : txt).split(/\s+/).filter(Boolean);
    if (!pal.length) return [];
    const linhas = [];
    let atual = pal[0];
    for (let i = 1; i < pal.length; i++) {
      const tenta = atual + ' ' + pal[i];
      if (mede(tenta, f, peso, tam, ls) <= maxW) atual = tenta;
      else { linhas.push(atual); atual = pal[i]; }
    }
    linhas.push(atual);
    if (maxL && linhas.length > maxL) {
      const cab = linhas.slice(0, maxL - 1);
      cab.push(linhas.slice(maxL - 1).join(' '));
      return cab;
    }
    return linhas;
  }
  const maiorPalavra = (textos, f, peso, tam, ls) => Math.max(0, ...textos.map(t => Math.max(0, ...String(t == null ? '' : t).split(/\s+/).map(w => mede(w, f, peso, tam, ls)))));

  /* ---------- números em pt-BR ---------- */
  function fmt(n, o) {
    o = o || {};
    if (n == null || n === '' || !isFinite(+n)) return 'sem dado';
    const dec = o.dec == null ? 0 : o.dec;
    const neg = +n < 0;
    const partes = Math.abs(+n).toFixed(dec).split('.');
    const inteiro = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return (neg ? '-' : '') + (o.prefixo || '') + inteiro + (dec > 0 ? ',' + partes[1] : '') + (o.sufixo || '');
  }
  function auto(v) {
    if (v == null || v === '') return 'sem dado';
    if (typeof v !== 'number' || !isFinite(v)) return String(v);
    if (Number.isInteger(v)) return fmt(v);
    return fmt(v, { dec: Math.abs(v * 10 - Math.round(v * 10)) < 1e-9 ? 1 : 2 });
  }
  const pct = (v, dec) => fmt(v, { dec: dec == null ? 1 : dec, sufixo: '%' });
  const num = v => (v == null || v === '' || !isFinite(+v) ? null : +v);
  const rotulos = (vals, vl) => vals.map((v, i) => (vl && vl[i] != null ? String(vl[i]) : auto(v)));

  /* ---------- largura do viewBox ---------- */
  function emPeca(el) {
    try {
      const peca = el.closest && el.closest('.peca');
      if (!peca) return null;
      const mock = peca.closest('.mock') || peca;
      const cs = getComputedStyle(mock);
      const base = parseFloat(cs.getPropertyValue('--base')) || 1080;
      const mw = mock.getBoundingClientRect().width, w = el.clientWidth;
      if (!(mw > 0 && w > 0)) return null;
      return { px: w * base / mw, rot: 26 };
    } catch (err) { return null; }
  }
  function largura(el, o) {
    if (o.w) return +o.w;
    if (o.peca !== false && el) {
      const p = +o.peca ? { px: +o.peca, rot: 26 } : emPeca(el);
      if (p) return Math.round(Math.max(280, p.px * FS / p.rot));
    }
    let cw = 0;
    try {
      const cs = getComputedStyle(el);
      cw = el.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
    } catch (err) { cw = 0; }
    if (!cw || cw <= 0) return 640;
    return Math.round(Math.max(280, Math.min(1200, cw)));
  }

  /* ---------- entrada discreta (respeita movimento reduzido) ---------- */
  const agora = () => (typeof performance !== 'undefined' && performance.now ? performance.now() : 0);
  const CURVA = 'cubic-bezier(.22,1,.36,1)';
  function semMovimento() {
    try {
      if (typeof navigator !== 'undefined' && navigator.webdriver) return true;
      return !window.matchMedia || window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('print').matches;
    } catch (err) { return true; }
  }
  let ioAnima = null;
  function animaQuando(el, o) {
    if (o.animar === false || api.animar === false || !temDoc || semMovimento()) return;
    if (typeof IntersectionObserver === 'undefined' || !Element.prototype.animate) return;
    if (el.__pvT != null) { const dt = agora() - el.__pvT; if (dt < 1000) anima(el, dt); return; }
    if (!ioAnima) ioAnima = new IntersectionObserver(es => es.forEach(en => {
      if (!en.isIntersecting) return;
      ioAnima.unobserve(en.target);
      en.target.__pvT = agora();
      anima(en.target, 0);
    }), { rootMargin: '0px 0px -6% 0px', threshold: 0 });
    if (!el.__pvObs) { el.__pvObs = 1; ioAnima.observe(el); }
  }
  function anima(el, desde) {
    const svg = el.firstElementChild;
    if (!svg) return;
    let i = 0;
    Array.prototype.forEach.call(svg.querySelectorAll('[data-a]'), n => {
      const a = n.getAttribute('data-a'), atraso = Math.min(i++, 10) * 45;
      const ops = { duration: 420, delay: atraso, easing: CURVA, fill: 'backwards' };
      let k = null;
      try {
        if (a === 'y' || a === 'x' || a === 'xc') {
          n.style.transformBox = 'fill-box';
          n.style.transformOrigin = a === 'y' ? '50% 100%' : (a === 'x' ? '0% 50%' : '50% 50%');
          k = n.animate(a === 'y' ? [{ transform: 'scaleY(0)' }, { transform: 'scaleY(1)' }] : [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], Object.assign({}, ops, { duration: 800 }));
        } else if (a === 'd') {
          const tam = n.getTotalLength ? n.getTotalLength() : 0;
          if (tam && !n.getAttribute('stroke-dasharray')) k = n.animate([{ strokeDasharray: tam + ' ' + tam, strokeDashoffset: tam }, { strokeDasharray: tam + ' ' + tam, strokeDashoffset: 0 }], Object.assign({}, ops, { duration: 800 }));
          else k = n.animate([{ opacity: 0 }, { opacity: 1 }], ops);
        } else if (a === 'r') {
          const v = n.getAttribute('data-v'), tot = n.getAttribute('data-c');
          k = n.animate([{ strokeDasharray: '0 ' + tot }, { strokeDasharray: v + ' ' + tot }], Object.assign({}, ops, { duration: 800 }));
        } else if (a === 'p') {
          n.style.transformBox = 'fill-box'; n.style.transformOrigin = '50% 100%';
          k = n.animate([{ transform: 'translateY(6px)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }], Object.assign({}, ops, { delay: atraso + 360 }));
        } else k = n.animate([{ opacity: 0 }, { opacity: 1 }], ops);
        if (k && desde) k.currentTime = desde;
      } catch (err) { /* sem suporte: fica o desenho final */ }
    });
    /* contador: anima só a EXIBIÇÃO; o valor final já está escrito no SVG */
    Array.prototype.forEach.call(svg.querySelectorAll('[data-contar]'), n => {
      const final = n.textContent, alvoV = +n.getAttribute('data-contar'), dec = +n.getAttribute('data-dec') || 0;
      const pre = n.getAttribute('data-pre') || '', suf = n.getAttribute('data-suf') || '';
      if (!isFinite(alvoV) || desde) return;
      const t0 = agora(), dur = 800;
      const passo = () => {
        const t = Math.min(1, (agora() - t0) / dur), e = 1 - Math.pow(1 - t, 3);
        n.textContent = t < 1 ? fmt(alvoV * e, { dec, prefixo: pre, sufixo: suf }) : final;
        if (t < 1) requestAnimationFrame(passo);
      };
      requestAnimationFrame(passo);
    });
  }
  function terminaAnimacoes() {
    registro.forEach(el => {
      try { const s = el.firstElementChild; if (s && s.getAnimations) s.getAnimations({ subtree: true }).forEach(a => a.finish()); } catch (err) { /* ok */ }
    });
  }

  /* ---------- cabeça (Pavio + título), rodapé (régua) e montagem ---------- */
  function registra(el, tipo, o) { el.__pviz = { tipo, opts: o }; registro.add(el); observa(el); }
  function cabeca(c, W, o) {
    let s = '', y = 0;
    if (o.rotulo_topo) {
      const ls = quebra(caixa(o.rotulo_topo), LAB, 600, 13, W - 28, 2, 3.4);
      ls.forEach((ln, k) => {
        y += 18;
        if (k === 0) s += R(0, y - 8, 16, 2, c.marca);
        s += T(26, y - 3, ln, LAB, 600, 13, c.apoio, 'start', 3.4);
      });
      y += 10;
    }
    if (o.titulo) {
      const tam = W < 420 ? 20 : (W < 720 ? 24 : 28);
      const ls = quebra(caixa(o.titulo), NUM, 700, tam, W, 3, -0.02 * tam);
      ls.forEach((ln, k) => {
        y += tam * 1.04;
        const ult = k === ls.length - 1 && o.destaqueTitulo;
        s += T(0, y - tam * 0.16, ln, NUM, 700, tam, ult ? (tam >= 24 ? c.grande : c.principalTxt) : c.titulo, 'start', -0.02 * tam);
      });
      y += 18;
    }
    return { s, h: y };
  }
  function textoRegua(o) {
    if (o.regua) return String(o.regua);
    const p = [];
    if (o.periodo) p.push(String(o.periodo));
    if (o.base != null && o.base !== '') p.push(/^base/i.test(String(o.base)) ? String(o.base) : 'base: ' + o.base);
    if (o.fonte) p.push(/^fonte/i.test(String(o.fonte)) ? String(o.fonte) : 'fonte: ' + o.fonte);
    if (!o.fonte) p.push(p.length ? 'fonte: [em validação]' : 'Dado ilustrativo · sem fonte');
    return p.join(' · ');
  }
  function origemDe(o) {
    const k = o.origem && (APELIDO_ORIGEM[String(o.origem).toLowerCase()] || String(o.origem).toLowerCase());
    return ORIGENS[k] ? k : null;
  }
  function rodape(c, W, y0, o) {
    if (o.rodape === false) return { s: '', h: 0 };
    const og = origemDe(o);
    let s = '', y = y0 + 26;
    const x0 = og ? 14 : 0, tw = W - x0;
    if (og) {
      const cor = c.org(og), nome = caixa(ORIGENS[og].nome);
      s += icone(ORIGENS[og].icone, x0, y - 12, 14, cor);
      s += T(x0 + 20, y, nome, LAB, 600, FP, cor, 'start', 1.6);
      y += 19;
    }
    const linhas = quebra(textoRegua(o), LAB, 400, FP, tw, 4);
    linhas.forEach((ln, k) => { s += T(x0, y + k * 18, ln, LAB, 400, FP, c.regua, 'start'); });
    y += (linhas.length - 1) * 18;
    if (o.aviso) {
      quebra(String(o.aviso), LAB, 400, FP, tw, 3).forEach(ln => { y += 18; s += T(x0, y, ln, LAB, 400, FP, c.regua, 'start'); });
    }
    if (og) {
      const or = ORIGENS[og], top = y0 + 12, bot = y + 5;
      s = L(1.5, top, 1.5, bot, c.org(og), or.w, (or.dash ? ` stroke-dasharray="${or.dash}"` : '') + (og === 'estimado' ? ' stroke-linecap="round"' : '')) + s;
    }
    return { s, h: y - y0 + 6 };
  }
  function descricao(o) {
    if (o.desc) return String(o.desc);
    const par = (l, v) => l.map((x, i) => x + ': ' + v[i]).join('; ');
    try {
      if (o.labels && o.values) return par(o.labels, rotulos(o.values.map(num), o.vlabels)) + '.';
      if (o.series && o.labels) return o.series.map(s => (s.nome || 'Série') + ', ' + par(o.labels, rotulos((s.valores || []).map(num)))).join('. ') + '.';
      if (o.segments) return o.segments.map(t => (t.label || '') + ': ' + (t.vlabel != null ? t.vlabel : auto(num(t.value)))).join('; ') + '.';
      if (o.linhas) return o.linhas.map(l => (l.rotulo || '') + ': ' + (l.segmentos || []).map(t => (t.rotulo || '') + ' ' + (t.vrotulo != null ? t.vrotulo : auto(num(t.valor)))).join(', ')).join('; ') + '.';
      if (o.stages) return o.stages.map(t => (t.label || '') + ': ' + (t.vlabel != null ? t.vlabel : auto(num(t.value)))).join('; ') + '.';
      if (o.steps) return o.steps.map((t, i) => (i + 1) + '. ' + (t.label || '')).join('; ') + '.';
      if (o.eventos || o.events) return (o.eventos || o.events).map(t => (t.data || '') + ': ' + (t.label || t.rotulo || '')).join('; ') + '.';
      if (o.itens) return o.itens.map(t => (t.rotulo || '') + ': ' + (t.vrotulo != null ? t.vrotulo : (t.valor != null ? auto(t.valor) : 'valor aprovado pendente'))).join('; ') + '.';
      if (o.antes && o.depois) return 'Antes: ' + (o.antes.vrotulo || auto(num(o.antes.valor))) + '. Depois: ' + (o.depois.vrotulo || auto(num(o.depois.valor))) + '.';
      if (o.value != null) return (o.vlabel != null ? o.vlabel : auto(num(o.value))) + (o.label ? ' ' + o.label : '') + '.';
    } catch (err) { /* sem descrição */ }
    return '';
  }
  function monta(el, W, H, miolo, o, c, tipo, semRodape, semCabeca) {
    if (!el.__pvId) el.__pvId = 'pv' + (++seq);
    const id = el.__pvId;
    const cab = semCabeca ? { s: '', h: 0 } : cabeca(c, W, o);
    const rp = semRodape ? { s: '', h: 0 } : rodape(c, W, cab.h + H, o);
    const nome = o.aria || o.titulo || 'Gráfico';
    const ds = descricao(o) + (semRodape ? '' : ' Régua: ' + textoRegua(o) + '.') + (o.aviso ? ' ' + o.aviso : '');
    const corpo = cab.h ? `<g transform="translate(0 ${r2(cab.h)})">${miolo}</g>` : miolo;
    el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="${id}" data-pviz-tipo="${tipo}"${c.neutroModo ? ' data-pviz-modo="neutro"' : ''} viewBox="0 0 ${r2(W)} ${r2(cab.h + H + rp.h)}" role="img" aria-labelledby="${id}-t ${id}-d" focusable="false" style="width:100%;height:auto;display:block;overflow:visible"><title id="${id}-t">${esc(nome)}</title><desc id="${id}-d">${esc(ds)}</desc>${cab.s}${corpo}${rp.s}</svg>`;
    animaQuando(el, o);
  }
  const hiDe = (o, n, padrao) => {
    const v = o.highlight == null ? padrao : +o.highlight;
    return v < 0 || v >= n ? -1 : v;
  };
  const inicia = (e, tipo, o) => { const el = alvo(e); if (!el) return null; registra(el, tipo, o); return el; };
  /* legenda: itens {nome, cor, estilo: 'bloco' | 'linha' | 'tracejado' | 'contorno'} */
  function legenda(c, W, itens) {
    let s = '', x = 0, y = 0;
    itens.forEach(it => {
      const w = mede(it.nome, LAB, 500, FS), iw = 26 + w;
      if (x > 0 && x + iw > W) { x = 0; y += 24; }
      if (it.estilo === 'linha') s += L(x, y + 10, x + 18, y + 10, it.cor, 2.5);
      else if (it.estilo === 'tracejado') s += L(x, y + 10, x + 18, y + 10, it.cor, 2, ' stroke-dasharray="4 3"');
      else if (it.estilo === 'contorno') s += `<rect x="${r2(x + 0.75)}" y="${r2(y + 3.75)}" width="10.5" height="10.5" fill="none" stroke="${it.cor}" stroke-width="1.5"/>`;
      else s += R(x, y + 3, 12, 12, it.cor);
      s += T(x + (it.estilo === 'linha' || it.estilo === 'tracejado' ? 24 : 18), y + 14, it.nome, LAB, 500, FS, c.texto, 'start');
      x += iw + 22;
    });
    return { s, h: y + 32 };
  }
  /* papéis das séries: principal, meta (anterior), contexto, quarta */
  const PAPEIS = ['principal', 'meta', 'contexto', 'quarta'];
  function series(o) {
    let ss = [];
    if (Array.isArray(o.series) && o.series.length && typeof o.series[0] === 'object') {
      ss = o.series.slice(0, 4).map((s, i) => ({ nome: s.nome || s.name || 'Série ' + (i + 1), valores: (s.valores || s.values || []).map(num), papel: s.papel || PAPEIS[i] }));
    } else {
      const nomes = Array.isArray(o.series) ? o.series : [];
      [o.values, o.valores2 || o.values2, o.valores3, o.valores4].forEach((v, i) => {
        if (v && v.length) ss.push({ nome: nomes[i] || (i === 0 ? 'Realizado' : 'Série ' + (i + 1)), valores: v.map(num), papel: PAPEIS[i] });
      });
    }
    return ss;
  }
  const corPapel = (c, p) => (p === 'meta' ? c.meta : (p === 'contexto' ? c.contexto : (p === 'quarta' ? c.quarta : c.principal)));
  /* a meta fica numa margem própria à direita: o rótulo nunca cobre barra, ponto ou valor */
  const larguraMeta = (rot, val) => Math.max(mede(caixa(rot), LAB, 600, FP, 1.6), mede(val, NUM, 500, 16)) + 14;
  function linhaMeta(c, plotW, W, y, rot, val) {
    return L(0, y, plotW + 6, y, c.meta, 1.5, ' stroke-dasharray="6 4" data-a="f"') +
      T(W, y - 4, caixa(rot), LAB, 600, FP, c.meta, 'end', 1.6, HALO(c) + ' data-a="f"') +
      T(W, y + 15, val, NUM, 500, 16, c.meta, 'end', -0.3, HALO(c) + ' data-a="f"');
  }

  /* =========================================================== BARRAS */
  function bars(e, o) {
    o = o || {};
    const el = inicia(e, 'bars', o); if (!el) return;
    const c = cores(el, o), W = largura(el, o), H0 = o.h || 280;
    const ss = series(o), labs = (o.labels || []).map(l => String(l == null ? '' : l));
    const dupla = ss.length > 1;
    const vals = ss.length ? ss[0].valores : [];
    const n = Math.max(1, labs.length || vals.length);
    const vls = rotulos(vals, o.vlabels), hi = dupla ? -1 : hiDe(o, n, n - 1);
    const uTxt = o.unit ? caixa(o.unit) : '';
    const meta = num(o.meta);
    const metaRot = o.metaRotulo || 'Meta', metaVal = meta == null ? '' : (o.vmeta != null ? String(o.vmeta) : auto(meta));
    const PW = meta != null ? W - larguraMeta(metaRot, metaVal) : W;
    const cw = PW / n;
    let fs = cw < 56 ? 13 : FS;
    if (fs === FS && maiorPalavra(labs, LAB, 500, FS) > cw - 8) fs = 13;
    if (!dupla && o.deitar !== false && maiorPalavra(labs, LAB, 600, 13) > cw - 4) { hbars(el, o, true); return; }
    const lg = dupla ? legenda(c, W, ss.map(s => ({ nome: s.nome, cor: corPapel(c, s.papel), estilo: s.papel === 'meta' ? 'contorno' : 'bloco' }))) : { s: '', h: 0 };
    const H = H0 + lg.h, lh = fs + 4;
    const WW = W;
    const linhas = labs.map((l, i) => quebra(l, LAB, i === hi ? 600 : 500, fs, cw - 6, 2));
    const nL = Math.max(1, ...linhas.map(l => l.length));
    const pb = 26 + (nL - 1) * lh + 8 + (uTxt ? 20 : 0);
    const pt = lg.h + (hi >= 0 ? 70 : 30) + (meta != null ? 8 : 0);
    const base = H - pb, ph = base - pt;
    const todos = [].concat(...ss.map(s => s.valores.filter(v => v != null)));
    const max = Math.max(0, meta || 0, ...todos) || 1;
    const k = ss.length;
    const bw = dupla ? Math.min(24, (cw * 0.72) / k - 3) : Math.min(56, cw * 0.56);
    const mostraV = !dupla && Math.max(0, ...vls.filter((t, i) => i !== hi).map(t => mede(t, LAB, 500, FS))) <= cw - 4;
    const cabe = (w, cx) => Math.max(w / 2 + 1, Math.min(PW - w / 2 - 1, cx));
    let s = lg.s, rot = '';
    for (let i = 0; i < n; i++) {
      const cx = i * cw + cw / 2, ehHi = i === hi;
      ss.forEach((sr, j) => {
        const v = sr.valores[i];
        const x = dupla ? cx - (k * (bw + 3) - 3) / 2 + j * (bw + 3) : cx - bw / 2;
        if (v == null) {
          if (mede('sem dado', LAB, 500, FP) <= cw - 4) s += T(x + bw / 2, base - 8, 'sem dado', LAB, 500, FP, c.regua, 'middle');
          else s += T(x + bw / 2, base - 24, 'sem', LAB, 500, FP, c.regua, 'middle') + T(x + bw / 2, base - 8, 'dado', LAB, 500, FP, c.regua, 'middle');
          return;
        }
        const bh = Math.max(2, (Math.max(0, v) / max) * ph);
        if (sr.papel === 'meta') s += `<rect x="${r2(x + 0.75)}" y="${r2(base - bh + 0.75)}" width="${r2(bw - 1.5)}" height="${r2(bh - 0.75)}" fill="none" stroke="${c.meta}" stroke-width="1.5" data-a="y"/>`;
        else s += R(x, base - bh, bw, bh, dupla ? corPapel(c, sr.papel) : (ehHi ? c.principal : c.neutro), ' data-a="y"');
      });
      const v = vals[i];
      if (!dupla && v != null) {
        const topo = base - Math.max(2, (Math.max(0, v) / max) * ph);
        if (ehHi) {
          rot += seta(cx, topo - 15, 14, c.marca, 0, ' data-a="p"');
          rot += T(cabe(mede(vls[i], NUM, 500, 30), cx), topo - 31, vls[i], NUM, 500, 30, c.titulo, 'middle', -0.9, HALO(c) + ' data-a="p"');
        } else if (mostraV) rot += T(cabe(mede(vls[i], LAB, 500, FS), cx), topo - 9, vls[i], LAB, 500, FS, c.apoio, 'middle', 0, HALO(c));
      }
      (linhas[i] || []).forEach((ln, kk) => {
        const tw = mede(ln, LAB, ehHi ? 600 : 500, fs);
        s += T(cabe(tw, cx), base + 26 + kk * lh, ln, LAB, ehHi ? 600 : 500, fs, ehHi ? c.titulo : c.apoio, 'middle');
      });
    }
    if (meta != null) s += linhaMeta(c, PW, WW, base - (meta / max) * ph, metaRot, metaVal);
    s += rot;
    s += BASE(0, PW, base, c.base);
    if (uTxt) s += T(PW, H - 4, uTxt, LAB, 600, FP, c.apoio, 'end', 2.2);
    monta(el, W, H, s, o, c, 'barras');
  }

  /* =========================================================== BARRAS HORIZONTAIS (ranking) */
  function hbars(e, o, interno) {
    o = o || {};
    const el = interno ? alvo(e) : inicia(e, 'hbars', o); if (!el) return;
    const c = cores(el, o), W = largura(el, o);
    const vals = (o.values || []).map(num), labs = (o.labels || []).map(l => String(l == null ? '' : l));
    const vls = rotulos(vals, o.vlabels), hi = hiDe(o, vals.length, 0);
    const posicao = o.posicao !== false;
    const barH = 14, max = Math.max(0, ...vals.filter(v => v != null)) || 1, gapV = 12;
    const tamHi = t => Math.max(22, Math.min(28, 28 * (W * 0.4) / Math.max(1, mede(t, NUM, 500, 28))));
    const valW = Math.max(0, ...vls.map((t, i) => (i === hi ? mede(t, NUM, 500, tamHi(t)) + 22 : mede(t, LAB, 500, FS)))) + 4;
    const posW = posicao ? mede('00', NUM, 600, 15) + 12 : 0;
    const maxLab = Math.max(0, ...labs.map((l, i) => mede(l, LAB, i === hi ? 600 : 500, FS)));
    const labw = o.labw || Math.round(Math.min(W * 0.4, maxLab + 18));
    const empilha = o.empilhar === true || (o.empilhar !== false && (W - posW - labw - valW - gapV) < W * 0.32);
    const barra = (x0, cy, bw, i) => R(x0, cy - barH / 2, bw, barH, i === hi ? c.principal : c.neutro, ' data-a="x"');
    const valor = (vx, cy, i) => {
      if (i !== hi) return T(vx, cy + 5, vls[i], LAB, 500, FS, c.apoio, 'start');
      const t = r2(tamHi(vls[i]));
      return seta(vx + 7, cy, 13, c.marca, 90, ' data-a="p"') + T(vx + 22, cy + t * 0.34, vls[i], NUM, 500, t, c.titulo, 'start', -0.8, ' data-a="p"');
    };
    const pos = (x, y, i) => (posicao ? T(x, y, dois(i + 1), NUM, 600, 15, i === hi ? c.marcaTxt : c.apoio, 'start', -0.5) : '');
    let s = '', H;
    if (empilha) {
      const x0 = posW + 8, barMax = Math.max(40, W - x0 - valW - gapV);
      let y = 0;
      vals.forEach((v, i) => {
        const ehHi = i === hi, peso = ehHi ? 600 : 500;
        const ls = quebra(labs[i], LAB, peso, FS, W - x0, 2);
        s += pos(0, y + 15, i);
        ls.forEach((ln, kk) => { s += T(x0, y + 14 + kk * 19, ln, LAB, peso, FS, ehHi ? c.titulo : c.apoio, 'start'); });
        const cy = y + 14 + (ls.length - 1) * 19 + 8 + (ehHi ? 16 : 11);
        if (v == null) s += T(x0, cy + 5, 'sem dado', LAB, 500, FS, c.regua, 'start');
        else { const bw = Math.max(2, (Math.max(0, v) / max) * barMax); s += barra(x0, cy, bw, i) + valor(x0 + bw + gapV, cy, i); }
        y = cy + (ehHi ? 16 : 11) + 14;
      });
      H = Math.max(1, y - 10);
      s += L(x0 - 4, 0, x0 - 4, H, c.base, 2);
    } else {
      const rowH = 44, x0 = posW + labw + 8, barMax = Math.max(40, W - x0 - valW - gapV);
      H = Math.max(1, vals.length) * rowH;
      vals.forEach((v, i) => {
        const cy = i * rowH + rowH / 2, ehHi = i === hi;
        s += pos(0, cy + 5.5, i);
        const peso = ehHi ? 600 : 500, corT = ehHi ? c.titulo : c.apoio, disp = labw - 10;
        let ls = [labs[i]], fs = FS;
        if (mede(ls[0], LAB, peso, FS) > disp) { fs = 13; ls = quebra(ls[0], LAB, peso, 13, disp, 2); }
        if (ls.length === 1) s += T(posW + labw - 4, cy + fs * 0.36, ls[0], LAB, peso, fs, corT, 'end');
        else ls.forEach((ln, kk) => { s += T(posW + labw - 4, cy - 7 + kk * 15 + fs * 0.36, ln, LAB, peso, fs, corT, 'end'); });
        if (v == null) s += T(x0 + 4, cy + 5, 'sem dado', LAB, 500, FS, c.regua, 'start');
        else { const bw = Math.max(2, (Math.max(0, v) / max) * barMax); s += barra(x0 + 4, cy, bw, i) + valor(x0 + 4 + bw + gapV, cy, i); }
      });
      s += L(x0 + 1, 0, x0 + 1, H, c.base, 2);
    }
    monta(el, W, H, s, o, c, 'barras-h');
  }

  /* posição do número de destaque sem encostar na linha nem nos outros pontos */
  function lugarLivre(x, y, w, W, base, pts, ignora) {
    const colide = (x0, x1, y0, y1) => {
      if (x0 < 0 || x1 > W || y0 < 0 || y1 > base - 2) return true;
      for (let k = 0; k < pts.length; k++) {
        const serie = pts[k];
        for (let i = 0; i < serie.length - 1; i++) {
          const a = serie[i], b = serie[i + 1];
          if (!a || !b) continue;
          const lo = Math.max(x0, a[0]), hi = Math.min(x1, b[0]);
          if (lo > hi) continue;
          const dx = (b[0] - a[0]) || 1;
          const ya = a[1] + (b[1] - a[1]) * (lo - a[0]) / dx, yb = a[1] + (b[1] - a[1]) * (hi - a[0]) / dx;
          if (Math.max(ya, yb) >= y0 - 3 && Math.min(ya, yb) <= y1 + 3) return true;
        }
        for (let i = 0; i < serie.length; i++) {
          if (k === 0 && i === ignora) continue;
          const p = serie[i];
          if (p && p[0] >= x0 - 6 && p[0] <= x1 + 6 && p[1] >= y0 - 6 && p[1] <= y1 + 6) return true;
        }
      }
      return false;
    };
    const cx = Math.max(w / 2 + 2, Math.min(W - w / 2 - 2, x));
    const op = [
      { x: cx, y: y - 22, a: 'middle', b: [cx - w / 2, cx + w / 2, y - 46, y - 18] },
      { x: x - 16, y: y - 12, a: 'end', b: [x - 16 - w, x - 16, y - 36, y - 10] },
      { x: x + 16, y: y - 12, a: 'start', b: [x + 16, x + 16 + w, y - 36, y - 10] },
      { x: cx, y: y + 42, a: 'middle', b: [cx - w / 2, cx + w / 2, y + 16, y + 44], baixo: true },
      { x: x - 16, y: y + 32, a: 'end', b: [x - 16 - w, x - 16, y + 8, y + 34], baixo: true },
      { x: x + 16, y: y + 32, a: 'start', b: [x + 16, x + 16 + w, y + 8, y + 34], baixo: true }
    ];
    for (let i = 0; i < op.length; i++) { const p = op[i]; if (!colide(p.b[0], p.b[1], p.b[2], p.b[3])) return p; }
    return op[0];
  }
  const poli = pts => pts.map(p => r2(p[0]) + ',' + r2(p[1])).join(' ');
  /* trechos contínuos (o null quebra a linha: ausência não vira zero) */
  function trechos(pts) {
    const out = []; let cur = [];
    pts.forEach(p => { if (p) cur.push(p); else { if (cur.length) out.push(cur); cur = []; } });
    if (cur.length) out.push(cur);
    return out;
  }

  /* =========================================================== LINHA (com área, meta, projeção e ponto de ignição) */
  function line(e, o) {
    o = o || {};
    const el = inicia(e, 'line', o); if (!el) return;
    const c = cores(el, o), W = largura(el, o);
    const ss = series(o), labs = (o.labels || []).map(l => String(l == null ? '' : l));
    const vals = ss.length ? ss[0].valores : [];
    const n = Math.max(labs.length, vals.length), hi = hiDe(o, n, n - 1);
    const vls = rotulos(vals, o.vlabels);
    const area = !!o.area, todos = !!o.todos;
    const meta = num(o.meta), proj = o.projecao == null ? -1 : +o.projecao;
    const ign = o.ignicao != null ? (typeof o.ignicao === 'object' ? o.ignicao : { indice: +o.ignicao }) : null;
    const itens = ss.map((s, i) => ({ nome: s.nome, cor: corPapel(c, s.papel), estilo: s.papel === 'meta' ? 'tracejado' : 'linha', i }));
    if (proj > 0) itens.push({ nome: 'Projeção', cor: c.principal, estilo: 'tracejado' });
    const lg = itens.length > 1 ? legenda(c, W, itens) : { s: '', h: 0 };
    const H = (o.h || 260) + lg.h;
    if (!n) { monta(el, W, H, '', o, c, 'linha'); return; }
    const meia = i => Math.max(mede(labs[i] || '', LAB, i === hi ? 600 : 500, FS), i === hi ? mede(vls[i], NUM, 500, 28) : mede(vls[i] || '', LAB, 500, FS)) / 2;
    const metaRot = o.metaRotulo || 'Meta', metaVal = meta == null ? '' : (o.vmeta != null ? String(o.vmeta) : auto(meta));
    const mw = meta != null ? larguraMeta(metaRot, metaVal) : 0;
    const pl = Math.max(16, meia(0) + 4), pr = Math.max(16, meia(n - 1) + 4) + mw;
    const pt = lg.h + 58 + (ign ? 26 : 0), pb = 38, base = H - pb;
    const tv = [].concat(...ss.map(s => s.valores.filter(v => v != null))).concat(meta != null ? [meta] : []);
    const max = Math.max(...tv), min = Math.min(...tv);
    const lo = area ? Math.min(0, min) : min - (max - min || 1) * 0.3;
    const hiV = max === lo ? lo + 1 : max;
    const px = i => (n === 1 ? W / 2 : pl + (i * (W - pl - pr)) / (n - 1));
    const py = v => pt + (1 - (v - lo) / (hiV - lo)) * (base - pt - 10);
    const P0 = vals.map((v, i) => (v == null ? null : [px(i), py(v)]));
    const real = proj > 0 ? P0.slice(0, proj) : P0;
    let s = lg.s;
    if (area) trechos(real).forEach(tr => {
      s += `<polygon points="${r2(tr[0][0])},${r2(base)} ${poli(tr)} ${r2(tr[tr.length - 1][0])},${r2(base)}" fill="${c.principal}" fill-opacity="${c.escuro ? 0.16 : 0.1}" data-a="f"/>`;
    });
    if (ign && ign.indice >= 0 && ign.indice < n) {
      const x = px(ign.indice), cor = c.marca;
      s += L(x, pt - 18, x, base, cor, 1.5, ' stroke-dasharray="2 4" data-a="f"');
      s += chama(x, pt - 30, 14, cor, ' data-a="p"');
    }
    s += BASE(0, W - mw, base, c.base);
    if (meta != null) s += linhaMeta(c, W - mw, W, py(meta), metaRot, metaVal);
    const todasPts = [P0];
    ss.slice(1).forEach(sr => {
      const p2 = sr.valores.slice(0, n).map((v, i) => (v == null ? null : [px(i), py(v)]));
      todasPts.push(p2);
      const cor = corPapel(c, sr.papel), tr = sr.papel === 'meta';
      trechos(p2).forEach(t => { s += `<polyline points="${poli(t)}" fill="none" stroke="${cor}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"${tr ? ' stroke-dasharray="5 4"' : ''} data-a="d"/>`; });
      if (!tr) p2.forEach(p => { if (p) s += `<circle cx="${r2(p[0])}" cy="${r2(p[1])}" r="3" fill="${cor}" data-a="f"/>`; });
    });
    const hiW = hi >= 0 && vals[hi] != null ? mede(vls[hi], NUM, 500, 28) : 0;
    const hiPos = hiW ? lugarLivre(px(hi), py(vals[hi]), hiW, W, base, todasPts, hi) : null;
    trechos(real).forEach(t => { s += `<polyline points="${poli(t)}" fill="none" stroke="${c.principal}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" data-a="d"/>`; });
    if (proj > 0) {
      const pj = P0.slice(Math.max(0, proj - 1));
      trechos(pj).forEach(t => { s += `<polyline points="${poli(t)}" fill="none" stroke="${c.principal}" stroke-width="2.5" stroke-dasharray="6 5" stroke-linejoin="round" stroke-linecap="round" data-a="d"/>`; });
    }
    const mostraV = i => {
      if (vals[i] == null) return false;
      if (i === hi) return true;
      if (!todos && i !== 0 && i !== n - 1) return false;
      if (hi < 0 || !hiPos) return true;
      const d = Math.abs(px(i) - px(hi)), wv = mede(vls[i], LAB, 500, FS);
      return d > (wv + hiW) / 2 + 8 || Math.abs(py(vals[i]) - py(vals[hi])) > 34;
    };
    const larg = Math.max(0, ...labs.map((l, i) => mede(l, LAB, i === hi ? 600 : 500, FS)));
    const passo = n > 1 ? (W - pl - pr) / (n - 1) : W;
    const kk = Math.max(1, Math.ceil((larg + 10) / passo));
    const fixos = [n - 1]; if (hi >= 0) fixos.push(hi);
    const mostraL = i => fixos.indexOf(i) >= 0 || (i % kk === 0 && fixos.every(f => Math.abs(px(i) - px(f)) >= larg + 8));
    vals.forEach((v, i) => {
      if (i === hi || v == null) return;
      const x = px(i), y = py(v), pj = proj > 0 && i >= proj;
      s += `<circle cx="${r2(x)}" cy="${r2(y)}" r="4" fill="${c.fundo}" stroke="${c.principal}" stroke-width="${pj ? 1.5 : 2}"${pj ? ' stroke-dasharray="2 2"' : ''} data-a="f"/>`;
      if (mostraV(i)) s += T(x, y - 12, vls[i], LAB, 500, FS, c.apoio, 'middle', 0, ' data-a="f"');
    });
    if (hiPos) {
      const x = px(hi), y = py(vals[hi]);
      if (!hiPos.baixo) s += L(x, y + 8, x, base, c.principal, 1, ' stroke-dasharray="2 3" stroke-opacity=".7" data-a="f"');
      s += `<circle cx="${r2(x)}" cy="${r2(y)}" r="7" fill="${c.principal}" stroke="${c.fundo}" stroke-width="2.5" data-a="p"/>`;
      s += T(hiPos.x, hiPos.y, vls[hi], NUM, 500, 28, c.titulo, hiPos.a, -0.8, ' data-a="p"');
    }
    /* rótulo do ponto de ignição: à direita da chama; à esquerda se bater na borda ou no rótulo do destaque */
    if (ign && ign.indice >= 0 && ign.indice < n && ign.rotulo) {
      const x = px(ign.indice), t = caixa(ign.rotulo), tw = mede(t, LAB, 600, FP, 1.4), yb = pt - 25;
      const caixaHi = hiPos ? hiPos.b : null;
      const bate = (x0, x1) => x0 < 2 || x1 > W - 2 ||
        !!(caixaHi && x1 > caixaHi[0] - 8 && x0 < caixaHi[1] + 8 && caixaHi[2] < yb + 4 && caixaHi[3] > yb - FP - 4);
      let ancora = 'start', xt = x + 12;
      if (bate(x + 12, x + 12 + tw)) {
        if (!bate(x - 12 - tw, x - 12)) { ancora = 'end'; xt = x - 12; }
        else if (x + 12 + tw > W) { ancora = 'end'; xt = x - 12; }
      }
      s += T(xt, yb, t, LAB, 600, FP, c.marcaTxt, ancora, 1.4, HALO(c) + ' data-a="f"');
    }
    labs.forEach((l, i) => {
      if (!mostraL(i)) return;
      s += T(px(i), base + 26, l, LAB, i === hi ? 600 : 500, FS, i === hi ? c.titulo : c.apoio, 'middle');
    });
    monta(el, W, H, s, o, c, 'linha');
  }

  /* =========================================================== COMPOSIÇÃO (100% simples ou empilhada por linha) */
  function share(e, o) {
    o = o || {};
    const el = inicia(e, 'share', o); if (!el) return;
    const c = cores(el, o), W = largura(el, o);
    const sombras = c.escuro ? ['#8C8686', '#5E5858', '#BDB8B8', '#3A3434'] : ['#8C8686', '#5E5858', '#BDB8B8', '#3A3434'];
    if (o.linhas && o.linhas.length) {
      /* empilhada: uma barra 100% por linha (mês, unidade, canal) */
      const linhas = o.linhas, nomes = o.nomes || (linhas[0].segmentos || []).map(t => t.rotulo || t.label || '');
      const hi = hiDe(o, nomes.length, 0);
      let k = 0;
      const cor = nomes.map((t, i) => (i === hi ? c.principal : sombras[(k++) % 4]));
      const lg = legenda(c, W, nomes.map((t, i) => ({ nome: t, cor: cor[i], estilo: 'bloco' })));
      const labw = Math.min(W * 0.28, Math.max(0, ...linhas.map(l => mede(l.rotulo || '', LAB, 600, FS))) + 14);
      const bx = labw, bwT = W - labw, rowH = 46;
      let s = lg.s, y = lg.h + 6;
      linhas.forEach(l => {
        const sg = l.segmentos || [], tot = sg.reduce((a, t) => a + (num(t.valor != null ? t.valor : t.value) || 0), 0) || 1;
        s += T(labw - 12, y + 18, l.rotulo || '', LAB, 600, FS, c.texto, 'end');
        let x = bx;
        sg.forEach((t, i) => {
          const v = num(t.valor != null ? t.valor : t.value) || 0, w = (v / tot) * bwT, gap = i < sg.length - 1 ? 2 : 0;
          const fc = cor[i % cor.length];
          s += R(x, y + 2, w - gap, 26, fc, ' data-a="x"');
          const p = Math.round((v / tot) * 100) + '%';
          const cb = contraste(BRANCO, fc), cn = contraste(NOITE, fc);
          const tc = cb >= cn ? BRANCO : NOITE, folga = Math.max(cb, cn);
          /* texto sobre a cor: 13 px quando o contraste sobra; 16 px em 700 quando passa no limite (Ignição) */
          const tt = folga >= 7 ? 13 : 16, pp = folga >= 7 ? 600 : 700;
          if (folga >= 4.5 && w - gap > mede(p, LAB, pp, tt) + 10) s += T(x + 6, y + 15 + tt * 0.36, p, LAB, pp, tt, tc, 'start');
          x += w;
        });
        y += rowH;
      });
      monta(el, W, y - 10, s, o, c, 'composicao');
      return;
    }
    const sg = o.segments || [], hi = hiDe(o, sg.length, 0);
    const barH = 20, sep = 2;
    const tot = sg.reduce((a, t) => a + (num(t.value) || 0), 0) || 1;
    let k = 0;
    const cor = sg.map((t, i) => (i === hi ? c.principal : sombras[(k++) % 4]));
    const soma100 = o.percentual === true || (o.percentual !== false && Math.abs(tot - 100) < 0.6);
    const vls = sg.map(t => (t.vlabel != null ? String(t.vlabel) : auto(num(t.value)) + (soma100 ? '%' : '')));
    let s = '', x = 0, topo = 0;
    if (hi >= 0) {
      let x0 = 0;
      for (let i = 0; i < hi; i++) x0 += ((num(sg[i].value) || 0) / tot) * W;
      const wSeg = ((num(sg[hi].value) || 0) / tot) * W;
      const nw = mede(vls[hi], NUM, 500, 36), lw = mede(sg[hi].label || '', LAB, 600, FS);
      const bloco = nw + 10 + lw, bx = Math.max(0, Math.min(W - bloco, x0));
      s += T(bx, 34, vls[hi], NUM, 500, 36, c.titulo, 'start', -1, ' data-a="p"');
      s += T(bx + nw + 10, 33, sg[hi].label || '', LAB, 600, FS, c.titulo, 'start', 0, ' data-a="p"');
      s += seta(Math.max(8, Math.min(W - 8, x0 + wSeg / 2)), 50, 12, c.marca, 0, ' data-a="p"');
      topo = 64;
    }
    sg.forEach((t, i) => {
      const w = ((num(t.value) || 0) / tot) * W, gap = i < sg.length - 1 ? sep : 0;
      s += R(x, topo, w - gap, barH, cor[i], ' data-a="x"');
      x += w;
    });
    s += BASE(0, W, topo + barH + 6, c.base);
    const linhaH = 28, y0 = topo + barH + 44;
    let lx = 0, ly = 0;
    sg.forEach((t, i) => {
      const lw = mede(t.label || '', LAB, 500, FS), vw = mede(vls[i], LAB, 700, FS), iw = 12 + 8 + lw + 6 + vw;
      if (lx > 0 && lx + iw > W) { lx = 0; ly++; }
      const yy = y0 + ly * linhaH, ehHi = i === hi;
      s += R(lx, yy - 11, 12, 12, cor[i]);
      s += T(lx + 20, yy, t.label || '', LAB, 500, FS, ehHi ? c.titulo : c.apoio, 'start');
      s += T(lx + 20 + lw + 6, yy, vls[i], LAB, 700, FS, ehHi ? c.titulo : c.texto, 'start');
      lx += iw + 24;
    });
    monta(el, W, y0 + ly * linhaH + 6, s, o, c, 'composicao');
  }

  /* =========================================================== ANEL */
  function ring(e, o) {
    o = o || {};
    const el = inicia(e, 'ring', o); if (!el) return;
    const c = cores(el, o), W0 = largura(el, o), S = Math.min(o.s || 220, W0), W = Math.max(S, o.w || W0), H = S;
    const cx = W / 2, cy = S / 2, sw = Math.max(8, S * 0.05), r = S / 2 - sw / 2 - 2, Cc = 2 * Math.PI * r;
    const v = num(o.value);
    const frac = Math.min(1, Math.max(0, (v || 0) / 100));
    const vl = o.vlabel != null ? String(o.vlabel) : (v == null ? 'sem dado' : auto(v) + '%');
    let s = `<circle cx="${r2(cx)}" cy="${r2(cy)}" r="${r2(r)}" fill="none" stroke="${c.trilho}" stroke-width="${r2(sw)}"/>`;
    if (frac > 0) s += `<circle cx="${r2(cx)}" cy="${r2(cy)}" r="${r2(r)}" transform="rotate(-90 ${r2(cx)} ${r2(cy)})" fill="none" stroke="${c.principal}" stroke-width="${r2(sw)}" stroke-dasharray="${r2(Cc * frac)} ${r2(Cc)}" data-a="r" data-v="${r2(Cc * frac)}" data-c="${r2(Cc)}"/>`;
    const meta = num(o.meta);
    if (meta != null) {
      const a = -Math.PI / 2 + Math.min(1, meta / 100) * 2 * Math.PI, r1 = r - sw / 2 - 5, rr = r + sw / 2 + 5;
      s += L(cx + r1 * Math.cos(a), cy + r1 * Math.sin(a), cx + rr * Math.cos(a), cy + rr * Math.sin(a), c.meta, 2);
    }
    let tam = S * 0.25;
    const interno = (r - sw / 2) * 2 * 0.8;
    const nw = mede(vl, NUM, 500, tam);
    if (nw > interno) tam = tam * interno / nw;
    const lab = o.label ? caixa(o.label) : '';
    const ls = lab ? quebra(lab, LAB, 600, 13, interno * 0.86, 2, 2) : [];
    const blocoH = tam * 0.72 + (ls.length ? 12 + ls.length * 16 : 0);
    const topo = cy - blocoH / 2;
    s += T(cx, topo + tam * 0.72, vl, NUM, 500, r2(tam), c.titulo, 'middle', -0.03 * tam);
    ls.forEach((ln, k) => { s += T(cx + 1, topo + tam * 0.72 + 25 + k * 16, ln, LAB, 600, 13, c.apoio, 'middle', 2); });
    monta(el, W, H, s, o, c, 'anel');
  }

  /* =========================================================== FUNIL DE PEDIDOS (atenção, clique, pedido, recompra) */
  function funnel(e, o) {
    o = o || {};
    const el = inicia(e, 'funnel', o); if (!el) return;
    const c = cores(el, o), W = largura(el, o);
    let st = o.stages;
    if (!st || !st.length) {
      const nomes = ['Atenção', 'Clique', 'Pedido', 'Recompra'];
      st = (o.values || [null, null, null, null]).map((v, i) => ({ label: (o.labels || nomes)[i] || '', value: v }));
    }
    const n = st.length, hi = hiDe(o, n, n - 1), log = o.escala === 'log';
    const vals = st.map(t => num(t.value));
    const vls = st.map((t, i) => (t.vlabel != null ? String(t.vlabel) : auto(vals[i])));
    const max = Math.max(0, ...vals.filter(v => v != null)) || 1;
    const esc1 = v => (v == null ? 0 : (log ? Math.log10(Math.max(1, v)) / Math.log10(Math.max(10, max)) : Math.max(0, v) / max));
    const taxa = i => (vals[i] && vals[i + 1] != null ? pct((vals[i + 1] / vals[i]) * 100, (vals[i + 1] / vals[i]) * 100 < 10 ? 1 : 0) : 'sem dado');
    const horizontal = W >= 560 && n <= 6;
    let s = '', H;
    if (horizontal) {
      const gap = Math.min(120, W * 0.14), colW = (W - gap * (n - 1)) / n, ph = o.h || 200;
      const topoTxt = 78, base = topoTxt + ph;
      const tops = [];
      st.forEach((t, i) => {
        const x = i * (colW + gap), ehHi = i === hi;
        const bh = vals[i] == null ? 0 : Math.max(3, esc1(vals[i]) * ph);
        tops.push([x, base - bh, x + colW]);
        s += T(x, 16, caixa(t.label), LAB, 600, FP, ehHi ? c.marcaTxt : c.apoio, 'start', 1.8);
        const tv = ehHi ? 34 : 26;
        s += T(x, 54, vls[i], NUM, 500, Math.min(tv, tv * colW / Math.max(1, mede(vls[i], NUM, 500, tv))), ehHi ? c.titulo : c.texto, 'start', -0.8, ehHi ? ' data-a="p"' : '');
        if (vals[i] == null) s += T(x, base - 8, 'sem dado', LAB, 500, FP, c.regua, 'start');
        else s += R(x, base - bh, colW, bh, ehHi ? c.principal : c.neutro, ' data-a="y"');
      });
      /* a passagem entre etapas: faixa clara e a taxa com a Seta A para a direita */
      for (let i = 0; i < n - 1; i++) {
        const a = tops[i], b = tops[i + 1];
        s += `<polygon points="${r2(a[2])},${r2(a[1])} ${r2(b[0])},${r2(b[1])} ${r2(b[0])},${r2(base)} ${r2(a[2])},${r2(base)}" fill="${c.trilho}" data-a="f"/>`;
        /* a taxa fica acima da faixa, no vão entre as colunas (nada a cobre) */
        const mx = a[2] + gap / 2, ty = a[1] - 12;
        const tx = taxa(i);
        s += seta(mx, ty - 44, 12, c.apoio, 90);
        s += T(mx, ty - 18, tx, NUM, 500, 18, c.titulo, 'middle', -0.4);
        s += T(mx, ty - 2, 'seguem', LAB, 500, FP, c.apoio, 'middle');
      }
      s += BASE(0, W, base, c.base);
      H = base + 8;
    } else {
      let y = 0;
      const barMax = W;
      st.forEach((t, i) => {
        const ehHi = i === hi;
        const vw = ehHi ? mede(vls[i], NUM, 500, 28) : mede(vls[i], NUM, 500, 20);
        const lab = quebra(caixa(t.label), LAB, 600, FP, W - vw - 16, 2, 1.8);
        lab.forEach((ln, k) => { s += T(0, y + 16 + k * 17, ln, LAB, 600, FP, ehHi ? c.marcaTxt : c.apoio, 'start', 1.8); });
        s += T(W, y + (ehHi ? 22 : 19), vls[i], NUM, 500, ehHi ? 28 : 20, ehHi ? c.titulo : c.texto, 'end', -0.6);
        const by = y + 30 + (lab.length - 1) * 17;
        if (vals[i] == null) s += T(0, by + 12, 'sem dado', LAB, 500, FP, c.regua, 'start');
        else s += R(0, by, Math.max(3, esc1(vals[i]) * barMax), 14, ehHi ? c.principal : c.neutro, ' data-a="x"');
        y = by + 14;
        if (i < n - 1) {
          s += seta(6, y + 21, 10, c.apoio, 90);
          s += T(18, y + 25, taxa(i) + ' seguem para ' + String(st[i + 1].label || '').toLocaleLowerCase('pt-BR'), LAB, 500, FP, c.apoio, 'start');
          y += 40;
        }
      });
      H = y + 4;
    }
    if (log && !o.aviso) o = Object.assign({}, o, { aviso: 'Alturas em escala logarítmica (cada degrau multiplica por 10).' });
    monta(el, W, Math.max(1, H), s, o, c, 'funil');
  }

  /* =========================================================== FLUXO (etapas com Contagem e Anel de Ignição) */
  function flow(e, o) {
    o = o || {};
    const el = inicia(e, 'flow', o); if (!el) return;
    const c = cores(el, o), W = largura(el, o);
    const st = o.steps || [], k = st.length, hi = hiDe(o, k, -1), numeros = o.numeros !== false;
    const cel = 34, pad = 20, m = 2, rx = 18;
    const mp = (campo, peso, tam) => maiorPalavra(st.map(t => t[campo]), LAB, peso, tam);
    const box0 = (W - m * 2 - cel * (k - 1)) / Math.max(1, k);
    const vert = k > 1 && ((W < 560 && k > 2) || box0 < 136 || box0 - pad * 2 < mp('label', 600, 15));
    const boxW = vert ? W - m * 2 : box0, tw = boxW - pad * 2;
    const fl = mp('label', 600, 17) <= tw ? 17 : 15, fsb = mp('sub', 400, 15) <= tw ? 15 : 13;
    const lhL = fl * 1.28, lhS = fsb * 1.4, numH = numeros ? 44 : 0;
    const blocos = st.map(t => {
      const Lq = quebra(t.label || '', LAB, 600, fl, tw, 3), S = t.sub ? quebra(t.sub, LAB, 400, fsb, tw, 4) : [];
      return { L: Lq, S, th: Lq.length * lhL + (S.length ? 6 + S.length * lhS : 0) };
    });
    const boxH = pad + numH + Math.max(0, ...blocos.map(b => b.th)) + pad;
    const H = vert ? k * boxH + (k - 1) * cel + m * 2 : boxH + m * 2;
    let s = '';
    st.forEach((t, i) => {
      const ehHi = i === hi, x = vert ? m : m + i * (boxW + cel), y = vert ? m + i * (boxH + cel) : m;
      s += `<g data-a="f"><rect x="${r2(x)}" y="${r2(y)}" width="${r2(boxW)}" height="${r2(boxH)}" rx="${rx}" fill="none" stroke="${c.fio}" stroke-width="1.5"/>`;
      if (ehHi) s += `<rect x="${r2(x)}" y="${r2(y)}" width="${r2(boxW)}" height="${r2(boxH)}" rx="${rx}" fill="none" stroke="${c.marca}" stroke-width="2" pathLength="100" stroke-dasharray="25 75" stroke-dashoffset="-12"/>`;
      let ty = y + pad;
      if (numeros) {
        const nn = dois(i + 1);
        s += `<text x="${r2((x + pad) / 1.5)}" y="${r2(ty + 32)}" transform="scale(1.5 1)" fill="${ehHi ? c.marcaTxt : c.apoio}" style="${fonte(NUM, 600, 34, -2)}">${nn}</text>`;
        if (ehHi) s += chama(x + boxW - pad - 4, ty + 14, 14, c.marca);
        ty += numH;
      }
      const b = blocos[i];
      b.L.forEach(ln => { ty += lhL; s += T(x + pad, ty - fl * 0.3, ln, LAB, 600, r2(fl), c.titulo, 'start'); });
      if (b.S.length) ty += 6;
      b.S.forEach(ln => { ty += lhS; s += T(x + pad, ty - fsb * 0.34, ln, LAB, 400, r2(fsb), c.apoio, 'start'); });
      s += '</g>';
      if (i < k - 1) {
        if (vert) { const cx = x + boxW / 2; s += L(cx, y + boxH + 6, cx, y + boxH + cel - 6, c.base, 2); }
        else s += seta(x + boxW + cel / 2, y + boxH / 2, 12, c.apoio, 90);
      }
    });
    monta(el, W, H, s, o, c, 'fluxo', true);
  }

  /* =========================================================== NÚMERO EM DESTAQUE (KPI) */
  function chipVariacao(c, x, y, v, o) {
    if (v == null) return { s: '', w: 0 };
    const pos = v > 0, zero = v === 0;
    const bomQuandoSobe = o.inverter !== true;
    const estado = zero ? 'info' : ((pos === bomQuandoSobe) ? 'positivo' : 'negativo');
    const cor = c.sem(estado);
    const ic = zero ? 'minus' : (pos ? 'trending-up' : 'trending-down');
    const suf = o.variacaoSufixo != null ? o.variacaoSufixo : '%';
    const txt = (pos ? '+' : '') + fmt(v, { dec: Math.abs(v) < 10 && suf === '%' ? 1 : 0, sufixo: suf }) + ' · ' + (zero ? 'estável' : (pos ? 'alta' : 'queda'));
    const tw = mede(txt, LAB, 600, FS);
    const s = icone(ic, x, y - 13, 16, cor) + T(x + 22, y, txt, LAB, 600, FS, cor, 'start');
    return { s, w: 22 + tw };
  }
  function kpi(e, o) {
    o = o || {};
    const el = inicia(e, 'kpi', o); if (!el) return;
    const c = cores(el, o), W = largura(el, o);
    const v = num(o.value);
    const vl = o.vlabel != null ? String(o.vlabel) : auto(v);
    const un = o.unit ? String(o.unit) : '';
    const serie = (o.serie || []).map(num);
    const lado = serie.length > 1 && W >= 480;
    let tam = Math.min(104, Math.max(56, W * 0.22));
    const dispN = (lado ? W * 0.56 : W);
    let nw = mede(vl, NUM, 500, tam) + (un ? mede(un, NUM, 500, tam * 0.6) + 6 : 0);
    if (nw > dispN) { tam = tam * dispN / nw; nw = dispN; }
    const base = tam * 0.84;
    const vw = mede(vl, NUM, 500, tam);
    let s = T(0, base, vl, NUM, 500, r2(tam), c.titulo, 'start', -0.06 * tam, ' data-a="p"');
    if (un) s += T(vw + tam * 0.03, base, un, NUM, 500, r2(tam * 0.6), c.grande, 'start', -0.03 * tam);
    let y = base + 14;
    const larguraTxt = lado ? W * 0.56 : W;
    if (o.label) {
      const ls = quebra(caixa(o.label), LAB, 500, 15, larguraTxt, 3, 1.2);
      ls.forEach((ln, k) => { s += T(0, y + 18 + k * 20, ln, LAB, 500, 15, c.texto, 'start', 1.2); });
      y += 18 + (ls.length - 1) * 20 + 4;
    }
    if (o.variacao != null) {
      const ch = chipVariacao(c, 0, y + 24, +o.variacao, o);
      s += ch.s;
      if (o.variacaoRef) s += T(ch.w + 10, y + 24, String(o.variacaoRef), LAB, 400, FP, c.regua, 'start');
      y += 30;
    }
    if (o.sub) {
      const ls = quebra(o.sub, LAB, 400, 15, larguraTxt, 3);
      ls.forEach((ln, k) => { s += T(0, y + 20 + k * 20, ln, LAB, 400, 15, c.apoio, 'start'); });
      y += 20 + (ls.length - 1) * 20 + 4;
    }
    if (serie.length > 1) {
      const sx = lado ? W * 0.64 : 0, sw = lado ? W - sx - 10 : W - 10;
      const sy = lado ? 10 : y + 22, sh = lado ? Math.max(40, base - 6) : 56;
      const vv = serie.filter(x => x != null), mx = Math.max(...vv), mn = Math.min(...vv), amp = mx - mn || 1;
      const px = i => sx + (i * sw) / (serie.length - 1), py = q => sy + (1 - (q - mn) / amp) * sh;
      const pts = serie.map((q, i) => (q == null ? null : [px(i), py(q)]));
      s += L(sx, sy + sh + 10, sx + sw, sy + sh + 10, c.fio, 1.5);
      trechos(pts).forEach(t => { s += `<polyline points="${poli(t)}" fill="none" stroke="${c.apoio}" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" data-a="d"/>`; });
      const u = serie.length - 1;
      if (pts[u]) s += `<circle cx="${r2(pts[u][0])}" cy="${r2(pts[u][1])}" r="5.5" fill="${c.principal}" stroke="${c.fundo}" stroke-width="2" data-a="p"/>`;
      if (!lado) y = sy + sh + 16;
    }
    monta(el, W, Math.max(y + 6, lado ? base + tam * 0.3 : 0), s, o, c, 'numero');
  }

  /* =========================================================== LINHA DO TEMPO */
  function timeline(e, o) {
    o = o || {};
    const el = inicia(e, 'timeline', o); if (!el) return;
    const c = cores(el, o), W = largura(el, o);
    const ev = o.eventos || o.events || [], n = ev.length;
    const hi = hiDe(o, n, n - 1);
    if (!n) { monta(el, W, 20, '', o, c, 'linha-tempo'); return; }
    const datas = ev.map(t => caixa(t.data || ''));
    const labs = ev.map(t => t.label || t.rotulo || '');
    const colW = W / n;
    const precisa = Math.max(maiorPalavra(labs, LAB, 600, 15), ...datas.map(d => mede(d, LAB, 600, FP, 2))) + 18;
    const horizontal = n > 1 && colW >= Math.max(128, precisa);
    /* o agora: a Chama oficial dentro de um anel; o que passou: ponto cheio; o que falta: contorno */
    const ponto = (x, y, i) => {
      if (i === hi) return `<circle cx="${r2(x)}" cy="${r2(y)}" r="13" fill="${c.fundo}" stroke="${c.marca}" stroke-width="2" data-a="p"/>` + chama(x, y, 14, c.marca, ' data-a="p"');
      if (hi >= 0 && i < hi) return `<circle cx="${r2(x)}" cy="${r2(y)}" r="5" fill="${c.apoio}" data-a="p"/>`;
      return `<circle cx="${r2(x)}" cy="${r2(y)}" r="5" fill="${c.fundo}" stroke="${c.apoio}" stroke-width="1.5" data-a="p"/>`;
    };
    let s = '', H = 0;
    const ate = hi < 0 ? 0 : hi;
    if (horizontal) {
      const eixo = 46, x0 = 14, xh = x0 + ate * colW;
      if (hi >= 0) s += L(x0, eixo, xh, eixo, c.base, 2, ' data-a="x"');
      if (hi < n - 1) s += L(hi >= 0 ? xh : x0, eixo, W, eixo, c.base, 1.5, ' stroke-dasharray="4 5" data-a="f"');
      let fundo = 0;
      ev.forEach((t, i) => {
        const x = i * colW, ehHi = i === hi, tw = colW - 20;
        s += T(x, 16, datas[i], LAB, 600, FP, ehHi ? c.marcaTxt : c.apoio, 'start', 2);
        s += ponto(x + x0, eixo, i);
        let y = eixo + 40;
        quebra(labs[i], LAB, 600, 15, tw, 3).forEach(ln => { s += T(x, y, ln, LAB, 600, 15, ehHi ? c.titulo : c.texto, 'start'); y += 20; });
        if (t.sub) { y += 2; quebra(t.sub, LAB, 400, FS, tw, 4).forEach(ln => { s += T(x, y, ln, LAB, 400, FS, c.apoio, 'start'); y += 19; }); }
        fundo = Math.max(fundo, y);
      });
      H = fundo - 8;
    } else {
      const x0 = 14, tx = 44, tw = W - tx;
      let y = 8, partes = '';
      const centros = [];
      ev.forEach((t, i) => {
        const ehHi = i === hi;
        centros.push(y + 7);
        partes += T(tx, y + 12, datas[i], LAB, 600, FP, ehHi ? c.marcaTxt : c.apoio, 'start', 2);
        let yy = y + 36;
        quebra(labs[i], LAB, 600, 15, tw, 3).forEach(ln => { partes += T(tx, yy, ln, LAB, 600, 15, ehHi ? c.titulo : c.texto, 'start'); yy += 20; });
        if (t.sub) { yy += 2; quebra(t.sub, LAB, 400, FS, tw, 5).forEach(ln => { partes += T(tx, yy, ln, LAB, 400, FS, c.apoio, 'start'); yy += 19; }); }
        y = yy + 14;
      });
      const yh = centros[ate];
      if (hi > 0) s += L(x0, centros[0], x0, yh, c.base, 2, ' data-a="f"');
      if (hi < n - 1) s += L(x0, hi >= 0 ? yh : centros[0], x0, centros[n - 1], c.base, 1.5, ' stroke-dasharray="4 5" data-a="f"');
      ev.forEach((t, i) => { s += ponto(x0, centros[i], i); });
      s += partes;
      H = y - 14;
    }
    monta(el, W, Math.max(40, H), s, o, c, 'linha-tempo');
  }

  /* =========================================================== META (quanto da meta já foi) */
  function meta(e, o) {
    o = o || {};
    const el = inicia(e, 'meta', o); if (!el) return;
    const c = cores(el, o), W = largura(el, o);
    const v = num(o.value), m = num(o.meta);
    const p = v != null && m ? (v / m) * 100 : null;
    const esperado = num(o.esperado);
    const pTxt = p == null ? 'sem dado' : pct(p, 0);
    let s = '', y = 0;
    const tam = W < 420 ? 44 : 56;
    s += T(0, tam * 0.84, pTxt, NUM, 500, tam, c.titulo, 'start', -0.06 * tam, ' data-a="p"');
    const pw = mede(pTxt, NUM, 500, tam);
    s += T(pw + 10, tam * 0.84, 'da meta', LAB, 500, 16, c.texto, 'start');
    let estado = null;
    if (p != null) {
      if (p >= 100) estado = ['positivo', 'circle-check', 'Meta batida'];
      else if (esperado != null && p < esperado) estado = ['atencao', 'triangle-alert', 'Abaixo do ritmo esperado'];
      else if (esperado != null) estado = ['positivo', 'trending-up', 'No ritmo'];
    }
    if (estado && W >= 380) {
      const t = estado[2], tw = mede(t, LAB, 600, FS);
      s += icone(estado[1], W - tw - 22, tam * 0.84 - 13, 16, c.sem(estado[0])) + T(W, tam * 0.84, t, LAB, 600, FS, c.sem(estado[0]), 'end');
    }
    y = tam + 14;
    if (estado && W < 380) {
      s += icone(estado[1], 0, y - 1, 16, c.sem(estado[0])) + T(22, y + 12, estado[2], LAB, 600, FS, c.sem(estado[0]), 'start');
      y += 26;
    }
    const bh = 14;
    s += R(0, y, W, bh, c.trilho);
    if (p != null) s += R(0, y, W * Math.min(1, p / 100), bh, c.principal, ' data-a="x"');
    if (esperado != null) {
      const xe = W * Math.min(1, esperado / 100);
      s += L(xe, y - 6, xe, y + bh + 6, c.meta, 2);
      const t = 'RITMO ESPERADO ' + pct(esperado, 0), tw = mede(t, LAB, 600, FP, 1.4);
      s += T(Math.max(0, Math.min(W - tw, xe - tw / 2)), y + bh + 24, t, LAB, 600, FP, c.apoio, 'start', 1.4);
    }
    s += L(W - 1, y - 6, W - 1, y + bh + 6, c.meta, 2);
    y += bh + (esperado != null ? 34 : 14);
    const linhaV = (o.vlabel != null ? o.vlabel : auto(v)) + ' de ' + (o.vmeta != null ? o.vmeta : auto(m)) + (o.label ? ' · ' + o.label : '');
    quebra(linhaV, LAB, 500, 15, W, 2).forEach(ln => { y += 20; s += T(0, y, ln, LAB, 500, 15, c.texto, 'start'); });
    monta(el, W, y + 4, s, o, c, 'meta');
  }

  /* =========================================================== COTA (medida técnica entre dois traços) */
  function cota(e, o) {
    o = o || {};
    const el = inicia(e, 'cota', o); if (!el) return;
    const c = cores(el, o), W = largura(el, o), H = 26, cy = 13;
    const lab = caixa(o.label || '');
    const tw = mede(lab, LAB, 600, FP, 2);
    const a = W / 2 - tw / 2 - 10, b = W / 2 + tw / 2 + 10;
    let s = L(0.5, cy, a, cy, c.apoio, 1) + L(b, cy, W - 0.5, cy, c.apoio, 1);
    s += L(0.5, cy - 6, 0.5, cy + 6, c.apoio, 1) + L(W - 0.5, cy - 6, W - 0.5, cy + 6, c.apoio, 1);
    s += T(W / 2 + 1, cy + 4.5, lab, LAB, 600, FP, c.apoio, 'middle', 2);
    o = Object.assign({ aria: lab || 'Cota', animar: false }, o);
    monta(el, W, H, s, o, c, 'cota', true, true);
  }

  /* =========================================================== COMPARATIVO ANTES E DEPOIS (sempre com aviso) */
  function comparativo(e, o) {
    o = o || {};
    const el = inicia(e, 'comparativo', o); if (!el) return;
    const c = cores(el, o), W = largura(el, o);
    const an = o.antes || {}, de = o.depois || {};
    const va = num(an.valor != null ? an.valor : an.value), vd = num(de.valor != null ? de.valor : de.value);
    const ta = an.vrotulo != null ? String(an.vrotulo) : auto(va), td = de.vrotulo != null ? String(de.vrotulo) : auto(vd);
    /* dois percentuais: a variação é em pontos, não em porcentagem da porcentagem */
    const emPontos = o.variacaoSufixo == null && /%\s*$/.test(ta) && /%\s*$/.test(td);
    const variacao = o.variacao != null ? +o.variacao : (va != null && vd != null ? (emPontos ? vd - va : (va ? ((vd - va) / va) * 100 : null)) : null);
    if (emPontos) o = Object.assign({}, o, { variacaoSufixo: ' pontos' });
    const lado = W >= 520;
    const colW = lado ? (W - 64) / 2 : W;
    let tam = Math.min(72, Math.max(40, colW * 0.24));
    const mxw = Math.max(mede(ta, NUM, 500, tam), mede(td, NUM, 500, tam));
    if (mxw > colW) tam = tam * colW / mxw;
    let s = '';
    const bloco = (x, y, rot, txt, sub, cor) => {
      let q = T(x, y + 16, caixa(rot), LAB, 600, FP, c.apoio, 'start', 2);
      q += T(x, y + 22 + tam * 0.84, txt, NUM, 500, r2(tam), cor, 'start', -0.05 * tam, ' data-a="p"');
      let yy = y + 22 + tam + 6;
      if (sub) quebra(sub, LAB, 400, FS, colW, 2).forEach(ln => { yy += 18; q += T(x, yy, ln, LAB, 400, FS, c.apoio, 'start'); });
      return { s: q, h: yy - y };
    };
    const A = bloco(0, 0, an.rotulo || 'Antes', ta, an.sub, c.texto);
    const B = bloco(lado ? colW + 64 : 0, lado ? 0 : A.h + 40, de.rotulo || 'Depois', td, de.sub, c.grande);
    s += A.s + B.s;
    if (lado) s += seta(colW + 32, 22 + tam * 0.5, 16, c.marca, 90);
    else s += seta(10, A.h + 20, 12, c.marca, 0);
    let y = lado ? Math.max(A.h, B.h) : A.h + 40 + B.h;
    if (o.barras !== false && va != null && vd != null) {
      const mx = Math.max(va, vd) || 1;
      y += 18;
      s += R(0, y, W * va / mx, 10, c.neutro, ' data-a="x"');
      s += R(0, y + 16, W * vd / mx, 10, c.principal, ' data-a="x"');
      y += 26;
    }
    if (variacao != null) { const ch = chipVariacao(c, 0, y + 30, variacao, o); s += ch.s; y += 38; }
    /* o aviso obrigatório: resultado de um cliente nunca é vendido como típico */
    const aviso = o.aviso || 'Resultado de um restaurante, em um período. Não é promessa nem média: resultados variam por operação.';
    const corAv = o.fonte ? c.sem('info') : c.sem('atencao');
    const avisoLs = quebra(aviso, LAB, 500, FS, W - 40, 4);
    const semFonte = o.fonte ? [] : quebra('Fonte em validação: não publicar até a régua ser aprovada.', LAB, 600, FS, W - 40, 3);
    const boxH = 18 + (avisoLs.length + semFonte.length) * 20 + 4;
    y += 16;
    s += `<rect x="0.75" y="${r2(y + 0.75)}" width="${r2(W - 1.5)}" height="${r2(boxH)}" rx="10" fill="none" stroke="${corAv}" stroke-width="1.5"/>`;
    s += icone(o.fonte ? 'info' : 'triangle-alert', 12, y + 12, 16, corAv);
    let ly = y + 26;
    semFonte.forEach(ln => { s += T(36, ly, ln, LAB, 600, FS, corAv, 'start'); ly += 20; });
    avisoLs.forEach(ln => { s += T(36, ly, ln, LAB, 500, FS, c.texto, 'start'); ly += 20; });
    y += boxH;
    const o2 = Object.assign({}, o); delete o2.aviso;
    monta(el, W, y, s, o2, c, 'comparativo');
  }

  /* =========================================================== CONTADOR COM RÉGUA (Lei 4) */
  function contador(e, o) {
    o = o || {};
    const el = inicia(e, 'contador', o); if (!el) return;
    const c = cores(el, o), W = largura(el, o);
    const v = num(o.value);
    const vazio = o.vazio === true || (v == null && o.vlabel == null);
    const og = vazio ? 'estimado' : origemDe(o);
    const x0 = og ? 16 : 0, disp = W - x0;
    const vl = o.vlabel != null ? String(o.vlabel) : auto(v);
    const un = o.unit ? String(o.unit) : '';
    let tam = Math.min(o.tamanho || 120, Math.max(56, W * 0.3));
    const larg = () => (vazio ? tam * 2.2 : mede(vl, NUM, 500, tam) + (un ? mede(un, NUM, 500, tam * 0.6) + tam * 0.06 : 0));
    if (larg() > disp) tam = tam * disp / larg();
    const base = tam * 0.84;
    let s = '';
    if (vazio) s += R(x0, base - tam * 0.36, tam * 2.2, Math.max(4, tam * 0.07), c.fio);
    else {
      const dec = (String(vl).split(',')[1] || '').replace(/\D/g, '').length;
      const pre = (String(vl).match(/^[^\d-]*/) || [''])[0];
      const contar = o.contar !== false && v != null && /^[^\d-]*-?[\d.]+(,\d+)?$/.test(String(vl)) ? ` data-contar="${v}" data-dec="${dec}" data-pre="${esc(pre)}"` : '';
      s += T(x0, base, vl, NUM, 500, r2(tam), c.titulo, 'start', -0.06 * tam, contar);
      if (un) s += T(x0 + mede(vl, NUM, 500, tam) + tam * 0.03, base, un, NUM, 500, r2(tam * 0.6), c.grande, 'start', -0.03 * tam);
    }
    let y = base + 12;
    if (o.label) {
      quebra(caixa(o.label), LAB, 500, 16, disp, 3, 1.6).forEach(ln => { y += 22; s += T(x0, y, ln, LAB, 500, 16, c.texto, 'start', 1.6); });
    }
    y += 8;
    if (vazio) {
      s += icone('flask-conical', x0, y + 6, 14, c.org('estimado'));
      s += T(x0 + 20, y + 18, 'DADO EM VALIDAÇÃO', LAB, 600, FP, c.org('estimado'), 'start', 1.6);
      y += 26;
    } else if (og) {
      s += icone(ORIGENS[og].icone, x0, y + 6, 14, c.org(og));
      s += T(x0 + 20, y + 18, caixa(ORIGENS[og].nome), LAB, 600, FP, c.org(og), 'start', 1.6);
      y += 26;
    }
    quebra(textoRegua(o), LAB, 400, FP, disp, 3).forEach(ln => { y += 18; s += T(x0, y, ln, LAB, 400, FP, c.regua, 'start'); });
    if (og) {
      const or = ORIGENS[og];
      s = L(1.5, 4, 1.5, y + 5, c.org(og), or.w, (or.dash ? ` stroke-dasharray="${or.dash}"` : '') + (og === 'estimado' ? ' stroke-linecap="round"' : '')) + s;
    }
    const o2 = Object.assign({}, o, { titulo: null, rotulo_topo: o.rotulo_topo });
    monta(el, W, y + 6, s, o2, c, 'contador', true);
  }

  /* =========================================================== FAIXA DE TELEMETRIA (uma por peça) */
  function faixa(e, o) {
    o = o || {};
    const el = inicia(e, 'faixa', o); if (!el) return;
    const W = largura(el, o), escura = o.versao === 'escura';
    const c = cores(el, Object.assign({}, o, { campo: escura ? 'superficie' : 'ignicao' }));
    const it = o.itens || [];
    const n = Math.max(1, it.length);
    const cols = W < 640 ? 2 : n;
    const linhasN = Math.ceil(n / cols);
    const padX = W < 640 ? 20 : 36, padY = 28;
    const corNum = escura ? IGNICAO : BRANCO, corRot = escura ? '#BDB8B8' : BRANCO, corFio = escura ? mistura('#10090B', BRANCO, 0.14) : '#650008';
    const fundo = escura ? '#10090B' : IGNICAO;
    const cellW = (W - padX * 2) / cols;
    let tam = W < 640 ? 44 : 60;
    it.forEach(t => {
      const tx = t.vrotulo != null ? String(t.vrotulo) : (t.valor != null ? auto(num(t.valor)) : null);
      if (tx) { const w = mede(tx, NUM, 600, tam); if (w > cellW - 24) tam = Math.max(26, tam * (cellW - 24) / w); }
    });
    const rowH = tam + 52;
    let s = '';
    it.forEach((t, i) => {
      const lin = Math.floor(i / cols), col = i % cols;
      const ultimaSozinha = i === n - 1 && n % cols === 1 && cols > 1;
      const x = padX + col * cellW + (col > 0 ? 18 : 0), y = padY + lin * rowH;
      const tx = t.vrotulo != null ? String(t.vrotulo) : (t.valor != null ? auto(num(t.valor)) : null);
      if (tx) s += T(x, y + tam * 0.84, tx, NUM, 600, tam, corNum, 'start', -0.06 * tam, ' data-a="p"');
      else s += T(x, y + tam * 0.7, '[valor aprovado]', LAB, 600, Math.max(16, tam * 0.36), corNum, 'start');
      quebra(caixa(t.rotulo || ''), LAB, 600, 14, (ultimaSozinha ? W - padX * 2 : cellW) - 24, 2, 1.4).forEach((ln, k) => {
        s += T(x, y + tam + 22 + k * 17, ln, LAB, 600, 14, corRot, 'start', 1.4);
      });
      if (col > 0) s += L(padX + col * cellW, y + 4, padX + col * cellW, y + rowH - 16, corFio, 2);
      if (lin > 0 && col === 0) s += L(padX, y - 10, W - padX, y - 10, corFio, 2);
    });
    let y = padY + linhasN * rowH + 14;
    const reg = o.regua || (o.fonte || o.periodo || o.base ? textoRegua(o) : 'Base: [n] restaurantes · [mês/ano] a [mês/ano] · fonte: [relatórios mensais]');
    quebra(reg, LAB, 600, 16, W - padX * 2, 3).forEach(ln => { s += T(padX, y, ln, LAB, 600, 16, escura ? '#BDB8B8' : BRANCO, 'start'); y += 22; });
    const H = y + padY - 12;
    s = R(0, 0, W, H, fundo) + s;
    monta(el, W, H, s, Object.assign({}, o, { titulo: null, rotulo_topo: null }), c, 'faixa', true, true);
  }

  /* =========================================================== montagem e nomes */
  const tipos = { bars, hbars, line, share, ring, funnel, flow, kpi, timeline, meta, cota, comparativo, contador, faixa };
  const TIPO = { barras: 'bars', 'barras-h': 'hbars', barrash: 'hbars', ranking: 'hbars', linha: 'line', area: 'line', composicao: 'share', 'composição': 'share',
    empilhada: 'share', anel: 'ring', rosca: 'ring', funil: 'funnel', fluxo: 'flow', numero: 'kpi', 'número': 'kpi', kpi: 'kpi', 'linha-tempo': 'timeline',
    'linha-do-tempo': 'timeline', cronologia: 'timeline', meta: 'meta', cota: 'cota', comparativo: 'comparativo', 'antes-depois': 'comparativo',
    contador: 'contador', faixa: 'faixa', telemetria: 'faixa' };
  const CHAVE = { sobretitulo: 'rotulo_topo', rotulos: 'labels', valores: 'values', vrotulos: 'vlabels', destaque: 'highlight', unidade: 'unit', altura: 'h', largura: 'w',
    etapas: 'stages', segmentos: 'segments', passos: 'steps', rotulo: 'label', valor: 'value', vrotulo: 'vlabel', tamanho: 's' };
  /* chaves que ficam com o nome em português dentro dos objetos aninhados */
  const MANTER = { antes: 1, depois: 1, itens: 1, linhas: 1, ignicao: 1, series: 1 };
  function normaliza(o, topo) {
    if (Array.isArray(o)) return o.map(x => normaliza(x));
    if (!o || typeof o !== 'object') return o;
    const r = {};
    Object.keys(o).forEach(k => {
      if (MANTER[k]) { r[k] = o[k]; return; }
      r[CHAVE[k] || k] = normaliza(o[k]);
    });
    /* no nível de cima, "rotulo" de número, anel, meta, cota e contador é o rótulo do número;
       nos outros tipos é o sobretítulo (com o Pavio) */
    if (topo === 'grafico' && o.rotulo != null) { r.rotulo_topo = o.rotulo; delete r.label; }
    if (o.tamanho != null && topo !== 'grafico') r.tamanho = o.tamanho;
    return r;
  }
  const TIPO_NUMERO = ['kpi', 'ring', 'cota', 'meta', 'contador', 'comparativo', 'faixa'];
  function render(el, tipo, opts) {
    const k = TIPO[tipo] || tipo, f = tipos[k];
    const o = Object.assign({}, opts || {}); delete o.tipo;
    if (f) f(el, normaliza(o, TIPO_NUMERO.indexOf(k) >= 0 ? 'numero' : 'grafico'));
    else if (typeof console !== 'undefined') console.error('pviz: tipo desconhecido "' + tipo + '"');
  }
  function montar(raizEl) {
    if (!temDoc) return;
    (raizEl || document).querySelectorAll('[data-pviz]').forEach(el => {
      if (el.__pvizMontado || el.tagName.toLowerCase() === 'svg') return;
      let cfg;
      try { cfg = JSON.parse(el.getAttribute('data-pviz')); } catch (err) { console.error('pviz: data-pviz não é JSON válido', el); return; }
      el.__pvizMontado = 1;
      render(el, cfg.tipo, cfg);
    });
  }
  function redesenhar() {
    registro.forEach(el => {
      if (!el.isConnected) { registro.delete(el); return; }
      const cfg = el.__pviz;
      if (cfg && tipos[cfg.tipo]) tipos[cfg.tipo](el, cfg.opts);
    });
  }
  /* o SVG pronto (texto) com xmlns, width/height e cores em HEX.
     PViz.svg(el) devolve o de um gráfico da página; PViz.svg(tipo, opts) desenha fora da
     página (campo padrão 'noite', largura padrão 960, sem animação) e inclui o fundo. */
  function svg(e, opts) {
    if (typeof e === 'string' && (TIPO[e] || tipos[e]) && temDoc && document.body) {
      const o = Object.assign({ campo: 'noite', animar: false }, opts || {});
      const W = +(o.largura || o.w) || 960;
      const cx = document.createElement('div');
      cx.setAttribute('aria-hidden', 'true');
      cx.style.cssText = `position:absolute;left:-99999px;top:0;width:${W}px;visibility:hidden`;
      document.body.appendChild(cx);
      o.largura = W; o.peca = false;
      render(cx, e, o);
      registro.delete(cx);
      const s = cx.querySelector('svg');
      let out = '';
      if (s) {
        const vb = s.getAttribute('viewBox').split(' ').map(Number);
        s.setAttribute('width', Math.round(vb[2])); s.setAttribute('height', Math.round(vb[3]));
        s.removeAttribute('style');
        const pal = PALETAS[o.campo];
        const dsc = s.querySelector('desc');
        if (pal && o.fundo !== false && (TIPO[e] || e) !== 'faixa' && dsc) dsc.insertAdjacentHTML('afterend', `<rect x="0" y="${vb[1]}" width="${vb[2]}" height="${vb[3]}" fill="${pal.fundo}"/>`);
        const novo = 'pvx' + (++seqX), velho = s.id;
        s.id = novo;
        out = s.outerHTML.replace(/ data-a="[a-z]+"/g, '').split(velho + '-').join(novo + '-');
      }
      if (ro) try { ro.unobserve(cx); } catch (err) { /* ok */ }
      cx.remove();
      return out;
    }
    const el = alvo(e);
    const s = el && (el.tagName && el.tagName.toLowerCase() === 'svg' ? el : el.querySelector('svg'));
    return s ? s.outerHTML : '';
  }
  let ro = null, espera = 0;
  const larguras = new WeakMap();
  function observa(el) {
    if (!ro && typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(entradas => {
        let mudou = false;
        entradas.forEach(en => {
          const w = Math.round(en.contentRect.width);
          if (larguras.get(en.target) !== w) { larguras.set(en.target, w); mudou = true; }
        });
        if (!mudou) return;
        clearTimeout(espera);
        espera = setTimeout(redesenhar, 120);
      });
    }
    if (ro && !larguras.has(el)) { larguras.set(el, Math.round(el.clientWidth || 0)); ro.observe(el); }
  }
  const nomeado = k => (e, o) => render(e, k, o);
  const api = {
    barras: nomeado('barras'), barrasH: nomeado('barras-h'), ranking: nomeado('barras-h'), linha: nomeado('linha'),
    composicao: nomeado('composicao'), anel: nomeado('anel'), funil: nomeado('funil'), fluxo: nomeado('fluxo'),
    numero: nomeado('numero'), kpi: nomeado('numero'), linhaTempo: nomeado('linha-tempo'), meta: nomeado('meta'), cota: nomeado('cota'),
    comparativo: nomeado('comparativo'), contador: nomeado('contador'), faixa: nomeado('faixa'),
    tipos: ['barras', 'barras-h', 'linha', 'composicao', 'anel', 'funil', 'fluxo', 'numero', 'linha-tempo', 'meta', 'cota', 'comparativo', 'contador', 'faixa'],
    fmt, pct, render, montar, redesenhar, svg, paletas: PALETAS, origens: ORIGENS, contraste, pertoDoVermelho, animar: true, versao: '1.0'
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('beforeprint', () => { terminaAnimacoes(); redesenhar(); });
    try {
      if (temDoc && document.fonts) {
        const recarrega = () => { cache.clear(); redesenhar(); };
        document.fonts.ready.then(recarrega);
        document.fonts.addEventListener('loadingdone', recarrega);
      }
    } catch (err) { /* sem API de fontes */ }
    if (temDoc) {
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => montar());
      else montar();
    }
  }
  raiz.PViz = api;
  raiz.pviz = api;
})(typeof window !== 'undefined' ? window : this);
