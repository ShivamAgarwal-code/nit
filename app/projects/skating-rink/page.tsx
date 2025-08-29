import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function SkatingRinkPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-4">Skating Rink</h1>
          <p className="text-lg text-muted-foreground text-center">
            World-Class Roller Skating Rink at Corporation Colony, Daga Layout
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <p className="text-sm leading-relaxed">
                    The Skating Rink at Corporation Colony, Daga layout is constructed by Nagpur Improvement Trust with
                    International Standards. Total plot area is about 6236.64 sq.m. On this plot, both the Skating Rink
                    and Administrative building are constructed. The skating rink measures approximately 99.49 mtr x
                    42.07 mtr with ample parking and a spectators gallery. The Administrative Building includes
                    facilities like a canteen, changing room, judges room, kitchen, and sanitary blocks.
                  </p>

                  <p className="text-sm leading-relaxed">
                    People are giving an overwhelming response, and reputable agencies provide coaching to newcomers.
                    Many interschool competitions, as well as district-level and state-level competitions, have been
                    held at this Skating Rink. During summer vacation, about 250 to 300 students take coaching from
                    renowned coaches at this rink. Throughout the year, about 150 to 200 students regularly use this
                    skating rink for competition preparation. National and international skaters also offer coaching to
                    new aspirants.
                  </p>

                  <p className="text-sm leading-relaxed">
                    In India, roller skating has not gained its due recognition largely due to the lack of adequate
                    facilities. However, with worldwide recognition, roller skating has become increasingly popular
                    among the masses. Many people are professionally inclined towards roller skating but are unable to
                    pursue it due to a lack of proper arrangements. Thus, a large section of avid skating lovers remains
                    deprived of the opportunity to pursue this sport mainly because of the absence of full-fledged
                    skating rinks.
                  </p>
                </div>

                <div className="space-y-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%202.49.13%E2%80%AFPM-KMjqJkdhrYx1p0XefpcRz8809EE3XS.png"
                    alt="Skating Rink Facility"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-sm leading-relaxed">
                  Recognizing the need for a skating rink that offers adequate amenities and facilities, the Nagpur
                  Improvement Trust has undertaken this ambitious project. Inaugurated on December 5th, this world-class
                  roller skating rink of international standards, located in the heart of India, has already attracted a
                  large number of sportspersons across the nation. The opening ceremony was marked by a three-bay grand
                  NIT All India Invitational Roller Skating Rink, which shall serve as the perfect platform for hosting
                  various sports events. It will soon be recognized as a landmark not only locally but also nationally
                  and internationally.
                </p>

                <p className="text-sm leading-relaxed font-medium">
                  In Nagpur, this rink is located in Corporation Colony of Daga Layout. It is the only rink of its kind
                  in India and the second in Asia, following a rink in China. The project cost is 3 crore.
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
