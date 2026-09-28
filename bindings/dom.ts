type Node = HTMLElement;
type Pens = CanvasRenderingContext2D;

const dpr = Math.min(window.devicePixelRatio || 1, 2);

const shape = (name: string) => (): Node => document.createElement(name);

export function body(): Node {
  return document.body;
}

export const box = shape("div");
export const run = shape("span");
export const paragraph = shape("p");
export const heading1 = shape("h1");
export const heading2 = shape("h2");
export const heading3 = shape("h3");
export const link = shape("a");
export const panel = shape("section");
export const bar = shape("nav");
export const surface = shape("canvas");

export function text(content: string): Text {
  return document.createTextNode(content);
}

export function append(parent: Node, child: Node): Node {
  parent.appendChild(child);
  return parent;
}

export function add_class(el: Node, classes: string): Node {
  for (const cls of classes.split(" ")) el.classList.add(cls);
  return el;
}

export function set_id(el: Node, id: string): Node {
  el.id = id;
  return el;
}

export function set_attr(el: Node, name: string, value: string): Node {
  el.setAttribute(name, value);
  return el;
}

export function set_var(el: Node, name: string, value: string): Node {
  el.style.setProperty(name, value);
  return el;
}

export function set_text(el: Node, content: string): Node {
  el.textContent = content;
  return el;
}

export function size_surface(el: HTMLCanvasElement, w: number, h: number): Node {
  el.width = Math.round(w * dpr);
  el.height = Math.round(h * dpr);
  return el;
}

export function context(el: HTMLCanvasElement): Pens {
  const pens = el.getContext("2d") as Pens;
  pens.setTransform(dpr, 0, 0, dpr, 0, 0);
  return pens;
}

export function clear(pens: Pens): Pens {
  pens.clearRect(0, 0, pens.canvas.width, pens.canvas.height);
  return pens;
}

export function dot(
  pens: Pens,
  x: number,
  y: number,
  r: number,
  color: string,
  alpha: number,
): Pens {
  pens.globalAlpha = alpha;
  pens.fillStyle = color;
  pens.beginPath();
  pens.arc(x, y, r, 0, Math.PI * 2);
  pens.fill();
  return pens;
}

export function thread(
  pens: Pens,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string,
  alpha: number,
): Pens {
  pens.globalAlpha = alpha;
  pens.strokeStyle = color;
  pens.lineWidth = 1;
  pens.beginPath();
  pens.moveTo(x1, y1);
  pens.lineTo(x2, y2);
  pens.stroke();
  return pens;
}

export function ring(
  pens: Pens,
  cx: number,
  cy: number,
  r: number,
  color: string,
  alpha: number,
): Pens {
  pens.globalAlpha = alpha;
  pens.strokeStyle = color;
  pens.lineWidth = 1;
  pens.beginPath();
  pens.arc(cx, cy, r, 0, Math.PI * 2);
  pens.stroke();
  return pens;
}

export function viewport_width(): number {
  return window.innerWidth;
}

export function viewport_height(): number {
  return window.innerHeight;
}
