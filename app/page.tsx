// Home Page

'use client'

import { GithubIcon, LinkedinIcon, FileText} from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

// Images array for scrolling images
const images = [
  '/images/C++.png',
  '/images/CSS.png',
  '/images/HTML.png',
  '/images/js3.png',
  '/images/nextjs.png',
  '/images/Jupyter.png',
  '/images/NumPy.png',
  '/images/Vscode.png',
  '/images/python.png',
  '/images/openai.png',
  '/images/tensorflow.png',
  '/images/pytorch.png',
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <main className="max-w-7xl 2xl:max-w-screen-2xl mx-auto mt-8 2xl:mt-10 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-blue-100 to-sky-100 p-8 rounded-2xl">
            {/* Main Message */}
            <h2 className="text-4xl 2xl:text-5xl font-bold mb-2 text-gray-900">Hi I&apos;m</h2>
            <h1 className="text-5xl 2xl:text-6xl font-bold mb-4 text-gray-900">Elijah Campbell</h1>
            <p className="text-md 2xl:text-lg mb-6 text-gray-800">
              A forward-thinking developer with a passion for solving problems and helping others. Specializing in machine learning and artificial intelligence, I am excited to use today&apos;s vast array of revolutionary technologies to build creative and helpful applications.
            </p>
            {/* Buttons Section */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-4 w-full">
              {/* Resume */}
              <a
                href="/documents/Resume-Elijah-Campbell-Ihim.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="default"
                  className="w-full sm:w-auto px-5 py-6 text-md 2xl:text-xl font-semibold hover:scale-105 transition-transform"
                >
                  <FileText className="mr-2 h-5 w-5" /> View Resume
                </Button>
              </a>

              {/* GitHub + LinkedIn*/}
              <div className="flex w-full gap-4 sm:gap-6 sm:w-auto">
                <a
                  href="https://github.com/ECampbell37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 sm:w-auto"
                >
                  <Button
                    variant="ghost"
                    className="w-full sm:w-auto px-6 py-6 text-md 2xl:text-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    <GithubIcon size={20} />
                    GitHub
                  </Button>
                </a>

                <a
                  href="https://linkedin.com/in/elijah-campbell-ihim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 sm:w-auto"
                >
                  <Button
                    variant="ghost"
                    className="w-full sm:w-auto px-6 py-6 text-md 2xl:text-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    <LinkedinIcon size={20} />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>
          {/* Avatar */}
          <div className="flex justify-center items-center">
            <img
              src="/profileAvatar.jpg"
              alt="Elijah Campbell Avatar"
              className="w-80 h-80 2xl:w-96 2xl:h-96 rounded-full object-cover shadow-xl border-4 border-white hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </main>

    {/* Scrolling Images */}
      <footer className="mt-10 2xl:mt-14 bg-white py-12 px-4">
        <h2 className="text-3xl 2xl:text-4xl font-bold mb-6 text-center text-gray-800">
          My Tools & Platforms
        </h2>

        <div className="w-full mx-auto overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-r from-sky-50 via-blue-50 to-sky-50 shadow-inner">
          <div className="scrolling-images flex space-x-4 p-6 group">
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0"
              >
                <img
                  src={src}
                  alt={`Logo ${index + 1}`}
                  className="w-36 h-36 2xl:w-44 2xl:h-44 object-contain rounded-lg bg-transparent p-2 hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

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
      </footer>

      {/* Face Buttons */}
      <div className="mt-16 flex justify-center gap-16 flex-wrap px-6 pb-24">
        <Link href="/skills" className="hover:no-underline">
          <button className="text-2xl 2xl:text-3xl font-bold py-5 px-10 rounded-full flex items-center gap-4 transition-all duration-300
            bg-transparent text-blue-600 hover:text-white
            hover:bg-gradient-to-r hover:from-blue-400 hover:via-sky-500 hover:to-blue-600
            hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:scale-110">
            🛠️ Skills
          </button>
        </Link>

        <Link href="/projects" className="hover:no-underline">
          <button className="text-2xl 2xl:text-3xl font-bold py-5 px-10 rounded-full flex items-center gap-4 transition-all duration-300
            bg-transparent text-purple-600 hover:text-white
            hover:bg-gradient-to-r hover:from-purple-400 hover:via-fuchsia-500 hover:to-purple-600
            hover:shadow-[0_0_20px_rgba(192,132,252,0.6)] hover:scale-110">
            🚀 Projects
          </button>
        </Link>
      </div>
    </div>
  )
}
