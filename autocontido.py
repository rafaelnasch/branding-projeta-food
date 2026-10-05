#!/usr/bin/env python3
"""Gera a versão AUTOCONTIDA de um HTML da skill Projeta Food: um arquivo único que abre
sozinho (e-mail, WhatsApp, Drive, celular, claude.ai), sem a pasta assets/ e sem
pviz.js e pforms.js ao lado.

O que faz:
1. cola pviz.js e pforms.js dentro do próprio HTML;
2. guarda cada imagem de assets/ UMA vez, em data URI, num dicionário no <head>;
3. um script troca todo src/href/srcset/poster que começa com "assets/" pela imagem
   embutida, inclusive nos elementos que os motores criam depois;
4. url(assets/...) do CSS vira data URI direto;
5. embute as fontes de TODOS os links do Google Fonts da página (Saira, Unbounded,
   Barlow e as fontes das marcas fictícias) em woff2, só os alfabetos latin e latin-ext,
   dentro da própria <style>, preservando faixa de peso e de largura das fontes
   variáveis (a Saira usa largura 112,5%). Os woff2 baixados ficam em
   assets/fontes/google/ e servem de reserva quando não há internet. Todas são de
   licença SIL Open Font License (podem ser distribuídas). Transducer e Kallisto,
   fontes comerciais da Projeta, NUNCA entram aqui.
6. todo link <a href> para outro HTML da skill (brand-book.html#s22-2, kit-cliente.html,
   relatorio-template.html...) passa a apontar para o nome que esse arquivo tem em dist/,
   para que os arquivos de dist/ continuem se abrindo entre si.
Blocos <template>, <pre>, <script>, <textarea> e <style> não têm os atributos alterados
(o código mostrado e copiado no lockup continua com os caminhos assets/...).

Uso (só Python padrão):
  python3 autocontido.py                      # gera dist/ com os arquivos que existirem
  python3 autocontido.py meu-material.html    # gera dist/meu-material.html
"""
import base64, hashlib, json, mimetypes, os, re, sys, urllib.request

RAIZ = os.path.dirname(os.path.abspath(__file__))
DIST = os.path.join(RAIZ, "dist")
PADRAO = {"brand-book.html": "brand-book-projeta-food.html",
          "deck-template.html": "apresentacao-projeta-food.html",
          "lockup.html": "codigo-da-marca-projeta-food.html",
          "guia-de-uso.html": "guia-de-uso-projeta-food.html",
          "kit-cliente.html": "kit-do-cliente-projeta-food.html",
          "relatorio-template.html": "relatorio-mensal-projeta-food.html"}
MOTORES = ("pviz.js", "pforms.js")
RE_LINK_SKILL = re.compile(r'(<a\b[^>]*?\shref=")(%s)((?:#[^"]*)?")' % "|".join(re.escape(n) for n in PADRAO))
RE_ASSET = re.compile(r"assets/[A-Za-z0-9_./-]+?\.(?:png|jpe?g|svg|webp|gif)")
FONTES = os.path.join(RAIZ, "assets", "fontes", "google")
RE_LINK_FONTES = re.compile(r'<link\b[^>]*href="(https://fonts\.googleapis\.com/css2\?[^"]+)"[^>]*>\n?')
RE_PRECONNECT = re.compile(r'<link rel="preconnect" href="https://fonts\.(?:googleapis|gstatic)\.com"[^>]*>\n?')
ALFABETOS = ("latin", "latin-ext")
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"


def baixa(url, timeout=30):
    return urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=timeout).read()


def fontes_embutidas(url):
    """CSS com @font-face em data URI (woff2, latin e latin-ext), ou None se não der.
    Mantém font-weight e font-stretch como vierem (faixas das fontes variáveis)."""
    url = url.replace("&amp;", "&")
    os.makedirs(FONTES, exist_ok=True)
    guardado = os.path.join(FONTES, "google-%s.css" % hashlib.sha1(url.encode()).hexdigest()[:10])
    try:
        css = baixa(url, 20).decode("utf-8")
        open(guardado, "w", encoding="utf-8").write(css)
    except Exception as erro:
        if not os.path.isfile(guardado):
            print("aviso: sem internet e sem cópia em assets/fontes/google/; as fontes continuam pelo link do Google (%s)" % erro)
            return None
        css = open(guardado, encoding="utf-8").read()
    saida, vistos = [], set()
    for alfabeto, corpo in re.findall(r"/\*\s*([a-z-]+)\s*\*/\s*@font-face\s*\{([^}]*)\}", css):
        if alfabeto not in ALFABETOS:
            continue
        prop = dict((k.strip(), v.strip()) for k, v in re.findall(r"([a-z-]+)\s*:\s*([^;]+);", corpo))
        fonte = re.search(r"url\((https://fonts\.gstatic\.com/[^)]+)\)", prop.get("src", ""))
        if not fonte:
            continue
        chave = (prop.get("font-family"), prop.get("font-style"), prop.get("font-weight"), prop.get("font-stretch"), fonte.group(1), prop.get("unicode-range"))
        if chave in vistos:
            continue
        vistos.add(chave)
        link = fonte.group(1)
        local = os.path.join(FONTES, os.path.basename(link))
        try:
            if not os.path.isfile(local):
                open(local, "wb").write(baixa(link))
        except Exception as erro:
            print("aviso: não baixou %s (%s); as fontes continuam pelo link do Google" % (link, erro))
            return None
        dado = base64.b64encode(open(local, "rb").read()).decode()
        extra = ("font-stretch:%s;" % prop["font-stretch"]) if "font-stretch" in prop else ""
        saida.append("/* %s */\n@font-face{font-family:%s;font-style:%s;font-weight:%s;%sfont-display:swap;"
                     "src:url(data:font/woff2;base64,%s) format('woff2');unicode-range:%s;}"
                     % (alfabeto, prop.get("font-family"), prop.get("font-style", "normal"), prop.get("font-weight", "400"),
                        extra, dado, prop.get("unicode-range", "U+0000-00FF")))
    return "\n".join(saida) if saida else None


TROCA = r"""<script>/* imagens embutidas: troca assets/... pela versão em data URI */
(function(){var A=window.__PROJETA_ASSETS=%s;
function url(v){return A[v]||v}
function set(el){if(!el||el.nodeType!==1)return;
 ["src","href","poster","srcset"].forEach(function(a){var d=el.getAttribute("data-asset-"+a);if(d!==null){el.removeAttribute("data-asset-"+a);el.setAttribute(a,a==="srcset"?d.replace(/assets\/[^\s,]+/g,url):url(d))}});
 ["src","href","poster"].forEach(function(a){var v=el.getAttribute(a);if(v&&v.indexOf("assets/")===0&&A[v])el.setAttribute(a,A[v])});
 var x=el.getAttributeNS&&el.getAttributeNS("http://www.w3.org/1999/xlink","href");
 if(x&&x.indexOf("assets/")===0&&A[x])el.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",A[x]);
 var s=el.getAttribute("srcset");if(s&&s.indexOf("assets/")>-1)el.setAttribute("srcset",s.replace(/assets\/[^\s,]+/g,url));}
function walk(r){set(r);if(r.querySelectorAll)r.querySelectorAll("[src],[href],[srcset],[poster],image,[data-asset-src],[data-asset-srcset],[data-asset-href],[data-asset-poster]").forEach(set)}
new MutationObserver(function(ms){ms.forEach(function(m){if(m.type==="attributes")set(m.target);else m.addedNodes.forEach(function(n){if(n.nodeType===1)walk(n)})})})
 .observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:["src","href","srcset","poster","xlink:href"]});
document.addEventListener("DOMContentLoaded",function(){walk(document.documentElement)});})();
</script>"""


def data_uri(caminho):
    tipo = mimetypes.guess_type(caminho)[0] or "application/octet-stream"
    if caminho.endswith(".svg"):
        tipo = "image/svg+xml"
    with open(caminho, "rb") as f:
        return "data:%s;base64,%s" % (tipo, base64.b64encode(f.read()).decode())


def autocontido(origem, destino):
    html = open(origem, encoding="utf-8").read()
    # 0. fontes do Google embutidas na própria <style> (continua uma <style> só)
    blocos, sobra = [], 0
    for link in RE_LINK_FONTES.findall(html):
        css = fontes_embutidas(link)
        if css:
            blocos.append(css)
            html = re.sub(r'<link\b[^>]*href="%s"[^>]*>\n?' % re.escape(link), "", html, count=1)
        else:
            sobra += 1
    if blocos:
        if not sobra:
            html = RE_PRECONNECT.sub("", html)
        html = html.replace("<style>", "<style>\n/* Fontes embutidas (SIL Open Font License): latin e latin-ext */\n" + "\n".join(blocos) + "\n", 1)
    # 1. motores dentro do arquivo
    for js in MOTORES:
        tag = '<script src="%s"></script>' % js
        if tag in html and os.path.isfile(os.path.join(RAIZ, js)):
            codigo = open(os.path.join(RAIZ, js), encoding="utf-8").read()
            html = html.replace(tag, "<script>/* %s */\n%s\n</script>" % (js, codigo))
    # 2. dicionário de imagens (cada arquivo uma vez só)
    usados = sorted(set(m.group(0) for m in RE_ASSET.finditer(html)))
    mapa, faltando = {}, []
    for p in usados:
        c = os.path.join(RAIZ, p)
        (mapa.__setitem__(p, data_uri(c)) if os.path.isfile(c) else faltando.append(p))
    # 3. CSS url(assets/...) vira data URI direto (só dentro de <style>)
    def troca_css(m):
        return re.sub(r"url\(\s*(['\"]?)(assets/[^)'\"]+)\1\s*\)",
                      lambda u: "url(%s)" % json.dumps(mapa.get(u.group(2), u.group(2))), m.group(0))
    html = re.sub(r"<style\b[\s\S]*?</style>", troca_css, html)
    # 4. atributos estáticos (fora de template, pre, script, textarea e style) viram
    #    data-asset-*: o navegador não tenta buscar o arquivo que não existe
    partes = re.split(r"(<(template|pre|script|textarea|style)\b[\s\S]*?</\2>)", html)
    saida, i = [], 0
    while i < len(partes):
        trecho = partes[i]
        if i % 3 == 0:
            for _ in range(2):   # duas passadas: uma tag pode ter src e srcset ao mesmo tempo
                trecho = re.sub(r'(<(?:img|source|image|link|video)\b[^>]*?\s)(src|srcset|href|poster)="(assets/[^"]*)"',
                                lambda m: '%sdata-asset-%s="%s"' % (m.group(1), m.group(2), m.group(3)), trecho)
            # link entre os arquivos da skill aponta para o nome que ele ganha em dist/
            trecho = RE_LINK_SKILL.sub(lambda m: m.group(1) + PADRAO[m.group(2)] + m.group(3), trecho)
            saida.append(trecho); i += 1
        else:
            saida.append(trecho); i += 2
    html = "".join(saida)
    # 5. o script de troca entra logo no começo do <head>
    bloco = TROCA % json.dumps(mapa, separators=(",", ":"))
    html = re.sub(r"(<meta charset=[^>]*>)", lambda m: m.group(1) + "\n" + bloco, html, count=1) \
        if re.search(r"<meta charset=", html) else html.replace("<head>", "<head>\n" + bloco, 1)
    os.makedirs(os.path.dirname(destino), exist_ok=True)
    open(destino, "w", encoding="utf-8").write(html)
    print("ok %s  %d KB  imagens=%d  fontes=%d%s" % (os.path.relpath(destino, RAIZ), len(html.encode()) // 1024, len(mapa), len(blocos),
          ("  sem arquivo (ficam como estão): " + ", ".join(faltando)) if faltando else ""))


if __name__ == "__main__":
    alvos = sys.argv[1:] or [a for a in PADRAO if os.path.isfile(os.path.join(RAIZ, a))]
    if not alvos:
        sys.exit("nenhum HTML da skill encontrado na pasta")
    for a in alvos:
        o = a if os.path.isabs(a) else os.path.join(RAIZ, a)
        if not os.path.isfile(o):
            print("pulado (não existe): %s" % a)
            continue
        autocontido(o, os.path.join(DIST, PADRAO.get(os.path.basename(a), os.path.basename(a))))
