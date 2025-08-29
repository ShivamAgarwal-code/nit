"use client"

import type React from "react"
import { useEffect, useState } from "react"

interface RotatingBannerProps {
  language: "en" | "mr"
}

export function RotatingBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const announcements = [
    {
      en: "Welcome to Nagpur Improvement Trust || Redevelopment of Gokulpeth Market at Gokulpeth Precinct CTS No.1318, Mz.Gadga,Nagpur. || Housing scheme under NIT for East / West / North / South division residential flats public lottery. Click here for more information and application.",
      mr: "नागपूर सुधार न्यासात आपले स्वागत || गोकुळपेठ प्रिसिंक्ट CTS क्र.१३१८, मौजे गडगा, नागपूर येथे गोकुळपेठ मार्केटचा पुनर्विकास || NIT च्या घरकुल योजनेअंतर्गत पूर्व/पश्चिम/उत्तर/दक्षिण विभागाअंतर्गत निवासी फ्लॅटची सार्वजनिक सोडत. अधिक माहिती आणि अर्जासाठी येथे क्लिक करा."
    },
    {
      en: "Right To Public Service act Maharashtra 2015 || Government Gazette (Right to Public Service act, 2015) || Quotation Notice for Redevelopment of Deekshabhoomi Premises at Nagpur || Revised calendar for NMRDA Lottery 2021 || Application form for Legal Advisor in NIT / NMRDA.",
      mr: "महाराष्ट्र लोकसेवा हक्क अधिनियम २०१५ || सरकारी राजपत्र (लोकसेवा हक्क अधिनियम, २०१५) || नागपूर येथे दीक्षाभूमी परिसराच्या पुनर्विकासासाठी कोटेशन नोटिस || NMRDA सोडत २०२१ साठी सुधारित कॅलेंडर || NIT/NMRDA मधील कायदा सल्लागार पदासाठी अर्ज फॉर्म."
    },
    {
      en: "PMAY - Applications processed with enhanced digital features || Date of lottery and venue will be communicated by SMS and Press Note || PMAY - Registration ends at 5.00 PM and Online Application ends at 11.59 PM || First Draw for PMAY awaited shortly || Tenders/Quotation Notices available.",
      mr: "PMAY - सुधारित डिजिटल वैशिष्ट्यांसह अर्जाची प्रक्रिया || सोडताची तारीख आणि ठिकाण SMS आणि प्रेस नोटद्वारे कळवले जाईल || PMAY - नोंदणी संध्याकाळी ५.०० वाजता संपते आणि ऑनलाइन अर्ज रात्री ११.५९ वाजता संपतो || PMAY साठी पहिला ड्रॉ लवकरच अपेक्षित || निविदा/कोटेशन नोटिसेस उपलब्ध."
    }
  ]

  useEffect(() => {
    if (isPaused && !isMobile) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
    }, 15000)

    return () => clearInterval(interval)
  }, [announcements.length, isPaused, isMobile])

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      action()
    }
  }

  const handlePauseToggle = () => {
    if (!isMobile) {
      setIsPaused(!isPaused)
    }
  }

  const currentAnnouncement = language === "en" 
    ? announcements[currentIndex].en 
    : announcements[currentIndex].mr

  return (
    <div
      className="bg-gradient-to-r from-background to-muted/30 text-foreground py-2 sm:py-4 overflow-hidden border-b border-border shadow-sm relative"
      role="banner"
      aria-label={language === "en" ? "Announcements" : "घोषणा"}
      {...(!isMobile && {
        onMouseEnter: () => setIsPaused(true),
        onMouseLeave: () => setIsPaused(false),
      })}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse"></div>

      <div className="container mx-auto px-3 sm:px-6 relative">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold flex-shrink-0 shadow-lg border border-primary/20 backdrop-blur-sm">
            <span className="flex items-center gap-1 sm:gap-2">
              <div className="w-1 h-1 bg-primary-foreground rounded-full animate-pulse"></div>
              <span className="hidden sm:inline">
                {language === "en" ? "ANNOUNCEMENTS" : "घोषणा"}
              </span>
              <span className="sm:hidden">
                {language === "en" ? "NEWS" : "बातम्या"}
              </span>
            </span>
          </div>

          <div className="flex-1 overflow-hidden relative">
            <div
              className="whitespace-nowrap text-xs sm:text-sm md:text-base font-medium transition-all duration-500 hover:text-accent cursor-pointer"
              style={{
                animationName: "marquee",
                animationDuration: isMobile ? "45s" : isPaused ? "0s" : "60s",
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                animationPlayState: isPaused && !isMobile ? "paused" : "running",
              }}
              {...(!isMobile && {
                onClick: handlePauseToggle,
                role: "button",
                tabIndex: 0,
                onKeyDown: (e) => handleKeyDown(e, handlePauseToggle),
              })}
              aria-label={`${language === "en" ? "Announcement" : "घोषणा"}: ${currentAnnouncement}. ${!isMobile ? `${language === "en" ? `Click to ${isPaused ? "resume" : "pause"}` : `${isPaused ? "सुरू करण्यासाठी" : "थांबवण्यासाठी"} क्लिक करा`}` : language === "en" ? "Continuously scrolling" : "सतत स्क्रोल होत आहे"}`}
            >
              {currentAnnouncement}
            </div>

            <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-8 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-4 sm:w-8 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}