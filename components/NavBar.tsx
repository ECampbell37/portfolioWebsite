// Top Nav Bar

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useMemo } from 'react'
import { MailIcon, X, Menu} from 'lucide-react'
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
    <header className="relative flex justify-between items-center p-4 max-w-7xl 2xl:max-w-screen-2xl mx-auto">
      <h1 className="text-2xl 2xl:text-3xl font-semibold text-gray-900">{headerText}</h1>

      {/* Mobile Toggle */}
      <button
        className="absolute top-4 right-4 text-gray-900 md:hidden flex items-center z-50"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        title="Toggle mobile menu"
      >
        <span className="mr-2 text-lg">Menu</span>
        <div className="relative w-6 h-6 transition-transform transition-opacity duration-300 ease-in-out">
          {/* Hamburger Icon */}
          <Menu
            className={`absolute transition-all duration-300 ease-in-out transform ${
              isMobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
            }`}
            strokeWidth={2.2}
          />
          {/* X Icon */}
          <X
            className={`absolute transition-all duration-300 ease-in-out transform ${
              isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
            }`}
            strokeWidth={2.2}
          />
        </div>
      </button>



      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center space-x-5 2xl:space-x-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`${pathname === item.href ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 text-xl 2xl:text-2xl`}
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <a href="mailto:elijahcampbellihim@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="h-auto px-4 py-2 text-md 2xl:text-lg">
              <MailIcon className="mr-2 h-5 w-5" /> Contact Me
            </Button>
          </a>
        </li>
      </ul>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-16 right-4 w-48 md:hidden z-40 rounded-lg bg-white border border-gray-200 shadow-md transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <ul className="p-4 space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`${
                  pathname === item.href ? 'text-blue-600' : 'text-gray-600'
                } hover:text-blue-600 text-lg`}
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
      </div>
    </header>
  )
}
