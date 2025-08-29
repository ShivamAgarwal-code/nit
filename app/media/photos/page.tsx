"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// Sample photo data matching the gallery layout
const galleryPhotos = [
  {
    id: 1,
    src: "/nit-office-meeting-with-officials-around-conferenc.png",
    alt: "NIT Office Meeting",
    title: "Board Meeting Session",
    category: "meetings",
  },
  {
    id: 2,
    src: "/nit-office-meeting-with-officials-around-conferenc.png",
    alt: "NIT Office Meeting",
    title: "Administrative Meeting",
    category: "meetings",
  },
  {
    id: 3,
    src: "/group-photo-of-officials-and-dignitaries-at-ceremo.png",
    alt: "Official Ceremony",
    title: "Ceremonial Event",
    category: "ceremonies",
  },
  {
    id: 4,
    src: "/multi-story-building-construction-project-by-nit.png",
    alt: "Building Construction",
    title: "Housing Project",
    category: "construction",
  },
  {
    id: 5,
    src: "/officials-in-formal-attire-at-award-ceremony.png",
    alt: "Award Ceremony",
    title: "Recognition Event",
    category: "ceremonies",
  },
  {
    id: 6,
    src: "/nit-officials-meeting-in-conference-room.png",
    alt: "Conference Meeting",
    title: "Planning Session",
    category: "meetings",
  },
  {
    id: 7,
    src: "/nit-office-meeting-with-documents-and-officials.png",
    alt: "Document Review",
    title: "Document Review Meeting",
    category: "meetings",
  },
  {
    id: 8,
    src: "/outdoor-ceremonial-event-with-red-carpet-and-offic.png",
    alt: "Outdoor Ceremony",
    title: "Inauguration Ceremony",
    category: "ceremonies",
  },
  {
    id: 9,
    src: "/officials-in-meeting-discussing-development-projec.png",
    alt: "Development Meeting",
    title: "Project Discussion",
    category: "meetings",
  },
  {
    id: 10,
    src: "/ribbon-cutting-ceremony-with-officials.png",
    alt: "Ribbon Cutting",
    title: "Project Inauguration",
    category: "ceremonies",
  },
  {
    id: 11,
    src: "/nit-board-meeting-with-officials-seated-around-tab.png",
    alt: "Board Meeting",
    title: "Executive Meeting",
    category: "meetings",
  },
  {
    id: 12,
    src: "/group-of-officials-at-development-project-site.png",
    alt: "Site Visit",
    title: "Project Site Visit",
    category: "construction",
  },
  {
    id: 13,
    src: "/officials-reviewing-documents-in-office-setting.png",
    alt: "Document Review",
    title: "Administrative Review",
    category: "meetings",
  },
  {
    id: 14,
    src: "/ceremonial-event-with-officials-and-dignitaries.png",
    alt: "Official Event",
    title: "Felicitation Ceremony",
    category: "ceremonies",
  },
  {
    id: 15,
    src: "/nit-officials-in-conference-room-meeting.png",
    alt: "Conference",
    title: "Strategic Planning",
    category: "meetings",
  },
  {
    id: 16,
    src: "/officials-at-outdoor-event-with-formal-gathering.png",
    alt: "Outdoor Event",
    title: "Public Gathering",
    category: "ceremonies",
  },
  {
    id: 17,
    src: "/placeholder.svg?height=200&width=280",
    alt: "Award Presentation",
    title: "Excellence Award",
    category: "ceremonies",
  },
  {
    id: 18,
    src: "/placeholder.svg?height=200&width=280",
    alt: "Team Meeting",
    title: "Team Coordination",
    category: "meetings",
  },
  {
    id: 19,
    src: "/placeholder.svg?height=200&width=280",
    alt: "Infrastructure Site",
    title: "Development Site",
    category: "construction",
  },
  {
    id: 20,
    src: "/placeholder.svg?height=200&width=280",
    alt: "Formal Meeting",
    title: "Policy Discussion",
    category: "meetings",
  },
  {
    id: 21,
    src: "/placeholder.svg?height=200&width=280",
    alt: "Project Launch",
    title: "Project Launch Event",
    category: "ceremonies",
  },
  {
    id: 22,
    src: "/placeholder.svg?height=200&width=280",
    alt: "Plan Review",
    title: "Development Planning",
    category: "meetings",
  },
  {
    id: 23,
    src: "/placeholder.svg?height=200&width=280",
    alt: "Group Photo",
    title: "Official Group Photo",
    category: "ceremonies",
  },
  {
    id: 24,
    src: "/placeholder.svg?height=200&width=280",
    alt: "Project Inspection",
    title: "Quality Inspection",
    category: "construction",
  },
  {
    id: 25,
    src: "/placeholder.svg?height=200&width=280",
    alt: "Community Event",
    title: "Community Engagement",
    category: "ceremonies",
  },
]

export default function PhotosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof galleryPhotos)[0] | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const photosPerPage = 25

  // Filter photos based on search term
  const filteredPhotos = galleryPhotos.filter(
    (photo) =>
      photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photo.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photo.alt.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Pagination logic
  const totalPages = Math.ceil(filteredPhotos.length / photosPerPage)
  const startIndex = (currentPage - 1) * photosPerPage
  const currentPhotos = filteredPhotos.slice(startIndex, startIndex + photosPerPage)

  const openLightbox = (photo: (typeof galleryPhotos)[0]) => {
    setSelectedPhoto(photo)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const navigatePhoto = (direction: "prev" | "next") => {
    if (!selectedPhoto) return

    const currentIndex = filteredPhotos.findIndex((photo) => photo.id === selectedPhoto.id)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1
    } else {
      newIndex = currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedPhoto(filteredPhotos[newIndex])
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Gallery</h1>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search photos..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1) // Reset to first page when searching
              }}
              className="pl-10 pr-4 py-2 w-full border-border focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
          {currentPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group cursor-pointer overflow-hidden rounded-lg border border-border hover:border-orange-500 transition-all duration-200 hover:shadow-lg"
              onClick={() => openLightbox(photo)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
              </div>
              
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="border-orange-500 text-orange-600 hover:bg-orange-50"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className={
                    currentPage === page
                      ? "bg-orange-600 hover:bg-orange-700 text-white"
                      : "border-orange-500 text-orange-600 hover:bg-orange-50"
                  }
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="border-orange-500 text-orange-600 hover:bg-orange-50"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Results Info */}
        <div className="text-center mt-4 text-sm text-muted-foreground">
          Showing {startIndex + 1}-{Math.min(startIndex + photosPerPage, filteredPhotos.length)} of{" "}
          {filteredPhotos.length} photos
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigatePhoto("prev")}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigatePhoto("next")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image */}
            <div className="relative">
              <Image
                src={selectedPhoto.src || "/placeholder.svg"}
                alt={selectedPhoto.alt}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <h3 className="text-lg font-semibold">{selectedPhoto.title}</h3>
                <p className="text-sm text-gray-300 capitalize">{selectedPhoto.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
