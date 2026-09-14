import type { Meta, StoryObj } from '@storybook/react'
import { Tag, Chip } from './Tag'

// ── Tag ───────────────────────────────────────────────────────────────────────
const tagMeta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    color: {
      control: 'select',
      options: ['grey', 'blue', 'green', 'orange', 'red'],
      description: 'Colour / semantic variant',
      table: { defaultValue: { summary: 'grey' } },
    },
    variant: {
      control: 'select',
      options: ['icon', 'dot', 'number'],
      description: 'Structural variant',
      table: { defaultValue: { summary: 'icon' } },
    },
    text: { control: 'text' },
    numberText: { control: 'text' },
    leadingIcon: { control: 'boolean' },
    trailingIcon: { control: 'boolean' },
  },
  args: {
    color: 'grey',
    variant: 'icon',
    text: 'Badge',
    numberText: 'Due Date: 20 Apr 2026',
    leadingIcon: true,
    trailingIcon: true,
  },
}

export default tagMeta
type TagStory = StoryObj<typeof Tag>

export const Playground: TagStory = {}

// ── Variants ──────────────────────────────────────────────────────────────────
export const IconVariant: TagStory = {
  name: 'Variant · Icon',
  args: { variant: 'icon', text: 'In Progress' },
}

export const DotVariant: TagStory = {
  name: 'Variant · Dot',
  args: { variant: 'dot', text: 'Active' },
}

export const NumberVariant: TagStory = {
  name: 'Variant · Number',
  args: { variant: 'number', numberText: 'Due: 30 Apr 2026' },
}

// ── Colours ───────────────────────────────────────────────────────────────────
export const AllColors: TagStory = {
  name: 'All Colours · Icon',
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Tag color="grey"   text="Grey"   />
      <Tag color="blue"   text="Blue"   />
      <Tag color="green"  text="Green"  />
      <Tag color="orange" text="Orange" />
      <Tag color="red"    text="Red"    />
    </div>
  ),
}

export const AllColorsDot: TagStory = {
  name: 'All Colours · Dot',
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Tag color="grey"   variant="dot" text="Grey"   />
      <Tag color="blue"   variant="dot" text="Blue"   />
      <Tag color="green"  variant="dot" text="Green"  />
      <Tag color="orange" variant="dot" text="Orange" />
      <Tag color="red"    variant="dot" text="Red"    />
    </div>
  ),
}

export const AllColorsNumber: TagStory = {
  name: 'All Colours · Number',
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Tag color="grey"   variant="number" numberText="Due: 20 Apr" />
      <Tag color="blue"   variant="number" numberText="Due: 20 Apr" />
      <Tag color="green"  variant="number" numberText="Due: 20 Apr" />
      <Tag color="orange" variant="number" numberText="Due: 20 Apr" />
      <Tag color="red"    variant="number" numberText="Due: 20 Apr" />
    </div>
  ),
}

// ── Without Icons ─────────────────────────────────────────────────────────────
export const NoIcons: TagStory = {
  name: 'Icon Off',
  args: { color: 'blue', text: 'Label Only', leadingIcon: false, trailingIcon: false },
}
