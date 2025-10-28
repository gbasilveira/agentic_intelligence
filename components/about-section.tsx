"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Lightbulb, Users, Microscope } from "lucide-react"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    const cardElements = cardsRef.current?.querySelectorAll(".card-item")
    cardElements?.forEach((card) => {
      observer.observe(card as Element)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Practical innovation",
      description: "Focusing on real-world applications of agentic AI technologies",
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Accessible knowledge",
      description: "Making complex AI concepts understandable for all experience levels",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Open collaboration",
      description: "Creating opportunities for community members to work together",
    },
    {
      icon: <Microscope className="h-8 w-8 text-primary" />,
      title: "Ethical experimentation",
      description: "Exploring AI capabilities with responsibility and foresight",
    },
  ]

  return (
    <section id="about" className="section-padding w-full bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/3 bg-primary/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text-subtle font-poppins">Who We Are</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-roboto">
            Agentic Intelligence - Lisbon is the first community dedicated to AI Agents in Lisbon. We were born from the
            need to create a space for professionals, enthusiasts and curious minds to explore the potential of
            autonomous Artificial Intelligence. Our goal is to energise the local ecosystem through knowledge sharing,
            networking and practical experimentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={cardsRef}>
          {values.map((value, index) => (
            <Card
              key={index}
              className="card-item reveal border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover-lift hover-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 relative">
                  <div className="absolute -inset-2 bg-primary/10 rounded-full blur-md animate-pulse-glow"></div>
                  <div className="relative">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 font-poppins">{value.title}</h3>
                <p className="text-muted-foreground font-roboto leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
