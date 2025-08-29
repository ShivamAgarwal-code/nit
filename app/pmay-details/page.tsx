"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function PMAYDetailsPage() {
  const [applicationNo, setApplicationNo] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Application No:", applicationNo)
  }

  const handleReset = () => {
    setApplicationNo("")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12" id="main-content">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">PMAY - Search Details</h1>
          </div>

          {/* Main Content Card */}
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-8">
                {/* Blue Link */}
                <div className="mb-8">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 underline text-lg font-medium transition-colors duration-200"
                  >
                    Tenaments Ready For Allotment
                  </a>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                    <label htmlFor="applicationNo" className="text-lg font-medium text-gray-700 whitespace-nowrap">
                      Enter Application No :
                    </label>
                    <Input
                      id="applicationNo"
                      type="text"
                      value={applicationNo}
                      onChange={(e) => setApplicationNo(e.target.value)}
                      className="w-full md:w-80 h-12 border-2 border-gray-300 rounded-md px-4 text-base focus:border-orange-500 focus:ring-orange-500"
                      placeholder="Enter application number"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md text-base font-medium min-w-32 transition-colors duration-200"
                    >
                      Submit
                    </Button>
                    <Button
                      type="button"
                      onClick={handleReset}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md text-base font-medium min-w-32 transition-colors duration-200"
                    >
                      Reset
                    </Button>
                  </div>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
