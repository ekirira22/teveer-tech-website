"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionTitle } from "@/components/ui/section-title"
import { Phone, Mail, Calendar, Linkedin, Twitter, Instagram } from "lucide-react"

// Import the HeroSection component
import { HeroSection } from "@/components/hero-section"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Let's Work Together"
        subtitle="Contact us to discuss how we can help your business leverage technology for growth and efficiency."
        backgroundImage="/placeholder.svg?height=1080&width=1920"
        theme="dark"
      />

      {/* Contact Information and Form */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <SectionTitle title="Contact Information" />

              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: <Phone className="h-6 w-6 text-[#fbc736] mr-4 mt-1" />,
                    title: "Phone",
                    content: "+254719405599",
                    link: null,
                  },
                  {
                    icon: <Mail className="h-6 w-6 text-[#fbc736] mr-4 mt-1" />,
                    title: "Email",
                    content: "info@teveer.tech",
                    link: null,
                  },
                  {
                    icon: <Calendar className="h-6 w-6 text-[#fbc736] mr-4 mt-1" />,
                    title: "Schedule a Meeting",
                    content: "Book a time on our calendar",
                    link: "https://cal.teveer.tech/teveer",
                  },
                ].map((item, index) => (
                  <div key={index} className="gradient-card p-4 flex items-start">
                    {item.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-[#393939]">{item.title}</h3>
                      {item.link ? (
                        <p className="mt-1 text-gray-600">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#74c2e8] hover:underline"
                          >
                            {item.content}
                          </a>
                        </p>
                      ) : (
                        <p className="mt-1 text-gray-600">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-semibold text-[#393939] mb-4">Stay Connected</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com", name: "LinkedIn" },
                    { icon: <Twitter className="h-5 w-5" />, url: "https://twitter.com", name: "Twitter" },
                    { icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com", name: "Instagram" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#74c2e8]/20 to-[#fbc736]/20 p-3 rounded-full text-[#393939] hover:from-[#74c2e8]/30 hover:to-[#fbc736]/30 transition-all duration-300 transform hover:scale-110"
                    >
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <SectionTitle title="Send Us a Message" />

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full bg-[#fbc736] text-[#393939] hover:bg-[#fbc736]/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {isSubmitted && (
                    <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
            <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
