import Image from "next/image"
import { SectionTitle } from "@/components/ui/section-title"
import { HeroSection } from "@/components/hero-section"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="About Teveer Tech"
        subtitle="We're a tech consulting firm dedicated to empowering businesses through innovative technology solutions."
        backgroundImage="https://teveer.tech/images-folder/pexels-ante-emmanuel.jpg?height=1080&width=1920"
        theme="dark"
      />

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionTitle title="Our Story" />
              <p className="text-gray-600 mb-6">
                Teveer Tech was founded by Eric Maranga and Steve Mwangi with a vision to help businesses leverage
                technology as a strategic advantage. With backgrounds in software development and business consulting,
                they recognized a gap in the market for technology solutions that truly aligned with business
                objectives.
              </p>
              <p className="text-gray-600 mb-6">
                Since our founding, we've grown into a full-service tech consulting firm, helping businesses across
                various industries transform their operations through custom software, Monday.com implementations, AI
                solutions, and digital conversion services.
              </p>
              <p className="text-gray-600">
                Our approach combines technical expertise with business acumen, ensuring that every solution we deliver
                drives real value for our clients.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://teveer.tech/images-folder/pexels-sora-shimazaki.jpg?height=600&width=800"
                alt="Teveer Tech founders"
                width={800}
                height={600}
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionTitle title="Our Mission" />
              <p className="text-gray-600">
                At Teveer Tech, our mission is to empower businesses through smart, scalable technology solutions that
                drive growth and efficiency. We are committed to understanding our clients' unique challenges and
                delivering tailored solutions that create lasting value.
              </p>
            </div>
            <div>
              <SectionTitle title="Our Vision" />
              <p className="text-gray-600">
                Our vision is to be the trusted technology partner for businesses seeking to leverage innovation as a
                competitive advantage. We aim to create a world where technology serves as an enabler for business
                success, not a barrier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            title="Our Approach"
            subtitle="We believe in a collaborative, solution-focused approach to technology consulting."
            alignment="center"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Understand",
                description:
                  "We begin by deeply understanding your business, challenges, and goals to ensure our solutions address your specific needs.",
              },
              {
                title: "Innovate",
                description:
                  "We leverage our technical expertise to design innovative solutions that solve your challenges efficiently and effectively.",
              },
              {
                title: "Implement",
                description:
                  "Our experienced team ensures smooth implementation with minimal disruption to your business operations.",
              },
              {
                title: "Support",
                description:
                  "We provide ongoing support and optimization to ensure your technology continues to serve your evolving business needs.",
              },
              {
                title: "Measure",
                description:
                  "We track key metrics to demonstrate the tangible value our solutions bring to your business.",
              },
              {
                title: "Evolve",
                description:
                  "We continuously refine and enhance our solutions to keep pace with your business growth and changing market conditions.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#393939] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            title="Our Leadership Team"
            subtitle="Meet the experts behind Teveer Tech's innovative solutions."
            alignment="center"
          />

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2 stagger-children">
            {[
              {
                name: "Eric Maranga",
                role: "Co-Founder & CEO",
                bio: "With over 10 years of experience in software development and business consulting, Eric leads our strategic direction and client relationships.",
                image: "https://teveer.tech/images-folder/ME.jpg?height=400&width=400",
              },
              {
                name: "Steve Mwangi",
                role: "Co-Founder & CTO",
                bio: "Steve brings deep technical expertise and innovation to our solutions, ensuring we leverage cutting-edge technologies to solve complex business challenges.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((person, index) => (
              <div
                key={index}
                className="gradient-card p-6 flex flex-col items-center text-center animate-fadeIn opacity-0"
              >
                <Image
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-[#fbc736]/20"
                />
                <h3 className="mt-6 text-xl font-semibold text-[#393939]">{person.name}</h3>
                <p className="text-[#74c2e8] font-medium">{person.role}</p>
                <p className="mt-2 text-gray-600 max-w-xs">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
