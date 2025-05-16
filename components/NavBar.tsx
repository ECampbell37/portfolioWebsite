'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useMemo } from 'react'
import { MailIcon, Menu} from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Page navigations
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
  ]


  // Dynamically Updates header text based on current page
  const headerText = useMemo(() => {
    switch (pathname) {
      case '/':
        return 'Welcome!'
      case '/skills':
        return 'Skills'
      case '/projects':
        return 'Projects'
      default:
        return 'Welcome!'
    }
  }, [pathname])


  return (
    <header className="relative flex justify-between items-center p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900">{headerText}</h1>

      {/* Mobile Menu Toggle */}
      <button
        className="absolute top-4 right-4 text-gray-900 md:hidden flex items-center"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        title="Toggle mobile menu"
      >
        <span className="mr-2 text-lg">Menu</span>
        <Menu className="h-6 w-6" strokeWidth={2.2} />
      </button>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center space-x-5">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`${pathname === item.href ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 text-lg`}
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <a href="mailto:elijahcampbellihim@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="h-auto px-4 py-2">
              <MailIcon className="mr-2 h-5 w-5" /> Contact Me
            </Button>
          </a>
        </li>
      </ul>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <ul className="absolute top-16 right-4 bg-white border border-gray-200 shadow-md rounded-lg p-4 space-y-4 md:hidden w-48 z-50">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`${pathname === item.href ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 text-lg`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <a href="mailto:elijahcampbellihim@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="default">Contact Me</Button>
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
