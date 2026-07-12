// app/education/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, ExternalLink } from 'lucide-react'

export default function EducationPage() {
  const education = [
  {
    type: 'degree',
    title: 'Bachelor of Science, Computer Science',
    institution: 'Ramapo College of New Jersey',
    location: 'Mahwah, NJ',
    dates: 'Aug 2021 - Jun 2025',
    logo: '/images/ramapo.png',
    meta: '3.8 GPA',
    highlights: [
      'Full-Tuition Presidential Scholarship',
      'Graduated Magna Cum Laude',
      'Dean\'s List recipient every semester',
    ],
    // Extract courses into their own array
    courses: [
      'CS I & II', 'Data Structures', 'Assembly Language', 'Machine Learning', 
      'Data Analysis & Visualization', 'Software Design', 'Cyber Security', 'Analysis of Algorithms', 
      'Database Design',  'Discrete Structures','Web Application Development',  'Mobile Development', 
      'Linear Algebra', 'Operating Systems', 'Organization of Prog. Languages',  'Senior Project'
    ]
  },
    
    {
      type: 'certification',
      title: 'AI Engineering Professional Certificate',
      institution: 'IBM',
      dates: 'Nov 2024 - Jan 2025',
      logo: '/images/ibm.png',
      certLink: 'https://coursera.org/share/70bf2eb3f7c0aedda2e4f7f180536c18',
      topics: ['TensorFlow', 'Keras', 'PyTorch', 'NLP', 'Transformers', 'Fine-Tuning', 'RAG', 'LLMs', 'LangChain'],
    },
    {
      type: 'certification',
      title: 'Machine Learning Specialization',
      institution: 'Stanford University & DeepLearning.AI',
      dates: 'Jun 2023 - Aug 2023',
      logo: '/images/stanford.png',
      certLink: 'https://coursera.org/share/d64e155722fda6ada9a5634a38ce5042',
      topics: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks', 'Recommendation Systems', 'Reinforcement Learning'],
    },
    {
      type: 'degree',
      title: 'High School Diploma',
      institution: 'Waldwick High School',
      location: 'Waldwick, NJ',
      dates: 'Sep 2017 - Jun 2021',
      logo: '/images/waldwick.png',
      meta: '4.86 GPA',
      highlights: [
        'Salutatorian GPA',
        'Straight A\'s every quarter, every year',
        'Varsity Soccer',
      ],
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 pt-32 pb-24">

      <header className="max-w-3xl mx-auto px-6 text-center mb-20 animate-slide-up delay-1">
        <h1 className="text-4xl sm:text-5xl 2xl:text-6xl font-black tracking-tight mb-4">
          Education &amp; Credentials
        </h1>
        <p className="text-zinc-400 text-lg 2xl:text-xl leading-relaxed">
          My formal academic history, as well as online certifications that helped keep me updated on the latest technology.
        </p>
      </header>

      <main className="max-w-5xl 2xl:max-w-6xl mx-auto px-6 animate-slide-up delay-2">
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/60 via-zinc-800 to-transparent md:-translate-x-1/2" />

          <div className="space-y-16">
            {education.map((item, index) => {
              const isLeft = index % 2 === 0
              const Icon = item.type === 'degree' ? GraduationCap : Award
              return (
                <div key={item.title} className="relative">
                  <div className="absolute left-6 md:left-1/2 top-2 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-zinc-950 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />

                  <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
                    <div className={`pl-16 md:pl-0 ${isLeft ? 'md:col-start-1' : 'md:col-start-2'}`}>
                      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 overflow-hidden hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 p-6">

                        <div className="flex items-start gap-4 mb-4">
                          <div className="shrink-0 w-16 h-16 rounded-xl bg-zinc-50 flex items-center justify-center p-2 relative">
                            <Image 
                              src={item.logo} 
                              alt={item.institution} 
                              fill
                              sizes="64px"
                              className="object-contain p-2" 
                              priority
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-emerald-400 text-sm 2xl:text-base font-mono mb-1">
                              <Icon className="w-4 h-4 2xl:w-6 2xl:h-6" />
                              <span>{item.dates}</span>
                            </div>
                            <h2 className="text-lg 2xl:text-xl font-extrabold text-zinc-50 leading-tight">{item.title}</h2>
                            <p className="text-zinc-400 font-semibold text-sm 2xl:text-base">{item.institution}</p>
                          </div>
                        </div>

                        {item.type === 'degree' && (
                          <>
                            <div className="flex flex-wrap items-center gap-2 mb-4">
                              <span className="text-xs 2xl:text-sm font-mono text-zinc-500">{item.location}</span>
                              <span className="text-xs 2xl:text-sm font-mono text-zinc-500">•</span>
                              <span className="text-xs 2xl:text-sm font-mono text-emerald-400">{item.meta}</span>
                            </div>
                            
                            {/* Clean, short highlights list */}
                            <ul className="space-y-2 text-sm 2xl:text-base text-zinc-400">
                              {item.highlights?.map((point, i) => (
                                <li key={i} className="flex gap-2">
                                  <span className="text-emerald-400 mt-1">•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Major Courses Section */}
                            {item.courses && (
                              <div className="mt-6 pt-4 border-t border-zinc-800/60">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3 font-mono">
                                  Major Courses
                                </h3>
                                <div className="flex flex-wrap gap-1.5">
                                  {item.courses.map((course) => (
                                    <span
                                      key={course}
                                      className="text-[11px] 2xl:text-xs font-medium px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-300 border border-zinc-700/40"
                                    >
                                      {course}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </>
                        )}

                        {item.type === 'certification' && (
                          <>
                            <div className="flex flex-wrap gap-2 mb-5">
                              {item.topics?.map((topic) => (
                                <span
                                  key={topic}
                                  className="text-xs 2xl:text-sm font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                                >
                                  {topic}
                                </span>
                              ))}
                            </div>
                            <a href={item.certLink} target="_blank" rel="noopener noreferrer">
                              <Button
                                variant="outline"
                                className="border-zinc-800 bg-zinc-900/50 text-zinc-200 hover:text-zinc-50 hover:border-emerald-500/50 font-bold rounded-xl flex items-center gap-2 2xl:text-base"
                              >
                                <ExternalLink className="w-4 h-4 2xl:w-6 2xl:h-6" /> View Certificate
                              </Button>
                            </a>
                          </>
                        )}

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