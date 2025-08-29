"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Search, Phone, Mail, MapPin } from "lucide-react"

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const directoryData = [
    {
      department: "Administration",
      head: "Shri. Sanjay Meena",
      designation: "Chairman",
      phone: "2533202",
      email: "chairman@nitnagpur.gov.in",
      office: "Head Office",
    },
    {
      department: "Engineering Department",
      head: "Shri. Abdul Javed",
      designation: "Superintending Engineer (Metro)",
      phone: "2527563",
      email: "se.metro@nitnagpur.gov.in",
      office: "Metro Office",
    },
    {
      department: "Town Planning",
      head: "Shri. Vijay Babarao Shende",
      designation: "Jt. Director Town Planning",
      phone: "2543304",
      email: "tp@nitnagpur.gov.in",
      office: "Head Office",
    },
    {
      department: "Finance & Accounts",
      head: "Mr. Vilin Khadse",
      designation: "Chief Account And Finance Officer",
      phone: "2531819",
      email: "accounts@nitnagpur.gov.in",
      office: "Head Office",
    },
    {
      department: "East Division",
      head: "Shri. Sanjay N. Chimurkar",
      designation: "Executive Engineer (East)",
      phone: "2681009",
      email: "east@nitnagpur.gov.in",
      office: "East Division",
    },
    {
      department: "West Division",
      head: "Shri. Pramod P. Dhankar",
      designation: "Executive Engineer (West)",
      phone: "2232282",
      email: "west@nitnagpur.gov.in",
      office: "West Division",
    },
    {
      department: "North Division",
      head: "Shri. Rajesh N. Meghrajani",
      designation: "Executive Engineer (North)",
      phone: "2640366",
      email: "north@nitnagpur.gov.in",
      office: "North Division",
    },
    {
      department: "South Division",
      head: "Shri. Sanjay N. Chimurkar",
      designation: "Executive Engineer (South)",
      phone: "2744524",
      email: "south@nitnagpur.gov.in",
      office: "South Division",
    },
  ]

  const filteredData = directoryData.filter(
    (item) =>
      item.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.head.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.office.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">NIT Directory</h1>
            <p className="text-lg text-muted-foreground">
              Department-wise contact directory of Nagpur Improvement Trust
            </p>
          </div>

          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search departments, names, or designations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredData.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="text-orange-600 text-lg">{item.department}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">{item.head}</h3>
                    <p className="text-sm text-muted-foreground">{item.designation}</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-orange-600" />
                      <span>0712-{item.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-orange-600" />
                      <span>{item.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-orange-600" />
                      <span>{item.office}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No results found for "{searchTerm}"</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
