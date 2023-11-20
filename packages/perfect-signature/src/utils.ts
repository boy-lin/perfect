
/**
 * 防抖
 * @param fn
 * @param wait
 * @returns
 */
export function debounce(fn: Function, wait: number) {
  var timer: any;
  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(function () {
      fn(args);
    }, wait);
  };
}



export function getSvgPathFromStroke(stroke: [any, any]) {
  if (!stroke.length) return ""

  const d = stroke.reduce(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length]
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2)
      return acc
    },
    ["M", ...stroke[0], "Q"]
  )

  d.push("Z")
  return d.join(" ")
}