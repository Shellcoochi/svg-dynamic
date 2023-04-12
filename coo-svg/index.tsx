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
            current.childNodes.forEach(node=>{
                current.removeChild(node)
            })
        }
        const SVG = core(src).then(res => {
            const a = document.getElementById('test')
            current?.append(res)
        })

    }, [src])

    return (
        <span ref={box} ></span>
    )
}

export default CooSVG

