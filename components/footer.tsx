import { Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-700 text-white py-4 sm:py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-2">
          {/* Left side - Navigation links and copyright */}
          <div className="flex flex-col gap-2 sm:gap-1 text-center md:text-left w-full md:w-auto">
            <div className="flex flex-col sm:flex-wrap items-center justify-center gap-2 sm:gap-1 text-xs sm:text-sm sm:flex-row md:justify-center">
              <div className="flex items-center gap-1">
                <a href="/recruitment" className="hover:text-gray-300 transition-colors text-white justify-center text-center">
                  Recruitment
                </a>
                <span className="text-white hidden sm:inline">|</span>
              </div>
              <div className="flex items-center gap-1">
                <a href="/tenders" className="hover:text-gray-300 transition-colors text-white">
                  Tenders
                </a>
                <span className="text-white hidden sm:inline">|</span>
              </div>
              <div className="flex items-center gap-1">
                <a href="/privacy-policy" className="hover:text-gray-300 transition-colors text-white">
                  <span className="hidden sm:inline">Privacy Policy & Terms Of Services</span>
                  <span className="sm:hidden">Privacy Policy</span>
                </a>
                <span className="text-white hidden sm:inline">|</span>
              </div>
              <div className="flex items-center gap-1">
                <a href="/circulars" className="hover:text-gray-300 transition-colors text-white">
                  <span className="hidden sm:inline">NIT Circulars & Orders</span>
                  <span className="sm:hidden">Circulars</span>
                </a>
                <span className="text-white hidden sm:inline">|</span>
              </div>
              <div className="flex items-center gap-1">
                <a href="/contact/feedback-suggestion" className="hover:text-gray-300 transition-colors text-white">
                  <span className="hidden sm:inline">Feedback/Suggestion</span>
                  <span className="sm:hidden">Feedback</span>
                </a>
                <span className="text-white hidden sm:inline">|</span>
              </div>
              <div className="flex items-center gap-1">
                <a href="/contact/complaint-grievances" className="hover:text-gray-300 transition-colors text-white">
                  <span className="hidden sm:inline">Complaint/Grievances</span>
                  <span className="sm:hidden">Complaints</span>
                </a>
              </div>
            </div>
            <div className="text-xs text-white leading-relaxed">
              <span className="hidden sm:inline">Copyrights © 2015 Nagpur Improvement Trust. All Rights Reserved</span>
              <span className="sm:hidden">© 2015 NIT Nagpur. All Rights Reserved</span>
            </div>
          </div>

          {/* Right side - Social media */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-3 flex-shrink-0">
            <span className="text-xs sm:text-sm text-white">Stay Connected:</span>
            <div className="flex items-center gap-3 sm:gap-2">
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-2 sm:p-2 rounded-full transition-colors text-center items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 sm:h-4 sm:w-4 text-white px-0 flex-row" />
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-2 sm:p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 sm:h-4 sm:w-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
