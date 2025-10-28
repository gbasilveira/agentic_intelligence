"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, MessageSquare, Flag, MoreHorizontal, Send } from "lucide-react"

interface ProjectDiscussionProps {
  projectId: string
}

export default function ProjectDiscussion({ projectId }: ProjectDiscussionProps) {
  const [newMessage, setNewMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // In a real app, these would be loaded from a database
  const [threads, setThreads] = useState([
    {
      id: "thread1",
      author: {
        name: "Maria Silva",
        avatar: "/confident-woman-headshot.png",
        role: "Lead Researcher",
      },
      date: "2 weeks ago",
      content:
        "We've just released version 0.5.0 with improved safety mechanisms. Please test and provide feedback on the new constraint system!",
      likes: 8,
      replies: 3,
    },
    {
      id: "thread2",
      author: {
        name: "Carlos Mendes",
        avatar: "/confident-professional.png",
        role: "AI Engineer",
      },
      date: "1 week ago",
      content:
        "I'm working on integrating the framework with ROS for robotics applications. If anyone has experience with this, I'd love to collaborate.",
      likes: 5,
      replies: 2,
    },
    {
      id: "thread3",
      author: {
        name: "Ana Costa",
        avatar: "/placeholder.svg?height=40&width=40&query=woman with glasses",
        role: "Ethics Researcher",
      },
      date: "3 days ago",
      content:
        "The new ethics guidelines for agent development are now available in the documentation. Please review and provide feedback.",
      likes: 6,
      replies: 1,
    },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      const newThread = {
        id: `thread${Date.now()}`,
        author: {
          name: "You",
          avatar: "/placeholder.svg?height=40&width=40&query=person silhouette",
          role: "Contributor",
        },
        date: "Just now",
        content: newMessage,
        likes: 0,
        replies: 0,
      }

      setThreads([newThread, ...threads])
      setNewMessage("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="space-y-8">
      {/* New Thread Form */}
      <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4 font-poppins">Discussion</h3>
          <form onSubmit={handleSubmit}>
            <Textarea
              placeholder="Start a new discussion thread..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="min-h-[120px] mb-4 font-roboto"
            />
            <div className="flex justify-end">
              <Button type="submit" disabled={isSubmitting || !newMessage.trim()} className="gap-2 font-poppins">
                <Send className="h-4 w-4" />
                <span>{isSubmitting ? "Posting..." : "Post"}</span>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Discussion Threads */}
      <div className="space-y-4">
        {threads.map((thread) => (
          <Card
            key={thread.id}
            className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={thread.author.avatar || "/placeholder.svg"} alt={thread.author.name} />
                  <AvatarFallback>{thread.author.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="font-medium font-poppins">{thread.author.name}</h4>
                    <Badge variant="outline" className="font-roboto">
                      {thread.author.role}
                    </Badge>
                    <span className="text-sm text-muted-foreground font-roboto">{thread.date}</span>
                  </div>

                  <p className="text-foreground mb-4 font-roboto">{thread.content}</p>

                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 text-muted-foreground hover:text-primary gap-1 font-poppins"
                    >
                      <ThumbsUp className="h-4 w-4" />
                      <span>{thread.likes}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 text-muted-foreground hover:text-primary gap-1 font-poppins"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>
                        {thread.replies} {thread.replies === 1 ? "Reply" : "Replies"}
                      </span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 text-muted-foreground hover:text-primary font-poppins"
                    >
                      Reply
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 text-muted-foreground hover:text-primary font-poppins"
                    >
                      <Flag className="h-4 w-4" />
                      <span className="sr-only">Report</span>
                    </Button>
                  </div>
                </div>

                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" className="font-poppins">
          Load More
        </Button>
      </div>
    </div>
  )
}
