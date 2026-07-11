// app/page.tsx
'use client'

import { GithubIcon, LinkedinIcon, FileText, Mail, SendHorizonal, GraduationCap, Code2, PersonStanding, Presentation, ArrowRight, Laptop, Award } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'

export default function Home() {
  
  const [activeIndex, setActiveIndex] = useState(0)
  const [isInitialMount, setIsInitialMount] = useState(true)

  const identityPillars = [
  { 
    icon: <GraduationCap className="w-5 h-5 text-blue-500 2xl:w-8 2xl:h-8" />, 
    label: "CS Grad",
    // Blue shadow glow
    activeGlow: "border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.25)] text-blue-100"
  },
  { 
    icon: <Code2 className="w-5 h-5 text-indigo-500 2xl:w-8 2xl:h-8" />, 
    label: "Developer",
    // Indigo shadow glow
    activeGlow: "border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.25)] text-indigo-100"
  },
  { 
    icon: <Presentation className="w-5 h-5 text-emerald-500 2xl:w-8 2xl:h-8" />, 
    label: "Educator",
    // Emerald shadow glow
    activeGlow: "border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.25)] text-emerald-100"
  }
]

  // Automatically cycle the active index every 3 seconds
  useEffect(() => {
    // Use 1.5s only on page load, 3s for every turn after
    const delay = isInitialMount ? 800 : 3000

    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % identityPillars.length)
      
      // Once the first transition fires, turn off the fast fuse forever
      if (isInitialMount) {
        setIsInitialMount(false)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [activeIndex, isInitialMount, identityPillars.length])


  // Navigation Page Route Buttons
  const routes = [
    { 
      name: "Technical Skills", 
      desc: "Languages and tools I use",
      href: "/skills", 
      icon: <Code2 className="w-6 h-6 group-hover:text-zinc-950 transition-colors 2xl:w-8 2xl:h-8" />,
      style: "hover:bg-blue-600 hover:border-blue-500 group-hover:text-zinc-950" 
    },
    { 
      name: "Software Projects", 
      desc: "Apps and software that I've created",
      href: "/projects", 
      icon: <Laptop className="w-6 h-6 group-hover:text-zinc-950 transition-colors 2xl:w-8 2xl:h-8" />,
      style: "hover:bg-indigo-600 hover:border-indigo-500 group-hover:text-zinc-950" 
    },
    { 
      name: "Work Experience", 
      desc: "Places I've worked and had an impact",
      href: "/experience", 
      icon: <PersonStanding className="w-6 h-6 group-hover:text-zinc-950 transition-colors 2xl:w-8 2xl:h-8" />,
      style: "hover:bg-purple-600 hover:border-purple-500 group-hover:text-zinc-950" 
    },
    { 
      name: "Education & Credentials", 
      desc: "How I learned what I know today",
      href: "/education", 
      icon: <Award className="w-6 h-6 group-hover:text-zinc-950 transition-colors 2xl:w-8 2xl:h-8" />,
      style: "hover:bg-emerald-600 hover:border-emerald-500 group-hover:text-zinc-950" 
    }
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24 mx-auto w-full text-center relative overflow-hidden bg-zinc-950">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="absolute -top-48 -left-48 h-[600px] w-[600px]
          rounded-full bg-blue-500/10 blur-[180px]
          animate-float-slow"
        />

        <div
          className="absolute top-1/3 -right-48 h-[550px] w-[550px]
          rounded-full bg-indigo-500/10 blur-[200px]
          animate-float-slow-reverse"
        />

        <div
          className="absolute bottom-[-180px] left-1/2 -translate-x-1/2
          h-[450px] w-[450px]
          rounded-full bg-purple-500/10 blur-[160px]
          animate-float-slow"
        />

      </div>

      <div className="relative z-10 flex flex-col items-center  max-w-4xl 2xl:max-w-7xl mx-auto w-full">
        
        {/* Profile Pic */}
        <div className="relative mb-6 w-60 h-60 2xl:w-72 2xl:h-72 rounded-full overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl animate-fade-in">
          <img
            src="/ProfilePhoto.PNG"
            alt="Elijah Campbell-Ihim"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Name */}
        <h1 
          className="text-4xl sm:text-6xl 2xl:text-7xl font-black tracking-tight text-zinc-100 mb-8 opacity-0 animate-slide-up delay-1"
          style={{ animationDelay: '100ms' }}
        >
          Elijah Campbell-Ihim
        </h1>

        {/* 3 Indentity Badges */}
        <div 
          className="relative flex items-center justify-center h-24 w-full max-w-xl mb-12 opacity-0 animate-slide-up delay-2 select-none"
          style={{ animationDelay: '200ms' }}
        >
          {identityPillars.map((pillar, index) => {
            const count = identityPillars.length
            const offset = (index - activeIndex + count) % count

            let transformStyle = ""
            let zIndex = "z-0"
            let opacity = "opacity-30 pointer-events-none"
            let colorGlow = "border-zinc-800/80 bg-zinc-900 text-zinc-400"

            if (offset === 0) {
              // Main Center Card - Pops out slightly larger with custom neon glow
              transformStyle = "translate-x-0 scale-105"
              zIndex = "z-30"
              opacity = "opacity-100"
              colorGlow = `bg-zinc-900/90 ${pillar.activeGlow}`
            } else if (offset === 1) {
              // Right Side Card
              transformStyle = "translate-x-32 sm:translate-x-44 scale-90"
              zIndex = "z-10"
            } else if (offset === 2) {
              // Left Side Card
              transformStyle = "-translate-x-32 sm:-translate-x-44 scale-90"
              zIndex = "z-10"
            }

            return (
              <div 
                key={index} 
                onClick={() => setActiveIndex(index)}
                className={`absolute flex items-center gap-2.5 px-6 py-3.5 rounded-xl border font-bold text-sm sm:text-base 2xl:text-lg cursor-pointer transition-all duration-700 ease-in-out ${transformStyle} ${zIndex} ${opacity} ${colorGlow} hover:border-zinc-700`}
              >
                {pillar.icon}
                <span>{pillar.label}</span>
              </div>
            )
          })}
        </div>

        {/* Resume Github LinkedIn Buttons */}
        <div 
          className="w-full max-w-xl mb-24 opacity-0 animate-slide-up delay-3"
          style={{ animationDelay: '300ms' }}
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
            <a href="/documents/Resume-Elijah-Campbell-Ihim.pdf" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full bg-zinc-50 hover:bg-zinc-200 text-zinc-950 font-extrabold h-14 text-base 2xl:text-lg rounded-xl shadow-lg flex items-center justify-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5">
                <FileText className="w-5 h-5 2xl:w-8 2xl:h-8" /> View Resume
              </Button>
            </a>
            
            <a href="https://github.com/ECampbell37" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full h-14 border-zinc-800 bg-zinc-900/50 text-zinc-200 hover:text-zinc-50 font-bold text-base 2xl:text-lg rounded-xl flex items-center justify-center gap-2.5 transition-all hover:border-zinc-700 hover:-translate-y-0.5">
                <GithubIcon className="w-5 h-5 text-zinc-400 2xl:w-8 2xl:h-8" /> GitHub
              </Button>
            </a>

            <a href="https://linkedin.com/in/elijah-campbell-ihim" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full h-14 border-zinc-800 bg-zinc-900/50 text-zinc-200 hover:text-zinc-50 font-bold text-base 2xl:text-lg rounded-xl flex items-center justify-center gap-2.5 transition-all hover:border-zinc-700 hover:-translate-y-0.5">
                <LinkedinIcon className="w-5 h-5 text-zinc-400 2xl:w-8 2xl:h-8" /> LinkedIn
              </Button>
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full mb-20 opacity-0 animate-slide-up delay-4"
          style={{ animationDelay: "380ms" }}
        >
          {[
            { number: "300+", label: "Students Taught", color: "text-blue-400" },
            { number: "15+", label: "Software Projects", color: "text-indigo-400" },
            { number: "6+", label: "Years Teaching", color: "text-purple-400" },
            { number: "4", label: "Deployed Websites", color: "text-emerald-400" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`text-3xl 2xl:text-4xl font-black ${stat.color}`}>
                {stat.number}
              </div>

              <div className="mt-2 text-sm 2xl:text-base text-zinc-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Page Route Buttons */}
        <div 
          className="w-full opacity-0 animate-slide-up delay-5"
          style={{ animationDelay: '400ms' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
            {routes.map((route, idx) => (
              <Link key={idx} href={route.href} className="group block">
                <div className={`grid grid-cols-[1fr_auto] items-center p-8 rounded-2xl border border-zinc-800/80 bg-zinc-950 transition-all duration-300 ease-out shadow-lg h-44 relative overflow-hidden transform group-hover:-translate-y-1 group-hover:shadow-2xl ${route.style}`}>
                  
                  {/* Left Column Content Stack */}
                  <div className="flex flex-col justify-between h-full relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:bg-zinc-950/20 group-hover:border-transparent transition-colors">
                        {route.icon}
                      </div>
                      <h2 className="text-xl 2xl:text-2xl font-extrabold tracking-tight text-zinc-100 group-hover:text-zinc-950 transition-colors">
                        {route.name}
                      </h2>
                    </div>

                    <p className="text-sm 2xl:text-base text-zinc-400 group-hover:text-zinc-900 font-medium leading-relaxed max-w-[95%] transition-colors">
                      {route.desc}
                    </p>
                  </div>

                  {/* Right Column Arrow Element */}
                  <div className="h-full flex items-end justify-end pl-6 pb-1 relative z-10">
                    <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-950 transition-all group-hover:translate-x-1" />
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Footer */}
      <footer className="mt-28 w-full border-t border-zinc-800 pt-16 animate-slide-up delay-6">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl 2xl:text-4xl font-black tracking-tight text-zinc-50 mb-4">
            Let&apos;s Work Together!
          </h2>

          <p className="text-zinc-400 leading-relaxed max-w-xl mx-auto mb-8  2xl:text-lg">
            Whether you&apos;re looking for a software developer, AI Engineer, 
            CS educator, or simply want to connect,
            I&apos;d love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">

            <a href="mailto:elijahcampbellihim@gmail.com">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-8 py-6 font-bold transition-all duration-300 hover:-translate-y-1 2xl:text-base">
                <Mail className="w-4 h-4 mr-2 2xl:w-6 2xl:h-6" /> Email Me
              </Button>
            </a>

            <a
              href="https://linkedin.com/in/elijah-campbell-ihim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-zinc-800 bg-zinc-900 text-zinc-200 hover:border-zinc-700 rounded-xl px-8 py-6 font-bold transition-all duration-300 hover:-translate-y-1 2xl:text-base"
              >
                <SendHorizonal className="w-4 h-4 mr-2 2xl:w-6 2xl:h-6" /> Message Me
              </Button>
            </a>

          </div>

          <p className="text-xs 2xl:text-sm text-zinc-600">
            Designed and developed using Next.js, React, and Tailwind CSS.
          </p>

        </div>
      </footer>

    </div>
    
  )
}