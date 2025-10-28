import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CalendarDays,
  Clock,
  Search,
  MapPin,
  Users,
  Filter,
  ChevronDown,
  Calendar,
  ListFilter,
  Grid2X2,
} from "lucide-react"
import EventsCalendar from "@/components/events-calendar"
import ParticleBackground from "@/components/particle-background"

export default function EventsPage() {
  // Event categories
  const categories = [
    { id: "all", name: "All Events" },
    { id: "workshops", name: "Workshops" },
    { id: "meetups", name: "Meetups" },
    { id: "conferences", name: "Conferences" },
    { id: "hackathons", name: "Hackathons" },
  ]

  // Featured event
  const featuredEvent = {
    id: "building-your-first-ai-agent",
    title: "Building Your First AI Agent",
    description:
      "Join us for a hands-on workshop where you'll learn how to build and deploy your first autonomous AI agent using open-source tools. Perfect for developers and AI enthusiasts looking to get started with agentic AI.",
    date: "June 15, 2025",
    time: "18:30 - 21:00",
    location: "Hub Criativo do Beato, Lisbon",
    image: "/ai-collaboration-blue.png",
    category: "Workshop",
    attendees: 42,
    isFeatured: true,
  }

  // Upcoming events
  const upcomingEvents = [
    {
      id: "ai-ethics-roundtable",
      title: "AI Ethics Roundtable Discussion",
      description:
        "A panel discussion on the ethical considerations of autonomous AI agents, featuring experts from academia, industry, and policy.",
      date: "June 28, 2025",
      time: "19:00 - 21:00",
      location: "Faculty of Sciences, University of Lisbon",
      image: "/ethics-roundtable.png",
      category: "Meetup",
      attendees: 28,
    },
    {
      id: "autonomous-agents-hackathon",
      title: "Autonomous Agents Hackathon",
      description:
        "A weekend-long hackathon where teams will build innovative applications using autonomous AI agents. Prizes for the most creative and impactful projects!",
      date: "July 10-12, 2025",
      time: "Starts at 18:00 on Friday",
      location: "Startup Lisboa, Rua da Prata",
      image: "/ai-hackathon.png",
      category: "Hackathon",
      attendees: 64,
    },
    {
      id: "ai-in-healthcare-workshop",
      title: "AI Agents in Healthcare Workshop",
      description:
        "Learn how autonomous AI systems are transforming healthcare, from patient monitoring to medical research and administrative tasks.",
      date: "July 25, 2025",
      time: "14:00 - 17:30",
      location: "Hospital da Luz, Lisbon",
      image: "/AI-Enhanced Healthcare Hub.png",
      category: "Workshop",
      attendees: 35,
    },
    {
      id: "lisbon-ai-summit",
      title: "Lisbon AI Summit 2025",
      description:
        "The premier AI conference in Portugal, featuring keynotes, workshops, and networking opportunities with leaders in the field of artificial intelligence.",
      date: "August 5-7, 2025",
      time: "9:00 - 18:00 daily",
      location: "Centro de Congressos de Lisboa",
      image: "/lisbon-ai-summit.png",
      category: "Conference",
      attendees: 250,
    },
    {
      id: "ai-agents-for-business",
      title: "AI Agents for Business Innovation",
      description:
        "Discover how autonomous AI agents can drive innovation and efficiency in your business. Case studies and practical implementation strategies.",
      date: "August 20, 2025",
      time: "16:00 - 19:00",
      location: "NOVA School of Business and Economics",
      image: "/business-innovation.png",
      category: "Workshop",
      attendees: 45,
    },
    {
      id: "reinforcement-learning-meetup",
      title: "Reinforcement Learning Meetup",
      description:
        "A technical deep dive into reinforcement learning techniques for training autonomous agents. Bring your laptop for hands-on exercises!",
      date: "September 3, 2025",
      time: "18:30 - 21:00",
      location: "Instituto Superior Técnico",
      image: "/blue-rl-flow.png",
      category: "Meetup",
      attendees: 32,
    },
  ]

  // Past events
  const pastEvents = [
    {
      id: "introduction-to-agentic-ai",
      title: "Introduction to Agentic AI",
      date: "April 10, 2025",
      image: "/ai-meetup-presentation.png",
      category: "Meetup",
    },
    {
      id: "ai-agents-in-business",
      title: "AI Agents in Business",
      date: "May 5, 2025",
      image: "/ai-strategy-session.png",
      category: "Workshop",
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
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text-subtle font-poppins">
              Agentic Intelligence Events
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-roboto">
              Join our community gatherings, workshops, and conferences to learn, connect, and collaborate on the future
              of autonomous AI
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search events..." className="pl-12 py-6 text-base font-roboto" />
            </div>
            <Button variant="outline" className="py-6 px-6 gap-2 font-poppins">
              <Filter className="h-5 w-5" />
              <span>Filters</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
            <div className="flex">
              <Button
                variant="outline"
                className="rounded-r-none border-r-0 py-6 px-4 hover:bg-primary/10 hover:text-primary"
                aria-label="List view"
              >
                <ListFilter className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="rounded-l-none border-l-0 py-6 px-4 bg-primary/10 text-primary"
                aria-label="Grid view"
              >
                <Grid2X2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* View Tabs */}
      <section className="w-full bg-background py-8">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex justify-between items-center mb-8 flex-col md:flex-row gap-4">
              <TabsList className="bg-background/50 backdrop-blur-sm border border-border/50 p-1 font-poppins">
                <TabsTrigger
                  value="upcoming"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Upcoming Events
                </TabsTrigger>
                <TabsTrigger
                  value="calendar"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Calendar View
                </TabsTrigger>
                <TabsTrigger
                  value="past"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Past Events
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center">
                <Button variant="ghost" size="sm" className="gap-2 font-poppins">
                  <Calendar className="h-4 w-4" />
                  <span>Add to Calendar</span>
                </Button>
              </div>
            </div>

            <TabsContent value="upcoming" className="mt-0">
              {/* Featured Event */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 font-poppins">Featured Event</h2>

                <Card className="border border-primary/20 bg-card/30 backdrop-blur-sm overflow-hidden hover-glow transition-all duration-500 gradient-border">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/5 relative">
                      <div className="aspect-video lg:h-full relative overflow-hidden">
                        <Image
                          src={featuredEvent.image || "/placeholder.svg"}
                          alt={featuredEvent.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-60 mix-blend-overlay"></div>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-background/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-background/80"></div>
                    </div>

                    <CardContent className="lg:w-3/5 p-6 lg:p-8">
                      <Badge className="mb-4 w-fit font-poppins">{featuredEvent.category}</Badge>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 font-poppins leading-tight">
                        {featuredEvent.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 font-roboto leading-relaxed">
                        {featuredEvent.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center group">
                          <CalendarDays className="h-5 w-5 text-primary mr-2 animate-pulse-glow" />
                          <span className="group-hover:text-primary transition-colors font-roboto">
                            {featuredEvent.date}
                          </span>
                        </div>

                        <div className="flex items-center group">
                          <Clock
                            className="h-5 w-5 text-primary mr-2 animate-pulse-glow"
                            style={{ animationDelay: "0.5s" }}
                          />
                          <span className="group-hover:text-primary transition-colors font-roboto">
                            {featuredEvent.time}
                          </span>
                        </div>

                        <div className="flex items-center group">
                          <MapPin
                            className="h-5 w-5 text-primary mr-2 animate-pulse-glow"
                            style={{ animationDelay: "1s" }}
                          />
                          <span className="group-hover:text-primary transition-colors font-roboto">
                            {featuredEvent.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild className="glow-button font-poppins">
                          <Link href={`/events/${featuredEvent.id}`}>Register Now</Link>
                        </Button>

                        <Button variant="outline" className="group hover-glow font-poppins">
                          <Users className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                          <span>{featuredEvent.attendees} Attending</span>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>

              {/* Category Filters */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <Badge
                      key={category.id}
                      variant={category.id === "all" ? "default" : "outline"}
                      className="px-4 py-2 cursor-pointer font-poppins"
                    >
                      {category.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Upcoming Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover-lift hover-glow overflow-hidden flex flex-col h-full"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="font-poppins">{event.category}</Badge>
                      </div>
                    </div>

                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 font-poppins leading-tight">{event.title}</h3>

                      <p className="text-muted-foreground mb-4 flex-1 font-roboto">{event.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm">
                          <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                          <span className="font-roboto">{event.date}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          <span className="font-roboto">{event.time}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="h-4 w-4 mr-2 text-primary" />
                          <span className="font-roboto">{event.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm font-roboto">{event.attendees} attending</span>
                        </div>

                        <Button variant="ghost" size="sm" className="font-poppins" asChild>
                          <Link href={`/events/${event.id}`}>Details</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button variant="outline" size="lg" className="font-poppins px-8 py-6">
                  Load More Events
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="mt-0">
              <EventsCalendar events={[featuredEvent, ...upcomingEvents]} />
            </TabsContent>

            <TabsContent value="past" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover-lift hover-glow overflow-hidden"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110 opacity-80"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="font-poppins">
                          {event.category}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-background/50"></div>
                      <div className="absolute bottom-0 left-0 w-full p-6">
                        <h3 className="text-xl font-bold mb-2 font-poppins">{event.title}</h3>
                        <div className="flex items-center text-sm">
                          <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                          <span className="font-roboto">{event.date}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="mt-3 font-poppins" asChild>
                          <Link href={`/events/${event.id}`}>View Recap</Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button variant="outline" size="lg" className="font-poppins px-8 py-6">
                  View All Past Events
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
