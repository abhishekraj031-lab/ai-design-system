# Best Practices — AI Design System

## Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18 | UI runtime |
| TypeScript | 5 | Type safety |
| Vite | 5 | Dev server + bundler |
| Tailwind CSS | 3 | Utility-first styling |
| class-variance-authority (CVA) | 0.7 | Variant management |
| clsx + tailwind-merge | latest | Class merging via `cn()` |
| shadcn/ui | Default theme | Base component primitives |
| lucide-react | latest | Icon set |

---

## File & Folder Conventions

```
AI Design System/
├── src/
│   ├── components/
│   │   └── ui/               ← shadcn primitives go here (@/components/ui)
│   ├── lib/
│   │   └── utils.ts          ← cn() lives here
│   ├── index.css             ← Tailwind directives + CSS variable definitions
│   ├── main.tsx
│   └── App.tsx               ← component gallery / dev showcase
├── components/               ← DS components built by the AI skills (NOT inside src/)
│   └── {ComponentName}/
│       ├── {ComponentName}.tsx
│       └── index.ts
├── tokens/
│   ├── token-structure.md
│   └── tokens.json
├── references/
│   └── best-practices.md     ← this file
├── cache/                    ← one .md per built component
└── skills/                   ← ds-team, component-god, token-police
```

**Rule:** DS components live in `components/{ComponentName}/`, not in `src/components/`.
This keeps AI-generated components separate from shadcn primitives in `src/components/ui/`.

---

## Component File Rules

### Every component needs exactly two files

`{ComponentName}.tsx` — the component itself
`index.ts` — re-exports for clean import paths

### Naming

| Type | Convention | Example |
|------|-----------|---------|
| Folder | PascalCase | `Button/` |
| Component file | PascalCase | `Button.tsx` |
| Index | lowercase | `index.ts` |
| CVA function | camelCase + Variants | `buttonVariants` |
| Props interface | PascalCase + Props | `ButtonProps` |

---

## CVA Pattern — Required Structure

Every component uses this exact skeleton:

```tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { type ComponentPropsWithoutRef } from 'react'

// Audited by Token Police — all colour classes reference shadcn semantic tokens
const {componentName}Variants = cva(
  [
    // Layout & interaction structure — never change these
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'font-medium transition-colors',
    // Focus ring — REQUIRED exactly as written
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    // Disabled — REQUIRED exactly as written
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: { /* semantic token classes only */ },
      size: { /* standard Tailwind spacing scale only */ },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface {ComponentName}Props
  extends ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof {componentName}Variants> {}

export function {ComponentName}({ variant, size, className, children, ...props }: {ComponentName}Props) {
  return (
    <button className={cn({componentName}Variants({ variant, size }), className)} {...props}>
      {children}
    </button>
  )
}
```

---

## Tailwind Class Rules

### ✅ Always use — semantic tokens for colour
```
bg-primary         text-primary-foreground
bg-secondary       text-secondary-foreground
bg-muted           text-muted-foreground
bg-accent          text-accent-foreground
bg-destructive     text-destructive-foreground
bg-card            text-card-foreground
bg-popover         text-popover-foreground
bg-background      text-foreground
border-border      border-input     ring-ring
```

### ✅ Always use — standard scale for layout
```
p-4 px-4 py-2 m-2     (spacing)
h-9 h-10 h-11 w-full  (sizing)
gap-2 gap-4            (gap)
text-sm text-base      (type scale)
rounded-sm rounded-md rounded-lg   (radius — maps to --radius var)
```

### ❌ Never use in component variant classes
```
bg-blue-500   text-gray-900   border-slate-200    (named Tailwind palette)
bg-[#3B82F6]  text-[#ffffff]                      (raw hex)
gap-[13px]    p-[18px]                             (arbitrary spacing when scale exists)
```

### Hover pattern — always use opacity modifier on semantic token
```
hover:bg-primary/90          ✅
hover:bg-blue-600            ❌
```

---

## HTML Semantics

| Design intent | HTML element |
|--------------|-------------|
| Triggers an action | `<button>` |
| Navigates to a URL | `<a href="...">` |
| Single-line text input | `<input type="text">` |
| Multi-line text input | `<textarea>` |
| Display / layout container | `<div>` or `<section>` |
| Icon-only button | `<button aria-label="[action]">` |

---

## Accessibility Requirements

- Every interactive component must have the standard focus ring (see CVA skeleton above)
- Icon-only controls must have `aria-label`
- Use `role` and `aria-*` attributes when semantic HTML is insufficient
- Colour must not be the only differentiator between states (pair colour with shape/text)
- Minimum touch target: `h-9` (36px) for all interactive elements

---

## shadcn Primitives

When a component needs a complex behaviour already handled by shadcn (Dialog, Tooltip, Select, etc.):
1. Install it: `npx shadcn@latest add {component}`
2. It lands in `src/components/ui/` and is imported as `@/components/ui/{component}` — do not edit these files directly
3. Compose it inside your DS component in `components/{ComponentName}/`

---

## Import Aliases

| Alias | Resolves to |
|-------|------------|
| `@/lib/utils` | `src/lib/utils.ts` |
| `@/components/ui` | `src/components/ui/` |

DS components import from `@/lib/utils` for `cn()`.

---

## Cache Protocol

Every built component must have a corresponding `cache/{ComponentName}.md`.
The cache file is written by ds-team after Token Police completes.
It is the source of truth for token decisions made on that component.
Never delete a cache file — append to it if the component is rebuilt.
