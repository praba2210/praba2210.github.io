export type SkillGroup = {
  title: string;
  items: string[];
  icon: "code" | "database" | "cpu" | "star";
};

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C++ (Basics)",
    ],
    icon: "code",
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "HTML / CSS",
      "Tailwind CSS",
    ],
    icon: "code",
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Flask",
    ],
    icon: "cpu",
  },
  {
    title: "Databases",
    items: [
      "MongoDB",
      "SQL / PostgreSQL",
      "MySQL",
      "AWS Neptune",
      "GraphQL",
    ],
    icon: "database",
  },
  {
    title: "Cloud & Tools",
    items: [
      "AWS (EC2, S3, Neptune)",
      "GCP",
      "Docker",
      "Git",
      "Expo",
      "Linux / Unix",
      "Firebase (Auth, Firestore, Storage)",
      "Strapi CMS",
    ],
    icon: "cpu",
  },
  {
    title: "Concepts",
    items: [
      "Distributed Systems",
      "Graph Databases",
      "Relational & NoSQL",
      "Data Structures & Algorithms",
      "Machine Learning / AI",
    ],
    icon: "star",
  },
  {
    title: "Soft Skills",
    items: [
      "Agile Methodology",
      "Cross-Functional Collaboration",
      "Technical Documentation",
    ],
    icon: "star",
  },
];
