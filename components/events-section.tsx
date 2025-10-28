"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, MapPin, Users } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function EventsSection() {
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

  const upcomingEvent = {
    title: "Building Your First AI Agent",
    date: "June 15, 2025",
    time: "18:30 - 21:00",
    location: "Hub Criativo do Beato, Lisbon",
    description:
      "Join us for a hands-on workshop where you'll learn how to build and deploy your first autonomous AI agent using open-source tools.",
    image: "/ai-collaboration-blue.png",
  }

  const pastEvents = [
    {
      title: "Introduction to Agentic AI",
      date: "April 10, 2025",
      image: "/ai-meetup-presentation.png",
    },
    {
      title: "AI Agents in Business",
      date: "May 5, 2025",
      image: "/ai-strategy-session.png",
    },
  ]

  return (
    <section
      id="events"
      className="section-padding w-full bg-gradient-to-b from-background/90 to-background relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated background elements */}
      <div
        className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDuration: "18s" }}
      ></div>
      <div
        className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDuration: "15s", animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto container-padding relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text-subtle">Events</h2>
            <p className="text-lg text-muted-foreground">
              Connect with the community through our regular events, workshops, and meetups.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 glow-text-subtle">Next Event</h3>
            <Card className="border border-primary/20 bg-card/30 backdrop-blur-sm overflow-hidden hover-glow transition-all duration-500 gradient-border">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 relative">
                  <div className="aspect-video lg:h-full relative overflow-hidden">
                    <Image
                      src={upcomingEvent.image || "/placeholder.svg"}
                      alt={upcomingEvent.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-60 mix-blend-overlay"></div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-background/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-background/80"></div>
                </div>

                <CardContent className="lg:w-3/5 p-6 lg:p-8">
                  <h4 className="text-2xl font-bold mb-3 glow-text-subtle">{upcomingEvent.title}</h4>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center group">
                      <CalendarDays className="h-5 w-5 text-primary mr-2 animate-pulse-glow" />
                      <span className="group-hover:text-primary transition-colors">{upcomingEvent.date}</span>
                    </div>

                    <div className="flex items-center group">
                      <Clock
                        className="h-5 w-5 text-primary mr-2 animate-pulse-glow"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <span className="group-hover:text-primary transition-colors">{upcomingEvent.time}</span>
                    </div>

                    <div className="flex items-center group">
                      <MapPin
                        className="h-5 w-5 text-primary mr-2 animate-pulse-glow"
                        style={{ animationDelay: "1s" }}
                      />
                      <span className="group-hover:text-primary transition-colors">{upcomingEvent.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{upcomingEvent.description}</p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="glow-button">
                      <Link href="#register">Register Now</Link>
                    </Button>

                    <Button variant="outline" className="group hover-glow">
                      <Users className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                      <span>42 Attending</span>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </ScrollReveal>

        {pastEvents.length > 0 && (
          <ScrollReveal delay={400}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 glow-text-subtle">Past Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pastEvents.map((event, index) => (
                  <Card
                    key={index}
                    className="border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-500 hover-lift hover-glow"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-80 hover:opacity-60 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-full p-4">
                        <h4 className="text-lg font-medium glow-text-subtle">{event.title}</h4>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <CalendarDays className="h-4 w-4 mr-1 text-primary" />
                          <span>{event.date}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
