# React Carousel

![GitHub](https://img.shields.io/github/license/Luncher/react-carousel?style=for-the-badge)
![npm](https://img.shields.io/npm/v/react-carousel-lite?style=for-the-badge)
![Travis (.com)](https://img.shields.io/travis/com/Luncher/react-carousel?style=for-the-badge)

A tiny React Carousel Component.

## Quick Start

### install

>yarn add react-carousel-lite -S


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

|     Name     |                   Type                   | Default |                    Description                     |
| :----------: | :--------------------------------------: | :-----: | :------------------------------------------------: |
|   autoplay   |                 Boolean                  |  false  | A boolean indicates whether to play automatically  |
| dotPosition  |          left/right/top/bottom           | bottom  |               Carousel dot position                |
|    easing    | CSSProperties['animationTimingFunction'] | linear  |            css animationTimingFunction             |
|    effect    |                slide/fade                |  slide  |                  The effect type                   |
|   interval   |                  Number                  | 2000 ms |       The time interval of the slider change       |
| beforeChange |                 Function                 |  NOOP   | beforeChange will be triggered before slide change |
| afterChange  |                 Function                 |  NOOP   | afterChange will be triggered after slide changed  |
|   children   |                ReactNode                 |    -    |                   Slide content                    |

