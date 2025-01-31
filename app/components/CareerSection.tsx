import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const careers = [
  {
    period: "2023年4月 - 現在",
    isCurrent: true,
    company: "株式会社ABC",
    position: "シニアフルスタックエンジニア",
    description: "大規模Webアプリケーションの設計・開発をリード。マイクロサービスアーキテクチャの設計と実装を担当。"
  },
  {
    period: "2019年8月 - 現在",
    isCurrent: true,
    company: "フリーランス",
    position: "Webエンジニア",
    description: "複数のクライアントのWebアプリケーション開発を担当。モダンな技術スタックを活用した開発に従事。"
  },
  {
    period: "2021年4月 - 2023年3月",
    company: "株式会社XYZ",
    position: "フルスタックエンジニア",
    description: "ECサイトのフルリニューアルプロジェクトを担当。フロントエンドからバックエンドまで、幅広い技術スタックを活用。"
  },
  {
    period: "2019年4月 - 2021年3月",
    company: "株式会社DEF",
    position: "バックエンドエンジニア",
    description: "基幹システムのAPI開発とインフラ構築を担当。大規模データ処理の最適化に注力。"
  },
  {
    period: "2018年4月 - 2019年3月",
    company: "株式会社GHI",
    position: "Webエンジニア",
    description: "社内システムの開発・保守を担当。フロントエンド技術の改善に貢献。"
  }
]

// 開始日を取得する関数
function getStartDate(period: string): Date {
  const startDate = period.split(' - ')[0]
  const [year, month] = startDate.replace('年', '/').replace('月', '').split('/')
  return new Date(parseInt(year), parseInt(month) - 1)
}

export default function CareerSection() {
  // 経歴を開始日でソート（新しい順）
  const sortedCareers = [...careers].sort((a, b) => 
    getStartDate(b.period).getTime() - getStartDate(a.period).getTime()
  )

  return (
    <section id="career" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">経歴</h2>
        <div className="relative">
          {/* タイムラインの縦線 */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200" />
          
          <div className="space-y-8">
            {sortedCareers.map((career, index) => (
              <div key={index} className="relative pl-8">
                {/* タイムラインのドット */}
                <div className={`absolute left-0 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white ${
                  career.isCurrent ? 'bg-green-500 animate-pulse' : 'bg-blue-500'
                }`} />
                
                <Card className={career.isCurrent ? 'border-green-200 shadow-md' : ''}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg">{career.company}</h3>
                        {career.isCurrent && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            現在
                          </Badge>
                        )}
                        <span className="text-gray-600">|</span>
                        <span className="text-gray-600">{career.position}</span>
                      </div>
                      <span className="text-sm text-gray-500">{career.period}</span>
                    </div>
                    <p className="text-gray-600">{career.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 