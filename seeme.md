# 阶段一

- 用 Next.js + Tailwind + shadcn/ui 搭好项目，并配好 GitHub Pages 静态导出（`output: "export"`，用户站、无 `basePath`）
- 全站深色主题（`#0A0A0A`、白字、蓝紫描边）
- 导航：Home / Projects / About；页脚：GitHub / Resume / Contact（链接仍是占位 `#`）
- 文案数据集中在 `src/data/site.ts` 和 `src/data/projects.ts`，之后改联系方式、项目路径只改这里
- 建好媒体目录，方便你之后丢文件

# 阶段二

首页第一屏按 README 做成招聘者 30 秒能扫完的信息：

- Open to Intern 状态胶囊
- 姓名、岗位与城市：霍宝珊 · AI Application Engineer · 深圳 / 广州
- 技能胶囊：LangChain / FastAPI / React / Cursor
- 价值主张那句 tagline
- 查看项目（先链到 `/#projects`，项目区在 Phase 4 才会出现）
- 下载简历（链到 `/resume.pdf`，文件还没放，点了会 404，这是预期）

第一屏没有放头像，和文档一致。



# 阶段三

首页加了数据化 About，不是自我介绍，四格一眼扫完：

- 学历：双非二本 · 信息与计算科学
- 意向城市：深圳 / 广州
- 竞赛：数学建模一等奖 · 统计建模二等奖
- 方向：AI 应用 · Agent · RAG

文案来自 `src/data/site.ts` 的 `highlights`，以后改数据不用动布局。



# 阶段四

首页加了 Featured Projects，两张大卡片：

- Enterprise RAG Knowledge Base：LLM / RAG / FastAPI，按钮 GitHub、Demo Video、Case Study
- FinPilot · AI 财务助手：AI Product / React / Workflow，按钮 GitHub、Product Demo、Design Process

封面还没放图，所以现在是深色网格占位。之后把 `cover.jpg` 放到 `public/images/projects/rag/` 或 `finpilot/` 就会自动换成真实封面。

Case Study 等按钮已经链到详情页，页面还没做，点进去会 404，这是预期。



# 阶段五

- Tech Stack 能力矩阵（不是一堆 logo）：AI 应用 / Backend / Frontend / Engineering，技能用 `·` 连成一行
- Let's Build Something 联系区：一句话意向 + GitHub / 下载简历 / Contact
- 页脚的 Contact 会跳到这一块（`/#contact`）

GitHub、邮箱、简历仍是占位；以后改 `src/data/site.ts` 里的 `github`、`email`、`resumeUrl` 即可。



# 阶段六

About 不再是占位页，按 README 拆成三块：

- Education：学历、专业、意向城市
- Contests：数学建模一等奖、统计建模二等奖
- Tech Stack：和首页同一套 `skillMatrix` 数据，改一处两边同步

首页 Skills 区也还在，布局没有被拆乱



# 阶段七

RAG 详情按案例故事来写，不是贴代码：

- 标题、引言、周期 / 角色 / 技术 / 模型
- 01 Problem：文档分散、检索效率低
- 02 Solution：RAG + Hybrid Retrieval
- 03 Architecture：Ingest → Index → Search → Generate → Cite
- 04 Demo Video：占位播放器；把文件放到 `public/videos/rag-demo.mp4` 就会自动出现
- 05 Reflection：3 条优化（混合检索、引用拒答、查询改写）

截图同样先用深色占位，之后放入 `public/images/projects/rag/shot-1.jpg` 等即可。



# 阶段八

FinPilot 详情按产品思维来写，不是堆代码：

1. 用户痛点
2. 用户画像
3. PRD 摘要（预算划分、资金归属、消费分析、智能建议）
4. 功能流程
5. AI 工作流
6. Demo 视频占位（放入 `public/videos/finpilot-demo.mp4` 即可播放）
7. 下一步规划

首页「Product Demo」会滚到视频，「Design Process」会滚到产品故事。RAG 页也改成同一套页头组件，两页结构一致。



# 以后怎么插入剪好的视频和图片

现在不用准备素材。约定路径已经写进数据文件：

| 用途                 | 放到这里                                             |
| :------------------- | :--------------------------------------------------- |
| RAG 封面             | `public/images/projects/rag/cover.jpg`               |
| RAG 截图             | `public/images/projects/rag/shot-1.jpg`（2、3 同理） |
| FinPilot 封面 / 截图 | `public/images/projects/finpilot/`                   |
| RAG 演示视频         | `public/videos/rag-demo.mp4`                         |
| FinPilot 演示视频    | `public/videos/finpilot-demo.mp4`                    |
| 简历                 | `public/resume.pdf`                                  |

文件名对上就会自动显示。若文件名不同，改 `src/data/projects.ts` 里的路径即可。视频请压到约 20MB 以内（720p、H.264）；更大建议改 B 站 / YouTube 外链。