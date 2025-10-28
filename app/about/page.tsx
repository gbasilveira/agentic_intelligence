import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, MapPin, Users, Lightbulb, Building, Heart } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import ScrollReveal from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us | Agentic Intelligence Lisbon",
  description:
    "Learn about Agentic Intelligence Lisbon, our mission, community, and vision for the future of autonomous AI systems in Portugal.",
}

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center min-h-screen relative overflow-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="w-full relative">
        <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
          <Image
            src="/lisbon-skyline.png"
            alt="Lisbon skyline with the Tagus river"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex flex-col items-center justify-center text-center p-6">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                About <span className="text-blue-400">Agentic Intelligence</span> Lisbon
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Exploring the future of autonomous artificial intelligence, together.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-500">Our Story</h2>
              <div className="space-y-4 text-gray-200">
                <p>
                  Agentic Intelligence Lisbon (AIL) was born from a vision to create a thriving ecosystem for autonomous
                  AI systems in Portugal's capital. As the first community dedicated to Agentic AI in Lisbon, we
                  recognised a growing need to unite researchers, developers, entrepreneurs, and enthusiasts passionate
                  about pushing the boundaries of what artificial intelligence can accomplish.
                </p>
                <p>
                  Our logo tells our story at a glance: the flowing curve above the stylised "Ai" letters represents the
                  iconic Tagus River coastline that defines Lisbon's landscape. Just as the Tagus has historically
                  connected Lisbon to the world, AIL connects Lisbon's tech community to the future of autonomous
                  intelligence.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/ai-community-meeting.png"
                alt="Agentic Intelligence Lisbon community meeting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Our Mission Section */}
      <section className="w-full bg-gradient-to-b from-blue-900/30 to-black/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-400">Our Mission</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-200">
              We believe that agentic AI systems, intelligent software that can perceive, decide, and act autonomously
              to achieve specific goals, represent the next frontier in artificial intelligence. These systems go beyond
              traditional AI models by incorporating planning capabilities, reasoning, and independent execution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Connect",
                  description: "Professionals, academics, and enthusiasts interested in agentic intelligence",
                  icon: <Users className="h-8 w-8 text-blue-400" />,
                },
                {
                  title: "Cultivate",
                  description: "Knowledge sharing and open collaboration in a field that's rapidly evolving",
                  icon: <Lightbulb className="h-8 w-8 text-blue-400" />,
                },
                {
                  title: "Create",
                  description: "Opportunities for experimentation, learning, and growth",
                  icon: <ArrowRight className="h-8 w-8 text-blue-400" />,
                },
                {
                  title: "Contribute",
                  description: "To making Lisbon a recognised hub for advanced AI development",
                  icon: <Building className="h-8 w-8 text-blue-400" />,
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-blue-950/50 border-blue-800/50 hover:border-blue-600/70 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-blue-900/50">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-blue-300">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Community Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/ai-collaboration.png" alt="AI collaboration session" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-500">Our Community</h2>
              <div className="space-y-4 text-gray-200">
                <p>
                  AIL welcomes everyone from seasoned AI professionals to curious newcomers. Whether you're building
                  cutting-edge autonomous systems, researching the theoretical foundations of agentic AI, or simply
                  fascinated by the potential of this technology, you'll find your place here.
                </p>
                <p className="font-semibold text-blue-300">Our community thrives on:</p>
                <ul className="space-y-3">
                  {[
                    { title: "Practical innovation", desc: "Turning theoretical concepts into working applications" },
                    {
                      title: "Accessible knowledge",
                      desc: "Making complex concepts understandable to diverse audiences",
                    },
                    { title: "Open collaboration", desc: "Sharing insights and building together" },
                    { title: "Ethical experimentation", desc: "Exploring new possibilities responsibly" },
                  ].map((value, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 text-blue-400">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-bold text-blue-300">{value.title}:</span> {value.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Our Home Section */}
      <section className="w-full bg-gradient-to-b from-blue-900/30 to-black/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-400">Our Home</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/ai-hub-lisbon.png"
                    alt="Unicorn Factory's AI Hub in Lisbon"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-200">
                  We're proudly headquartered at the Unicorn Factory's AI Hub in the heart of Lisbon. This vibrant space
                  provides the perfect environment for our community to gather, learn, and collaborate.
                </p>
                <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800/50">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-400 mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-blue-300 mb-2">Visit Us</h3>
                      <p className="text-gray-200">
                        Unicorn Factory's AI Hub
                        <br />
                        Rua João Saraiva, 38
                        <br />
                        1700-250 Lisboa, Portugal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Foundation Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-500">Our Foundation</h2>
              <div className="space-y-4 text-gray-200">
                <p>
                  AIL is proudly backed by GibraSys, a specialised AI Governance, Risk, and Compliance agency committed
                  to the responsible development of artificial intelligence. This partnership ensures that our community
                  benefits from industry expertise while maintaining a focus on ethical and responsible AI advancement.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/ai-ethics.png" alt="AI ethics and governance" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Join Us Section */}
      <section className="w-full bg-gradient-to-b from-blue-900/40 to-blue-950/40 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">Join Us</h2>
            <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-200">
              Whether you're a seasoned AI professional, a student exploring career paths, or simply curious about the
              future of autonomous systems, Agentic Intelligence Lisbon welcomes you. Together, we're building more than
              just a community, we're creating a hub for the next generation of intelligent systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/events">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Upcoming Events
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/community">
                <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950/50">
                  Meet Our Community
                  <Users className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950/50">
                  Become a Member
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
