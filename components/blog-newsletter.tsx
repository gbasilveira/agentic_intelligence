import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function BlogNewsletter() {
  return (
    <section className="w-full bg-primary/10 py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">Subscribe to our newsletter</h2>

          <p className="text-lg text-muted-foreground mb-8 font-roboto leading-relaxed">
            Stay updated with the latest insights and news about agentic AI. We'll send you a curated digest of our best
            articles and event announcements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Your email address" className="h-12 font-roboto" />
            <Button className="h-12 px-6 font-poppins">Subscribe</Button>
          </div>

          <p className="text-sm text-muted-foreground mt-4 font-roboto">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
