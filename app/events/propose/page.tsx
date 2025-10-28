import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Users, HelpCircle, Info, CheckCircle2 } from "lucide-react"
import EventProposalForm from "@/components/event-proposal-form"
import ParticleBackground from "@/components/particle-background"

export default function ProposeEventPage() {
  // Example event types
  const eventTypes = [
    {
      title: "Workshop",
      description: "Hands-on sessions where participants learn practical skills",
      image: "/ai-collaboration-blue.png",
      attendees: "15-50",
      duration: "2-4 hours",
    },
    {
      title: "Meetup",
      description: "Casual gatherings for networking and knowledge sharing",
      image: "/ai-meetup-presentation.png",
      attendees: "20-100",
      duration: "1.5-3 hours",
    },
    {
      title: "Hackathon",
      description: "Intensive collaborative events focused on building projects",
      image: "/ai-hackathon.png",
      attendees: "30-100",
      duration: "1-3 days",
    },
    {
      title: "Conference",
      description: "Formal events with multiple speakers and structured sessions",
      image: "/lisbon-ai-summit.png",
      attendees: "50-300+",
      duration: "1-3 days",
    },
  ]

  // Review process steps
  const reviewSteps = [
    {
      number: 1,
      title: "Submission",
      description: "Fill out and submit the event proposal form with all required details",
    },
    {
      number: 2,
      title: "Initial Review",
      description: "Our team reviews your proposal (typically within 5-7 business days)",
    },
    {
      number: 3,
      title: "Discussion",
      description: "We may contact you to discuss details, clarify points, or suggest modifications",
    },
    {
      number: 4,
      title: "Decision",
      description: "Final approval or feedback on why the proposal wasn't selected at this time",
    },
    {
      number: 5,
      title: "Planning",
      description: "If approved, we'll work with you to plan, schedule, and promote the event",
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
          <div className="max-w-3xl mx-auto">
            <Link
              href="/events"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 font-roboto group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to events
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 glow-text-subtle font-poppins">
              Propose an Event
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-roboto">
              Have an idea for an event? We welcome proposals from community members who want to share their knowledge,
              facilitate discussions, or organize collaborative activities related to agentic AI.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-background py-12">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="lg:sticky lg:top-28 space-y-8">
                {/* Guidelines Card */}
                <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-poppins flex items-center">
                      <Info className="h-5 w-5 mr-2 text-primary" />
                      Guidelines
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2 font-poppins">Event Focus</h3>
                      <p className="text-sm text-muted-foreground font-roboto">
                        Events should be related to agentic AI, autonomous systems, or closely related fields in
                        artificial intelligence.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2 font-poppins">Audience</h3>
                      <p className="text-sm text-muted-foreground font-roboto">
                        Consider who your target audience is and what level of expertise they should have. We welcome
                        events for beginners through experts.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2 font-poppins">Commercial Content</h3>
                      <p className="text-sm text-muted-foreground font-roboto">
                        Events should focus on knowledge sharing rather than product promotion. Subtle mentions of
                        relevant products or services are acceptable.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2 font-poppins">Timing</h3>
                      <p className="text-sm text-muted-foreground font-roboto">
                        Submit your proposal at least 4-6 weeks before your preferred date to allow time for review and
                        promotion.
                      </p>
                    </div>

                    <Button variant="outline" className="w-full font-poppins" asChild>
                      <Link href="#faq">View Full Guidelines</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* FAQ Card */}
                <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-poppins flex items-center">
                      <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                      Frequently Asked Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-1 font-poppins">Do I need to be an expert?</h3>
                      <p className="text-sm text-muted-foreground font-roboto">
                        No, we welcome proposals from people at all levels. Your passion and willingness to organize are
                        most important.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-1 font-poppins">Is there a cost to propose?</h3>
                      <p className="text-sm text-muted-foreground font-roboto">
                        No, submitting a proposal is completely free.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-1 font-poppins">Can I charge for my event?</h3>
                      <p className="text-sm text-muted-foreground font-roboto">
                        Most community events are free, but we do allow charging to cover costs for workshops or special
                        events. This should be discussed during the review process.
                      </p>
                    </div>

                    <Button variant="outline" className="w-full font-poppins" asChild>
                      <Link href="#faq">View All FAQs</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Contact Card */}
                <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-poppins">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 font-roboto">
                      If you have questions about the proposal process or need guidance, our team is here to help.
                    </p>
                    <Button className="w-full font-poppins" asChild>
                      <Link href="#contact">Contact the Events Team</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              {/* Event Proposal Form */}
              <EventProposalForm />

              {/* Review Process */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 font-poppins">Review Process</h2>
                <div className="space-y-6">
                  {reviewSteps.map((step) => (
                    <div
                      key={step.number}
                      className="flex items-start gap-4 p-4 border border-border/50 rounded-lg bg-card/20 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold shrink-0 font-poppins">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="font-medium mb-1 font-poppins">{step.title}</h3>
                        <p className="text-muted-foreground font-roboto">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Example Event Types */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 font-poppins">Example Event Types</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {eventTypes.map((type) => (
                    <Card
                      key={type.title}
                      className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift overflow-hidden"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={type.image || "/placeholder.svg"}
                          alt={type.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-full p-4">
                          <h3 className="text-xl font-bold mb-1 font-poppins">{type.title}</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-muted-foreground mb-3 font-roboto">{type.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-primary" />
                            <span className="font-roboto">{type.attendees} attendees</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-primary" />
                            <span className="font-roboto">{type.duration}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Success Stories */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 font-poppins">Success Stories</h2>
                <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="border-l-4 border-primary/50 pl-4">
                        <p className="italic text-muted-foreground mb-3 font-roboto">
                          "I proposed a workshop on building autonomous agents with Python, despite not being an expert.
                          The team helped refine my idea and connected me with a co-presenter. The event was a huge
                          success with over 40 attendees!"
                        </p>
                        <p className="font-medium font-poppins">Miguel Ferreira, Software Developer</p>
                      </div>

                      <div className="border-l-4 border-primary/50 pl-4">
                        <p className="italic text-muted-foreground mb-3 font-roboto">
                          "Our AI ethics roundtable started as a community proposal and has now become a regular
                          quarterly event. It's been amazing to see how a simple idea evolved into an important
                          discussion forum for the Lisbon AI community."
                        </p>
                        <p className="font-medium font-poppins">Ana Costa, Ethics Researcher</p>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <Badge className="px-3 py-1 font-poppins">
                        <CheckCircle2 className="h-4 w-4 mr-1" />
                        <span>Over 60% of our events come from community proposals</span>
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
