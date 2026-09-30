export type ProjectCta = {
  label: string;
  href: string;
};

export type Project = {
  slug: "rag" | "finpilot" | "economic-analysis";
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  cover: string;
  shots: string[];
  video: string;
  github: string;
  href: string;
  ctas: ProjectCta[];
};

export const projects: Project[] = [
  {
    slug: "rag",
    title: "Enterprise RAG",
    subtitle: "Case Study",
    description:
      "Enterprise knowledge base with Hybrid Retrieval, Reranker and observable evaluation.",
    tags: ["LangChain", "FastAPI", "Chroma", "Ollama", "Docker"],
    cover: "/images/projects/rag/cover.jpg",
    shots: [
      "/images/projects/rag/shot-1.jpg",
      "/images/projects/rag/shot-2.jpg",
      "/images/projects/rag/shot-3.jpg",
    ],
    video: "/videos/rag-demo.mp4",
    github: "https://github.com/SomeH-Bosx/enterprise-rag",
    href: "/projects/rag/",
    ctas: [
      { label: "Case Study", href: "/projects/rag/" },
      { label: "GitHub", href: "https://github.com/SomeH-Bosx/enterprise-rag" },
    ],
  },
  {
    slug: "finpilot",
    title: "FinPilot",
    subtitle: "AI Product",
    description:
      "AI Zero-Based Budget Copilot for multi-account personal finance management.",
    tags: ["Taro", "FastAPI", "SQLite", "AI Product"],
    cover: "/images/projects/finpilot/cover.jpg",
    shots: [
      "/images/projects/finpilot/shot-1.jpg",
      "/images/projects/finpilot/shot-2.jpg",
      "/images/projects/finpilot/shot-3.jpg",
      "/images/projects/finpilot/shot-4.jpg",
      "/images/projects/finpilot/shot-5.jpg",
      "/images/projects/finpilot/shot-6.jpg",
    ],
    video: "/videos/finpilot-demo.mp4",
    github: "https://github.com/SomeH-Bosx/FinPilot",
    href: "/projects/finpilot/",
    ctas: [
      { label: "Case Study", href: "/projects/finpilot/" },
      { label: "GitHub", href: "https://github.com/SomeH-Bosx/FinPilot" },
    ],
  },
  {
    slug: "economic-analysis",
    title: "Economic Analysis",
    subtitle: "Data Analysis",
    description:
      "Data analysis and visualization of economic indicators using Python and Pandas.",
    tags: ["Taro", "FastAPI", "SQLite", "AI Product"],
    cover: "/images/projects/economic-analysis/cover.png",
    shots: [
      "/images/projects/economic-analysis/Overview.png",
      "/images/projects/economic-analysis/RFM.png",
    ],
    video: "/videos/economics-demo.mp4",
    github: "https://github.com/SomeH-Bosx/ecommerce-analysis",
    href: "/projects/economic-analysis/",
    ctas: [
      { label: "Case Study", href: "/projects/economic-analysis/" },
      { label: "GitHub", href: "https://github.com/SomeH-Bosx/ecommerce-analysis" },
    ],
  },
];

export function getProject(slug: Project["slug"]) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    throw new Error(`Unknown project: ${slug}`);
  }
  return project;
}
