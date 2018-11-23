/**
 * This is the identity function that helps TypeScript understand the type of the provided array
 */
const tuple = <T extends string>(args: T[]) => args
type UnionStringArray<T extends string[]> = T[number]

export const htmlElements = tuple([
    "a",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dialog",
    "div",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "i",
    "iframe",
    "img",
    "input",
    "label",
    "legend",
    "li",
    "nav",
    "object",
    "ol",
    "option",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "section",
    "select",
    "span",
    "strong",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "ul",
    "video",
    "svg",
])

export const svgElements = tuple([
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "text",
    "tspan",
])
export type HTMLElements = UnionStringArray<typeof htmlElements>
export type SVGElements = UnionStringArray<typeof svgElements>
