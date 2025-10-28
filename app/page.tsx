"use client"

import { useEffect } from "react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import AgentsSection from "@/components/agents-section"
import EventsSection from "@/components/events-section"
import CommunitySection from "@/components/community-section"
import ResourcesSection from "@/components/resources-section"
import PartnersSection from "@/components/partners-section"
import BlogSection from "@/components/blog-section"
import FooterSection from "@/components/footer-section"

export default function Home() {
  // Initialize scroll reveal
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal")

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight
        const revealTop = reveal.getBoundingClientRect().top
        const revealPoint = 150

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <AboutSection />
      <AgentsSection />
      <EventsSection />
      <CommunitySection />
      <ResourcesSection />
      <PartnersSection />
      <BlogSection />
      <FooterSection />
    </main>
  )
}
