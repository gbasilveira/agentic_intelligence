"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle } from "lucide-react"

interface EventRegistrationFormProps {
  event: {
    id: string
    title: string
    date: string
    price: string
  }
}

export default function EventRegistrationForm({ event }: EventRegistrationFormProps) {
  const [isRegistered, setIsRegistered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsRegistered(true)
    }, 1500)
  }

  if (isRegistered) {
    return (
      <Card className="border border-primary/30 bg-primary/5 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg font-poppins flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-primary" />
            Registration Confirmed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 font-roboto">
            You're all set for <strong className="text-foreground">{event.title}</strong> on{" "}
            <strong className="text-foreground">{event.date}</strong>.
          </p>
          <p className="text-muted-foreground mb-6 font-roboto">
            We've sent a confirmation email with all the details. Looking forward to seeing you there!
          </p>
          <div className="flex flex-col gap-3">
            <Button variant="outline" className="w-full font-poppins">
              Manage Registration
            </Button>
            <Button variant="outline" className="w-full font-poppins">
              Add to Calendar
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border border-primary/20 bg-card/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg font-poppins">Register for this Event</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium font-poppins">
              Full Name
            </label>
            <Input id="name" placeholder="Your name" required className="font-roboto" />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium font-poppins">
              Email
            </label>
            <Input id="email" type="email" placeholder="your.email@example.com" required className="font-roboto" />
          </div>

          <div className="space-y-2">
            <label htmlFor="organization" className="text-sm font-medium font-poppins">
              Organization (Optional)
            </label>
            <Input id="organization" placeholder="Company or institution" className="font-roboto" />
          </div>

          <div className="space-y-2">
            <label htmlFor="experience" className="text-sm font-medium font-poppins">
              Experience with AI
            </label>
            <select
              id="experience"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-roboto"
            >
              <option value="">Select your experience level</option>
              <option value="beginner">Beginner - Just curious</option>
              <option value="intermediate">Intermediate - Some experience</option>
              <option value="advanced">Advanced - Working professionally</option>
              <option value="expert">Expert - Deep expertise</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="expectations" className="text-sm font-medium font-poppins">
              What do you hope to learn? (Optional)
            </label>
            <Textarea
              id="expectations"
              placeholder="Tell us what you're most interested in learning"
              className="font-roboto"
            />
          </div>

          <div className="flex items-start space-x-2 pt-2">
            <Checkbox id="terms" required />
            <label htmlFor="terms" className="text-sm text-muted-foreground leading-tight cursor-pointer font-roboto">
              I agree to the event terms and conditions, including the recording of sessions and the privacy policy.
            </label>
          </div>

          <div className="pt-2">
            <Button type="submit" className="w-full font-poppins" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register Now"}
            </Button>
            <p className="text-xs text-muted-foreground mt-2 text-center font-roboto">
              {event.price === "Free" ? "This event is free to attend" : `Price: ${event.price}`}
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
