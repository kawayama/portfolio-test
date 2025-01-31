import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TechnologyButton } from "./TechnologyButton"

const skills = [
  { name: "フロントエンド", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "バックエンド", items: ["Node.js", "Express", "Python", "Django"] },
  { name: "データベース", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { name: "その他", items: ["Git", "Docker", "AWS", "GitHub Actions"] },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">スキル</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category) => (
            <Card key={category.name}>
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <TechnologyButton key={item} name={item} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

