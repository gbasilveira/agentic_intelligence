"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Brain, ShoppingCart, Stethoscope, Building } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function AgentsSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

    return () => {
      observer.disconnect()
    }
  }, [])

  const examples = [
    {
      icon: <ShoppingCart className="h-6 w-6 text-primary" />,
      title: "E-commerce Assistants",
      description:
        "Autonomous agents that help users find products, compare options, and complete purchases without human intervention.",
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-primary" />,
      title: "Healthcare Monitoring",
      description:
        "Agents that continuously monitor patient data, detect anomalies, and alert healthcare providers when intervention is needed.",
    },
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      title: "Smart Building Management",
      description:
        "Systems that optimize energy usage, maintenance schedules, and security protocols based on real-time conditions.",
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "Research Assistants",
      description:
        "Agents that autonomously gather information, analyze data, and generate insights to accelerate scientific discovery.",
    },
  ]

  return (
    <section
      id="agents"
      className="section-padding w-full bg-gradient-to-b from-background to-background/90 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated background elements */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDuration: "15s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDuration: "20s", animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto container-padding relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text-subtle">What Are AI Agents?</h2>
            <p className="text-lg text-muted-foreground">
              AI agents are autonomous systems capable of perceiving their environment, making decisions and acting to
              achieve specific goals. They go beyond traditional language models, incorporating planning capabilities,
              reasoning and independent execution.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <ScrollReveal delay={200}>
            <div className="w-full md:w-1/2 bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover-glow transition-all duration-500 gradient-border">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                <Image
                  src="/ai-agent-cycle.png"
                  alt="AI Agent Cycle"
                  fill
                  className="rounded-md object-contain animate-pulse-glow"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold glow-text-subtle">The Agent Cycle</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3 hover-lift transition-all duration-300">
                  <div className="bg-primary/10 p-2 rounded-full animate-pulse-glow">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Perceive</h4>
                    <p className="text-muted-foreground">
                      Agents gather information from their environment through various inputs and sensors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 hover-lift transition-all duration-300">
                  <div className="bg-primary/10 p-2 rounded-full animate-pulse-glow" style={{ animationDelay: "1s" }}>
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Decide</h4>
                    <p className="text-muted-foreground">
                      Using reasoning and planning capabilities, agents determine the best course of action.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 hover-lift transition-all duration-300">
                  <div className="bg-primary/10 p-2 rounded-full animate-pulse-glow" style={{ animationDelay: "2s" }}>
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Act</h4>
                    <p className="text-muted-foreground">
                      Agents execute their decisions, affecting their environment and working toward their goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={600}>
          <h3 className="text-2xl font-semibold text-center mb-8 glow-text-subtle">Practical Applications</h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((example, index) => (
            <ScrollReveal key={index} delay={700 + index * 100}>
              <Card className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover-lift hover-glow">
                <CardContent className="p-6">
                  <div
                    className="mb-4 bg-primary/10 p-3 rounded-full w-fit animate-pulse-glow"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {example.icon}
                  </div>
                  <h4 className="text-lg font-medium mb-2">{example.title}</h4>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
