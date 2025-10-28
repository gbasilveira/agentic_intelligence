import type React from "react"
import "./article.css"

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
