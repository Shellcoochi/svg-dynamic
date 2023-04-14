import { FC, useRef, useEffect, useState } from 'react'
import core from '../core'
import './index.css'

interface CooSVGProps {
    src: string
}

const CooSVG: FC<CooSVGProps> = ({ src }) => {
    const box = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const current = box.current
        if (current?.hasChildNodes()) {
            current.childNodes.forEach(node => {
                current.removeChild(node)
            })
        }
        const SVG = core(src).then(res => {
            current?.append(res)
        })

    }, [src])

    const customVariable = {
        '--width': '100px'
    }

    return (
        <span ref={box} style={{ ...(customVariable as React.CSSProperties) }} ></span>
    )
}

export default CooSVG

