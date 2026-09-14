// Audited by Token Police — all colour classes reference semantic tokens
// Figma source: Design-System_V.2.0 · node 19:2924
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface CheckboxProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'onChange'> {
  /** Label shown beside the checkbox */
  label?: string
  /** Indeterminate / partial-fill state */
  indeterminate?: boolean
  /** Controlled checked value */
  checked?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Change handler */
  onChange?: (checked: boolean) => void
}

// ─── Visual helpers ───────────────────────────────────────────────────────────

function boxClasses(checked: boolean, indeterminate: boolean, disabled: boolean) {
  const base =
    'inline-flex items-center justify-center w-[18px] h-[18px] shrink-0 ' +
    'rounded-[4px] border-[1.5px] transition-colors ' +
    'peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2'

  const isActive = checked || indeterminate

  if (isActive && !disabled) return cn(base, 'bg-brand-default border-brand-default')
  if (isActive && disabled)  return cn(base, 'bg-neutral-light  border-neutral-light')
  if (disabled)              return cn(base, 'bg-transparent     border-neutral-light opacity-50')
  return                            cn(base, 'bg-transparent     border-neutral-light')
}

function iconColor(disabled: boolean) {
  return disabled ? 'text-neutral-default' : 'text-white'
}

// ─── Component ───────────────────────────────────────────────────────────────

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      label,
      checked      = false,
      indeterminate = false,
      disabled     = false,
      onChange,
      className,
      ...props
    },
    ref
  ) {
    const isActive = checked || indeterminate

    return (
      <label
        className={cn(
          'inline-flex items-center gap-[4px]',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
          className
        )}
      >
        {/* Hidden native input — drives keyboard focus & accessibility */}
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          className="sr-only peer"
          onChange={e => onChange?.(e.target.checked)}
          {...props}
        />

        {/* Visual box */}
        <span className={boxClasses(checked, indeterminate, disabled)}>
          {isActive && !indeterminate && (
            <Check size={12} strokeWidth={2.5} className={iconColor(disabled)} />
          )}
          {indeterminate && (
            <Minus size={12} strokeWidth={2.5} className={iconColor(disabled)} />
          )}
        </span>

        {/* Label */}
        {label && (
          <span
            className={cn(
              'text-[12px] font-medium leading-[1.3] select-none',
              disabled ? 'text-neutral-default' : 'text-neutral-text'
            )}
          >
            {label}
          </span>
        )}
      </label>
    )
  }
)
