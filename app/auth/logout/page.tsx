"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import ParticleBackground from "@/components/particle-background"

export default function LogoutPage() {
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const performLogout = async () => {
      try {
        await signOut({ redirect: false })
        setTimeout(() => {
          router.push("/")
        }, 2000) // Redirect after 2 seconds to show the logout message
      } catch (err: any) {
        setError(err.message || "An error occurred during logout")
        setIsLoggingOut(false)
      }
    }

    performLogout()
  }, [router])

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
          <h1 className="text-3xl font-bold tracking-tight font-poppins mb-2">
            {isLoggingOut ? "Signing Out..." : error ? "Sign Out Failed" : "Signed Out"}
          </h1>
          <p className="text-muted-foreground max-w-sm mx-auto">
            {isLoggingOut 
              ? "Please wait while we securely sign you out of your account." 
              : error 
                ? "There was a problem signing you out. Please try again." 
                : "You have been successfully signed out of your account."}
          </p>
        </div>

        <Card className="border border-primary/20 bg-background/80 backdrop-blur-lg shadow-glow">
          <CardContent className="pt-6 pb-6 flex flex-col items-center justify-center">
            {isLoggingOut ? (
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                <p>Signing you out securely...</p>
              </div>
            ) : error ? (
              <div className="text-center space-y-4">
                <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
                  {error}
                </div>
                <button 
                  onClick={() => {
                    setIsLoggingOut(true)
                    setError("")
                    signOut({ redirect: true, callbackUrl: "/" })
                  }}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </div>
                <p>Redirecting you to the homepage...</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
          {!isLoggingOut && (
            <>
              <span className="mx-2 text-muted-foreground">•</span>
              <Link href="/auth/login" className="text-primary hover:underline">
                Log In Again
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  )
} 