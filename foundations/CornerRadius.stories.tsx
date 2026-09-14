import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Foundations/Corner Radius',
  parameters: { layout: 'fullscreen', docs: { canvas: { sourceState: 'hidden' } } },
}
export default meta
type Story = StoryObj

const RADII = [
  { label: '0',    px: 0,    display: '0px' },
  { label: '2',    px: 2,    display: '2px' },
  { label: '4',    px: 4,    display: '4px' },
  { label: '6',    px: 6,    display: '6px' },
  { label: '8',    px: 8,    display: '8px' },
  { label: '10',   px: 10,   display: '10px' },
  { label: '12',   px: 12,   display: '12px' },
  { label: '16',   px: 16,   display: '16px' },
  { label: '20',   px: 20,   display: '20px' },
  { label: '24',   px: 24,   display: '24px' },
  { label: '32',   px: 32,   display: '32px' },
  { label: 'Full', px: 9999, display: '9999px' },
]

export const RadiusScale: Story = {
  name: 'Radius Scale',
  render: () => (
    <div style={{
      fontFamily: "'Manrope', 'Inter', system-ui, sans-serif",
      padding: '40px',
      background: '#fff',
      minHeight: '100vh',
    }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: '#384352', marginBottom: 4 }}>Rounded corners</h1>
      <p style={{ fontSize: 14, color: '#576A84', marginBottom: 48, lineHeight: 1.6, maxWidth: 580 }}>
        A consistent radius scale applied across every component — from the sharpest card edge to a
        fully-rounded pill. Rounding signals component type and hierarchy without relying on colour alone.
      </p>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-end' }}>
        {RADII.map(r => (
          <div key={r.label} style={{ textAlign: 'center' }}>
            <div style={{
              width: 64, height: 64,
              borderRadius: r.px,
              background: '#E8F0FC',
              border: '2px solid #A4C7F4',
              margin: '0 auto 10px',
            }} />
            <div style={{ fontSize: 12, fontWeight: 700, color: '#384352' }}>{r.label}</div>
            <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#8DA4BE' }}>{r.display}</div>
          </div>
        ))}
      </div>

      {/* Usage note */}
      <div style={{
        marginTop: 56,
        padding: '20px 24px',
        background: '#F4F7FA',
        borderRadius: 12,
        maxWidth: 560,
      }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: '#384352', marginBottom: 8 }}>Usage guide</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { radius: '4px',    usage: 'Tags, badges, small chips' },
            { radius: '6px',    usage: 'Input fields, dropdowns' },
            { radius: '8px',    usage: 'Buttons (default)' },
            { radius: '12px',   usage: 'Cards, panels' },
            { radius: '16px',   usage: 'Modals, drawers' },
            { radius: 'Full',   usage: 'Pill buttons, avatars, toggles' },
          ].map(row => (
            <div key={row.radius} style={{ display: 'flex', gap: 12, fontSize: 13, color: '#576A84' }}>
              <span style={{ fontFamily: 'monospace', color: '#1960BD', fontWeight: 600, minWidth: 48 }}>{row.radius}</span>
              <span>{row.usage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}
