export class DomElement {
  constructor(public readonly element: HTMLElement) {}
}

export function body(): HTMLElement {
  return document.body;
}
