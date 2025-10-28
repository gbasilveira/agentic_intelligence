"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSession } from "next-auth/react"
import { toast } from "@/components/ui/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProfileImageUploadProps {
  currentImage: string
  onImageChange: (imageUrl: string) => void
}

// Pre-defined avatar icons
const avatarIcons = [
  "/avatars/avatar-1.png",
  "/avatars/avatar-2.png",
  "/avatars/avatar-3.png",
  "/avatars/avatar-4.png",
  "/avatars/avatar-5.png",
  "/avatars/avatar-6.png",
]

const ProfileImageUpload = ({ currentImage, onImageChange }: ProfileImageUploadProps) => {
  const { data: session } = useSession()
  const [isUploading, setIsUploading] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Handle image upload
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive",
      })
      return
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      toast({
        title: "File too large",
        description: "Maximum file size is 5MB.",
        variant: "destructive",
      })
      return
    }

    try {
      setIsUploading(true)

      // Create form data
      const formData = new FormData()
      formData.append("file", file)

      // Upload to server
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${session?.accessToken || ""}`,
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      const data = await response.json()
      onImageChange(data.url)
      
      toast({
        title: "Upload successful",
        description: "Your profile image has been updated.",
      })
    } catch (error) {
      console.error("Error uploading image:", error)
      toast({
        title: "Upload failed",
        description: "There was a problem uploading your image.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  // Handle image URL input
  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!imageUrl) return
    
    // Basic URL validation
    try {
      new URL(imageUrl)
      onImageChange(imageUrl)
      setImageUrl("")
      
      toast({
        title: "Image updated",
        description: "Your profile image has been updated.",
      })
    } catch (error) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid image URL.",
        variant: "destructive",
      })
    }
  }

  // Handle icon selection
  const handleIconSelect = (iconPath: string) => {
    onImageChange(iconPath)
    
    toast({
      title: "Avatar updated",
      description: "Your profile avatar has been updated.",
    })
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <Avatar className="w-32 h-32 border-2 border-primary">
        <AvatarImage src={currentImage} alt="Profile" />
        <AvatarFallback>
          {session?.user?.name?.charAt(0) || "U"}
        </AvatarFallback>
      </Avatar>

      <Tabs defaultValue="upload" className="w-full max-w-md">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="url">URL</TabsTrigger>
          <TabsTrigger value="avatar">Avatars</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Upload a picture</Label>
            <Input
              id="picture"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileUpload}
              disabled={isUploading}
            />
          </div>
          {isUploading && <p className="text-sm text-center">Uploading...</p>}
        </TabsContent>
        
        <TabsContent value="url">
          <form onSubmit={handleUrlSubmit} className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="url">Image URL</Label>
              <div className="flex gap-2">
                <Input
                  id="url"
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
                <Button type="submit" size="sm">Set</Button>
              </div>
            </div>
          </form>
        </TabsContent>
        
        <TabsContent value="avatar">
          <div className="grid grid-cols-3 gap-4">
            {avatarIcons.map((icon, index) => (
              <div 
                key={index}
                className={`cursor-pointer p-2 rounded-md transition-all ${
                  currentImage === icon ? 'ring-2 ring-primary' : 'hover:bg-accent'
                }`}
                onClick={() => handleIconSelect(icon)}
              >
                <Avatar className="w-16 h-16 mx-auto">
                  <AvatarImage src={icon} alt={`Avatar ${index + 1}`} />
                </Avatar>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ProfileImageUpload
