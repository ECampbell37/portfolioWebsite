import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function SkillsPage() {
  const skills = {
    'AI/ML': {
      description: 'My particular specialty and field of interest. I have taken college courses, Coursera Specialization online courses, and have worked on my own personal projects in the world of Machine Learning and AI. I have experience with Neural Networks, Machine Learning Algorithms such as Logistic Regression and Random Forests, Data Preprocessing, adjusting ML model parameters, and effectively utilizing generative AI technology. This field particularly excites me, and I hope to expand the world of AI/ML applications for many years to come.',
      skillsList: [
        { name: 'Python', logo: '/images/python.png' },
        { name: 'TensorFlow', logo: '/images/tensorflow.png' },
        { name: 'NumPy', logo: '/images/NumPy.png' },
        { name: 'Jupyter Notebook', logo: '/images/Jupyter.png' },
        { name: 'OpenAI', logo: '/images/openai.png' },
      ],
    },
    'Web Application Development': {
      description: 'Intermediate-level experience building web applications using Javascript, HTML, and CSS. I am familar working with the Javascript framework Next.js, and subsequently React. I have a good understanding of the fundamentals of web design and internet protocol. Web Applications are a great way to make your code accessible and easy to use for a wide range of users, and for that I appreicate their immense potential value.',
      skillsList: [
        { name: 'JavaScript', logo: '/images/js3.png' },
        { name: 'React', logo: '/images/React.png' }, 
        { name: 'Next.js', logo: '/images/nextjs.png' }, 
        { name: 'CSS', logo: '/images/CSS.png' },
        { name: 'HTML', logo: '/images/HTML.png' },
      ],
    },
    'CS Fundamentals': {
      description: 'Solid understanding of computer science principles and basic algorithms. Much of my college coursework was geared towards understanding the basics of computer architecture, data structures, algorithms, object-oriented language properties such as classes and polymorphism, and proper documentation/coding standards. I have a well rounded background in C/C++, and I understand the principles of low and high level coding languages.',
      skillsList: [
        { name: 'C', logo: '/images/C.png' },
        { name: 'C++', logo: '/images/C++.png' }, 
        { name: 'Visual Studio Code', logo: '/images/vscode.png' }, 
      ],
    },
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-1 max-w-7xl mx-auto">
        <div className="flex justify-end mt-4">
          <Link href="/">
            <Button variant="link">Back to Home</Button>
          </Link>
        </div>
        <h1 className="mr-2 ml-2 text-4xl font-bold">Skills</h1>
        <p className="mr-2 ml-2 mt-4 text-gray-700">
          Here are some of the technologies and platforms I am skilled in. Each section describes my interest and background in the respective field, as well as how those skills were generally aquired. Check out my projects page and resume to learn more!
        </p>
        <hr className="my-6 border-gray-300" />
      </header>

      <main className="max-w-7xl mx-auto p-4">
        {/* Loop through skill groups */}
        {Object.entries(skills).map(([category, { description, skillsList }]) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-semibold mt-4">{category}</h2>
            <p className="mt-2 text-gray-700">{description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-4">
              {/* Loop through individual skills */}
              {skillsList.map(skill => (
                <div key={skill.name} className="p-5 bg-blue-100 rounded-md text-center">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} Logo`}
                    className="w-16 h-16 mx-auto mb-2"
                  />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}

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
