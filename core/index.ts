import { strokeAnimation } from './stroke-animation'

type svgNode = string | Node

export interface AnimationProps {
    animation: string
    delay?: string
    timingFunction?: string
    duration?: string
    times?: string
}

export enum AnimationNames {
    'stroke_animation' = 'animation-path-drawing',
}



const init = async (url: string, animation: AnimationProps, strokeWidth: string = '2') => {
    const data = await fetch(url)
    const xmlStr = await data.text()
    const parser = new DOMParser()
    let SVG: svgNode = ''
    parser.parseFromString(xmlStr, "application/xml").childNodes.forEach(doc => {
        if (doc.nodeName === 'svg' && doc.nodeType === 1) {
            doc.childNodes.forEach((item) => {
                const curDoc = (item as SVGElement)
                if (animation.animation === AnimationNames.stroke_animation) {
                    strokeAnimation(curDoc, animation, strokeWidth)
                }
            })
            SVG = doc
        }
    })
    return SVG
}

export default init