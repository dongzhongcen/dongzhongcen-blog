export interface CareerItem {
  period: string
  role: string
  company: string
  description?: string
}

export const careerHistory: CareerItem[] = [
  {
    period: '2023-Present',
    role: 'Full Stack Developer',
    company: 'Tech Company',
    description: 'building web applications with React and Node.js',
  },
  {
    period: '2022-2023',
    role: 'Frontend Developer',
    company: 'Startup',
    description: 'developed responsive user interfaces',
  },
  {
    period: '2021-2022',
    role: 'Junior Developer',
    company: 'Digital Agency',
    description: 'worked on various client projects',
  },
  {
    period: '2020-2021',
    role: 'Self-Taught Coder',
    company: 'Personal',
    description: 'learned web development through online courses and projects',
  },
]
