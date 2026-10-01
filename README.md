# Dong Zhongcen 个人博客（dongzhongcen-blog）

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/next.js-12.x-black">
  <img alt="React" src="https://img.shields.io/badge/react-18.x-61dafb">
  <img alt="TypeScript" src="https://img.shields.io/badge/typescript-4.x-blue">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/tailwindcss-3.x-38bdf8">
  <img alt="Framer Motion" src="https://img.shields.io/badge/framer--motion-12.x-ff0055">
  <img alt="Vercel" src="https://img.shields.io/badge/deploy-vercel-black">
</p>

这是 dongzhongcen 的个人主页与博客项目，基于 Next.js 12（Pages Router）+ React 18 + TypeScript，使用 Tailwind CSS 样式、Framer Motion 动画和 Lucide React 图标，部署在 Vercel。项目目前实现了单页个人主页，包括天气栏、个人简介、作品集、职业经历、技能展示、文章列表和深色模式切换，内容数据保存在 `data/` 目录中。

## 功能特性

- **实时天气**：通过浏览器定位获取访客位置，调用 Open-Meteo 获取当前天气、BigDataCloud 反查城市；定位失败时显示北京的天气。
- **个人简介**：展示个人信息和社交链接。
- **作品集**：展示 `data/projects.ts` 中的项目。
- **职业经历**：展示 `data/career.ts` 中的经历。
- **技能展示**：可视化展示 `data/skills.ts` 中的技能。
- **文章列表**：支持搜索和标签筛选 `data/articles.ts` 中的文章，点击跳转到文章的外部链接（`externalUrl`）。
- **深色模式**：默认跟随系统偏好，可手动切换并保存到 `localStorage`。
- **响应式设计**：适配桌面和移动设备。

## 项目结构

```text
.
├── pages/
│   ├── _app.tsx            # 应用入口
│   ├── _document.tsx       # 文档模板
│   └── index.tsx           # 首页（单页组合各区块）
├── components/             # Navbar、Weather、Profile、FlowingText、Portfolio、Career、Skills、Articles、主题切换等
├── data/                   # articles、career、projects、skills 数据
├── styles/globals.css      # 全局样式
├── next.config.js          # images.unoptimized、trailingSlash
├── tailwind.config.js
└── vercel.json             # Vercel 构建配置（@vercel/next）
```

## 快速开始

### 环境要求

- Node.js 与 npm

### 本地开发

```bash
npm install
npm run dev
```

### 构建与运行

```bash
npm run build
npm run start
```

### 部署到 Vercel

使用 Vercel CLI：

```bash
npm i -g vercel
vercel login
vercel --prod
```

也可以登录 [Vercel](https://vercel.com)，点击「Add New Project」并导入本 GitHub 仓库，然后点击「Deploy」。

### 自定义内容

- `data/articles.ts`：添加 / 修改文章
- `data/projects.ts`：修改作品集
- `data/career.ts`：修改职业经历
- `data/skills.ts`：修改技能列表
- `components/Profile.tsx`：修改个人简介

## 当前状态

个人主页的各个区块已经完成，内容均为静态数据。后续可继续完善：

- 将 `data/articles.ts` 中的示例外部链接（如 `blog.example.com`）替换为真实文章地址
- 升级 Next.js 12 到较新的版本
- 补充 `LICENSE` 文件（原 README 声明为 MIT，但仓库中没有许可证文件）

## 许可证

MIT
