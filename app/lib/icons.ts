import { Code } from "lucide-react"

export function getTechnologyIcon(id: string) {
  // アイコンが見つからない場合はデフォルトのCodeアイコンを返す
  return technologyIcons[id] || Code
} 