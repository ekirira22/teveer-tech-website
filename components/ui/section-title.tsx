interface SectionTitleProps {
  title: string
  subtitle?: string
  alignment?: "left" | "center"
}

export function SectionTitle({ title, subtitle, alignment = "left" }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${alignment === "center" ? "text-center" : ""}`}>
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="mt-4 max-w-3xl text-lg text-gray-600 mx-auto">{subtitle}</p>}
    </div>
  )
}
