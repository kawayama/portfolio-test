export default function StrengthsSection() {
  return (
    <section className="py-20 px-6 bg-white/90">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">私の強み</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-4 text-blue-600">
              <CodeIcon className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">技術力</h3>
            <p className="text-gray-600">
              最新のWeb技術に精通し、パフォーマンスとスケーラビリティを重視した設計・実装が得意です。
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 text-blue-600">
              <UsersIcon className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">コミュニケーション</h3>
            <p className="text-gray-600">
              技術的な課題を分かりやすく説明し、チームやクライアントと円滑な協力関係を築けます。
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 text-blue-600">
              <LightbulbIcon className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">問題解決力</h3>
            <p className="text-gray-600">
              複雑な課題を分析し、効率的かつ効果的な解決策を提案・実装できます。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 