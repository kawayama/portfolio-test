import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Background3D from "./components/Background3D"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ポートフォリオ",
  description: "私のポートフォリオサイトです",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>
        <Background3D />
        <div className="relative z-10">
          <Header />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

