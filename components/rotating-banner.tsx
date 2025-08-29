"use client"

import type React from "react"
import { useEffect, useState } from "react"

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
    "Welcome to Nagpur Improvement Trust || Redevelopment of Gokulpeth Market at Gokulpeth Precinct CTS No.1318, Mz.Gadga,Nagpur. || नागपूर सुधार प्रन्यासच्या घरकुल योजने अंतर्गत पूर्व / पश्चिम/ उत्तर/ दक्षिण विभागाअंतर्गत निवासी सदनिकांची जाहीर सोडत. अधिक माहिती आणि अर्ज करण्यासाठी येथे क्लिक करा ||",
    "Right To Public Service act Maharashtra 2015 || महाराष्ट्र लोकसेवा हक्क अधिनियम, २०१५ || Government Gazette( Right to Public Service act,2015) || Click here Quotation Notice for Redevelopment of Deekshabhoomi Premised at Nagpur || Revised calendar for NMRDA Lottery 2021 || Click Here to get Application form for the post of Legal Advisor in NIT / NMRDA || PMAY - Last date for Computer Application till 6.00 PM on 15th July 2019. Click Here to View Corrigendum VI || Date of lottery and venue will be communicated by SMS and Press Note || PMAY - Last Date for Registration ends at 5.00 PM and Online Application ends at 11.59 PM on 29th June 2019 || First Draw for PMAY awaited shortly || Click Here for Tenders / Quotation Notices || जाहीर सूचना - Un-Authorized Construction Notices - MRTP 53 Act (West Division),NMRDA || Functioning of Tribunal, constituted under section 60,61 and 62 of NIT Act 1936 has started from 09th August 2018.Click Here for more Information || Click Here to View Nagpur Municipal Corporation Town Planning Scheme Document || Click Here to Download Regularisation form of Metro Region Like Gunthewari|| Click Here to Download AB forms of Metro Region Building and Layout || Click Here to view Terms and Condition of Samaj Bhavan || Click Here to Download Application form for Registration of Technical Person||Click Here to Download Metro Region Layout Form And Building Form",
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

  return (
    <div
      className="bg-gradient-to-r from-background to-muted/30 text-foreground py-2 sm:py-4 overflow-hidden border-b border-border shadow-sm relative"
      role="banner"
      aria-label="Announcements"
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
              <span className="hidden sm:inline">ANNOUNCEMENTS</span>
              <span className="sm:hidden">NEWS</span>
            </span>
          </div>

          <div className="flex-1 overflow-hidden relative">
            <div className="flex flex-col gap-0.5 sm:gap-1">
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
                aria-label={`Announcement: ${announcements[currentIndex]}. ${!isMobile ? `Click to ${isPaused ? "resume" : "pause"}` : "Continuously scrolling"}`}
              >
                {announcements[currentIndex]}
              </div>

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
                aria-label={`Announcement: ${announcements[currentIndex]}. ${!isMobile ? `Click to ${isPaused ? "resume" : "pause"}` : "Continuously scrolling"}`}
              >
                {announcements[currentIndex]}
              </div>
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
