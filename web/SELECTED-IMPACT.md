# Selected impact — how these outcomes are achieved

This note is for **you** (and anyone reviewing your site): it explains what the **Selected impact** section is communicating, and **how** the kinds of results summarized in the metric cards are typically produced in software and platform work.

The numbers on the landing page are **headline indicators** from real engineering contexts (backends, CI/CD, Kubernetes, observability, frontend performance). They are **not** guarantees for future work: every system has a different baseline, constraints, and measurement method. Use this document to speak confidently about **what you did** and **how** similar gains are pursued.

---

## 1. What the section is made of

- **Metric cards** — short percentage ranges with labels (processing efficiency, downtime, deployment errors, scalability, page load, reliability). These are **category summaries** aligned with roles where those themes showed up (e.g. backend consulting, DevOps, frontend leadership).
- **Role blocks** — narrative bullets per employer or engagement: problem context, technical actions, and qualitative or quantitative outcomes.

Together they answer: *“What kind of impact have you had, and in what areas?”*

---

## 2. How each metric **type** is usually achieved

### ~30% — Processing efficiency gains (tracked backends)

**What it tends to mean:** Less CPU, memory, or wall-clock time per request/job for the same functional behavior—or higher throughput on the same hardware.

**How it’s commonly achieved:**

- **Profiling first** — identify hot paths (APM, logs, slow queries, flame graphs).
- **Data layer** — index design, query rewriting, batching, connection pooling, caching (Redis, in-memory, HTTP where appropriate).
- **Application layer** — removing redundant work, async where it fits, payload size and serialization costs.
- **Observability** — define SLIs (latency, error rate, saturation) *before* and *after* so movement is visible (e.g. Datadog, CloudWatch, Actuator + dashboards).

**Caveat:** “30%” only holds meaning against a **defined baseline** and **time window** (e.g. p95 latency before/after a release).

---

### ~40% — Downtime reduction (automation & CI/CD)

**What it tends to mean:** Fewer minutes/hours of unplanned outage, or shorter change windows, because releases and infra are **repeatable and observable**.

**How it’s commonly achieved:**

- **Automated pipelines** — build, test, artifact promotion (GitHub Actions, Jenkins, etc.).
- **Infrastructure as code** — Terraform/CloudFormation/Ansible so environments are **reproducible**, not snowflakes.
- **Safer releases** — staged rollouts, health checks, rollback paths, feature flags where useful.
- **Monitoring & alerting** — catch regressions early; post-incident review to close gaps.

**Caveat:** A large “downtime” win often comes from eliminating **manual deploy errors** or **long maintenance windows**, which is easier to show than subtle availability percentage points.

---

### ~70% — Fewer deployment errors (Kubernetes + observability)

**What it tends to mean:** Lower rate of failed rollouts, bad configs, or cluster-level surprises after tightening how workloads are deployed and **observed**.

**How it’s commonly achieved:**

- **Helm/charts or equivalent** — versioned, reviewable manifests; limits on ad-hoc `kubectl` in prod.
- **Autoscaling & resource policies** — HPA/VPA/cluster autoscaler aligned with real load; avoid OOM thrash.
- **Probes** — correct liveness/readiness so Kubernetes doesn’t route traffic to broken pods.
- **Centralized logs & metrics** — Prometheus, CloudWatch, Datadog; alerts tied to **symptoms** users care about.
- **Progressive delivery** — canary/blue-green where the org supports it.

**Caveat:** “70%” is often **relative to a prior period** (e.g. incidents per deploy, or failed pipeline runs per month).

---

### ~60% — Scalability improvements (EKS policies)

**What it tends to mean:** The system handles **more load** (throughput, concurrent users, job volume) without proportional cost blowups or failure spikes—often via cluster and app tuning.

**How it’s commonly achieved:**

- **Right-sized nodes & pools** — instance families matched to workload (CPU vs memory vs network).
- **HPA based on meaningful metrics** — not just CPU if the bottleneck is elsewhere (queue depth, custom metrics).
- **Connection and thread limits** — tuned so spikes don’t collapse dependencies (DB, Redis).
- **Capacity planning** — stress tests or load tests before peak events.

**Caveat:** Scalability “%” is rarely universal; it’s usually vs. a **specific load test** or **peak event**.

---

### ~50% — Page load improvement (frontend performance)

**What it tends to mean:** Faster **First Contentful Paint**, **Time to Interactive**, or route transition times—often measured with Lighthouse, Web Vitals, or RUM.

**How it’s commonly achieved:**

- **Bundle size** — code splitting, lazy-loaded routes, tree-shaking, dropping unused deps.
- **Network** — compression, HTTP/2/3, CDN for static assets, image optimization.
- **Runtime** — fewer blocking scripts, defer non-critical work, virtualize long lists where needed.
- **Caching** — HTTP cache headers, service worker only when justified.

**Caveat:** Gains depend heavily on **before** state (legacy bundles, unoptimized images, etc.).

---

### ~30% — Reliability / integration gains

**What it tends to mean:** Fewer user-visible errors when talking to downstream services—timeouts, partial failures, inconsistent state—or improved **uptime** of integrated flows.

**How it’s commonly achieved:**

- **Resilient HTTP clients** — retries with backoff, circuit breakers where appropriate, strict timeouts.
- **Idempotency** — safe retries for writes.
- **Contract testing** — APIs don’t silently drift between teams.
- **Error budgets & SLOs** — prioritize fixes that affect the most sessions.

**Caveat:** “Reliability” should be tied to **error rate**, **availability SLO**, or **incident count**, not gut feel.

---

## 3. Talking about this in interviews

- **Lead with mechanism:** “We measured p95 latency before/after cache and index changes…”
- **Name the baseline:** “Against Q2 numbers…” or “Compared to the prior Jenkins-only process…”
- **Own the scope:** “My part was backend tuning and pipeline design; the team also improved X.”
- **Avoid over-claiming:** Percentages summarize **past contexts**; new clients get **process and expertise**, not copied numbers as promises.

---

## 4. Updating the site

The metric **labels** and **work stories** live in `src/app/page.tsx` (`metrics` array and `work` array). When you refresh roles or measurements, align **narrative** and **numbers** so both stay truthful—and use this file as your private reference for **how** those outcomes are produced in practice.

---

*Internal reference for the Businex site. Not shown on the public page.*
