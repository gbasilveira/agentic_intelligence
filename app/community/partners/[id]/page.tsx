import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ExternalLink, Calendar, Building, MapPin, Users, Briefcase, MessageSquare } from "lucide-react"

export default function PartnerDetailPage({ params }: { params: { id: string } }) {
  // In a real app, this would fetch data from an API based on the ID
  // For now, we'll use a mock partner profile
  const partner = {
    id: params.id,
    name: "Lisbon Technical University",
    description: "Academic partner providing research expertise and educational resources.",
    longDescription: `
      Lisbon Technical University (LTU) is one of Portugal's leading academic institutions in the fields of computer science, engineering, and artificial intelligence. Our partnership with LTU enables close collaboration between academic researchers and the Agentic Intelligence community.
      
      The partnership focuses on several key areas:
      
      - Joint research projects exploring the frontiers of autonomous agent technology
      - Educational initiatives including workshops, guest lectures, and student projects
      - Access to specialized equipment and research facilities
      - Academic supervision and mentorship for community projects
      - Co-organization of conferences and academic events
      
      LTU brings world-class expertise in machine learning, robotics, and AI ethics to our community, while gaining access to real-world applications and industry perspectives through the partnership.
    `,
    logo: "/abstract-blue-university.png",
    coverImage: "/placeholder.svg?height=400&width=1200&query=university campus with blue sky",
    type: "Academic",
    website: "https://example.com/tech-university",
    location: "Lisbon, Portugal",
    since: "January 2023",
    contactPerson: "Prof. João Santos",
    contactEmail: "partnerships@example.com",
    collaborationAreas: [
      "Research",
      "Education",
      "Facilities Access",
      "Mentorship",
      "Event Co-organization",
    ],
    projects: [
      {
        id: "autonomous-agent-framework",
        name: "Autonomous Agent Framework",
        description:
          "Joint research project developing an open-source framework for building, testing, and deploying autonomous AI agents.",
      },
      {
        id: "ai-ethics-guidelines",
        name: "AI Ethics Guidelines",
        description:
          "Collaborative initiative to establish ethical guidelines for the development and deployment of autonomous AI systems.",
      },
    ],
    events: [
      {
        id: "ai-ethics-roundtable",
        name: "AI Ethics Roundtable Discussion",
        date: "June 28, 2025",
        location: "Faculty of Sciences, Lisbon Technical University",
      },
      {
        id: "summer-school-autonomous-agents",
        name: "Summer School on Autonomous Agents",
        date: "July 15-20, 2025",
        location: "Lisbon Technical University Campus",
      },
    ],
    resources: [
      {
        title: "Research Paper: Emergent Behaviors in Multi-Agent Systems",
        type: "Publication",
        url: "#publication1",
      },
      {
        title: "LTU AI Lab Resources",
        type: "Facilities",
        url: "#facilities",
      },
      {
        title: "Student Internship Program",
        type: "Program",
        url: "#internship",
      },
    ],
  }

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      {/* Cover Image */}
      <div className="w-full h-64 md:h-80 relative">
        <Image
          src={partner.coverImage || "/placeholder.svg?height=400&width=1200&query=abstract blue technology pattern"}
          alt="Cover"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>

      {/* Partner Header */}
      <section className="w-full bg-background relative">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <Link
            href="/community/partners"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 font-roboto group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Partners
          </Link>

          <div className="flex flex-col md:flex-row gap-8 -mt-20 relative z-10">
            {/* Partner Logo */}
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-background rounded-lg overflow-hidden border-4 border-background flex items-center justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Partner Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <Badge className="mb-2 font-poppins">{partner.type}</Badge>
                  <h1 className="text-3xl md:text-4xl font-bold font-poppins">{partner.name}</h1>
                </div>
                <Button variant="outline" asChild className="font-poppins">
                  <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </Link>
                </Button>
              </div>

              <p className="text-lg text-muted-foreground mb-6 font-roboto">{partner.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {partner.collaborationAreas.map((area) => (
                  <Badge key={area} variant="outline" className="font-roboto">
                    {area}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
                {partner.location && (
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-primary" />
                    <span className="font-roboto">{partner.location}</span>
                  </div>
                )}
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-primary" />
                  <span className="font-roboto">Partner since {partner.since}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Content */}
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
                value="events"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins"
              >
                Events
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins"
              >
                Resources
              </TabsTrigger>
            </TabsList>

            {/* About Tab */}
            <TabsContent value="about" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl font-poppins">About This Partnership</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg dark:prose-invert max-w-none font-roboto">
                        {partner.longDescription.split("\n\n").map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:col-span-1">
                  <div className="space-y-6">
                    {/* Contact Information */}
                    <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-lg font-poppins">Contact Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {partner.contactPerson && (
                          <div className="flex items-start gap-3">
                            <Users className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <h3 className="text-sm font-medium mb-1 font-poppins">Contact Person</h3>
                              <p className="text-muted-foreground font-roboto">{partner.contactPerson}</p>
                            </div>
                          </div>
                        )}
                        {partner.contactEmail && (
                          <div className="flex items-start gap-3">
                            <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <h3 className="text-sm font-medium mb-1 font-poppins">Email</h3>
                              <p className="text-muted-foreground font-roboto">
                                <Link
                                  href={`mailto:${partner.contactEmail}`}
                                  className="hover:text-primary transition-colors"
                                >
                                  {partner.contactEmail}
                                </Link>
                              </p>
                            </div>
                          </div>
                        )}
                        {partner.location && (
                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <h3 className="text-sm font-medium mb-1 font-poppins">Location</h3>
                              <p className="text-muted-foreground font-roboto">{partner.location}</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Partnership Details */}
                    <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-lg font-poppins">Partnership Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Building className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="text-sm font-medium mb-1 font-poppins">Organization Type</h3>
                            <p className="text-muted-foreground font-roboto">{partner.type}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="text-sm font-medium mb-1 font-poppins">Partnership Since</h3>
                            <p className="text-muted-foreground font-roboto">{partner.since}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="text-sm font-medium mb-1 font-poppins">Collaboration Areas</h3>
                            <div className="flex flex-wrap gap-1">
                              {partner.collaborationAreas.map((area) => (
                                <Badge key={area} variant="outline" className="font-roboto">
                                  {area}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="mt-0">
              <h2 className="text-2xl font-bold mb-6 font-poppins">Collaborative Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {partner.projects.map((project) => (
                  <Card
                    key={project.id}
                    className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 font-poppins">{project.name}</h3>
                      <p className="text-muted-foreground mb-4 font-roboto">{project.description}</p>
                      <Button variant="outline" asChild className="font-poppins">
                        <Link href={`/community/projects/${project.id}`}>View Project</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {partner.projects.length === 0 && (
                <div className="text-center py-12 border border-dashed border-border rounded-lg">
                  <p className="text-muted-foreground font-roboto">No collaborative projects to display</p>
                </div>
              )}
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="mt-0">
              <h2 className="text-2xl font-bold mb-6 font-poppins">Joint Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {partner.events.map((event) => (
                  <Card
                    key={event.id}
                    className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 font-poppins">{event.name}</h3>
                      <div className="flex items-center text-muted-foreground mb-2 font-roboto">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground mb-4 font-roboto">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <Button variant="outline" asChild className="font-poppins">
                        <Link href={`/events/${event.id}`}>View Event</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {partner.events.length === 0 && (
                <div className="text-center py-12 border border-dashed border-border rounded-lg">
                  <p className="text-muted-foreground font-roboto">No joint events to display</p>
                </div>
              )}
            </TabsContent>

              </Tabs>
            </div>
        </section>
    </main>
  )
}
