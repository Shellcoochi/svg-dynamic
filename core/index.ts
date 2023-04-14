type svgNode = string | Node

const init = async (url: string, options?: unknown) => {
    const data = await fetch(url)
    const xmlStr = await data.text()
    const parser = new DOMParser();
    let SVG: svgNode = ''
    parser.parseFromString(xmlStr, "application/xml").childNodes.forEach(doc => {
        if (doc.nodeName === 'svg' && doc.nodeType === 1) {
            doc.childNodes.forEach((item) => {
                if ((item as HTMLElement).tagName === 'path') {
                    (item as HTMLElement).style.animation = 'icon-path-animation 8s ease-in infinite';
                }
            })
            SVG = doc
        }
    })
    return SVG

}

export default init