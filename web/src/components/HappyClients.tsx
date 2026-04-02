import { site } from "@/lib/site";

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (
    (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  );
}

export function HappyClients() {
  const clients = site.happyClients;

  return (
    <ul
      className="mt-12 grid gap-6 sm:grid-cols-3"
      role="list"
      aria-label="Happy clients"
    >
      {clients.map((c) => (
        <li key={c.name}>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--elevated)] p-6 shadow-sm transition-all duration-300 hover:border-[var(--accent)]/35 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.08),0_16px_40px_-24px_rgba(0,0,0,0.45)]">
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--accent)]/10 blur-2xl transition-opacity group-hover:opacity-[0.18]"
              aria-hidden
            />
            <div className="relative flex flex-col items-center text-center">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-muted)] text-base font-semibold tracking-tight text-[var(--accent)] ring-1 ring-[var(--border)]"
                aria-hidden
              >
                {initials(c.name)}
              </span>
              <p className="mt-4 text-sm font-semibold leading-snug text-[var(--foreground)]">
                {c.name}
              </p>
              {c.subtitle ? (
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">
                  {c.subtitle}
                </p>
              ) : null}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
