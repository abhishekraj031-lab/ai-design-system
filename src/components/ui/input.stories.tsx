import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'
import { Label } from './label'

const meta: Meta<typeof Input> = {
  title: 'UI Primitives/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [Story => <div className="w-72"><Story /></div>],
  argTypes: {
    type:        { control: 'select', options: ['text', 'email', 'password', 'number', 'search', 'url', 'tel'] },
    placeholder: { control: 'text' },
    disabled:    { control: 'boolean' },
  },
  args: { type: 'text', placeholder: 'Enter text…', disabled: false },
}
export default meta
type Story = StoryObj<typeof Input>

export const Playground: Story = {}
export const Default:    Story = { args: { placeholder: 'Enter text…' } }
export const Email:      Story = { args: { type: 'email',    placeholder: 'name@example.com' } }
export const Password:   Story = { args: { type: 'password', placeholder: '••••••••'         } }
export const Number:     Story = { args: { type: 'number',   placeholder: '0'                } }
export const Disabled:   Story = { args: { disabled: true,   placeholder: 'Disabled input'   } }

export const WithLabel: Story = {
  name: 'With Label',
  render: () => (
    <div className="flex flex-col gap-2 w-72">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" placeholder="name@example.com" />
    </div>
  ),
}

export const AllTypes: Story = {
  name: 'All Types',
  parameters: { layout: 'padded' },
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      {[
        { label: 'Text',     type: 'text',     placeholder: 'Enter text…'      },
        { label: 'Email',    type: 'email',    placeholder: 'name@example.com' },
        { label: 'Password', type: 'password', placeholder: '••••••••'         },
        { label: 'Number',   type: 'number',   placeholder: '0'                },
        { label: 'Search',   type: 'search',   placeholder: 'Search…'          },
        { label: 'URL',      type: 'url',      placeholder: 'https://'         },
      ].map(({ label, type, placeholder }) => (
        <div key={type} className="flex flex-col gap-1.5">
          <Label>{label}</Label>
          <Input type={type} placeholder={placeholder} />
        </div>
      ))}
    </div>
  ),
}
