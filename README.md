# Dong Zhongcen 个人博客

这是我的个人博客项目，使用 Next.js + Tailwind CSS 构建。

## 功能特性

- 🌤️ **实时天气显示** - 自动获取访客所在地的天气信息
- 👤 **个人简介** - 展示个人信息和社交链接
- 📝 **文章列表** - 支持搜索和标签筛选的技术文章
- 🎯 **技能展示** - 可视化的技能专长展示
- 🌙 **深色模式支持** - 适配系统的深色模式
- 📱 **响应式设计** - 完美适配各种设备

## 技术栈

- **框架**: Next.js 12
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **部署**: Vercel

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 部署到 Vercel

### 方法一：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署
vercel --prod
```

### 方法二：使用 Git 部署（推荐）

1. 在 GitHub 上创建一个新仓库
2. 将代码推送到 GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/仓库名.git
   git push -u origin main
   ```
3. 登录 [Vercel](https://vercel.com)
4. 点击 "Add New Project"
5. 选择你的 GitHub 仓库
6. 点击 "Deploy" 即可一键部署

### 方法三：直接上传（最简单）

1. 登录 [Vercel](https://vercel.com)
2. 点击 "Add New Project"
3. 选择 "Import Git Repository" 
4. 或者直接将项目文件夹拖拽到 Vercel 仪表板
5. 点击 "Deploy"

## 项目结构

```
.
├── pages/              # Next.js 页面
│   ├── _app.tsx       # 应用入口
│   ├── _document.tsx  # 文档模板
│   └── index.tsx      # 首页
├── components/         # React 组件
│   ├── Profile.tsx    # 个人简介
│   ├── Weather.tsx    # 天气组件
│   ├── Articles.tsx   # 文章列表
│   └── Skills.tsx     # 技能展示
├── data/              # 数据文件
│   ├── articles.ts    # 文章数据
│   └── skills.ts      # 技能数据
├── styles/            # 样式文件
│   └── globals.css    # 全局样式
├── public/            # 静态资源
├── package.json       # 项目依赖
├── next.config.js     # Next.js 配置
├── tailwind.config.js # Tailwind 配置
└── tsconfig.json      # TypeScript 配置
```

## 自定义内容

你可以通过修改以下文件来自定义博客内容：

- `data/articles.ts` - 添加/修改文章
- `data/skills.ts` - 修改技能列表
- `components/Profile.tsx` - 修改个人简介

## 一键部署按钮

你也可以直接点击下面的按钮部署到 Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/your-repo-name)

## License

MIT
