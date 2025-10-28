import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  BookOpen,
  Code,
  Globe,
  Search,
  Filter,
  ExternalLink,
  ArrowRight,
  Tag,
  Calendar,
  User,
  Github,
  Twitter,
  Linkedin,
  DiscIcon as Discord,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Resources | Agentic Intelligence - Lisbon",
  description: "Explore our curated collection of resources to deepen your understanding of agentic AI.",
}

export default function ResourcesPage() {
  // Library items data
  const libraryItems = [
    {
      title: "Introduction to AI Agents",
      type: "Article",
      source: "Medium",
      author: "Sarah Johnson",
      date: "2023-10-15",
      tags: ["Beginners", "AI Agents", "Overview"],
      url: "#article1",
      image: "/abstract-blue-tech.png",
    },
    {
      title: "Building Autonomous Systems",
      type: "Tutorial",
      source: "Towards AI",
      author: "Michael Chen",
      date: "2023-09-22",
      tags: ["Development", "Autonomous Systems", "Tutorial"],
      url: "#article2",
      image: "/blue-rl-flow.png",
    },
    {
      title: "The Future of Agentic AI",
      type: "Research Paper",
      source: "arXiv",
      author: "Dr. Emily Rodriguez",
      date: "2023-11-05",
      tags: ["Research", "Future Trends", "Academic"],
      url: "#article3",
      image: "/ai-agent-cycle.png",
    },
    {
      title: "Ethical Considerations in AI Agents",
      type: "Guide",
      source: "AI Ethics Institute",
      author: "Prof. David Williams",
      date: "2023-08-30",
      tags: ["Ethics", "Guidelines", "Responsible AI"],
      url: "#article4",
      image: "/digital-agreement.png",
    },
    {
      title: "Reinforcement Learning for Agent Development",
      type: "Tutorial",
      source: "Towards Data Science",
      author: "Alex Thompson",
      date: "2023-07-18",
      tags: ["RL", "Development", "Technical"],
      url: "#article5",
      image: "/blue-rl-flow.png",
    },
    {
      title: "Multi-Agent Systems: A Comprehensive Review",
      type: "Research Paper",
      source: "Journal of AI Research",
      author: "Dr. Sophia Lee",
      date: "2023-10-02",
      tags: ["Multi-Agent", "Research", "Academic"],
      url: "#article6",
      image: "/ai-collaboration-blue.png",
    },
    {
      title: "Implementing LLM-based Agents",
      type: "Guide",
      source: "AI Engineering Blog",
      author: "James Wilson",
      date: "2023-09-10",
      tags: ["LLM", "Implementation", "Technical"],
      url: "#article7",
      image: "/abstract-blue-tech.png",
    },
    {
      title: "AI Agents in Healthcare: Case Studies",
      type: "Case Study",
      source: "Healthcare Tech Review",
      author: "Dr. Maria Garcia",
      date: "2023-11-15",
      tags: ["Healthcare", "Case Study", "Applications"],
      url: "#article8",
      image: "/AI-Enhanced Healthcare Hub.png",
    },
  ]

  // Tools data
  const tools = [
    {
      title: "LangChain",
      description: "Framework for developing applications powered by language models",
      category: "Development Framework",
      stars: 25000,
      lastUpdated: "2023-11-20",
      language: "Python/TypeScript",
      url: "#tool1",
      github: "https://github.com/langchain-ai/langchain",
      image: "/abstract-chains.png",
    },
    {
      title: "AutoGPT",
      description: "Experimental open-source application showcasing GPT-4's capabilities",
      category: "Autonomous Agent",
      stars: 15000,
      lastUpdated: "2023-10-15",
      language: "Python",
      url: "#tool2",
      github: "https://github.com/Significant-Gravitas/AutoGPT",
      image: "/abstract-ai-brain.png",
    },
    {
      title: "BabyAGI",
      description: "Task-driven autonomous agent using the OpenAI API",
      category: "Task Management",
      stars: 18000,
      lastUpdated: "2023-09-30",
      language: "Python",
      url: "#tool3",
      github: "https://github.com/yoheinakajima/babyagi",
      image: "/playful-ai-assistant.png",
    },
    {
      title: "AgentGPT",
      description: "Browser-based platform for creating and deploying autonomous AI agents",
      category: "Web Platform",
      stars: 12000,
      lastUpdated: "2023-11-10",
      language: "TypeScript/React",
      url: "#tool4",
      github: "https://github.com/reworkd/AgentGPT",
      image: "/abstract-ai-agent.png",
    },
    {
      title: "LlamaIndex",
      description:
        "Data framework for LLM applications to ingest, structure, and access private or domain-specific data",
      category: "Data Framework",
      stars: 20000,
      lastUpdated: "2023-11-18",
      language: "Python",
      url: "#tool5",
      github: "https://github.com/jerryjliu/llama_index",
      image: "/abstract-llama-index.png",
    },
    {
      title: "Haystack",
      description:
        "Open-source framework for building search systems that work intelligently over large document collections",
      category: "Search Framework",
      stars: 8500,
      lastUpdated: "2023-10-25",
      language: "Python",
      url: "#tool6",
      github: "https://github.com/deepset-ai/haystack",
      image: "/abstract-haystack.png",
    },
    {
      title: "Semantic Kernel",
      description: "Microsoft's SDK that integrates LLMs with conventional programming languages",
      category: "SDK",
      stars: 14000,
      lastUpdated: "2023-11-05",
      language: "C#/Python/Java",
      url: "#tool7",
      github: "https://github.com/microsoft/semantic-kernel",
      image: "/semantic-kernel-abstract.png",
    },
    {
      title: "CrewAI",
      description: "Framework for orchestrating role-playing autonomous AI agents",
      category: "Agent Framework",
      stars: 7500,
      lastUpdated: "2023-10-20",
      language: "Python",
      url: "#tool8",
      github: "https://github.com/joaomdmoura/crewAI",
      image: "/collaborative-intelligence.png",
    },
  ]

  // Communities data
  const communities = [
    {
      name: "AI Alignment Forum",
      description: "Discussion forum focused on AI alignment research and challenges",
      type: "Forum",
      members: "5,000+",
      location: "Global",
      founded: "2018",
      url: "#community1",
      socials: {
        website: "https://www.alignmentforum.org/",
        twitter: "https://twitter.com/alignmentforum",
      },
      image: "/abstract-alignment.png",
    },
    {
      name: "Hugging Face Community",
      description: "Open-source community focused on NLP and machine learning models",
      type: "Open Source",
      members: "100,000+",
      location: "Global",
      founded: "2016",
      url: "#community2",
      socials: {
        website: "https://huggingface.co/",
        github: "https://github.com/huggingface",
        twitter: "https://twitter.com/huggingface",
        discord: "https://discord.com/invite/huggingface",
      },
      image: "/hugging-face-community.png",
    },
    {
      name: "r/MachineLearning",
      description: "Reddit community for machine learning researchers and practitioners",
      type: "Forum",
      members: "2.5M+",
      location: "Global",
      founded: "2009",
      url: "#community3",
      socials: {
        website: "https://www.reddit.com/r/MachineLearning/",
      },
      image: "/placeholder.svg?height=100&width=100&query=Reddit%20ML%20Logo",
    },
    {
      name: "Papers with Code",
      description: "Free resource to find ML papers, code, results, and leaderboards",
      type: "Resource Hub",
      members: "50,000+",
      location: "Global",
      founded: "2018",
      url: "#community4",
      socials: {
        website: "https://paperswithcode.com/",
        github: "https://github.com/paperswithcode",
        twitter: "https://twitter.com/paperswithcode",
      },
      image: "/placeholder.svg?height=100&width=100&query=Papers%20with%20Code%20Logo",
    },
    {
      name: "EleutherAI",
      description: "Grassroots collective of researchers working on open AI research",
      type: "Research Collective",
      members: "1,000+",
      location: "Global",
      founded: "2020",
      url: "#community5",
      socials: {
        website: "https://www.eleuther.ai/",
        github: "https://github.com/EleutherAI",
        twitter: "https://twitter.com/EleutherAI",
        discord: "https://discord.com/invite/eleutherai",
      },
      image: "/placeholder.svg?height=100&width=100&query=EleutherAI%20Logo",
    },
    {
      name: "AI Portugal",
      description: "Portuguese community focused on AI research and applications",
      type: "National Community",
      members: "3,000+",
      location: "Portugal",
      founded: "2019",
      url: "#community6",
      socials: {
        website: "https://www.aiportugal.org/",
        linkedin: "https://www.linkedin.com/company/ai-portugal/",
      },
      image: "/placeholder.svg?height=100&width=100&query=AI%20Portugal%20Logo",
    },
    {
      name: "ML Collective",
      description: "Non-profit supporting open machine learning research",
      type: "Non-profit",
      members: "500+",
      location: "Global",
      founded: "2020",
      url: "#community7",
      socials: {
        website: "https://mlcollective.org/",
        twitter: "https://twitter.com/MLCollective",
      },
      image: "/placeholder.svg?height=100&width=100&query=ML%20Collective%20Logo",
    },
    {
      name: "DAIR.AI",
      description: "Community effort to democratize AI research, education, and technologies",
      type: "Education & Research",
      members: "10,000+",
      location: "Global",
      founded: "2019",
      url: "#community8",
      socials: {
        website: "https://dair.ai/",
        github: "https://github.com/dair-ai",
        twitter: "https://twitter.com/dair_ai",
        discord: "https://discord.gg/SKgkVT8BGJ",
      },
      image: "/placeholder.svg?height=100&width=100&query=DAIR.AI%20Logo",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Resources</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our curated collection of resources to deepen your understanding of agentic AI and connect with
              the global community.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search resources..."
                  className="pl-10 bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-[180px] bg-background/50 backdrop-blur-sm border-primary/20">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Resources</SelectItem>
                  <SelectItem value="articles">Articles</SelectItem>
                  <SelectItem value="tutorials">Tutorials</SelectItem>
                  <SelectItem value="papers">Research Papers</SelectItem>
                  <SelectItem value="tools">Tools</SelectItem>
                  <SelectItem value="communities">Communities</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 pb-24">
        <Tabs defaultValue="library" className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-12">
            <TabsTrigger value="library" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Library</span>
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">Tools</span>
            </TabsTrigger>
            <TabsTrigger value="communities" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">Global Community</span>
            </TabsTrigger>
          </TabsList>

          {/* Library Tab */}
          <TabsContent value="library" className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Library</h2>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="az">A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {libraryItems.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover-lift transition-all duration-300 border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {item.type}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      <span>
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="mx-2">•</span>
                      <User className="h-3.5 w-3.5 mr-1" />
                      <span>{item.author}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="bg-primary/5 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-5 pt-0 flex justify-between">
                    <span className="text-sm text-muted-foreground">{item.source}</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={item.url} target="_blank" rel="noopener noreferrer">
                        <span>Read</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline">Load More</Button>
            </div>
          </TabsContent>

          {/* Tools Tab */}
          <TabsContent value="tools" className="space-y-8">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <h2 className="text-2xl font-semibold">Tools</h2>
              <div className="flex flex-wrap gap-3">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="framework">Development Framework</SelectItem>
                    <SelectItem value="agent">Autonomous Agent</SelectItem>
                    <SelectItem value="task">Task Management</SelectItem>
                    <SelectItem value="web">Web Platform</SelectItem>
                    <SelectItem value="data">Data Framework</SelectItem>
                    <SelectItem value="search">Search Framework</SelectItem>
                    <SelectItem value="sdk">SDK</SelectItem>
                    <SelectItem value="agent-framework">Agent Framework</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stars">Most Stars</SelectItem>
                    <SelectItem value="recent">Recently Updated</SelectItem>
                    <SelectItem value="az">A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <Card
                  key={index}
                  className="hover-lift transition-all duration-300 border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 relative flex-shrink-0">
                        <Image
                          src={tool.image || "/placeholder.svg"}
                          alt={tool.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{tool.title}</h3>
                        <Badge variant="outline" className="mt-1 bg-primary/5">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mt-4 line-clamp-3">{tool.description}</p>

                    <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Github className="h-3.5 w-3.5 mr-1" />
                        <span>{tool.stars.toLocaleString()} stars</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>
                          Updated{" "}
                          {new Date(tool.lastUpdated).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <Tag className="h-3.5 w-3.5" />
                      <span className="text-sm">{tool.language}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 py-4 border-t border-border/50 flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={tool.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" />
                        <span>GitHub</span>
                      </Link>
                    </Button>
                    <Button variant="default" size="sm" asChild>
                      <Link href={tool.url} target="_blank" rel="noopener noreferrer">
                        <span>Explore</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline">Load More</Button>
            </div>
          </TabsContent>

          {/* Communities Tab */}
          <TabsContent value="communities" className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Global Community</h2>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="forum">Forums</SelectItem>
                  <SelectItem value="opensource">Open Source</SelectItem>
                  <SelectItem value="research">Research</SelectItem>
                  <SelectItem value="national">National</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communities.map((community, index) => (
                <Card
                  key={index}
                  className="hover-lift transition-all duration-300 border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 relative flex-shrink-0">
                        <Image
                          src={community.image || "/placeholder.svg"}
                          alt={community.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{community.name}</h3>
                        <Badge variant="outline" className="mt-1 bg-primary/5">
                          {community.type}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mt-4">{community.description}</p>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-sm">
                      <div className="flex items-center">
                        <User className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                        <span>{community.members}</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                        <span>{community.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                        <span>Founded {community.founded}</span>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="flex flex-wrap gap-2">
                      {community.socials.website && (
                        <Button variant="outline" size="icon" asChild className="h-8 w-8">
                          <Link href={community.socials.website} target="_blank" rel="noopener noreferrer">
                            <Globe className="h-4 w-4" />
                            <span className="sr-only">Website</span>
                          </Link>
                        </Button>
                      )}
                      {community.socials.github && (
                        <Button variant="outline" size="icon" asChild className="h-8 w-8">
                          <Link href={community.socials.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                        </Button>
                      )}
                      {community.socials.twitter && (
                        <Button variant="outline" size="icon" asChild className="h-8 w-8">
                          <Link href={community.socials.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-4 w-4" />
                            <span className="sr-only">Twitter</span>
                          </Link>
                        </Button>
                      )}
                      {community.socials.linkedin && (
                        <Button variant="outline" size="icon" asChild className="h-8 w-8">
                          <Link href={community.socials.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                        </Button>
                      )}
                      {community.socials.discord && (
                        <Button variant="outline" size="icon" asChild className="h-8 w-8">
                          <Link href={community.socials.discord} target="_blank" rel="noopener noreferrer">
                            <Discord className="h-4 w-4" />
                            <span className="sr-only">Discord</span>
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 py-4 border-t border-border/50">
                    <Button variant="default" size="sm" className="w-full" asChild>
                      <Link href={community.url} target="_blank" rel="noopener noreferrer">
                        <span>Visit Community</span>
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline">Load More</Button>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Submit Resource CTA */}
      <section className="container mx-auto px-6 pb-24">
        <Card className="border border-primary/20 bg-card/30 backdrop-blur-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a resource to share?</h2>
              <p className="text-muted-foreground mb-6">
                We're always looking to expand our collection of resources. If you have an article, tool, or community
                you'd like to share with our members, let us know!
              </p>
              <Button asChild>
                <Link href="#contact">Submit a Resource</Link>
              </Button>
            </div>
            <div className="relative hidden md:block">
              <Image src="/ai-collaboration-blue.png" alt="Collaboration" fill className="object-cover" />
            </div>
          </div>
        </Card>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter to receive updates on new resources, tools, and community events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Your email address" className="bg-background/50 backdrop-blur-sm" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
