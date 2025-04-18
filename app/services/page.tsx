import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/ui/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
// Import the HeroSection component
import { HeroSection } from "@/components/hero-section"

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive technology solutions tailored to your business needs."
        backgroundImage="/placeholder.svg?height=1080&width=1920"
        theme="light"
      />

      {/* Custom Software Development */}
      <section id="custom-software" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionTitle title="Custom Software Development" />
              <p className="text-gray-600 mb-6">
                We design and develop custom software solutions that address your specific business challenges and
                requirements. Our experienced team works closely with you to understand your needs and create tailored
                solutions that drive efficiency and growth.
              </p>

              <h3 className="section-subheading">Our Approach</h3>
              <ul className="space-y-3">
                {[
                  "Requirements analysis and planning",
                  "User experience design",
                  "Agile development methodology",
                  "Quality assurance and testing",
                  "Deployment and ongoing support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#fbc736] mr-2 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="section-subheading mt-8">Featured Solution</h3>
              <p className="text-gray-600">
                <strong>Cybercafé Management System:</strong> A comprehensive solution for managing cybercafé
                operations, including user tracking, billing, and reporting.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Custom Software Development"
                width={800}
                height={600}
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Monday.com Services */}
      <section id="monday" className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Monday.com Services"
                width={800}
                height={600}
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionTitle title="Monday.com Services" />
              <p className="text-gray-600 mb-6">
                As Monday.com experts, we help businesses optimize their workflows and project management processes. Our
                services include implementation, customization, and training to ensure you get the most out of this
                powerful platform.
              </p>

              <h3 className="section-subheading">Our Offerings</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 stagger-children">
                {[
                  {
                    title: "Implementation",
                    description: "Setup and configuration tailored to your business needs",
                  },
                  {
                    title: "Customization",
                    description: "Custom automations and integrations to streamline workflows",
                  },
                  {
                    title: "Training",
                    description: "Comprehensive training for your team to maximize adoption",
                  },
                  {
                    title: "Ongoing Support",
                    description: "Continuous support to ensure optimal performance",
                  },
                ].map((item, index) => (
                  <div key={index} className="gradient-card animate-fadeIn opacity-0">
                    <div className="p-4">
                      <h4 className="font-semibold text-[#393939]">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section id="ai-solutions" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionTitle title="AI Solutions for Business" />
              <p className="text-gray-600 mb-6">
                Leverage the power of artificial intelligence to gain insights, automate processes, and enhance
                decision-making. Our AI solutions are designed to solve real business problems and create competitive
                advantages.
              </p>

              <h3 className="section-subheading">Applications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {[
                  {
                    title: "Predictive Analytics",
                    description: "Forecast trends and make data-driven decisions",
                  },
                  {
                    title: "Process Automation",
                    description: "Automate repetitive tasks to improve efficiency",
                  },
                  {
                    title: "Customer Insights",
                    description: "Gain deeper understanding of customer behavior",
                  },
                  {
                    title: "Intelligent Assistants",
                    description: "Enhance customer service with AI-powered tools",
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-none shadow-sm">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-[#393939]">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="AI Solutions"
                width={800}
                height={600}
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Conversion */}
      <section id="digital-conversion" className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Digital Conversion"
                width={800}
                height={600}
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionTitle title="Digital Conversion" />
              <p className="text-gray-600 mb-6">
                Transform your analog processes into efficient digital workflows. Our digital conversion services help
                businesses modernize their operations, reduce paper usage, and improve accessibility to information.
              </p>

              <h3 className="section-subheading">Our Offerings</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {[
                  {
                    title: "Document Digitization",
                    description: "Convert physical documents to searchable digital formats",
                  },
                  {
                    title: "Process Digitization",
                    description: "Transform manual processes into digital workflows",
                  },
                  {
                    title: "Legacy System Migration",
                    description: "Migrate data from legacy systems to modern platforms",
                  },
                  {
                    title: "Digital Asset Management",
                    description: "Organize and manage digital assets efficiently",
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-none shadow-sm">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-[#393939]">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f7dea6] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#393939] sm:text-4xl">Ready to get started?</h2>
            <p className="mt-6 text-lg leading-8 text-[#393939]">
              Contact us today to discuss how our services can help your business thrive.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button className="w-full sm:w-auto bg-[#fbc736] text-[#393939] hover:bg-[#fbc736]/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-white text-[#393939] hover:text-gray-50 hover:bg-white/10">
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
