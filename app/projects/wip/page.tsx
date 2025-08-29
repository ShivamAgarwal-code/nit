"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

export default function WorkInProgressPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const wipProjects = [
    {
      id: 1,
      title: "Metro Rail Extension Phase 2",
      description:
        "Extension of Nagpur Metro Rail connecting new areas of the city with modern transportation infrastructure.",
      status: "In Progress",
      completion: "65%",
      expectedCompletion: "December 2025",
      budget: "₹2,500 Crores",
      image: "/metro-rail-construction-site.png",
    },
    {
      id: 2,
      title: "Smart City Infrastructure Development",
      description:
        "Implementation of smart city solutions including IoT sensors, digital infrastructure, and automated systems.",
      status: "In Progress",
      completion: "40%",
      expectedCompletion: "March 2026",
      budget: "₹1,800 Crores",
      image: "/smart-city-infrastructure-construction.png",
    },
    {
      id: 3,
      title: "Affordable Housing Scheme Phase 3",
      description:
        "Construction of affordable housing units for economically weaker sections under government housing schemes.",
      status: "In Progress",
      completion: "75%",
      expectedCompletion: "August 2025",
      budget: "₹950 Crores",
      image: "/affordable-housing-construction.png",
    },
    {
      id: 4,
      title: "Integrated Waste Management System",
      description:
        "Development of comprehensive waste management facilities including recycling plants and waste-to-energy conversion.",
      status: "In Progress",
      completion: "30%",
      expectedCompletion: "June 2026",
      budget: "₹650 Crores",
      image: "/waste-management-facility-construction.png",
    },
    {
      id: 5,
      title: "Urban Forest Development",
      description:
        "Creation of urban forest areas and green corridors to improve air quality and environmental sustainability.",
      status: "In Progress",
      completion: "55%",
      expectedCompletion: "October 2025",
      budget: "₹320 Crores",
      image: "/urban-forest-development-project.png",
    },
    {
      id: 6,
      title: "Digital Governance Platform",
      description: "Implementation of comprehensive digital platform for citizen services and government operations.",
      status: "In Progress",
      completion: "80%",
      expectedCompletion: "May 2025",
      budget: "₹180 Crores",
      image: "/digital-governance-platform-development.png",
    },
  ]

  const filteredProjects = wipProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 text-center mb-3 sm:mb-4">
            Work In Progress Projects
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Current ongoing development projects by Nagpur Improvement Trust aimed at enhancing urban infrastructure and
            citizen services.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 text-xs">
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader className="p-3 sm:p-6">
                <CardTitle className="text-base sm:text-lg font-semibold text-foreground line-clamp-2">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-3 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">{project.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-muted-foreground">Progress:</span>
                    <span className="font-medium text-orange-600">{project.completion}</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: project.completion }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-muted-foreground">Expected:</span>
                    <span className="font-medium">{project.expectedCompletion}</span>
                  </div>

                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-muted-foreground">Budget:</span>
                    <span className="font-medium text-green-600">{project.budget}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-base sm:text-lg text-muted-foreground">No projects found matching your search.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
