"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function OrganizationChartPage() {
  const [language, setLanguage] = useState<"en" | "mr">("en")

  const organizationData = {
    chairman: {
      name: language === "en" ? "Shri. Sanjay Meena, I.A.S." : "श्री. संजय मीणा, आय.ए.एस.",
      position: language === "en" ? "Chairman" : "अध्यक्ष",
      department: language === "en" ? "Nagpur Improvement Trust" : "नागपूर सुधार न्यास",
    },
    departments: [
      {
        name: language === "en" ? "Administration Department" : "प्रशासन विभाग",
        head: language === "en" ? "Joint Director (Admin)" : "संयुक्त संचालक (प्रशासन)",
        sections: [
          language === "en" ? "Human Resources" : "मानव संसाधन",
          language === "en" ? "General Administration" : "सामान्य प्रशासन",
          language === "en" ? "Legal Affairs" : "कायदेशीर व्यवहार",
        ],
      },
      {
        name: language === "en" ? "Town Planning Department" : "नगर नियोजन विभाग",
        head: language === "en" ? "Joint Director (Town Planning)" : "संयुक्त संचालक (नगर नियोजन)",
        sections: [
          language === "en" ? "Development Planning" : "विकास नियोजन",
          language === "en" ? "Layout Approval" : "लेआउट मंजुरी",
          language === "en" ? "Building Permissions" : "इमारत परवानगी",
        ],
      },
      {
        name: language === "en" ? "Engineering Department" : "अभियांत्रिकी विभाग",
        head: language === "en" ? "Executive Engineer" : "कार्यकारी अभियंता",
        sections: [
          language === "en" ? "Civil Works" : "बांधकाम कामे",
          language === "en" ? "Infrastructure Development" : "पायाभूत सुविधा विकास",
          language === "en" ? "Project Implementation" : "प्रकल्प अंमलबजावणी",
        ],
      },
      {
        name: language === "en" ? "Finance & Accounts" : "वित्त आणि लेखा",
        head: language === "en" ? "Accounts Officer" : "लेखा अधिकारी",
        sections: [
          language === "en" ? "Budget Planning" : "अर्थसंकल्प नियोजन",
          language === "en" ? "Financial Management" : "वित्तीय व्यवस्थापन",
          language === "en" ? "Audit & Compliance" : "लेखापरीक्षा आणि अनुपालन",
        ],
      },
      {
        name: language === "en" ? "Land & Estate Department" : "जमीन आणि इस्टेट विभाग",
        head: language === "en" ? "Deputy Director (Land)" : "उप संचालक (जमीन)",
        sections: [
          language === "en" ? "Land Acquisition" : "जमीन संपादन",
          language === "en" ? "Property Management" : "मालमत्ता व्यवस्थापन",
          language === "en" ? "Revenue Collection" : "महसूल संकलन",
        ],
      },
      {
        name: language === "en" ? "Public Relations" : "जनसंपर्क",
        head: language === "en" ? "Public Relations Officer" : "जनसंपर्क अधिकारी",
        sections: [
          language === "en" ? "Media Relations" : "मीडिया संबंध",
          language === "en" ? "Citizen Services" : "नागरिक सेवा",
          language === "en" ? "Information Dissemination" : "माहिती प्रसार",
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-600 mb-2">
            {language === "en" ? "Organization Chart" : "संघटना चार्ट"}
          </h1>
          <p className="text-gray-600">
            {language === "en"
              ? "Organizational Structure of Nagpur Improvement Trust"
              : "नागपूर सुधार न्यासाची संघटनात्मक रचना"}
          </p>
        </div>

        {/* Chairman Card */}
        <div className="flex justify-center mb-8">
          <Card className="w-full max-w-md bg-orange-50 border-orange-200">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-600">{organizationData.chairman.name.charAt(0)}</span>
              </div>
              <CardTitle className="text-lg text-orange-700">{organizationData.chairman.name}</CardTitle>
              <Badge variant="secondary" className="bg-orange-200 text-orange-800">
                {organizationData.chairman.position}
              </Badge>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600">{organizationData.chairman.department}</p>
            </CardContent>
          </Card>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizationData.departments.map((dept, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-gray-800 text-center">{dept.name}</CardTitle>
                <div className="text-center">
                  <Badge variant="outline" className="text-orange-600 border-orange-300">
                    {dept.head}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-700 mb-3">
                    {language === "en" ? "Key Sections:" : "मुख्य विभाग:"}
                  </h4>
                  {dept.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">{section}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Organizational Flow */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
            {language === "en" ? "Reporting Structure" : "अहवाल रचना"}
          </h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center p-4 bg-orange-100 rounded-lg">
              <span className="font-semibold text-orange-800">{language === "en" ? "Chairman" : "अध्यक्ष"}</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
              {organizationData.departments.map((dept, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">{dept.head}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
