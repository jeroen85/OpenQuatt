#!/usr/bin/env python3
from __future__ import annotations

from dataclasses import dataclass
from html import escape
from pathlib import Path, PurePosixPath
import os
import re
import sys


REPO_ROOT = Path(__file__).resolve().parent.parent
GITHUB_REPO_URL = "https://github.com/jeroen85/OpenQuatt"


@dataclass(frozen=True)
class Page:
    source: PurePosixPath
    output: PurePosixPath
    label: str
    kind: str
    summary: str


PAGES = [
    Page(PurePosixPath("README.md"), PurePosixPath("index.html"), "OpenQuatt", "Project", "Projectoverzicht, snelle start en hoofdroute."),
    Page(PurePosixPath("docs/README.md"), PurePosixPath("documentatie.html"), "Documentatie", "Docs", "Hoofdingang voor alle handleidingen en naslag."),
    Page(PurePosixPath("docs/installatie-en-eerste-start.md"), PurePosixPath("installatie-en-eerste-start.html"), "Installatie en eerste start", "Docs", "Eerste installatie, lokaal bouwen en basiscontrole."),
    Page(PurePosixPath("docs/hoe-openquatt-werkt.md"), PurePosixPath("hoe-openquatt-werkt.html"), "Hoe OpenQuatt werkt", "Docs", "Rolverdeling tussen thermostaat, OpenQuatt, warmtepomp en Home Assistant."),
    Page(PurePosixPath("docs/dashboard-uitleg.md"), PurePosixPath("dashboard-uitleg.html"), "Dashboard uitleg", "Docs", "Wat je ziet in Home Assistant en waar je eerst moet kijken."),
    Page(PurePosixPath("docs/dashboard/README.md"), PurePosixPath("dashboard/index.html"), "Dashboard installeren", "Docs", "Importeer het juiste dashboardbestand voor Single of Duo."),
    Page(PurePosixPath("docs/problemen-oplossen-en-afstellen.md"), PurePosixPath("problemen-oplossen-en-afstellen.html"), "Problemen oplossen en afstellen", "Docs", "Veilige volgorde bij klachten, onrustig gedrag en tuning."),
    Page(PurePosixPath("docs/technische-uitleg-standen-en-flow.md"), PurePosixPath("technische-uitleg-standen-en-flow.html"), "Technische uitleg over standen en flow", "Naslag", "Technische runtime-uitleg over modes, flow en bronkeuze."),
    Page(PurePosixPath("docs/instellingen-en-meetwaarden.md"), PurePosixPath("instellingen-en-meetwaarden.html"), "Instellingen en meetwaarden", "Naslag", "Praktische naslag voor runtime- en compile-time instellingen."),
]

PAGE_BY_SOURCE = {page.source: page for page in PAGES}
PRIMARY_NAV = [
    ("Start", PurePosixPath("index.html")),
    ("Documentatie", PurePosixPath("documentatie.html")),
    ("Installatie", PurePosixPath("installatie-en-eerste-start.html")),
    ("Dashboard", PurePosixPath("dashboard-uitleg.html")),
    ("Problemen oplossen", PurePosixPath("problemen-oplossen-en-afstellen.html")),
    ("Installatiehulp", PurePosixPath("install/index.html")),
]

DOC_NAV = [
    page
    for page in PAGES
    if page.output != PurePosixPath("index.html")
]

HEADING_RE = re.compile(r"^(#{1,6})\s+(.*)$")
FENCE_RE = re.compile(r"^```([A-Za-z0-9_+-]*)\s*$")
TABLE_ALIGN_RE = re.compile(r"^\|\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$")
UL_RE = re.compile(r"^(\s*)[-*]\s+(.*)$")
OL_RE = re.compile(r"^(\s*)(\d+)\.\s+(.*)$")
CALLOUT_LABELS = {
    "WARNING": "Waarschuwing",
    "NOTE": "Let op",
    "TIP": "Tip",
    "IMPORTANT": "Belangrijk",
}


def slugify(text: str, seen: dict[str, int]) -> str:
    base = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-") or "sectie"
    count = seen.get(base, 0) + 1
    seen[base] = count
    return base if count == 1 else f"{base}-{count}"


def strip_markdown(text: str) -> str:
    text = re.sub(r"`([^`]+)`", r"\1", text)
    text = re.sub(r"!\[([^\]]*)\]\(([^)]+)\)", r"\1", text)
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r"\1", text)
    text = text.replace("**", "").replace("*", "")
    return text.strip()


def rel_url(from_output: PurePosixPath, to_output: PurePosixPath) -> str:
    rel = os.path.relpath(str(to_output), start=str(from_output.parent))
    return rel.replace(os.sep, "/")


def rewrite_href(source: PurePosixPath, current_output: PurePosixPath, href: str) -> str:
    if not href or href.startswith(("#", "http://", "https://", "mailto:")):
        return href

    target, hash_part = (href.split("#", 1) + [""])[:2]
    target_path = PurePosixPath(target)
    source_dir = source.parent
    resolved = (source_dir / target_path).as_posix()
    normalized = PurePosixPath(os.path.normpath(resolved))

    site_target: PurePosixPath
    if normalized in PAGE_BY_SOURCE:
        site_target = PAGE_BY_SOURCE[normalized].output
    elif normalized.parts and normalized.parts[0] == "docs":
        site_target = PurePosixPath(*normalized.parts[1:])
    else:
        return href

    url = rel_url(current_output, site_target)
    if hash_part:
        url = f"{url}#{hash_part}"
    return url


def render_inline(text: str, source: PurePosixPath, current_output: PurePosixPath) -> str:
    tokens: dict[str, str] = {}
    token_counter = 0

    def stash(rendered: str) -> str:
        nonlocal token_counter
        key = f"@@TOKEN{token_counter}@@"
        token_counter += 1
        tokens[key] = rendered
        return key

    def replace_code(match: re.Match[str]) -> str:
        return stash(f"<code>{escape(match.group(1))}</code>")

    def replace_image(match: re.Match[str]) -> str:
        alt, href = match.group(1), match.group(2)
        url = rewrite_href(source, current_output, href)
        return stash(f'<img src="{escape(url, quote=True)}" alt="{escape(alt)}" />')

    def replace_link(match: re.Match[str]) -> str:
        label, href = match.group(1), match.group(2)
        url = rewrite_href(source, current_output, href)
        return stash(f'<a href="{escape(url, quote=True)}">{render_inline(label, source, current_output)}</a>')

    text = re.sub(r"`([^`]+)`", replace_code, text)
    text = re.sub(r"!\[([^\]]*)\]\(([^)]+)\)", replace_image, text)
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", replace_link, text)
    text = escape(text, quote=False)
    text = re.sub(r"\*\*([^*]+)\*\*", lambda m: f"<strong>{m.group(1)}</strong>", text)
    text = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", lambda m: f"<em>{m.group(1)}</em>", text)
    for key, value in tokens.items():
        text = text.replace(key, value)
    return text


def strip_list_indent(lines: list[str], indent: int) -> list[str]:
    stripped = []
    prefix = " " * indent
    for line in lines:
        stripped.append(line[len(prefix):] if line.startswith(prefix) else line.lstrip())
    return stripped


class MarkdownRenderer:
    def __init__(self, source: PurePosixPath, output: PurePosixPath) -> None:
        self.source = source
        self.output = output
        self.heading_ids: dict[str, int] = {}
        self.toc: list[tuple[int, str, str]] = []

    def render(self, text: str) -> tuple[str, str]:
        lines = text.splitlines()
        lead = ""
        if lines and lines[0].startswith("# "):
            lines = lines[1:]
        while lines and not lines[0].strip():
            lines = lines[1:]
        if lines and lines[0].lstrip().startswith("<img"):
            while lines and lines[0].strip():
                lines = lines[1:]
            while lines and not lines[0].strip():
                lines = lines[1:]
        if lines:
            para, consumed = self._extract_first_paragraph(lines)
            if para:
                lead = render_inline(" ".join(para), self.source, self.output)
                lines = lines[consumed:]
                while lines and not lines[0].strip():
                    lines = lines[1:]
        html = self._render_blocks(lines)
        return lead, html

    def _extract_first_paragraph(self, lines: list[str]) -> tuple[list[str], int]:
        collected: list[str] = []
        idx = 0
        while idx < len(lines):
            line = lines[idx]
            if not line.strip():
                break
            if any(
                (
                    HEADING_RE.match(line),
                    FENCE_RE.match(line),
                    UL_RE.match(line),
                    OL_RE.match(line),
                    line.lstrip().startswith(">"),
                    line.lstrip().startswith("|"),
                    line.lstrip().startswith("<"),
                )
            ):
                return [], 0
            collected.append(line.strip())
            idx += 1
        return collected, idx

    def _render_blocks(self, lines: list[str]) -> str:
        blocks: list[str] = []
        idx = 0
        while idx < len(lines):
            line = lines[idx]
            if not line.strip():
                idx += 1
                continue
            if line.lstrip().startswith("<"):
                idx += 1
                continue
            fence = FENCE_RE.match(line)
            if fence:
                lang = fence.group(1)
                idx += 1
                code_lines: list[str] = []
                while idx < len(lines) and not FENCE_RE.match(lines[idx]):
                    code_lines.append(lines[idx])
                    idx += 1
                if idx < len(lines):
                    idx += 1
                class_attr = f' class="language-{escape(lang, quote=True)}"' if lang else ""
                blocks.append(f"<pre><code{class_attr}>{escape(chr(10).join(code_lines))}</code></pre>")
                continue
            heading = HEADING_RE.match(line)
            if heading:
                level = len(heading.group(1))
                text = strip_markdown(heading.group(2))
                anchor = slugify(text, self.heading_ids)
                if level in (2, 3):
                    self.toc.append((level, text, anchor))
                blocks.append(f"<h{level} id=\"{anchor}\">{render_inline(heading.group(2), self.source, self.output)}</h{level}>")
                idx += 1
                continue
            if idx + 1 < len(lines) and line.lstrip().startswith("|") and TABLE_ALIGN_RE.match(lines[idx + 1]):
                rows = [row for row in line.split("|")[1:-1]]
                idx += 2
                body_rows: list[list[str]] = []
                while idx < len(lines) and lines[idx].lstrip().startswith("|"):
                    body_rows.append([cell for cell in lines[idx].split("|")[1:-1]])
                    idx += 1
                header_html = "".join(f"<th>{render_inline(cell.strip(), self.source, self.output)}</th>" for cell in rows)
                body_html = []
                for body_row in body_rows:
                    row_html = "".join(f"<td>{render_inline(cell.strip(), self.source, self.output)}</td>" for cell in body_row)
                    body_html.append(f"<tr>{row_html}</tr>")
                blocks.append(f"<table><thead><tr>{header_html}</tr></thead><tbody>{''.join(body_html)}</tbody></table>")
                continue
            if line.lstrip().startswith(">"):
                quote_lines: list[str] = []
                while idx < len(lines) and lines[idx].lstrip().startswith(">"):
                    quote_lines.append(lines[idx].lstrip()[1:].lstrip())
                    idx += 1
                if quote_lines and re.fullmatch(r"\[![A-Z]+\]", quote_lines[0]):
                    raw_label = quote_lines[0][2:-1]
                    label = CALLOUT_LABELS.get(raw_label, raw_label.title())
                    body = [ln for ln in quote_lines[1:] if ln.strip()]
                    inner = "".join(f"<p>{render_inline(' '.join(body), self.source, self.output)}</p>") if body else ""
                    blocks.append(f'<div class="callout"><span class="callout-title">{escape(label)}</span>{inner}</div>')
                else:
                    inner = self._render_blocks(quote_lines)
                    blocks.append(f"<blockquote>{inner}</blockquote>")
                continue
            if UL_RE.match(line) or OL_RE.match(line):
                list_html, idx = self._render_list(lines, idx)
                blocks.append(list_html)
                continue
            para_lines = [line.strip()]
            idx += 1
            while idx < len(lines):
                next_line = lines[idx]
                if not next_line.strip():
                    break
                if any(
                    (
                        HEADING_RE.match(next_line),
                        FENCE_RE.match(next_line),
                        UL_RE.match(next_line),
                        OL_RE.match(next_line),
                        next_line.lstrip().startswith(">"),
                        next_line.lstrip().startswith("|"),
                        next_line.lstrip().startswith("<"),
                    )
                ):
                    break
                para_lines.append(next_line.strip())
                idx += 1
            blocks.append(f"<p>{render_inline(' '.join(para_lines), self.source, self.output)}</p>")
        return "\n".join(blocks)

    def _render_list(self, lines: list[str], start: int) -> tuple[str, int]:
        ordered = bool(OL_RE.match(lines[start]))
        match = OL_RE.match(lines[start]) if ordered else UL_RE.match(lines[start])
        assert match
        base_indent = len(match.group(1))
        tag = "ol" if ordered else "ul"
        items: list[str] = []
        idx = start
        while idx < len(lines):
            current = lines[idx]
            current_match = OL_RE.match(current) if ordered else UL_RE.match(current)
            if not current_match:
                break
            indent = len(current_match.group(1))
            if indent != base_indent:
                break
            first_text = current_match.group(3) if ordered else current_match.group(2)
            idx += 1
            child_lines: list[str] = []
            while idx < len(lines):
                upcoming = lines[idx]
                if not upcoming.strip():
                    lookahead = idx + 1
                    while lookahead < len(lines) and not lines[lookahead].strip():
                        lookahead += 1
                    if lookahead >= len(lines):
                        idx = lookahead
                        break
                    upcoming = lines[lookahead]
                    next_ol = OL_RE.match(upcoming)
                    next_ul = UL_RE.match(upcoming)
                    next_indent = len(next_ol.group(1)) if next_ol else len(next_ul.group(1)) if next_ul else None
                    plain_indent = len(upcoming) - len(upcoming.lstrip(" "))
                    if next_indent is not None and next_indent <= base_indent:
                        idx = lookahead
                        break
                    if next_indent is None and plain_indent <= base_indent:
                        idx = lookahead
                        break
                    child_lines.append("")
                    idx += 1
                    continue
                next_ol = OL_RE.match(upcoming)
                next_ul = UL_RE.match(upcoming)
                next_indent = len(next_ol.group(1)) if next_ol else len(next_ul.group(1)) if next_ul else None
                if next_indent is not None and next_indent == base_indent:
                    break
                if next_indent is not None and next_indent < base_indent:
                    break
                plain_indent = len(upcoming) - len(upcoming.lstrip(" "))
                if next_indent is None and plain_indent <= base_indent:
                    break
                child_lines.append(upcoming)
                idx += 1
            item_parts = [f"<p>{render_inline(first_text.strip(), self.source, self.output)}</p>"]
            if child_lines:
                nested = self._render_blocks(strip_list_indent(child_lines, base_indent + 2))
                if nested:
                    item_parts.append(nested)
            items.append(f"<li>{''.join(item_parts)}</li>")
        return f"<{tag}>{''.join(items)}</{tag}>", idx


def render_template(page: Page, lead: str, body_html: str, toc: list[tuple[int, str, str]]) -> str:
    asset_prefix = "./" if page.output.parent == PurePosixPath(".") else "../"
    nav_links = []
    for label, target in PRIMARY_NAV:
        href = rel_url(page.output, target)
        active = " active" if page.output == target else ""
        nav_links.append(f'<a class="{active.strip()}" href="{href}">{escape(label)}</a>')

    sidebar_pages = []
    for doc_page in DOC_NAV:
        href = rel_url(page.output, doc_page.output)
        sidebar_pages.append(
            f"<li><a href=\"{href}\">{escape(doc_page.label)}</a><small>{escape(doc_page.summary)}</small></li>"
        )

    toc_html = ""
    if toc:
        toc_items = []
        for level, label, anchor in toc:
            indent = " style=\"padding-left: 14px;\"" if level == 3 else ""
            toc_items.append(f"<li{indent}><a href=\"#{anchor}\">{escape(label)}</a></li>")
        toc_html = f"""
        <section class="card sidebar-card">
          <p class="eyebrow">Inhoud</p>
          <h2>Op deze pagina</h2>
          <ul class="toc-list">
            {''.join(toc_items)}
          </ul>
        </section>
        """

    lead_html = f'<p class="hero-lead">{lead}</p>' if lead else ""
    return f"""<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{escape(page.label)} | OpenQuatt</title>
    <meta name="description" content="{escape(page.summary)}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="{asset_prefix}site.css" />
  </head>
  <body>
    <div class="backdrop backdrop-left"></div>
    <div class="backdrop backdrop-right"></div>
    <main class="page-shell">
      <nav class="site-nav">
        <a class="site-nav-brand" href="{rel_url(page.output, PurePosixPath('index.html'))}">
          <img class="site-nav-logo" src="{asset_prefix}assets/openquatt_logo.svg" alt="OpenQuatt" />
          <span class="site-nav-title">
            <strong>OpenQuatt</strong>
            <span>Documentatie en installatiehulp</span>
          </span>
        </a>
        <div class="site-nav-links">
          {''.join(nav_links)}
          <a href="{GITHUB_REPO_URL}">GitHub</a>
        </div>
      </nav>

      <section class="hero card">
        <p class="eyebrow">OpenQuatt / {escape(page.kind)}</p>
        <div class="hero-grid">
          <div>
            <h1>{escape(page.label)}</h1>
            {lead_html}
            <div class="hero-pills">
              <a href="{rel_url(page.output, PurePosixPath('install/index.html'))}">Naar installatiehulp</a>
              <a href="{rel_url(page.output, PurePosixPath('documentatie.html'))}">Naar documentatie-overzicht</a>
            </div>
          </div>
          <aside class="hero-side">
            <p>{escape(page.summary)}</p>
            <p>Deze pagina wordt tijdens de GitHub Pages-build gegenereerd uit de Markdown in de repository.</p>
          </aside>
        </div>
      </section>

      <section class="layout">
        <article class="card content-card">
          <div class="prose">
            {body_html}
          </div>
        </article>
        <aside class="sidebar-stack">
          {toc_html}
          <section class="card sidebar-card">
            <p class="eyebrow">Snelle links</p>
            <h2>Belangrijkste pagina's</h2>
            <ul class="page-list">
              {''.join(sidebar_pages)}
            </ul>
          </section>
        </aside>
      </section>

      <footer class="card site-footer">
        <p>
          Liever direct flashen? Gebruik de <a href="{rel_url(page.output, PurePosixPath('install/index.html'))}">webinstallatiehulp</a>.
          Wil je de broncode zien of een issue openen, ga dan naar <a href="{GITHUB_REPO_URL}">GitHub</a>.
        </p>
      </footer>
    </main>
  </body>
</html>
"""


def build_site(site_dir: Path) -> None:
    for page in PAGES:
        renderer = MarkdownRenderer(page.source, page.output)
        text = (REPO_ROOT / page.source).read_text(encoding="utf-8")
        lead, body = renderer.render(text)
        html = render_template(page, lead, body, renderer.toc)
        output_path = site_dir / page.output
        output_path.parent.mkdir(parents=True, exist_ok=True)
        output_path.write_text(html, encoding="utf-8")


def main(argv: list[str]) -> int:
    if len(argv) != 2:
        print("Usage: build_pages_docs.py <site-dir>", file=sys.stderr)
        return 64
    site_dir = Path(argv[1]).resolve()
    if not site_dir.exists():
        print(f"Site directory does not exist: {site_dir}", file=sys.stderr)
        return 65
    build_site(site_dir)
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
