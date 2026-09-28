import gleam/float
import gleam/int
import gleam/list
import web as dom
import events

const hero_line = "i build multiplayer games and the engines underneath them."

const about_bio =
  "i write rust and typescript, mostly for multiplayer games and the engines that run them. "
  <> "i care about the things players feel but never name: input latency, packet overhead, "
  <> "the frame that didn't drop."

const loop_line = "loop { code().optimize().overengineer()?; }"

type Project {
  Project(title: String, lang: String, stars: String, forks: String, blurb: String, link: String)
}

const projects = [
  Project(
    title: "nara.io",
    lang: "rust · wgpu · lua",
    stars: "6",
    forks: "1",
    blurb: "a 2d multiplayer shooter where the objective is dominating other tanks. "
      <> "packet schema obfuscation, behavioural anti-cheat, lua plugins, and webgpu rendering.",
    link: "https://github.com/gurmehar-singh-2009/nara.io",
  ),
  Project(
    title: "easygfx",
    lang: "typescript · webgpu · webgl",
    stars: "6",
    forks: "0",
    blurb: "a backend-agnostic 2d/3d rendering engine. obj loading, pbr lighting, "
      <> "text rendering. the api doesn't fight you.",
    link: "https://github.com/gurmehar-singh-2009/easygfx",
  ),
  Project(
    title: "roamer.io",
    lang: "rust · pixi.js",
    stars: "1",
    forks: "0",
    blurb: "a multiplayer survival game. harvest resources, upgrade your items, build "
      <> "bases, tame animals, attack other players.",
    link: "https://github.com/gurmehar-singh-2009/roamer.io",
  ),
]

type Stat {
  Stat(value: String, label: String)
}

// todo: make this realtime
const stats = [
  Stat("26", "public repos"),
  Stat("6", "followers"),
  Stat("124", "contributions / yr"),
  Stat("3", "years on github"),
]

const github = "https://github.com/gurmehar-singh-2009"

pub fn main() -> Nil {
  let sky = dom.surface() |> dom.add_class("sky")

  let page =
    dom.box()
    |> dom.add_class("page")
    |> dom.with_children([nav(), hero(), stats_bar(), work(), about(), foot()])

  let _ = dom.append(dom.body(), sky)
  let _ = dom.append(dom.body(), page)

  ignite(sky)
}

fn nav() -> dom.Element {
  dom.bar()
  |> dom.add_class("bar")
  |> dom.with_children([
    dom.link()
    |> dom.add_class("brand")
    |> dom.set_attr("href", "#top")
    |> dom.set_text("gurmehar singh"),
    dom.box()
    |> dom.add_class("nav-right")
    |> dom.with_children([
      dom.run() |> dom.add_class("nav-meta") |> dom.set_text("rust · typescript · webgpu"),
      dom.link()
      |> dom.add_class("nav-link")
      |> dom.set_attr("href", github)
      |> dom.set_text("github ↗"),
    ]),
  ])
}

fn hero() -> dom.Element {
  dom.panel()
  |> dom.set_id("top")
  |> dom.add_class("hero")
  |> dom.with_children([
    rising(
      dom.heading1()
      |> dom.add_class("hero-name")
      |> dom.set_text("Gurmehar Singh"),
      0,
    ),
    rising(
      dom.paragraph() |> dom.add_class("hero-line") |> dom.set_text(hero_line),
      1,
    ),
  ])
}

fn stats_bar() -> dom.Element {
  dom.box()
  |> dom.add_class("stats-bar")
  |> dom.with_children(list.map(stats, stat_cell))
}

fn stat_cell(s: Stat) -> dom.Element {
  dom.box()
  |> dom.add_class("stat")
  |> dom.with_children([
    dom.run() |> dom.add_class("stat-value") |> dom.set_text(s.value),
    dom.run() |> dom.add_class("stat-label") |> dom.set_text(s.label),
  ])
}

fn work() -> dom.Element {
  dom.panel()
  |> dom.set_id("work")
  |> dom.add_class("section")
  |> dom.with_children([
    section_head("selected work"),
    dom.box()
    |> dom.add_class("project-grid")
    |> dom.with_children(list.index_map(projects, project_card)),
  ])
}

fn section_head(title: String) -> dom.Element {
  dom.box()
  |> dom.add_class("section-head")
  |> dom.with_children([
    dom.run() |> dom.add_class("section-title") |> dom.set_text(title),
  ])
}

fn project_card(p: Project, i: Int) -> dom.Element {
  dom.box()
  |> dom.add_class("project-card")
  |> dom.set_var("--i", int.to_string(i))
  |> dom.with_children([
    dom.run() |> dom.add_class("card-no") |> dom.set_text(pad2(i + 1)),
    dom.box()
    |> dom.add_class("card-main")
    |> dom.with_children([
      dom.link()
      |> dom.add_class("card-title")
      |> dom.set_attr("href", p.link)
      |> dom.set_text(p.title),
      dom.paragraph() |> dom.add_class("card-blurb") |> dom.set_text(p.blurb),
    ]),
    dom.box()
    |> dom.add_class("card-side")
    |> dom.with_children([
      dom.run() |> dom.add_class("card-stats") |> dom.set_text("★ " <> p.stars <> " · ⑂ " <> p.forks),
      dom.run() |> dom.add_class("card-lang") |> dom.set_text(p.lang),
    ]),
  ])
}

fn pad2(n: Int) -> String {
  case n < 10 {
    True -> "0" <> int.to_string(n)
    False -> int.to_string(n)
  }
}

fn about() -> dom.Element {
  dom.panel()
  |> dom.set_id("about")
  |> dom.add_class("section")
  |> dom.with_children([
    section_head("about"),
    rising(dom.paragraph() |> dom.add_class("about-bio") |> dom.set_text(about_bio), 0),
    rising(dom.run() |> dom.add_class("loop") |> dom.set_text(loop_line), 1),
  ])
}

fn foot() -> dom.Element {
  dom.panel()
  |> dom.add_class("foot")
  |> dom.with_children([
    dom.paragraph()
    |> dom.add_class("foot-line")
    |> dom.with_children([
      dom.text("everything else on "),
      dom.link()
      |> dom.add_class("foot-link")
      |> dom.set_attr("href", github)
      |> dom.set_text("github ↗"),
    ]),
    dom.run()
    |> dom.add_class("foot-note")
    |> dom.set_text("© 2026 · background: an n-body simulation, integrated in gleam"),
  ])
}

fn rising(node: dom.Element, index: Int) -> dom.Element {
  node
  |> dom.add_class("rise")
  |> dom.set_var("--i", int.to_string(index))
}

type Body {
  Body(
    x: Float,
    y: Float,
    vx: Float,
    vy: Float,
    mass: Float,
    size: Float,
    alpha: Float,
    orbit: Float,
    trail: List(#(Float, Float)),
  )
}

type Spec {
  Spec(radius: Float, mass: Float, size: Float, alpha: Float)
}

const orbit_specs = [
  Spec(90.0, 2.0, 1.6, 0.35),
  Spec(145.0, 3.0, 1.9, 0.4),
  Spec(205.0, 6.0, 2.4, 0.55),
  Spec(275.0, 4.0, 1.8, 0.3),
  Spec(350.0, 40.0, 3.0, 0.45),
]

const dirs = [
  #(1.0, 0.0),
  #(0.30901699, 0.95105652),
  #(-0.80901699, 0.58778525),
  #(-0.80901699, -0.58778525),
  #(0.30901699, -0.95105652),
]

type Sky {
  Sky(
    surface: dom.Element,
    ctx: dom.Context,
    w: Float,
    h: Float,
    bodies: List(Body),
    last_t: Float,
  )
}

const g = 70.0

const star_mass = 4200.0

const soft_sq = 576.0

const trail_len = 50

const white = "rgb(255, 255, 255)"

fn ignite(surface: dom.Element) -> Nil {
  let w = dom.viewport_width()
  let h = dom.viewport_height()
  let _ = dom.size_surface(surface, w, h)
  let ctx = dom.context(surface)
  let sky = Sky(surface, ctx, w, h, system(w, h), 0.0)
  events.on_frame(fn(t) { orbit(sky, t) })
}

fn orbit(sky: Sky, now: Float) -> Nil {
  let sky = advance(sky, now)
  paint(sky)
  events.on_frame(fn(t) { orbit(sky, t) })
}

fn advance(sky: Sky, now: Float) -> Sky {
  let w = dom.viewport_width()
  let h = dom.viewport_height()
  let sky = case w == sky.w && h == sky.h {
    True -> sky
    False -> {
      let _ = dom.size_surface(sky.surface, w, h)
      let ctx = dom.context(sky.surface)
      Sky(..sky, ctx: ctx, w: w, h: h, bodies: rescale(sky.bodies, sky.w, sky.h, w, h))
    }
  }

  let dt = case sky.last_t <=. 0.0 {
    True -> 0.0
    False -> {
      let elapsed = now -. sky.last_t
      let secs = elapsed /. 1000.0
      case secs >. 0.033 {
        True -> 0.033
        False -> secs
      }
    }
  }
  let step_size = dt /. 4.0
  let bodies = advance_n(4, sky.bodies, step_size)
  let bodies = rein(sky.w, sky.h, bodies)
  let bodies = list.map(bodies, remember)
  Sky(..sky, bodies: bodies, last_t: now)
}

fn system(w: Float, h: Float) -> List(Body) {
  let cx = w *. 0.5
  let cy = h *. 0.5
  let s = scale_for(w, h)
  let planets = list.index_map(orbit_specs, fn(spec, i) { planet(spec, i, cx, cy, s) })

  let #(mx, my, mvx, mvy) =
    list.fold(planets, #(0.0, 0.0, 0.0, 0.0), fn(acc, p) {
      let px = p.x -. cx
      let py = p.y -. cy
      let #(ax, ay, avx, avy) = acc
      #(ax +. p.mass *. px, ay +. p.mass *. py, avx +. p.mass *. p.vx, avy +. p.mass *. p.vy)
    })

  let star =
    Body(
      x: cx -. mx /. star_mass,
      y: cy -. my /. star_mass,
      vx: 0.0 -. mvx /. star_mass,
      vy: 0.0 -. mvy /. star_mass,
      mass: star_mass,
      size: 2.8,
      alpha: 0.5,
      orbit: 0.0,
      trail: [],
    )
  [star, ..planets]
}

fn planet(spec: Spec, i: Int, cx: Float, cy: Float, s: Float) -> Body {
  let jitter = 1.0 +. float.random() *. 0.15
  let r = spec.radius *. s *. jitter
  let assert Ok(#(ux, uy)) = dirs
    |> list.drop(i % 5)
    |> list.first()
  let total = star_mass +. spec.mass
  let ecc = 0.96 +. float.random() *. 0.08
  let speed = circular_speed(total, r) *. ecc
  Body(
    x: cx +. r *. ux,
    y: cy +. r *. uy,
    vx: 0.0 -. uy *. speed,
    vy: ux *. speed,
    mass: spec.mass,
    size: spec.size,
    alpha: spec.alpha,
    orbit: r,
    trail: [],
  )
}

fn circular_speed(m: Float, r: Float) -> Float {
  let gm = g *. m
  let v2 = gm /. r
  let assert Ok(v) = float.square_root(v2)
  v
}

fn scale_for(w: Float, h: Float) -> Float {
  let m = smaller(w, h)
  let s = m /. 900.0
  case s >. 1.15 {
    True -> 1.15
    False ->
      case s <. 0.45 {
        True -> 0.45
        False -> s
      }
  }
}

fn advance_n(n: Int, bodies: List(Body), h: Float) -> List(Body) {
  case n <= 0 {
    True -> bodies
    False -> advance_n(n - 1, step(bodies, h), h)
  }
}

fn step(bodies: List(Body), h: Float) -> List(Body) {
  let accs = accelerations(bodies)
  let moved = drift(bodies, accs, h)
  let accs2 = accelerations(moved)
  kick(moved, accs, accs2, h)
}

fn accelerations(bodies: List(Body)) -> List(#(Float, Float)) {
  list.index_map(bodies, fn(b, i) { pull(i, b, bodies) })
}

fn pull(i: Int, b: Body, bodies: List(Body)) -> #(Float, Float) {
  list.index_fold(bodies, #(0.0, 0.0), fn(acc, other, j) {
    case j == i {
      True -> acc
      False -> {
        let #(ax, ay) = acc
        let dx = other.x -. b.x
        let dy = other.y -. b.y
        let d2 = dx *. dx +. dy *. dy +. soft_sq
        let assert Ok(d) = float.square_root(d2)
        let f = g *. other.mass /. d2
        #(ax +. f *. dx /. d, ay +. f *. dy /. d)
      }
    }
  })
}

fn drift(bodies: List(Body), accs: List(#(Float, Float)), h: Float) -> List(Body) {
  let half = h *. 0.5
  case bodies, accs {
    [b, ..bt], [a, ..at] -> {
      let px = a.0 *. half *. h
      let py = a.1 *. half *. h
      [
        Body(..b, x: b.x +. b.vx *. h +. px, y: b.y +. b.vy *. h +. py),
        ..drift(bt, at, h),
      ]
    }
    _, _ -> []
  }
}

fn kick(
  bodies: List(Body),
  accs: List(#(Float, Float)),
  accs2: List(#(Float, Float)),
  h: Float,
) -> List(Body) {
  let half = h *. 0.5
  case bodies, accs, accs2 {
    [b, ..bt], [a1, ..a1t], [a2, ..a2t] -> {
      let dvx = a1.0 +. a2.0
      let dvy = a1.1 +. a2.1
      [
        Body(..b, vx: b.vx +. dvx *. half, vy: b.vy +. dvy *. half),
        ..kick(bt, a1t, a2t, h),
      ]
    }
    _, _, _ -> []
  }
}

fn remember(b: Body) -> Body {
  Body(..b, trail: list.take([#(b.x, b.y), ..b.trail], trail_len))
}

fn rein(w: Float, h: Float, bodies: List(Body)) -> List(Body) {
  case list.first(bodies) {
    Ok(star) -> {
      let reach = larger(w, h) *. 1.5
      let reach2 = reach *. reach
      list.map(bodies, fn(b) {
        let dx = b.x -. star.x
        let dy = b.y -. star.y
        let d2 = dx *. dx +. dy *. dy
        case d2 >. reach2 && b.orbit >. 0.0 {
          True -> reset(b, star)
          False -> b
        }
      })
    }
    Error(_) -> bodies
  }
}

fn reset(b: Body, star: Body) -> Body {
  let dx = b.x -. star.x
  let dy = b.y -. star.y
  let d2 = dx *. dx +. dy *. dy
  let #(ux, uy) = case d2 >. 1.0 {
    True -> {
      let assert Ok(d) = float.square_root(d2)
      #(dx /. d, dy /. d)
    }
    False -> #(1.0, 0.0)
  }
  let total = star.mass +. b.mass
  let v = circular_speed(total, b.orbit)
  Body(
    ..b,
    x: star.x +. b.orbit *. ux,
    y: star.y +. b.orbit *. uy,
    vx: star.vx -. uy *. v,
    vy: star.vy +. ux *. v,
    trail: [],
  )
}

fn rescale(bodies: List(Body), ow: Float, oh: Float, nw: Float, nh: Float) -> List(Body) {
  let raw = smaller(nw, nh) /. smaller(ow, oh)
  let s = case raw >. 1.6 {
    True -> 1.6
    False ->
      case raw <. 0.5 {
        True -> 0.5
        False -> raw
      }
  }
  let assert Ok(vs) = float.square_root(s)
  let ocx = ow *. 0.5
  let ocy = oh *. 0.5
  let ncx = nw *. 0.5
  let ncy = nh *. 0.5
  list.map(bodies, fn(b) {
    let dx = b.x -. ocx
    let dy = b.y -. ocy
    Body(
      ..b,
      x: ncx +. dx *. s,
      y: ncy +. dy *. s,
      vx: b.vx *. vs,
      vy: b.vy *. vs,
      orbit: b.orbit *. s,
      trail: [],
    )
  })
}

fn paint(sky: Sky) -> Nil {
  let _ = dom.clear(sky.ctx)
  list.each(sky.bodies, fn(b) {
    draw_trail(sky.ctx, b.alpha, b.trail)
    let _ = dom.dot(sky.ctx, b.x, b.y, b.size, white, b.alpha)
    case b.orbit <=. 0.0 {
      True -> {
        let _ = dom.dot(sky.ctx, b.x, b.y, b.size *. 3.5, white, 0.03)
        Nil
      }
      False -> Nil
    }
  })
}

fn draw_trail(ctx: dom.Context, alpha: Float, trail: List(#(Float, Float))) -> Nil {
  let total = list.length(trail)
  do_trail(ctx, alpha *. 0.15, trail, total, 0)
}

fn do_trail(
  ctx: dom.Context,
  base: Float,
  pts: List(#(Float, Float)),
  total: Int,
  i: Int,
) -> Nil {
  case pts {
    [a, b, ..rest] -> {
      let fade = int.to_float(total - i) /. int.to_float(total)
      let _ = dom.thread(ctx, a.0, a.1, b.0, b.1, white, base *. fade)
      do_trail(ctx, base, [b, ..rest], total, i + 1)
    }
    _ -> Nil
  }
}

fn smaller(a: Float, b: Float) -> Float {
  case a <. b {
    True -> a
    False -> b
  }
}

fn larger(a: Float, b: Float) -> Float {
  case a >. b {
    True -> a
    False -> b
  }
}
