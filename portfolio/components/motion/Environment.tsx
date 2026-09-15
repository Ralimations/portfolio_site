"use client";
import { useEffect, useRef } from "react";

export function Environment() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    if (!canvas || !cursor) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    const fine = matchMedia("(pointer: fine) and (hover: hover)");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0, height = 0, frame = 0, remaining = 0;
    let px = -1000, py = -1000, x = -1000, y = -1000;
    let hover = false, down = false, visible = false;

    function draw() {
      if (!ctx || !cursor) return;
      frame = 0;
      const animated = fine.matches && !reduce.matches;
      const dx = px - x, dy = py - y;
      x += dx * 0.23; y += dy * 0.23;
      const speed = Math.min(Math.hypot(dx, dy) / 160, 0.18);
      cursor.style.opacity = animated && visible ? "1" : "0";
      cursor.style.transform = `translate3d(${x}px,${y}px,0) scale(${(down ? 0.72 : hover ? 1.65 : 1) + speed})`;
      cursor.dataset.interactive = String(hover);
      ctx.clearRect(0, 0, width, height);
      for (let gx = 24; gx < width; gx += 58) {
        for (let gy = 24; gy < height; gy += 58) {
          const dist = Math.hypot(gx - x, gy - y);
          const influence = animated && visible ? Math.max(0, 1 - dist / 180) : 0;
          const ox = (gx - x) * influence * 0.055, oy = (gy - y) * influence * 0.055;
          ctx.fillStyle = influence > 0.1 ? `rgba(255,120,73,${0.12 + influence * 0.28})` : "rgba(196,199,194,0.105)";
          ctx.fillRect(gx + ox, gy + oy, influence > 0.3 ? 2 : 1, influence > 0.3 ? 2 : 1);
        }
      }
      if (animated && remaining-- > 0 && !document.hidden) frame = requestAnimationFrame(draw);
    }
    function requestDraw() { remaining = 36; if (!frame && !document.hidden) frame = requestAnimationFrame(draw); }
    function resize() {
      if (!canvas || !ctx) return;
      width = innerWidth; height = innerHeight;
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr); canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); requestDraw();
    }
    function move(event: PointerEvent) {
      if (event.pointerType === "touch") return;
      px = event.clientX; py = event.clientY;
      if (!visible) { x = px; y = py; }
      visible = true;
      hover = event.target instanceof Element && !!event.target.closest("a,button,input,summary,[role='button']");
      requestDraw();
    }
    const press = () => { down = true; requestDraw(); };
    const release = () => { down = false; requestDraw(); };
    const leave = () => { visible = false; requestDraw(); };
    const visibility = () => { if (document.hidden) { cancelAnimationFrame(frame); frame = 0; } else requestDraw(); };
    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", press, { passive: true });
    window.addEventListener("pointerup", release, { passive: true });
    document.addEventListener("pointerleave", leave);
    window.addEventListener("blur", leave);
    document.addEventListener("visibilitychange", visibility);
    fine.addEventListener("change", requestDraw); reduce.addEventListener("change", requestDraw);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize); window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", press); window.removeEventListener("pointerup", release);
      document.removeEventListener("pointerleave", leave); window.removeEventListener("blur", leave);
      document.removeEventListener("visibilitychange", visibility);
      fine.removeEventListener("change", requestDraw); reduce.removeEventListener("change", requestDraw);
    };
  }, []);
  return <><canvas ref={canvasRef} className="environment" aria-hidden="true" /><div ref={cursorRef} className="custom-cursor" aria-hidden="true" /></>;
}
