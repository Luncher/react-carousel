import React, { Children, useState, useCallback, useEffect, cloneElement, isValidElement, ReactNode } from "react"
import cns from 'classnames'

import './carousel.css'

export type DotPosition = 'left' | 'right' | 'top' | 'bottom'

export type EasingType = 'linear'

export type EffectType = 'scroll' | 'fade'

export interface Props {
  autoplay?: boolean
  dotPosition?: DotPosition
  easing?: EasingType
  effect?: EffectType
  interval?: number
  afterChange?: (current: number) => void
  beforeChange?: (from: number, to: number) => void
  children: ReactNode
}

export default function Carousel({
  autoplay,
  interval = 1000,
  children,
  dotPosition,
  beforeChange,
  afterChange
}: Props) {
  const [position, setPosition] = useState({
    prev: 0,
    cur: 0
  })

  const cnt = Children.map(children, (it: ReactNode, index) => {
    if (!isValidElement(it)) {
      console.warn('Carousel children must be an valid element')
      return null
    }
    const classNames = cns(it.props.className, 'carousel-item', {
      'carousel-item-current': index === position.cur,
      'carousel-item-prev': index !== position.cur && index === position.prev
    })
    return cloneElement(it, { className: classNames })
  })

  const handleChange = useCallback(
    (value: number) => {
      beforeChange?.(position.cur, value)
      setPosition({ prev: position.cur, cur: value })
    },
    [position, beforeChange]
  )

  useEffect(() => {
    afterChange?.(position.cur)
  }, [position.cur, afterChange])

  if (!cnt || !cnt.length) {
    return null
  }

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {cnt}
      </div>
      <CarouselDot
        value={position.cur}
        onChange={handleChange}
        position={dotPosition}
        dotCount={cnt.length}
      />
    </div>
  )
}


interface CarouselDotProps {
  position?: DotPosition
  dotCount: number
  value: number
  onChange: (value: number) => void
}

function CarouselDot({
  value,
  onChange,
  dotCount,
  position = 'bottom'
}: CarouselDotProps) {

  const classNames = cns(
    'carousel-dot',
    `carousel-dot-${position}`
  )

  const cnt = []
  for (let i = 0; i < dotCount; i++) {
    const itemClassNames = cns({
      'carousel-dot-item': true,
      'carousel-dot-item-active': i === value
    })
    cnt.push(
      <p className={itemClassNames} onClick={() => onChange(i)}></p>
    )
  }

  return (
    <div className={classNames}>
      {cnt}
    </div>
  )
}
