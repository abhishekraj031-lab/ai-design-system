import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Mail, Trash2, Plus, Download } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outline', 'link'],
      description: 'Visual style of the button',
      table: { defaultValue: { summary: 'filled' } },
    },
    intent: {
      control: 'select',
      options: ['brand', 'success', 'warning', 'destructive'],
      description: 'Semantic colour role',
      table: { defaultValue: { summary: 'brand' } },
    },
    size: {
      control: 'select',
      options: ['xl', 'md', 'sm'],
      description: 'Height + padding tier',
      table: { defaultValue: { summary: 'md' } },
    },
    isLoading: {
      control: 'boolean',
      description: 'Show spinner and block interaction',
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Button',
    variant: 'filled',
    intent: 'brand',
    size: 'md',
    isLoading: false,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof Button>

// ── Playground ────────────────────────────────────────────────────────────────
export const Playground: Story = {}

// ── Variants ──────────────────────────────────────────────────────────────────
export const Filled: Story = {
  args: { variant: 'filled', intent: 'brand', children: 'Filled Button' },
}

export const Outline: Story = {
  args: { variant: 'outline', intent: 'brand', children: 'Outline Button' },
}

export const Link: Story = {
  args: { variant: 'link', intent: 'brand', children: 'Link Button' },
}

// ── Intents ───────────────────────────────────────────────────────────────────
export const AllIntents: Story = {
  name: 'All Intents',
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button intent="brand">Brand</Button>
      <Button intent="success">Success</Button>
      <Button intent="warning">Warning</Button>
      <Button intent="destructive">Destructive</Button>
    </div>
  ),
}

export const OutlineIntents: Story = {
  name: 'Outline · All Intents',
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" intent="brand">Brand</Button>
      <Button variant="outline" intent="success">Success</Button>
      <Button variant="outline" intent="warning">Warning</Button>
      <Button variant="outline" intent="destructive">Destructive</Button>
    </div>
  ),
}

export const LinkIntents: Story = {
  name: 'Link · All Intents',
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="link" intent="brand">Brand</Button>
      <Button variant="link" intent="success">Success</Button>
      <Button variant="link" intent="warning">Warning</Button>
      <Button variant="link" intent="destructive">Destructive</Button>
    </div>
  ),
}

// ── Sizes ─────────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="xl">Extra Large</Button>
      <Button size="md">Medium</Button>
      <Button size="sm">Small</Button>
    </div>
  ),
}

// ── With Icons ────────────────────────────────────────────────────────────────
export const WithLeadingIcon: Story = {
  name: 'With Leading Icon',
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button intent="brand"><Mail /> Send Email</Button>
      <Button intent="success"><Download /> Download</Button>
      <Button intent="destructive"><Trash2 /> Delete</Button>
    </div>
  ),
}

export const WithTrailingIcon: Story = {
  name: 'With Trailing Icon',
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button intent="brand">Add Item <Plus /></Button>
      <Button variant="outline" intent="brand">Add Item <Plus /></Button>
    </div>
  ),
}

export const IconOnly: Story = {
  name: 'Icon Only',
  render: () => (
    <div className="flex gap-3">
      <Button size="md" aria-label="Add"><Plus /></Button>
      <Button size="md" variant="outline" intent="destructive" aria-label="Delete"><Trash2 /></Button>
    </div>
  ),
}

// ── States ────────────────────────────────────────────────────────────────────
export const Loading: Story = {
  args: { isLoading: true, children: 'Saving…' },
}

export const LoadingOutline: Story = {
  name: 'Loading · Outline',
  args: { variant: 'outline', isLoading: true, children: 'Saving…' },
}

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
}

// ── Full Matrix ───────────────────────────────────────────────────────────────
export const FullMatrix: Story = {
  name: 'Full Matrix',
  render: () => (
    <div className="flex flex-col gap-6">
      {(['filled', 'outline', 'link'] as const).map(variant => (
        <div key={variant}>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">{variant}</p>
          <div className="flex flex-wrap gap-3">
            {(['brand', 'success', 'warning', 'destructive'] as const).map(intent => (
              <Button key={intent} variant={variant} intent={intent}>
                {intent.charAt(0).toUpperCase() + intent.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}
