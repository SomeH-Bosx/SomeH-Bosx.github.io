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

| 用途              | 放到这里                          |
| :---------------- | :-------------------------------- |
| RAG 演示视频      | `public/videos/rag-demo.mp4`      |
| FinPilot 演示视频 | `public/videos/finpilot-demo.mp4` |
| 简历              | `public/resume.pdf`               |

文件名对上就会自动显示。若文件名不同，改 `src/data/projects.ts` 里的路径即可。视频请压到约 20MB 以内（720p、H.264）；更大建议改 B 站 / YouTube 外链。







# 部署

当前项目已经按 **GitHub Pages 用户主页** 配好了：`output: "export"`、无 `basePath`。按下面做完后，网址就是：

**https://someh-bosx.github.io/**

仓库名必须是 `SomeH-Bosx.github.io`。你现在推到的是 [profit](https://github.com/SomeH-Bosx/profit)，GitHub 上还没有 `SomeH-Bosx.github.io`（打开会 404）。继续用 `profit` 的话，网址会变成 `https://someh-bosx.github.io/profit/`，还要改 `basePath`，不建议。

---

### 1. 把现有仓库改成用户主页仓库

1. 打开 [https://github.com/SomeH-Bosx/profit](https://github.com/SomeH-Bosx/profit)
2. **Settings → General → Repository name**，改成 `SomeH-Bosx.github.io`，保存
3. 本地改远程地址（PowerShell）：

```powershell
cd D:\Carrer\OwnWeb
git remote set-url origin https://github.com/SomeH-Bosx/SomeH-Bosx.github.io.git
git remote -v
```

应显示 `SomeH-Bosx/SomeH-Bosx.github.io.git`。

---

### 2. 加两个部署文件

GitHub Pages 默认走 Jekyll，会丢掉 Next 的 `_next` 目录，所以要有 `.nojekyll`。再用 Actions 在每次推送 `main` 时自动构建并发布。

**`public/.nojekyll`**：空文件即可。

**`.github/workflows/deploy.yml`**：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

提交并推送：

```powershell
git add public/.nojekyll .github/workflows/deploy.yml
git commit -m "ci: deploy static site to GitHub Pages"
git push origin main
```

---

### 3. 打开 GitHub Pages

1. 打开 [https://github.com/SomeH-Bosx/SomeH-Bosx.github.io/settings/pages](https://github.com/SomeH-Bosx/SomeH-Bosx.github.io/settings/pages)
2. **Build and deployment → Source** 选 **GitHub Actions**（不要选 Deploy from a branch）
3. 到 **Actions** 看名为 `Deploy to GitHub Pages` 的 workflow，等绿勾
4. 第一次可能要在 Actions 页点 **Allow** / 确认 Pages 环境权限

大约 1–3 分钟后访问：

**https://someh-bosx.github.io/**

子页面带尾斜杠，例如：

- https://someh-bosx.github.io/projects/
- https://someh-bosx.github.io/resume/
- https://someh-bosx.github.io/contact/

---

### 4. 之后怎么更新

改代码后照常：

```powershell
git add .
git commit -m "feat: your message"
git push origin main
```

Actions 跑完，线上就会更新。

---

### 容易踩的坑

| 现象                                       | 原因                                                |
| ------------------------------------------ | --------------------------------------------------- |
| 打开全白 / CSS 全挂                        | 没加 `.nojekyll`，或 Source 还停在 branch           |
| `https://someh-bosx.github.io/profit/` 404 | 仓库还叫 `profit`，或没改远程                       |
| Actions 失败 `pages: write`                | Settings → Actions → General 允许 workflow 写 Pages |
| 视频播不了                                 | 单文件超过 100MB 推不上去；尽量压到 20MB 左右       |

本地预览导出结果：

```powershell
npm run build
npx --yes serve out
```

需要的话我可以直接帮你在项目里建好 `.nojekyll` 和 workflow 文件。