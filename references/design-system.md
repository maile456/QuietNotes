# Bear-Inspired Design System

## Reference Signature

Reference: [Bear](https://bear.app/). Source HTML/CSS and its product scene were inspected on 2026-10-29. This is a composition reference, not a claim of pixel-identical reproduction. Use original branding, copy, product content, and licensed assets.

- White `#fff`, muted band `#F3F5F7`, body `#444`, secondary gray, coral `#DD4C4F`.
- Rounded humanist **sans-serif** titles and body. The official custom fonts are not bundled; use system sans or a licensed local font. Do not substitute an editorial serif theme.
- A roughly 960px content container with 32px desktop gutters and a 64px fixed header. Navigation is plain text, restrained, and separated by generous whitespace.
- Centered product heading around 51px, secondary line around 24px. Device selection is around 24px with a loose colored underline; a single coral call to action sits below.
- Main product window is the dominant visual: charcoal sidebar about 17%, note list about 27%, editor about 56%. It has a delicate edge and deep soft shadow, not a thick decorative frame.
- Lower features alternate roughly 39% copy and 59% visual, separated by large section gaps, up to 160px. Feature headings stay near 34–40px. Small blue, violet, and coral details distinguish content without tinting the whole page.

## Product Homepage Mode

Use `docs/index.html` as the composition starting point, not `docs/workspace/index.html`. Keep product identity and product preview in the first viewport. Match reference hierarchy before adding further sections. Include realistic note titles, a selected row, image content, tags, and editor text. The preview must still look like a coherent app when interactive.

Device tabs change the preview layout, not the whole site's media breakpoint. Desktop shows three panes; tablet can omit the sidebar; phone shows the note. Keep the same content across devices, stable scene height, and working arrow-key tab selection. Do not imply a downloadable native application when the sample only opens a browser workspace.

Use actual features, themes, and clear page sections. Avoid card grids for major bands. If a feature visual is framed, it is a product tool or document, not a card wrapping another card layout.

## Blog And Reading Mode

Preserve the same white-gray/coral/sans identity while prioritizing article content. Use a flat date/title/excerpt index, optional modest author introduction, a 42rem-or-smaller reading column, and small category labels. Default body 16–17px, line-height 1.8–1.9 for Chinese prose. A compact reader heading should not adopt homepage hero dimensions. Quotes use a thin line, not colored floating cards.

Only include search, table of contents, bookmarks, and theme switching when the project needs them. Keep article content truthful; demo content must not be presented as the user's biography or publications.

## Responsive And Interaction Checks

- 1440/768/390/360px: no horizontal page overflow, lost labels, clipped dialog controls, or unreadable sidebar text. Narrow layouts may reduce panes rather than shrink text indefinitely.
- No continuously viewport-scaled type, negative tracking, excessive border radius, or all-beige/dark-slate page palette.
- Each label is associated with its input. Search offers an empty state. New-note actions validate and persist only where implemented. Storage failures are reported without crashing.
- Device tabs expose `role=tab`, selected state, controlled panel, and keyboard focus. Dialogs close on Escape and return focus. Show visible keyboard focus and honor reduced-motion preferences.
- Verify product images load and retain a deliberate crop; inspect the homepage and workspace separately.
