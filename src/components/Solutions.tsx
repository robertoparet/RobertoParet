import { Globe, Smartphone, Camera } from 'lucide-react'

const Solutions = () => {
  const solutions = [
    {
      title: "Desarrollo Web",
      description: "Sitios web modernos y aplicaciones que potencian tu marca, optimizados para conversión y experiencia de usuario.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Fotografía de Marca",
      description: "Fotografía profesional para eventos, espacios comerciales y gastronomía que captura la esencia de tu negocio.",
      icon: <Camera className="w-8 h-8" />
    },
    {
      title: "Diseño Responsivo",
      description: "Interfaces elegantes que se adaptan perfectamente a cualquier dispositivo, garantizando accesibilidad total.",
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
            Soluciones integrales para fortalecer la presencia digital de tu marca
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
        </div>
      </div>
    </section>
  )
}

export default Solutions
