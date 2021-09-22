import React, { CSSProperties } from 'react'
import renderer from 'react-test-renderer'

import Carousel from './index'

const style: CSSProperties = {
  lineHeight: '150px',
  textAlign: 'center',
  background: '#364d79',
  color: '#fff',
  margin: 0,
}

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Carousel>
        <div>
          <p style={style}>1</p>
        </div>
        <div>
          <p style={style}>2</p>
        </div>
        <div>
          <p style={style}>3</p>
        </div>
      </Carousel>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders autoplay, effect, dotPosition correctly', () => {
  const tree = renderer
    .create(
      <Carousel autoplay effect="fade" dotPosition="left">
        <div>
          <p style={style}>1</p>
        </div>
        <div>
          <p style={style}>2</p>
        </div>
        <div>
          <p style={style}>3</p>
        </div>
      </Carousel>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
