# RadioButton — Component Cache
**Built:** 2026-05-16
**Figma source:** Design-System_V.2.0 · node 19:2988
**Workflow:** B — Figma screenshot → React build

## Variant Properties
| Property  | Values          |
|-----------|-----------------|
| checked   | true · false    |
| disabled  | true · false    |
| label     | string · (none) |

## States Covered
| State             | Visual                                                    |
|-------------------|-----------------------------------------------------------|
| Default           | Empty circle, `border-neutral-light`                      |
| Checked           | `border-brand-default` ring + `bg-brand-default` 8px dot |
| Disabled          | Empty circle, `border-neutral-light opacity-50`           |
| Checked + Disabled| `border-neutral-light opacity-50` + `bg-neutral-default` dot |

## Token Police Audit
- ✅ Ring border (checked):    `border-brand-default` — Tier-2 semantic ✅
- ✅ Ring border (unchecked):  `border-neutral-light` — Tier-2 semantic ✅
- ✅ Dot fill (checked):       `bg-brand-default` — Tier-2 semantic ✅
- ✅ Dot fill (disabled):      `bg-neutral-default` — Tier-2 semantic ✅
- ✅ Label (enabled):          `text-neutral-text` — Tier-2 semantic ✅
- ✅ Label (disabled):         `text-neutral-default` — Tier-2 semantic ✅
- ✅ Focus ring:               `peer-focus-visible:ring-ring` — shadcn compat token ✅
- ✅ 0 violations — all colour references use semantic tokens

## Accessibility
- Native `<input type="radio">` is `sr-only` — screen readers announce group selection normally
- `peer` class drives `peer-focus-visible:ring-2` on the visual span — keyboard focus visible
- `disabled` propagated to native input — form submission correctly excludes it
- `name` and `value` props spread via `...rest` onto the native input for radio group semantics

## Files Written
- `components/RadioButton/RadioButton.tsx`
- `components/RadioButton/index.ts`

## Props API
| Prop      | Type                        | Default | Description                       |
|-----------|-----------------------------|---------|-----------------------------------|
| label     | string                      | —       | Text label beside the circle      |
| checked   | boolean                     | false   | Controlled checked state          |
| disabled  | boolean                     | false   | Disabled state                    |
| onChange  | (checked: boolean) => void  | —       | Fired when selected               |
| name      | string                      | —       | Radio group name (via ...rest)    |
| value     | string                      | —       | Radio value (via ...rest)         |
| className | string                      | —       | Passed to outer `<label>`         |
| ...rest   | ComponentPropsWithoutRef<'input'> | — | Spread onto hidden `<input>`      |

## Notes
- Ring size: 18 × 18 px, `rounded-full`, `border-[1.5px]`
- Dot size: 8 × 8 px, `rounded-full`, centered via `inline-flex items-center justify-center`
- Label gap: `gap-[4px]` between ring and text
- Label font: `text-[12px] font-medium leading-[1.3]`
- Dot uses `opacity-0` (not `hidden`) for unchecked — enables smooth CSS transitions
- Disabled opacity applied to the ring span, not the wrapper, to preserve cursor style on label
