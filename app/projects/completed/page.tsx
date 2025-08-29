"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function CompletedProjectsPage() {
  const [language, setLanguage] = useState<"en" | "mr">("en")
  const completedProjects = [
    {
      id: "swimming-pool",
      title: "Swimming Pool",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.22.14%E2%80%AFPM-Eu7kFfFQZee8wnVQL5tevA3jFDlIUa.png",
      description:
        "NIT's International Swimming Pool at North Ambazari Road with world-class facilities including main pool, warm-up pool, diving pool, and comprehensive filtration plant.",
      highlights: ["International Standards", "Filtration Plant", "Multiple Pool Types", "Professional Amenities"],
    },
    {
      id: "skating-rink",
      title: "Skating Rink",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.22.28%E2%80%AFPM-DSj87Wz8VXmmADIoKUJKG6qUIRu05y.png",
      description:
        "World-class roller skating rink at Corporation Colony, Daga layout - the first of its kind in India and second in Asia, providing international standard facilities.",
      highlights: ["International Standards", "First in India", "Professional Coaching", "Competition Venue"],
    },
    {
      id: "multipurpose-hall",
      title: "Multipurpose Hall",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.23.08%E2%80%AFPM-xTL6OI9gHJ07SUPHYGNG59cPd5w51c.png",
      description:
        "Cultural Hall Complex built on 4083.65 meters of public utility land, featuring multiple floors with shops, dining halls, conference facilities, and recreational spaces.",
      highlights: ["Multi-floor Complex", "Cultural Activities", "Commercial Spaces", "Conference Facilities"],
    },
    {
      id: "haj-house",
      title: "Haj House",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.23.28%E2%80%AFPM.png-SDMs3FdxlYKkVSabY09n0Uo6W272w9.jpeg",
      description:
        "Modern Islamic-style architectural complex with green domes and minarets, designed to serve the Muslim community's religious and cultural needs.",
      highlights: ["Islamic Architecture", "Community Center", "Modern Design", "Cultural Facility"],
    },
    {
      id: "irdp",
      title: "Integrated Road Development Project (IRDP)",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.23.45%E2%80%AFPM-AivUB2UMJ5iEHoENxr1SsF0sWLgxA2.png",
      description:
        "Comprehensive road development project covering 200 KM of major roads in Nagpur city, including road widening, storm water drains, and traffic infrastructure.",
      highlights: ["200 KM Roads", "Traffic Infrastructure", "Storm Water Drains", "City-wide Impact"],
    },
    {
      id: "garden",
      title: "Garden",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.24.04%E2%80%AFPM-JE6ahsHcmIuS2g3swPcunXPJbzm6Pz.png",
      description:
        "Network of major and mini gardens across Nagpur including Sakkardara Tank Garden, Dayanand Park, and Lata Mangeshkar Udyan, providing green spaces for citizens.",
      highlights: ["Multiple Locations", "Green Spaces", "Recreation Areas", "Community Parks"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage}/>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 text-center mb-6 sm:mb-8">Completed Projects</h1>

        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {completedProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                </div>

                <CardContent className="p-4 sm:p-6 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-600">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{project.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Key Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-orange-100 text-orange-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={`/projects/${project.id}`}>
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
