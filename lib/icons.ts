import { 
  SiReact, 
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiRedis,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiFastapi,
  SiPandas,
  SiTypeorm,
  SiAmazon,
} from 'react-icons/si'

const iconMap = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  prisma: SiPrisma,
  tailwindcss: SiTailwindcss,
  python: SiPython,
  django: SiDjango,
  redis: SiRedis,
  git: SiGit,
  docker: SiDocker,
  'github-actions': SiGithubactions,
  fastapi: SiFastapi,
  pandas: SiPandas,
  typeorm: SiTypeorm,
  aws: SiAmazon,
}

export function getTechnologyIcon(id: string) {
  return iconMap[id as keyof typeof iconMap] || null
}

export const icons: { [key: string]: string } = {
  nextjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  redis: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  tailwindcss: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  django: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  aws: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  'github-actions': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
} 