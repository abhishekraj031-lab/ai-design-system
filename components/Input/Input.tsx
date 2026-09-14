import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Mail } from 'lucide-react'
import React, { forwardRef, useId } from 'react'

// ── Types ─────────────────────────────────────────────────────────────────────
export type InputState = 'default' | 'active' | 'filled' | 'disabled' | 'filledDisabled' | 'error'
export type InputAddonType = 'default' | 'textFirst' | 'textLast' | 'iconFirst' | 'iconLast'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Visible label above the field */
  label?: string
  /** Helper copy below the field */
  helpText?: string
  /** Error copy (shown when state="error", overrides helpText) */
  errorText?: string
  /** Visual / interaction state (mirrors Figma variant axis) */
  state?: InputState
  /** Addon placement (mirrors Figma "type" variant axis) */
  addonType?: InputAddonType
  /** Text shown in a text-first / text-last addon slot (e.g. "+1") */
  addonText?: string
  /** Show the label element */
  showLabel?: boolean
  /** Show help/error text below */
  showHelpText?: boolean
}

// ── CVA wrappers ──────────────────────────────────────────────────────────────
const wrapCva = cva(
  [
    'flex h-10 w-full items-center overflow-hidden',
    'rounded-[6px] border transition-[border-color,box-shadow] duration-150',
  ],
  {
    variants: {
      state: {
        default:       'border-[var(--semantic-color\\/border\\/default,#e2e8f0)] bg-[var(--semantic-color\\/background\\/surface,#fff)]',
        active:        'border-[var(--semantic-color\\/border\\/brand-primary,#2778e2)] bg-[var(--semantic-color\\/background\\/surface,#fff)] shadow-[0_0_0_3px_rgba(39,120,226,0.12)]',
        filled:        'border-[var(--semantic-color\\/border\\/default,#e2e8f0)] bg-[var(--semantic-color\\/background\\/surface,#fff)]',
        disabled:      'border-[var(--semantic-color\\/border\\/default,#e2e8f0)] bg-[var(--semantic-color\\/background\\/disable,#f8fafc)] cursor-not-allowed',
        filledDisabled:'border-[var(--semantic-color\\/border\\/default,#e2e8f0)] bg-[var(--semantic-color\\/background\\/disable,#f8fafc)] cursor-not-allowed',
        error:         'border-[var(--semantic-color\\/border\\/error-hover,#dc2626)] bg-[var(--semantic-color\\/background\\/surface,#fff)]',
      },
    },
    defaultVariants: { state: 'default' },
  }
)

const addonCva = cva(
  'flex h-full w-10 shrink-0 items-center justify-center',
  {
    variants: {
      variant: {
        icon: 'bg-[var(--semantic-color\\/background\\/disable,#f8fafc)]',
        text: 'bg-[var(--base\\/grey\\/100,#f1f5f9)]',
      },
    },
    defaultVariants: { variant: 'icon' },
  }
)

// ── Component ─────────────────────────────────────────────────────────────────

/**
 * Input
 *
 * Two-axis variant system matching the Figma component:
 *  - `state`     → default | active | filled | disabled | filledDisabled | error
 *  - `addonType` → default | textFirst | textLast | iconFirst | iconLast
 *
 * @example
 * <Input label="Email" placeholder="Enter email" state="default" addonType="iconFirst" />
 * <Input label="Phone" addonText="+1" addonType="textFirst" />
 * <Input state="error" errorText="Invalid email" showHelpText />
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label = 'Label',
      helpText = 'Help text will be shown here',
      errorText = 'This field is required',
      state = 'default',
      addonType = 'default',
      addonText = '+91',
      showLabel = true,
      showHelpText = false,
      className,
      placeholder = 'Enter Text',
      disabled,
      id: idProp,
      ...props
    },
    ref
  ) => {
    const autoId = useId()
    const id = idProp ?? autoId

    const isDisabled = disabled || state === 'disabled' || state === 'filledDisabled'
    const hasAddonFirst = addonType === 'textFirst' || addonType === 'iconFirst'
    const hasAddonLast  = addonType === 'textLast'  || addonType === 'iconLast'
    const isIconAddon   = addonType === 'iconFirst' || addonType === 'iconLast'

    const addonEl = (
      <div
        className={cn(
          addonCva({ variant: isIconAddon ? 'icon' : 'text' }),
          hasAddonFirst
            ? 'border-r border-[var(--semantic-color/border/default,#e2e8f0)]'
            : 'border-l border-[var(--semantic-color/border/default,#e2e8f0)]'
        )}
        aria-hidden
      >
        {isIconAddon
          ? <Mail size={14} className="text-[var(--semantic-color/typography/secondary,#64748b)]" />
          : <span className="text-[11px] font-medium text-[var(--semantic-color/typography/secondary,#475569)] leading-none">{addonText}</span>
        }
      </div>
    )

    const showError = state === 'error' && !!errorText

    return (
      <div className={cn('flex w-full flex-col gap-1', className)}>
        {showLabel && (
          <label
            htmlFor={id}
            className="text-[12px] font-semibold leading-[1.4] text-[var(--semantic-color/typography/primary,#334155)]"
          >
            {label}
          </label>
        )}

        <div className={wrapCva({ state })}>
          {hasAddonFirst && addonEl}

          <input
            ref={ref}
            id={id}
            disabled={isDisabled}
            placeholder={placeholder}
            className={cn(
              'min-w-0 flex-1 bg-transparent font-normal leading-[1.5]',
              'text-[11px] text-[var(--semantic-color/typography/primary,#334155)] outline-none',
              'placeholder:text-[var(--semantic-color/typography/placeholder,#94a3b8)]',
              'disabled:cursor-not-allowed',
              addonType === 'default' ? 'px-3' : hasAddonFirst ? 'pl-2 pr-3' : 'pl-3 pr-2'
            )}
            {...props}
          />

          {hasAddonLast && addonEl}
        </div>

        {(showHelpText || showError) && (
          <p
            className={cn(
              'text-[11px] leading-[1.5]',
              showError
                ? 'text-[var(--semantic-color/typography/error,#dc2626)]'
                : 'text-[var(--semantic-color/typography/secondary,#334155)]'
            )}
          >
            {showError ? errorText : helpText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
export default Input
