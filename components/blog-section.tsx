import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, User, ArrowRight } from "lucide-react"

export default function BlogSection() {
  const posts = [
    {
      title: "The Rise of Autonomous AI Agents",
      excerpt:
        "Exploring how AI agents are evolving from simple chatbots to complex autonomous systems capable of independent action.",
      date: "May 20, 2025",
      author: "Maria Silva",
      image: "/placeholder.svg?height=200&width=400&query=futuristic AI robot with blue glow",
      url: "#post1",
    },
    {
      title: "Building Trust in AI Agents",
      excerpt:
        "How transparency, explainability, and ethical guidelines are crucial for the adoption of autonomous AI systems.",
      date: "May 12, 2025",
      author: "João Santos",
      image: "/placeholder.svg?height=200&width=400&query=human and AI handshake with blue lighting",
      url: "#post2",
    },
    {
      title: "Lisbon's Growing AI Ecosystem",
      excerpt:
        "A look at how Lisbon is becoming a hub for AI innovation and what this means for the local tech community.",
      date: "May 5, 2025",
      author: "Ana Costa",
      image: "/placeholder.svg?height=200&width=400&query=Lisbon cityscape with digital overlay and blue tint",
      url: "#post3",
    },
  ]

  return (
    <section id="blog" className="section-padding w-full bg-gradient-to-b from-background/90 to-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest developments in agentic AI and community activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/9]">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>

                <Button variant="ghost" className="w-fit p-0 h-auto text-primary hover:text-primary/80" asChild>
                  <Link href={post.url} className="flex items-center">
                    <span>Read more</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="#blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
