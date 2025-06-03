import { Code, Database, Palette, GitBranch, Zap } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Lenguajes",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "JavaScript"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },    {
      title: "Bases de datos",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "SQL (consultas complejas, optimización)", 
        "Oracle (PL/SQL, modelado de datos)", 
        "MongoDB (modelado flexible, consultas NoSQL, escalabilidad horizontal)", 
        "Firebase (base de datos en tiempo real, autenticación integrada, despliegue serverless)"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Frontend & UI",
      icon: <Palette className="w-6 h-6" />,
      skills: ["React"],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30"
    },
    {
      title: "Control de versiones",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      title: "Automatización",
      icon: <Zap className="w-6 h-6" />,
      skills: ["N8N (con integración de IA)"],
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30"
    }
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Habilidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} ${category.borderColor} border backdrop-blur-sm rounded-xl p-6 
                         transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${category.color.split('-')[1]}-500/20
                         group cursor-pointer`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4 
                               group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-2 bg-gray-800/50 rounded-lg text-gray-300 text-sm
                             hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}        </div>
      </div>
    </section>
  )
}

export default Skills
