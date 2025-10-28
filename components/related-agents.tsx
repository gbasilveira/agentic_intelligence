import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

// Sample data for related agents
const relatedAgents = [
  {
    id: "code-companion",
    name: "Code Companion",
    slug: "code-companion",
    description: "Your AI pair programmer that helps write, debug, and optimize code across multiple languages.",
    image: "/agent-coder.png",
    tags: ["Programming", "Development"],
    price: "€9.99/month",
    rating: 4.9,
  },
  {
    id: "content-creator",
    name: "Content Creator",
    slug: "content-creator",
    description: "Generate blog posts, social media content, and marketing copy tailored to your brand voice.",
    image: "/agent-writer.png",
    tags: ["Content", "Marketing"],
    price: "€19.99/month",
    rating: 4.7,
  },
  {
    id: "data-analyst",
    name: "Data Analyst",
    slug: "data-analyst",
    description: "Transform raw data into actionable insights with automated analysis and visualization.",
    image: "/agent-analyst.png",
    tags: ["Data", "Analytics"],
    price: "€29.99/month",
    rating: 4.6,
  },
  {
    id: "personal-assistant",
    name: "Personal Assistant",
    slug: "personal-assistant",
    description: "Manage your schedule, reminders, emails, and daily tasks with an AI personal assistant.",
    image: "/agent-assistant.png",
    tags: ["Productivity", "Organization"],
    price: "€12.99/month",
    rating: 4.9,
  },
]

interface RelatedAgentsProps {
  currentAgentId: string
}

export default function RelatedAgents({ currentAgentId }: RelatedAgentsProps) {
  // Filter out the current agent
  const filteredAgents = relatedAgents.filter((agent) => agent.id !== currentAgentId).slice(0, 4)

  return (
    <section className="px-4 md:px-8 lg:px-16 mt-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Related Agents</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAgents.map((agent) => (
            <Link key={agent.id} href={`/ai-agents/${agent.slug}`}>
              <div className="bg-gray-900/60 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 h-full flex flex-col group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={agent.image || "/placeholder.svg"}
                    alt={agent.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {agent.name}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 flex-grow">
                    {agent.description.length > 100 ? `${agent.description.substring(0, 100)}...` : agent.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {agent.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-900/50 text-blue-300 border border-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white">{agent.price}</span>
                    <div className="flex items-center">
                      <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
                      <span className="text-sm font-medium text-gray-300">{agent.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
