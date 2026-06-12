/**
 * Decorative animated waveform — pure CSS, no JS, no layout shift.
 * Honors prefers-reduced-motion via globals.css animation overrides.
 */
export default function Waveform({ bars = 28 }: { bars?: number }) {
  return (
    <div
      aria-hidden
      className="flex h-full w-full items-center justify-center gap-[3px] sm:gap-1.5"
    >
      {Array.from({ length: bars }).map((_, i) => {
        // Pseudo-random but deterministic heights + delays
        const h = 18 + ((i * 37) % 64);
        const delay = ((i * 53) % 100) / 100;
        const duration = 1.1 + ((i * 17) % 90) / 100;
        return (
          <span
            key={i}
            className="w-[3px] rounded-full bg-brand-gradient sm:w-1.5"
            style={{
              height: `${h}%`,
              animation: `eq ${duration}s ease-in-out ${delay}s infinite alternate`,
            }}
          />
        );
      })}
      <style>{`
        @keyframes eq {
          from { transform: scaleY(0.35); opacity: 0.55; }
          to   { transform: scaleY(1);    opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          [aria-hidden] span { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
