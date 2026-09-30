export const economicAnalysisCase = {

  quote: "重点不是把数据做成漂亮的 Dashboard，而是从订单数据中找到影响增长、复购与经营效率的关键问题。",

  meta: [
    { label: "开发时间", value: "2026.04" },
    { label: "周期", value: "约 1 周" },
    { label: "角色", value: "数据分析 + 可视化" },
    { label: "技术", value: "Python / SQL / Power BI" },
    { label: "重点", value: "经营分析" },
  ],

  pain: "电商平台每天产生大量订单，但单看 GMV 和订单量很难回答「增长来自哪里」「哪些客户值得留住」「哪些品类正在拖累经营」。需要把分散的订单、用户、商品、评价和地区数据转化为可解释的经营指标，并进一步定位问题。",

  persona: [
    { label: "是谁", value: "电商运营、经营分析或业务负责人" },
    { label: "场景", value: "需要快速判断销售趋势、客户价值和品类表现" },
    { label: "目标", value: "从经营数据中发现问题，并为运营决策提供依据" },
  ],

  analysisModules: [
    { label: "经营概览", value: "围绕 GMV、订单量、客单价等核心指标观察整体经营趋势" },

    { label: "趋势分析", value: "拆解时间、地区和品类维度，定位增长与波动来源" },

    { label: "客户分析", value: "基于 RFM 对客户进行价值分层，识别高价值与流失风险客户" },

    { label: "经营洞察", value: "结合销售、客户、商品和评价数据，将数据变化转化为可执行的业务问题" },
  ],

  featureFlow: [
    { title: "数据接入", subtitle: "Collect" },

    { title: "数据清洗", subtitle: "Clean" },

    { title: "指标建模", subtitle: "Model" },

    { title: "经营分析", subtitle: "Analyze" },

    { title: "业务洞察", subtitle: "Decide" },
  ],

  analysisWorkflow: [
    { title: "业务问题", subtitle: "Question" },

    { title: "数据探索", subtitle: "Explore" },

    { title: "指标分析", subtitle: "Measure" },

    { title: "用户分层", subtitle: "Segment" },

    { title: "洞察输出", subtitle: "Insight" },
  ],

  next: [
    "增加客户生命周期分析，进一步识别不同阶段客户的行为差异。",

    "引入更多商品与物流指标，分析价格、配送体验和评价对复购的影响。",

    "将静态分析升级为可交互的经营分析系统，并结合 AI 自动生成经营分析报告。",
  ],

} as const;