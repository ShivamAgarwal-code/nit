"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

export default function PPPProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const pppProjects = [
    {
      id: 1,
      title: "DEVELOPMENT OF COMMUNITY HALL AT MZ. CHIKHALI (DEO ON PPP BASIS.)",
      image: "/modern-community-hall-building-with-multiple-floor.png",
    },
    {
      id: 2,
      title: "DEVELOPMENT OF COMMUNITY HALL AT MZ. CHIKHALI (DEO ON PPP BASIS.)",
      image: "/colorful-modern-community-hall-with-glass-facade.png",
    },
    {
      id: 3,
      title: "NIT SPORTS ACADAMY AND GARDEN AT PROCESS SURVEYOR LAYOUT NAGPUR",
      image: "/sports-complex-with-multiple-courts-and-green-spac.png",
    },
    {
      id: 4,
      title: "NIT COMMUNITY HALL AT NANADANVAN YANKETSH NAGAR NAGPUR",
      image: "/large-community-hall-building-with-parking-area.png",
    },
    {
      id: 5,
      title: "NIT TOWN HALL AT NARI NEAR NIT PC, NAGPUR",
      image: "/modern-town-hall-with-red-and-yellow-accents.png",
    },
    {
      id: 6,
      title: "NIT TOWN HALL AT BIDIPETH NAGPUR",
      image: "/contemporary-town-hall-with-glass-and-concrete-des.png",
    },
    {
      id: 7,
      title: "CONSTRUCTION OF THREE SCREEN MULTIPLEX COMPLEX AT WARDAMAN NAGAR ON PPP MODEL",
      image: "/multiplex-cinema-complex-with-modern-architecture.png",
    },
    {
      id: 8,
      title: "OPERATIONAL WATER AND AMUSEMENT PARK AT AMBAZARI ON PPP",
      image: "/water-park-with-slides-and-recreational-facilities.png",
    },
    {
      id: 9,
      title: "CONSTRUCTION OF MULTILEVEL MECHANISED PARKING AT BULDI ON PPP MODEL",
      image: "/multi-story-automated-parking-building.png",
    },
    {
      id: 10,
      title: "RUNNING AND MAINTENANCE OF FOOD COURTS AT SAKKARDARA BY NIT CONTRIBUTION & PPP MODEL",
      image: "/traditional-style-food-court-complex-with-arches.png",
    },
    {
      id: 11,
      title: "DEVELOPMENT OF I.T. PARK AT PARSODI ON PPP MODEL",
      image: "/modern-it-park-with-glass-towers-and-landscaping.png",
    },
    {
      id: 12,
      title: "DEVELOPMENT OF SUPER SPECIALITY HOSPITAL AT WANJRI ON PPP MODEL",
      image: "/modern-hospital-building-with-medical-facilities.png",
    },
    {
      id: 13,
      title: "DEVELOPMENT OF SCHOOL & PLAYGROUND AT NARI ON PPP MODEL",
      image: "/school-building-with-playground-and-sports-facilit.png",
    },
    {
      id: 14,
      title: "DEVELOPMENT OF DIAGNOSTIC CENTRE & MATERNITY HOME AT BHANTI ON PPP MODEL",
      image: "/healthcare-facility-with-modern-medical-architectu.png",
    },
    {
      id: 15,
      title: "DEVELOPMENT OF SCHOOL AT CHIKHALI (DEO) ON PPP MODEL",
      image: "/educational-institution-with-modern-school-buildin.png",
    },
    {
      id: 16,
      title: "GYMNASIUM AND YOGA SHED IN MOUZA TAKUSESH ON PPP MODEL",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 17,
      title: "CONSTRUCTION OF ISBT AT SANT JAGNADE SQUARE ON PPP MODEL",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 18,
      title: "CONSTRUCTION OF ISBT AT SANT JAGNADE SQUARE ON PPP MODEL",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 19,
      title: "DEVELOPMENT OF HOSPITAL & NURSING HOME AT SHASTRI LAYOUT ON PPP MODEL",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 20,
      title: "DEVELOPMENT OF MATERNITY HOME AND GARDEN AT SHASTRI LAYOUT ON PPP MODEL",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 21,
      title: "NIT CULTURAL & COMMUNITY HALL AT N.A. ROAD",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 22,
      title: "NIT DEVELOPMENT OF SPORTS FACILITIES AT SURENDRA NAGAR",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 23,
      title: "CONSTRUCTION OF SCHOOL AT WADHAMNA ON PPP MODEL",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 24,
      title: "RUNNING, OPERATION AND MAINTENANCE OF CAFETERIA AT NIT'S RAJIV GANDHI UDYAN LOCATED AT TRIMURTI NAGAR",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 25,
      title: "DEVELOPMENT OF PLAYGROUND GARDEN & SCHOOL AT BHANTE LAYOUT ON PPP MODEL",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 26,
      title: "MAINTENANCE & MANAGEMENT OF FACILITIES AT FUTALA LAKE ON PPP MODEL",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const filteredProjects = pppProjects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 text-center mb-3 sm:mb-4">
            Projects on PPP
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Public-Private Partnership projects undertaken by Nagpur Improvement Trust for sustainable urban
            development.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search PPP projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end p-2 sm:p-3">
                  <h3 className="text-white text-xs sm:text-sm font-medium leading-tight line-clamp-3">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-base sm:text-lg text-muted-foreground">No PPP projects found matching your search.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
