export const site = {
  name: "霍宝珊",
  role: "AI Application Engineer",
  brand: "Data & AI Builder",
  location: "深圳 / 广州",
  status: "Open to Intern",
  tagline:
    "专注 AI 应用开发与工作流设计，擅长利用 LLM + RAG 构建真实可落地的产品。",
  about:
    "以数据分析与数学建模为底，用工程方式把大模型做成可检索、可评估、可交付的应用。",
  skills: ["LangChain", "FastAPI", "Python", "RAG"],
  github: "https://github.com/SomeH-Bosx",
  portfolioUrl: "https://github.com/SomeH-Bosx/Collection",
  email: "Appler__77@163.com",
  contactLine: "寻找 AI 应用 / Agent / LLM 开发方向实习机会。",
  education: [
    { label: "学校", value: "广东技术师范大学" },
    { label: "专业", value: "信息与计算科学" },
    { label: "就读时间", value: "2023.09 ~ 2027.07" },
    { label: "意向城市", value: "深圳 / 广州" },
  ],
  resumes: [
    {
      label: "AI Resume",
      href: "/resume/ai-resume.pdf",
      fileName: "HUO_Baoshan_AI_Resume.pdf",
    },
    {
      label: "Data Resume",
      href: "/resume/data-resume.pdf",
      fileName: "HUO_Baoshan_Data_Resume.pdf",
    },
  ],
  skillMatrix: [
    {
      category: "AI Application",
      items: [
        "LangChain",
        "Ollama",
        "Chroma",
        "BM25",
        "Reranker",
        "DashScope",
        "Structured Output",
      ],
    },
    {
      category: "Backend Engineering",
      items: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "Streamlit", "Pydantic"],
    },
    {
      category: "Data Analysis",
      items: ["Pandas", "NumPy", "SQL", "XGBoost", "Statistical Modeling"],
    },
    {
      category: "Engineering Tools",
      items: ["Git", "Docker", "Linux", "GitHub Actions", "Cursor", "Claude Code"],
    },
  ],
  competitions: [
    {
      title: "Provincial First Prize",
      field: "Mathematical Modeling",
      contest: "全国五一数学建模大赛",
      date: "2025.05",
      role: "团队核心编程与数据分析负责人",
      keywords: ["社交媒体分析", "百万级数据", "Logistic 回归", "XGBoost"],
    },
    {
      title: "Provincial Second Prize",
      field: "Statistical Modeling",
      contest: "全国大学生数学建模大赛",
      date: "2025.09",
      role: "编程手",
      keywords: ["GAMM", "TOPSIS", "生存分析", "Bootstrap"],
    },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects/", label: "Projects" },
  { href: "/resume/", label: "Resume" },
  { href: "/contact/", label: "Contact" },
] as const;
