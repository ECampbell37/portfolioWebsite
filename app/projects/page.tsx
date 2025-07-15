// Projects Page

import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  // Highlighted project
  const featuredProject = {
    title: 'AI Tutor App',
    thumbnail: '/images/AI_Tutor.png',
    description: 'A multi-functional AI Tutor web application designed to encourage personalized learning. Built with LangChain, Next.js, Supabase, and FastAPI.',
    pdfLink: 'https://github.com/ECampbell37/AI_Tutor_SeniorProject/blob/master/README.md',
    codeLink: 'https://github.com/ECampbell37/AI_Tutor_SeniorProject',
    liveLink: 'https://ai-tutor-senior-project.vercel.app/'
  };

  // All projects
  const projects = [
    {
      title: 'Resume Assistant Web App',
      thumbnail: '/images/Resume-pic2.png',
      description: 'A GPT-4o-powered resume analysis web app with automated feedback, job role suggestions, and chatbot Q&A.',
      pdfLink: 'https://github.com/ECampbell37/Resume_Assistant_Frontend/blob/master/README.md',
      codeLink: 'https://github.com/ECampbell37/Resume_Assistant_Frontend',
    },
    {
      title: 'Big 5 Personality Test Mobile App',
      thumbnail: '/images/personality2.jpg',
      description: 'A customized React Native & Expo mobile app allowing users to take an accurate Big 5 Personality Test',
      pdfLink: 'https://github.com/ECampbell37/PersonalityTestMobileApp/blob/master/README.md',
      codeLink: 'https://github.com/ECampbell37/PersonalityTestMobileApp',
    },
    {
      title: 'Canoga (Java/Android)',
      thumbnail: '/images/java3.png',
      description: 'An Android version of the board game Canoga (Shut the Box) written in Java, including an intelligent CPU opponent and a graphical user interface',
      pdfLink: 'https://github.com/ECampbell37/Canoga_Java_Android/blob/main/README.md',
      codeLink: 'https://github.com/ECampbell37/Canoga_Java_Android',
    },
    {
      title: 'LangChain For LLM Application Development Guided Project',
      thumbnail: '/images/LangChain2.png',
      description: 'A guided project from Coursera covering the fundamentals of LangChain Development',
      pdfLink: '/documents/LangChain for LLM App Dev Project Description.pdf',
      codeLink: 'https://github.com/ECampbell37/LangChainLLMDev',
    },
    {
      title: 'PyTorch Customer Churn Neural Network',
      thumbnail: '/images/customerChurn.png',
      description: 'A deep learning project aimed at creating a neural network that can accurately predict customer churn at the company Telco',
      pdfLink: '/documents/PyTorch Customer Churn NN Project Description.pdf',
      codeLink: 'https://github.com/ECampbell37/PyTorchTelcoChurnNN',
    },
    {
      title: 'Portfolio Website',
      thumbnail: '/profileAvatar.jpg',
      description: 'This portfolio site! Deployed on Vercel, this app uses Next.js, React, and Tailwind to showcase my skills and experience',
      pdfLink: 'https://github.com/ECampbell37/portfolioWebsite/blob/main/README.md',
      codeLink: 'https://github.com/ECampbell37/portfolioWebsite',
    },
    {
      title: 'Contact Location Web App',
      thumbnail: '/images/locationIcon.jpg',
      description: 'A web application designed to store both user and contact data in a database, and visibly geolocate their addresses on a map',
      pdfLink: '/documents/Contact Location Web App Project Description.pdf',
      codeLink: 'https://github.com/ECampbell37/ContactLocationWebApp',
    },
    {
      title: 'Lines of Action (C++)',
      thumbnail: '/images/C++2.png',
      description: 'A terminal based replica of the complex strategy game Lines of Action written in C++, including an intelligent CPU opponent',
      pdfLink: '/documents/Lines of Action Project Description.pdf',
      codeLink: 'https://github.com/ECampbell37/LinesOfAction',
    },
    {
      title: 'GPT Article Summarizer',
      thumbnail: '/images/openai2.jpeg',
      description: 'A python code notebook capable of generating a compact bullet point summary of a given text. My first program involving Generative AI!',
      pdfLink: '/documents/GPT Article Summarizer Project Description.pdf',
      codeLink: 'https://github.com/ECampbell37/ChatGPT_ArticleSummarizer',
    },
    {
      title: 'Machine Learning Psychology Research',
      thumbnail: '/images/psychology.png',
      description: 'A machine learning research project centered around the question of whether or not personality traits could predict physical strength',
      pdfLink: '/documents/Pyschology ML Research Project Description.pdf',
      codeLink: 'https://github.com/ECampbell37/ML_PsychologyResearch',
    },
    {
      title: 'Machine Learning Sleep Analysis',
      thumbnail: '/images/sleepAI.jpg', 
      description: 'A python code notebook for analyzing my sleep patterns over a month long period to find what aspects of my sleep routine contribute most to my overall sleep experience',
      pdfLink: '/documents/SleepAI Project Description.pdf', 
      codeLink: 'https://github.com/ECampbell37/ML_SleepAnalysis', 
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-gray-900">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl 2xl:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
          My Projects
        </h1>
        <p className="text-lg 2xl:text-xl text-gray-600 max-w-2xl 2xl:max-w-3xl mx-auto">
          A showcase of my work in AI, Web Development, and other areas of Computer Science. Explore detailed descriptions and GitHub repos below.
        </p>
      </header>

      {/* Featured Project */}
      <section className="max-w-6xl 2xl:max-w-screen-2xl mx-auto px-6 mb-20">
        <h2 className="text-3xl 2xl:text-4xl font-bold text-center text-indigo-800 mb-10">🌟 Featured Project</h2>
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full lg:w-1/2">
            <img
              src={featuredProject.thumbnail}
              alt={`${featuredProject.title} Thumbnail`}
              className="w-full h-full object-cover object-top max-h-[400px]"
            />
          </div>
          <div className="p-6 sm:p-8 flex flex-col justify-center w-full lg:w-1/2">
            <h3 className="text-3xl 2xl:text-4xl font-bold text-blue-700 mb-4">{featuredProject.title}</h3>
            <p className="text-md md:text-lg 2xl:text-xl text-gray-700 text-base leading-relaxed mb-6 2xl:mb-8">{featuredProject.description}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 2xl:gap-8">
              <Link href={featuredProject.liveLink} target="_blank" rel="noopener noreferrer">
                <button className="text-md 2xl:text-2xl w-full sm:w-auto px-6 py-3 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-br hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white text-base font-medium rounded-lg shadow transition">
                  🚀 Visit Site
                </button>
              </Link>
              <Link href={featuredProject.pdfLink} target="_blank" rel="noopener noreferrer">
                <button className="text-md 2xl:text-2xl w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-base font-medium rounded-lg shadow transition">
                  📄 Details
                </button>
              </Link>
              <Link href={featuredProject.codeLink} target="_blank" rel="noopener noreferrer">
                <button className="text-md 2xl:text-2xl w-full sm:w-auto px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white text-base font-medium rounded-lg shadow transition">
                  💻 View Code
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Project Grid */}
      <main className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-6 pb-24">

        {/* Divider and Section Heading */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-2xl 2xl:text-3xl font-bold text-indigo-800 text-center">Additional Projects</h2>
          <div className="w-2/3 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 ease-in-out overflow-hidden"
            >
              <div className="w-full bg-white flex items-center justify-center overflow-hidden">
                {/* Project Image */}
                <img
                  src={project.thumbnail}
                  alt={`${project.title} Thumbnail`}
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Project Content */}
              <div className="p-6 flex flex-col items-center text-center">
                <h2 className="text-2xl font-semibold text-blue-700">{project.title}</h2>
                <p className="mt-3 text-gray-700 text-md 2xl:text-lg leading-relaxed">{project.description}</p>

                {/* Centered Buttons */}
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <Link href={project.pdfLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm 2xl:text-lg px-6 py-3 rounded-lg text-lg shadow transition">
                      Read Details
                    </button>
                  </Link>
                  <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-gray-800 hover:bg-gray-900 text-white text-sm 2xl:text-lg px-6 py-3 rounded-lg text-lg shadow transition">
                      View Code
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Return */}
        <div className="mt-20 text-center">
          <Link href="/">
            <Button variant="link" className="text-lg 2xl:text-xl" >← Back to Home</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
