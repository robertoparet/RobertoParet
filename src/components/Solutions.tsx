import { Code2, Smartphone, Search, MonitorSmartphone, Camera } from 'lucide-react'

const Solutions = () => {
  const solutions = [
    {
      title: "Desarrollo Web a Medida",
      description: "Sitios y aplicaciones web personalizadas, construidas desde cero para alinearse con los objetivos y procesos de tu negocio.",
      icon: <Code2 className="w-8 h-8" />
    },
    {
      title: "Aplicaciones Móviles",
      description: "Desarrollo de apps para iOS y Android que extienden tu marca al móvil con una experiencia fluida y nativa.",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: "Optimización SEO",
      description: "Aplico buenas prácticas técnicas y de contenido para mejorar el posicionamiento de tus aplicaciones en buscadores.",
      icon: <Search className="w-8 h-8" />
    },
    {
      title: "Diseño Responsivo",
      description: "Interfaces que se adaptan a cualquier dispositivo, garantizando una experiencia consistente en móviles, tablets y escritorio.",
      icon: <MonitorSmartphone className="w-8 h-8" />
    },
    {
      title: "Fotografía de Marca",
      description: "Producción visual profesional para eventos, espacios y gastronomía que refuerza la identidad y comunicación de tu marca.",
      icon: <Camera className="w-8 h-8" />
    }
  ]

  return (
    <section id="solutions" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Servicios
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Soluciones digitales personalizadas, desde aplicaciones web y móviles hasta posicionamiento SEO y contenido visual de marca.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
