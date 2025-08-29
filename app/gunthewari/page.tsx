"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function GunthewariPage() {
  const [language, setLanguage] = useState<"en" | "mr">("en")
  const [searchTerm, setSearchTerm] = useState("")

  const divisions = [
    { name: "East", nameMarathi: "पूर्व" },
    { name: "West", nameMarathi: "पश्चिम" },
    { name: "North", nameMarathi: "उत्तर" },
    { name: "South", nameMarathi: "दक्षिण" },
  ]

  const mouzaList = [
    "Ajani",
    "Chikali Deo",
    "Hiwari",
    "Nara",
    "Sonegaon",
    "Babulkheda",
    "Chikali Khurd",
    "Hudkeshwar",
    "Nari",
    "Suraburdi",
    "Besa",
    "Dabha",
    "Indora",
    "Narsala",
    "Takli Seem",
    "Bhagwan Nagar",
    "Dawalameti",
    "Jaitala",
    "Nildoha",
    "Telankhedi",
    "Bhamti",
    "Digdoh",
    "Jaripatka",
    "Pandhrabodi",
    "Waddhamna",
    "Bhandewadi",
    "Dighori",
    "Kachimet",
    "Pardi",
    "Wadi",
    "Bharatwada",
    "Drugdhamena",
    "Kalamna",
    "Parsodi",
    "Wanadongari",
    "Bidipeth",
    "Gadga",
    "Khamla",
    "Police Line Takli",
    "Wanjara",
    "Binaki",
    "Godhani",
    "Lendra",
    "Punapur",
    "Wanji",
    "Borgaon",
    "Gorewada",
    "Manewada",
    "Sakkardara",
    "Wathoda",
    "Chichhbhavan",
    "Hajari Pahad",
    "Mankapur",
    "Shivangaon",
    "Zingabai Takli",
    "Chithali",
    "Harpur",
    "Nagpur",
    "Somalwada",
    "",
  ].filter((item) => item !== "")

  const filteredMouzaList = mouzaList.filter((mouza) => mouza.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-orange-500 mb-4">
              {language === "en" ? "Gunthewari Regularization" : "गुंठेवारी नियमितीकरण"}
            </h1>
          </div>

          {/* Main Content */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6">
                  {language === "en" ? (
                    <>
                      Nagpur city has shown tremendous growth in population from last thirty years with the figure
                      touching 25 lakh in 2001. During the past many years, many unauthorised layouts as also illegal
                      constructions have come up in the city thereby the authorised plots over the city have been sold
                      with people residing in them without basic amenities. Such plot owners have difficulty in
                      obtaining Bank loan, legal mortgage, sale deed, property certificate from court, etc. In short
                      they live in an unauthorised place under constant fear that demolition of their houses by the
                      appropriate authority. NIT has taken up a planned project of regularization of unauthorized layout
                      through which more residential plots will be made available in of unauthorized layout through
                      which more residential plots will be made available in the city, the same, hitherto locked up as
                      unauthorised layout, will be released by regularizing them. Basic amenities such as roads, water
                      supply, drainage, sewer lines, water supply and street lighting will be provided in these layout.
                      NIT has accordingly run a one window scheme to push the project. At nominal fees the unauthorised
                      layout owners could get the same regularised as also take help of other financial institutions.
                      This was organised from time to time and it always resulted with tremendous response. It is
                      expected that more than one lakh plots will be released through regularisation process. Presently,
                      regularisation is in progress and around 112957 plots have been regularised. The citizens has now
                      realised the importance of regularisation, which alone can give them access to basic amenities and
                      peace of mind.
                    </>
                  ) : (
                    <>
                      नागपूर शहराची लोकसंख्या गेल्या तीस वर्षांत प्रचंड वाढ झाली आहे आणि 2001 मध्ये ती 25 लाखांपर्यंत पोहोचली आहे. गेल्या
                      अनेक वर्षांत, शहरात अनेक अनधिकृत लेआउट तसेच बेकायदेशीर बांधकामे उभी राहिली आहेत ज्यामुळे शहरातील अधिकृत प्लॉट्स मूलभूत
                      सुविधांशिवाय लोकांना विकले गेले आहेत. अशा प्लॉट मालकांना बँक कर्ज, कायदेशीर गहाण, विक्री खत, न्यायालयाकडून
                      मालमत्ता प्रमाणपत्र इत्यादी मिळविण्यात अडचण येते. थोडक्यात ते योग्य प्राधिकरणाकडून त्यांच्या घरांची पाडकाम
                      होण्याच्या सतत भीतीत अनधिकृत ठिकाणी राहतात.
                    </>
                  )}
                </p>

                <div className="mb-6">
                  <a
                    href="/pdf/176-layouts-handed-over-nmc.pdf"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    {language === "en" ? "176 Layouts Handed Over to NMC" : "176 लेआउट NMC ला हस्तांतरित"}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Layout List Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">
                {language === "en" ? "Layout List" : "लेआउट यादी"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                        {language === "en" ? "Divisions" : "विभाग"}
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                        {language === "en" ? "Regularised Layout List" : "नियमितीकृत लेआउट यादी"}
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                        {language === "en" ? "Rejected Layout List" : "नाकारलेली लेआउट यादी"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {divisions.map((division, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border border-gray-300 px-4 py-3 font-medium">
                          {language === "en" ? division.name : division.nameMarathi}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          <a
                            href={`/pdf/${division.name}_regularised.pdf`}
                            className="text-blue-600 hover:text-blue-800 underline"
                          >
                            {language === "en" ? "View List" : "यादी पहा"}
                          </a>
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          <a
                            href={`/pdf/${division.name}_rejected.pdf`}
                            className="text-blue-600 hover:text-blue-800 underline"
                          >
                            {language === "en" ? "View List" : "यादी पहा"}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Mouza List Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 mb-4">
                {language === "en" ? "Mouza List" : "मौजा यादी"}
              </CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder={language === "en" ? "Search Mouza..." : "मौजा शोधा..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {filteredMouzaList.map((mouza, index) => (
                  <a
                    key={index}
                    href={`/mouza/${mouza.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block p-3 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors border border-gray-200 hover:border-blue-300"
                  >
                    {mouza}
                  </a>
                ))}
              </div>
              {filteredMouzaList.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  {language === "en"
                    ? "No mouza found matching your search."
                    : "आपल्या शोधाशी जुळणारा कोणताही मौजा सापडला नाही."}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
