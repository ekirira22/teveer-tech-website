import Image from "next/image"
import { SectionTitle } from "@/components/ui/section-title"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// Import the HeroSection component
import { HeroSection } from "@/components/hero-section"

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "Cybercafé Management System",
      category: "custom-software",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "A comprehensive solution for managing cybercafé operations, including user tracking, billing, and reporting.",
    },
    {
      title: "Construction Project Dashboard",
      category: "monday",
      image: "/placeholder.svg?height=400&width=600",
      description: "Custom Monday.com dashboard for tracking construction projects, resources, and timelines.",
    },
    {
      title: "E-commerce Customer Analysis",
      category: "ai-solutions",
      image: "/placeholder.svg?height=400&width=600",
      description: "AI-powered analytics platform for understanding customer behavior and preferences.",
    },
    {
      title: "Legal Document Management System",
      category: "digital-conversion",
      image: "/placeholder.svg?height=400&width=600",
      description: "Digital system for organizing, searching, and managing legal documents.",
    },
    {
      title: "Inventory Management System",
      category: "custom-software",
      image: "/placeholder.svg?height=400&width=600",
      description: "Custom software for tracking inventory levels, orders, and supplier information.",
    },
    {
      title: "Marketing Campaign Dashboard",
      category: "monday",
      image: "/placeholder.svg?height=400&width=600",
      description: "Monday.com solution for planning, executing, and analyzing marketing campaigns.",
    },
    {
      title: "Predictive Maintenance System",
      category: "ai-solutions",
      image: "/placeholder.svg?height=400&width=600",
      description: "AI solution for predicting equipment maintenance needs to prevent downtime.",
    },
    {
      title: "Healthcare Records Digitization",
      category: "digital-conversion",
      image: "/placeholder.svg?height=400&width=600",
      description: "Digital conversion of paper-based healthcare records with secure access controls.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Our Portfolio"
        subtitle="Explore our past projects and see how we've helped businesses across various industries."
        backgroundImage="/placeholder.svg?height=1080&width=1920"
        theme="light"
      />

      {/* Portfolio Grid with Filtering */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle title="Our Work" subtitle="Browse our portfolio by service category." alignment="center" />

          <Tabs defaultValue="all" className="mt-12">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="custom-software">Custom Software</TabsTrigger>
                <TabsTrigger value="monday">Monday.com</TabsTrigger>
                <TabsTrigger value="ai-solutions">AI Solutions</TabsTrigger>
                <TabsTrigger value="digital-conversion">Digital Conversion</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {portfolioItems.map((item, index) => (
                  <PortfolioItem key={index} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="custom-software">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {portfolioItems
                  .filter((item) => item.category === "custom-software")
                  .map((item, index) => (
                    <PortfolioItem key={index} item={item} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="monday">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {portfolioItems
                  .filter((item) => item.category === "monday")
                  .map((item, index) => (
                    <PortfolioItem key={index} item={item} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="ai-solutions">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {portfolioItems
                  .filter((item) => item.category === "ai-solutions")
                  .map((item, index) => (
                    <PortfolioItem key={index} item={item} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="digital-conversion">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {portfolioItems
                  .filter((item) => item.category === "digital-conversion")
                  .map((item, index) => (
                    <PortfolioItem key={index} item={item} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

interface PortfolioItemProps {
  item: {
    title: string
    category: string
    image: string
    description: string
  }
}

// Update the PortfolioItem function to use gradient styling
function PortfolioItem({ item }: PortfolioItemProps) {
  const categoryLabels = {
    "custom-software": "Custom Software Development",
    monday: "Monday.com Services",
    "ai-solutions": "AI Solutions",
    "digital-conversion": "Digital Conversion",
  }

  return (
    <div className="gradient-card animate-fadeIn opacity-0">
      <div className="relative h-48">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block bg-[#fbc736]/20 text-[#393939] px-2 py-1 text-xs font-medium rounded">
            {categoryLabels[item.category as keyof typeof categoryLabels]}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-[#393939]">{item.title}</h3>
        <p className="mt-2 text-gray-600">{item.description}</p>
      </div>
    </div>
  )
}
