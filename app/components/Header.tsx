"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const isTopPage = pathname === "/"

  return (
    <header className="py-4 px-6 bg-white shadow-sm sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          YN
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href={isTopPage ? "#career" : "/#career"}>経歴</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href={isTopPage ? "#skills" : "/#skills"}>スキル</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href={isTopPage ? "#projects" : "/#projects"}>プロジェクト</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

