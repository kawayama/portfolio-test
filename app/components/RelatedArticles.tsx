import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"
import Link from "next/link"
import blogData from "@/data/blog.json"

interface RelatedArticlesProps {
  technologyId: string
}

export default function RelatedArticles({ technologyId }: RelatedArticlesProps) {
  // 指定された技術に関連する記事をフィルタリング
  const relatedArticles = blogData.articles.filter(article =>
    article.technologies.includes(technologyId)
  )

  if (relatedArticles.length === 0) return null

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">関連記事</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedArticles.map((article, index) => (
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
                <p className="text-gray-600">{article.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
} 