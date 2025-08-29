"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Download, FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DownloadItem {
  title: string
  href: string
  type?: "pdf" | "doc" | "form" | "link"
}

interface DownloadSection {
  title: string
  items: DownloadItem[]
}

export default function DownloadsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [language, setLanguage] = useState<"en" | "mr">("en")

  const downloadSections: DownloadSection[] = [
    {
      title: "Acts",
      items: [
        { title: "RTI Act", href: "#", type: "pdf" },
        { title: "N.I.T Act", href: "#", type: "pdf" },
        { title: "Land Acquisition act", href: "#", type: "pdf" },
        { title: "Gunthewari act", href: "#", type: "pdf" },
        { title: "Amendment in Gunthewari Act", href: "#", type: "pdf" },
        { title: "The Maharashtra Regional and Town Planning Act", href: "#", type: "pdf" },
        { title: "Fire Prevention & Life Safety Act, 2006 (Marathi)", href: "#", type: "pdf" },
        { title: "Fire Prevention & Life Safety Act, 2006 (English)", href: "#", type: "pdf" },
        { title: "NMC Act", href: "#", type: "pdf" },
      ],
    },
    {
      title: "Rules",
      items: [
        {
          title: "Unified Development Control and Promotion Regulations For Maharashtra State-2022",
          href: "#",
          type: "pdf",
        },
        { title: "LDR Notification 11.07.2016", href: "#", type: "pdf" },
        { title: "Development Control Rules", href: "#", type: "pdf" },
        { title: "Land Disposal Rules - 1955", href: "#", type: "pdf" },
        { title: "Land Disposal Rules", href: "#", type: "pdf" },
        { title: "Government of Maharashtra Notification of amendment in 16 & 20 in NIT LDR", href: "#", type: "pdf" },
        { title: "Fire Prevention & Life Safety Rule, 2009 (Marathi)", href: "#", type: "pdf" },
        { title: "Fire Prevention & Life Safety Rule, 2009 (English)", href: "#", type: "pdf" },
      ],
    },
    {
      title: "Government Circulars",
      items: [
        { title: "Recruitment and Classification Of Service Dated : 03.06.2019", href: "#", type: "pdf" },
        { title: "Guidelines for Affordable Housing in Partnership", href: "#", type: "pdf" },
        { title: "Self Declaration And Attestation (English)", href: "#", type: "form" },
        { title: "Self Declaration And Attestation (Marathi)", href: "#", type: "form" },
        { title: "Additional FSI", href: "#", type: "pdf" },
        { title: "GST and Tender guidelines", href: "#", type: "pdf" },
        { title: "GR No.18.09.2017", href: "#", type: "link" },
        { title: "GR No. 07.10.2017", href: "#", type: "link" },
      ],
    },
    {
      title: "FormCenter",
      items: [
        { title: "Gunthewari Compounding Regularisation Form", href: "#", type: "form" },
        { title: "Contractor Registration Form", href: "#", type: "form" },
        { title: "Gunthewari Building Form", href: "#", type: "form" },
        { title: "Licence Surveyor Application Form", href: "#", type: "form" },
        { title: "Form No 60", href: "#", type: "form" },
        { title: "Plot Regularization Gunthewari Form", href: "#", type: "form" },
        { title: "CFC Application Form", href: "#", type: "form" },
      ],
    },
    {
      title: "Gunthewari Like Regularisation Drive in Metro Region (only for 6 Months)",
      items: [
        { title: "Public Notice", href: "#", type: "pdf" },
        { title: "GR. no 10.10.2017", href: "#", type: "link" },
        { title: "NMRDA Application Form", href: "#", type: "form" },
      ],
    },
    {
      title: "Metro Region Building Form",
      items: [
        { title: "AB Form", href: "#", type: "form" },
        { title: "Plot Release Form", href: "#", type: "form" },
        { title: "Metro Region Building Compounding Charges dated on 07.10.2017", href: "#", type: "pdf" },
        { title: "Appendix 'E-2'", href: "#", type: "pdf" },
        { title: "Appendix 'F'", href: "#", type: "pdf" },
        { title: "Appendix 'G'", href: "#", type: "pdf" },
        { title: "Appendix 'H'", href: "#", type: "pdf" },
        { title: "Appendix 'I'", href: "#", type: "pdf" },
        { title: "Appendix 'J'", href: "#", type: "pdf" },
        { title: "Appendix 'K'", href: "#", type: "pdf" },
        {
          title: "Application for Environmental Clearance (for the Construction Area above 5000 SQM )",
          href: "#",
          type: "form",
        },
        {
          title:
            "Notification for Special Regulations for Development/Redevelopment of building falling within Nagpur Metro Rail Corridor(NMRC)",
          href: "#",
          type: "pdf",
        },
      ],
    },
    {
      title: "Schedule of Rates",
      items: [{ title: "e-DSR for year 2017-18", href: "#", type: "pdf" }],
    },
    {
      title: "Information under RTI",
      items: [
        { title: "Implementation of RTI 2005 of Act 4(1) (k) and (Kh)", href: "#", type: "pdf" },
        { title: "Government Gazette( Right to Public Service act, Mah. 2015)", href: "#", type: "pdf" },
        { title: "Implementation of RTI 2005 of Act 4(1) (k) and (kh) - Roaster", href: "#", type: "pdf" },
        { title: "Act clause 4(1)(b) (Marathi)", href: "#", type: "pdf" },
        { title: "Implementation of RTI 2005 of Act 4(1) (k) and (kh) - Job Chart", href: "#", type: "pdf" },
        { title: "NIT Officers / Employees Salary Details & Contact Numbers", href: "#", type: "pdf" },
        { title: "List of Information Officer & Assistant Information Officer", href: "#", type: "pdf" },
        { title: "Seniority_List_2025-3", href: "#", type: "pdf" },
        { title: "Seniority List (2025)-1", href: "#", type: "pdf" },
        { title: "Seniority List (2025)-2", href: "#", type: "pdf" },
        { title: "Seniority List (2024)-1", href: "#", type: "pdf" },
        { title: "Seniority List (2023)-1", href: "#", type: "pdf" },
        { title: "Seniority List (2024)-2", href: "#", type: "pdf" },
        { title: "Amar Asha Society", href: "#", type: "pdf" },
        { title: "k-prat-RTI", href: "#", type: "pdf" },
        { title: "Assured Progressive Scheme (Class-C & D)", href: "#", type: "pdf" },
        { title: "Assured Progressive Scheme (Class-A & B)", href: "#", type: "pdf" },
        { title: "Announcement of Completion of Service for Section Engineer (Sambhodhan)", href: "#", type: "pdf" },
        { title: "Promotion Order of Superintending Engineer", href: "#", type: "pdf" },
      ],
    },
    {
      title: "CVC Guidelines",
      items: [{ title: "Central Vigilance Commission (CVC) Guidelines", href: "#", type: "pdf" }],
    },
    {
      title: "Autocad Drawings for Bidders",
      items: [
        {
          title: "Download AutoCAD Drawings for 10000 Dwellings under Pradhan Mantri Awas Yojana (PMAY) (Wathoda)",
          href: "#",
          type: "doc",
        },
        {
          title: "Download AutoCAD Drawings for 10000 Dwellings under Pradhan Mantri Awas Yojana (PMAY) (Wanjri)",
          href: "#",
          type: "doc",
        },
      ],
    },
    {
      title: "NIT Notifications",
      items: [
        { title: "Process Flow of Tender Evaluation & Work Order", href: "#", type: "pdf" },
        { title: "Order by Hon'ble Chairman for Gunthewari Regularization Dt. 07.04.25", href: "#", type: "pdf" },
        { title: "Document List For NIT Lease Renewal", href: "#", type: "pdf" },
        { title: "Delegation of Power for Gunthewari to Executive Engineer", href: "#", type: "pdf" },
        { title: "Lease Renewal Pending List-South Division", href: "#", type: "pdf" },
        { title: "Lease Renewal Pending List-North Division", href: "#", type: "pdf" },
        { title: "Lease Renewal Pending List-West Division", href: "#", type: "pdf" },
        { title: "Lease Renewal Pending List- East Division", href: "#", type: "pdf" },
        { title: "Revised calendar for NMRDA Lottery 2021", href: "#", type: "pdf" },
        {
          title:
            "Environmental Clearance for proposed Integrated Development of Shri Mahalaxmi Jagadamba Sansthan Koradi",
          href: "#",
          type: "pdf",
        },
        { title: "NMRDA PMAY Lottery Waiting List -18.05.2023", href: "#", type: "pdf" },
        {
          title:
            "Environmental clearance for proposed Construction of 348 Residential Quarters and Administrative Buildings Including all Infrastructural Amenities for Commissioner of Police Nagpur",
          href: "#",
          type: "pdf",
        },
        { title: "Terms and Condition of Samaj Bhavan", href: "#", type: "pdf" },
        {
          title:
            "Environmental Clearance for Proposed Residential Affordable Housing scheme under Pradhan Mantri Awas Yojana",
          href: "#",
          type: "pdf",
        },
        { title: "Public Private Partnership Models for Affordable Housing Sep - 2017", href: "#", type: "pdf" },
        { title: "Comprehensive Mobility Plan for Nagpur City", href: "#", type: "pdf" },
      ],
    },
    {
      title: "Metro Region Layout Form",
      items: [
        { title: "NMRDA Layout Form", href: "#", type: "form" },
        { title: "APPLICATION FORM FOR REGISTRATION OF TECHNICAL PERSON", href: "#", type: "form" },
      ],
    },
    {
      title: "Nagpur Municipal Corporation Town Planning Scheme",
      items: [
        { title: "Part I - Document", href: "#", type: "pdf" },
        { title: "Part II - Drawing Set", href: "#", type: "pdf" },
      ],
    },
    {
      title: "TDR",
      items: [
        { title: "Details of TDR", href: "#", type: "pdf" },
        { title: "TDR Details 2025", href: "#", type: "pdf" },
      ],
    },
    {
      title: "Presentations",
      items: [
        {
          title:
            "Nagpur Metropolitan Area Turns Smart Metropolitan Region Through Secured Governance Strategy By Dr P. Shekhar",
          href: "#",
          type: "pdf",
        },
        {
          title:
            "Presentation on Building plans, Layout Plans, Stage Permits & Occupancy Certificate By Rajesh Megharajani, Executive Engineer (NMRDA)",
          href: "#",
          type: "pdf",
        },
        { title: "Presentation on Transit Oriented Development By Ar. Ashok Mokha", href: "#", type: "pdf" },
        { title: "Presentation on Improvement Scheme - 1 By Shri. Ashish Uikey, ADTP(NMRDA)", href: "#", type: "pdf" },
        { title: "Presentation on Improvement Scheme - 2 By Shri. Ashish Uikey, ADTP(NMRDA)", href: "#", type: "pdf" },
      ],
    },
    {
      title: "Maharashtra Land Revenue Code",
      items: [
        { title: "2004.04", href: "#", type: "pdf" },
        { title: "2004.12", href: "#", type: "pdf" },
        { title: "2004.17", href: "#", type: "pdf" },
        { title: "2005.26", href: "#", type: "pdf" },
        { title: "2005.28", href: "#", type: "pdf" },
        { title: "2005.43", href: "#", type: "pdf" },
        { title: "2007.17", href: "#", type: "pdf" },
        { title: "2007.24", href: "#", type: "pdf" },
        { title: "2009.02", href: "#", type: "pdf" },
      ],
    },
  ]

  const filteredSections = downloadSections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase())),
    }))
    .filter((section) => section.items.length > 0)

  const getIcon = (type?: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-4 w-4 text-red-500" />
      case "doc":
        return <FileText className="h-4 w-4 text-blue-500" />
      case "form":
        return <FileText className="h-4 w-4 text-green-500" />
      case "link":
        return <ExternalLink className="h-4 w-4 text-orange-500" />
      default:
        return <Download className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">Downloads</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access important documents, forms, acts, rules, and notifications from the Nagpur Improvement Trust
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* Download Sections */}
        <div className="space-y-8">
          {filteredSections.map((section, index) => (
            <Card key={index} className="shadow-sm">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-orange-600" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center justify-center gap-3 p-3 rounded-lg border bg-white hover:bg-gray-50 transition-colors group text-center"
                    >
                      <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
                        <div className="flex items-center justify-center">{getIcon(item.type)}</div>
                        <a
                          href={item.href}
                          className="text-sm font-medium text-blue-600 hover:text-blue-800 line-clamp-2 group-hover:underline text-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.title}
                        </a>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="opacity-0 group-hover:opacity-100 transition-opacity mt-1"
                          asChild
                        >
                          <a href={item.href} target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSections.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">No documents found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or browse all categories above.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
