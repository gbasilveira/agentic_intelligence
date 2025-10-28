import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Search, Filter, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react"

export default function PartnersPage() {
  // All partners
  const partners = [
    {
      id: "tech-university",
      name: "Lisbon Technical University",
      description: "Academic partner providing research expertise and educational resources.",
      logo: "/abstract-blue-university.png",
      type: "Academic",
      website: "https://example.com/tech-university",
      since: "2023",
    },
    {
      id: "ai-startup",
      name: "AgentLabs",
      description: "Startup focused on developing commercial applications of autonomous agent technology.",
      logo: "/abstract-blue-tech.png",
      type: "Industry",
      website: "https://example.com/agentlabs",
      since: "2023",
    },
    {
      id: "government-agency",
      name: "Digital Innovation Agency",
      description: "Government agency supporting innovation in AI and digital technologies.",
      logo: "/placeholder.svg?height=100&width=200&query=government agency logo with blue theme",
      type: "Government",
      website: "https://example.com/digital-innovation-agency",
      since: "2023",
    },
    {
      id: "research-institute",
      name: "AI Research Institute",
      description: "Independent research organization focused on advancing AI capabilities and applications.",
      logo: "/placeholder.svg?height=100&width=200&query=research institute logo with blue theme",
      type: "Research",
      website: "https://example.com/ai-research-institute",
      since: "2023",
    },
    {
      id: "tech-hub",
      name: "Lisbon Tech Hub",
      description: "Co-working and innovation space for technology startups and entrepreneurs.",
      logo: "/placeholder.svg?height=100&width=200&query=tech hub logo with blue theme",
      type: "Community",
      website: "https://example.com/lisbon-tech-hub",
      since: "2024",
    },
    {
      id: "ai-ethics-foundation",
      name: "AI Ethics Foundation",
      description: "Non-profit organization dedicated to promoting ethical AI development and governance.",
      logo: "/placeholder.svg?height=100&width=200&query=ethics foundation logo with blue theme",
      type: "Non-Profit",
      website: "https://example.com/ai-ethics-foundation",
      since: "2024",
    },
    {
      id: "robotics-company",
      name: "Autonomous Robotics Inc.",
      description: "Company specializing in autonomous robotic systems for various industries.",
      logo: "/placeholder.svg?height=100&width=200&query=robotics company logo with blue theme",
      type: "Industry",
      website: "https://example.com/autonomous-robotics",
      since: "2024",
    },
    {
      id: "tech-conference",
      name: "AI Summit Lisbon",
      description: "Annual conference bringing together AI researchers, developers, and industry leaders.",
      logo: "/placeholder.svg?height=100&width=200&query=tech conference logo with blue theme",
      type: "Event",
      website: "https://example.com/ai-summit-lisbon",
      since: "2024",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      {/* Header */}
      <section className="w-full bg-background py-12">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <Link
            href="/community"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 font-roboto group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Community
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 font-poppins">Our Partners</h1>
              <p className="text-muted-foreground font-roboto">
                Organizations that collaborate with us to advance the field of agentic AI.
              </p>
            </div>
            <Button asChild className="font-poppins">
              <Link href="/community/partners/become-partner">
                <Building className="mr-2 h-5 w-5" />
                Become a Partner
              </Link>
            </Button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search partners..." className="pl-10 py-6 text-base font-roboto" />
            </div>
            <Button variant="outline" className="py-6 px-6 gap-2 font-poppins">
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </Button>
          </div>

          {/* Partner Type Tabs */}
          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="bg-background/50 backdrop-blur-sm border border-border/50 p-1 font-poppins">
              <TabsTrigger
                value="all"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                All Partners
              </TabsTrigger>
              <TabsTrigger
                value="academic"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Academic
              </TabsTrigger>
              <TabsTrigger
                value="industry"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Industry
              </TabsTrigger>
              <TabsTrigger
                value="government"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Government
              </TabsTrigger>
              <TabsTrigger
                value="other"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Other
              </TabsTrigger>
            </TabsList>

            {/* All Partners Tab */}
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners.map((partner) => (
                  <Card
                    key={partner.id}
                    className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative h-16 w-full mb-4 flex items-center justify-center">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            width={160}
                            height={80}
                            className="object-contain"
                          />
                        </div>
                        <Badge className="mb-3 font-poppins">{partner.type}</Badge>
                        <h3 className="text-xl font-bold mb-3 font-poppins">{partner.name}</h3>
                        <p className="text-muted-foreground mb-4 font-roboto">{partner.description}</p>
                        <div className="flex gap-3 mb-4">
                          {partner.website && (
                            <Button variant="outline" size="sm" asChild className="gap-2 font-poppins">
                              <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                                <span>Website</span>
                              </Link>
                            </Button>
                          )}
                          <Button variant="outline" size="sm" asChild className="font-poppins">
                            <Link href={`/community/partners/${partner.id}`}>
                              Details
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground font-roboto">Partner since {partner.since}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Academic Partners Tab */}
            <TabsContent value="academic" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners
                  .filter((partner) => partner.type === "Academic")
                  .map((partner) => (
                    <Card
                      key={partner.id}
                      className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative h-16 w-full mb-4 flex items-center justify-center">
                            <Image
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              width={160}
                              height={80}
                              className="object-contain"
                            />
                          </div>
                          <Badge className="mb-3 font-poppins">{partner.type}</Badge>
                          <h3 className="text-xl font-bold mb-3 font-poppins">{partner.name}</h3>
                          <p className="text-muted-foreground mb-4 font-roboto">{partner.description}</p>
                          <div className="flex gap-3 mb-4">
                            {partner.website && (
                              <Button variant="outline" size="sm" asChild className="gap-2 font-poppins">
                                <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4" />
                                  <span>Website</span>
                                </Link>
                              </Button>
                            )}
                            <Button variant="outline" size="sm" asChild className="font-poppins">
                              <Link href={`/community/partners/${partner.id}`}>
                                Details
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground font-roboto">Partner since {partner.since}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            {/* Industry Partners Tab */}
            <TabsContent value="industry" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners
                  .filter((partner) => partner.type === "Industry")
                  .map((partner) => (
                    <Card
                      key={partner.id}
                      className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative h-16 w-full mb-4 flex items-center justify-center">
                            <Image
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              width={160}
                              height={80}
                              className="object-contain"
                            />
                          </div>
                          <Badge className="mb-3 font-poppins">{partner.type}</Badge>
                          <h3 className="text-xl font-bold mb-3 font-poppins">{partner.name}</h3>
                          <p className="text-muted-foreground mb-4 font-roboto">{partner.description}</p>
                          <div className="flex gap-3 mb-4">
                            {partner.website && (
                              <Button variant="outline" size="sm" asChild className="gap-2 font-poppins">
                                <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4" />
                                  <span>Website</span>
                                </Link>
                              </Button>
                            )}
                            <Button variant="outline" size="sm" asChild className="font-poppins">
                              <Link href={`/community/partners/${partner.id}`}>
                                Details
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground font-roboto">Partner since {partner.since}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            {/* Government Partners Tab */}
            <TabsContent value="government" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners
                  .filter((partner) => partner.type === "Government")
                  .map((partner) => (
                    <Card
                      key={partner.id}
                      className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative h-16 w-full mb-4 flex items-center justify-center">
                            <Image
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              width={160}
                              height={80}
                              className="object-contain"
                            />
                          </div>
                          <Badge className="mb-3 font-poppins">{partner.type}</Badge>
                          <h3 className="text-xl font-bold mb-3 font-poppins">{partner.name}</h3>
                          <p className="text-muted-foreground mb-4 font-roboto">{partner.description}</p>
                          <div className="flex gap-3 mb-4">
                            {partner.website && (
                              <Button variant="outline" size="sm" asChild className="gap-2 font-poppins">
                                <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4" />
                                  <span>Website</span>
                                </Link>
                              </Button>
                            )}
                            <Button variant="outline" size="sm" asChild className="font-poppins">
                              <Link href={`/community/partners/${partner.id}`}>
                                Details
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground font-roboto">Partner since {partner.since}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            {/* Other Partners Tab */}
            <TabsContent value="other" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners
                  .filter(
                    (partner) =>
                      partner.type !== "Academic" && partner.type !== "Industry" && partner.type !== "Government",
                  )
                  .map((partner) => (
                    <Card
                      key={partner.id}
                      className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative h-16 w-full mb-4 flex items-center justify-center">
                            <Image
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              width={160}
                              height={80}
                              className="object-contain"
                            />
                          </div>
                          <Badge className="mb-3 font-poppins">{partner.type}</Badge>
                          <h3 className="text-xl font-bold mb-3 font-poppins">{partner.name}</h3>
                          <p className="text-muted-foreground mb-4 font-roboto">{partner.description}</p>
                          <div className="flex gap-3 mb-4">
                            {partner.website && (
                              <Button variant="outline" size="sm" asChild className="gap-2 font-poppins">
                                <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4" />
                                  <span>Website</span>
                                </Link>
                              </Button>
                            )}
                            <Button variant="outline" size="sm" asChild className="font-poppins">
                              <Link href={`/community/partners/${partner.id}`}>
                                Details
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground font-roboto">Partner since {partner.since}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
