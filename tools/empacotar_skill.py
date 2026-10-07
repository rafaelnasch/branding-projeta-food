#!/usr/bin/env python3
"""Gera dist-skill/branding-projeta-food.zip, o pacote da skill para claude.ai e ChatGPT (Release).

O ZIP tem a pasta branding-projeta-food/ no topo e só o que a skill precisa para operar: SKILL.md,
agents/openai.yaml, brand-book.html, deck-template.html, relatorio-template.html, kit-cliente.html,
lockup.html, guia-de-uso.html, pviz.js, pforms.js, autocontido.py, exportar_pdf.py, a marca em SVG e
PNG web, favicons, avatar, imagem de compartilhamento, marca.json, a assinatura com placa, as fontes
livres do Google em woff2 com os CSS guardados pelo autocontido e a Saira Larga Projeta (OFL).

Fica fora do pacote (e é servido pelo GitHub Pages): o vetor original do site
(assets/referencia-original), as PNG da marca em resolução de impressão (2400 px), o index.html, o
README e o dist/ autocontido. Também ficam fora os woff2 órfãos baixados com nome "font?kit=...&skey=..."
(nenhum CSS nem modelo os referencia, e o nome tem caractere inválido para o envio). Dentro do
pacote, todo caminho relativo de HTML, MD ou CSS para um arquivo de assets/ que não viajou vira URL
absoluta do Pages (menção de pasta terminada em "/" fica como está).

Falha (código 1) se: ZIP > 30 MB, soma descompactada > 25 MB, mais de 400 arquivos, algum arquivo
> 10 MB, nome de arquivo fora de [A-Za-z0-9._/-], description > 1.024 caracteres ou com < >,
frontmatter com campo fora de name/description, SKILL.md com 500 linhas ou mais, name divergente
da pasta, SKILL.md ausente no topo, mais de um SKILL.md, link relativo de SKILL.md para arquivo
ausente no pacote, CSS de fonte do pacote apontando para woff2 que não viajou. Meta: ZIP abaixo de 10 MB.

Uso: python3 tools/empacotar_skill.py
"""
import io
import re
import sys
import zipfile
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
NOME = "branding-projeta-food"
PAGES = "https://rafaelnasch.github.io/branding-projeta-food/"
SAIDA = RAIZ / "dist-skill" / f"{NOME}.zip"
MB = 1024 * 1024
LIM_ZIP, LIM_SOMA, LIM_ARQ, LIM_N, META_ZIP = 30 * MB, 25 * MB, 10 * MB, 400, 10 * MB
RAIZ_ARQS = ["SKILL.md", "agents/openai.yaml", "brand-book.html", "deck-template.html",
             "relatorio-template.html", "kit-cliente.html", "lockup.html", "guia-de-uso.html",
             "pviz.js", "pforms.js", "autocontido.py", "exportar_pdf.py"]
NOME_OK = re.compile(r"^[A-Za-z0-9._/-]+$")


def lista():
    arqs = list(RAIZ_ARQS)
    refs = RAIZ / "references"
    if refs.is_dir():
        arqs += sorted(str(p.relative_to(RAIZ)) for p in refs.rglob("*.md"))
    b = RAIZ / "assets" / "brand"
    # marca: SVG, PNG web, marca.json e os PNG pequenos de uso direto (favicon, avatar, compartilhamento)
    for p in sorted(b.glob("*")):
        n = p.name
        if p.is_file() and (n.endswith((".svg", "-web.png", ".json"))
                            or n.startswith(("projeta-favicon", "projeta-avatar", "projeta-compartilhamento"))):
            arqs.append(str(p.relative_to(RAIZ)))
    a = RAIZ / "assets"
    for pasta, padrao in (("aplicacoes", "*-web.png"), ("fontes/google", "*.woff2"), ("fontes/google", "*.css"),
                          ("fontes/saira-larga-projeta", "*")):
        arqs += sorted(str(p.relative_to(RAIZ)) for p in (a / pasta).glob(padrao)
                       if p.is_file() and NOME_OK.match(str(p.relative_to(RAIZ))))
    # fontes comerciais da Projeta nunca viajam (licença própria)
    arqs = [x for x in arqs if not re.search(r"transducer|kallisto", x, re.I)]
    faltam = [x for x in arqs if not (RAIZ / x).is_file()]
    if faltam:
        sys.exit("arquivos esperados que não existem: " + ", ".join(faltam))
    return list(dict.fromkeys(arqs))


REF_ASSET = re.compile(r"(?<![\w/.:-])assets/[A-Za-z0-9_./%-]*")


def reescreve(texto, no_pacote):
    trocas = 0

    def troca(m):
        nonlocal trocas
        cam = m.group(0)
        limpo = cam.rstrip(".,")
        if limpo.endswith("/"):
            return cam  # menção de pasta no texto, não link
        if limpo in no_pacote or any(x.startswith(limpo) for x in no_pacote):
            return cam  # arquivo do pacote, ou prefixo montado por código (assets/brand/projeta-reduzida-)
        trocas += 1
        return PAGES + cam
    return REF_ASSET.sub(troca, texto), trocas


def monta(arqs):
    conteudo, trocas = {}, {}
    for x in arqs:
        b = (RAIZ / x).read_bytes()
        if x.endswith((".html", ".md", ".css")):
            t, n = reescreve(b.decode("utf-8"), set(arqs))
            b, trocas[x] = t.encode("utf-8"), n
        conteudo[x] = b
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as z:
        for x, b in conteudo.items():
            info = zipfile.ZipInfo(f"{NOME}/{x}", date_time=(2026, 10, 7, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o644 << 16
            z.writestr(info, b, compresslevel=9)
    return buf.getvalue(), conteudo, trocas


def confere(zip_bytes, conteudo):
    erros = []
    soma = sum(len(b) for b in conteudo.values())
    if len(zip_bytes) > LIM_ZIP:
        erros.append(f"ZIP com {len(zip_bytes)/MB:.2f} MB (limite 30 MB)")
    if soma > LIM_SOMA:
        erros.append(f"descompactado com {soma/MB:.2f} MB (limite 25 MB)")
    if len(conteudo) > LIM_N:
        erros.append(f"{len(conteudo)} arquivos (limite 400)")
    for x, b in conteudo.items():
        if len(b) > LIM_ARQ:
            erros.append(f"{x} com {len(b)/MB:.2f} MB (limite 10 MB por arquivo)")
        if not NOME_OK.match(x):
            erros.append(f"nome de arquivo com caractere fora do padrão: {x}")
    with zipfile.ZipFile(io.BytesIO(zip_bytes)) as z:
        nomes = z.namelist()
    if {n.split("/")[0] for n in nomes} != {NOME}:
        erros.append("pasta de topo diferente de " + NOME)
    if [n for n in nomes if n.endswith("SKILL.md")] != [f"{NOME}/SKILL.md"]:
        erros.append("tem de haver um único SKILL.md, no topo da pasta")
    skill = conteudo["SKILL.md"].decode("utf-8")
    fm = re.match(r"^---\n(.*?)\n---\n", skill, re.S)
    if not fm:
        erros.append("SKILL.md sem frontmatter")
        return erros, soma, 0, 0
    campos = re.findall(r"^([A-Za-z_-]+):", fm.group(1), re.M)
    extras = [c for c in campos if c not in ("name", "description")]
    if extras:
        erros.append("campos fora da especificação no frontmatter: " + ", ".join(extras))
    m = re.search(r"^name:\s*(.+)$", fm.group(1), re.M)
    nome = m.group(1).strip().strip("\"'") if m else ""
    m = re.search(r"^description:\s*(.+)$", fm.group(1), re.M)
    desc = m.group(1).strip() if m else ""
    if desc[:1] in "\"'" and desc[-1:] == desc[:1]:
        desc = desc[1:-1]
    if nome != NOME or not re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", nome) or len(nome) > 64:
        erros.append(f"name '{nome}' inválido ou diferente da pasta")
    if not 1 <= len(desc) <= 1024:
        erros.append(f"description com {len(desc)} caracteres (limite 1.024)")
    if "<" in desc or ">" in desc:
        erros.append("description com < ou >")
    linhas = skill.count("\n") + (0 if skill.endswith("\n") else 1)
    if linhas >= 500:
        erros.append(f"SKILL.md com {linhas} linhas (limite: menos de 500)")
    for alvo in re.findall(r"\]\(([^)\s]+)\)", skill):
        if re.match(r"(https?:|mailto:|#)", alvo):
            continue
        if alvo.split("#")[0] not in conteudo:
            erros.append(f"SKILL.md: link relativo para arquivo ausente no pacote: {alvo}")
    woff = {x.rsplit("/", 1)[1] for x in conteudo if x.endswith(".woff2")}
    for x, b in conteudo.items():
        if x.startswith("assets/fontes/google/") and x.endswith(".css"):
            css = b.decode("utf-8")
            for bloco in re.findall(r"/\*\s*(latin(?:-ext)?)\s*\*/\s*@font-face\s*\{([^}]*)\}", css):
                m = re.search(r"url\(https://fonts\.gstatic\.com/[^)]*/([^/)]+)\)", bloco[1])
                if m and m.group(1) not in woff:
                    erros.append(f"{x}: woff2 {m.group(1)} ausente no pacote")
    return erros, soma, linhas, len(desc)


def main():
    arqs = lista()
    zip_bytes, conteudo, trocas = monta(arqs)
    erros, soma, linhas, ndesc = confere(zip_bytes, conteudo)
    SAIDA.parent.mkdir(exist_ok=True)
    SAIDA.write_bytes(zip_bytes)
    maior = max(conteudo.items(), key=lambda kv: len(kv[1]))
    print(f"pacote: {SAIDA.relative_to(RAIZ)}")
    print(f"ZIP {len(zip_bytes)/MB:.2f} MB · descompactado {soma/MB:.2f} MB · {len(conteudo)} arquivos · "
          f"maior {maior[0]} ({len(maior[1])/MB:.2f} MB)")
    print(f"SKILL.md {linhas} linhas · description {ndesc} caracteres")
    print("caminhos reescritos para o Pages: " + (", ".join(f"{k} {v}" for k, v in trocas.items() if v) or "nenhum"))
    if len(zip_bytes) >= META_ZIP:
        print("aviso: ZIP acima da meta de 10 MB")
    if erros:
        for e in erros:
            print("  FALHA:", e)
        sys.exit(1)
    print("limites atendidos")


if __name__ == "__main__":
    main()
