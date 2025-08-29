import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function Loading() {
  const [language, setLanguage] = useState<"en" | "mr">("en")
  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage}/>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Loading Title */}
          <div className="h-10 bg-gray-200 rounded-lg mb-8 animate-pulse"></div>

          {/* Loading Content */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <div className="space-y-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                  <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
