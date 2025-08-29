"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function DemolitionCommitteePage() {
  const [language, setLanguage] = useState<"en" | "mr">("en")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    feedback: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      mobile: "",
      feedback: "",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage}/>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              Illegal Construction Demolition Committee
            </h1>
          </div>

          <div className="space-y-8">
            {/* East Division */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">A. Division Office ( East )</h3>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-start gap-4">
                    <span className="text-gray-600 font-medium min-w-[20px]">1.</span>
                    <div>
                      <p className="font-medium text-gray-900">Shri. Sanjay N. Chimurkar</p>
                      <p className="text-sm text-gray-600">Executive Engineer (East)</p>
                    </div>
                  </div>
                  <span className="text-gray-700 mt-2 sm:mt-0">9923481002</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2">
                  <div className="flex items-start gap-4">
                    <span className="text-gray-600 font-medium min-w-[20px]">2.</span>
                    <div>
                      <p className="font-medium text-gray-900">Shri. Bharat S. Mundle</p>
                      <p className="text-sm text-gray-600">Divisional Officer (East)</p>
                    </div>
                  </div>
                  <span className="text-gray-700 mt-2 sm:mt-0">9822711378</span>
                </div>
              </div>
            </div>

            {/* West Division */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">B. Division Office ( West )</h3>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-start gap-4">
                    <span className="text-gray-600 font-medium min-w-[20px]">1.</span>
                    <div>
                      <p className="font-medium text-gray-900">Shri. Pramod P. Dhankar</p>
                      <p className="text-sm text-gray-600">Executive Engineer ( West )</p>
                    </div>
                  </div>
                  <span className="text-gray-700 mt-2 sm:mt-0">9823326945</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2">
                  <div className="flex items-start gap-4">
                    <span className="text-gray-600 font-medium min-w-[20px]">2.</span>
                    <div>
                      <p className="font-medium text-gray-900">Shri. Pankaj D. Ambhorkar</p>
                      <p className="text-sm text-gray-600">Divisional Officer ( West )</p>
                    </div>
                  </div>
                  <span className="text-gray-700 mt-2 sm:mt-0">9923463223</span>
                </div>
              </div>
            </div>

            {/* North Division */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">C. Division Office ( North )</h3>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-start gap-4">
                    <span className="text-gray-600 font-medium min-w-[20px]">1.</span>
                    <div>
                      <p className="font-medium text-gray-900">Shri. Rajesh N. Meghrajani</p>
                      <p className="text-sm text-gray-600">Executive Engineer ( North )</p>
                    </div>
                  </div>
                  <span className="text-gray-700 mt-2 sm:mt-0">9823042292</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2">
                  <div className="flex items-start gap-4">
                    <span className="text-gray-600 font-medium min-w-[20px]">2.</span>
                    <div>
                      <p className="font-medium text-gray-900">Shri. Anil N. Rathod</p>
                      <p className="text-sm text-gray-600">Divisional Officer ( North )</p>
                    </div>
                  </div>
                  <span className="text-gray-700 mt-2 sm:mt-0">9823026594</span>
                </div>
              </div>
            </div>

            {/* South Division */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">D. Division Office ( South )</h3>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-start gap-4">
                    <span className="text-gray-600 font-medium min-w-[20px]">1.</span>
                    <div>
                      <p className="font-medium text-gray-900">Shri. Sanjay N. Chimurkar</p>
                      <p className="text-sm text-gray-600">Executive Engineer ( South )</p>
                    </div>
                  </div>
                  <span className="text-gray-700 mt-2 sm:mt-0">9923481002</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2">
                  <div className="flex items-start gap-4">
                    <span className="text-gray-600 font-medium min-w-[20px]">2.</span>
                    <div>
                      <p className="font-medium text-gray-900">Shri. Avinash P. Badge</p>
                      <p className="text-sm text-gray-600">Divisional Officer ( South )</p>
                    </div>
                  </div>
                  <span className="text-gray-700 mt-2 sm:mt-0">9923441204</span>
                </div>
              </div>
            </div>

            {/* Feedback Form Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-orange-600 mb-6 text-center">Feedback / Suggestion Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Name :
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email :
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-sm font-medium text-gray-700">
                    Mobile :
                  </Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feedback" className="text-sm font-medium text-gray-700">
                    Feedback/Suggestion :
                  </Label>
                  <Textarea
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleInputChange}
                    className="w-full min-h-[120px]"
                    placeholder="Please share your feedback or suggestions..."
                    required
                  />
                </div>
                <div className="flex gap-4 justify-center">
                  <Button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-2">
                    Submit
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClear}
                    className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-2 bg-transparent"
                  >
                    Clear
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
