import Image from "next/image";
import Link from "next/link";
import { BeetleMark } from "@/components/BeetleMark";
import { ContactDirectInfo } from "@/components/ContactDirectInfo";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { HappyClients } from "@/components/HappyClients";
import { StackShowcase } from "@/components/StackShowcase";
import { site } from "@/lib/site";

const work = [
  {
    org: "Berinhart",
    role: "Contract software engineer — Sqippa IoT product line",
    points: [
      "Berinhart builds connected IoT products on Sqippa: hardware and software that capture live sensor telemetry and turn it into insight for operators and decision-makers, not just raw streams.",
      "Engineered and evolved web UIs that bridge devices in the field to usable dashboards — trends, thresholds, status at a glance, and enough context to trust what the fleet is reporting.",
      "Shaped layout, labeling, and hierarchy so teams can scan health quickly, then drill down for troubleshooting, validation, and operational decisions tied to real device behavior.",
      "Kept patterns aligned with how IoT data is actually consumed on the ground: clarity first, reduced cognitive load, and UI that reinforces confidence in sensor-backed signals.",
    ],
  },
  {
    org: "Dynamic Devine School",
    role: "MVP semi–school management system — James Town",
    points: [
      "Delivered a lean semi–school-management MVP for Dynamic Devine School in James Town: day-to-day academic and admin flows in one place instead of scattered books, sheets, and ad hoc files.",
      "Core focus on what teachers feel at term end — reliable student records, assessments, and reporting paths so grades and comments don’t have to be re-entered multiple times for different outputs.",
      "Terminal-report printing built in: standardized, printable term reports parents and the school can stand behind, generated from the same data teachers already maintain — cutting duplicate typing and last-minute layout fixes.",
      "Designed as a real MVP: fast value for administration and teaching staff, less manual reconciliation, and a foundation to add modules, roles, or integrations as the school grows.",
    ],
  },
  {
    org: "ramSYS IT & Management Support Services",
    role: "Financial Data Analyst & Record Management Instructor",
    points: [
      "Financial data analytics: theory, real-world application, and personalized coaching; practical courses with financial datasets, Power BI and Tableau dashboards and reports.",
      "Portfolio development to industry standards; evaluation of financial analytics projects and hands-on support for technical issues.",
      "Record management instruction: lifecycle concepts — creation, classification, retention, disposition — and compliant handling of business records.",
      "Learners practice metadata, indexing, naming conventions, and retrieval so filings stay consistent, findable, and audit-ready.",
      "Digital record-keeping: organizing electronic files, access expectations, and scenario drills (e.g. document chains, handoffs, basic audit prep).",
    ],
  },
  {
    org: "NIIT - JIT",
    role: "Data Analyst Instructor",
    points: [
      "Teach data analytics through interactive lectures with one-on-one mentoring and career guidance.",
      "Hands-on curricula with real-world datasets; Tableau and Power BI for visualization.",
      "Individual support on technical challenges, project assessment, and portfolio development.",
    ],
  },
  {
    org: "Viuhealth",
    role: "Senior Software Engineering Consultant",
    points: [
      "Node.js / Express / MongoDB backends with schema and cache tuning; ~30% processing efficiency gains.",
      "GitHub Actions + Docker + Terraform CI/CD; strong deployment and uptime signals.",
      "AWS EKS with Helm and autoscaling; fewer deployment errors and better scale.",
    ],
  },
  {
    org: "Dalex Finance",
    role: "Senior Frontend Engineer",
    points: [
      "Angular and React with performance work — lazy loading, asset compression, faster loads.",
      "API integration, error handling, and reliability improvements.",
      "Session security with JWT policies and inactivity handling.",
    ],
  },
  {
    org: "turntabl",
    role: "Software Engineer",
    points: [
      "Spring Boot + PostgreSQL services with query and cache optimization.",
      "Jenkins + Docker + Terraform automation replacing manual releases.",
      "AWS EKS operations with Helm and observability.",
    ],
  },
];

const metrics = [
  { value: "~30%", label: "Processing efficiency gains (tracked backends)" },
  { value: "~40%", label: "Downtime reduction (automation & CI/CD)" },
  { value: "~70%", label: "Fewer deployment errors (K8s + observability)" },
  { value: "~60%", label: "Scalability improvements (EKS policies)" },
  { value: "~50%", label: "Page load improvement (frontend perf)" },
  { value: "~30%", label: "Reliability / integration gains" },
];

const engagements = [
  {
    title: "Project-based",
    body: "Fixed scope or milestone delivery — greenfield APIs, migrations, dashboard programs, or automation tracks.",
  },
  {
    title: "Part-time retainer",
    body: "Ongoing capacity for architecture review, feature work, or platform hygiene alongside your team.",
  },
  {
    title: "Advisory",
    body: "Short engagements on AWS/Kubernetes choices, data model review, or performance and reliability planning.",
  },
  {
    title: "Corporate training",
    body: "Workshops on analytics tooling, dashboard standards, and portfolio-ready exercises for teams or academies.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section
          id="hero"
          className="relative overflow-hidden border-b border-[var(--border)]"
          aria-label="Introduction"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,212,191,0.15),transparent)]" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:flex-row lg:items-start lg:gap-14">
            <div className="min-w-0 flex-1">
            <p className="text-sm font-medium tracking-wide text-[var(--accent)]">
              Open to freelance · contract · part-time · training
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
              {site.name}
            </h1>
            <p className="mt-3 inline-flex items-center gap-2.5 text-sm font-medium text-[var(--accent)]">
              <BeetleMark className="h-6 w-6 shrink-0 opacity-90 sm:h-7 sm:w-7" />
              <span>{site.ventureName}</span>
            </p>
            <p className="mt-2 text-lg text-[var(--muted)]">{site.tagline}</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
              {site.bio}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-contrast)] shadow-lg shadow-teal-950/25 transition-opacity hover:opacity-90"
              >
                Start a project
              </Link>
              {site.calendlyUrl ? (
                <a
                  href={site.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)]"
                >
                  Book a call
                </a>
              ) : null}
            </div>
            <p className="mt-8 text-sm text-[var(--muted)]">
              {site.timezone} · {site.phone}
            </p>
            </div>
            <div className="flex shrink-0 justify-center lg:justify-end lg:pt-1">
              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br from-[var(--accent)]/25 to-transparent opacity-80 blur-xl"
                  aria-hidden
                />
                <Image
                  src={site.profilePhotoSrc}
                  alt={site.name}
                  width={220}
                  height={220}
                  priority
                  className="relative h-36 w-36 rounded-2xl object-cover shadow-2xl shadow-black/40 ring-2 ring-[var(--border)] sm:h-44 sm:w-44 lg:h-[13.5rem] lg:w-[13.5rem]"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="border-b border-[var(--border)] bg-[var(--surface)] py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              Services
            </h2>
            <p className="mt-2 max-w-2xl text-[var(--muted)]">
              Pick one lane or combine — many engagements span backend, cloud, and reporting.
            </p>
            <ServicesShowcase />
          </div>
        </section>

        <section id="work" className="border-b border-[var(--border)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              Selected impact
            </h2>
            <p className="mt-2 max-w-2xl text-[var(--muted)]">
              Representative outcomes from senior engineering, frontend leadership, and data work.
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--elevated)] p-5"
                >
                  <p className="text-2xl font-semibold text-[var(--accent)]">{m.value}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-14 space-y-12">
              {work.map((w) => (
                <article key={w.org} className="max-w-3xl border-l-2 border-[var(--accent)] pl-6">
                  <h3 className="font-semibold text-[var(--foreground)]">{w.org}</h3>
                  <p className="text-sm text-[var(--muted)]">{w.role}</p>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-[var(--muted)]">
                    {w.points.map((p) => (
                      <li key={p} className="marker:text-[var(--accent)]">
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="stack"
          className="border-b border-[var(--border)] bg-[var(--surface)] py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              Tech stack
            </h2>
            <p className="mt-2 max-w-2xl text-[var(--muted)]">
              Core tools I ship with — always happy to match your standards and governance.
            </p>
            <StackShowcase />
          </div>
        </section>

        <section id="engagements" className="border-b border-[var(--border)] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              How we can work together
            </h2>
            <p className="mt-2 max-w-2xl text-[var(--muted)]">
              Same quality bar whether the engagement is a sprint, a retainer, or a training cohort.
            </p>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2">
              {engagements.map((e) => (
                <li
                  key={e.title}
                  className="rounded-2xl border border-dashed border-[var(--border)] p-6"
                >
                  <h3 className="font-semibold text-[var(--foreground)]">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{e.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="clients"
          className="border-b border-[var(--border)] bg-[var(--surface)] py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              Happy clients
            </h2>
            <p className="mt-2 max-w-2xl text-[var(--muted)]">
              People and teams I&rsquo;ve been glad to work with.
            </p>
            <HappyClients />
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              Contact
            </h2>
            <p className="mt-2 max-w-2xl text-[var(--muted)]">
              Reach me by phone, WhatsApp, or email — details below.
            </p>
            <div className="mt-8">
              <ContactDirectInfo />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
