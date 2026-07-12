// app/projects/page.tsx

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectsPage() {

  const webApps = [
    {
      title: 'AI Tutor',
      thumbnail: '/images/AI_Tutor.png',
      description: 'An AI-powered tutor that builds personalized lessons and self-grading quizzes on any subject you want to learn.',
      liveLink: 'https://ai-tutor-senior-project.vercel.app/',
      codeLink: 'https://github.com/ECampbell37/AI_Tutor_SeniorProject',
    },
    {
      title: 'Resume Assistant',
      thumbnail: '/images/resumeThumbnail.png',
      description: 'Get instant AI feedback on your resume, along with a chatbot that can answer questions about it.',
      liveLink: 'https://resume-assistant-inky.vercel.app/',
      codeLink: 'https://github.com/ECampbell37/Resume_Assistant_Frontend',
    },
    {
      title: 'Smart Budget',
      thumbnail: '/images/budgetThumbnail.png',
      description: 'Simple calculator app to help people plan their monthly budget and lifestyle expenses',
      liveLink: 'https://budget-app-smoky-zeta.vercel.app/',
      codeLink: 'https://github.com/ECampbell37/budget-app',
    },
    {
      title: 'Portfolio Website',
      thumbnail: '/images/siteThumbnail.png',
      description: 'This Portfolio website! Showcases my skills, projects, education history, and real world impact',
      liveLink: '/',
      codeLink: 'https://github.com/ECampbell37/portfolioWebsite',
    },
  ]

  const academicProjects = [
    {
      title: 'Big 5 Personality Test App',
      thumbnail: '/images/personalityPage.png',
      description: 'A mobile app that scores your Big Five personality traits and saves your results.',
      codeLink: 'https://github.com/ECampbell37/PersonalityTestMobileApp',
    },
    {
      title: 'Canoga (Java/Android)',
      thumbnail: '/images/Canoga.png',
      description: 'An Android version of the strategy game Canoga, complete with a smart computer opponent and GUI.',
      codeLink: 'https://github.com/ECampbell37/Canoga_Java_Android',
    },
    {
      title: 'LangChain Guided Project',
      thumbnail: '/images/andrewng.png',
      description: 'A guided Coursera project exploring the basics of building apps with LangChain.',
      codeLink: 'https://github.com/ECampbell37/LangChainLLMDev',
    },
    {
      title: 'Customer Churn Neural Network',
      thumbnail: '/images/churn.png',
      description: 'A neural network that predicts which customers are likely to cancel their service.',
      codeLink: 'https://github.com/ECampbell37/PyTorchTelcoChurnNN',
    },
    {
      title: 'Contact Location Web App',
      thumbnail: '/images/location.png',
      description: 'An app that stores contacts and plots their addresses on a map.',
      codeLink: 'https://github.com/ECampbell37/ContactLocationWebApp',
    },
    {
      title: 'Lines of Action (C++)',
      thumbnail: '/images/terminal.png',
      description: 'A terminal-based version of the strategy game Lines of Action, with a smart computer opponent.',
      codeLink: 'https://github.com/ECampbell37/LinesOfAction',
    },
    {
      title: 'GPT Article Summarizer',
      thumbnail: '/images/openai2.jpeg',
      description: 'My first AI project - a notebook that turns articles into quick bullet-point summaries.',
      codeLink: 'https://github.com/ECampbell37/ChatGPT_ArticleSummarizer',
    },
    {
      title: 'ML Psychology Research',
      thumbnail: '/images/psychology.png',
      description: 'A research project testing whether personality traits can predict physical strength.',
      codeLink: 'https://github.com/ECampbell37/ML_PsychologyResearch',
    },
    {
      title: 'ML Sleep Analysis',
      thumbnail: '/images/sleepAI.jpg',
      description: 'A month-long analysis of my own sleep data to find what actually improves it.',
      codeLink: 'https://github.com/ECampbell37/ML_SleepAnalysis',
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 pt-32 pb-24">

      <header className="max-w-3xl mx-auto px-6 text-center mb-20 animate-slide-up delay-1">
        <h1 className="text-4xl sm:text-5xl 2xl:text-6xl font-black tracking-tight mb-4">
          Software Projects
        </h1>
        <p className="text-zinc-400 text-lg 2xl:text-xl leading-relaxed">
          A collection of my own web applications that you can try right now, plus academic projects from my college coursework and independent learning.
        </p>
      </header>

      <section className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 mb-24 animate-slide-up delay-2">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl 2xl:text-3xl font-extrabold text-indigo-400">Web Apps</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/40 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-12">
          {webApps.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/40 overflow-hidden transition-all duration-300 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="w-full h-56 overflow-hidden bg-zinc-900">
                <div className="w-full h-56 overflow-hidden bg-zinc-900 relative">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} screenshot`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl 2xl:text-2xl font-extrabold text-zinc-50 mb-2">{project.title}</h3>
                <p className="text-zinc-400 2xl:text-lg leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-violet-500 hover:to-purple-500 text-zinc-50 font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition-transform duration-300 2xl:text-base">
                      <ExternalLink className="w-4 h-4 2xl:w-6 2xl:h-6" /> Visit Site
                    </Button>
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-zinc-800 bg-zinc-900/50 text-zinc-200 hover:text-zinc-50 hover:border-zinc-700 font-bold rounded-xl flex items-center gap-2 2xl:text-base">
                      <Github className="w-4 h-4 2xl:w-6 2xl:h-6" /> View Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 animate-slide-up delay-3">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl 2xl:text-3xl font-extrabold text-purple-400">Academic &amp; Learning Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-500/40 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 2xl:gap-14">
          {academicProjects.map((project) => (
            <a
              key={project.title}
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-zinc-800/80 bg-zinc-900/40 overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="w-full h-36 overflow-hidden bg-zinc-900">
                <div className="w-full h-36 overflow-hidden bg-zinc-900 relative">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg 2xl:text-2xl font-bold text-zinc-50 mb-1.5">{project.title}</h3>
                <p className="text-sm 2xl:text-base text-zinc-400 leading-relaxed mb-4">{project.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm 2xl:text-base font-semibold text-purple-400 group-hover:text-purple-300">
                  <Github className="w-4 h-4 2xl:w-6 2xl:h-6" /> View Code
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="mt-24 text-center animate-slide-up delay-4">
        <Link href="/">
          <Button variant="link" className="text-lg 2xl:text-xl text-zinc-400 hover:text-zinc-50">
            ← Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}