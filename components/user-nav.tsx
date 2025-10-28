"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, LogIn } from "lucide-react"

export default function UserNav({ isLoggedIn = false }) {
  const [open, setOpen] = useState(false)

  if (isLoggedIn) {
    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-primary/10">
            <User className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">John Doe</p>
              <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings">Settings</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
  <></>
    // <DropdownMenu open={open} onOpenChange={setOpen}>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-primary/10">
    //       <LogIn className="h-5 w-5" />
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent className="w-56" align="end" forceMount>
    //     <DropdownMenuGroup>
    //       <DropdownMenuItem asChild>
    //         <Link href="/auth/login" className="w-full cursor-pointer">
    //           Log In
    //         </Link>
    //       </DropdownMenuItem>
    //       <DropdownMenuItem asChild>
    //         <Link href="/auth/signup" className="w-full cursor-pointer">
    //           Sign Up
    //         </Link>
    //       </DropdownMenuItem>
    //     </DropdownMenuGroup>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  )
}
