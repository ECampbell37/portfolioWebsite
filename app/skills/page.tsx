// app/skills/page.tsx

'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"

// Define interfaces for type safety
interface SkillItem {
  name: string
  logo: string
}

interface SkillCategory {
  id: string
  accent: 'blue' | 'indigo' | 'emerald' | 'purple'
  description: string
  skillsList: SkillItem[]
}

export default function SkillsPage() {
  const skills: Record<string, SkillCategory> = {
    'AI & Machine Learning': {
      id: 'ai',
      accent: 'blue',
      description:
        "Training machine learning models, developing neural networks, and building LLM-powered apps with LangChain, RAG, and prompt engineering.",
      skillsList: [
        { name: 'Python', logo: '/images/python.png' },
        { name: 'NumPy', logo: '/images/NumPy.png' },
        { name: 'TensorFlow', logo: '/images/tensorflow.png' },
        { name: 'PyTorch', logo: '/images/pytorch.png' },
        { name: 'SciKit-Learn', logo: '/images/sklearn.png' },
        { name: 'OpenAI', logo: '/images/openai.png' },
        { name: 'LangChain', logo: '/images/LangChain.png' },
        { name: 'Jupyter Notebook', logo: '/images/Jupyter2.png' },
      ],
    },
    'Web Development': {
      id: 'webdev',
      accent: 'indigo',
      description:
        "Full-stack apps with React, Next.js, and Tailwind, featuring UI/UX design, API integration, and cloud deployment.",
      skillsList: [
        { name: 'HTML', logo: '/images/HTML.png' },
        { name: 'CSS', logo: '/images/CSS.png' },
        { name: 'JavaScript', logo: '/images/js3.png' },
        { name: 'Next.js', logo: '/images/nextjs.png' },
        { name: 'React', logo: '/images/react.png' },
        { name: 'Tailwind', logo: '/images/tailwindCSS.png' },
        { name: 'Docker', logo: '/images/docker.png' },
        { name: 'AWS', logo: '/images/aws.png' },
      ],
    },
    'Data Science': {
      id: 'ds',
      accent: 'emerald',
      description:
        "Comfortable working with data from every angle, including preprocessing, analysis, visualization, and database design.",
      skillsList: [
        { name: 'SQL', logo: '/images/sql.png' },
        { name: 'MySQL', logo: '/images/mySQL.png' },
        { name: 'PostgreSQL', logo: '/images/postgresql.png' },
        { name: 'Supabase', logo: '/images/supabase.png' },
      ],
    },
    'CS Fundamentals': {
      id: 'cs',
      accent: 'purple',
      description:
        "A solid foundation in data structures, algorithms, and OOP, across both low and high-level languages.",
      skillsList: [
        { name: 'C', logo: '/images/C.png' },
        { name: 'C++', logo: '/images/C++.png' },
        { name: 'Java', logo: '/images/java3.png' },
        { name: 'VS Code', logo: '/images/Vscode.png' },
      ],
    },
  }

  const accentStyles = {
    blue: { text: 'text-blue-400', border: 'hover:border-blue-500/50', glow: 'hover:shadow-blue-500/10' },
    indigo: { text: 'text-indigo-400', border: 'hover:border-indigo-500/50', glow: 'hover:shadow-indigo-500/10' },
    emerald: { text: 'text-emerald-400', border: 'hover:border-emerald-500/50', glow: 'hover:shadow-emerald-500/10' },
    purple: { text: 'text-purple-400', border: 'hover:border-purple-500/50', glow: 'hover:shadow-purple-500/10' },
  } as const

  const allLogos = Object.values(skills).flatMap((s) => s.skillsList)

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 pt-32 pb-24">
      <header className="max-w-3xl mx-auto px-6 text-center mb-16 animate-slide-up delay-1">
        <h1 className="text-4xl 2xl:text-6xl sm:text-5xl font-black tracking-tight mb-4">Technical Skills</h1>
        <p className="text-zinc-400 text-lg 2xl:text-xl leading-relaxed">
          Tools and technologies I build with, across AI, web development, and data.
        </p>
      </header>

      <div className="relative max-w-6xl 2xl:max-w-7xl m-auto overflow-hidden border-y border-zinc-900 bg-zinc-900/30 py-6 mb-20 animate-slide-up delay-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
        <div className="flex animate-marquee gap-14 px-7">
          {[...allLogos, ...allLogos].map((skill, i) => (
            <div key={`${skill.name}-${i}`} className="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
              <img src={skill.logo} alt={skill.name} className="w-10 h-10 2xl:w-14 2xl:h-14 object-contain" />
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 animate-slide-up delay-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, data]) => {
            const styles = accentStyles[data.accent]
            return (
              <section
                id={data.id}
                key={category}
                className={`rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 transition-all duration-300 ${styles.border} hover:shadow-2xl ${styles.glow}`}
              >
                <h2 className={`text-2xl 2xl:text-3xl font-extrabold mb-3 ${styles.text}`}>{category}</h2>
                <p className="text-zinc-400 2xl:text-lg leading-relaxed mb-6">{data.description}</p>
                <div className="grid grid-cols-4 gap-3">
                  {data.skillsList.map((skill: SkillItem) => (
                    <div
                      key={skill.name}
                      title={skill.name}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-colors"
                    >
                      <img src={skill.logo} alt={skill.name} className="w-8 h-8 2xl:w-12 2xl:h-12 object-contain" />
                      <span className="text-[11px] text-zinc-500 2xl:text-sm text-center leading-tight">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        <div className="mt-20 text-center animate-slide-up delay-4">
          <Link href="/">
            <Button variant="link" className="text-lg 2xl:text-xl text-zinc-400 hover:text-zinc-50">← Back to Home</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}