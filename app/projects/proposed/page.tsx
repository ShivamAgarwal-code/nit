import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function ProposedProjectsPage() {
  const [language, setLanguage] = useState<"en" | "mr">("en")
  const proposedProjects = [
    {
      id: 1,
      name: "Operation & Maintenance of plantation work for three years (Trees, Shrubs, Lawn & Irrigation) in the premises of Shree Mahalaxmi Jagdamba Sansthan at Koradi, Taluka Kamptee, District Nagpur. (T.NO.01 DATED 08.10.2024)",
      lastUpdated: "12-05-2025",
      tenderNo: "T-20241008/1",
      amount: "13003708.54",
      workOrderDate: "14-Oct-2024",
      duration: "36 MONTHS 14-OCT-2027",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.16.28%E2%80%AFPM-BkbahsUSO3lPb0JHCipSksI9cBbMXB.png",
    },
    {
      id: 2,
      name: "Development Of Shree Mahalaxmi Jagdamba Sansthan, Koradi, Tah- Kamptee, Nagpur. (Phase III & IV)",
      lastUpdated: "29-01-2024",
      tenderNo: "01 Dated 29-01-2024",
      amount: "13173.00",
      workOrderDate: "13-Mar-2024",
      duration: "24 Months upto 12-03-2026",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.16.28%E2%80%AFPM-BkbahsUSO3lPb0JHCipSksI9cBbMXB.png",
    },
    {
      id: 3,
      name: "Construction of 348 Residential Quarters and Administrative Building including all Infrastructural Amenities for Commissioner of Police, Nagpur at Lakadganj Police Station Kh. No 192(Part), 193(Part) & 194, city survey No 216, Sheet No 156 Mouza Nagpur, Taluka & Dist. Nagpur",
      lastUpdated: "28-06-2018",
      tenderNo: "01 Dated 09.02.2017",
      amount: "10815549588.63",
      workOrderDate: "04-Jul-2017",
      duration: "24 Months upto 03.07.2019",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.16.28%E2%80%AFPM-BkbahsUSO3lPb0JHCipSksI9cBbMXB.png",
    },
  ]

  const roadProjects = [
    {
      id: 1,
      name: "Asphalting of Approach Road from Wathoda pandhan To Verious 1900, 572 Layout in mz.Wathoda under",
      tenderNo: "",
      amount: "",
      workOrderDate: "",
      duration: "",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.17.16%E2%80%AFPM-duGyIfnMY89PHqLCIQdHdM8FqdlQzs.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.17.16%E2%80%AFPM-duGyIfnMY89PHqLCIQdHdM8FqdlQzs.png",
      ],
    },
    {
      id: 2,
      name: "Asphalting of Road from Besa Chowk to Pimpla",
      tenderNo: "",
      amount: "",
      workOrderDate: "",
      duration: "",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.17.16%E2%80%AFPM-duGyIfnMY89PHqLCIQdHdM8FqdlQzs.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.17.16%E2%80%AFPM-duGyIfnMY89PHqLCIQdHdM8FqdlQzs.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.17.16%E2%80%AFPM-duGyIfnMY89PHqLCIQdHdM8FqdlQzs.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.17.16%E2%80%AFPM-duGyIfnMY89PHqLCIQdHdM8FqdlQzs.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.17.16%E2%80%AFPM-duGyIfnMY89PHqLCIQdHdM8FqdlQzs.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.17.16%E2%80%AFPM-duGyIfnMY89PHqLCIQdHdM8FqdlQzs.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.17.16%E2%80%AFPM-duGyIfnMY89PHqLCIQdHdM8FqdlQzs.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.17.16%E2%80%AFPM-duGyIfnMY89PHqLCIQdHdM8FqdlQzs.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.17.16%E2%80%AFPM-duGyIfnMY89PHqLCIQdHdM8FqdlQzs.png",
      ],
    },
    {
      id: 3,
      name: "Asphalting of 18 meter DP Road from Godhani Road to Ring Road through Doye Layout KH. No 199/1 Mz. Z",
      tenderNo: "",
      amount: "",
      workOrderDate: "",
      duration: "",
      images: [],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage}/>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-4">Proposed Projects</h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Upcoming development projects planned by Nagpur Improvement Trust for urban infrastructure enhancement.
          </p>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="projects" className="text-sm font-medium">
              Projects
            </TabsTrigger>
            <TabsTrigger value="roads" className="text-sm font-medium">
              Roads
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <div className="space-y-6">
              {proposedProjects.map((project) => (
                <Card key={project.id} className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={`Project ${project.id}`}
                        className="w-24 h-16 object-cover rounded"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-foreground leading-tight">{project.name}</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Last Updated: </span>
                          <span className="font-medium">{project.lastUpdated}</span>
                        </div>
                        {project.tenderNo && (
                          <div>
                            <span className="text-muted-foreground">Tender Nos: </span>
                            <span className="font-medium">{project.tenderNo}</span>
                          </div>
                        )}
                        {project.amount && (
                          <div>
                            <span className="text-muted-foreground">Amount: </span>
                            <span className="font-medium">₹{project.amount}</span>
                          </div>
                        )}
                        {project.workOrderDate && (
                          <div>
                            <span className="text-muted-foreground">Date of Work Order: </span>
                            <span className="font-medium">{project.workOrderDate}</span>
                          </div>
                        )}
                        {project.duration && (
                          <div className="md:col-span-2">
                            <span className="text-muted-foreground">Time: </span>
                            <span className="font-medium">{project.duration}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="roads" className="space-y-6">
            <div className="space-y-8">
              {roadProjects.map((project) => (
                <Card key={project.id} className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">{project.name}</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Tender Nos: </span>
                        <span className="font-medium">{project.tenderNo || "TBD"}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Amount: </span>
                        <span className="font-medium">{project.amount || "TBD"}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Date of Work Order: </span>
                        <span className="font-medium">{project.workOrderDate || "TBD"}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Time: </span>
                        <span className="font-medium">{project.duration || "TBD"}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
                      {project.images.map((image, index) => (
                        <div key={index} className="aspect-video">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`${project.name} - Image ${index + 1}`}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
