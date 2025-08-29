"use client"

import type React from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, ExternalLink, TrendingUp, Users, Building } from "lucide-react"
import { RotatingBanner } from "@/components/rotating-banner"
import { PromotionalBanner } from "@/components/promotional-banner"
import { useLanguage } from "@/components/language-provider"
import { useState, useEffect } from "react"

export default function HomePage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <RotatingBanner />
      <PromotionalBanner />

      <main id="main-content" role="main" className="w-full" aria-label="Main content">
        <ModernVerticalLayout />
      </main>
      
      <Footer />
    </div>
  )
}

function ModernVerticalLayout() {
  const { language } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryImages = [
    { 
      src: "/nagpur-city-development-project.png", 
      alt: language === "en" ? "City Development Project" : "शहर विकास प्रकल्प" 
    },
    { 
      src: "/nagpur-metro-construction.png", 
      alt: language === "en" ? "Metro Construction" : "मेट्रो बांधकाम" 
    },
    { 
      src: "/nagpur-smart-city-initiative.png", 
      alt: language === "en" ? "Smart City Initiative" : "स्मार्ट सिटी उपक्रम" 
    },
    { 
      src: "/nagpur-infrastructure-development.png", 
      alt: language === "en" ? "Infrastructure Development" : "पायाभूत सुविधा विकास" 
    },
  ]

  const newsItems = [
    {
      title: language === "en" ? "New Metro Line Extension Approved" : "नवीन मेट्रो लाइन विस्तार मंजूर",
      date: "2024-01-15",
      category: language === "en" ? "Infrastructure" : "पायाभूत सुविधा",
      excerpt: language === "en" 
        ? "The state government has approved the extension of Metro Line 2 to connect suburban areas..."
        : "राज्य सरकारने उपनगरीय क्षेत्रांना जोडण्यासाठी मेट्रो लाइन 2 च्या विस्तारास मंजुरी दिली आहे...",
    },
    {
      title: language === "en" ? "Smart City Project Phase 2 Launch" : "स्मार्ट सिटी प्रकल्प फेज 2 लॉन्च",
      date: "2024-01-12",
      category: language === "en" ? "Technology" : "तंत्रज्ञान",
      excerpt: language === "en" 
        ? "Phase 2 of the Smart City project includes digital governance initiatives..."
        : "स्मार्ट सिटी प्रकल्पाच्या फेज 2 मध्ये डिजिटल गव्हर्नन्स उपक्रमांचा समावेश आहे...",
    },
    {
      title: language === "en" ? "Affordable Housing Scheme Update" : "परवडणारी गृहनिर्माण योजना अपडेट",
      date: "2024-01-10",
      category: language === "en" ? "Housing" : "गृहनिर्माण",
      excerpt: language === "en" 
        ? "PMAY 2.0 applications are now being processed with enhanced digital features..."
        : "PMAY 2.0 अर्ज आता सुधारित डिजिटल वैशिष्ट्यांसह प्रक्रिया केले जात आहेत...",
    },
    {
      title: language === "en" ? "Infrastructure Development Progress" : "पायाभूत सुविधा विकास प्रगती",
      date: "2024-01-08",
      category: language === "en" ? "Development" : "विकास",
      excerpt: language === "en" 
        ? "Major road widening projects completed in eastern Nagpur with improved connectivity..."
        : "पूर्व नागपूरमध्ये सुधारित कनेक्टिव्हिटीसह प्रमुख रस्ता रुंदीकरण प्रकल्प पूर्ण...",
    },
  ]

  const proposedProjects = [
    {
      title: language === "en" ? "Metro Line 3 Extension" : "मेट्रो लाइन 3 विस्तार",
      description: language === "en" 
        ? "Connecting eastern suburbs to the city center with a 15km extension featuring 12 new stations."
        : "12 नवीन स्टेशन असलेल्या 15 किमी विस्तारासह पूर्वेकडील उपनगरे शहराच्या मध्यभागी जोडणे.",
      budget: "₹2,500 कोटी",
      image: "/nagpur-metro-expansion-project-blueprint.png",
      alt: language === "en" ? "Metro Expansion Project" : "मेट्रो विस्तार प्रकल्प",
    },
    {
      title: language === "en" ? "Smart City Digital Infrastructure" : "स्मार्ट सिटी डिजिटल पायाभूत सुविधा",
      description: language === "en"
        ? "Implementation of IoT sensors, smart traffic management, and digital governance systems across the city."
        : "संपूर्ण शहरात IoT सेन्सर, स्मार्ट ट्रॅफिक व्यवस्थापन आणि डिजिटल गव्हर्नन्स सिस्टमची अंमलबजावणी.",
      budget: "₹1,800 कोटी",
      image: "/nagpur-smart-city-initiative.png",
      alt: language === "en" ? "Smart City Infrastructure Project" : "स्मार्ट सिटी पायाभूत सुविधा प्रकल्प",
    },
    {
      title: language === "en" ? "Integrated Bus Rapid Transit System" : "एकीकृत बस रॅपिड ट्रान्झिट सिस्टम",
      description: language === "en"
        ? "Development of dedicated bus corridors connecting major commercial and residential areas with modern fleet."
        : "आधुनिक फ्लीटसह प्रमुख व्यावसायिक आणि निवासी क्षेत्रांना जोडणारे समर्पित बस कॉरिडॉरचा विकास.",
      budget: "₹950 कोटी",
      image: "/nagpur-infrastructure-development.png",
      alt: language === "en" ? "Bus Rapid Transit Project" : "बस रॅपिड ट्रान्झिट प्रकल्प",
    },
    {
      title: language === "en" ? "Green Belt Development Project" : "हरित पट्टा विकास प्रकल्प",
      description: language === "en"
        ? "Creation of urban forests and green corridors to improve air quality and provide recreational spaces."
        : "हवेची गुणवत्ता सुधारण्यासाठी आणि मनोरंजक स्थान प्रदान करण्यासाठी शहरी जंगले आणि हरित कॉरिडॉर तयार करणे.",
      budget: "₹650 कोटी",
      image: "/nagpur-city-development-project.png",
      alt: language === "en" ? "Green Belt Development Project" : "हरित पट्टा विकास प्रकल्प",
    },
  ]

  const stats = [
    { 
      icon: Building, 
      label: language === "en" ? "Active Projects" : "सक्रिय प्रकल्प", 
      value: "45+", 
      color: "text-accent" 
    },
    { 
      icon: Users, 
      label: language === "en" ? "Citizens Served" : "सेवा दिलेले नागरिक", 
      value: "2.5M+", 
      color: "text-secondary" 
    },
    { 
      icon: TrendingUp, 
      label: language === "en" ? "Development Budget" : "विकास अर्थसंकल्प", 
      value: "₹8,500 कोटी", 
      color: "text-accent" 
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [galleryImages.length])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      action()
    }
  }

  return (
    <div className="w-full">
      {/* Leadership Section */}
      <section className="w-full py-8 sm:py-12 bg-background" aria-labelledby="leadership-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Chairman Section */}
            <div className="mt-6 sm:mt-12 bg-gradient-to-br from-card to-muted/30 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-12 border border-border/50 mx-auto max-w-4xl">
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
                <div className="lg:w-1/3 flex flex-col items-center">
                  <div className="relative mb-4">
                    <img
                      src="/images/sanjay-meena-official.png"
                      alt={language === "en" 
                        ? "Official portrait of Shri. Sanjay Meena, I.A.S., Chairman of Nagpur Improvement Trust"
                        : "श्री. संजय मीणा, आय.ए.एस., नागपूर सुधार न्यासाचे अध्यक्ष यांचे अधिकृत चित्र"
                      }
                      className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full mx-auto object-cover shadow-2xl"
                      role="img"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-foreground">
                      {language === "en" ? "Shri. Sanjay Meena" : "श्री. संजय मीणा"}
                    </h3>
                    <p className="text-base sm:text-lg text-accent font-semibold">
                      {language === "en" ? "I.A.S." : "आय.ए.एस."}
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {language === "en" 
                        ? "Chairman, Nagpur Improvement Trust"
                        : "अध्यक्ष, नागपूर सुधार न्यास"
                      }
                    </p>
                  </div>
                </div>

                <div className="lg:w-2/3 text-center lg:text-left space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    {language === "en"
                      ? "Leading Nagpur's urban transformation with a vision for sustainable development, smart infrastructure, and citizen-centric governance initiatives."
                      : "शाश्वत विकास, स्मार्ट पायाभूत सुविधा आणि नागरिक-केंद्रित शासन उपक्रमांच्या दृष्टिकोनासह नागपूरच्या शहरी परिवर्तनाचे नेतृत्व करत आहेत."
                    }
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link href="/chairman-message">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-border hover:bg-accent hover:text-accent-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium bg-transparent w-full sm:w-auto"
                      >
                        {language === "en" ? "Chairman's Message" : "अध्यक्षांचा संदेश"}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PMAY 2.0 Online Services Section */}
      <section className="w-full py-8 sm:py-12 relative overflow-hidden" aria-labelledby="pmay-heading">
        <div className="absolute inset-0">
          <img src="/nagpur-infrastructure-development.png" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 via-slate-800/70 to-slate-800/50"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              id="pmay-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-white"
            >
              <div className="bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-lg">
                <Building className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <span className="text-center">
                {language === "en" ? "PMAY 2.0 Online Services" : "PMAY 2.0 ऑनलाइन सेवा"}
              </span>
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-8 space-y-3 sm:space-y-4 border border-white/20">
              <Button
                size="lg"
                className="w-full bg-white/90 backdrop-blur-sm text-slate-800 hover:bg-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl"
              >
                <Building className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                {language === "en" ? "Pay Online Now" : "आता ऑनलाइन पैसे भरा"}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/30 text-white hover:bg-white/20 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl bg-transparent backdrop-blur-sm"
              >
                {language === "en" ? "Check Application Status" : "अर्जाची स्थिती तपासा"}
                <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nagpur Metro Network Section */}
      <section
        className="w-full py-8 sm:py-12 bg-gradient-to-br from-background to-accent/5"
        aria-labelledby="metro-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              id="metro-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />
              <span className="text-center">
                {language === "en" ? "Nagpur Metro Network" : "नागपूर मेट्रो नेटवर्क"}
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              {language === "en"
                ? "Connecting the city through modern, efficient public transportation"
                : "आधुनिक, कार्यक्षम सार्वजनिक वाहतुकीद्वारे शहराला जोडणे"
              }
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group"
              role="region"
              aria-label="Image carousel"
            >
              <img
                src="/nagpur-metro-region-map-with-stations.png"
                alt={language === "en" 
                  ? "Interactive map of Nagpur Metro Region showing all stations and lines"
                  : "सर्व स्टेशन आणि लाइन दर्शविणारा नागपूर मेट्रो क्षेत्राचा परस्पर नकाशा"
                }
                className="w-full h-64 sm:h-96 md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-background/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl border border-border/50 max-w-xs sm:max-w-sm">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="bg-accent/10 p-2 sm:p-3 rounded-full">
                      <MapPin className="h-4 w-4 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-lg sm:text-2xl text-foreground">
                        {language === "en" ? "2 Active Lines" : "2 सक्रिय लाइन"}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {language === "en" ? "Operational Network" : "कार्यरत नेटवर्क"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="bg-secondary/10 p-2 sm:p-3 rounded-full">
                      <Building className="h-4 w-4 sm:h-6 sm:w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-lg sm:text-2xl text-foreground">
                        {language === "en" ? "38 Stations" : "38 स्टेशन"}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {language === "en" ? "Serving the City" : "शहराची सेवा"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-accent hover:bg-accent/90 text-accent-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
                aria-label="View interactive map"
              >
                <span className="hidden sm:inline">
                  {language === "en" ? "Interactive Map" : "परस्पर नकाशा"}
                </span>
                <span className="sm:hidden">
                  {language === "en" ? "Map" : "नकाशा"}
                </span>
                <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Updates Section */}
      <section className="w-full py-8 sm:py-12 relative overflow-hidden" aria-labelledby="news-heading">
        <div className="absolute inset-0">
          <img src="/nagpur-smart-city-initiative.png" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-background/60"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2
                id="news-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 flex flex-col sm:flex-row items-center justify-center gap-3"
              >
                <div className="bg-purple-100/80 backdrop-blur-sm p-2 sm:p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                </div>
                <span className="text-center">
                  {language === "en" ? "Latest News & Updates" : "ताज्या बातम्या आणि अपडेट्स"}
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground px-4">
                {language === "en"
                  ? "Stay informed about Nagpur's development progress and initiatives"
                  : "नागपूरच्या विकास प्रगती आणि उपक्रमांबद्दल माहिती घ्या"
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {newsItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow border border-white/20"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-3">
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        (language === "en" ? item.category : item.category) === (language === "en" ? "Infrastructure" : "पायाभूत सुविधा")
                          ? "bg-blue-100/80 text-blue-700"
                          : (language === "en" ? item.category : item.category) === (language === "en" ? "Technology" : "तंत्रज्ञान")
                            ? "bg-purple-100/80 text-purple-700"
                            : (language === "en" ? item.category : item.category) === (language === "en" ? "Housing" : "गृहनिर्माण")
                              ? "bg-green-100/80 text-green-700"
                              : "bg-orange-100/80 text-orange-700"
                      }`}
                    >
                      {item.category}
                    </span>
                    <span className="text-xs sm:text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-3">{item.excerpt}</p>
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0 text-sm sm:text-base">
                    {language === "en" ? "Read More" : "अधिक वाचा"} <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-purple-200/60 text-purple-600 hover:bg-purple-50/80 bg-white/40 backdrop-blur-sm text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                {language === "en" ? "View All News" : "सर्व बातम्या पहा"} <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Proposed Projects Section */}
      <section className="w-full py-4 sm:py-6 relative overflow-hidden" aria-labelledby="projects-heading">
        <div className="absolute inset-0">
          <img src="/nagpur-city-development-project.png" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-muted/95 via-muted/80 to-muted/60"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-4 sm:mb-6">
              <h2 id="projects-heading" className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                {language === "en" ? "Proposed Projects" : "प्रस्तावित प्रकल्प"}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground px-4">
                {language === "en"
                  ? "Transformative infrastructure projects shaping Nagpur's future"
                  : "नागपूरचे भविष्य घडवणारे परिवर्तनकारी पायाभूत सुविधा प्रकल्प"
                }
              </p>
            </div>

            <div className="space-y-2">
              {proposedProjects.slice(0, 3).map((project, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg overflow-hidden border border-white/20 flex flex-col md:flex-row"
                >
                  <div className="md:w-1/2 order-1">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.alt}
                      className="w-full h-48 sm:h-32 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-3 sm:p-2 flex flex-col justify-center order-2">
                    <h3 className="text-base sm:text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-3 sm:mb-2 leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2">
                      <div className="bg-purple-100/80 backdrop-blur-sm text-purple-700 px-2 sm:px-3 py-1 rounded-lg">
                        <span className="text-xs font-medium">
                          {language === "en" ? "Project Budget" : "प्रकल्प अर्थसंकल्प"}
                        </span>
                        <div className="text-sm sm:text-lg font-bold">{project.budget}</div>
                      </div>
                      <Button
                        size="sm"
                        className="bg-slate-800/90 backdrop-blur-sm hover:bg-slate-700 text-white text-xs sm:text-sm px-3 py-1.5"
                      >
                        <span className="hidden sm:inline">
                          {language === "en" ? "View Details" : "तपशील पहा"}
                        </span>
                        <span className="sm:hidden">
                          {language === "en" ? "Details" : "तपशील"}
                        </span>
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Digital Gallery Section */}
      <section className="w-full py-8 sm:py-12 bg-background" aria-labelledby="gallery-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 id="gallery-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                {language === "en" ? "Digital Gallery" : "डिजिटल गॅलरी"}
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground px-4">
                {language === "en"
                  ? "Showcasing Nagpur's development journey through visual stories"
                  : "दृश्य कथांद्वारे नागपूरच्या विकास प्रवासाचे प्रदर्शन"
                }
              </p>
            </div>

            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/nagpur-metro-construction.png"
                alt={language === "en" ? "Metro Construction" : "मेट्रो बांधकाम"}
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                <div className="bg-purple-100 p-1.5 sm:p-2 rounded-full">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                </div>
                <span className="font-semibold text-base sm:text-lg">
                  {language === "en" ? "Metro Construction" : "मेट्रो बांधकाम"}
                </span>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8">
              <Button
                variant="outline"
                size="lg"
                className="border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                {language === "en" ? "View All Photos" : "सर्व फोटो पहा"} <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="w-full py-4 sm:py-6 bg-gradient-to-br from-background via-muted/30 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight px-4">
                {language === "en" ? "Building Tomorrow's Nagpur" : "उद्याच्या नागपूरची निर्मिती"}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                {language === "en"
                  ? "Transforming urban infrastructure through innovative planning, sustainable development, and citizen-centric governance"
                  : "नाविन्यपूर्ण नियोजन, शाश्वत विकास आणि नागरिक-केंद्रित शासनाद्वारे शहरी पायाभूत सुविधांचे रूपांतर"
                }
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50"
                >
                  <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 ${stat.color}`} />
                  <div className="space-y-1">
                    <p className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}