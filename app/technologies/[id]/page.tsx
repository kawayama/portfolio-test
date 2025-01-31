import { notFound } from "next/navigation"
import TechnologyDetail from "@/app/components/TechnologyDetail"
import technologiesData from '@/data/technologies.json'
import projectsData from '@/data/projects.json'

export async function generateStaticParams() {
  const validTechnologies = technologiesData.technologies.filter(tech => 
    tech.details?.overview && 
    tech.details?.experience &&
    tech.details?.strengths &&
    tech.details?.relatedTechnologies
  )
  
  return validTechnologies.map((tech) => ({
    id: tech.id,
  }))
}

export default function TechnologyPage({ params }: { params: { id: string } }) {
  const technology = technologiesData.technologies.find(
    (tech) => tech.id === params.id
  )

  if (!technology || !technology.details) {
    notFound()
  }

  const relatedProjects = projectsData.projects.filter((project) =>
    project.details.technologies.includes(technology.name)
  ) || []

  const technologyDetails = {
    id: technology.id || '',
    name: technology.name || '',
    description: technology.description || '',
    overview: technology.details.overview || '',
    experience: technology.details.experience || {
      level: 0,
      years: 0,
      description: ''
    },
    strengths: technology.details.strengths || [],
    relatedTechnologies: technology.details.relatedTechnologies || [],
    projects: relatedProjects
  }

  return (
    <div className="min-h-screen">
      <TechnologyDetail {...technologyDetails} />
    </div>
  )
} 