import { basicAnimation } from '../base'
import { AnimationProps } from '..'

/**
 * 描边动画配置
 * @param pathItem 
 * @param strokeWidth 
 */
const strokeAnimation = (pathItem: SVGElement, animation: AnimationProps, strokeWidth: string) => {

    switch (pathItem.tagName) {
        case 'path': pathDrawing(pathItem as SVGPathElement, strokeWidth); basicAnimation(pathItem, animation); break
        case 'rect': rectDrawing(pathItem as SVGPathElement, strokeWidth); basicAnimation(pathItem, animation); break
    }


}

/**
 *描边动画配置 - path
 * @param pathItem 
 * @param strokeWidth 
 */
const pathDrawing = (pathItem: SVGPathElement, strokeWidth: string) => {
    const strokeLength = String(pathItem.getTotalLength());
    pathItem.style.strokeDasharray = strokeLength;
    pathItem.style.strokeDashoffset = strokeLength;
    pathItem.style.stroke = pathItem.getAttribute('fill') ?? 'black';
    pathItem.style.fillOpacity = '0';
    pathItem.style.strokeWidth = strokeWidth;
}

/**
 *描边动画配置 - rect
 * @param pathItem 
 * @param strokeWidth 
 */
const rectDrawing = (pathItem: SVGPathElement, strokeWidth: string) => {
    const width = Number(pathItem.getAttribute('width'));
    const height = Number(pathItem.getAttribute('height'));
    const strokeLength = String((width + height ) * 2);
    pathItem.style.strokeDasharray = strokeLength;
    pathItem.style.strokeDashoffset = strokeLength;
    pathItem.style.stroke = pathItem.getAttribute('fill') ?? 'black';
    pathItem.style.fillOpacity = '0';
    pathItem.style.strokeWidth = strokeWidth;
}


export { strokeAnimation }