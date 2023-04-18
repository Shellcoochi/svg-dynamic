type svgNode = string | Node

const init = async (url: string, animation: string, strokeWidth: string = '2') => {
    const data = await fetch(url)
    const xmlStr = await data.text()
    const parser = new DOMParser();
    let SVG: svgNode = ''
    parser.parseFromString(xmlStr, "application/xml").childNodes.forEach(doc => {
        if (doc.nodeName === 'svg' && doc.nodeType === 1) {
            doc.childNodes.forEach((item) => {
                const curDoc = (item as SVGPathElement)
                if (curDoc.tagName === 'path') {
                    const strokeLength = String(curDoc.getTotalLength);
                    curDoc.style.animation = animation;
                    curDoc.style.strokeDasharray = strokeLength;
                    curDoc.style.strokeDashoffset = strokeLength;
                    curDoc.style.stroke = curDoc.getAttribute('fill') ?? 'black';
                    curDoc.style.fillOpacity = '0';
                    curDoc.style.strokeWidth = strokeWidth;
                }
            })
            SVG = doc
        }
    })
    return SVG
}

export default init