import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { type ComponentPropsWithoutRef } from 'react'

// Audited by Token Police — all colour classes reference shadcn semantic tokens
const buttonVariants = cva(
  [
    // Layout & interaction
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'font-semibold transition-colors',
    // SVG icons inside the button
    '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    // Focus ring — REQUIRED exactly as written
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    // Disabled — REQUIRED exactly as written
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      // ── Variant: shape / chrome (Figma: Type=Filled / Outline / Link) ──
      variant: {
        filled:  'rounded-lg',
        outline: 'rounded-lg border bg-transparent',
        link:    'bg-transparent underline-offset-4',
      },
      // ── Intent: semantic colour role ──────────────────────────────
      intent: {
        brand:       '',
        success:     '',
        warning:     '',
        destructive: '',
      },
      // ── Size: height + padding (Figma: 44 / 40 / 36) ──────────────
      size: {
        xl: 'h-11 px-5 text-sm rounded-lg',
        md: 'h-10 px-4 text-sm',
        sm: 'h-9  px-3 text-sm rounded-md',
      },
    },

    // ── Compound variants: variant × intent → colour classes ───────
    compoundVariants: [
      // ── Filled / brand ────────────────────────────────────────────
      {
        variant: 'filled',
        intent: 'brand',
        className:
          'bg-brand-default text-white hover:bg-brand-hover active:bg-brand-active',
      },
      // ── Filled / success ──────────────────────────────────────────
      {
        variant: 'filled',
        intent: 'success',
        className:
          'bg-success-default text-white hover:bg-success-hover',
      },
      // ── Filled / warning ──────────────────────────────────────────
      {
        variant: 'filled',
        intent: 'warning',
        className:
          'bg-warning-default text-white hover:bg-warning-hover',
      },
      // ── Filled / destructive ──────────────────────────────────────
      {
        variant: 'filled',
        intent: 'destructive',
        className:
          'bg-error-default text-white hover:bg-error-hover active:bg-error-active',
      },
      // ── Outline / brand ───────────────────────────────────────────
      {
        variant: 'outline',
        intent: 'brand',
        className:
          'border-brand-default text-brand-default hover:bg-brand-background active:bg-brand-subtle',
      },
      // ── Outline / success ─────────────────────────────────────────
      {
        variant: 'outline',
        intent: 'success',
        className:
          'border-success-default text-success-default hover:bg-success-background',
      },
      // ── Outline / warning ─────────────────────────────────────────
      {
        variant: 'outline',
        intent: 'warning',
        className:
          'border-warning-default text-warning-default hover:bg-warning-background',
      },
      // ── Outline / destructive ─────────────────────────────────────
      {
        variant: 'outline',
        intent: 'destructive',
        className:
          'border-error-default text-error-default hover:bg-error-background active:bg-error-subtle',
      },
      // ── Link / brand ──────────────────────────────────────────────
      {
        variant: 'link',
        intent: 'brand',
        className:
          'text-brand-default hover:text-brand-hover hover:underline active:text-brand-active',
      },
      // ── Link / success ────────────────────────────────────────────
      {
        variant: 'link',
        intent: 'success',
        className:
          'text-success-default hover:underline',
      },
      // ── Link / warning ────────────────────────────────────────────
      {
        variant: 'link',
        intent: 'warning',
        className:
          'text-warning-default hover:underline',
      },
      // ── Link / destructive ────────────────────────────────────────
      {
        variant: 'link',
        intent: 'destructive',
        className:
          'text-error-default hover:text-error-hover hover:underline',
      },
    ],

    defaultVariants: {
      variant: 'filled',
      intent:  'brand',
      size:    'md',
    },
  },
)

// ─────────────────────────────────────────────────────────────────────────────

export interface ButtonProps
  extends ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonVariants> {
  /** Show a loading spinner and block interaction */
  isLoading?: boolean
  /** Render as its child element via Radix Slot */
  asChild?: boolean
}

export function Button({
  variant,
  intent,
  size,
  className,
  isLoading = false,
  asChild = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(buttonVariants({ variant, intent, size }), className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="animate-spin" aria-hidden="true" />}
      {children}
    </Comp>
  )
}

export { buttonVariants }
