import { BeetleMark } from "@/components/BeetleMark";
import { iconifySrc, stackCategories } from "@/lib/stack";

export function StackShowcase() {
  return (
    <div className="mt-12 space-y-12">
      {stackCategories.map((cat) => (
        <div key={cat.title}>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
            {cat.title}
          </h3>
          {cat.subtitle ? (
            <p className="mt-1 max-w-2xl text-xs leading-relaxed text-[var(--muted)]">
              {cat.subtitle}
            </p>
          ) : null}
          <ul
            className="mt-4 flex flex-wrap gap-3"
            role="list"
            aria-label={cat.title}
          >
            {cat.items.map((item) => (
              <li key={item.label}>
                <div
                  className="group flex w-[7.5rem] flex-col items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--elevated)] px-3 py-4 text-center shadow-sm transition-all duration-200 hover:border-[var(--accent)]/35 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.12)] sm:w-[8rem]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--surface)] ring-1 ring-[var(--border)] transition-colors group-hover:ring-[var(--accent)]/25">
                    {item.icon === "beetle" ? (
                      <BeetleMark className="h-10 w-10 object-contain" />
                    ) : (
                      <img
                        src={iconifySrc(item.icon)}
                        alt=""
                        width={40}
                        height={40}
                        loading="lazy"
                        decoding="async"
                        className="h-10 w-10 object-contain"
                      />
                    )}
                  </div>
                  <span className="text-xs font-medium leading-snug text-[var(--foreground)]">
                    {item.label}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
        Also frequent:{" "}
        <span className="text-[var(--foreground)]/90">
          Node.js, Kubernetes, BI tools (Power BI, Tableau), Python data stack
        </span>
        — mention your preferred tools in the inquiry form.
      </p>
    </div>
  );
}
