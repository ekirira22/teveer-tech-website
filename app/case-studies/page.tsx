import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/ui/section-title"
import { ArrowRight } from "lucide-react"
// Import the HeroSection component
import { HeroSection } from "@/components/hero-section"

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Case Studies"
        subtitle="Real-world examples of how our solutions have helped businesses overcome challenges and achieve their goals."
        backgroundImage="/placeholder.svg?height=1080&width=1920"
        theme="dark"
      />

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 stagger-children">
            {[
              {
                title: "Streamlining Operations for a Retail Chain",
                category: "Custom Software Development",
                image: "/placeholder.svg?height=400&width=600",
                slug: "retail-chain-operations",
              },
              {
                title: "Enhancing Project Management for a Construction Firm",
                category: "Monday.com Services",
                image: "/placeholder.svg?height=400&width=600",
                slug: "construction-project-management",
              },
              {
                title: "AI-Powered Customer Insights for E-commerce",
                category: "AI Solutions",
                image: "/placeholder.svg?height=400&width=600",
                slug: "ecommerce-customer-insights",
              },
              {
                title: "Digital Transformation for a Legal Firm",
                category: "Digital Conversion",
                image: "/placeholder.svg?height=400&width=600",
                slug: "legal-firm-digital-transformation",
              },
              {
                title: "Cybercafé Management System Implementation",
                category: "Custom Software Development",
                image: "/placeholder.svg?height=400&width=600",
                slug: "cybercafe-management-system",
              },
              {
                title: "Workflow Optimization for a Marketing Agency",
                category: "Monday.com Services",
                image: "/placeholder.svg?height=400&width=600",
                slug: "marketing-workflow-optimization",
              },
            ].map((caseStudy, index) => (
              <div key={index} className="gradient-card animate-fadeIn opacity-0">
                <div className="relative h-48">
                  <Image
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-[#fbc736]/20 text-[#393939] px-2 py-1 text-xs font-medium rounded">
                      {caseStudy.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#393939]">{caseStudy.title}</h3>
                  <div className="mt-4">
                    <Link
                      href={`/case-studies/${caseStudy.slug}`}
                      className="inline-flex items-center text-[#74c2e8] hover:text-[#74c2e8]/80"
                    >
                      Read case study <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Template */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            title="Our Case Study Approach"
            subtitle="Each case study follows a structured format to clearly demonstrate the value we deliver."
            alignment="center"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Challenge",
                description:
                  "We begin by outlining the specific business challenges our client was facing and the goals they wanted to achieve.",
                icon: "🎯",
              },
              {
                title: "Solution",
                description:
                  "We detail the custom solution we developed to address the client's unique challenges and requirements.",
                icon: "💡",
              },
              {
                title: "Results",
                description:
                  "We showcase the measurable outcomes and business impact achieved through our solution implementation.",
                icon: "📈",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#393939] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#393939] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to become our next success story?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Contact us today to discuss how we can help your business overcome challenges and achieve its goals.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button className="w-full sm:w-auto bg-[#fbc736] text-[#393939] hover:bg-[#fbc736]/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
