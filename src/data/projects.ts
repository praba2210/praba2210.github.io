export type Project = {
  title: string;
  tag: string;
  desc: string;
  links: { href: string; label: string }[];
};

export const projects: Project[] = [
  {
    title: "Zero‑Downtime Upgrades Toolkit",
    tag: "Backend • AWS • Java",
    desc: "Automation utilities to orchestrate Neptune engine upgrades and failovers with no customer impact.",
    links: [{ href: "#", label: "Case Study" }],
  },
  {
    title: "Talent Acquisition Platform",
    tag: "React • WebRTC • AWS",
    desc: "Live interviews, screening workflows, and media storage; boosted recruiter throughput by ~30%.",
    links: [{ href: "#", label: "Overview" }],
  },
  {
    title: "Event Platform Migration (Vue → Next.js)",
    tag: "Frontend • Next.js • DX",
    desc: "Rebuilt storefront with SEO & performance focus; +60% perf, real‑time analytics.",
    links: [{ href: "#", label: "Notes" }],
  },
];
