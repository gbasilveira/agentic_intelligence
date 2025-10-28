import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, BookOpen, Share2, Zap, MessageSquare, Linkedin, Twitter, MessagesSquare } from "lucide-react"

export default function CommunitySection() {
  const benefits = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Networking",
      description: "Connect with professionals and enthusiasts in the AI field",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Exclusive Content",
      description: "Access to resources, tutorials, and insights not available elsewhere",
    },
    {
      icon: <Share2 className="h-6 w-6 text-primary" />,
      title: "Collaboration",
      description: "Opportunities to work on projects with other community members",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Early Access",
      description: "Be the first to learn about new developments in agentic AI",
    },
  ]

  const channels = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      name: "Discord",
      url: "#discord",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "#linkedin",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      url: "#twitter",
    },
    {
      icon: <MessagesSquare className="h-5 w-5" />,
      name: "Meetup",
      url: "#meetup",
    },
  ]

  return (
    <section id="community" className="section-padding w-full bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-muted-foreground">
            Become part of Lisbon's first community dedicated to agentic AI and help shape the future of autonomous
            systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 bg-primary/10 p-2 rounded-full w-fit">{benefit.icon}</div>
                      <h4 className="text-lg font-medium mb-2">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
              <div className="flex flex-wrap gap-4">
                {channels.map((channel, index) => (
                  <Button key={index} variant="outline" asChild className="gap-2">
                    <Link href={channel.url}>
                      {channel.icon}
                      <span>{channel.name}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div id="join">
            <Card className="border border-primary/20 bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Registration Form</h3>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your full name" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="experience" className="text-sm font-medium">
                      Experience with AI
                    </label>
                    <select
                      id="experience"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select your experience level</option>
                      <option value="beginner">Beginner - Just curious</option>
                      <option value="intermediate">Intermediate - Some experience</option>
                      <option value="advanced">Advanced - Working professionally</option>
                      <option value="expert">Expert - Deep expertise</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interests" className="text-sm font-medium">
                      What interests you most about AI agents?
                    </label>
                    <Textarea id="interests" placeholder="Tell us what you're most excited to learn or discuss" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="referral" className="text-sm font-medium">
                      How did you find us?
                    </label>
                    <Input id="referral" placeholder="Social media, friend, event, etc." />
                  </div>

                  <Button type="submit" className="w-full">
                    Join the Community
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
