export const resumeAbout = [
  "具备 LLM 应用开发与 AI 产品落地能力，熟悉 Python、FastAPI、SQL、Git，掌握 LangChain、Chroma、BM25、RAG、Reranker、Ollama 等技术，具备 Hybrid Retrieval、Prompt / Structured Output、模型评测及本地大模型部署经验。",
  "熟练掌握 Python、SQL、Pandas、NumPy，可独立完成数据清洗、质量管控与提取；熟悉回归、分类等机器学习落地，以及数据分析、模型评估与报告输出。",
] as const;

export const resumeSkillMatrix = [
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
    items: ["Python", "FastAPI", "MySQL", "MyBatis", "SQLite", "Docker"],
  },
  {
    category: "Data Analysis",
    items: ["Pandas", "NumPy", "SQL", "PyTorch", "XGBoost", "Statistical Modeling"],
  },
  {
    category: "Engineering Tools",
    items: ["Git", "Linux", "Excel", "PPT", "Cursor", "Claude Code"],
  },
] as const;

export const resumeProjects = [
  {
    slug: "rag",
    date: "2026.07 ~ 2026.08",
    title: "Enterprise RAG｜本地企业知识库 RAG 问答系统",
    role: "个人开发",
    href: "/projects/rag/",
    github: "https://github.com/SomeH-Bosx/enterprise-rag",
    tags: [
      "Python",
      "LangChain",
      "FastAPI",
      "Chroma",
      "BM25",
      "DashScope Reranker",
      "Ollama",
      "Streamlit",
      "Docker",
      "Git",
    ],
    summary:
      "面向企业私有文档问答场景，搭建支持 PDF / Word / PPT / Markdown 多格式解析、检索、生成与引用溯源的本地优先 RAG 系统。",
    highlights: [
      "设计 Dense Retrieval + BM25 + RRF Hybrid Retrieval + Reranker 检索链路，结合 DashScope Reranker 优化候选文档排序。",
      "独立评测框架，30 题测试集：Recall@5 83.3% → 86.7%，Strict Citation 62.1% → 75.9%。",
      "FastAPI + Streamlit 提供 API 与 Web Demo，支持 Docker 部署、配置管理及运行日志。",
    ],
  },
  {
    slug: "finpilot",
    date: "2026.07 ~ 2026.08",
    title: "FinPilot｜AI 零基预算 Copilot",
    role: "AI 应用 · 全栈 · 个人开发",
    href: "/projects/finpilot/",
    github: "https://github.com/SomeH-Bosx/FinPilot",
    tags: [
      "Taro",
      "FastAPI",
      "SQLite",
      "Ollama",
      "通义",
      "DeepSeek",
      "Pydantic",
      "pytest",
      "Docker",
    ],
    summary:
      "针对个人多账户资金管理，独立设计并开发「零基分仓—预算执行—月度分析」AI 财务应用，实现自然语言录入、预算分配及分析建议闭环。",
    highlights: [
      "预算分仓（Budget Bucket）与支付账户解耦；LLM Provider Adapter 支持 Ollama / 通义 / DeepSeek 按需切换。",
      "Structured Output + Pydantic 约束模型输出；规则决定审批结论、模型生成解释，降低幻觉风险。",
      "小程序自然语言确认卡、微信登录、Docker 部署；30 条黄金测试集，pytest 27 项全部通过。",
    ],
  },
  {
    slug: "student-mis",
    date: "2025.10 – 2025.12",
    title: "学生信息管理系统",
    role: "独立负责人",
    tags: ["MySQL", "MyBatis", "Postman", "阿里云"],
    summary:
      "独立负责后端开发全流程、接口测试以及系统上线部署，最终完成 debug 并在阿里云部署上线。",
    highlights: [
      "提取前端 API 请求中的字段需求与业务逻辑，与前端核对复查，精准匹配接口路径、请求方式、参数与返回格式。",
      "按前端字段用 MySQL 建库，完成多表联查、空值处理与无效查询规避；加入外键约束、参数校验，并开启 MyBatis SQL 日志。",
      "插入测试数据，在 Postman 完成基础接口与核心功能前后端联调。",
    ],
  },
  {
    slug: "medical-ai",
    date: "2025.07 – 2025.09",
    title: "医疗 AI 模型优化与评估系统",
    role: "导师实验室 AI 项目组核心成员",
    tags: ["PyTorch", "ViT", "ResNet", "SHAP"],
    summary:
      "独立负责巨幼样变细胞图像的数据标记、清洗与标准化，并完成 8 个模型的评估选型与特征优化。",
    highlights: [
      "数据质量管控：处理 6 万+ 条细胞图像，用不确定性分数搭建质量分层体系，完成清洗与标准化。",
      "独立设计多维度评估框架，定量对比 8 个候选模型核心指标，输出分析报告支撑选型。",
      "基于多模态大模型提取深层特征，用 PSO 优化特征权重并迭代模型，成果落地至后端检测平台。",
    ],
  },
  {
    slug: "respiratory-forecast",
    date: "2025.03 – 2025.05",
    title: "呼吸道时序预测项目",
    role: "导师课题组 · 独立负责推进",
    tags: ["VAR", "ARIMA", "LSTM", "Transformer"],
    summary:
      "基于各省卫生机构 / CDC（2005–2020）共 192 个时间点的「省份 × 疾病」序列，完成滚动窗口预测与多模型对比。",
    highlights: [
      "外生变量选用气温、PM2.5、流感季、人口迁移；以前 T 个月为训练窗口，预测未来 1–6 个月。",
      "对比 VAR / ARIMA、VARIMAX / PCA 以及 LSTM / Transformer，评估指标为 RMSE、MAE、MAPE。",
      "比较个性化建模与联合建模，并分析外生变量贡献；结论为传统时序模型 + 特征提取优于深度学习模型。",
    ],
  },
] as const;

export const resumeCompetitions = [
  {
    date: "2025.05",
    contest: "全国五一数学建模大赛",
    award: "省级一等奖",
    role: "团队核心编程与数据分析负责人",
    keywords: ["百万级数据", "特征工程", "Logistic 回归", "XGBoost"],
    highlights: [
      "负责社交媒体用户行为分析全流程，完成百万级用户数据清洗、特征工程与标准化。",
      "通过统计分析与可视化挖掘核心规律，支撑团队建模方向。",
      "基于 Logistic 回归、XGBoost 构建用户互动预测体系，交叉验证后输出落地结论并完成论文。",
    ],
  },
  {
    date: "2025.09",
    contest: "全国大学生数学建模大赛",
    award: "省级二等奖",
    role: "核心成员",
    keywords: ["GAMM", "TOPSIS", "生存分析", "Bootstrap"],
    highlights: [
      "主导多因素时序预测与风险优化课题的代码实现；处理 400+ 例临床数据，完成质控、纵向聚合与缺失值插补。",
      "实现 GAMM 非线性拟合、TOPSIS 赋权、生存分析与动态规划，输出最佳 NIPT 检测时点。",
      "完成 1000 次 Bootstrap、残差 QQ 图与异方差检验；用 Python 复现论文全部模型与图表。",
    ],
  },
  {
    date: "2025.04",
    contest: "全国大学生统计建模大赛",
    award: "省级二等奖",
    role: "核心引领以及数据处理分析负责人",
    keywords: ["K-Means", "面板数据", "加权综合评价"],
    highlights: [
      "统筹残疾人就业区域差异课题，负责方案设计、模型选型与整体进度管理。",
      "用 Python 完成全国 33 个地区 5 年面板数据的预处理、多源合并与特征工程。",
      "实现 K-Means、相关性检验与加权综合评价，构建「地区-就业类型适配指数」，形成论文并获国家级二等奖。",
    ],
  },
] as const;
