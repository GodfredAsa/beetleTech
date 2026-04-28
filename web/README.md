# Businex

Consulting website for Godfred Asumadu Asamoah — freelance, contract, part-time, and training.

Built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**. Deploy on [Vercel](https://vercel.com) or any Node-compatible host.

---

## Prerequisites

- **Node.js** 20.x or newer (LTS recommended)
- **npm** 10+ (comes with Node)

Check versions:

```bash
node -v
npm -v
```

---

## Getting started (local)

From this directory (`web/`):

1. **Install dependencies**

   ```bash
   npm ci
   ```

   If you don’t have a lockfile yet, use `npm install` once, then prefer `npm ci` in CI and fresh clones.

2. **Optional:** `cp .env.example .env.local ` if you add env-based integrations later.

3. **Start the dev server**

   ```bash
   npm run dev
   ```

4. **Open the site**

   [http://localhost:3000](http://localhost:3000)

---

## Scripts

| Command        | Description                                      |
|----------------|--------------------------------------------------|
| `npm run dev`  | Development server (default port **3000**)       |
| `npm run build`| Production build into `.next/`                   |
| `npm run start`| Serve the production build (run `build` first)  |
| `npm run lint` | ESLint                                           |

**Production-like run locally:**

```bash
npm run build
npm run start
```

---

## Project layout (quick reference)

| Path | What it is |
|------|------------|
| `src/app/page.tsx` | Landing sections (services, work, stack, contact) |
| `src/lib/services.ts` | Service cards copy + Iconify icon ids |
| `src/components/ServicesShowcase.tsx` | Services grid with icons |
| `src/components/ContactDirectInfo.tsx` | Phone, WhatsApp, name card on Contact |
| `src/lib/site.ts` | Name, email, social links, optional Calendly |
| `public/cv.pdf` | Downloadable CV (replace with your latest PDF) |

---

## Analytics (Excel, Microsoft Power BI, Tableau)

This project supports an **analytics** offering built around common business reporting tools:

- **Excel**: data cleaning, pivots, dashboards, and ad‑hoc analysis (CSV/XLSX inputs, KPI tracking, templates).
- **Microsoft Power BI**: data modeling, Power Query transforms, DAX measures, and interactive dashboards for stakeholders.
- **Tableau**: visual analytics, exploratory dashboards, and shareable stories for reporting and presentations.

**Suggested place for analytics assets (optional):**

- Create an `analytics/` folder at the repo root to store workbooks and exports, for example:
  - `analytics/excel/` (templates, sample datasets)
  - `analytics/powerbi/` (`.pbix`, model notes)
  - `analytics/tableau/` (`.twb/.twbx`, extracts, exports)

---

## Experience (site owner)

Order matches the **Selected impact** section on the site (engineering and teaching).

### Berinhart — contract (Sqippa, IoT)

**Engagement:** Contract

**Project:** Sqippa — IoT product surfacing live sensor data to users.

- Contract role delivering user interfaces for an IoT program where clarity of sensor telemetry was the core product challenge.
- Built UI that presents device readings in human-friendly form: trends, thresholds, and enough context to understand what the sensors imply — not just raw numbers.
- Focused on UX for comprehension (layout, labels, hierarchy) so operators and stakeholders can scan status quickly and drill in when needed.
- Grounded design choices in how sensor data is actually used in the field, improving readability and confidence in what the hardware reports.

### ramSYS IT & Management Support Services

**December 2025 – December 2025**

**Roles:** Financial Data Analyst Instructor · Record Management Instructor

**Financial data analytics instruction**

- Delivered financial data analytics using a combination of analytical theory, real-world application, and personalized coaching.
- Created and taught practical courses with real-world financial datasets, allowing students to use Power BI and Tableau to create dashboards and reports.
- Directed the creation of a portfolio in accordance with industry standards, evaluated financial analytics projects, and assisted students in solving technological problems.

**Record management instruction**

- Taught the records lifecycle (creation, classification, retention, disposition) and how organizations keep evidence trustworthy and retrievable over time.
- Designed practical modules on metadata, file plans, naming rules, and search — so students can build coherent structures, not just folders.
- Covered digital and hybrid records: version habits, access boundaries, and day-to-day habits that reduce loss, duplication, and “silent” policy gaps.
- Used scenario-based drills (e.g. client or financial document packets, handoffs between teams, basic readiness for review or audit questions).
- Linked good record keeping to analytics and reporting clarity: clean inputs and definitions upstream make dashboards and handovers easier later.

### Data Analyst Instructor — NIIT - JIT

**August 2025 – Present**

- Teach data analytics concepts through interactive lectures while providing one-on-one student mentoring and career guidance.
- Develop hands-on curricula using real-world datasets and teach students data visualization tools like Tableau and Power BI.
- Provide individual student support for technical challenges while assessing their data visualization projects and portfolio development.

---

## Customize the live site

- **Profile links:** edit `src/lib/site.ts` (GitHub, LinkedIn, optional Calendly).
- **Copy & roles:** edit `src/app/page.tsx` (services, work bullets, metrics).
- **CV asset:** replace `public/cv.pdf`.

## Selected impact (methodology)

See **[SELECTED-IMPACT.md](./SELECTED-IMPACT.md)** for an explanation of how the **Selected impact** metrics on the homepage map to common engineering practices, baselines, and how to discuss them accurately.

---

*Bootstrapped with `create-next-app`; customized for Businex.*
