import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './separator'

const meta: Meta<typeof Separator> = {
  title: 'UI Primitives/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
  },
  args: { orientation: 'horizontal' },
}
export default meta
type Story = StoryObj<typeof Separator>

export const Playground: Story = {
  render: (args) => (
    <div className={args.orientation === 'vertical' ? 'flex h-20 items-center' : 'w-64'}>
      <Separator {...args} />
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <div className="w-64">
      <p className="text-sm text-muted-foreground mb-2">Section above</p>
      <Separator />
      <p className="text-sm text-muted-foreground mt-2">Section below</p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-10 items-center gap-4 text-sm">
      <span>Inbox</span>
      <Separator orientation="vertical" />
      <span>Drafts</span>
      <Separator orientation="vertical" />
      <span>Sent</span>
    </div>
  ),
}

export const InNavigation: Story = {
  name: 'In Navigation',
  render: () => (
    <div className="flex flex-col w-48 gap-1 text-sm">
      <div className="px-3 py-2 rounded-md hover:bg-accent cursor-pointer">Dashboard</div>
      <div className="px-3 py-2 rounded-md hover:bg-accent cursor-pointer">Projects</div>
      <Separator className="my-1" />
      <div className="px-3 py-2 rounded-md hover:bg-accent cursor-pointer">Settings</div>
      <div className="px-3 py-2 rounded-md hover:bg-accent cursor-pointer">Help</div>
    </div>
  ),
}

export const InContent: Story = {
  name: 'In Content',
  parameters: { layout: 'padded' },
  render: () => (
    <div className="max-w-sm">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
  ),
}
