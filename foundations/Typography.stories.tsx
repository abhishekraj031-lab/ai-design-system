import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: { layout: 'fullscreen', docs: { canvas: { sourceState: 'hidden' } } },
}
export default meta
type Story = StoryObj

const STYLES: {
  group: string
  rows: { label: string; spec: string; size: number; weight: number; lineHeight: number; sample: string }[]
}[] = [
  {
    group: 'Headings',
    rows: [
      { label: 'H1', spec: '48px · Bold · 110% LH', size: 48, weight: 700, lineHeight: 1.1,  sample: 'The Quick Brown Fox' },
      { label: 'H2', spec: '40px · Bold · 110% LH', size: 40, weight: 700, lineHeight: 1.1,  sample: 'The Quick Brown Fox' },
      { label: 'H3', spec: '36px · Bold · 110% LH', size: 36, weight: 700, lineHeight: 1.1,  sample: 'The Quick Brown Fox' },
      { label: 'H4', spec: '32px · Bold · 110% LH', size: 32, weight: 700, lineHeight: 1.1,  sample: 'The Quick Brown Fox' },
      { label: 'H5', spec: '28px · Bold · 110% LH', size: 28, weight: 700, lineHeight: 1.1,  sample: 'The Quick Brown Fox' },
      { label: 'H6', spec: '24px · Bold · 110% LH', size: 24, weight: 700, lineHeight: 1.1,  sample: 'The Quick Brown Fox' },
    ],
  },
  {
    group: 'Body',
    rows: [
      { label: 'B1', spec: '20px · Bold · 125% LH',    size: 20, weight: 700, lineHeight: 1.25, sample: 'The quick brown fox jumps over the lazy dog.' },
      { label: 'B2', spec: '16px · Regular · 125% LH', size: 16, weight: 400, lineHeight: 1.25, sample: 'The quick brown fox jumps over the lazy dog.' },
    ],
  },
  {
    group: 'Labels',
    rows: [
      { label: 'L1 Regular',  spec: '14px · Regular · 130% LH',  size: 14, weight: 400, lineHeight: 1.3,  sample: 'Button Label · Navigation · Status Indicator' },
      { label: 'L1 Medium',   spec: '14px · Medium · 130% LH',   size: 14, weight: 500, lineHeight: 1.3,  sample: 'Button Label · Navigation · Status Indicator' },
      { label: 'L1 SemiBold', spec: '14px · SemiBold · 130% LH', size: 14, weight: 600, lineHeight: 1.3,  sample: 'Button Label · Navigation · Status Indicator' },
      { label: 'L2 Regular',  spec: '12px · Regular · 140% LH',  size: 12, weight: 400, lineHeight: 1.4,  sample: 'Tag · Badge · Chip · Caption Text' },
      { label: 'L2 Medium',   spec: '12px · Medium · 140% LH',   size: 12, weight: 500, lineHeight: 1.4,  sample: 'Tag · Badge · Chip · Caption Text' },
      { label: 'L2 SemiBold', spec: '12px · SemiBold · 140% LH', size: 12, weight: 600, lineHeight: 1.4,  sample: 'Tag · Badge · Chip · Caption Text' },
      { label: 'L3 Regular',  spec: '11px · Regular · 150% LH',  size: 11, weight: 400, lineHeight: 1.5,  sample: 'Helper text · Footnote · Placeholder · Error message' },
    ],
  },
]

export const TypeScale: Story = {
  name: 'Type Scale',
  render: () => (
    <div style={{
      fontFamily: "'Manrope', 'Inter', system-ui, sans-serif",
      padding: '40px',
      background: '#fff',
      minHeight: '100vh',
    }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: '#384352', marginBottom: 4 }}>Type system</h1>
      <p style={{ fontSize: 14, color: '#576A84', marginBottom: 48, lineHeight: 1.6 }}>
        Manrope across 15 styles — six heading levels, two body sizes and three label tiers.
        Every style maps to a semantic token so swapping a typeface never requires touching component code.
      </p>

      {/* Column headers */}
      <div style={{
        display: 'grid', gridTemplateColumns: '200px 1fr',
        paddingBottom: 12, borderBottom: '1px solid #D8E3EE', marginBottom: 0,
      }}>
        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.05em', color: '#8DA4BE', textTransform: 'uppercase' }}>Style</span>
        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.05em', color: '#8DA4BE', textTransform: 'uppercase' }}>Sample</span>
      </div>

      {STYLES.map(group => (
        <div key={group.group}>
          {/* Group heading */}
          <div style={{ padding: '20px 0 8px', borderBottom: '1px solid #D8E3EE' }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', color: '#6E8AAB', textTransform: 'uppercase' }}>
              {group.group}
            </span>
          </div>

          {group.rows.map(row => (
            <div key={row.label} style={{
              display: 'grid', gridTemplateColumns: '200px 1fr',
              alignItems: 'start', padding: '20px 0',
              borderBottom: '1px solid #D8E3EE',
            }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#384352' }}>{row.label}</div>
                <div style={{ fontSize: 10, color: '#8DA4BE', marginTop: 4 }}>{row.spec}</div>
              </div>
              <div style={{
                fontSize: row.size,
                fontWeight: row.weight,
                lineHeight: row.lineHeight,
                color: '#384352',
                fontFamily: "'Manrope', 'Inter', system-ui, sans-serif",
              }}>
                {row.sample}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
}
