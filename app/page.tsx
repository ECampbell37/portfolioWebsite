// Home Page

'use client'

import { GithubIcon, LinkedinIcon, FileText} from 'lucide-react'
import { Button } from "@/components/ui/button"

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
      <main className="max-w-7xl 2xl:max-w-screen-2xl mx-auto mt-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-blue-100 to-sky-100 p-8 rounded-2xl">
            {/* Main Message */}
            <h2 className="text-4xl 2xl:text-5xl font-bold mb-2 text-gray-900">Hi I&apos;m</h2>
            <h1 className="text-5xl 2xl:text-6xl font-bold mb-4 text-gray-900">Elijah Campbell</h1>
            <p className="text-md 2xl:text-lg mb-6 text-gray-700">
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
                  className="w-full sm:w-auto px-5 py-6 text-md 2xl:text-xl font-semibold"
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
                    className="w-full sm:w-auto px-6 py-6 text-md 2xl:text-xl font-semibold flex items-center justify-center gap-2"
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
                    className="w-full sm:w-auto px-6 py-6 text-md 2xl:text-xl font-semibold flex items-center justify-center gap-2"
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
              className="rounded-full w-80 h-80 2xl:w-96 2xl:h-96 object-cover shadow-lg"
            />
          </div>
        </div>
      </main>

    {/* Scrolling Images */}
      <footer className="mt-14 bg-white py-12 px-4">
        <h2 className="text-3xl 2xl:text-4xl font-bold mb-6 text-center text-gray-800">
          My Skills & Platforms
        </h2>

        <div className="w-full 2xl:max-w-screen-2xl 2xl:mx-auto overflow-hidden rounded-2xl border border-blue-200 bg-sky-50 shadow-inner">
          <div className="scrolling-images flex space-x-4 p-6 group">
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0"
              >
                <img
                  src={src}
                  alt={`Logo ${index + 1}`}
                  className="w-36 h-36 2xl:w-44 2xl:h-44 object-contain rounded-lg bg-sky-50 p-2"
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
    </div>
  )
}
