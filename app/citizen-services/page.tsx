"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Clock, Shield, Users, ExternalLink, Phone, UserPlus } from "lucide-react"

export default function CitizenServicesPage() {
  const [language, setLanguage] = useState<"en" | "mr">("en")
  const [mobileNumber, setMobileNumber] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      <Header language={language} setLanguage={setLanguage}/>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                <Shield className="h-12 w-12 text-blue-200" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === "en" ? "Maharashtra Right To Service" : "महाराष्ट्र सेवा अधिकार"}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {language === "en" 
                ? "Ensuring transparent, speedy and time-bound public services for all citizens"
                : "सर्व नागरिकांसाठी पारदर्शक, जलद आणि वेळेवर सार्वजनिक सेवा सुनिश्चित करणे"}
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 -mt-6 relative z-10">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Key Features Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {language === "en" ? "Time-Bound Services" : "वेळेवर सेवा"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {language === "en" ? "Services delivered within stipulated time" : "निर्धारित वेळेत सेवा"}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {language === "en" ? "Transparent Process" : "पारदर्शक प्रक्रिया"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {language === "en" ? "Clear and transparent service delivery" : "स्पष्ट आणि पारदर्शक सेवा"}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {language === "en" ? "Citizen Focused" : "नागरिक केंद्रित"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {language === "en" ? "Services designed for citizen convenience" : "नागरिकांच्या सुविधेसाठी"}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Card */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-3">
                  <Shield className="h-6 w-6" />
                  {language === "en" ? "About the Act" : "कायद्याबद्दल"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed">
                      {language === "en"
                        ? "The Maharashtra Right to Public Services Act, 2015 is enacted and is in force since 28.04.2015 to ensure that notified services are provided to the citizens in a transparent, speedy and time-bound manner by various Government Departments and Public Authorities under the Government. Its objective is to provide easy, prompt and time-bound services to the citizens."
                        : "महाराष्ट्र लोक सेवा अधिकार कायदा, 2015 हा 28.04.2015 पासून अंमलात आहे आणि सरकारच्या विविध विभाग आणि सार्वजनिक प्राधिकरणांकडून नागरिकांना पारदर्शक, जलद आणि वेळेवर सेवा पुरवठा करण्यासाठी हा कायदा करण्यात आला आहे."}
                    </p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed">
                      {language === "en"
                        ? "The Maharashtra State Commission for Right to Public Service has been constituted under the above Act to monitor, coordinate, control and improve the public services being provided by the Government. The Commission consists of a Chief Commissioner and six Commissioners. The headquarter of the Commission is at the New Administrative Building, Opposite Mantralaya, Mumbai and the Divisional Offices of the Commissioners are at the six Divisional Headquarters."
                        : "सरकारकडून पुरवल्या जाणाऱ्या सार्वजनिक सेवांचे निरीक्षण, समन्वय, नियंत्रण आणि सुधारणा करण्यासाठी वरील कायद्याअंतर्गत महाराष्ट्र राज्य लोक सेवा अधिकार आयोग स्थापन करण्यात आला आहे."}
                    </p>
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed">
                      {language === "en"
                        ? "If any notified service is not provided to any eligible person within stipulated time or is rejected without proper grounds, the concerned person may file 1st and 2nd appeals with the higher authorities and if he is not satisfied with their decision, he may prefer third appeal to the Commission. The erring officer is liable for a penalty up to Rs 5000/- per case. Notified Services rendered by this Department are as per enclosed proforma."
                        : "जर कोणतीही अधिसूचित सेवा कोणत्याही पात्र व्यक्तीला निर्धारित वेळेत पुरवली जात नसेल किंवा योग्य कारणाशिवाय नाकारली जात असेल, तर संबंधित व्यक्ती उच्च अधिकाऱ्यांकडे पहिले आणि दुसरे अपील दाखल करू शकते."}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-blue-600" />
                    {language === "en"
                      ? "Official Website"
                      : "अधिकृत वेबसाइट"}
                  </h4>
                  <p className="text-gray-700 mb-2">
                    {language === "en"
                      ? "Maharashtra State Commission for Right to Services:"
                      : "महाराष्ट्र राज्य लोक सेवा अधिकार आयोग:"}
                  </p>
                  <a
                    href="https://aaplesarkar.mahaonline.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors"
                  >
                    https://aaplesarkar.mahaonline.gov.in
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 mx-auto mb-3 text-blue-100" />
                  <h3 className="font-semibold mb-2">
                    {language === "en"
                      ? "RTS Act 2015"
                      : "RTS कायदा 2015"}
                  </h3>
                  <p className="text-blue-100 text-sm">
                    {language === "en" ? "Read the complete act" : "संपूर्ण कायदा वाचा"}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 mx-auto mb-3 text-green-100" />
                  <h3 className="font-semibold mb-2">
                    {language === "en" ? "RTS Rules" : "RTS नियम"}
                  </h3>
                  <p className="text-green-100 text-sm">
                    {language === "en" ? "View gazette notification" : "राजपत्र अधिसूचना पहा"}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 mx-auto mb-3 text-purple-100" />
                  <h3 className="font-semibold mb-2">
                    {language === "en" ? "Service List" : "सेवा यादी"}
                  </h3>
                  <p className="text-purple-100 text-sm">
                    {language === "en" ? "Notified services under RTS" : "RTS अंतर्गत सेवा"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Login Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Login Card */}
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
                  <CardTitle className="text-xl font-bold text-center flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    {language === "en" ? "Citizen Login" : "नागरिक लॉगिन"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      {language === "en" ? "Mobile Number" : "मोबाइल नंबर"}
                    </label>
                    <Input
                      type="tel"
                      placeholder={language === "en" ? "Enter Mobile No." : "मोबाइल नंबर टाका"}
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="w-full bg-white border-2 border-gray-200 focus:border-orange-500 focus:ring-orange-500 transition-colors"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300" size="lg">
                    <Phone className="h-4 w-4 mr-2" />
                    {language === "en" ? "Log In" : "लॉग इन"}
                  </Button>

                  <div className="text-center pt-2 border-t border-gray-200">
                    <Button variant="link" className="text-blue-600 hover:text-blue-800 p-0 font-medium flex items-center gap-1 mx-auto">
                      <UserPlus className="h-4 w-4" />
                      {language === "en" ? "New User? Register Here" : "नवीन वापरकर्ता? नोंदणी करा"}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Help Card */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {language === "en" ? "Need Help?" : "मदत हवी?"}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {language === "en" 
                      ? "Contact our support team for assistance"
                      : "मदतीसाठी आमच्या सपोर्ट टीमशी संपर्क साधा"}
                  </p>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    {language === "en" ? "Contact Support" : "सपोर्टशी संपर्क साधा"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}