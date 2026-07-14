// components/NavBar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { MailIcon, X, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Technical Skills', href: '/skills' },
    { name: 'Software Projects', href: '/projects' },
    { name: 'Work Experience', href: '/experience' },
    { name: 'Education & Credentials', href: '/education' },
  ]

  return (
    <>
      {/* Absolute Header Layout */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none">
        <div className="flex justify-between items-center p-6 max-w-7xl 2xl:max-w-screen-2xl mx-auto w-full">
          
          {/* Minimal Brand Identifier */}
          <Link href="/" className="text-2xl 2xl:text-3xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent pointer-events-auto hover:opacity-80 transition-opacity">
            EC
          </Link>

          {/* Persistent Side Menu Menu Toggle Button */}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-md text-zinc-400 hover:text-zinc-100 pointer-events-auto transition-all shadow-lg hover:border-zinc-700 group"
            onClick={() => setIsOpen(true)}
            title="Open Menu"
          >
            <span className="text-xs 2xl:text-lg font-bold uppercase tracking-wider font-mono">Menu</span>
            <Menu className="w-4 h-4 transition-transform group-hover:scale-110" />
          </button>
        </div>
      </header>

      {/* Slideout Full Screen Panel Overlay */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-500 flex justify-end ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop Tint */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

        {/* Sidebar Drawer Container */}
        <div 
          className={`relative w-full overflow-y-auto max-w-sm h-full bg-zinc-950/95 border-l border-zinc-900 p-8 flex flex-col justify-between shadow-2xl transition-transform duration-500 ease-out transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Top Close Row */}
            <div className="flex justify-between items-center mb-16">
              <span className="text-xs 2xl:text-sm font-bold tracking-widest text-zinc-600 uppercase font-mono">Portfolio Links</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full border border-zinc-900 bg-zinc-900/40 text-zinc-400 hover:text-zinc-100 hover:border-zinc-800 transition-all"
                title="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links Stack */}
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-2xl font-bold tracking-tight py-2 transition-all ${
                    pathname === item.href 
                      ? 'text-blue-400 translate-x-2' 
                      : 'text-zinc-400 hover:text-zinc-50 hover:translate-x-1'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Drawer Bottom Footer Action */}
          <div className="border-t border-zinc-900 pt-6">
            <a href="mailto:elijahcampbellihim@gmail.com" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-blue-600 hover:bg-blue-500 text-zinc-50 font-bold py-6 rounded-2xl shadow-lg shadow-blue-600/10 2xl:text-base">
                <MailIcon className="mr-2 h-4 w-4 2xl:w-6 2xl:h-6" /> Contact Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}