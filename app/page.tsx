import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/ui/section-title"
import { CheckCircle, ArrowRight, Code, BarChart, Brain, FileDigit } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Empowering Businesses Through Smart, Scalable Tech Solutions"
        subtitle="Turn Tech into a Strategic Advantage"
        backgroundImage="/placeholder.svg?height=1080&width=1920"
        theme="dark"
        height="large"
      >
        <p className="mt-4 text-base text-gray-300">
          At Teveer Tech, we transform your business challenges into opportunities through innovative technology
          solutions. Our expert team delivers custom software, Monday.com services, AI solutions, and digital conversion
          that drive growth and efficiency.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <Button className="bg-[#fbc736] text-[#393939] hover:bg-[#fbc736]/90 transition-all duration-300 transform hover:scale-105">
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </HeroSection>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 section-container">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            title="Why Choose Teveer Tech"
            subtitle="We combine technical expertise with business acumen to deliver solutions that make a real difference."
            alignment="center"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
            {[
              {
                title: "Expert Team",
                description: "Our team brings years of experience across various technology domains.",
                icon: <CheckCircle className="h-6 w-6 text-[#fbc736]" />,
              },
              {
                title: "Tailored Solutions",
                description: "We create custom solutions designed specifically for your business needs.",
                icon: <CheckCircle className="h-6 w-6 text-[#fbc736]" />,
              },
              {
                title: "Ongoing Support",
                description: "We provide continuous support to ensure your technology evolves with your business.",
                icon: <CheckCircle className="h-6 w-6 text-[#fbc736]" />,
              },
              {
                title: "Proven Results",
                description: "Our track record speaks for itself with successful implementations across industries.",
                icon: <CheckCircle className="h-6 w-6 text-[#fbc736]" />,
              },
            ].map((item, index) => (
              <div key={index} className="gradient-card animate-fadeIn opacity-0">
                <div className="p-6">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-[#393939]">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-container">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            title="Our Services"
            subtitle="Comprehensive technology solutions to address your business challenges."
          />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 stagger-children">
            {[
              {
                title: "Custom Software Development",
                description: "Tailored software solutions designed to meet your specific business requirements.",
                icon: <Code className="h-10 w-10 text-[#74c2e8]" />,
                href: "/services#custom-software",
              },
              {
                title: "Monday.com Services",
                description: "Optimize your workflow with our expert Monday.com implementation and customization.",
                icon: <BarChart className="h-10 w-10 text-[#74c2e8]" />,
                href: "/services#monday",
              },
              {
                title: "AI Solutions",
                description: "Leverage the power of artificial intelligence to gain insights and automate processes.",
                icon: <Brain className="h-10 w-10 text-[#74c2e8]" />,
                href: "/services#ai-solutions",
              },
              {
                title: "Digital Conversion",
                description: "Transform your analog processes into efficient digital workflows.",
                icon: <FileDigit className="h-10 w-10 text-[#74c2e8]" />,
                href: "/services#digital-conversion",
              },
            ].map((service, index) => (
              <div key={index} className="gradient-card animate-fadeIn opacity-0">
                <div className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-[#393939]">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                  <div className="mt-4">
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-[#74c2e8] hover:text-[#74c2e8]/80"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-[#fbc736] text-[#393939] hover:bg-[#fbc736]/90">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#393939] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Let's discuss how Teveer Tech can help you leverage technology to achieve your business goals.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button className="w-full sm:w-auto bg-[#fbc736] text-[#393939] hover:bg-[#fbc736]/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
