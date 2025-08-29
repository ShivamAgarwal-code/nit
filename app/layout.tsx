import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"

export const metadata: Metadata = {
  title: "Nagpur Improvement Trust - Government of Maharashtra",
  description:
    "Official website of Nagpur Improvement Trust, Government of Maharashtra. Access civic services, development plans, and public information.",
  keywords: "Nagpur, NIT, Improvement Trust, Maharashtra, Government, Civic Services",
  authors: [{ name: "Nagpur Improvement Trust" }],
  openGraph: {
    title: "Nagpur Improvement Trust",
    description: "Official website of Nagpur Improvement Trust, Government of Maharashtra",
    type: "website",
    locale: "en_IN",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
        <div id="skip-link" className="sr-only">
          <a
            href="#main-content"
            className="absolute top-0 left-0 z-50 p-4 bg-primary text-primary-foreground focus:not-sr-only focus:relative"
          >
            Skip to main content
          </a>
        </div>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}