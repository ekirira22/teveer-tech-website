"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

// Update the navigation array to remove Partners and rename menu items
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Teveer Tech</span>
            <div className="flex items-center gap-2">
              {/* <div className="h-10 w-10 rounded-md"></div> */}
              <img src="https://teveer.tech/images-folder/teveertech_nobg.png" alt="Teveer Tech" width={50} height={50} />
              <span className="text-xl font-bold text-[#393939]">Teveer Tech</span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-content rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#74c2e8] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button className="bg-[#fbc736] text-[#393939] hover:bg-[#fbc736]/90">Get Started</Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("fixed inset-0 z-50 lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br from-[#393939] to-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Teveer Tech</span>
              <div className="flex items-center gap-2">
                {/* <div className="h-8 w-8 rounded-md bg-[#fbc736]"></div> */}
                <img src="https://teveer.tech/images-folder/teveertech_nobg.png" alt="Teveer Tech" width={50} height={50} />
                <span className="text-lg font-bold text-white">Teveer Tech</span>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/20">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-white hover:bg-white/10 transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button className="w-full bg-[#fbc736] text-[#393939] hover:bg-[#fbc736]/90 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
