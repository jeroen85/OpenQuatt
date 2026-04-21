#!/usr/bin/env python3
from __future__ import annotations

from dataclasses import dataclass
from html import escape
from pathlib import Path, PurePosixPath
import json
import unicodedata
import posixpath
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


@dataclass(frozen=True)
class RenderedPage:
    page: Page
    lead: str
    body_html: str
    toc: list[tuple[int, str, str]]


PAGES = [
    Page(PurePosixPath("README.md"), PurePosixPath("index.html"), "OpenQuatt", "Project", "Projectoverzicht, snelle start en hoofdroute."),
    Page(PurePosixPath("docs/installatie-en-ingebruikname.md"), PurePosixPath("installatie-en-ingebruikname.html"), "Installatie en ingebruikname", "Docs", "Eerste installatie en controle na de eerste start."),
    Page(PurePosixPath("docs/verwarmen-en-koelen.md"), PurePosixPath("verwarmen-en-koelen.html"), "Verwarmen en koelen uitgelegd", "Uitleg", "Heldere uitleg van Power House, stooklijnregeling, koeling, Single en Duo."),
    Page(PurePosixPath("docs/power-house.md"), PurePosixPath("power-house.html"), "Power House", "Docs", "Uitleg van huismodel, comfortlogica en Single/Duo-gedrag."),
    Page(PurePosixPath("docs/water-temperature-control.md"), PurePosixPath("water-temperature-control.html"), "Water Temperature Control", "Docs", "Uitleg van stooklijn, PID en Single/Duo-gedrag in curve-modus."),
    Page(PurePosixPath("docs/dashboardoverzicht.md"), PurePosixPath("dashboardoverzicht.html"), "Dashboard gebruiken", "Handleiding", "Dagelijkse controle en diagnosevolgorde in Home Assistant."),
    Page(PurePosixPath("docs/dashboard/README.md"), PurePosixPath("dashboard/index.html"), "Dashboard installeren", "Docs", "Importeer het juiste dashboardbestand voor Single of Duo."),
    Page(PurePosixPath("docs/diagnose-en-afstelling.md"), PurePosixPath("diagnose-en-afstelling.html"), "Problemen oplossen en afstellen", "Handleiding", "Werkvolgorde bij klachten, onrustig gedrag en kleine aanpassingen."),
    Page(PurePosixPath("docs/regelgedrag-van-openquatt.md"), PurePosixPath("regelgedrag-van-openquatt.html"), "Regelgedrag van OpenQuatt", "Naslag", "Technische runtime-uitleg over systeemstanden, flowregeling en bronkeuze."),
    Page(PurePosixPath("docs/instellingen-en-meetwaarden.md"), PurePosixPath("instellingen-en-meetwaarden.html"), "Instellingen en meetwaarden", "Naslag", "Praktische naslag voor runtime- en compile-time instellingen."),
]

PAGE_BY_SOURCE = {page.source: page for page in PAGES}
SIDEBAR_GROUPS = [
    (
        "Aan de slag",
        "Van projectintro naar eerste werkende installatie.",
        [
            PurePosixPath("README.md"),
            PurePosixPath("docs/installatie-en-ingebruikname.md"),
        ],
    ),
    (
        "Dagelijks gebruik",
        "Begrijpen, volgen en rustig bijsturen.",
        [
            PurePosixPath("docs/verwarmen-en-koelen.md"),
            PurePosixPath("docs/dashboardoverzicht.md"),
            PurePosixPath("docs/diagnose-en-afstelling.md"),
        ],
    ),
    (
        "Verdieping",
        "Technische uitleg en aanvullende naslag wanneer je verder wilt kijken.",
        [
            PurePosixPath("docs/power-house.md"),
            PurePosixPath("docs/water-temperature-control.md"),
            PurePosixPath("docs/regelgedrag-van-openquatt.md"),
            PurePosixPath("docs/instellingen-en-meetwaarden.md"),
        ],
    ),
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
CALLOUT_VARIANTS = {
    "WARNING": "warning",
    "NOTE": "note",
    "TIP": "tip",
    "IMPORTANT": "important",
}


def slugify(text: str, seen: dict[str, int]) -> str:
    normalized = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    base = re.sub(r"[^a-z0-9]+", "-", normalized.lower()).strip("-") or "sectie"
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
    return posixpath.relpath(str(to_output), start=str(from_output.parent))


def rewrite_href(source: PurePosixPath, current_output: PurePosixPath, href: str) -> str:
    if not href or href.startswith(("#", "http://", "https://", "mailto:")):
        return href

    target, hash_part = (href.split("#", 1) + [""])[:2]
    target_path = PurePosixPath(target)
    source_dir = source.parent
    resolved = (source_dir / target_path).as_posix()
    normalized = PurePosixPath(posixpath.normpath(resolved))

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
        alt, linked_href = match.group(1), match.group(2)
        url = rewrite_href(source, current_output, linked_href)
        return stash(f'<img src="{escape(url, quote=True)}" alt="{escape(alt)}" />')

    def replace_link(match: re.Match[str]) -> str:
        label, linked_href = match.group(1), match.group(2)
        url = rewrite_href(source, current_output, linked_href)
        return stash(f'<a href="{escape(url, quote=True)}">{render_inline(label, source, current_output)}</a>')

    text = re.sub(r"`([^`]+)`", replace_code, text)
    text = re.sub(r"!\[([^\]]*)\]\(([^)]+)\)", replace_image, text)
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", replace_link, text)
    text = escape(text, quote=False)
    text = re.sub(r"\*\*([^*]+)\*\*", lambda match: f"<strong>{match.group(1)}</strong>", text)
    text = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", lambda match: f"<em>{match.group(1)}</em>", text)
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
                    variant = CALLOUT_VARIANTS.get(raw_label, "note")
                    body = [ln for ln in quote_lines[1:] if ln.strip()]
                    inner = "".join(f"<p>{render_inline(' '.join(body), self.source, self.output)}</p>") if body else ""
                    blocks.append(f'<div class="callout callout-{variant}"><span class="callout-title">{escape(label)}</span>{inner}</div>')
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


def github_source_url(page: Page) -> str:
    return f"{GITHUB_REPO_URL}/blob/main/{page.source.as_posix()}"


def build_sidebar(current_page: Page) -> str:
    groups_html = []
    for index, (label, _description, sources) in enumerate(SIDEBAR_GROUPS):
        expanded = current_page.source in sources or index == 0
        items = []
        for source in sources:
            linked_page = PAGE_BY_SOURCE[source]
            href = rel_url(current_page.output, linked_page.output)
            current = " current" if current_page.source == source else ""
            items.append(
                f"""
                <li>
                  <a class="sidebar-link{current}" href="{href}" data-sidebar-link>{escape(linked_page.label)}</a>
                </li>
                """
            )
        groups_html.append(
            f"""
            <section class="sidebar-section">
              <button class="sidebar-section-toggle" type="button" data-nav-toggle aria-expanded="{'true' if expanded else 'false'}" aria-controls="sidebar-group-{index}">
                <span class="sidebar-section-title">{escape(label)}</span>
                <span class="sidebar-section-chevron" aria-hidden="true"></span>
              </button>
              <div class="sidebar-section-panel" id="sidebar-group-{index}" data-nav-panel{' hidden' if not expanded else ''}>
                <ul class="nav-list">
                  {''.join(items)}
                </ul>
              </div>
            </section>
            """
        )
    return "".join(groups_html)


def build_toc(toc: list[tuple[int, str, str]]) -> str:
    if not toc:
        return """
        <div class="page-rail-inner">
          <p class="page-rail-title">Op deze pagina</p>
          <p class="page-rail-empty">Geen subsecties op deze pagina.</p>
        </div>
        """

    items = []
    for level, label, anchor in toc:
        indent_class = " toc-link-sub" if level == 3 else ""
        items.append(f'<li><a class="toc-link{indent_class}" href="#{anchor}" data-toc-link>{escape(label)}</a></li>')
    return f"""
    <div class="page-rail-inner">
      <p class="page-rail-title">Op deze pagina</p>
      <nav aria-label="Inhoudsopgave">
        <ul class="toc-list">
          {''.join(items)}
        </ul>
      </nav>
    </div>
    """


def render_template(rendered_page: RenderedPage, rendered_pages: list[RenderedPage]) -> str:
    page = rendered_page.page
    asset_prefix = "./" if page.output.parent == PurePosixPath(".") else "../"
    install_href = rel_url(page.output, PurePosixPath("install/index.html"))


    lead_html = f'<p class="doc-lead">{rendered_page.lead}</p>' if rendered_page.lead else ""

    return f"""<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{escape(page.label)} | OpenQuatt</title>
    <meta name="description" content="{escape(page.summary)}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="{asset_prefix}site.css" />
    <script defer src="{asset_prefix}site.js"></script>
  </head>
  <body>
    <header class="site-header">
      <div class="site-header-inner">
        <div class="site-header-start">
          <button class="menu-toggle" type="button" data-sidebar-toggle aria-controls="docs-sidebar" aria-expanded="false">
            <span class="menu-toggle-bar"></span>
            <span class="menu-toggle-bar"></span>
            <span class="menu-toggle-bar"></span>
            <span class="sr-only">Open navigatie</span>
          </button>

          <a class="site-brand" href="{rel_url(page.output, PurePosixPath('index.html'))}">
            <img class="site-brand-logo" src="{asset_prefix}assets/openquatt_logo.svg" alt="OpenQuatt" width="118" height="40" />
          </a>
        </div>

        <div class="site-header-actions">
          <a class="header-link" href="{GITHUB_REPO_URL}">GitHub</a>
        </div>
      </div>
    </header>

    <div class="docs-shell">
      <div class="sidebar-backdrop" data-sidebar-backdrop></div>

      <aside class="docs-sidebar" id="docs-sidebar" data-sidebar>
        <div class="sidebar-inner">
          <section class="sidebar-overview">
            <p class="sidebar-kicker">OpenQuatt Docs</p>
            <p class="sidebar-copy">Een korte route voor installeren, begrijpen en rustig bijsturen.</p>
            <a class="sidebar-utility" href="{install_href}">Open webinstaller</a>
          </section>
          {build_sidebar(page)}
        </div>
      </aside>

      <main class="docs-main">
        <section class="doc-header">
          <p class="doc-kicker">{escape(page.kind)}</p>
          <h1>{escape(page.label)}</h1>
          {lead_html}

        </section>

        <article class="doc-content prose">
          {rendered_page.body_html}
        </article>


      </main>

      <aside class="page-rail">
        {build_toc(rendered_page.toc)}
      </aside>
    </div>


  </body>
</html>
"""


def build_site(site_dir: Path) -> None:
    rendered_pages: list[RenderedPage] = []
    for page in PAGES:
        renderer = MarkdownRenderer(page.source, page.output)
        text = (REPO_ROOT / page.source).read_text(encoding="utf-8")
        lead, body = renderer.render(text)
        rendered_pages.append(RenderedPage(page, lead, body, list(renderer.toc)))

    for rendered_page in rendered_pages:
        html = render_template(rendered_page, rendered_pages)
        output_path = site_dir / rendered_page.page.output
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
