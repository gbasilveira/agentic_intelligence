import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CalendarIcon,
  Users,
  Code,
  FileText,
  MessageSquare,
  Star,
  GitBranch,
  GitPullRequest,
  GitMerge,
} from "lucide-react"
import ProjectContributors from "@/components/project-contributors"
import ProjectDiscussion from "@/components/project-discussion"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // In a real app, this would fetch data from an API based on the ID
  // For now, we'll use a mock project
  const project = {
    id: params.id,
    name: "Autonomous Agent Framework",
    description:
      "An open-source framework for building, testing, and deploying autonomous AI agents with a focus on safety and explainability.",
    longDescription: `
      The Autonomous Agent Framework (AAF) is a comprehensive toolkit designed to simplify the development, testing, and deployment of autonomous AI agents. It provides a modular architecture that allows researchers and developers to focus on the unique aspects of their agents while leveraging standardized components for common functionality.
      
      Key features of the framework include:
      
      - Modular perception, reasoning, and action components
      - Built-in safety mechanisms and constraints
      - Explainability tools for understanding agent decisions
      - Standardized interfaces for environment interaction
      - Comprehensive testing and evaluation utilities
      - Deployment tools for various platforms and environments
      
      The framework is designed to be flexible enough for research purposes while providing the robustness needed for production applications. It supports various types of agents, from simple rule-based systems to complex deep learning models, and can be extended to accommodate new approaches as the field evolves.
    `,
    image: "/blue-rl-flow.png",
    status: "Active",
    technologies: ["Python", "TensorFlow", "React", "Docker", "FastAPI"],
    contributorCount: 12,
    github: "https://github.com/agentic-ai-lisbon/autonomous-agent-framework",
    website: "https://aaf.agentic-ai-lisbon.org",
    documentation: "https://docs.aaf.agentic-ai-lisbon.org",
    type: "Core",
    startDate: "January 2023",
    lastUpdate: "2 days ago",
    stars: 342,
    forks: 87,
    openIssues: 24,
    pullRequests: 8,
    license: "MIT",
    leadContributors: [
      {
        id: "maria-silva",
        name: "Maria Silva",
        role: "Lead Researcher",
        image: "/confident-woman-headshot.png",
      },
      {
        id: "carlos-mendes",
        name: "Carlos Mendes",
        role: "AI Engineer",
        image: "/confident-professional.png",
      },
    ],
    contributors: [
      {
        id: "ana-costa",
        name: "Ana Costa",
        role: "Ethics Researcher",
        image: "/confident-professional.png",
      },
      {
        id: "miguel-ferreira",
        name: "Miguel Ferreira",
        role: "Software Developer",
        image: "/thoughtful-bearded-man.png",
      },
      {
        id: "joana-santos",
        name: "Joana Santos",
        role: "ML Engineer",
        image: "/confident-professional.png",
      },
      {
        id: "pedro-oliveira",
        name: "Pedro Oliveira",
        role: "Robotics Researcher",
        image: "/confident-professional.png",
      },
    ],
    relatedProjects: [
      {
        id: "agent-visualization-toolkit",
        name: "Agent Visualization Toolkit",
        description:
          "Tools for visualizing the decision-making processes of autonomous agents to improve transparency and debugging.",
      },
      {
        id: "agent-safety-toolkit",
        name: "Agent Safety Toolkit",
        description:
          "Tools and methodologies for ensuring the safe operation of autonomous agents, including containment, monitoring, and intervention mechanisms.",
      },
    ],
    publications: [
      {
        title: "Autonomous Agent Framework: A Modular Approach to Building Safe and Explainable AI Agents",
        authors: "Maria Silva, Carlos Mendes, Ana Costa",
        venue: "Conference on Neural Information Processing Systems (NeurIPS)",
        year: 2023,
        link: "#",
      },
      {
        title: "Safety Mechanisms in the Autonomous Agent Framework",
        authors: "Ana Costa, Maria Silva, Miguel Ferreira",
        venue: "AAAI Conference on Artificial Intelligence",
        year: 2024,
        link: "#",
      },
    ],
  }

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      {/* Project Header */}
      <section className="w-full bg-background py-12">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <Link
            href="/community/projects"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 font-roboto group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Project Image */}
            <div className="md:w-1/3 flex-shrink-0">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border/50">
                <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
              </div>
            </div>

            {/* Project Info */}
            <div className="md:w-2/3">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <Badge
                    className={`mb-2 font-poppins ${
                      project.status === "Active"
                        ? "bg-green-500/20 text-green-500"
                        : project.status === "Completed"
                          ? "bg-blue-500/20 text-blue-500"
                          : "bg-yellow-500/20 text-yellow-500"
                    }`}
                  >
                    {project.status}
                  </Badge>
                  <h1 className="text-3xl md:text-4xl font-bold font-poppins">{project.name}</h1>
                </div>
                <Badge variant="outline" className="font-poppins">
                  {project.type} Project
                </Badge>
              </div>

              <p className="text-lg text-muted-foreground mb-6 font-roboto">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="font-roboto">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1 text-primary" />
                  <span className="font-roboto">Started {project.startDate}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1 text-primary" />
                  <span className="font-roboto">{project.contributorCount} contributors</span>
                </div>
                <div className="flex items-center">
                  <Code className="h-4 w-4 mr-1 text-primary" />
                  <span className="font-roboto">Updated {project.lastUpdate}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <Button asChild className="gap-2 font-poppins">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                )}
                {project.website && (
                  <Button variant="outline" asChild className="gap-2 font-poppins">
                    <Link href={project.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                )}
                {project.documentation && (
                  <Button variant="outline" asChild className="gap-2 font-poppins">
                    <Link href={project.documentation} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4" />
                      Documentation
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Stats */}
      <section className="w-full bg-primary/5 py-6">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex flex-col items-center justify-center p-4">
              <div className="flex items-center text-primary mb-1">
                <Star className="h-5 w-5 mr-1" />
                <span className="text-xl font-bold font-poppins">{project.stars}</span>
              </div>
              <p className="text-sm text-muted-foreground font-roboto">Stars</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="flex items-center text-primary mb-1">
                <GitBranch className="h-5 w-5 mr-1" />
                <span className="text-xl font-bold font-poppins">{project.forks}</span>
              </div>
              <p className="text-sm text-muted-foreground font-roboto">Forks</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="flex items-center text-primary mb-1">
                <MessageSquare className="h-5 w-5 mr-1" />
                <span className="text-xl font-bold font-poppins">{project.openIssues}</span>
              </div>
              <p className="text-sm text-muted-foreground font-roboto">Open Issues</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="flex items-center text-primary mb-1">
                <GitPullRequest className="h-5 w-5 mr-1" />
                <span className="text-xl font-bold font-poppins">{project.pullRequests}</span>
              </div>
              <p className="text-sm text-muted-foreground font-roboto">Pull Requests</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="flex items-center text-primary mb-1">
                <GitMerge className="h-5 w-5 mr-1" />
                <span className="text-xl font-bold font-poppins">{project.license}</span>
              </div>
              <p className="text-sm text-muted-foreground font-roboto">License</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="w-full bg-background py-12">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="w-full justify-start mb-8 bg-background/50 backdrop-blur-sm border border-border/50 p-1 overflow-x-auto flex-nowrap">
              <TabsTrigger
                value="about"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins"
              >
                About
              </TabsTrigger>
              <TabsTrigger
                value="contributors"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins"
              >
                Contributors
              </TabsTrigger>
              <TabsTrigger
                value="publications"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins"
              >
                Publications
              </TabsTrigger>
              <TabsTrigger
                value="discussion"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins"
              >
                Discussion
              </TabsTrigger>
            </TabsList>

            {/* About Tab */}
            <TabsContent value="about" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl font-poppins">About This Project</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg dark:prose-invert max-w-none font-roboto">
                        {project.longDescription.split("\n\n").map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Related Projects */}
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4 font-poppins">Related Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.relatedProjects.map((relatedProject) => (
                        <Card
                          key={relatedProject.id}
                          className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                        >
                          <CardContent className="p-4">
                            <h4 className="font-bold mb-2 font-poppins">{relatedProject.name}</h4>
                            <p className="text-sm text-muted-foreground mb-3 font-roboto">
                              {relatedProject.description}
                            </p>
                            <Button variant="outline" size="sm" asChild className="font-poppins">
                              <Link href={`/community/projects/${relatedProject.id}`}>View Project</Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="space-y-6">
                    {/* Lead Contributors */}
                    <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-lg font-poppins">Lead Contributors</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {project.leadContributors.map((contributor) => (
                          <div key={contributor.id} className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                              <Image
                                src={contributor.image || "/placeholder.svg"}
                                alt={contributor.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium font-poppins">{contributor.name}</h3>
                              <p className="text-sm text-muted-foreground font-roboto">{contributor.role}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    {/* Project Details */}
                    <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-lg font-poppins">Project Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium mb-1 font-poppins">Status</h3>
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

                        <div>
                          <h3 className="text-sm font-medium mb-1 font-poppins">Started</h3>
                          <p className="text-muted-foreground font-roboto">{project.startDate}</p>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium mb-1 font-poppins">Last Updated</h3>
                          <p className="text-muted-foreground font-roboto">{project.lastUpdate}</p>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium mb-1 font-poppins">Technologies</h3>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="font-roboto">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Quick Links */}
                    <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-lg font-poppins">Quick Links</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {project.github && (
                          <Button variant="outline" className="w-full justify-start gap-2 font-poppins" asChild>
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                              <span>GitHub Repository</span>
                            </Link>
                          </Button>
                        )}
                        {project.website && (
                          <Button variant="outline" className="w-full justify-start gap-2 font-poppins" asChild>
                            <Link href={project.website} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                              <span>Project Website</span>
                            </Link>
                          </Button>
                        )}
                        {project.documentation && (
                          <Button variant="outline" className="w-full justify-start gap-2 font-poppins" asChild>
                            <Link href={project.documentation} target="_blank" rel="noopener noreferrer">
                              <FileText className="h-4 w-4" />
                              <span>Documentation</span>
                            </Link>
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Contributors Tab */}
            <TabsContent value="contributors" className="mt-0">
              <ProjectContributors
                leadContributors={project.leadContributors}
                contributors={project.contributors}
                totalCount={project.contributorCount}
              />
            </TabsContent>

            {/* Publications Tab */}
            <TabsContent value="publications" className="mt-0">
              <h2 className="text-2xl font-bold mb-6 font-poppins">Publications</h2>
              <div className="space-y-4">
                {project.publications.map((publication, index) => (
                  <Card
                    key={index}
                    className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold mb-1 font-poppins">{publication.title}</h3>
                          <p className="text-muted-foreground mb-2 font-roboto">{publication.authors}</p>
                          <p className="text-sm text-muted-foreground font-roboto">
                            {publication.venue} • {publication.year}
                          </p>
                        </div>
                        <Button variant="outline" size="sm" asChild className="shrink-0 font-poppins">
                          <Link href={publication.link}>Read Paper</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {project.publications.length === 0 && (
                <div className="text-center py-12 border border-dashed border-border rounded-lg">
                  <p className="text-muted-foreground font-roboto">No publications to display</p>
                </div>
              )}
            </TabsContent>

            {/* Discussion Tab */}
            <TabsContent value="discussion" className="mt-0">
              <ProjectDiscussion projectId={project.id} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
