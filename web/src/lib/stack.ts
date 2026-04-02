/**
 * `icon` is an Iconify id (`https://api.iconify.design/{id}.svg`), or the literal
 * `"beetle"` for the site brand mark (same asset as the favicon).
 */
export type StackItem = {
  label: string;
  icon: string;
};

export type StackCategory = {
  title: string;
  subtitle?: string;
  items: StackItem[];
};

export const stackCategories: StackCategory[] = [
  {
    title: "Programming languages",
    items: [
      { label: "Java", icon: "devicon:java" },
      { label: "Kotlin", icon: "devicon:kotlin" },
      { label: "Python", icon: "devicon:python" },
      { label: "JavaScript", icon: "devicon:javascript" },
      { label: "TypeScript", icon: "devicon:typescript" },
    ],
  },
  {
    title: "Databases",
    items: [
      { label: "PostgreSQL", icon: "devicon:postgresql" },
      { label: "MySQL", icon: "devicon:mysql" },
      { label: "SQLite", icon: "devicon:sqlite" },
      { label: "MongoDB", icon: "devicon:mongodb" },
    ],
  },
  {
    title: "Cloud & IaC",
    subtitle:
      "AWS, CloudFormation templates/stacks, Terraform, and complementary provisioning patterns.",
    items: [
      { label: "AWS", icon: "logos:aws" },
      { label: "Terraform", icon: "devicon:terraform" },
      { label: "CloudFormation", icon: "logos:aws-cloudformation" },
    ],
  },
  {
    title: "Automation & CI/CD",
    subtitle:
      "Ansible for configuration and repeatable environments; CI/CD pipelines (build, test, deploy) with GitHub Actions, Jenkins, and similar tooling.",
    items: [
      { label: "Ansible", icon: "devicon:ansible" },
      { label: "GitHub Actions", icon: "devicon:githubactions" },
      { label: "Jenkins", icon: "devicon:jenkins" },
    ],
  },
  {
    title: "Platform",
    items: [
      { label: "Docker", icon: "devicon:docker" },
      { label: "CentOS", icon: "devicon:centos" },
      { label: "Linux", icon: "devicon:linux" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { label: "React", icon: "devicon:react" },
      { label: "Next.js", icon: "beetle" },
      { label: "Angular", icon: "devicon:angular" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { label: "Spring Boot", icon: "devicon:spring" },
      { label: "Django", icon: "skill-icons:django" },
      { label: "Flask", icon: "devicon:flask" },
      { label: "FastAPI", icon: "devicon:fastapi" },
    ],
  },
];

export function iconifySrc(icon: string): string {
  return `https://api.iconify.design/${icon}.svg`;
}
