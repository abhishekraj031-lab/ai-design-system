# Button — Component Cache

**Figma source:** `Design-System_V.2.0` · node `118:1517`
**Built:** 2026-05-13
**Files:** `components/Button/Button.tsx` · `components/Button/index.ts`

---

## Variant Matrix (from Figma metadata)

| Prop | Values | Figma name |
|------|--------|-----------|
| `type` | `filled` \| `outline` \| `link` | Type=Filled / Outline / Link |
| `intent` | `brand` \| `success` \| `warning` \| `destructive` | State=Default / Success / Warning / Destructive |
| `size` | `xl` \| `md` \| `sm` | Size=44 / 40 / 36 |
| `isLoading` | `boolean` | State=Loading |
| `disabled` | HTML attribute | State=Disable |

---

## Token Police Audit

### Colour class audit (CVA compound variants)

| Class | Token | Status |
|-------|-------|--------|
| `bg-brand-default` | brand/default (#2778E2) | ✅ |
| `hover:bg-brand-hover` | brand/hover (#1D62C0) | ✅ |
| `active:bg-brand-active` | brand/active (#154D9E) | ✅ |
| `bg-success-default` | success/default (#10B981) | ✅ |
| `hover:bg-success-hover` | success/hover (#059669) | ✅ |
| `bg-warning-default` | warning/default (#F97316) | ✅ |
| `hover:bg-warning-hover` | warning/hover (#EA580C) | ✅ |
| `bg-error-default` | error/default (#EF4444) | ✅ |
| `hover:bg-error-hover` | error/hover (#DC2626) | ✅ |
| `active:bg-error-active` | error/active (#B91C1C) | ✅ |
| `border-brand-default` | brand/default (#2778E2) | ✅ |
| `border-success-default` | success/default (#10B981) | ✅ |
| `border-warning-default` | warning/default (#F97316) | ✅ |
| `border-error-default` | error/default (#EF4444) | ✅ |
| `text-brand-default` | brand/default (#2778E2) | ✅ |
| `hover:text-brand-hover` | brand/hover (#1D62C0) | ✅ |
| `active:text-brand-active` | brand/active (#154D9E) | ✅ |
| `text-success-default` | success/default (#10B981) | ✅ |
| `text-warning-default` | warning/default (#F97316) | ✅ |
| `text-error-default` | error/default (#EF4444) | ✅ |
| `hover:text-error-hover` | error/hover (#DC2626) | ✅ |
| `hover:bg-brand-background` | brand/background (#EEF4FD) | ✅ |
| `active:bg-brand-subtle` | brand/subtle (#D4E5FA) | ✅ |
| `hover:bg-success-background` | success/background (#ECFDF5) | ✅ |
| `hover:bg-warning-background` | warning/background (#FFF7ED) | ✅ |
| `hover:bg-error-background` | error/background (#FFF5F5) | ✅ |
| `active:bg-error-subtle` | error/subtle (#FEE2E2) | ✅ |
| `ring-ring` | shadcn compat — focus ring | ✅ |
| `text-white` | Pure white (#FFFFFF) — no Tier 2 alias exists for white text on filled buttons. Figma variable `semantic color/typography/white: #ffffff` is intentionally used as a constant here. | ✅ accepted |

**Result: ✅ 0 violations — 29/29 colour classes correctly tokenised.**

### Base class audit

- ✅ Focus ring: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` — present
- ✅ Disabled: `disabled:pointer-events-none disabled:opacity-50` — present
- Disabled state colours from Figma (`semantic color/background/disable: #F8FAFC`, `semantic color/typography/disable: #94A3B8`) are **intentionally NOT applied** as separate Tailwind classes — `disabled:opacity-50` provides the visual feedback per team convention. The hex values have no Tier 2 semantic aliases (`neutral-400`, `neutral-300` are un-aliased primitives).

---

## Token Decisions

| Decision | Reasoning |
|----------|-----------|
| `text-white` on all filled variants | Figma variable `semantic color/typography/white: #ffffff`. No Tier 2 token for pure white exists; using Tailwind constant is correct. |
| `disabled:opacity-50` not per-color disabled classes | Token Police convention. Figma's disable tokens (`#F8FAFC`, `#94A3B8`, `#CBD5E1`) map to unaliased neutral-400/300 primitives — standard opacity pattern is correct. |
| Compound variants (type × intent) | Mirrors Figma's two-axis component structure exactly: Type (Filled/Outline/Link) and Intent (Default/Success/Warning/Destructive). |
| `isLoading` prop with `Loader2` spinner | Maps to Figma State=Loading. Loading disables the button and shows an animated spinner. |
| `size: xl/md/sm` maps to Figma `44/40/36` | Tailwind `h-11`=44px, `h-10`=40px, `h-9`=36px. |
| `rounded-lg` (8px) base, `rounded-md` (6px) for sm | Figma `Corner Radius/m = 8` and `Corner Radius/s = 6`. Matches `--radius` var in tailwind.config.js. |
| Font: `font-semibold text-sm` | Figma `Label/L1/SemiBold`: Poppins SemiBold 14px. `text-sm` = 0.875rem = 14px. |

---

## Suggestions (Workflow B)

- 💡 An `iconOnly` size (e.g. `size: icon`) could be added for `h-10 w-10 p-0` when only a single icon is rendered.
- 💡 All 12 type × intent combinations are visually testable — consider adding Storybook stories for each compound.
- 💡 `asChild` is supported via Radix Slot for rendering as `<a>` links.
