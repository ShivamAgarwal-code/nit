import { Facebook, Twitter } from "lucide-react"

interface FooterProps {
  language: "en" | "mr"
}

export function Footer({ language }: FooterProps) {
  return (
    <footer className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-400 rounded-full blur-2xl"></div>
      </div>
      
      {/* Top border with gradient */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left section - Navigation */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {language === "en" ? "Quick Links" : "द्रुत दुवे"}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <a 
                  href="/recruitment" 
                  className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors"></div>
                  <span className="text-sm">{language === "en" ? "Recruitment" : "भरती"}</span>
                </a>
                <a 
                  href="/tenders" 
                  className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:bg-purple-300 transition-colors"></div>
                  <span className="text-sm">{language === "en" ? "Tenders" : "निविदा"}</span>
                </a>
                <a 
                  href="/privacy-policy" 
                  className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <div className="w-2 h-2 bg-pink-400 rounded-full group-hover:bg-pink-300 transition-colors"></div>
                  <span className="text-sm">{language === "en" ? "Privacy Policy" : "गोपनीयता धोरण"}</span>
                </a>
                <a 
                  href="/circulars" 
                  className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full group-hover:bg-green-300 transition-colors"></div>
                  <span className="text-sm">{language === "en" ? "NIT Circulars" : "NIT परिपत्रक"}</span>
                </a>
                <a 
                  href="/contact/feedback-suggestion" 
                  className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:bg-yellow-300 transition-colors"></div>
                  <span className="text-sm">{language === "en" ? "Feedback" : "फीडबॅक"}</span>
                </a>
                <a 
                  href="/contact/complaint-grievances" 
                  className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <div className="w-2 h-2 bg-red-400 rounded-full group-hover:bg-red-300 transition-colors"></div>
                  <span className="text-sm">{language === "en" ? "Complaints" : "तक्रारी"}</span>
                </a>
              </div>
            </div>
            
            {/* Copyright section */}
            <div className="pt-6 border-t border-gray-600/30">
              <p className="text-gray-400 text-xs leading-relaxed">
                <span className="hidden sm:inline">
                  {language === "en" 
                    ? "© 2015 Nagpur Improvement Trust. All Rights Reserved."
                    : "© 2015 नागपूर सुधार न्यास. सर्व हक्क राखीव."
                  }
                </span>
                <span className="sm:hidden">
                  {language === "en" 
                    ? "© 2015 NIT Nagpur. All Rights Reserved."
                    : "© 2015 नागपूर न्यास. सर्व हक्क राखीव."
                  }
                </span>
                <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0">
                  {language === "en" 
                    ? "Designed with ❤️ for better user experience."
                    : "चांगल्या वापरकर्ता अनुभवासाठी ❤️ सह डिझाइन केले."
                  }
                </span>
              </p>
            </div>
          </div>

          {/* Right section - Social Media */}
          <div className="lg:text-right">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              {language === "en" ? "Stay Connected" : "जुळवून घ्या"}
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              {language === "en" 
                ? "Follow us for latest updates and announcements"
                : "नवीनतम अपडेट्स आणि घोषणांसाठी आमचे अनुसरण करा"
              }
            </p>
            <div className="flex lg:justify-end justify-center space-x-4">
              <a
                href="#"
                className="group relative"
                aria-label={language === "en" ? "Facebook" : "फेसबुक"}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 p-3 rounded-xl transition-all duration-300 transform group-hover:scale-110">
                  <Facebook className="h-5 w-5 text-white" />
                </div>
              </a>
              <a
                href="#"
                className="group relative"
                aria-label={language === "en" ? "Twitter" : "ट्विटर"}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-400 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-400 hover:to-blue-400 p-3 rounded-xl transition-all duration-300 transform group-hover:scale-110">
                  <Twitter className="h-5 w-5 text-white" />
                </div>
              </a>
            </div>
            
            {/* Additional contact info */}
            <div className="mt-6 pt-6 border-t border-gray-600/30 lg:border-t-0 lg:pt-0 lg:mt-8">
              <p className="text-gray-400 text-xs text-center lg:text-right">
                {language === "en" ? "Need help? " : "मदत हवी? "}
                <a 
                  href="/contact" 
                  className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-2"
                >
                  {language === "en" ? "Contact us" : "आमच्याशी संपर्क साधा"}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer