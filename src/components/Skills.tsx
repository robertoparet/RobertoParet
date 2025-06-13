import { Code, Database, Palette, GitBranch, Zap } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Lenguajes",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "JavaScript"]
    },
    {
      title: "Bases de datos",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "SQL (consultas complejas, optimización)", 
        "Oracle (PL/SQL, modelado de datos)", 
        "MongoDB (modelado flexible, consultas NoSQL)", 
        "Firebase (base de datos en tiempo real)"
      ]
    },
    {
      title: "Frontend & UI",
      icon: <Palette className="w-6 h-6" />,
      skills: ["React"]
    },
    {
      title: "Control de versiones",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git"]
    },
    {
      title: "Automatización",
      icon: <Zap className="w-6 h-6" />,
      skills: ["N8N"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Habilidades
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-sm p-6 
                         transition-all duration-300 hover:shadow-md hover:border-gray-300
                         group cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-sm bg-gray-900 text-white mr-4 
                               group-hover:bg-gray-800 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-2 bg-white border border-gray-200 rounded-sm text-gray-700 text-sm
                             hover:border-gray-300 transition-colors duration-200 font-light"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
