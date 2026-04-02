export type ServiceItem = {
  title: string;
  body: string;
  /** Iconify icon id, e.g. `mdi:api` */
  icon: string;
  /** Hex color without # for Iconify `color` param */
  accentHex: string;
};

export const services: ServiceItem[] = [
  {
    title: "Engineering & APIs",
    body: "Backends with Node.js, Spring Boot, PostgreSQL, MongoDB. Schema design, caching, observability (Datadog, CloudWatch, Prometheus).",
    icon: "mdi:api",
    accentHex: "2dd4bf",
  },
  {
    title: "Cloud & DevOps",
    body: "AWS EKS/ECS, Docker, Kubernetes, Helm, Terraform, CI/CD (GitHub Actions, Jenkins). Fewer deploy incidents, faster feedback loops.",
    icon: "mdi:cloud-cog-outline",
    accentHex: "38bdf8",
  },
  {
    title: "Data & BI",
    body: "EDA with Python, dashboards in Power BI and Tableau, SQL pipelines — from requirements to stakeholder-ready reporting.",
    icon: "mdi:chart-timeline-variant",
    accentHex: "a78bfa",
  },
  {
    title: "Training & Mentorship",
    body: "Hands-on analytics curricula, portfolio coaching, and tool-focused workshops — modeled on real classroom delivery.",
    icon: "mdi:school-outline",
    accentHex: "fbbf24",
  },
];

export function serviceIconSrc(icon: string, accentHex: string): string {
  const hex = accentHex.replace(/^#/, "");
  return `https://api.iconify.design/${icon}.svg?color=%23${hex}`;
}
