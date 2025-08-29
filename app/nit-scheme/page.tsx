"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface Scheme {
  srNo: number
  name: string
  nameMarathi: string
}

const schemes: Scheme[] = [
  { srNo: 1, name: "Ajni Expansion Scheme", nameMarathi: "अजनी विस्तार योजना" },
  { srNo: 2, name: "Ajni Street Scheme", nameMarathi: "अजनी स्ट्रीट योजना" },
  {
    srNo: 3,
    name: "Abiyankar Road Widing & Buty Mahal Street Scheme",
    nameMarathi: "अभियंकार रोड विडिंग आणि ब्युटी महाल स्ट्रीट योजना",
  },
  { srNo: 4, name: "Ambazari HSG ACCO Scheme", nameMarathi: "अंबाझरी HSG ACCO योजना" },
  { srNo: 5, name: "Alteration Of Binakhi HSG ACCO Scheme", nameMarathi: "बिनाखी HSG ACCO योजना बदल" },
  { srNo: 6, name: "Bezanbag Improvement Scheme", nameMarathi: "बेझनबाग सुधार योजना" },
  { srNo: 7, name: "Bhamti Parsodi Street Scheme", nameMarathi: "भामती पारसोडी स्ट्रीट योजना" },
  { srNo: 8, name: "Binakhi HSG ACCO Scheme", nameMarathi: "बिनाखी HSG ACCO योजना" },
  { srNo: 9, name: "Civil Station EXP Scheme", nameMarathi: "सिव्हिल स्टेशन EXP योजना" },
  {
    srNo: 10,
    name: "Central Road Scheme Section I( West Precinct)",
    nameMarathi: "केंद्रीय रस्ता योजना विभाग I (पश्चिम परिसर)",
  },
  { srNo: 11, name: "Central Road Scheme Section II-A", nameMarathi: "केंद्रीय रस्ता योजना विभाग II-A" },
  { srNo: 12, name: "Central Road Scheme Section II-B", nameMarathi: "केंद्रीय रस्ता योजना विभाग II-B" },
  { srNo: 13, name: "Central Road Scheme Section III", nameMarathi: "केंद्रीय रस्ता योजना विभाग III" },
  { srNo: 14, name: "Central Road Scheme Section III (Alteration)", nameMarathi: "केंद्रीय रस्ता योजना विभाग III (बदल)" },
  { srNo: 15, name: "Drainage And Sewage Disposal Scheme Part I", nameMarathi: "ड्रेनेज आणि सीवेज डिस्पोजल योजना भाग I" },
  { srNo: 16, name: "Drainage And Sewage Disposal Scheme Part II", nameMarathi: "ड्रेनेज आणि सीवेज डिस्पोजल योजना भाग II" },
  {
    srNo: 17,
    name: "Drainage And Sewage Disposal Scheme Part III",
    nameMarathi: "ड्रेनेज आणि सीवेज डिस्पोजल योजना भाग III",
  },
  { srNo: 18, name: "Ester Industrial Area Street Scheme", nameMarathi: "एस्टर औद्योगिक क्षेत्र स्ट्रीट योजना" },
  { srNo: 19, name: "Green Belt Control Scheme", nameMarathi: "ग्रीन बेल्ट कंट्रोल योजना" },
  { srNo: 20, name: "Gopal Nagar Improvement Scheme", nameMarathi: "गोपाळ नगर सुधार योजना" },
  { srNo: 21, name: "Industrial Area Improvement Scheme", nameMarathi: "औद्योगिक क्षेत्र सुधार योजना" },
  { srNo: 22, name: "Industrial Basti Scheme", nameMarathi: "औद्योगिक बस्ती योजना" },
  { srNo: 23, name: "Indor Housing Accommodation Scheme", nameMarathi: "इंदूर गृहनिर्माण निवास योजना" },
  { srNo: 24, name: "Mount Road Extension Scheme", nameMarathi: "माउंट रोड विस्तार योजना" },
  { srNo: 25, name: "Motibag Improvement Scheme", nameMarathi: "मोतीबाग सुधार योजना" },
  { srNo: 26, name: "Northen Expansion scheme", nameMarathi: "उत्तरी विस्तार योजना" },
  { srNo: 27, name: "Nari Expansion Scheme", nameMarathi: "नारी विस्तार योजना" },
  { srNo: 28, name: "Panchpaoli Housing Accommodation Scheme", nameMarathi: "पंचपावली गृहनिर्माण निवास योजना" },
  { srNo: 29, name: "Futala Street Scheme", nameMarathi: "फुताला स्ट्रीट योजना" },
  { srNo: 30, name: "Pachpaoli Road Widing Scheme", nameMarathi: "पंचपावली रोड विडिंग योजना" },
  {
    srNo: 31,
    name: "Sangam Canalisation And Improvement Scheme Part I",
    nameMarathi: "संगम कॅनालायझेशन आणि सुधार योजना भाग I",
  },
  {
    srNo: 32,
    name: "Sangam Canalisation And Improvement Scheme Part II",
    nameMarathi: "संगम कॅनालायझेशन आणि सुधार योजना भाग II",
  },
  { srNo: 33, name: "Sangam Improvement Scheme", nameMarathi: "संगम सुधार योजना" },
  { srNo: 34, name: "Small Factory Area Scheme", nameMarathi: "लहान कारखाना क्षेत्र योजना" },
  { srNo: 35, name: "Sakkardara Street Scheme", nameMarathi: "सक्करदरा स्ट्रीट योजना" },
  { srNo: 36, name: "Shivangaon Jaitala Street Scheme", nameMarathi: "शिवणगाव जैताला स्ट्रीट योजना" },
  { srNo: 37, name: "Sifabuidi (West) Improvement", nameMarathi: "सिफाबुईडी (पश्चिम) सुधार" },
  { srNo: 38, name: "Tent And Khalashi Line Improvement Scheme", nameMarathi: "तंबू आणि खलाशी लाइन सुधार योजना" },
  { srNo: 39, name: "Wathoda Street Scheme", nameMarathi: "वाथोडा स्ट्रीट योजना" },
  { srNo: 40, name: "Wanjari Housing Accommodation Scheme", nameMarathi: "वंजारी गृहनिर्माण निवास योजना" },
  {
    srNo: 41,
    name: "Winding The Junction of Central Road And Itwari Mahal Road",
    nameMarathi: "केंद्रीय रस्ता आणि इत्वारी महाल रोडचे जंक्शन वळण",
  },
  { srNo: 42, name: "Panchpaoli & Mahal Road", nameMarathi: "पंचपावली आणि महाल रोड" },
  { srNo: 43, name: "Craddock Road & Itwari Station Road", nameMarathi: "क्रॅडॉक रोड आणि इत्वारी स्टेशन रोड" },
  { srNo: 44, name: "Winding Of Golibar Chowk", nameMarathi: "गोलीबार चौक वळण" },
  {
    srNo: 45,
    name: "Chindawada Road Industrial Area Street Scheme",
    nameMarathi: "चिंदावाडा रोड औद्योगिक क्षेत्र स्ट्रीट योजना",
  },
  { srNo: 46, name: "Chichhbhavan Industrial Area Street Scheme", nameMarathi: "छिछभवन औद्योगिक क्षेत्र स्ट्रीट योजना" },
  { srNo: 47, name: "Kamtee Road Industrial Area Street Scheme", nameMarathi: "कामठी रोड औद्योगिक क्षेत्र स्ट्रीट योजना" },
  {
    srNo: 48,
    name: 'Pachpaoli road Over Bridge Approch("T" Junction)',
    nameMarathi: 'पंचपावली रोड ओव्हर ब्रिज अप्रोच ("T" जंक्शन)',
  },
  { srNo: 49, name: "New Nagpur", nameMarathi: "नवीन नागपूर" },
  { srNo: 50, name: "Itwara Station Road", nameMarathi: "इत्वारा स्टेशन रोड" },
  { srNo: 51, name: "Babulkheda Street Scheme", nameMarathi: "बाबुलखेडा स्ट्रीट योजना" },
  { srNo: 52, name: "Umred Road Industrial Area Street Scheme", nameMarathi: "उमरेड रोड औद्योगिक क्षेत्र स्ट्रीट योजना" },
  { srNo: 53, name: "Ganga Jamuna Road Widing Scheme", nameMarathi: "गंगा जमुना रोड विडिंग योजना" },
  { srNo: 54, name: "Pachpoli Road Widing scheme Phase II", nameMarathi: "पंचपोली रोड विडिंग योजना फेज II" },
]

export default function NITSchemePage() {
  const [language, setLanguage] = useState<"en" | "mr">("en")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredSchemes = schemes.filter(
    (scheme) => scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) || scheme.nameMarathi.includes(searchTerm),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-orange-600 mb-2">
              {language === "en" ? "Scheme Of NIT" : "NIT च्या योजना"}
            </h1>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder={language === "en" ? "Search schemes..." : "योजना शोधा..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>
          </div>

          {/* Language Toggle */}
          <div className="text-center mb-6">
            <button
              onClick={() => setLanguage(language === "en" ? "mr" : "en")}
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              {language === "en" ? "मराठी" : "English"}
            </button>
          </div>

          {/* Schemes Table */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">
                {language === "en" ? "List of NIT Schemes" : "NIT योजनांची यादी"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">
                        {language === "en" ? "Sr.No" : "अ.क्र."}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">
                        {language === "en" ? "Name Of Scheme" : "योजनेचे नाव"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSchemes.map((scheme, index) => (
                      <tr
                        key={scheme.srNo}
                        className={`${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } hover:bg-orange-50 transition-colors`}
                      >
                        <td className="px-6 py-4 text-sm text-gray-800 border-b">{scheme.srNo}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 border-b">
                          {language === "en" ? scheme.name : scheme.nameMarathi}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredSchemes.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  {language === "en"
                    ? "No schemes found matching your search."
                    : "आपल्या शोधाशी जुळणारी कोणतीही योजना आढळली नाही."}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Total Count */}
          <div className="text-center mt-4 text-sm text-gray-600">
            {language === "en"
              ? `Showing ${filteredSchemes.length} of ${schemes.length} schemes`
              : `${schemes.length} पैकी ${filteredSchemes.length} योजना दर्शवित आहे`}
          </div>
        </div>
      </main>
    </div>
  )
}
