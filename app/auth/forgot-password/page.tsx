import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ParticleBackground from "@/components/particle-background"

export const metadata: Metadata = {
  title: "Forgot Password - Agentic Intelligence Lisbon",
  description: "Reset your Agentic Intelligence community account password",
}

export default function ForgotPasswordPage() {
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
          <h1 className="text-3xl font-bold tracking-tight font-poppins mb-2">Reset Password</h1>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        <Card className="border border-primary/20 bg-background/80 backdrop-blur-lg shadow-glow">
          <CardHeader>
            <CardTitle className="font-poppins text-xl">Forgot your password?</CardTitle>
            <CardDescription>We'll send you a password reset link</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john.doe@example.com" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full glow-button" size="lg">
              Send Reset Link
            </Button>

            <div className="flex justify-center space-x-4 pt-2">
              <Link href="/auth/login" className="text-sm text-primary hover:underline">
                Back to login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
