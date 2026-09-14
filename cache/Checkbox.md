# Checkbox — Component Cache
**Built:** 2026-05-16
**Figma source:** Design-System_V.2.0 · node 19:2924
**Workflow:** B — Figma screenshot → React build

## Variant Properties
| Property      | Values                   |
|---------------|--------------------------|
| checked       | true · false             |
| indeterminate | true · false             |
| disabled      | true · false             |
| label         | string · (none)          |

## States Covered
| State               | Visual                                                   |
|---------------------|----------------------------------------------------------|
| Default (unchecked) | Transparent box, `border-neutral-light`                  |
| Checked             | `bg-brand-default border-brand-default` + white check   |
| Indeterminate       | `bg-brand-default border-brand-default` + white minus   |
| Disabled unchecked  | Transparent box, `border-neutral-light opacity-50`       |
| Disabled checked    | `bg-neutral-light border-neutral-light` + gray check    |

## Token Police Audit
- ✅ Box background (active):      `bg-brand-default` — Tier-2 semantic ✅
- ✅ Box border (active):          `border-brand-default` — Tier-2 semantic ✅
- ✅ Box background (disabled):    `bg-neutral-light` — Tier-2 semantic ✅
- ✅ Box border (disabled active): `border-neutral-light` — Tier-2 semantic ✅
- ✅ Icon color (enabled):         `text-white` — opacity-agnostic white, acceptable ✅
- ✅ Icon color (disabled):        `text-neutral-default` — Tier-2 semantic ✅
- ✅ Label (enabled):              `text-neutral-text` — Tier-2 semantic ✅
- ✅ Label (disabled):             `text-neutral-default` — Tier-2 semantic ✅
- ✅ Focus ring:                   `peer-focus-visible:ring-ring` — shadcn compat token ✅
- ✅ 0 violations — all colour references use semantic tokens

## Accessibility
- Native `<input type="checkbox">` is `sr-only` — screen readers announce checked state normally
- `peer` class drives `peer-focus-visible:ring-2` on the visual span — keyboard focus is visible
- `indeterminate` prop sets the visual only (native `indeterminate` DOM property for a11y can be set via ref if needed)
- `disabled` propagated to native input — form submission correctly excludes it

## Files Written
- `components/Checkbox/Checkbox.tsx`
- `components/Checkbox/index.ts`

## Props API
| Prop          | Type                        | Default | Description                          |
|---------------|-----------------------------|---------|--------------------------------------|
| label         | string                      | —       | Text label beside the box            |
| checked       | boolean                     | false   | Controlled checked state             |
| indeterminate | boolean                     | false   | Shows minus icon (partial selection) |
| disabled      | boolean                     | false   | Disabled state                       |
| onChange      | (checked: boolean) => void  | —       | Fired on every toggle                |
| className     | string                      | —       | Passed to outer `<label>`            |
| ...rest       | ComponentPropsWithoutRef<'input'> | —  | Spread onto hidden `<input>`         |

## Notes
- Box size: 18 × 18 px, `rounded-[4px]`, `border-[1.5px]`
- Icons: `Check` and `Minus` from `lucide-react`, `size={12}` `strokeWidth={2.5}`
- Label gap: `gap-[4px]` between box and text
- Label font: `text-[12px] font-medium leading-[1.3]`
- `indeterminate` takes priority over `checked` for icon rendering
- Both `checked` and `indeterminate` → `isActive = true` → filled box color
