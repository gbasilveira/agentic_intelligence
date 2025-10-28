"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, FormEvent, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import { signIn } from "next-auth/react"

export default function LoginForm() {
  const router = useRouter()
  // const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)
  const [verificationNeeded, setVerificationNeeded] = useState(false)

  // useEffect(() => {
  //   // Check for message in URL parameters
  //   const message = searchParams.get("message")
  //   if (message) {
  //     setSuccess(message)
  //   }
  // }, [searchParams])

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
    setSuccess("")
    setVerificationNeeded(false)
    
    if (!formData.email || !formData.password) {
      setError("Email and password are required")
      return
    }
    
    try {
      setLoading(true)
      
      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      })
      
      if (result?.error) {
        // Check if the error is related to email verification
        if (result.error.toLowerCase().includes("verification") || 
            result.error.toLowerCase().includes("email") && 
            result.error.toLowerCase().includes("confirmed")) {
          setVerificationNeeded(true)
          throw new Error("Email not verified. Please check your inbox for the verification link.")
        }
        throw new Error(result.error)
      }
      
      router.push("/")
    } catch (err: any) {
      setError(err.message || "Invalid email or password")
    } finally {
      setLoading(false)
    }
  }

  const handleOAuthSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: "/" })
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
          <h1 className="text-3xl font-bold tracking-tight font-poppins mb-2">Welcome Back</h1>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Log in to access your community profile, projects, and resources.
          </p>
        </div>

        <Card className="border border-primary/20 bg-background/80 backdrop-blur-lg shadow-glow">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle className="font-poppins text-xl">Log in to your account</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {success && (
                <div className="bg-green-100/20 text-green-600 text-sm p-3 rounded-md">
                  {success}
                </div>
              )}
              
              {error && (
                <div className={`${verificationNeeded ? "bg-amber-100/20 text-amber-600" : "bg-destructive/10 text-destructive"} text-sm p-3 rounded-md`}>
                  {error}
                  {verificationNeeded && (
                    <div className="mt-2">
                      <Button 
                        variant="link" 
                        className="text-amber-600 p-0 h-auto font-normal text-sm underline"
                        onClick={() => window.location.href = `/api/auth/verification?email=${encodeURIComponent(formData.email)}`}
                      >
                        Resend verification email
                      </Button>
                    </div>
                  )}
                </div>
              )}
              
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

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    checked={formData.remember}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, remember: checked as boolean })
                    }
                  />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>
                <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                className="w-full glow-button" 
                size="lg" 
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log In"}
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
                Don't have an account?{" "}
                <Link href="/auth/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  )
} 