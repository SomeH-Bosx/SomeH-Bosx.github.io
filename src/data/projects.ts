export type ProjectCta = {
  label: string;
  href: string;
};

export type Project = {
  slug: "rag" | "finpilot";
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
    title: "Enterprise RAG Knowledge Base",
    subtitle: "Case Study",
    description:
      "用 LangChain + Chroma + Ollama 构建企业级知识库问答系统，支持混合检索、语义重排、多轮对话与引用溯源。",
    tags: ["LLM", "RAG", "FastAPI"],
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
      { label: "GitHub", href: "https://github.com/SomeH-Bosx/enterprise-rag" },
      { label: "Demo Video", href: "/projects/rag/#demo" },
      { label: "Case Study", href: "/projects/rag/" },
    ],
  },
  {
    slug: "finpilot",
    title: "FinPilot · AI 财务助手",
    subtitle: "AI Product",
    description:
      "从用户真实预算痛点出发设计 AI 财务产品，实现预算划分、资金归属、消费分析与智能建议。",
    tags: ["AI Product", "React", "Workflow"],
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
      { label: "GitHub", href: "https://github.com/SomeH-Bosx/FinPilot" },
      { label: "Product Demo", href: "/projects/finpilot/#demo" },
      { label: "Design Process", href: "/projects/finpilot/#process" },
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
