import Link from "next/link"
import { Linkedin, Twitter, Instagram, Phone, Mail, Calendar } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#393939] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-[#fbc736]"></div>
              <span className="text-lg font-bold">Teveer Tech</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              Empowering Businesses Through Smart, Scalable Tech Solutions
            </p>
            <div className="mt-6 flex space-x-6">
              <Link href="https://linkedin.com" className="text-gray-300 hover:text-[#74c2e8]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-300 hover:text-[#74c2e8]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-300 hover:text-[#74c2e8]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Quick Links</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Contact Information</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li className="flex gap-2">
                <Phone className="h-5 w-5 text-[#fbc736]" />
                <span className="text-sm leading-6 text-gray-300">+254719405599</span>
              </li>
              <li className="flex gap-2">
                <Mail className="h-5 w-5 text-[#fbc736]" />
                <span className="text-sm leading-6 text-gray-300">info@teveer.tech</span>
              </li>
              <li className="flex gap-2">
                <Calendar className="h-5 w-5 text-[#fbc736]" />
                <Link
                  href="https://cal.teveer.tech/teveer"
                  className="text-sm leading-6 text-gray-300 hover:text-white"
                >
                  Schedule a Meeting
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mt-8 md:mt-0">
              <p className="text-xs leading-5 text-gray-400">
                &copy; {new Date().getFullYear()} Teveer Tech. All rights reserved.
              </p>
            </div>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link href="/privacy-policy" className="text-xs leading-5 text-gray-400 hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-xs leading-5 text-gray-400 hover:text-gray-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
