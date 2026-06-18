"use client";

import { useEffect, useRef } from "react";

/**
 * Animated canvas background — layered flowing sine waves that evoke
 * an audio waveform / oscilloscope. Purely decorative, pointer-events-none.
 *
 * Works on any section; keep the parent `position: relative` and
 * `overflow: hidden`.
 */
export default function MusicBackground({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let frame = 0;

    // Each wave: vertical centre (as fraction of height), spatial frequency,
    // amplitude (as fraction of height), animation speed, colour, opacity, lineWidth
    const waves = [
      { y: 0.12, freq: 0.016, amp: 0.055, spd: 0.38, rgb: [83,  58, 253], a: 0.13, lw: 1.5 },
      { y: 0.28, freq: 0.011, amp: 0.080, spd: 0.22, rgb: [83,  58, 253], a: 0.08, lw: 1.0 },
      { y: 0.44, freq: 0.021, amp: 0.065, spd: 0.45, rgb: [28,  30,  84], a: 0.10, lw: 2.0 },
      { y: 0.56, freq: 0.013, amp: 0.090, spd: 0.18, rgb: [83,  58, 253], a: 0.07, lw: 1.0 },
      { y: 0.72, freq: 0.019, amp: 0.055, spd: 0.35, rgb: [100,116, 141], a: 0.09, lw: 1.5 },
      { y: 0.88, freq: 0.014, amp: 0.070, spd: 0.28, rgb: [83,  58, 253], a: 0.06, lw: 1.0 },
    ];

    function resize() {
      const rect = canvas.getBoundingClientRect();
      canvas.width  = rect.width  * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function draw() {
      const W = canvas.width  / window.devicePixelRatio;
      const H = canvas.height / window.devicePixelRatio;

      ctx.clearRect(0, 0, W, H);

      waves.forEach((w) => {
        const [r, g, b] = w.rgb;
        const cy  = H * w.y;
        const amp = H * w.amp;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${r},${g},${b},${w.a})`;
        ctx.lineWidth   = w.lw;
        ctx.lineJoin    = "round";

        for (let x = 0; x <= W; x += 1.5) {
          const phase = frame * w.spd * 0.012;
          const y =
            cy
            + Math.sin(x * w.freq + phase)             * amp
            + Math.sin(x * w.freq * 2.3 + phase * 1.6) * amp * 0.35
            + Math.sin(x * w.freq * 0.6 + phase * 0.7) * amp * 0.20;

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
      ro.disconnect();
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
