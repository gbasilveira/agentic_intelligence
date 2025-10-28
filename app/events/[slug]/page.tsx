import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  ArrowLeft,
  Share2,
  Calendar,
  Download,
  ExternalLink,
  MessageSquare,
  FileText,
  Bookmark,
} from "lucide-react"
import EventRegistrationForm from "@/components/event-registration-form"
import EventNotes from "@/components/event-notes"
import EventDiscussion from "@/components/event-discussion"
import EventSpeakers from "@/components/event-speakers"
import EventResources from "@/components/event-resources"
import EventAttendees from "@/components/event-attendees"

export default function EventPage({ params }: { params: { slug: string } }) {
  // This would normally come from a database
  const event = {
    id: params.slug,
    title: "Building Your First AI Agent",
    description:
      "Join us for a hands-on workshop where you'll learn how to build and deploy your first autonomous AI agent using open-source tools. Perfect for developers and AI enthusiasts looking to get started with agentic AI.",
    longDescription: `
      <p>This workshop is designed for developers, data scientists, and AI enthusiasts who want to get hands-on experience building autonomous AI agents. Whether you're a beginner curious about AI agents or an experienced developer looking to expand your skills, this workshop will provide valuable insights and practical knowledge.</p>
      
      <p>During this hands-on session, you'll learn:</p>
      
      <ul>
        <li>The fundamental concepts behind autonomous AI agents</li>
        <li>How to design and implement an agent's perception, reasoning, and action capabilities</li>
        <li>Practical techniques for building agents using open-source frameworks</li>
        <li>Best practices for testing and deploying your agents</li>
        <li>Ethical considerations when developing autonomous systems</li>
      </ul>
      
      <p>By the end of the workshop, you'll have built your own functioning AI agent that can perform tasks autonomously. You'll also receive resources to continue your learning journey after the event.</p>
      
      <h3>Requirements</h3>
      
      <p>Participants should bring a laptop with Python installed. Prior experience with Python programming is recommended but not required. A basic understanding of machine learning concepts will be helpful but is not essential for participation.</p>
      
      <h3>About the Instructor</h3>
      
      <p>The workshop will be led by Carlos Mendes, AI Research Engineer at AgentLabs and contributor to several open-source AI agent frameworks. Carlos has over 5 years of experience building autonomous systems and is passionate about making AI agent technology accessible to developers of all skill levels.</p>
    `,
    date: "June 15, 2025",
    time: "18:30 - 21:00",
    location: "Hub Criativo do Beato, Lisbon",
    address: "Rua do Grilo 135, 1950-144 Lisboa",
    image: "/ai-collaboration-blue.png",
    category: "Workshop",
    capacity: 50,
    attendees: 42,
    price: "Free",
    registrationDeadline: "June 14, 2025",
    organizer: "Agentic Intelligence Lisbon",
    speakers: [
      {
        name: "Carlos Mendes",
        role: "AI Research Engineer, AgentLabs",
        bio: "Carlos is an AI Research Engineer specializing in autonomous systems and multi-agent environments. He has contributed to several open-source AI agent frameworks and is passionate about democratizing access to AI technology.",
        image: "/confident-professional.png",
      },
      {
        name: "Sofia Almeida",
        role: "ML Engineer, TechAI",
        bio: "Sofia is a Machine Learning Engineer with expertise in reinforcement learning and natural language processing. She has developed AI agents for various applications, from customer service to autonomous navigation.",
        image: "/confident-woman-headshot.png",
      },
    ],
    resources: [
      {
        title: "Workshop Slides",
        type: "PDF",
        url: "#slides",
      },
      {
        title: "Starter Code Repository",
        type: "GitHub",
        url: "#github",
      },
      {
        title: "AI Agent Framework Documentation",
        type: "Website",
        url: "#docs",
      },
    ],
    relatedEvents: [
      {
        id: "ai-ethics-roundtable",
        title: "AI Ethics Roundtable Discussion",
        date: "June 28, 2025",
        category: "Meetup",
      },
      {
        id: "autonomous-agents-hackathon",
        title: "Autonomous Agents Hackathon",
        date: "July 10-12, 2025",
        category: "Hackathon",
      },
    ],
  }

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      {/* Event Header */}
      <section className="w-full bg-background relative overflow-hidden py-16">
        {/* Background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/3 bg-primary/5 blur-3xl rounded-full"></div>

        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/events"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 font-roboto group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to all events
            </Link>

            <Badge className="mb-6 font-poppins">{event.category}</Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-poppins leading-tight">
              {event.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 font-roboto leading-relaxed">{event.description}</p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <CalendarDays className="h-5 w-5 text-primary mr-2" />
                <span className="font-roboto">{event.date}</span>
              </div>

              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="font-roboto">{event.time}</span>
              </div>

              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="font-roboto">{event.location}</span>
              </div>

              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                <span className="font-roboto">
                  {event.attendees} / {event.capacity} Attendees
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="glow-button font-poppins">Register Now</Button>
              <Button variant="outline" className="gap-2 font-poppins">
                <Calendar className="h-4 w-4" />
                <span>Add to Calendar</span>
              </Button>
              <Button variant="outline" className="gap-2 font-poppins">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="w-full bg-background pb-8">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-5xl mx-auto relative aspect-[21/9] rounded-xl overflow-hidden">
            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Event Content */}
      <section className="w-full bg-background py-12">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="w-full justify-start mb-8 bg-background/50 backdrop-blur-sm border border-border/50 p-1 overflow-x-auto flex-nowrap">
                <TabsTrigger
                  value="details"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="speakers"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins"
                >
                  Speakers
                </TabsTrigger>
                <TabsTrigger
                  value="resources"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins"
                >
                  Resources
                </TabsTrigger>
                <TabsTrigger
                  value="attendees"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins"
                >
                  Attendees
                </TabsTrigger>
                <TabsTrigger
                  value="notes"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins"
                >
                  My Notes
                </TabsTrigger>
                <TabsTrigger
                  value="discussion"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-poppins"
                >
                  Discussion
                </TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Event Details */}
                  <div className="lg:col-span-2">
                    <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-2xl font-poppins">About This Event</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div
                          className="prose prose-lg dark:prose-invert max-w-none font-roboto"
                          dangerouslySetInnerHTML={{ __html: event.longDescription }}
                        />

                        <div className="flex flex-wrap gap-4 mt-8">
                          <Button variant="outline" className="gap-2 font-poppins">
                            <Download className="h-4 w-4" />
                            <span>Download Event Details</span>
                          </Button>
                          <Button variant="outline" className="gap-2 font-poppins">
                            <ExternalLink className="h-4 w-4" />
                            <span>View Location Map</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Related Events */}
                    <div className="mt-8">
                      <h3 className="text-xl font-bold mb-4 font-poppins">Related Events</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {event.relatedEvents.map((relatedEvent) => (
                          <Card
                            key={relatedEvent.id}
                            className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift"
                          >
                            <CardContent className="p-4">
                              <Badge className="mb-2 font-poppins">{relatedEvent.category}</Badge>
                              <h4 className="font-bold mb-1 font-poppins">{relatedEvent.title}</h4>
                              <div className="flex items-center text-sm text-muted-foreground mb-3">
                                <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                                <span className="font-roboto">{relatedEvent.date}</span>
                              </div>
                              <Button variant="ghost" size="sm" className="font-poppins" asChild>
                                <Link href={`/events/${relatedEvent.id}`}>View Event</Link>
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Registration Sidebar */}
                  <div className="lg:col-span-1">
                    <div className="lg:sticky lg:top-28 space-y-6">
                      <EventRegistrationForm event={event} />

                      {/* Event Info Card */}
                      <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-lg font-poppins">Event Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium mb-1 font-poppins">Date & Time</h4>
                            <p className="text-muted-foreground font-roboto">
                              {event.date}, {event.time}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-1 font-poppins">Location</h4>
                            <p className="text-muted-foreground font-roboto">{event.location}</p>
                            <p className="text-muted-foreground text-sm font-roboto">{event.address}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-1 font-poppins">Price</h4>
                            <p className="text-muted-foreground font-roboto">{event.price}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-1 font-poppins">Capacity</h4>
                            <p className="text-muted-foreground font-roboto">
                              {event.attendees} / {event.capacity} Registered
                            </p>
                            <div className="w-full bg-muted h-2 rounded-full mt-2 overflow-hidden">
                              <div
                                className="bg-primary h-full rounded-full"
                                style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                              ></div>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-1 font-poppins">Registration Deadline</h4>
                            <p className="text-muted-foreground font-roboto">{event.registrationDeadline}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-1 font-poppins">Organizer</h4>
                            <p className="text-muted-foreground font-roboto">{event.organizer}</p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Quick Actions */}
                      <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-lg font-poppins">Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <Button variant="outline" className="w-full justify-start gap-2 font-poppins">
                            <Calendar className="h-4 w-4" />
                            <span>Add to Calendar</span>
                          </Button>
                          <Button variant="outline" className="w-full justify-start gap-2 font-poppins">
                            <Share2 className="h-4 w-4" />
                            <span>Share Event</span>
                          </Button>
                          <Button variant="outline" className="w-full justify-start gap-2 font-poppins">
                            <MessageSquare className="h-4 w-4" />
                            <span>Contact Organizer</span>
                          </Button>
                          <Button variant="outline" className="w-full justify-start gap-2 font-poppins">
                            <FileText className="h-4 w-4" />
                            <span>Request Certificate</span>
                          </Button>
                          <Button variant="outline" className="w-full justify-start gap-2 font-poppins">
                            <Bookmark className="h-4 w-4" />
                            <span>Save Event</span>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="speakers" className="mt-0">
                <EventSpeakers speakers={event.speakers} />
              </TabsContent>

              <TabsContent value="resources" className="mt-0">
                <EventResources resources={event.resources} />
              </TabsContent>

              <TabsContent value="attendees" className="mt-0">
                <EventAttendees eventId={event.id} attendees={event.attendees} capacity={event.capacity} />
              </TabsContent>

              <TabsContent value="notes" className="mt-0">
                <EventNotes eventId={event.id} />
              </TabsContent>

              <TabsContent value="discussion" className="mt-0">
                <EventDiscussion eventId={event.id} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  )
}
