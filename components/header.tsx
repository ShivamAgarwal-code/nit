"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe, Menu, X } from "lucide-react"

export function Header() {
  const [language, setLanguage] = useState<"en" | "mr">("en")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "mr" : "en"))
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="bg-gradient-to-r from-background to-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-3 sm:py-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-6">
              <div className="flex items-center justify-between gap-2 sm:gap-3 flex-1 min-w-0">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <img
                    src="/images/nit_logo.png"
                    alt="Nagpur Improvement Trust Logo"
                    className="h-10 sm:h-12 md:h-16 w-auto drop-shadow-sm flex-shrink-0"
                    role="img"
                  />
                  <div className="space-y-1 min-w-0 flex-1">
                    <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-serif font-bold text-foreground leading-tight">
                      <span className="block sm:hidden">{language === "en" ? "NIT Nagpur" : "नागपूर न्यास"}</span>
                      <span className="hidden sm:block">
                        {language === "en" ? "Nagpur Improvement Trust" : "नागपूर सुधार न्यास"}
                      </span>
                    </h1>
                    <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium leading-relaxed">
                      {language === "en" ? (
                        <>
                          <div className="block sm:hidden">
                            <div>Local Planning Authority</div>
                            <div>Urban Development Department of GoM</div>
                          </div>
                          <div className="hidden sm:block">
                            Local Planning Authority • Urban Development Department of GoM
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="block sm:hidden">
                            <div>स्थानिक नियोजन प्राधिकरण</div>
                            <div>शहरी विकास विभाग</div>
                          </div>
                          <div className="hidden sm:block">स्थानिक नियोजन प्राधिकरण • शहरी विकास विभाग</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleLanguage}
                    className="border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 bg-transparent text-xs sm:text-sm"
                    aria-label={`Switch to ${language === "en" ? "Marathi" : "English"} language`}
                  >
                    <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">{language === "en" ? "मराठी" : "English"}</span>
                    <span className="sm:hidden">{language === "en" ? "मर" : "EN"}</span>
                  </Button>
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-2 lg:gap-3 xl:gap-4 flex-shrink-0">
                <div className="flex items-center gap-1 lg:gap-2 xl:gap-3">
                  <div className="text-center">
                    <img
                      src="/official-portrait-of-devendra-fadnavis.png"
                      alt="Hon' CM Devendra Fadnavis"
                      className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full object-cover border-2 border-primary/20 mx-auto mb-1"
                    />
                    <div className="text-xs">
                      <div className="font-semibold text-foreground">Hon' CM</div>
                      <div className="text-muted-foreground hidden lg:block">Devendra Fadnavis</div>
                      <div className="text-muted-foreground lg:hidden">D. Fadnavis</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <img
                      src="/official-portrait-of-eknath-shinde.png"
                      alt="Hon' Depy. CM Eknath Shinde"
                      className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full object-cover border-2 border-primary/20 mx-auto mb-1"
                    />
                    <div className="text-xs">
                      <div className="font-semibold text-foreground">Hon' Depy. CM</div>
                      <div className="text-muted-foreground hidden lg:block">Eknath Shinde</div>
                      <div className="text-muted-foreground lg:hidden">E. Shinde</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <img
                      src="/official-portrait-of-ajit-pawar.png"
                      alt="Hon' Depy. CM Ajit Pawar"
                      className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full object-cover border-2 border-primary/20 mx-auto mb-1"
                    />
                    <div className="text-xs">
                      <div className="font-semibold text-foreground">Hon' Depy. CM</div>
                      <div className="text-muted-foreground hidden lg:block">Ajit Pawar</div>
                      <div className="text-muted-foreground lg:hidden">A. Pawar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground shadow-md">
          <div className="container mx-auto px-2 py-2">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-between gap-2">
              <a
                href="/"
                className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap text-white"
              >
                {language === "en" ? "Home" : "मुख्यपृष्ठ"}
              </a>
              <a
                href="/about"
                className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap flex items-center gap-1 text-white"
              >
                {language === "en" ? "About NIT" : "NIT बद्दल"}
                <span className="text-xs">▼</span>
              </a>
              <a
                href="/services"
                className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap flex items-center gap-1 text-white"
              >
                {language === "en" ? "Services" : "सेवा"}
                <span className="text-xs">▼</span>
              </a>
              <a
                href="/projects/completed"
                className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap flex items-center gap-1 text-white"
              >
                {language === "en" ? "Projects" : "प्रकल्प"}
                <span className="text-xs">▼</span>
              </a>
              <a
                href="/development-plan"
                className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap text-white"
              >
                {language === "en" ? "Development plan" : "विकास योजना"}
              </a>
              <a
                href="/metropolitan"
                className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap text-white"
              >
                {language === "en" ? "Metropolitan region" : "महानगर क्षेत्र"}
              </a>
              <a
                href="/media/news"
                className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap flex items-center gap-1 text-white"
              >
                {language === "en" ? "Media" : "माध्यम"}
                <span className="text-xs">▼</span>
              </a>
              <a
                href="/downloads"
                className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap text-white"
              >
                {language === "en" ? "Downloads" : "डाउनलोड"}
              </a>
              <a
                href="/contact/contact-us"
                className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap flex items-center gap-1 text-white"
              >
                {language === "en" ? "Contact" : "संपर्क"}
                <span className="text-xs">▼</span>
              </a>
              <a
                href="/citizen-services"
                className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap text-white"
              >
                {language === "en" ? "Citizen services" : "नागरिक सेवा"}
              </a>
            </nav>

            {/* Mobile Navigation Header */}
            <div className="lg:hidden flex items-center justify-between">
              <span className="text-white font-medium text-sm">{language === "en" ? "Menu" : "मेनू"}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-primary-foreground/10 p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <nav className="lg:hidden mt-4 pb-4 border-t border-primary-foreground/20">
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <a
                    href="/"
                    className="px-3 py-3 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {language === "en" ? "Home" : "मुख्यपृष्ठ"}
                  </a>
                  <a
                    href="/about"
                    className="px-3 py-3 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {language === "en" ? "About NIT" : "NIT बद्दल"}
                  </a>
                  <a
                    href="/services"
                    className="px-3 py-3 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {language === "en" ? "Services" : "सेवा"}
                  </a>
                  <a
                    href="/projects/completed"
                    className="px-3 py-3 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {language === "en" ? "Projects" : "प्रकल्प"}
                  </a>
                  <a
                    href="/development-plan"
                    className="px-3 py-3 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {language === "en" ? "Development plan" : "विकास योजना"}
                  </a>
                  <a
                    href="/metropolitan"
                    className="px-3 py-3 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {language === "en" ? "Metropolitan region" : "महानगर क्षेत्र"}
                  </a>
                  <a
                    href="/media/news"
                    className="px-3 py-3 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {language === "en" ? "Media" : "माध्यम"}
                  </a>
                  <a
                    href="/downloads"
                    className="px-3 py-3 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {language === "en" ? "Downloads" : "डाउनलोड"}
                  </a>
                  <a
                    href="/contact/contact-us"
                    className="px-3 py-3 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {language === "en" ? "Contact" : "संपर्क"}
                  </a>
                  <a
                    href="/citizen-services"
                    className="px-3 py-3 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {language === "en" ? "Citizen services" : "नागरिक सेवा"}
                  </a>
                </div>
              </nav>
            )}
          </div>
        </div>
      </header>

      {/* Mobile officials section below banner */}
      <div className="lg:hidden bg-muted/30 border-b border-border py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <img
                src="/official-portrait-of-devendra-fadnavis.png"
                alt="Hon' CM Devendra Fadnavis"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-primary/20 mx-auto mb-1"
              />
              <div className="text-xs">
                <div className="font-semibold text-foreground">Hon' CM</div>
                <div className="text-muted-foreground">D. Fadnavis</div>
              </div>
            </div>

            <div className="text-center">
              <img
                src="/official-portrait-of-eknath-shinde.png"
                alt="Hon' Depy. CM Eknath Shinde"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-primary/20 mx-auto mb-1"
              />
              <div className="text-xs">
                <div className="font-semibold text-foreground">Hon' Depy. CM</div>
                <div className="text-muted-foreground">E. Shinde</div>
              </div>
            </div>

            <div className="text-center">
              <img
                src="/official-portrait-of-ajit-pawar.png"
                alt="Hon' Depy. CM Ajit Pawar"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-primary/20 mx-auto mb-1"
              />
              <div className="text-xs">
                <div className="font-semibold text-foreground">Hon' Depy. CM</div>
                <div className="text-muted-foreground">A. Pawar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
