import { withKnobs, text } from '@storybook/addon-knobs'
import Main from '.'

export const Basic = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text('Description', 'Typescript, ReactJS, NextJS e Styled Components')}
  />
)

export default {
  title: 'Main',
  decorators: [withKnobs],
  component: Main
}
