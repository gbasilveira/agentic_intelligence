"use client"

import type React from "react"

import { X, Github, Linkedin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SocialLinksProps {
  links: {
    twitter: string
    github: string
    linkedin: string
  }
  onChange: (links: {
    twitter: string
    github: string
    linkedin: string
  }) => void
}

export default function ProfileSocialLinks({ links, onChange }: SocialLinksProps) {
  const handleChange = (platform: keyof typeof links) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...links,
      [platform]: e.target.value,
    })
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Social Links</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="twitter" className="flex items-center gap-2">
            <X className="h-4 w-4" />X / Twitter
          </Label>
          <div className="flex items-center">
            <span className="bg-muted px-3 py-2 text-sm border border-r-0 rounded-l-md">twitter.com/</span>
            <Input
              id="twitter"
              placeholder="username"
              value={links.twitter}
              onChange={handleChange("twitter")}
              className="rounded-l-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="github" className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            GitHub
          </Label>
          <div className="flex items-center">
            <span className="bg-muted px-3 py-2 text-sm border border-r-0 rounded-l-md">github.com/</span>
            <Input
              id="github"
              placeholder="username"
              value={links.github}
              onChange={handleChange("github")}
              className="rounded-l-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedin" className="flex items-center gap-2">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Label>
          <div className="flex items-center">
            <span className="bg-muted px-3 py-2 text-sm border border-r-0 rounded-l-md">linkedin.com/in/</span>
            <Input
              id="linkedin"
              placeholder="username"
              value={links.linkedin}
              onChange={handleChange("linkedin")}
              className="rounded-l-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

