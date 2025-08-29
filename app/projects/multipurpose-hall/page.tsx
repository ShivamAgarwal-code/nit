import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MultipurposeHallPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-4">Multipurpose Hall</h1>
          <p className="text-lg text-muted-foreground text-center">
            Cultural Hall Complex for Promoting Arts and Culture
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-orange-600">Cultural Hall Complex</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed">
                    Nagpur has an immense treasure of talents that largely remain untapped due to improper grooming and
                    poor exposure Mainly this is because of lack of an inadequate base to nurture the rich Cultural
                    potential Thus to Provide a Proper channel to promote cultural activities in the city, NIT has Come
                    up with a mega project of Construction of Cultural Hall Complex.
                  </p>

                  <p className="text-sm leading-relaxed">
                    This Mega hall will be Built on a wide public Utility land of 4083.65 meters. A significant features
                    of the cultural hall complex includes
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm">1. Ground + 5 floor including parking of about 1223.35 sq.m.</p>
                    <p className="text-sm">2. 11 shop at ground floor having total carpet area of 245.203 sq.m.</p>
                    <p className="text-sm">
                      3. Dining hall at ground floor and marriage hall at first floor having carpet area of 464.51 sq.m.
                      each.
                    </p>
                    <p className="text-sm">4. Restaurant at first floor with carpet area of 61.36 sq.m.</p>
                    <p className="text-sm">
                      5. West Division office of NIT on frist Floor having an area of 201.01 sq.m
                    </p>
                    <p className="text-sm">
                      6. Conference hall and Dormitories on 2nd floor having a carpet area of 253.22 sq.m
                    </p>
                    <p className="text-sm">
                      7. Recreational halls and Exhibitions Hall on Upper floor having a carpet area of 253.22 Sq.m
                    </p>
                    <p className="text-sm">
                      8. Electrification and area development of the land it is planned to take up the project in two
                      phases The contract amount for Phase -I is Rs 1,76,67,543.41 Which is nearing completion .
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%202.48.34%E2%80%AFPM-mXNb3q9586UIeWCetKUV3l7l1jJVgg.png"
                    alt="Multipurpose Hall Complex"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">The work included in phase-I are</h3>
                <div className="space-y-2">
                  <p className="text-sm">a. 11 Shops at ground floor and 13 shops on first floor.</p>
                  <p className="text-sm">b. Dining Hall at ground floor and marriage hall at first floor</p>
                  <p className="text-sm">c. Restaurant at the first floor.</p>
                  <p className="text-sm">d. West Division office Block</p>
                  <p className="text-sm">e. Conference Hall and Dormitories on 2nd Hall.</p>
                </div>

                <p className="text-sm leading-relaxed">
                  An income of Rs 1.00 crore is expected from sales of the proposed shop and restaurants having area of
                  518.526 Sq.m @ Rs 2100 per Sq.ft An additional income of Rs 0.58 crore is expected by selling the
                  existing West Division office building with the plot.
                </p>

                <p className="text-sm leading-relaxed">
                  Marriage and reception halls are expected to fetch an income of Rs 30.00 lakh every year by way of
                  rent to the NIT.
                </p>

                <p className="text-sm leading-relaxed font-medium">
                  The Work of Phase -2 has been proposed to be taken up in the year 2001 -2002 and is expected to be
                  complete by the end of the year 2002 .
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
