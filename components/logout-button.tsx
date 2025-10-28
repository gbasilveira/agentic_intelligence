"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button, ButtonProps } from "@/components/ui/button"
import { LogOut } from "lucide-react"

interface LogoutButtonProps extends ButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  showIcon?: boolean
  redirectTo?: string
}

export default function LogoutButton({ 
  variant = "ghost", 
  showIcon = true, 
  redirectTo = "/auth/logout",
  className, 
  children, 
  ...props 
}: LogoutButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    router.push(redirectTo)
  }

  return (
    <Button
      variant={variant}
      onClick={handleLogout}
      disabled={isLoading}
      className={className}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          <span>Logging out...</span>
        </span>
      ) : (
        <span className="flex items-center gap-2">
          {showIcon && <LogOut className="h-4 w-4" />}
          {children || "Sign out"}
        </span>
      )}
    </Button>
  )
} 