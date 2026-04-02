import Link from "next/link";
import { BeetleMark } from "@/components/BeetleMark";
import { site } from "@/lib/site";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#engagements", label: "Engagements" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-3 font-semibold tracking-tight text-[var(--foreground)]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--accent-muted)] text-[var(--accent)] shadow-md ring-2 ring-[var(--border)] transition-[box-shadow,color] group-hover:text-[var(--foreground)] group-hover:ring-[var(--accent)]/45 sm:h-12 sm:w-12">
            <BeetleMark className="h-7 w-7 sm:h-8 sm:w-8" />
          </span>
          <span>
            {site.ventureName}
            <span className="text-[var(--muted)] font-normal"> · consulting</span>
          </span>
        </Link>
        <nav
          className="flex flex-wrap items-center gap-x-1 gap-y-2 text-sm"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-[var(--muted)] transition-colors hover:bg-[var(--elevated)] hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={site.cvPath}
            className="ml-1 rounded-full border border-[var(--border)] px-3 py-1.5 text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </Link>
        </nav>
      </div>
    </header>
  );
}
