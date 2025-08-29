"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  X,
  ChevronLeft,
  ChevronRight,
  Users,
  Home,
  Briefcase,
  GraduationCap,
  Heart,
  ExternalLink,
  Sparkles,
} from "lucide-react"

interface Scheme {
  id: string
  title: {
    en: string
    mr: string
  }
  description: {
    en: string
    mr: string
  }
  beneficiaries: {
    en: string
    mr: string
  }
  icon: React.ReactNode
  category: {
    en: string
    mr: string
  }
  color: string
  bgColor: string
}

interface PromotionalBannerProps {
  language: "en" | "mr"
}

export function PromotionalBanner({ language }: PromotionalBannerProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [currentSchemeIndex, setCurrentSchemeIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const schemes: Scheme[] = [
    {
      id: "pmay",
      title: {
        en: "Pradhan Mantri Awas Yojana 2.0",
        mr: "प्रधानमंत्री आवास योजना 2.0"
      },
      description: {
        en: "Affordable housing scheme providing financial assistance for home construction and purchase",
        mr: "घर बांधकाम आणि खरेदीसाठी आर्थिक सहाय्य प्रदान करणारी परवडणारी गृहनिर्माण योजना"
      },
      beneficiaries: {
        en: "50,000+ families benefited",
        mr: "50,000+ कुटुंबांना लाभ"
      },
      icon: <Home className="h-5 w-5 sm:h-6 sm:w-6" />,
      category: {
        en: "Housing",
        mr: "गृहनिर्माण"
      },
      color: "text-blue-600",
      bgColor: "bg-blue-50 border-blue-200",
    },
    {
      id: "skill-development",
      title: {
        en: "Skill Development Initiative",
        mr: "कौशल्य विकास उपक्रम"
      },
      description: {
        en: "Free vocational training programs for youth to enhance employability and entrepreneurship",
        mr: "तरुणांसाठी रोजगारक्षमता आणि उद्योजकता वाढविण्यासाठी मोफत व्यावसायिक प्रशिक्षण कार्यक्रम"
      },
      beneficiaries: {
        en: "25,000+ trained",
        mr: "25,000+ प्रशिक्षित"
      },
      icon: <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />,
      category: {
        en: "Education",
        mr: "शिक्षण"
      },
      color: "text-green-600",
      bgColor: "bg-green-50 border-green-200",
    },
    {
      id: "employment",
      title: {
        en: "Employment Generation Scheme",
        mr: "रोजगार निर्मिती योजना"
      },
      description: {
        en: "Creating job opportunities through infrastructure projects and local business support",
        mr: "पायाभूत सुविधा प्रकल्प आणि स्थानिक व्यवसाय समर्थनाद्वारे नोकरीच्या संधी निर्माण करणे"
      },
      beneficiaries: {
        en: "15,000+ jobs created",
        mr: "15,000+ नोकऱ्या निर्माण"
      },
      icon: <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />,
      category: {
        en: "Employment",
        mr: "रोजगार"
      },
      color: "text-purple-600",
      bgColor: "bg-purple-50 border-purple-200",
    },
    {
      id: "healthcare",
      title: {
        en: "Universal Healthcare Access",
        mr: "सर्वव्यापी आरोग्य सेवा प्रवेश"
      },
      description: {
        en: "Comprehensive healthcare services and medical insurance coverage for all citizens",
        mr: "सर्व नागरिकांसाठी सर्वसमावेशक आरोग्य सेवा आणि वैद्यकीय विमा संरक्षण"
      },
      beneficiaries: {
        en: "2 lakh+ covered",
        mr: "2 लाख+ संरक्षित"
      },
      icon: <Heart className="h-5 w-5 sm:h-6 sm:w-6" />,
      category: {
        en: "Healthcare",
        mr: "आरोग्यसेवा"
      },
      color: "text-red-600",
      bgColor: "bg-red-50 border-red-200",
    },
    {
      id: "women-empowerment",
      title: {
        en: "Women Empowerment Program",
        mr: "महिला सशक्तिकरण कार्यक्रम"
      },
      description: {
        en: "Financial assistance and skill training for women entrepreneurs and self-help groups",
        mr: "महिला उद्योजक आणि स्वयंसहायता गटांसाठी आर्थिक सहाय्य आणि कौशल्य प्रशिक्षण"
      },
      beneficiaries: {
        en: "30,000+ women empowered",
        mr: "30,000+ महिला सशक्त"
      },
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
      category: {
        en: "Social Welfare",
        mr: "समाज कल्याण"
      },
      color: "text-accent",
      bgColor: "bg-accent/5 border-accent/20",
    },
  ]

  useEffect(() => {
    if (!isVisible) return

    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSchemeIndex((prev) => (prev + 1) % schemes.length)
        setIsAnimating(false)
      }, 150)
    }, 5000)

    return () => clearInterval(timer)
  }, [isVisible, schemes.length])

  const changeScheme = (newIndex: number) => {
    if (newIndex === currentSchemeIndex) return

    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSchemeIndex(newIndex)
      setIsAnimating(false)
    }, 150)
  }

  const nextScheme = () => {
    changeScheme((currentSchemeIndex + 1) % schemes.length)
  }

  const prevScheme = () => {
    changeScheme((currentSchemeIndex - 1 + schemes.length) % schemes.length)
  }

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      action()
    }
  }

  if (!isVisible) return null

  const currentScheme = schemes[currentSchemeIndex]

  return (
    <div
      className={`w-full h-24 sm:h-32 ${currentScheme.bgColor} border-b border-border shadow-sm transition-all duration-500 relative overflow-hidden group`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 w-8 h-8 sm:w-16 sm:h-16 md:w-32 md:h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full -translate-y-4 translate-x-4 sm:-translate-y-8 sm:translate-x-8 md:-translate-y-16 md:translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsVisible(false)}
        onKeyDown={(e) => handleKeyDown(e, () => setIsVisible(false))}
        className="absolute top-1 right-1 sm:top-2 sm:right-2 z-20 h-7 w-7 sm:h-8 sm:w-8 p-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition-all duration-200 hover:scale-110 hover:shadow-md"
        aria-label={language === "en" ? "Close promotional banner" : "प्रोमो बॅनर बंद करा"}
      >
        <X className="h-3 w-3 sm:h-4 sm:w-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={prevScheme}
        onKeyDown={(e) => handleKeyDown(e, prevScheme)}
        className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 p-0 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-full transition-all duration-200 hover:scale-110 hover:shadow-md"
        aria-label={language === "en" ? "Previous scheme" : "मागील योजना"}
      >
        <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={nextScheme}
        onKeyDown={(e) => handleKeyDown(e, nextScheme)}
        className="absolute right-9 sm:right-11 md:right-12 top-1/2 -translate-y-1/2 z-10 h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 p-0 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-full transition-all duration-200 hover:scale-110 hover:shadow-md"
        aria-label={language === "en" ? "Next scheme" : "पुढील योजना"}
      >
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
      </Button>

      <div className="container mx-auto px-12 sm:px-16 md:px-8 py-2 sm:py-4 pb-3 sm:pb-6 relative h-full">
        <div className="flex items-center justify-center gap-2 sm:gap-4 h-full">
          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
            <div
              className={`${currentScheme.color.replace("text-", "bg-").replace("-600", "-500")} text-white p-1.5 sm:p-2 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-3 relative overflow-hidden group/icon`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center justify-center">{currentScheme.icon}</div>
              <Sparkles className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 h-2 w-2 sm:h-3 sm:w-3 text-white/60 animate-pulse" />
            </div>

            <div
              className={`flex-1 min-w-0 transition-all duration-300 ${isAnimating ? "opacity-50 translate-x-2" : "opacity-100 translate-x-0"}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1 sm:mb-0.5">
                <Badge
                  variant="secondary"
                  className={`${currentScheme.color.replace("text-", "bg-").replace("-600", "-500")} text-white text-xs font-semibold px-1.5 py-0.5 rounded-full border-0 shadow-sm hover:shadow-md transition-shadow duration-200 w-fit`}
                >
                  {currentScheme.category[language]}
                </Badge>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                  <span className={`text-xs font-semibold ${currentScheme.color}`}>
                    {currentScheme.beneficiaries[language]}
                  </span>
                </div>
              </div>

              <h3 className="font-sans font-bold text-foreground text-xs sm:text-sm md:text-base mb-0.5 leading-tight hover:text-accent transition-colors duration-200 cursor-pointer line-clamp-1 sm:line-clamp-none">
                {currentScheme.title[language]}
              </h3>

              <p className="text-muted-foreground text-xs leading-relaxed line-clamp-1 sm:line-clamp-1 md:line-clamp-none hidden sm:block">
                {currentScheme.description[language]}
              </p>
            </div>

            <Button
              variant="outline"
              size="sm"
              className={`hidden md:flex items-center gap-1 ${currentScheme.color.replace("text-", "border-").replace("-600", "-300")} ${currentScheme.color} hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-200 hover:scale-105 hover:shadow-md text-xs px-2 py-1`}
            >
              {language === "en" ? "Learn More" : "अधिक जाणा"}
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}