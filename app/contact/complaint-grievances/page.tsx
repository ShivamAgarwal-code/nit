"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { AlertTriangle, Send, RotateCcw, Clock, Phone } from "lucide-react"

export default function ComplaintGrievancesPage() {
  const [language, setLanguage] = useState<"en" | "mr">("en")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    complaintType: "",
    priority: "",
    subject: "",
    description: "",
    previousComplaintId: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    const complaintId = `NIT${Date.now()}`
    console.log("Complaint submitted:", formData)
    alert(
      `Your complaint has been registered with ID: ${complaintId}. You will receive updates on the provided email/mobile.`,
    )
  }

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      mobile: "",
      address: "",
      complaintType: "",
      priority: "",
      subject: "",
      description: "",
      previousComplaintId: "",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage}/>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Complaint & Grievances</h1>
            <p className="text-lg text-muted-foreground">
              Register your complaints and grievances. We are committed to addressing your concerns promptly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-600">
                    <AlertTriangle className="h-5 w-5" />
                    Register Complaint
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="mobile">Mobile Number *</Label>
                        <Input
                          id="mobile"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your mobile number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="complaintType">Complaint Type *</Label>
                        <select
                          id="complaintType"
                          name="complaintType"
                          value={formData.complaintType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                        >
                          <option value="">Select complaint type</option>
                          <option value="infrastructure">Infrastructure Issues</option>
                          <option value="planning">Planning Permission</option>
                          <option value="service">Service Related</option>
                          <option value="corruption">Corruption/Misconduct</option>
                          <option value="delay">Delay in Processing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="priority">Priority Level</Label>
                        <select
                          id="priority"
                          name="priority"
                          value={formData.priority}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                        >
                          <option value="">Select priority</option>
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="urgent">Urgent</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="previousComplaintId">Previous Complaint ID (if any)</Label>
                        <Input
                          id="previousComplaintId"
                          name="previousComplaintId"
                          value={formData.previousComplaintId}
                          onChange={handleInputChange}
                          placeholder="Enter previous complaint ID"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your complete address"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Brief subject of your complaint"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Detailed Description *</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Please provide detailed description of your complaint including dates, locations, and any relevant information..."
                        className="resize-none"
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white">
                        <Send className="h-4 w-4 mr-2" />
                        Submit Complaint
                      </Button>
                      <Button type="button" variant="outline" onClick={handleClear}>
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Clear Form
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-600">Complaint Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 text-orange-600 rounded-full p-1 mt-1">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Submit Complaint</h4>
                      <p className="text-xs text-muted-foreground">
                        Fill out the complaint form with all required details
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 text-orange-600 rounded-full p-1 mt-1">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Acknowledgment</h4>
                      <p className="text-xs text-muted-foreground">Receive complaint ID within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 text-orange-600 rounded-full p-1 mt-1">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Investigation</h4>
                      <p className="text-xs text-muted-foreground">Our team will investigate the matter</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 text-orange-600 rounded-full p-1 mt-1">
                      <span className="text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Resolution</h4>
                      <p className="text-xs text-muted-foreground">Receive updates and final resolution</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-600">
                    <Clock className="h-4 w-4" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Urgent:</span>
                    <span className="text-sm font-semibold">24-48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">High:</span>
                    <span className="text-sm font-semibold">3-5 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Medium:</span>
                    <span className="text-sm font-semibold">7-10 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Low:</span>
                    <span className="text-sm font-semibold">15-20 days</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-600">
                    <Phone className="h-4 w-4" />
                    Helpline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Complaint Helpline:</p>
                    <p className="text-sm text-muted-foreground">0712-2531431</p>
                    <p className="text-sm text-muted-foreground">Monday to Friday: 10:00 AM - 5:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
