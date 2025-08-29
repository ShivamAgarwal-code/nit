import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function IRDPPage() {
  const [language, setLanguage] = useState<"en" | "mr">("en")
  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage}/>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-4">
            Integrated Road Development Project (IRDP)
          </h1>
          <p className="text-lg text-muted-foreground text-center">
            Transforming Nagpur's Transportation Infrastructure
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Main Image */}
          <div className="w-full">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%202.48.03%E2%80%AFPM-uC5AGG3nuah89l7pTcy6JuuCEHeiBi.png"
              alt="IRDP Project Overview"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-orange-600">
                Integrated Road Development Project (IRDP)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm leading-relaxed">
                  Nagpur popularly known as Orange City is in the center of India. The Zero mile landmark of India is
                  also situated in the heart of the City. Two Important National Highways NH-6 running from East to West
                  and NH7 running from North to South directions pass through the City. Besides this, the City has
                  geographical importance, commercial, Industrial and agricultural Importance, which has lead to rapid
                  inflow of population in the City. For the economic development of the City, it was very much essential
                  to have good quality of wide roads and well developed road network. Due to the rise in population and
                  subsequently the rise in vehicular traffic in and through the City, the improvement of existing roads
                  and their network was of utmost necessity. Besides this the preventive measures for longer life were
                  necessarily to be taken.
                </p>

                <p className="text-sm leading-relaxed">
                  It is said that the status of a City can be identified by the standard of the roads in the city.
                  Unfortunately the condition of Nagpur city roads was highly pathetic. The standard did not match with
                  the status of second capital of a progressive state at all. Due to poor road condition the city faced
                  traffic congestion and environmental pollution. The increasing number of vehicles too had started
                  creating hazards for the pedestrians and other commuters. Due to an improper planning since the
                  beginning itself, the Roadways of Nagpur could never take a well-structured shape.
                </p>

                <p className="text-sm leading-relaxed">
                  Hence, the primary objective of Road Development was to create a Dust Free City by scientific planning
                  and execution. Nagpur City comprises of 975 K.M. of major roads. The existing roads in Nagpur City had
                  to be broadened to cater to the need of present traffic, as the roads were not constructed to the full
                  width mentioned in the development plan. The roads were without footpaths, storm water drains,
                  channelisers and street furniture. Also there were encroachments on the roads adding up to traffic
                  congestion. This had led not only inconvenient and accident prone roads but also added to the
                  pollution problems. The condition of the roads and road network in the city needed special attention
                  as the roads play an important role in the economic development of the city. Both the arterial roads
                  and internal roads had not been developed as per the development plan so as to cater to the needs of
                  growing vehicular traffic. lack of pedestrian ways, road dividers, channelisers and less carriage
                  width of the roads were not serving the real cause.
                </p>

                <p className="text-sm leading-relaxed">
                  Under IRDP all the major roads in the city have been planned to be widened and constructed as per the
                  sanctioned Development Plan of Nagpur city. About 200 Km. road development works have been undertaken
                  by NMC and NIT under this project. With the financial backing of MSRDC about 140 Km. roads are being
                  developed by the NMC and 60 Km. roads are being developed by NIT. The salient features of this project
                  are development of the roads in an integrated manner, removal of encroachments, road widening,
                  construction of storm water drains, foot paths, central dividers, traffic channelizers, and
                  development of street furniture etc. The projected cost of this project is 200 crore. Once completed,
                  the project is expected to change the face of the city.
                </p>

                <p className="text-sm leading-relaxed">
                  The Government of Maharashtra vide G.R. of Planning Department, dated 23rd February 2001 has
                  sanctioned to improve and develop 174.52 K.M length of major city roads to full D.P. width under
                  Integrated Road Development Project for Nagpur city. In addition to these roads NMC has taken few
                  additional roads of about 25km of length for similar improvement.
                </p>
              </div>

              <Card className="bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-800">Project Objectives</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-orange-700 mb-4">
                    Following are the main objectives of the project:
                  </p>
                  <ol className="space-y-2 text-sm text-orange-700">
                    <li>
                      1. To establish developed road network of main roads in the city joining National Highways, Ring
                      Road and other major roads in city.
                    </li>
                    <li>2. To widen and develop roads to the width as per DP plan of Nagpur city.</li>
                    <li>
                      3. To provide storm water drains on the sides of roads to facilitate removal of storm water from
                      the road surface thereby preventing damages to roads due to stagnation of water on road surface.
                    </li>
                    <li>4. To provide footpaths for safe-walk of pedestrian along the road.</li>
                    <li>5. To provide central divider in the road to segregate traffic in a regulatory way.</li>
                    <li>
                      6. To improve junction, making them wider and with traffic channelizers for better visibility and
                      smooth flow of traffic.
                    </li>
                    <li>7. To provide advanced street light illumination to improve visibility on roads.</li>
                    <li>
                      8. Beautification of roads to add to the aesthetics of the roads and enhance healthy environment.
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <p className="text-sm leading-relaxed">
                  Success in implementing this ambitious project with such accelerated speed was possible only with the
                  timely support of the Government of Maharashtra, financial & technical support of Maharashtra State
                  Road Development Corporation, political & religious local leaders and the encouraging response of the
                  citizens of Nagpur.
                </p>

                <Card className="bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-800">Project Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-green-700 mb-4">The High lights of the Project are:</p>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li>• 200 KM Roads widened as per the DP plan during the last two years.</li>
                      <li>
                        • Road widening has been carried out in an Integrated manner incorporating all the features
                        needed for roads.
                      </li>
                      <li>• 15,000 encroachments were removed to carry out the road widening.</li>
                      <li>• All major Roads have been developed in an integrated manner.</li>
                      <li>
                        • Roads have been provided with storm water drains, footpaths, central dividers, channelisers,
                        street lighting & street furniture.
                      </li>
                      <li>• Total cost of Road Development Project is 200 crore.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
