import { FC, useRef, useEffect, useState, CSSProperties } from 'react'
import core from '../core'
import './index.less'

const animations = {
    'animation-path-drawing': {
        easingFunction: 'ease-in'
    }
}

export type animationType = keyof typeof animations

export interface CooSVGProps {
    src: string
    animation: animationType
    width?: string
    height?: string
    strokeWidth?: string
    duration?: string
    delay?: string
    times?: number | 'infinite'
}


const CooSVG: FC<CooSVGProps> = ({ src, animation, width, height, duration = '3s', times = 'infinite', strokeWidth }) => {
    const box = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const current = box.current
        if (current?.hasChildNodes()) {
            current.childNodes.forEach(node => {
                current.removeChild(node)
            })
        }
        core(src, `${animation} ${duration} ${animations[animation].easingFunction} ${times}`, strokeWidth).then(res => {
            current?.append(res)
        })

    }, [src])

    const customVariable = {
        '--svg_dynamic_width': width,
        '--svg_dynamic_height': height
    }

    return (
        <span ref={box} style={{ ...(customVariable as CSSProperties) }} ></span>
    )
}

export default CooSVG

