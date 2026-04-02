import { serviceIconSrc, services } from "@/lib/services";

export function ServicesShowcase() {
  return (
    <ul className="mt-12 grid gap-6 sm:grid-cols-2" role="list">
      {services.map((s) => (
        <li key={s.title}>
          <article className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--elevated)] p-6 shadow-sm transition-all duration-300 hover:border-[var(--accent)]/35 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.08),0_20px_40px_-24px_rgba(0,0,0,0.5)]">
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-[0.12] blur-2xl transition-opacity duration-300 group-hover:opacity-20"
              style={{ backgroundColor: `#${s.accentHex}` }}
              aria-hidden
            />
            <div className="relative flex items-start gap-4">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-1 ring-white/10"
                style={{
                  backgroundColor: `rgba(${hexToRgb(s.accentHex)}, 0.14)`,
                }}
              >
                <img
                  src={serviceIconSrc(s.icon, s.accentHex)}
                  alt=""
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  className="h-8 w-8 object-contain opacity-95"
                />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="font-semibold tracking-tight text-[var(--foreground)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {s.body}
                </p>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

/** `#RRGGBB` or `RRGGBB` → `r, g, b` for rgba() */
function hexToRgb(hex: string): string {
  const h = hex.replace(/^#/, "");
  const n = parseInt(h, 16);
  if (h.length !== 6 || Number.isNaN(n)) return "45, 212, 191";
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}
