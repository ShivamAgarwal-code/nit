import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function LaurelsLoading() {
  const [language, setLanguage] = useState<"en" | "mr">("en")
  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage}/>

      <main className="container mx-auto px-4 py-8">
        {/* Page Title Skeleton */}
        <div className="text-center mb-8">
          <div className="h-10 bg-gray-200 rounded-md w-32 mx-auto mb-2 animate-pulse"></div>
          <div className="w-24 h-1 bg-gray-200 mx-auto animate-pulse"></div>
        </div>

        {/* Main Content Skeleton */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
            <div className="flex justify-center">
              <div className="w-full max-w-2xl h-96 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>

            <div className="mt-6 text-center">
              <div className="h-6 bg-gray-200 rounded-md w-48 mx-auto mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-md w-full mb-1 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-md w-3/4 mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Achievements Section Skeleton */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="h-8 bg-gray-200 rounded-md w-48 mx-auto mb-8 animate-pulse"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
                <div className="h-5 bg-gray-200 rounded-md w-3/4 mx-auto mb-2 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded-md w-full mb-1 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded-md w-5/6 mx-auto animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
