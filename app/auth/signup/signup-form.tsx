"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import { signIn } from "next-auth/react"

export default function SignUpForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeToTerms: false
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [registrationSuccess, setRegistrationSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError("")
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError("All fields are required")
      return
    }
    
    if (!formData.agreeToTerms) {
      setError("You must agree to the terms and privacy policy")
      return
    }
    
    try {
      setLoading(true)
      
      // Register the user with Supabase (since we're using Supabase adapter)
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: `${formData.firstName} ${formData.lastName}`,
        }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to create account")
      }
      
      // Show verification message instead of auto-login
      setRegistrationSuccess(true)
      
    } catch (err: any) {
      setError(err.message || "An error occurred during signup")
    } finally {
      setLoading(false)
    }
  }

  const handleOAuthSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: "/dashboard" })
  }

  // Show verification message if registration was successful
  if (registrationSuccess) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>

        <div className="relative z-10 w-full max-w-md mx-auto space-y-8">
          <div className="text-center">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-main.png"
                alt="Agentic Intelligence Lisbon"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
            </Link>
            <h1 className="text-3xl font-bold tracking-tight font-poppins mb-2">Check Your Email</h1>
            <p className="text-muted-foreground max-w-sm mx-auto">
              We've sent a verification link to <span className="font-medium">{formData.email}</span>. Please check your inbox and click the link to complete your registration.
            </p>
          </div>

          <Card className="border border-primary/20 bg-background/80 backdrop-blur-lg shadow-glow">
            <CardContent className="pt-6 space-y-6">
              <div className="text-center">
                <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12"></path>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    <path d="M16 19h6"></path>
                    <path d="M19 16v6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Verification Required</h3>
                <p className="text-muted-foreground mb-4">
                  Once verified, you'll be able to sign in using your email and password.
                </p>
                <div className="flex flex-col space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => router.push('/auth/login')}
                  >
                    Go to Login
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full"
                    onClick={() => router.push('/')}
                  >
                    Return to Home
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo-main.png"
              alt="Agentic Intelligence Lisbon"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
          </Link>
          <h1 className="text-3xl font-bold tracking-tight font-poppins mb-2">Join Our Community</h1>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Connect with AI enthusiasts, contribute to projects, and stay updated on the latest in agentic intelligence.
          </p>
        </div>

        <Card className="border border-primary/20 bg-background/80 backdrop-blur-lg shadow-glow">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle className="font-poppins text-xl">Create your account</CardTitle>
              <CardDescription>Sign up to access exclusive community features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {error && (
                <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
                  {error}
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john.doe@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <Checkbox 
                  id="agreeToTerms" 
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, agreeToTerms: checked as boolean })
                  }
                />
                <Label htmlFor="agreeToTerms" className="text-sm">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                className="w-full glow-button" 
                size="lg" 
                type="submit"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </Button>

              <div className="relative w-full">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-muted"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button 
                  type="button"
                  variant="outline" 
                  className="border-primary/20 hover:bg-primary/10"
                  onClick={() => handleOAuthSignIn("github")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button 
                  type="button"
                  variant="outline" 
                  className="border-primary/20 hover:bg-primary/10"
                  onClick={() => handleOAuthSignIn("linkedin")}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-primary hover:underline">
                  Log in
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  )
} 