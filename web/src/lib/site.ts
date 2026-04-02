/** Edit URLs for GitHub, LinkedIn, and optional Calendly. */
export const site = {
  /** Venture / brand shown in header, tab title, and footer. */
  ventureName: "Beetle Tech",
  /** Favicon + brand mark — PNG with transparency (`public/`). */
  brandIconSrc: "/beetle-icon.png",
  name: "Godfred Asumadu Asamoah",
  tagline: "Software Engineer · Data Scientist · AWS · DevOps",
  bio: "Backends, APIs, cloud (AWS, Docker, Kubernetes), and analytics (Python, Power BI, Tableau). I build scalable systems, automation, and data-driven solutions — and teach analytics in classroom settings.",
  email: "godfred.asumadu.asamoah@gmail.com",
  phone: "+233 548670632",
  /** Shown in footer; chat link uses the same digits without spaces. */
  whatsappNumberInternational: "+233548670632",
  whatsappNumberLocal: "0548670632",
  /** Use api.whatsapp.com so strict blocklists are less likely to hide the link than wa.me. */
  whatsappUrl: "https://api.whatsapp.com/send?phone=233548670632",
  timezone: "GMT · Africa/Accra",
  githubUrl: "https://github.com/GodfredAsa",
  linkedinUrl:
    "https://www.linkedin.com/in/godfred-asumadu-asamoah-1ba453107/",
  calendlyUrl: "",
  cvPath: "/cv.pdf",
  /** Portrait in `public/` — hero, contact, Apple touch icon. */
  profilePhotoSrc: "/profile.png",

  /** Happy clients — edit names (optional subtitle: role · organization). */
  happyClients: [
    {
      name: "Jackson Institute of Technology",
      subtitle:
        "Training & consulting under NIIT · taught data analytics in the Professional Diploma in Data Analytics",
    },
    {
      name: "Berinhart",
      subtitle:
        "Contract software engineering — Sqippa IoT product line (dashboards & operator UX for live sensor telemetry)",
    },
    {
      name: "Dynamic Devine School",
      subtitle:
        "James Town · MVP semi–school management (terminal reports & lighter teacher workload)",
    },
  ],
} as const;
