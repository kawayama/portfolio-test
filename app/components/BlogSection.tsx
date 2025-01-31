"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"
import Link from "next/link"
import { TechnologyButton } from "./TechnologyButton"
import blogData from "@/data/blog.json"
import technologiesData from "@/data/technologies.json"

export default function BlogSection() {
  // 技術IDから技術名を取得するヘルパー関数
  const getTechnologyName = (techId: string) => {
    const tech = technologiesData.technologies.find(t => t.id === techId)
    return tech?.name || techId
  }

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">ブログ/技術記事</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.articles.map((article, index) => (
            <Link key={index} href={article.url} target="_blank" rel="noopener noreferrer">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.platform}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarDays className="mr-1 h-4 w-4" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {article.technologies.map((techId) => (
                      <TechnologyButton 
                        key={techId} 
                        name={getTechnologyName(techId)}
                        href={`/technologies/${techId}`}
                      />
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