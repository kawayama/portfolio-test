import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/yourusername"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/yourusername"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourusername"
  }
]

export default function HeroSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-100">
            <Image
              src="https://ui-avatars.com/api/?name=YN&background=0D8ABC&color=fff&size=128"
              alt="山田 直樹"
              width={128}
              height={128}
              className="object-cover"
              priority
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">山田 直樹</h1>
        <p className="text-xl text-gray-600 mb-6">
          ソフトウェアエンジニア | Web開発者 | 問題解決のスペシャリスト
        </p>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          5年以上のWeb開発経験を持つフルスタックエンジニアです。
          <span className="text-blue-600">ユーザー体験</span>と<span className="text-blue-600">パフォーマンス</span>にこだわり、
          最新技術を活用した価値あるプロダクトの開発に情熱を注いでいます。
        </p>
        <div className="flex justify-center items-center gap-6 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-gray-600">プロジェクト</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">30+</div>
            <div className="text-sm text-gray-600">技術記事</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">5+</div>
            <div className="text-sm text-gray-600">年の経験</div>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="ghost" asChild>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="mr-2 h-4 w-4" />
                {link.name}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

