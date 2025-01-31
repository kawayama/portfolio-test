import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getTechnologyIcon } from "@/lib/icons"
import technologiesData from '@/data/technologies.json'

interface TechnologyButtonProps {
  name: string
  href?: string
}

// 技術名からIDを取得するヘルパー関数
const getTechnologyId = (techName: string) => {
  const tech = technologiesData.technologies.find(
    t => t.name.toLowerCase() === techName.toLowerCase()
  )
  return tech?.id
}

export function TechnologyButton({ name, href }: TechnologyButtonProps) {
  const techId = getTechnologyId(name)
  const Icon = techId ? getTechnologyIcon(techId) : null
  const Component = href ? Link : 'div'

  return techId ? (
    <Button
      variant="outline"
      size="sm"
      className="hover:bg-secondary"
      asChild
    >
      <Link href={href || `/technologies/${techId}`}>
        {Icon && <Icon className="mr-2 h-4 w-4" />}
        {name}
      </Link>
    </Button>
  ) : (
    <Button
      variant="outline"
      size="sm"
      className="cursor-default"
    >
      {name}
    </Button>
  )
} 