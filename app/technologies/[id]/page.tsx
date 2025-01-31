import { notFound } from "next/navigation"
import TechnologyDetail from "@/app/components/TechnologyDetail"
import technologiesData from '@/data/technologies.json'
import projectsData from '@/data/projects.json'

export async function generateStaticParams() {
  return technologiesData.technologies.map((tech) => ({
    id: tech.id,
  }))
}

export default function TechnologyPage({ params }: { params: { id: string } }) {
  const technology = technologiesData.technologies.find(
    (tech) => tech.id === params.id
  )

  if (!technology) {
    notFound()
  }

  const relatedProjects = projectsData.projects.filter((project) =>
    project.details.technologies.includes(technology.name)
  )

  // 必要なすべてのプロパティが存在することを確認
  const technologyDetails = {
    id: technology.id,
    name: technology.name,
    description: technology.description,
    overview: technology.details.overview,
    experience: technology.details.experience,
    strengths: technology.details.strengths,
    relatedTechnologies: technology.details.relatedTechnologies,
    projects: relatedProjects
  }

  return <TechnologyDetail {...technologyDetails} />
} 