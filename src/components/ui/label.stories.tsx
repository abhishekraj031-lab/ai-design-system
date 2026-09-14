import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './label'
import { Input } from './input'

const meta: Meta<typeof Label> = {
  title: 'UI Primitives/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    children: { control: 'text' },
  },
  args: { children: 'Label text' },
}
export default meta
type Story = StoryObj<typeof Label>

export const Playground: Story = {}

export const Default: Story = {
  render: () => <Label>Email address</Label>,
}

export const WithInput: Story = {
  name: 'With Input',
  render: () => (
    <div className="flex flex-col gap-1.5 w-64">
      <Label htmlFor="demo-input">Email address</Label>
      <Input id="demo-input" type="email" placeholder="name@example.com" />
    </div>
  ),
}

export const DisabledState: Story = {
  name: 'Disabled (with peer)',
  render: () => (
    <div className="flex flex-col gap-1.5 w-64">
      <Label htmlFor="disabled-input" className="peer-disabled:opacity-70">Username</Label>
      <Input id="disabled-input" placeholder="Enter username" disabled />
    </div>
  ),
}

export const FormGroup: Story = {
  name: 'Form Group',
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name">Full name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john@example.com" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="pw">Password</Label>
        <Input id="pw" type="password" placeholder="••••••••" />
      </div>
    </div>
  ),
}
