import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    indeterminate: false,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

// ── Playground (interactive) ──────────────────────────────────────────────────
export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false)
    return <Checkbox {...args} checked={checked} onChange={setChecked} />
  },
}

// ── States ────────────────────────────────────────────────────────────────────
export const Unchecked: Story = {
  args: { checked: false, label: 'Unchecked' },
}

export const Checked: Story = {
  args: { checked: true, label: 'Checked' },
}

export const Indeterminate: Story = {
  args: { indeterminate: true, label: 'Indeterminate (partial selection)' },
}

export const Disabled: Story = {
  args: { disabled: true, label: 'Disabled — unchecked' },
}

export const DisabledChecked: Story = {
  name: 'Disabled · Checked',
  args: { disabled: true, checked: true, label: 'Disabled — checked' },
}

// ── Without Label ─────────────────────────────────────────────────────────────
export const NoLabel: Story = {
  name: 'No Label',
  args: { checked: true },
}

// ── All States ────────────────────────────────────────────────────────────────
export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Unchecked"                checked={false}                          />
      <Checkbox label="Checked"                  checked={true}                           />
      <Checkbox label="Indeterminate"            checked={false} indeterminate            />
      <Checkbox label="Disabled"                 checked={false}             disabled     />
      <Checkbox label="Disabled — checked"       checked={true}              disabled     />
      <Checkbox label="Disabled — indeterminate" checked={false} indeterminate disabled   />
    </div>
  ),
}

// ── Interactive Group ─────────────────────────────────────────────────────────
export const CheckboxGroup: Story = {
  name: 'Interactive Group',
  render: () => {
    const items = ['Design', 'Engineering', 'Product', 'Marketing']
    const [selected, setSelected] = useState<string[]>([])

    const toggle = (item: string) =>
      setSelected(prev =>
        prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
      )

    const allChecked     = selected.length === items.length
    const someChecked    = selected.length > 0 && !allChecked

    const toggleAll = () =>
      setSelected(allChecked ? [] : items)

    return (
      <div className="flex flex-col gap-3">
        <Checkbox
          label="Select all"
          checked={allChecked}
          indeterminate={someChecked}
          onChange={toggleAll}
        />
        <div className="ml-5 flex flex-col gap-2 border-l pl-4">
          {items.map(item => (
            <Checkbox
              key={item}
              label={item}
              checked={selected.includes(item)}
              onChange={() => toggle(item)}
            />
          ))}
        </div>
      </div>
    )
  },
}
