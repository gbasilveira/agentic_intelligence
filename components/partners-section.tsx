import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function PartnersSection() {
  const partners = [
    {
      name: "Tech Company",
      logo: "/abstract-blue-tech.png",
      url: "#partner1",
    },
    {
      name: "University",
      logo: "/placeholder.svg?height=80&width=200&query=university logo with blue theme",
      url: "#partner2",
    },
    {
      name: "Research Lab",
      logo: "/placeholder.svg?height=80&width=200&query=research lab logo with blue theme",
      url: "#partner3",
    },
    {
      name: "Startup Incubator",
      logo: "/placeholder.svg?height=80&width=200&query=startup incubator logo with blue theme",
      url: "#partner4",
    },
    {
      name: "AI Foundation",
      logo: "/placeholder.svg?height=80&width=200&query=AI foundation logo with blue theme",
      url: "#partner5",
    },
    {
      name: "Tech Hub",
      logo: "/placeholder.svg?height=80&width=200&query=tech hub logo with blue theme",
      url: "#partner6",
    },
  ]

  return (
    <section id="partners" className="section-padding w-full bg-background/90">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partners</h2>
          <p className="text-lg text-muted-foreground">
            We collaborate with leading organizations to advance the field of agentic AI.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {partners.map((partner, index) => (
            <Link
              key={index}
              href={partner.url}
              className="flex items-center justify-center p-4 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg hover:border-primary/50 transition-all duration-300 group"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
          ))}
        </div>

        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Become a Partner</h3>
          <p className="text-muted-foreground mb-6">
            Interested in partnering with Agentic Intelligence - Lisbon? We're always looking for organizations that
            share our vision for the future of AI.
          </p>
          <Button asChild>
            <Link href="#contact" className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              <span>Contact Us</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
