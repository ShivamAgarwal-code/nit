"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import Footer from "@/components/footer"

export default function DevelopmentPlanPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [language, setLanguage] = useState<"en" | "mr">("en")

  const developmentPlanLinks = [
    {
      title: "DP reservation details of Nagpur City & NIT Jurisdiction",
      isNew: true,
      href: "#",
    },
    {
      title: "DP reservation detail ( Rural )",
      isNew: true,
      href: "#",
    },
    {
      title: "DP Reservation Zonewise",
      isNew: true,
      href: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header language={language} setLanguage={setLanguage}/>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Page Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-2 sm:mb-4">Development Plan</h1>
        </div>

        {/* Display list of links as shown in first screenshot */}
        <div className="mb-6 sm:mb-8">
          <Card className="bg-white">
            <CardContent className="p-4 sm:p-6">
              <ul className="space-y-2 sm:space-y-3">
                {developmentPlanLinks.map((link, index) => (
                  <li key={index} className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-blue-600 hover:text-blue-800 cursor-pointer text-sm sm:text-base">
                      • {link.title}
                    </span>
                    {link.isNew && (
                      <Badge variant="destructive" className="text-xs w-fit">
                        HOT
                      </Badge>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Development Plan image */}
        <div className="mb-6 sm:mb-8">
          <Card className="bg-white">
            <CardContent className="p-3 sm:p-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.46.05%E2%80%AFPM-OWfPQVtwoipUReC5flSavJr4El34n4.png"
                alt="Development Plan - Index for Revised Development Plan Sheets"
                className="w-full h-auto rounded-lg border max-w-full"
              />
            </CardContent>
          </Card>
        </div>

        {/* Revised Plan image */}
        <div className="mb-6 sm:mb-8">
          <Card className="bg-white">
            <CardContent className="p-3 sm:p-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.46.19%E2%80%AFPM-YfwIs7XtyitnbnSS1JKOZp2w1jCmMd.png"
                alt="Revised Draft Development Plan of Nagpur 1986-2011"
                className="w-full h-auto rounded-lg border max-w-full"
              />
            </CardContent>
          </Card>
        </div>

        {/* Road Network image */}
        <div className="mb-6 sm:mb-8">
          <Card className="bg-white">
            <CardContent className="p-3 sm:p-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.46.30%E2%80%AFPM-HtTuGc20L3KkJUCpTgM7gzoUFrF5sa.png"
                alt="Road Network as per Development Plan"
                className="w-full h-auto rounded-lg border max-w-full"
              />
            </CardContent>
          </Card>
        </div>

        {/* Master plan image */}
        <div className="mb-6 sm:mb-8">
          <Card className="bg-white">
            <CardContent className="p-3 sm:p-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.46.42%E2%80%AFPM-CIlmET53CJh2oZcyL1JR7NfKVNSlPd.png"
                alt="Master Plan - 1953"
                className="w-full h-auto rounded-lg border max-w-full"
              />
            </CardContent>
          </Card>
        </div>

        {/* Development plan of nagpur 1976 image */}
        <div className="mb-6 sm:mb-8">
          <Card className="bg-white">
            <CardContent className="p-3 sm:p-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%203.46.58%E2%80%AFPM-lcEtI9kMPCvL0g9B569HlKzzcuvEaD.png"
                alt="Development Plan Of Nagpur - 1976"
                className="w-full h-auto rounded-lg border max-w-full"
              />
            </CardContent>
          </Card>
        </div>

        {/* Planning Process content from screenshot */}
        <div className="mb-6 sm:mb-8">
          <Card className="bg-white">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">The Planning Process</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">1.1 History Of Nagpur City</h3>
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <p>
                    1.1.1 Nagpur witnessed the ups and downs of the Gond and Bhosale region and enjoyed the status of
                    city since Gond King and Raje Bakht Buland Shah upto middle of 18th century. It was the capital of
                    erstwhile central provinces and Berar and Madhya Pradesh upto 1960.Thereafter it is now a second
                    capital of Maharashtra
                  </p>

                  <p>
                    1.1.2 In 1817, the battle of sitabuldi was fought between Appasaheb Bhosale and British.After this
                    war , Nagpur came under the British rule. Due to war and defeat of Bhosale, the economic and
                    cultural activities in the city were hit hard. In addition to this the city had to face epidemic and
                    famine
                  </p>

                  <p>
                    1.1.3 In the middle of 19th century, the British Queen took over all of India.The Nagpur Kingdom was
                    annexed by the British Government and new state named Central Province was created. Nagpur become
                    its capital.At the beginning of 20th century, Berar was attached to the Central Province and the
                    entity was known as Central Province and Berar.
                  </p>

                  <p>
                    1.1.4 The increasing influence of the city on its hinterland attracted the attention of the British
                    Government and made the think of the planned development for Nagpur and its region. Nagpur, being
                    centrally located, is well connected with all prominent cities of India. The conciousness for
                    planned city development was created by Sir Patrick Goddes, the great British Town planner woh had a
                    chance to visit the city .
                  </p>

                  <p>
                    1.1.5 After independence, C.P. and Berar become Madhya Pradesh. Nagpur remained the capital of the
                    Madhya Pradesh State till the state were re-organized on linguistic basis.After that it was attached
                    to Bombay by lingual state and lost its status as a state capital.
                  </p>

                  <p>
                    1.1.6 However it continue to develop as an administrative, educational and cultural center. Being
                    centrally located and full of natural resources of forest and mineral, it also started developing
                    fast in the field of commerce, industries and transport. It has immense growth potential, which
                    needs integrated planning
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Initial Planning Efforts content from screenshot */}
        <div className="mb-6 sm:mb-8">
          <Card className="bg-white">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">1.2 Initial Planning Efforts</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <p>
                  1.2.1 Nagpur Municipal Committee was established in the year 1869.At that time population of city was
                  82,000 with an area of 14.3 sq.km. In the 1872 another body known as civil station sub-committee with
                  an area of 3.8 sq.km. was constituted for town development.
                </p>

                <p>
                  1.2.2 In the year 1937, the than Government of C.P & Berar passed a bill for establishment of town
                  development authority. This was the beginning of Nagpur Improvement Trust whose working is governed by
                  a board of trustees
                </p>

                <p>
                  1.2.3 The Nagpur Improvement Trust in year 1946 with it's unrivalled knowledge of the town and its
                  need and problems prepared <span className="text-blue-600 font-semibold">"MASTER PLAN"</span> for
                  Nagpur. This plan contains financial policy, development control and zoning regulations. The master
                  plan also envisaged area development scheme viz.Civl Station expansion Scheme, Ajni expansion scheme
                  Central Avenue Scheme, which were ably handled by the Nagpur Improvement trust.
                </p>

                <p>
                  1.2.4 Looking to the areas, population and importance of city, the two municipalities and adjoining
                  villages were merges together in 1951 to form Municipal Corporation.At that time there were 42 words
                  with a population of 4.5 lakhs, now they are 129 with population of 25lakhs approx.
                </p>

                <p>
                  1.2.5 After the enforcement of Maharashtra Regional 7 Town Planning Act 1966 the Improvement Trust
                  declared it's intention in the year 1969 to prepare a development plan of Nagpur, but since the
                  Improvement Trust was receiving a number of layout and diversion cases it was necessary first to get
                  the Interim Development Plan prepared under section 32 of M.R.& T.P Act Hence this was prepared and
                  published in the year 1970 and submitted for sanction in the year 1971.
                </p>

                <p>
                  1.2.6 After submission of the Interim Development Plan the draft development plan was also prepared
                  and published in the year 1972. This was republished in the year 1974. The Government finally
                  sanctioned the plan on 3.6.1976 and it has come into force w.e.f.30.7.1976 This was the 1st{" "}
                  <span className="text-blue-600 font-semibold">"DEVELOPMENT PLAN"</span> for Nagpur city.
                </p>

                <p>
                  1.2.7 In addition to above, Nagpur Improvement Trust has till today prepared and development number
                  scheme as below
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Legal formalities content from screenshot */}
        <div className="mb-6 sm:mb-8">
          <Card className="bg-white">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">
                1.3 Legal formalities for the revised development plan
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <p>
                  1.3.1 Under the provisions of section 38 & 23 of the Maharashtra Regional and Town Planning Act,
                  <br />
                  The Nagpur Improvement Trust , a Planning Authority, declared its intention to prepare the revised
                  development plan vide resolution No 9 dt. 27.9.1982.
                </p>

                <p>
                  1.3.2 Under the provision of section 25 of M.R & T.P Act the existing land use map was prepared on
                  25.9.1984.
                </p>

                <p>
                  1.3.3 Under the provisions of section 26 of the M.R. & T.P Act 1966 the revised draft development plan
                  was published on 4.5.1989 in Maharashtra Government Gazette ( within the sanction extended time limit)
                  any suggestion/objections on the proposals of the draft development plan invited within a period of 60
                  days to date of notification in the official gazette. Total 585 suggestion/objection received within
                  the stipulator period.
                </p>

                <p>
                  1.3.4 Planning committee constituted under the provision of section 28(2) of the said act by NITs
                  resolution No.8/778 on 24.7.1989. The planning committee gave reasonable opportunity of being heard to
                  the person who filled their suggestion/objections and submitted its report to the Nagpur Improvement
                  Trust on 2.5.1990(within the extended sanctioned time limit). The Board of Trustees considered the
                  report of planning committee and made such modifications or changes in the draft development plan as
                  it considered peoper:
                </p>

                <p>
                  1.3.5 The draft revised development plan than submitted to the state Government for sanction of
                  11.10.1990
                </p>

                <p>
                  1.3.6 The state Government after consulting the Director of Town Planning returned the draft
                  development plan vide its notification No. TPS/3490/1505/CR/102/UD-9 dated 14.1.1993 to the Nagpur
                  Improvement Trust in exercise of powers confirmed by sub-section(1) of section 31 of te said Act and
                  directed
                </p>

                <p>
                  (a) The planning authority viz. Nagpur Improvement Trust to modify the said draft development plan
                  considering its own letter No. /229 dt.25.3.1992 and letter No.DP/Nagpur (R)/TPV-2/325 dt.9.6.1992
                  from the Director of Town planning Maharashtra State, Pune
                </p>

                <p>
                  (b) The said authority to modify the said draft development plan wherever necessary and if required to
                  follow the procedure under section 29 of the M.R. & T.P.Act, 1966 and submit the same government in
                  accordance with section 30 of the said Act, as early as possible.
                </p>

                <p>
                  1.3.6 As per the directive s of the state Government the revised draft development plan was modified
                  and as the modifications made were of substantial nature, it was publish under the provision of
                  section 29 of the said Act in the Maharashtra Government Gazette on 17.3.1994. For inviting
                  suggestions/objections within stipulated period. A planning committee was constituted under the
                  provisions of section 28(2) of the said act vide Board Resolution dated 23rd May 1994 for scrutinizing
                  the objections/suggestions received on the proposals of MRDP and submitting their recommendations to
                  the planning authority. The planning committee accordingly submitted its report to planning authority
                  in the month of October 1995 (Within extended sanctioned time limit). The planning Authority finalized
                  the report of planning committee and published the modified revised draft development with
                  modifications so made under section 28(4) of the said Act on 30.11.1995 in the Maharashtra Government
                  Gazette and also in local news papers for inspections of public. It is submitted to Government for
                  sanction under section 30 of the said Act. Government sanction the modified Revised Development Plan
                  of Nagpur under section 31 of said Act on 7.1.2000 partly later on sanctioned it finally on 10.9.2001
                  and now It is in Force.
                </p>

                <p>
                  <strong className="text-sm sm:text-base">
                    Note:- For more information Regarding Development Plan Please Contact Smt. Sunita Aloni at NIT Head
                    Qtr.
                  </strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
