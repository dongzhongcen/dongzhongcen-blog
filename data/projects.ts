export interface Project {
  title: string
  description: string
  techStack: string
  demoUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Personal Blog',
    description: 'A modern personal blog built with Next.js and Tailwind CSS. Features real-time weather display, responsive design, and dark mode support.',
    techStack: 'Next.js, React, TypeScript, Tailwind CSS, Open-Meteo API',
    demoUrl: '#',
    repoUrl: 'https://github.com/dongzhongcen/blog',
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'An admin dashboard for managing products, orders, and customers. Includes data visualization with charts and real-time notifications.',
    techStack: 'React, TypeScript, Redux Toolkit, Ant Design, Recharts',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
    techStack: 'Next.js, Prisma, PostgreSQL, Socket.io, Tailwind CSS',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Weather Application',
    description: 'A weather forecasting app that displays current conditions and 7-day forecasts using geolocation and weather APIs.',
    techStack: 'React, Open-Meteo API, Geolocation API, CSS Modules',
    demoUrl: '#',
    repoUrl: '#',
  },
]
