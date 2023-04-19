
import { AnimationProps } from '.'

/**
 * 基础动画配置
 * @param element 
 * @param animation 
 */
export const basicAnimation = (element: SVGElement, animation: AnimationProps) => {
    element.style.animationName = animation.animation
    element.style.animationDelay = animation.delay ?? ''
    element.style.animationTimingFunction = animation.timingFunction ?? ''
    element.style.animationDuration = animation.duration ?? ''
    element.style.animationIterationCount = animation.times ?? ''
}