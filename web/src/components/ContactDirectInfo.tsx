import Image from "next/image";
import { site } from "@/lib/site";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 448 512" aria-hidden>
      <path
        fill="currentColor"
        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.5c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.7 34.9 56.9 81.2 56.9 130.5-.1 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.1 31.5 11.6 13.2 4.2 25.2 3.6 34.7 2.2 10.6-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-4-10.5-6.6z"
      />
    </svg>
  );
}

export function ContactDirectInfo() {
  const displayInternational = "+233 548 670 632";
  const telHref = "tel:+233548670632";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--elevated)] p-6 shadow-lg shadow-black/20 sm:p-8">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[var(--accent)]/10 blur-3xl"
        aria-hidden
      />
      <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
        <div className="flex min-w-0 items-start gap-4">
          <div className="relative shrink-0 overflow-hidden rounded-2xl ring-2 ring-[var(--accent)]/30 shadow-lg">
            <Image
              src={site.profilePhotoSrc}
              alt={site.name}
              width={112}
              height={112}
              className="h-24 w-24 object-cover sm:h-28 sm:w-28"
            />
          </div>
          <div className="min-w-0 pt-0.5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Name
            </p>
            <p className="mt-1.5 text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
              {site.name}
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">{site.timezone}</p>
          </div>
        </div>

        <div className="grid min-w-0 flex-1 grid-cols-1 gap-3 sm:max-w-md sm:grid-cols-2">
          <a
            href={telHref}
            className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 transition-all hover:border-[var(--accent)]/50 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.15)]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-muted)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)]/20">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <span className="min-w-0 text-left">
              <span className="block text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--muted)]">
                Call
              </span>
              <span className="mt-0.5 block font-mono text-sm font-medium text-[var(--foreground)]">
                {displayInternational}
              </span>
            </span>
          </a>

          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 transition-all hover:border-[#25D366]/45 hover:shadow-[0_0_0_1px_rgba(37,211,102,0.2)]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#25D366] ring-1 ring-[#25D366]/30 transition-colors group-hover:bg-[#25D366]/25">
              <WhatsAppGlyph className="h-6 w-6" />
            </span>
            <span className="min-w-0 text-left">
              <span className="block text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--muted)]">
                WhatsApp
              </span>
              <span className="mt-0.5 block font-mono text-sm font-medium text-[var(--foreground)]">
                {displayInternational}
              </span>
            </span>
          </a>
        </div>
      </div>
      <p className="relative mt-6 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--muted)] sm:text-left">
        Same number for voice and WhatsApp ·{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-[var(--accent)] underline-offset-2 hover:underline"
        >
          {site.email}
        </a>
      </p>
    </div>
  );
}
