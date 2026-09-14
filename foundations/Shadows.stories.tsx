import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Foundations/Shadows',
  parameters: { layout: 'fullscreen', docs: { canvas: { sourceState: 'hidden' } } },
}
export default meta
type Story = StoryObj

const SHADOWS = [
  {
    name: 'Shadow / sm',
    token: '--shadow-sm',
    value: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
    usage: 'Subtle lift. Cards, table rows, inline elements.',
  },
  {
    name: 'Shadow / md',
    token: '--shadow-md',
    value: '0 4px 12px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)',
    usage: 'Default elevation. Dropdowns, popovers, tooltips.',
  },
  {
    name: 'Shadow / lg',
    token: '--shadow-lg',
    value: '0 8px 24px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)',
    usage: 'Prominent layer. Drawers, side panels.',
  },
  {
    name: 'Shadow / xl',
    token: '--shadow-xl',
    value: '0 16px 48px rgba(0,0,0,0.14), 0 8px 16px rgba(0,0,0,0.08)',
    usage: 'Focused presence. Modals, dialogs, overlays.',
  },
]

export const ElevationScale: Story = {
  name: 'Elevation Scale',
  render: () => (
    <div style={{
      fontFamily: "'Manrope', 'Inter', system-ui, sans-serif",
      padding: '40px',
      background: '#F4F7FA',
      minHeight: '100vh',
    }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: '#384352', marginBottom: 4 }}>Elevation scale</h1>
      <p style={{ fontSize: 14, color: '#576A84', marginBottom: 48, lineHeight: 1.6, maxWidth: 580 }}>
        Four shadow levels communicate depth and layer priority — from the subtle lift of a card to
        the focused presence of a modal or popover sitting above the rest of the page.
      </p>

      {/* Cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 32 }}>
        {SHADOWS.map(s => (
          <div key={s.name} style={{
            background: '#fff',
            borderRadius: 16,
            padding: '32px 24px',
            boxShadow: s.value,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6E8AAB', margin: 0 }}>
              {s.name}
            </p>
            <code style={{ fontSize: 11, color: '#576A84', lineHeight: 1.5, wordBreak: 'break-all' }}>
              {s.value}
            </code>
            <p style={{ fontSize: 12, color: '#8DA4BE', margin: 0, lineHeight: 1.5 }}>
              {s.usage}
            </p>
          </div>
        ))}
      </div>

      {/* Token table */}
      <div style={{ marginTop: 56 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#8DA4BE', marginBottom: 16 }}>
          Token reference
        </p>
        <div style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', border: '1px solid #D8E3EE' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '10px 20px', background: '#F4F7FA', borderBottom: '1px solid #D8E3EE' }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#8DA4BE' }}>Token</span>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#8DA4BE' }}>Value</span>
          </div>
          {SHADOWS.map((s, i) => (
            <div key={s.token} style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              padding: '14px 20px',
              borderBottom: i < SHADOWS.length - 1 ? '1px solid #F4F7FA' : 'none',
              alignItems: 'center',
            }}>
              <code style={{ fontSize: 12, color: '#1960BD', fontWeight: 600 }}>{s.token}</code>
              <code style={{ fontSize: 11, color: '#576A84', wordBreak: 'break-all' }}>{s.value}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}
