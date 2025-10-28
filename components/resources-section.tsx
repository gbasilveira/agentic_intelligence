import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Code, Globe, ExternalLink } from "lucide-react"

export default function ResourcesSection() {
  const libraries = [
    {
      title: "Introduction to AI Agents",
      type: "Article",
      source: "Medium",
      url: "#article1",
    },
    {
      title: "Building Autonomous Systems",
      type: "Tutorial",
      source: "Towards AI",
      url: "#article2",
    },
    {
      title: "The Future of Agentic AI",
      type: "Research Paper",
      source: "arXiv",
      url: "#article3",
    },
    {
      title: "Ethical Considerations in AI Agents",
      type: "Guide",
      source: "AI Ethics Institute",
      url: "#article4",
    },
  ]

  const tools = [
    {
      title: "LangChain",
      description: "Framework for developing applications powered by language models",
      url: "#tool1",
    },
    {
      title: "AutoGPT",
      description: "Experimental open-source application showcasing GPT-4's capabilities",
      url: "#tool2",
    },
    {
      title: "BabyAGI",
      description: "Task-driven autonomous agent using the OpenAI API",
      url: "#tool3",
    },
    {
      title: "AgentGPT",
      description: "Browser-based platform for creating and deploying autonomous AI agents",
      url: "#tool4",
    },
  ]

  const communities = [
    {
      name: "AI Alignment Forum",
      url: "#community1",
    },
    {
      name: "Hugging Face Community",
      url: "#community2",
    },
    {
      name: "r/MachineLearning",
      url: "#community3",
    },
    {
      name: "Papers with Code",
      url: "#community4",
    },
  ]

  return (
    <section id="resources" className="section-padding w-full bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resources</h2>
          <p className="text-lg text-muted-foreground">
            Explore our curated collection of resources to deepen your understanding of agentic AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Library</h3>
            </div>

            <div className="space-y-4">
              {libraries.map((item, index) => (
                <Card
                  key={index}
                  className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <FileText className="h-3 w-3 mr-1" />
                          <span>
                            {item.type} • {item.source}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                        <Link href={item.url}>
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">Open link</span>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button variant="outline" className="w-full" asChild>
                <Link href="#library">View All Resources</Link>
              </Button>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Code className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Tools</h3>
            </div>

            <div className="space-y-4">
              {tools.map((tool, index) => (
                <Card
                  key={index}
                  className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{tool.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{tool.description}</p>
                      </div>
                      <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                        <Link href={tool.url}>
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">Open link</span>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button variant="outline" className="w-full" asChild>
                <Link href="#tools">Explore All Tools</Link>
              </Button>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Globe className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Global Community</h3>
            </div>

            <Card className="border border-border/50 bg-card/30 backdrop-blur-sm h-[calc(100%-64px)]">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">
                  Connect with other AI communities and resources around the world to expand your knowledge and network.
                </p>

                <div className="space-y-3 mb-6">
                  {communities.map((community, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span>{community.name}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={community.url}>
                          <ExternalLink className="h-4 w-4 mr-1" />
                          <span>Visit</span>
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Want to feature your community or resource here?</p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href="#contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
