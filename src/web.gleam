import gleam/list

pub type Element

pub type Context

@external(javascript, "../../../../bindings/dom.ts", "body")
pub fn body() -> Element

@external(javascript, "../../../../bindings/dom.ts", "box")
pub fn box() -> Element

@external(javascript, "../../../../bindings/dom.ts", "run")
pub fn run() -> Element

@external(javascript, "../../../../bindings/dom.ts", "paragraph")
pub fn paragraph() -> Element

@external(javascript, "../../../../bindings/dom.ts", "heading1")
pub fn heading1() -> Element

@external(javascript, "../../../../bindings/dom.ts", "heading2")
pub fn heading2() -> Element

@external(javascript, "../../../../bindings/dom.ts", "heading3")
pub fn heading3() -> Element

@external(javascript, "../../../../bindings/dom.ts", "link")
pub fn link() -> Element

@external(javascript, "../../../../bindings/dom.ts", "panel")
pub fn panel() -> Element

@external(javascript, "../../../../bindings/dom.ts", "bar")
pub fn bar() -> Element

@external(javascript, "../../../../bindings/dom.ts", "surface")
pub fn surface() -> Element

@external(javascript, "../../../../bindings/dom.ts", "text")
pub fn text(content: String) -> Element

@external(javascript, "../../../../bindings/dom.ts", "append")
pub fn append(parent: Element, child: Element) -> Element

@external(javascript, "../../../../bindings/dom.ts", "add_class")
pub fn add_class(el: Element, name: String) -> Element

@external(javascript, "../../../../bindings/dom.ts", "set_id")
pub fn set_id(el: Element, id: String) -> Element

@external(javascript, "../../../../bindings/dom.ts", "set_attr")
pub fn set_attr(el: Element, name: String, value: String) -> Element

@external(javascript, "../../../../bindings/dom.ts", "set_var")
pub fn set_var(el: Element, name: String, value: String) -> Element

@external(javascript, "../../../../bindings/dom.ts", "set_text")
pub fn set_text(el: Element, content: String) -> Element

@external(javascript, "../../../../bindings/dom.ts", "size_surface")
pub fn size_surface(surface: Element, w: Float, h: Float) -> Element

@external(javascript, "../../../../bindings/dom.ts", "context")
pub fn context(surface: Element) -> Context

@external(javascript, "../../../../bindings/dom.ts", "clear")
pub fn clear(ctx: Context) -> Context

@external(javascript, "../../../../bindings/dom.ts", "dot")
pub fn dot(
  ctx: Context,
  x: Float,
  y: Float,
  r: Float,
  color: String,
  alpha: Float,
) -> Context

@external(javascript, "../../../../bindings/dom.ts", "thread")
pub fn thread(
  ctx: Context,
  x1: Float,
  y1: Float,
  x2: Float,
  y2: Float,
  color: String,
  alpha: Float,
) -> Context

@external(javascript, "../../../../bindings/dom.ts", "viewport_width")
pub fn viewport_width() -> Float

@external(javascript, "../../../../bindings/dom.ts", "viewport_height")
pub fn viewport_height() -> Float

pub fn with_children(parent: Element, children: List(Element)) -> Element {
  list.fold(children, parent, append)
}

@external(javascript, "../../../../bindings/dom.ts", "ring")
pub fn ring(
  ctx: Context,
  cx: Float,
  cy: Float,
  r: Float,
  color: String,
  alpha: Float,
) -> Context
