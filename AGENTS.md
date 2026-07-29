# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **static HTML design-system documentation site** with no package manager, build step, or backend. All pages are self-contained HTML files served directly over HTTP.

### Services

| Service | Required | How to run |
|---------|----------|------------|
| Static HTTP server | Yes | `python3 -m http.server 8080` from repo root |

There is no database, API server, Docker Compose, or environment file.

### Entry points

- **AI Design System:** http://localhost:8080/index.html
- **Pulse variant:** http://localhost:8080/showcase.html
- **Foundations:** http://localhost:8080/foundations.html
- **Components:** http://localhost:8080/components.html
- **Patterns:** http://localhost:8080/patterns.html (placeholder only)

### Lint / test / build

No lint, test, or build commands are defined in this repo. Verification is manual: start the static server and confirm all five HTML pages return HTTP 200.

### Optional external dependencies

For full visual fidelity, outbound HTTPS to these CDNs is helpful but not required for basic navigation:

- Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) — Poppins typeface
- unpkg (`unpkg.com`) — Lucide icons on the Foundations icons section
- pravatar.cc — sample avatar images on the Components page

### Dark mode

Toggle via the moon/sun button in the nav. Theme is persisted in `localStorage` under the key `ds-dark` and applies across pages.

### Gotchas

- `foundations.html` uses "AI Design System" branding while `components.html` and `patterns.html` use "Pulse" branding — this is a known inconsistency in the source, not an environment issue.
- Patterns page is intentionally a "coming soon" placeholder.
