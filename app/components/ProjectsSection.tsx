"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TechnologyButton } from "./TechnologyButton"
import Image from "next/image"
import Link from "next/link"
import projectsData from "@/data/projects.json"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">プロジェクト</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.projects.map((project) => (
            <Link key={project.title} href={project.link}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image
                    src={project.details.screenshots[0]}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.details.technologies.map((tech) => (
                      <TechnologyButton key={tech} name={tech} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

