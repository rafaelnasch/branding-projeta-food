/* =====================================================================
   PFORMS · formas da casa da Projeta Food · sistema Plataforma Ignição v1
   Quando uma peça da PROJETA precisa de uma forma (moldura, divisor, marcador, rota,
   textura de campo), ela sai daqui: nunca de banco de imagem, nunca de emoji, nunca de
   desenho feito na hora e nunca de clichê de foguete (fumaça, estrela, planeta,
   astronauta, chama realista, seta para a lua).

   De onde vêm as formas (todas medidas no vetor oficial do logotipo)
   · O O PARTIDO: duas metades espelhadas, cunha em cima (13% da largura por dentro, 27%
     por fora) e fenda reta embaixo (9%). Vira a Moldura O e o Fio com Fenda.
   · O A FINAL: chevron de topo chato, pernas a cerca de 64,6 graus. Vira a Seta A.
   · O FOGUETE e a CHAMA oficiais (desenho exato do vetor). A chama sozinha vira a Chama
     de Status. O foguete nunca sai do O como marca da Projeta Food.
   · Do site: o contorno em giro (Anel de Ignição e Órbita), a faixa vermelha de números
     (Faixa), o halo do topo (Brasa Controlada), os numerais gigantes dos cartões
     (Contagem), os cantos dos visuais do método (Mira), o traço do sobretítulo (Pavio).
   · Medidas: altura das maiúsculas A = 35,75 u; traço T = 6,41 u; raio R = 11,78 u.
     Na peça de 1080, 1 T = 8 u; no documento, 1 T = 8 px.

   Regras do motor
   · JavaScript ES2015 simples, zero dependências, SVG puro, determinístico (sem
     Math.random, sem Date). Mesma entrada e mesma largura, mesmo desenho.
   · O desenho mede o contêiner (1 unidade = 1 px). Toda cor sai em HEX por extenso.
   · Cores do campo onde a forma está (noite, preto, superficie, superficie-alta, grafite,
     vinho, branco, bancada, ignicao), lidas da cor real de fundo ou da opção campo.
     Override por cor: HEX ou o nome do token ('ignicao', 'branco', 'noite', 'chama',
     'rubro', 'brasa', 'vinho', 'fumaca', 'fio', 'titulo', 'apoio').
   · Uma Moldura O por peça; uma Trajetória por peça; uma Chama como ponto de ignição;
     um Anel ativo por vez; um Fio com Fenda por tela; uma Faixa por peça.
   · Seta A só para cima ou para a direita. Nunca para baixo, nunca preenchida como
     triângulo, nunca com barra.
   · Nada disso entra na peça que o restaurante publica para o consumidor dele (camada 1).
   · Movimento (Anel em giro, pulso da Chama) só em tela e desligado com movimento reduzido,
     na impressão e em navegador automatizado.
   · Acessibilidade: com aria (ou rótulo) o SVG ganha role="img" e <title>; sem isso, a
     forma é decorativa (aria-hidden).

   Como usar
     <div data-pforms="fio"></div>                                         (monta sozinho)
     <div data-pforms="seta" data-pforms-opts='{"tamanho":24,"direcao":"direita"}'></div>
     <div data-pforms='{"forma":"trajetoria","marcos":["Diagnóstico","Estratégia"]}'></div>
     <div data-pforms="moldura"><p>conteúdo</p></div>   (com conteúdo, a forma vira camada
                                                         atrás do bloco, na altura que ele tiver)
     PForms.moldura(el, opts) · PForms.render(el, nome, opts) · PForms.montar(raiz)
     PForms.redesenhar() · PForms.svg(nome, opts): o SVG pronto (texto) para salvar ou levar
     ao Canva ou ao Figma. O mesmo objeto responde por window.PForms e window.pforms.

   As formas da casa (opções comuns: cor, campo, aria; tamanho em px quando faz sentido)
     moldura     Moldura O: retângulo de cantos com raio de um terço da altura, aberto em
                 cima numa cunha e com a fenda de base. Opções: proporcao ('4/3' padrão),
                 espessura (px; padrão 1 T proporcional), raio, foto + alt, recuo.
     seta        Seta A. Opções: tamanho (altura px, padrão 16), direcao 'cima' | 'direita',
                 escada (2 a 4 setas a 30%, 60% e 100%).
     trajetoria  a rota do foguete: nasce tracejada embaixo à esquerda (a base sendo
                 organizada) e sobe contínua em Ignição até a Seta A. Opções: proporcao
                 ('2/1'), marcos (número ou lista de rótulos), numerar (true), corte (0,62:
                 onde o tracejado vira contínuo).
     foguete     o símbolo oficial (O partido + foguete), desenho exato do vetor. Opções:
                 tamanho (altura px), cor (uma cor só), corFoguete, corO. Para a marca em
                 peça prefira o arquivo assets/brand/projeta-simbolo-*.svg.
     chama       Chama de Status (8 a 14 px), sempre com rótulo. Opções: tamanho, rotulo,
                 pulsar (true: só opacidade, ciclo de 1,6 s).
     orbita      contorno circular com um arco de 25% em Ignição começando em cima à
                 direita (avatar, número, símbolo). Opções: tamanho, espessura, girar.
     anel        Anel de Ignição: contorno do cartão ativo, arco de 25% centrado no canto
                 superior direito. Opções: raio (26), espessura, girar (uma volta em 5,2 s).
     grade       Grade de Lançamento. modo 'textura' (malha de 48 px a 6% com cruzes a cada
                 4 módulos) | 'construcao' (12 colunas, margem de 60 u e áreas seguras).
                 Opções: modulo, opacidade, formato, seguras.
     faixa       a faixa de números (campo Ignição, fios de 2 px em Divisa #650008). Com
                 filhos, desenha os fios entre eles. Opções: colunas, versao 'escura'.
     brasa       Brasa Controlada: halo radial num canto só, até 30% da área, centro com no
                 máximo 52% de opacidade. Opções: canto 'sd' | 'se' | 'id' | 'ie',
                 intensidade (0 a 0,52), contra (halo Vinho Noite no canto oposto),
                 video (fogo lateral em degradê linear), fundo (pinta o Noite).
     contagem    numeral gigante esticado 1,5 vez na horizontal, com 40% acima do cartão.
                 Opções: numero, rotulo, prefixo ('ETAPA'), cartao (true), cartaoCor,
                 marcaDagua (Branco a 8%).
     marcadores  marcadores numerados 01 a 05. Opções: n (5), rotulos, ativo (índice),
                 orientacao 'linha' | 'coluna'.
     mira        Mira de Diagnóstico: quatro cantos em L (braço 3 T, traço 0,5 T). Opções:
                 problema (true: Ignição), braco, espessura.
     fio         Fio com Fenda: fio de 2 px interrompido no centro por uma fenda de 9%.
                 Opções: orientacao 'horizontal' | 'vertical', centro 'seta' | 'chama' |
                 'nada', altura (no vertical).
     pavio       o traço de 16 por 2 que antecede o sobretítulo. Opções: texto, centro.
     peca        moldura de construção de peça: formato 'feed' (4:5) | 'quadrado' | 'story'
                 (9:16) | 'tiktok' | 'paisagem' (16:9) | 'google' (1,91:1), com margens,
                 colunas e áreas seguras por plataforma. Opções: grade, seguras, rotulos.
   ===================================================================== */
(function (raiz) {
  'use strict';
  let seq = 0, seqX = 0;
  const temDoc = typeof document !== 'undefined';
  const el$ = e => (typeof e === 'string' ? (temDoc ? document.getElementById(e) : null) : e);
  const f = v => (Math.round(v * 100) / 100).toString();
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const lim = (v, a, b) => Math.max(a, Math.min(b, v));
  const caixa = s => String(s == null ? '' : s).toLocaleUpperCase('pt-BR');
  const dois = n => (n < 10 ? '0' : '') + n;
  const NOMES = ['moldura', 'seta', 'trajetoria', 'foguete', 'chama', 'orbita', 'anel', 'grade', 'faixa', 'brasa', 'contagem', 'marcadores', 'mira', 'fio', 'pavio', 'peca'];
  const APELIDO = { 'moldura-o': 'moldura', molduraO: 'moldura', 'seta-a': 'seta', setaA: 'seta', chevron: 'seta', 'trajetória': 'trajetoria', rota: 'trajetoria',
    simbolo: 'foguete', 'símbolo': 'foguete', 'chama-status': 'chama', 'órbita': 'orbita', 'anel-ignicao': 'anel', 'grade-lancamento': 'grade',
    telemetria: 'faixa', 'faixa-telemetria': 'faixa', gradiente: 'brasa', halo: 'brasa', numeral: 'contagem', marcador: 'marcadores',
    'fio-fenda': 'fio', divisor: 'fio', 'peça': 'peca', moldurapeca: 'peca' };

  /* ---------- tokens e campos (HEX por extenso) ---------- */
  const TOK = { ignicao: '#ED0012', branco: '#FFFFFF', noite: '#050203', preto: '#000000', chama: '#FF5A67', faisca: '#FF7A85', brilho: '#FF2638',
    rubro: '#AD000D', brasa: '#7E000A', vinho: '#560007', 'vinho-noite': '#300008', carvao: '#120002', divisa: '#650008', rosado: '#FEDADE',
    superficie: '#10090B', 'superficie-alta': '#1A0D10', grafite: '#221E1E', bancada: '#F7F7F7', fumaca: '#8C8686' };
  const ESC = { titulo: '#FFFFFF', apoio: '#BDB8B8', marca: '#ED0012', marcaTxt: '#FF5A67', fio: '#FFFFFF', fioA: 0.14 };
  const CLA = { titulo: '#050203', apoio: '#5E5858', marca: '#ED0012', marcaTxt: '#AD000D', fio: '#050203', fioA: 0.12 };
  const PALETAS = {
    noite: Object.assign({ fundo: '#050203' }, ESC), preto: Object.assign({ fundo: '#000000' }, ESC),
    superficie: Object.assign({ fundo: '#10090B' }, ESC), 'superficie-alta': Object.assign({ fundo: '#1A0D10' }, ESC),
    grafite: Object.assign({ fundo: '#221E1E' }, ESC), vinho: Object.assign({ fundo: '#300008' }, ESC, { marcaTxt: '#FA949D' }),
    branco: Object.assign({ fundo: '#FFFFFF' }, CLA), bancada: Object.assign({ fundo: '#F7F7F7' }, CLA),
    ignicao: { fundo: '#ED0012', titulo: '#FFFFFF', apoio: '#FFFFFF', marca: '#050203', marcaTxt: '#FFFFFF', fio: '#650008', fioA: 1, vermelho: true }
  };

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
  function luz(h) {
    const c = rgb(h).map(v => v / 255).map(v => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }
  const contraste = (a, b) => { const x = luz(a), y = luz(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
  function mistura(a, b, t) {
    const x = rgb(a), y = rgb(b);
    return '#' + x.map((v, i) => ('0' + Math.round(v + (y[i] - v) * t).toString(16)).slice(-2)).join('').toUpperCase();
  }
  function vermelhoDe(h) {
    const c = rgb(h);
    return c[0] > 150 && c[1] < 60 && c[2] < 70;
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
  function cores(el, o) {
    let c;
    if (o.campo && PALETAS[o.campo]) c = Object.assign({}, PALETAS[o.campo]);
    else {
      const real = el ? fundoReal(el) : null;
      const achada = real && Object.keys(PALETAS).filter(k => PALETAS[k].fundo === real)[0];
      if (achada) c = Object.assign({}, PALETAS[achada]);
      else if (real && vermelhoDe(real)) c = Object.assign({}, PALETAS.ignicao, { fundo: real });
      else if (real && luz(real) < 0.18) c = Object.assign({}, PALETAS.noite, { fundo: real });
      else if (real) c = Object.assign({}, PALETAS.branco, { fundo: real });
      else c = Object.assign({}, PALETAS.noite);
    }
    c.escuro = !c.vermelho && luz(c.fundo) < 0.18;
    c.linha = c.vermelho ? c.fio : mistura(c.fundo, c.fio, c.fioA);
    return c;
  }
  /* resolve uma cor pedida: token, chave da paleta ou HEX */
  function cor(c, v, padrao) {
    if (v == null || v === '') return padrao;
    const k = String(v);
    if (c[k] && typeof c[k] === 'string' && /^#/.test(c[k])) return c[k];
    if (TOK[k]) return TOK[k];
    return hex(k) || padrao;
  }

  /* ---------- texto (medida no SVG oculto; sem medida, estima) ---------- */
  const NUM = "font-family:'Transducer','Transducer Projeta','Saira',Arial,sans-serif;font-stretch:112.5%;font-variant-numeric:lining-nums";
  const LAB = "font-family:'Barlow',Arial,sans-serif";
  const est = (fam, peso, tam, ls) => `${fam};font-weight:${peso};font-size:${f(tam)}px` + (ls ? `;letter-spacing:${f(ls)}px` : '');
  const cacheTxt = new Map();
  let medidor = null;
  function mede(txt, estilo) {
    const k = estilo + '|' + txt;
    if (cacheTxt.has(k)) return cacheTxt.get(k);
    let w = 0;
    try {
      if (temDoc && document.body) {
        if (!medidor || !medidor.isConnected) {
          const NS = 'http://www.w3.org/2000/svg';
          medidor = document.createElementNS(NS, 'svg');
          medidor.setAttribute('aria-hidden', 'true');
          medidor.style.cssText = 'position:absolute;left:0;top:0;width:1px;height:1px;overflow:hidden;visibility:hidden;pointer-events:none';
          medidor.appendChild(document.createElementNS(NS, 'text'));
          document.body.appendChild(medidor);
        }
        const t = medidor.firstChild;
        t.setAttribute('style', estilo);
        t.textContent = txt;
        w = t.getComputedTextLength();
      }
    } catch (err) { w = 0; }
    if (!w) { const m = estilo.match(/font-size:([\d.]+)px/); w = String(txt).length * (estilo.indexOf('Saira') >= 0 ? 0.66 : 0.52) * (m ? +m[1] : 16); }
    cacheTxt.set(k, w);
    return w;
  }
  const texto = (x, y, t, estilo, cr, anc, extra) => `<text x="${f(x)}" y="${f(y)}"${anc && anc !== 'start' ? ` text-anchor="${anc}"` : ''} fill="${cr}" style="${estilo}"${extra || ''}>${esc(t)}</text>`;
  function quebra(txt, estilo, maxW, maxL) {
    const pal = String(txt == null ? '' : txt).split(/\s+/).filter(Boolean);
    if (!pal.length) return [];
    const out = []; let at = pal[0];
    for (let i = 1; i < pal.length; i++) { const t = at + ' ' + pal[i]; if (mede(t, estilo) <= maxW) at = t; else { out.push(at); at = pal[i]; } }
    out.push(at);
    if (maxL && out.length > maxL) { const cab = out.slice(0, maxL - 1); cab.push(out.slice(maxL - 1).join(' ')); return cab; }
    return out;
  }

  /* ---------- geometria oficial do logotipo ---------- */
  const SETA_PTS = '0,35.75 16.99,0 24.13,0 41.12,35.75 34.02,35.75 20.56,7.43 7.1,35.75';
  function setaA(cx, cy, h, cr, rot, extra) {
    rot = lim(+rot || 0, 0, 90);
    const k = h / 35.75;
    return `<polygon points="${SETA_PTS}" transform="translate(${f(cx)} ${f(cy)}) rotate(${f(rot)}) scale(${f(k * 1000) / 1000}) translate(-20.56 -17.88)" fill="${cr}"${extra || ''}/>`;
  }
  const CHAMA_D = 'M91.05,26.43c-.98-1.28-2.53-3.64-3.14-6.01-1.87-7.23,7.34-7.57,5.91-.22-.47,2.41-1.87,4.88-2.77,6.23Z';
  function chamaP(cx, cy, h, cr, extra) {
    const k = h / 11.83;
    return `<path d="${CHAMA_D}" transform="translate(${f(cx)} ${f(cy)}) scale(${f(k * 1000) / 1000}) translate(-90.86 -20.52)" fill="${cr}"${extra || ''}/>`;
  }
  /* símbolo: vetor oficial do favicon (viewBox 0 0 66.68 98.84; proporção 0,675 : 1) */
  const SIMB = {
    w: 66.68, h: 98.84,
    foguete: 'M21.24,34.9c-2.28-5.65-.16-12.08,5.09-15.44-2.26-7,0-14.64,5.75-19.46,6.03,4.45,8.76,11.94,6.94,19.07,5.44,3.03,7.95,9.32,6.03,15.1-1.83-3.44-4.4-5.74-7.22-6.91-2.13-4.22-7.8-4.04-9.73.27-2.77,1.34-5.22,3.8-6.85,7.38M32.32,8.19c1.85-.06,3.4,1.34,3.45,3.13.06,1.78-1.4,3.28-3.25,3.34-1.85.06-3.39-1.35-3.45-3.13-.05-1.78,1.4-3.28,3.25-3.33Z',
    chama: 'M33.45,46.91c-1.74-2.26-4.49-6.46-5.58-10.66-3.31-12.84,13.03-13.45,10.5-.39-.83,4.28-3.32,8.66-4.92,11.05',
    o: 'M29.31,46.77h-8.42c-5.24,0-9.51,4.27-9.51,9.51v21.66c0,5.24,4.27,9.51,9.51,9.51h9.47v11.38h-9.46c-11.52,0-20.9-9.38-20.9-20.9v-21.66c0-11.52,9.37-20.9,20.9-20.9h3.57c.02.1.04.19.07.28,1,3.88,2.84,7.75,4.77,11.1M55.3,56.29c0-5.25-4.27-9.53-9.52-9.53h-7.59c1.74-3.45,3.36-7.44,4.18-11.38h3.41c11.53,0,20.9,9.38,20.91,20.91v21.64c0,11.53-9.38,20.91-20.91,20.91h-9.45v-11.38h9.45c5.25,0,9.52-4.27,9.52-9.53v-21.64Z'
  };

  /* ---------- movimento ---------- */
  function semMovimento() {
    try {
      if (typeof navigator !== 'undefined' && navigator.webdriver) return true;
      return !window.matchMedia || window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('print').matches;
    } catch (err) { return true; }
  }
  const podeMover = o => o && api.animar !== false && !semMovimento();

  /* ---------- O PARTIDO: metade esquerda e direita da Moldura O ---------- */
  function molduraO(W, H, t, r, abre) {
    const cx = W / 2;
    const B = Math.min(W, H * 4 / 3) * (abre || 1);
    let ow = 0.27 * B, iw = 0.13 * B, sl = 0.09 * B;
    ow = Math.min(ow, W - 2 * r - 2);
    iw = Math.min(iw, ow * 0.6);
    sl = Math.min(sl, ow * 0.5);
    const ri = Math.max(0.5, r - t);
    const esq = `M${f(cx - ow / 2)} 0H${f(r)}A${f(r)} ${f(r)} 0 0 0 0 ${f(r)}V${f(H - r)}A${f(r)} ${f(r)} 0 0 0 ${f(r)} ${f(H)}H${f(cx - sl / 2)}V${f(H - t)}H${f(r)}A${f(ri)} ${f(ri)} 0 0 1 ${f(t)} ${f(H - r)}V${f(r)}A${f(ri)} ${f(ri)} 0 0 1 ${f(r)} ${f(t)}H${f(cx - iw / 2)}Z`;
    const dir = `M${f(cx + ow / 2)} 0H${f(W - r)}A${f(r)} ${f(r)} 0 0 1 ${f(W)} ${f(r)}V${f(H - r)}A${f(r)} ${f(r)} 0 0 1 ${f(W - r)} ${f(H)}H${f(cx + sl / 2)}V${f(H - t)}H${f(W - r)}A${f(ri)} ${f(ri)} 0 0 0 ${f(W - t)} ${f(H - r)}V${f(r)}A${f(ri)} ${f(ri)} 0 0 0 ${f(W - r)} ${f(t)}H${f(cx + iw / 2)}Z`;
    return { esq, dir, ow, iw, sl, ri };
  }

  /* =========================================================== AS FORMAS
     Cada uma recebe (W, H, c, o, id) e devolve { w, h, s, defs?, aria?, fixo? }. */
  const formas = {};

  formas.moldura = (W, H, c, o, id) => {
    const h = H || W / razao(o.proporcao, 4 / 3);
    const r = lim(+o.raio || Math.min(W, h) / 3, 6, Math.min(W, h) / 2);
    const t = lim(+o.espessura || Math.round(lim(Math.min(W, h) * 0.053, 4, 16)), 1, r - 1);
    const g = molduraO(W, h, t, r, +o.abertura || 1);
    const cr = cor(c, o.cor, c.titulo);
    let s = `<path d="${g.esq}" fill="${cr}"/><path d="${g.dir}" fill="${cr}"/>`;
    let defs = '';
    if (o.foto) {
      const ri = g.ri;
      defs = `<clipPath id="${id}-c"><rect x="${f(t)}" y="${f(t)}" width="${f(W - 2 * t)}" height="${f(h - 2 * t)}" rx="${f(ri)}"/></clipPath>`;
      s = `<image href="${esc(o.foto)}" x="${f(t)}" y="${f(t)}" width="${f(W - 2 * t)}" height="${f(h - 2 * t)}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${id}-c)"/>` + s;
    }
    return { w: W, h, s, defs, aria: o.foto ? (o.alt || 'Foto') : null, vars: { '--pf-abertura': f(g.iw) + 'px', '--pf-espessura': f(t) + 'px', '--pf-raio': f(r) + 'px' } };
  };

  formas.seta = (W, H, c, o) => {
    const h = +o.tamanho || 16, dir = o.direcao === 'direita' ? 90 : 0;
    if (o.direcao && ['cima', 'direita'].indexOf(o.direcao) < 0 && typeof console !== 'undefined') console.warn('pforms: a Seta A só aponta para cima ou para a direita.');
    const n = lim(Math.round(+o.escada || 1), 1, 4);
    const cr = cor(c, o.cor, c.marca);
    const sw = 41.12 / 35.75 * h;
    const opac = n === 1 ? [1] : (n === 2 ? [0.6, 1] : (n === 3 ? [0.3, 0.6, 1] : [0.3, 0.6, 1, 1]));
    const passo = dir === 90 ? h * 0.62 : h * 0.78;
    let s = '', w, hh;
    if (dir === 90) {
      w = h + passo * (n - 1); hh = sw;
      for (let i = 0; i < n; i++) s += setaA(h / 2 + i * passo, sw / 2, h, cr, 90, opac[i] < 1 ? ` fill-opacity="${opac[i]}"` : '');
    } else {
      w = sw; hh = h + passo * (n - 1);
      for (let i = 0; i < n; i++) s += setaA(sw / 2, hh - h / 2 - i * passo, h, cr, 0, opac[i] < 1 ? ` fill-opacity="${opac[i]}"` : '');
    }
    return { w, h: hh, s, fixo: true };
  };

  function bez(p0, p1, p2, p3, t) {
    const u = 1 - t;
    return [u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0], u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1]];
  }
  formas.trajetoria = (W, H, c, o) => {
    /* no celular a rota ganha altura (4:3) para os rótulos caberem sem cruzar a curva */
    const h = H || W / razao(o.proporcao, W < 520 ? 4 / 3 : 2);
    const sx = W / 600, sy = h / 300;
    const P = (x, y) => [x * sx, y * sy];
    const A0 = P(10, 280), A1 = P(170, 280), A2 = P(300, 250), A3 = P(400, 160);
    const B1 = P(470, 96), B2 = P(520, 52), B3 = P(560, 28);
    const base = cor(c, o.corBase, c.titulo), quente = cor(c, o.cor, c.marca);
    const sw = Math.max(2, Math.min(4, W / 200));
    let s = `<path d="M${f(A0[0])} ${f(A0[1])}C${f(A1[0])} ${f(A1[1])} ${f(A2[0])} ${f(A2[1])} ${f(A3[0])} ${f(A3[1])}" fill="none" stroke="${base}" stroke-opacity=".55" stroke-width="${f(sw * 0.7)}" stroke-dasharray="${f(sw * 2.4)} ${f(sw * 3)}" stroke-linecap="round"/>`;
    s += `<path d="M${f(A3[0])} ${f(A3[1])}C${f(B1[0])} ${f(B1[1])} ${f(B2[0])} ${f(B2[1])} ${f(B3[0])} ${f(B3[1])}" fill="none" stroke="${quente}" stroke-width="${f(sw)}" stroke-linecap="round" data-anima="traco"/>`;
    const ang = Math.atan2(B3[1] - B2[1], B3[0] - B2[0]) * 180 / Math.PI + 90;
    const ah = Math.max(12, Math.min(28, h * 0.075));
    s += setaA(B3[0], B3[1], ah, quente, ang);
    /* marcos ao longo da rota, por comprimento */
    const amostras = [];
    for (let i = 0; i <= 40; i++) amostras.push(bez(A0, A1, A2, A3, i / 40));
    for (let i = 1; i <= 40; i++) amostras.push(bez(A3, B1, B2, B3, i / 40));
    const acum = [0];
    for (let i = 1; i < amostras.length; i++) acum.push(acum[i - 1] + Math.hypot(amostras[i][0] - amostras[i - 1][0], amostras[i][1] - amostras[i - 1][1]));
    const total = acum[acum.length - 1];
    const ponto = fr => {
      const alvo = fr * total;
      let i = 1; while (i < acum.length - 1 && acum[i] < alvo) i++;
      const a = amostras[i - 1], b = amostras[i], t = (alvo - acum[i - 1]) / ((acum[i] - acum[i - 1]) || 1);
      return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
    };
    const rot = Array.isArray(o.marcos) ? o.marcos : null;
    const n = rot ? rot.length : lim(Math.round(+o.marcos || 0), 0, 6);
    const rp = Math.max(4, Math.min(7, W / 110));
    const lab = est(LAB, 600, W < 480 ? 13 : 14, 1.6), numE = est(NUM, 600, W < 480 ? 15 : 18, -0.4);
    /* rótulos: nunca cruzam a rota nem saem da forma. Tenta, nesta ordem: abaixo e à direita
       do marco (sob a curva), acima e à esquerda (sobre a curva), abaixo e à esquerda, acima e à direita. */
    const usados = [];
    /* custo de uma posição: sair da forma pesa mais que encostar na rota; 0 = livre */
    const custo = b => {
      let k = 0;
      k += 1000 * (Math.max(0, 1 - b[0]) + Math.max(0, b[1] - (W - 1)) + Math.max(0, 1 - b[2]) + Math.max(0, b[3] - (h - 1)));
      for (let j = 0; j < amostras.length; j++) { const a = amostras[j]; if (a[0] > b[0] - 7 && a[0] < b[1] + 7 && a[1] > b[2] - 7 && a[1] < b[3] + 7) k += 10; }
      if (B3[0] > b[0] - ah && B3[0] < b[1] + ah && B3[1] > b[2] - ah && B3[1] < b[3] + ah) k += 50;
      usados.forEach(u => { if (!(b[1] < u[0] - 6 || b[0] > u[1] + 6 || b[3] < u[2] - 4 || b[2] > u[3] + 4)) k += 200; });
      return k;
    };
    const nH = o.numerar !== false ? 18 : 0, capN = W < 480 ? 11 : 13;
    /* modo compacto (largura de celular): no marco só o número; os nomes viram legenda numerada embaixo */
    const compacto = !!rot && o.numerar !== false && (o.compacto === true || (o.compacto !== false && W < 560));
    for (let i = 0; i < n; i++) {
      const fr = n === 1 ? 0.6 : 0.16 + i * (0.86 - 0.16) / (n - 1);
      const p = ponto(fr);
      s += `<circle cx="${f(p[0])}" cy="${f(p[1])}" r="${f(rp)}" fill="${quente}"/>`;
      if (rot || o.numerar !== false) {
        const opcao = (lado, cima) => {
          const disp = Math.max(70, lado > 0 ? W - p[0] - 14 : p[0] - 14);
          const linhas = rot && !compacto ? quebra(caixa(rot[i]), lab, disp, 2) : [];
          const tw = Math.max(o.numerar !== false ? mede(dois(i + 1), numE) : 0, ...linhas.map(l => mede(l, lab)));
          const alto = (nH ? capN : 10) + (nH && linhas.length ? 18 : 0) + Math.max(0, linhas.length - (nH ? 0 : 1)) * 17 + 4;
          const x = lado > 0 ? p[0] + 12 : p[0] - 12, anc = lado > 0 ? 'start' : 'end';
          const topo = cima ? p[1] - 12 - alto : p[1] + 10;
          return { x, anc, linhas, y0: topo + (nH ? capN : 10), b: [lado > 0 ? x : x - tw, lado > 0 ? x + tw : x, topo, topo + alto] };
        };
        const ops = [opcao(1, false), opcao(-1, true), opcao(-1, false), opcao(1, true)];
        let op = ops[0], melhor = Infinity;
        ops.forEach(q => { const k = custo(q.b); if (k < melhor) { melhor = k; op = q; } });
        usados.push(op.b);
        let y = op.y0;
        if (o.numerar !== false) { s += texto(op.x, y, dois(i + 1), numE, c.marcaTxt, op.anc); y += 18; }
        op.linhas.forEach(l => { s += texto(op.x, y, l, lab, c.apoio, op.anc); y += 17; });
      }
    }
    if (compacto && n) {
      const cols = W >= 360 ? 2 : 1, cw = W / cols, numL = est(NUM, 600, 15, -0.3);
      let hh = h + 14;
      for (let i = 0; i < n; i++) {
        const cx = (i % cols) * cw, cy = h + 14 + Math.floor(i / cols) * 26 + 15;
        s += texto(cx, cy, dois(i + 1), numL, c.marcaTxt);
        const t = quebra(caixa(rot[i]), lab, cw - 34, 1)[0] || '';
        s += texto(cx + 30, cy - 1, t, lab, c.apoio);
        hh = cy + 8;
      }
      return { w: W, h: hh, s };
    }
    return { w: W, h, s };
  };

  formas.foguete = (W, H, c, o) => {
    const h = +o.tamanho || 64, k = h / SIMB.h, w = SIMB.w * k;
    const uma = o.cor ? cor(c, o.cor, c.titulo) : (c.vermelho ? '#FFFFFF' : null);
    const cf = uma || cor(c, o.corFoguete, '#ED0012'), co = uma || cor(c, o.corO, c.titulo);
    const g = `<g transform="scale(${f(k * 1000) / 1000})">`;
    if (o.solto) {
      if (typeof console !== 'undefined') console.warn('pforms: foguete solto só em prancha técnica; como marca, o foguete nunca sai do O.');
      const s = g + `<path d="${SIMB.foguete}" fill="${cf}" fill-rule="evenodd"/><path d="${SIMB.chama}" fill="${cf}" fill-rule="evenodd"/></g>`;
      return { w, h: 47 * k, s, fixo: true, aria: o.aria || 'Foguete do logotipo, uso técnico' };
    }
    const s = g + `<path d="${SIMB.foguete}" fill="${cf}" fill-rule="evenodd"/><path d="${SIMB.chama}" fill="${cf}" fill-rule="evenodd"/><path d="${SIMB.o}" fill="${co}"/></g>`;
    return { w, h, s, fixo: true, aria: o.aria || 'Projeta Food, símbolo' };
  };

  formas.chama = (W, H, c, o) => {
    const h = lim(+o.tamanho || 12, 6, 64), w0 = h * 6.8 / 11.83;
    const cr = cor(c, o.cor, c.marca);
    const anim = o.pulsar && podeMover(o) ? '<animate attributeName="opacity" values="1;.45;1" dur="1.6s" repeatCount="indefinite"/>' : '';
    let s = `<g>${chamaP(w0 / 2, h / 2, h, cr)}${anim}</g>`, w = w0, hh = h;
    if (o.rotulo) {
      const tam = Math.max(13, h * 1.05), e = est(LAB, 600, tam, tam * 0.12);
      const t = caixa(o.rotulo), tw = mede(t, e);
      hh = Math.max(h, tam * 1.2);
      s = `<g transform="translate(0 ${f((hh - h) / 2)})">${chamaP(w0 / 2, h / 2, h, cr)}${anim}</g>` + texto(w0 + 8, hh / 2 + tam * 0.35, t, e, c.titulo);
      w = w0 + 8 + tw + 2;
    }
    return { w, h: hh, s, fixo: true, aria: o.rotulo ? caixa(o.rotulo) : null };
  };

  formas.orbita = (W, H, c, o) => {
    const S = +o.tamanho || Math.min(W, H || W), sw = +o.espessura || 2;
    const r = S / 2 - sw, C = 2 * Math.PI * r;
    const contorno = cor(c, o.corContorno, c.linha), quente = cor(c, o.cor, c.marca);
    /* o arco de 25% vai do topo até a direita: fica centrado no canto superior direito */
    const girar = o.girar && podeMover(o) ? `<animateTransform attributeName="transform" type="rotate" from="-90 ${f(S / 2)} ${f(S / 2)}" to="270 ${f(S / 2)} ${f(S / 2)}" dur="5.2s" repeatCount="indefinite"/>` : '';
    const s = `<circle cx="${f(S / 2)}" cy="${f(S / 2)}" r="${f(r)}" fill="none" stroke="${contorno}" stroke-width="${f(sw)}"/>` +
      `<circle cx="${f(S / 2)}" cy="${f(S / 2)}" r="${f(r)}" fill="none" stroke="${quente}" stroke-width="${f(sw)}" stroke-dasharray="${f(C * 0.25)} ${f(C)}" transform="rotate(-90 ${f(S / 2)} ${f(S / 2)})">${girar}</circle>`;
    return { w: S, h: S, s, fixo: !o.conteudo };
  };

  formas.anel = (W, H, c, o) => {
    const h = H || W / razao(o.proporcao, 8 / 5);
    const sw = +o.espessura || 2, a = sw / 2;
    const rx = lim(+o.raio || 26, 0, Math.min(W, h) / 2 - sw);
    const w2 = W - sw, h2 = h - sw;
    const per = 2 * (w2 - 2 * rx) + 2 * (h2 - 2 * rx) + 2 * Math.PI * rx;
    const centro = (w2 - 2 * rx) + Math.PI * rx / 4, ini = centro - per * 0.125;
    const off = -(ini / per) * 100;
    const contorno = cor(c, o.corContorno, c.linha), quente = cor(c, o.cor, c.marca);
    const girar = o.girar && podeMover(o) ? `<animate attributeName="stroke-dashoffset" from="${f(off)}" to="${f(off - 100)}" dur="5.2s" repeatCount="indefinite"/>` : '';
    const s = `<rect x="${f(a)}" y="${f(a)}" width="${f(w2)}" height="${f(h2)}" rx="${f(rx)}" fill="none" stroke="${contorno}" stroke-width="${f(sw)}"/>` +
      `<rect x="${f(a)}" y="${f(a)}" width="${f(w2)}" height="${f(h2)}" rx="${f(rx)}" fill="none" stroke="${quente}" stroke-width="${f(sw)}" pathLength="100" stroke-dasharray="25 75" stroke-dashoffset="${f(off)}">${girar}</rect>`;
    return { w: W, h, s };
  };

  /* áreas seguras por plataforma, em unidades da peça de 1080 de largura */
  const FORMATOS = {
    feed: { w: 1080, h: 1350, nome: 'Feed 4:5 · 1080 × 1350', seg: { t: 60, b: 60, l: 60, r: 60 } },
    quadrado: { w: 1080, h: 1080, nome: 'Quadrado 1:1 · 1080 × 1080', seg: { t: 60, b: 60, l: 60, r: 60 } },
    story: { w: 1080, h: 1920, nome: 'Story e Reels 9:16 · 1080 × 1920', seg: { t: 270, b: 670, l: 60, r: 60 } },
    tiktok: { w: 1080, h: 1920, nome: 'TikTok 9:16 · 1080 × 1920', seg: { t: 130, b: 560, l: 60, r: 140 } },
    paisagem: { w: 1920, h: 1080, nome: 'Paisagem 16:9 · 1920 × 1080', seg: { t: 60, b: 60, l: 60, r: 60 } },
    google: { w: 1200, h: 628, nome: 'Google 1,91:1 · 1200 × 628', seg: { t: 63, b: 63, l: 120, r: 120 } }
  };
  function construcao(W, h, c, o, fmt) {
    const k = W / (fmt ? fmt.w : 1080);
    const m = 60 * k, gut = 24 * k, cols = 12;
    const quente = cor(c, o.cor, c.escuro || c.vermelho ? '#FF5A67' : '#AD000D');
    const cw = (W - 2 * m - gut * (cols - 1)) / cols;
    let s = '';
    if (o.grade !== false) {
      for (let i = 0; i < cols; i++) s += `<rect x="${f(m + i * (cw + gut))}" y="0" width="${f(cw)}" height="${f(h)}" fill="${quente}" fill-opacity=".07"/>`;
      s += `<rect x="${f(m)}" y="${f(m)}" width="${f(W - 2 * m)}" height="${f(h - 2 * m)}" fill="none" stroke="${quente}" stroke-width="1" stroke-dasharray="4 4"/>`;
    }
    if (fmt && o.seguras !== false) {
      const g = fmt.seg, t = g.t * k, b = g.b * k, l = g.l * k, r = g.r * k;
      const zona = (x, y, w2, h2) => (w2 > 0 && h2 > 0 ? `<rect x="${f(x)}" y="${f(y)}" width="${f(w2)}" height="${f(h2)}" fill="${quente}" fill-opacity=".16"/>` : '');
      if (t > m + 0.5) s += zona(0, 0, W, t);
      if (b > m + 0.5) s += zona(0, h - b, W, b);
      if (r > m + 0.5) s += zona(W - r, t, r, h - t - b);
      if (l > m + 0.5) s += zona(0, t, l, h - t - b);
      s += `<rect x="${f(l)}" y="${f(t)}" width="${f(W - l - r)}" height="${f(h - t - b)}" fill="none" stroke="${quente}" stroke-width="1.5"/>`;
      if (o.rotulos !== false) {
        const e = est(LAB, 600, Math.max(11, Math.min(13, W / 30)), 1);
        s += texto(l + 6, t + 16, caixa('Área segura'), e, quente);
        const tamE = Math.max(11, Math.min(13, W / 30));
        if (t > m + tamE + 12) s += texto(m + 6, m + tamE + 5, caixa('Interface da plataforma'), e, quente);
      }
    }
    return s;
  }
  formas.grade = (W, H, c, o, id) => {
    const h = H || W / razao(o.proporcao, 4 / 5);
    if (o.modo === 'construcao') {
      const fmt = FORMATOS[o.formato] || null;
      return { w: W, h, s: construcao(W, h, c, o, fmt) };
    }
    const mod = +o.modulo || 48, claro = !c.escuro && !c.vermelho;
    const cr = claro ? '#050203' : '#FFFFFF';
    const a1 = lim(+o.opacidade || (claro ? 0.05 : 0.06), 0.02, 0.08), a2 = claro ? 0.12 : 0.16;
    const x4 = mod * 4, meio = x4 / 2, br = mod / 8;
    const defs = `<pattern id="${id}-p" width="${mod}" height="${mod}" patternUnits="userSpaceOnUse"><path d="M${mod} 0H0V${mod}" fill="none" stroke="${cr}" stroke-opacity="${a1}" stroke-width="1"/></pattern>` +
      `<pattern id="${id}-x" width="${x4}" height="${x4}" patternUnits="userSpaceOnUse"><path d="M${f(meio - br)} ${meio}H${f(meio + br)}M${meio} ${f(meio - br)}V${f(meio + br)}" stroke="${cr}" stroke-opacity="${a2}" stroke-width="1"/></pattern>`;
    const s = `<rect width="${f(W)}" height="${f(h)}" fill="url(#${id}-p)"/><rect width="${f(W)}" height="${f(h)}" fill="url(#${id}-x)"/>`;
    return { w: W, h, s, defs };
  };

  formas.peca = (W, H, c, o) => {
    const fmt = FORMATOS[o.formato] || FORMATOS.feed;
    const h = H || W * fmt.h / fmt.w;
    let s = `<rect x=".5" y=".5" width="${f(W - 1)}" height="${f(h - 1)}" fill="none" stroke="${c.linha}" stroke-width="1"/>`;
    s += construcao(W, h, c, o, fmt);
    let hh = h;
    if (o.rotulos !== false && o.nome !== false) {
      /* o nome do formato fica embaixo da moldura (dentro, ele cruzaria as guias) */
      const e = est(LAB, 600, Math.max(11, Math.min(13, W / 30)), 1);
      const linhas = quebra(caixa(fmt.nome), e, W, 2);
      linhas.forEach((l, i) => { s += texto(0, h + 18 + i * 16, l, e, c.apoio); });
      hh = h + 10 + linhas.length * 16;
    }
    return { w: W, h: hh, s, aria: o.aria || null };
  };

  formas.faixa = (W, H, c, o, id, filhos) => {
    const escura = o.versao === 'escura';
    const fundo = escura ? '#10090B' : '#ED0012', fio = escura ? mistura('#10090B', '#FFFFFF', 0.14) : '#650008';
    const h = H || W / razao(o.proporcao, 5);
    let s = `<rect width="${f(W)}" height="${f(h)}" fill="${fundo}"/>`;
    const pad = Math.min(28, h * 0.15);
    if (filhos && filhos.length > 1) {
      for (let i = 1; i < filhos.length; i++) {
        const a = filhos[i - 1], b = filhos[i];
        if (Math.abs(a.top - b.top) > 4) continue;
        const x = (a.right + b.left) / 2;
        s += `<line x1="${f(x)}" y1="${f(Math.max(pad, b.top))}" x2="${f(x)}" y2="${f(Math.min(h - pad, b.bottom))}" stroke="${fio}" stroke-width="2"/>`;
      }
    } else {
      const n = lim(Math.round(+o.colunas || 3), 1, 6);
      for (let i = 1; i < n; i++) s += `<line x1="${f(W * i / n)}" y1="${f(pad)}" x2="${f(W * i / n)}" y2="${f(h - pad)}" stroke="${fio}" stroke-width="2"/>`;
    }
    return { w: W, h, s };
  };

  formas.brasa = (W, H, c, o, id) => {
    const h = H || W / razao(o.proporcao, 16 / 9);
    const canto = ['sd', 'se', 'id', 'ie'].indexOf(o.canto) >= 0 ? o.canto : 'sd';
    const cx = canto[1] === 'd' ? W : 0, cy = canto[0] === 's' ? 0 : h;
    const ia = lim(o.intensidade == null ? 0.52 : +o.intensidade, 0, 0.52);
    let defs = '', s = o.fundo ? `<rect width="${f(W)}" height="${f(h)}" fill="${c.fundo}"/>` : '';
    if (o.video) {
      defs = `<linearGradient id="${id}-v" x1="0" y1="0" x2="1" y2=".18"><stop offset="0" stop-color="#000000" stop-opacity="0"/><stop offset=".3" stop-color="#000000" stop-opacity="0"/>` +
        `<stop offset=".52" stop-color="#120002" stop-opacity=".9"/><stop offset=".68" stop-color="#560007" stop-opacity=".8"/><stop offset=".84" stop-color="#A7000D" stop-opacity=".74"/><stop offset="1" stop-color="#ED0012" stop-opacity=".78"/></linearGradient>`;
      s += `<rect width="${f(W)}" height="${f(h)}" fill="url(#${id}-v)"${canto[1] === 'e' ? ` transform="translate(${f(W)} 0) scale(-1 1)"` : ''}/>`;
      return { w: W, h, s, defs };
    }
    /* quarto de círculo visível com no máximo 30% da área: pi r^2 / 4 = 0,3 W H */
    const rv = Math.sqrt(1.2 * W * h / Math.PI), R = rv / 0.7;
    defs = `<radialGradient id="${id}-b" cx="${f(cx)}" cy="${f(cy)}" r="${f(R)}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ED0012" stop-opacity="${f(ia)}"/>` +
      `<stop offset=".37" stop-color="#AD000D" stop-opacity="${f(ia * 0.5)}"/><stop offset=".7" stop-color="#AD000D" stop-opacity="0"/></radialGradient>`;
    s += `<rect width="${f(W)}" height="${f(h)}" fill="url(#${id}-b)"/>`;
    if (o.contra) {
      const ox = W - cx, oy = h - cy, R2 = R * 0.8;
      defs += `<radialGradient id="${id}-c" cx="${f(ox)}" cy="${f(oy)}" r="${f(R2)}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#300008" stop-opacity=".4"/><stop offset=".7" stop-color="#300008" stop-opacity="0"/></radialGradient>`;
      s += `<rect width="${f(W)}" height="${f(h)}" fill="url(#${id}-c)"/>`;
    }
    return { w: W, h, s, defs };
  };

  formas.contagem = (W, H, c, o) => {
    const n = dois(lim(Math.round(+o.numero || 1), 0, 99));
    const cartao = o.cartao !== false && !o.marcaDagua;
    const h = H || W / razao(o.proporcao, 360 / 220);
    const capH = h * 0.5, tam = capH / 0.72;
    const topoCartao = capH * 0.4;
    const escN = est(NUM, 600, tam, -0.06 * tam);
    let numCor = c.vermelho ? '#050203' : cor(c, o.cor, '#ED0012');
    let s = '';
    if (cartao) {
      const cc = cor(c, o.cartaoCor, c.vermelho ? '#7E000A' : (c.escuro ? '#AD000D' : '#F7F7F7'));
      s += `<rect x="0" y="${f(topoCartao)}" width="${f(W)}" height="${f(h - topoCartao)}" rx="${f(Math.min(26, h * 0.12))}" fill="${cc}"/>`;
      if (!c.escuro && !c.vermelho && !o.cor) numCor = '#ED0012';
    }
    if (o.marcaDagua) numCor = c.escuro || c.vermelho ? '#FFFFFF' : '#050203';
    const x0 = Math.max(12, W * 0.066);
    const nw = mede(n, escN) * 1.5;
    const k = nw > W - x0 * 2 ? (W - x0 * 2) / nw : 1;
    s += `<text x="${f(x0 / (1.5 * k))}" y="${f(capH)}" transform="scale(${f(1.5 * k)} 1)" fill="${numCor}"${o.marcaDagua ? ' fill-opacity=".08"' : ''} style="${escN}">${n}</text>`;
    if (o.rotulo || o.prefixo) {
      /* texto branco sobre Ignição só a partir de 16 px em 600 */
      const tam2 = c.vermelho ? 16 : Math.max(13, Math.min(15, W / 26)), e = est(LAB, 600, tam2, tam2 * 0.34);
      const corT = cartao ? (contraste('#FFFFFF', cor(c, o.cartaoCor, c.escuro ? '#AD000D' : '#F7F7F7')) >= 4.5 ? '#FFFFFF' : '#050203') : c.titulo;
      const t = caixa((o.prefixo == null ? 'Etapa' : o.prefixo) + ' ' + n + (o.rotulo ? ' · ' + o.rotulo : ''));
      quebra(t, e, W - x0 * 2, 2).forEach((l, i, arr) => { s += texto(x0, h - x0 * 0.9 - (arr.length - 1 - i) * (tam2 + 6), l, e, corT); });
    }
    return { w: W, h, s, aria: o.aria || (o.rotulo ? 'Etapa ' + n + ', ' + o.rotulo : null) };
  };

  formas.marcadores = (W, H, c, o) => {
    const n = lim(Math.round(+o.n || (o.rotulos ? o.rotulos.length : 5)), 1, 9);
    const at = o.ativo == null ? -1 : +o.ativo;
    const col = o.orientacao === 'coluna' || (!!o.rotulos && o.orientacao !== 'linha');
    const tam = +o.tamanho || 22, eN = est(NUM, 600, tam, -0.04 * tam), eL = est(LAB, 600, 15, 0.2);
    const corDe = i => (i === at ? cor(c, o.cor, c.marcaTxt) : (at >= 0 && i < at ? c.titulo : c.apoio));
    let s = '', w = W, h;
    if (col) {
      const passo = tam + 22;
      for (let i = 0; i < n; i++) {
        const y = i * passo;
        s += `<text x="0" y="${f(y + tam * 0.86)}" transform="scale(1.25 1)" fill="${corDe(i)}" style="${eN}">${dois(i + 1)}</text>`;
        s += `<rect x="0" y="${f(y + tam + 5)}" width="${f(tam * 1.5)}" height="2" fill="${i === at ? cor(c, o.cor, c.marca) : c.linha}"/>`;
        const lx = tam * 1.6 + 16;
        if (o.rotulos && o.rotulos[i] != null) s += texto(lx, y + tam * 0.78, String(o.rotulos[i]), eL, i === at ? c.titulo : c.apoio);
        if (i === at) {
          const fimRot = o.rotulos && o.rotulos[i] != null ? lx + mede(String(o.rotulos[i]), eL) + 14 : tam * 1.6 + 12;
          s += chamaP(Math.min(W - 8, fimRot), y + tam * 0.45, 13, cor(c, o.cor, c.marca));
        }
      }
      h = n * passo - 18;
    } else {
      const nw = mede('00', eN) * 1.25;
      const cel = Math.max(at >= 0 ? nw + 34 : tam * 2.2, W / n);
      for (let i = 0; i < n; i++) {
        const x = i * cel;
        s += `<text x="${f(x / 1.25)}" y="${f(tam * 0.86)}" transform="scale(1.25 1)" fill="${corDe(i)}" style="${eN}">${dois(i + 1)}</text>`;
        s += `<rect x="${f(x)}" y="${f(tam + 6)}" width="${f(Math.min(cel - 12, tam * 1.6))}" height="2" fill="${i === at ? cor(c, o.cor, c.marca) : c.linha}"/>`;
        if (i === at) s += chamaP(x + nw + 9, tam * 0.3, 12, cor(c, o.cor, c.marca));
      }
      w = Math.max(W, n * cel); h = tam + 10;
    }
    return { w, h, s };
  };

  formas.mira = (W, H, c, o) => {
    const h = H || W / razao(o.proporcao, 10 / 7);
    const b = +o.braco || 24, t = +o.espessura || (o.problema ? 4 : 3);
    const cr = o.problema ? cor(c, o.cor, c.vermelho ? '#FFFFFF' : '#ED0012') : cor(c, o.cor, c.titulo);
    const op = o.problema ? 1 : 0.7, a = t / 2;
    const d = `M${a} ${b}V${a}H${b}M${f(W - b)} ${a}H${f(W - a)}V${b}M${f(W - a)} ${f(h - b)}V${f(h - a)}H${f(W - b)}M${b} ${f(h - a)}H${a}V${f(h - b)}`;
    return { w: W, h, s: `<path d="${d}" fill="none" stroke="${cr}" stroke-opacity="${op}" stroke-width="${t}" stroke-linecap="square"/>` };
  };

  formas.fio = (W, H, c, o) => {
    const vert = o.orientacao === 'vertical';
    const centro = o.centro || 'seta';
    const linha = cor(c, o.corFio, mistura(c.fundo, c.vermelho ? '#650008' : c.fio, c.vermelho ? 1 : (c.escuro ? 0.24 : 0.2)));
    const quente = cor(c, o.cor, c.marca);
    if (vert) {
      const h = +o.altura || H || 64, sl = h * 0.09;
      const s = `<line x1=".5" y1="0" x2=".5" y2="${f(h / 2 - sl / 2)}" stroke="${linha}" stroke-width="1"/><line x1=".5" y1="${f(h / 2 + sl / 2)}" x2=".5" y2="${f(h)}" stroke="${linha}" stroke-width="1"/>`;
      return { w: 1, h, s, fixo: true };
    }
    const h = 20, sl = W * 0.09, cx = W / 2;
    let s = `<line x1="0" y1="10" x2="${f(cx - sl / 2)}" y2="10" stroke="${linha}" stroke-width="2"/><line x1="${f(cx + sl / 2)}" y1="10" x2="${f(W)}" y2="10" stroke="${linha}" stroke-width="2"/>`;
    if (centro === 'seta') s += setaA(cx, 10, 13, quente, 0);
    else if (centro === 'chama') s += chamaP(cx, 10, 13, quente);
    return { w: W, h, s };
  };

  formas.pavio = (W, H, c, o) => {
    const t = caixa(o.texto || 'Projeta Food'), e = est(LAB, 600, 12, 12 * 0.34);
    const tw = mede(t, e), quente = cor(c, o.cor, c.marca);
    if (o.centro) {
      const w = Math.max(tw, 40);
      return { w, h: 30, s: texto(w / 2, 13, t, e, c.titulo, 'middle') + `<rect x="${f(w / 2 - 20)}" y="24" width="40" height="2" fill="${quente}"/>`, fixo: true, aria: t };
    }
    return { w: 16 + 9 + tw, h: 16, s: `<rect x="0" y="7" width="16" height="2" fill="${quente}"/>` + texto(25, 12.5, t, e, c.titulo), fixo: true, aria: t };
  };

  /* ---------- medida, montagem e camadas ---------- */
  function razao(v, padrao) {
    if (v == null || v === '') return padrao;
    if (typeof v === 'number') return v > 0 ? v : padrao;
    const m = String(v).match(/^\s*([\d.]+)\s*[/:x]\s*([\d.]+)\s*$/);
    if (m) return +m[1] / +m[2];
    const n = parseFloat(String(v).replace(',', '.'));
    return n > 0 ? n : padrao;
  }
  const COM_CONTEUDO = { moldura: 1, anel: 1, mira: 1, faixa: 1, brasa: 1, orbita: 1, grade: 1, peca: 1 };
  function filhosReais(el) {
    return Array.prototype.filter.call(el.children, n => !n.hasAttribute('data-pforms-camada'));
  }
  function montaSvg(r, nome, o, id) {
    const aria = o.aria || r.aria;
    const acess = aria ? ` role="img" aria-labelledby="${id}-t"` : ' aria-hidden="true"';
    const tam = o.exportar ? `width="${f(r.w)}" height="${f(r.h)}"` : (r.fixo ? `width="${f(r.w)}" height="${f(r.h)}" style="display:${o.bloco ? 'block' : 'inline-block'};vertical-align:middle;overflow:visible;max-width:100%;height:auto"` :
      (o.camada ? 'style="width:100%;height:100%;display:block;overflow:visible"' : 'style="width:100%;height:auto;display:block;overflow:visible"'));
    return `<svg xmlns="http://www.w3.org/2000/svg" id="${id}" data-pforms-forma="${nome}" viewBox="0 0 ${f(r.w)} ${f(r.h)}" ${tam} preserveAspectRatio="${o.esticar ? 'none' : 'xMidYMid meet'}" focusable="false"${acess}>` +
      (aria ? `<title id="${id}-t">${esc(aria)}</title>` : '') + (r.defs ? `<defs>${r.defs}</defs>` : '') + r.s + '</svg>';
  }
  function render(e, nome, o) {
    const el = el$(e); if (!el) return;
    nome = APELIDO[nome] || nome;
    const fn = formas[nome];
    if (!fn) { if (typeof console !== 'undefined') console.error('pforms: forma desconhecida "' + nome + '"'); return; }
    o = Object.assign({}, o || {});
    el.__pforms = { nome, opts: o };
    registro.add(el);
    if (!el.__pfId) el.__pfId = 'pf' + (++seq);
    const id = el.__pfId;
    const c = cores(el, o);
    if (el.__pfConteudo == null) el.__pfConteudo = COM_CONTEUDO[nome] ? filhosReais(el).length > 0 : false;
    if (el.__pfConteudo) {
      /* camada atrás do conteúdo, na medida do bloco */
      try { if (getComputedStyle(el).position === 'static') el.style.position = 'relative'; } catch (err) { el.style.position = 'relative'; }
      el.style.isolation = 'isolate';
      const W = el.offsetWidth || 320, H = el.offsetHeight || 200;
      let filhos = null;
      if (nome === 'faixa') {
        const b0 = el.getBoundingClientRect();
        filhos = filhosReais(el).map(n => { const b = n.getBoundingClientRect(); return { left: b.left - b0.left, right: b.right - b0.left, top: b.top - b0.top, bottom: b.bottom - b0.top }; });
      }
      const oo = Object.assign({ conteudo: true }, o);
      if (nome === 'orbita') oo.tamanho = Math.min(W, H);
      const r = fn(W, H, c, oo, id, filhos);
      r.fixo = false;
      let cam = el.querySelector(':scope > [data-pforms-camada]');
      if (!cam) {
        cam = document.createElement('span');
        cam.setAttribute('data-pforms-camada', '');
        cam.setAttribute('aria-hidden', 'true');
        cam.style.cssText = 'position:absolute;inset:0;z-index:-1;pointer-events:none;display:block';
        el.insertBefore(cam, el.firstChild);
      }
      cam.innerHTML = montaSvg(r, nome, Object.assign({}, o, { aria: null, camada: true, esticar: nome !== 'orbita' }), id);
      if (r.vars) Object.keys(r.vars).forEach(k => el.style.setProperty(k, r.vars[k]));
      if (nome === 'moldura' && !o.semRecuo) {
        const cs = getComputedStyle(el);
        if ((parseFloat(cs.paddingTop) || 0) === 0) el.style.padding = f(o.recuo != null ? +o.recuo : (parseFloat(r.vars['--pf-espessura']) + Math.min(W, H) / 3 * 0.35 + 16)) + 'px';
      }
      observa(el);
      return;
    }
    let W = 0;
    try { const cs = getComputedStyle(el); W = el.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0); } catch (err) { W = 0; }
    if (!W || W < 1) W = +o.largura || 480;
    if (o.largura) W = +o.largura;
    const H = o.altura ? +o.altura : 0;
    const r = fn(W, H, c, o, id, null);
    el.innerHTML = montaSvg(r, nome, o, id);
    if (r.vars) Object.keys(r.vars).forEach(k => el.style.setProperty(k, r.vars[k]));
    if (!r.fixo) observa(el);
  }
  function svg(nome, o) {
    nome = APELIDO[nome] || nome;
    const fn = formas[nome]; if (!fn) return '';
    o = Object.assign({ campo: 'noite' }, o || {});
    const c = cores(null, o), id = 'pfx' + (++seqX);
    const W = +o.largura || 1080, H = o.altura ? +o.altura : 0;
    const r = fn(W, H, c, Object.assign({}, o, { pulsar: false, girar: false }), id, null);
    return montaSvg(r, nome, Object.assign({}, o, { exportar: true }), id);
  }
  function montar(raizEl) {
    if (!temDoc) return;
    (raizEl || document).querySelectorAll('[data-pforms]').forEach(el => {
      if (el.__pformsMontado) return;
      const v = el.getAttribute('data-pforms');
      let nome = v, o = {};
      if (/^\s*\{/.test(v)) { try { o = JSON.parse(v); nome = o.forma; } catch (err) { console.error('pforms: data-pforms não é JSON válido', el); return; } }
      const extra = el.getAttribute('data-pforms-opts');
      if (extra) { try { o = Object.assign(o, JSON.parse(extra)); } catch (err) { console.error('pforms: data-pforms-opts não é JSON válido', el); } }
      el.__pformsMontado = 1;
      render(el, nome, o);
    });
  }
  const registro = new Set();
  function redesenhar() {
    registro.forEach(el => {
      if (!el.isConnected) { registro.delete(el); return; }
      const cfg = el.__pforms;
      if (cfg) render(el, cfg.nome, cfg.opts);
    });
  }
  let ro = null, espera = 0;
  const medidas = new WeakMap();
  function observa(el) {
    if (!ro && typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(entradas => {
        let mudou = false;
        entradas.forEach(en => {
          const k = Math.round(en.contentRect.width) + 'x' + (en.target.__pfConteudo ? Math.round(en.contentRect.height) : 0);
          if (medidas.get(en.target) !== k) { medidas.set(en.target, k); mudou = true; }
        });
        if (!mudou) return;
        clearTimeout(espera);
        espera = setTimeout(redesenhar, 120);
      });
    }
    if (ro && !medidas.has(el)) {
      medidas.set(el, Math.round(el.clientWidth || 0) + 'x' + (el.__pfConteudo ? Math.round(el.clientHeight || 0) : 0));
      ro.observe(el);
    }
  }
  const api = { render, montar, redesenhar, svg, paletas: PALETAS, tokens: TOK, formatos: FORMATOS, formas: NOMES.slice(), contraste, animar: true, versao: '1.0' };
  NOMES.forEach(n => { api[n] = (e, o) => render(e, n, o); });
  if (typeof window !== 'undefined') {
    window.addEventListener('beforeprint', redesenhar);
    try { if (temDoc && document.fonts) document.fonts.ready.then(() => { cacheTxt.clear(); redesenhar(); }); } catch (err) { /* sem API de fontes */ }
    if (temDoc) {
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => montar());
      else montar();
    }
  }
  raiz.PForms = api;
  raiz.pforms = api;
})(typeof window !== 'undefined' ? window : this);
