import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  Star,
  Share2,
  BookmarkPlus,
  ExternalLink,
  Check,
  Download,
  Clock,
  Cpu,
  Database,
  Globe,
  Zap,
} from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import AgentPricing from "@/components/agent-pricing"
import AgentReviews from "@/components/agent-reviews"
import AgentSpecs from "@/components/agent-specs"
import RelatedAgents from "@/components/related-agents"

// This would typically come from a database or API
const getAgentData = (slug: string) => {
  // Sample data for the Research Assistant agent
  if (slug === "research-assistant") {
    return {
      id: "research-assistant",
      name: "Research Assistant",
      slug: "research-assistant",
      description: "An intelligent agent that helps with academic research, finding papers, and summarizing findings.",
      longDescription: `
        <p>The Research Assistant is an advanced AI agent designed to streamline and enhance the academic research process. It combines powerful search capabilities with intelligent analysis to help researchers, students, and academics find, organize, and synthesize information more efficiently.</p>
        
        <h3>Key Capabilities:</h3>
        <ul>
          <li><strong>Literature Search:</strong> Quickly find relevant academic papers, articles, and resources across multiple databases and repositories.</li>
          <li><strong>Content Summarization:</strong> Generate concise summaries of lengthy papers, highlighting key findings, methodologies, and conclusions.</li>
          <li><strong>Citation Management:</strong> Automatically format citations in various academic styles (APA, MLA, Chicago, etc.) and help manage bibliographies.</li>
          <li><strong>Research Gap Identification:</strong> Analyze existing literature to identify potential gaps and opportunities for new research.</li>
          <li><strong>Question Answering:</strong> Provide evidence-based answers to specific research questions based on available literature.</li>
        </ul>
        
        <p>Whether you're working on a thesis, dissertation, research paper, or simply exploring a new topic, the Research Assistant can significantly reduce the time spent on literature reviews and information gathering, allowing you to focus more on analysis and original contribution.</p>
      `,
      image: "/agent-researcher.png",
      tags: ["Research", "Academic", "Summarization", "Literature Review", "Citation", "Knowledge Management"],
      tools: ["Web Search", "PDF Analysis", "Citation Generator", "Summarization Engine", "Knowledge Graph"],
      author: {
        name: "Maria Santos",
        image: "/confident-woman-headshot.png",
        bio: "PhD in Computer Science with a focus on Natural Language Processing and Information Retrieval. Maria has published numerous papers on AI-assisted research methodologies.",
        company: "Lisbon AI Research Institute",
        website: "https://example.com/maria-santos",
      },
      price: "Free",
      pricingOptions: [
        {
          name: "Free Tier",
          price: "€0",
          period: "forever",
          features: [
            "10 research queries per day",
            "Basic summarization",
            "Standard citation formats",
            "Limited search scope",
          ],
          cta: "Get Started",
          popular: false,
        },
        {
          name: "Pro",
          price: "€9.99",
          period: "per month",
          features: [
            "Unlimited research queries",
            "Advanced summarization",
            "All citation formats",
            "Expanded search scope",
            "Research gap analysis",
            "Priority support",
          ],
          cta: "Subscribe",
          popular: true,
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "per organization",
          features: [
            "Everything in Pro",
            "Custom integration",
            "Team collaboration",
            "API access",
            "Dedicated support",
            "Custom training",
          ],
          cta: "Contact Us",
          popular: false,
        },
      ],
      rating: 4.8,
      reviewCount: 127,
      category: "Productivity",
      lastUpdated: "2023-11-15",
      version: "2.3.1",
      requirements: "Web browser or API access",
      languages: ["English", "Portuguese", "Spanish", "French"],
      specs: {
        modelArchitecture: "Transformer-based with retrieval augmentation",
        parameters: "7B parameters",
        context: "16K tokens",
        latency: "~1.2 seconds average response time",
        dataUpdated: "Academic database updated monthly",
        security: "End-to-end encryption for all queries",
      },
      reviews: [
        {
          id: 1,
          user: "Carlos Mendes",
          avatar: "/thoughtful-bearded-man.png",
          rating: 5,
          date: "2023-10-28",
          comment:
            "This tool has completely transformed my research process. I used to spend days searching for relevant papers, but now I can find everything I need in minutes. The summarization feature is particularly impressive.",
        },
        {
          id: 2,
          user: "Sofia Martins",
          avatar: "/confident-woman-headshot.png",
          rating: 4,
          date: "2023-10-15",
          comment:
            "Very useful for my PhD work. The citation management alone is worth it. Occasionally struggles with very niche topics in my field, but overall excellent.",
        },
        {
          id: 3,
          user: "João Silva",
          avatar: "/confident-professional.png",
          rating: 5,
          date: "2023-09-30",
          comment:
            "As a professor supervising multiple research projects, this tool has been invaluable. It helps my students quickly get up to speed on new topics and ensures they don't miss important literature.",
        },
      ],
    }
  }

  // For other slugs, we would return the corresponding agent data
  // For now, we'll return null for any other slug
  return null
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const agent = getAgentData(params.slug)

  if (!agent) {
    return {
      title: "Agent Not Found | Agentic Intelligence Lisbon",
    }
  }

  return {
    title: `${agent.name} | AI Agents | Agentic Intelligence Lisbon`,
    description: agent.description,
  }
}

export default function AgentDetailPage({ params }: { params: { slug: string } }) {
  const agent = getAgentData(params.slug)

  if (!agent) {
    notFound()
  }

  return (
    <main className="min-h-screen pb-20">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/ai-agents"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to AI Agents
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Agent Image and Basic Info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900/60 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 shadow-lg">
                <div className="relative aspect-square">
                  <Image src={agent.image || "/placeholder.svg"} alt={agent.name} fill className="object-cover" />
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <Star size={18} className="text-yellow-400 mr-1" fill="currentColor" />
                      <span className="text-white font-medium">{agent.rating}</span>
                      <span className="text-gray-400 ml-1">({agent.reviewCount} reviews)</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors">
                        <Share2 size={16} />
                      </button>
                      <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors">
                        <BookmarkPlus size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Clock size={16} className="text-gray-400 mr-2" />
                      <span className="text-gray-300">Updated: {agent.lastUpdated}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Cpu size={16} className="text-gray-400 mr-2" />
                      <span className="text-gray-300">Version: {agent.version}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Database size={16} className="text-gray-400 mr-2" />
                      <span className="text-gray-300">Requirements: {agent.requirements}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Globe size={16} className="text-gray-400 mr-2" />
                      <span className="text-gray-300">Languages: {agent.languages.join(", ")}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-800">
                    <h3 className="text-white font-medium mb-2">Author</h3>
                    <div className="flex items-center">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <Image
                          src={agent.author.image || "/placeholder.svg"}
                          alt={agent.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white font-medium">{agent.author.name}</p>
                        <p className="text-gray-400 text-sm">{agent.author.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-800 shadow-lg p-5">
                <h3 className="text-white font-medium mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {agent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-900/50 text-blue-300 border border-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="mt-6 bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-800 shadow-lg p-5">
                <h3 className="text-white font-medium mb-3">Tools & Capabilities</h3>
                <ul className="space-y-2">
                  {agent.tools.map((tool) => (
                    <li key={tool} className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Agent Description and Details */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-800 shadow-lg p-6 mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">{agent.name}</h1>
                <p className="text-xl text-gray-300 mb-6">{agent.description}</p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center">
                    <Zap size={18} className="mr-2" />
                    Try Now
                  </button>
                  <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors flex items-center">
                    <Download size={18} className="mr-2" />
                    Download
                  </button>
                  <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors flex items-center">
                    <ExternalLink size={18} className="mr-2" />
                    Documentation
                  </button>
                </div>

                <div
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: agent.longDescription }}
                />
              </div>

              {/* Technical Specifications */}
              <AgentSpecs specs={agent.specs} />

              {/* Pricing Options */}
              <AgentPricing pricingOptions={agent.pricingOptions} />

              {/* Reviews */}
              <AgentReviews reviews={agent.reviews} rating={agent.rating} reviewCount={agent.reviewCount} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Agents */}
      <RelatedAgents currentAgentId={agent.id} />
    </main>
  )
}
