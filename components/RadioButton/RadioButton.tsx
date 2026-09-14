// Audited by Token Police — all colour classes reference semantic tokens
// Figma source: Design-System_V.2.0 · node 19:2988
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface RadioButtonProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'onChange'> {
  /** Label shown beside the radio button */
  label?: string
  /** Controlled checked value */
  checked?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Change handler — receives the value string */
  onChange?: (checked: boolean) => void
}

// ─── Visual helpers ───────────────────────────────────────────────────────────

function ringClasses(checked: boolean, disabled: boolean) {
  const base =
    'inline-flex items-center justify-center w-[18px] h-[18px] shrink-0 ' +
    'rounded-full border-[1.5px] transition-colors ' +
    'peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2'

  if (checked && !disabled) return cn(base, 'border-brand-default bg-transparent')
  if (checked && disabled)  return cn(base, 'border-neutral-light  bg-transparent opacity-50')
  if (disabled)             return cn(base, 'border-neutral-light  bg-transparent opacity-50')
  return                           cn(base, 'border-neutral-light  bg-transparent')
}

function dotClasses(checked: boolean, disabled: boolean) {
  const base = 'w-[8px] h-[8px] rounded-full transition-colors'

  if (!checked)             return cn(base, 'opacity-0')
  if (checked && !disabled) return cn(base, 'bg-brand-default')
  return                           cn(base, 'bg-neutral-default')
}

// ─── Component ───────────────────────────────────────────────────────────────

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  function RadioButton(
    {
      label,
      checked   = false,
      disabled  = false,
      onChange,
      className,
      ...props
    },
    ref
  ) {
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
          type="radio"
          checked={checked}
          disabled={disabled}
          className="sr-only peer"
          onChange={e => onChange?.(e.target.checked)}
          {...props}
        />

        {/* Visual ring + dot */}
        <span className={ringClasses(checked, disabled)}>
          <span className={dotClasses(checked, disabled)} />
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

RadioButton.displayName = 'RadioButton'
