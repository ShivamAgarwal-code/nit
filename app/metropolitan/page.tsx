import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function MetropolitanPage() {
  const [language, setLanguage] = useState<"en" | "mr">("en")
  const documentLinks = [
    { title: "MMRDA Ordinance 2019", isNew: true, href: "/documents/mmrda-ordinance-2019.pdf" },
    {
      title: "Gondkhairy And Pendhri Town Planning Scheme - I",
      isNew: true,
      href: "/documents/gondkhairy-pendhri-scheme-1.pdf",
    },
    {
      title: "Proposed T.P Scheme (Gondkhairy And Pendhri)",
      isNew: true,
      href: "/documents/proposed-tp-scheme-gondkhairy-pendhri.pdf",
    },
    { title: "T.P. Scheme - III", isNew: true, href: "/documents/tp-scheme-3.pdf" },
    {
      title: "Development Control and Promotion Regulations for Nagpur Metropolitan Regional Development Authority",
      isNew: true,
      href: "/documents/development-control-regulations.pdf",
    },
    {
      title: "Notification No :TPS-2416/CR-122(A)/2016/SM/UD-9 of Nagpur Metropolitan Area",
      isNew: true,
      href: "/documents/notification-tps-2416-cr-122a.pdf",
    },
    {
      title: "Notice No :TPS-2416/CR-122(B)/2016/EP/UD-9 of Nagpur Metropolitan Area (EP)",
      isNew: true,
      href: "/documents/notice-tps-2416-cr-122b.pdf",
    },
    {
      title: "Letter regarding Establishment of Nagpur Metropolitan Region Development Authority.",
      isNew: true,
      href: "/documents/letter-establishment-nmrda.pdf",
    },
    {
      title: "Notification regarding Establishment of Nagpur Metropolitan Region Development Authority.",
      isNew: true,
      href: "/documents/notification-establishment-nmrda.pdf",
    },
    { title: "MMRDA Act - 10-01-2016", isNew: true, href: "/documents/mmrda-act-2016.pdf" },
    { title: "MMRDA Act - 10-01-2017", isNew: true, href: "/documents/mmrda-act-2017.pdf" },
    { title: "Modified Pages of Draft DCR", isNew: true, href: "/documents/modified-pages-draft-dcr.pdf" },
    {
      title: "List of Modifications to Draft Development Plan for Nagpur Metropolitan Area",
      isNew: true,
      href: "/documents/list-modifications-draft-plan.pdf",
    },
    { title: "Improvement Scheme for Gondkhairi", isNew: false, href: "/documents/improvement-scheme-gondkhairi.pdf" },
    { title: "Metro Region DCR", isNew: false, href: "/documents/metro-region-dcr.pdf" },
    { title: "Metro Region Development Plan", isNew: false, href: "/documents/metro-region-development-plan.pdf" },
    {
      title: "Gazette notification of Nagpur Metropolitan Area",
      isNew: false,
      href: "/documents/gazette-notification-nagpur-metro.pdf",
    },
    {
      title: "Publication of Draft Development plan of Nagpur Metropolitan Area under MRTP act,1966",
      isNew: false,
      href: "/documents/publication-draft-development-plan.pdf",
    },
    {
      title: "STANDARDISED DEVELOPMENT CONTROL AND PROMOTION REGULATIONS FOR REGIONAL PLANS IN MAHARASHTRA",
      isNew: false,
      href: "/documents/standardised-development-control-regulations.pdf",
    },
    {
      title:
        "Proposed Plan of draf Improvement Scheme - Sumthana-Kotewada-Sondapar-Parsodi-Jamtha ( IS MIHAN),Tah: Hingna and Nagpur (R) published under section 39 of the NIT Act , 1936",
      isNew: false,
      href: "/documents/proposed-plan-improvement-scheme.pdf",
    },
    {
      title: "List of sanctioned building plan in metro",
      isNew: false,
      href: "/documents/list-sanctioned-building-plan-metro.pdf",
    },
    {
      title:
        "Notification for Proposed Modifications in MRTP Rules By Government of Maharashtra, Urban Development Departmentpartment",
      isNew: false,
      href: "/documents/notification-proposed-modifications-mrtp.pdf",
    },
    {
      title: "Revised Development Charges for Layout & Plots applicable from 01.08.2013",
      isNew: false,
      href: "/documents/revised-development-charges.pdf",
    },
    {
      title: "Draft DCR for Improvement Schemes in the Nagpur Metropolitan Area",
      isNew: false,
      href: "/documents/draft-dcr-improvement-schemes.pdf",
    },
    {
      title:
        "(u/s 23 of MRTP Act 1966) Declaration of Intention for the preparation of Development Plan for the Nagpur Metropolitan Area",
      isNew: false,
      href: "/documents/declaration-intention-development-plan.pdf",
    },
    {
      title: "Proposed Khadka-KirmitProposed Khadka-Kirmiti-Shvmadka-Sumthana, Improvement Scheme in Tahsil Hingna",
      isNew: false,
      href: "/documents/proposed-khadka-kirmit-scheme.pdf",
    },
    {
      title: "List of approved layout in metro section",
      isNew: false,
      href: "/documents/list-approved-layout-metro.pdf",
    },
    {
      title: "Terms & Conditions for Non-Residential layouts",
      isNew: false,
      href: "/documents/terms-conditions-non-residential.pdf",
    },
    {
      title: "Terms & Conditions for Residential layouts",
      isNew: false,
      href: "/documents/terms-conditions-residential.pdf",
    },
    { title: "New KaryaPaddhati", isNew: false, href: "/documents/new-karya-paddhati.pdf" },
    {
      title: "Revised Development Policy for Nagpur Metropolitan Area",
      isNew: false,
      href: "/documents/revised-development-policy.pdf",
    },
    {
      title: "List of villages covered within 10 kms of Nagpur Metropolitan Area",
      isNew: false,
      href: "/documents/list-villages-10km-nagpur-metro.pdf",
    },
    { title: "Regional Plan Of Nagpur District", isNew: false, href: "/documents/regional-plan-nagpur-district.pdf" },
    { title: "Notice For Public", isNew: false, href: "/documents/notice-for-public.pdf" },
    {
      title: "Procedure of Sanctioning of Layouts & Building Plans in Nagpur Metropolitan Area",
      isNew: false,
      href: "/documents/procedure-sanctioning-layouts.pdf",
    },
    {
      title:
        "Gazette notification dt.02/09/2010 regarding appointment of NIT as Special Planning Authority for Nagpur Metropolitan Area",
      isNew: false,
      href: "/documents/gazette-notification-nit-appointment.pdf",
    },
    {
      title: "List of Villages Covered in Nagpur Metropolitan Area",
      isNew: false,
      href: "/documents/list-villages-nagpur-metro.pdf",
    },
    {
      title: "Public Notification for Nagpur Metropolitan Area",
      isNew: false,
      href: "/documents/public-notification-nagpur-metro.pdf",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage}/>

      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Metropolitan Region Development</h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>

        {/* 1. Document Links Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">MMRDA Documents & Notifications</h2>
            <div className="space-y-3">
              {documentLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-blue-600 text-2xl">•</span>
                  <Link
                    href={link.href}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 flex-1"
                  >
                    {link.title}
                  </Link>
                  {link.isNew && (
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-medium">New</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Nagpur Metropolitan Region Development Plan Phase 1 Map */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Nagpur Metropolitan Region Development Plan Phase 1
            </h2>
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%202.17.52%E2%80%AFPM-xadpdsx1qdl4DMyahTsbBZzkbCicqN.png"
                alt="Nagpur Metropolitan Region Development Plan Phase 1 - Zonal Map showing different Tahsils and boundaries"
                width={800}
                height={600}
                className="rounded-lg shadow-md max-w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* 3. Nagpur Metro Region Phase 1 & 2 Map */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Nagpur Metro Region - Phase 1 & 2</h2>
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%202.17.38%E2%80%AFPM-oiFkp6zuy3quDY3cGOenIX59tVTrAg.png"
                alt="Nagpur Metro Region Phase 1 & 2 - Detailed administrative map with comprehensive legend"
                width={800}
                height={800}
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* 4. Detailed Text Content */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <div className="prose max-w-none">
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  In the year 1999, Notification was issued by the State of Maharashtra & declared Nagpur Metropolitan
                  Area, which shall comprise whole of the area of Nagpur City, Nagpur Gramin, Hingna, Parshivni, Mauda
                  and Kamptee Taluka and parts of the Savner, kalmeshwar, Umred and Kuhi in which each N-S-E & West
                  boundaries of" Metroregion "around Municipal Corporation Limits of city are clearly described and on
                  same lines Mumbai Metropolitan area and Pune Metro Areas are declared.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Later on vide notification dt. 24.12.2002 Govt. extended the jurisdiction of NIT outside NMC limit
                  under clause 1(2) of NIT Act-1936 as "Nagpur Metropolitan Area" in connection to notification of 1999
                  which ranges approximate 25 to 40 kms area away from NMC limit.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Objectives of Metropolitan Region Planning are</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Laying down broad policies & directions of growth in the principal zones.</li>
                  <li>
                    Determining the hierarchy of roads & access ways in co- ordination with existing roads proposed D.
                    P. roads.
                  </li>
                  <li>
                    Establishing the zoning of land use on the lands falling within 25 to 40 kms are of the township.
                  </li>
                  <li>
                    Determining the standards for common facilities like education health & social facilities for the
                    resident population
                  </li>
                  <li>Ensure planned development in fringe areas.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Planning Area Under Metropolitan Region</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Area of Nagpur region/District 9810 Sqkm</li>
                  <li>Area proposed for Metroregion in 25 to 40 km</li>
                  <li>Area around Nagpur Municipal limit 3780 Sqkm</li>
                  <li>Area Under NMC limit 216 Sqkm</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  NIT has proposed the Metropolitan Region plan in 2 Phases
                </h3>
                <div className="ml-4 space-y-3">
                  <div>
                    <p className="text-gray-700">
                      <strong>A.</strong> Phase I Comprises area -1520 Sqkm ( i.e. boundry of R.P.)
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <strong>B.</strong> Phase II Comprises area -2260 Sq.km
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-700 leading-relaxed">
                      NIT is framing the policy for Metro region planning and once the Metro region plan is finalised,
                      different town planning schemes will be taken up for development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
