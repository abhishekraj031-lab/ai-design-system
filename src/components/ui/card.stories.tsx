import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card'
import { Button } from './button'

const meta: Meta<typeof Card> = {
  title: 'UI Primitives/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here. Provide context about this card.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">This is the card content area. Put any content here.</p>
      </CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  name: 'With Footer',
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Confirm Action</CardTitle>
        <CardDescription>Are you sure you want to proceed? This cannot be undone.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">This will permanently delete the selected item.</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  ),
}

export const TitleOnly: Story = {
  name: 'Title Only',
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Minimal card with just a title and content.</p>
      </CardContent>
    </Card>
  ),
}

export const CardGrid: Story = {
  name: 'Card Grid',
  parameters: { layout: 'padded' },
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-3xl">
      {['Notifications', 'Analytics', 'Settings'].map(title => (
        <Card key={title}>
          <CardHeader>
            <CardTitle className="text-base">{title}</CardTitle>
            <CardDescription>Manage your {title.toLowerCase()}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Content for {title.toLowerCase()} goes here.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">View</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
}
