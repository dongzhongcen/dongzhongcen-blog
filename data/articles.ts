export interface Article {
  id: string
  title: string
  summary: string
  date: string
  readTime: string
  tags: string[]
  externalUrl: string
  platform: string
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Understanding React Hooks: A Complete Guide',
    summary: 'Deep dive into useState, useEffect, and custom hooks with practical examples and best practices for modern React development.',
    date: '2024-01-15',
    readTime: '10 min read',
    tags: ['React', 'JavaScript'],
    externalUrl: 'https://medium.com/@dongzhongcen/react-hooks-guide',
    platform: 'Medium',
  },
  {
    id: '2',
    title: 'Building Modern UIs with Tailwind CSS',
    summary: 'Best practices for utility-first CSS and responsive design patterns that will transform your workflow.',
    date: '2024-01-10',
    readTime: '8 min read',
    tags: ['CSS', 'Tailwind'],
    externalUrl: 'https://dev.to/dongzhongcen/tailwind-css-guide',
    platform: 'Dev.to',
  },
  {
    id: '3',
    title: 'Next.js 13: App Router Explained',
    summary: 'Understanding the new App Router architecture and server components in Next.js 13+.',
    date: '2024-01-05',
    readTime: '12 min read',
    tags: ['Next.js', 'React'],
    externalUrl: 'https://blog.example.com/nextjs-app-router',
    platform: 'Personal Blog',
  },
  {
    id: '4',
    title: 'TypeScript Tips for Better Code',
    summary: 'Advanced type techniques and patterns for writing type-safe applications.',
    date: '2023-12-28',
    readTime: '10 min read',
    tags: ['TypeScript'],
    externalUrl: 'https://medium.com/@dongzhongcen/typescript-tips',
    platform: 'Medium',
  },
  {
    id: '5',
    title: 'Node.js Performance Optimization',
    summary: 'Techniques for faster server-side applications and API optimization strategies.',
    date: '2023-12-20',
    readTime: '15 min read',
    tags: ['Node.js', 'Performance'],
    externalUrl: 'https://dev.to/dongzhongcen/nodejs-performance',
    platform: 'Dev.to',
  },
  {
    id: '6',
    title: 'Docker Containerization Best Practices',
    summary: 'Learn how to containerize your applications efficiently with Docker and Docker Compose.',
    date: '2023-12-15',
    readTime: '12 min read',
    tags: ['Docker', 'DevOps'],
    externalUrl: 'https://blog.example.com/docker-best-practices',
    platform: 'Personal Blog',
  },
  {
    id: '7',
    title: 'Git Workflow for Team Collaboration',
    summary: 'Effective Git branching strategies and workflows for better team collaboration.',
    date: '2023-12-10',
    readTime: '8 min read',
    tags: ['Git', 'Collaboration'],
    externalUrl: 'https://medium.com/@dongzhongcen/git-workflow',
    platform: 'Medium',
  },
  {
    id: '8',
    title: 'My 2023 Year in Review',
    summary: 'A reflection on my technical growth, projects completed, and goals for the upcoming year.',
    date: '2023-12-01',
    readTime: '6 min read',
    tags: ['Career', 'Reflection'],
    externalUrl: 'https://blog.example.com/2023-review',
    platform: 'Personal Blog',
  },
]
