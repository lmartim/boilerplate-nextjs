import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado com Storybook',
    description: 'TypeScript, ReactJs, NextJs, Styled Components e Storybook'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'React Avançado com Storybook',
  description: 'TypeScript, ReactJs, NextJs, Styled Components e Storybook'
}
