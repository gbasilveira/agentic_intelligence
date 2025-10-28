"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, MessageSquare, Flag, MoreHorizontal, Send, PinIcon } from "lucide-react"

interface EventDiscussionProps {
  eventId: string
}

export default function EventDiscussion({ eventId }: EventDiscussionProps) {
  const [newMessage, setNewMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // In a real app, these would be loaded from a database
  const [threads, setThreads] = useState([
    {
      id: "thread1",
      author: {
        name: "Sofia Almeida",
        avatar: "/confident-gaze.png",
        role: "Speaker",
      },
      date: "June 10, 2025",
      content:
        "Hello everyone! I'm excited to be speaking at this workshop. If you have any specific topics you'd like me to cover in more depth, please let me know here!",
      likes: 12,
      replies: 3,
      isPinned: true,
    },
    {
      id: "thread2",
      author: {
        name: "Miguel Ferreira",
        avatar: "/thoughtful-bearded-man.png",
        role: "Attendee",
      },
      date: "June 11, 2025",
      content:
        "I'm particularly interested in learning about how to integrate reinforcement learning techniques into autonomous agents. Will this be covered in the workshop?",
      likes: 5,
      replies: 2,
      isPinned: false,
    },
    {
      id: "thread3",
      author: {
        name: "Ana Costa",
        avatar: "/placeholder.svg?height=40&width=40&query=woman with glasses",
        role: "Organizer",
      },
      date: "June 12, 2025",
      content:
        "Just a reminder to all attendees: please bring your laptops with Python installed. We'll provide a setup guide a few days before the event to make sure everyone has the necessary libraries installed.",
      likes: 8,
      replies: 1,
      isPinned: true,
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
          role: "Attendee",
        },
        date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        content: newMessage,
        likes: 0,
        replies: 0,
        isPinned: false,
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

      {/* Pinned Threads */}
      {threads.some((thread) => thread.isPinned) && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold font-poppins flex items-center">
            <PinIcon className="h-4 w-4 mr-2" />
            Pinned Discussions
          </h3>
          {threads
            .filter((thread) => thread.isPinned)
            .map((thread) => (
              <Card
                key={thread.id}
                className="border border-primary/20 bg-primary/5 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
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
      )}

      {/* Regular Threads */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold font-poppins">All Discussions</h3>
        {threads
          .filter((thread) => !thread.isPinned)
          .map((thread) => (
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
