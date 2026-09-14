# Tooltip — Component Cache
**Built:** 2026-05-16
**Figma source:** node 106:689
**HTML reference:** components.html#tooltip
**Workflow:** A — HTML reference → React build

## Variant Properties
| Property    | Values                                                                                      |
|-------------|--------------------------------------------------------------------------------------------|
| position    | bottomLeft · bottomCentre · bottomRight · topLeft · topCentre · topRight · leftCentre · rightCentre |
| showBody    | true · false                                                                               |
| showClose   | true · false                                                                               |
| showArrow   | true · false                                                                               |

## Token Decisions

### Why a Tier-3 component token?
The tooltip surface `#1b2022` is a warm near-black that is intentionally fixed — it does NOT flip
with the light/dark theme. This is standard tooltip behaviour (always dark popover). Added as:
- `--tooltip-surface: 210 24% 12%` in `src/index.css :root` (no `.dark` override — by design)
- `--tooltip-text:    0   0% 100%`
- `--tooltip-body:    210 15% 85%`

### Why no `.dark` override?
Tooltip is a "dark-always" surface like a code block. It reads fine on both light and dark backgrounds.
Adding a dark-mode flip would invert it to a white tooltip, which is non-standard.

## Token Police Audit
- ✅ Arrow colour: `hsl(var(--tooltip-surface))` — CSS variable, not raw hex ✅
- ✅ Box background: `bg-tooltip-surface` — Tier-3 semantic class ✅
- ✅ Title text: `text-tooltip-text` — Tier-3 semantic class ✅
- ✅ Body text: `text-tooltip-body` — Tier-3 semantic class ✅
- ✅ Close button: `text-white/70` — opacity modifier on white (no raw colour) ✅
- ✅ 0 violations — all colour references use semantic tokens or CSS variables

## Arrow Technique
CSS border-trick triangles. Cannot be expressed as Tailwind utilities.
Implemented via `ArrowTip` sub-component that applies `React.CSSProperties` inline.
The border colour references `hsl(var(--tooltip-surface))` so it tracks the token.

## Files Written
- `components/Tooltip/Tooltip.tsx`
- `components/Tooltip/index.ts`

## Props API
| Prop       | Type                    | Default          | Description                          |
|------------|-------------------------|------------------|--------------------------------------|
| title      | string                  | 'Heading'        | Bold heading line                    |
| body       | string                  | (Figma copy)     | Smaller body text                    |
| showBody   | boolean                 | true             | Toggle body visibility               |
| showClose  | boolean                 | true             | Show × dismiss button                |
| showArrow  | boolean                 | true             | Show directional arrow               |
| position   | TooltipPosition         | 'bottomLeft'     | All 8 Figma positions                |
| onClose    | () => void              | —                | Fired when × is pressed              |
| className  | string                  | —                | Passed to wrapper div                |

## Notes
- Side positions (leftCentre / rightCentre) use `flex-row` wrapper; all others use `flex-col`.
- Arrow alignment for bottom/top: Left → `justify-start`, Centre → `justify-center`, Right → `justify-end`.
- Arrow offset: `–mt-2` / `–mb-2` to overlap the box edge by 8px (matching HTML reference).
- Width: 254px for vertical layout; `w-auto` for side layout (box is 246px).
- `Tooltip.displayName = 'Tooltip'` set for React DevTools.
