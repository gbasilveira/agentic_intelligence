import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Search, Filter, Github, ArrowLeft, ArrowRight, Users } from "lucide-react"

export default function ProjectsPage() {
  // All community projects
  const projects = [
    {
      id: "autonomous-agent-framework",
      name: "Autonomous Agent Framework",
      description:
        "An open-source framework for building, testing, and deploying autonomous AI agents with a focus on safety and explainability.",
      image: "/blue-rl-flow.png",
      status: "Active",
      technologies: ["Python", "TensorFlow", "React"],
      contributors: 12,
      github: "https://github.com/agentic-ai-lisbon/autonomous-agent-framework",
      type: "Core",
      startDate: "January 2023",
    },
    {
      id: "ai-ethics-guidelines",
      name: "AI Ethics Guidelines",
      description:
        "A comprehensive set of guidelines for the ethical development and deployment of autonomous AI systems in various domains.",
      image: "/ai-ethics-highlighted.png",
      status: "Completed",
      technologies: ["Research", "Policy", "Documentation"],
      contributors: 8,
      github: "https://github.com/agentic-ai-lisbon/ai-ethics-guidelines",
      type: "Core",
      startDate: "March 2023",
    },
    {
      id: "agent-visualization-toolkit",
      name: "Agent Visualization Toolkit",
      description:
        "Tools for visualizing the decision-making processes of autonomous agents to improve transparency and debugging.",
      image: "/blue-data-dashboard.png",
      status: "Active",
      technologies: ["JavaScript", "D3.js", "Python"],
      contributors: 5,
      github: "https://github.com/agentic-ai-lisbon/agent-visualization-toolkit",
      type: "Core",
      startDate: "June 2023",
    },
    {
      id: "multi-agent-simulation",
      name: "Multi-Agent Simulation Environment",
      description:
        "A simulation environment for testing and evaluating the behavior of multiple autonomous agents interacting with each other.",
      image: "/placeholder.svg?height=400&width=600&query=network of AI agents with blue connections",
      status: "Active",
      technologies: ["Python", "Unity", "Reinforcement Learning"],
      contributors: 7,
      github: "https://github.com/agentic-ai-lisbon/multi-agent-simulation",
      type: "Community",
      startDate: "September 2023",
    },
    {
      id: "agent-language-model",
      name: "Agent-Optimized Language Model",
      description:
        "A specialized language model fine-tuned for agent-to-agent and agent-to-human communication with improved reasoning capabilities.",
      image: "/placeholder.svg?height=400&width=600&query=AI language model with blue neural network",
      status: "Active",
      technologies: ["PyTorch", "Transformers", "RLHF"],
      contributors: 9,
      github: "https://github.com/agentic-ai-lisbon/agent-language-model",
      type: "Research",
      startDate: "November 2023",
    },
    {
      id: "autonomous-robotics-interface",
      name: "Autonomous Robotics Interface",
      description:
        "A software interface for connecting autonomous AI agents to robotic systems, enabling physical world interaction.",
      image: "/placeholder.svg?height=400&width=600&query=robot arm with blue digital overlay",
      status: "In Development",
      technologies: ["ROS", "Python", "C++"],
      contributors: 6,
      github: "https://github.com/agentic-ai-lisbon/autonomous-robotics-interface",
      type: "Community",
      startDate: "January 2024",
    },
    {
      id: "agent-benchmarking-suite",
      name: "Agent Benchmarking Suite",
      description:
        "A comprehensive suite of benchmarks and evaluation metrics for assessing the capabilities of autonomous AI agents.",
      image: "/placeholder.svg?height=400&width=600&query=performance metrics dashboard with blue charts",
      status: "Active",
      technologies: ["Python", "Jupyter", "Statistical Analysis"],
      contributors: 4,
      github: "https://github.com/agentic-ai-lisbon/agent-benchmarking-suite",
      type: "Research",
      startDate: "February 2024",
    },
    {
      id: "agent-safety-toolkit",
      name: "Agent Safety Toolkit",
      description:
        "Tools and methodologies for ensuring the safe operation of autonomous agents, including containment, monitoring, and intervention mechanisms.",
      image: "/placeholder.svg?height=400&width=600&query=security shield with blue digital lock",
      status: "Active",
      technologies: ["Python", "Security", "Monitoring"],
      contributors: 8,
      github: "https://github.com/agentic-ai-lisbon/agent-safety-toolkit",
      type: "Core",
      startDate: "December 2023",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      {/* Header */}
      <section className="w-full bg-background py-12">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <Link
            href="/community"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 font-roboto group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Community
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 font-poppins">Community Projects</h1>
              <p className="text-muted-foreground font-roboto">
                Explore the collaborative projects developed by our community members.
              </p>
            </div>
            <Button asChild className="font-poppins">
              <Link href="/community/projects/propose">
                <Briefcase className="mr-2 h-5 w-5" />
                Propose a Project
              </Link>
            </Button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search projects..." className="pl-10 py-6 text-base font-roboto" />
            </div>
            <Button variant="outline" className="py-6 px-6 gap-2 font-poppins">
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </Button>
          </div>

          {/* Project Type Tabs */}
          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="bg-background/50 backdrop-blur-sm border border-border/50 p-1 font-poppins">
              <TabsTrigger
                value="all"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="core"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Core Projects
              </TabsTrigger>
              <TabsTrigger
                value="research"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Research Projects
              </TabsTrigger>
              <TabsTrigger
                value="community"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Community Projects
              </TabsTrigger>
            </TabsList>

            {/* All Projects Tab */}
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift overflow-hidden"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`font-poppins ${
                            project.status === "Active"
                              ? "bg-green-500/20 text-green-500"
                              : project.status === "Completed"
                                ? "bg-blue-500/20 text-blue-500"
                                : "bg-yellow-500/20 text-yellow-500"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold font-poppins">{project.name}</h3>
                        <Badge variant="outline" className="font-poppins">
                          {project.type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4 font-roboto line-clamp-2">{project.description}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="font-roboto">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground font-roboto">
                          <Users className="inline-block mr-1 h-4 w-4" />
                          {project.contributors} contributors
                        </div>
                        <div className="flex gap-2">
                          {project.github && (
                            <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                              <Link href={project.github}>
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                              </Link>
                            </Button>
                          )}
                          <Button variant="outline" size="sm" asChild className="font-poppins">
                            <Link href={`/community/projects/${project.id}`}>
                              Details
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Core Projects Tab */}
            <TabsContent value="core" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.type === "Core")
                  .map((project) => (
                    <Card
                      key={project.id}
                      className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift overflow-hidden"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge
                            className={`font-poppins ${
                              project.status === "Active"
                                ? "bg-green-500/20 text-green-500"
                                : project.status === "Completed"
                                  ? "bg-blue-500/20 text-blue-500"
                                  : "bg-yellow-500/20 text-yellow-500"
                            }`}
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold font-poppins">{project.name}</h3>
                          <Badge variant="outline" className="font-poppins">
                            {project.type}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4 font-roboto line-clamp-2">{project.description}</p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="font-roboto">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="text-sm text-muted-foreground font-roboto">
                            <Users className="inline-block mr-1 h-4 w-4" />
                            {project.contributors} contributors
                          </div>
                          <div className="flex gap-2">
                            {project.github && (
                              <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                                <Link href={project.github}>
                                  <Github className="h-4 w-4" />
                                  <span className="sr-only">GitHub</span>
                                </Link>
                              </Button>
                            )}
                            <Button variant="outline" size="sm" asChild className="font-poppins">
                              <Link href={`/community/projects/${project.id}`}>
                                Details
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            {/* Research Projects Tab */}
            <TabsContent value="research" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.type === "Research")
                  .map((project) => (
                    <Card
                      key={project.id}
                      className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift overflow-hidden"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge
                            className={`font-poppins ${
                              project.status === "Active"
                                ? "bg-green-500/20 text-green-500"
                                : project.status === "Completed"
                                  ? "bg-blue-500/20 text-blue-500"
                                  : "bg-yellow-500/20 text-yellow-500"
                            }`}
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold font-poppins">{project.name}</h3>
                          <Badge variant="outline" className="font-poppins">
                            {project.type}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4 font-roboto line-clamp-2">{project.description}</p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="font-roboto">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="text-sm text-muted-foreground font-roboto">
                            <Users className="inline-block mr-1 h-4 w-4" />
                            {project.contributors} contributors
                          </div>
                          <div className="flex gap-2">
                            {project.github && (
                              <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                                <Link href={project.github}>
                                  <Github className="h-4 w-4" />
                                  <span className="sr-only">GitHub</span>
                                </Link>
                              </Button>
                            )}
                            <Button variant="outline" size="sm" asChild className="font-poppins">
                              <Link href={`/community/projects/${project.id}`}>
                                Details
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            {/* Community Projects Tab */}
            <TabsContent value="community" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.type === "Community")
                  .map((project) => (
                    <Card
                      key={project.id}
                      className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift overflow-hidden"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge
                            className={`font-poppins ${
                              project.status === "Active"
                                ? "bg-green-500/20 text-green-500"
                                : project.status === "Completed"
                                  ? "bg-blue-500/20 text-blue-500"
                                  : "bg-yellow-500/20 text-yellow-500"
                            }`}
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold font-poppins">{project.name}</h3>
                          <Badge variant="outline" className="font-poppins">
                            {project.type}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4 font-roboto line-clamp-2">{project.description}</p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="font-roboto">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="text-sm text-muted-foreground font-roboto">
                            <Users className="inline-block mr-1 h-4 w-4" />
                            {project.contributors} contributors
                          </div>
                          <div className="flex gap-2">
                            {project.github && (
                              <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                                <Link href={project.github}>
                                  <Github className="h-4 w-4" />
                                  <span className="sr-only">GitHub</span>
                                </Link>
                              </Button>
                            )}
                            <Button variant="outline" size="sm" asChild className="font-poppins">
                              <Link href={`/community/projects/${project.id}`}>
                                Details
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
