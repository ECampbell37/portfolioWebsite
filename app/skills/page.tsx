// Skills Page

'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function SkillsPage() {
  const skills = {
    'AI/ML': {
      id: 'ai',
      description:
        "AI and Machine Learning are my primary areas of expertise and interest. I’ve completed college coursework, Coursera specializations, IBM’s AI Engineering Professional Certificate, and a collection of personal projects. My hands-on experience includes training models like logistic regression and random forests, developing and fine-tuning neural networks, and evaluating model performance. I’m especially passionate about Generative AI — creating LLM-powered applications using LangChain, GPT models, and retrieval-augmented generation (RAG). This field truly excites me, and I hope to expand the world of AI/ML for many years to come!",
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
    'Web Application Development': {
      id: 'webdev',
      description:
        'Intermediate experience building modern web apps with React, Next.js, and Tailwind. I am skilled in UI/UX design, full-stack development, API integration, and Vercel cloud deployment. I’ve also worked with Docker to containerize and deploy applications to cloud environments, such as AWS. Web Applications are a great way to make code accessible and easy to navigate for a wide range of users, and for that I appreciate their immense value.',
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
      description:
        'Skilled in working with datasets, Data Preprocessing, Exploratory Data Analysis (EDA), Data Visualization, Database Design, querying databases, and collecting data. We live in a data-centric world, and understanding how to work with and analyze data is perhaps just as important as knowing how to read and write code.',
      skillsList: [
        { name: 'SQL', logo: '/images/sql.png' },
        { name: 'MySQL', logo: '/images/mySQL.png' },
        { name: 'PostgreSQL', logo: '/images/postgresql.png' },
        { name: 'Supabase', logo: '/images/supabase.png' },
      ],
    },
    'CS Fundamentals': {
      id: 'cs',
      description:
        'Solid understanding of computer science principles and basic algorithms. Much of my college coursework was geared towards understanding the basics of computer architecture, data structures, algorithms, OOP properties such as classes and polymorphism, and proper documentation/coding standards. I have a well rounded background in C++, and I understand the principles of low and high level coding languages.',
      skillsList: [
        { name: 'C', logo: '/images/C.png' },
        { name: 'C++', logo: '/images/C++.png' },
        { name: 'Java', logo: '/images/java.png' },
        { name: 'VS Code', logo: '/images/Vscode.png' },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header Section */}
      <section className="max-w-screen-2xl mx-auto bg-gradient-to-r from-blue-100 to-cyan-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl 2xl:text-5xl font-bold mb-4">My Technical Skills</h1>
          <p className="text-gray-700 text-lg 2xl:text-2xl max-w-2xl 2xl:max-w-3xl mx-auto">
            I&apos;ve worked across AI/ML, full-stack development, Data Science, and CS fundamentals. Each section below describes my interest and background in the respective field, as well as how those skills were generally acquired. Check out my projects page and resume to learn more!

          </p>
        </div>
      </section>

      {/* Main Skills Content */}
      <main className="max-w-6xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {Object.entries(skills).map(([category, { id, description, skillsList }]) => (
          <section
            id={id}
            key={category}
            className="mb-16 bg-white border border-gray-200 rounded-2xl shadow-md p-6 transition hover:shadow-lg"
          >
            <h2 className="text-2xl 2xl:text-3xl font-bold text-black mb-2">{category}</h2>
            <p className="text-md 2xl:text-xl text-gray-700 mb-6">{description}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skillsList.map(skill => (
                <div
                  key={skill.name}
                  className="bg-sky-50 rounded-lg p-4 text-center hover:scale-105 transition-transform shadow-sm"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} Logo`}
                    className="w-16 h-16 2xl:w-24 2xl:h-24 mx-auto mb-2"
                  />
                  <h3 className="text-lg 2xl:text-2xl font-medium">{skill.name}</h3>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Footer Return */}
        <div className="mt-20 text-center">
          <Link href="/">
            <Button variant="link" className="text-lg 2xl:text-xl" >← Back to Home</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
