'use client'
import { useState } from 'react'
import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from 'next/link'

// Images array for scrolling images
const images = [
  '/images/C++.png',
  '/images/CSS.png',
  '/images/HTML.png',
  '/images/js3.png',
  '/images/react.png',
  '/images/nextjs.png',
  '/images/Jupyter.png',
  '/images/NumPy.png',
  '/images/openai.png',
  '/images/python.png',
  '/images/tensorflow.png',
  '/images/Vscode.png'
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('Home')
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="relative flex justify-between items-center p-4 max-w-7xl mx-auto">
        <h1 className="text-xl font-semibold text-gray-900">Welcome!</h1>

        {/* Mobile Menu Button */}
        <button
          className="absolute top-4 right-4 text-gray-900 md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          title="Toggle mobile menu"
        >
          <span className="mr-2">Menu</span> {/* Added Menu text */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          
        </button>

        <nav>
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-4">
            <li>
              <Link
                href="/"
                className={`${activeTab === 'Home' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
                onClick={() => setActiveTab('Home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className={`${activeTab === 'Skills' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
                onClick={() => setActiveTab('Skills')}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`${activeTab === 'Projects' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
                onClick={() => setActiveTab('Projects')}
              >
                Projects
              </Link>
            </li>
            <li>
              <a href="mailto:elijahcampbellihim@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="default" className="h-auto px-4 py-2">
                  Contact Me
                </Button>
              </a>
            </li>
          </ul>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <ul className="absolute top-16 right-4 bg-white border border-gray-200 shadow-md rounded-lg p-4 space-y-4 md:hidden w-48">
              <li>
                <Link
                  href="/"
                  className={`${activeTab === 'Home' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
                  onClick={() => {
                    setActiveTab('Home')
                    setMobileMenuOpen(false)
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className={`${activeTab === 'Skills' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
                  onClick={() => {
                    setActiveTab('Skills')
                    setMobileMenuOpen(false)
                  }}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`${activeTab === 'Projects' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
                  onClick={() => {
                    setActiveTab('Projects')
                    setMobileMenuOpen(false)
                  }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <a href="mailto:elijahcampbellihim@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="default">Contact Me</Button>
                </a>
              </li>
            </ul>
          )}
        </nav>
      </header>


      <main className="max-w-7xl mx-auto mt-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-100 p-8 rounded-lg">
            <h2 className="text-4xl font-bold mb-2 text-gray-900">Hi I'm</h2>
            <h1 className="text-5xl font-bold mb-4 text-gray-900">Elijah Campbell</h1>
            <p className="mb-6 text-gray-700">
            A forward-thinking developer with a passion for solving problems and helping others. Specializing in machine learning and artificial intelligence, I am excited to leverage today’s vast array of new technologies to build creative and useful applications
            </p>
            <div className="flex space-x-4">
              <a href="/documents/Resume-Elijah-Campbell-Ihim.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="default">View Resume</Button>
              </a>
              <a href="mailto:elijahcampbellihim@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost">Contact Me</Button>
              </a>
            </div>
            <div className="flex mt-6 space-x-4">
              <a href="https://github.com/ECampbell37" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600" title = "Github">
                <GithubIcon size={24} />
              </a>
              <a href="https://linkedin.com/in/elijah-campbell-ihim" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600" title = "Linkedin">
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/profileAvatar.jpg"
              alt="Elijah Campbell Avatar"
              className="rounded-full w-72 h-72 object-cover"
            />
          </div>
        </div>
      </main>

      <footer className="mt-16 bg-gray-100 p-4">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900">Skills and Platforms</h2>
        <ScrollArea className="w-full overflow-hidden rounded-md border">
          <div className="scrolling-images flex space-x-1 p-4">
            {/* Display images twice for smooth looping */}
            {[...images, ...images].map((src, index) => (
              <div key={index} className="flex-shrink-0">
                <img src={src} alt={`Logo ${index + 1}`} className="w-32 h-32 object-cover rounded-md shadow-md" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </footer>

      <style jsx>{`
        .scrolling-images {
          display: flex;
          animation: scroll 60s linear infinite;
          width: max-content;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
