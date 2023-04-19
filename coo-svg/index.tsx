import { FC, useRef, useEffect, useState, CSSProperties } from 'react'
import core, { AnimationProps, AnimationNames } from '../core'
import './index.less'

type AnimationTypes = keyof typeof AnimationNames

export interface CooSVGProps extends AnimationProps {
    src: string
    animation: AnimationTypes
    width?: string
    height?: string
    strokeWidth?: string
}

const CooSVG: FC<CooSVGProps> = ({ src, animation, width, height, duration = '3s', delay, times = 'infinite', strokeWidth }) => {
    const box = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const current = box.current
        if (current?.hasChildNodes()) {
            current.childNodes.forEach(node => {
                current.removeChild(node)
            })
        }
        core(src, { animation: AnimationNames[animation], duration, times, delay }, strokeWidth).then(res => {
            current?.append(res)
        })

    }, [src])

    const customVariable = {
        'display':'inline-block',
        '--svg_dynamic_width': width,
        '--svg_dynamic_height': height
    }

    return (
        <span ref={box} style={{ ...(customVariable as CSSProperties) }} ></span>
    )
}

export default CooSVG

