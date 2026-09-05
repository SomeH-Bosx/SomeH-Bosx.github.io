export const finpilotCase = {
  quote: "重点不是再做一个记账工具，而是让钱的归属和预算决策变得可执行。",
  meta: [
    { label: "开发时间", value: "2026.07 ~ 2026.08" },
    { label: "周期", value: "1 个月" },
    { label: "角色", value: "产品 + 开发" },
    { label: "技术", value: "React / FastAPI" },
    { label: "重点", value: "产品思维" },
  ],
  pain: "记账 App 只告诉你花了多少，不回答「这顿能不能吃」。预算规则记不住，工资一到账就被日常开销摊平，钱的归属是乱的。",
  persona: [
    { label: "是谁", value: "一线城市年轻职场人，刚开始认真管钱" },
    { label: "场景", value: "发薪后要同时覆盖房租、社交和储蓄" },
    { label: "目标", value: "先分清能花、该留、已承诺，再谈优化" },
  ],
  prd: [
    { label: "预算划分", value: "按 50 / 30 / 20 把收入拆成必需、想要、储蓄" },
    { label: "资金归属", value: "每笔支出对应账户角色，避免「看起来有钱」" },
    { label: "消费分析", value: "按类别看偏差，指出哪一类在挤占储蓄" },
    { label: "智能建议", value: "结合剩余预算给出当下能不能花的建议" },
  ],
  featureFlow: [
    { title: "导入流水", subtitle: "Capture" },
    { title: "资金归属", subtitle: "Assign" },
    { title: "预算规则", subtitle: "Allocate" },
    { title: "AI 建议", subtitle: "Advise" },
    { title: "回顾调整", subtitle: "Review" },
  ],
  aiWorkflow: [
    { title: "用户问题", subtitle: "Intent" },
    { title: "读取账本", subtitle: "Context" },
    { title: "规则 + LLM", subtitle: "Reason" },
    { title: "建议与风险", subtitle: "Output" },
  ],
  next: [
    "接入多账户同步，减少手工导入。",
    "支持家庭或合租的共享预算。",
    "把消费分类做稳，让建议建立在更干净的数据上。",
  ],
} as const;
