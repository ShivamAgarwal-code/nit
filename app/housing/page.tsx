"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Home, Users, MapPin, Calendar, Phone } from "lucide-react"

export default function HousingPage() {
  const [language, setLanguage] = useState<"en" | "mr">("en")
  const [searchTerm, setSearchTerm] = useState("")

  const housingSchemes = [
    {
      id: 1,
      name: language === "en" ? "Pradhan Mantri Awas Yojana (PMAY)" : "प्रधानमंत्री आवास योजना (PMAY)",
      description:
        language === "en"
          ? "Affordable housing scheme for economically weaker sections and low-income groups"
          : "आर्थिकदृष्ट्या कमकुवत घटक आणि कमी उत्पन्न गटांसाठी परवडणारी गृहनिर्माण योजना",
      eligibility: language === "en" ? "EWS/LIG families" : "EWS/LIG कुटुंबे",
      subsidy: language === "en" ? "Up to ₹2.67 Lakh" : "₹२.६७ लाख पर्यंत",
      status: language === "en" ? "Active" : "सक्रिय",
    },
    {
      id: 2,
      name: language === "en" ? "NIT Housing Scheme" : "NIT गृहनिर्माण योजना",
      description:
        language === "en"
          ? "Residential plots and housing units developed by NIT for middle-income groups"
          : "मध्यम उत्पन्न गटांसाठी NIT द्वारे विकसित निवासी भूखंड आणि गृहनिर्माण युनिट्स",
      eligibility: language === "en" ? "Middle Income Group" : "मध्यम उत्पन्न गट",
      subsidy: language === "en" ? "Subsidized rates" : "अनुदानित दर",
      status: language === "en" ? "Active" : "सक्रिय",
    },
    {
      id: 3,
      name: language === "en" ? "Slum Rehabilitation Scheme" : "झोपडपट्टी पुनर्वसन योजना",
      description:
        language === "en"
          ? "Rehabilitation of slum dwellers with proper housing facilities"
          : "योग्य गृहनिर्माण सुविधांसह झोपडपट्टी रहिवाशांचे पुनर्वसन",
      eligibility: language === "en" ? "Slum dwellers" : "झोपडपट्टी रहिवासी",
      subsidy: language === "en" ? "Free housing" : "मोफत गृहनिर्माण",
      status: language === "en" ? "Ongoing" : "चालू",
    },
    {
      id: 4,
      name: language === "en" ? "Senior Citizen Housing" : "ज्येष्ठ नागरिक गृहनिर्माण",
      description:
        language === "en"
          ? "Special housing facilities designed for senior citizens with accessibility features"
          : "प्रवेशयोग्यता वैशिष्ट्यांसह ज्येष्ठ नागरिकांसाठी डिझाइन केलेल्या विशेष गृहनिर्माण सुविधा",
      eligibility: language === "en" ? "Citizens above 60 years" : "६० वर्षांवरील नागरिक",
      subsidy: language === "en" ? "Special rates" : "विशेष दर",
      status: language === "en" ? "Planning" : "नियोजन",
    },
  ]

  const housingStats = [
    {
      icon: Home,
      title: language === "en" ? "Total Housing Units" : "एकूण गृहनिर्माण युनिट्स",
      value: "15,420",
      description: language === "en" ? "Completed & Under Construction" : "पूर्ण आणि बांधकामाधीन",
    },
    {
      icon: Users,
      title: language === "en" ? "Families Benefited" : "लाभार्थी कुटुंबे",
      value: "12,850",
      description: language === "en" ? "Under various schemes" : "विविध योजनांअंतर्गत",
    },
    {
      icon: MapPin,
      title: language === "en" ? "Housing Projects" : "गृहनिर्माण प्रकल्प",
      value: "28",
      description: language === "en" ? "Across Nagpur region" : "नागपूर क्षेत्रभर",
    },
    {
      icon: Calendar,
      title: language === "en" ? "Years of Service" : "सेवेची वर्षे",
      value: "87+",
      description: language === "en" ? "Since 1936" : "१९३६ पासून",
    },
  ]

  const filteredSchemes = housingSchemes.filter(
    (scheme) =>
      scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            {language === "en" ? "Housing Services" : "गृहनिर्माण सेवा"}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === "en"
              ? "NIT is committed to providing affordable and quality housing solutions for all sections of society. Explore our various housing schemes and initiatives designed to make homeownership accessible to everyone."
              : "NIT समाजातील सर्व घटकांसाठी परवडणारे आणि दर्जेदार गृहनिर्माण उपाय प्रदान करण्यासाठी वचनबद्ध आहे. प्रत्येकासाठी घरमालकी सुलभ करण्यासाठी डिझाइन केलेल्या आमच्या विविध गृहनिर्माण योजना आणि उपक्रमांचा शोध घ्या."}
          </p>
        </div>

        {/* Housing Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {housingStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <stat.icon className="h-8 w-8 text-orange-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-sm font-medium text-gray-700 mb-1">{stat.title}</p>
                <p className="text-xs text-gray-500">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder={language === "en" ? "Search housing schemes..." : "गृहनिर्माण योजना शोधा..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>

        {/* Housing Schemes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {language === "en" ? "Housing Schemes" : "गृहनिर्माण योजना"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSchemes.map((scheme) => (
              <Card key={scheme.id} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-gray-900">{scheme.name}</CardTitle>
                    <Badge variant={scheme.status === "Active" || scheme.status === "सक्रिय" ? "default" : "secondary"}>
                      {scheme.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{scheme.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">
                        {language === "en" ? "Eligibility:" : "पात्रता:"}
                      </span>
                      <span className="text-gray-600">{scheme.eligibility}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">{language === "en" ? "Subsidy:" : "अनुदान:"}</span>
                      <span className="text-orange-600 font-medium">{scheme.subsidy}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    {language === "en" ? "Apply Now" : "आता अर्ज करा"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <Card className="bg-orange-50 border-orange-200">
          <CardHeader>
            <CardTitle className="text-xl text-orange-800 flex items-center gap-2">
              <Phone className="h-5 w-5" />
              {language === "en" ? "Housing Department Contact" : "गृहनिर्माण विभाग संपर्क"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {language === "en" ? "Office Address" : "कार्यालयाचा पत्ता"}
                </h4>
                <p className="text-gray-700">
                  {language === "en"
                    ? "Nagpur Improvement Trust, Station Road, Sadar, Nagpur - 440001"
                    : "नागपूर सुधार न्यास, स्टेशन रोड, सदर, नागपूर - ४४०००१"}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {language === "en" ? "Contact Details" : "संपर्क तपशील"}
                </h4>
                <p className="text-gray-700">
                  {language === "en" ? "Phone: +91-712-2561234" : "फोन: +९१-७१२-२५६१२३४"}
                  <br />
                  {language === "en" ? "Email: housing@nit.gov.in" : "ईमेल: housing@nit.gov.in"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
