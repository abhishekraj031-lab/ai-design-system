import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { Mail, Trash2, Download, Plus } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'UI Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] },
    size:    { control: 'select', options: ['default', 'sm', 'lg', 'icon'] },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: { children: 'Button', variant: 'default', size: 'default', disabled: false },
}
export default meta
type Story = StoryObj<typeof Button>

export const Playground:   Story = {}
export const Default:      Story = { args: { variant: 'default',     children: 'Default'     } }
export const Destructive:  Story = { args: { variant: 'destructive', children: 'Destructive' } }
export const Outline:      Story = { args: { variant: 'outline',     children: 'Outline'     } }
export const Secondary:    Story = { args: { variant: 'secondary',   children: 'Secondary'   } }
export const Ghost:        Story = { args: { variant: 'ghost',       children: 'Ghost'       } }
export const Link:         Story = { args: { variant: 'link',        children: 'Link'        } }
export const Disabled:     Story = { args: { disabled: true,         children: 'Disabled'    } }

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="lg">Large</Button>
      <Button size="default">Default</Button>
      <Button size="sm">Small</Button>
    </div>
  ),
}

export const WithIcons: Story = {
  name: 'With Icons',
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button><Mail /> Send</Button>
      <Button variant="outline"><Download /> Download</Button>
      <Button variant="destructive"><Trash2 /> Delete</Button>
      <Button size="icon"><Plus /></Button>
    </div>
  ),
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}
