"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import ProfileSocialLinks from "./profile-social-links"
import ProfileCustomLinks from "./profile-custom-links"
import ProfileImageUpload from "./profile-image-upload"

const profileFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  bio: z.string().max(500, {
    message: "Bio must not be longer than 2500 characters.",
  }),
  profileImage: z.string().optional(),
  tags: z.string().optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// Extending the Session type to include accessToken
declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user?: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    }
  }
}

const ProfileForm = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [socialLinks, setSocialLinks] = useState({
    twitter: "",
    github: "",
    linkedin: "",
  })

  const [customLinks, setCustomLinks] = useState([{ title: "", url: "" }])
  const [currentTagInput, setCurrentTagInput] = useState("")
  const [profileImage, setProfileImage] = useState("/confident-professional.png")
  const [tagSuggestions, setTagSuggestions] = useState<string[]>([])
  const [showTagSuggestions, setShowTagSuggestions] = useState(false)

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      bio: "",
      profileImage: "",
      tags: "",
    },
    mode: "onChange",
  })

  // Fetch user profile data
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!session?.user) return
      
      try {
        setIsLoading(true)
        const response = await fetch('/api/user', {
          headers: {
            'Authorization': `Bearer ${session.accessToken || ''}`,
          },
        })
        
        if (!response.ok) {
          throw new Error('Failed to fetch profile data')
        }
        
        const userData = await response.json()
        
        // Set form data
        form.reset({
          firstName: userData.first_name || '',
          lastName: userData.last_name || '',
          bio: userData.bio || '',
          profileImage: userData.profile_image || '/confident-professional.png',
          tags: userData.tags || '',
        })
        
        // Set social and custom links
        setSocialLinks(userData.social_links || {
          twitter: "",
          github: "",
          linkedin: "",
        })
        
        setCustomLinks(userData.custom_links?.length > 0 
          ? userData.custom_links 
          : [{ title: "", url: "" }]
        )
        
        setProfileImage(userData.profile_image || '/confident-professional.png')
      } catch (error) {
        console.error('Error fetching user profile:', error)
        toast({
          title: "Error",
          description: "Failed to load profile data",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchUserProfile()
  }, [session, form])

  // Handle tag suggestions
  const fetchTagSuggestions = async (query: string) => {
    if (!query || query.length < 2) {
      setTagSuggestions([])
      return
    }
    
    try {
      const response = await fetch(`/api/tags/suggestions?query=${encodeURIComponent(query)}`)
      if (!response.ok) {
        throw new Error('Failed to fetch tag suggestions')
      }
      
      const suggestions = await response.json()
      setTagSuggestions(suggestions)
      setShowTagSuggestions(suggestions.length > 0)
    } catch (error) {
      console.error('Error fetching tag suggestions:', error)
      setTagSuggestions([])
    }
  }

  async function onSubmit(data: ProfileFormValues) {
    if (!session?.user) {
      toast({
        title: "Error",
        description: "You must be logged in to update your profile",
        variant: "destructive",
      })
      return
    }
    
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.accessToken || ''}`,
        },
        body: JSON.stringify({
          ...data,
          socialLinks,
          customLinks: customLinks.filter((link) => link.title && link.url),
        }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to update profile')
      }
      
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      })
    } catch (error) {
      console.error('Error updating profile:', error)
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleSocialLinksChange = (newLinks: typeof socialLinks) => {
    setSocialLinks(newLinks)
  }

  const handleCustomLinksChange = (newLinks: typeof customLinks) => {
    setCustomLinks(newLinks)
  }

  const handleImageChange = (imageUrl: string) => {
    setProfileImage(imageUrl)
    form.setValue("profileImage", imageUrl)
  }

  // Redirect if not authenticated
  useEffect(() => {
    if (!session && !isLoading) {
      router.push('/login')
    }
  }, [session, isLoading, router])

  // Update the tags input field
  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCurrentTagInput(value)
    
    // Fetch suggestions when typing
    fetchTagSuggestions(value)
    
    if (value.endsWith(',')) {
      const tags = form.getValues('tags') ? form.getValues('tags').split(',').filter(Boolean) : []
      if (tags.length < 10) {
        const newTag = value.slice(0, -1).trim()
        if (newTag) {
          form.setValue('tags', [...tags, newTag].join(','))
          setCurrentTagInput('')
          setShowTagSuggestions(false)
        }
      } else {
        setCurrentTagInput('')
      }
    }
  }
  
  const handleTagSelection = (tag: string) => {
    const tags = form.getValues('tags') ? form.getValues('tags').split(',').filter(Boolean) : []
    if (tags.length < 10) {
      form.setValue('tags', [...tags, tag].join(','))
      setCurrentTagInput('')
      setShowTagSuggestions(false)
    }
  }

  // Password reset handler
  const handleResetPassword = async () => {
    if (!session?.user?.email) {
      toast({
        title: "Error",
        description: "Email address not available. Please try again later.",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch('/api/user/password-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: session.user.email,
        }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to send password reset email')
      }
      
      toast({
        title: "Password reset initiated",
        description: "Check your email for password reset instructions.",
      })
    } catch (error) {
      console.error('Error resetting password:', error)
      toast({
        title: "Error",
        description: "Failed to initiate password reset. Please try again.",
        variant: "destructive",
      })
    }
  }

  // Email update handler
  const handleUpdateEmail = async () => {
    const email = prompt('Enter your new email address:')
    if (!email) return
    
    try {
      const response = await fetch('/api/user/email-update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.accessToken || ''}`,
        },
        body: JSON.stringify({ email }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to update email')
      }
      
      toast({
        title: "Email verification sent",
        description: "Check your new email to complete the change.",
      })
    } catch (error) {
      console.error('Error updating email:', error)
      toast({
        title: "Error",
        description: "Failed to update email. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card className="bg-gray-900/60 backdrop-blur-md">
          <CardContent className="pt-6">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <ProfileImageUpload currentImage={profileImage} onImageChange={handleImageChange} />

                <div className="space-y-4 flex-1">
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about yourself"
                            className="resize-none min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Brief description for your profile. Maximum 2500 characters.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tags</FormLabel>
                        <FormControl>
                          <div className="flex flex-wrap gap-2 p-2 border rounded-md focus-visible:ring-0 relative">
                            {field.value?.split(',').filter(Boolean).map((tag, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-1 px-2 py-1 text-sm bg-primary/20 rounded-full"
                              >
                                <span>{tag.trim()}</span>
                                <button
                                  type="button"
                                  className="w-4 h-4 rounded-full hover:bg-primary/30"
                                  onClick={() => {
                                    const tags = field.value?.split(',').filter(Boolean) || [];
                                    tags.splice(index, 1);
                                    field.onChange(tags.join(','));
                                  }}
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                            <Input
                              className="border-0 focus-visible:ring-0 flex-1 min-w-[120px] bg-transparent"
                              placeholder="Add tag..."
                              value={currentTagInput}
                              onChange={handleTagInputChange}
                              onFocus={() => {
                                if (currentTagInput.length >= 2) {
                                  setShowTagSuggestions(tagSuggestions.length > 0)
                                }
                              }}
                              onBlur={() => {
                                // Delay hiding to allow for clicking suggestions
                                setTimeout(() => setShowTagSuggestions(false), 200)
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  e.preventDefault();
                                  const value = currentTagInput.trim();
                                  if (value) {
                                    const tags = field.value ? field.value.split(',').filter(Boolean) : [];
                                    if (tags.length < 10) {
                                      field.onChange([...tags, value].join(','));
                                      setCurrentTagInput("");
                                      setShowTagSuggestions(false);
                                    }
                                  }
                                }
                              }}
                            />
                            
                            {/* Tag suggestions dropdown */}
                            {showTagSuggestions && (
                              <div className="absolute left-0 right-0 top-full mt-1 bg-background border rounded-md shadow-lg z-10 max-h-40 overflow-y-auto">
                                {tagSuggestions.map((tag, index) => (
                                  <div 
                                    key={index}
                                    className="px-3 py-2 hover:bg-accent cursor-pointer"
                                    onClick={() => handleTagSelection(tag)}
                                  >
                                    {tag}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormDescription>Add up to 10 tags to help others find you. Separate tags with commas.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Separator />

              <ProfileSocialLinks links={socialLinks} onChange={handleSocialLinksChange} />

              <Separator />

              <ProfileCustomLinks links={customLinks} onChange={handleCustomLinksChange} />

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Account Settings</h3>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={handleResetPassword}
                  >
                    Reset Password
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={handleUpdateEmail}
                  >
                    Change Email
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button type="submit" size="lg" disabled={isLoading}>
          Save changes
        </Button>
      </form>
    </Form>
  )
}

export default ProfileForm
