#!/usr/bin/env python3
"""Exporta um HTML da skill Projeta Food em PDF A4, na pasta dist/.

Uso, na pasta da skill (precisa de Playwright com Chromium):
  python3 exportar_pdf.py                     # brand-book.html -> dist/brand-book-projeta-food.pdf
  python3 exportar_pdf.py lockup.html         # -> dist/codigo-da-marca-projeta-food.pdf
  python3 exportar_pdf.py dist/x.html         # qualquer HTML (o autocontido também serve)

O PDF usa a folha de impressão do próprio arquivo (A4, seção em página nova, botões,
barra e camadas de grade escondidos, cores exatas).
"""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

PASTA = Path(__file__).resolve().parent
NOMES = {"brand-book.html": "brand-book-projeta-food.pdf",
         "deck-template.html": "apresentacao-projeta-food.pdf",
         "lockup.html": "codigo-da-marca-projeta-food.pdf",
         "guia-de-uso.html": "guia-de-uso-projeta-food.pdf",
         "relatorio-template.html": "relatorio-mensal-projeta-food.pdf"}

nome = sys.argv[1] if len(sys.argv) > 1 else "brand-book.html"
arquivo = Path(nome) if Path(nome).is_absolute() else PASTA / nome
if not arquivo.is_file():
    sys.exit("arquivo não existe: %s" % arquivo)
saida = PASTA / "dist" / NOMES.get(arquivo.name, arquivo.with_suffix(".pdf").name)
saida.parent.mkdir(exist_ok=True)

with sync_playwright() as p:
    nav = p.chromium.launch()
    pag = nav.new_page(viewport={"width": 1200, "height": 900})
    pag.goto(arquivo.as_uri(), wait_until="networkidle")
    # entrada suave desligada e fotos de carregamento tardio carregadas já
    pag.evaluate("""() => {
      document.querySelectorAll('.reveal').forEach(e => e.classList.add('in'));
      document.querySelectorAll('img[loading=lazy]').forEach(i => { i.loading = 'eager'; });
      // link relativo para arquivo (ex.: baixar o PNG da marca) não funciona dentro do PDF e
      // viraria file:///caminho/do/computador: no PDF ele fica como texto, sem link.
      document.querySelectorAll('a[href]').forEach(a => {
        if (a.href.startsWith('file:') && !a.getAttribute('href').startsWith('#')) a.removeAttribute('href');
      });
    }""")
    pag.wait_for_function("Array.from(document.images).every(i => i.complete)", timeout=60000)
    # fontes e gráficos montados na página
    pag.evaluate("document.fonts.ready.then(() => true)")
    pag.wait_for_timeout(1500)
    # print_background=True é obrigatório: sem ele, o Noite e a Ignição somem.
    # prefer_css_page_size=True respeita a página A4 e as margens do próprio arquivo.
    pag.emulate_media(media="print")
    pag.pdf(path=str(saida), print_background=True, prefer_css_page_size=True)
    nav.close()
# Trava de publicação: o repositório é público. Um href relativo que não existe (ex.: um
# espaço reservado "[link ...]") vira file:///caminho/do/computador no PDF e expõe a pasta
# local. Se aparecer qualquer file:// nos bytes do PDF, ele é apagado e o script falha.
if b"file://" in saida.read_bytes():
    saida.unlink()
    sys.exit("ERRO: o PDF continha link file:// (caminho local do computador) e foi apagado. "
             "Troque o href relativo inexistente por href=\"#\" data-link=\"[...]\" e exporte de novo.")
print("PDF gravado em", saida)
