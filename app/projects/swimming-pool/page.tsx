import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function SwimmingPoolPage() {
  const [language, setLanguage] = useState<"en" | "mr">("en")
  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage}/>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-4">Swimming Pool</h1>
          <p className="text-lg text-muted-foreground text-center">
            N.I.T.'s International Swimming Pool at North Ambazari Road, Nagpur
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Main Image */}
          <div className="w-full">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%202.49.31%E2%80%AFPM-APtrc1JhKwOA0Bno4AS1mnF68RBP1e.png"
              alt="NIT Swimming Pool Complex"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Brief Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-orange-600">
                BRIEF INFORMATION OF N.I.T.'S INTERNATIONAL SWIMMING POOL AT NORTH AMBAZARI ROAD, NAGPUR
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Main Swimming Pool:</h3>
                    <ul className="space-y-1 text-sm">
                      <li>Plot Area = 12000 Sq.mt.</li>
                      <li>Total B/u Area = 2735.83 Sqm.</li>
                      <li>Size 25 mt x 50 mt.</li>
                      <li>Depth 2 mt</li>
                      <li>Water required per day: 20,000 Ltrs.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Water Testing:</h3>
                    <p className="text-sm">Time to time water testing from N.E.E.R.I.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Warm up Pool:</h3>
                    <ul className="space-y-1 text-sm">
                      <li>Size 13 mt x 25 mt.</li>
                      <li>Depth 0.9 mt. to 1.80 mt</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Diving Pool:</h3>
                    <ul className="space-y-1 text-sm">
                      <li>Size 16 mt x 16 mt.</li>
                      <li>Depth 5.50 mt</li>
                      <li>Height 1.00 mt/3.00 mt./5.00 mt./10.00 mt./15.00 mt.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Amenities Provided:</h3>
                    <p className="text-sm leading-relaxed">
                      Ample Parking Space Reception Hall, Office, Counter, Canteen, Cascade, Babby Pool(Peddler)
                      V.I.P.Room, Gents changing area, Ladies changing area, Spectators gallery Spectator gallery for
                      senior citizen, Staff quarter (3 Nos) Control and commentator box room, Dormitory Life guard room,
                      Coaches room, Kit room
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Filteration Plant:</h3>
                    <p className="text-sm leading-relaxed">
                      1. Sand filter(480 sq.m/hour) 3 Nos 2. Small filter 1 Nos 3. Electric Motor(20HP) 3 Nos 4.Electric
                      Motor(5HP) 2 Nos 5. Electric Motor(3HP) 2 Nos 6.Electric Motor(1.5HP) 2 Nos (used for chlorifire)
                      7. Air Blower(7HP) 2 Nos 8.Chlorinator 2 Nos 9. Section Sweeper 2 Nos 10.Vacuum Pump(5 HP) 1 Nos
                      Other facilities available at swimming pool: a) Gymnyashiyam b) Sona bath, Stem bath,
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Details of membership of swimming pool:</h3>
                    <p className="text-sm">Membership details and rates are available at the facility.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
