import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Foundations/Spacing',
  parameters: { layout: 'fullscreen', docs: { canvas: { sourceState: 'hidden' } } },
}
export default meta
type Story = StoryObj

const SPACING = [2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

export const SpacingScale: Story = {
  name: 'Spacing Scale',
  render: () => (
    <div style={{
      fontFamily: "'Manrope', 'Inter', system-ui, sans-serif",
      padding: '40px',
      background: '#fff',
      minHeight: '100vh',
    }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: '#384352', marginBottom: 4 }}>Spatial system</h1>
      <p style={{ fontSize: 14, color: '#576A84', marginBottom: 48, lineHeight: 1.6, maxWidth: 560 }}>
        A base-4 grid underlies every gap, padding and margin in the system. Snapping to this scale
        keeps layouts consistent and ensures visual rhythm is preserved as components combine.
      </p>

      {/* Column headers */}
      <div style={{
        display: 'grid', gridTemplateColumns: '48px 220px 80px',
        gap: 0, paddingBottom: 10, borderBottom: '1px solid #D8E3EE', marginBottom: 8,
      }}>
        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.05em', color: '#8DA4BE', textTransform: 'uppercase' }}>Token</span>
        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.05em', color: '#8DA4BE', textTransform: 'uppercase' }}>Visual</span>
        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.05em', color: '#8DA4BE', textTransform: 'uppercase' }}>Value</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {SPACING.map(px => (
          <div key={px} style={{
            display: 'grid',
            gridTemplateColumns: '48px 220px 80px',
            alignItems: 'center',
            gap: 0,
            padding: '10px 0',
            borderBottom: '1px solid #F4F7FA',
          }}>
            {/* Token name */}
            <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#6E8AAB', fontWeight: 500 }}>
              {px}
            </span>

            {/* Visual bar — cap at 200px for readability */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: Math.min(px, 200),
                height: 24,
                background: '#1960BD',
                borderRadius: 4,
              }} />
            </div>

            {/* Pixel value */}
            <span style={{ fontSize: 12, color: '#576A84' }}>{px}px</span>
          </div>
        ))}
      </div>

      {/* Usage note */}
      <div style={{
        marginTop: 48,
        padding: '20px 24px',
        background: '#F4F7FA',
        borderRadius: 12,
        maxWidth: 560,
      }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: '#384352', marginBottom: 8 }}>Usage</p>
        <p style={{ fontSize: 13, color: '#576A84', lineHeight: 1.6, margin: 0 }}>
          Always use multiples of 4px. The most common values are{' '}
          <strong>8, 12, 16, 24, 32</strong>. Reserve larger values (40+) for section gaps
          and page-level layout margins.
        </p>
      </div>
    </div>
  ),
}
