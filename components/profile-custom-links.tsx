"use client"

import type React from "react"
import { Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CustomLink {
  title: string
  url: string
}

interface CustomLinksProps {
  links: CustomLink[]
  onChange: (links: CustomLink[]) => void
}

export default function ProfileCustomLinks({ links, onChange }: CustomLinksProps) {
  const handleChange = (index: number, field: keyof CustomLink) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLinks = [...links]
    newLinks[index] = {
      ...newLinks[index],
      [field]: e.target.value,
    }
    onChange(newLinks)
  }

  const addLink = () => {
    onChange([...links, { title: "", url: "" }])
  }

  const removeLink = (index: number) => {
    const newLinks = [...links]
    newLinks.splice(index, 1)
    onChange(newLinks)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Custom Links</h3>
        <Button type="button" variant="outline" size="sm" onClick={addLink} className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          Add Link
        </Button>
      </div>

      <div className="space-y-4">
        {links.map((link, index) => (
          <div key={index} className="flex gap-3 items-start">
            <div className="grid gap-2 flex-1">
              <Label htmlFor={`link-title-${index}`}>Link Title</Label>
              <Input
                id={`link-title-${index}`}
                placeholder="My Website"
                value={link.title}
                onChange={handleChange(index, "title")}
              />
            </div>
            <div className="grid gap-2 flex-1">
              <Label htmlFor={`link-url-${index}`}>URL</Label>
              <Input
                id={`link-url-${index}`}
                placeholder="https://example.com"
                value={link.url}
                onChange={handleChange(index, "url")}
              />
            </div>
            <Button type="button" variant="ghost" size="icon" onClick={() => removeLink(index)} className="mt-8">
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Remove link</span>
            </Button>
          </div>
        ))}

        {links.length === 0 && (
          <div className="text-center py-4 text-muted-foreground">
            No custom links added yet. Click "Add Link" to create one.
          </div>
        )}
      </div>
    </div>
  )
}
