import '../src/index.css'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'canvas',
      values: [
        { name: 'canvas', value: '#F4F7FA' },
        { name: 'white',  value: '#ffffff' },
        { name: 'dark',   value: '#151B23' },
      ],
    },
  },
}

export default preview
