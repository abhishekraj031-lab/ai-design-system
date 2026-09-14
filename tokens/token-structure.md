# Token Structure — AI Design System

Source: Figma — Pulse Design System · Color page · Typography page
Last sync: 2026-05-30

---

## Architecture: 2-Tier Color System

```
Tier 1 — Primitives          Tier 2 — Semantic Tokens
──────────────────           ─────────────────────────
CSS var: --color-{ramp}-{n}  CSS var: --{role}-{state}
Tailwind: (not exposed)      Tailwind: bg-{role}-{state}

Example:
--color-brand-500  ──────►  --brand-default
                             bg-brand-default
                             text-brand-default
```

**Rule: All component Tailwind classes must use Tier 2 tokens only.**
Tier 1 variables exist only to power the Tier 2 aliases — never reference `--color-*` in component code.

---

## Tier 1 — Primitive Ramps

10 ramps, 10 shades each (50–900). Shade 500 is the canonical "default" for each role.

| Ramp | Role | Shade 500 hex | Notes |
|------|------|--------------|-------|
| `brand` | Primary brand | `#2778E2` | Mid-blue |
| `blue` | Information | `#1CA3FD` | Brighter sky-blue |
| `green` | Success | `#10B981` | Emerald |
| `orange` | Warning | `#F97316` | Orange |
| `red` | Error | `#EF4444` | Red (⚠️ Red/50 corrected — see bugs) |
| `yellow` | Caution | `#F59E0B` | Amber |
| `purple` | Accent | `#8B5CF6` | Violet |
| `magenta` | Accent | `#D946EF` | Fuchsia |
| `teal` | Secondary | `#14B8A6` | Teal |
| `grey` | Neutral | `#64748B` | Slate |

---

## Tier 2 — Semantic Tokens

### Naming Convention
```
--{role}-{state}

Roles:   brand · information · success · warning · error ·
         caution · purple · magenta · teal · neutral

States:  background · subtle · light · default · hover · active · emphasis · text
```

### State → Primitive Shade Mapping (consistent across all roles)

| Semantic state | Shade | Typical use |
|---------------|-------|-------------|
| `background`  | 50    | Alert backgrounds, page tints |
| `subtle`      | 100   | Subtle fills, tags |
| `light`       | 200   | Lighter fills |
| `default`     | 500   | Primary fill for buttons, icons |
| `hover`       | 600   | Hover state |
| `active`      | 700   | Active / pressed state |
| `emphasis`    | 800   | High-contrast fill |
| `text`        | 900   | Text on white backgrounds |

### Tailwind Classes to Use in Components

```
bg-brand-default          text-brand-default
bg-brand-background       text-brand-text
bg-brand-hover            (hover state)
bg-brand-active           (active state)

bg-error-default          text-error-default
bg-error-background       text-error-text
bg-success-default        text-success-text
bg-warning-default        text-warning-text
bg-information-default    text-information-text
bg-caution-default        text-caution-text
bg-neutral-subtle         text-neutral-default
bg-neutral-background     text-neutral-text

bg-teal-default           text-teal-text
bg-purple-default         text-purple-text
bg-magenta-default        text-magenta-text
```

Opacity modifiers are fully supported: `bg-brand-default/90`, `bg-error-default/10`.

---

## shadcn Compat Layer

shadcn primitives (Button, Input, Badge, etc.) use a different token vocabulary.
These are mapped to Figma values but should NOT be used in new DS components.

| shadcn token | Maps to Figma | Tailwind class |
|-------------|--------------|----------------|
| `--primary` | brand/default | `bg-primary` |
| `--secondary` | teal/background | `bg-secondary` |
| `--muted` | neutral/subtle | `bg-muted` |
| `--accent` | brand/background | `bg-accent` |
| `--destructive` | error/default | `bg-destructive` |
| `--border` | neutral/light | `border-border` |
| `--ring` | brand/default | `ring-ring` |

**Use these only inside `src/components/ui/` (shadcn primitives).
All new DS components in `components/{Name}/` must use the Tier 2 names above.**

---

## Typography

Font: **Poppins** (import via Google Fonts or local)
Tailwind font: `font-sans` (mapped to Poppins in config)

| Token | Tailwind class | Size | Weight | Line Height |
|-------|--------------|------|--------|------------|
| `Heading/H1` | `text-h1` | 48px | 700 Bold | 110% |
| `Heading/H2` | `text-h2` | 40px | 700 Bold | 110% |
| `Heading/H3` | `text-h3` | 36px | 700 Bold | 110% |
| `Heading/H4` | `text-h4` | 32px | 700 Bold | 110% |
| `Heading/H5` | `text-h5` | 28px | 700 Bold | 110% |
| `Heading/H6` | `text-h6` | 24px | 700 Bold | 110% |
| `Body/B1` | `text-b1` | 20px | 700 Bold | 125% |
| `Body/B2` | `text-b2` | 16px | 400 Regular | 125% |
| `Label/L1` | `text-l1` | 14px | 400/500/600 | 130% |
| `Label/L2` | `text-l2` | 12px | 400/500/600 | 140% |
| `Label/L3` | `text-l3` | 11px | 400 Regular | 150% |

Weight modifiers for labels: `font-normal` (400), `font-medium` (500), `font-semibold` (600).
Example: `text-l1 font-semibold` = Label/L1/SemiBold.

---

## Figma Native Variable Names

Figma exports variables using `/` separators and the following naming convention. These are documented here for reference; in code use the Tier 2 tokens above.

### Background tokens (`--semantic-color/background/*`)
| Figma variable | Value | Code equivalent |
|---|---|---|
| `--semantic-color/background/brand-primary` | `#2778E2` | `--brand-default` |
| `--semantic-color/background/brand-hover` | `#1D62C0` | `--brand-hover` |
| `--semantic-color/background/brand-clicked` | `#154D9E` | `--brand-active` |
| `--semantic-color/background/disable` | `#F8FAFC` | `--neutral-background` |
| `--semantic-color/background/error-primary` | `#EF4444` | `--error-default` |
| `--semantic-color/background/success-primary` | `#10B981` | `--success-default` |
| `--semantic-color/background/warning-primary` | `#F97316` | `--warning-default` |
| `--semantic-color/background/white` | `#FFFFFF` | `--background` |
| `--semantic-color/background/default-icon` | `#64748B` | `--neutral-default` |

### Border tokens (`--semantic-color/border/*`)
| Figma variable | Value | Code equivalent |
|---|---|---|
| `--semantic-color/border/brand-primary` | `#2778E2` | `--brand-default` |
| `--semantic-color/border/brand-hover` | `#1D62C0` | `--brand-hover` |
| `--semantic-color/border/brand-clicked` | `#154D9E` | `--brand-active` |
| `--semantic-color/border/disable` | `#CBD5E1` | `--neutral-light` (grey-300) |
| `--semantic-color/border/error-primary` | `#EF4444` | `--error-default` |
| `--semantic-color/border/success-primary` | `#10B981` | `--success-default` |
| `--semantic-color/border/warning-primary` | `#F97316` | `--warning-default` |
| `--semantic-color/border/default` | `#E2E8F0` | `--neutral-light` (grey-200) |

### Typography tokens (`--semantic-color/typography/*`)
| Figma variable | Value | Code equivalent |
|---|---|---|
| `--semantic-color/typography/primary` | `#334155` | `--neutral-active` (grey-700) |
| `--semantic-color/typography/secondary` | `#64748B` | `--neutral-default` (grey-500) |
| `--semantic-color/typography/white` | `#FFFFFF` | white |
| `--semantic-color/typography/on-surface` | `#FFFFFF` | white |
| `--semantic-color/typography/brand-default` | `#2778E2` | `--brand-default` |
| `--semantic-color/typography/brand-hover` | `#1D62C0` | `--brand-hover` *(Figma typo: "brad-hover")* |
| `--semantic-color/typography/brand-clicked` | `#154D9E` | `--brand-active` |
| `--semantic-color/typography/disable` | `#94A3B8` | grey-400 |
| `--semantic-color/typography/error` | `#EF4444` | `--error-default` |
| `--semantic-color/typography/success` | `#10B981` | `--success-default` |
| `--semantic-color/typography/warning` | `#F97316` | `--warning-default` |

### Text tokens (`--semantic/color/text/*`) — additional set
| Figma variable | Value | CSS var in code |
|---|---|---|
| `--semantic/color/text/primary` | `#1D242B` | `--semantic-text-primary` |
| `--semantic/color/text/secondary` | `#52667A` | `--semantic-text-secondary` |

These two are **not** part of the standard Tier 2 ramp system — they are standalone Figma semantic values added to `src/index.css` as `--semantic-text-primary` and `--semantic-text-secondary`.

## Corner Radius Tokens

Source: Figma `--corner-radius/*` variables.

| Figma variable | Value | CSS var in code | Use |
|---|---|---|---|
| `--corner-radius/m` | `8px` | `--corner-radius-m` | Cards, modals, panels |
| `--corner-radius/s` | `6px` | `--corner-radius-s` | Inputs, badges, buttons |

In Tailwind: use `rounded-lg` (8px) for medium and `rounded-md` (6px) for small.

---

## Known Issues

### ✅ Red/50 — resolved
- Earlier snapshot showed `#DBDEE5` (a grey — a Figma bug that has since been fixed).
- Figma Color page now correctly shows `#FEF2F2` (a proper red tint).
- `--color-red-50` in `src/index.css` updated to `#FEF2F2`.

---

## Adding a New Token

1. Add primitive to `src/index.css` under `:root` as `--color-{ramp}-{shade}`
2. Add semantic alias as `--{role}-{state}: var(--color-{ramp}-{shade})`
3. Add to `tailwind.config.js` under the correct role object
4. Add to `tokens/tokens.json` for Token Police
5. Update this file
