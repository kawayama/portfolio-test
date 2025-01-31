import { notFound } from "next/navigation"
import TechnologyDetail from "@/app/components/TechnologyDetail"
import technologiesData from '@/data/technologies.json'
import projectsData from '@/data/projects.json'

export async function generateStaticParams() {
  return technologiesData.technologies.map((tech) => ({
    id: tech.id,
  }))
}

interface TechnologyPageProps {
  params: {
    id: string
  }
}

export default function TechnologyPage({ params }: TechnologyPageProps) {
  const technology = technologiesData.technologies.find(
    (tech) => tech.id === params.id
  )

  if (!technology) {
    notFound()
  }

  const relatedProjects = projectsData.projects.filter((project) =>
    project.details.technologies.includes(technology.name)
  )

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <TechnologyDetail
        {...technology}
        {...technology.details}
        projects={relatedProjects}
      />
    </div>
  )
} 