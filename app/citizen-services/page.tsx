"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CitizenServicesPage() {
  const [language, setLanguage] = useState<"en" | "mr">("en")
  const [mobileNumber, setMobileNumber] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content Area - Takes up 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            {/* Title Card */}
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600 text-center">
                  {language === "en" ? "Maharashtra Right To Service Act" : "महाराष्ट्र सेवा अधिकार कायदा"}
                </CardTitle>
              </CardHeader>
            </Card>

            {/* Main Content Card */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {language === "en"
                    ? "The Maharashtra Right to Public Services Act, 2015 is enacted and is in force since 28.04.2015 to ensure that notified services are provided to the citizens in a transparent, speedy and time-bound manner by various Government Departments and Public Authorities under the Government. Its objective is to provide easy, prompt and time-bound services to the citizens."
                    : "महाराष्ट्र लोक सेवा अधिकार कायदा, 2015 हा 28.04.2015 पासून अंमलात आहे आणि सरकारच्या विविध विभाग आणि सार्वजनिक प्राधिकरणांकडून नागरिकांना पारदर्शक, जलद आणि वेळेवर सेवा पुरवठा करण्यासाठी हा कायदा करण्यात आला आहे."}
                </p>

                <p className="text-gray-700 leading-relaxed">
                  {language === "en"
                    ? "The Maharashtra State Commission for Right to Public Service has been constituted under the above Act to monitor, coordinate, control and improve the public services being provided by the Government. The Commission consists of a Chief Commissioner and six Commissioners. The headquarter of the Commission is at the New Administrative Building, Opposite Mantralaya, Mumbai and the Divisional Offices of the Commissioners are at the six Divisional Headquarters."
                    : "सरकारकडून पुरवल्या जाणाऱ्या सार्वजनिक सेवांचे निरीक्षण, समन्वय, नियंत्रण आणि सुधारणा करण्यासाठी वरील कायद्याअंतर्गत महाराष्ट्र राज्य लोक सेवा अधिकार आयोग स्थापन करण्यात आला आहे."}
                </p>

                <p className="text-gray-700 leading-relaxed">
                  {language === "en"
                    ? "If any notified service is not provided to any eligible person within stipulated time or is rejected without proper grounds, the concerned person may file 1st and 2nd appeals with the higher authorities and if he is not satisfied with their decision, he may prefer third appeal to the Commission. The erring officer is liable for a penalty up to Rs 5000/- per case. Notified Services rendered by this Department are as per enclosed proforma."
                    : "जर कोणतीही अधिसूचित सेवा कोणत्याही पात्र व्यक्तीला निर्धारित वेळेत पुरवली जात नसेल किंवा योग्य कारणाशिवाय नाकारली जात असेल, तर संबंधित व्यक्ती उच्च अधिकाऱ्यांकडे पहिले आणि दुसरे अपील दाखल करू शकते."}
                </p>

                <div className="pt-4">
                  <p className="text-gray-700 font-medium">
                    {language === "en"
                      ? "Website of the Maharashtra State Commission for Right to Services is:"
                      : "महाराष्ट्र राज्य लोक सेवा अधिकार आयोगाची वेबसाइट:"}
                  </p>
                  <a
                    href="https://aaplesarkar.mahaonline.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    https://aaplesarkar.mahaonline.gov.in
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="secondary"
                className="h-auto py-3 px-4 bg-gray-500 hover:bg-gray-600 text-white text-sm leading-tight whitespace-normal text-center"
              >
                {language === "en"
                  ? "Maharashtra Right to public services Act, 2015"
                  : "महाराष्ट्र लोक सेवा अधिकार कायदा, 2015"}
              </Button>

              <Button
                variant="secondary"
                className="h-auto py-3 px-4 bg-gray-500 hover:bg-gray-600 text-white text-sm leading-tight whitespace-normal text-center"
              >
                {language === "en" ? "RTS Rules Gazette" : "RTS नियम राजपत्र"}
              </Button>

              <Button
                variant="secondary"
                className="h-auto py-3 px-4 bg-gray-500 hover:bg-gray-600 text-white text-sm leading-tight whitespace-normal text-center"
              >
                {language === "en" ? "List of services notified under RTS Act" : "RTS कायद्याअंतर्गत अधिसूचित सेवांची यादी"}
              </Button>
            </div>
          </div>

          {/* Login Sidebar - Takes up 1 column */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center">{language === "en" ? "Login" : "लॉगिन"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input
                    type="tel"
                    placeholder={language === "en" ? "Enter Mobile No." : "मोबाइल नंबर टाका"}
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full bg-white border border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" size="lg">
                  {language === "en" ? "Log In" : "लॉग इन"}
                </Button>

                <div className="text-center">
                  <Button variant="link" className="text-blue-600 hover:text-blue-800 p-0">
                    {language === "en" ? "Register" : "नोंदणी करा"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
