import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { RadioButton } from './RadioButton'

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Option A',
    checked: false,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof RadioButton>

// ── Playground ────────────────────────────────────────────────────────────────
export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false)
    return <RadioButton {...args} checked={checked} onChange={setChecked} />
  },
}

// ── States ────────────────────────────────────────────────────────────────────
export const Unchecked: Story = {
  args: { checked: false, label: 'Unchecked' },
}

export const Checked: Story = {
  args: { checked: true, label: 'Checked' },
}

export const Disabled: Story = {
  args: { disabled: true, label: 'Disabled — unchecked' },
}

export const DisabledChecked: Story = {
  name: 'Disabled · Checked',
  args: { disabled: true, checked: true, label: 'Disabled — checked' },
}

// ── All States ────────────────────────────────────────────────────────────────
export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div className="flex flex-col gap-4">
      <RadioButton label="Unchecked"         checked={false}             />
      <RadioButton label="Checked"           checked={true}              />
      <RadioButton label="Disabled"          checked={false} disabled    />
      <RadioButton label="Disabled · Checked" checked={true}  disabled    />
    </div>
  ),
}

// ── Interactive Group ─────────────────────────────────────────────────────────
export const RadioGroup: Story = {
  name: 'Interactive Group',
  render: () => {
    const options = [
      { value: 'monthly',  label: 'Monthly billing',  sub: 'Billed every month'     },
      { value: 'annual',   label: 'Annual billing',   sub: 'Save 20% per year'      },
      { value: 'lifetime', label: 'Lifetime access',  sub: 'One-time payment'       },
    ]
    const [selected, setSelected] = useState('monthly')

    return (
      <div className="flex flex-col gap-4 w-64">
        {options.map(opt => (
          <label key={opt.value} className="flex items-start gap-3 cursor-pointer">
            <RadioButton
              checked={selected === opt.value}
              onChange={() => setSelected(opt.value)}
              className="mt-0.5"
            />
            <div>
              <p className="text-[13px] font-semibold leading-tight">{opt.label}</p>
              <p className="text-[11px] text-gray-500 mt-0.5">{opt.sub}</p>
            </div>
          </label>
        ))}
      </div>
    )
  },
}
