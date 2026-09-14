/** @type {import('tailwindcss').Config} */

// Helper — wraps a CSS variable name so Tailwind can add opacity modifiers
// e.g. hsl(var(--brand-default) / <alpha>) → bg-brand-default/50 works
const hsl = (v) => `hsl(var(${v}) / <alpha-value>)`

export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        /* ────────────────────────────────────────────────────
           SHADCN COMPAT — required for shadcn/ui primitives
           ──────────────────────────────────────────────────── */
        border:     hsl('--border'),
        input:      hsl('--input'),
        ring:       hsl('--ring'),
        background: hsl('--background'),
        foreground: hsl('--foreground'),
        primary: {
          DEFAULT:    hsl('--primary'),
          foreground: hsl('--primary-foreground'),
        },
        secondary: {
          DEFAULT:    hsl('--secondary'),
          foreground: hsl('--secondary-foreground'),
        },
        destructive: {
          DEFAULT:    hsl('--destructive'),
          foreground: hsl('--destructive-foreground'),
        },
        muted: {
          DEFAULT:    hsl('--muted'),
          foreground: hsl('--muted-foreground'),
        },
        accent: {
          DEFAULT:    hsl('--accent'),
          foreground: hsl('--accent-foreground'),
        },
        popover: {
          DEFAULT:    hsl('--popover'),
          foreground: hsl('--popover-foreground'),
        },
        card: {
          DEFAULT:    hsl('--card'),
          foreground: hsl('--card-foreground'),
        },

        /* ────────────────────────────────────────────────────
           TIER 2 — SEMANTIC TOKENS (use these in DS components)
           Pattern: bg-{role}-{state}, text-{role}-{state}
           e.g. bg-brand-default, text-error-text
           ──────────────────────────────────────────────────── */

        // Brand
        brand: {
          background: hsl('--brand-background'),
          subtle:     hsl('--brand-subtle'),
          light:      hsl('--brand-light'),
          default:    hsl('--brand-default'),
          hover:      hsl('--brand-hover'),
          active:     hsl('--brand-active'),
          emphasis:   hsl('--brand-emphasis'),
          text:       hsl('--brand-text'),
        },

        // Information
        information: {
          background: hsl('--information-background'),
          subtle:     hsl('--information-subtle'),
          light:      hsl('--information-light'),
          default:    hsl('--information-default'),
          hover:      hsl('--information-hover'),
          active:     hsl('--information-active'),
          emphasis:   hsl('--information-emphasis'),
          text:       hsl('--information-text'),
        },

        // Success
        success: {
          background: hsl('--success-background'),
          subtle:     hsl('--success-subtle'),
          light:      hsl('--success-light'),
          default:    hsl('--success-default'),
          hover:      hsl('--success-hover'),
          active:     hsl('--success-active'),
          emphasis:   hsl('--success-emphasis'),
          text:       hsl('--success-text'),
        },

        // Warning
        warning: {
          background: hsl('--warning-background'),
          subtle:     hsl('--warning-subtle'),
          light:      hsl('--warning-light'),
          default:    hsl('--warning-default'),
          hover:      hsl('--warning-hover'),
          active:     hsl('--warning-active'),
          emphasis:   hsl('--warning-emphasis'),
          text:       hsl('--warning-text'),
        },

        // Error
        error: {
          background: hsl('--error-background'),
          subtle:     hsl('--error-subtle'),
          light:      hsl('--error-light'),
          default:    hsl('--error-default'),
          hover:      hsl('--error-hover'),
          active:     hsl('--error-active'),
          emphasis:   hsl('--error-emphasis'),
          text:       hsl('--error-text'),
        },

        // Caution
        caution: {
          background: hsl('--caution-background'),
          subtle:     hsl('--caution-subtle'),
          light:      hsl('--caution-light'),
          default:    hsl('--caution-default'),
          hover:      hsl('--caution-hover'),
          active:     hsl('--caution-active'),
          emphasis:   hsl('--caution-emphasis'),
          text:       hsl('--caution-text'),
        },

        // Purple
        purple: {
          background: hsl('--purple-background'),
          subtle:     hsl('--purple-subtle'),
          light:      hsl('--purple-light'),
          default:    hsl('--purple-default'),
          hover:      hsl('--purple-hover'),
          active:     hsl('--purple-active'),
          emphasis:   hsl('--purple-emphasis'),
          text:       hsl('--purple-text'),
        },

        // Magenta
        magenta: {
          background: hsl('--magenta-background'),
          subtle:     hsl('--magenta-subtle'),
          light:      hsl('--magenta-light'),
          default:    hsl('--magenta-default'),
          hover:      hsl('--magenta-hover'),
          active:     hsl('--magenta-active'),
          emphasis:   hsl('--magenta-emphasis'),
          text:       hsl('--magenta-text'),
        },

        // Teal
        teal: {
          background: hsl('--teal-background'),
          subtle:     hsl('--teal-subtle'),
          light:      hsl('--teal-light'),
          default:    hsl('--teal-default'),
          hover:      hsl('--teal-hover'),
          active:     hsl('--teal-active'),
          emphasis:   hsl('--teal-emphasis'),
          text:       hsl('--teal-text'),
        },

        // Tooltip (Tier 3 — component token, always dark surface)
        tooltip: {
          surface: hsl('--tooltip-surface'),
          text:    hsl('--tooltip-text'),
          body:    hsl('--tooltip-body'),
        },

        // Neutral
        neutral: {
          background: hsl('--neutral-background'),
          subtle:     hsl('--neutral-subtle'),
          light:      hsl('--neutral-light'),
          default:    hsl('--neutral-default'),
          hover:      hsl('--neutral-hover'),
          active:     hsl('--neutral-active'),
          emphasis:   hsl('--neutral-emphasis'),
          text:       hsl('--neutral-text'),
        },
      },

      /* ────────────────────────────────────────────────────
         BORDER RADIUS — mapped to --radius variable
         ──────────────────────────────────────────────────── */
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      /* ────────────────────────────────────────────────────
         TYPOGRAPHY — Figma: Poppins 15-style scale
         ──────────────────────────────────────────────────── */
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Labels
        'l3': ['0.6875rem', { lineHeight: '1.5',   fontWeight: '400' }],  // 11px L3
        'l2': ['0.75rem',   { lineHeight: '1.4',   fontWeight: '400' }],  // 12px L2
        'l1': ['0.875rem',  { lineHeight: '1.3',   fontWeight: '400' }],  // 14px L1
        // Body
        'b2': ['1rem',      { lineHeight: '1.25',  fontWeight: '400' }],  // 16px B2
        'b1': ['1.25rem',   { lineHeight: '1.25',  fontWeight: '700' }],  // 20px B1
        // Headings
        'h6': ['1.5rem',    { lineHeight: '1.1',   fontWeight: '700' }],  // 24px
        'h5': ['1.75rem',   { lineHeight: '1.1',   fontWeight: '700' }],  // 28px
        'h4': ['2rem',      { lineHeight: '1.1',   fontWeight: '700' }],  // 32px
        'h3': ['2.25rem',   { lineHeight: '1.1',   fontWeight: '700' }],  // 36px
        'h2': ['2.5rem',    { lineHeight: '1.1',   fontWeight: '700' }],  // 40px
        'h1': ['3rem',      { lineHeight: '1.1',   fontWeight: '700' }],  // 48px
      },

      /* ────────────────────────────────────────────────────
         ANIMATIONS (shadcn accordion)
         ──────────────────────────────────────────────────── */
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
