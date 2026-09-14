import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: { layout: 'fullscreen', docs: { canvas: { sourceState: 'hidden' } } },
}
export default meta
type Story = StoryObj

// ─── Base palette data ────────────────────────────────────────
const RAMPS: { name: string; shades: { step: string; hex: string }[] }[] = [
  { name: 'Brand', shades: [
    { step: '50',  hex: '#E8F0FC' }, { step: '100', hex: '#D1E3FA' },
    { step: '200', hex: '#A4C7F4' }, { step: '300', hex: '#77ABEE' },
    { step: '400', hex: '#2577E5' }, { step: '500', hex: '#1960BD' },
    { step: '600', hex: '#1851A0' }, { step: '700', hex: '#124287' },
    { step: '800', hex: '#0B2D66' }, { step: '900', hex: '#041943' },
  ]},
  { name: 'Blue', shades: [
    { step: '50',  hex: '#EBF8FF' }, { step: '100', hex: '#B9E7FE' },
    { step: '200', hex: '#9ADDFE' }, { step: '300', hex: '#67CBFE' },
    { step: '400', hex: '#2BB7FD' }, { step: '500', hex: '#028CE9' },
    { step: '600', hex: '#0274C0' }, { step: '700', hex: '#025B97' },
    { step: '800', hex: '#01436F' }, { step: '900', hex: '#01253D' },
  ]},
  { name: 'Green', shades: [
    { step: '50',  hex: '#ECFDF1' }, { step: '100', hex: '#C8F9E0' },
    { step: '200', hex: '#93F0C5' }, { step: '300', hex: '#61E5B1' },
    { step: '400', hex: '#36D39A' }, { step: '500', hex: '#10BC83' },
    { step: '600', hex: '#059E6F' }, { step: '700', hex: '#047857' },
    { step: '800', hex: '#065F46' }, { step: '900', hex: '#064E3B' },
  ]},
  { name: 'Orange', shades: [
    { step: '50',  hex: '#FFF7ED' }, { step: '100', hex: '#FFE9CC' },
    { step: '200', hex: '#FED09A' }, { step: '300', hex: '#FDAF5E' },
    { step: '400', hex: '#FA8423' }, { step: '500', hex: '#E56106' },
    { step: '600', hex: '#B84509' }, { step: '700', hex: '#903009' },
    { step: '800', hex: '#64220C' }, { step: '900', hex: '#471A0A' },
  ]},
  { name: 'Red', shades: [
    { step: '50',  hex: '#FEECEC' }, { step: '100', hex: '#FED8D8' },
    { step: '200', hex: '#FECACA' }, { step: '300', hex: '#FCA5A5' },
    { step: '400', hex: '#F87171' }, { step: '500', hex: '#EF4444' },
    { step: '600', hex: '#DC2626' }, { step: '700', hex: '#B91C1C' },
    { step: '800', hex: '#991B1B' }, { step: '900', hex: '#7F1D1D' },
  ]},
  { name: 'Yellow', shades: [
    { step: '50',  hex: '#FFFBEB' }, { step: '100', hex: '#FEF2C3' },
    { step: '200', hex: '#FDE791' }, { step: '300', hex: '#FCD75F' },
    { step: '400', hex: '#FBBC19' }, { step: '500', hex: '#D88B09' },
    { step: '600', hex: '#B36205' }, { step: '700', hex: '#883F07' },
    { step: '800', hex: '#5D2909' }, { step: '900', hex: '#3F1C08' },
  ]},
  { name: 'Purple', shades: [
    { step: '50',  hex: '#FAF5FF' }, { step: '100', hex: '#EDE9FE' },
    { step: '200', hex: '#DDD6FE' }, { step: '300', hex: '#C4B5FD' },
    { step: '400', hex: '#A78BFA' }, { step: '500', hex: '#8B5CF6' },
    { step: '600', hex: '#7C3AED' }, { step: '700', hex: '#6D28D9' },
    { step: '800', hex: '#5B21B6' }, { step: '900', hex: '#4C1D95' },
  ]},
  { name: 'Magenta', shades: [
    { step: '50',  hex: '#FEECF2' }, { step: '100', hex: '#FDD8E4' },
    { step: '200', hex: '#FDBED3' }, { step: '300', hex: '#FC92B5' },
    { step: '400', hex: '#FB6597' }, { step: '500', hex: '#FA2E72' },
    { step: '600', hex: '#D81858' }, { step: '700', hex: '#B3053F' },
    { step: '800', hex: '#7C032C' }, { step: '900', hex: '#570A23' },
  ]},
  { name: 'Teal', shades: [
    { step: '50',  hex: '#F0FDFA' }, { step: '100', hex: '#B8F9EC' },
    { step: '200', hex: '#93F5E2' }, { step: '300', hex: '#61EAD5' },
    { step: '400', hex: '#34D5C1' }, { step: '500', hex: '#15BDAA' },
    { step: '600', hex: '#0E9B8E' }, { step: '700', hex: '#0E6D65' },
    { step: '800', hex: '#105652' }, { step: '900', hex: '#0E3936' },
  ]},
  { name: 'Grey', shades: [
    { step: '50',  hex: '#F4F7FA' }, { step: '100', hex: '#D8E3EE' },
    { step: '200', hex: '#B2C1D7' }, { step: '300', hex: '#8DA4BE' },
    { step: '400', hex: '#6E8AAB' }, { step: '500', hex: '#576A84' },
    { step: '600', hex: '#4B5768' }, { step: '700', hex: '#384352' },
    { step: '800', hex: '#242E3C' }, { step: '900', hex: '#151B23' },
  ]},
]

// ─── Semantic token data ──────────────────────────────────────
const SEMANTIC_GROUPS: { group: string; tokens: { name: string; hex: string; ref: string; border?: boolean }[] }[] = [
  { group: 'Typography', tokens: [
    { name: '--semantic-color/typography/primary',     hex: '#384352', ref: 'grey-700' },
    { name: '--semantic-color/typography/secondary',   hex: '#576A84', ref: 'grey-500' },
    { name: '--semantic-color/typography/tag',         hex: '#4B5768', ref: 'grey-600' },
    { name: '--semantic-color/typography/disable',     hex: '#6E8AAB', ref: 'grey-400' },
    { name: '--semantic-color/typography/placeholder', hex: '#8DA4BE', ref: 'grey-300' },
    { name: '--semantic-color/typography/on-surface',  hex: '#FFFFFF', ref: 'white', border: true },
    { name: '--semantic-color/typography/brand',       hex: '#1960BD', ref: 'brand-500' },
    { name: '--semantic-color/typography/info',        hex: '#025B97', ref: 'blue-700' },
    { name: '--semantic-color/typography/success',     hex: '#059E6F', ref: 'green-600' },
    { name: '--semantic-color/typography/warning',     hex: '#E56106', ref: 'orange-500' },
    { name: '--semantic-color/typography/error',       hex: '#EF4444', ref: 'red-500' },
  ]},
  { group: 'Background · Neutral', tokens: [
    { name: '--semantic-color/bg/neutral/white',       hex: '#FFFFFF', ref: 'white', border: true },
    { name: '--semantic-color/bg/neutral/subtle',      hex: '#F4F7FA', ref: 'grey-50' },
    { name: '--semantic-color/bg/neutral/muted',       hex: '#D8E3EE', ref: 'grey-100' },
    { name: '--semantic-color/bg/neutral/inverse',     hex: '#000000', ref: 'black' },
  ]},
  { group: 'Background · Brand', tokens: [
    { name: '--semantic-color/bg/brand/subtle',    hex: '#E8F0FC', ref: 'brand-50' },
    { name: '--semantic-color/bg/brand/muted',     hex: '#D1E3FA', ref: 'brand-100' },
    { name: '--semantic-color/bg/brand/default',   hex: '#2577E5', ref: 'brand-400' },
    { name: '--semantic-color/bg/brand/emphasis',  hex: '#1960BD', ref: 'brand-500' },
    { name: '--semantic-color/bg/brand/active',    hex: '#1851A0', ref: 'brand-600' },
  ]},
  { group: 'Background · Success', tokens: [
    { name: '--semantic-color/bg/success/subtle',   hex: '#ECFDF1', ref: 'green-50' },
    { name: '--semantic-color/bg/success/muted',    hex: '#C8F9E0', ref: 'green-100' },
    { name: '--semantic-color/bg/success/default',  hex: '#059E6F', ref: 'green-600' },
    { name: '--semantic-color/bg/success/emphasis', hex: '#047857', ref: 'green-700' },
  ]},
  { group: 'Background · Warning', tokens: [
    { name: '--semantic-color/bg/warning/subtle',   hex: '#FFF7ED', ref: 'orange-50' },
    { name: '--semantic-color/bg/warning/muted',    hex: '#FFE9CC', ref: 'orange-100' },
    { name: '--semantic-color/bg/warning/default',  hex: '#E56106', ref: 'orange-500' },
    { name: '--semantic-color/bg/warning/emphasis', hex: '#B84509', ref: 'orange-600' },
    { name: '--semantic-color/bg/warning/active',   hex: '#903009', ref: 'orange-700' },
  ]},
  { group: 'Background · Error', tokens: [
    { name: '--semantic-color/bg/error/subtle',   hex: '#FEECEC', ref: 'red-50' },
    { name: '--semantic-color/bg/error/muted',    hex: '#FED8D8', ref: 'red-100' },
    { name: '--semantic-color/bg/error/default',  hex: '#EF4444', ref: 'red-500' },
    { name: '--semantic-color/bg/error/emphasis', hex: '#DC2626', ref: 'red-600' },
    { name: '--semantic-color/bg/error/active',   hex: '#B91C1C', ref: 'red-700' },
  ]},
  { group: 'Border', tokens: [
    { name: '--semantic-color/border/default',      hex: '#D8E3EE', ref: 'grey-100' },
    { name: '--semantic-color/border/subtle',       hex: '#B2C1D7', ref: 'grey-200' },
    { name: '--semantic-color/border/brand',        hex: '#2577E5', ref: 'brand-400' },
    { name: '--semantic-color/border/brand-hover',  hex: '#1960BD', ref: 'brand-500' },
    { name: '--semantic-color/border/brand-active', hex: '#1851A0', ref: 'brand-600' },
    { name: '--semantic-color/border/success',      hex: '#059E6F', ref: 'green-600' },
    { name: '--semantic-color/border/error',        hex: '#EF4444', ref: 'red-500' },
    { name: '--semantic-color/border/warning',      hex: '#E56106', ref: 'orange-500' },
  ]},
]

// ─── Shared styles ────────────────────────────────────────────
const wrap: React.CSSProperties = {
  fontFamily: "'Manrope', 'Inter', system-ui, sans-serif",
  padding: '40px',
  background: '#fff',
  minHeight: '100vh',
}
const pageTitle: React.CSSProperties = {
  fontSize: 28, fontWeight: 700, color: '#384352', marginBottom: 4,
}
const pageDesc: React.CSSProperties = {
  fontSize: 14, color: '#576A84', marginBottom: 48, lineHeight: 1.6,
}
const sectionTitle: React.CSSProperties = {
  fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase',
  color: '#8DA4BE', marginBottom: 20, marginTop: 48,
}
const divider: React.CSSProperties = {
  border: 'none', borderTop: '1px solid #D8E3EE', margin: '0 0 20px',
}

// ─── Base Colors story ────────────────────────────────────────
export const BaseColors: Story = {
  name: 'Base Palette',
  render: () => (
    <div style={wrap}>
      <h1 style={pageTitle}>Color palette</h1>
      <p style={pageDesc}>
        Ten color ramps from 50–900. Each step is a HSL-defined token in <code>src/index.css</code>.
        Semantic tokens always reference these base ramps — never raw hex.
      </p>
      {RAMPS.map(ramp => (
        <div key={ramp.name} style={{ marginBottom: 32 }}>
          <p style={sectionTitle}>{ramp.name}</p>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {ramp.shades.map(s => (
              <div key={s.step} style={{ width: 72 }}>
                <div style={{
                  width: 72, height: 56,
                  borderRadius: 8,
                  background: s.hex,
                  border: '1px solid rgba(0,0,0,0.06)',
                  marginBottom: 6,
                }} />
                <div style={{ fontSize: 11, fontWeight: 600, color: '#384352' }}>{s.step}</div>
                <div style={{ fontSize: 10, fontFamily: 'monospace', color: '#6E8AAB' }}>{s.hex}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}

// ─── Semantic Colors story ────────────────────────────────────
export const SemanticColors: Story = {
  name: 'Semantic Tokens',
  render: () => (
    <div style={wrap}>
      <h1 style={pageTitle}>Semantic tokens</h1>
      <p style={pageDesc}>
        Semantic tokens bind base palette shades to roles in the UI. Component code never references
        a base colour directly — it always asks for a semantic role (e.g.{' '}
        <code>--semantic-color/typography/primary</code>) so themes can swap underneath.
      </p>
      {SEMANTIC_GROUPS.map(group => (
        <div key={group.group}>
          <p style={sectionTitle}>{group.group}</p>
          <hr style={divider} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {group.tokens.map(t => (
              <div key={t.name} style={{
                display: 'grid',
                gridTemplateColumns: '36px 1fr auto',
                alignItems: 'center',
                gap: 16,
                padding: '10px 0',
                borderBottom: '1px solid #F4F7FA',
              }}>
                <div style={{
                  width: 36, height: 36,
                  borderRadius: 6,
                  background: t.hex,
                  border: t.border ? '1px solid #D8E3EE' : '1px solid rgba(0,0,0,0.06)',
                  flexShrink: 0,
                }} />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#384352', fontFamily: 'monospace' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 11, color: '#8DA4BE', marginTop: 2 }}>→ {t.ref}</div>
                </div>
                <div style={{ fontSize: 12, fontFamily: 'monospace', color: '#576A84' }}>{t.hex}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}
