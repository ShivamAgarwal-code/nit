"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, MapPin, Calendar, ExternalLink, CreditCard } from "lucide-react"

export function BentoGrid() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryImages = [
    { src: "/nagpur-city-development-project.png", alt: "City Development Project" },
    { src: "/nagpur-metro-construction.png", alt: "Metro Construction" },
    { src: "/nagpur-smart-city-initiative.png", alt: "Smart City Initiative" },
    { src: "/nagpur-infrastructure-development.png", alt: "Infrastructure Development" },
  ]

  const newsItems = [
    {
      title: "New Metro Line Extension Approved",
      date: "2024-01-15",
      category: "Infrastructure",
      excerpt: "The state government has approved the extension of Metro Line 2 to connect suburban areas...",
    },
    {
      title: "Smart City Project Phase 2 Launch",
      date: "2024-01-12",
      category: "Technology",
      excerpt: "Phase 2 of the Smart City project includes digital governance initiatives...",
    },
    {
      title: "Affordable Housing Scheme Update",
      date: "2024-01-10",
      category: "Housing",
      excerpt: "PMAY 2.0 applications are now being processed with enhanced digital features...",
    },
  ]

  const proposedProjects = [
    {
      title: "Metro Line 3 Extension",
      description: "Connecting eastern suburbs to the city center with a 15km extension featuring 12 new stations.",
      budget: "₹2,500 Cr",
      image: "/nagpur-metro-expansion-project-blueprint.png",
      alt: "Metro Expansion Project",
    },
    {
      title: "Smart City Digital Infrastructure",
      description:
        "Implementation of IoT sensors, smart traffic management, and digital governance systems across the city.",
      budget: "₹1,800 Cr",
      image: "/nagpur-smart-city-initiative.png",
      alt: "Smart City Infrastructure Project",
    },
    {
      title: "Integrated Bus Rapid Transit System",
      description:
        "Development of dedicated bus corridors connecting major commercial and residential areas with modern fleet.",
      budget: "₹950 Cr",
      image: "/nagpur-infrastructure-development.png",
      alt: "Bus Rapid Transit Project",
    },
    {
      title: "Green Belt Development Project",
      description:
        "Creation of urban forests and green corridors to improve air quality and provide recreational spaces.",
      budget: "₹650 Cr",
      image: "/nagpur-city-development-project.png",
      alt: "Green Belt Development Project",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [galleryImages.length])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {/* Current Chairman */}
      <Card className="md:col-span-1 lg:col-span-1">
        <CardHeader>
          <CardTitle>Current Hon'ble Chairman</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <img
              src="/images/sanjay-meena-official.png"
              alt="Shri. Sanjay Meena, I.A.S."
              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
            />
            <div>
              <h4 className="font-semibold text-lg">Shri. Sanjay Meena</h4>
              <p className="text-sm text-muted-foreground">I.A.S.</p>
              <p className="text-xs text-muted-foreground mt-1">Chairman, NIT</p>
            </div>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              View Profile
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Digital Gallery */}
      <Card className="md:col-span-2 lg:col-span-2">
        <CardHeader>
          <CardTitle>Digital Gallery</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <img
              src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
              alt={galleryImages[currentImageIndex].alt}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-between p-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="bg-background/80 hover:bg-background/90"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="bg-background/80 hover:bg-background/90"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-1 h-1 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-primary" : "bg-background/60"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
            View All Photos
          </Button>
        </CardContent>
      </Card>

      {/* PMAY 2.0 Payment */}
      <Card className="md:col-span-1 lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            Pay for PMAY 2.0 Application
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Make secure online payments for your Pradhan Mantri Awas Yojana 2.0 application fees and processing
              charges.
            </p>
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium">Application Fee</p>
                  <p className="text-muted-foreground">₹500</p>
                </div>
                <div>
                  <p className="font-medium">Processing Fee</p>
                  <p className="text-muted-foreground">₹200</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Button className="w-full" size="lg">
                Pay Online
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                Check Application Status
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Latest News */}
      <Card className="md:col-span-1 lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Latest News
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {newsItems.map((news, index) => (
            <div key={index} className="border-l-4 border-primary pl-4 pb-4 last:pb-0">
              <Badge variant="secondary" className="mb-2 text-xs">
                {news.category}
              </Badge>
              <h4 className="font-semibold text-sm leading-tight mb-1">{news.title}</h4>
              <p className="text-xs text-muted-foreground mb-2">{new Date(news.date).toLocaleDateString("en-IN")}</p>
              <p className="text-sm text-muted-foreground line-clamp-2">{news.excerpt}</p>
            </div>
          ))}
          <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
            View All News
          </Button>
        </CardContent>
      </Card>

      {/* Proposed Project */}
      <Card className="md:col-span-2 lg:col-span-2">
        <CardHeader>
          <CardTitle>Proposed Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-h-96 overflow-y-auto space-y-6 pr-2">
            {proposedProjects.map((project, index) => (
              <div key={index} className="space-y-4 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.alt}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-semibold mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{project.budget}</Badge>
                    <Button size="sm" variant="default">
                      View Details
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" size="sm" className="w-full mt-12 bg-transparent">
            View All Projects
          </Button>
        </CardContent>
      </Card>

      {/* Map of Nagpur Metro Region */}
      <Card className="md:col-span-1 lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Nagpur Metro Region
          </CardTitle>
        </CardHeader>
        <CardContent className="h-full flex flex-col">
          <div className="relative flex-1">
            <img
              src="/nagpur-metro-region-map-with-stations.png"
              alt="Interactive map of Nagpur Metro Region showing all stations and lines"
              className="w-full h-full min-h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
              <p className="text-sm font-medium">2 Active Lines</p>
              <p className="text-xs text-muted-foreground">38 Operational Stations</p>
            </div>
            <Button size="sm" className="absolute top-4 right-4" aria-label="View interactive map">
              Interactive Map
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
