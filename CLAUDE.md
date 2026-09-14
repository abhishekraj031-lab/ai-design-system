# AI Design System

## Stack

Vite 5 · React 18 · TypeScript 5 · Tailwind CSS 3 · shadcn/ui · CVA · lucide-react

## Folder Layout

```
AI Design System/
├── src/
│   ├── components/ui/     ← shadcn primitives (auto-installed by CLI or skill)
│   ├── lib/utils.ts       ← cn() helper
│   ├── index.css          ← CSS variable definitions (light + dark)
│   └── App.tsx            ← component gallery / dev showcase
├── components/            ← DS components built by the AI skills
│   └── {ComponentName}/
│       ├── {ComponentName}.tsx
│       └── index.ts
├── tokens/
│   ├── token-structure.md ← 3-tier token hierarchy docs
│   └── tokens.json        ← hex → semantic token mapping
├── references/
│   └── best-practices.md  ← team conventions (HTML semantics, CVA pattern, etc.)
├── skills/
│   ├── ds-team.md         ← orchestrator — the only skill the user invokes
│   ├── component-god.md   ← reads Figma, writes CVA component draft
│   └── token-police.md    ← audits + corrects all colour classes
└── cache/                 ← one .md per built component (token decisions, audit log)
```

## Building a Component (the AI workflow)

Tell ds-team a Figma link:
> "ds-team: build this component — https://figma.com/..."

ds-team orchestrates the full pipeline:
1. **Component God** reads the Figma design, extracts variants, writes the draft `.tsx`
2. **Token Police** audits every colour class and upgrades raw hex → semantic tokens
3. **ds-team** writes `cache/{ComponentName}.md` with the full audit log

## Path Aliases

| Alias | Resolves to |
|-------|-------------|
| `@/lib/utils` | `src/lib/utils.ts` |
| `@/components/ui` | `src/components/ui/` |

DS components at `components/{ComponentName}/` import `@/lib/utils` using the `@/` alias.

## Install / Dev

```bash
npm install        # first time, or after pulling new deps
npm run dev        # dev server at http://localhost:5173
npm run build      # type-check + production bundle
```

## Adding a New shadcn Primitive

```bash
npx shadcn@latest add <component>
# installs to src/components/ui/
```

## Token System

All component colour classes must use Tier 2 semantic tokens — never raw hex or Tailwind palette colours.
See `tokens/token-structure.md` for the full 3-tier hierarchy.
See `tokens/tokens.json` for the hex → semantic mapping table.
