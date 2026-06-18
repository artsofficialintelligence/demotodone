"use client";

import { useEffect, useRef } from "react";

// Draws multiple DAW-style audio waveform tracks as an animated background.
// Each track is a row of vertical bars (like an audio waveform in a DAW),
// with amplitudes driven by layered sine waves so they breathe and pulse.

export default function MusicBackground({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!el.getContext("2d")) return;

    const canvas = el as HTMLCanvasElement;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const ctx = el.getContext("2d")!;

    let raf: number;
    let frame = 0;

    // Each track: vertical position, color, animation speeds, opacity
    const tracks = [
      { y: 0.18, r: 83,  g: 58,  b: 253, a: 0.28, spd: 0.55, spd2: 0.22, barW: 2, gap: 1 },
      { y: 0.38, r: 28,  g: 30,  b: 84,  a: 0.22, spd: 0.30, spd2: 0.40, barW: 3, gap: 2 },
      { y: 0.58, r: 83,  g: 58,  b: 253, a: 0.20, spd: 0.45, spd2: 0.18, barW: 2, gap: 1 },
      { y: 0.76, r: 100, g: 116, b: 141, a: 0.18, spd: 0.25, spd2: 0.50, barW: 2, gap: 2 },
      { y: 0.92, r: 83,  g: 58,  b: 253, a: 0.15, spd: 0.60, spd2: 0.30, barW: 2, gap: 1 },
    ];

    // Max bar height as a fraction of canvas height for each track
    const maxBarH = 0.07;

    function resize() {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w > 0 && h > 0) {
        canvas.width  = w;
        canvas.height = h;
      }
    }

    resize();
    requestAnimationFrame(resize);
    window.addEventListener("resize", resize, { passive: true });

    function draw() {
      const W = canvas.width;
      const H = canvas.height;

      if (W === 0 || H === 0) {
        resize();
        raf = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, W, H);

      const t = frame * 0.012;

      tracks.forEach((track) => {
        const cy     = H * track.y;
        const maxH   = H * maxBarH;
        const step   = track.barW + track.gap;
        const cols   = Math.ceil(W / step);

        ctx.fillStyle = `rgba(${track.r},${track.g},${track.b},${track.a})`;

        for (let i = 0; i < cols; i++) {
          const x = i * step;
          // Amplitude: layered sines create a realistic waveform envelope
          const norm = i / cols;
          const amp =
            Math.abs(
              Math.sin(norm * Math.PI * 6  + t * track.spd)  * 0.55 +
              Math.sin(norm * Math.PI * 14 + t * track.spd2) * 0.28 +
              Math.sin(norm * Math.PI * 3  + t * track.spd * 0.7) * 0.17
            );

          const barH = Math.max(2, amp * maxH);

          // Draw symmetric bar (up and down from centre, like a real waveform)
          ctx.fillRect(x, cy - barH, track.barW, barH * 2);
        }
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
