import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Github, Globe, Download, ExternalLink, Upload } from "lucide-react"

interface Resource {
  title: string
  type: string
  url: string
  description?: string
}

interface EventResourcesProps {
  resources: Resource[]
}

export default function EventResources({ resources }: EventResourcesProps) {
  // Map resource types to icons
  const getResourceIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "pdf":
        return <FileText className="h-5 w-5 text-primary" />
      case "github":
        return <Github className="h-5 w-5 text-primary" />
      case "website":
        return <Globe className="h-5 w-5 text-primary" />
      default:
        return <FileText className="h-5 w-5 text-primary" />
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold font-poppins">Event Resources</h3>
        <Button variant="outline" className="gap-2 font-poppins">
          <Upload className="h-4 w-4" />
          <span>Submit a Resource</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <Card
            key={index}
            className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">{getResourceIcon(resource.type)}</div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1 font-poppins">{resource.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3 font-roboto">
                    {resource.description || `${resource.type} resource for the event`}
                  </p>
                  <div className="flex gap-2">
                    {resource.type.toLowerCase() === "pdf" ? (
                      <Button variant="outline" size="sm" className="gap-2 font-poppins" asChild>
                        <Link href={resource.url}>
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="gap-2 font-poppins" asChild>
                        <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          <span>Open</span>
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
        <CardContent className="p-6">
          <h4 className="text-lg font-semibold mb-4 font-poppins">Additional Resources</h4>
          <p className="text-muted-foreground mb-4 font-roboto">
            After the event, additional resources such as recordings, presentation slides, and code samples will be
            posted here. Make sure to check back!
          </p>
          <Button variant="outline" className="gap-2 font-poppins">
            <Globe className="h-4 w-4" />
            <span>Visit Resource Hub</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
