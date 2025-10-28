import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Search, Filter, Github, Linkedin, Twitter, ArrowLeft } from "lucide-react"

export default function MembersPage() {
  // All community members
  const members = [
    {
      id: "maria-silva",
      name: "Maria Silva",
      role: "AI Research Lead",
      image: "/confident-woman-headshot.png",
      expertise: ["Machine Learning", "Autonomous Agents", "NLP"],
      github: "https://github.com/mariasilva",
      linkedin: "https://linkedin.com/in/mariasilva",
      twitter: "https://twitter.com/mariasilva",
      type: "Core Team",
      joinDate: "2023",
    },
    {
      id: "carlos-mendes",
      name: "Carlos Mendes",
      role: "AI Engineer",
      image: "/confident-professional.png",
      expertise: ["Reinforcement Learning", "Computer Vision", "Robotics"],
      github: "https://github.com/carlosmendes",
      linkedin: "https://linkedin.com/in/carlosmendes",
      type: "Core Team",
      joinDate: "2023",
    },
    {
      id: "ana-costa",
      name: "Ana Costa",
      role: "Ethics Researcher",
      image: "/confident-professional.png",
      expertise: ["AI Ethics", "Policy", "Governance"],
      linkedin: "https://linkedin.com/in/anacosta",
      twitter: "https://twitter.com/anacosta",
      type: "Core Team",
      joinDate: "2023",
    },
    {
      id: "miguel-ferreira",
      name: "Miguel Ferreira",
      role: "Software Developer",
      image: "/thoughtful-bearded-man.png",
      expertise: ["Full-Stack Development", "AI Integration", "UX Design"],
      github: "https://github.com/miguelferreira",
      linkedin: "https://linkedin.com/in/miguelferreira",
      type: "Core Team",
      joinDate: "2023",
    },
    {
      id: "joana-santos",
      name: "Joana Santos",
      role: "ML Engineer",
      image: "/placeholder.svg?height=400&width=400&query=woman with long dark hair professional",
      expertise: ["Deep Learning", "Natural Language Processing", "Data Science"],
      github: "https://github.com/joanasantos",
      linkedin: "https://linkedin.com/in/joanasantos",
      type: "Member",
      joinDate: "2024",
    },
    {
      id: "pedro-oliveira",
      name: "Pedro Oliveira",
      role: "Robotics Researcher",
      image: "/placeholder.svg?height=400&width=400&query=man with glasses professional headshot",
      expertise: ["Robotics", "Sensor Fusion", "Control Systems"],
      github: "https://github.com/pedrooliveira",
      linkedin: "https://linkedin.com/in/pedrooliveira",
      twitter: "https://twitter.com/pedrooliveira",
      type: "Member",
      joinDate: "2024",
    },
    {
      id: "sofia-almeida",
      name: "Sofia Almeida",
      role: "Data Scientist",
      image: "/placeholder.svg?height=400&width=400&query=woman with short hair professional",
      expertise: ["Data Analysis", "Machine Learning", "Visualization"],
      linkedin: "https://linkedin.com/in/sofiaalmeida",
      type: "Member",
      joinDate: "2024",
    },
    {
      id: "ricardo-martins",
      name: "Ricardo Martins",
      role: "AI Product Manager",
      image: "/placeholder.svg?height=400&width=400&query=man in suit professional headshot",
      expertise: ["Product Strategy", "AI Applications", "UX Research"],
      linkedin: "https://linkedin.com/in/ricardomartins",
      twitter: "https://twitter.com/ricardomartins",
      type: "Member",
      joinDate: "2024",
    },
    {
      id: "luisa-costa",
      name: "Luísa Costa",
      role: "NLP Specialist",
      image: "/placeholder.svg?height=400&width=400&query=woman with medium hair professional",
      expertise: ["Natural Language Processing", "Conversational AI", "Linguistics"],
      github: "https://github.com/luisacosta",
      linkedin: "https://linkedin.com/in/luisacosta",
      type: "Member",
      joinDate: "2024",
    },
    {
      id: "antonio-silva",
      name: "António Silva",
      role: "Computer Vision Engineer",
      image: "/placeholder.svg?height=400&width=400&query=man with beard professional headshot",
      expertise: ["Computer Vision", "Deep Learning", "Image Processing"],
      github: "https://github.com/antoniosilva",
      linkedin: "https://linkedin.com/in/antoniosilva",
      type: "Member",
      joinDate: "2024",
    },
    {
      id: "beatriz-santos",
      name: "Beatriz Santos",
      role: "AI Ethics Advocate",
      image: "/placeholder.svg?height=400&width=400&query=woman with curly hair professional",
      expertise: ["Ethics", "Responsible AI", "Policy"],
      linkedin: "https://linkedin.com/in/beatrizsantos",
      twitter: "https://twitter.com/beatrizsantos",
      type: "Member",
      joinDate: "2024",
    },
    {
      id: "tiago-ferreira",
      name: "Tiago Ferreira",
      role: "Reinforcement Learning Researcher",
      image: "/placeholder.svg?height=400&width=400&query=young man professional headshot",
      expertise: ["Reinforcement Learning", "Multi-agent Systems", "Game Theory"],
      github: "https://github.com/tiagoferreira",
      linkedin: "https://linkedin.com/in/tiagoferreira",
      type: "Member",
      joinDate: "2024",
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2 font-poppins">Community Members</h1>
              <p className="text-muted-foreground font-roboto">
                Meet the diverse group of professionals, researchers, and enthusiasts who make up our community.
              </p>
            </div>
            <Button asChild className="font-poppins">
              <Link href="/community/join">
                <Users className="mr-2 h-5 w-5" />
                Join Our Community
              </Link>
            </Button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search members..." className="pl-10 py-6 text-base font-roboto" />
            </div>
            <Button variant="outline" className="py-6 px-6 gap-2 font-poppins">
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </Button>
          </div>

          {/* Member Type Tabs */}
          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="bg-background/50 backdrop-blur-sm border border-border/50 p-1 font-poppins">
              <TabsTrigger
                value="all"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                All Members
              </TabsTrigger>
              <TabsTrigger
                value="core"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Core Team
              </TabsTrigger>
              <TabsTrigger
                value="members"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Members
              </TabsTrigger>
            </TabsList>

            {/* All Members Tab */}
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {members.map((member) => (
                  <Card
                    key={member.id}
                    className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <Badge
                          className={`mb-2 font-poppins ${
                            member.type === "Core Team" ? "bg-primary/20 text-primary" : ""
                          }`}
                        >
                          {member.type}
                        </Badge>
                        <h3 className="text-lg font-bold mb-1 font-poppins">{member.name}</h3>
                        <p className="text-primary mb-3 font-roboto">{member.role}</p>

                        <div className="flex flex-wrap justify-center gap-1 mb-4">
                          {member.expertise.slice(0, 2).map((skill) => (
                            <Badge key={skill} variant="outline" className="font-roboto">
                              {skill}
                            </Badge>
                          ))}
                          {member.expertise.length > 2 && (
                            <Badge variant="outline" className="font-roboto">
                              +{member.expertise.length - 2}
                            </Badge>
                          )}
                        </div>

                        <div className="flex justify-center space-x-2 mb-4">
                          {member.github && (
                            <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                              <Link href={member.github}>
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                              </Link>
                            </Button>
                          )}
                          {member.linkedin && (
                            <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                              <Link href={member.linkedin}>
                                <Linkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                              </Link>
                            </Button>
                          )}
                          {member.twitter && (
                            <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                              <Link href={member.twitter}>
                                <Twitter className="h-4 w-4" />
                                <span className="sr-only">Twitter</span>
                              </Link>
                            </Button>
                          )}
                        </div>

                        <Button variant="outline" size="sm" asChild className="w-full font-poppins">
                          <Link href={`/community/members/${member.id}`}>View Profile</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Core Team Tab */}
            <TabsContent value="core" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {members
                  .filter((member) => member.type === "Core Team")
                  .map((member) => (
                    <Card
                      key={member.id}
                      className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <Badge className="mb-2 bg-primary/20 text-primary font-poppins">{member.type}</Badge>
                          <h3 className="text-lg font-bold mb-1 font-poppins">{member.name}</h3>
                          <p className="text-primary mb-3 font-roboto">{member.role}</p>

                          <div className="flex flex-wrap justify-center gap-1 mb-4">
                            {member.expertise.map((skill) => (
                              <Badge key={skill} variant="outline" className="font-roboto">
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex justify-center space-x-2 mb-4">
                            {member.github && (
                              <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                                <Link href={member.github}>
                                  <Github className="h-4 w-4" />
                                  <span className="sr-only">GitHub</span>
                                </Link>
                              </Button>
                            )}
                            {member.linkedin && (
                              <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                                <Link href={member.linkedin}>
                                  <Linkedin className="h-4 w-4" />
                                  <span className="sr-only">LinkedIn</span>
                                </Link>
                              </Button>
                            )}
                            {member.twitter && (
                              <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                                <Link href={member.twitter}>
                                  <Twitter className="h-4 w-4" />
                                  <span className="sr-only">Twitter</span>
                                </Link>
                              </Button>
                            )}
                          </div>

                          <Button variant="outline" size="sm" asChild className="w-full font-poppins">
                            <Link href={`/community/members/${member.id}`}>View Profile</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            {/* Regular Members Tab */}
            <TabsContent value="members" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {members
                  .filter((member) => member.type === "Member")
                  .map((member) => (
                    <Card
                      key={member.id}
                      className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover-lift"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <Badge className="mb-2 font-poppins">{member.type}</Badge>
                          <h3 className="text-lg font-bold mb-1 font-poppins">{member.name}</h3>
                          <p className="text-primary mb-3 font-roboto">{member.role}</p>

                          <div className="flex flex-wrap justify-center gap-1 mb-4">
                            {member.expertise.slice(0, 2).map((skill) => (
                              <Badge key={skill} variant="outline" className="font-roboto">
                                {skill}
                              </Badge>
                            ))}
                            {member.expertise.length > 2 && (
                              <Badge variant="outline" className="font-roboto">
                                +{member.expertise.length - 2}
                              </Badge>
                            )}
                          </div>

                          <div className="flex justify-center space-x-2 mb-4">
                            {member.github && (
                              <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                                <Link href={member.github}>
                                  <Github className="h-4 w-4" />
                                  <span className="sr-only">GitHub</span>
                                </Link>
                              </Button>
                            )}
                            {member.linkedin && (
                              <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                                <Link href={member.linkedin}>
                                  <Linkedin className="h-4 w-4" />
                                  <span className="sr-only">LinkedIn</span>
                                </Link>
                              </Button>
                            )}
                            {member.twitter && (
                              <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                                <Link href={member.twitter}>
                                  <Twitter className="h-4 w-4" />
                                  <span className="sr-only">Twitter</span>
                                </Link>
                              </Button>
                            )}
                          </div>

                          <Button variant="outline" size="sm" asChild className="w-full font-poppins">
                            <Link href={`/community/members/${member.id}`}>View Profile</Link>
                          </Button>
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
