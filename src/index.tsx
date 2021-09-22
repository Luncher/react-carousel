import React, { Children, useState, useCallback, useEffect, cloneElement, isValidElement, ReactNode, useMemo, CSSProperties } from "react"
import cns from 'classnames'

import './style.less'

export type DotPosition = 'left' | 'right' | 'top' | 'bottom'

export type EffectType = 'slide' | 'fade'

export interface Props {
  autoplay?: boolean
  dotPosition?: DotPosition
  easing?: CSSProperties['animationTimingFunction']
  effect?: EffectType
  interval?: number
  afterChange?: (current: number) => void
  beforeChange?: (from: number, to: number) => void
  children: ReactNode
}

export default function Carousel({
  autoplay,
  easing = 'linear',
  effect = 'slide',
  interval = 2000,
  children,
  dotPosition = 'bottom',
  beforeChange,
  afterChange
}: Props) {
  const [position, setPosition] = useState({ prev: 0, cur: 0 })

  const cnt = useMemo(() => 
    Children.map(children, (it: ReactNode, index) => {
      if (!isValidElement(it)) {
        console.warn('Carousel children must be an valid element')
        return null
      }
      const isCurrent = index === position.cur && index !== position.prev
      const isPrev = index !== position.cur && index === position.prev
      const isInitial = position.prev === position.cur && position.prev === index
      const classNames = cns(it.props.className, 'carousel-item', {
        'carousel-item-initial': isInitial,
        'carousel-item-current': isCurrent,
        [`carousel-item-current-${effect}`]: isCurrent,
        'carousel-item-prev': isPrev,
        [`carousel-item-prev-${effect}`]: isPrev
      })
      return cloneElement(it, { className: classNames, style: { animationTimingFunction: easing } })
    })
  , [children, position, effect, easing])

  const count = cnt?.length ?? 0

  useEffect(() => {
    if (!autoplay) return
    const handle = window.setInterval(() => {
      setPosition(v => ({ prev: v.cur, cur: (v.cur + 1) % count }))
    }, interval)
    return () => window.clearInterval(handle)
  }, [autoplay, interval, count])

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

  if (count === 0) {
    throw new Error('Invalid Carousel Children')
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
        dotCount={count}
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
      <p key={i} className={itemClassNames} onClick={() => onChange(i)}></p>
    )
  }

  return (
    <div className={classNames}>
      {cnt}
    </div>
  )
}
