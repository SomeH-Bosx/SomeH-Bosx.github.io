# 霍宝珊 · Portfolio

面向招聘的个人作品集：[someh-bosx.github.io](https://someh-bosx.github.io/)

**AI Application Engineer · Data & AI Builder**  
广东技术师范大学 · 信息与计算科学 · 深圳 / 广州 · Open to Intern

用 30 秒回答三件事：是谁、做过什么、为什么值得约面。

## 页面

| 路径 | 作用 |
| --- | --- |
| `/` | 首页：Hero、Featured Projects、Skills、竞赛 |
| `/projects/` | 项目列表 |
| `/projects/rag/` | Enterprise RAG 工程案例 |
| `/projects/finpilot/` | FinPilot 产品案例 |
| `/resume/` | 简历页（教育、技能、项目、竞赛、PDF） |
| `/contact/` | GitHub、作品集、邮箱（点击复制） |
| `/about/` | 重定向到简历页 |

导航：Home / Projects / Resume / Contact。邮箱不在页面明文展示，Contact 与页脚通过弹窗复制。

## 技术栈

- Next.js 16（App Router）+ React 19
- Tailwind CSS 4 + shadcn/ui
- 技能标签用 [Simple Icons](https://simpleicons.org) 官方 SVG
- `output: "export"` 静态导出，适配 GitHub Pages 用户站（无 `basePath`，`trailingSlash: true`）

## 本地运行

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

```bash
npm run build   # 产出静态站点到 out/
npm run lint
```

## 改内容改哪里

文案和链接集中在 `src/data/`，一般不用改页面组件。

| 文件 | 内容 |
| --- | --- |
| `src/data/site.ts` | 姓名、岗位、导航、联系方式、首页技能矩阵与竞赛 |
| `src/data/projects.ts` | 两个 Featured 项目的封面、截图、视频、GitHub |
| `src/data/resume.ts` | 简历页正文、技能、项目、竞赛 |
| `src/data/rag.ts` | RAG 案例故事 |
| `src/data/finpilot.ts` | FinPilot 产品故事 |

技能标签图标映射在 `src/components/skill-marks.ts`。Simple Icons 没有收录的标签（如 Chroma、Taro、XGBoost）保持纯文字。

## 媒体与简历

| 用途 | 路径 |
| --- | --- |
| RAG 封面 / 截图 | `public/images/projects/rag/` |
| FinPilot 封面 / 截图 | `public/images/projects/finpilot/` |
| RAG Demo | `public/videos/rag-demo.mp4` |
| FinPilot Demo | `public/videos/finpilot-demo.mp4` |
| AI 简历 | `public/resume/ai-resume.pdf` |
| Data 简历 | `public/resume/data-resume.pdf` |

文件名对上就会显示。路径不同时改对应 data 文件。视频建议 720p、H.264、约 20MB 以内。FinPilot Demo 为竖屏（9:16），RAG 为横屏。

## 部署

`next.config.ts` 已按 GitHub Pages 静态站配置：

- `output: "export"`
- `images.unoptimized: true`
- `trailingSlash: true`

`npm run build` 后把 `out/` 发布到 [SomeH-Bosx.github.io](https://github.com/SomeH-Bosx/SomeH-Bosx.github.io) 即可。

## 目录

```
src/
  app/           路由页面
  components/    UI 与区块
  data/          站点文案与项目数据
public/
  images/        项目封面与截图
  videos/        Demo
  resume/        PDF
```
