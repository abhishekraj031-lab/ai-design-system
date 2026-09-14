import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'active', 'filled', 'disabled', 'filledDisabled', 'error'],
      description: 'Visual/interaction state',
      table: { defaultValue: { summary: 'default' } },
    },
    addonType: {
      control: 'select',
      options: ['default', 'textFirst', 'textLast', 'iconFirst', 'iconLast'],
      description: 'Addon slot placement',
      table: { defaultValue: { summary: 'default' } },
    },
    label: { control: 'text' },
    helpText: { control: 'text' },
    errorText: { control: 'text' },
    addonText: { control: 'text' },
    placeholder: { control: 'text' },
    showLabel: { control: 'boolean' },
    showHelpText: { control: 'boolean' },
  },
  args: {
    label: 'Email address',
    placeholder: 'Enter text',
    helpText: 'We will never share your email.',
    errorText: 'Please enter a valid email address.',
    state: 'default',
    addonType: 'default',
    addonText: '+91',
    showLabel: true,
    showHelpText: false,
  },
}

export default meta
type Story = StoryObj<typeof Input>

// ── Playground ────────────────────────────────────────────────────────────────
export const Playground: Story = {}

// ── States ────────────────────────────────────────────────────────────────────
export const Default: Story = {
  args: { state: 'default' },
}

export const Active: Story = {
  args: { state: 'active' },
}

export const Filled: Story = {
  args: { state: 'filled', placeholder: 'john@example.com' },
}

export const Disabled: Story = {
  args: { state: 'disabled' },
}

export const FilledDisabled: Story = {
  name: 'Filled + Disabled',
  args: { state: 'filledDisabled', placeholder: 'john@example.com' },
}

export const Error: Story = {
  args: { state: 'error', showHelpText: true },
}

// ── With Help Text ────────────────────────────────────────────────────────────
export const WithHelpText: Story = {
  name: 'With Help Text',
  args: { showHelpText: true, state: 'default' },
}

// ── Addon Types ───────────────────────────────────────────────────────────────
export const IconFirst: Story = {
  name: 'Addon · Icon First',
  args: { addonType: 'iconFirst', label: 'Email', placeholder: 'Enter email' },
}

export const IconLast: Story = {
  name: 'Addon · Icon Last',
  args: { addonType: 'iconLast', label: 'Email', placeholder: 'Enter email' },
}

export const TextFirst: Story = {
  name: 'Addon · Text First',
  args: { addonType: 'textFirst', addonText: '+1', label: 'Phone', placeholder: 'Enter phone' },
}

export const TextLast: Story = {
  name: 'Addon · Text Last',
  args: { addonType: 'textLast', addonText: 'kg', label: 'Weight', placeholder: '0.00' },
}

// ── All States ────────────────────────────────────────────────────────────────
export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div className="flex flex-col gap-5 w-80">
      <Input label="Default"        state="default"        placeholder="Enter text" />
      <Input label="Active"         state="active"         placeholder="Enter text" />
      <Input label="Filled"         state="filled"         placeholder="john@example.com" />
      <Input label="Error"          state="error"          showHelpText />
      <Input label="Disabled"       state="disabled"       placeholder="Enter text" />
      <Input label="Filled Disabled" state="filledDisabled" placeholder="john@example.com" />
    </div>
  ),
}

// ── All Addons ────────────────────────────────────────────────────────────────
export const AllAddons: Story = {
  name: 'All Addon Types',
  render: () => (
    <div className="flex flex-col gap-5 w-80">
      <Input label="No Addon"   addonType="default"   placeholder="Enter text" />
      <Input label="Icon First" addonType="iconFirst"  placeholder="Enter email" />
      <Input label="Icon Last"  addonType="iconLast"   placeholder="Enter email" />
      <Input label="Text First" addonType="textFirst"  addonText="+1"  placeholder="Enter phone" />
      <Input label="Text Last"  addonType="textLast"   addonText="kg"  placeholder="0.00" />
    </div>
  ),
}
