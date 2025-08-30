export type SkillGroup = {
  title: string;
  items: string[];
  icon: "code" | "database" | "cpu" | "star";
};

export const skills: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    items: [
      "JavaScript/TypeScript",
      "Python",
      "Java",
      "React/Next.js",
      "React Native",
      "Node.js",
      "Flask",
      "Tailwind CSS",
    ],
    icon: "code",
  },
  {
    title: "Cloud & Data",
    items: [
      "AWS (EC2, S3, Lambda, Neptune)",
      "DynamoDB",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "Graph DBs (Gremlin/SPARQL)",
    ],
    icon: "database",
  },
  {
    title: "DevOps & Platform",
    items: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CloudWatch",
      "Linux",
    ],
    icon: "cpu",
  },
  {
    title: "Practices & Testing",
    items: [
      "Distributed Systems",
      "System Design",
      "Testing (Jest/Playwright)",
      "Observability",
      "Performance",
      "Documentation",
    ],
    icon: "star",
  },
];
