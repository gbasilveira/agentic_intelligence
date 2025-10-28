import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter } from "lucide-react"

interface Contributor {
  id: string
  name: string
  role: string
  image: string
  github?: string
  linkedin?: string
  twitter?: string
}

interface ProjectContributorsProps {
  leadContributors: Contributor[]
  contributors: Contributor[]
  totalCount: number
}

export default function ProjectContributors({ leadContributors, contributors, totalCount }: ProjectContributorsProps) {
  return (
    <div className="space-y-8">
      {/* Lead Contributors */}
      <div>
        <h2 className="text-2xl font-bold mb-6 font-poppins">Lead Contributors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadContributors.map((contributor) => (
            <Card
              key={contributor.id}
              className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={contributor.image || "/placeholder.svg"}
                      alt={contributor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1 font-poppins">{contributor.name}</h3>
                  <p className="text-primary mb-3 font-roboto">{contributor.role}</p>

                  <div className="flex justify-center space-x-2 mb-4">
                    {contributor.github && (
                      <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                        <Link href={contributor.github}>
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </Button>
                    )}
                    {contributor.linkedin && (
                      <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                        <Link href={contributor.linkedin}>
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </Button>
                    )}
                    {contributor.twitter && (
                      <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                        <Link href={contributor.twitter}>
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      </Button>
                    )}
                  </div>

                  <Button variant="outline" size="sm" asChild className="w-full font-poppins">
                    <Link href={`/community/members/${contributor.id}`}>View Profile</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Other Contributors */}
      <div>
        <h2 className="text-2xl font-bold mb-6 font-poppins">Contributors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributors.map((contributor) => (
            <Card
              key={contributor.id}
              className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift"
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={contributor.image || "/placeholder.svg"}
                      alt={contributor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate font-poppins">{contributor.name}</h4>
                    <p className="text-sm text-muted-foreground truncate font-roboto">{contributor.role}</p>
                  </div>
                  <Button variant="ghost" size="sm" asChild className="shrink-0 font-poppins">
                    <Link href={`/community/members/${contributor.id}`}>View</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {totalCount > leadContributors.length + contributors.length && (
          <div className="mt-6 text-center">
            <Badge className="mb-4 font-poppins">
              +{totalCount - (leadContributors.length + contributors.length)} more contributors
            </Badge>
            <Button variant="outline" className="font-poppins">
              View All Contributors
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
