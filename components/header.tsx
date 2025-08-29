"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe, Menu, X, ChevronDown } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Header() {
  const { language, toggleLanguage } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false)
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false)
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeAllDropdowns = () => {
    setIsAboutDropdownOpen(false)
    setIsServicesDropdownOpen(false)
    setIsProjectsDropdownOpen(false)
    setIsMediaDropdownOpen(false)
    setIsContactDropdownOpen(false)
  }

  const aboutMenuItems = [
    {
      label: language === "en" ? "Chairman's Message" : "अध्यक्षाचा संदेश",
      href: "/chairman-message"
    },
    {
      label: language === "en" ? "Board of Directors" : "संचालक मंडळ",
      href: "/bod"
    },
    {
      label: language === "en" ? "Past Chairman" : "माजी अध्यक्ष",
      href: "/past-chairman"
    },
    {
      label: language === "en" ? "History" : "इतिहास",
      href: "/history"
    },
    {
      label: language === "en" ? "Organization Chart" : "संघटनात्मक चार्ट",
      href: "/organization-chart"
    }
  ]

  const servicesMenuItems = [
    {
      label: language === "en" ? "Gunthewari Regularization" : "गुंठेवारी नियमितीकरण",
      href: "/gunthewari"
    },
    {
      label: language === "en" ? "NIT Scheme" : "NIT योजना",
      href: "/nit-scheme"
    },
    {
      label: language === "en" ? "Citizen Charter" : "नागरिक सनद",
      href: "/pdf/NIT%20Citizen%20Charter.pdf",
      target: "_blank"
    },
    {
      label: language === "en" ? "Right to Service Act" : "सेवा अधिकार कायदा",
      href: "/pdf/Adhisuchna%2009-11-2015.pdf",
      target: "_blank"
    },
    {
      label: language === "en" ? "Housing" : "गृहनिर्माण",
      href: "/housing"
    },
    {
      label: language === "en" ? "PMAY" : "PMAY",
      href: "/pmay-details"
    }
  ]

  const projectsMenuItems = [
    {
      label: language === "en" ? "Projects on PPP" : "PPP प्रकल्प",
      href: "/projects/ppp"
    },
    {
      label: language === "en" ? "Proposed Projects" : "प्रस्तावित प्रकल्प",
      href: "/projects/proposed"
    },
    {
      label: language === "en" ? "Work in Progress" : "सुरू असलेले काम",
      href: "/projects/wip"
    },
    {
      label: language === "en" ? "Completed Projects" : "पूर्ण झालेले प्रकल्प",
      href: "/projects/completed",
      subItems: [
        {
          label: language === "en" ? "Swimming Pool" : "स्विमिंग पूल",
          href: "/projects/swimming-pool"
        },
        {
          label: language === "en" ? "Skating Rink" : "स्केटिंग रिंक",
          href: "/projects/skating-rink"
        },
        {
          label: language === "en" ? "Multipurpose Hall" : "बहुउद्देशीय हॉल",
          href: "/projects/multipurpose-hall"
        },
        {
          label: language === "en" ? "Haj House" : "हज हाउस",
          href: "/projects/haj-house"
        },
        {
          label: language === "en" ? "IRDP" : "IRDP",
          href: "/projects/irdp"
        },
        {
          label: language === "en" ? "Garden" : "बाग",
          href: "/projects/garden"
        }
      ]
    }
  ]

  const mediaMenuItems = [
    {
      label: language === "en" ? "News" : "बातम्या",
      href: "/media/news"
    },
    {
      label: language === "en" ? "Photos" : "फोटो",
      href: "/media/photos"
    },
    {
      label: language === "en" ? "Videos" : "व्हिडिओ",
      href: "/media/videos"
    },
    {
      label: language === "en" ? "Laurels" : "सन्मान",
      href: "/media/laurels"
    },
    {
      label: language === "en" ? "Landmark Judgement" : "महत्वाचे निर्णय",
      href: "/media/landmark-judgement"
    }
  ]

  const contactMenuItems = [
    {
      label: language === "en" ? "Contact Us" : "संपर्क साधा",
      href: "/contact/contact-us"
    },
    {
      label: language === "en" ? "Directory" : "निर्देशिका",
      href: "/contact/directory"
    },
    {
      label: language === "en" ? "Demolition Committee" : "पाडकाम समिती",
      href: "/contact/demolition-committee"
    },
    {
      label: language === "en" ? "Feedback/Suggestions" : "फीडबॅक/सूचना",
      href: "/contact/feedback-suggestion"
    },
    {
      label: language === "en" ? "Complaint/Grievances" : "तक्रारी",
      href: "/contact/complaint-grievances"
    }
  ]

  return (
    <>
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm relative z-[10000]">
        <div className="bg-gradient-to-r from-background to-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-3 sm:py-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-6">
              <div className="flex items-center justify-between gap-2 sm:gap-3 flex-1 min-w-0">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <img
                    src="/images/nit_logo.png"
                    alt={language === "en" ? "Nagpur Improvement Trust Logo" : "नागपूर सुधार न्यास लोगो"}
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
                    <span className="sm:hidden">{language === "en" ? "म" : "EN"}</span>
                  </Button>
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-2 lg:gap-3 xl:gap-4 flex-shrink-0">
                <div className="flex items-center gap-1 lg:gap-2 xl:gap-3">
                  <div className="text-center">
                    <img
                      src="/official-portrait-of-devendra-fadnavis.png"
                      alt={language === "en" ? "Hon' CM Devendra Fadnavis" : "माननीय मुख्यमंत्री देवेंद्र फडणवीस"}
                      className="w-10 h-10 lg:w-12 lg:h-12 xl:w-17 xl:h-27 object-cover object-center mx-auto mb-1"
                      style={{ objectPosition: '50% 60%' }}
                    />
                    <div className="text-xs">
                      <div className="font-semibold text-foreground">
                        {language === "en" ? "Hon' CM" : "माननीय मुख्यमंत्री"}
                      </div>
                      <div className="text-muted-foreground hidden lg:block">
                        {language === "en" ? "Devendra Fadnavis" : "देवेंद्र फडणवीस"}
                      </div>
                      <div className="text-muted-foreground lg:hidden">
                        {language === "en" ? "D. Fadnavis" : "दे. फडणवीस"}
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <img
                      src="/official-portrait-of-eknath-shinde.jpeg"
                      alt={language === "en" ? "Hon' Depy. CM Eknath Shinde" : "माननीय उप मुख्यमंत्री एकनाथ शिंदे"}
                      className="w-10 h-10 lg:w-12 lg:h-12 xl:w-17 xl:h-27 object-cover object-center mx-auto mb-1"
                    />
                    <div className="text-xs">
                      <div className="font-semibold text-foreground">
                        {language === "en" ? "Hon' Depy. CM" : "माननीय उप मुख्यमंत्री"}
                      </div>
                      <div className="text-muted-foreground hidden lg:block">
                        {language === "en" ? "Eknath Shinde" : "एकनाथ शिंदे"}
                      </div>
                      <div className="text-muted-foreground lg:hidden">
                        {language === "en" ? "E. Shinde" : "ए. शिंदे"}
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <img
                      src="/official-portrait-of-ajit-pawar.jpg"
                      alt={language === "en" ? "Hon' Depy. CM Ajit Pawar" : "माननीय उप मुख्यमंत्री अजित पवार"}
                      className="w-10 h-10 lg:w-12 lg:h-12 xl:w-17 xl:h-27 object-cover object-center mx-auto mb-1"
                    />
                    <div className="text-xs">
                      <div className="font-semibold text-foreground">
                        {language === "en" ? "Hon' Depy. CM" : "माननीय उप मुख्यमंत्री"}
                      </div>
                      <div className="text-muted-foreground hidden lg:block">
                        {language === "en" ? "Ajit Pawar" : "अजित पवार"}
                      </div>
                      <div className="text-muted-foreground lg:hidden">
                        {language === "en" ? "A. Pawar" : "अ. पवार"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground shadow-md relative z-[10001]">
          <div className="container mx-auto px-2 py-2">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-between gap-2 relative">
              <a
                href="/"
                className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap text-white"
                onClick={closeAllDropdowns}
              >
                {language === "en" ? "Home" : "मुख्यपृष्ठ"}
              </a>

              {/* About NIT Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    closeAllDropdowns()
                    setIsAboutDropdownOpen(!isAboutDropdownOpen)
                  }}
                  onMouseEnter={() => {
                    closeAllDropdowns()
                    setIsAboutDropdownOpen(true)
                  }}
                  className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap flex items-center gap-1 text-white"
                >
                  {language === "en" ? "About NIT" : "NIT बद्दल"}
                  <ChevronDown className={`text-xs transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAboutDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white border border-border rounded-md shadow-2xl min-w-[200px] z-[99999]"
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    style={{ zIndex: 99999 }}
                  >
                    {aboutMenuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors border-b border-border/50 last:border-b-0"
                        onClick={() => setIsAboutDropdownOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    closeAllDropdowns()
                    setIsServicesDropdownOpen(!isServicesDropdownOpen)
                  }}
                  onMouseEnter={() => {
                    closeAllDropdowns()
                    setIsServicesDropdownOpen(true)
                  }}
                  className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap flex items-center gap-1 text-white"
                >
                  {language === "en" ? "Services" : "सेवा"}
                  <ChevronDown className={`text-xs transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white border border-border rounded-md shadow-2xl min-w-[200px] z-[99999]"
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    style={{ zIndex: 99999 }}
                  >
                    {servicesMenuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        target={item.target}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors border-b border-border/50 last:border-b-0"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Projects Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    closeAllDropdowns()
                    setIsProjectsDropdownOpen(!isProjectsDropdownOpen)
                  }}
                  onMouseEnter={() => {
                    closeAllDropdowns()
                    setIsProjectsDropdownOpen(true)
                  }}
                  className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap flex items-center gap-1 text-white"
                >
                  {language === "en" ? "Projects" : "प्रकल्प"}
                  <ChevronDown className={`text-xs transition-transform ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProjectsDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white border border-border rounded-md shadow-2xl min-w-[250px] z-[99999]"
                    onMouseLeave={() => setIsProjectsDropdownOpen(false)}
                    style={{ zIndex: 99999 }}
                  >
                    {projectsMenuItems.map((item, index) => (
                      <div key={index}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors border-b border-border/50 last:border-b-0"
                          onClick={() => setIsProjectsDropdownOpen(false)}
                        >
                          {item.label}
                        </a>
                        {item.subItems && (
                          <div className="ml-4 border-l border-border/30">
                            {item.subItems.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.href}
                                className="block px-4 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                                onClick={() => setIsProjectsDropdownOpen(false)}
                              >
                                • {subItem.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/development-plan"
                className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap text-white"
                onClick={closeAllDropdowns}
              >
                {language === "en" ? "Development plan" : "विकास योजना"}
              </a>
              <a
                href="/metropolitan"
                className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap text-white"
                onClick={closeAllDropdowns}
              >
                {language === "en" ? "Metropolitan region" : "महानगर क्षेत्र"}
              </a>

              {/* Media Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    closeAllDropdowns()
                    setIsMediaDropdownOpen(!isMediaDropdownOpen)
                  }}
                  onMouseEnter={() => {
                    closeAllDropdowns()
                    setIsMediaDropdownOpen(true)
                  }}
                  className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap flex items-center gap-1 text-white"
                >
                  {language === "en" ? "Media" : "माध्यम"}
                  <ChevronDown className={`text-xs transition-transform ${isMediaDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMediaDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white border border-border rounded-md shadow-2xl min-w-[200px] z-[99999]"
                    onMouseLeave={() => setIsMediaDropdownOpen(false)}
                    style={{ zIndex: 99999 }}
                  >
                    {mediaMenuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors border-b border-border/50 last:border-b-0"
                        onClick={() => setIsMediaDropdownOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/downloads"
                className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap text-white"
                onClick={closeAllDropdowns}
              >
                {language === "en" ? "Downloads" : "डाउनलोड"}
              </a>

              {/* Contact Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    closeAllDropdowns()
                    setIsContactDropdownOpen(!isContactDropdownOpen)
                  }}
                  onMouseEnter={() => {
                    closeAllDropdowns()
                    setIsContactDropdownOpen(true)
                  }}
                  className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap flex items-center gap-1 text-white"
                >
                  {language === "en" ? "Contact" : "संपर्क"}
                  <ChevronDown className={`text-xs transition-transform ${isContactDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isContactDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white border border-border rounded-md shadow-2xl min-w-[200px] z-[99999]"
                    onMouseLeave={() => setIsContactDropdownOpen(false)}
                    style={{ zIndex: 99999 }}
                  >
                    {contactMenuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors border-b border-border/50 last:border-b-0"
                        onClick={() => setIsContactDropdownOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/citizen-services"
                className="px-2 py-2 hover:bg-primary-foreground/10 rounded transition-colors whitespace-nowrap text-white"
                onClick={closeAllDropdowns}
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
                <div className="space-y-2 mt-4">
                  <a
                    href="/"
                    className="block px-3 py-3 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {language === "en" ? "Home" : "मुख्यपृष्ठ"}
                  </a>

                  {/* Mobile About NIT Section */}
                  <div className="border-t border-primary-foreground/20 pt-2">
                    <div className="px-3 py-2 text-white text-sm font-medium">
                      {language === "en" ? "About NIT" : "NIT बद्दल"}
                    </div>
                    {aboutMenuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block pl-6 pr-3 py-2 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  {/* Mobile Services Section */}
                  <div className="border-t border-primary-foreground/20 pt-2">
                    <div className="px-3 py-2 text-white text-sm font-medium">
                      {language === "en" ? "Services" : "सेवा"}
                    </div>
                    {servicesMenuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        target={item.target}
                        className="block pl-6 pr-3 py-2 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  {/* Mobile Projects Section */}
                  <div className="border-t border-primary-foreground/20 pt-2">
                    <div className="px-3 py-2 text-white text-sm font-medium">
                      {language === "en" ? "Projects" : "प्रकल्प"}
                    </div>
                    {projectsMenuItems.map((item, index) => (
                      <div key={index}>
                        <a
                          href={item.href}
                          className="block pl-6 pr-3 py-2 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                        {item.subItems && (
                          <div className="ml-8">
                            {item.subItems.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.href}
                                className="block pl-4 pr-3 py-1.5 hover:bg-primary-foreground/10 rounded transition-colors text-white text-xs"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                • {subItem.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <a
                    href="/development-plan"
                    className="block px-3 py-3 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {language === "en" ? "Development plan" : "विकास योजना"}
                  </a>
                  <a
                    href="/metropolitan"
                    className="block px-3 py-3 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {language === "en" ? "Metropolitan region" : "महानगर क्षेत्र"}
                  </a>

                  {/* Mobile Media Section */}
                  <div className="border-t border-primary-foreground/20 pt-2">
                    <div className="px-3 py-2 text-white text-sm font-medium">
                      {language === "en" ? "Media" : "माध्यम"}
                    </div>
                    {mediaMenuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block pl-6 pr-3 py-2 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  <a
                    href="/downloads"
                    className="block px-3 py-3 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {language === "en" ? "Downloads" : "डाउनलोड"}
                  </a>

                  {/* Mobile Contact Section */}
                  <div className="border-t border-primary-foreground/20 pt-2">
                    <div className="px-3 py-2 text-white text-sm font-medium">
                      {language === "en" ? "Contact" : "संपर्क"}
                    </div>
                    {contactMenuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block pl-6 pr-3 py-2 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  <a
                    href="/citizen-services"
                    className="block px-3 py-3 hover:bg-primary-foreground/10 rounded transition-colors text-white text-sm"
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
                alt={language === "en" ? "Hon' CM Devendra Fadnavis" : "माननीय मुख्यमंत्री देवेंद्र फडणवीस"}
                className="w-10 h-10 lg:w-12 lg:h-12 xl:w-17 xl:h-27 object-center mx-auto mb-1"
              />
              <div className="text-xs">
                <div className="font-semibold text-foreground">
                  {language === "en" ? "Hon' CM" : "माननीय मुख्यमंत्री"}
                </div>
                <div className="text-muted-foreground">
                  {language === "en" ? "D. Fadnavis" : "दे. फडणवीस"}
                </div>
              </div>
            </div>

            <div className="text-center">
              <img
                src="/official-portrait-of-eknath-shinde.jpeg"
                alt={language === "en" ? "Hon' Depy. CM Eknath Shinde" : "माननीय उप मुख्यमंत्री एकनाथ शिंदे"}
                className="w-10 h-10 lg:w-12 lg:h-12 xl:w-17 xl:h-27 object-cover object-center mx-auto mb-1"
              />
              <div className="text-xs">
                <div className="font-semibold text-foreground">
                  {language === "en" ? "Hon' Depy. CM" : "माननीय उप मुख्यमंत्री"}
                </div>
                <div className="text-muted-foreground">
                  {language === "en" ? "E. Shinde" : "ए. शिंदे"}
                </div>
              </div>
            </div>

            <div className="text-center">
              <img
                src="/official-portrait-of-ajit-pawar.jpg"
                alt={language === "en" ? "Hon' Depy. CM Ajit Pawar" : "माननीय उप मुख्यमंत्री अजित पवार"}
                className="w-10 h-10 lg:w-12 lg:h-12 xl:w-17 xl:h-27 object-cover object-center mx-auto mb-1"
              />
              <div className="text-xs">
                <div className="font-semibold text-foreground">
                  {language === "en" ? "Hon' Depy. CM" : "माननीय उप मुख्यमंत्री"}
                </div>
                <div className="text-muted-foreground">
                  {language === "en" ? "A. Pawar" : "अ. पवार"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}