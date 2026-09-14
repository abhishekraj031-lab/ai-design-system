import { type ReactNode, useEffect, useRef, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@ds/Button'
import { Checkbox } from '@ds/Checkbox'
import { RadioButton } from '@ds/RadioButton'
import { Tooltip } from '@ds/Tooltip'
import { Moon, Sun, CheckCircle, Trash2, Mail } from 'lucide-react'

// ── Dark mode toggle ─────────────────────────────────────────────────────────
function useDarkMode() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])
  return [dark, setDark] as const
}

// ── Section ref helper ───────────────────────────────────────────────────────
function useSection() {
  const ref = useRef<HTMLElement>(null)
  const scroll = () => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return { ref, scroll }
}

// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useDarkMode()
  const foundations = useSection()
  const components  = useSection()
  const patterns    = useSection()

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* ── Navigation ──────────────────────────────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex h-14 max-w-7xl items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-default">
              <span className="text-[10px] font-bold text-white leading-none">AI</span>
            </div>
            <span className="text-sm font-semibold text-neutral-text">Design</span>
            <span className="text-sm font-medium text-neutral-default">System</span>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={foundations.scroll}
              className="text-sm text-neutral-default hover:text-neutral-text transition-colors"
            >
              Foundations
            </button>
            <button
              onClick={components.scroll}
              className="text-sm text-neutral-default hover:text-neutral-text transition-colors"
            >
              Components
            </button>
            <button
              onClick={patterns.scroll}
              className="text-sm text-neutral-default hover:text-neutral-text transition-colors"
            >
              Patterns
            </button>
          </nav>

          {/* Dark mode */}
          <button
            onClick={() => setDark(d => !d)}
            aria-label="Toggle dark mode"
            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-default hover:text-neutral-text hover:bg-neutral-subtle transition-colors"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col justify-between pt-14">

        {/* Main hero text — bottom-left aligned like the reference */}
        <div className="flex flex-1 items-end pb-0">
          <div className="container max-w-7xl pb-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-default">
              V&nbsp;0.1
            </p>
            {/* Display text */}
            <h1
              className="select-none leading-[0.9] tracking-tight text-neutral-text"
              style={{ fontSize: 'clamp(6rem, 18vw, 18rem)', fontWeight: 700 }}
            >
              AI
            </h1>
            <p
              className="text-neutral-default leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)', fontWeight: 400 }}
            >
              design system
            </p>
          </div>
        </div>

        {/* Three category cards — pinned to bottom */}
        <div className="border-t border-border">
          <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-3">

            <button
              onClick={foundations.scroll}
              className="group flex flex-col gap-1.5 border-r border-border px-6 py-8 text-left transition-colors hover:bg-neutral-background"
            >
              <span className="text-xs font-medium text-neutral-default">01</span>
              <span className="text-xl font-semibold text-neutral-text group-hover:text-brand-default transition-colors">
                Foundations
              </span>
              <span className="text-sm text-neutral-default">
                Color tokens, typography &amp; spacing
              </span>
            </button>

            <button
              onClick={components.scroll}
              className="group flex flex-col gap-1.5 border-r border-border px-6 py-8 text-left transition-colors hover:bg-neutral-background"
            >
              <span className="text-xs font-medium text-neutral-default">02</span>
              <span className="text-xl font-semibold text-neutral-text group-hover:text-brand-default transition-colors">
                Components
              </span>
              <span className="text-sm text-neutral-default">
                Figma-connected React components
              </span>
            </button>

            <button
              onClick={patterns.scroll}
              className="group flex flex-col gap-1.5 px-6 py-8 text-left transition-colors hover:bg-neutral-background"
            >
              <span className="text-xs font-medium text-neutral-default">03</span>
              <span className="text-xl font-semibold text-neutral-text group-hover:text-brand-default transition-colors">
                Patterns
              </span>
              <span className="text-sm text-neutral-default">
                Reusable UI patterns &amp; compositions
              </span>
            </button>

          </div>
        </div>
      </section>

      {/* ── 01 Foundations ──────────────────────────────────────────────── */}
      <section ref={foundations.ref} className="border-t border-border bg-neutral-background/40">
        <div className="container max-w-7xl py-24">

          <SectionHeader index="01" title="Foundations" subtitle="Color tokens, typography &amp; spacing — the Figma role/state system wired to CSS variables." />

          <SubSection title="Role / Default">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              <Swatch bg="bg-brand-default"       text="text-white" label="Brand"       token="brand/default" />
              <Swatch bg="bg-teal-default"         text="text-white" label="Teal"         token="teal/default" />
              <Swatch bg="bg-error-default"        text="text-white" label="Error"        token="error/default" />
              <Swatch bg="bg-success-default"      text="text-white" label="Success"      token="success/default" />
              <Swatch bg="bg-warning-default"      text="text-white" label="Warning"      token="warning/default" />
              <Swatch bg="bg-caution-default"      text="text-white" label="Caution"      token="caution/default" />
              <Swatch bg="bg-information-default"  text="text-white" label="Information"  token="information/default" />
              <Swatch bg="bg-purple-default"       text="text-white" label="Purple"       token="purple/default" />
              <Swatch bg="bg-magenta-default"      text="text-white" label="Magenta"      token="magenta/default" />
              <Swatch bg="bg-neutral-default"      text="text-white" label="Neutral"      token="neutral/default" />
            </div>
          </SubSection>

          <SubSection title="Role / Background Tints">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              <Swatch bg="bg-brand-background"       text="text-brand-text"       label="Brand"       token="brand/bg" />
              <Swatch bg="bg-teal-background"         text="text-teal-text"         label="Teal"         token="teal/bg" />
              <Swatch bg="bg-error-background"        text="text-error-text"        label="Error"        token="error/bg" />
              <Swatch bg="bg-success-background"      text="text-success-text"      label="Success"      token="success/bg" />
              <Swatch bg="bg-warning-background"      text="text-warning-text"      label="Warning"      token="warning/bg" />
              <Swatch bg="bg-caution-background"      text="text-caution-text"      label="Caution"      token="caution/bg" />
              <Swatch bg="bg-information-background"  text="text-information-text"  label="Information"  token="info/bg" />
              <Swatch bg="bg-purple-background"       text="text-purple-text"       label="Purple"       token="purple/bg" />
              <Swatch bg="bg-magenta-background"      text="text-magenta-text"      label="Magenta"      token="magenta/bg" />
              <Swatch bg="bg-neutral-background border border-neutral-light" text="text-neutral-text" label="Neutral" token="neutral/bg" />
            </div>
          </SubSection>

          <SubSection title="Typography Scale">
            <div className="space-y-3">
              {[
                { cls: 'text-h1', label: 'H1 · 48px · Bold',   sample: 'The quick brown fox' },
                { cls: 'text-h3', label: 'H3 · 36px · Bold',   sample: 'The quick brown fox' },
                { cls: 'text-h5', label: 'H5 · 28px · Bold',   sample: 'The quick brown fox' },
                { cls: 'text-b2', label: 'B2 · 16px · Regular',sample: 'The quick brown fox jumps over the lazy dog.' },
                { cls: 'text-l1', label: 'L1 · 14px · Label',  sample: 'Label text · SemiBold' },
                { cls: 'text-l3', label: 'L3 · 11px · Label',  sample: 'Caption · small label text' },
              ].map(({ cls, label, sample }) => (
                <div key={cls} className="flex items-baseline gap-6">
                  <span className="w-36 shrink-0 text-xs text-neutral-default font-mono">{label}</span>
                  <span className={`${cls} text-neutral-text leading-tight`}>{sample}</span>
                </div>
              ))}
            </div>
          </SubSection>

        </div>
      </section>

      <Separator />

      {/* ── 02 Components ───────────────────────────────────────────────── */}
      <section ref={components.ref}>
        <div className="container max-w-7xl py-24">

          <SectionHeader index="02" title="Components" subtitle="Figma-sourced React components built with CVA · compound variants · semantic tokens." />

          {/* Button component */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-h6 font-bold text-neutral-text">Button</h3>
              <Badge variant="outline">node 118:1517</Badge>
              <span className="text-xs text-neutral-default font-mono">variant · intent · size · isLoading</span>
            </div>

            <SubSection title="variant=filled">
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="filled" intent="brand">Brand</Button>
                <Button variant="filled" intent="success">Success</Button>
                <Button variant="filled" intent="warning">Warning</Button>
                <Button variant="filled" intent="destructive"><Trash2 />Destructive</Button>
                <Button variant="filled" intent="brand" isLoading>Loading</Button>
                <Button variant="filled" intent="brand" disabled>Disabled</Button>
              </div>
            </SubSection>

            <SubSection title="variant=outline">
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="outline" intent="brand">Brand</Button>
                <Button variant="outline" intent="success"><CheckCircle />Success</Button>
                <Button variant="outline" intent="warning">Warning</Button>
                <Button variant="outline" intent="destructive">Destructive</Button>
                <Button variant="outline" intent="brand" isLoading>Loading</Button>
                <Button variant="outline" intent="brand" disabled>Disabled</Button>
              </div>
            </SubSection>

            <SubSection title="variant=link">
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="link" intent="brand">Brand</Button>
                <Button variant="link" intent="success">Success</Button>
                <Button variant="link" intent="warning">Warning</Button>
                <Button variant="link" intent="destructive">Destructive</Button>
                <Button variant="link" intent="brand" disabled>Disabled</Button>
              </div>
            </SubSection>

            <SubSection title="Sizes — 44 / 40 / 36px">
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="filled" size="xl"><Mail />XL · 44px</Button>
                <Button variant="filled" size="md">MD · 40px</Button>
                <Button variant="filled" size="sm">SM · 36px</Button>
                <Button variant="outline" size="xl">XL Outline</Button>
                <Button variant="outline" size="md">MD Outline</Button>
                <Button variant="outline" size="sm">SM Outline</Button>
              </div>
            </SubSection>
          </div>

          {/* Badges */}
          <div className="mb-16">
            <h3 className="text-h6 font-bold text-neutral-text mb-6">Badge</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>

          {/* Input */}
          <div className="mb-16">
            <h3 className="text-h6 font-bold text-neutral-text mb-6">Input</h3>
            <div className="grid gap-4 max-w-sm">
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="pass">Password</Label>
                <Input id="pass" type="password" placeholder="••••••••" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="dis">Disabled</Label>
                <Input id="dis" placeholder="Can't touch this" disabled />
              </div>
            </div>
          </div>

          {/* Tooltip */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-h6 font-bold text-neutral-text">Tooltip</h3>
              <Badge variant="outline">node 106:689</Badge>
              <span className="text-xs text-neutral-default font-mono">position · showBody · showClose · showArrow</span>
            </div>

            <SubSection title="Bottom positions">
              <div className="flex flex-wrap gap-10">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">bottomLeft</span>
                  <Tooltip title="Heading" body="Tooltips are used to describe or identify an element." position="bottomLeft" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">bottomCentre</span>
                  <Tooltip title="Heading" body="Tooltips are used to describe or identify an element." position="bottomCentre" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">bottomRight</span>
                  <Tooltip title="Heading" body="Tooltips are used to describe or identify an element." position="bottomRight" />
                </div>
              </div>
            </SubSection>

            <SubSection title="Top positions">
              <div className="flex flex-wrap gap-10">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">topLeft</span>
                  <Tooltip title="Heading" body="Tooltips are used to describe or identify an element." position="topLeft" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">topCentre</span>
                  <Tooltip title="Heading" body="Tooltips are used to describe or identify an element." position="topCentre" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">topRight</span>
                  <Tooltip title="Heading" body="Tooltips are used to describe or identify an element." position="topRight" />
                </div>
              </div>
            </SubSection>

            <SubSection title="Side positions">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">leftCentre</span>
                  <Tooltip title="Heading" body="Tooltips are used to describe or identify an element." position="leftCentre" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">rightCentre</span>
                  <Tooltip title="Heading" body="Tooltips are used to describe or identify an element." position="rightCentre" />
                </div>
              </div>
            </SubSection>

            <SubSection title="Props — showBody · showClose · showArrow">
              <div className="flex flex-wrap gap-10">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">title only</span>
                  <Tooltip title="Title only" showBody={false} position="bottomLeft" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">no close</span>
                  <Tooltip title="No close button" body="Body text here." position="bottomLeft" showClose={false} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">no arrow</span>
                  <Tooltip title="No arrow" body="Body text here." position="bottomLeft" showArrow={false} />
                </div>
              </div>
            </SubSection>
          </div>

          {/* ── Checkbox ──────────────────────────────────────────────────── */}
          <div className="mb-16 mt-16">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-h6 font-bold text-neutral-text">Checkbox</h3>
              <Badge variant="outline">node 19:2924</Badge>
              <span className="text-xs text-neutral-default font-mono">checked · indeterminate · disabled · label</span>
            </div>

            <SubSection title="States">
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">default</span>
                  <Checkbox />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">checked</span>
                  <Checkbox checked onChange={() => {}} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">indeterminate</span>
                  <Checkbox indeterminate />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">disabled</span>
                  <Checkbox disabled />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">checked + disabled</span>
                  <Checkbox checked disabled onChange={() => {}} />
                </div>
              </div>
            </SubSection>

            <SubSection title="With label">
              <div className="flex flex-wrap items-center gap-8">
                <Checkbox label="Accept terms &amp; conditions" />
                <Checkbox label="Checked with label" checked onChange={() => {}} />
                <Checkbox label="Indeterminate" indeterminate />
                <Checkbox label="Disabled option" disabled />
                <Checkbox label="Checked &amp; disabled" checked disabled onChange={() => {}} />
              </div>
            </SubSection>
          </div>

          {/* ── RadioButton ──────────────────────────────────────────────── */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-h6 font-bold text-neutral-text">RadioButton</h3>
              <Badge variant="outline">node 19:2988</Badge>
              <span className="text-xs text-neutral-default font-mono">checked · disabled · label</span>
            </div>

            <SubSection title="States">
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">default</span>
                  <RadioButton />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">checked</span>
                  <RadioButton checked onChange={() => {}} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">disabled</span>
                  <RadioButton disabled />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-default">checked + disabled</span>
                  <RadioButton checked disabled onChange={() => {}} />
                </div>
              </div>
            </SubSection>

            <SubSection title="With label">
              <div className="flex flex-wrap items-center gap-8">
                <RadioButton label="Option A" name="demo" value="a" />
                <RadioButton label="Option B" name="demo" value="b" checked onChange={() => {}} />
                <RadioButton label="Disabled" name="demo" value="c" disabled />
                <RadioButton label="Checked &amp; disabled" name="demo" value="d" checked disabled onChange={() => {}} />
              </div>
            </SubSection>

            <SubSection title="Radio group — single selection">
              <RadioGroup />
            </SubSection>
          </div>

        </div>
      </section>

      <Separator />

      {/* ── 03 Patterns ─────────────────────────────────────────────────── */}
      <section ref={patterns.ref} className="border-t border-border bg-neutral-background/40">
        <div className="container max-w-7xl py-24">

          <SectionHeader index="03" title="Patterns" subtitle="Reusable UI compositions built from DS components — ready to drop into any screen." />

          {/* Alert pattern */}
          <SubSection title="Alert · intent variants">
            <div className="space-y-3 max-w-lg">
              {([
                { intent: 'brand',       bg: 'bg-brand-background',       border: 'border-brand-default',       text: 'text-brand-text',       label: 'Info',        msg: 'Your changes have been saved successfully.' },
                { intent: 'success',     bg: 'bg-success-background',     border: 'border-success-default',     text: 'text-success-text',     label: 'Success',     msg: 'Account created. Welcome aboard!' },
                { intent: 'warning',     bg: 'bg-warning-background',     border: 'border-warning-default',     text: 'text-warning-text',     label: 'Warning',     msg: 'Your session will expire in 5 minutes.' },
                { intent: 'destructive', bg: 'bg-error-background',       border: 'border-error-default',       text: 'text-error-text',       label: 'Error',       msg: 'Something went wrong. Please try again.' },
              ] as const).map(({ bg, border, text, label, msg }) => (
                <div key={label} className={`flex items-start gap-3 rounded-lg border px-4 py-3 ${bg} ${border}`}>
                  <span className={`text-xs font-semibold uppercase tracking-wide mt-0.5 ${text}`}>{label}</span>
                  <span className={`text-sm ${text}`}>{msg}</span>
                </div>
              ))}
            </div>
          </SubSection>

          {/* CTA pattern */}
          <SubSection title="CTA strip">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-brand-default bg-brand-background px-6 py-5 max-w-2xl">
              <div>
                <p className="text-sm font-semibold text-brand-text">Start building with AI Design System</p>
                <p className="text-sm text-brand-default mt-0.5">Drop a Figma link and ds-team builds the component for you.</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button variant="filled" size="sm">Get started</Button>
                <Button variant="outline" size="sm" intent="brand">Learn more</Button>
              </div>
            </div>
          </SubSection>

        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-border">
        <div className="container max-w-7xl flex h-14 items-center justify-between">
          <span className="text-xs text-neutral-default">AI Design System · V 0.1</span>
          <span className="text-xs text-neutral-default">Figma → CVA → Semantic Tokens</span>
        </div>
      </footer>

    </div>
  )
}

// ── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({ index, title, subtitle }: { index: string; title: string; subtitle: string }) {
  return (
    <div className="mb-14">
      <div className="flex items-baseline gap-4 mb-2">
        <span className="text-xs font-medium text-neutral-default">{index}</span>
        <h2
          className="font-bold text-neutral-text leading-tight tracking-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
        >
          {title}
        </h2>
      </div>
      <p className="text-base text-neutral-default max-w-xl" dangerouslySetInnerHTML={{ __html: subtitle }} />
    </div>
  )
}

function SubSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-default mb-4">{title}</p>
      {children}
    </div>
  )
}

function Swatch({ bg, text, label, token }: { bg: string; text: string; label: string; token: string }) {
  return (
    <div className={`${bg} ${text} rounded-md px-3 py-2.5`}>
      <div className="text-xs font-semibold">{label}</div>
      <div className="text-[10px] opacity-70 font-mono mt-0.5">{token}</div>
    </div>
  )
}

function RadioGroup() {
  const [selected, setSelected] = useState<string>('b')
  const options = [
    { value: 'a', label: 'Standard plan — $9 / month' },
    { value: 'b', label: 'Pro plan — $29 / month' },
    { value: 'c', label: 'Enterprise — custom pricing' },
  ]
  return (
    <div className="flex flex-col gap-3">
      {options.map(opt => (
        <RadioButton
          key={opt.value}
          name="plan"
          value={opt.value}
          label={opt.label}
          checked={selected === opt.value}
          onChange={() => setSelected(opt.value)}
        />
      ))}
    </div>
  )
}
