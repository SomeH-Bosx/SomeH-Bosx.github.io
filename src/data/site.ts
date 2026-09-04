export const site = {
  name: "霍宝珊",
  role: "AI Application Engineer",
  location: "深圳 / 广州",
  status: "Open to Intern",
  tagline:
    "专注 AI 应用开发与工作流设计，擅长利用 LLM + RAG 构建真实可落地的产品。",
  skills: ["LangChain", "FastAPI", "React", "Cursor"],
  github: "https://github.com/SomeH-Bosx",
  email: "Appler__77@163.com",
  resumeFileName: "HUO_Baoshan_AI_Application_Resume.pdf",
  resumeUrl: "/HUO_Baoshan_AI_Application_Resume.pdf",
  contactLine: "寻找 AI 应用 / Agent / LLM 开发方向实习机会。",
  highlights: [
    { label: "学历", value: "双非二本 · 信息与计算科学" },
    { label: "意向城市", value: "深圳 / 广州" },
    { label: "竞赛", value: "数学建模一等奖 · 统计建模二等奖" },
    { label: "方向", value: "AI 应用 · Agent · RAG" },
  ],
  education: [
    { label: "学历", value: "双非二本" },
    { label: "专业", value: "信息与计算科学" },
    { label: "意向城市", value: "深圳 / 广州" },
  ],
  contests: [
    { label: "数学建模", value: "一等奖" },
    { label: "统计建模", value: "二等奖" },
  ],
  skillMatrix: [
    {
      category: "AI 应用",
      items: ["LangChain", "OpenAI SDK", "Ollama", "DashScope"],
    },
    {
      category: "Backend",
      items: ["Python", "FastAPI", "SQLAlchemy"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind"],
    },
    {
      category: "Engineering",
      items: ["Git", "Docker", "GitHub Actions"],
    },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/about/", label: "About" },
] as const;
