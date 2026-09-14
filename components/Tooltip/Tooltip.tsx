import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import React from 'react'

// ── Types ─────────────────────────────────────────────────────────────────────

export type TooltipPosition =
  | 'bottomLeft'   | 'bottomCentre' | 'bottomRight'
  | 'topLeft'      | 'topCentre'    | 'topRight'
  | 'leftCentre'   | 'rightCentre'

export interface TooltipProps {
  /** Bold heading line */
  title?: string
  /** Smaller body copy */
  body?: string
  /** Show body text */
  showBody?: boolean
  /** Show the × dismiss button */
  showClose?: boolean
  /** Show the directional arrow tip */
  showArrow?: boolean
  /** Arrow tip position (mirrors Figma variant axis) */
  position?: TooltipPosition
  /** Callback when × is pressed */
  onClose?: () => void
  className?: string
}

// ── Internal helpers ──────────────────────────────────────────────────────────

// Tooltip surface is intentionally a fixed Tier-3 token — always dark,
// never flips with theme. Rendered as a CSS variable for the border-trick arrows.
const TOOLTIP_BG = 'hsl(var(--tooltip-surface))'

type ArrowDir = 'up' | 'down' | 'left' | 'right'

const POSITION_DIR: Record<TooltipPosition, ArrowDir> = {
  bottomLeft:   'down',
  bottomCentre: 'down',
  bottomRight:  'down',
  topLeft:      'up',
  topCentre:    'up',
  topRight:     'up',
  leftCentre:   'left',
  rightCentre:  'right',
}

const POSITION_ALIGN: Record<TooltipPosition, string> = {
  bottomLeft:   'items-start',
  bottomCentre: 'items-center',
  bottomRight:  'items-end',
  topLeft:      'items-start',
  topCentre:    'items-center',
  topRight:     'items-end',
  leftCentre:   '',
  rightCentre:  '',
}

/** Pure-CSS border-trick triangle — no SVG or image assets required */
function ArrowTip({ dir }: { dir: ArrowDir }) {
  const base: React.CSSProperties = { width: 0, height: 0, flexShrink: 0 }

  const style: React.CSSProperties = (() => {
    switch (dir) {
      case 'down':
        return { ...base, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop:    `10px solid ${TOOLTIP_BG}` }
      case 'up':
        return { ...base, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: `10px solid ${TOOLTIP_BG}` }
      case 'left':
        return { ...base, borderTop: '8px solid transparent',  borderBottom: '8px solid transparent', borderRight: `10px solid ${TOOLTIP_BG}` }
      case 'right':
        return { ...base, borderTop: '8px solid transparent',  borderBottom: '8px solid transparent', borderLeft:  `10px solid ${TOOLTIP_BG}` }
    }
  })()

  return <div style={style} aria-hidden />
}

// ── Component ─────────────────────────────────────────────────────────────────

/**
 * Tooltip
 *
 * Dark-surface popover with an optional directional arrow tip.
 * Matches Figma node 106-689 — 8 arrow positions, optional close button,
 * optional body text.
 *
 * @example
 * <Tooltip title="Heading" position="bottomLeft" />
 * <Tooltip title="Info" body="More detail here." position="topCentre" showClose={false} />
 * <Tooltip title="Right" position="rightCentre" showArrow />
 */
export function Tooltip({
  title     = 'Heading',
  body      = 'Tooltips are used to describe or identify an element.',
  showBody  = true,
  showClose = true,
  showArrow = true,
  position  = 'bottomLeft',
  onClose,
  className,
}: TooltipProps) {
  const dir   = POSITION_DIR[position]
  const align = POSITION_ALIGN[position]

  const isBottom = position.startsWith('bottom')
  const isTop    = position.startsWith('top')
  const isSide   = position === 'leftCentre' || position === 'rightCentre'
  const isLeft   = position === 'leftCentre'
  const isRight  = position === 'rightCentre'

  /** The dark box — shared across all variants */
  const box = (
    <div className="flex items-start gap-2 p-3 rounded-[8px] w-full shrink-0 bg-tooltip-surface">
      {/* Text block */}
      <div className="flex flex-1 min-w-0 flex-col gap-1">
        <p className="text-[12px] font-semibold leading-[1.4] text-tooltip-text break-words">
          {title}
        </p>
        {showBody && (
          <p className="text-[10px] font-normal leading-[1.4] text-tooltip-body break-words">
            {body}
          </p>
        )}
      </div>

      {/* Dismiss */}
      {showClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss tooltip"
          className="shrink-0 text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50 rounded"
        >
          <X size={14} strokeWidth={2.5} />
        </button>
      )}
    </div>
  )

  const tip = showArrow ? <ArrowTip dir={dir} /> : null

  // ── Side layout (left / right) ─────────────────────
  if (isSide) {
    return (
      <div className={cn('inline-flex items-center', className)}>
        {isLeft && (
          <div className="shrink-0" style={{ marginRight: '-8px', zIndex: 1 }}>
            {tip}
          </div>
        )}
        <div style={{ width: 246 }}>{box}</div>
        {isRight && (
          <div className="shrink-0" style={{ marginLeft: '-8px', zIndex: 1 }}>
            {tip}
          </div>
        )}
      </div>
    )
  }

  // ── Vertical layout (top / bottom) ─────────────────
  return (
    <div className={cn('inline-flex flex-col', className)} style={{ width: 254 }}>

      {/* Top arrow — sits above the box */}
      {isTop && tip && (
        <div
          className={cn('flex px-3', align)}
          style={{ marginBottom: '-8px', zIndex: 1 }}
        >
          {tip}
        </div>
      )}

      {box}

      {/* Bottom arrow — sits below the box */}
      {isBottom && tip && (
        <div
          className={cn('flex px-3', align)}
          style={{ marginTop: '-8px', zIndex: 1 }}
        >
          {tip}
        </div>
      )}

    </div>
  )
}

Tooltip.displayName = 'Tooltip'
export default Tooltip
