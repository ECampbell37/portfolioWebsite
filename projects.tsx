import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Machine Learning Sleep Analysis',
      thumbnail: '/images/jupyter.png', 
      description: 'A python code notebook for analyzing my sleep patterns to find what aspects of my sleep routine contribute most to my overall sleep experience',
      pdfLink: '/documents/SleepAI Project Description.pdf', 
      codeLink: 'https://github.com/ECampbell37/ML_SleepAnalysis', 
    },
    {
      title: 'ChatGPT Article Summarizer',
      thumbnail: '/images/openai.png',
      description: 'A python code notebook capable of generating a compact bullet point summary of a given text',
      pdfLink: '/documents/ChatGPT Article Summarizer Project Description.pdf',
      codeLink: 'https://github.com/ECampbell37/ChatGPT_ArticleSummarizer',
    },
    {
      title: 'Contact Location Web App',
      thumbnail: '/images/locationIcon.jpg',
      description: 'A web application designed to store both user and contact data in a database, and visibly geolocate their addresses on a map',
      pdfLink: '/documents/Contact Location Web App Project Description.pdf',
      codeLink: 'https://github.com/ECampbell37/ContactLocationWebApp',
    },
    {
      title: 'Machine Learning Psychology Research',
      thumbnail: '/images/psychology.png',
      description: 'A machine learning research project centered around the question of whether or not personality traits could predict physical strength',
      pdfLink: '/documents/Pyschology ML Research Project Description.pdf',
      codeLink: 'https://github.com/ECampbell37/ML_PsychologyResearch',
    },
    {
      title: 'Lines of Action C++',
      thumbnail: '/images/C++.png',
      description: 'A terminal based replica of the complex strategy game Lines of Action written in C++, including an intelligent CPU opponent',
      pdfLink: '/documents/Lines of Action Project Description.pdf',
      codeLink: 'https://github.com/ECampbell37/LinesOfAction',
    },
    {
      title: 'Portfolio Website',
      thumbnail: '/profileAvatar.jpg',
      description: 'This portfolio site!',
      pdfLink: '/documents/Portfolio Website Project Description.pdf',
      codeLink: 'https://github.com/ECampbell37/portfolioWebsite',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-1 max-w-7xl mx-auto">
        <div className="flex justify-end mt-4">
          <Link href="/">
            <Button variant="link">Back to Home</Button>
          </Link>
        </div>
        <h1 className="mr-4 ml-4 text-4xl font-bold">Projects</h1>
        <p className="mr-4 ml-4 mt-4 text-gray-700">
          Here are some of the projects I've worked on. Feel free to check them out! Click the "More Details" button to view a quick verbal or visual summary of the project. Click the "View Code" button to see the project's code and anything else related to the project via Github.
        </p>
      </header>

      <main className="max-w-7xl mx-auto mt-8 p-4">
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-md shadow-lg">
              <div className="md:flex">
                {/* Project Thumbnail */}
                <img
                  src={project.thumbnail}
                  alt={`${project.title} Thumbnail`}
                  className="w-full md:w-1/5 rounded-md object-cover"
                />
                <div className="md:ml-8 mt-4 md:mt-0">
                  {/* Project Title */}
                  <h2 className="text-2xl font-semibold text-blue-600">
                    {project.title}
                  </h2>
                  {/* Project Description */}
                  <p className="mt-2 text-gray-700">{project.description}</p>
                  <div className="mt-4 space-x-4">
                    {/* PDF Link */}
                    <Link href={project.pdfLink} target="_blank" rel="noopener noreferrer">
                      <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                        More Details
                      </button>
                    </Link>
                    {/* Code Link */}
                    <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900">
                        View Code
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="mt-8">
          <Link href="/">
            <Button variant="link">Back to Home</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
