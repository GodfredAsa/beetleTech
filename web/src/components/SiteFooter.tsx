import Link from "next/link";
import { site } from "@/lib/site";

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const className =
    "group inline-flex items-start gap-2.5 rounded-lg py-2 pl-1 pr-2 text-sm text-[var(--muted)] transition-colors duration-200 hover:bg-[var(--accent-muted)] hover:text-[var(--accent)] -ml-1";
  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-auto">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/35 to-transparent"
        aria-hidden
      />
      <div className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16 lg:items-start">
            <div>
              <p className="text-sm font-semibold tracking-wide text-[var(--accent)]">
                {site.ventureName}
              </p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-[var(--foreground)]">
                {site.name}
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                {site.tagline}
              </p>
              <p className="mt-4 text-xs text-[var(--muted)]/80">
                {site.timezone}
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
              <div>
                <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Contact
                </h3>
                <ul className="mt-5 flex flex-col gap-1" role="list">
                  <li>
                    <FooterLink href={`mailto:${site.email}`}>
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] opacity-70 transition-colors group-hover:text-[var(--accent)] group-hover:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                      <span className="break-all font-mono text-[13px] leading-snug">
                        {site.email}
                      </span>
                    </FooterLink>
                  </li>
                  <li className="min-w-0">
                    <FooterLink href={site.whatsappUrl}>
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path
                          fill="currentColor"
                          d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.5c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.7 34.9 56.9 81.2 56.9 130.5-.1 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.1 31.5 11.6 13.2 4.2 25.2 3.6 34.7 2.2 10.6-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-4-10.5-6.6z"
                        />
                      </svg>
                      <span className="min-w-0">
                        WhatsApp ·{" "}
                        <span className="font-mono text-[13px] text-[var(--foreground)]">
                          {site.whatsappNumberInternational}
                        </span>
                        <span className="mt-0.5 block font-mono text-[12px] text-[var(--muted)]">
                          {site.whatsappNumberLocal}
                        </span>
                      </span>
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href={site.cvPath}>
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] opacity-70 transition-colors group-hover:text-[var(--accent)] group-hover:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                      <span>Download CV</span>
                    </FooterLink>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Profiles
                </h3>
                <ul className="mt-5 flex flex-col gap-1" role="list">
                  <li>
                    <FooterLink href={site.linkedinUrl}>
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] opacity-70 transition-colors group-hover:text-[var(--accent)] group-hover:opacity-100"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span>LinkedIn</span>
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href={site.githubUrl}>
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)] opacity-70 transition-colors group-hover:text-[var(--accent)] group-hover:opacity-100"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>GitHub</span>
                    </FooterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[var(--muted)]">
              © {year}{" "}
              <span className="text-[var(--foreground)]/90">{site.name}</span>
              <span className="text-[var(--muted)]"> · {site.ventureName}</span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
