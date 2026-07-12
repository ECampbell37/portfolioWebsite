// app/experience/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Briefcase } from 'lucide-react'

export default function ExperiencePage() {
  const experience = [
    {
      role: 'High School Computer Science Teacher',
      company: 'North Star Washington Park High School',
      location: 'Newark, NJ',
      dates: 'Oct 2025 - Present',
      image: '/images/northstar.jpg',
      points: [
        'Taught 200+ students Python, JavaScript, HTML, and CSS',
        'Built the curriculum for two computer science courses from the ground up',
        'Launched a new Machine Learning & AI course for the school',
      ],
    },
    {
      role: 'Head Counselor',
      company: 'Boys and Girls Club of America',
      location: 'Hawthorne, NJ',
      dates: 'Jul 2023 - Jun 2025',
      image: '/images/BGCH.jpg',
      points: [
        'Ran daily programs and activities for groups of 20+ kids',
        'Built strong relationships with members through communication and conflict resolution',
        'Supervised and mentored assistant and junior counselors',
      ],
    },
    {
      role: 'Lead Coding Instructor',
      company: 'Code Ninjas',
      location: 'Midland Park, NJ',
      dates: 'Jun 2021 - Jul 2024',
      image: '/images/codeNinjas.jpg',
      points: [
        'Taught 100+ kids ages 7-14 to code in JavaScript, Scratch, and C#',
        'Directed 10+ STEM summer camps as Lead Summer Camp Director',
        'Partnered with 3 local elementary schools on after-school coding programs',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 pt-32 pb-24">

      <header className="max-w-3xl 2xl:max-w-4xl mx-auto px-6 text-center mb-20 animate-slide-up delay-1">
        <h1 className="text-4xl sm:text-5xl 2xl:text-6xl font-black tracking-tight mb-4">
          Work Experience
        </h1>
        <p className="text-zinc-400 text-lg 2xl:text-xl leading-relaxed pt-2">
          For over 6 years, I&apos;ve <strong className = "text-purple-300">thoroughly enjoyed</strong> helping the next generation of youth learn, develop and succeed. I am grateful to have played a positive role in the lives of hundreds of young people as they navigate their way through life. 
        </p>
      </header>

      <main className="max-w-5xl 2xl:max-w-6xl mx-auto px-6 animate-slide-up delay-2">
        <div className="relative">
          {/* Vertical timeline line: left-aligned on mobile, centered on desktop */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/60 via-zinc-800 to-transparent md:-translate-x-1/2" />

          <div className="space-y-16">
            {experience.map((job, index) => {
              const isLeft = index % 2 === 0
              return (
                <div key={job.company} className="relative">
                  {/* Timeline marker dot */}
                  <div className="absolute left-6 md:left-1/2 top-2 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-zinc-950 shadow-[0_0_12px_rgba(168,85,247,0.6)]" />

                  <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
                    <div className={`pl-16 md:pl-0 ${isLeft ? 'md:col-start-1' : 'md:col-start-2'}`}>
                      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 overflow-hidden hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                        <div className="w-full h-48 bg-zinc-900 overflow-hidden relative">
                          <Image 
                            src={job.image} 
                            alt={job.company} 
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover" 
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-2 text-purple-400 text-sm font-mono">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.dates}</span>
                          </div>
                          <h2 className="text-xl 2xl:text-2xl font-extrabold text-zinc-50 mb-1">{job.role}</h2>
                          <p className="text-zinc-400 2xl:text-lg font-semibold mb-1">{job.company}</p>
                          <p className="text-zinc-500 text-sm 2xl:text-base mb-4">{job.location}</p>
                          <ul className="space-y-2 text-sm 2xl:text-base text-zinc-400">
                            {job.points.map((point, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-purple-400 mt-1">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>

      <div className="mt-24 text-center animate-slide-up delay-3">
        <Link href="/">
          <Button variant="link" className="text-lg 2xl:text-xl text-zinc-400 hover:text-zinc-50">
            ← Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}