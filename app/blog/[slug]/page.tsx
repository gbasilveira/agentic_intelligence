import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CalendarDays,
  Clock,
  Share2,
  ArrowLeft,
  ThumbsUp,
  Bookmark,
  Twitter,
  Linkedin,
  Facebook,
  Copy,
  ArrowRight,
} from "lucide-react"
import BlogNewsletter from "@/components/blog-newsletter"
import TableOfContents from "@/components/table-of-contents"
import AuthorCard from "@/components/author-card"
import CommentSection from "@/components/comment-section"

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // This would normally come from a CMS or database
  const article = {
    id: params.slug,
    title: "The Rise of Autonomous AI Agents",
    subtitle: "How intelligent agents are reshaping our digital landscape and what it means for the future",
    date: "May 20, 2025",
    lastUpdated: "May 22, 2025",
    author: {
      name: "Maria Silva",
      role: "AI Research Lead",
      bio: "Maria is an AI researcher specializing in autonomous systems and multi-agent environments. She has published numerous papers on agent-based modeling and emergent behaviors in AI systems.",
      image: "/confident-woman-headshot.png",
      twitter: "@mariasilva",
    },
    readTime: "8 min read",
    image: "/urban-sentinel.png",
    category: "Technology",
    tags: ["AI Agents", "Autonomy", "Future Tech", "Machine Learning"],
    content: `
      <p>The landscape of artificial intelligence is undergoing a profound transformation. We're moving beyond the era of passive AI systems that simply respond to queries or perform predefined tasks. Today, we're witnessing the rise of autonomous AI agents—systems that can perceive their environment, make decisions, and take actions to achieve specific goals with minimal human intervention.</p>
      
      <h2>What Makes an AI Agent "Autonomous"?</h2>
      
      <p>Autonomy in AI refers to a system's ability to operate independently, making decisions and taking actions without constant human oversight. True autonomous agents possess several key characteristics:</p>
      
      <ul>
        <li><strong>Perception:</strong> They can sense and interpret their environment through various inputs.</li>
        <li><strong>Reasoning:</strong> They can process information, draw conclusions, and make decisions based on their knowledge and goals.</li>
        <li><strong>Learning:</strong> They can improve their performance over time through experience.</li>
        <li><strong>Action:</strong> They can execute decisions that affect their environment.</li>
        <li><strong>Adaptation:</strong> They can adjust their behavior in response to changing circumstances.</li>
      </ul>
      
      <p>Unlike traditional AI systems that follow predetermined scripts or respond to specific commands, autonomous agents can initiate actions on their own, pursuing objectives with a degree of independence that mimics human agency.</p>
      
      <h2>The Evolution of AI Agents</h2>
      
      <p>The journey toward autonomous AI agents has been gradual but accelerating. Early AI systems were rule-based and highly constrained, capable only of following explicit instructions. The advent of machine learning expanded these capabilities, allowing systems to recognize patterns and make predictions based on data.</p>
      
      <p>Recent advances in deep learning, reinforcement learning, and large language models have dramatically enhanced the potential for autonomy. Systems like GPT-4 demonstrate sophisticated reasoning abilities, while reinforcement learning algorithms enable agents to learn optimal behaviors through trial and error.</p>
      
      <p>The integration of these technologies is giving rise to a new generation of AI agents that can:</p>
      
      <ul>
        <li>Navigate complex, open-ended environments</li>
        <li>Understand and generate natural language</li>
        <li>Solve problems creatively</li>
        <li>Collaborate with humans and other agents</li>
        <li>Adapt to unexpected situations</li>
      </ul>
      
      <h2>Applications Across Industries</h2>
      
      <p>Autonomous AI agents are finding applications across numerous domains:</p>
      
      <h3>Personal Assistants</h3>
      
      <p>Beyond simple voice commands, next-generation personal assistants can proactively manage schedules, anticipate needs, and complete complex tasks with minimal direction. They can coordinate with other services, make recommendations based on user preferences, and even negotiate on behalf of their users.</p>
      
      <h3>Healthcare</h3>
      
      <p>In healthcare, autonomous agents are monitoring patient data, detecting anomalies, and alerting healthcare providers when intervention is needed. They're assisting with diagnosis, treatment planning, and even surgical procedures, augmenting human capabilities and improving patient outcomes.</p>
      
      <h3>Finance</h3>
      
      <p>Financial institutions are deploying autonomous agents for fraud detection, risk assessment, and portfolio management. These systems can analyze vast amounts of data in real-time, identify patterns invisible to human analysts, and execute trades at optimal moments.</p>
      
      <h3>Transportation</h3>
      
      <p>Self-driving vehicles represent one of the most visible applications of autonomous agents. These systems integrate perception, planning, and control to navigate complex environments safely and efficiently. Beyond individual vehicles, autonomous agents are optimizing traffic flow, managing logistics networks, and coordinating public transportation systems.</p>
      
      <h2>Challenges and Considerations</h2>
      
      <p>The rise of autonomous AI agents brings significant challenges that must be addressed:</p>
      
      <h3>Ethical Implications</h3>
      
      <p>As agents become more autonomous, questions of responsibility and accountability become more complex. Who is liable when an autonomous system makes a harmful decision? How do we ensure these systems align with human values and ethical principles?</p>
      
      <h3>Safety and Control</h3>
      
      <p>Ensuring that autonomous agents behave safely and remain under human control is paramount. This requires robust mechanisms for oversight, intervention, and alignment with human intentions.</p>
      
      <h3>Privacy and Security</h3>
      
      <p>Autonomous agents often require access to sensitive data to function effectively. Protecting this data from misuse or unauthorized access is essential for maintaining trust in these systems.</p>
      
      <h3>Social Impact</h3>
      
      <p>The widespread adoption of autonomous agents will transform many aspects of society, from employment to social interactions. Anticipating and managing these changes is crucial for ensuring that the benefits of this technology are broadly shared.</p>
      
      <h2>The Future of Autonomous Agents</h2>
      
      <p>Looking ahead, we can expect several trends to shape the evolution of autonomous AI agents:</p>
      
      <h3>Increased Collaboration</h3>
      
      <p>Future agents will excel at working alongside humans, complementing our strengths and compensating for our limitations. This human-agent collaboration will enhance productivity and creativity across various domains.</p>
      
      <h3>Multi-Agent Systems</h3>
      
      <p>Networks of specialized agents will collaborate to solve complex problems, each contributing unique capabilities to achieve common goals. These multi-agent systems will demonstrate emergent behaviors and collective intelligence beyond the capabilities of individual agents.</p>
      
      <h3>Embodied Intelligence</h3>
      
      <p>As robotics advances, more agents will operate in the physical world, interacting with objects and environments in increasingly sophisticated ways. This embodied intelligence will enable applications from household robots to advanced manufacturing systems.</p>
      
      <h3>Personalization and Adaptation</h3>
      
      <p>Agents will become increasingly personalized, learning from interactions with specific users and adapting to their preferences, habits, and needs. This personalization will make agents more effective and intuitive to work with.</p>
      
      <h2>Conclusion</h2>
      
      <p>The rise of autonomous AI agents represents a significant milestone in the evolution of artificial intelligence. These systems are transforming our relationship with technology, enabling new capabilities and applications across industries.</p>
      
      <p>As this technology continues to advance, thoughtful consideration of its implications and responsible development practices will be essential. By addressing challenges proactively and fostering collaboration between technologists, policymakers, and the public, we can harness the potential of autonomous agents to address complex problems and improve human well-being.</p>
      
      <p>The future of AI is not just intelligent but increasingly autonomous, opening new frontiers for innovation and human-machine partnership.</p>
    `,
    relatedArticles: [
      {
        id: "building-trust-in-ai-agents",
        title: "Building Trust in AI Agents",
        excerpt:
          "How transparency, explainability, and ethical guidelines are crucial for the adoption of autonomous AI systems.",
        image: "/digital-agreement.png",
        category: "Ethics",
      },
      {
        id: "programming-autonomous-agents",
        title: "Programming Autonomous Agents: Best Practices",
        excerpt: "Technical guidelines and frameworks for developing reliable and effective autonomous AI systems.",
        image: "/placeholder.svg?height=400&width=600&query=programmer working on AI code with blue screen glow",
        category: "Development",
      },
      {
        id: "future-of-work-with-ai-agents",
        title: "The Future of Work with AI Agents",
        excerpt: "How autonomous AI will transform jobs, create new opportunities, and reshape the global workforce.",
        image:
          "/placeholder.svg?height=400&width=600&query=futuristic office with robots and humans working together with blue lighting",
        category: "Business",
      },
    ],
  }

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      {/* Article Header */}
      <section className="w-full bg-background relative overflow-hidden py-16">
        {/* Background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/3 bg-primary/5 blur-3xl rounded-full"></div>

        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 font-roboto group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to all articles
            </Link>

            <Badge className="mb-6 font-poppins">{article.category}</Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-poppins leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 font-roboto leading-relaxed">{article.subtitle}</p>

            <div className="flex items-center mb-8">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={article.author.image || "/placeholder.svg"}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mr-auto">
                <p className="font-medium font-poppins">{article.author.name}</p>
                <p className="text-sm text-muted-foreground font-roboto">{article.author.role}</p>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground font-roboto">
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="w-full bg-background pb-8">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-5xl mx-auto relative aspect-[21/9] rounded-xl overflow-hidden">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="w-full bg-background py-12">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Sidebar */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="lg:sticky lg:top-28 space-y-8">
                {/* Table of Contents */}
                <TableOfContents />

                {/* Share */}
                <div className="border border-border/50 rounded-lg p-6 bg-card/30 backdrop-blur-sm">
                  <h3 className="font-semibold mb-4 font-poppins flex items-center">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share this article
                  </h3>

                  <div className="flex flex-wrap gap-3 mt-4">
                    <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                      <Twitter className="h-4 w-4 text-primary" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                    <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                      <Linkedin className="h-4 w-4 text-primary" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                    <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                      <Facebook className="h-4 w-4 text-primary" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                    <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                      <Copy className="h-4 w-4 text-primary" />
                      <span className="sr-only">Copy link</span>
                    </Button>
                  </div>
                </div>

                {/* Tags */}
                <div className="border border-border/50 rounded-lg p-6 bg-card/30 backdrop-blur-sm">
                  <h3 className="font-semibold mb-4 font-poppins">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-roboto">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 order-1 lg:order-2">
              <div className="prose prose-lg dark:prose-invert max-w-none font-roboto article-content">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>

              {/* Article Footer */}
              <div className="mt-12 pt-6 border-t border-border/50">
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm" className="gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      <span>Like</span>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Bookmark className="h-4 w-4" />
                      <span>Save</span>
                    </Button>
                  </div>

                  <div className="text-sm text-muted-foreground font-roboto">Last updated: {article.lastUpdated}</div>
                </div>
              </div>

              {/* Author Bio */}
              <AuthorCard author={article.author} />

              {/* Comments */}
              <CommentSection />
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="w-full bg-background py-16">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="text-2xl font-bold mb-8 font-poppins">Related Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {article.relatedArticles.map((post) => (
              <Card
                key={post.id}
                className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover-lift hover-glow overflow-hidden flex flex-col h-full"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="font-poppins">{post.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 font-poppins leading-tight">{post.title}</h3>

                  <p className="text-muted-foreground mb-4 flex-1 font-roboto">{post.excerpt}</p>

                  <Button variant="ghost" className="w-full mt-4 justify-between group hover:bg-primary/10" asChild>
                    <Link href={`/blog/${post.id}`} className="font-poppins">
                      Read Article
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <BlogNewsletter />
    </main>
  )
}
