# Businex — Project Solicitation Website Plan

## Implementation

The live site lives in **`web/`**: **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**. See [`web/README.md`](web/README.md) (**Businex**) for how to run and build locally, instructor experience notes, and deploy hints.

---

Plan for a personal website or web solution to attract **freelance**, **contract**, **part-time**, and other professional opportunities. Tailored to the profile in `GODFRED ASUMADU ASAMOAH-CV.pdf`: software engineer, data scientist, AWS/cloud, with analytics instruction experience.

---

## Positioning

**One-line promise:** *Software engineer and data scientist — backends, APIs, cloud (AWS/Kubernetes), analytics dashboards, and teaching.*

**Differentiators:**

- Outcomes backed by metrics (efficiency, downtime, scalability, reliability)
- Full path from **React/Angular** frontends through **Node/Spring** backends to **AWS EKS** and **CI/CD**
- **Instruction** as a distinct line: workshops, mentoring, curriculum (aligned with NIIT / ramSYS roles)

---

## Goals

1. **Convert visitors** into qualified leads with a clear next step (book a call, submit a brief, or email).
2. **Surface engagement types** — freelance, SOW contract, part-time retainer, advisory, training — without sounding “hourly gig only.”
3. **Build trust quickly** — roles, stack, short impact stories, links to GitHub, LinkedIn, portfolio dashboard sample.
4. **Reduce discovery email churn** — structured project request capturing budget band, timeline, stack, and engagement model.

---

## Target audiences

| Audience | What they need | Emphasize on the site |
|----------|----------------|------------------------|
| Startups / product teams | Backend, APIs, AWS, CI/CD | EKS, Terraform, Node/Spring, reliability |
| Data / BI owners | Dashboards, reporting, EDA | Power BI, Tableau, Python, SQL |
| Agencies / consultancies | Contractor augmentation | Availability, stack fit, time zone (e.g. GMT) |
| Training / edtech | Instructors, curriculum | Corporate/academy analytics training as a **service line** |

---

## Site structure (pages / sections)

1. **Home** — Headline; three pillars (Engineering / Data & BI / DevOps & Cloud); primary CTA (“Start a project” / “Book 20 minutes”); secondary CTA (calendar or email).
2. **Services** — Dedicated treatment (or long-scroll anchors) for: API & backend; cloud & Kubernetes; data pipelines & analytics; **training & workshops**.
3. **Work / selected impact** — 3–5 short “caselets” from experience (e.g. Berinhart, Viuhealth, Dalex, turntabl): context → actions → outcome metric; anonymize if required.
4. **Tech stack** — Groupings: languages; frontend; backend; data; cloud & DevOps (mirrors CV skills).
5. **Engagement models** — Plain language: **project-based**, **part-time retainer**, **advisory**, **corporate training** — one or two sentences each on when it fits.
6. **Project request** — Form workflow (see below).
7. **About** — Short narrative, education; optional photo.
8. **Contact** — Email, phone, LinkedIn, GitHub, calendar link; optional PDF CV download.

---

## Project intake (core feature)

### Form fields (MVP)

- Name, company, email
- **Engagement type** (multi-select): Freelance project · Contract (SOW) · Part-time · Training/workshop · Other
- **Summary** — what to build or improve
- **Tech preferences** — tags or free text (e.g. React, Node, AWS, Power BI)
- **Budget** — dropdown bands or “Prefer to discuss”
- **Timeline** — ASAP · 1–3 months · 3+ months · Flexible
- **Time zone** and meeting preference
- Optional: link to spec / design / repo

### Submission plumbing

| Phase | Approach |
|-------|----------|
| **1** | Form → email (Formspree, Getform, Netlify Forms, etc.) + auto-reply to sender |
| **2** | Same + Google Sheet / Airtable + optional automation (e.g. Zapier) |
| **3** | Custom API + database if volume and workflow demand it |

**Optional:** Calendly / Cal.com after submit to shorten scheduling loops.

---

## Technical stack options

| Approach | Pros | Cons |
|----------|------|------|
| **Static site + hosted form** | Fast, low cost, easy to update | Limited “portal” dynamics |
| **Next.js or Astro on Vercel** | Strong SEO, serverless form endpoints, fits engineering brand | More setup than pure static |
| **No-code (Framer, Webflow)** | Speed to launch | Vendor lock-in, scaling cost |

**Recommendation:** Small **Next.js** or **Astro** deployment on Vercel with a **serverless** form handler — aligns with your technical profile and stays maintainable.

---

## Content checklist (CV-aligned)

- [ ] **Hero** — One sentence each for engineering, data, and cloud (match CV summary).
- [ ] **Proof** — 4–6 metric cards (e.g. processing efficiency, downtime, deployment errors, scalability, page load, reliability).
- [ ] **Teaching** — Dedicated block: corporate or academy-style analytics (Power BI, Tableau, Python foundations).
- [ ] **Portfolio** — Prominent link to **Portfolio Dashboard Sample** where relevant.
- [ ] **SEO** — Titles/descriptions for intended markets (e.g. freelance backend, AWS/Kubernetes consulting, BI freelancing — only where you want to be found).

---

## Legal & operations (keep light at MVP)

- Short **privacy** note for form data; optional **terms** stub.
- Footer link to **rate card** or “how we start engagements” one-pager when ready.
- **Response expectation** on the contact page (e.g. business days to first reply).

---

## Phased rollout

1. **MVP (1–2 weeks):** One strong landing page (or minimal multi-section scroll) + services anchors + form + calendar + social/CV download.
2. **v2:** Dedicated Work page; 1–2 articles (e.g. AWS/Kubernetes, BI dashboard practice); testimonials if available.
3. **v3:** Mailing list or office-hours signup for repeat training/DevOps leads; client area only if retainers justify it.

---

## Success metrics

- Qualified form submits per month (engagement type + useful budget/timeline signals).
- Visit → form or booking conversion.
- Reduction in generic “what do you do?” threads via clear services and stack.

---

## Next steps

1. Choose stack (Next.js vs Astro vs static).
2. Decide single-page MVP vs small multi-page site.
3. Register domain; connect repo and deploy target (e.g. Vercel).
4. Wire form provider and optional calendar.
5. Migrate CV bullets into Work/impact sections and proof metrics.

---

*Document generated as a planning baseline for the Businex project. Update as scope narrows.*
