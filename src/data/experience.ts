export type ExperienceItem = {
  role: string;
  org: string;
  time: string;
  bullets: string[];
  icon: "briefcase" | "code" | "cpu";
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    org: "Amazon (Neptune)",
    time: "May 2025 – Aug 2025",
    bullets: [
      "Engineered enhancements enabling zero‑downtime engine upgrades & data migrations.",
      "Optimized multi‑AZ replication, improving efficiency by ~40%.",
      "Built automation tools for upgrade and recovery workflows using Java & AWS services.",
    ],
    icon: "briefcase",
  },
  {
    role: "Software Developer (Freelance)",
    org: "Various",
    time: "Dec 2022 – Nov 2023",
    bullets: [
      "Talent acquisition platform with React, WebRTC, AWS → recruiter efficiency +30%.",
      "Event platform migration Vue → Next.js → performance +60%, real‑time tracking.",
      "Gamified learning POC with React & Canvas for interactive kids' games.",
    ],
    icon: "code",
  },
  {
    role: "Software Developer",
    org: "Rejola IT Services",
    time: "Apr 2022 – Dec 2022",
    bullets: [
      "Built two React Native apps for learning & instructor content; real‑time streaming support.",
    ],
    icon: "cpu",
  },
];
