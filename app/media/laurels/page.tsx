import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function LaurelsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">Laurels</h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20at%202.13.17%E2%80%AFPM-lwGBo25dTevFs36frMpINklRJWbRU2.png"
                alt="NIT Laurels and Recognition Document"
                width={800}
                height={600}
                className="max-w-full h-auto rounded-lg shadow-md"
                priority
              />
            </div>

            <div className="mt-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Recognition and Achievement</h2>
              <p className="text-gray-600 leading-relaxed">
                This document showcases the recognition and achievements of the Nagpur Improvement Trust, highlighting
                our commitment to excellence in urban development and public service.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
