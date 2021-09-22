# React Carousel

![GitHub](https://img.shields.io/github/license/Luncher/react-carousel?style=for-the-badge)
![npm](https://img.shields.io/npm/v/react-carousel-lite?style=for-the-badge)
![Travis (.com)](https://img.shields.io/travis/com/Luncher/react-carousel?style=for-the-badge)

A tiny React Carousel Component.

## Quick Start

### install

>yarn add react-carousel-lite -D


### import styles

>import 'react-carousel-lite/dist/index.css'

### Usage

```typescript
import Carousel from 'react-carousel-lite'

export function App() {
  return (
    <Carousel autoplay>
      // {...content}
    </Carousel>
  )
}

```

## Props

- autoplay
>default: false

- dotPosition
>export type DotPosition = 'left' | 'right' | 'top' | 'bottom'

- easing
> css animationTimingFunction

- effect
>export type EffectType = 'slide' | 'fade'

- interval
>ms

- afterChange/beforeChange

- children
