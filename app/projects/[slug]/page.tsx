import { notFound } from "next/navigation"
import ProjectDetail from "@/app/components/ProjectDetail"
import projectsData from '@/data/projects.json'

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    slug: project.link.split('/').pop(),
  }))
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.projects.find(
    (p) => p.link === `/projects/${params.slug}`
  )

  if (!project) {
    notFound()
  }

  return (
    <ProjectDetail
      title={project.title}
      description={project.details.overview}
      screenshots={project.details.screenshots}
      technologies={project.details.technologies}
      architecture={project.details.architecture}
      challenges={project.details.challenges}
      improvements={project.details.improvements}
      githubLink={project.details.githubUrl}
      liveLink={project.details.demoUrl}
    />
  )
} 