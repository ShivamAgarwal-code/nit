"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// Sample news data based on the screenshot
const newsData = [
  {
    id: 1,
    title: "Nagpur Nagrik Rugnalay",
    publication: "TheHitvada",
    date: "05-Jun-2025",
    image: "/newspaper-clipping-about-nagpur-hospital.png",
    content: "State forms committee to finalize Nagpur Nagrik Rugnalay land deal",
  },
  {
    id: 2,
    title: "Metro Seeks Suggestion from NIT",
    publication: "LokmatTimes",
    date: "05-Jun-2025",
    image: "/newspaper-clipping-about-metro-suggestions-from-ni.png",
    content: "Nags seeks suggestions from NIT for transport plan",
  },
  {
    id: 3,
    title: "NIT Hospital in Indora",
    publication: "LokmatTimes",
    date: "05-Jun-2025",
    image: "/newspaper-clipping-about-nit-hospital-in-indora.png",
    content: "NIT's 857-bed hospital to come up at Indora",
  },
  {
    id: 4,
    title: "NOc",
    publication: "The Hitvada",
    date: "30-May-2025",
    image: "/newspaper-clipping-about-noc-needed-for-sale.png",
    content: "Is NIT's NoC needed for sale, transfer of leased property?",
  },
  {
    id: 5,
    title: "ना.सु.प्र.नी दिला अल्टीमेटम",
    publication: "लोकमत",
    date: "30-May-2025",
    image: "/marathi-newspaper-clipping-about-ultimatum.png",
    content: "नागपूर सुधार प्राधिकरणाने दिला अल्टीमेटम",
  },
  {
    id: 6,
    title: "Smart City Project Updates",
    publication: "Times of India",
    date: "28-May-2025",
    image: "/newspaper-clipping-about-smart-city-project.png",
    content: "Nagpur Smart City project receives additional funding",
  },
  {
    id: 7,
    title: "Infrastructure Development Plan",
    publication: "Indian Express",
    date: "25-May-2025",
    image: "/newspaper-clipping-about-infrastructure-developmen.png",
    content: "New infrastructure development plan approved for Nagpur",
  },
  {
    id: 8,
    title: "Housing Scheme Launch",
    publication: "Maharashtra Times",
    date: "22-May-2025",
    image: "/newspaper-clipping-about-housing-scheme.png",
    content: "Affordable housing scheme launched for middle-class families",
  },
]

const ITEMS_PER_PAGE = 5

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  // Filter news based on search term
  const filteredNews = useMemo(() => {
    return newsData.filter(
      (news) =>
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.publication.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.content.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm])

  // Calculate pagination
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentNews = filteredNews.slice(startIndex, endIndex)

  // Reset to first page when search changes
  const handleSearch = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">News & Events</h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border-2 border-orange-200 focus:border-orange-500 rounded-lg"
            />
          </div>
        </div>

        {/* News List */}
        <div className="space-y-8">
          {currentNews.length > 0 ? (
            currentNews.map((news) => (
              <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* News Content */}
                    <div className="flex-1 p-6">
                      <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-2 hover:text-blue-800 transition-colors cursor-pointer">
                        {news.title}
                      </h2>
                      <div className="text-sm text-muted-foreground mb-3">
                        <span className="font-medium">{news.publication}</span>
                        <span className="mx-2">•</span>
                        <span>{news.date}</span>
                      </div>
                      <p className="text-foreground leading-relaxed">{news.content}</p>
                    </div>

                    {/* News Image */}
                    <div className="lg:w-80 lg:flex-shrink-0">
                      <div className="h-48 lg:h-full relative">
                        <Image
                          src={news.image || "/placeholder.svg"}
                          alt={`News clipping for ${news.title}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No news found matching your search criteria.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="flex items-center gap-2 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 ${
                    currentPage === page ? "bg-orange-600 hover:bg-orange-700 text-white" : "hover:bg-orange-50"
                  }`}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 bg-transparent"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Results Info */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredNews.length)} of {filteredNews.length} results
          {searchTerm && ` for "${searchTerm}"`}
        </div>
      </main>

      <Footer />
    </div>
  )
}
