"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function BoardOfDirectorsPage() {
  const [language, setLanguage] = useState<"en" | "mr">("en")

  const boardMembers = [
    {
      name: language === "en" ? "Shri. Sanjay Meena, I.A.S." : "श्री. संजय मीणा, आय.ए.एस.",
      designation: language === "en" ? "Chairman" : "अध्यक्ष",
      organization: language === "en" ? "Nagpur Improvement Trust" : "नागपूर सुधार न्यास",
      location: language === "en" ? "Nagpur." : "नागपूर.",
      image: "/images/sanjay-meena-official.png",
    },
    {
      name: language === "en" ? "Dr Abhijeet Chaudhari, I.A.S." : "डॉ अभिजीत चौधरी, आय.ए.एस.",
      designation: language === "en" ? "Commissioner" : "आयुक्त",
      organization: language === "en" ? "Nagpur Municipal Corporation" : "नागपूर महानगरपालिका",
      location: language === "en" ? "Nagpur." : "नागपूर.",
      image: "/dr-abhijeet-chaudhari-official-photo.png",
    },
    {
      name: language === "en" ? "Dr. Vipin Itankar, I.A.S." : "डॉ. विपिन इटणकर, आय.ए.एस.",
      designation: language === "en" ? "Collector" : "जिल्हाधिकारी",
      organization: language === "en" ? "Nagpur" : "नागपूर",
      location: "",
      image: "/dr-vipin-itankar-official-photo.png",
    },
    {
      name: language === "en" ? "Shri.Krishna Khopde" : "श्री.कृष्णा खोपडे",
      designation: language === "en" ? "M.L.A (East Nagpur)" : "आमदार (पूर्व नागपूर)",
      organization: language === "en" ? "Nagpur" : "नागपूर",
      location: "",
      image: "/shri-krishna-khopde-mla-official-photo.png",
    },
    {
      name: language === "en" ? "Shri. Sandeep Itkelwar" : "श्री. संदीप इटकेलवार",
      designation: language === "en" ? "Trustee" : "विश्वस्त",
      organization: language === "en" ? "Nagpur." : "नागपूर.",
      location: "",
      image: "/shri-sandeep-itkelwar-official-photo.png",
    },
    {
      name: language === "en" ? "Shri.Vijay Babarao Shende" : "श्री.विजय बाबाराव शेंडे",
      designation: language === "en" ? "Jt Director Town Planning" : "संयुक्त संचालक नगर नियोजन",
      organization: "",
      location: "",
      image: "/shri-vijay-babarao-shende-official-photo.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-500 mb-4">
            {language === "en" ? "Board of Trustee" : "विश्वस्त मंडळ"}
          </h1>
        </div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {boardMembers.map((member, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-40 mx-auto rounded-lg object-cover shadow-md"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-blue-600">{member.name}</h3>
                  <p className="text-gray-800 font-medium">{member.designation}</p>
                  {member.organization && <p className="text-gray-600">{member.organization}</p>}
                  {member.location && <p className="text-gray-600">{member.location}</p>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Language Toggle for Demo */}
        <div className="text-center mt-8">
          <button
            onClick={() => setLanguage((prev) => (prev === "en" ? "mr" : "en"))}
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
          >
            {language === "en" ? "मराठी" : "English"}
          </button>
        </div>
      </div>
    </div>
  )
}
