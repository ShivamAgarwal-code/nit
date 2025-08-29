"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Search, Phone, Mail, MapPin } from "lucide-react"


export default function ContactUsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [language, setLanguage] = useState<"en" | "mr">("en")

  const employees = [
    { designation: "Chairman", name: "Shri. Sanjay Meena", telephone: "2533202 Fax : 2531079", mobile: "" },
    { designation: "Collector", name: "Dr.Vipin Itankar", telephone: "2564973/2541511 Fax : 2560543", mobile: "" },
    { designation: "Commissioner NMC", name: "Dr.Abhijeet Chaudhari", telephone: "2567001 Fax : 2561584", mobile: "" },
    { designation: "Trustee", name: "Shri.Krishna Khopde", telephone: "2545897", mobile: "" },
    { designation: "Trustee", name: "Shri.Sandeep Itkelwar", telephone: "", mobile: "" },
    { designation: "Jt. Director Town Planning", name: "Shri Vijay Babarao Shende", telephone: "", mobile: "" },
    { designation: "General Manager", name: "Shri Shriram Mundhada", telephone: "2543304", mobile: "" },
    { designation: "Superintending Engineer (Metro)", name: "Shri. Abdul Javed", telephone: "2527563", mobile: "" },
    {
      designation: "Superintending Engineer (HQ)",
      name: "Mr. Prashant Bhandarkar",
      telephone: "2520395",
      mobile: "9823426066",
    },
    { designation: "Executive Officer", name: "Smt. Rasika Kawade", telephone: "", mobile: "" },
    {
      designation: "Deputy Director Town Planning (Metro)",
      name: "Mrs. Supriya Thool",
      telephone: "2223305",
      mobile: "",
    },
    { designation: "Assistant Director Town Planning", name: "-", telephone: "2563764", mobile: "" },
    {
      designation: "Executive Engineer (Technical)",
      name: "Mr. Sanjay Chimurkar",
      telephone: "",
      mobile: "9923481002",
    },
    {
      designation: "Executive Engineer (West/North)",
      name: "Mr. Pankaj Ambhorkar",
      telephone: "",
      mobile: "9923463223",
    },
    {
      designation: "Executive Engineer (Mech)",
      name: "Mr. Chimurkar Sanjay Narendra",
      telephone: "2640576",
      mobile: "9923481002",
    },
    { designation: "Executive Engineer (Metro )", name: "Mr Lalit Raut", telephone: "2232282", mobile: "9823455221" },
    {
      designation: "Executive Engineer (Hotmix)",
      name: "Mr. Nitish Shende",
      telephone: "2684490",
      mobile: "9923696198",
    },
    { designation: "Assistant Engineer - I (Elec)", name: "Shri.Vinayak Zade", telephone: "", mobile: "9823323673" },
    {
      designation: "Assistant Engineer - I (DO East)",
      name: "Shri. Sudhir Rathod",
      telephone: "",
      mobile: "9823026594",
    },
    {
      designation: "Assistant Engineer - I (DO North)",
      name: "Mr. Kamlesh Tembhurne",
      telephone: "",
      mobile: "9673998456",
    },
    {
      designation: "Assistant Engineer - I (Project - I)",
      name: "Smt.Rasika Kawade",
      telephone: "",
      mobile: "9545595242",
    },
    {
      designation: "Assistant Engineer - I (Project - II)",
      name: "Smt.Jagruti Zode",
      telephone: "",
      mobile: "9823449197",
    },
    { designation: "Assistant Engineer - I (DO West)", name: "Mr. Sandeep Raut", telephone: "", mobile: "9923454916" },
    {
      designation: "Assistant Engineer - I (BE North)",
      name: "Shri. Siddharth Mankar",
      telephone: "",
      mobile: "9923423462",
    },
    {
      designation: "Assistant Engineer - I (DO South) (Metro)",
      name: "Shri Ishaan Gour",
      telephone: "",
      mobile: "7507683376",
    },
    {
      designation: "Assistant Engineer - I (DO South)",
      name: "Shri. Avinash Badge",
      telephone: "",
      mobile: "9923441204",
    },
    {
      designation: "Assistant Engineer - I (BE West)",
      name: "Mr. Nepal Bhajipale",
      telephone: "2640366",
      mobile: "9960751119",
    },
    { designation: "Assistant Engineer - I (BE East)", name: "Shri. Dharmendra Chute", telephone: "", mobile: "" },
    {
      designation: "Assistant Engineer - I (BE Metro)",
      name: "Mr. Netaji Bambal",
      telephone: "2223306/2640366",
      mobile: "",
    },
    {
      designation: "Assistant Engineer - I (Technical)",
      name: "Shri. Ishaan Gour",
      telephone: "",
      mobile: "7620132902",
    },
    {
      designation: "Assistant Engineer - I (BE South)",
      name: "Shri. Pankaj Patil",
      telephone: "",
      mobile: "9422822854",
    },
    {
      designation: "Assistant Engineer - I (AE Planning)",
      name: "Mr. Ramesh Choure",
      telephone: "",
      mobile: "9823044635",
    },
    {
      designation: "Chief Account And Finance Officer",
      name: "Mr.Vilin Khadse",
      telephone: "2531819",
      mobile: "8446247686",
    },
    { designation: "Establishment Officer", name: "Mr. Subhasish Dey", telephone: "", mobile: "9822256131" },
    { designation: "Secretary I", name: "Mr. Subhasish Dey", telephone: "", mobile: "9822256131" },
    { designation: "Secretary II", name: "Mr. Pravin S. Dekate", telephone: "", mobile: "9372309118" },
    { designation: "Recovery Officer", name: "Mr. Pravin S. Dekate", telephone: "", mobile: "9372309118" },
    { designation: "Account Officer", name: "Mr. Manoj Mate", telephone: "2556189", mobile: "7972341235" },
    { designation: "PA to Chairman", name: "-", telephone: "", mobile: "" },
    { designation: "For Appointment with Chairman", name: "", telephone: "0712-2533202", mobile: "" },
  ]

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.telephone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.mobile.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage}/>

      <main className="container mx-auto px-4 py-6 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-4 sm:mb-6">Contact Us</h1>

            <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8">
              <p className="text-red-600 font-medium text-center text-sm sm:text-base">
                For any queries regarding Online Payment Please Mail us on : nitonlinecash@gmail.com
              </p>
            </div>
          </div>

          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600 text-center mb-4 sm:mb-6">
              NIT Officers / Employees Contact Numbers
            </h2>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-4 sm:mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="-- Search Here --"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                />
              </div>
            </div>

            {/* Mobile Cards View */}
            <div className="block lg:hidden space-y-3">
              {filteredEmployees.map((employee, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-orange-600 text-sm">{employee.designation}</h3>
                    <p className="font-medium text-gray-900 text-sm">{employee.name}</p>
                    {employee.telephone && (
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Phone className="h-3 w-3" />
                        <span>0712-{employee.telephone}</span>
                      </div>
                    )}
                    {employee.mobile && (
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Phone className="h-3 w-3" />
                        <span>{employee.mobile}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Designation</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Employees Name
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Telephone Office
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Mobile No.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEmployees.map((employee, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 text-sm text-gray-900 border-b">{employee.designation}</td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-b">{employee.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-b">{employee.telephone}</td>
                        <td className="px-4 py-3 text-sm text-gray-900 border-b">{employee.mobile}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Head Office */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Head Office :</h2>
              <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Nagpur Improvement Trust, Station Road, Sadar</p>
                    <p>Nagpur-440001.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-600" />
                  <p>Ph: 0712-2531431, 432 [PBX] | Fax: 0712-2531079</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-orange-600" />
                  <p>Email : nagpurnit@hotmail.com</p>
                </div>
              </div>
            </div>

            {/* East Division */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">East Division :</h2>
              <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Division Office East, Near Lata Mangeshkar Garden, Surya Nagar, Pardi</p>
                    <p>Nagpur-4400035.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-600" />
                  <p>Ph: 0712-2681009, [PBX] | Fax: 0712-2531079</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-orange-600" />
                  <p>Email : nagpurnit@hotmail.com</p>
                </div>
              </div>
            </div>

            {/* West Division / Metro Office */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                West Division / Metro Office :
              </h2>
              <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Opposite NIT swimming pool, North Ambazari Road, Near Dharmapeth Science College</p>
                    <p>Nagpur-440010.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-600" />
                  <p>Ph: 0712-2232282, [PBX] | Fax: 0712-2531079</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-orange-600" />
                  <p>Email : nagpurnit@hotmail.com</p>
                </div>
              </div>
            </div>

            {/* North Division */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">North Division :</h2>
              <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Division Office West/ Metro Office, Opposite Jain Mandir, Vaishali Nagar, Panchpawli</p>
                    <p>Nagpur-440003.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-600" />
                  <p>Ph: 0712-2640366, [PBX] | Fax: 0712-2531079</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-orange-600" />
                  <p>Email : nagpurnit@hotmail.com</p>
                </div>
              </div>
            </div>

            {/* South Division */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">South Division :</h2>
              <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Division Office South, Ishwar Deshmukh College, Krida Chowk, Hanuman Nagar</p>
                    <p>Nagpur-440009.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-600" />
                  <p>Ph: 0712-2744524, [PBX] | Fax: 0712-2531079</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-orange-600" />
                  <p>Email : nagpurnit@hotmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
