import type React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  children?: React.ReactNode
  align?: "left" | "center"
  theme?: "light" | "dark"
  height?: "small" | "medium" | "large"
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage = "/placeholder.svg?height=1080&width=1920",
  children,
  align = "left",
  theme = "dark",
  height = "medium",
}: HeroSectionProps) {
  const heightClasses = {
    small: "py-12 md:py-16",
    medium: "py-16 md:py-24",
    large: "py-24 md:py-32",
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src={backgroundImage || "/placeholder.svg"} alt="Background" fill className="object-cover" priority />
        <div
          className={cn(
            "absolute inset-0",
            theme === "dark"
              ? "bg-gradient-to-r from-[#393939]/90 to-[#393939]/70"
              : "bg-gradient-to-r from-[#fbc736]/90 to-[#74c2e8]/70",
          )}
        />
      </div>

      {/* Content */}
      <div className={cn("relative z-10", heightClasses[height])}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={cn("mx-auto", align === "center" ? "text-center max-w-3xl" : "lg:mx-0 lg:max-w-2xl")}>
            <h1
              className={cn(
                "text-4xl font-bold tracking-tight sm:text-6xl",
                theme === "dark" ? "text-white" : "text-[#393939]",
              )}
            >
              {title}
            </h1>
            {subtitle && (
              <p className={cn("mt-6 text-lg leading-8", theme === "dark" ? "text-gray-300" : "text-gray-700")}>
                {subtitle}
              </p>
            )}
            {children && <div className="mt-10">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}
