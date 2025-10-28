"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare } from "lucide-react"

export default function CommentSection() {
  const [comments] = useState([
    {
      id: 1,
      author: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40&query=person with glasses",
      date: "May 21, 2025",
      content:
        "This is a fascinating article! I've been following the development of autonomous agents for a while, and it's amazing to see how quickly the field is advancing. I'm particularly interested in the ethical implications discussed here.",
      likes: 12,
    },
    {
      id: 2,
      author: "Sofia Chen",
      avatar: "/placeholder.svg?height=40&width=40&query=woman with short hair",
      date: "May 22, 2025",
      content:
        "Great overview of the current state of AI agents. I work in healthcare, and we're already seeing some of these applications in patient monitoring and diagnostics. The potential for improving care is enormous, but so are the challenges around privacy and data security.",
      likes: 8,
    },
  ])

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-8 font-poppins flex items-center">
        <MessageSquare className="h-5 w-5 mr-2" />
        Comments ({comments.length})
      </h3>

      {/* Comment form */}
      <div className="mb-12">
        <Textarea placeholder="Share your thoughts..." className="mb-4 min-h-[120px] font-roboto" />
        <Button className="font-poppins">Post Comment</Button>
      </div>

      {/* Comments list */}
      <div className="space-y-8">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-border/30 pb-8">
            <div className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.author} />
                <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium font-poppins">{comment.author}</h4>
                  <span className="text-sm text-muted-foreground font-roboto">{comment.date}</span>
                </div>

                <p className="text-foreground mb-4 font-roboto">{comment.content}</p>

                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground hover:text-primary">
                    Like ({comment.likes})
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground hover:text-primary">
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="font-poppins">
          Load More Comments
        </Button>
      </div>
    </div>
  )
}
