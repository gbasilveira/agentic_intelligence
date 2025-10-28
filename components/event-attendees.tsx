"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Users, Filter, MessageSquare, UserPlus, Mail } from "lucide-react"

interface EventAttendeesProps {
  eventId: string
  attendees: number
  capacity: number
}

export default function EventAttendees({ eventId, attendees, capacity }: EventAttendeesProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // In a real app, these would be loaded from a database
  const attendeesList = [
    {
      id: "user1",
      name: "Sofia Almeida",
      role: "Speaker",
      company: "TechAI",
      avatar: "/confident-gaze.png",
      isConnected: true,
    },
    {
      id: "user2",
      name: "Carlos Mendes",
      role: "Speaker",
      company: "AgentLabs",
      avatar: "/placeholder.svg?height=40&width=40&query=professional headshot of man with glasses",
      isConnected: false,
    },
    {
      id: "user3",
      name: "Ana Costa",
      role: "Organizer",
      company: "Agentic Intelligence Lisbon",
      avatar: "/placeholder.svg?height=40&width=40&query=woman with glasses",
      isConnected: true,
    },
    {
      id: "user4",
      name: "Miguel Ferreira",
      role: "Attendee",
      company: "AI Solutions",
      avatar: "/thoughtful-bearded-man.png",
      isConnected: false,
    },
    {
      id: "user5",
      name: "Joana Silva",
      role: "Attendee",
      company: "University of Lisbon",
      avatar: "/placeholder.svg?height=40&width=40&query=woman with long hair",
      isConnected: false,
    },
    {
      id: "user6",
      name: "Pedro Santos",
      role: "Attendee",
      company: "Tech Startup",
      avatar: "/placeholder.svg?height=40&width=40&query=young man with casual style",
      isConnected: false,
    },
    {
      id: "user7",
      name: "Luísa Rodrigues",
      role: "Attendee",
      company: "Data Science Corp",
      avatar: "/placeholder.svg?height=40&width=40&query=professional woman with medium hair",
      isConnected: true,
    },
    {
      id: "user8",
      name: "Ricardo Oliveira",
      role: "Attendee",
      company: "AI Research Institute",
      avatar: "/placeholder.svg?height=40&width=40&query=man with glasses and formal attire",
      isConnected: false,
    },
  ]

  const filteredAttendees = attendeesList.filter(
    (attendee) =>
      attendee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attendee.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attendee.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold font-poppins">Event Attendees</h3>
        <Badge variant="outline" className="font-poppins">
          {attendees} / {capacity} Registered
        </Badge>
      </div>

      <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search attendees..."
                className="pl-9 font-roboto"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="gap-2 font-poppins">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredAttendees.map((attendee) => (
              <Card
                key={attendee.id}
                className="border border-border/50 bg-card/10 hover:bg-card/30 hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={attendee.avatar || "/placeholder.svg"} alt={attendee.name} />
                      <AvatarFallback>{attendee.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate font-poppins">{attendee.name}</h4>
                      <p className="text-sm text-muted-foreground truncate font-roboto">{attendee.company}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <Badge variant="outline" className="font-roboto">
                      {attendee.role}
                    </Badge>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MessageSquare className="h-4 w-4" />
                        <span className="sr-only">Message</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        {attendee.isConnected ? (
                          <Users className="h-4 w-4 text-primary" />
                        ) : (
                          <UserPlus className="h-4 w-4" />
                        )}
                        <span className="sr-only">{attendee.isConnected ? "Connected" : "Connect"}</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAttendees.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-2 font-roboto">No attendees found matching your search</p>
              <Button variant="outline" onClick={() => setSearchQuery("")} className="font-poppins">
                Clear Search
              </Button>
            </div>
          )}

          {filteredAttendees.length > 0 && filteredAttendees.length < attendees && (
            <div className="text-center mt-6">
              <Button variant="outline" className="font-poppins">
                Load More Attendees
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
        <CardContent className="p-6">
          <h4 className="text-lg font-semibold mb-4 font-poppins">Connect with Attendees</h4>
          <p className="text-muted-foreground mb-4 font-roboto">
            Networking is a key part of our events. Use this platform to connect with other attendees, exchange ideas,
            and build professional relationships.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="gap-2 font-poppins">
              <Mail className="h-4 w-4" />
              <span>Email All Attendees</span>
            </Button>
            <Button variant="outline" className="gap-2 font-poppins">
              <Users className="h-4 w-4" />
              <span>Create Networking Group</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
