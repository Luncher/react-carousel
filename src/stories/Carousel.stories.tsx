import React, { CSSProperties } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Carousel from '../Carousel'

export default {
  title: 'Example/Carousel',
  component: Carousel,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Carousel>;

const style: CSSProperties = {
  lineHeight: '150px',
  textAlign: 'center',
  background: '#364d79',
  color: '#fff',
  margin: 0,
}

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args}>
    <div>
      <p style={style}>1</p>
    </div>
    <div><div style={style}>2</div></div>
    <div><div style={style}>3</div></div>
  </Carousel>
)

export const Primary = Template.bind({});
Primary.args = {
  autoplay: true,
  effect: 'slide'
};
