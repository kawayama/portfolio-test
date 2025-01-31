import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ProjectCard } from "./ProjectCard"
import { getTechnologyIcon } from "@/lib/icons"
import type { Project } from "@/types/data"
import RelatedArticles from "./RelatedArticles"

interface TechnologyDetailProps {
  id: string
  name: string
  description: string
  overview: string
  experience: {
    level: number
    years: number
    description: string
  }
  strengths: string[]
  relatedTechnologies: string[]
  projects: Project[]
}

export default function TechnologyDetail({
  id,
  name,
  description,
  overview,
  experience,
  strengths,
  relatedTechnologies,
  projects
}: TechnologyDetailProps) {
  const Icon = getTechnologyIcon(id)

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex items-center gap-4 mb-8">
        <Icon className="w-12 h-12" />
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>概要</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{overview}</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>経験レベル</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Progress value={experience.level * 20} className="mb-2" />
            <p className="text-sm text-gray-600">
              経験年数: {experience.years}年
            </p>
          </div>
          <p>{experience.description}</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>得意分野</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            {strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>関連技術</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {relatedTechnologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-2xl font-bold mb-4">使用プロジェクト</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <RelatedArticles technologyId={id} />
    </div>
  )
} 