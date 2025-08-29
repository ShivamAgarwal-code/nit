import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HajHousePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-4">Haj House</h1>
          <p className="text-lg text-muted-foreground text-center">
            Modern Islamic Architecture Facility for Community Services
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Main Image */}
          <div className="w-full">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%202.48.17%E2%80%AFPM-1AnNal0J53gWRSbRdSoJddEKTxFSrs.png"
              alt="Haj House Architectural Design"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-orange-600">Haj House Project</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Project Overview</h3>
                  <p className="text-sm leading-relaxed">
                    The Haj House project represents a significant architectural achievement combining modern Islamic
                    design elements with contemporary functionality. This facility has been designed to serve the Muslim
                    community with comprehensive amenities and services.
                  </p>

                  <h3 className="font-semibold text-lg">Architectural Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Traditional Islamic architectural elements including green domes and minarets</li>
                    <li>• Modern construction techniques and materials</li>
                    <li>• Spacious prayer halls and community areas</li>
                    <li>• Administrative offices and support facilities</li>
                    <li>• Ample parking and landscaped surroundings</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Community Services</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Haj pilgrimage coordination and support services</li>
                    <li>• Religious education and community programs</li>
                    <li>• Cultural events and celebrations</li>
                    <li>• Marriage and social function facilities</li>
                    <li>• Community welfare and support services</li>
                  </ul>

                  <h3 className="font-semibold text-lg">Design Philosophy</h3>
                  <p className="text-sm leading-relaxed">
                    The design incorporates traditional Islamic architectural principles while meeting modern functional
                    requirements. The green domes and minarets create a distinctive skyline presence, while the overall
                    layout ensures efficient circulation and accessibility for all community members.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-orange-800">Project Impact</h3>
                <p className="text-sm leading-relaxed text-orange-700">
                  This facility serves as a central hub for the Muslim community in Nagpur, providing essential services
                  for Haj pilgrimage coordination, religious activities, and community gatherings. The modern amenities
                  combined with traditional architectural elements create a welcoming space that honors cultural
                  heritage while meeting contemporary needs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
