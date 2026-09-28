export function on_frame(cb: (time: number) => void): void {
  requestAnimationFrame(cb);
}
