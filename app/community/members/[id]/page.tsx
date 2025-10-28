import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  MapPin,
  CalendarIcon,
  Users,
  MessageSquare,
} from "lucide-react"

export default function MemberProfilePage({ params }: { params: { id: string } }) {
  // In a real app, this would fetch data from an API based on the ID
  // For now, we'll use a mock member profile
  const member = {
    id: params.id,
    name: "Maria Silva",
    role: "AI Research Lead",
    image: "/confident-woman-headshot.png",
    coverImage: "/ai-collaboration-blue.png",
    bio: "Maria is an AI researcher specializing in autonomous systems and multi-agent environments. She has published numerous papers on agent-based modeling and emergent behaviors in AI systems.",
    longBio:
      "Maria Silva is a leading researcher in the field of autonomous AI agents with over 8 years of experience. She holds a Ph.D. in Artificial Intelligence from the University of Lisbon and has previously worked at major research labs across Europe. Her work focuses on developing more capable, safe, and ethical autonomous systems that can collaborate effectively with humans and other agents.\n\nMaria has published over 20 papers in top-tier AI conferences and journals, with her recent work on emergent communication protocols between agents receiving significant attention in the field. She is passionate about bridging the gap between theoretical AI research and practical applications, particularly in healthcare and environmental monitoring.",
    expertise: [
      "Machine Learning",
      "Autonomous Agents",
      "Multi-agent Systems",
      "Reinforcement Learning",
      "Natural Language Processing",
      "AI Ethics",
    ],
    location: "Lisbon, Portugal",
    email: "maria.silva@example.com",
    website: "https://mariasilva.ai",
    github: "https://github.com/mariasilva",
    linkedin: "https://linkedin.com/in/mariasilva",
    twitter: "https://twitter.com/mariasilva",
    type: "Core Team",
    joinDate: "January 2023",
    projects: [
      {
        id: "autonomous-agent-framework",
        name: "Autonomous Agent Framework",
        role: "Lead Researcher",
        description:
          "An open-source framework for building, testing, and deploying autonomous AI agents with a focus on safety and explainability.",
      },
      {
        id: "ai-ethics-guidelines",
        name: "AI Ethics Guidelines",
        role: "Contributor",
        description:
          "A comprehensive set of guidelines for the ethical development and deployment of autonomous AI systems in various domains.",
      },
    ],
    publications: [
      {
        title: "Emergent Communication in Multi-Agent Reinforcement Learning",
        venue: "Conference on Neural Information Processing Systems (NeurIPS)",
        year: 2024,
        link: "#",
      },
      {
        title: "Safety Constraints for Autonomous Agents in Dynamic Environments",
        venue: "International Conference on Machine Learning (ICML)",
        year: 2023,
        link: "#",
      },
      {
        title: "Towards More Explainable Autonomous Systems",
        venue: "AAAI Conference on Artificial Intelligence",
        year: 2022,
        link: "#",
      },
    ],
    events: [
      {
        id: "building-your-first-ai-agent",
        name: "Building Your First AI Agent",
        role: "Speaker",
        date: "June 15, 2025",
      },
      {
        id: "ai-ethics-roundtable",
        name: "AI Ethics Roundtable Discussion",
        role: "Panelist",
        date: "June 28, 2025",
      },
    ],
  }

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      {/* Cover Image */}
      <div className="w-full h-64 md:h-80 relative">
        <Image
          src={member.coverImage || "/placeholder.svg?height=400&width=1200&query=abstract blue technology pattern"}
          alt="Cover"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>

      {/* Profile Header */}
      <section className="w-full bg-background relative">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <Link
            href="/community/members"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 font-roboto group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Members
          </Link>

          <div className="flex flex-col md:flex-row gap-8 -mt-20 relative z-10">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <Badge
                    className={`mb-2 font-poppins ${member.type === "Core Team" ? "bg-primary/20 text-primary" : ""}`}
                  >
                    {member.type}
                  </Badge>
                  <h1 className="text-3xl md:text-4xl font-bold font-poppins">{member.name}</h1>
                  <p className="text-xl text-primary font-roboto">{member.role}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="font-poppins">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                  <Button className="font-poppins">
                    <Users className="mr-2 h-4 w-4" />
                    Connect
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {member.expertise.map((skill) => (
                  <Badge key={skill} variant="outline" className="font-roboto">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
                {member.location && (
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-primary" />
                    <span className="font-roboto">{member.location}</span>
                  </div>
                )}
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1 text-primary" />
                  <span className="font-roboto">Joined {member.joinDate}</span>
                </div>
              </div>

              <div className="flex gap-3">
                {member.github && (
                  <Button variant="outline" size="icon" asChild className="rounded-full h-10 w-10">
                    <Link href={member.github}>
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                )}
                {member.linkedin && (
                  <Button variant="outline" size="icon" asChild className="rounded-full h-10 w-10">
                    <Link href={member.linkedin}>
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                )}
                {member.twitter && (
                  <Button variant="outline" size="icon" asChild className="rounded-full h-10 w-10">
                    <Link href={member.twitter}>
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </Button>
                )}
                {member.email && (
                  <Button variant="outline" size="icon" asChild className="rounded-full h-10 w-10">
                    <Link href={`mailto:${member.email}`}>
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                )}
                {member.website && (
                  <Button variant="outline" size="icon" asChild className="rounded-full h-10 w-10">
                    <Link href={member.website}>
                      <Globe className="h-5 w-5" />
                      <span className="sr-only">Website</span>
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
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
                value="projects"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins"
              >
                Projects
              </TabsTrigger>
              <TabsTrigger
                value="publications"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins"
              >
                Publications
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins"
              >
                Events
              </TabsTrigger>
            </TabsList>

            {/* About Tab */}
            <TabsContent value="about" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl font-poppins">About {member.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg dark:prose-invert max-w-none font-roboto">
                        {member.longBio.split("\n\n").map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:col-span-1">
                  <div className="space-y-6">
                    <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-lg font-poppins">Contact Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {member.email && (
                          <div className="flex items-start gap-3">
                            <Mail className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <h3 className="text-sm font-medium mb-1 font-poppins">Email</h3>
                              <p className="text-muted-foreground font-roboto">
                                <Link href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                                  {member.email}
                                </Link>
                              </p>
                            </div>
                          </div>
                        )}
                        {member.website && (
                          <div className="flex items-start gap-3">
                            <Globe className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <h3 className="text-sm font-medium mb-1 font-poppins">Website</h3>
                              <p className="text-muted-foreground font-roboto">
                                <Link
                                  href={member.website}
                                  className="hover:text-primary transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {member.website.replace(/(^\w+:|^)\/\//, "")}
                                </Link>
                              </p>
                            </div>
                          </div>
                        )}
                        {member.location && (
                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <h3 className="text-sm font-medium mb-1 font-poppins">Location</h3>
                              <p className="text-muted-foreground font-roboto">{member.location}</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-lg font-poppins">Expertise</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill) => (
                            <Badge key={skill} className="font-roboto">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="mt-0">
              <h2 className="text-2xl font-bold mb-6 font-poppins">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {member.projects.map((project) => (
                  <Card
                    key={project.id}
                    className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <Badge className="mb-2 font-poppins">{project.role}</Badge>
                      <h3 className="text-xl font-bold mb-2 font-poppins">{project.name}</h3>
                      <p className="text-muted-foreground mb-4 font-roboto">{project.description}</p>
                      <Button variant="outline" asChild className="font-poppins">
                        <Link href={`/community/projects/${project.id}`}>View Project</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {member.projects.length === 0 && (
                <div className="text-center py-12 border border-dashed border-border rounded-lg">
                  <p className="text-muted-foreground font-roboto">No projects to display</p>
                </div>
              )}
            </TabsContent>

            {/* Publications Tab */}
            <TabsContent value="publications" className="mt-0">
              <h2 className="text-2xl font-bold mb-6 font-poppins">Publications</h2>
              <div className="space-y-4">
                {member.publications.map((publication, index) => (
                  <Card
                    key={index}
                    className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold mb-1 font-poppins">{publication.title}</h3>
                          <p className="text-muted-foreground font-roboto">
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
              {member.publications.length === 0 && (
                <div className="text-center py-12 border border-dashed border-border rounded-lg">
                  <p className="text-muted-foreground font-roboto">No publications to display</p>
                </div>
              )}
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="mt-0">
              <h2 className="text-2xl font-bold mb-6 font-poppins">Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {member.events.map((event) => (
                  <Card
                    key={event.id}
                    className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <Badge className="mb-2 font-poppins">{event.role}</Badge>
                      <h3 className="text-xl font-bold mb-2 font-poppins">{event.name}</h3>
                      <div className="flex items-center text-muted-foreground mb-4 font-roboto">
                        <CalendarIcon className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <Button variant="outline" asChild className="font-poppins">
                        <Link href={`/events/${event.id}`}>View Event</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {member.events.length === 0 && (
                <div className="text-center py-12 border border-dashed border-border rounded-lg">
                  <p className="text-muted-foreground font-roboto">No events to display</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
