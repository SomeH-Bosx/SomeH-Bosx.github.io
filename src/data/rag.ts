export const ragCase = {
  quote: "一个真正的项目页面不是放代码，而是讲故事。",
  meta: [
    { label: "开发时间", value: "2026.07 ~ 2026.08" },
    { label: "周期", value: "1 个月" },
    { label: "角色", value: "独立开发" },
    { label: "技术", value: "LangChain / Chroma" },
    { label: "模型", value: "Ollama + Qwen" },
  ],
  problem:
    "企业文档分散在 PDF、Word 与 Markdown 里，同事靠文件名和记忆查找，问答无法定位出处，检索效率低。",
  solution:
    "用 RAG + Hybrid Retrieval：文档切块嵌入后走向量与关键词混合检索，再语义重排，让模型基于命中片段作答并附上引用。",
  architecture: [
    { title: "PDF / DOCX / MD", subtitle: "Ingest" },
    { title: "Chunk / Embed", subtitle: "Index" },
    { title: "Hybrid Retrieve", subtitle: "Search" },
    { title: "ReRank / LLM", subtitle: "Generate" },
    { title: "Answer & Cite", subtitle: "Output" },
  ],
  reflections: [
    "关键词检索会漏语义相近的文档，补上向量检索做成混合召回。",
    "模型容易在无依据时编造答案，改为强制引用溯源，没命中则明确拒答。",
    "多轮对话里问题会漂移，加入查询改写，把指代补全后再检索。",
  ],
} as const;
