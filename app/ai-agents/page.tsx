import type { Metadata } from "next"
import { Search, Filter, ChevronDown } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import AgentCard from "@/components/agent-card"

export const metadata: Metadata = {
  title: "AI Agents | Agentic Intelligence Lisbon",
  description: "Explore our collection of AI agents for various tasks and use cases.",
}

// Sample data for AI agents
const agents = [
  {
    id: "research-assistant",
    name: "Research Assistant",
    slug: "research-assistant",
    description: "An intelligent agent that helps with academic research, finding papers, and summarizing findings.",
    image: "/agent-researcher.png",
    tags: ["Research", "Academic", "Summarization"],
    tools: ["Web Search", "PDF Analysis", "Citation Generator"],
    author: {
      name: "Maria Santos",
      image: "/confident-woman-headshot.png",
    },
    price: "Free",
    rating: 4.8,
    category: "Productivity",
  },
  {
    id: "code-companion",
    name: "Code Companion",
    slug: "code-companion",
    description: "Your AI pair programmer that helps write, debug, and optimize code across multiple languages.",
    image: "/agent-coder.png",
    tags: ["Programming", "Development", "Debugging"],
    tools: ["Code Generation", "Error Analysis", "Optimization"],
    author: {
      name: "João Silva",
      image: "/thoughtful-bearded-man.png",
    },
    price: "€9.99/month",
    rating: 4.9,
    category: "Development",
  },
  {
    id: "content-creator",
    name: "Content Creator",
    slug: "content-creator",
    description: "Generate blog posts, social media content, and marketing copy tailored to your brand voice.",
    image: "/agent-writer.png",
    tags: ["Content", "Marketing", "Writing"],
    tools: ["Text Generation", "SEO Analysis", "Tone Adjustment"],
    author: {
      name: "Ana Costa",
      image: "/confident-gaze.png",
    },
    price: "€19.99/month",
    rating: 4.7,
    category: "Marketing",
  },
  {
    id: "data-analyst",
    name: "Data Analyst",
    slug: "data-analyst",
    description: "Transform raw data into actionable insights with automated analysis and visualization.",
    image: "/agent-analyst.png",
    tags: ["Data", "Analytics", "Visualization"],
    tools: ["Data Processing", "Chart Generation", "Statistical Analysis"],
    author: {
      name: "Miguel Oliveira",
      image: "/confident-professional.png",
    },
    price: "€29.99/month",
    rating: 4.6,
    category: "Analytics",
  },
  {
    id: "design-assistant",
    name: "Design Assistant",
    slug: "design-assistant",
    description: "Create beautiful graphics, UI elements, and design assets with AI-powered assistance.",
    image: "/agent-designer.png",
    tags: ["Design", "Graphics", "UI/UX"],
    tools: ["Image Generation", "Color Palette", "Layout Suggestions"],
    author: {
      name: "Sofia Martins",
      image: "/confident-woman-headshot.png",
    },
    price: "€24.99/month",
    rating: 4.5,
    category: "Design",
  },
  {
    id: "language-translator",
    name: "Language Translator",
    slug: "language-translator",
    description: "Translate content between 50+ languages while preserving context, tone, and cultural nuances.",
    image: "/agent-translator.png",
    tags: ["Translation", "Localization", "Multilingual"],
    tools: ["Text Translation", "Document Translation", "Cultural Adaptation"],
    author: {
      name: "Carlos Mendes",
      image: "/thoughtful-bearded-man.png",
    },
    price: "€14.99/month",
    rating: 4.7,
    category: "Language",
  },
  {
    id: "marketing-strategist",
    name: "Marketing Strategist",
    slug: "marketing-strategist",
    description: "Develop comprehensive marketing strategies, campaign ideas, and audience targeting plans.",
    image: "/agent-marketer.png",
    tags: ["Marketing", "Strategy", "Campaigns"],
    tools: ["Audience Analysis", "Campaign Planning", "Performance Prediction"],
    author: {
      name: "Luísa Ferreira",
      image: "/confident-gaze.png",
    },
    price: "€39.99/month",
    rating: 4.8,
    category: "Marketing",
  },
  {
    id: "personal-assistant",
    name: "Personal Assistant",
    slug: "personal-assistant",
    description: "Manage your schedule, reminders, emails, and daily tasks with an AI personal assistant.",
    image: "/agent-assistant.png",
    tags: ["Productivity", "Organization", "Time Management"],
    tools: ["Calendar Management", "Email Drafting", "Task Prioritization"],
    author: {
      name: "Pedro Nunes",
      image: "/confident-professional.png",
    },
    price: "€12.99/month",
    rating: 4.9,
    category: "Productivity",
  },
]

// Categories for filtering
const categories = ["All", "Productivity", "Development", "Marketing", "Analytics", "Design", "Language"]

// Price ranges for filtering
const priceRanges = ["All", "Free", "Under €15", "€15 - €30", "Over €30"]

// Sort options
const sortOptions = ["Newest", "Most Popular", "Price: Low to High", "Price: High to Low", "Highest Rated"]

export default function AIAgentsPage() {
  return (
    <main className="min-h-screen">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-4 md:px-8 lg:px-16 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">
            AI Agents Marketplace
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Discover intelligent agents designed to enhance your productivity, creativity, and decision-making. Browse
            our collection of specialized AI assistants for various tasks and domains.
          </p>

          {/* Search and Filter Bar */}
          <div className="bg-gray-900/70 backdrop-blur-md p-4 rounded-xl shadow-lg mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search for agents..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                />
              </div>

              <div className="flex gap-2">
                <div className="relative">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-700 transition-colors">
                    <Filter size={18} />
                    <span>Category</span>
                    <ChevronDown size={16} />
                  </button>
                  {/* Dropdown would be implemented with state */}
                </div>

                <div className="relative">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-700 transition-colors">
                    <span>Price</span>
                    <ChevronDown size={16} />
                  </button>
                  {/* Dropdown would be implemented with state */}
                </div>

                <div className="relative">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-700 transition-colors">
                    <span>Sort</span>
                    <ChevronDown size={16} />
                  </button>
                  {/* Dropdown would be implemented with state */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="px-4 md:px-8 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-1">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                &laquo;
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                3
              </button>
              <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                10
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                &raquo;
              </button>
            </nav>
          </div>
        </div>
      </section>
    </main>
  )
}
