import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Info, X } from 'lucide-react'
import React from 'react'

// ── Types ─────────────────────────────────────────────────────────────────────
export type TagColor   = 'grey' | 'blue' | 'green' | 'orange' | 'red'
export type TagVariant = 'icon' | 'dot' | 'number'
export type ChipState  = 'cashBuyout' | 'contingency' | 'undecided'
export type ChipMode   = 'light' | 'dark'

export interface TagProps {
  /** Color / semantic variant */
  color?: TagColor
  /** Structural variant — icon (badge+close), dot (dot+label), number (date text) */
  variant?: TagVariant
  /** Label text shown in icon + dot variants */
  text?: string
  /** Secondary text shown in number variant */
  numberText?: string
  /** Show leading info icon (icon + number variants only) */
  leadingIcon?: boolean
  /** Show trailing close icon (icon variant only) */
  trailingIcon?: boolean
  /** Callback when the × is clicked */
  onClose?: () => void
  className?: string
}

export interface ChipProps {
  /** Status state */
  state?: ChipState
  /** Light or dark background mode */
  mode?: ChipMode
  className?: string
}

// ── Colour maps ───────────────────────────────────────────────────────────────
const tagWrapCva = cva(
  'inline-flex items-center gap-[4px] h-6 min-h-6 px-2 py-1 border rounded-full',
  {
    variants: {
      color: {
        grey:   'bg-[var(--grey\\/50,#f4f5f6)]   border-[var(--grey\\/100,#e8ebed)]',
        blue:   'bg-[var(--blue\\/50,#f0f7ff)]   border-[var(--blue\\/100,#d6ebff)]',
        green:  'bg-[var(--green\\/50,#f0faf0)]  border-[var(--green\\/100,#caedca)]',
        orange: 'bg-[var(--orange\\/50,#fff9f0)] border-[var(--orange\\/100,#ffefd6)]',
        red:    'bg-[var(--red\\/50,#fff5f5)]    border-[var(--red\\/100,#ffe2e0)]',
      },
    },
    defaultVariants: { color: 'grey' },
  }
)

const tagTextCva = cva(
  'whitespace-nowrap font-[Lato,sans-serif] leading-[1.4] not-italic shrink-0',
  {
    variants: {
      color: {
        grey:   'text-[var(--color\\/typography\\/primary-black,#1b2022)]',
        blue:   'text-[var(--color\\/typography\\/information,#0075eb)]',
        green:  'text-[var(--color\\/typography\\/success,#3c9a3c)]',
        orange: 'text-[var(--color\\/typography\\/alert,#f59200)]',
        red:    'text-[var(--color\\/typography\\/warning,#e90c1e)]',
      },
    },
    defaultVariants: { color: 'grey' },
  }
)

const tagIconCva = cva('shrink-0', {
  variants: {
    color: {
      grey:   'text-[var(--color\\/typography\\/primary-black,#1b2022)]',
      blue:   'text-[var(--color\\/typography\\/information,#0075eb)]',
      green:  'text-[var(--color\\/typography\\/success,#3c9a3c)]',
      orange: 'text-[var(--color\\/typography\\/alert,#f59200)]',
      red:    'text-[var(--color\\/typography\\/warning,#e90c1e)]',
    },
  },
  defaultVariants: { color: 'grey' },
})

/** 4 px colour dot — background matches each state's brand colour */
const dotBg: Record<TagColor, string> = {
  grey:   'bg-[var(--grey\\/400,#94a3b8)]',
  blue:   'bg-[var(--blue\\/400,#60a5fa)]',
  green:  'bg-[var(--green\\/500,#22c55e)]',
  orange: 'bg-[var(--orange\\/400,#fb923c)]',
  red:    'bg-[var(--red\\/400,#f87171)]',
}

// ── Tag ───────────────────────────────────────────────────────────────────────

/**
 * Tag
 *
 * Three-variant / five-colour badge matching Figma node 106-560.
 *
 * - `variant="icon"`   → (info icon) Label (× close)
 * - `variant="dot"`    → • Label
 * - `variant="number"` → (info icon) Due Date: …
 *
 * @example
 * <Tag color="blue" variant="icon" text="In Progress" />
 * <Tag color="green" variant="dot" text="Active" />
 * <Tag color="red" variant="number" numberText="Due: 30 Apr 2026" />
 */
export function Tag({
  color = 'grey',
  variant = 'icon',
  text = 'Badge',
  numberText = 'Due Date: 20 Apr 2026',
  leadingIcon = true,
  trailingIcon = true,
  onClose,
  className,
}: TagProps) {
  const isNumber = variant === 'number'
  const isDot    = variant === 'dot'
  const isIcon   = variant === 'icon'

  // Number variant uses 10px Regular for grey only, 12px Medium for all others
  const numFontClass = color === 'grey'
    ? 'text-[10px] font-normal'
    : 'text-[12px] font-medium'

  return (
    <div className={cn(tagWrapCva({ color }), className)}>
      {/* Dot — only in dot variant */}
      {isDot && (
        <span className={cn('inline-block shrink-0 size-[4px] rounded-full', dotBg[color])} />
      )}

      {/* Leading info icon — icon + number variants */}
      {(isIcon || isNumber) && leadingIcon && (
        <Info size={12} className={cn(tagIconCva({ color }))} />
      )}

      {/* Primary label text — icon + dot variants */}
      {(isIcon || isDot) && (
        <span className={cn(tagTextCva({ color }), 'text-[12px] font-medium')}>
          {text}
        </span>
      )}

      {/* Number / date text — number variant */}
      {isNumber && (
        <span className={cn(tagTextCva({ color }), numFontClass)}>
          {numberText}
        </span>
      )}

      {/* Trailing close icon — icon variant only */}
      {isIcon && trailingIcon && (
        <button
          type="button"
          onClick={onClose}
          className={cn(
            tagIconCva({ color }),
            'inline-flex items-center justify-center rounded-full',
            'hover:opacity-70 transition-opacity duration-100',
            'focus:outline-none focus-visible:ring-1 focus-visible:ring-current',
          )}
          aria-label="Remove tag"
        >
          <X size={10} strokeWidth={2.5} />
        </button>
      )}
    </div>
  )
}

// ── Chip ──────────────────────────────────────────────────────────────────────

/**
 * Chip
 *
 * Status badge — three states × two modes (light / dark).
 * Used for deal-stage labels like "Cash Buyout", "Contingency", "Undecided".
 *
 * @example
 * <Chip state="cashBuyout" mode="light" />
 * <Chip state="contingency" mode="dark" />
 */
export function Chip({ state = 'cashBuyout', mode = 'light', className }: ChipProps) {
  const chipStyles: Record<ChipMode, Record<ChipState, string>> = {
    light: {
      cashBuyout:  'bg-[var(--surface\\/surface-primary-light,#eef6ff)] border-[var(--border\\/brand,#146cdf)] text-[var(--blue\\/600,#2f68c5)]',
      contingency: 'bg-[var(--surface\\/alert,#fef5e6)] border-[var(--border\\/alert,#c47e09)] text-[var(--orange\\/700,#935f07)]',
      undecided:   'bg-[var(--grey\\/100,#f1f5f9)] border-[var(--grey\\/500,#94a3b8)] text-[var(--grey\\/700,#334155)]',
    },
    dark: {
      cashBuyout:  'bg-[var(--brand\\/700,#0c4186)] border-[var(--border\\/brand,#146cdf)] text-[var(--blue\\/50,#ebf2fe)]',
      contingency: 'bg-[var(--orange\\/600,#c47e09)] border-[var(--orange\\/500,#f59e0b)] text-[var(--orange\\/50,#fef5e6)]',
      undecided:   'bg-[var(--grey\\/600,#64748b)] border-[var(--grey\\/500,#94a3b8)] text-[var(--grey\\/100,#f1f5f9)]',
    },
  }

  const label: Record<ChipState, string> = {
    cashBuyout:  'Cash Buyout',
    contingency: 'Contingency',
    undecided:   'Undecided',
  }

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center',
        'h-7 px-2 py-[6px] border rounded-[var(--scale\\/100,4px)]',
        'font-[Poppins,sans-serif] text-[10px] font-normal leading-[1.5] not-italic whitespace-nowrap',
        chipStyles[mode][state],
        className,
      )}
    >
      {label[state]}
    </div>
  )
}

Tag.displayName  = 'Tag'
Chip.displayName = 'Chip'

export default Tag
