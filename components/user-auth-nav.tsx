"use client"

import { useState } from "react"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, LogIn, UserPlus, Settings, Menu } from "lucide-react"
import LogoutButton from "@/components/logout-button"

export default function UserAuthNav() {
  const { data: session, status } = useSession()
  const [open, setOpen] = useState(false)
  
  // Loading state
  if (status === "loading") {
    return (
      <Button variant="ghost" size="icon" disabled>
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
      </Button>
    )
  }

  // Get user initials for avatar fallback
  const getInitials = () => {
    if (!session?.user?.name) return "U"
    return session.user.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  // User is signed in
  if (session?.user) {
    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-9 w-9 rounded-full">
            <Avatar className="h-9 w-9">
              <AvatarImage 
                src={session.user.image || ""} 
                alt={session.user.name || "User"} 
              />
              <AvatarFallback>{getInitials()}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <div className="flex items-center justify-start gap-2 p-2">
            <div className="flex flex-col space-y-0.5 leading-none">
              {session.user.name && (
                <p className="font-medium text-sm">{session.user.name}</p>
              )}
              {session.user.email && (
                <p className="text-xs text-muted-foreground">
                  {session.user.email}
                </p>
              )}
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/profile" className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Link>
          </DropdownMenuItem>
          {/* <DropdownMenuItem asChild>
            <Link href="/settings" className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </DropdownMenuItem> */}
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/auth/logout" className="cursor-pointer">
              <LogoutButton variant="ghost" className="w-full justify-start px-2">
                Sign out
              </LogoutButton>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  // User is not signed in
  return (
    <div className="flex items-center gap-2">
      <Link href="/auth/login" className="sm:flex hidden">
        <Button variant="ghost" size="sm">
          <LogIn className="mr-2 h-4 w-4" />
          Log in
        </Button>
      </Link>
      <Link href="/auth/signup">
        <Button size="sm" className="hidden sm:flex">
          <UserPlus className="mr-2 h-4 w-4" />
          Sign up
        </Button>
      </Link>
      
      {/* Mobile dropdown for auth options */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="flex sm:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link href="/auth/login" className="cursor-pointer">
              <LogIn className="mr-2 h-4 w-4" />
              Log in
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/auth/signup" className="cursor-pointer">
              <UserPlus className="mr-2 h-4 w-4" />
              Sign up
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
} 