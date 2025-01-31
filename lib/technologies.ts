import technologiesData from '@/data/technologies.json'
import { notFound } from 'next/navigation'

export function getTechnology(id: string) {
  const technology = technologiesData.technologies.find(
    (tech) => tech.id === id
  )

  if (!technology) {
    notFound()
  }

  return technology
} 