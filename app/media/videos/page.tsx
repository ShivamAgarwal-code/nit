"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Play, ChevronLeft, ChevronRight } from "lucide-react"

interface Video {
  id: string
  title: string
  thumbnail: string
  duration: string
  views: string
  uploadDate: string
  description: string
  category: string
  videoUrl: string
}

const videos: Video[] = [
  {
    id: "1",
    title: "NIT's Affordable Housing Project Development",
    thumbnail: "/aerial-view-of-affordable-housing-construction-sit.png",
    duration: "5:42",
    views: "12,450",
    uploadDate: "2 weeks ago",
    description: "Overview of NIT's latest affordable housing development project in Nagpur",
    category: "Development",
    videoUrl: "#",
  },
  {
    id: "2",
    title: "SG Smart City Infrastructure Network",
    thumbnail: "/smart-city-digital-infrastructure-with-transportat.png",
    duration: "8:15",
    views: "8,920",
    uploadDate: "1 month ago",
    description: "Smart city infrastructure development and transportation network improvements",
    category: "Smart City",
    videoUrl: "#",
  },
  {
    id: "3",
    title: "NMRDA Work Progress Update",
    thumbnail: "/nmrda-construction-work-progress-with-officials.png",
    duration: "6:30",
    views: "15,680",
    uploadDate: "3 weeks ago",
    description: "Latest updates on NMRDA development projects and infrastructure work",
    category: "Development",
    videoUrl: "#",
  },
  {
    id: "4",
    title: "NMRDA Work Phase 2 Implementation",
    thumbnail: "/nmrda-officials-discussing-phase-2-implementation.png",
    duration: "7:22",
    views: "9,340",
    uploadDate: "2 weeks ago",
    description: "Implementation details of NMRDA work phase 2 development projects",
    category: "Development",
    videoUrl: "#",
  },
  {
    id: "5",
    title: "NMRDA Work Infrastructure Development",
    thumbnail: "/nmrda-infrastructure-development-with-construction.png",
    duration: "4:55",
    views: "11,200",
    uploadDate: "1 week ago",
    description: "Infrastructure development initiatives under NMRDA work program",
    category: "Infrastructure",
    videoUrl: "#",
  },
  {
    id: "6",
    title: "Golden Jubilee Celebration Event",
    thumbnail: "/golden-jubilee-celebration-with-nit-officials-and-.png",
    duration: "12:18",
    views: "25,670",
    uploadDate: "1 month ago",
    description: "NIT's Golden Jubilee celebration highlighting 50 years of service to Nagpur",
    category: "Events",
    videoUrl: "#",
  },
  {
    id: "7",
    title: "Tajbhag Walkthrough and Development",
    thumbnail: "/tajbhag-area-walkthrough-with-development-plans.png",
    duration: "9:45",
    views: "7,890",
    uploadDate: "2 weeks ago",
    description: "Comprehensive walkthrough of Tajbhag area development and future plans",
    category: "Development",
    videoUrl: "#",
  },
  {
    id: "8",
    title: "Nagpur Metro Construction Progress",
    thumbnail: "/nagpur-metro-construction-with-trains-and-stations.png",
    duration: "11:30",
    views: "18,450",
    uploadDate: "3 weeks ago",
    description: "Latest progress on Nagpur Metro construction and upcoming stations",
    category: "Metro",
    videoUrl: "#",
  },
]

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const videosPerPage = 8

  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredVideos.length / videosPerPage)
  const startIndex = (currentPage - 1) * videosPerPage
  const currentVideos = filteredVideos.slice(startIndex, startIndex + videosPerPage)

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video)
  }

  const closeModal = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Videos</h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              className="pl-10 pr-4 py-2 w-full border-border focus:border-orange-600 focus:ring-orange-600"
            />
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {currentVideos.map((video) => (
            <Card
              key={video.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              onClick={() => handleVideoClick(video)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-red-600 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2">
                    <div className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {video.category}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{video.description}</p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>{video.views} views</span>
                    <span>{video.uploadDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results Message */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No videos found matching your search.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className={
                    currentPage === page
                      ? "bg-orange-600 hover:bg-orange-700 text-white"
                      : "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
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
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </main>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-foreground">{selectedVideo.title}</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeModal}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </Button>
              </div>

              <div className="aspect-video bg-black rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm opacity-75">Video player would be embedded here</p>
                  <p className="text-xs opacity-50 mt-2">Duration: {selectedVideo.duration}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>{selectedVideo.views} views</span>
                  <span>{selectedVideo.uploadDate}</span>
                  <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs">{selectedVideo.category}</span>
                </div>
                <p className="text-foreground">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
