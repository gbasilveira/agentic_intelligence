import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Linkedin, Globe } from "lucide-react"

interface Speaker {
  name: string
  role: string
  bio: string
  image: string
  twitter?: string
  linkedin?: string
  website?: string
}

interface EventSpeakersProps {
  speakers: Speaker[]
}

export default function EventSpeakers({ speakers }: EventSpeakersProps) {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold font-poppins">Event Speakers</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {speakers.map((speaker, index) => (
          <Card
            key={index}
            className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift"
          >
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                  <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-xl font-bold mb-1 font-poppins">{speaker.name}</h4>
                  <p className="text-primary mb-3 font-roboto">{speaker.role}</p>
                  <p className="text-muted-foreground mb-4 font-roboto leading-relaxed">{speaker.bio}</p>

                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {speaker.twitter && (
                      <Button variant="outline" size="sm" className="gap-2">
                        <Twitter className="h-4 w-4 text-primary" />
                        <span className="font-roboto">Twitter</span>
                      </Button>
                    )}
                    {speaker.linkedin && (
                      <Button variant="outline" size="sm" className="gap-2">
                        <Linkedin className="h-4 w-4 text-primary" />
                        <span className="font-roboto">LinkedIn</span>
                      </Button>
                    )}
                    {speaker.website && (
                      <Button variant="outline" size="sm" className="gap-2">
                        <Globe className="h-4 w-4 text-primary" />
                        <span className="font-roboto">Website</span>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
