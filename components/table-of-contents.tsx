"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function TableOfContents() {
  const [activeId, setActiveId] = useState("")
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])

  useEffect(() => {
    // Get all headings from the article content
    const articleHeadings = Array.from(document.querySelectorAll(".article-content h2, .article-content h3")).map(
      (heading) => {
        const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, "-") || ""

        // Set id on the heading element if it doesn't have one
        if (!heading.id) {
          heading.id = id
        }

        return {
          id,
          text: heading.textContent || "",
          level: heading.tagName === "H2" ? 2 : 3,
        }
      },
    )

    setHeadings(articleHeadings)

    // Set up intersection observer to highlight active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    articleHeadings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      articleHeadings.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <div className="border border-border/50 rounded-lg p-6 bg-card/30 backdrop-blur-sm">
      <h3 className="font-semibold mb-4 font-poppins">Table of Contents</h3>
      <nav>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={cn(
                "transition-colors hover:text-primary cursor-pointer font-roboto",
                heading.level === 3 && "pl-4",
                activeId === heading.id ? "text-primary font-medium" : "text-muted-foreground",
              )}
              style={{ marginTop: heading.level === 3 ? "0.25rem" : undefined }}
              onClick={() => scrollToHeading(heading.id)}
            >
              {heading.text}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
