"use client";

import { useEffect, useRef } from "react";

export default function MusicBackground({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctxOrNull = el.getContext("2d");
    if (!ctxOrNull) return;

    // Capture as non-null for use inside closures
    const canvas: HTMLCanvasElement = el;
    const ctx: CanvasRenderingContext2D = ctxOrNull;

    let raf: number;
    let frame = 0;

    const waves = [
      { y: 0.12, freq: 0.016, amp: 0.07, spd: 0.40, r: 83,  g: 58,  b: 253, a: 0.45, lw: 2.0 },
      { y: 0.28, freq: 0.011, amp: 0.10, spd: 0.22, r: 83,  g: 58,  b: 253, a: 0.30, lw: 1.5 },
      { y: 0.46, freq: 0.022, amp: 0.08, spd: 0.45, r: 28,  g: 30,  b: 84,  a: 0.35, lw: 2.5 },
      { y: 0.62, freq: 0.014, amp: 0.11, spd: 0.18, r: 83,  g: 58,  b: 253, a: 0.25, lw: 1.5 },
      { y: 0.78, freq: 0.019, amp: 0.06, spd: 0.35, r: 100, g: 116, b: 141, a: 0.30, lw: 1.5 },
      { y: 0.92, freq: 0.013, amp: 0.08, spd: 0.28, r: 83,  g: 58,  b: 253, a: 0.20, lw: 1.0 },
    ];

    function resize() {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w > 0 && h > 0) {
        canvas.width  = w;
        canvas.height = h;
      }
    }

    // Resize immediately, then again on next frame (guarantees layout is done)
    resize();
    requestAnimationFrame(resize);
    window.addEventListener("resize", resize, { passive: true });

    function draw() {
      const W = canvas.width;
      const H = canvas.height;

      // If canvas still has no size, retry next frame
      if (W === 0 || H === 0) {
        resize();
        raf = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, W, H);

      waves.forEach((w) => {
        const cy    = H * w.y;
        const amp   = H * w.amp;
        const phase = frame * w.spd * 0.012;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${w.r},${w.g},${w.b},${w.a})`;
        ctx.lineWidth   = w.lw;
        ctx.lineJoin    = "round";

        for (let x = 0; x <= W; x += 2) {
          const y =
            cy
            + Math.sin(x * w.freq + phase)              * amp
            + Math.sin(x * w.freq * 2.3 + phase * 1.6) * amp * 0.35
            + Math.sin(x * w.freq * 0.5 + phase * 0.7) * amp * 0.20;

          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.stroke();
      });

      frame++;
      raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
