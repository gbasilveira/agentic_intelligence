import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, Search, ArrowRight, User } from "lucide-react"
import BlogNewsletter from "@/components/blog-newsletter"

export default function BlogPage() {
  // Featured post
  const featuredPost = {
    id: "the-rise-of-autonomous-ai-agents",
    title: "The Rise of Autonomous AI Agents",
    excerpt:
      "Exploring how AI agents are evolving from simple chatbots to complex autonomous systems capable of independent action and decision-making in various domains.",
    date: "May 20, 2025",
    author: "Maria Silva",
    authorRole: "AI Research Lead",
    authorImage: "/confident-woman-headshot.png",
    readTime: "8 min read",
    image: "/urban-sentinel.png",
    category: "Technology",
  }

  // Blog posts
  const posts = [
    {
      id: "building-trust-in-ai-agents",
      title: "Building Trust in AI Agents",
      excerpt:
        "How transparency, explainability, and ethical guidelines are crucial for the adoption of autonomous AI systems.",
      date: "May 12, 2025",
      author: "João Santos",
      readTime: "6 min read",
      image: "/digital-agreement.png",
      category: "Ethics",
    },
    {
      id: "lisbons-growing-ai-ecosystem",
      title: "Lisbon's Growing AI Ecosystem",
      excerpt:
        "A look at how Lisbon is becoming a hub for AI innovation and what this means for the local tech community.",
      date: "May 5, 2025",
      author: "Ana Costa",
      readTime: "5 min read",
      image: "/lisbon-blue-digital.png",
      category: "Community",
    },
    {
      id: "ai-agents-in-healthcare",
      title: "AI Agents Revolutionizing Healthcare",
      excerpt:
        "How autonomous AI systems are transforming patient care, medical research, and healthcare administration.",
      date: "April 28, 2025",
      author: "Carlos Mendes",
      readTime: "7 min read",
      image: "/AI-Enhanced Healthcare Hub.png",
      category: "Healthcare",
    },
    {
      id: "programming-autonomous-agents",
      title: "Programming Autonomous Agents: Best Practices",
      excerpt: "Technical guidelines and frameworks for developing reliable and effective autonomous AI systems.",
      date: "April 15, 2025",
      author: "Sofia Almeida",
      readTime: "10 min read",
      image: "/placeholder.svg?height=400&width=600&query=programmer working on AI code with blue screen glow",
      category: "Development",
    },
    {
      id: "ethical-considerations-in-ai",
      title: "Ethical Considerations in Agentic AI",
      excerpt:
        "Exploring the moral implications and responsibilities when creating AI systems that can act independently.",
      date: "April 8, 2025",
      author: "Miguel Ferreira",
      readTime: "9 min read",
      image: "/placeholder.svg?height=400&width=600&query=AI ethics concept with scales of justice and blue technology",
      category: "Ethics",
    },
    {
      id: "future-of-work-with-ai-agents",
      title: "The Future of Work with AI Agents",
      excerpt: "How autonomous AI will transform jobs, create new opportunities, and reshape the global workforce.",
      date: "March 30, 2025",
      author: "Luísa Rodrigues",
      readTime: "8 min read",
      image:
        "/placeholder.svg?height=400&width=600&query=futuristic office with robots and humans working together with blue lighting",
      category: "Business",
    },
  ]

  // Categories
  const categories = [
    { id: "all", name: "All Posts" },
    { id: "technology", name: "Technology" },
    { id: "ethics", name: "Ethics" },
    { id: "community", name: "Community" },
    { id: "development", name: "Development" },
    { id: "business", name: "Business" },
    { id: "healthcare", name: "Healthcare" },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      {/* Hero Section */}
      <section className="w-full bg-background relative overflow-hidden py-16 md:py-24">
        {/* Background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/3 bg-primary/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text-subtle font-poppins">
              Agentic Intelligence Blog
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-roboto">
              Insights, news, and perspectives on the evolving world of autonomous AI agents
            </p>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-12 py-6 text-base font-roboto" />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full bg-background py-16">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="text-2xl font-bold mb-8 font-poppins">Featured Article</h2>

          <div className="rounded-xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover-glow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-[16/9] lg:aspect-auto lg:h-full">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent"></div>
              </div>

              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <Badge className="mb-4 w-fit font-poppins">{featuredPost.category}</Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-poppins leading-tight">{featuredPost.title}</h3>

                <p className="text-muted-foreground mb-6 font-roboto leading-relaxed">{featuredPost.excerpt}</p>

                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={featuredPost.authorImage || "/placeholder.svg"}
                      alt={featuredPost.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium font-poppins">{featuredPost.author}</p>
                    <p className="text-sm text-muted-foreground font-roboto">{featuredPost.authorRole}</p>
                  </div>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-6 space-x-6 font-roboto">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <Button asChild className="w-fit group">
                  <Link href={`/blog/${featuredPost.id}`} className="font-poppins">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="w-full bg-background py-16">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-between items-center mb-8 flex-col md:flex-row gap-4">
              <h2 className="text-2xl font-bold font-poppins">Latest Articles</h2>
              <TabsList className="bg-background/50 backdrop-blur-sm border border-border/50 p-1 font-poppins">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Card
                    key={post.id}
                    className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover-lift hover-glow overflow-hidden flex flex-col h-full"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="font-poppins">{post.category}</Badge>
                      </div>
                    </div>

                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 font-poppins leading-tight">{post.title}</h3>

                      <p className="text-muted-foreground mb-4 flex-1 font-roboto">{post.excerpt}</p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm font-roboto">{post.author}</span>
                        </div>

                        <div className="flex items-center text-sm text-muted-foreground font-roboto">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <Button variant="ghost" className="w-full mt-4 justify-between group hover:bg-primary/10" asChild>
                        <Link href={`/blog/${post.id}`} className="font-poppins">
                          Read Article
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button variant="outline" size="lg" className="font-poppins px-8 py-6">
                  Load More Articles
                </Button>
              </div>
            </TabsContent>

            {/* Other tabs would have filtered content */}
            {categories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts
                    .filter((post) => post.category.toLowerCase() === category.name.toLowerCase())
                    .map((post) => (
                      <Card
                        key={post.id}
                        className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover-lift hover-glow overflow-hidden flex flex-col h-full"
                      >
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-110"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="font-poppins">{post.category}</Badge>
                          </div>
                        </div>

                        <CardContent className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold mb-3 font-poppins leading-tight">{post.title}</h3>

                          <p className="text-muted-foreground mb-4 flex-1 font-roboto">{post.excerpt}</p>

                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-2 text-primary" />
                              <span className="text-sm font-roboto">{post.author}</span>
                            </div>

                            <div className="flex items-center text-sm text-muted-foreground font-roboto">
                              <Clock className="h-4 w-4 mr-2" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          <Button
                            variant="ghost"
                            className="w-full mt-4 justify-between group hover:bg-primary/10"
                            asChild
                          >
                            <Link href={`/blog/${post.id}`} className="font-poppins">
                              Read Article
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Newsletter */}
      <BlogNewsletter />
    </main>
  )
}
