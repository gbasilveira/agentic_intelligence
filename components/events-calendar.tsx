"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from "lucide-react"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  category: string
  isFeatured?: boolean
}

interface EventsCalendarProps {
  events: Event[]
}

export default function EventsCalendar({ events }: EventsCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Helper functions for calendar
  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay()

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Format date strings to Date objects
  const parseDate = (dateStr: string) => {
    const [month, day, year] = dateStr.split(" ")[0].split(/[,-]/)
    const monthMap: { [key: string]: number } = {
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11,
    }
    return new Date(Number.parseInt(year), monthMap[month], Number.parseInt(day))
  }

  // Get events for the current month
  const currentMonthEvents = events.filter((event) => {
    const eventDate = parseDate(event.date)
    return eventDate.getMonth() === currentMonth.getMonth() && eventDate.getFullYear() === currentMonth.getFullYear()
  })

  // Map events to days
  const eventsByDay: { [key: number]: Event[] } = {}
  currentMonthEvents.forEach((event) => {
    const eventDate = parseDate(event.date)
    const day = eventDate.getDate()
    if (!eventsByDay[day]) {
      eventsByDay[day] = []
    }
    eventsByDay[day].push(event)
  })

  // Calendar generation
  const daysInMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth())
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth())
  const monthName = currentMonth.toLocaleString("default", { month: "long" })
  const year = currentMonth.getFullYear()

  const days = []
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="h-32 border border-border/30 bg-card/10 p-2"></div>)
  }

  // Add cells for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const hasEvents = eventsByDay[day] && eventsByDay[day].length > 0
    days.push(
      <div
        key={`day-${day}`}
        className={`h-32 border border-border/30 ${
          hasEvents ? "bg-primary/5" : "bg-card/10"
        } p-2 transition-colors hover:border-primary/30 relative overflow-hidden`}
      >
        <div className="flex justify-between items-start">
          <span className={`text-sm font-medium ${hasEvents ? "text-primary" : ""}`}>{day}</span>
          {hasEvents && (
            <Badge variant="outline" className="text-xs">
              {eventsByDay[day].length} {eventsByDay[day].length === 1 ? "event" : "events"}
            </Badge>
          )}
        </div>
        <div className="mt-1 space-y-1 overflow-y-auto max-h-[80px]">
          {hasEvents &&
            eventsByDay[day].map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="block text-xs p-1 rounded bg-primary/10 hover:bg-primary/20 transition-colors truncate"
              >
                {event.title}
              </Link>
            ))}
        </div>
      </div>,
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold font-poppins">
            {monthName} {year}
          </h2>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div>
        <div className="grid grid-cols-7 gap-1 mb-1">
          {weekdays.map((day) => (
            <div key={day} className="text-center py-2 font-medium text-sm bg-muted rounded-sm font-poppins">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">{days}</div>
      </div>

      {/* Events List for Selected Month */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 font-poppins">Events in {monthName}</h3>
        {currentMonthEvents.length > 0 ? (
          <div className="space-y-4">
            {currentMonthEvents.map((event) => (
              <Card
                key={event.id}
                className={`p-4 border ${
                  event.isFeatured ? "border-primary/30 bg-primary/5" : "border-border/50 bg-card/30"
                } hover:border-primary/50 transition-all duration-300 hover-lift`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="mb-2 font-poppins">{event.category}</Badge>
                    <h4 className="font-bold mb-2 font-poppins">{event.title}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-roboto">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-roboto">{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-roboto">{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="font-poppins" asChild>
                    <Link href={`/events/${event.id}`}>Details</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed border-border rounded-lg">
            <p className="text-muted-foreground font-roboto">No events scheduled for this month</p>
            <Button variant="outline" className="mt-4 font-poppins">
              Propose an Event
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
