import type React from "react"
import type { Metadata } from "next"
import { Poppins, Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SessionProvider } from "@/components/session-provider"
import Navbar from "@/components/navbar"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Agentic Intelligence - Lisbon",
  description: "The first Agentic AI community in Lisbon",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo-main.png" />
      </head>
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SessionProvider>
            <Navbar />
            {children}
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'