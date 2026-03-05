(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/Reorder/namespace.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
 //# sourceMappingURL=namespace.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/context/ReorderContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReorderContext",
    ()=>ReorderContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
const ReorderContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
;
 //# sourceMappingURL=ReorderContext.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "eachAxis",
    ()=>eachAxis
]);
function eachAxis(callback) {
    return [
        callback("x"),
        callback("y")
    ];
}
;
 //# sourceMappingURL=each-axis.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setDragLock",
    ()=>setDragLock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-client] (ecmascript)");
;
function setDragLock(axis) {
    if (axis === "x" || axis === "y") {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"][axis]) {
            return null;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"][axis] = true;
            return ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"][axis] = false;
            };
        }
    } else {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].x || __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].y) {
            return null;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].x = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].y = true;
            return ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].x = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].y = false;
            };
        }
    }
}
;
 //# sourceMappingURL=set-active.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcAxisDelta",
    ()=>calcAxisDelta,
    "calcBoxDelta",
    ()=>calcBoxDelta,
    "calcLength",
    ()=>calcLength,
    "calcRelativeAxis",
    ()=>calcRelativeAxis,
    "calcRelativeAxisPosition",
    ()=>calcRelativeAxisPosition,
    "calcRelativeBox",
    ()=>calcRelativeBox,
    "calcRelativePosition",
    ()=>calcRelativePosition,
    "isNear",
    ()=>isNear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
;
const SCALE_PRECISION = 0.0001;
const SCALE_MIN = 1 - SCALE_PRECISION;
const SCALE_MAX = 1 + SCALE_PRECISION;
const TRANSLATE_PRECISION = 0.01;
const TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
const TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
    return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
    return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
    delta.origin = origin;
    delta.originPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    delta.translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(target.min, target.max, delta.origin) - delta.originPoint;
    if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) {
        delta.scale = 1.0;
    }
    if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) {
        delta.translate = 0.0;
    }
}
function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : undefined);
    calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : undefined);
}
function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
    calcRelativeAxis(target.x, relative.x, parent.x);
    calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
    target.min = layout.min - parent.min;
    target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
    calcRelativeAxisPosition(target.x, layout.x, parent.x);
    calcRelativeAxisPosition(target.y, layout.y, parent.y);
}
;
 //# sourceMappingURL=delta-calc.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSVGElement",
    ()=>isSVGElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/is-object.mjs [app-client] (ecmascript)");
;
/**
 * Checks if an element is an SVG element in a way
 * that works across iframes
 */ function isSVGElement(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(element) && "ownerSVGElement" in element;
}
;
 //# sourceMappingURL=is-svg-element.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/resize/handle-element.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resizeElement",
    ()=>resizeElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
;
;
const resizeHandlers = new WeakMap();
let observer;
const getSize = (borderBoxAxis, svgAxis, htmlAxis)=>(target, borderBoxSize)=>{
        if (borderBoxSize && borderBoxSize[0]) {
            return borderBoxSize[0][borderBoxAxis + "Size"];
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"])(target) && "getBBox" in target) {
            return target.getBBox()[svgAxis];
        } else {
            return target[htmlAxis];
        }
    };
const getWidth = /*@__PURE__*/ getSize("inline", "width", "offsetWidth");
const getHeight = /*@__PURE__*/ getSize("block", "height", "offsetHeight");
function notifyTarget({ target, borderBoxSize }) {
    resizeHandlers.get(target)?.forEach((handler)=>{
        handler(target, {
            get width () {
                return getWidth(target, borderBoxSize);
            },
            get height () {
                return getHeight(target, borderBoxSize);
            }
        });
    });
}
function notifyAll(entries) {
    entries.forEach(notifyTarget);
}
function createResizeObserver() {
    if (typeof ResizeObserver === "undefined") return;
    observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
    if (!observer) createResizeObserver();
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(target);
    elements.forEach((element)=>{
        let elementHandlers = resizeHandlers.get(element);
        if (!elementHandlers) {
            elementHandlers = new Set();
            resizeHandlers.set(element, elementHandlers);
        }
        elementHandlers.add(handler);
        observer?.observe(element);
    });
    return ()=>{
        elements.forEach((element)=>{
            const elementHandlers = resizeHandlers.get(element);
            elementHandlers?.delete(handler);
            if (!elementHandlers?.size) {
                observer?.unobserve(element);
            }
        });
    };
}
;
 //# sourceMappingURL=handle-element.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/resize/handle-window.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resizeWindow",
    ()=>resizeWindow
]);
const windowCallbacks = new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
    windowResizeHandler = ()=>{
        const info = {
            get width () {
                return window.innerWidth;
            },
            get height () {
                return window.innerHeight;
            }
        };
        windowCallbacks.forEach((callback)=>callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler) createWindowResizeHandler();
    return ()=>{
        windowCallbacks.delete(callback);
        if (!windowCallbacks.size && typeof windowResizeHandler === "function") {
            window.removeEventListener("resize", windowResizeHandler);
            windowResizeHandler = undefined;
        }
    };
}
;
 //# sourceMappingURL=handle-window.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/resize/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resize",
    ()=>resize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$handle$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/resize/handle-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$handle$2d$window$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/resize/handle-window.mjs [app-client] (ecmascript)");
;
;
function resize(a, b) {
    return typeof a === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$handle$2d$window$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeWindow"])(a) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$handle$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resizeElement"])(a, b);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addPointerEvent",
    ()=>addPointerEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/events/add-dom-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$event$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/events/event-info.mjs [app-client] (ecmascript)");
;
;
function addPointerEvent(target, eventName, handler, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDomEvent"])(target, eventName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$event$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPointerInfo"])(handler), options);
}
;
 //# sourceMappingURL=add-pointer-event.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/get-context-window.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getContextWindow",
    ()=>getContextWindow
]);
// Fixes https://github.com/motiondivision/motion/issues/2270
const getContextWindow = ({ current })=>{
    return current ? current.ownerDocument.defaultView : null;
};
;
 //# sourceMappingURL=get-context-window.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/distance.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "distance",
    ()=>distance,
    "distance2D",
    ()=>distance2D
]);
const distance = (a, b)=>Math.abs(a - b);
function distance2D(a, b) {
    // Multi-dimensional
    const xDelta = distance(a.x, b.x);
    const yDelta = distance(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}
;
 //# sourceMappingURL=distance.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanSession",
    ()=>PanSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/pipe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$event$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/events/event-info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$distance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/distance.mjs [app-client] (ecmascript)");
;
;
;
;
;
const overflowStyles = /*#__PURE__*/ new Set([
    "auto",
    "scroll"
]);
/**
 * @internal
 */ class PanSession {
    constructor(event, handlers, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3, element } = {}){
        /**
         * @internal
         */ this.startEvent = null;
        /**
         * @internal
         */ this.lastMoveEvent = null;
        /**
         * @internal
         */ this.lastMoveEventInfo = null;
        /**
         * @internal
         */ this.handlers = {};
        /**
         * @internal
         */ this.contextWindow = window;
        /**
         * Scroll positions of scrollable ancestors and window.
         * @internal
         */ this.scrollPositions = new Map();
        /**
         * Cleanup function for scroll listeners.
         * @internal
         */ this.removeScrollListeners = null;
        this.onElementScroll = (event)=>{
            this.handleScroll(event.target);
        };
        this.onWindowScroll = ()=>{
            this.handleScroll(window);
        };
        this.updatePoint = ()=>{
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const info = getPanInfo(this.lastMoveEventInfo, this.history);
            const isPanStarted = this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursor.
            const isDistancePastThreshold = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$distance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distance2D"])(info.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!isPanStarted && !isDistancePastThreshold) return;
            const { point } = info;
            const { timestamp } = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"];
            this.history.push({
                ...point,
                timestamp
            });
            const { onStart, onMove } = this.handlers;
            if (!isPanStarted) {
                onStart && onStart(this.lastMoveEvent, info);
                this.startEvent = this.lastMoveEvent;
            }
            onMove && onMove(this.lastMoveEvent, info);
        };
        this.handlePointerMove = (event, info)=>{
            this.lastMoveEvent = event;
            this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
            // Throttle mouse move event to once per frame
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(this.updatePoint, true);
        };
        this.handlePointerUp = (event, info)=>{
            this.end();
            const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
            // Resume animation if dragSnapToOrigin is set OR if no drag started (user just clicked)
            // This ensures constraint animations continue when interrupted by a click
            if (this.dragSnapToOrigin || !this.startEvent) {
                resumeAnimation && resumeAnimation();
            }
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const panInfo = getPanInfo(event.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info, this.transformPagePoint), this.history);
            if (this.startEvent && onEnd) {
                onEnd(event, panInfo);
            }
            onSessionEnd && onSessionEnd(event, panInfo);
        };
        // If we have more than one touch, don't start detecting this gesture
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimaryPointer"])(event)) return;
        this.dragSnapToOrigin = dragSnapToOrigin;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        this.distanceThreshold = distanceThreshold;
        this.contextWindow = contextWindow || window;
        const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$event$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractEventInfo"])(event);
        const initialInfo = transformPoint(info, this.transformPagePoint);
        const { point } = initialInfo;
        const { timestamp } = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"];
        this.history = [
            {
                ...point,
                timestamp
            }
        ];
        const { onSessionStart } = handlers;
        onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPointerEvent"])(this.contextWindow, "pointermove", this.handlePointerMove), (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPointerEvent"])(this.contextWindow, "pointerup", this.handlePointerUp), (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPointerEvent"])(this.contextWindow, "pointercancel", this.handlePointerUp));
        // Start scroll tracking if element provided
        if (element) {
            this.startScrollTracking(element);
        }
    }
    /**
     * Start tracking scroll on ancestors and window.
     */ startScrollTracking(element) {
        // Store initial scroll positions for scrollable ancestors
        let current = element.parentElement;
        while(current){
            const style = getComputedStyle(current);
            if (overflowStyles.has(style.overflowX) || overflowStyles.has(style.overflowY)) {
                this.scrollPositions.set(current, {
                    x: current.scrollLeft,
                    y: current.scrollTop
                });
            }
            current = current.parentElement;
        }
        // Track window scroll
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        });
        // Capture listener catches element scroll events as they bubble
        window.addEventListener("scroll", this.onElementScroll, {
            capture: true
        });
        // Direct window scroll listener (window scroll doesn't bubble)
        window.addEventListener("scroll", this.onWindowScroll);
        this.removeScrollListeners = ()=>{
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: true
            });
            window.removeEventListener("scroll", this.onWindowScroll);
        };
    }
    /**
     * Handle scroll compensation during drag.
     *
     * For element scroll: adjusts history origin since pageX/pageY doesn't change.
     * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
     */ handleScroll(target) {
        const initial = this.scrollPositions.get(target);
        if (!initial) return;
        const isWindow = target === window;
        const current = isWindow ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: target.scrollLeft,
            y: target.scrollTop
        };
        const delta = {
            x: current.x - initial.x,
            y: current.y - initial.y
        };
        if (delta.x === 0 && delta.y === 0) return;
        if (isWindow) {
            // Window scroll: pageX/pageY changes, so update lastMoveEventInfo
            if (this.lastMoveEventInfo) {
                this.lastMoveEventInfo.point.x += delta.x;
                this.lastMoveEventInfo.point.y += delta.y;
            }
        } else {
            // Element scroll: pageX/pageY unchanged, so adjust history origin
            if (this.history.length > 0) {
                this.history[0].x -= delta.x;
                this.history[0].y -= delta.y;
            }
        }
        this.scrollPositions.set(target, current);
        __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(this.updatePoint, true);
    }
    updateHandlers(handlers) {
        this.handlers = handlers;
    }
    end() {
        this.removeListeners && this.removeListeners();
        this.removeScrollListeners && this.removeScrollListeners();
        this.scrollPositions.clear();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(this.updatePoint);
    }
}
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? {
        point: transformPagePoint(info.point)
    } : info;
}
function subtractPoint(a, b) {
    return {
        x: a.x - b.x,
        y: a.y - b.y
    };
}
function getPanInfo({ point }, history) {
    return {
        point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: getVelocity(history, 0.1)
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
    if (history.length < 2) {
        return {
            x: 0,
            y: 0
        };
    }
    let i = history.length - 1;
    let timestampedPoint = null;
    const lastPoint = lastDevicePoint(history);
    while(i >= 0){
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp > (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return {
            x: 0,
            y: 0
        };
    }
    /**
     * If the selected point is the pointer-down origin (history[0]),
     * there are better movement points available, and the time gap
     * is suspiciously large (>2x timeDelta), use the next point instead.
     * This prevents stale pointer-down points from diluting velocity
     * in hold-then-flick gestures.
     */ if (timestampedPoint === history[0] && history.length > 2 && lastPoint.timestamp - timestampedPoint.timestamp > (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(timeDelta) * 2) {
        timestampedPoint = history[1];
    }
    const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(lastPoint.timestamp - timestampedPoint.timestamp);
    if (time === 0) {
        return {
            x: 0,
            y: 0
        };
    }
    const currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}
;
 //# sourceMappingURL=PanSession.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyConstraints",
    ()=>applyConstraints,
    "calcOrigin",
    ()=>calcOrigin,
    "calcRelativeAxisConstraints",
    ()=>calcRelativeAxisConstraints,
    "calcRelativeConstraints",
    ()=>calcRelativeConstraints,
    "calcViewportAxisConstraints",
    ()=>calcViewportAxisConstraints,
    "calcViewportConstraints",
    ()=>calcViewportConstraints,
    "defaultElastic",
    ()=>defaultElastic,
    "rebaseAxisConstraints",
    ()=>rebaseAxisConstraints,
    "resolveAxisElastic",
    ()=>resolveAxisElastic,
    "resolveDragElastic",
    ()=>resolveDragElastic,
    "resolvePointElastic",
    ()=>resolvePointElastic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
;
;
/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */ function applyConstraints(point, { min, max }, elastic) {
    if (min !== undefined && point < min) {
        // If we have a min point defined, and this is outside of that, constrain
        point = elastic ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(min, point, elastic.min) : Math.max(point, min);
    } else if (max !== undefined && point > max) {
        // If we have a max point defined, and this is outside of that, constrain
        point = elastic ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(max, point, elastic.max) : Math.min(point, max);
    }
    return point;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */ function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined ? axis.max + max - (axis.max - axis.min) : undefined
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */ function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */ function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    let min = constraintsAxis.min - layoutAxis.min;
    let max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
        [min, max] = [
            max,
            min
        ];
    }
    return {
        min,
        max
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */ function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
    };
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */ function calcOrigin(source, target) {
    let origin = 0.5;
    const sourceLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(source);
    const targetLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(target);
    if (targetLength > sourceLength) {
        origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(target.min, target.max - sourceLength, source.min);
    } else if (sourceLength > targetLength) {
        origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(source.min, source.max - targetLength, target.min);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0, 1, origin);
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */ function rebaseAxisConstraints(layout, constraints) {
    const relativeConstraints = {};
    if (constraints.min !== undefined) {
        relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== undefined) {
        relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
}
const defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */ function resolveDragElastic(dragElastic = defaultElastic) {
    if (dragElastic === false) {
        dragElastic = 0;
    } else if (dragElastic === true) {
        dragElastic = defaultElastic;
    }
    return {
        x: resolveAxisElastic(dragElastic, "left", "right"),
        y: resolveAxisElastic(dragElastic, "top", "bottom")
    };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
        min: resolvePointElastic(dragElastic, minLabel),
        max: resolvePointElastic(dragElastic, maxLabel)
    };
}
function resolvePointElastic(dragElastic, label) {
    return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}
;
 //# sourceMappingURL=constraints.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisualElementDragControls",
    ()=>VisualElementDragControls,
    "elementDragControls",
    ()=>elementDragControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/models.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$each$2d$axis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$measure$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/utils/measure.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$will$2d$change$2f$add$2d$will$2d$change$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/events/add-dom-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$set$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/resize/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$is$2d$keyboard$2d$accessible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$event$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/events/event-info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$get$2d$context$2d$window$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/get-context-window.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$is$2d$ref$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/is-ref-object.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$pan$2f$PanSession$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$utils$2f$constraints$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const elementDragControls = new WeakMap();
class VisualElementDragControls {
    constructor(visualElement){
        this.openDragLock = null;
        this.isDragging = false;
        this.currentDirection = null;
        this.originPoint = {
            x: 0,
            y: 0
        };
        /**
         * The permitted boundaries of travel, in pixels.
         */ this.constraints = false;
        this.hasMutatedConstraints = false;
        /**
         * The per-axis resolved elastic values.
         */ this.elastic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
        /**
         * The latest pointer event. Used as fallback when the `cancel` and `stop` functions are called without arguments.
         */ this.latestPointerEvent = null;
        /**
         * The latest pan info. Used as fallback when the `cancel` and `stop` functions are called without arguments.
         */ this.latestPanInfo = null;
        this.visualElement = visualElement;
    }
    start(originEvent, { snapToCursor = false, distanceThreshold } = {}) {
        /**
         * Don't start dragging if this component is exiting
         */ const { presenceContext } = this.visualElement;
        if (presenceContext && presenceContext.isPresent === false) return;
        const onSessionStart = (event)=>{
            if (snapToCursor) {
                this.snapToCursor((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$event$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractEventInfo"])(event).point);
            }
            this.stopAnimation();
        };
        const onStart = (event, info)=>{
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            const { drag, dragPropagation, onDragStart } = this.getProps();
            if (drag && !dragPropagation) {
                if (this.openDragLock) this.openDragLock();
                this.openDragLock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$set$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDragLock"])(drag);
                // If we don 't have the lock, don't start dragging
                if (!this.openDragLock) return;
            }
            this.latestPointerEvent = event;
            this.latestPanInfo = info;
            this.isDragging = true;
            this.currentDirection = null;
            this.resolveConstraints();
            if (this.visualElement.projection) {
                this.visualElement.projection.isAnimationBlocked = true;
                this.visualElement.projection.target = undefined;
            }
            /**
             * Record gesture origin and pointer offset
             */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$each$2d$axis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachAxis"])((axis)=>{
                let current = this.getAxisMotionValue(axis).get() || 0;
                /**
                 * If the MotionValue is a percentage value convert to px
                 */ if (__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percent"].test(current)) {
                    const { projection } = this.visualElement;
                    if (projection && projection.layout) {
                        const measuredAxis = projection.layout.layoutBox[axis];
                        if (measuredAxis) {
                            const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(measuredAxis);
                            current = length * (parseFloat(current) / 100);
                        }
                    }
                }
                this.originPoint[axis] = current;
            });
            // Fire onDragStart event
            if (onDragStart) {
                __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(()=>onDragStart(event, info), false, true);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$will$2d$change$2f$add$2d$will$2d$change$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addValueToWillChange"])(this.visualElement, "transform");
            const { animationState } = this.visualElement;
            animationState && animationState.setActive("whileDrag", true);
        };
        const onMove = (event, info)=>{
            this.latestPointerEvent = event;
            this.latestPanInfo = info;
            const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !this.openDragLock) return;
            const { offset } = info;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && this.currentDirection === null) {
                this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (this.currentDirection !== null) {
                    onDirectionLock && onDirectionLock(this.currentDirection);
                }
                return;
            }
            // Update each point with the latest position
            this.updateAxis("x", info.point, offset);
            this.updateAxis("y", info.point, offset);
            /**
             * Ideally we would leave the renderer to fire naturally at the end of
             * this frame but if the element is about to change layout as the result
             * of a re-render we want to ensure the browser can read the latest
             * bounding box to ensure the pointer and element don't fall out of sync.
             */ this.visualElement.render();
            /**
             * This must fire after the render call as it might trigger a state
             * change which itself might trigger a layout update.
             */ if (onDrag) {
                __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(()=>onDrag(event, info), false, true);
            }
        };
        const onSessionEnd = (event, info)=>{
            this.latestPointerEvent = event;
            this.latestPanInfo = info;
            this.stop(event, info);
            this.latestPointerEvent = null;
            this.latestPanInfo = null;
        };
        const resumeAnimation = ()=>{
            const { dragSnapToOrigin: snap } = this.getProps();
            if (snap || this.constraints) {
                this.startAnimation({
                    x: 0,
                    y: 0
                });
            }
        };
        const { dragSnapToOrigin } = this.getProps();
        this.panSession = new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$pan$2f$PanSession$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanSession"](originEvent, {
            onSessionStart,
            onStart,
            onMove,
            onSessionEnd,
            resumeAnimation
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin,
            distanceThreshold,
            contextWindow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$get$2d$context$2d$window$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContextWindow"])(this.visualElement),
            element: this.visualElement.current
        });
    }
    /**
     * @internal
     */ stop(event, panInfo) {
        const finalEvent = event || this.latestPointerEvent;
        const finalPanInfo = panInfo || this.latestPanInfo;
        const isDragging = this.isDragging;
        this.cancel();
        if (!isDragging || !finalPanInfo || !finalEvent) return;
        const { velocity } = finalPanInfo;
        this.startAnimation(velocity);
        const { onDragEnd } = this.getProps();
        if (onDragEnd) {
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(()=>onDragEnd(finalEvent, finalPanInfo));
        }
    }
    /**
     * @internal
     */ cancel() {
        this.isDragging = false;
        const { projection, animationState } = this.visualElement;
        if (projection) {
            projection.isAnimationBlocked = false;
        }
        this.endPanSession();
        const { dragPropagation } = this.getProps();
        if (!dragPropagation && this.openDragLock) {
            this.openDragLock();
            this.openDragLock = null;
        }
        animationState && animationState.setActive("whileDrag", false);
    }
    /**
     * Clean up the pan session without modifying other drag state.
     * This is used during unmount to ensure event listeners are removed
     * without affecting projection animations or drag locks.
     * @internal
     */ endPanSession() {
        this.panSession && this.panSession.end();
        this.panSession = undefined;
    }
    updateAxis(axis, _point, offset) {
        const { drag } = this.getProps();
        // If we're not dragging this axis, do an early return.
        if (!offset || !shouldDrag(axis, drag, this.currentDirection)) return;
        const axisValue = this.getAxisMotionValue(axis);
        let next = this.originPoint[axis] + offset[axis];
        // Apply constraints
        if (this.constraints && this.constraints[axis]) {
            next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$utils$2f$constraints$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyConstraints"])(next, this.constraints[axis], this.elastic[axis]);
        }
        axisValue.set(next);
    }
    resolveConstraints() {
        const { dragConstraints, dragElastic } = this.getProps();
        const layout = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout;
        const prevConstraints = this.constraints;
        if (dragConstraints && (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$is$2d$ref$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRefObject"])(dragConstraints)) {
            if (!this.constraints) {
                this.constraints = this.resolveRefConstraints();
            }
        } else {
            if (dragConstraints && layout) {
                this.constraints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$utils$2f$constraints$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativeConstraints"])(layout.layoutBox, dragConstraints);
            } else {
                this.constraints = false;
            }
        }
        this.elastic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$utils$2f$constraints$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveDragElastic"])(dragElastic);
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative. This only applies to relative (non-ref)
         * constraints, as ref-based constraints from calcViewportConstraints are already in the
         * correct coordinate space for the motion value transform offset.
         */ if (prevConstraints !== this.constraints && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$is$2d$ref$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRefObject"])(dragConstraints) && layout && this.constraints && !this.hasMutatedConstraints) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$each$2d$axis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachAxis"])((axis)=>{
                if (this.constraints !== false && this.getAxisMotionValue(axis)) {
                    this.constraints[axis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$utils$2f$constraints$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rebaseAxisConstraints"])(layout.layoutBox[axis], this.constraints[axis]);
                }
            });
        }
    }
    resolveRefConstraints() {
        const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
        if (!constraints || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$is$2d$ref$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRefObject"])(constraints)) return false;
        const constraintsElement = constraints.current;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
        const { projection } = this.visualElement;
        // TODO
        if (!projection || !projection.layout) return false;
        const constraintsBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$measure$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["measurePageBox"])(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
        let measuredConstraints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$utils$2f$constraints$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcViewportConstraints"])(projection.layout.layoutBox, constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */ if (onMeasureDragConstraints) {
            const userConstraints = onMeasureDragConstraints((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertBoxToBoundingBox"])(measuredConstraints));
            this.hasMutatedConstraints = !!userConstraints;
            if (userConstraints) {
                measuredConstraints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertBoundingBoxToBox"])(userConstraints);
            }
        }
        return measuredConstraints;
    }
    startAnimation(velocity) {
        const { drag, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
        const constraints = this.constraints || {};
        const momentumAnimations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$each$2d$axis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachAxis"])((axis)=>{
            if (!shouldDrag(axis, drag, this.currentDirection)) {
                return;
            }
            let transition = constraints && constraints[axis] || {};
            if (dragSnapToOrigin) transition = {
                min: 0,
                max: 0
            };
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */ const bounceStiffness = dragElastic ? 200 : 1000000;
            const bounceDamping = dragElastic ? 40 : 10000000;
            const inertia = {
                type: "inertia",
                velocity: dragMomentum ? velocity[axis] : 0,
                bounceStiffness,
                bounceDamping,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...dragTransition,
                ...transition
            };
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return this.startAxisValueAnimation(axis, inertia);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    }
    startAxisValueAnimation(axis, transition) {
        const axisValue = this.getAxisMotionValue(axis);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$will$2d$change$2f$add$2d$will$2d$change$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addValueToWillChange"])(this.visualElement, axis);
        return axisValue.start((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateMotionValue"])(axis, axisValue, 0, transition, this.visualElement, false));
    }
    stopAnimation() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$each$2d$axis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachAxis"])((axis)=>this.getAxisMotionValue(axis).stop());
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */ getAxisMotionValue(axis) {
        const dragKey = `_drag${axis.toUpperCase()}`;
        const props = this.visualElement.getProps();
        const externalMotionValue = props[dragKey];
        return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : undefined) || 0);
    }
    snapToCursor(point) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$each$2d$axis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachAxis"])((axis)=>{
            const { drag } = this.getProps();
            // If we're not dragging this axis, do an early return.
            if (!shouldDrag(axis, drag, this.currentDirection)) return;
            const { projection } = this.visualElement;
            const axisValue = this.getAxisMotionValue(axis);
            if (projection && projection.layout) {
                const { min, max } = projection.layout.layoutBox[axis];
                /**
                 * The layout measurement includes the current transform value,
                 * so we need to add it back to get the correct snap position.
                 * This fixes an issue where elements with initial coordinates
                 * would snap to the wrong position on the first drag.
                 */ const current = axisValue.get() || 0;
                axisValue.set(point[axis] - (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(min, max, 0.5) + current);
            }
        });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */ scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const { drag, dragConstraints } = this.getProps();
        const { projection } = this.visualElement;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$is$2d$ref$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRefObject"])(dragConstraints) || !projection || !this.constraints) return;
        /**
         * Stop current animations as there can be visual glitching if we try to do
         * this mid-animation
         */ this.stopAnimation();
        /**
         * Record the relative position of the dragged element relative to the
         * constraints box and save as a progress value.
         */ const boxProgress = {
            x: 0,
            y: 0
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$each$2d$axis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachAxis"])((axis)=>{
            const axisValue = this.getAxisMotionValue(axis);
            if (axisValue && this.constraints !== false) {
                const latest = axisValue.get();
                boxProgress[axis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$utils$2f$constraints$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcOrigin"])({
                    min: latest,
                    max: latest
                }, this.constraints[axis]);
            }
        });
        /**
         * Update the layout of this element and resolve the latest drag constraints
         */ const { transformTemplate } = this.visualElement.getProps();
        this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
        projection.root && projection.root.updateScroll();
        projection.updateLayout();
        /**
         * Reset constraints so resolveConstraints() will recalculate them
         * with the freshly measured layout rather than returning the cached value.
         */ this.constraints = false;
        this.resolveConstraints();
        /**
         * For each axis, calculate the current progress of the layout axis
         * within the new constraints.
         */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$each$2d$axis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachAxis"])((axis)=>{
            if (!shouldDrag(axis, drag, null)) return;
            /**
             * Calculate a new transform based on the previous box progress
             */ const axisValue = this.getAxisMotionValue(axis);
            const { min, max } = this.constraints[axis];
            axisValue.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(min, max, boxProgress[axis]));
        });
        /**
         * Flush the updated transform to the DOM synchronously to prevent
         * a visual flash at the element's CSS layout position (0,0) when
         * the transform was stripped for measurement.
         */ this.visualElement.render();
    }
    addListeners() {
        if (!this.visualElement.current) return;
        elementDragControls.set(this.visualElement, this);
        const element = this.visualElement.current;
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */ const stopPointerListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPointerEvent"])(element, "pointerdown", (event)=>{
            const { drag, dragListener = true } = this.getProps();
            const target = event.target;
            /**
             * Only block drag if clicking on a text input child element
             * (input, textarea, select, contenteditable) where users might
             * want to select text or interact with the control.
             *
             * Buttons and links don't block drag since they don't have
             * click-and-move actions of their own.
             */ const isClickingTextInputChild = target !== element && (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$is$2d$keyboard$2d$accessible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElementTextInput"])(target);
            if (drag && dragListener && !isClickingTextInputChild) {
                this.start(event);
            }
        });
        /**
         * If using ref-based constraints, observe both the draggable element
         * and the constraint container for size changes via ResizeObserver.
         * Setup is deferred because dragConstraints.current is null when
         * addListeners first runs (React hasn't committed the ref yet).
         */ let stopResizeObservers;
        const measureDragConstraints = ()=>{
            const { dragConstraints } = this.getProps();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$is$2d$ref$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRefObject"])(dragConstraints) && dragConstraints.current) {
                this.constraints = this.resolveRefConstraints();
                if (!stopResizeObservers) {
                    stopResizeObservers = startResizeObservers(element, dragConstraints.current, ()=>this.scalePositionWithinConstraints());
                }
            }
        };
        const { projection } = this.visualElement;
        const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
        if (projection && !projection.layout) {
            projection.root && projection.root.updateScroll();
            projection.updateLayout();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].read(measureDragConstraints);
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */ const stopResizeListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDomEvent"])(window, "resize", ()=>this.scalePositionWithinConstraints());
        /**
         * If the element's layout changes, calculate the delta and apply that to
         * the drag gesture's origin point.
         */ const stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({ delta, hasLayoutChanged })=>{
            if (this.isDragging && hasLayoutChanged) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$each$2d$axis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachAxis"])((axis)=>{
                    const motionValue = this.getAxisMotionValue(axis);
                    if (!motionValue) return;
                    this.originPoint[axis] += delta[axis].translate;
                    motionValue.set(motionValue.get() + delta[axis].translate);
                });
                this.visualElement.render();
            }
        });
        return ()=>{
            stopResizeListener();
            stopPointerListener();
            stopMeasureLayoutListener();
            stopLayoutUpdateListener && stopLayoutUpdateListener();
            stopResizeObservers && stopResizeObservers();
        };
    }
    getProps() {
        const props = this.visualElement.getProps();
        const { drag = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$utils$2f$constraints$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultElastic"], dragMomentum = true } = props;
        return {
            ...props,
            drag,
            dragDirectionLock,
            dragPropagation,
            dragConstraints,
            dragElastic,
            dragMomentum
        };
    }
}
function skipFirstCall(callback) {
    let isFirst = true;
    return ()=>{
        if (isFirst) {
            isFirst = false;
            return;
        }
        callback();
    };
}
function startResizeObservers(element, constraintsElement, onResize) {
    const stopElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resize"])(element, skipFirstCall(onResize));
    const stopContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resize"])(constraintsElement, skipFirstCall(onResize));
    return ()=>{
        stopElement();
        stopContainer();
    };
}
function shouldDrag(direction, drag, currentDirection) {
    return (drag === true || drag === direction) && (currentDirection === null || currentDirection === direction);
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */ function getCurrentDirection(offset, lockThreshold = 10) {
    let direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    } else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}
;
 //# sourceMappingURL=VisualElementDragControls.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/gestures/drag/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragGesture",
    ()=>DragGesture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/Feature.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$VisualElementDragControls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs [app-client] (ecmascript)");
;
;
;
class DragGesture extends __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Feature"] {
    constructor(node){
        super(node);
        this.removeGroupControls = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
        this.removeListeners = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
        this.controls = new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$VisualElementDragControls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisualElementDragControls"](node);
    }
    mount() {
        // If we've been provided a DragControls for manual control over the drag gesture,
        // subscribe this component to it on mount.
        const { dragControls } = this.node.getProps();
        if (dragControls) {
            this.removeGroupControls = dragControls.subscribe(this.controls);
        }
        this.removeListeners = this.controls.addListeners() || __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    }
    update() {
        const { dragControls } = this.node.getProps();
        const { dragControls: prevDragControls } = this.node.prevProps || {};
        if (dragControls !== prevDragControls) {
            this.removeGroupControls();
            if (dragControls) {
                this.removeGroupControls = dragControls.subscribe(this.controls);
            }
        }
    }
    unmount() {
        this.removeGroupControls();
        this.removeListeners();
        /**
         * In React 19, during list reorder reconciliation, components may
         * briefly unmount and remount while the drag is still active. If we're
         * actively dragging, we should NOT end the pan session - it will
         * continue tracking pointer events via its window-level listeners.
         *
         * The pan session will be properly cleaned up when:
         * 1. The drag ends naturally (pointerup/pointercancel)
         * 2. The component is truly removed from the DOM
         */ if (!this.controls.isDragging) {
            this.controls.endPanSession();
        }
    }
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/gestures/pan/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanGesture",
    ()=>PanGesture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/Feature.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$get$2d$context$2d$window$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/get-context-window.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$pan$2f$PanSession$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs [app-client] (ecmascript)");
;
;
;
;
;
const asyncHandler = (handler)=>(event, info)=>{
        if (handler) {
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(()=>handler(event, info), false, true);
        }
    };
class PanGesture extends __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Feature"] {
    constructor(){
        super(...arguments);
        this.removePointerDownListener = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    }
    onPointerDown(pointerDownEvent) {
        this.session = new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$pan$2f$PanSession$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanSession"](pointerDownEvent, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$get$2d$context$2d$window$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContextWindow"])(this.node)
        });
    }
    createPanHandlers() {
        const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
        return {
            onSessionStart: asyncHandler(onPanSessionStart),
            onStart: asyncHandler(onPanStart),
            onMove: asyncHandler(onPan),
            onEnd: (event, info)=>{
                delete this.session;
                if (onPanEnd) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(()=>onPanEnd(event, info));
                }
            }
        };
    }
    mount() {
        this.removePointerDownListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPointerEvent"])(this.node.current, "pointerdown", (event)=>this.onPointerDown(event));
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener();
        this.session && this.session.end();
    }
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/state.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "globalProjectionState",
    ()=>globalProjectionState
]);
/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */ const globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */ hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */ hasEverUpdated: false
};
;
 //# sourceMappingURL=state.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeasureLayout",
    ()=>MeasureLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/microtask.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$SwitchLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
/**
 * Track whether we've taken any snapshots yet. If not,
 * we can safely skip notification of didUpdate.
 *
 * Difficult to capture in a test but to prevent flickering
 * we must set this to true either on update or unmount.
 * Running `next-env/layout-id` in Safari will show this behaviour if broken.
 */ let hasTakenAnySnapshot = false;
class MeasureLayoutWithContext extends __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */ componentDidMount() {
        const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
        const { projection } = visualElement;
        if (projection) {
            if (layoutGroup.group) layoutGroup.group.add(projection);
            if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
                switchLayoutGroup.register(projection);
            }
            if (hasTakenAnySnapshot) {
                projection.root.didUpdate();
            }
            projection.addEventListener("animationComplete", ()=>{
                this.safeToRemove();
            });
            projection.setOptions({
                ...projection.options,
                layoutDependency: this.props.layoutDependency,
                onExitComplete: ()=>this.safeToRemove()
            });
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalProjectionState"].hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(prevProps) {
        const { layoutDependency, visualElement, drag, isPresent } = this.props;
        const { projection } = visualElement;
        if (!projection) return null;
        /**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */ projection.isPresent = isPresent;
        if (prevProps.layoutDependency !== layoutDependency) {
            projection.setOptions({
                ...projection.options,
                layoutDependency
            });
        }
        hasTakenAnySnapshot = true;
        if (drag || prevProps.layoutDependency !== layoutDependency || layoutDependency === undefined || prevProps.isPresent !== isPresent) {
            projection.willUpdate();
        } else {
            this.safeToRemove();
        }
        if (prevProps.isPresent !== isPresent) {
            if (isPresent) {
                projection.promote();
            } else if (!projection.relegate()) {
                /**
                 * If there's another stack member taking over from this one,
                 * it's in charge of the exit animation and therefore should
                 * be in charge of the safe to remove. Otherwise we call it here.
                 */ __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(()=>{
                    const stack = projection.getStack();
                    if (!stack || !stack.members.length) {
                        this.safeToRemove();
                    }
                });
            }
        }
        return null;
    }
    componentDidUpdate() {
        const { projection } = this.props.visualElement;
        if (projection) {
            projection.root.didUpdate();
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microtask"].postRender(()=>{
                if (!projection.currentAnimation && projection.isLead()) {
                    this.safeToRemove();
                }
            });
        }
    }
    componentWillUnmount() {
        const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
        const { projection } = visualElement;
        hasTakenAnySnapshot = true;
        if (projection) {
            projection.scheduleCheckAfterUnmount();
            if (layoutGroup && layoutGroup.group) layoutGroup.group.remove(projection);
            if (promoteContext && promoteContext.deregister) promoteContext.deregister(projection);
        }
    }
    safeToRemove() {
        const { safeToRemove } = this.props;
        safeToRemove && safeToRemove();
    }
    render() {
        return null;
    }
}
function MeasureLayout(props) {
    const [isPresent, safeToRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePresence"])();
    const layoutGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroupContext"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MeasureLayoutWithContext, {
        ...props,
        layoutGroup: layoutGroup,
        switchLayoutGroup: (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$SwitchLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchLayoutGroupContext"]),
        isPresent: isPresent,
        safeToRemove: safeToRemove
    });
}
;
 //# sourceMappingURL=MeasureLayout.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/animate/single-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateSingleValue",
    ()=>animateSingleValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
;
;
;
function animateSingleValue(value, keyframes, options) {
    const motionValue$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(value) ? value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(value);
    motionValue$1.start((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateMotionValue"])("", motionValue$1, keyframes, options));
    return motionValue$1.animation;
}
;
 //# sourceMappingURL=single-value.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/delay.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "delay",
    ()=>delay,
    "delayInSeconds",
    ()=>delayInSeconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/sync-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
;
/**
 * Timeout defined in ms
 */ function delay(callback, timeout) {
    const start = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].now();
    const checkElapsed = ({ timestamp })=>{
        const elapsed = timestamp - start;
        if (elapsed >= timeout) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(checkElapsed);
            callback(elapsed - timeout);
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].setup(checkElapsed, true);
    return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(checkElapsed);
}
function delayInSeconds(callback, timeout) {
    return delay(callback, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(timeout));
}
;
 //# sourceMappingURL=delay.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSVGSVGElement",
    ()=>isSVGSVGElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs [app-client] (ecmascript)");
;
/**
 * Checks if an element is specifically an SVGSVGElement (the root SVG element)
 * in a way that works across iframes
 */ function isSVGSVGElement(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"])(element) && element.tagName === "svg";
}
;
 //# sourceMappingURL=is-svg-svg-element.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mixValues",
    ()=>mixValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
;
;
;
const borders = [
    "TopLeft",
    "TopRight",
    "BottomLeft",
    "BottomRight"
];
const numBorders = borders.length;
const asNumber = (value)=>typeof value === "string" ? parseFloat(value) : value;
const isPx = (value)=>typeof value === "number" || __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"].test(value);
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
    if (shouldCrossfadeOpacity) {
        target.opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(0, lead.opacity ?? 1, easeCrossfadeIn(progress));
        target.opacityExit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(follow.opacity ?? 1, 0, easeCrossfadeOut(progress));
    } else if (isOnlyMember) {
        target.opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(follow.opacity ?? 1, lead.opacity ?? 1, progress);
    }
    /**
     * Mix border radius
     */ for(let i = 0; i < numBorders; i++){
        const borderLabel = `border${borders[i]}Radius`;
        let followRadius = getRadius(follow, borderLabel);
        let leadRadius = getRadius(lead, borderLabel);
        if (followRadius === undefined && leadRadius === undefined) continue;
        followRadius || (followRadius = 0);
        leadRadius || (leadRadius = 0);
        const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
        if (canMix) {
            target[borderLabel] = Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(asNumber(followRadius), asNumber(leadRadius), progress), 0);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percent"].test(leadRadius) || __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percent"].test(followRadius)) {
                target[borderLabel] += "%";
            }
        } else {
            target[borderLabel] = leadRadius;
        }
    }
    /**
     * Mix rotation
     */ if (follow.rotate || lead.rotate) {
        target.rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(follow.rotate || 0, lead.rotate || 0, progress);
    }
}
function getRadius(values, radiusName) {
    return values[radiusName] !== undefined ? values[radiusName] : values.borderRadius;
}
const easeCrossfadeIn = /*@__PURE__*/ compress(0, 0.5, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circOut"]);
const easeCrossfadeOut = /*@__PURE__*/ compress(0.5, 0.95, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
function compress(min, max, easing) {
    return (p)=>{
        // Could replace ifs with clamp
        if (p < min) return 0;
        if (p > max) return 1;
        return easing((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(min, max, p));
    };
}
;
 //# sourceMappingURL=mix-values.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/copy.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "copyAxisDeltaInto",
    ()=>copyAxisDeltaInto,
    "copyAxisInto",
    ()=>copyAxisInto,
    "copyBoxInto",
    ()=>copyBoxInto
]);
/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */ function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */ function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
}
/**
 * Reset a delta to the provided origin box.
 *
 * This is a mutative operation.
 */ function copyAxisDeltaInto(delta, originDelta) {
    delta.translate = originDelta.translate;
    delta.scale = originDelta.scale;
    delta.originPoint = originDelta.originPoint;
    delta.origin = originDelta.origin;
}
;
 //# sourceMappingURL=copy.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "removeAxisDelta",
    ()=>removeAxisDelta,
    "removeAxisTransforms",
    ()=>removeAxisTransforms,
    "removeBoxTransforms",
    ()=>removeBoxTransforms,
    "removePointDelta",
    ()=>removePointDelta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs [app-client] (ecmascript)");
;
;
;
/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */ function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalePoint"])(point, 1 / scale, originPoint);
    if (boxScale !== undefined) {
        point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalePoint"])(point, 1 / boxScale, originPoint);
    }
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */ function removeAxisDelta(axis, translate = 0, scale = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percent"].test(translate)) {
        translate = parseFloat(translate);
        const relativeProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(sourceAxis.min, sourceAxis.max, translate / 100);
        translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number") return;
    let originPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(originAxis.min, originAxis.max, origin);
    if (axis === originAxis) originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */ function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */ const xKeys = [
    "x",
    "scaleX",
    "originX"
];
const yKeys = [
    "y",
    "scaleY",
    "originY"
];
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */ function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : undefined, sourceBox ? sourceBox.x : undefined);
    removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : undefined, sourceBox ? sourceBox.y : undefined);
}
;
 //# sourceMappingURL=delta-remove.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/utils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aspectRatio",
    ()=>aspectRatio,
    "axisDeltaEquals",
    ()=>axisDeltaEquals,
    "axisEquals",
    ()=>axisEquals,
    "axisEqualsRounded",
    ()=>axisEqualsRounded,
    "boxEquals",
    ()=>boxEquals,
    "boxEqualsRounded",
    ()=>boxEqualsRounded,
    "isDeltaZero",
    ()=>isDeltaZero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs [app-client] (ecmascript)");
;
function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
    return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
    return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
    return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
}
function boxEqualsRounded(a, b) {
    return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(box.x) / (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(box.y);
}
function axisDeltaEquals(a, b) {
    return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
}
;
 //# sourceMappingURL=utils.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/shared/stack.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeStack",
    ()=>NodeStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
;
class NodeStack {
    constructor(){
        this.members = [];
    }
    add(node) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.members, node);
        for(let i = this.members.length - 1; i >= 0; i--){
            const member = this.members[i];
            if (member === node || member === this.lead || member === this.prevLead) continue;
            const inst = member.instance;
            if ((!inst || inst.isConnected === false) && !member.snapshot) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(this.members, member);
                member.unmount();
            }
        }
        node.scheduleRender();
    }
    remove(node) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(this.members, node);
        if (node === this.prevLead) this.prevLead = undefined;
        if (node === this.lead) {
            const prevLead = this.members[this.members.length - 1];
            if (prevLead) this.promote(prevLead);
        }
    }
    relegate(node) {
        for(let i = this.members.indexOf(node) - 1; i >= 0; i--){
            const member = this.members[i];
            if (member.isPresent !== false && member.instance?.isConnected !== false) {
                this.promote(member);
                return true;
            }
        }
        return false;
    }
    promote(node, preserveFollowOpacity) {
        const prevLead = this.lead;
        if (node === prevLead) return;
        this.prevLead = prevLead;
        this.lead = node;
        node.show();
        if (prevLead) {
            prevLead.updateSnapshot();
            node.scheduleRender();
            const { layoutDependency: prevDep } = prevLead.options;
            const { layoutDependency: nextDep } = node.options;
            if (prevDep === undefined || prevDep !== nextDep) {
                node.resumeFrom = prevLead;
                if (preserveFollowOpacity) prevLead.preserveOpacity = true;
                if (prevLead.snapshot) {
                    node.snapshot = prevLead.snapshot;
                    node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
                }
                if (node.root?.isUpdating) node.isLayoutDirty = true;
            }
            if (node.options.crossfade === false) prevLead.hide();
        }
    }
    exitAnimationComplete() {
        this.members.forEach((member)=>{
            member.options.onExitComplete?.();
            member.resumingFrom?.options.onExitComplete?.();
        });
    }
    scheduleRender() {
        this.members.forEach((member)=>member.instance && member.scheduleRender(false));
    }
    removeLeadSnapshot() {
        if (this.lead?.snapshot) this.lead.snapshot = undefined;
    }
}
;
 //# sourceMappingURL=stack.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/styles/transform.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildProjectionTransform",
    ()=>buildProjectionTransform
]);
function buildProjectionTransform(delta, treeScale, latestTransform) {
    let transform = "";
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */ const xTranslate = delta.x.translate / treeScale.x;
    const yTranslate = delta.y.translate / treeScale.y;
    const zTranslate = latestTransform?.z || 0;
    if (xTranslate || yTranslate || zTranslate) {
        transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
    }
    /**
     * Apply scale correction for the tree transform.
     * This will apply scale to the screen-orientated axes.
     */ if (treeScale.x !== 1 || treeScale.y !== 1) {
        transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    }
    if (latestTransform) {
        const { transformPerspective, rotate, rotateX, rotateY, skewX, skewY } = latestTransform;
        if (transformPerspective) transform = `perspective(${transformPerspective}px) ${transform}`;
        if (rotate) transform += `rotate(${rotate}deg) `;
        if (rotateX) transform += `rotateX(${rotateX}deg) `;
        if (rotateY) transform += `rotateY(${rotateY}deg) `;
        if (skewX) transform += `skewX(${skewX}deg) `;
        if (skewY) transform += `skewY(${skewY}deg) `;
    }
    /**
     * Apply scale to match the size of the element to the size we want it.
     * This will apply scale to the element-orientated axes.
     */ const elementScaleX = delta.x.scale * treeScale.x;
    const elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) {
        transform += `scale(${elementScaleX}, ${elementScaleY})`;
    }
    return transform || "none";
}
;
 //# sourceMappingURL=transform.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareByDepth",
    ()=>compareByDepth
]);
const compareByDepth = (a, b)=>a.depth - b.depth;
;
 //# sourceMappingURL=compare-by-depth.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/utils/flat-tree.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlatTree",
    ()=>FlatTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$compare$2d$by$2d$depth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs [app-client] (ecmascript)");
;
;
class FlatTree {
    constructor(){
        this.children = [];
        this.isDirty = false;
    }
    add(child) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.children, child);
        this.isDirty = true;
    }
    remove(child) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(this.children, child);
        this.isDirty = true;
    }
    forEach(callback) {
        this.isDirty && this.children.sort(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$compare$2d$by$2d$depth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareByDepth"]);
        this.isDirty = false;
        this.children.forEach(callback);
    }
}
;
 //# sourceMappingURL=flat-tree.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/create-projection-node.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cleanDirtyNodes",
    ()=>cleanDirtyNodes,
    "createProjectionNode",
    ()=>createProjectionNode,
    "mixAxis",
    ()=>mixAxis,
    "mixAxisDelta",
    ()=>mixAxisDelta,
    "mixBox",
    ()=>mixBox,
    "propagateDirtyNodes",
    ()=>propagateDirtyNodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$subscription$2d$manager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$animate$2f$single$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/animate/single-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$get$2d$appear$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/microtask.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/sync-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$correction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/stats/animation-count.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/stats/buffer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$delay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/delay.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$resolve$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$animation$2f$mix$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/copy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$remove$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/models.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$shared$2f$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/shared/stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/styles/transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$each$2d$axis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$flat$2d$tree$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/utils/flat-tree.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const metrics = {
    nodes: 0,
    calculatedTargetDeltas: 0,
    calculatedProjections: 0
};
const transformAxes = [
    "",
    "X",
    "Y",
    "Z"
];
/**
 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
 * which has a noticeable difference in spring animations
 */ const animationTarget = 1000;
let id = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
    const { latestValues } = visualElement;
    // Record the distorting transform and then temporarily set it to 0
    if (latestValues[key]) {
        values[key] = latestValues[key];
        visualElement.setStaticValue(key, 0);
        if (sharedAnimationValues) {
            sharedAnimationValues[key] = 0;
        }
    }
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
    projectionNode.hasCheckedOptimisedAppear = true;
    if (projectionNode.root === projectionNode) return;
    const { visualElement } = projectionNode.options;
    if (!visualElement) return;
    const appearId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$get$2d$appear$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptimisedAppearId"])(visualElement);
    if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
        const { layout, layoutId } = projectionNode.options;
        window.MotionCancelOptimisedAnimation(appearId, "transform", __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"], !(layout || layoutId));
    }
    const { parent } = projectionNode;
    if (parent && !parent.hasCheckedOptimisedAppear) {
        cancelTreeOptimisedTransformAnimations(parent);
    }
}
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
    return class ProjectionNode {
        constructor(latestValues = {}, parent = defaultParent?.()){
            /**
             * A unique ID generated for every projection node.
             */ this.id = id++;
            /**
             * An id that represents a unique session instigated by startUpdate.
             */ this.animationId = 0;
            this.animationCommitId = 0;
            /**
             * A Set containing all this component's children. This is used to iterate
             * through the children.
             *
             * TODO: This could be faster to iterate as a flat array stored on the root node.
             */ this.children = new Set();
            /**
             * Options for the node. We use this to configure what kind of layout animations
             * we should perform (if any).
             */ this.options = {};
            /**
             * We use this to detect when its safe to shut down part of a projection tree.
             * We have to keep projecting children for scale correction and relative projection
             * until all their parents stop performing layout animations.
             */ this.isTreeAnimating = false;
            this.isAnimationBlocked = false;
            /**
             * Flag to true if we think this layout has been changed. We can't always know this,
             * currently we set it to true every time a component renders, or if it has a layoutDependency
             * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
             * and if one node is dirtied, they all are.
             */ this.isLayoutDirty = false;
            /**
             * Flag to true if we think the projection calculations for this node needs
             * recalculating as a result of an updated transform or layout animation.
             */ this.isProjectionDirty = false;
            /**
             * Flag to true if the layout *or* transform has changed. This then gets propagated
             * throughout the projection tree, forcing any element below to recalculate on the next frame.
             */ this.isSharedProjectionDirty = false;
            /**
             * Flag transform dirty. This gets propagated throughout the whole tree but is only
             * respected by shared nodes.
             */ this.isTransformDirty = false;
            /**
             * Block layout updates for instant layout transitions throughout the tree.
             */ this.updateManuallyBlocked = false;
            this.updateBlockedByResize = false;
            /**
             * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
             * call.
             */ this.isUpdating = false;
            /**
             * If this is an SVG element we currently disable projection transforms
             */ this.isSVG = false;
            /**
             * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
             * its projection styles.
             */ this.needsReset = false;
            /**
             * Flags whether this node should have its transform reset prior to measuring.
             */ this.shouldResetTransform = false;
            /**
             * Store whether this node has been checked for optimised appear animations. As
             * effects fire bottom-up, and we want to look up the tree for appear animations,
             * this makes sure we only check each path once, stopping at nodes that
             * have already been checked.
             */ this.hasCheckedOptimisedAppear = false;
            /**
             * An object representing the calculated contextual/accumulated/tree scale.
             * This will be used to scale calculcated projection transforms, as these are
             * calculated in screen-space but need to be scaled for elements to layoutly
             * make it to their calculated destinations.
             *
             * TODO: Lazy-init
             */ this.treeScale = {
                x: 1,
                y: 1
            };
            /**
             *
             */ this.eventHandlers = new Map();
            this.hasTreeAnimated = false;
            this.layoutVersion = 0;
            // Note: Currently only running on root node
            this.updateScheduled = false;
            this.scheduleUpdate = ()=>this.update();
            this.projectionUpdateScheduled = false;
            this.checkUpdateFailed = ()=>{
                if (this.isUpdating) {
                    this.isUpdating = false;
                    this.clearAllSnapshots();
                }
            };
            /**
             * This is a multi-step process as shared nodes might be of different depths. Nodes
             * are sorted by depth order, so we need to resolve the entire tree before moving to
             * the next step.
             */ this.updateProjection = ()=>{
                this.projectionUpdateScheduled = false;
                /**
                 * Reset debug counts. Manually resetting rather than creating a new
                 * object each frame.
                 */ if (__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].value) {
                    metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0;
                }
                this.nodes.forEach(propagateDirtyNodes);
                this.nodes.forEach(resolveTargetDelta);
                this.nodes.forEach(calcProjection);
                this.nodes.forEach(cleanDirtyNodes);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].addProjectionMetrics) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].addProjectionMetrics(metrics);
                }
            };
            /**
             * Frame calculations
             */ this.resolvedRelativeTargetAt = 0.0;
            this.linkedParentVersion = 0;
            this.hasProjected = false;
            this.isVisible = true;
            this.animationProgress = 0;
            /**
             * Shared layout
             */ // TODO Only running on root node
            this.sharedNodes = new Map();
            this.latestValues = latestValues;
            this.root = parent ? parent.root || parent : this;
            this.path = parent ? [
                ...parent.path,
                parent
            ] : [];
            this.parent = parent;
            this.depth = parent ? parent.depth + 1 : 0;
            for(let i = 0; i < this.path.length; i++){
                this.path[i].shouldResetTransform = true;
            }
            if (this.root === this) this.nodes = new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$flat$2d$tree$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlatTree"]();
        }
        addEventListener(name, handler) {
            if (!this.eventHandlers.has(name)) {
                this.eventHandlers.set(name, new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$subscription$2d$manager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscriptionManager"]());
            }
            return this.eventHandlers.get(name).add(handler);
        }
        notifyListeners(name, ...args) {
            const subscriptionManager = this.eventHandlers.get(name);
            subscriptionManager && subscriptionManager.notify(...args);
        }
        hasListeners(name) {
            return this.eventHandlers.has(name);
        }
        /**
         * Lifecycles
         */ mount(instance) {
            if (this.instance) return;
            this.isSVG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"])(instance) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGSVGElement"])(instance);
            this.instance = instance;
            const { layoutId, layout, visualElement } = this.options;
            if (visualElement && !visualElement.current) {
                visualElement.mount(instance);
            }
            this.root.nodes.add(this);
            this.parent && this.parent.children.add(this);
            if (this.root.hasTreeAnimated && (layout || layoutId)) {
                this.isLayoutDirty = true;
            }
            if (attachResizeListener) {
                let cancelDelay;
                let innerWidth = 0;
                const resizeUnblockUpdate = ()=>this.root.updateBlockedByResize = false;
                // Set initial innerWidth in a frame.read callback to batch the read
                __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].read(()=>{
                    innerWidth = window.innerWidth;
                });
                attachResizeListener(instance, ()=>{
                    const newInnerWidth = window.innerWidth;
                    if (newInnerWidth === innerWidth) return;
                    innerWidth = newInnerWidth;
                    this.root.updateBlockedByResize = true;
                    cancelDelay && cancelDelay();
                    cancelDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$delay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["delay"])(resizeUnblockUpdate, 250);
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalProjectionState"].hasAnimatedSinceResize) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalProjectionState"].hasAnimatedSinceResize = false;
                        this.nodes.forEach(finishAnimation);
                    }
                });
            }
            if (layoutId) {
                this.root.registerSharedNode(layoutId, this);
            }
            // Only register the handler if it requires layout animation
            if (this.options.animate !== false && visualElement && (layoutId || layout)) {
                this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout })=>{
                    if (this.isTreeAnimationBlocked()) {
                        this.target = undefined;
                        this.relativeTarget = undefined;
                        return;
                    }
                    // TODO: Check here if an animation exists
                    const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
                    const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
                    /**
                     * The target layout of the element might stay the same,
                     * but its position relative to its parent has changed.
                     */ const hasTargetChanged = !this.targetLayout || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boxEqualsRounded"])(this.targetLayout, newLayout);
                    /*
                     * Note: Disabled to fix relative animations always triggering new
                     * layout animations. If this causes further issues, we can try
                     * a different approach to detecting relative target changes.
                     */ // || hasRelativeLayoutChanged
                    /**
                     * If the layout hasn't seemed to have changed, it might be that the
                     * element is visually in the same place in the document but its position
                     * relative to its parent has indeed changed. So here we check for that.
                     */ const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
                    if (this.options.layoutRoot || this.resumeFrom || hasOnlyRelativeTargetChanged || hasLayoutChanged && (hasTargetChanged || !this.currentAnimation)) {
                        if (this.resumeFrom) {
                            this.resumingFrom = this.resumeFrom;
                            this.resumingFrom.resumingFrom = undefined;
                        }
                        const animationOptions = {
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"])(layoutTransition, "layout"),
                            onPlay: onLayoutAnimationStart,
                            onComplete: onLayoutAnimationComplete
                        };
                        if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
                            animationOptions.delay = 0;
                            animationOptions.type = false;
                        }
                        this.startAnimation(animationOptions);
                        /**
                         * Set animation origin after starting animation to avoid layout jump
                         * caused by stopping previous layout animation
                         */ this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
                    } else {
                        /**
                         * If the layout hasn't changed and we have an animation that hasn't started yet,
                         * finish it immediately. Otherwise it will be animating from a location
                         * that was probably never committed to screen and look like a jumpy box.
                         */ if (!hasLayoutChanged) {
                            finishAnimation(this);
                        }
                        if (this.isLead() && this.options.onExitComplete) {
                            this.options.onExitComplete();
                        }
                    }
                    this.targetLayout = newLayout;
                });
            }
        }
        unmount() {
            this.options.layoutId && this.willUpdate();
            this.root.nodes.remove(this);
            const stack = this.getStack();
            stack && stack.remove(this);
            this.parent && this.parent.children.delete(this);
            this.instance = undefined;
            this.eventHandlers.clear();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(this.updateProjection);
        }
        // only on the root
        blockUpdate() {
            this.updateManuallyBlocked = true;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = false;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
        }
        // Note: currently only running on root node
        startUpdate() {
            if (this.isUpdateBlocked()) return;
            this.isUpdating = true;
            this.nodes && this.nodes.forEach(resetSkewAndRotation);
            this.animationId++;
        }
        getTransformTemplate() {
            const { visualElement } = this.options;
            return visualElement && visualElement.getProps().transformTemplate;
        }
        willUpdate(shouldNotifyListeners = true) {
            this.root.hasTreeAnimated = true;
            if (this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            /**
             * If we're running optimised appear animations then these must be
             * cancelled before measuring the DOM. This is so we can measure
             * the true layout of the element rather than the WAAPI animation
             * which will be unaffected by the resetSkewAndRotate step.
             *
             * Note: This is a DOM write. Worst case scenario is this is sandwiched
             * between other snapshot reads which will cause unnecessary style recalculations.
             * This has to happen here though, as we don't yet know which nodes will need
             * snapshots in startUpdate(), but we only want to cancel optimised animations
             * if a layout animation measurement is actually going to be affected by them.
             */ if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
                cancelTreeOptimisedTransformAnimations(this);
            }
            !this.root.isUpdating && this.root.startUpdate();
            if (this.isLayoutDirty) return;
            this.isLayoutDirty = true;
            for(let i = 0; i < this.path.length; i++){
                const node = this.path[i];
                node.shouldResetTransform = true;
                node.updateScroll("snapshot");
                if (node.options.layoutRoot) {
                    node.willUpdate(false);
                }
            }
            const { layoutId, layout } = this.options;
            if (layoutId === undefined && !layout) return;
            const transformTemplate = this.getTransformTemplate();
            this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : undefined;
            this.updateSnapshot();
            shouldNotifyListeners && this.notifyListeners("willUpdate");
        }
        update() {
            this.updateScheduled = false;
            const updateWasBlocked = this.isUpdateBlocked();
            // When doing an instant transition, we skip the layout update,
            // but should still clean up the measurements so that the next
            // snapshot could be taken correctly.
            if (updateWasBlocked) {
                this.unblockUpdate();
                this.clearAllSnapshots();
                this.nodes.forEach(clearMeasurements);
                return;
            }
            /**
             * If this is a repeat of didUpdate then ignore the animation.
             */ if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(clearIsLayoutDirty);
                return;
            }
            this.animationCommitId = this.animationId;
            if (!this.isUpdating) {
                this.nodes.forEach(clearIsLayoutDirty);
            } else {
                this.isUpdating = false;
                /**
                 * Write
                 */ this.nodes.forEach(resetTransformStyle);
                /**
                 * Read ==================
                 */ // Update layout measurements of updated children
                this.nodes.forEach(updateLayout);
                /**
                 * Write
                 */ // Notify listeners that the layout is updated
                this.nodes.forEach(notifyLayoutUpdate);
            }
            this.clearAllSnapshots();
            /**
             * Manually flush any pending updates. Ideally
             * we could leave this to the following requestAnimationFrame but this seems
             * to leave a flash of incorrectly styled content.
             */ const now = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"].now();
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].delta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0, 1000 / 60, now - __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].timestamp);
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].timestamp = now;
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].isProcessing = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSteps"].update.process(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSteps"].preRender.process(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSteps"].render.process(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].isProcessing = false;
        }
        didUpdate() {
            if (!this.updateScheduled) {
                this.updateScheduled = true;
                __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microtask"].read(this.scheduleUpdate);
            }
        }
        clearAllSnapshots() {
            this.nodes.forEach(clearSnapshot);
            this.sharedNodes.forEach(removeLeadSnapshots);
        }
        scheduleUpdateProjection() {
            if (!this.projectionUpdateScheduled) {
                this.projectionUpdateScheduled = true;
                __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].preRender(this.updateProjection, false, true);
            }
        }
        scheduleCheckAfterUnmount() {
            /**
             * If the unmounting node is in a layoutGroup and did trigger a willUpdate,
             * we manually call didUpdate to give a chance to the siblings to animate.
             * Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
             */ __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(()=>{
                if (this.isLayoutDirty) {
                    this.root.didUpdate();
                } else {
                    this.root.checkUpdateFailed();
                }
            });
        }
        /**
         * Update measurements
         */ updateSnapshot() {
            if (this.snapshot || !this.instance) return;
            this.snapshot = this.measure();
            if (this.snapshot && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(this.snapshot.measuredBox.x) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(this.snapshot.measuredBox.y)) {
                this.snapshot = undefined;
            }
        }
        updateLayout() {
            if (!this.instance) return;
            this.updateScroll();
            if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
                return;
            }
            /**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */ if (this.resumeFrom && !this.resumeFrom.instance) {
                for(let i = 0; i < this.path.length; i++){
                    const node = this.path[i];
                    node.updateScroll();
                }
            }
            const prevLayout = this.layout;
            this.layout = this.measure(false);
            this.layoutVersion++;
            this.layoutCorrected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
            this.isLayoutDirty = false;
            this.projectionDelta = undefined;
            this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement } = this.options;
            visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : undefined);
        }
        updateScroll(phase = "measure") {
            let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
                needsMeasurement = false;
            }
            if (needsMeasurement && this.instance) {
                const isRoot = checkIsScrollRoot(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase,
                    isRoot,
                    offset: measureScroll(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : isRoot
                };
            }
        }
        resetTransform() {
            if (!resetTransform) return;
            const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
            const hasProjection = this.projectionDelta && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDeltaZero"])(this.projectionDelta);
            const transformTemplate = this.getTransformTemplate();
            const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : undefined;
            const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
            if (isResetRequested && this.instance && (hasProjection || (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTransform"])(this.latestValues) || transformTemplateHasChanged)) {
                resetTransform(this.instance, transformTemplateValue);
                this.shouldResetTransform = false;
                this.scheduleRender();
            }
        }
        measure(removeTransform = true) {
            const pageBox = this.measurePageBox();
            let layoutBox = this.removeElementScroll(pageBox);
            /**
             * Measurements taken during the pre-render stage
             * still have transforms applied so we remove them
             * via calculation.
             */ if (removeTransform) {
                layoutBox = this.removeTransform(layoutBox);
            }
            roundBox(layoutBox);
            return {
                animationId: this.root.animationId,
                measuredBox: pageBox,
                layoutBox,
                latestValues: {},
                source: this.id
            };
        }
        measurePageBox() {
            const { visualElement } = this.options;
            if (!visualElement) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
            const box = visualElement.measureViewportBox();
            const wasInScrollRoot = this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot);
            if (!wasInScrollRoot) {
                // Remove viewport scroll to give page-relative coordinates
                const { scroll } = this.root;
                if (scroll) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateAxis"])(box.x, scroll.offset.x);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateAxis"])(box.y, scroll.offset.y);
                }
            }
            return box;
        }
        removeElementScroll(box) {
            const boxWithoutScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(boxWithoutScroll, box);
            if (this.scroll?.wasRoot) {
                return boxWithoutScroll;
            }
            /**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */ for(let i = 0; i < this.path.length; i++){
                const node = this.path[i];
                const { scroll, options } = node;
                if (node !== this.root && scroll && options.layoutScroll) {
                    /**
                     * If this is a new scroll root, we want to remove all previous scrolls
                     * from the viewport box.
                     */ if (scroll.wasRoot) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(boxWithoutScroll, box);
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateAxis"])(boxWithoutScroll.x, scroll.offset.x);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateAxis"])(boxWithoutScroll.y, scroll.offset.y);
                }
            }
            return boxWithoutScroll;
        }
        applyTransform(box, transformOnly = false) {
            const withTransforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(withTransforms, box);
            for(let i = 0; i < this.path.length; i++){
                const node = this.path[i];
                if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformBox"])(withTransforms, {
                        x: -node.scroll.offset.x,
                        y: -node.scroll.offset.y
                    });
                }
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTransform"])(node.latestValues)) continue;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformBox"])(withTransforms, node.latestValues);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTransform"])(this.latestValues)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformBox"])(withTransforms, this.latestValues);
            }
            return withTransforms;
        }
        removeTransform(box) {
            const boxWithoutTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(boxWithoutTransform, box);
            for(let i = 0; i < this.path.length; i++){
                const node = this.path[i];
                if (!node.instance) continue;
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTransform"])(node.latestValues)) continue;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasScale"])(node.latestValues) && node.updateSnapshot();
                const sourceBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                const nodeBox = node.measurePageBox();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(sourceBox, nodeBox);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$remove$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeBoxTransforms"])(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : undefined, sourceBox);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTransform"])(this.latestValues)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$remove$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeBoxTransforms"])(boxWithoutTransform, this.latestValues);
            }
            return boxWithoutTransform;
        }
        setTargetDelta(delta) {
            this.targetDelta = delta;
            this.root.scheduleUpdateProjection();
            this.isProjectionDirty = true;
        }
        setOptions(options) {
            this.options = {
                ...this.options,
                ...options,
                crossfade: options.crossfade !== undefined ? options.crossfade : true
            };
        }
        clearMeasurements() {
            this.scroll = undefined;
            this.layout = undefined;
            this.snapshot = undefined;
            this.prevTransformTemplateValue = undefined;
            this.targetDelta = undefined;
            this.target = undefined;
            this.isLayoutDirty = false;
        }
        forceRelativeParentToResolveTarget() {
            if (!this.relativeParent) return;
            /**
             * If the parent target isn't up-to-date, force it to update.
             * This is an unfortunate de-optimisation as it means any updating relative
             * projection will cause all the relative parents to recalculate back
             * up the tree.
             */ if (this.relativeParent.resolvedRelativeTargetAt !== __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].timestamp) {
                this.relativeParent.resolveTargetDelta(true);
            }
        }
        resolveTargetDelta(forceRecalculation = false) {
            /**
             * Once the dirty status of nodes has been spread through the tree, we also
             * need to check if we have a shared node of a different depth that has itself
             * been dirtied.
             */ const lead = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
            this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            /**
             * We don't use transform for this step of processing so we don't
             * need to check whether any nodes have changed transform.
             */ const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
            if (canSkip) return;
            const { layout, layoutId } = this.options;
            /**
             * If we have no layout, we can't perform projection, so early return
             */ if (!this.layout || !(layout || layoutId)) return;
            this.resolvedRelativeTargetAt = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].timestamp;
            const relativeParent = this.getClosestProjectingParent();
            if (relativeParent && this.linkedParentVersion !== relativeParent.layoutVersion && !relativeParent.options.layoutRoot) {
                this.removeRelativeTarget();
            }
            /**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */ if (!this.targetDelta && !this.relativeTarget) {
                if (relativeParent && relativeParent.layout) {
                    this.createRelativeTarget(relativeParent, this.layout.layoutBox, relativeParent.layout.layoutBox);
                } else {
                    this.removeRelativeTarget();
                }
            }
            /**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */ if (!this.relativeTarget && !this.targetDelta) return;
            /**
             * Lazy-init target data structure
             */ if (!this.target) {
                this.target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                this.targetWithTransforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
            }
            /**
             * If we've got a relative box for this component, resolve it into a target relative to the parent.
             */ if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                this.forceRelativeParentToResolveTarget();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativeBox"])(this.target, this.relativeTarget, this.relativeParent.target);
            /**
                 * If we've only got a targetDelta, resolve it into a target
                 */ } else if (this.targetDelta) {
                if (Boolean(this.resumingFrom)) {
                    // TODO: This is creating a new object every frame
                    this.target = this.applyTransform(this.layout.layoutBox);
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(this.target, this.layout.layoutBox);
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyBoxDelta"])(this.target, this.targetDelta);
            } else {
                /**
                 * If no target, use own layout as target
                 */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(this.target, this.layout.layoutBox);
            }
            /**
             * If we've been told to attempt to resolve a relative target, do so.
             */ if (this.attemptToResolveRelativeTarget) {
                this.attemptToResolveRelativeTarget = false;
                if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
                    this.createRelativeTarget(relativeParent, this.target, relativeParent.target);
                } else {
                    this.relativeParent = this.relativeTarget = undefined;
                }
            }
            /**
             * Increase debug counter for resolved target deltas
             */ if (__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].value) {
                metrics.calculatedTargetDeltas++;
            }
        }
        getClosestProjectingParent() {
            if (!this.parent || (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasScale"])(this.parent.latestValues) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has2DTranslate"])(this.parent.latestValues)) {
                return undefined;
            }
            if (this.parent.isProjecting()) {
                return this.parent;
            } else {
                return this.parent.getClosestProjectingParent();
            }
        }
        isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
        }
        createRelativeTarget(relativeParent, layout, parentLayout) {
            this.relativeParent = relativeParent;
            this.linkedParentVersion = relativeParent.layoutVersion;
            this.forceRelativeParentToResolveTarget();
            this.relativeTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
            this.relativeTargetOrigin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativePosition"])(this.relativeTargetOrigin, layout, parentLayout);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(this.relativeTarget, this.relativeTargetOrigin);
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = undefined;
        }
        calcProjection() {
            const lead = this.getLead();
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            let canSkip = true;
            /**
             * If this is a normal layout animation and neither this node nor its nearest projecting
             * is dirty then we can't skip.
             */ if (this.isProjectionDirty || this.parent?.isProjectionDirty) {
                canSkip = false;
            }
            /**
             * If this is a shared layout animation and this node's shared projection is dirty then
             * we can't skip.
             */ if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
                canSkip = false;
            }
            /**
             * If we have resolved the target this frame we must recalculate the
             * projection to ensure it visually represents the internal calculations.
             */ if (this.resolvedRelativeTargetAt === __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].timestamp) {
                canSkip = false;
            }
            if (canSkip) return;
            const { layout, layoutId } = this.options;
            /**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */ this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
            if (!this.isTreeAnimating) {
                this.targetDelta = this.relativeTarget = undefined;
            }
            if (!this.layout || !(layout || layoutId)) return;
            /**
             * Reset the corrected box with the latest values from box, as we're then going
             * to perform mutative operations on it.
             */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(this.layoutCorrected, this.layout.layoutBox);
            /**
             * Record previous tree scales before updating.
             */ const prevTreeScaleX = this.treeScale.x;
            const prevTreeScaleY = this.treeScale.y;
            /**
             * Apply all the parent deltas to this box to produce the corrected box. This
             * is the layout box, as it will appear on screen as a result of the transforms of its parents.
             */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTreeDeltas"])(this.layoutCorrected, this.treeScale, this.path, isShared);
            /**
             * If this layer needs to perform scale correction but doesn't have a target,
             * use the layout as the target.
             */ if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
                lead.target = lead.layout.layoutBox;
                lead.targetWithTransforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
            }
            const { target } = lead;
            if (!target) {
                /**
                 * If we don't have a target to project into, but we were previously
                 * projecting, we want to remove the stored transform and schedule
                 * a render to ensure the elements reflect the removed transform.
                 */ if (this.prevProjectionDelta) {
                    this.createProjectionDeltas();
                    this.scheduleRender();
                }
                return;
            }
            if (!this.projectionDelta || !this.prevProjectionDelta) {
                this.createProjectionDeltas();
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyAxisDeltaInto"])(this.prevProjectionDelta.x, this.projectionDelta.x);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyAxisDeltaInto"])(this.prevProjectionDelta.y, this.projectionDelta.y);
            }
            /**
             * Update the delta between the corrected box and the target box before user-set transforms were applied.
             * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
             * for our layout reprojection, but still allow them to be scaled correctly by the user.
             * It might be that to simplify this we may want to accept that user-set scale is also corrected
             * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
             * to allow people to choose whether these styles are corrected based on just the
             * layout reprojection or the final bounding box.
             */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcBoxDelta"])(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
            if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisDeltaEquals"])(this.projectionDelta.x, this.prevProjectionDelta.x) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisDeltaEquals"])(this.projectionDelta.y, this.prevProjectionDelta.y)) {
                this.hasProjected = true;
                this.scheduleRender();
                this.notifyListeners("projectionUpdate", target);
            }
            /**
             * Increase debug counter for recalculated projections
             */ if (__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].value) {
                metrics.calculatedProjections++;
            }
        }
        hide() {
            this.isVisible = false;
        // TODO: Schedule render
        }
        show() {
            this.isVisible = true;
        // TODO: Schedule render
        }
        scheduleRender(notifyAll = true) {
            this.options.visualElement?.scheduleRender();
            if (notifyAll) {
                const stack = this.getStack();
                stack && stack.scheduleRender();
            }
            if (this.resumingFrom && !this.resumingFrom.instance) {
                this.resumingFrom = undefined;
            }
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelta"])();
            this.projectionDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelta"])();
            this.projectionDeltaWithTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelta"])();
        }
        setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
            const snapshot = this.snapshot;
            const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
            const mixedValues = {
                ...this.latestValues
            };
            const targetDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelta"])();
            if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
                this.relativeTarget = this.relativeTargetOrigin = undefined;
            }
            this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
            const relativeLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
            const snapshotSource = snapshot ? snapshot.source : undefined;
            const layoutSource = this.layout ? this.layout.source : undefined;
            const isSharedLayoutAnimation = snapshotSource !== layoutSource;
            const stack = this.getStack();
            const isOnlyMember = !stack || stack.members.length <= 1;
            const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
            this.animationProgress = 0;
            let prevRelativeTarget;
            this.mixTargetDelta = (latest)=>{
                const progress = latest / 1000;
                mixAxisDelta(targetDelta.x, delta.x, progress);
                mixAxisDelta(targetDelta.y, delta.y, progress);
                this.setTargetDelta(targetDelta);
                if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativePosition"])(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
                    mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress);
                    /**
                     * If this is an unchanged relative target we can consider the
                     * projection not dirty.
                     */ if (prevRelativeTarget && (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boxEquals"])(this.relativeTarget, prevRelativeTarget)) {
                        this.isProjectionDirty = false;
                    }
                    if (!prevRelativeTarget) prevRelativeTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(prevRelativeTarget, this.relativeTarget);
                }
                if (isSharedLayoutAnimation) {
                    this.animationValues = mixedValues;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$animation$2f$mix$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixValues"])(mixedValues, snapshotLatestValues, this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
                }
                this.root.scheduleUpdateProjection();
                this.scheduleRender();
                this.animationProgress = progress;
            };
            this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
        }
        startAnimation(options) {
            this.notifyListeners("animationStart");
            this.currentAnimation?.stop();
            this.resumingFrom?.currentAnimation?.stop();
            if (this.pendingAnimation) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(this.pendingAnimation);
                this.pendingAnimation = undefined;
            }
            /**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */ this.pendingAnimation = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalProjectionState"].hasAnimatedSinceResize = true;
                __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"].layout++;
                this.motionValue || (this.motionValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0));
                this.motionValue.jump(0, false);
                this.currentAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$animate$2f$single$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSingleValue"])(this.motionValue, [
                    0,
                    1000
                ], {
                    ...options,
                    velocity: 0,
                    isSync: true,
                    onUpdate: (latest)=>{
                        this.mixTargetDelta(latest);
                        options.onUpdate && options.onUpdate(latest);
                    },
                    onStop: ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"].layout--;
                    },
                    onComplete: ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"].layout--;
                        options.onComplete && options.onComplete();
                        this.completeAnimation();
                    }
                });
                if (this.resumingFrom) {
                    this.resumingFrom.currentAnimation = this.currentAnimation;
                }
                this.pendingAnimation = undefined;
            });
        }
        completeAnimation() {
            if (this.resumingFrom) {
                this.resumingFrom.currentAnimation = undefined;
                this.resumingFrom.preserveOpacity = undefined;
            }
            const stack = this.getStack();
            stack && stack.exitAnimationComplete();
            this.resumingFrom = this.currentAnimation = this.animationValues = undefined;
            this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            if (this.currentAnimation) {
                this.mixTargetDelta && this.mixTargetDelta(animationTarget);
                this.currentAnimation.stop();
            }
            this.completeAnimation();
        }
        applyTransformsToTarget() {
            const lead = this.getLead();
            let { targetWithTransforms, target, layout, latestValues } = lead;
            if (!targetWithTransforms || !target || !layout) return;
            /**
             * If we're only animating position, and this element isn't the lead element,
             * then instead of projecting into the lead box we instead want to calculate
             * a new target that aligns the two boxes but maintains the layout shape.
             */ if (this !== lead && this.layout && layout && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
                target = this.target || (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                const xLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(this.layout.layoutBox.x);
                target.x.min = lead.target.x.min;
                target.x.max = target.x.min + xLength;
                const yLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(this.layout.layoutBox.y);
                target.y.min = lead.target.y.min;
                target.y.max = target.y.min + yLength;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(targetWithTransforms, target);
            /**
             * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
             * This is the final box that we will then project into by calculating a transform delta and
             * applying it to the corrected box.
             */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformBox"])(targetWithTransforms, latestValues);
            /**
             * Update the delta between the corrected box and the final target box, after
             * user-set transforms are applied to it. This will be used by the renderer to
             * create a transform style that will reproject the element from its layout layout
             * into the desired bounding box.
             */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcBoxDelta"])(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
        }
        registerSharedNode(layoutId, node) {
            if (!this.sharedNodes.has(layoutId)) {
                this.sharedNodes.set(layoutId, new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$shared$2f$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeStack"]());
            }
            const stack = this.sharedNodes.get(layoutId);
            stack.add(node);
            const config = node.options.initialPromotionConfig;
            node.promote({
                transition: config ? config.transition : undefined,
                preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : undefined
            });
        }
        isLead() {
            const stack = this.getStack();
            return stack ? stack.lead === this : true;
        }
        getLead() {
            const { layoutId } = this.options;
            return layoutId ? this.getStack()?.lead || this : this;
        }
        getPrevLead() {
            const { layoutId } = this.options;
            return layoutId ? this.getStack()?.prevLead : undefined;
        }
        getStack() {
            const { layoutId } = this.options;
            if (layoutId) return this.root.sharedNodes.get(layoutId);
        }
        promote({ needsReset, transition, preserveFollowOpacity } = {}) {
            const stack = this.getStack();
            if (stack) stack.promote(this, preserveFollowOpacity);
            if (needsReset) {
                this.projectionDelta = undefined;
                this.needsReset = true;
            }
            if (transition) this.setOptions({
                transition
            });
        }
        relegate() {
            const stack = this.getStack();
            if (stack) {
                return stack.relegate(this);
            } else {
                return false;
            }
        }
        resetSkewAndRotation() {
            const { visualElement } = this.options;
            if (!visualElement) return;
            // If there's no detected skew or rotation values, we can early return without a forced render.
            let hasDistortingTransform = false;
            /**
             * An unrolled check for rotation values. Most elements don't have any rotation and
             * skipping the nested loop and new object creation is 50% faster.
             */ const { latestValues } = visualElement;
            if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) {
                hasDistortingTransform = true;
            }
            // If there's no distorting values, we don't need to do any more.
            if (!hasDistortingTransform) return;
            const resetValues = {};
            if (latestValues.z) {
                resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
            }
            // Check the skew and rotate value of all axes and reset to 0
            for(let i = 0; i < transformAxes.length; i++){
                resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
                resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
            }
            // Force a render of this element to apply the transform with all skews and rotations
            // set to 0.
            visualElement.render();
            // Put back all the values we reset
            for(const key in resetValues){
                visualElement.setStaticValue(key, resetValues[key]);
                if (this.animationValues) {
                    this.animationValues[key] = resetValues[key];
                }
            }
            // Schedule a render for the next frame. This ensures we won't visually
            // see the element with the reset rotate value applied.
            visualElement.scheduleRender();
        }
        applyProjectionStyles(targetStyle, styleProp) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                targetStyle.visibility = "hidden";
                return;
            }
            const transformTemplate = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = false;
                targetStyle.visibility = "";
                targetStyle.opacity = "";
                targetStyle.pointerEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$resolve$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMotionValue"])(styleProp?.pointerEvents) || "";
                targetStyle.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
                return;
            }
            const lead = this.getLead();
            if (!this.projectionDelta || !this.layout || !lead.target) {
                if (this.options.layoutId) {
                    targetStyle.opacity = this.latestValues.opacity !== undefined ? this.latestValues.opacity : 1;
                    targetStyle.pointerEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$resolve$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMotionValue"])(styleProp?.pointerEvents) || "";
                }
                if (this.hasProjected && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTransform"])(this.latestValues)) {
                    targetStyle.transform = transformTemplate ? transformTemplate({}, "") : "none";
                    this.hasProjected = false;
                }
                return;
            }
            targetStyle.visibility = "";
            const valuesToRender = lead.animationValues || lead.latestValues;
            this.applyTransformsToTarget();
            let transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildProjectionTransform"])(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
            if (transformTemplate) {
                transform = transformTemplate(valuesToRender, transform);
            }
            targetStyle.transform = transform;
            const { x, y } = this.projectionDelta;
            targetStyle.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
            if (lead.animationValues) {
                /**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */ targetStyle.opacity = lead === this ? valuesToRender.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
            } else {
                /**
                 * Or we're not animating at all, set the lead component to its layout
                 * opacity and other components to hidden.
                 */ targetStyle.opacity = lead === this ? valuesToRender.opacity !== undefined ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== undefined ? valuesToRender.opacityExit : 0;
            }
            /**
             * Apply scale correction
             */ for(const key in __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$correction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleCorrectors"]){
                if (valuesToRender[key] === undefined) continue;
                const { correct, applyTo, isCSSVariable } = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$correction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleCorrectors"][key];
                /**
                 * Only apply scale correction to the value if we have an
                 * active projection transform. Otherwise these values become
                 * vulnerable to distortion if the element changes size without
                 * a corresponding layout animation.
                 */ const corrected = transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
                if (applyTo) {
                    const num = applyTo.length;
                    for(let i = 0; i < num; i++){
                        targetStyle[applyTo[i]] = corrected;
                    }
                } else {
                    // If this is a CSS variable, set it directly on the instance.
                    // Replacing this function from creating styles to setting them
                    // would be a good place to remove per frame object creation
                    if (isCSSVariable) {
                        this.options.visualElement.renderState.vars[key] = corrected;
                    } else {
                        targetStyle[key] = corrected;
                    }
                }
            }
            /**
             * Disable pointer events on follow components. This is to ensure
             * that if a follow component covers a lead component it doesn't block
             * pointer events on the lead.
             */ if (this.options.layoutId) {
                targetStyle.pointerEvents = lead === this ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$resolve$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMotionValue"])(styleProp?.pointerEvents) || "" : "none";
            }
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = undefined;
        }
        // Only run on root
        resetTree() {
            this.root.nodes.forEach((node)=>node.currentAnimation?.stop());
            this.root.nodes.forEach(clearMeasurements);
            this.root.sharedNodes.clear();
        }
    };
}
function updateLayout(node) {
    node.updateLayout();
}
function notifyLayoutUpdate(node) {
    const snapshot = node.resumeFrom?.snapshot || node.snapshot;
    if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
        const { layoutBox: layout, measuredBox: measuredLayout } = node.layout;
        const { animationType } = node.options;
        const isShared = snapshot.source !== node.layout.source;
        // TODO Maybe we want to also resize the layout snapshot so we don't trigger
        // animations for instance if layout="size" and an element has only changed position
        if (animationType === "size") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$each$2d$axis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachAxis"])((axis)=>{
                const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
                const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(axisSnapshot);
                axisSnapshot.min = layout[axis].min;
                axisSnapshot.max = axisSnapshot.min + length;
            });
        } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$each$2d$axis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachAxis"])((axis)=>{
                const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
                const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"])(layout[axis]);
                axisSnapshot.max = axisSnapshot.min + length;
                /**
                 * Ensure relative target gets resized and rerendererd
                 */ if (node.relativeTarget && !node.currentAnimation) {
                    node.isProjectionDirty = true;
                    node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
                }
            });
        }
        const layoutDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelta"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcBoxDelta"])(layoutDelta, layout, snapshot.layoutBox);
        const visualDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelta"])();
        if (isShared) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcBoxDelta"])(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcBoxDelta"])(visualDelta, layout, snapshot.layoutBox);
        }
        const hasLayoutChanged = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDeltaZero"])(layoutDelta);
        let hasRelativeLayoutChanged = false;
        if (!node.resumeFrom) {
            const relativeParent = node.getClosestProjectingParent();
            /**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */ if (relativeParent && !relativeParent.resumeFrom) {
                const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
                if (parentSnapshot && parentLayout) {
                    const relativeSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativePosition"])(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
                    const relativeLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativePosition"])(relativeLayout, layout, parentLayout.layoutBox);
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boxEqualsRounded"])(relativeSnapshot, relativeLayout)) {
                        hasRelativeLayoutChanged = true;
                    }
                    if (relativeParent.options.layoutRoot) {
                        node.relativeTarget = relativeLayout;
                        node.relativeTargetOrigin = relativeSnapshot;
                        node.relativeParent = relativeParent;
                    }
                }
            }
        }
        node.notifyListeners("didUpdate", {
            layout,
            snapshot,
            delta: visualDelta,
            layoutDelta,
            hasLayoutChanged,
            hasRelativeLayoutChanged
        });
    } else if (node.isLead()) {
        const { onExitComplete } = node.options;
        onExitComplete && onExitComplete();
    }
    /**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */ node.options.transition = undefined;
}
function propagateDirtyNodes(node) {
    /**
     * Increase debug counter for nodes encountered this frame
     */ if (__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].value) {
        metrics.nodes++;
    }
    if (!node.parent) return;
    /**
     * If this node isn't projecting, propagate isProjectionDirty. It will have
     * no performance impact but it will allow the next child that *is* projecting
     * but *isn't* dirty to just check its parent to see if *any* ancestor needs
     * correcting.
     */ if (!node.isProjecting()) {
        node.isProjectionDirty = node.parent.isProjectionDirty;
    }
    /**
     * Propagate isSharedProjectionDirty and isTransformDirty
     * throughout the whole tree. A future revision can take another look at
     * this but for safety we still recalcualte shared nodes.
     */ node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
    node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
    node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
    node.clearSnapshot();
}
function clearMeasurements(node) {
    node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
    node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
    const { visualElement } = node.options;
    if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
        visualElement.notify("BeforeLayoutMeasure");
    }
    node.resetTransform();
}
function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = undefined;
    node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
    node.resolveTargetDelta();
}
function calcProjection(node) {
    node.calcProjection();
}
function resetSkewAndRotation(node) {
    node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
    output.translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(delta.translate, 0, p);
    output.scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
    output.min = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(from.min, to.min, p);
    output.max = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
    return node.animationValues && node.animationValues.opacityExit !== undefined;
}
const defaultLayoutTransition = {
    duration: 0.45,
    ease: [
        0.4,
        0,
        0.1,
        1
    ]
};
const userAgentContains = (string)=>typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
/**
 * Measured bounding boxes must be rounded in Safari and
 * left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
 * can appear to jump.
 */ const roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
function roundAxis(axis) {
    // Round to the nearest .5 pixels to support subpixel layouts
    axis.min = roundPoint(axis.min);
    axis.max = roundPoint(axis.max);
}
function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
    return animationType === "position" || animationType === "preserve-aspect" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNear"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aspectRatio"])(snapshot), (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aspectRatio"])(layout), 0.2);
}
function checkNodeWasScrollRoot(node) {
    return node !== node.root && node.scroll?.wasRoot;
}
;
 //# sourceMappingURL=create-projection-node.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentProjectionNode",
    ()=>DocumentProjectionNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/events/add-dom-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$create$2d$projection$2d$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/create-projection-node.mjs [app-client] (ecmascript)");
;
;
const DocumentProjectionNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$create$2d$projection$2d$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProjectionNode"])({
    attachResizeListener: (ref, notify)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDomEvent"])(ref, "resize", notify),
    measureScroll: ()=>({
            x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
            y: document.documentElement.scrollTop || document.body?.scrollTop || 0
        }),
    checkIsScrollRoot: ()=>true
});
;
 //# sourceMappingURL=DocumentProjectionNode.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTMLProjectionNode",
    ()=>HTMLProjectionNode,
    "rootProjectionNode",
    ()=>rootProjectionNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$create$2d$projection$2d$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/create-projection-node.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$DocumentProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs [app-client] (ecmascript)");
;
;
const rootProjectionNode = {
    current: undefined
};
const HTMLProjectionNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$create$2d$projection$2d$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProjectionNode"])({
    measureScroll: (instance)=>({
            x: instance.scrollLeft,
            y: instance.scrollTop
        }),
    defaultParent: ()=>{
        if (!rootProjectionNode.current) {
            const documentNode = new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$DocumentProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentProjectionNode"]({});
            documentNode.mount(window);
            documentNode.setOptions({
                layoutScroll: true
            });
            rootProjectionNode.current = documentNode;
        }
        return rootProjectionNode.current;
    },
    resetTransform: (instance, value)=>{
        instance.style.transform = value !== undefined ? value : "none";
    },
    checkIsScrollRoot: (instance)=>Boolean(window.getComputedStyle(instance).position === "fixed")
});
;
 //# sourceMappingURL=HTMLProjectionNode.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/features/drag.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drag",
    ()=>drag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/gestures/drag/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$pan$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/gestures/pan/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$layout$2f$MeasureLayout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs [app-client] (ecmascript)");
;
;
;
;
const drag = {
    pan: {
        Feature: __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$pan$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanGesture"]
    },
    drag: {
        Feature: __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragGesture"],
        ProjectionNode: __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLProjectionNode"],
        MeasureLayout: __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$layout$2f$MeasureLayout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeasureLayout"]
    }
};
;
 //# sourceMappingURL=drag.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/features/layout.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "layout",
    ()=>layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$layout$2f$MeasureLayout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs [app-client] (ecmascript)");
;
;
const layout = {
    layout: {
        ProjectionNode: __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLProjectionNode"],
        MeasureLayout: __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$layout$2f$MeasureLayout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeasureLayout"]
    }
};
;
 //# sourceMappingURL=layout.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/components/motion/feature-bundle.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "featureBundle",
    ()=>featureBundle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/features/animations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$drag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/features/drag.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$gestures$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/features/gestures.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$layout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/features/layout.mjs [app-client] (ecmascript)");
;
;
;
;
const featureBundle = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animations"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$gestures$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gestureAnimations"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$drag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drag"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$layout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout"]
};
;
 //# sourceMappingURL=feature-bundle.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "motion",
    ()=>motion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$create$2d$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/components/create-proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$feature$2d$bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/components/motion/feature-bundle.mjs [app-client] (ecmascript)");
;
;
;
const motion = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$create$2d$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMotionProxy"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$feature$2d$bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureBundle"], __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDomVisualElement"]);
;
 //# sourceMappingURL=proxy.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkReorder",
    ()=>checkReorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
;
;
function checkReorder(order, value, offset, velocity) {
    if (!velocity) return order;
    const index = order.findIndex((item)=>item.value === value);
    if (index === -1) return order;
    const nextOffset = velocity > 0 ? 1 : -1;
    const nextItem = order[index + nextOffset];
    if (!nextItem) return order;
    const item = order[index];
    const nextLayout = nextItem.layout;
    const nextItemCenter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(nextLayout.min, nextLayout.max, 0.5);
    if (nextOffset === 1 && item.layout.max + offset > nextItemCenter || nextOffset === -1 && item.layout.min + offset < nextItemCenter) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveItem"])(order, index, index + nextOffset);
    }
    return order;
}
;
 //# sourceMappingURL=check-reorder.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/Reorder/Group.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReorderGroup",
    ()=>ReorderGroup,
    "ReorderGroupComponent",
    ()=>ReorderGroupComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$ReorderContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/context/ReorderContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$utils$2f$check$2d$reorder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ReorderGroupComponent({ children, as = "ul", axis = "y", onReorder, values, ...props }, externalRef) {
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "ReorderGroupComponent.useConstant[Component]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"][as]
    }["ReorderGroupComponent.useConstant[Component]"]);
    const order = [];
    const isReordering = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(Boolean(values), "Reorder.Group must be provided a values prop", "reorder-values");
    const context = {
        axis,
        groupRef,
        registerItem: (value, layout)=>{
            // If the entry was already added, update it rather than adding it again
            const idx = order.findIndex((entry)=>value === entry.value);
            if (idx !== -1) {
                order[idx].layout = layout[axis];
            } else {
                order.push({
                    value: value,
                    layout: layout[axis]
                });
            }
            order.sort(compareMin);
        },
        updateOrder: (item, offset, velocity)=>{
            if (isReordering.current) return;
            const newOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$utils$2f$check$2d$reorder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkReorder"])(order, item, offset, velocity);
            if (order !== newOrder) {
                isReordering.current = true;
                onReorder(newOrder.map(getValue).filter((value)=>values.indexOf(value) !== -1));
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReorderGroupComponent.useEffect": ()=>{
            isReordering.current = false;
        }
    }["ReorderGroupComponent.useEffect"]);
    // Combine refs if external ref is provided
    const setRef = (element)=>{
        groupRef.current = element;
        if (typeof externalRef === "function") {
            externalRef(element);
        } else if (externalRef) {
            externalRef.current = element;
        }
    };
    /**
     * Disable browser scroll anchoring on the group container.
     * When items reorder, scroll anchoring can cause the browser to adjust
     * the scroll position, which interferes with drag position calculations.
     */ const groupStyle = {
        overflowAnchor: "none",
        ...props.style
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...props,
        style: groupStyle,
        ref: setRef,
        ignoreStrict: true,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$ReorderContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReorderContext"].Provider, {
            value: context,
            children: children
        })
    });
}
const ReorderGroup = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(ReorderGroupComponent);
function getValue(item) {
    return item.value;
}
function compareMin(a, b) {
    return a.layout.min - b.layout.min;
}
;
 //# sourceMappingURL=Group.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMotionValue",
    ()=>useMotionValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */ function useMotionValue(initial) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useMotionValue.useConstant[value]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(initial)
    }["useMotionValue.useConstant[value]"]);
    /**
     * If this motion value is being used in static mode, like on
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */ const { isStatic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    if (isStatic) {
        const [, setLatest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "useMotionValue.useEffect": ()=>value.on("change", setLatest)
        }["useMotionValue.useEffect"], []);
    }
    return value;
}
;
 //# sourceMappingURL=use-motion-value.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/transform.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transform",
    ()=>transform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/interpolate.mjs [app-client] (ecmascript)");
;
function transform(...args) {
    const useImmediate = !Array.isArray(args[0]);
    const argOffset = useImmediate ? 0 : -1;
    const inputValue = args[0 + argOffset];
    const inputRange = args[1 + argOffset];
    const outputRange = args[2 + argOffset];
    const options = args[3 + argOffset];
    const interpolator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(inputRange, outputRange, options);
    return useImmediate ? interpolator(inputValue) : interpolator;
}
;
 //# sourceMappingURL=transform.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-combine-values.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCombineMotionValues",
    ()=>useCombineMotionValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function useCombineMotionValues(values, combineValues) {
    /**
     * Initialise the returned motion value. This remains the same between renders.
     */ const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(combineValues());
    /**
     * Create a function that will update the template motion value with the latest values.
     * This is pre-bound so whenever a motion value updates it can schedule its
     * execution in Framesync. If it's already been scheduled it won't be fired twice
     * in a single frame.
     */ const updateValue = ()=>value.set(combineValues());
    /**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */ updateValue();
    /**
     * Subscribe to all motion values found within the template. Whenever any of them change,
     * schedule an update.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useCombineMotionValues.useIsomorphicLayoutEffect": ()=>{
            const scheduleUpdate = {
                "useCombineMotionValues.useIsomorphicLayoutEffect.scheduleUpdate": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].preRender(updateValue, false, true)
            }["useCombineMotionValues.useIsomorphicLayoutEffect.scheduleUpdate"];
            const subscriptions = values.map({
                "useCombineMotionValues.useIsomorphicLayoutEffect.subscriptions": (v)=>v.on("change", scheduleUpdate)
            }["useCombineMotionValues.useIsomorphicLayoutEffect.subscriptions"]);
            return ({
                "useCombineMotionValues.useIsomorphicLayoutEffect": ()=>{
                    subscriptions.forEach({
                        "useCombineMotionValues.useIsomorphicLayoutEffect": (unsubscribe)=>unsubscribe()
                    }["useCombineMotionValues.useIsomorphicLayoutEffect"]);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(updateValue);
                }
            })["useCombineMotionValues.useIsomorphicLayoutEffect"];
        }
    }["useCombineMotionValues.useIsomorphicLayoutEffect"]);
    return value;
}
;
 //# sourceMappingURL=use-combine-values.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-computed.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useComputed",
    ()=>useComputed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-combine-values.mjs [app-client] (ecmascript)");
"use client";
;
;
function useComputed(compute) {
    /**
     * Open session of collectMotionValues. Any MotionValue that calls get()
     * will be saved into this array.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectMotionValues"].current = [];
    compute();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCombineMotionValues"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectMotionValues"].current, compute);
    /**
     * Synchronously close session of collectMotionValues.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectMotionValues"].current = undefined;
    return value;
}
;
 //# sourceMappingURL=use-computed.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransform",
    ()=>useTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-combine-values.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$computed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-computed.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
function useTransform(input, inputRangeOrTransformer, outputRangeOrMap, options) {
    if (typeof input === "function") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$computed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComputed"])(input);
    }
    /**
     * Detect if outputRangeOrMap is an output map (object with keys)
     * rather than an output range (array).
     */ const isOutputMap = outputRangeOrMap !== undefined && !Array.isArray(outputRangeOrMap) && typeof inputRangeOrTransformer !== "function";
    if (isOutputMap) {
        return useMapTransform(input, inputRangeOrTransformer, outputRangeOrMap, options);
    }
    const outputRange = outputRangeOrMap;
    const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"])(inputRangeOrTransformer, outputRange, options);
    const result = Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([
        input
    ], {
        "useTransform.useListTransform": ([latest])=>transformer(latest)
    }["useTransform.useListTransform"]);
    const inputAccelerate = !Array.isArray(input) ? input.accelerate : undefined;
    if (inputAccelerate && !inputAccelerate.isTransformed && typeof inputRangeOrTransformer !== "function" && Array.isArray(outputRangeOrMap) && options?.clamp !== false) {
        result.accelerate = {
            ...inputAccelerate,
            times: inputRangeOrTransformer,
            keyframes: outputRangeOrMap,
            isTransformed: true,
            ...options?.ease ? {
                ease: options.ease
            } : {}
        };
    }
    return result;
}
function useListTransform(values, transformer) {
    const latest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useListTransform.useConstant[latest]": ()=>[]
    }["useListTransform.useConstant[latest]"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCombineMotionValues"])(values, {
        "useListTransform.useCombineMotionValues": ()=>{
            latest.length = 0;
            const numValues = values.length;
            for(let i = 0; i < numValues; i++){
                latest[i] = values[i].get();
            }
            return transformer(latest);
        }
    }["useListTransform.useCombineMotionValues"]);
}
function useMapTransform(inputValue, inputRange, outputMap, options) {
    /**
     * Capture keys once to ensure hooks are called in consistent order.
     */ const keys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useMapTransform.useConstant[keys]": ()=>Object.keys(outputMap)
    }["useMapTransform.useConstant[keys]"]);
    const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useMapTransform.useConstant[output]": ()=>({})
    }["useMapTransform.useConstant[output]"]);
    for (const key of keys){
        output[key] = useTransform(inputValue, inputRange, outputMap[key], options);
    }
    return output;
}
;
 //# sourceMappingURL=use-transform.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/Reorder/utils/auto-scroll.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "autoScrollIfNeeded",
    ()=>autoScrollIfNeeded,
    "resetAutoScrollState",
    ()=>resetAutoScrollState
]);
const threshold = 50;
const maxSpeed = 25;
const overflowStyles = new Set([
    "auto",
    "scroll"
]);
// Track initial scroll limits per scrollable element (Bug 1 fix)
const initialScrollLimits = new WeakMap();
const activeScrollEdge = new WeakMap();
// Track which group element is currently dragging to clear state on end
let currentGroupElement = null;
function resetAutoScrollState() {
    if (currentGroupElement) {
        const scrollableAncestor = findScrollableAncestor(currentGroupElement, "y");
        if (scrollableAncestor) {
            activeScrollEdge.delete(scrollableAncestor);
            initialScrollLimits.delete(scrollableAncestor);
        }
        // Also try x axis
        const scrollableAncestorX = findScrollableAncestor(currentGroupElement, "x");
        if (scrollableAncestorX && scrollableAncestorX !== scrollableAncestor) {
            activeScrollEdge.delete(scrollableAncestorX);
            initialScrollLimits.delete(scrollableAncestorX);
        }
        currentGroupElement = null;
    }
}
function isScrollableElement(element, axis) {
    const style = getComputedStyle(element);
    const overflow = axis === "x" ? style.overflowX : style.overflowY;
    const isDocumentScroll = element === document.body || element === document.documentElement;
    return overflowStyles.has(overflow) || isDocumentScroll;
}
function findScrollableAncestor(element, axis) {
    let current = element?.parentElement;
    while(current){
        if (isScrollableElement(current, axis)) {
            return current;
        }
        current = current.parentElement;
    }
    return null;
}
function getScrollAmount(pointerPosition, scrollElement, axis) {
    const rect = scrollElement.getBoundingClientRect();
    const start = axis === "x" ? Math.max(0, rect.left) : Math.max(0, rect.top);
    const end = axis === "x" ? Math.min(window.innerWidth, rect.right) : Math.min(window.innerHeight, rect.bottom);
    const distanceFromStart = pointerPosition - start;
    const distanceFromEnd = end - pointerPosition;
    if (distanceFromStart < threshold) {
        const intensity = 1 - distanceFromStart / threshold;
        return {
            amount: -maxSpeed * intensity * intensity,
            edge: "start"
        };
    } else if (distanceFromEnd < threshold) {
        const intensity = 1 - distanceFromEnd / threshold;
        return {
            amount: maxSpeed * intensity * intensity,
            edge: "end"
        };
    }
    return {
        amount: 0,
        edge: null
    };
}
function autoScrollIfNeeded(groupElement, pointerPosition, axis, velocity) {
    if (!groupElement) return;
    // Track the group element for cleanup
    currentGroupElement = groupElement;
    const scrollableAncestor = findScrollableAncestor(groupElement, axis);
    if (!scrollableAncestor) return;
    // Convert pointer position from page coordinates to viewport coordinates.
    // The gesture system uses pageX/pageY but getBoundingClientRect() returns
    // viewport-relative coordinates, so we need to account for page scroll.
    const viewportPointerPosition = pointerPosition - (axis === "x" ? window.scrollX : window.scrollY);
    const { amount: scrollAmount, edge } = getScrollAmount(viewportPointerPosition, scrollableAncestor, axis);
    // If not in any threshold zone, clear all state
    if (edge === null) {
        activeScrollEdge.delete(scrollableAncestor);
        initialScrollLimits.delete(scrollableAncestor);
        return;
    }
    const currentActiveEdge = activeScrollEdge.get(scrollableAncestor);
    const isDocumentScroll = scrollableAncestor === document.body || scrollableAncestor === document.documentElement;
    // If not currently scrolling this edge, check velocity to see if we should start
    if (currentActiveEdge !== edge) {
        // Only start scrolling if velocity is towards the edge
        const shouldStart = edge === "start" && velocity < 0 || edge === "end" && velocity > 0;
        if (!shouldStart) return;
        // Activate this edge
        activeScrollEdge.set(scrollableAncestor, edge);
        // Record initial scroll limit (prevents infinite scroll)
        const maxScroll = axis === "x" ? scrollableAncestor.scrollWidth - (isDocumentScroll ? window.innerWidth : scrollableAncestor.clientWidth) : scrollableAncestor.scrollHeight - (isDocumentScroll ? window.innerHeight : scrollableAncestor.clientHeight);
        initialScrollLimits.set(scrollableAncestor, maxScroll);
    }
    // Cap scrolling at initial limit (prevents infinite scroll)
    if (scrollAmount > 0) {
        const initialLimit = initialScrollLimits.get(scrollableAncestor);
        const currentScroll = axis === "x" ? isDocumentScroll ? window.scrollX : scrollableAncestor.scrollLeft : isDocumentScroll ? window.scrollY : scrollableAncestor.scrollTop;
        if (currentScroll >= initialLimit) return;
    }
    // Apply scroll
    if (axis === "x") {
        if (isDocumentScroll) {
            window.scrollBy({
                left: scrollAmount
            });
        } else {
            scrollableAncestor.scrollLeft += scrollAmount;
        }
    } else {
        if (isDocumentScroll) {
            window.scrollBy({
                top: scrollAmount
            });
        } else {
            scrollableAncestor.scrollTop += scrollAmount;
        }
    }
}
;
 //# sourceMappingURL=auto-scroll.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/Reorder/Item.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReorderItem",
    ()=>ReorderItem,
    "ReorderItemComponent",
    ()=>ReorderItemComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$ReorderContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/context/ReorderContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$utils$2f$auto$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/Reorder/utils/auto-scroll.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function useDefaultMotionValue(value, defaultValue = 0) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(value) ? value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(defaultValue);
}
function ReorderItemComponent({ children, style = {}, value, as = "li", onDrag, onDragEnd, layout = true, ...props }, externalRef) {
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "ReorderItemComponent.useConstant[Component]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"][as]
    }["ReorderItemComponent.useConstant[Component]"]);
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$ReorderContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReorderContext"]);
    const point = {
        x: useDefaultMotionValue(style.x),
        y: useDefaultMotionValue(style.y)
    };
    const zIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])([
        point.x,
        point.y
    ], {
        "ReorderItemComponent.useTransform[zIndex]": ([latestX, latestY])=>latestX || latestY ? 1 : "unset"
    }["ReorderItemComponent.useTransform[zIndex]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(Boolean(context), "Reorder.Item must be a child of Reorder.Group", "reorder-item-child");
    const { axis, registerItem, updateOrder, groupRef } = context;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        drag: axis,
        ...props,
        dragSnapToOrigin: true,
        style: {
            ...style,
            x: point.x,
            y: point.y,
            zIndex
        },
        layout: layout,
        onDrag: (event, gesturePoint)=>{
            const { velocity, point: pointerPoint } = gesturePoint;
            const offset = point[axis].get();
            // Always attempt to update order - checkReorder handles the logic
            updateOrder(value, offset, velocity[axis]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$utils$2f$auto$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autoScrollIfNeeded"])(groupRef.current, pointerPoint[axis], axis, velocity[axis]);
            onDrag && onDrag(event, gesturePoint);
        },
        onDragEnd: (event, gesturePoint)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$utils$2f$auto$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetAutoScrollState"])();
            onDragEnd && onDragEnd(event, gesturePoint);
        },
        onLayoutMeasure: (measured)=>{
            registerItem(value, measured);
        },
        ref: externalRef,
        ignoreStrict: true,
        children: children
    });
}
const ReorderItem = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(ReorderItemComponent);
;
 //# sourceMappingURL=Item.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/Reorder/namespace.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Group",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReorderGroup"],
    "Item",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$Item$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReorderItem"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/Reorder/namespace.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/Reorder/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$Item$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/Reorder/Item.mjs [app-client] (ecmascript)");
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/Reorder/namespace.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/GroupAnimation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupAnimation",
    ()=>GroupAnimation
]);
class GroupAnimation {
    constructor(animations){
        // Bound to accomadate common `return animation.stop` pattern
        this.stop = ()=>this.runAll("stop");
        this.animations = animations.filter(Boolean);
    }
    get finished() {
        return Promise.all(this.animations.map((animation)=>animation.finished));
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */ getAll(propName) {
        return this.animations[0][propName];
    }
    setAll(propName, newValue) {
        for(let i = 0; i < this.animations.length; i++){
            this.animations[i][propName] = newValue;
        }
    }
    attachTimeline(timeline) {
        const subscriptions = this.animations.map((animation)=>animation.attachTimeline(timeline));
        return ()=>{
            subscriptions.forEach((cancel, i)=>{
                cancel && cancel();
                this.animations[i].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(time) {
        this.setAll("time", time);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(speed) {
        this.setAll("speed", speed);
    }
    get state() {
        return this.getAll("state");
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        return getMax(this.animations, "duration");
    }
    get iterationDuration() {
        return getMax(this.animations, "iterationDuration");
    }
    runAll(methodName) {
        this.animations.forEach((controls)=>controls[methodName]());
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}
function getMax(animations, propName) {
    let max = 0;
    for(let i = 0; i < animations.length; i++){
        const value = animations[i][propName];
        if (value !== null && value > max) {
            max = value;
        }
    }
    return max;
}
;
 //# sourceMappingURL=GroupAnimation.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupAnimationWithThen",
    ()=>GroupAnimationWithThen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/GroupAnimation.mjs [app-client] (ecmascript)");
;
class GroupAnimationWithThen extends __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimation"] {
    then(onResolve, _onReject) {
        return this.finished.finally(onResolve).then(()=>{});
    }
}
;
 //# sourceMappingURL=GroupAnimationWithThen.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/NativeAnimationWrapper.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeAnimationWrapper",
    ()=>NativeAnimationWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs [app-client] (ecmascript)");
;
class NativeAnimationWrapper extends __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimation"] {
    constructor(animation){
        super();
        this.animation = animation;
        animation.onfinish = ()=>{
            this.finishedTime = this.time;
            this.notifyFinished();
        };
    }
}
;
 //# sourceMappingURL=NativeAnimationWrapper.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/utils/active-animations.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animationMapKey",
    ()=>animationMapKey,
    "getAnimationMap",
    ()=>getAnimationMap
]);
const animationMaps = new WeakMap();
const animationMapKey = (name, pseudoElement = "")=>`${name}:${pseudoElement}`;
function getAnimationMap(element) {
    const map = animationMaps.get(element) || new Map();
    animationMaps.set(element, map);
    return map;
}
;
 //# sourceMappingURL=active-animations.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/utils/px-values.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pxValues",
    ()=>pxValues
]);
const pxValues = new Set([
    // Border props
    "borderWidth",
    "borderTopWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "borderLeftWidth",
    "borderRadius",
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomRightRadius",
    "borderBottomLeftRadius",
    // Positioning props
    "width",
    "maxWidth",
    "height",
    "maxHeight",
    "top",
    "right",
    "bottom",
    "left",
    "inset",
    "insetBlock",
    "insetBlockStart",
    "insetBlockEnd",
    "insetInline",
    "insetInlineStart",
    "insetInlineEnd",
    // Spacing props
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    // Typography
    "fontSize",
    // Misc
    "backgroundPositionX",
    "backgroundPositionY"
]);
;
 //# sourceMappingURL=px-values.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/keyframes/utils/apply-px-defaults.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyPxDefaults",
    ()=>applyPxDefaults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$px$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/utils/px-values.mjs [app-client] (ecmascript)");
;
function applyPxDefaults(keyframes, name) {
    for(let i = 0; i < keyframes.length; i++){
        if (typeof keyframes[i] === "number" && __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$px$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pxValues"].has(name)) {
            keyframes[i] = keyframes[i] + "px";
        }
    }
}
;
 //# sourceMappingURL=apply-px-defaults.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/easing/is-supported.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isWaapiSupportedEasing",
    ()=>isWaapiSupportedEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$supported$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs [app-client] (ecmascript)");
;
;
;
function isWaapiSupportedEasing(easing) {
    return Boolean(typeof easing === "function" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsLinearEasing"])() || !easing || typeof easing === "string" && (easing in __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$supported$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportedWaapiEasing"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsLinearEasing"])()) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBezierDefinition"])(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
;
 //# sourceMappingURL=is-supported.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/supports/partial-keyframes.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsPartialKeyframes",
    ()=>supportsPartialKeyframes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)");
;
const supportsPartialKeyframes = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(()=>{
    try {
        document.createElement("div").animate({
            opacity: [
                1
            ]
        });
    } catch (e) {
        return false;
    }
    return true;
});
;
 //# sourceMappingURL=partial-keyframes.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/utils/create-dom-effect.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSelectorEffect",
    ()=>createSelectorEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
;
function createSelectorEffect(subjectEffect) {
    return (subject, values)=>{
        const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(subject);
        const subscriptions = [];
        for (const element of elements){
            const remove = subjectEffect(element, values);
            subscriptions.push(remove);
        }
        return ()=>{
            for (const remove of subscriptions)remove();
        };
    };
}
;
 //# sourceMappingURL=create-dom-effect.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/MotionValueState.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionValueState",
    ()=>MotionValueState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/maps/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$get$2d$as$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs [app-client] (ecmascript)");
;
;
;
class MotionValueState {
    constructor(){
        this.latest = {};
        this.values = new Map();
    }
    set(name, value, render, computed, useDefaultValueType = true) {
        const existingValue = this.values.get(name);
        if (existingValue) {
            existingValue.onRemove();
        }
        const onChange = ()=>{
            const v = value.get();
            if (useDefaultValueType) {
                this.latest[name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$get$2d$as$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueAsType"])(v, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberValueTypes"][name]);
            } else {
                this.latest[name] = v;
            }
            render && __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].render(render);
        };
        onChange();
        const cancelOnChange = value.on("change", onChange);
        computed && value.addDependent(computed);
        const remove = ()=>{
            cancelOnChange();
            render && (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(render);
            this.values.delete(name);
            computed && value.removeDependent(computed);
        };
        this.values.set(name, {
            value,
            onRemove: remove
        });
        return remove;
    }
    get(name) {
        return this.values.get(name)?.value;
    }
    destroy() {
        for (const value of this.values.values()){
            value.onRemove();
        }
    }
}
;
 //# sourceMappingURL=MotionValueState.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/utils/create-effect.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEffect",
    ()=>createEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$MotionValueState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/MotionValueState.mjs [app-client] (ecmascript)");
;
function createEffect(addValue) {
    const stateCache = new WeakMap();
    const subscriptions = [];
    return (subject, values)=>{
        const state = stateCache.get(subject) ?? new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$MotionValueState$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionValueState"]();
        stateCache.set(subject, state);
        for(const key in values){
            const value = values[key];
            const remove = addValue(subject, state, key, value);
            subscriptions.push(remove);
        }
        return ()=>{
            for (const cancel of subscriptions)cancel();
        };
    };
}
;
 //# sourceMappingURL=create-effect.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/attr/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addAttrValue",
    ()=>addAttrValue,
    "attrEffect",
    ()=>attrEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$camel$2d$to$2d$dash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$dom$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/utils/create-dom-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/utils/create-effect.mjs [app-client] (ecmascript)");
;
;
;
function canSetAsProperty(element, name) {
    if (!(name in element)) return false;
    const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(element), name) || Object.getOwnPropertyDescriptor(element, name);
    // Check if it has a setter
    return descriptor && typeof descriptor.set === "function";
}
const addAttrValue = (element, state, key, value)=>{
    const isProp = canSetAsProperty(element, key);
    const name = isProp ? key : key.startsWith("data") || key.startsWith("aria") ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$camel$2d$to$2d$dash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["camelToDash"])(key) : key;
    /**
     * Set attribute directly via property if available
     */ const render = isProp ? ()=>{
        element[name] = state.latest[key];
    } : ()=>{
        const v = state.latest[key];
        if (v === null || v === undefined) {
            element.removeAttribute(name);
        } else {
            element.setAttribute(name, String(v));
        }
    };
    return state.set(key, value, render);
};
const attrEffect = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$dom$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelectorEffect"])(/*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEffect"])(addAttrValue));
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/prop/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "propEffect",
    ()=>propEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/utils/create-effect.mjs [app-client] (ecmascript)");
;
const propEffect = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEffect"])((subject, state, key, value)=>{
    return state.set(key, value, ()=>{
        subject[key] = state.latest[key];
    }, undefined, false);
});
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/style/transform.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildTransform",
    ()=>buildTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
;
const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
};
function buildTransform(state) {
    let transform = "";
    let transformIsDefault = true;
    /**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */ for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPropOrder"].length; i++){
        const key = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPropOrder"][i];
        const value = state.latest[key];
        if (value === undefined) continue;
        let valueIsDefault = true;
        if (typeof value === "number") {
            valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
        } else {
            const parsed = parseFloat(value);
            valueIsDefault = key.startsWith("scale") ? parsed === 1 : parsed === 0;
        }
        if (!valueIsDefault) {
            transformIsDefault = false;
            const transformName = translateAlias[key] || key;
            const valueToRender = state.latest[key];
            transform += `${transformName}(${valueToRender}) `;
        }
    }
    return transformIsDefault ? "none" : transform.trim();
}
;
 //# sourceMappingURL=transform.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/style/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addStyleValue",
    ()=>addStyleValue,
    "styleEffect",
    ()=>styleEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$is$2d$css$2d$var$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/is-html-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$dom$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/utils/create-dom-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/utils/create-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$style$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/style/transform.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
const originProps = new Set([
    "originX",
    "originY",
    "originZ"
]);
const addStyleValue = (element, state, key, value)=>{
    let render = undefined;
    let computed = undefined;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformProps"].has(key)) {
        if (!state.get("transform")) {
            // If this is an HTML element, we need to set the transform-box to fill-box
            // to normalise the transform relative to the element's bounding box
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) && !state.get("transformBox")) {
                addStyleValue(element, state, "transformBox", new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionValue"]("fill-box"));
            }
            state.set("transform", new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionValue"]("none"), ()=>{
                element.style.transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$style$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTransform"])(state);
            });
        }
        computed = state.get("transform");
    } else if (originProps.has(key)) {
        if (!state.get("transformOrigin")) {
            state.set("transformOrigin", new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionValue"](""), ()=>{
                const originX = state.latest.originX ?? "50%";
                const originY = state.latest.originY ?? "50%";
                const originZ = state.latest.originZ ?? 0;
                element.style.transformOrigin = `${originX} ${originY} ${originZ}`;
            });
        }
        computed = state.get("transformOrigin");
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$is$2d$css$2d$var$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVar"])(key)) {
        render = ()=>{
            element.style.setProperty(key, state.latest[key]);
        };
    } else {
        render = ()=>{
            element.style[key] = state.latest[key];
        };
    }
    return state.set(key, value, render, computed);
};
const styleEffect = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$dom$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelectorEffect"])(/*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEffect"])(addStyleValue));
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/svg/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "svgEffect",
    ()=>svgEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$attr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/attr/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$style$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/style/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$dom$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/utils/create-dom-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/utils/create-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
function addSVGPathValue(element, state, key, value) {
    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].render(()=>element.setAttribute("pathLength", "1"));
    if (key === "pathOffset") {
        return state.set(key, value, ()=>{
            // Use unitless value to avoid Safari zoom bug
            const offset = state.latest[key];
            element.setAttribute("stroke-dashoffset", `${-offset}`);
        });
    } else {
        if (!state.get("stroke-dasharray")) {
            state.set("stroke-dasharray", new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionValue"]("1 1"), ()=>{
                const { pathLength = 1, pathSpacing } = state.latest;
                // Use unitless values to avoid Safari zoom bug
                element.setAttribute("stroke-dasharray", `${pathLength} ${pathSpacing ?? 1 - Number(pathLength)}`);
            });
        }
        return state.set(key, value, undefined, state.get("stroke-dasharray"));
    }
}
const addSVGValue = (element, state, key, value)=>{
    if (key.startsWith("path")) {
        return addSVGPathValue(element, state, key, value);
    } else if (key.startsWith("attr")) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$attr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAttrValue"])(element, state, convertAttrKey(key), value);
    }
    const handler = key in element.style ? __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$style$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStyleValue"] : __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$attr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAttrValue"];
    return handler(element, state, key, value);
};
const svgEffect = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$dom$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelectorEffect"])(/*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$utils$2f$create$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEffect"])(addSVGValue));
function convertAttrKey(key) {
    return key.replace(/^attr([A-Z])/, (_, firstChar)=>firstChar.toLowerCase());
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/dom/style-computed.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getComputedStyle",
    ()=>getComputedStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$is$2d$css$2d$var$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs [app-client] (ecmascript)");
;
function getComputedStyle(element, name) {
    const computedStyle = window.getComputedStyle(element);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$is$2d$css$2d$var$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVar"])(name) ? computedStyle.getPropertyValue(name) : computedStyle[name];
}
;
 //# sourceMappingURL=style-computed.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/scroll/observe.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "observeTimeline",
    ()=>observeTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
function observeTimeline(update, timeline) {
    let prevProgress;
    const onFrame = ()=>{
        const { currentTime } = timeline;
        const percentage = currentTime === null ? 0 : currentTime.value;
        const progress = percentage / 100;
        if (prevProgress !== progress) {
            update(progress);
        }
        prevProgress = progress;
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].preUpdate(onFrame, true);
    return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(onFrame);
}
;
 //# sourceMappingURL=observe.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/stats/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "recordStats",
    ()=>recordStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/stats/animation-count.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/stats/buffer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
;
function record() {
    const { value } = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"];
    if (value === null) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(record);
        return;
    }
    value.frameloop.rate.push(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].delta);
    value.animations.mainThread.push(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"].mainThread);
    value.animations.waapi.push(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"].waapi);
    value.animations.layout.push(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"].layout);
}
function mean(values) {
    return values.reduce((acc, value)=>acc + value, 0) / values.length;
}
function summarise(values, calcAverage = mean) {
    if (values.length === 0) {
        return {
            min: 0,
            max: 0,
            avg: 0
        };
    }
    return {
        min: Math.min(...values),
        max: Math.max(...values),
        avg: calcAverage(values)
    };
}
const msToFps = (ms)=>Math.round(1000 / ms);
function clearStatsBuffer() {
    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].value = null;
    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].addProjectionMetrics = null;
}
function reportStats() {
    const { value } = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"];
    if (!value) {
        throw new Error("Stats are not being measured");
    }
    clearStatsBuffer();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(record);
    const summary = {
        frameloop: {
            setup: summarise(value.frameloop.setup),
            rate: summarise(value.frameloop.rate),
            read: summarise(value.frameloop.read),
            resolveKeyframes: summarise(value.frameloop.resolveKeyframes),
            preUpdate: summarise(value.frameloop.preUpdate),
            update: summarise(value.frameloop.update),
            preRender: summarise(value.frameloop.preRender),
            render: summarise(value.frameloop.render),
            postRender: summarise(value.frameloop.postRender)
        },
        animations: {
            mainThread: summarise(value.animations.mainThread),
            waapi: summarise(value.animations.waapi),
            layout: summarise(value.animations.layout)
        },
        layoutProjection: {
            nodes: summarise(value.layoutProjection.nodes),
            calculatedTargetDeltas: summarise(value.layoutProjection.calculatedTargetDeltas),
            calculatedProjections: summarise(value.layoutProjection.calculatedProjections)
        }
    };
    /**
     * Convert the rate to FPS
     */ const { rate } = summary.frameloop;
    rate.min = msToFps(rate.min);
    rate.max = msToFps(rate.max);
    rate.avg = msToFps(rate.avg);
    [rate.min, rate.max] = [
        rate.max,
        rate.min
    ];
    return summary;
}
function recordStats() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"].value) {
        clearStatsBuffer();
        throw new Error("Stats are already being measured");
    }
    const newStatsBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"];
    newStatsBuffer.value = {
        frameloop: {
            setup: [],
            rate: [],
            read: [],
            resolveKeyframes: [],
            preUpdate: [],
            update: [],
            preRender: [],
            render: [],
            postRender: []
        },
        animations: {
            mainThread: [],
            waapi: [],
            layout: []
        },
        layoutProjection: {
            nodes: [],
            calculatedTargetDeltas: [],
            calculatedProjections: []
        }
    };
    newStatsBuffer.addProjectionMetrics = (metrics)=>{
        const { layoutProjection } = newStatsBuffer.value;
        layoutProjection.nodes.push(metrics.nodes);
        layoutProjection.calculatedTargetDeltas.push(metrics.calculatedTargetDeltas);
        layoutProjection.calculatedProjections.push(metrics.calculatedProjections);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(record, true);
    return reportStats;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/stagger.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOriginIndex",
    ()=>getOriginIndex,
    "stagger",
    ()=>stagger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-client] (ecmascript)");
;
function getOriginIndex(from, total) {
    if (from === "first") {
        return 0;
    } else {
        const lastIndex = total - 1;
        return from === "last" ? lastIndex : lastIndex / 2;
    }
}
function stagger(duration = 0.1, { startDelay = 0, from = 0, ease } = {}) {
    return (i, total)=>{
        const fromIndex = typeof from === "number" ? from : getOriginIndex(from, total);
        const distance = Math.abs(fromIndex - i);
        let delay = duration * distance;
        if (ease) {
            const maxDelay = total * duration;
            const easingFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easingDefinitionToFunction"])(ease);
            delay = easingFunction(delay / maxDelay) * maxDelay;
        }
        return startDelay + delay;
    };
}
;
 //# sourceMappingURL=stagger.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/follow-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachFollow",
    ()=>attachFollow,
    "followValue",
    ()=>followValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/JSAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
;
;
/**
 * Create a `MotionValue` that animates to its latest value using any transition type.
 * Can either be a value or track another `MotionValue`.
 *
 * ```jsx
 * const x = motionValue(0)
 * const y = followValue(x, { type: "spring", stiffness: 300 })
 * // or with tween
 * const z = followValue(x, { type: "tween", duration: 0.5, ease: "easeOut" })
 * ```
 *
 * @param source - Initial value or MotionValue to track
 * @param options - Animation transition options
 * @returns `MotionValue`
 *
 * @public
 */ function followValue(source, options) {
    const initialValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(source) ? source.get() : source;
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(initialValue);
    attachFollow(value, source, options);
    return value;
}
/**
 * Attach an animation to a MotionValue that will animate whenever the value changes.
 * Similar to attachSpring but supports any transition type (spring, tween, inertia, etc.)
 *
 * @param value - The MotionValue to animate
 * @param source - Initial value or MotionValue to track
 * @param options - Animation transition options
 * @returns Cleanup function
 *
 * @public
 */ function attachFollow(value, source, options = {}) {
    const initialValue = value.get();
    let activeAnimation = null;
    let latestValue = initialValue;
    let latestSetter;
    const unit = typeof initialValue === "string" ? initialValue.replace(/[\d.-]/g, "") : undefined;
    const stopAnimation = ()=>{
        if (activeAnimation) {
            activeAnimation.stop();
            activeAnimation = null;
        }
    };
    const startAnimation = ()=>{
        stopAnimation();
        const currentValue = asNumber(value.get());
        const targetValue = asNumber(latestValue);
        // Don't animate if we're already at the target
        if (currentValue === targetValue) {
            return;
        }
        activeAnimation = new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSAnimation"]({
            keyframes: [
                currentValue,
                targetValue
            ],
            velocity: value.getVelocity(),
            // Default to spring if no type specified (matches useSpring behavior)
            type: "spring",
            restDelta: 0.001,
            restSpeed: 0.01,
            ...options,
            onUpdate: latestSetter
        });
    };
    value.attach((v, set)=>{
        latestValue = v;
        latestSetter = (latest)=>set(parseValue(latest, unit));
        __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(()=>{
            startAnimation();
            value["events"].animationStart?.notify();
            activeAnimation?.then(()=>{
                value["events"].animationComplete?.notify();
            });
        });
    }, stopAnimation);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(source)) {
        const removeSourceOnChange = source.on("change", (v)=>value.set(parseValue(v, unit)));
        const removeValueOnDestroy = value.on("destroy", removeSourceOnChange);
        return ()=>{
            removeSourceOnChange();
            removeValueOnDestroy();
        };
    }
    return stopAnimation;
}
function parseValue(v, unit) {
    return unit ? v + unit : v;
}
function asNumber(v) {
    return typeof v === "number" ? v : parseFloat(v);
}
;
 //# sourceMappingURL=follow-value.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/subscribe-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "subscribeValue",
    ()=>subscribeValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
function subscribeValue(inputValues, outputValue, getLatest) {
    const update = ()=>outputValue.set(getLatest());
    const scheduleUpdate = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].preRender(update, false, true);
    const subscriptions = inputValues.map((v)=>v.on("change", scheduleUpdate));
    outputValue.on("destroy", ()=>{
        subscriptions.forEach((unsubscribe)=>unsubscribe());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(update);
    });
}
;
 //# sourceMappingURL=subscribe-value.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/transform-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transformValue",
    ()=>transformValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$subscribe$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/subscribe-value.mjs [app-client] (ecmascript)");
;
;
/**
 * Create a `MotionValue` that transforms the output of other `MotionValue`s by
 * passing their latest values through a transform function.
 *
 * Whenever a `MotionValue` referred to in the provided function is updated,
 * it will be re-evaluated.
 *
 * ```jsx
 * const x = motionValue(0)
 * const y = transformValue(() => x.get() * 2) // double x
 * ```
 *
 * @param transformer - A transform function. This function must be pure with no side-effects or conditional statements.
 * @returns `MotionValue`
 *
 * @public
 */ function transformValue(transform) {
    const collectedValues = [];
    /**
     * Open session of collectMotionValues. Any MotionValue that calls get()
     * inside transform will be saved into this array.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectMotionValues"].current = collectedValues;
    const initialValue = transform();
    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectMotionValues"].current = undefined;
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(initialValue);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$subscribe$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeValue"])(collectedValues, value, transform);
    return value;
}
;
 //# sourceMappingURL=transform-value.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/map-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapValue",
    ()=>mapValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$transform$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/transform-value.mjs [app-client] (ecmascript)");
;
;
/**
 * Create a `MotionValue` that maps the output of another `MotionValue` by
 * mapping it from one range of values into another.
 *
 * @remarks
 *
 * Given an input range of `[-200, -100, 100, 200]` and an output range of
 * `[0, 1, 1, 0]`, the returned `MotionValue` will:
 *
 * - When provided a value between `-200` and `-100`, will return a value between `0` and  `1`.
 * - When provided a value between `-100` and `100`, will return `1`.
 * - When provided a value between `100` and `200`, will return a value between `1` and  `0`
 *
 * The input range must be a linear series of numbers. The output range
 * can be any value type supported by Motion: numbers, colors, shadows, etc.
 *
 * Every value in the output range must be of the same type and in the same format.
 *
 * ```jsx
 * const x = motionValue(0)
 * const xRange = [-200, -100, 100, 200]
 * const opacityRange = [0, 1, 1, 0]
 * const opacity = mapValue(x, xRange, opacityRange)
 * ```
 *
 * @param inputValue - `MotionValue`
 * @param inputRange - A linear series of numbers (either all increasing or decreasing)
 * @param outputRange - A series of numbers, colors or strings. Must be the same length as `inputRange`.
 * @param options -
 *
 *  - clamp: boolean. Clamp values to within the given range. Defaults to `true`
 *  - ease: EasingFunction[]. Easing functions to use on the interpolations between each value in the input and output ranges. If provided as an array, the array must be one item shorter than the input and output ranges, as the easings apply to the transition between each.
 *
 * @returns `MotionValue`
 *
 * @public
 */ function mapValue(inputValue, inputRange, outputRange, options) {
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"])(inputRange, outputRange, options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$transform$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformValue"])(()=>map(inputValue.get()));
}
;
 //# sourceMappingURL=map-value.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/spring-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachSpring",
    ()=>attachSpring,
    "springValue",
    ()=>springValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$follow$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/follow-value.mjs [app-client] (ecmascript)");
;
/**
 * Create a `MotionValue` that animates to its latest value using a spring.
 * Can either be a value or track another `MotionValue`.
 *
 * ```jsx
 * const x = motionValue(0)
 * const y = springValue(x, { stiffness: 300 })
 * ```
 *
 * @param source - Initial value or MotionValue to track
 * @param options - Spring configuration options
 * @returns `MotionValue`
 *
 * @public
 */ function springValue(source, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$follow$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["followValue"])(source, {
        type: "spring",
        ...options
    });
}
/**
 * Attach a spring animation to a MotionValue that will animate whenever the value changes.
 *
 * @param value - The MotionValue to animate
 * @param source - Initial value or MotionValue to track
 * @param options - Spring configuration options
 * @returns Cleanup function
 *
 * @public
 */ function attachSpring(value, source, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$follow$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachFollow"])(value, source, {
        type: "spring",
        ...options
    });
}
;
 //# sourceMappingURL=spring-value.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/utils/choose-layer-type.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chooseLayerType",
    ()=>chooseLayerType
]);
function chooseLayerType(valueName) {
    if (valueName === "layout") return "group";
    if (valueName === "enter" || valueName === "new") return "new";
    if (valueName === "exit" || valueName === "old") return "old";
    return "group";
}
;
 //# sourceMappingURL=choose-layer-type.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/utils/css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "css",
    ()=>css
]);
let pendingRules = {};
let style = null;
const css = {
    set: (selector, values)=>{
        pendingRules[selector] = values;
    },
    commit: ()=>{
        if (!style) {
            style = document.createElement("style");
            style.id = "motion-view";
        }
        let cssText = "";
        for(const selector in pendingRules){
            const rule = pendingRules[selector];
            cssText += `${selector} {\n`;
            for (const [property, value] of Object.entries(rule)){
                cssText += `  ${property}: ${value};\n`;
            }
            cssText += "}\n";
        }
        style.textContent = cssText;
        document.head.appendChild(style);
        pendingRules = {};
    },
    remove: ()=>{
        if (style && style.parentElement) {
            style.parentElement.removeChild(style);
        }
    }
};
;
 //# sourceMappingURL=css.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/utils/get-layer-info.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getViewAnimationLayerInfo",
    ()=>getViewAnimationLayerInfo
]);
function getViewAnimationLayerInfo(pseudoElement) {
    const match = pseudoElement.match(/::view-transition-(old|new|group|image-pair)\((.*?)\)/);
    if (!match) return null;
    return {
        layer: match[2],
        type: match[1]
    };
}
;
 //# sourceMappingURL=get-layer-info.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/utils/get-view-animations.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getViewAnimations",
    ()=>getViewAnimations
]);
function filterViewAnimations(animation) {
    const { effect } = animation;
    if (!effect) return false;
    return effect.target === document.documentElement && effect.pseudoElement?.startsWith("::view-transition");
}
function getViewAnimations() {
    return document.getAnimations().filter(filterViewAnimations);
}
;
 //# sourceMappingURL=get-view-animations.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/utils/has-target.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasTarget",
    ()=>hasTarget
]);
function hasTarget(target, targets) {
    return targets.has(target) && Object.keys(targets.get(target)).length > 0;
}
;
 //# sourceMappingURL=has-target.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/start.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "startViewAnimation",
    ()=>startViewAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/GroupAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimationWrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/NativeAnimationWrapper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$map$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$apply$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$choose$2d$layer$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/utils/choose-layer-type.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/utils/css.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$layer$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/utils/get-layer-info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$view$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/utils/get-view-animations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$has$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/utils/has-target.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const definitionNames = [
    "layout",
    "enter",
    "exit",
    "new",
    "old"
];
function startViewAnimation(builder) {
    const { update, targets, options: defaultOptions } = builder;
    if (!document.startViewTransition) {
        return new Promise(async (resolve)=>{
            await update();
            resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimation"]([]));
        });
    }
    // TODO: Go over existing targets and ensure they all have ids
    /**
     * If we don't have any animations defined for the root target,
     * remove it from being captured.
     */ if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$has$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTarget"])("root", targets)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"].set(":root", {
            "view-transition-name": "none"
        });
    }
    /**
     * Set the timing curve to linear for all view transition layers.
     * This gets baked into the keyframes, which can't be changed
     * without breaking the generated animation.
     *
     * This allows us to set easing via updateTiming - which can be changed.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"].set("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", {
        "animation-timing-function": "linear !important"
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"].commit(); // Write
    const transition = document.startViewTransition(async ()=>{
        await update();
    // TODO: Go over new targets and ensure they all have ids
    });
    transition.finished.finally(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"].remove(); // Write
    });
    return new Promise((resolve)=>{
        transition.ready.then(()=>{
            const generatedViewAnimations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$view$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewAnimations"])();
            const animations = [];
            /**
             * Create animations for each of our explicitly-defined subjects.
             */ targets.forEach((definition, target)=>{
                // TODO: If target is not "root", resolve elements
                // and iterate over each
                for (const key of definitionNames){
                    if (!definition[key]) continue;
                    const { keyframes, options } = definition[key];
                    for (let [valueName, valueKeyframes] of Object.entries(keyframes)){
                        if (!valueKeyframes) continue;
                        const valueOptions = {
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"])(defaultOptions, valueName),
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"])(options, valueName)
                        };
                        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$choose$2d$layer$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chooseLayerType"])(key);
                        /**
                         * If this is an opacity animation, and keyframes are not an array,
                         * we need to convert them into an array and set an initial value.
                         */ if (valueName === "opacity" && !Array.isArray(valueKeyframes)) {
                            const initialValue = type === "new" ? 0 : 1;
                            valueKeyframes = [
                                initialValue,
                                valueKeyframes
                            ];
                        }
                        /**
                         * Resolve stagger function if provided.
                         */ if (typeof valueOptions.delay === "function") {
                            valueOptions.delay = valueOptions.delay(0, 1);
                        }
                        valueOptions.duration && (valueOptions.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(valueOptions.duration));
                        valueOptions.delay && (valueOptions.delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(valueOptions.delay));
                        const animation = new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimation"]({
                            ...valueOptions,
                            element: document.documentElement,
                            name: valueName,
                            pseudoElement: `::view-transition-${type}(${target})`,
                            keyframes: valueKeyframes
                        });
                        animations.push(animation);
                    }
                }
            });
            /**
             * Handle browser generated animations
             */ for (const animation of generatedViewAnimations){
                if (animation.playState === "finished") continue;
                const { effect } = animation;
                if (!effect || !(effect instanceof KeyframeEffect)) continue;
                const { pseudoElement } = effect;
                if (!pseudoElement) continue;
                const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$layer$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewAnimationLayerInfo"])(pseudoElement);
                if (!name) continue;
                const targetDefinition = targets.get(name.layer);
                if (!targetDefinition) {
                    /**
                     * If transition name is group then update the timing of the animation
                     * whereas if it's old or new then we could possibly replace it using
                     * the above method.
                     */ const transitionName = name.type === "group" ? "layout" : "";
                    let animationTransition = {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"])(defaultOptions, transitionName)
                    };
                    animationTransition.duration && (animationTransition.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(animationTransition.duration));
                    animationTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$apply$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyGeneratorOptions"])(animationTransition);
                    const easing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$map$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapEasingToNativeEasing"])(animationTransition.ease, animationTransition.duration);
                    effect.updateTiming({
                        delay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(animationTransition.delay ?? 0),
                        duration: animationTransition.duration,
                        easing
                    });
                    animations.push(new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimationWrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimationWrapper"](animation));
                } else if (hasOpacity(targetDefinition, "enter") && hasOpacity(targetDefinition, "exit") && effect.getKeyframes().some((keyframe)=>keyframe.mixBlendMode)) {
                    animations.push(new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimationWrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimationWrapper"](animation));
                } else {
                    animation.cancel();
                }
            }
            resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimation"](animations));
        });
    });
}
function hasOpacity(target, key) {
    return target?.[key]?.keyframes.opacity;
}
;
 //# sourceMappingURL=start.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/queue.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToQueue",
    ()=>addToQueue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/microtask.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$start$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/start.mjs [app-client] (ecmascript)");
;
;
;
let builders = [];
let current = null;
function next() {
    current = null;
    const [nextBuilder] = builders;
    if (nextBuilder) start(nextBuilder);
}
function start(builder) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(builders, builder);
    current = builder;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$start$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startViewAnimation"])(builder).then((animation)=>{
        builder.notifyReady(animation);
        animation.finished.finally(next);
    });
}
function processQueue() {
    /**
     * Iterate backwards over the builders array. We can ignore the
     * "wait" animations. If we have an interrupting animation in the
     * queue then we need to batch all preceeding animations into it.
     * Currently this only batches the update functions but will also
     * need to batch the targets.
     */ for(let i = builders.length - 1; i >= 0; i--){
        const builder = builders[i];
        const { interrupt } = builder.options;
        if (interrupt === "immediate") {
            const batchedUpdates = builders.slice(0, i + 1).map((b)=>b.update);
            const remaining = builders.slice(i + 1);
            builder.update = ()=>{
                batchedUpdates.forEach((update)=>update());
            };
            // Put the current builder at the front, followed by any "wait" builders
            builders = [
                builder,
                ...remaining
            ];
            break;
        }
    }
    if (!current || builders[0]?.options.interrupt === "immediate") {
        next();
    }
}
function addToQueue(builder) {
    builders.push(builder);
    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microtask"].render(processQueue);
}
;
 //# sourceMappingURL=queue.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ViewTransitionBuilder",
    ()=>ViewTransitionBuilder,
    "animateView",
    ()=>animateView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$queue$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/queue.mjs [app-client] (ecmascript)");
;
;
class ViewTransitionBuilder {
    constructor(update, options = {}){
        this.currentSubject = "root";
        this.targets = new Map();
        this.notifyReady = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
        this.readyPromise = new Promise((resolve)=>{
            this.notifyReady = resolve;
        });
        this.update = update;
        this.options = {
            interrupt: "wait",
            ...options
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$queue$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToQueue"])(this);
    }
    get(subject) {
        this.currentSubject = subject;
        return this;
    }
    layout(keyframes, options) {
        this.updateTarget("layout", keyframes, options);
        return this;
    }
    new(keyframes, options) {
        this.updateTarget("new", keyframes, options);
        return this;
    }
    old(keyframes, options) {
        this.updateTarget("old", keyframes, options);
        return this;
    }
    enter(keyframes, options) {
        this.updateTarget("enter", keyframes, options);
        return this;
    }
    exit(keyframes, options) {
        this.updateTarget("exit", keyframes, options);
        return this;
    }
    crossfade(options) {
        this.updateTarget("enter", {
            opacity: 1
        }, options);
        this.updateTarget("exit", {
            opacity: 0
        }, options);
        return this;
    }
    updateTarget(target, keyframes, options = {}) {
        const { currentSubject, targets } = this;
        if (!targets.has(currentSubject)) {
            targets.set(currentSubject, {});
        }
        const targetData = targets.get(currentSubject);
        targetData[target] = {
            keyframes,
            options
        };
    }
    then(resolve, reject) {
        return this.readyPromise.then(resolve, reject);
    }
}
function animateView(update, defaultOptions = {}) {
    return new ViewTransitionBuilder(update, defaultOptions);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/object/ObjectVisualElement.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ObjectVisualElement",
    ()=>ObjectVisualElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/models.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/VisualElement.mjs [app-client] (ecmascript)");
;
;
function isObjectKey(key, object) {
    return key in object;
}
class ObjectVisualElement extends __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisualElement"] {
    constructor(){
        super(...arguments);
        this.type = "object";
    }
    readValueFromInstance(instance, key) {
        if (isObjectKey(key, instance)) {
            const value = instance[key];
            if (typeof value === "string" || typeof value === "number") {
                return value;
            }
        }
        return undefined;
    }
    getBaseTargetFromProps() {
        return undefined;
    }
    removeValueFromRenderState(key, renderState) {
        delete renderState.output[key];
    }
    measureInstanceViewportBox() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
    }
    build(renderState, latestValues) {
        Object.assign(renderState.output, latestValues);
    }
    renderInstance(instance, { output }) {
        Object.assign(instance, output);
    }
    sortInstanceNodePosition() {
        return 0;
    }
}
;
 //# sourceMappingURL=ObjectVisualElement.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/layout/LayoutAnimationBuilder.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutAnimationBuilder",
    ()=>LayoutAnimationBuilder,
    "parseAnimateLayoutArgs",
    ()=>parseAnimateLayoutArgs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/GroupAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/copy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/models.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$HTMLVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const layoutSelector = "[data-layout], [data-layout-id]";
const noop = ()=>{};
function snapshotFromTarget(projection) {
    const target = projection.targetWithTransforms || projection.target;
    if (!target) return undefined;
    const measuredBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
    const layoutBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(measuredBox, target);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"])(layoutBox, target);
    return {
        animationId: projection.root?.animationId ?? 0,
        measuredBox,
        layoutBox,
        latestValues: projection.animationValues || projection.latestValues || {},
        source: projection.id
    };
}
class LayoutAnimationBuilder {
    constructor(scope, updateDom, defaultOptions){
        this.sharedTransitions = new Map();
        this.notifyReady = noop;
        this.rejectReady = noop;
        this.scope = scope;
        this.updateDom = updateDom;
        this.defaultOptions = defaultOptions;
        this.readyPromise = new Promise((resolve, reject)=>{
            this.notifyReady = resolve;
            this.rejectReady = reject;
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(()=>{
            this.start().then(this.notifyReady).catch(this.rejectReady);
        });
    }
    shared(id, transition) {
        this.sharedTransitions.set(id, transition);
        return this;
    }
    then(resolve, reject) {
        return this.readyPromise.then(resolve, reject);
    }
    async start() {
        const beforeElements = collectLayoutElements(this.scope);
        const beforeRecords = this.buildRecords(beforeElements);
        beforeRecords.forEach(({ projection })=>{
            const hasCurrentAnimation = Boolean(projection.currentAnimation);
            const isSharedLayout = Boolean(projection.options.layoutId);
            if (hasCurrentAnimation && isSharedLayout) {
                const snapshot = snapshotFromTarget(projection);
                if (snapshot) {
                    projection.snapshot = snapshot;
                } else if (projection.snapshot) {
                    projection.snapshot = undefined;
                }
            } else if (projection.snapshot && (projection.currentAnimation || projection.isProjecting())) {
                projection.snapshot = undefined;
            }
            projection.isPresent = true;
            projection.willUpdate();
        });
        await this.updateDom();
        const afterElements = collectLayoutElements(this.scope);
        const afterRecords = this.buildRecords(afterElements);
        this.handleExitingElements(beforeRecords, afterRecords);
        afterRecords.forEach(({ projection })=>{
            const instance = projection.instance;
            const resumeFromInstance = projection.resumeFrom?.instance;
            if (!instance || !resumeFromInstance) return;
            if (!("style" in instance)) return;
            const currentTransform = instance.style.transform;
            const resumeFromTransform = resumeFromInstance.style.transform;
            if (currentTransform && resumeFromTransform && currentTransform === resumeFromTransform) {
                instance.style.transform = "";
                instance.style.transformOrigin = "";
            }
        });
        afterRecords.forEach(({ projection })=>{
            projection.isPresent = true;
        });
        const root = getProjectionRoot(afterRecords, beforeRecords);
        root?.didUpdate();
        await new Promise((resolve)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(()=>resolve());
        });
        const animations = collectAnimations(afterRecords);
        const animation = new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimation"](animations);
        return animation;
    }
    buildRecords(elements) {
        const records = [];
        const recordMap = new Map();
        for (const element of elements){
            const parentRecord = findParentRecord(element, recordMap, this.scope);
            const { layout, layoutId } = readLayoutAttributes(element);
            const override = layoutId ? this.sharedTransitions.get(layoutId) : undefined;
            const transition = override || this.defaultOptions;
            const record = getOrCreateRecord(element, parentRecord?.projection, {
                layout,
                layoutId,
                animationType: typeof layout === "string" ? layout : "both",
                transition: transition
            });
            recordMap.set(element, record);
            records.push(record);
        }
        return records;
    }
    handleExitingElements(beforeRecords, afterRecords) {
        const afterElementsSet = new Set(afterRecords.map((record)=>record.element));
        beforeRecords.forEach((record)=>{
            if (afterElementsSet.has(record.element)) return;
            // For shared layout elements, relegate to set up resumeFrom
            // so the remaining element animates from this position
            if (record.projection.options.layoutId) {
                record.projection.isPresent = false;
                record.projection.relegate();
            }
            record.visualElement.unmount();
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].delete(record.element);
        });
        // Clear resumeFrom on EXISTING nodes that point to unmounted projections
        // This prevents crossfade animation when the source element was removed entirely
        // But preserve resumeFrom for NEW nodes so they can animate from the old position
        // Also preserve resumeFrom for lead nodes that were just promoted via relegate
        const beforeElementsSet = new Set(beforeRecords.map((record)=>record.element));
        afterRecords.forEach(({ element, projection })=>{
            if (beforeElementsSet.has(element) && projection.resumeFrom && !projection.resumeFrom.instance && !projection.isLead()) {
                projection.resumeFrom = undefined;
                projection.snapshot = undefined;
            }
        });
    }
}
function parseAnimateLayoutArgs(scopeOrUpdateDom, updateDomOrOptions, options) {
    // animateLayout(updateDom)
    if (typeof scopeOrUpdateDom === "function") {
        return {
            scope: document,
            updateDom: scopeOrUpdateDom,
            defaultOptions: updateDomOrOptions
        };
    }
    // animateLayout(scope, updateDom, options?)
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(scopeOrUpdateDom);
    const scope = elements[0] || document;
    return {
        scope,
        updateDom: updateDomOrOptions,
        defaultOptions: options
    };
}
function collectLayoutElements(scope) {
    const elements = Array.from(scope.querySelectorAll(layoutSelector));
    if (scope instanceof Element && scope.matches(layoutSelector)) {
        if (!elements.includes(scope)) {
            elements.unshift(scope);
        }
    }
    return elements;
}
function readLayoutAttributes(element) {
    const layoutId = element.getAttribute("data-layout-id") || undefined;
    const rawLayout = element.getAttribute("data-layout");
    let layout;
    if (rawLayout === "" || rawLayout === "true") {
        layout = true;
    } else if (rawLayout) {
        layout = rawLayout;
    }
    return {
        layout,
        layoutId
    };
}
function createVisualState() {
    return {
        latestValues: {},
        renderState: {
            transform: {},
            transformOrigin: {},
            style: {},
            vars: {}
        }
    };
}
function getOrCreateRecord(element, parentProjection, projectionOptions) {
    const existing = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].get(element);
    const visualElement = existing ?? new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$HTMLVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLVisualElement"]({
        props: {},
        presenceContext: null,
        visualState: createVisualState()
    }, {
        allowProjection: true
    });
    if (!existing || !visualElement.projection) {
        visualElement.projection = new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLProjectionNode"](visualElement.latestValues, parentProjection);
    }
    visualElement.projection.setOptions({
        ...projectionOptions,
        visualElement
    });
    if (!visualElement.current) {
        visualElement.mount(element);
    } else if (!visualElement.projection.instance) {
        // Mount projection if VisualElement is already mounted but projection isn't
        // This happens when animate() was called before animateLayout()
        visualElement.projection.mount(element);
    }
    if (!existing) {
        __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].set(element, visualElement);
    }
    return {
        element,
        visualElement,
        projection: visualElement.projection
    };
}
function findParentRecord(element, recordMap, scope) {
    let parent = element.parentElement;
    while(parent){
        const record = recordMap.get(parent);
        if (record) return record;
        if (parent === scope) break;
        parent = parent.parentElement;
    }
    return undefined;
}
function getProjectionRoot(afterRecords, beforeRecords) {
    const record = afterRecords[0] || beforeRecords[0];
    return record?.projection.root;
}
function collectAnimations(afterRecords) {
    const animations = new Set();
    afterRecords.forEach((record)=>{
        const animation = record.projection.currentAnimation;
        if (animation) animations.add(animation);
    });
    return Array.from(animations);
}
;
 //# sourceMappingURL=LayoutAnimationBuilder.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/index-legacy.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cancelSync",
    ()=>cancelSync,
    "sync",
    ()=>sync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$order$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/order.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
/**
 * @deprecated
 *
 * Import as `frame` instead.
 */ const sync = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"];
/**
 * @deprecated
 *
 * Use cancelFrame(callback) instead.
 */ const cancelSync = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$order$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepsOrder"].reduce((acc, key)=>{
    acc[key] = (process)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(process);
    return acc;
}, {});
;
 //# sourceMappingURL=index-legacy.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsyncMotionValueAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$AsyncMotionValueAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncMotionValueAnimation"],
    "DOMKeyframesResolver",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$DOMKeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMKeyframesResolver"],
    "DOMVisualElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$DOMVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMVisualElement"],
    "DocumentProjectionNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$DocumentProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentProjectionNode"],
    "Feature",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Feature"],
    "FlatTree",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$flat$2d$tree$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlatTree"],
    "GroupAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimation"],
    "GroupAnimationWithThen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimationWithThen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimationWithThen"],
    "HTMLProjectionNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLProjectionNode"],
    "HTMLVisualElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$HTMLVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLVisualElement"],
    "JSAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSAnimation"],
    "KeyframeResolver",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$KeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyframeResolver"],
    "LayoutAnimationBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$layout$2f$LayoutAnimationBuilder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutAnimationBuilder"],
    "MotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionValue"],
    "NativeAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimation"],
    "NativeAnimationExtended",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimationExtended$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimationExtended"],
    "NativeAnimationWrapper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimationWrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimationWrapper"],
    "NodeStack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$shared$2f$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeStack"],
    "ObjectVisualElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$object$2f$ObjectVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectVisualElement"],
    "SVGVisualElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$SVGVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SVGVisualElement"],
    "ViewTransitionBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewTransitionBuilder"],
    "VisualElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisualElement"],
    "acceleratedValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$accelerated$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["acceleratedValues"],
    "activeAnimations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"],
    "addAttrValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$attr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAttrValue"],
    "addDomEvent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDomEvent"],
    "addScaleCorrector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$correction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addScaleCorrector"],
    "addStyleValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$style$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStyleValue"],
    "addValueToWillChange",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$will$2d$change$2f$add$2d$will$2d$change$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addValueToWillChange"],
    "alpha",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"],
    "analyseComplexValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyseComplexValue"],
    "animateMotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateMotionValue"],
    "animateSingleValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$animate$2f$single$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSingleValue"],
    "animateTarget",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateTarget"],
    "animateValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateValue"],
    "animateVariant",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$variant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateVariant"],
    "animateView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateView"],
    "animateVisualElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateVisualElement"],
    "animationMapKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$active$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationMapKey"],
    "applyAxisDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyAxisDelta"],
    "applyBoxDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyBoxDelta"],
    "applyGeneratorOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$apply$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyGeneratorOptions"],
    "applyPointDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyPointDelta"],
    "applyPxDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$apply$2d$px$2d$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyPxDefaults"],
    "applyTreeDeltas",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTreeDeltas"],
    "aspectRatio",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aspectRatio"],
    "attachFollow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$follow$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachFollow"],
    "attachSpring",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$spring$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachSpring"],
    "attrEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$attr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attrEffect"],
    "axisDeltaEquals",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisDeltaEquals"],
    "axisEquals",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisEquals"],
    "axisEqualsRounded",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisEqualsRounded"],
    "boxEquals",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boxEquals"],
    "boxEqualsRounded",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boxEqualsRounded"],
    "buildHTMLStyles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$build$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHTMLStyles"],
    "buildProjectionTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildProjectionTransform"],
    "buildSVGAttrs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$build$2d$attrs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSVGAttrs"],
    "buildSVGPath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$path$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSVGPath"],
    "buildTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$build$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTransform"],
    "calcAxisDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcAxisDelta"],
    "calcBoxDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcBoxDelta"],
    "calcChildStagger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$calc$2d$child$2d$stagger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcChildStagger"],
    "calcGeneratorDuration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcGeneratorDuration"],
    "calcLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"],
    "calcRelativeAxis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativeAxis"],
    "calcRelativeAxisPosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativeAxisPosition"],
    "calcRelativeBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativeBox"],
    "calcRelativePosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativePosition"],
    "camelCaseAttributes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$camel$2d$case$2d$attrs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["camelCaseAttributes"],
    "camelToDash",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$camel$2d$to$2d$dash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["camelToDash"],
    "cancelFrame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"],
    "cancelMicrotask",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelMicrotask"],
    "cancelSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$index$2d$legacy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelSync"],
    "checkVariantsDidChange",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$animation$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkVariantsDidChange"],
    "cleanDirtyNodes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$create$2d$projection$2d$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanDirtyNodes"],
    "collectMotionValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectMotionValues"],
    "color",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"],
    "compareByDepth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$compare$2d$by$2d$depth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareByDepth"],
    "complex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"],
    "containsCSSVariable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsCSSVariable"],
    "convertBoundingBoxToBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertBoundingBoxToBox"],
    "convertBoxToBoundingBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertBoxToBoundingBox"],
    "convertOffsetToTimes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertOffsetToTimes"],
    "copyAxisDeltaInto",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyAxisDeltaInto"],
    "copyAxisInto",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyAxisInto"],
    "copyBoxInto",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"],
    "correctBorderRadius",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$border$2d$radius$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["correctBorderRadius"],
    "correctBoxShadow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$box$2d$shadow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["correctBoxShadow"],
    "createAnimationState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$animation$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAnimationState"],
    "createAxis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAxis"],
    "createAxisDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAxisDelta"],
    "createBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"],
    "createDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelta"],
    "createGeneratorEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGeneratorEasing"],
    "createProjectionNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$create$2d$projection$2d$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProjectionNode"],
    "createRenderBatcher",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$batcher$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRenderBatcher"],
    "cubicBezierAsString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezierAsString"],
    "defaultEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultEasing"],
    "defaultOffset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOffset"],
    "defaultTransformValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$parse$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTransformValue"],
    "defaultValueTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultValueTypes"],
    "degrees",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"],
    "delay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$delay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["delay"],
    "delayInSeconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$delay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["delayInSeconds"],
    "dimensionValueTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$dimensions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dimensionValueTypes"],
    "eachAxis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$each$2d$axis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachAxis"],
    "fillOffset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$fill$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillOffset"],
    "fillWildcards",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$fill$2d$wildcards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillWildcards"],
    "findDimensionValueType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$dimensions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findDimensionValueType"],
    "findValueType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$find$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findValueType"],
    "flushKeyframeResolvers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$KeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushKeyframeResolvers"],
    "followValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$follow$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["followValue"],
    "frame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"],
    "frameData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"],
    "frameSteps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSteps"],
    "generateLinearEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateLinearEasing"],
    "getAnimatableNone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$animatable$2d$none$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimatableNone"],
    "getAnimationMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$active$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimationMap"],
    "getComputedStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$style$2d$computed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"],
    "getDefaultTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$default$2d$transitions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultTransition"],
    "getDefaultValueType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultValueType"],
    "getFeatureDefinitions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeatureDefinitions"],
    "getFinalKeyframe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$final$2d$keyframe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFinalKeyframe"],
    "getMixer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$complex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMixer"],
    "getOptimisedAppearId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$get$2d$appear$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptimisedAppearId"],
    "getOriginIndex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$stagger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOriginIndex"],
    "getValueAsType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$get$2d$as$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueAsType"],
    "getValueTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"],
    "getVariableValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$css$2d$variables$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVariableValue"],
    "getVariantContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$get$2d$variant$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVariantContext"],
    "getViewAnimationLayerInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$layer$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewAnimationLayerInfo"],
    "getViewAnimations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$view$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewAnimations"],
    "globalProjectionState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalProjectionState"],
    "has2DTranslate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has2DTranslate"],
    "hasReducedMotionListener",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasReducedMotionListener"],
    "hasScale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasScale"],
    "hasTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTransform"],
    "hex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hex"],
    "hover",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$hover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hover"],
    "hsla",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsla"],
    "hslaToRgba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2d$to$2d$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hslaToRgba"],
    "inertia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$inertia$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inertia"],
    "initPrefersReducedMotion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initPrefersReducedMotion"],
    "interpolate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"],
    "invisibleValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$visibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invisibleValues"],
    "isAnimationControls",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAnimationControls"],
    "isCSSVariableName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVariableName"],
    "isCSSVariableToken",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVariableToken"],
    "isControllingVariants",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$controlling$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isControllingVariants"],
    "isDeltaZero",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDeltaZero"],
    "isDragActive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragActive"],
    "isDragging",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"],
    "isElementKeyboardAccessible",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$is$2d$keyboard$2d$accessible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElementKeyboardAccessible"],
    "isElementTextInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$is$2d$keyboard$2d$accessible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElementTextInput"],
    "isForcedMotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$forced$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isForcedMotionValue"],
    "isGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGenerator"],
    "isHTMLElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"],
    "isKeyframesTarget",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$keyframes$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyframesTarget"],
    "isMotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"],
    "isNear",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNear"],
    "isNodeOrChild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeOrChild"],
    "isPrimaryPointer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimaryPointer"],
    "isSVGElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"],
    "isSVGSVGElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGSVGElement"],
    "isSVGTag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$is$2d$svg$2d$tag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGTag"],
    "isTransitionDefined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$transition$2d$defined$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTransitionDefined"],
    "isVariantLabel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$variant$2d$label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVariantLabel"],
    "isVariantNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$controlling$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVariantNode"],
    "isWaapiSupportedEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$is$2d$supported$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWaapiSupportedEasing"],
    "isWillChangeMotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$will$2d$change$2f$is$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWillChangeMotionValue"],
    "keyframes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"],
    "makeAnimationInstant",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$make$2d$animation$2d$instant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeAnimationInstant"],
    "mapEasingToNativeEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$map$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapEasingToNativeEasing"],
    "mapValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$map$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapValue"],
    "maxGeneratorDuration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxGeneratorDuration"],
    "measurePageBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$measure$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["measurePageBox"],
    "measureViewportBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$measure$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["measureViewportBox"],
    "microtask",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microtask"],
    "mix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mix"],
    "mixArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$complex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixArray"],
    "mixColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"],
    "mixComplex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$complex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixComplex"],
    "mixImmediate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$immediate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixImmediate"],
    "mixLinearColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixLinearColor"],
    "mixNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"],
    "mixObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$complex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixObject"],
    "mixValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$animation$2f$mix$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixValues"],
    "mixVisibility",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$visibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixVisibility"],
    "motionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"],
    "nodeGroup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeGroup"],
    "number",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
    "numberValueTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberValueTypes"],
    "observeTimeline",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeTimeline"],
    "optimizedAppearDataAttribute",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$data$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimizedAppearDataAttribute"],
    "optimizedAppearDataId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$data$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimizedAppearDataId"],
    "parseAnimateLayoutArgs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$layout$2f$LayoutAnimationBuilder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAnimateLayoutArgs"],
    "parseCSSVariable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$css$2d$variables$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCSSVariable"],
    "parseValueFromTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$parse$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseValueFromTransform"],
    "percent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percent"],
    "pixelsToPercent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$border$2d$radius$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pixelsToPercent"],
    "positionalKeys",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$position$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["positionalKeys"],
    "prefersReducedMotion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"],
    "press",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["press"],
    "progressPercentage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressPercentage"],
    "propEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$prop$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propEffect"],
    "propagateDirtyNodes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$create$2d$projection$2d$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propagateDirtyNodes"],
    "px",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    "readTransformValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$parse$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readTransformValue"],
    "recordStats",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordStats"],
    "removeAxisDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$remove$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeAxisDelta"],
    "removeAxisTransforms",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$remove$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeAxisTransforms"],
    "removeBoxTransforms",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$remove$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeBoxTransforms"],
    "removePointDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$remove$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePointDelta"],
    "renderHTML",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$render$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderHTML"],
    "renderSVG",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$render$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderSVG"],
    "resize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resize"],
    "resolveElements",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"],
    "resolveMotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$resolve$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMotionValue"],
    "resolveTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$resolve$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveTransition"],
    "resolveVariant",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$dynamic$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariant"],
    "resolveVariantFromProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariantFromProps"],
    "rgbUnit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbUnit"],
    "rgba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"],
    "rootProjectionNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rootProjectionNode"],
    "scale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"],
    "scaleCorrectors",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$correction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleCorrectors"],
    "scalePoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalePoint"],
    "scrapeHTMLMotionValuesFromProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrapeMotionValuesFromProps"],
    "scrapeSVGMotionValuesFromProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrapeMotionValuesFromProps"],
    "setDragLock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$set$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDragLock"],
    "setFeatureDefinitions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFeatureDefinitions"],
    "setStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$style$2d$set$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStyle"],
    "setTarget",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTarget"],
    "spring",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"],
    "springValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$spring$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springValue"],
    "stagger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$stagger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
    "startWaapiAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$start$2d$waapi$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startWaapiAnimation"],
    "statsBuffer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"],
    "styleEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$style$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleEffect"],
    "supportedWaapiEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$supported$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportedWaapiEasing"],
    "supportsBrowserAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$supports$2f$waapi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsBrowserAnimation"],
    "supportsFlags",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$flags$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsFlags"],
    "supportsLinearEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsLinearEasing"],
    "supportsPartialKeyframes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$supports$2f$partial$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsPartialKeyframes"],
    "supportsScrollTimeline",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsScrollTimeline"],
    "svgEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$svg$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["svgEffect"],
    "sync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$index$2d$legacy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sync"],
    "testValueType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$test$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testValueType"],
    "time",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"],
    "transform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"],
    "transformAxis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformAxis"],
    "transformBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformBox"],
    "transformBoxPoints",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformBoxPoints"],
    "transformPropOrder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPropOrder"],
    "transformProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformProps"],
    "transformValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$transform$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformValue"],
    "transformValueTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformValueTypes"],
    "translateAxis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateAxis"],
    "updateMotionValuesFromProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMotionValuesFromProps"],
    "variantPriorityOrder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$variant$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variantPriorityOrder"],
    "variantProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$variant$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variantProps"],
    "vh",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vh"],
    "visualElementStore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"],
    "vw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vw"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$AsyncMotionValueAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/GroupAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimationWithThen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/JSAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimationExtended$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimationWrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/NativeAnimationWrapper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$active$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/utils/active-animations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$calc$2d$child$2d$stagger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$css$2d$variables$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$default$2d$transitions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$final$2d$keyframe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/utils/get-final-keyframe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$resolve$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$css$2d$variable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$transition$2d$defined$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$make$2d$animation$2d$instant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$variant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$data$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/optimized-appear/data-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$get$2d$appear$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$inertia$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/generators/inertia.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/generators/spring/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$DOMKeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$KeyframesResolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$fill$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$apply$2d$px$2d$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/keyframes/utils/apply-px-defaults.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$fill$2d$wildcards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$is$2d$supported$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/easing/is-supported.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$map$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$easing$2f$supported$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$start$2d$waapi$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$supports$2f$partial$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/supports/partial-keyframes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$supports$2f$waapi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$accelerated$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$apply$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$attr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/attr/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$prop$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/prop/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$style$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/style/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$effects$2f$svg$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/effects/svg/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$batcher$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/batcher.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/microtask.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$sync$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/sync-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$set$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$hover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/gestures/hover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/gestures/press/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$is$2d$keyboard$2d$accessible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$parse$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$style$2d$computed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/dom/style-computed.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$style$2d$set$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/dom/style-set.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$keyframes$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$position$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/keys-position.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/resize/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/scroll/observe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/stats/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$animation$2d$count$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/stats/animation-count.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$stats$2f$buffer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/stats/buffer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/interpolate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/is-html-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/mix/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/mix/color.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$complex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/mix/complex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$immediate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/mix/immediate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$visibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/mix/visibility.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$stagger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/stagger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$flags$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/supports/flags.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$follow$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/follow-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$map$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/map-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$spring$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/spring-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$transform$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/transform-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/color/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/color/hex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/color/hsla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$hsla$2d$to$2d$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$color$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/color/rgba.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$complex$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/complex/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$dimensions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/dimensions.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/maps/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$maps$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/maps/transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$numbers$2f$units$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$test$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/test.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$animatable$2d$none$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$find$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/utils/find.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$types$2f$utils$2f$get$2d$as$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$will$2d$change$2f$add$2d$will$2d$change$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$will$2d$change$2f$is$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/will-change/is.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$layer$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/utils/get-layer-info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$view$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/view/utils/get-view-animations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$DOMVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/dom/DOMVisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/Feature.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$HTMLVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$object$2f$ObjectVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/object/ObjectVisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$SVGVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/VisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$animation$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/animation-state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$get$2d$variant$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/get-variant-context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$controlling$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$forced$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$variant$2d$label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/motion-values.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$dynamic$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/setters.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$variant$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/variant-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/reduced-motion/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/copy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$apply$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$remove$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/models.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$each$2d$axis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$has$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$measure$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/utils/measure.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$border$2d$radius$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$box$2d$shadow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/styles/scale-box-shadow.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/styles/transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$animation$2f$mix$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$animate$2f$single$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/animate/single-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/events/add-dom-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$compare$2d$by$2d$depth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$utils$2f$flat$2d$tree$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/utils/flat-tree.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$delay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/delay.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$resolve$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$create$2d$projection$2d$node$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/create-projection-node.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$DocumentProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$shared$2f$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/shared/stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$camel$2d$to$2d$dash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$build$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$build$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$render$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/html/utils/render.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$build$2d$attrs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$camel$2d$case$2d$attrs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$is$2d$svg$2d$tag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/svg/utils/is-svg-tag.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$path$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/svg/utils/path.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$render$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/svg/utils/render.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$layout$2f$LayoutAnimationBuilder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/layout/LayoutAnimationBuilder.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$index$2d$legacy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/index-legacy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$correction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs [app-client] (ecmascript)");
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUnmountEffect",
    ()=>useUnmountEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
function useUnmountEffect(callback) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUnmountEffect.useEffect": ()=>({
                "useUnmountEffect.useEffect": ()=>callback()
            })["useUnmountEffect.useEffect"]
    }["useUnmountEffect.useEffect"], []);
}
;
 //# sourceMappingURL=use-unmount-effect.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/features-max.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "domMax",
    ()=>domMax
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$drag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/features/drag.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$layout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/features/layout.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/features-animation.mjs [app-client] (ecmascript)");
"use client";
;
;
;
/**
 * @public
 */ const domMax = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domAnimation"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$drag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drag"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$layout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout"]
};
;
 //# sourceMappingURL=features-max.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/features-min.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "domMin",
    ()=>domMin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/features/animations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs [app-client] (ecmascript)");
"use client";
;
;
/**
 * @public
 */ const domMin = {
    renderer: __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDomVisualElement"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animations"]
};
;
 //# sourceMappingURL=features-min.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMotionValueEvent",
    ()=>useMotionValueEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
function useMotionValueEvent(value, event, callback) {
    /**
     * useInsertionEffect will create subscriptions before any other
     * effects will run. Effects run upwards through the tree so it
     * can be that binding a useLayoutEffect higher up the tree can
     * miss changes from lower down the tree.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"])({
        "useMotionValueEvent.useInsertionEffect": ()=>value.on(event, callback)
    }["useMotionValueEvent.useInsertionEffect"], [
        value,
        event,
        callback
    ]);
}
;
 //# sourceMappingURL=use-motion-value-event.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createScrollInfo",
    ()=>createScrollInfo,
    "updateScrollInfo",
    ()=>updateScrollInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-client] (ecmascript)");
;
/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */ const maxElapsed = 50;
const createAxisInfo = ()=>({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    });
const createScrollInfo = ()=>({
        time: 0,
        x: createAxisInfo(),
        y: createAxisInfo()
    });
const keys = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function updateAxisInfo(element, axisName, info, time) {
    const axis = info[axisName];
    const { length, position } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = element[`scroll${position}`];
    axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(0, axis.scrollLength, axis.current);
    const elapsed = time - prevTime;
    axis.velocity = elapsed > maxElapsed ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["velocityPerSecond"])(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
    updateAxisInfo(element, "x", info, time);
    updateAxisInfo(element, "y", info, time);
    info.time = time;
}
;
 //# sourceMappingURL=info.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcInset",
    ()=>calcInset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/is-html-element.mjs [app-client] (ecmascript)");
;
function calcInset(element, container) {
    const inset = {
        x: 0,
        y: 0
    };
    let current = element;
    while(current && current !== container){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(current)) {
            inset.x += current.offsetLeft;
            inset.y += current.offsetTop;
            current = current.offsetParent;
        } else if (current.tagName === "svg") {
            /**
             * This isn't an ideal approach to measuring the offset of <svg /> tags.
             * It would be preferable, given they behave like HTMLElements in most ways
             * to use offsetLeft/Top. But these don't exist on <svg />. Likewise we
             * can't use .getBBox() like most SVG elements as these provide the offset
             * relative to the SVG itself, which for <svg /> is usually 0x0.
             */ const svgBoundingBox = current.getBoundingClientRect();
            current = current.parentElement;
            const parentBoundingBox = current.getBoundingClientRect();
            inset.x += svgBoundingBox.left - parentBoundingBox.left;
            inset.y += svgBoundingBox.top - parentBoundingBox.top;
        } else if (current instanceof SVGGraphicsElement) {
            const { x, y } = current.getBBox();
            inset.x += x;
            inset.y += y;
            let svg = null;
            let parent = current.parentNode;
            while(!svg){
                if (parent.tagName === "svg") {
                    svg = parent;
                }
                parent = current.parentNode;
            }
            current = svg;
        } else {
            break;
        }
    }
    return inset;
}
;
 //# sourceMappingURL=inset.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "namedEdges",
    ()=>namedEdges,
    "resolveEdge",
    ()=>resolveEdge
]);
const namedEdges = {
    start: 0,
    center: 0.5,
    end: 1
};
function resolveEdge(edge, length, inset = 0) {
    let delta = 0;
    /**
     * If we have this edge defined as a preset, replace the definition
     * with the numerical value.
     */ if (edge in namedEdges) {
        edge = namedEdges[edge];
    }
    /**
     * Handle unit values
     */ if (typeof edge === "string") {
        const asNumber = parseFloat(edge);
        if (edge.endsWith("px")) {
            delta = asNumber;
        } else if (edge.endsWith("%")) {
            edge = asNumber / 100;
        } else if (edge.endsWith("vw")) {
            delta = asNumber / 100 * document.documentElement.clientWidth;
        } else if (edge.endsWith("vh")) {
            delta = asNumber / 100 * document.documentElement.clientHeight;
        } else {
            edge = asNumber;
        }
    }
    /**
     * If the edge is defined as a number, handle as a progress value.
     */ if (typeof edge === "number") {
        delta = length * edge;
    }
    return inset + delta;
}
;
 //# sourceMappingURL=edge.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveOffset",
    ()=>resolveOffset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs [app-client] (ecmascript)");
;
const defaultOffset = [
    0,
    0
];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
    let targetPoint = 0;
    let containerPoint = 0;
    if (typeof offset === "number") {
        /**
         * If we're provided offset: [0, 0.5, 1] then each number x should become
         * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
         * and container etc.
         */ offsetDefinition = [
            offset,
            offset
        ];
    } else if (typeof offset === "string") {
        offset = offset.trim();
        if (offset.includes(" ")) {
            offsetDefinition = offset.split(" ");
        } else {
            /**
             * If we're provided a definition like "100px" then we want to apply
             * that only to the top of the target point, leaving the container at 0.
             * Whereas a named offset like "end" should be applied to both.
             */ offsetDefinition = [
                offset,
                __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedEdges"][offset] ? offset : `0`
            ];
        }
    }
    targetPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEdge"])(offsetDefinition[0], targetLength, targetInset);
    containerPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEdge"])(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
}
;
 //# sourceMappingURL=offset.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollOffset",
    ()=>ScrollOffset
]);
const ScrollOffset = {
    All: [
        [
            0,
            0
        ],
        [
            1,
            1
        ]
    ]
};
;
 //# sourceMappingURL=presets.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveOffsets",
    ()=>resolveOffsets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/interpolate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$inset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$offset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs [app-client] (ecmascript)");
;
;
;
;
;
const point = {
    x: 0,
    y: 0
};
function getTargetSize(target) {
    return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : {
        width: target.clientWidth,
        height: target.clientHeight
    };
}
function resolveOffsets(container, info, options) {
    const { offset: offsetDefinition = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollOffset"].All } = options;
    const { target = container, axis = "y" } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$inset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcInset"])(target, container) : point;
    /**
     * Measure the target and container. If they're the same thing then we
     * use the container's scrollWidth/Height as the target, from there
     * all other calculations can remain the same.
     */ const targetSize = target === container ? {
        width: container.scrollWidth,
        height: container.scrollHeight
    } : getTargetSize(target);
    const containerSize = {
        width: container.clientWidth,
        height: container.clientHeight
    };
    /**
     * Reset the length of the resolved offset array rather than creating a new one.
     * TODO: More reusable data structures for targetSize/containerSize would also be good.
     */ info[axis].offset.length = 0;
    /**
     * Populate the offset array by resolving the user's offset definition into
     * a list of pixel scroll offets.
     */ let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for(let i = 0; i < numOffsets; i++){
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$offset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOffset"])(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
        if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
            hasChanged = true;
        }
        info[axis].offset[i] = offset;
    }
    /**
     * If the pixel scroll offsets have changed, create a new interpolator function
     * to map scroll value into a progress.
     */ if (hasChanged) {
        info[axis].interpolate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(info[axis].offset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOffset"])(offsetDefinition), {
            clamp: false
        });
        info[axis].interpolatorOffsets = [
            ...info[axis].offset
        ];
    }
    info[axis].progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0, 1, info[axis].interpolate(info[axis].current));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOnScrollHandler",
    ()=>createOnScrollHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs [app-client] (ecmascript)");
;
;
;
function measure(container, target = container, info) {
    /**
     * Find inset of target within scrollable container
     */ info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
        let node = target;
        while(node && node !== container){
            info.x.targetOffset += node.offsetLeft;
            info.y.targetOffset += node.offsetTop;
            node = node.offsetParent;
        }
    }
    info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
    /**
     * In development mode ensure scroll containers aren't position: static as this makes
     * it difficult to measure their relative positions.
     */ if ("TURBOPACK compile-time truthy", 1) {
        if (container && target && target !== container) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"])(getComputedStyle(container).position !== "static", "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.");
        }
    }
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
    return {
        measure: (time)=>{
            measure(element, options.target, info);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateScrollInfo"])(element, info, time);
            if (options.offset || options.target) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOffsets"])(element, info, options);
            }
        },
        notify: ()=>onScroll(info)
    };
}
;
 //# sourceMappingURL=on-scroll-handler.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrollInfo",
    ()=>scrollInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/resize/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$on$2d$scroll$2d$handler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs [app-client] (ecmascript)");
;
;
;
;
const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const scrollSize = new WeakMap();
const dimensionCheckProcesses = new WeakMap();
const getEventTarget = (element)=>element === document.scrollingElement ? window : element;
function scrollInfo(onScroll, { container = document.scrollingElement, trackContentSize = false, ...options } = {}) {
    if (!container) return __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    let containerHandlers = onScrollHandlers.get(container);
    /**
     * Get the onScroll handlers for this container.
     * If one isn't found, create a new one.
     */ if (!containerHandlers) {
        containerHandlers = new Set();
        onScrollHandlers.set(container, containerHandlers);
    }
    /**
     * Create a new onScroll handler for the provided callback.
     */ const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScrollInfo"])();
    const containerHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$on$2d$scroll$2d$handler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOnScrollHandler"])(container, onScroll, info, options);
    containerHandlers.add(containerHandler);
    /**
     * Check if there's a scroll event listener for this container.
     * If not, create one.
     */ if (!scrollListeners.has(container)) {
        const measureAll = ()=>{
            for (const handler of containerHandlers){
                handler.measure(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].timestamp);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].preUpdate(notifyAll);
        };
        const notifyAll = ()=>{
            for (const handler of containerHandlers){
                handler.notify();
            }
        };
        const listener = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].read(measureAll);
        scrollListeners.set(container, listener);
        const target = getEventTarget(container);
        window.addEventListener("resize", listener);
        if (container !== document.documentElement) {
            resizeListeners.set(container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resize"])(container, listener));
        }
        target.addEventListener("scroll", listener);
        listener();
    }
    /**
     * Enable content size tracking if requested and not already enabled.
     */ if (trackContentSize && !dimensionCheckProcesses.has(container)) {
        const listener = scrollListeners.get(container);
        // Store initial scroll dimensions (object is reused to avoid allocation)
        const size = {
            width: container.scrollWidth,
            height: container.scrollHeight
        };
        scrollSize.set(container, size);
        // Add frame-based scroll dimension checking to detect content changes
        const checkScrollDimensions = ()=>{
            const newWidth = container.scrollWidth;
            const newHeight = container.scrollHeight;
            if (size.width !== newWidth || size.height !== newHeight) {
                listener();
                size.width = newWidth;
                size.height = newHeight;
            }
        };
        // Schedule with keepAlive=true to run every frame
        const dimensionCheckProcess = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].read(checkScrollDimensions, true);
        dimensionCheckProcesses.set(container, dimensionCheckProcess);
    }
    const listener = scrollListeners.get(container);
    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].read(listener, false, true);
    return ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(listener);
        /**
         * Check if we even have any handlers for this container.
         */ const currentHandlers = onScrollHandlers.get(container);
        if (!currentHandlers) return;
        currentHandlers.delete(containerHandler);
        if (currentHandlers.size) return;
        /**
         * If no more handlers, remove the scroll listener too.
         */ const scrollListener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (scrollListener) {
            getEventTarget(container).removeEventListener("scroll", scrollListener);
            resizeListeners.get(container)?.();
            window.removeEventListener("resize", scrollListener);
        }
        // Clean up scroll dimension checking
        const dimensionCheckProcess = dimensionCheckProcesses.get(container);
        if (dimensionCheckProcess) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(dimensionCheckProcess);
            dimensionCheckProcesses.delete(container);
        }
        scrollSize.delete(container);
    };
}
;
 //# sourceMappingURL=track.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/utils/can-use-native-timeline.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canUseNativeTimeline",
    ()=>canUseNativeTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-client] (ecmascript)");
;
function canUseNativeTimeline(target) {
    return typeof window !== "undefined" && !target && (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsScrollTimeline"])();
}
;
 //# sourceMappingURL=can-use-native-timeline.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimeline",
    ()=>getTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$can$2d$use$2d$native$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/utils/can-use-native-timeline.mjs [app-client] (ecmascript)");
;
;
const timelineCache = new Map();
function scrollTimelineFallback(options) {
    const currentTime = {
        value: 0
    };
    const cancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollInfo"])((info)=>{
        currentTime.value = info[options.axis].progress * 100;
    }, options);
    return {
        currentTime,
        cancel
    };
}
function getTimeline({ source, container, ...options }) {
    const { axis } = options;
    if (source) container = source;
    const containerCache = timelineCache.get(container) ?? new Map();
    timelineCache.set(container, containerCache);
    const targetKey = options.target ?? "self";
    const targetCache = containerCache.get(targetKey) ?? {};
    const axisKey = axis + (options.offset ?? []).join(",");
    if (!targetCache[axisKey]) {
        targetCache[axisKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$can$2d$use$2d$native$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseNativeTimeline"])(options.target) ? new ScrollTimeline({
            source: container,
            axis
        }) : scrollTimelineFallback({
            container,
            ...options
        });
    }
    return targetCache[axisKey];
}
;
 //# sourceMappingURL=get-timeline.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/attach-animation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachToAnimation",
    ()=>attachToAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/scroll/observe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$get$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs [app-client] (ecmascript)");
;
;
function attachToAnimation(animation, options) {
    const timeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$get$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeline"])(options);
    return animation.attachTimeline({
        timeline: options.target ? undefined : timeline,
        observe: (valueAnimation)=>{
            valueAnimation.pause();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeTimeline"])((progress)=>{
                valueAnimation.time = valueAnimation.iterationDuration * progress;
            }, timeline);
        }
    });
}
;
 //# sourceMappingURL=attach-animation.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/attach-function.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachToFunction",
    ()=>attachToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/scroll/observe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$get$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs [app-client] (ecmascript)");
;
;
;
/**
 * If the onScroll function has two arguments, it's expecting
 * more specific information about the scroll from scrollInfo.
 */ function isOnScrollWithInfo(onScroll) {
    return onScroll.length === 2;
}
function attachToFunction(onScroll, options) {
    if (isOnScrollWithInfo(onScroll)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollInfo"])((info)=>{
            onScroll(info[options.axis].progress, info);
        }, options);
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeTimeline"])(onScroll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$get$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeline"])(options));
    }
}
;
 //# sourceMappingURL=attach-function.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scroll",
    ()=>scroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$attach$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/attach-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$attach$2d$function$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/attach-function.mjs [app-client] (ecmascript)");
;
;
;
function scroll(onScroll, { axis = "y", container = document.scrollingElement, ...options } = {}) {
    if (!container) return __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    const optionsWithDefaults = {
        axis,
        container,
        ...options
    };
    return typeof onScroll === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$attach$2d$function$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachToFunction"])(onScroll, optionsWithDefaults) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$attach$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachToAnimation"])(onScroll, optionsWithDefaults);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScroll",
    ()=>useScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$can$2d$use$2d$native$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/utils/can-use-native-timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const createScrollMotionValues = ()=>({
        scrollX: (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0),
        scrollY: (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0),
        scrollXProgress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0),
        scrollYProgress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0)
    });
const isRefPending = (ref)=>{
    if (!ref) return false;
    return !ref.current;
};
function makeAccelerateConfig(axis, options, container) {
    return {
        factory: (animation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scroll"])(animation, {
                ...options,
                axis,
                container
            }),
        times: [
            0,
            1
        ],
        keyframes: [
            0,
            1
        ],
        ease: (v)=>v,
        duration: 1
    };
}
function useScroll({ container, target, ...options } = {}) {
    const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])(createScrollMotionValues);
    if (!target && (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$can$2d$use$2d$native$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseNativeTimeline"])()) {
        const resolvedContainer = container?.current || undefined;
        values.scrollXProgress.accelerate = makeAccelerateConfig("x", options, resolvedContainer);
        values.scrollYProgress.accelerate = makeAccelerateConfig("y", options, resolvedContainer);
    }
    const scrollAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const needsStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScroll.useCallback[start]": ()=>{
            scrollAnimation.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scroll"])({
                "useScroll.useCallback[start]": (_progress, { x, y })=>{
                    values.scrollX.set(x.current);
                    values.scrollXProgress.set(x.progress);
                    values.scrollY.set(y.current);
                    values.scrollYProgress.set(y.progress);
                }
            }["useScroll.useCallback[start]"], {
                ...options,
                container: container?.current || undefined,
                target: target?.current || undefined
            });
            return ({
                "useScroll.useCallback[start]": ()=>{
                    scrollAnimation.current?.();
                }
            })["useScroll.useCallback[start]"];
        }
    }["useScroll.useCallback[start]"], [
        container,
        target,
        JSON.stringify(options.offset)
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useScroll.useIsomorphicLayoutEffect": ()=>{
            needsStart.current = false;
            if (isRefPending(container) || isRefPending(target)) {
                needsStart.current = true;
                return;
            } else {
                return start();
            }
        }
    }["useScroll.useIsomorphicLayoutEffect"], [
        start
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScroll.useEffect": ()=>{
            if (needsStart.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!isRefPending(container), "Container ref is defined but not hydrated", "use-scroll-ref");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!isRefPending(target), "Target ref is defined but not hydrated", "use-scroll-ref");
                return start();
            } else {
                return;
            }
        }
    }["useScroll.useEffect"], [
        start
    ]);
    return values;
}
;
 //# sourceMappingURL=use-scroll.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/scroll/use-element-scroll.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useElementScroll",
    ()=>useElementScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
;
;
/**
 * @deprecated useElementScroll is deprecated. Convert to useScroll({ container: ref })
 */ function useElementScroll(ref) {
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"])(false, "useElementScroll is deprecated. Convert to useScroll({ container: ref }).");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        container: ref
    });
}
;
 //# sourceMappingURL=use-element-scroll.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useViewportScroll",
    ()=>useViewportScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
;
;
/**
 * @deprecated useViewportScroll is deprecated. Convert to useScroll()
 */ function useViewportScroll() {
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"])(false, "useViewportScroll is deprecated. Convert to useScroll().");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
}
;
 //# sourceMappingURL=use-viewport-scroll.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-motion-template.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMotionTemplate",
    ()=>useMotionTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-combine-values.mjs [app-client] (ecmascript)");
"use client";
;
;
/**
 * Combine multiple motion values into a new one using a string template literal.
 *
 * ```jsx
 * import {
 *   motion,
 *   useSpring,
 *   useMotionValue,
 *   useMotionTemplate
 * } from "framer-motion"
 *
 * function Component() {
 *   const shadowX = useSpring(0)
 *   const shadowY = useMotionValue(0)
 *   const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))`
 *
 *   return <motion.div style={{ filter: shadow }} />
 * }
 * ```
 *
 * @public
 */ function useMotionTemplate(fragments, ...values) {
    /**
     * Create a function that will build a string from the latest motion values.
     */ const numFragments = fragments.length;
    function buildValue() {
        let output = ``;
        for(let i = 0; i < numFragments; i++){
            output += fragments[i];
            const value = values[i];
            if (value) {
                output += (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(value) ? value.get() : value;
            }
        }
        return output;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCombineMotionValues"])(values.filter(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"]), buildValue);
}
;
 //# sourceMappingURL=use-motion-template.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-follow-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFollowValue",
    ()=>useFollowValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$follow$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/follow-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function useFollowValue(source, options = {}) {
    const { isStatic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    const getFromSource = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(source) ? source.get() : source;
    // isStatic will never change, allowing early hooks return
    if (isStatic) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(getFromSource);
    }
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(getFromSource());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"])({
        "useFollowValue.useInsertionEffect": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$follow$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachFollow"])(value, source, options);
        }
    }["useFollowValue.useInsertionEffect"], [
        value,
        JSON.stringify(options)
    ]);
    return value;
}
;
 //# sourceMappingURL=use-follow-value.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpring",
    ()=>useSpring
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$follow$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-follow-value.mjs [app-client] (ecmascript)");
"use client";
;
function useSpring(source, options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$follow$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFollowValue"])(source, {
        type: "spring",
        ...options
    });
}
;
 //# sourceMappingURL=use-spring.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnimationFrame",
    ()=>useAnimationFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function useAnimationFrame(callback) {
    const initialTimestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const { isStatic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAnimationFrame.useEffect": ()=>{
            if (isStatic) return;
            const provideTimeSinceStart = {
                "useAnimationFrame.useEffect.provideTimeSinceStart": ({ timestamp, delta })=>{
                    if (!initialTimestamp.current) initialTimestamp.current = timestamp;
                    callback(timestamp - initialTimestamp.current, delta);
                }
            }["useAnimationFrame.useEffect.provideTimeSinceStart"];
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(provideTimeSinceStart, true);
            return ({
                "useAnimationFrame.useEffect": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(provideTimeSinceStart)
            })["useAnimationFrame.useEffect"];
        }
    }["useAnimationFrame.useEffect"], [
        callback
    ]);
}
;
 //# sourceMappingURL=use-animation-frame.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-time.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTime",
    ()=>useTime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
"use client";
;
;
function useTime() {
    const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"])({
        "useTime.useAnimationFrame": (t)=>time.set(t)
    }["useTime.useAnimationFrame"]);
    return time;
}
;
 //# sourceMappingURL=use-time.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-velocity.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVelocity",
    ()=>useVelocity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
"use client";
;
;
;
/**
 * Creates a `MotionValue` that updates when the velocity of the provided `MotionValue` changes.
 *
 * ```javascript
 * const x = useMotionValue(0)
 * const xVelocity = useVelocity(x)
 * const xAcceleration = useVelocity(xVelocity)
 * ```
 *
 * @public
 */ function useVelocity(value) {
    const velocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(value.getVelocity());
    const updateVelocity = ()=>{
        const latest = value.getVelocity();
        velocity.set(latest);
        /**
         * If we still have velocity, schedule an update for the next frame
         * to keep checking until it is zero.
         */ if (latest) __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(updateVelocity);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(value, "change", {
        "useVelocity.useMotionValueEvent": ()=>{
            // Schedule an update to this value at the end of the current frame.
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(updateVelocity, false, true);
        }
    }["useVelocity.useMotionValueEvent"]);
    return velocity;
}
;
 //# sourceMappingURL=use-velocity.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReducedMotion",
    ()=>useReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/reduced-motion/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
/**
 * A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
 *
 * This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
 * `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
 *
 * It will actively respond to changes and re-render your components with the latest setting.
 *
 * ```jsx
 * export function Sidebar({ isOpen }) {
 *   const shouldReduceMotion = useReducedMotion()
 *   const closedX = shouldReduceMotion ? 0 : "-100%"
 *
 *   return (
 *     <motion.div animate={{
 *       opacity: isOpen ? 1 : 0,
 *       x: isOpen ? 0 : closedX
 *     }} />
 *   )
 * }
 * ```
 *
 * @return boolean
 *
 * @public
 */ function useReducedMotion() {
    /**
     * Lazy initialisation of prefersReducedMotion
     */ !__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasReducedMotionListener"].current && (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initPrefersReducedMotion"])();
    const [shouldReduceMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$reduced$2d$motion$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"].current);
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"])(shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled");
    }
    /**
     * TODO See if people miss automatically updating shouldReduceMotion setting
     */ return shouldReduceMotion;
}
;
 //# sourceMappingURL=use-reduced-motion.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion-config.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReducedMotionConfig",
    ()=>useReducedMotionConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function useReducedMotionConfig() {
    const reducedMotionPreference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const { reducedMotion } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    if (reducedMotion === "never") {
        return false;
    } else if (reducedMotion === "always") {
        return true;
    } else {
        return reducedMotionPreference;
    }
}
;
 //# sourceMappingURL=use-reduced-motion-config.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/wrap.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrap",
    ()=>wrap
]);
const wrap = (min, max, v)=>{
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};
;
 //# sourceMappingURL=wrap.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/steps.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "steps",
    ()=>steps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
;
function steps(numSteps, direction = "end") {
    return (progress)=>{
        progress = direction === "end" ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        const expanded = progress * numSteps;
        const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0, 1, rounded / numSteps);
    };
}
;
 //# sourceMappingURL=steps.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEasingForSegment",
    ()=>getEasingForSegment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/wrap.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-client] (ecmascript)");
;
;
function getEasingForSegment(easing, i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingArray"])(easing) ? easing[(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrap"])(0, easing.length, i)] : easing;
}
;
 //# sourceMappingURL=get-easing-for-segment.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionGlobalConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"],
    "SubscriptionManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$subscription$2d$manager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscriptionManager"],
    "addUniqueItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"],
    "anticipate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anticipate"],
    "backIn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"],
    "backInOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backInOut"],
    "backOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backOut"],
    "circIn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circIn"],
    "circInOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circInOut"],
    "circOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circOut"],
    "clamp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"],
    "cubicBezier",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"],
    "easeIn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeIn"],
    "easeInOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"],
    "easeOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"],
    "easingDefinitionToFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easingDefinitionToFunction"],
    "getEasingForSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEasingForSegment"],
    "hasWarned",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasWarned"],
    "invariant",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"],
    "isBezierDefinition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBezierDefinition"],
    "isEasingArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingArray"],
    "isNumericalString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$numerical$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumericalString"],
    "isObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"],
    "isZeroValueString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$zero$2d$value$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isZeroValueString"],
    "memo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"],
    "millisecondsToSeconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"],
    "mirrorEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"],
    "moveItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveItem"],
    "noop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"],
    "pipe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"],
    "progress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"],
    "removeItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"],
    "reverseEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"],
    "secondsToMilliseconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"],
    "steps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$steps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steps"],
    "velocityPerSecond",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["velocityPerSecond"],
    "warnOnce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"],
    "warning",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warning"],
    "wrap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrap"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$numerical$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/is-object.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$is$2d$zero$2d$value$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/pipe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$subscription$2d$manager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/wrap.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/back.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/circ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$steps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/steps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-client] (ecmascript)");
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animationControls",
    ()=>animationControls,
    "setValues",
    ()=>setValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/setters.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
;
;
function stopAnimation(visualElement) {
    visualElement.values.forEach((value)=>value.stop());
}
function setVariants(visualElement, variantLabels) {
    const reversedLabels = [
        ...variantLabels
    ].reverse();
    reversedLabels.forEach((key)=>{
        const variant = visualElement.getVariant(key);
        variant && (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTarget"])(visualElement, variant);
        if (visualElement.variantChildren) {
            visualElement.variantChildren.forEach((child)=>{
                setVariants(child, variantLabels);
            });
        }
    });
}
function setValues(visualElement, definition) {
    if (Array.isArray(definition)) {
        return setVariants(visualElement, definition);
    } else if (typeof definition === "string") {
        return setVariants(visualElement, [
            definition
        ]);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTarget"])(visualElement, definition);
    }
}
/**
 * @public
 */ function animationControls() {
    /**
     * Track whether the host component has mounted.
     */ let hasMounted = false;
    /**
     * A collection of linked component animation controls.
     */ const subscribers = new Set();
    const controls = {
        subscribe (visualElement) {
            subscribers.add(visualElement);
            return ()=>void subscribers.delete(visualElement);
        },
        start (definition, transitionOverride) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(hasMounted, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
            const animations = [];
            subscribers.forEach((visualElement)=>{
                animations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateVisualElement"])(visualElement, definition, {
                    transitionOverride
                }));
            });
            return Promise.all(animations);
        },
        set (definition) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
            return subscribers.forEach((visualElement)=>{
                setValues(visualElement, definition);
            });
        },
        stop () {
            subscribers.forEach((visualElement)=>{
                stopAnimation(visualElement);
            });
        },
        mount () {
            hasMounted = true;
            return ()=>{
                hasMounted = false;
                controls.stop();
            };
        }
    };
    return controls;
}
;
 //# sourceMappingURL=animation-controls.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDOMKeyframes",
    ()=>isDOMKeyframes
]);
function isDOMKeyframes(keyframes) {
    return typeof keyframes === "object" && !Array.isArray(keyframes);
}
;
 //# sourceMappingURL=is-dom-keyframes.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveSubjects",
    ()=>resolveSubjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$dom$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs [app-client] (ecmascript)");
;
;
function resolveSubjects(subject, keyframes, scope, selectorCache) {
    if (subject == null) {
        return [];
    }
    if (typeof subject === "string" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$dom$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMKeyframes"])(keyframes)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(subject, scope, selectorCache);
    } else if (subject instanceof NodeList) {
        return Array.from(subject);
    } else if (Array.isArray(subject)) {
        return subject.filter((s)=>s != null);
    } else {
        return [
            subject
        ];
    }
}
;
 //# sourceMappingURL=resolve-subjects.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateRepeatDuration",
    ()=>calculateRepeatDuration
]);
function calculateRepeatDuration(duration, repeat, _repeatDelay) {
    return duration * (repeat + 1);
}
;
 //# sourceMappingURL=calc-repeat-duration.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcNextTime",
    ()=>calcNextTime
]);
/**
 * Given a absolute or relative time definition and current/prev time state of the sequence,
 * calculate an absolute time for the next keyframes.
 */ function calcNextTime(current, next, prev, labels) {
    if (typeof next === "number") {
        return next;
    } else if (next.startsWith("-") || next.startsWith("+")) {
        return Math.max(0, current + parseFloat(next));
    } else if (next === "<") {
        return prev;
    } else if (next.startsWith("<")) {
        return Math.max(0, prev + parseFloat(next.slice(1)));
    } else {
        return labels.get(next) ?? current;
    }
}
;
 //# sourceMappingURL=calc-time.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addKeyframes",
    ()=>addKeyframes,
    "eraseKeyframes",
    ()=>eraseKeyframes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/mix/number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
;
;
function eraseKeyframes(sequence, startTime, endTime) {
    for(let i = 0; i < sequence.length; i++){
        const keyframe = sequence[i];
        if (keyframe.at > startTime && keyframe.at < endTime) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(sequence, keyframe);
            // If we remove this item we have to push the pointer back one
            i--;
        }
    }
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
    /**
     * Erase every existing value between currentTime and targetTime,
     * this will essentially splice this timeline into any currently
     * defined ones.
     */ eraseKeyframes(sequence, startTime, endTime);
    for(let i = 0; i < keyframes.length; i++){
        sequence.push({
            value: keyframes[i],
            at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$mix$2f$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"])(startTime, endTime, offset[i]),
            easing: (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEasingForSegment"])(easing, i)
        });
    }
}
;
 //# sourceMappingURL=edit.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeTimes",
    ()=>normalizeTimes
]);
/**
 * Take an array of times that represent repeated keyframes. For instance
 * if we have original times of [0, 0.5, 1] then our repeated times will
 * be [0, 0.5, 1, 1, 1.5, 2]. Loop over the times and scale them back
 * down to a 0-1 scale.
 */ function normalizeTimes(times, repeat) {
    for(let i = 0; i < times.length; i++){
        times[i] = times[i] / (repeat + 1);
    }
}
;
 //# sourceMappingURL=normalize-times.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareByTime",
    ()=>compareByTime
]);
function compareByTime(a, b) {
    if (a.at === b.at) {
        if (a.value === null) return 1;
        if (b.value === null) return -1;
        return 0;
    } else {
        return a.at - b.at;
    }
}
;
 //# sourceMappingURL=sort.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/sequence/create.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAnimationsFromSequence",
    ()=>createAnimationsFromSequence,
    "getValueTransition",
    ()=>getValueTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$fill$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$resolve$2d$subjects$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$repeat$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$edit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$normalize$2d$times$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$sort$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const defaultSegmentEasing = "easeInOut";
const MAX_REPEAT = 20;
function createAnimationsFromSequence(sequence, { defaultTransition = {}, ...sequenceTransition } = {}, scope, generators) {
    const defaultDuration = defaultTransition.duration || 0.3;
    const animationDefinitions = new Map();
    const sequences = new Map();
    const elementCache = {};
    const timeLabels = new Map();
    let prevTime = 0;
    let currentTime = 0;
    let totalDuration = 0;
    /**
     * Build the timeline by mapping over the sequence array and converting
     * the definitions into keyframes and offsets with absolute time values.
     * These will later get converted into relative offsets in a second pass.
     */ for(let i = 0; i < sequence.length; i++){
        const segment = sequence[i];
        /**
         * If this is a timeline label, mark it and skip the rest of this iteration.
         */ if (typeof segment === "string") {
            timeLabels.set(segment, currentTime);
            continue;
        } else if (!Array.isArray(segment)) {
            timeLabels.set(segment.name, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcNextTime"])(currentTime, segment.at, prevTime, timeLabels));
            continue;
        }
        let [subject, keyframes, transition = {}] = segment;
        /**
         * If a relative or absolute time value has been specified we need to resolve
         * it in relation to the currentTime.
         */ if (transition.at !== undefined) {
            currentTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcNextTime"])(currentTime, transition.at, prevTime, timeLabels);
        }
        /**
         * Keep track of the maximum duration in this definition. This will be
         * applied to currentTime once the definition has been parsed.
         */ let maxDuration = 0;
        const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numSubjects = 0)=>{
            const valueKeyframesAsList = keyframesAsList(valueKeyframes);
            const { delay = 0, times = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOffset"])(valueKeyframesAsList), type = defaultTransition.type || "keyframes", repeat, repeatType, repeatDelay = 0, ...remainingTransition } = valueTransition;
            let { ease = defaultTransition.ease || "easeOut", duration } = valueTransition;
            /**
             * Resolve stagger() if defined.
             */ const calculatedDelay = typeof delay === "function" ? delay(elementIndex, numSubjects) : delay;
            /**
             * If this animation should and can use a spring, generate a spring easing function.
             */ const numKeyframes = valueKeyframesAsList.length;
            const createGenerator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGenerator"])(type) ? type : generators?.[type || "keyframes"];
            if (numKeyframes <= 2 && createGenerator) {
                /**
                 * As we're creating an easing function from a spring,
                 * ideally we want to generate it using the real distance
                 * between the two keyframes. However this isn't always
                 * possible - in these situations we use 0-100.
                 */ let absoluteDelta = 100;
                if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
                    const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
                    absoluteDelta = Math.abs(delta);
                }
                const springTransition = {
                    ...defaultTransition,
                    ...remainingTransition
                };
                if (duration !== undefined) {
                    springTransition.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(duration);
                }
                const springEasing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGeneratorEasing"])(springTransition, absoluteDelta, createGenerator);
                ease = springEasing.ease;
                duration = springEasing.duration;
            }
            duration ?? (duration = defaultDuration);
            const startTime = currentTime + calculatedDelay;
            /**
             * If there's only one time offset of 0, fill in a second with length 1
             */ if (times.length === 1 && times[0] === 0) {
                times[1] = 1;
            }
            /**
             * Fill out if offset if fewer offsets than keyframes
             */ const remainder = times.length - valueKeyframesAsList.length;
            remainder > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$fill$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillOffset"])(times, remainder);
            /**
             * If only one value has been set, ie [1], push a null to the start of
             * the keyframe array. This will let us mark a keyframe at this point
             * that will later be hydrated with the previous value.
             */ valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
            /**
             * Handle repeat options
             */ if (repeat) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(repeat < MAX_REPEAT, "Repeat count too high, must be less than 20", "repeat-count-high");
                duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$calc$2d$repeat$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateRepeatDuration"])(duration, repeat);
                const originalKeyframes = [
                    ...valueKeyframesAsList
                ];
                const originalTimes = [
                    ...times
                ];
                ease = Array.isArray(ease) ? [
                    ...ease
                ] : [
                    ease
                ];
                const originalEase = [
                    ...ease
                ];
                for(let repeatIndex = 0; repeatIndex < repeat; repeatIndex++){
                    valueKeyframesAsList.push(...originalKeyframes);
                    for(let keyframeIndex = 0; keyframeIndex < originalKeyframes.length; keyframeIndex++){
                        times.push(originalTimes[keyframeIndex] + (repeatIndex + 1));
                        ease.push(keyframeIndex === 0 ? "linear" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$get$2d$easing$2d$for$2d$segment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEasingForSegment"])(originalEase, keyframeIndex - 1));
                    }
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$normalize$2d$times$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeTimes"])(times, repeat);
            }
            const targetTime = startTime + duration;
            /**
             * Add keyframes, mapping offsets to absolute time.
             */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$edit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addKeyframes"])(valueSequence, valueKeyframesAsList, ease, times, startTime, targetTime);
            maxDuration = Math.max(calculatedDelay + duration, maxDuration);
            totalDuration = Math.max(targetTime, totalDuration);
        };
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(subject)) {
            const subjectSequence = getSubjectSequence(subject, sequences);
            resolveValueSequence(keyframes, transition, getValueSequence("default", subjectSequence));
        } else {
            const subjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$resolve$2d$subjects$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSubjects"])(subject, keyframes, scope, elementCache);
            const numSubjects = subjects.length;
            /**
             * For every element in this segment, process the defined values.
             */ for(let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++){
                /**
                 * Cast necessary, but we know these are of this type
                 */ keyframes = keyframes;
                transition = transition;
                const thisSubject = subjects[subjectIndex];
                const subjectSequence = getSubjectSequence(thisSubject, sequences);
                for(const key in keyframes){
                    resolveValueSequence(keyframes[key], getValueTransition(transition, key), getValueSequence(key, subjectSequence), subjectIndex, numSubjects);
                }
            }
        }
        prevTime = currentTime;
        currentTime += maxDuration;
    }
    /**
     * For every element and value combination create a new animation.
     */ sequences.forEach((valueSequences, element)=>{
        for(const key in valueSequences){
            const valueSequence = valueSequences[key];
            /**
             * Arrange all the keyframes in ascending time order.
             */ valueSequence.sort(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$utils$2f$sort$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareByTime"]);
            const keyframes = [];
            const valueOffset = [];
            const valueEasing = [];
            /**
             * For each keyframe, translate absolute times into
             * relative offsets based on the total duration of the timeline.
             */ for(let i = 0; i < valueSequence.length; i++){
                const { at, value, easing } = valueSequence[i];
                keyframes.push(value);
                valueOffset.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(0, totalDuration, at));
                valueEasing.push(easing || "easeOut");
            }
            /**
             * If the first keyframe doesn't land on offset: 0
             * provide one by duplicating the initial keyframe. This ensures
             * it snaps to the first keyframe when the animation starts.
             */ if (valueOffset[0] !== 0) {
                valueOffset.unshift(0);
                keyframes.unshift(keyframes[0]);
                valueEasing.unshift(defaultSegmentEasing);
            }
            /**
             * If the last keyframe doesn't land on offset: 1
             * provide one with a null wildcard value. This will ensure it
             * stays static until the end of the animation.
             */ if (valueOffset[valueOffset.length - 1] !== 1) {
                valueOffset.push(1);
                keyframes.push(null);
            }
            if (!animationDefinitions.has(element)) {
                animationDefinitions.set(element, {
                    keyframes: {},
                    transition: {}
                });
            }
            const definition = animationDefinitions.get(element);
            definition.keyframes[key] = keyframes;
            /**
             * Exclude `type` from defaultTransition since springs have been
             * converted to duration-based easing functions in resolveValueSequence.
             * Including `type: "spring"` would cause JSAnimation to error when
             * the merged keyframes array has more than 2 keyframes.
             */ const { type: _type, ...remainingDefaultTransition } = defaultTransition;
            definition.transition[key] = {
                ...remainingDefaultTransition,
                duration: totalDuration,
                ease: valueEasing,
                times: valueOffset,
                ...sequenceTransition
            };
        }
    });
    return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
    !sequences.has(subject) && sequences.set(subject, {});
    return sequences.get(subject);
}
function getValueSequence(name, sequences) {
    if (!sequences[name]) sequences[name] = [];
    return sequences[name];
}
function keyframesAsList(keyframes) {
    return Array.isArray(keyframes) ? keyframes : [
        keyframes
    ];
}
function getValueTransition(transition, key) {
    return transition && transition[key] ? {
        ...transition,
        ...transition[key]
    } : {
        ...transition
    };
}
const isNumber = (keyframe)=>typeof keyframe === "number";
const isNumberKeyframesArray = (keyframes)=>keyframes.every(isNumber);
;
 //# sourceMappingURL=create.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDOMVisualElement",
    ()=>createDOMVisualElement,
    "createObjectVisualElement",
    ()=>createObjectVisualElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$SVGVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$HTMLVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$object$2f$ObjectVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/object/ObjectVisualElement.mjs [app-client] (ecmascript)");
;
function createDOMVisualElement(element) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                transform: {},
                transformOrigin: {},
                style: {},
                vars: {},
                attrs: {}
            },
            latestValues: {}
        }
    };
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"])(element) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$svg$2d$svg$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGSVGElement"])(element) ? new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$SVGVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SVGVisualElement"](options) : new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$HTMLVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLVisualElement"](options);
    node.mount(element);
    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].set(element, node);
}
function createObjectVisualElement(subject) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                output: {}
            },
            latestValues: {}
        }
    };
    const node = new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$object$2f$ObjectVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectVisualElement"](options);
    node.mount(subject);
    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].set(subject, node);
}
;
 //# sourceMappingURL=create-visual-element.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/animate/subject.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateSubject",
    ()=>animateSubject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$animate$2f$single$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/animate/single-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$dom$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$resolve$2d$subjects$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs [app-client] (ecmascript)");
;
;
;
;
;
function isSingleValue(subject, keyframes) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(subject) || typeof subject === "number" || typeof subject === "string" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$dom$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMKeyframes"])(keyframes);
}
/**
 * Implementation
 */ function animateSubject(subject, keyframes, options, scope) {
    const animations = [];
    if (isSingleValue(subject, keyframes)) {
        animations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$animate$2f$single$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSingleValue"])(subject, (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$is$2d$dom$2d$keyframes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMKeyframes"])(keyframes) ? keyframes.default || keyframes : keyframes, options ? options.default || options : options));
    } else {
        // Gracefully handle null/undefined subjects (e.g., from querySelector returning null)
        if (subject == null) {
            return animations;
        }
        const subjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$resolve$2d$subjects$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSubjects"])(subject, keyframes, scope);
        const numSubjects = subjects.length;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(Boolean(numSubjects), "No valid elements provided.", "no-valid-elements");
        for(let i = 0; i < numSubjects; i++){
            const thisSubject = subjects[i];
            const createVisualElement = thisSubject instanceof Element ? __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDOMVisualElement"] : __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createObjectVisualElement"];
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].has(thisSubject)) {
                createVisualElement(thisSubject);
            }
            const visualElement = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"].get(thisSubject);
            const transition = {
                ...options
            };
            /**
             * Resolve stagger function if provided.
             */ if ("delay" in transition && typeof transition.delay === "function") {
                transition.delay = transition.delay(i, numSubjects);
            }
            animations.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateTarget"])(visualElement, {
                ...keyframes,
                transition
            }, {}));
        }
    }
    return animations;
}
;
 //# sourceMappingURL=subject.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/animate/sequence.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateSequence",
    ()=>animateSequence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/generators/spring/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$create$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/sequence/create.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$subject$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/animate/subject.mjs [app-client] (ecmascript)");
;
;
;
function animateSequence(sequence, options, scope) {
    const animations = [];
    /**
     * Pre-process: replace function segments with MotionValue segments,
     * subscribe callbacks immediately
     */ const processedSequence = sequence.map((segment)=>{
        if (Array.isArray(segment) && typeof segment[0] === "function") {
            const callback = segment[0];
            const mv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0);
            mv.on("change", callback);
            if (segment.length === 1) {
                return [
                    mv,
                    [
                        0,
                        1
                    ]
                ];
            } else if (segment.length === 2) {
                return [
                    mv,
                    [
                        0,
                        1
                    ],
                    segment[1]
                ];
            } else {
                return [
                    mv,
                    segment[1],
                    segment[2]
                ];
            }
        }
        return segment;
    });
    const animationDefinitions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$sequence$2f$create$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAnimationsFromSequence"])(processedSequence, options, scope, {
        spring: __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$spring$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"]
    });
    animationDefinitions.forEach(({ keyframes, transition }, subject)=>{
        animations.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$subject$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSubject"])(subject, keyframes, transition));
    });
    return animations;
}
;
 //# sourceMappingURL=sequence.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animate",
    ()=>animate,
    "createScopedAnimate",
    ()=>createScopedAnimate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimationWithThen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/array.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$sequence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/animate/sequence.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$subject$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/animate/subject.mjs [app-client] (ecmascript)");
;
;
;
;
function isSequence(value) {
    return Array.isArray(value) && value.some(Array.isArray);
}
/**
 * Creates an animation function that is optionally scoped
 * to a specific element.
 */ function createScopedAnimate(options = {}) {
    const { scope, reduceMotion } = options;
    /**
     * Implementation
     */ function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options) {
        let animations = [];
        let animationOnComplete;
        if (isSequence(subjectOrSequence)) {
            const { onComplete, ...sequenceOptions } = optionsOrKeyframes || {};
            if (typeof onComplete === "function") {
                animationOnComplete = onComplete;
            }
            animations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$sequence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSequence"])(subjectOrSequence, reduceMotion !== undefined ? {
                reduceMotion,
                ...sequenceOptions
            } : sequenceOptions, scope);
        } else {
            // Extract top-level onComplete so it doesn't get applied per-value
            const { onComplete, ...rest } = options || {};
            if (typeof onComplete === "function") {
                animationOnComplete = onComplete;
            }
            animations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$subject$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSubject"])(subjectOrSequence, optionsOrKeyframes, reduceMotion !== undefined ? {
                reduceMotion,
                ...rest
            } : rest, scope);
        }
        const animation = new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimationWithThen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimationWithThen"](animations);
        if (animationOnComplete) {
            animation.finished.then(animationOnComplete);
        }
        if (scope) {
            scope.animations.push(animation);
            animation.finished.then(()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(scope.animations, animation);
            });
        }
        return animation;
    }
    return scopedAnimate;
}
const animate = createScopedAnimate();
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnimate",
    ()=>useAnimate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$unmount$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion-config.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function useAnimate() {
    const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useAnimate.useConstant[scope]": ()=>({
                current: null,
                animations: []
            })
    }["useAnimate.useConstant[scope]"]);
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotionConfig"])() ?? undefined;
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAnimate.useMemo[animate]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScopedAnimate"])({
                scope,
                reduceMotion
            })
    }["useAnimate.useMemo[animate]"], [
        scope,
        reduceMotion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$unmount$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnmountEffect"])({
        "useAnimate.useUnmountEffect": ()=>{
            scope.animations.forEach({
                "useAnimate.useUnmountEffect": (animation)=>animation.stop()
            }["useAnimate.useUnmountEffect"]);
            scope.animations.length = 0;
        }
    }["useAnimate.useUnmountEffect"]);
    return [
        scope,
        animate
    ];
}
;
 //# sourceMappingURL=use-animate.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/animators/waapi/animate-elements.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateElements",
    ()=>animateElements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$active$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/utils/active-animations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$style$2d$computed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/dom/style-computed.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$fill$2d$wildcards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$apply$2d$px$2d$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/keyframes/utils/apply-px-defaults.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
;
;
function animateElements(elementOrSelector, keyframes, options, scope) {
    // Gracefully handle null/undefined elements (e.g., from querySelector returning null)
    if (elementOrSelector == null) {
        return [];
    }
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(elementOrSelector, scope);
    const numElements = elements.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(Boolean(numElements), "No valid elements provided.", "no-valid-elements");
    /**
     * WAAPI doesn't support interrupting animations.
     *
     * Therefore, starting animations requires a three-step process:
     * 1. Stop existing animations (write styles to DOM)
     * 2. Resolve keyframes (read styles from DOM)
     * 3. Create new animations (write styles to DOM)
     *
     * The hybrid `animate()` function uses AsyncAnimation to resolve
     * keyframes before creating new animations, which removes style
     * thrashing. Here, we have much stricter filesize constraints.
     * Therefore we do this in a synchronous way that ensures that
     * at least within `animate()` calls there is no style thrashing.
     *
     * In the motion-native-animate-mini-interrupt benchmark this
     * was 80% faster than a single loop.
     */ const animationDefinitions = [];
    /**
     * Step 1: Build options and stop existing animations (write)
     */ for(let i = 0; i < numElements; i++){
        const element = elements[i];
        const elementTransition = {
            ...options
        };
        /**
         * Resolve stagger function if provided.
         */ if (typeof elementTransition.delay === "function") {
            elementTransition.delay = elementTransition.delay(i, numElements);
        }
        for(const valueName in keyframes){
            let valueKeyframes = keyframes[valueName];
            if (!Array.isArray(valueKeyframes)) {
                valueKeyframes = [
                    valueKeyframes
                ];
            }
            const valueOptions = {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"])(elementTransition, valueName)
            };
            valueOptions.duration && (valueOptions.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(valueOptions.duration));
            valueOptions.delay && (valueOptions.delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(valueOptions.delay));
            /**
             * If there's an existing animation playing on this element then stop it
             * before creating a new one.
             */ const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$active$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimationMap"])(element);
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$active$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationMapKey"])(valueName, valueOptions.pseudoElement || "");
            const currentAnimation = map.get(key);
            currentAnimation && currentAnimation.stop();
            animationDefinitions.push({
                map,
                key,
                unresolvedKeyframes: valueKeyframes,
                options: {
                    ...valueOptions,
                    element,
                    name: valueName,
                    allowFlatten: !elementTransition.type && !elementTransition.ease
                }
            });
        }
    }
    /**
     * Step 2: Resolve keyframes (read)
     */ for(let i = 0; i < animationDefinitions.length; i++){
        const { unresolvedKeyframes, options: animationOptions } = animationDefinitions[i];
        const { element, name, pseudoElement } = animationOptions;
        if (!pseudoElement && unresolvedKeyframes[0] === null) {
            unresolvedKeyframes[0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$style$2d$computed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element, name);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$fill$2d$wildcards$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillWildcards"])(unresolvedKeyframes);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$utils$2f$apply$2d$px$2d$defaults$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyPxDefaults"])(unresolvedKeyframes, name);
        /**
         * If we only have one keyframe, explicitly read the initial keyframe
         * from the computed style. This is to ensure consistency with WAAPI behaviour
         * for restarting animations, for instance .play() after finish, when it
         * has one vs two keyframes.
         */ if (!pseudoElement && unresolvedKeyframes.length < 2) {
            unresolvedKeyframes.unshift((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$dom$2f$style$2d$computed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element, name));
        }
        animationOptions.keyframes = unresolvedKeyframes;
    }
    /**
     * Step 3: Create new animations (write)
     */ const animations = [];
    for(let i = 0; i < animationDefinitions.length; i++){
        const { map, key, options: animationOptions } = animationDefinitions[i];
        const animation = new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$NativeAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimation"](animationOptions);
        map.set(key, animation);
        animation.finished.finally(()=>map.delete(key));
        animations.push(animation);
    }
    return animations;
}
;
 //# sourceMappingURL=animate-elements.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/animators/waapi/animate-style.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateMini",
    ()=>animateMini,
    "createScopedWaapiAnimate",
    ()=>createScopedWaapiAnimate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimationWithThen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animators$2f$waapi$2f$animate$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/animators/waapi/animate-elements.mjs [app-client] (ecmascript)");
;
;
const createScopedWaapiAnimate = (scope)=>{
    function scopedAnimate(elementOrSelector, keyframes, options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$GroupAnimationWithThen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimationWithThen"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animators$2f$waapi$2f$animate$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateElements"])(elementOrSelector, keyframes, options, scope));
    }
    return scopedAnimate;
};
const animateMini = /*@__PURE__*/ createScopedWaapiAnimate();
;
 //# sourceMappingURL=animate-style.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/hooks/use-animate-style.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnimateMini",
    ()=>useAnimateMini
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$unmount$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animators$2f$waapi$2f$animate$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/animators/waapi/animate-style.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function useAnimateMini() {
    const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useAnimateMini.useConstant[scope]": ()=>({
                current: null,
                animations: []
            })
    }["useAnimateMini.useConstant[scope]"]);
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useAnimateMini.useConstant[animate]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animators$2f$waapi$2f$animate$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScopedWaapiAnimate"])(scope)
    }["useAnimateMini.useConstant[animate]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$unmount$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnmountEffect"])({
        "useAnimateMini.useUnmountEffect": ()=>{
            scope.animations.forEach({
                "useAnimateMini.useUnmountEffect": (animation)=>animation.stop()
            }["useAnimateMini.useUnmountEffect"]);
        }
    }["useAnimateMini.useUnmountEffect"]);
    return [
        scope,
        animate
    ];
}
;
 //# sourceMappingURL=use-animate-style.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnimation",
    ()=>useAnimation,
    "useAnimationControls",
    ()=>useAnimationControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs [app-client] (ecmascript)");
"use client";
;
;
;
/**
 * Creates `LegacyAnimationControls`, which can be used to manually start, stop
 * and sequence animations on one or more components.
 *
 * The returned `LegacyAnimationControls` should be passed to the `animate` property
 * of the components you want to animate.
 *
 * These components can then be animated with the `start` method.
 *
 * ```jsx
 * import * as React from 'react'
 * import { motion, useAnimation } from 'framer-motion'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <motion.div animate={controls} />
 * }
 * ```
 *
 * @returns Animation controller with `start` and `stop` methods
 *
 * @public
 */ function useAnimationControls() {
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationControls"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(controls.mount, []);
    return controls;
}
const useAnimation = useAnimationControls;
;
 //# sourceMappingURL=use-animation.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence-data.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePresenceData",
    ()=>usePresenceData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/context/PresenceContext.mjs [app-client] (ecmascript)");
"use client";
;
;
function usePresenceData() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresenceContext"]);
    return context ? context.custom : undefined;
}
;
 //# sourceMappingURL=use-presence-data.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/events/use-dom-event.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDomEvent",
    ()=>useDomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/events/add-dom-event.mjs [app-client] (ecmascript)");
"use client";
;
;
/**
 * Attaches an event listener directly to the provided DOM element.
 *
 * Bypassing React's event system can be desirable, for instance when attaching non-passive
 * event handlers.
 *
 * ```jsx
 * const ref = useRef(null)
 *
 * useDomEvent(ref, 'wheel', onWheel, { passive: false })
 *
 * return <div ref={ref} />
 * ```
 *
 * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
 * @param eventName - Name of the event you want listen for.
 * @param handler - Function to fire when receiving the event.
 * @param options - Options to pass to `Event.addEventListener`.
 *
 * @public
 */ function useDomEvent(ref, eventName, handler, options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDomEvent.useEffect": ()=>{
            const element = ref.current;
            if (handler && element) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDomEvent"])(element, eventName, handler, options);
            }
        }
    }["useDomEvent.useEffect"], [
        ref,
        eventName,
        handler,
        options
    ]);
}
;
 //# sourceMappingURL=use-dom-event.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragControls",
    ()=>DragControls,
    "useDragControls",
    ()=>useDragControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
;
/**
 * Can manually trigger a drag gesture on one or more `drag`-enabled `motion` components.
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <div onPointerDown={startDrag} />
 *     <motion.div drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @public
 */ class DragControls {
    constructor(){
        this.componentControls = new Set();
    }
    /**
     * Subscribe a component's internal `VisualElementDragControls` to the user-facing API.
     *
     * @internal
     */ subscribe(controls) {
        this.componentControls.add(controls);
        return ()=>this.componentControls.delete(controls);
    }
    /**
     * Start a drag gesture on every `motion` component that has this set of drag controls
     * passed into it via the `dragControls` prop.
     *
     * ```jsx
     * dragControls.start(e, {
     *   snapToCursor: true
     * })
     * ```
     *
     * @param event - PointerEvent
     * @param options - Options
     *
     * @public
     */ start(event, options) {
        this.componentControls.forEach((controls)=>{
            controls.start(event.nativeEvent || event, options);
        });
    }
    /**
     * Cancels a drag gesture.
     *
     * ```jsx
     * dragControls.cancel()
     * ```
     *
     * @public
     */ cancel() {
        this.componentControls.forEach((controls)=>{
            controls.cancel();
        });
    }
    /**
     * Stops a drag gesture.
     *
     * ```jsx
     * dragControls.stop()
     * ```
     *
     * @public
     */ stop() {
        this.componentControls.forEach((controls)=>{
            controls.stop();
        });
    }
}
const createDragControls = ()=>new DragControls();
/**
 * Usually, dragging is initiated by pressing down on a `motion` component with a `drag` prop
 * and moving it. For some use-cases, for instance clicking at an arbitrary point on a video scrubber, we
 * might want to initiate that dragging from a different component than the draggable one.
 *
 * By creating a `dragControls` using the `useDragControls` hook, we can pass this into
 * the draggable component's `dragControls` prop. It exposes a `start` method
 * that can start dragging from pointer events on other components.
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <div onPointerDown={startDrag} />
 *     <motion.div drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @public
 */ function useDragControls() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])(createDragControls);
}
;
 //# sourceMappingURL=use-drag-controls.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/utils/is-motion-component.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMotionComponent",
    ()=>isMotionComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$symbol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/utils/symbol.mjs [app-client] (ecmascript)");
;
/**
 * Checks if a component is a `motion` component.
 */ function isMotionComponent(component) {
    return component !== null && typeof component === "object" && __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$symbol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionComponentSymbol"] in component;
}
;
 //# sourceMappingURL=is-motion-component.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/utils/unwrap-motion-component.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unwrapMotionComponent",
    ()=>unwrapMotionComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$is$2d$motion$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/utils/is-motion-component.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$symbol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/utils/symbol.mjs [app-client] (ecmascript)");
;
;
/**
 * Unwraps a `motion` component and returns either a string for `motion.div` or
 * the React component for `motion(Component)`.
 *
 * If the component is not a `motion` component it returns undefined.
 */ function unwrapMotionComponent(component) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$is$2d$motion$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionComponent"])(component)) {
        return component[__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$symbol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionComponentSymbol"]];
    }
    return undefined;
}
;
 //# sourceMappingURL=unwrap-motion-component.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/projection/use-instant-layout-transition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInstantLayoutTransition",
    ()=>useInstantLayoutTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs [app-client] (ecmascript)");
;
function useInstantLayoutTransition() {
    return startTransition;
}
function startTransition(callback) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rootProjectionNode"].current) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rootProjectionNode"].current.isUpdating = false;
    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rootProjectionNode"].current.blockUpdate();
    callback && callback();
}
;
 //# sourceMappingURL=use-instant-layout-transition.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/projection/use-reset-projection.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResetProjection",
    ()=>useResetProjection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs [app-client] (ecmascript)");
;
;
function useResetProjection() {
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useResetProjection.useCallback[reset]": ()=>{
            const root = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rootProjectionNode"].current;
            if (!root) return;
            root.resetTree();
        }
    }["useResetProjection.useCallback[reset]"], []);
    return reset;
}
;
 //# sourceMappingURL=use-reset-projection.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-cycle.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCycle",
    ()=>useCycle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/wrap.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
/**
 * Cycles through a series of visual properties. Can be used to toggle between or cycle through animations. It works similar to `useState` in React. It is provided an initial array of possible states, and returns an array of two arguments.
 *
 * An index value can be passed to the returned `cycle` function to cycle to a specific index.
 *
 * ```jsx
 * import * as React from "react"
 * import { motion, useCycle } from "framer-motion"
 *
 * export const MyComponent = () => {
 *   const [x, cycleX] = useCycle(0, 50, 100)
 *
 *   return (
 *     <motion.div
 *       animate={{ x: x }}
 *       onTap={() => cycleX()}
 *      />
 *    )
 * }
 * ```
 *
 * @param items - items to cycle through
 * @returns [currentState, cycleState]
 *
 * @public
 */ function useCycle(...items) {
    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [item, setItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(items[index.current]);
    const runCycle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCycle.useCallback[runCycle]": (next)=>{
            index.current = typeof next !== "number" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrap"])(0, items.length, index.current + 1) : next;
            setItem(items[index.current]);
        }
    }["useCycle.useCallback[runCycle]"], // The array will change on each call, but by putting items.length at
    // the front of this array, we guarantee the dependency comparison will match up
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        items.length,
        ...items
    ]);
    return [
        item,
        runCycle
    ];
}
;
 //# sourceMappingURL=use-cycle.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inView",
    ()=>inView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
;
const thresholds = {
    some: 0,
    all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries)=>{
        entries.forEach((entry)=>{
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */ if (entry.isIntersecting === Boolean(onEnd)) return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry.target, entry);
                if (typeof newOnEnd === "function") {
                    activeIntersections.set(entry.target, newOnEnd);
                } else {
                    observer.unobserve(entry.target);
                }
            } else if (typeof onEnd === "function") {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount]
    });
    elements.forEach((element)=>observer.observe(element));
    return ()=>observer.disconnect();
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInView",
    ()=>useInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
    const [isInView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            if (!ref.current || once && isInView) return;
            const onEnter = {
                "useInView.useEffect.onEnter": ()=>{
                    setInView(true);
                    return once ? undefined : ({
                        "useInView.useEffect.onEnter": ()=>setInView(false)
                    })["useInView.useEffect.onEnter"];
                }
            }["useInView.useEffect.onEnter"];
            const options = {
                root: root && root.current || undefined,
                margin,
                amount
            };
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inView"])(ref.current, onEnter, options);
        }
    }["useInView.useEffect"], [
        root,
        ref,
        margin,
        once,
        amount
    ]);
    return isInView;
}
;
 //# sourceMappingURL=use-in-view.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-instant-transition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "disableInstantTransitions",
    ()=>disableInstantTransitions,
    "useInstantTransition",
    ()=>useInstantTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$use$2d$instant$2d$layout$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/projection/use-instant-layout-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$force$2d$update$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-force-update.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function useInstantTransition() {
    const [forceUpdate, forcedRenderCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$force$2d$update$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForceUpdate"])();
    const startInstantLayoutTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$use$2d$instant$2d$layout$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInstantLayoutTransition"])();
    const unlockOnFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInstantTransition.useEffect": ()=>{
            /**
         * Unblock after two animation frames, otherwise this will unblock too soon.
         */ __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender({
                "useInstantTransition.useEffect": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender({
                        "useInstantTransition.useEffect": ()=>{
                            /**
             * If the callback has been called again after the effect
             * triggered this 2 frame delay, don't unblock animations. This
             * prevents the previous effect from unblocking the current
             * instant transition too soon. This becomes more likely when
             * used in conjunction with React.startTransition().
             */ if (forcedRenderCount !== unlockOnFrameRef.current) return;
                            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"].instantAnimations = false;
                        }
                    }["useInstantTransition.useEffect"])
            }["useInstantTransition.useEffect"]);
        }
    }["useInstantTransition.useEffect"], [
        forcedRenderCount
    ]);
    return (callback)=>{
        startInstantLayoutTransition(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"].instantAnimations = true;
            forceUpdate();
            callback();
            unlockOnFrameRef.current = forcedRenderCount + 1;
        });
    };
}
function disableInstantTransitions() {
    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"].instantAnimations = false;
}
;
 //# sourceMappingURL=use-instant-transition.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-page-in-view.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePageInView",
    ()=>usePageInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
function usePageInView() {
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePageInView.useEffect": ()=>{
            const handleVisibilityChange = {
                "usePageInView.useEffect.handleVisibilityChange": ()=>setIsInView(!document.hidden)
            }["usePageInView.useEffect.handleVisibilityChange"];
            if (document.hidden) {
                handleVisibilityChange();
            }
            document.addEventListener("visibilitychange", handleVisibilityChange);
            return ({
                "usePageInView.useEffect": ()=>{
                    document.removeEventListener("visibilitychange", handleVisibilityChange);
                }
            })["usePageInView.useEffect"];
        }
    }["usePageInView.useEffect"], []);
    return isInView;
}
;
 //# sourceMappingURL=use-page-in-view.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/transform-viewbox-point.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transformViewBoxPoint",
    ()=>transformViewBoxPoint
]);
/**
 * Creates a `transformPagePoint` function that accounts for SVG viewBox scaling.
 *
 * When dragging SVG elements inside an SVG with a viewBox that differs from
 * the rendered dimensions (e.g., `viewBox="0 0 100 100"` but rendered at 500x500 pixels),
 * pointer coordinates need to be transformed to match the SVG's coordinate system.
 *
 * @example
 * ```jsx
 * function App() {
 *   const svgRef = useRef<SVGSVGElement>(null)
 *
 *   return (
 *     <MotionConfig transformPagePoint={transformViewBoxPoint(svgRef)}>
 *       <svg ref={svgRef} viewBox="0 0 100 100" width={500} height={500}>
 *         <motion.rect drag width={10} height={10} />
 *       </svg>
 *     </MotionConfig>
 *   )
 * }
 * ```
 *
 * @param svgRef - A React ref to the SVG element
 * @returns A transformPagePoint function for use with MotionConfig
 *
 * @public
 */ function transformViewBoxPoint(svgRef) {
    return (point)=>{
        const svg = svgRef.current;
        if (!svg) {
            return point;
        }
        // Get the viewBox attribute
        const viewBox = svg.viewBox?.baseVal;
        if (!viewBox || viewBox.width === 0 && viewBox.height === 0) {
            // No viewBox or empty viewBox - no transformation needed
            return point;
        }
        // Get the rendered dimensions of the SVG
        const bbox = svg.getBoundingClientRect();
        if (bbox.width === 0 || bbox.height === 0) {
            return point;
        }
        // Calculate scale factors
        const scaleX = viewBox.width / bbox.width;
        const scaleY = viewBox.height / bbox.height;
        // Get the SVG's position on the page
        const svgX = bbox.left + window.scrollX;
        const svgY = bbox.top + window.scrollY;
        // Transform the point:
        // 1. Calculate position relative to SVG
        // 2. Scale by viewBox/viewport ratio
        // 3. Add back the SVG position (but in SVG coordinates)
        return {
            x: (point.x - svgX) * scaleX + svgX,
            y: (point.y - svgY) * scaleY + svgY
        };
    };
}
;
 //# sourceMappingURL=transform-viewbox-point.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/optimized-appear/store.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appearAnimationStore",
    ()=>appearAnimationStore,
    "appearComplete",
    ()=>appearComplete
]);
const appearAnimationStore = new Map();
const appearComplete = new Map();
;
 //# sourceMappingURL=store.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/optimized-appear/store-id.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appearStoreId",
    ()=>appearStoreId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs [app-client] (ecmascript)");
;
const appearStoreId = (elementId, valueName)=>{
    const key = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$keys$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformProps"].has(valueName) ? "transform" : valueName;
    return `${elementId}: ${key}`;
};
;
 //# sourceMappingURL=store-id.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/optimized-appear/handoff.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handoffOptimizedAppearAnimation",
    ()=>handoffOptimizedAppearAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/optimized-appear/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/optimized-appear/store-id.mjs [app-client] (ecmascript)");
;
;
function handoffOptimizedAppearAnimation(elementId, valueName, frame) {
    const storeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearStoreId"])(elementId, valueName);
    const optimisedAnimation = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearAnimationStore"].get(storeId);
    if (!optimisedAnimation) {
        return null;
    }
    const { animation, startTime } = optimisedAnimation;
    function cancelAnimation() {
        window.MotionCancelOptimisedAnimation?.(elementId, valueName, frame);
    }
    /**
     * We can cancel the animation once it's finished now that we've synced
     * with Motion.
     *
     * Prefer onfinish over finished as onfinish is backwards compatible with
     * older browsers.
     */ animation.onfinish = cancelAnimation;
    if (startTime === null || window.MotionHandoffIsComplete?.(elementId)) {
        /**
         * If the startTime is null, this animation is the Paint Ready detection animation
         * and we can cancel it immediately without handoff.
         *
         * Or if we've already handed off the animation then we're now interrupting it.
         * In which case we need to cancel it.
         */ cancelAnimation();
        return null;
    } else {
        return startTime;
    }
}
;
 //# sourceMappingURL=handoff.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/optimized-appear/start.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "startOptimizedAppearAnimation",
    ()=>startOptimizedAppearAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$data$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/optimized-appear/data-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$start$2d$waapi$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$get$2d$appear$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$handoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/optimized-appear/handoff.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/optimized-appear/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/optimized-appear/store-id.mjs [app-client] (ecmascript)");
;
;
;
;
;
/**
 * A single time to use across all animations to manually set startTime
 * and ensure they're all in sync.
 */ let startFrameTime;
/**
 * A dummy animation to detect when Chrome is ready to start
 * painting the page and hold off from triggering the real animation
 * until then. We only need one animation to detect paint ready.
 *
 * https://bugs.chromium.org/p/chromium/issues/detail?id=1406850
 */ let readyAnimation;
/**
 * Keep track of animations that were suspended vs cancelled so we
 * can easily resume them when we're done measuring layout.
 */ const suspendedAnimations = new Set();
function resumeSuspendedAnimations() {
    suspendedAnimations.forEach((data)=>{
        data.animation.play();
        data.animation.startTime = data.startTime;
    });
    suspendedAnimations.clear();
}
function startOptimizedAppearAnimation(element, name, keyframes, options, onReady) {
    // Prevent optimised appear animations if Motion has already started animating.
    if (window.MotionIsMounted) {
        return;
    }
    const id = element.dataset[__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$data$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimizedAppearDataId"]];
    if (!id) return;
    window.MotionHandoffAnimation = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$handoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handoffOptimizedAppearAnimation"];
    const storeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearStoreId"])(id, name);
    if (!readyAnimation) {
        readyAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$start$2d$waapi$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startWaapiAnimation"])(element, name, [
            keyframes[0],
            keyframes[0]
        ], /**
         * 10 secs is basically just a super-safe duration to give Chrome
         * long enough to get the animation ready.
         */ {
            duration: 10000,
            ease: "linear"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearAnimationStore"].set(storeId, {
            animation: readyAnimation,
            startTime: null
        });
        /**
         * If there's no readyAnimation then there's been no instantiation
         * of handoff animations.
         */ window.MotionHandoffAnimation = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$handoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handoffOptimizedAppearAnimation"];
        window.MotionHasOptimisedAnimation = (elementId, valueName)=>{
            if (!elementId) return false;
            /**
             * Keep a map of elementIds that have started animating. We check
             * via ID instead of Element because of hydration errors and
             * pre-hydration checks. We also actively record IDs as they start
             * animating rather than simply checking for data-appear-id as
             * this attrbute might be present but not lead to an animation, for
             * instance if the element's appear animation is on a different
             * breakpoint.
             */ if (!valueName) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearComplete"].has(elementId);
            }
            const animationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearStoreId"])(elementId, valueName);
            return Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearAnimationStore"].get(animationId));
        };
        window.MotionHandoffMarkAsComplete = (elementId)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearComplete"].has(elementId)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearComplete"].set(elementId, true);
            }
        };
        window.MotionHandoffIsComplete = (elementId)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearComplete"].get(elementId) === true;
        };
        /**
         * We only need to cancel transform animations as
         * they're the ones that will interfere with the
         * layout animation measurements.
         */ window.MotionCancelOptimisedAnimation = (elementId, valueName, frame, canResume)=>{
            const animationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearStoreId"])(elementId, valueName);
            const data = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearAnimationStore"].get(animationId);
            if (!data) return;
            if (frame && canResume === undefined) {
                /**
                 * Wait until the end of the subsequent frame to cancel the animation
                 * to ensure we don't remove the animation before the main thread has
                 * had a chance to resolve keyframes and render.
                 */ frame.postRender(()=>{
                    frame.postRender(()=>{
                        data.animation.cancel();
                    });
                });
            } else {
                data.animation.cancel();
            }
            if (frame && canResume) {
                suspendedAnimations.add(data);
                frame.render(resumeSuspendedAnimations);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearAnimationStore"].delete(animationId);
                /**
                 * If there are no more animations left, we can remove the cancel function.
                 * This will let us know when we can stop checking for conflicting layout animations.
                 */ if (!__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearAnimationStore"].size) {
                    window.MotionCancelOptimisedAnimation = undefined;
                }
            }
        };
        window.MotionCheckAppearSync = (visualElement, valueName, value)=>{
            const appearId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$get$2d$appear$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptimisedAppearId"])(visualElement);
            if (!appearId) return;
            const valueIsOptimised = window.MotionHasOptimisedAnimation?.(appearId, valueName);
            const externalAnimationValue = visualElement.props.values?.[valueName];
            if (!valueIsOptimised || !externalAnimationValue) return;
            const removeSyncCheck = value.on("change", (latestValue)=>{
                if (externalAnimationValue.get() !== latestValue) {
                    window.MotionCancelOptimisedAnimation?.(appearId, valueName);
                    removeSyncCheck();
                }
            });
            return removeSyncCheck;
        };
    }
    const startAnimation = ()=>{
        readyAnimation.cancel();
        const appearAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$start$2d$waapi$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startWaapiAnimation"])(element, name, keyframes, options);
        /**
         * Record the time of the first started animation. We call performance.now() once
         * here and once in handoff to ensure we're getting
         * close to a frame-locked time. This keeps all animations in sync.
         */ if (startFrameTime === undefined) {
            startFrameTime = performance.now();
        }
        appearAnimation.startTime = startFrameTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearAnimationStore"].set(storeId, {
            animation: appearAnimation,
            startTime: startFrameTime
        });
        if (onReady) onReady(appearAnimation);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appearComplete"].set(id, false);
    if (readyAnimation.ready) {
        readyAnimation.ready.then(startAnimation).catch(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    } else {
        startAnimation();
    }
}
;
 //# sourceMappingURL=start.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/hooks/use-animated-state.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnimatedState",
    ()=>useAnimatedState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/VisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/models.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$use$2d$visual$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const createObject = ()=>({});
class StateVisualElement extends __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisualElement"] {
    constructor(){
        super(...arguments);
        this.measureInstanceViewportBox = __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"];
    }
    build() {}
    resetTransform() {}
    restoreTransform() {}
    removeValueFromRenderState() {}
    renderInstance() {}
    scrapeMotionValuesFromProps() {
        return createObject();
    }
    getBaseTargetFromProps() {
        return undefined;
    }
    readValueFromInstance(_state, key, options) {
        return options.initialState[key] || 0;
    }
    sortInstanceNodePosition() {
        return 0;
    }
}
const useVisualState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$use$2d$visual$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeUseVisualState"])({
    scrapeMotionValuesFromProps: createObject,
    createRenderState: createObject
});
/**
 * This is not an officially supported API and may be removed
 * on any version.
 */ function useAnimatedState(initialState) {
    const [animationState, setAnimationState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const visualState = useVisualState({}, false);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useAnimatedState.useConstant[element]": ()=>{
            return new StateVisualElement({
                props: {
                    onUpdate: {
                        "useAnimatedState.useConstant[element]": (v)=>{
                            setAnimationState({
                                ...v
                            });
                        }
                    }["useAnimatedState.useConstant[element]"]
                },
                visualState,
                presenceContext: null
            }, {
                initialState
            });
        }
    }["useAnimatedState.useConstant[element]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useAnimatedState.useLayoutEffect": ()=>{
            element.mount({});
            return ({
                "useAnimatedState.useLayoutEffect": ()=>element.unmount()
            })["useAnimatedState.useLayoutEffect"];
        }
    }["useAnimatedState.useLayoutEffect"], [
        element
    ]);
    const startAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useAnimatedState.useConstant[startAnimation]": ()=>({
                "useAnimatedState.useConstant[startAnimation]": (animationDefinition)=>{
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateVisualElement"])(element, animationDefinition);
                }
            })["useAnimatedState.useConstant[startAnimation]"]
    }["useAnimatedState.useConstant[startAnimation]"]);
    return [
        animationState,
        startAnimation
    ];
}
;
 //# sourceMappingURL=use-animated-state.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/AnimateSharedLayout.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimateSharedLayout",
    ()=>AnimateSharedLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
let id = 0;
const AnimateSharedLayout = ({ children })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "AnimateSharedLayout.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(false, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations");
        }
    }["AnimateSharedLayout.useEffect"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroup"], {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
            "AnimateSharedLayout.useConstant": ()=>`asl-${id++}`
        }["AnimateSharedLayout.useConstant"]),
        children: children
    });
};
;
 //# sourceMappingURL=AnimateSharedLayout.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-inverted-scale.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invertScale",
    ()=>invertScale,
    "useInvertedScale",
    ()=>useInvertedScale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
// Keep things reasonable and avoid scale: Infinity. In practise we might need
// to add another value, opacity, that could interpolate scaleX/Y [0,0.01] => [0,1]
// to simply hide content at unreasonable scales.
const maxScale = 100000;
const invertScale = (scale)=>scale > 0.001 ? 1 / scale : maxScale;
let hasWarned = false;
/**
 * Returns a `MotionValue` each for `scaleX` and `scaleY` that update with the inverse
 * of their respective parent scales.
 *
 * This is useful for undoing the distortion of content when scaling a parent component.
 *
 * By default, `useInvertedScale` will automatically fetch `scaleX` and `scaleY` from the nearest parent.
 * By passing other `MotionValue`s in as `useInvertedScale({ scaleX, scaleY })`, it will invert the output
 * of those instead.
 *
 * ```jsx
 * const MyComponent = () => {
 *   const { scaleX, scaleY } = useInvertedScale()
 *   return <motion.div style={{ scaleX, scaleY }} />
 * }
 * ```
 *
 * @deprecated
 */ function useInvertedScale(scale) {
    let parentScaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(1);
    let parentScaleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(1);
    const { visualElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionContext"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!!(scale || visualElement), "If no scale values are provided, useInvertedScale must be used within a child of another motion component.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warning"])(hasWarned, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.");
    hasWarned = true;
    if (scale) {
        parentScaleX = scale.scaleX || parentScaleX;
        parentScaleY = scale.scaleY || parentScaleY;
    } else if (visualElement) {
        parentScaleX = visualElement.getValue("scaleX", 1);
        parentScaleY = visualElement.getValue("scaleY", 1);
    }
    const scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(parentScaleX, invertScale);
    const scaleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(parentScaleY, invertScale);
    return {
        scaleX,
        scaleY
    };
}
;
 //# sourceMappingURL=use-inverted-scale.mjs.map
}),
"[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatePresence",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"],
    "AnimateSharedLayout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimateSharedLayout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateSharedLayout"],
    "AsyncMotionValueAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncMotionValueAnimation"],
    "DOMKeyframesResolver",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMKeyframesResolver"],
    "DOMVisualElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMVisualElement"],
    "DeprecatedLayoutGroupContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$DeprecatedLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeprecatedLayoutGroupContext"],
    "DocumentProjectionNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentProjectionNode"],
    "DragControls",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragControls"],
    "Feature",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Feature"],
    "FlatTree",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlatTree"],
    "GroupAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimation"],
    "GroupAnimationWithThen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupAnimationWithThen"],
    "HTMLProjectionNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLProjectionNode"],
    "HTMLVisualElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLVisualElement"],
    "JSAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSAnimation"],
    "KeyframeResolver",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyframeResolver"],
    "LayoutAnimationBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutAnimationBuilder"],
    "LayoutGroup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroup"],
    "LayoutGroupContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroupContext"],
    "LazyMotion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyMotion"],
    "MotionConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfig"],
    "MotionConfigContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"],
    "MotionContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionContext"],
    "MotionGlobalConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionGlobalConfig"],
    "MotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionValue"],
    "NativeAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimation"],
    "NativeAnimationExtended",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimationExtended"],
    "NativeAnimationWrapper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimationWrapper"],
    "NodeStack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeStack"],
    "ObjectVisualElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectVisualElement"],
    "PopChild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PopChild$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopChild"],
    "PresenceChild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PresenceChild$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresenceChild"],
    "PresenceContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresenceContext"],
    "Reorder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "SVGVisualElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SVGVisualElement"],
    "SubscriptionManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscriptionManager"],
    "SwitchLayoutGroupContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$SwitchLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchLayoutGroupContext"],
    "ViewTransitionBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewTransitionBuilder"],
    "VisualElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisualElement"],
    "WillChangeMotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$will$2d$change$2f$WillChangeMotionValue$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WillChangeMotionValue"],
    "acceleratedValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["acceleratedValues"],
    "activeAnimations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeAnimations"],
    "addAttrValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAttrValue"],
    "addDomEvent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDomEvent"],
    "addPointerEvent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPointerEvent"],
    "addPointerInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$event$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPointerInfo"],
    "addScaleCorrector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$correction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addScaleCorrector"],
    "addStyleValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStyleValue"],
    "addUniqueItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUniqueItem"],
    "addValueToWillChange",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addValueToWillChange"],
    "alpha",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"],
    "analyseComplexValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyseComplexValue"],
    "animate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"],
    "animateMini",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animators$2f$waapi$2f$animate$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateMini"],
    "animateMotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateMotionValue"],
    "animateSingleValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateSingleValue"],
    "animateTarget",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateTarget"],
    "animateValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateValue"],
    "animateVariant",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateVariant"],
    "animateView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateView"],
    "animateVisualElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateVisualElement"],
    "animationControls",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationControls"],
    "animationMapKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationMapKey"],
    "animations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animations"],
    "anticipate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anticipate"],
    "applyAxisDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyAxisDelta"],
    "applyBoxDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyBoxDelta"],
    "applyGeneratorOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyGeneratorOptions"],
    "applyPointDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyPointDelta"],
    "applyPxDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyPxDefaults"],
    "applyTreeDeltas",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTreeDeltas"],
    "aspectRatio",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aspectRatio"],
    "attachFollow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachFollow"],
    "attachSpring",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachSpring"],
    "attrEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attrEffect"],
    "axisDeltaEquals",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisDeltaEquals"],
    "axisEquals",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisEquals"],
    "axisEqualsRounded",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisEqualsRounded"],
    "backIn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"],
    "backInOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backInOut"],
    "backOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backOut"],
    "boxEquals",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boxEquals"],
    "boxEqualsRounded",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boxEqualsRounded"],
    "buildHTMLStyles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHTMLStyles"],
    "buildProjectionTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildProjectionTransform"],
    "buildSVGAttrs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSVGAttrs"],
    "buildSVGPath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSVGPath"],
    "buildTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$build$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTransform"],
    "calcAxisDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcAxisDelta"],
    "calcBoxDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcBoxDelta"],
    "calcChildStagger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcChildStagger"],
    "calcGeneratorDuration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcGeneratorDuration"],
    "calcLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLength"],
    "calcRelativeAxis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativeAxis"],
    "calcRelativeAxisPosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativeAxisPosition"],
    "calcRelativeBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativeBox"],
    "calcRelativePosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRelativePosition"],
    "camelCaseAttributes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["camelCaseAttributes"],
    "camelToDash",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["camelToDash"],
    "cancelFrame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"],
    "cancelMicrotask",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelMicrotask"],
    "cancelSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelSync"],
    "checkVariantsDidChange",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkVariantsDidChange"],
    "circIn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circIn"],
    "circInOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circInOut"],
    "circOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circOut"],
    "clamp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"],
    "cleanDirtyNodes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanDirtyNodes"],
    "collectMotionValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectMotionValues"],
    "color",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["color"],
    "compareByDepth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareByDepth"],
    "complex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"],
    "containsCSSVariable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsCSSVariable"],
    "convertBoundingBoxToBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertBoundingBoxToBox"],
    "convertBoxToBoundingBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertBoxToBoundingBox"],
    "convertOffsetToTimes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertOffsetToTimes"],
    "copyAxisDeltaInto",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyAxisDeltaInto"],
    "copyAxisInto",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyAxisInto"],
    "copyBoxInto",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyBoxInto"],
    "correctBorderRadius",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["correctBorderRadius"],
    "correctBoxShadow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["correctBoxShadow"],
    "createAnimationState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAnimationState"],
    "createAxis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAxis"],
    "createAxisDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAxisDelta"],
    "createBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBox"],
    "createDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDelta"],
    "createGeneratorEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGeneratorEasing"],
    "createProjectionNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProjectionNode"],
    "createRenderBatcher",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRenderBatcher"],
    "createScopedAnimate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScopedAnimate"],
    "cubicBezier",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"],
    "cubicBezierAsString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezierAsString"],
    "defaultEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultEasing"],
    "defaultOffset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOffset"],
    "defaultTransformValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultTransformValue"],
    "defaultValueTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultValueTypes"],
    "degrees",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"],
    "delay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$delay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["delay"],
    "delayInSeconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["delayInSeconds"],
    "dimensionValueTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dimensionValueTypes"],
    "disableInstantTransitions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$instant$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disableInstantTransitions"],
    "distance",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$distance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distance"],
    "distance2D",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$distance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distance2D"],
    "domAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domAnimation"],
    "domMax",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$max$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domMax"],
    "domMin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$min$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domMin"],
    "eachAxis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachAxis"],
    "easeIn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeIn"],
    "easeInOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"],
    "easeOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"],
    "easingDefinitionToFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easingDefinitionToFunction"],
    "fillOffset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillOffset"],
    "fillWildcards",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fillWildcards"],
    "filterProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterProps"],
    "findDimensionValueType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findDimensionValueType"],
    "findValueType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findValueType"],
    "flushKeyframeResolvers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushKeyframeResolvers"],
    "followValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["followValue"],
    "frame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"],
    "frameData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"],
    "frameSteps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameSteps"],
    "generateLinearEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateLinearEasing"],
    "getAnimatableNone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimatableNone"],
    "getAnimationMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimationMap"],
    "getComputedStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"],
    "getDefaultTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultTransition"],
    "getDefaultValueType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultValueType"],
    "getEasingForSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEasingForSegment"],
    "getFeatureDefinitions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeatureDefinitions"],
    "getFinalKeyframe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFinalKeyframe"],
    "getMixer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMixer"],
    "getOptimisedAppearId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptimisedAppearId"],
    "getOriginIndex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOriginIndex"],
    "getValueAsType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueAsType"],
    "getValueTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"],
    "getVariableValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVariableValue"],
    "getVariantContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVariantContext"],
    "getViewAnimationLayerInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewAnimationLayerInfo"],
    "getViewAnimations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewAnimations"],
    "globalProjectionState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalProjectionState"],
    "has2DTranslate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["has2DTranslate"],
    "hasReducedMotionListener",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasReducedMotionListener"],
    "hasScale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasScale"],
    "hasTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTransform"],
    "hasWarned",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasWarned"],
    "hex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hex"],
    "hover",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hover"],
    "hsla",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsla"],
    "hslaToRgba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hslaToRgba"],
    "inView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inView"],
    "inertia",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inertia"],
    "initPrefersReducedMotion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initPrefersReducedMotion"],
    "interpolate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"],
    "invariant",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"],
    "invisibleValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invisibleValues"],
    "isAnimationControls",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAnimationControls"],
    "isBezierDefinition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBezierDefinition"],
    "isBrowser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$is$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"],
    "isCSSVariableName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVariableName"],
    "isCSSVariableToken",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCSSVariableToken"],
    "isControllingVariants",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isControllingVariants"],
    "isDeltaZero",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDeltaZero"],
    "isDragActive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragActive"],
    "isDragging",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"],
    "isEasingArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEasingArray"],
    "isElementKeyboardAccessible",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElementKeyboardAccessible"],
    "isElementTextInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElementTextInput"],
    "isForcedMotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isForcedMotionValue"],
    "isGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGenerator"],
    "isHTMLElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"],
    "isKeyframesTarget",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isKeyframesTarget"],
    "isMotionComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$is$2d$motion$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionComponent"],
    "isMotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"],
    "isNear",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNear"],
    "isNodeOrChild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeOrChild"],
    "isNumericalString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumericalString"],
    "isObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"],
    "isPrimaryPointer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimaryPointer"],
    "isSVGElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"],
    "isSVGSVGElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGSVGElement"],
    "isSVGTag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGTag"],
    "isTransitionDefined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTransitionDefined"],
    "isValidMotionProp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$valid$2d$prop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidMotionProp"],
    "isVariantLabel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVariantLabel"],
    "isVariantNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVariantNode"],
    "isWaapiSupportedEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWaapiSupportedEasing"],
    "isWillChangeMotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWillChangeMotionValue"],
    "isZeroValueString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isZeroValueString"],
    "keyframes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"],
    "m",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"],
    "makeAnimationInstant",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeAnimationInstant"],
    "makeUseVisualState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$use$2d$visual$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeUseVisualState"],
    "mapEasingToNativeEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapEasingToNativeEasing"],
    "mapValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapValue"],
    "maxGeneratorDuration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxGeneratorDuration"],
    "measurePageBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["measurePageBox"],
    "measureViewportBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["measureViewportBox"],
    "memo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"],
    "microtask",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microtask"],
    "millisecondsToSeconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"],
    "mirrorEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorEasing"],
    "mix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mix"],
    "mixArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixArray"],
    "mixColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"],
    "mixComplex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixComplex"],
    "mixImmediate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixImmediate"],
    "mixLinearColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixLinearColor"],
    "mixNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixNumber"],
    "mixObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixObject"],
    "mixValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixValues"],
    "mixVisibility",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixVisibility"],
    "motion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"],
    "motionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"],
    "moveItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveItem"],
    "nodeGroup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeGroup"],
    "noop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"],
    "number",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"],
    "numberValueTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberValueTypes"],
    "observeTimeline",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeTimeline"],
    "optimizedAppearDataAttribute",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$data$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimizedAppearDataAttribute"],
    "optimizedAppearDataId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimizedAppearDataId"],
    "parseAnimateLayoutArgs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAnimateLayoutArgs"],
    "parseCSSVariable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCSSVariable"],
    "parseValueFromTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseValueFromTransform"],
    "percent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percent"],
    "pipe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"],
    "pixelsToPercent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pixelsToPercent"],
    "positionalKeys",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["positionalKeys"],
    "prefersReducedMotion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"],
    "press",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["press"],
    "progress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"],
    "progressPercentage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressPercentage"],
    "propEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propEffect"],
    "propagateDirtyNodes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propagateDirtyNodes"],
    "px",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"],
    "readTransformValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readTransformValue"],
    "recordStats",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordStats"],
    "removeAxisDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeAxisDelta"],
    "removeAxisTransforms",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeAxisTransforms"],
    "removeBoxTransforms",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeBoxTransforms"],
    "removeItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"],
    "removePointDelta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePointDelta"],
    "renderHTML",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderHTML"],
    "renderSVG",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderSVG"],
    "resize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resize"],
    "resolveElements",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"],
    "resolveMotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$resolve$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMotionValue"],
    "resolveTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveTransition"],
    "resolveVariant",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariant"],
    "resolveVariantFromProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariantFromProps"],
    "reverseEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseEasing"],
    "rgbUnit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbUnit"],
    "rgba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"],
    "rootProjectionNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rootProjectionNode"],
    "scale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"],
    "scaleCorrectors",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleCorrectors"],
    "scalePoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalePoint"],
    "scrapeHTMLMotionValuesFromProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrapeHTMLMotionValuesFromProps"],
    "scrapeSVGMotionValuesFromProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrapeSVGMotionValuesFromProps"],
    "scroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scroll"],
    "scrollInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollInfo"],
    "secondsToMilliseconds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"],
    "setDragLock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDragLock"],
    "setFeatureDefinitions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFeatureDefinitions"],
    "setStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setStyle"],
    "setTarget",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTarget"],
    "spring",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spring"],
    "springValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["springValue"],
    "stagger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
    "startOptimizedAppearAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$start$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOptimizedAppearAnimation"],
    "startWaapiAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startWaapiAnimation"],
    "statsBuffer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsBuffer"],
    "steps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steps"],
    "styleEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleEffect"],
    "supportedWaapiEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportedWaapiEasing"],
    "supportsBrowserAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsBrowserAnimation"],
    "supportsFlags",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsFlags"],
    "supportsLinearEasing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsLinearEasing"],
    "supportsPartialKeyframes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsPartialKeyframes"],
    "supportsScrollTimeline",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsScrollTimeline"],
    "svgEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["svgEffect"],
    "sync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sync"],
    "testValueType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testValueType"],
    "time",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["time"],
    "transform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"],
    "transformAxis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformAxis"],
    "transformBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformBox"],
    "transformBoxPoints",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformBoxPoints"],
    "transformPropOrder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformPropOrder"],
    "transformProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformProps"],
    "transformValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformValue"],
    "transformValueTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformValueTypes"],
    "transformViewBoxPoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$transform$2d$viewbox$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformViewBoxPoint"],
    "translateAxis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateAxis"],
    "unwrapMotionComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$unwrap$2d$motion$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unwrapMotionComponent"],
    "updateMotionValuesFromProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMotionValuesFromProps"],
    "useAnimate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimate"],
    "useAnimateMini",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimateMini"],
    "useAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
    "useAnimationControls",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationControls"],
    "useAnimationFrame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"],
    "useComposedRefs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$composed$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"],
    "useCycle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$cycle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCycle"],
    "useDeprecatedAnimatedState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animated$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedState"],
    "useDeprecatedInvertedScale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$inverted$2d$scale$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInvertedScale"],
    "useDomEvent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$use$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDomEvent"],
    "useDragControls",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragControls"],
    "useElementScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$scroll$2f$use$2d$element$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useElementScroll"],
    "useFollowValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$follow$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFollowValue"],
    "useForceUpdate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$force$2d$update$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForceUpdate"],
    "useInView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
    "useInstantLayoutTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$use$2d$instant$2d$layout$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInstantLayoutTransition"],
    "useInstantTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$instant$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInstantTransition"],
    "useIsPresent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsPresent"],
    "useIsomorphicLayoutEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"],
    "useMotionTemplate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionTemplate"],
    "useMotionValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
    "useMotionValueEvent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"],
    "usePageInView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$page$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageInView"],
    "usePresence",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePresence"],
    "usePresenceData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2d$data$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePresenceData"],
    "useReducedMotion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
    "useReducedMotionConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotionConfig"],
    "useResetProjection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$use$2d$reset$2d$projection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResetProjection"],
    "useScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
    "useSpring",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
    "useTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTime"],
    "useTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
    "useUnmountEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$unmount$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnmountEffect"],
    "useVelocity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVelocity"],
    "useViewportScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$scroll$2f$use$2d$viewport$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useViewportScroll"],
    "useWillChange",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$will$2d$change$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWillChange"],
    "variantPriorityOrder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variantPriorityOrder"],
    "variantProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variantProps"],
    "velocityPerSecond",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["velocityPerSecond"],
    "vh",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vh"],
    "visualElementStore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visualElementStore"],
    "vw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vw"],
    "warnOnce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"],
    "warning",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warning"],
    "wrap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrap"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PopChild$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PresenceChild$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$event$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/events/event-info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/features/animations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$use$2d$visual$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/VisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$styles$2f$scale$2d$correction$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$build$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$delta$2d$calc$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$geometry$2f$models$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/projection/geometry/models.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$delay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/utils/delay.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$data$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/animation/optimized-appear/data-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$resolve$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-dom/dist/es/render/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$is$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/is-browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$composed$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$force$2d$update$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-force-update.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$unmount$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/features-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$max$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/features-max.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$min$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/features-min.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$scroll$2f$use$2d$element$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/scroll/use-element-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$scroll$2f$use$2d$viewport$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-motion-template.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$follow$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-follow-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$time$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-time.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-velocity.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$will$2d$change$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-will-change/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$will$2d$change$2f$WillChangeMotionValue$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-will-change/WillChangeMotionValue.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion-config.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$global$2d$config$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/motion-utils/dist/es/global-config.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/hooks/use-animate-style.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2d$data$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence-data.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$events$2f$use$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/events/use-dom-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$is$2d$motion$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/utils/is-motion-component.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$unwrap$2d$motion$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/utils/unwrap-motion-component.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$valid$2d$prop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$use$2d$instant$2d$layout$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/projection/use-instant-layout-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$projection$2f$use$2d$reset$2d$projection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/projection/use-reset-projection.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$cycle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-cycle.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$instant$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-instant-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$page$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/use-page-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$transform$2d$viewbox$2d$point$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/transform-viewbox-point.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$start$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/optimized-appear/start.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/context/PresenceContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$SwitchLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animated$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/hooks/use-animated-state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimateSharedLayout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/AnimateSharedLayout.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$DeprecatedLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$inverted$2d$scale$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/value/use-inverted-scale.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/components/Reorder/namespace.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animators$2f$waapi$2f$animate$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/animation/animators/waapi/animate-style.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$distance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/utils/distance.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clinica$2d$ansiedad$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clinica-ansiedad/node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=2c056_d4ea5cfa._.js.map