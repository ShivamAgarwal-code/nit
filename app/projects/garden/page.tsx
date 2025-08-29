import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GardenPage() {
  const majorGardens = [
    { name: "Rajiv Gandhi Udyan, Trimurti nagar", area: "8.00" },
    { name: "Maharma Phule Udyan, Suyognagar", area: "8.50" },
    { name: "Sant. Dyaneshwar Sanjwan Samadhi Udyan, Dattatraynagar", area: "9.00" },
    { name: "Swatantrya Swarn Jayanti Udyan Deshpande Lay-out.", area: "3.50" },
    { name: "Dayanand Park, Jaripatka", area: "7.00" },
    { name: "Lata Mangeshkar Udyan, Vaishali nagar", area: "6.50" },
    { name: "Dr.Babasaheb Ambedkar Udyan, Sakkardara", area: "8.00" },
    { name: "Sant Tukaram Udyan, Sakkardara", area: "6.00" },
  ]

  const miniGardens = [
    { name: "Udhay nagar", area: "0.50" },
    { name: "Kabir nagar", area: "0.75" },
    { name: "Hiwarii nagar", area: "1.50" },
    { name: "Ashirwad nagar", area: "1.00" },
    { name: "New Subhedar Lay-out", area: "1.70" },
    { name: "Mahalgi nagar", area: "1.00" },
    { name: "Binaki – Hudco", area: "1.75" },
    { name: "Sanyal nagar", area: "1.00" },
    { name: "Kukreja nagar", area: "0.40" },
    { name: "SariPeth", area: "0.50" },
    { name: "Lashkaribagh", area: "1.00" },
    { name: "Laghuwetan Colony", area: "1.25" },
    { name: "Raghuji nagar", area: "1.00" },
    { name: "Bhagwan nagar", area: "1.25" },
    { name: "Banerjee Lay-out", area: "2.00" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-4">Garden</h1>
          <p className="text-lg text-muted-foreground text-center">Green Spaces and Parks Development by NIT</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Featured Gardens Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%202.47.48%E2%80%AFPM-VLz19sDfO7lDYGGm91KbL1Op7kaiz0.png"
                alt="Sakkardara Tank Garden"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 rounded-b-lg">
                <h3 className="font-semibold">Sakkardara Tank Garden</h3>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%202.47.48%E2%80%AFPM-VLz19sDfO7lDYGGm91KbL1Op7kaiz0.png"
                alt="Dayanand Park"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 rounded-b-lg">
                <h3 className="font-semibold">Dayanand Park</h3>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%202.47.48%E2%80%AFPM-VLz19sDfO7lDYGGm91KbL1Op7kaiz0.png"
                alt="Lata Mangeshkar Udyan"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 rounded-b-lg">
                <h3 className="font-semibold">Lata Mangeshkar Udyan</h3>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-orange-600 text-center">
                List Of Major & Mini Garden of N.I.T
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Major Gardens */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-center bg-gray-100 py-2 rounded">Major Garden</h3>
                  <div className="space-y-3">
                    {majorGardens.map((garden, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-sm w-6">{index + 1}</span>
                          <span className="text-sm">{garden.name}</span>
                        </div>
                        <span className="font-medium text-sm">{garden.area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-right">
                    <span className="font-semibold text-sm">Area(Acre)</span>
                  </div>
                </div>

                {/* Mini Gardens */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-center bg-gray-100 py-2 rounded">Mini Garden</h3>
                  <div className="space-y-3">
                    {miniGardens.map((garden, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-sm w-6">{index + 1}</span>
                          <span className="text-sm">{garden.name}</span>
                        </div>
                        <span className="font-medium text-sm">{garden.area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-right">
                    <span className="font-semibold text-sm">Area(Acre)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-green-800">Garden Development Impact</h3>
                <p className="text-sm leading-relaxed text-green-700">
                  The comprehensive garden development program by NIT has significantly enhanced Nagpur's green cover
                  and provided essential recreational spaces for citizens. These gardens serve multiple purposes
                  including environmental improvement, recreational activities, cultural events, and community
                  gatherings. The major gardens feature advanced landscaping, walking tracks, children's play areas, and
                  cultural facilities, while mini gardens provide neighborhood-level green spaces that improve local air
                  quality and offer peaceful retreats for residents.
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
