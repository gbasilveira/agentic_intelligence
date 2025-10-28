import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Briefcase, Building, ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

export default function CommunityPage() {
  // Featured members
  const featuredMembers = [
    {
      id: "maria-silva",
      name: "Maria Silva",
      role: "AI Research Lead",
      image: "/confident-woman-headshot.png",
      expertise: ["Machine Learning", "Autonomous Agents", "NLP"],
      github: "https://github.com/mariasilva",
      linkedin: "https://linkedin.com/in/mariasilva",
      twitter: "https://twitter.com/mariasilva",
    },
    {
      id: "carlos-mendes",
      name: "Carlos Mendes",
      role: "AI Engineer",
      image: "/confident-professional.png",
      expertise: ["Reinforcement Learning", "Computer Vision", "Robotics"],
      github: "https://github.com/carlosmendes",
      linkedin: "https://linkedin.com/in/carlosmendes",
    },
    {
      id: "ana-costa",
      name: "Ana Costa",
      role: "Ethics Researcher",
      image: "/confident-professional.png",
      expertise: ["AI Ethics", "Policy", "Governance"],
      linkedin: "https://linkedin.com/in/anacosta",
      twitter: "https://twitter.com/anacosta",
    },
    {
      id: "miguel-ferreira",
      name: "Miguel Ferreira",
      role: "Software Developer",
      image: "/thoughtful-bearded-man.png",
      expertise: ["Full-Stack Development", "AI Integration", "UX Design"],
      github: "https://github.com/miguelferreira",
      linkedin: "https://linkedin.com/in/miguelferreira",
    },
  ]

  // Featured projects
  const featuredProjects = [
    {
      id: "autonomous-agent-framework",
      name: "Autonomous Agent Framework",
      description:
        "An open-source framework for building, testing, and deploying autonomous AI agents with a focus on safety and explainability.",
      image: "/blue-rl-flow.png",
      status: "Active",
      technologies: ["Python", "TensorFlow", "React"],
      contributors: 12,
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
    },
  ]

  // Featured partners
  const featuredPartners = [
    {
      id: "tech-university",
      name: "Lisbon Technical University",
      description: "Academic partner providing research expertise and educational resources.",
      logo: "/abstract-blue-university.png",
      type: "Academic",
    },
    {
      id: "ai-startup",
      name: "AgentLabs",
      description: "Startup focused on developing commercial applications of autonomous agent technology.",
      logo: "/abstract-blue-tech.png",
      type: "Industry",
    },
    {
      id: "government-agency",
      name: "Digital Innovation Agency",
      description: "Government agency supporting innovation in AI and digital technologies.",
      logo: "/placeholder.svg?height=100&width=200&query=government agency logo with blue theme",
      type: "Government",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      {/* Hero Section */}
      <section className="w-full bg-background relative overflow-hidden py-16 md:py-24">
        {/* Particle background */}
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>

        {/* Background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/3 bg-primary/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text-subtle font-poppins">Our Community</h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-roboto mb-8">
              Meet the diverse group of professionals, researchers, and enthusiasts who make up the Agentic Intelligence
              Lisbon community. Explore our collaborative projects and partnerships.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="gap-2 font-poppins">
                <Link href="#join">
                  <Users className="mr-2 h-5 w-5" />
                  Join Our Community
                </Link>
              </Button>
              <Button variant="outline" asChild className="gap-2 font-poppins">
                <Link href="/events">
                  <Calendar className="mr-2 h-5 w-5" />
                  Upcoming Events
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-background py-12">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <Tabs defaultValue="members" className="w-full">
            <TabsList className="w-full justify-center mb-8 bg-background/50 backdrop-blur-sm border border-border/50 p-1">
              <TabsTrigger
                value="members"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins flex items-center"
              >
                <Users className="mr-2 h-4 w-4" />
                Members
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins flex items-center"
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger
                value="partners"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins flex items-center"
              >
                <Building className="mr-2 h-4 w-4" />
                Partners
              </TabsTrigger>
            </TabsList>

            {/* Members Tab */}
            <TabsContent value="members" className="mt-0">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold font-poppins">Community Members</h2>
                <Button variant="outline" asChild className="font-poppins">
                  <Link href="/community/members">
                    View All Members
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredMembers.map((member) => (
                  <Card
                    key={member.id}
                    className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-lg font-bold mb-1 font-poppins">{member.name}</h3>
                        <p className="text-primary mb-3 font-roboto">{member.role}</p>

                        <div className="flex flex-wrap justify-center gap-1 mb-4">
                          {member.expertise.map((skill) => (
                            <Badge key={skill} variant="outline" className="font-roboto">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex justify-center space-x-2 mb-4">
                          {member.github && (
                            <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                              <Link href={member.github}>
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                              </Link>
                            </Button>
                          )}
                          {member.linkedin && (
                            <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                              <Link href={member.linkedin}>
                                <Linkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                              </Link>
                            </Button>
                          )}
                          {member.twitter && (
                            <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                              <Link href={member.twitter}>
                                <Twitter className="h-4 w-4" />
                                <span className="sr-only">Twitter</span>
                              </Link>
                            </Button>
                          )}
                        </div>

                        <Button variant="outline" size="sm" asChild className="w-full font-poppins">
                          <Link href={`/community/members/${member.id}`}>View Profile</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="mt-0">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold font-poppins">Community Projects</h2>
                <Button variant="outline" asChild className="font-poppins">
                  <Link href="/community/projects">
                    View All Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredProjects.map((project) => (
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
                            project.status === "Active" ? "bg-green-500/20 text-green-500" : ""
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 font-poppins">{project.name}</h3>
                      <p className="text-muted-foreground mb-4 font-roboto">{project.description}</p>

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
                        <Button variant="outline" size="sm" asChild className="font-poppins">
                          <Link href={`/community/projects/${project.id}`}>View Project</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Partners Tab */}
            <TabsContent value="partners" className="mt-0">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold font-poppins">Our Partners</h2>
                <Button variant="outline" asChild className="font-poppins">
                  <Link href="/community/partners">
                    View All Partners
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredPartners.map((partner) => (
                  <Card
                    key={partner.id}
                    className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative h-16 w-full mb-4 flex items-center justify-center">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            width={160}
                            height={80}
                            className="object-contain"
                          />
                        </div>
                        <Badge className="mb-3 font-poppins">{partner.type}</Badge>
                        <h3 className="text-xl font-bold mb-3 font-poppins">{partner.name}</h3>
                        <p className="text-muted-foreground mb-4 font-roboto">{partner.description}</p>
                        <Button variant="outline" size="sm" asChild className="font-poppins">
                          <Link href={`/community/partners/${partner.id}`}>View Partnership</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Join the Community */}
      <section id="join" className="w-full bg-primary/10 py-16">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-8 font-roboto">
              Become part of Lisbon's first community dedicated to agentic AI. Connect with like-minded professionals,
              contribute to exciting projects, and help shape the future of autonomous systems.
            </p>
            <Button size="lg" asChild className="font-poppins">
              <Link href="/community/join">Apply for Membership</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

function Calendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}
