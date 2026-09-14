import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'

const meta: Meta<typeof Badge> = {
  title: 'UI Primitives/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['default', 'secondary', 'destructive', 'outline'] },
    children: { control: 'text' },
  },
  args: { children: 'Badge', variant: 'default' },
}
export default meta
type Story = StoryObj<typeof Badge>

export const Playground: Story = {}
export const Default:     Story = { args: { variant: 'default',     children: 'Default'     } }
export const Secondary:   Story = { args: { variant: 'secondary',   children: 'Secondary'   } }
export const Destructive: Story = { args: { variant: 'destructive', children: 'Destructive' } }
export const Outline:     Story = { args: { variant: 'outline',     children: 'Outline'     } }

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}

export const UsageExamples: Story = {
  name: 'Usage Examples',
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Status:</span>
        <Badge variant="default">Active</Badge>
        <Badge variant="secondary">Pending</Badge>
        <Badge variant="destructive">Failed</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Labels:</span>
        <Badge variant="outline">Design</Badge>
        <Badge variant="outline">React</Badge>
        <Badge variant="outline">TypeScript</Badge>
      </div>
    </div>
  ),
}
