import { ReactNode, CSSProperties } from "react";
import './style.less';
export declare type DotPosition = 'left' | 'right' | 'top' | 'bottom';
export declare type EffectType = 'slide' | 'fade';
export interface Props {
    autoplay?: boolean;
    dotPosition?: DotPosition;
    easing?: CSSProperties['animationTimingFunction'];
    effect?: EffectType;
    interval?: number;
    afterChange?: (current: number) => void;
    beforeChange?: (from: number, to: number) => void;
    children: ReactNode;
}
export default function Carousel({ autoplay, easing, effect, interval, children, dotPosition, beforeChange, afterChange }: Props): JSX.Element;
