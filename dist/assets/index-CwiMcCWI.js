(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&family=Ubuntu+Mono:wght@400&display=swap");

:root {
  --bg: #000000;
  --bg-raise: #0a0a0a;
  --text: #ffffff;
  --dim: #888888;
  --faint: #444444;
  --line: #1a1a1a;
  --mono: "Ubuntu Mono", ui-monospace, monospace;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; color-scheme: dark; }

body {
  font-family: "Ubuntu", "Segoe UI", sans-serif;
  font-weight: 300;
  color: var(--text);
  background: var(--bg);
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

::selection { background: #ffffff; color: #000000; }

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--faint); }

:focus-visible { outline: 1px solid var(--text); outline-offset: 3px; }

[id] { scroll-margin-top: 80px; }

.sky { position: fixed; inset: 0; z-index: 0; pointer-events: none; }

.page {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 48px 120px;
}

.bar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  margin: 0 -48px;
  padding: 0 48px;
  background: var(--bg);
  border-bottom: 1px solid var(--line);
}

.brand {
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.02em;
}

.nav-right { display: flex; align-items: center; gap: 32px; }

.nav-meta {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--faint);
  letter-spacing: 0.12em;
}

.nav-link {
  color: var(--dim);
  text-decoration: none;
  font-size: 0.88rem;
  transition: color 0.2s;
}

.nav-link:hover { color: var(--text); }

.hero {
  min-height: 68vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 60px 0;
}

.hero-name {
  font-size: clamp(3.5rem, 8vw, 6.5rem);
  line-height: 1.0;
  font-weight: 300;
  letter-spacing: -0.035em;
}

.hero-line {
  color: var(--dim);
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  line-height: 1.4;
  max-width: 30ch;
}

.stats-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.stat {
  padding: 32px 24px;
  border-right: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat:last-child { border-right: none; }

.stat-value {
  font-family: var(--mono);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 400;
  color: var(--text);
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--faint);
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.section { padding-top: 100px; }

.section-head {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 36px;
}

.section-head::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--line);
}

.section-title {
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--dim);
}

.project-grid {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--line);
}

.project-card {
  display: grid;
  grid-template-columns: 56px 1fr auto;
  column-gap: 24px;
  align-items: start;
  padding: 34px 24px;
  border-bottom: 1px solid var(--line);
  animation: rise 0.5s ease backwards;
  animation-delay: calc(var(--i, 0) * 100ms);
  transition: padding-left 0.3s ease, background 0.3s;
}

.project-card:hover { padding-left: 12px; background: var(--bg-raise); }

.card-no {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--faint);
  padding-top: 7px;
  transition: color 0.25s;
}

.project-card:hover .card-no { color: var(--text); }

.card-main { display: flex; flex-direction: column; gap: 10px; }

.card-title {
  color: var(--text);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  width: fit-content;
}

.card-blurb { color: var(--dim); font-size: 0.95rem; line-height: 1.6; max-width: 72ch; }

.card-side {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  padding-top: 6px;
  white-space: nowrap;
}

.card-stats {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--dim);
}

.card-lang {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--faint);
  letter-spacing: 0.08em;
}

.about-bio { color: var(--dim); font-size: 1rem; line-height: 1.75; max-width: 60ch; }

.loop {
  display: block;
  margin-top: 24px;
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--faint);
}

.foot {
  margin-top: 140px;
  border-top: 1px solid var(--line);
  padding-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.foot-line { color: var(--dim); font-size: 0.88rem; }

.foot-link { color: var(--text); text-decoration: none; }
.foot-link:hover { text-decoration: underline; }

.foot-note { color: var(--faint); font-size: 0.72rem; font-family: var(--mono); }

.rise { animation: rise 0.5s ease backwards; animation-delay: calc(var(--i, 0) * 80ms); }

@keyframes rise { from { opacity: 0; transform: translateY(10px); } }

@media (max-width: 900px) {
  .page { padding: 0 24px 80px; }
  .bar { margin: 0 -24px; padding: 0 24px; }
  .nav-meta { display: none; }
  .hero { min-height: 50vh; }
  .stats-bar { grid-template-columns: repeat(2, 1fr); }
  .stat { padding: 24px 16px; }
  .stat:nth-child(2) { border-right: none; }
  .stat:nth-child(1), .stat:nth-child(2) { border-bottom: 1px solid var(--line); }
  .project-card { grid-template-columns: 32px 1fr; }
  .card-side {
    grid-column: 2;
    flex-direction: row;
    align-items: baseline;
    gap: 16px;
  }
}

@media (max-width: 600px) {
  .project-card { grid-template-columns: 1fr; }
  .card-no { display: none; }
  .card-side { grid-column: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .rise, .project-card { animation: none; }
  .project-card { transition: none; }
  html { scroll-behavior: auto; }
}
`;function t(){let t=document.createElement(`style`);t.textContent=e,document.head.appendChild(t)}var n=class{withFields(e){let t=Object.keys(this).map(t=>t in e?e[t]:this[t]);return new this.constructor(...t)}},r=class{static fromArray(e,t){return a(e,t)}[Symbol.iterator](){return new o(this)}toArray(){return[...this]}atLeastLength(e){let t=this;for(;e-->0&&t;)t=t.tail;return t!==void 0}hasLength(e){let t=this;for(;e-->0&&t;)t=t.tail;return e===-1&&t instanceof s}countLength(){let e=this,t=0;for(;e;)e=e.tail,t++;return t-1}};function i(e,t){return new l(e,t)}function a(e,t){let n=t||c;for(let t=e.length-1;t>=0;--t)n=new l(e[t],n);return n}var o=class{#e;constructor(e){this.#e=e}next(){if(this.#e instanceof s)return{done:!0};{let{head:e,tail:t}=this.#e;return this.#e=t,{value:e,done:!1}}}},s=class extends r{},c=new s,l=class extends r{constructor(e,t){super(),this.head=e,this.tail=t}},u=class e extends n{static isResult(t){return t instanceof e}},d=class extends u{constructor(e){super(),this[0]=e}isOk(){return!0}},f=class extends u{constructor(e){super(),this[0]=e}isOk(){return!1}};function p(e,t){return t===0?0:e/t}function m(e,t,n,r,i,a,o){let s=new globalThis.Error(a);s.gleam_error=e,s.file=t,s.module=n,s.line=r,s.function=i,s.fn=i;for(let e in o)s[e]=o[e];return s}new class extends n{},new class extends n{},new class extends n{},new class extends n{},new class extends n{},new class extends n{};function h(e,t){for(;;){let n=e,r=t;if(n instanceof s)return r;e=n.tail,t=r+1}}function g(e){return h(e,0)}function ee(e,t){for(;;){let n=e,r=t;if(n instanceof s)return r;{let a=n.head;e=n.tail,t=i(a,r)}}}function _(e){return ee(e,c)}function te(e){if(e instanceof s)return new f(void 0);{let t=e.head;return new d(t)}}function ne(e,t,n){for(;;){let r=e,a=t,o=n;if(r instanceof s)return _(o);{let s=r.head;e=r.tail,t=a,n=i(a(s),o)}}}function v(e,t){return ne(e,t,c)}function re(e,t,n,r){for(;;){let a=e,o=t,c=n,l=r;if(a instanceof s)return _(l);{let s=a.head,u=a.tail,d=i(o(s,c),l);e=u,t=o,n=c+1,r=d}}}function y(e,t){return re(e,t,0,c)}function ie(e,t){for(;;){let n=e,r=t;if(r<=0||n instanceof s)return n;e=n.tail,t=r-1}}function ae(e,t,n){for(;;){let r=e,a=t,o=n;if(a<=0||r instanceof s)return _(o);{let s=r.head;e=r.tail,t=a-1,n=i(s,o)}}}function oe(e,t){return ae(e,t,c)}function se(e,t,n){for(;;){let r=e,i=t,a=n;if(r instanceof s)return i;{let o=r.head;e=r.tail,t=a(i,o),n=a}}}function ce(e,t,n,r){for(;;){let i=e,a=t,o=n,c=r;if(i instanceof s)return a;{let s=i.head;e=i.tail,t=o(a,s,c),n=o,r=c+1}}}function le(e,t,n){return ce(e,t,n,0)}function ue(e,t){for(;;){let n=e,r=t;if(n instanceof s)return;{let i=n.head,a=n.tail;r(i),e=a,t=r}}}new class extends n{},new class extends n{},new class extends n{};function b(e){return e}function x(e){return e.toString()}var S=[` `,`	`,`
`,`\v`,`\f`,`\r`,``,`\u2028`,`\u2029`].join(``);`${S}`,`${S}`;function de(e){return Math.ceil(e)}function fe(e,t){return e**+t}function C(){let e=Math.random();return e===1?C():e}function pe(e,t){let n=de(t)-t>0;return e<0&&n||e===0&&t<0?new f(void 0):new d(fe(e,t))}function w(e){return pe(e,.5)}function me(e){requestAnimationFrame(e)}var T=Math.min(window.devicePixelRatio||1,2),E=e=>()=>document.createElement(e);function he(){return document.body}var D=E(`div`),O=E(`span`),k=E(`p`),ge=E(`h1`),A=E(`a`),j=E(`section`),_e=E(`nav`),ve=E(`canvas`);function ye(e){return document.createTextNode(e)}function M(e,t){return e.appendChild(t),e}function N(e,t){for(let n of t.split(` `))e.classList.add(n);return e}function P(e,t){return e.id=t,e}function F(e,t,n){return e.setAttribute(t,n),e}function I(e,t,n){return e.style.setProperty(t,n),e}function L(e,t){return e.textContent=t,e}function R(e,t,n){return e.width=Math.round(t*T),e.height=Math.round(n*T),e}function z(e){let t=e.getContext(`2d`);return t.setTransform(T,0,0,T,0,0),t}function be(e){return e.clearRect(0,0,e.canvas.width,e.canvas.height),e}function B(e,t,n,r,i,a){return e.globalAlpha=a,e.fillStyle=i,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill(),e}function xe(e,t,n,r,i,a,o){return e.globalAlpha=o,e.strokeStyle=a,e.lineWidth=1,e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.stroke(),e}function V(){return window.innerWidth}function Se(){return window.innerHeight}function H(e,t){return se(t,e,M)}var U=`src/main.gleam`,W=class extends n{constructor(e,t,n,r,i,a){super(),this.title=e,this.lang=t,this.stars=n,this.forks=r,this.blurb=i,this.link=a}},G=class extends n{constructor(e,t){super(),this.value=e,this.label=t}},K=class extends n{constructor(e,t,n,r,i,a,o,s,c){super(),this.x=e,this.y=t,this.vx=n,this.vy=r,this.mass=i,this.size=a,this.alpha=o,this.orbit=s,this.trail=c}},q=class extends n{constructor(e,t,n,r){super(),this.radius=e,this.mass=t,this.size=n,this.alpha=r}},J=class extends n{constructor(e,t,n,r,i,a){super(),this.surface=e,this.ctx=t,this.w=n,this.h=r,this.bodies=i,this.last_t=a}},Y=`rgb(255, 255, 255)`,Ce=50,we=70,Te=576,X=4200,Ee=a([[1,0],[.30901699,.95105652],[-.80901699,.58778525],[-.80901699,-.58778525],[.30901699,-.95105652]]),De=a([new q(90,2,1.6,.35),new q(145,3,1.9,.4),new q(205,6,2.4,.55),new q(275,4,1.8,.3),new q(350,40,3,.45)]),Oe=`https://github.com/gurmehar-singh-2009`,ke=`loop { code().optimize().overengineer()?; }`,Ae=`i write rust and typescript, mostly for multiplayer games and the engines that run them. i care about the things players feel but never name: input latency, packet overhead, the frame that didn't drop.`,je=a([new W(`nara.io`,`rust · wgpu · lua`,`6`,`1`,`a 2d multiplayer shooter where the objective is dominating other tanks. packet schema obfuscation, behavioural anti-cheat, lua plugins, and webgpu rendering.`,`https://github.com/gurmehar-singh-2009/nara.io`),new W(`easygfx`,`typescript · webgpu · webgl`,`6`,`0`,`a backend-agnostic 2d/3d rendering engine. obj loading, pbr lighting, text rendering. the api doesn't fight you.`,`https://github.com/gurmehar-singh-2009/easygfx`),new W(`roamer.io`,`rust · pixi.js`,`1`,`0`,`a multiplayer survival game. harvest resources, upgrade your items, build bases, tame animals, attack other players.`,`https://github.com/gurmehar-singh-2009/roamer.io`)]),Me=a([new G(`26`,`public repos`),new G(`6`,`followers`),new G(`124`,`contributions / yr`),new G(`3`,`years on github`)]),Ne=`i build multiplayer games and the engines underneath them.`;function Pe(e,t,n,r,a){for(;;){let o=e,c=t,l=n,u=r,d=a;if(l instanceof s)return;{let f=l.tail;if(f instanceof s)return;{let s=l.head,m=f.head,h=f.tail,g=p(b(u-d),b(u));xe(o,s[0],s[1],m[0],m[1],Y,c*g),e=o,t=c,n=i(m,h),r=u,a=d+1}}}}function Fe(e,t,n){let r=g(n);return Pe(e,t*.15,n,r,0)}function Ie(e){return be(e.ctx),ue(e.bodies,t=>{if(Fe(e.ctx,t.alpha,t.trail),B(e.ctx,t.x,t.y,t.size,Y,t.alpha),t.orbit<=0){B(e.ctx,t.x,t.y,t.size*3.5,Y,.03);return}})}function Le(e){return new K(e.x,e.y,e.vx,e.vy,e.mass,e.size,e.alpha,e.orbit,oe(i([e.x,e.y],e.trail),Ce))}function Re(e,t){let n=w(p(we*e,t)),r;if(n instanceof d)r=n[0];else throw m(`let_assert`,U,`main`,372,`circular_speed`,`Pattern match failed, no pattern matched the value.`,{value:n,start:9260,end:9300,pattern_start:9271,pattern_end:9276});return r}function ze(e,t){let n=e.x-t.x,r=e.y-t.y,i=n*n+r*r,a;if(i>1){let e=w(i),t;if(e instanceof d)t=e[0];else throw m(`let_assert`,U,`main`,488,`reset`,`Pattern match failed, no pattern matched the value.`,{value:e,start:12020,end:12060,pattern_start:12031,pattern_end:12036});a=[p(n,t),p(r,t)]}else a=[1,0];let o=a,s=o[0],l=o[1],u=Re(t.mass+e.mass,e.orbit);return new K(t.x+e.orbit*s,t.y+e.orbit*l,t.vx-l*u,t.vy+s*u,e.mass,e.size,e.alpha,e.orbit,c)}function Be(e,t){return e>t?e:t}function Ve(e,t,n){let r=te(n);if(r instanceof d){let i=r[0],a=Be(e,t)*1.5,o=a*a;return v(n,e=>{let t=e.x-i.x,n=e.y-i.y;return t*t+n*n>o&&e.orbit>0?ze(e,i):e})}return n}function He(e,t,n,r){let a=r*.5;if(e instanceof s||t instanceof s||n instanceof s)return c;{let o=e.head,s=e.tail,c=t.head,l=t.tail,u=n.head,d=n.tail,f=c[0]+u[0],p=c[1]+u[1];return i(new K(o.x,o.y,o.vx+f*a,o.vy+p*a,o.mass,o.size,o.alpha,o.orbit,o.trail),He(s,l,d,r))}}function Ue(e,t,n){return le(n,[0,0],(n,r,i)=>{if(i===e)return n;{let e=n[0],i=n[1],a=r.x-t.x,o=r.y-t.y,s=a*a+o*o+Te,c=w(s),l;if(c instanceof d)l=c[0];else throw m(`let_assert`,U,`main`,416,`pull`,`Pattern match failed, no pattern matched the value.`,{value:c,start:10329,end:10369,pattern_start:10340,pattern_end:10345});let u=p(we*r.mass,s);return[e+p(u*a,l),i+p(u*o,l)]}})}function We(e){return y(e,(t,n)=>Ue(n,t,e))}function Ge(e,t,n){let r=n*.5;if(e instanceof s||t instanceof s)return c;{let a=e.head,o=e.tail,s=t.head,c=t.tail,l=s[0]*r*n,u=s[1]*r*n;return i(new K(a.x+a.vx*n+l,a.y+a.vy*n+u,a.vx,a.vy,a.mass,a.size,a.alpha,a.orbit,a.trail),Ge(o,c,n))}}function Ke(e,t){let n=We(e),r=Ge(e,n,t);return He(r,n,We(r),t)}function qe(e,t,n){for(;;){let r=e,i=t,a=n;if(r<=0)return i;e=r-1,t=Ke(i,a),n=a}}function Z(e,t){return e<t?e:t}function Je(e,t,n,r,i){let a=p(Z(r,i),Z(t,n)),o;o=a>1.6?1.6:a<.5?.5:a;let s=o,l=w(s),u;if(l instanceof d)u=l[0];else throw m(`let_assert`,U,`main`,515,`rescale`,`Pattern match failed, no pattern matched the value.`,{value:l,start:12630,end:12670,pattern_start:12641,pattern_end:12647});let f=t*.5,h=n*.5,g=r*.5,ee=i*.5;return v(e,e=>{let t=e.x-f,n=e.y-h;return new K(g+t*s,ee+n*s,e.vx*u,e.vy*u,e.mass,e.size,e.alpha,e.orbit*s,c)})}function Ye(e,t){let n=V(),r=Se(),i;if(n===e.w&&r===e.h)i=e;else{R(e.surface,n,r);let t=z(e.surface);i=new J(e.surface,t,n,r,Je(e.bodies,e.w,e.h,n,r),e.last_t)}let a=i,o;if(a.last_t<=0)o=0;else{let e=(t-a.last_t)/1e3;o=e>.033?.033:e}let s=o/4,c=qe(4,a.bodies,s),l=v(Ve(a.w,a.h,c),Le);return new J(a.surface,a.ctx,a.w,a.h,l,t)}function Xe(e,t){let n=Ye(e,t);return Ie(n),me(e=>Xe(n,e))}function Ze(e,t,n,r,i){let a=1+C()*.15,o=e.radius*i*a,s;s=te(ie(Ee,t%5));let l=s,u,f;if(l instanceof d)u=l[0][0],f=l[0][1];else throw m(`let_assert`,U,`main`,350,`planet`,`Pattern match failed, no pattern matched the value.`,{value:l,start:8768,end:8843,pattern_start:8779,pattern_end:8792});let p=X+e.mass,h=.96+C()*.08,g=Re(p,o)*h;return new K(n+o*u,r+o*f,0-f*g,u*g,e.mass,e.size,e.alpha,o,c)}function Qe(e,t){let n=Z(e,t)/900;return n>1.15?1.15:n<.45?.45:n}function $e(e,t){let n=e*.5,r=t*.5,a=Qe(e,t),o=y(De,(e,t)=>Ze(e,t,n,r,a)),s=se(o,[0,0,0,0],(e,t)=>{let i=t.x-n,a=t.y-r,o=e[0],s=e[1],c=e[2],l=e[3];return[o+t.mass*i,s+t.mass*a,c+t.mass*t.vx,l+t.mass*t.vy]}),l=s[0],u=s[1],d=s[2],f=s[3];return i(new K(n-p(l,X),r-p(u,X),0-p(d,X),0-p(f,X),X,2.8,.5,0,c),o)}function et(e){let t=V(),n=Se();R(e,t,n);let r=new J(e,z(e),t,n,$e(t,n),0);return me(e=>Xe(r,e))}function tt(){return H(N(j(),`foot`),a([H(N(k(),`foot-line`),a([ye(`everything else on `),L(F(N(A(),`foot-link`),`href`,Oe),`github ↗`)])),L(N(O(),`foot-note`),`© 2026 · background: an n-body simulation, integrated in gleam`)]))}function Q(e,t){return I(N(e,`rise`),`--i`,x(t))}function $(e){return H(N(D(),`section-head`),a([L(N(O(),`section-title`),e)]))}function nt(){return H(N(P(j(),`about`),`section`),a([$(`about`),Q(L(N(k(),`about-bio`),Ae),0),Q(L(N(O(),`loop`),ke),1)]))}function rt(e){return e<10?`0`+x(e):x(e)}function it(e,t){return H(I(N(D(),`project-card`),`--i`,x(t)),a([L(N(O(),`card-no`),rt(t+1)),H(N(D(),`card-main`),a([L(F(N(A(),`card-title`),`href`,e.link),e.title),L(N(k(),`card-blurb`),e.blurb)])),H(N(D(),`card-side`),a([L(N(O(),`card-stats`),`★ `+e.stars+` · ⑂ `+e.forks),L(N(O(),`card-lang`),e.lang)]))]))}function at(){return H(N(P(j(),`work`),`section`),a([$(`selected work`),H(N(D(),`project-grid`),y(je,it))]))}function ot(e){return H(N(D(),`stat`),a([L(N(O(),`stat-value`),e.value),L(N(O(),`stat-label`),e.label)]))}function st(){return H(N(D(),`stats-bar`),v(Me,ot))}function ct(){return H(N(P(j(),`top`),`hero`),a([Q(L(N(ge(),`hero-name`),`Gurmehar Singh`),0),Q(L(N(k(),`hero-line`),Ne),1)]))}function lt(){return H(N(_e(),`bar`),a([L(F(N(A(),`brand`),`href`,`#top`),`gurmehar singh`),H(N(D(),`nav-right`),a([L(N(O(),`nav-meta`),`rust · typescript · webgpu`),L(F(N(A(),`nav-link`),`href`,Oe),`github ↗`)]))]))}function ut(){let e;e=N(ve(),`sky`);let t=e,n;n=H(N(D(),`page`),a([lt(),ct(),st(),at(),nt(),tt()]));let r=n;return M(he(),t),M(he(),r),et(t)}t(),ut();