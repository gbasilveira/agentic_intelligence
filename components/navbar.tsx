"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useSession } from "next-auth/react"
import UserAuthNav from "@/components/user-auth-nav"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { data: session } = useSession()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center group">
            <div className={`relative transition-all duration-500 ${isScrolled ? "" : "animate-pulse-glow"}`}>
              <Image
                src="/images/logo-main.png"
                alt="Agentic Intelligence Lisbon"
                width={44}
                height={44}
                className="mr-3"
              />
              <div
                className={`absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isScrolled ? "" : "animate-pulse-glow"}`}
              ></div>
            </div>
            <span
              className={`font-poppins font-bold text-lg md:text-xl transition-all duration-500 ${
                isScrolled ? "" : "glow-text"
              } group-hover:text-primary tracking-wide`}
            >
              AGENTIC INTELLIGENCE - Lisbon
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["About", "AI Agents", "Events", "Community", "Resources"].map((item, index) => (
              <Link
                key={item}
                href={`${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium hover:text-primary transition-colors animated-underline font-poppins"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </Link>
            ))}
            {!session ? (
              <Button asChild variant="default" size="sm" className="glow-button px-6 py-5">
                <Link href="/auth/signup" className="font-poppins">
                  Join Us
                </Link>
              </Button>
            ) : (
              <UserAuthNav />
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-primary/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="animate-fade-in-up" /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-primary/20">
          <div className="container mx-auto px-6 py-6 space-y-6">
            {["About", "AI Agents", "Events", "Community", "Resources"].map((item, index) => (
              <Link
                key={item}
                href={`${item.toLowerCase().replace(" ", "-")}`}
                className="block py-3 text-sm font-medium hover:text-primary transition-colors animate-fade-in-up font-poppins"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
            {!session ? (
              <div className="flex items-center justify-between animate-fade-in-up" style={{ animationDelay: "250ms" }}>
                <Link
                  href="/auth/login"
                  onClick={toggleMenu}
                  className="text-sm font-medium hover:text-primary transition-colors font-poppins"
                >
                  Log In
                </Link>
                <Button asChild variant="default" size="sm" className="glow-button py-5 px-6">
                  <Link href="/auth/signup" onClick={toggleMenu} className="font-poppins">
                    Join Us
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="animate-fade-in-up" style={{ animationDelay: "250ms" }}>
                <Link
                  href="/profile"
                  onClick={toggleMenu}
                  className="block py-3 text-sm font-medium hover:text-primary transition-colors font-poppins"
                >
                  My Profile
                </Link>
                <Link
                  href="/auth/logout"
                  onClick={toggleMenu}
                  className="block py-3 text-sm font-medium hover:text-primary transition-colors font-poppins"
                >
                  Sign Out
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
