import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Twitter } from "lucide-react"

interface AuthorCardProps {
  author: {
    name: string
    role: string
    bio: string
    image: string
    twitter?: string
  }
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="mt-12 p-8 border border-border/50 rounded-xl bg-card/30 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
          <Image src={author.image || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold mb-1 font-poppins">{author.name}</h3>
          <p className="text-primary mb-3 font-roboto">{author.role}</p>
          <p className="text-muted-foreground mb-4 font-roboto leading-relaxed">{author.bio}</p>

          {author.twitter && (
            <Button variant="outline" size="sm" className="gap-2">
              <Twitter className="h-4 w-4 text-primary" />
              <span className="font-roboto">Follow on Twitter</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
