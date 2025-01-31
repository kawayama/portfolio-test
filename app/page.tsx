"use client"

import { useEffect, useState } from "react"
import ProjectsSection from "./components/ProjectsSection"
import SkillsSection from "./components/SkillsSection"
import HeroSection from "./components/HeroSection"
import CareerSection from "./components/CareerSection"
import BlogSection from "./components/BlogSection"

export default function Home() {
  const [isClient, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isClient) {
    return (
      <div className="relative z-10">
        <HeroSection />
      </div>
    )
  }

  return (
    <div className="relative z-10">
      <HeroSection />
      <CareerSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
    </div>
  )
}

