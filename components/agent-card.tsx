import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

interface Agent {
  id: string
  name: string
  slug: string
  description: string
  image: string
  tags: string[]
  tools: string[]
  author: {
    name: string
    image: string
  }
  price: string
  rating: number
  category: string
}

interface AgentCardProps {
  agent: Agent
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <Link href={`/ai-agents/${agent.slug}`}>
      <div className="bg-gray-900/60 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 h-full flex flex-col group">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={agent.image || "/placeholder.svg"}
            alt={agent.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {agent.category}
          </div>
        </div>

        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
            {agent.name}
          </h3>

          <p className="text-gray-300 text-sm mb-4 flex-grow">
            {agent.description.length > 120 ? `${agent.description.substring(0, 120)}...` : agent.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {agent.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-900/50 text-blue-300 border border-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={agent.author.image || "/placeholder.svg"}
                  alt={agent.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm text-gray-400">{agent.author.name}</span>
            </div>

            <div className="flex items-center">
              <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
              <span className="text-sm font-medium text-gray-300">{agent.rating}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center">
            <span className="font-medium text-white">{agent.price}</span>
            <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-md">{agent.tools.length} tools</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
