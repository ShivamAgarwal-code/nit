"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function PastChairmanPage() {
  const [language, setLanguage] = useState<"en" | "mr">("en")
  const [searchTerm, setSearchTerm] = useState("")

  const pastChairmen = [
    { name: "SHRI. SANJAY MEENA, I.A.S", period: "20/03/2024 - TILL DATE" },
    { name: "SHRI. MANOJ SURYAWANSHI, I.A.S", period: "08/02/2021 - 19/03/2024" },
    { name: "SMT. SHEETAL TELI - UGALE, I.A.S.", period: "31/12/2018 - 07/02/2021" },
    { name: "SHRI. ASHWIN MUDGAL, I.A.S.", period: "03/05/2018 - 30/12/2018" },
    { name: "DR. DEEPAK MHAISEKAR, I.A.S.", period: "01/06/2016 - 01/05/2018" },
    { name: "SHRI SACHIN KURVE, I.A.S.", period: "26/01/2016 - 31/05/2016" },
    { name: "SHRI SHYAM WARDHANE, I.A.S.", period: "06/01/2015 - 22/01/2016" },
    { name: "DR HARSHDEEP KAMBLE, I.A.S.", period: "05/09/2014 - 05/01/2015" },
    { name: "SHRI PRAVIN DARADE, I.A.S.", period: "02/06/2011 - 04/09/2014" },
    { name: "SHRI SANJAY MUKHERJEE, I.A.S.", period: "19/06/2008 - 01/06/2011" },
    { name: "SHRI SHYAM TAGADE, I.A.S.", period: "28/05/2007 - 18/06/2008" },
    { name: "SHRI LOKESH CHANDRA, I.A.S.", period: "20/04/2007 - 28/05/2007" },
    { name: "SHRI D.G.PHILIP, I.A.S.", period: "20/09/2006 - 29/09/2006" },
    { name: "SHRI DINESH WAGHMARE, I.A.S.", period: "05/12/2005 - 20/09/2006" },
    { name: "SHRI MANU KUMAR SRIVASTAVA, I.A.S.", period: "10/07/2002 - 05/12/2005" },
    { name: "DR.T.CHANDRA SHEKHAR, I.A.S.", period: "30/12/2000 - 10/07/2002" },
    { name: "SHRI W.G.GORDE, I.A.S.", period: "07/01/1999 - 30/12/2000" },
    { name: "SHRI SHRINIWAS PATIL, I.A.S.", period: "14/07/1999 - 30/06/1999" },
    { name: "SHRI SHIVAJIRAO DESHMUKH, I.A.S.", period: "17/11/1998 - 13/02/1999" },
    { name: "SHRI SHRINIWAS PATIL, I.A.S.", period: "31/03/1996 - 16/11/1998" },
    { name: "SHRI ARUN PATANKAR, I.A.S.", period: "27/02/1993 - 31/03/1996" },
    { name: "SHRI B.N.ZAMRE, I.A.S.", period: "02/11/1993 - 27/02/1993" },
    { name: "SHRI G.R.BEDGE, I.A.S.", period: "08/10/1992 - 02/11/1993" },
    { name: "SHRI M.R.PATIL, I.A.S.", period: "26/06/1992 - 08/10/1992" },
    { name: "SHRI NAND LAL, I.A.S.", period: "23/11/1989 - 27/01/1991" },
    { name: "SHRI S.S.JAMWAL, I.A.S", period: "06/09/1986 - 22/11/1989" },
    { name: "SHRI A.S.RAO, I.A.S.", period: "06/04/1986 - 06/09/1986" },
    { name: "SHRI S.HABIB ULLAH, M.I., I.A.S.", period: "05/06/1985 - 31/03/1986" },
    { name: "SHRI A.S.RAO, I.A.S.", period: "21/05/1985 - 05/05/1986" },
    { name: "SHRI M.L.GAUTAM, I.A.S", period: "29/04/1985 - 20/05/1985" },
    { name: "SHRI C.D.SINGH, I.A.S", period: "22/06/1982 - 28/04/1985" },
    { name: "SHRI K.SHIVARAMAKRISHNAN, I.A.S.", period: "29/03/1982 - 22/06/1982" },
    { name: "SHRI V.S.GOPALKRISHNAN, I.A.S.", period: "19/02/1982 - 28/03/1982" },
    { name: "SHRI A.K.G.DESAI, I.A.S", period: "11/03/1980 - 18/02/1982" },
    { name: "SHRI M.R.NATARAJAN, I.A.S.", period: "03/12/1979 - 11/02/1980" },
    { name: "SHRI LAL FAK ZUALA, I.A.S.", period: "26/11/1978 - 02/11/1979" },
    { name: "SHRI A.D.SAMANT, I.A.S.", period: "26/05/1978 - 25/11/1978" },
    { name: "SHRI LAL FAK ZUALA, I.A.S.", period: "05/07/1978 - 06/12/1978" },
    { name: "SHRI A.D.SAMANT, I.A.S.", period: "27/06/1977 - 05/06/1978" },
    { name: "SHRI B.S.DHAWALE, I.A.S.", period: "23/04/1977 - 26/06/1977" },
    { name: "SHRI A.D.SAMANT, I.A.S.", period: "26/02/1977 - 22/04/1977" },
    { name: "SHRI B.R.SATARKAR, I.A.S.", period: "01/05/1977 - 27/02/1977" },
    { name: "SHRI S.H.THACKER", period: "16/10/1975 - 01/04/1977" },
    { name: "DR.B.G.GHATE, M.A., LLB, PhilEcon.) London, I.A.S (Retd)", period: "01/01/1966 - 15/10/1975" },
    { name: "SHRI G.G.DESAI, M.A., LLB, I.A.S (Retd)", period: "06/01/1962 - 31/10/1965" },
    { name: "SHRI M.A.KHER, B.Sc., LLB, I.A.S (Retd)", period: "02/02/1956 - 31/05/1962" },
    { name: "SHRI R.D.BEOHAR, M.A., LLB, I.A.S (Retd)", period: "01/12/1953 - 02/01/1956" },
    { name: "SHRI C.L.GUPTA, M.Sc., I.A.S.", period: "04/01/1953 - 12/12/1953" },
    { name: "R.B.F.B. DAS, B.Sc., M.I.", period: "27/05/1949 - 03/01/1953" },
    { name: "CAPT.K.D.PARANJAPE, M.Sc.(Econ.)(Lond.)", period: "27/05/1947 - 26/05/1949" },
    { name: "SHRI A.G.F.FARQUHAR, O.B.E., I.C.S.", period: "20/11/1946 - 26/05/1947" },
    { name: "SHRI B.A. BAMBAWALE, I.C.S.", period: "22/06/1946 - 19/11/1946" },
    { name: "SHRI A.G.F.FARQUHAR,O.B.E., I.C.S.", period: "20/03/1948 - 21/06/1946" },
    { name: "SHRI T.D.WICKENDEN", period: "17/03/1944 - 19/03/1946" },
    { name: "COL.SIR K.V.KUKDAY, C.I.E., I.M.S (Retd)", period: "07/06/1942 - 16/03/1944" },
    { name: "R.B.C.L. VERMA, I.S.O.", period: "05/03/1941 - 07/06/1942" },
    { name: "COL.SIR K.V.KUKDAY, C.I.E., I.M.S (Retd)", period: "01/03/1941 - 05/02/1941" },
    { name: "R.B.C.L. VERMA, I.S.O.", period: "02/01/1940 - 11/02/1941" },
    { name: "SHRI P.S. RAU, I.C.S.", period: "14/11/1939 - 31/01/1940" },
    { name: "SHRI H.C. GREENFIELD, C.I.E., I.C.S.", period: "11/08/1939 - 13/11/1939" },
    { name: "SIR GEOFFREY P. BURTON, K.C.I.E., I.C.S.", period: "14/01/1939 - 11/07/1939" },
    { name: "SHRI H.C. GREENFIELD, C.I.E., I.C.S.", period: "08/12/1938 - 13/01/1939" },
    { name: "SHRI P.S. RAU, I.C.S.", period: "05/11/1939 - 08/11/1939" },
    { name: "SHRI A.L. BINNEY, C.I.E., I.C.S.", period: "15/04/1938 - 04/11/1939" },
    { name: "SHRI H.C.GREENFIELD, C.I.E., I.C.S.", period: "10/02/1938 - 14/04/1939" },
    { name: "SHRI P.S. RAU, I.C.S.", period: "08/02/1938 - 10/01/1938" },
    { name: "SHRI D.J.N. LEE, I.C.S.", period: "04/01/1938 - 08/01/1938" },
    { name: "SIR P.J.H.STENT, C.I.E., I.C.S.", period: "20/02/1937 - 31/03/1938" },
  ]

  const filteredChairmen = pastChairmen.filter(
    (chairman) =>
      chairman.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chairman.period.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-orange-600 mb-4">
              {language === "en" ? "Past Chairmans" : "माजी अध्यक्ष"}
            </h1>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder={language === "en" ? "Search chairman or period..." : "अध्यक्ष किंवा कालावधी शोधा..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>

          {/* Chairman Table */}
          <Card className="shadow-lg">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">
                        {language === "en" ? "Chairman's Name" : "अध्यक्षाचे नाव"}
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">
                        {language === "en" ? "Period" : "कालावधी"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredChairmen.map((chairman, index) => (
                      <tr
                        key={index}
                        className={`border-b hover:bg-gray-50 transition-colors ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="py-4 px-6 font-medium text-gray-900">{chairman.name}</td>
                        <td className="py-4 px-6 text-gray-700">{chairman.period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredChairmen.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  {language === "en" ? "No results found" : "कोणतेही परिणाम सापडले नाहीत"}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Summary */}
          <div className="mt-6 text-center text-gray-600">
            <p>
              {language === "en"
                ? `Showing ${filteredChairmen.length} of ${pastChairmen.length} past chairmen`
                : `${pastChairmen.length} पैकी ${filteredChairmen.length} माजी अध्यक्ष दाखवत आहे`}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
