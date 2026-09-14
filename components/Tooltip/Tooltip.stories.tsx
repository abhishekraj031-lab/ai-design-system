import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    position: {
      control: 'select',
      options: [
        'bottomLeft', 'bottomCentre', 'bottomRight',
        'topLeft',    'topCentre',    'topRight',
        'leftCentre', 'rightCentre',
      ],
      description: 'Arrow tip placement',
      table: { defaultValue: { summary: 'bottomLeft' } },
    },
    title: { control: 'text' },
    body:  { control: 'text' },
    showBody:  { control: 'boolean' },
    showClose: { control: 'boolean' },
    showArrow: { control: 'boolean' },
  },
  args: {
    title: 'Tooltip heading',
    body: 'Tooltips are used to describe or identify an element.',
    position: 'bottomLeft',
    showBody: true,
    showClose: true,
    showArrow: true,
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

// ── Playground ────────────────────────────────────────────────────────────────
export const Playground: Story = {}

// ── Positions ─────────────────────────────────────────────────────────────────
export const BottomLeft: Story = {
  name: 'Bottom · Left',
  args: { position: 'bottomLeft' },
}

export const BottomCentre: Story = {
  name: 'Bottom · Centre',
  args: { position: 'bottomCentre' },
}

export const BottomRight: Story = {
  name: 'Bottom · Right',
  args: { position: 'bottomRight' },
}

export const TopLeft: Story = {
  name: 'Top · Left',
  args: { position: 'topLeft' },
}

export const TopCentre: Story = {
  name: 'Top · Centre',
  args: { position: 'topCentre' },
}

export const TopRight: Story = {
  name: 'Top · Right',
  args: { position: 'topRight' },
}

export const LeftCentre: Story = {
  name: 'Side · Left',
  args: { position: 'leftCentre' },
}

export const RightCentre: Story = {
  name: 'Side · Right',
  args: { position: 'rightCentre' },
}

// ── Content variants ──────────────────────────────────────────────────────────
export const TitleOnly: Story = {
  name: 'Title Only',
  args: { showBody: false, showClose: false, title: 'Short tip' },
}

export const NoArrow: Story = {
  name: 'No Arrow',
  args: { showArrow: false },
}

export const NoClose: Story = {
  name: 'No Close Button',
  args: { showClose: false },
}

// ── All Positions Grid ────────────────────────────────────────────────────────
export const AllPositions: Story = {
  name: 'All Positions',
  parameters: { layout: 'padded' },
  render: () => {
    const positions = [
      'topLeft', 'topCentre', 'topRight',
      'bottomLeft', 'bottomCentre', 'bottomRight',
      'leftCentre', 'rightCentre',
    ] as const

    return (
      <div className="grid grid-cols-2 gap-10 p-8">
        {positions.map(pos => (
          <div key={pos} className="flex flex-col items-start gap-2">
            <p className="text-[10px] font-mono text-gray-400">{pos}</p>
            <Tooltip
              title="Heading"
              body="Tooltips identify an element."
              position={pos}
              showClose={false}
            />
          </div>
        ))}
      </div>
    )
  },
}
