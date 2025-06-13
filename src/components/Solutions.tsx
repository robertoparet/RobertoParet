import { Globe, Zap, Smartphone } from 'lucide-react'

const Solutions = () => {
  const solutions = [
    {
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas y escalables con tecnologías robustas como React, Java y bases de datos optimizadas.",
      icon: <Globe className="w-8 h-8" />
    },    {
      title: "Automatizaciones",
      description: "Sistemas automatizados con N8N para gestión de citas, pedidos y optimización de procesos empresariales.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Diseño Responsivo",
      description: "Interfaces elegantes y funcionales que se adaptan perfectamente a cualquier dispositivo y pantalla.",
      icon: <Smartphone className="w-8 h-8" />
    }
  ]

  return (
    <section id="solutions" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Soluciones
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Desarrollo aplicaciones que resuelven necesidades reales con elegancia y eficiencia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-sm p-8 
                         transition-all duration-300 hover:shadow-md hover:border-gray-300
                         group cursor-pointer"
            >
              <div className="text-gray-900 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                {solution.icon}
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {solution.title}
              </h3>
              
              <p className="text-gray-700 font-light leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-sm p-6 text-center">
          <p className="text-gray-900 font-medium">
            🚀 Próximamente: Integración de IA avanzada para análisis predictivo, automatización inteligente y generación de insights en tiempo real
          </p>
        </div>
      </div>
    </section>
  )
}

export default Solutions
