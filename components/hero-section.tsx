import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-bg z-0"></div>

      {/* Particle effect */}
      <ParticleBackground />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse-glow z-0"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-pulse-glow z-0"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-12 animate-float">
            <Image
              src="/images/logo-main.png"
              alt="Agentic Intelligence Lisbon"
              width={220}
              height={220}
              className="animate-pulse-glow"
              priority
            />
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 glow-text animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            The first Agentic AI community in Lisbon
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            Exploring the future of autonomous artificial intelligence
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button asChild size="lg" className="text-base glow-button relative overflow-hidden group py-6 px-8">
              <Link href="#join">
                <span className="relative z-10">Join the community</span>
                <span className="absolute inset-0 w-full h-full animate-shimmer group-hover:bg-primary/20 transition-all duration-300"></span>
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="text-base group hover-glow py-6 px-8">
              <Link href="#events" className="flex items-center">
                <CalendarDays className="mr-3 h-5 w-5 group-hover:text-primary transition-colors" />
                <span>Next event: June 15, 2025</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-float">
        <span className="text-sm text-muted-foreground mb-3 font-roboto">Scroll to explore</span>
        <div className="w-1 h-16 relative">
          <div className="absolute top-0 w-full h-full rounded-full bg-gradient-to-b from-primary/80 to-transparent"></div>
          <div
            className="absolute top-0 w-full h-8 rounded-full bg-primary/80 animate-float"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>
      </div>
    </section>
  )
}
