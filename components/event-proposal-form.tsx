"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarIcon, Clock, MapPin, Users, CheckCircle } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function EventProposalForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [date, setDate] = useState<Date>()
  const [alternateDate, setAlternateDate] = useState<Date>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <Card className="border border-primary/30 bg-primary/5 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl font-poppins flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-primary" />
            Proposal Submitted Successfully
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 font-roboto">
            Thank you for your event proposal! Our team will review your submission and get back to you within 5-7
            business days.
          </p>
          <p className="text-muted-foreground mb-6 font-roboto">
            We've sent a confirmation email with a copy of your proposal. If you have any questions or need to make
            changes to your submission, please contact our events team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="font-poppins" asChild>
              <a href="/events">Browse Upcoming Events</a>
            </Button>
            <Button variant="outline" className="font-poppins">
              Submit Another Proposal
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl font-poppins">Event Proposal Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium font-poppins">Basic Information</h3>

            <div className="space-y-2">
              <label htmlFor="event-title" className="text-sm font-medium font-poppins">
                Event Title <span className="text-primary">*</span>
              </label>
              <Input id="event-title" placeholder="Enter a clear, descriptive title" required className="font-roboto" />
            </div>

            <div className="space-y-2">
              <label htmlFor="event-type" className="text-sm font-medium font-poppins">
                Event Type <span className="text-primary">*</span>
              </label>
              <select
                id="event-type"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-roboto"
              >
                <option value="">Select event type</option>
                <option value="workshop">Workshop</option>
                <option value="meetup">Meetup</option>
                <option value="hackathon">Hackathon</option>
                <option value="conference">Conference</option>
                <option value="panel">Panel Discussion</option>
                <option value="other">Other (specify in description)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="event-description" className="text-sm font-medium font-poppins">
                Event Description <span className="text-primary">*</span>
              </label>
              <Textarea
                id="event-description"
                placeholder="Describe your event, its goals, and what attendees will learn or experience"
                required
                className="min-h-[120px] font-roboto"
              />
            </div>
          </div>

          {/* Date and Time */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium font-poppins">Date and Time</h3>

            <div className="space-y-2">
              <label className="text-sm font-medium font-poppins">
                Preferred Date <span className="text-primary">*</span>
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground",
                      "font-roboto",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Select date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium font-poppins">Alternate Date (Optional)</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !alternateDate && "text-muted-foreground",
                      "font-roboto",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {alternateDate ? format(alternateDate, "PPP") : <span>Select alternate date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={alternateDate}
                    onSelect={setAlternateDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="start-time" className="text-sm font-medium font-poppins">
                  Start Time <span className="text-primary">*</span>
                </label>
                <div className="flex">
                  <div className="relative flex-1">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="start-time" type="time" required className="pl-10 font-roboto" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="end-time" className="text-sm font-medium font-poppins">
                  End Time <span className="text-primary">*</span>
                </label>
                <div className="flex">
                  <div className="relative flex-1">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="end-time" type="time" required className="pl-10 font-roboto" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium font-poppins">Location</h3>

            <div className="space-y-2">
              <label htmlFor="location-preference" className="text-sm font-medium font-poppins">
                Location Preference <span className="text-primary">*</span>
              </label>
              <select
                id="location-preference"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-roboto"
              >
                <option value="">Select location preference</option>
                <option value="in-person">In-person</option>
                <option value="online">Online</option>
                <option value="hybrid">Hybrid (both in-person and online)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="venue-suggestion" className="text-sm font-medium font-poppins">
                Venue Suggestion (Optional)
              </label>
              <div className="flex">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="venue-suggestion"
                    placeholder="Suggest a venue if you have one in mind"
                    className="pl-10 font-roboto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Audience and Capacity */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium font-poppins">Audience and Capacity</h3>

            <div className="space-y-2">
              <label htmlFor="target-audience" className="text-sm font-medium font-poppins">
                Target Audience <span className="text-primary">*</span>
              </label>
              <Textarea
                id="target-audience"
                placeholder="Describe who this event is for (e.g., beginners, experienced developers, researchers)"
                required
                className="font-roboto"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="expected-capacity" className="text-sm font-medium font-poppins">
                Expected Capacity <span className="text-primary">*</span>
              </label>
              <div className="flex">
                <div className="relative flex-1">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="expected-capacity"
                    type="number"
                    min="1"
                    placeholder="Estimated number of attendees"
                    required
                    className="pl-10 font-roboto"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="experience-level" className="text-sm font-medium font-poppins">
                Experience Level <span className="text-primary">*</span>
              </label>
              <select
                id="experience-level"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-roboto"
              >
                <option value="">Select required experience level</option>
                <option value="beginner">Beginner - No prior knowledge required</option>
                <option value="intermediate">Intermediate - Basic understanding helpful</option>
                <option value="advanced">Advanced - Specific knowledge required</option>
                <option value="all">All Levels - Suitable for everyone</option>
              </select>
            </div>
          </div>

          {/* Speaker/Organizer Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium font-poppins">Speaker/Organizer Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="organizer-name" className="text-sm font-medium font-poppins">
                  Your Name <span className="text-primary">*</span>
                </label>
                <Input id="organizer-name" required className="font-roboto" />
              </div>

              <div className="space-y-2">
                <label htmlFor="organizer-email" className="text-sm font-medium font-poppins">
                  Email <span className="text-primary">*</span>
                </label>
                <Input id="organizer-email" type="email" required className="font-roboto" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="organizer-bio" className="text-sm font-medium font-poppins">
                Your Bio <span className="text-primary">*</span>
              </label>
              <Textarea
                id="organizer-bio"
                placeholder="Brief description of yourself and your experience/qualifications"
                required
                className="font-roboto"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="additional-speakers" className="text-sm font-medium font-poppins">
                Additional Speakers (Optional)
              </label>
              <Textarea
                id="additional-speakers"
                placeholder="List any additional speakers or presenters with their names, roles, and brief bios"
                className="font-roboto"
              />
            </div>
          </div>

          {/* Additional Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium font-poppins">Additional Details</h3>

            <div className="space-y-2">
              <label htmlFor="resources-needed" className="text-sm font-medium font-poppins">
                Resources Needed
              </label>
              <Textarea
                id="resources-needed"
                placeholder="Describe any equipment, materials, or support you'll need for the event"
                className="font-roboto"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="event-format" className="text-sm font-medium font-poppins">
                Event Format <span className="text-primary">*</span>
              </label>
              <Textarea
                id="event-format"
                placeholder="Describe the format and structure of your event (e.g., presentation followed by Q&A, hands-on workshop, panel discussion)"
                required
                className="font-roboto"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="additional-notes" className="text-sm font-medium font-poppins">
                Additional Notes
              </label>
              <Textarea
                id="additional-notes"
                placeholder="Any other information that might be helpful for us to know"
                className="font-roboto"
              />
            </div>
          </div>

          {/* Terms and Submission */}
          <div className="space-y-4 pt-2">
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" required />
              <label htmlFor="terms" className="text-sm text-muted-foreground leading-tight cursor-pointer font-roboto">
                I understand that this is a proposal and final approval is subject to review. I agree to work with the
                Agentic Intelligence Lisbon team on planning and promoting this event if approved.
              </label>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="code-of-conduct" required />
              <label
                htmlFor="code-of-conduct"
                className="text-sm text-muted-foreground leading-tight cursor-pointer font-roboto"
              >
                I agree to abide by the Agentic Intelligence Lisbon Community Code of Conduct and ensure my event
                provides a welcoming and inclusive environment for all participants.
              </label>
            </div>

            <Button type="submit" className="w-full font-poppins" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Event Proposal"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
