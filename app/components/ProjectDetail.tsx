import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import ImageCarousel from "./ImageCarousel"
import { TechnologyButton } from "./TechnologyButton"
import technologiesData from '@/data/technologies.json'

interface ProjectDetailProps {
  title: string
  description: string
  screenshots: string[]
  technologies: string[]
  architecture: string
  challenges: string[]
  improvements: string[]
  githubLink: string
  liveLink: string
}

export default function ProjectDetail({
  title,
  description,
  screenshots,
  technologies,
  architecture,
  challenges,
  improvements,
  githubLink,
  liveLink,
}: ProjectDetailProps) {
  // 技術名からIDを取得するヘルパー関数
  const getTechnologyId = (techName: string) => {
    const tech = technologiesData.technologies.find(t => t.name === techName)
    return tech?.id
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="mb-8">
        <ImageCarousel images={screenshots} />
      </div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>プロジェクト概要</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>使用技術</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <TechnologyButton key={tech} name={tech} />
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>アーキテクチャ</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{architecture}</p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>技術的挑戦</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            {challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>改善点・今後の展望</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            {improvements.map((improvement, index) => (
              <li key={index}>{improvement}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <div className="flex justify-center space-x-4">
        <Button asChild>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2" size={20} />
            GitHubを見る
          </a>
        </Button>
        <Button asChild>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2" size={20} />
            ライブデモを見る
          </a>
        </Button>
      </div>
    </div>
  )
}
