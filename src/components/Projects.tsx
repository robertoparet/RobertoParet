import { ExternalLink, Globe } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "M Barbershop",
      description: "Sitio web moderno para una barbería con diseño elegante y funcionalidades para mostrar servicios y reservas.",
      url: "https://mbarbershop.robertoparet.com/",
      category: "Servicios",
      image: "🪒"
    },
    {
      title: "M Restaurante",
      description: "Plataforma web para restaurante con menú interactivo, galería de platos y sistema de reservaciones.",
      url: "https://mrestaurante.robertoparet.com/",
      category: "Gastronomía",
      image: "🍽️"
    },
    {
      title: "M Hospedaje",
      description: "Sistema web para hospedaje con galería de habitaciones, disponibilidad y gestión de reservas.",
      url: "https://mhospedaje.robertoparet.com/",
      category: "Hospitalidad",
      image: "🏨"
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Proyectos
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Maquetas y prototipos que demuestran mi enfoque en el diseño funcional y la experiencia de usuario
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-sm overflow-hidden 
                         transition-all duration-300 hover:shadow-lg hover:border-gray-300
                         group cursor-pointer"
            >
              {/* Header del proyecto */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{project.image}</div>
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-sm">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Footer del proyecto */}
              <div className="p-6">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 
                           font-medium text-sm transition-colors duration-200 group-hover:gap-3"
                >
                  <Globe className="w-4 h-4" />
                  Ver proyecto
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Nota adicional */}
        <div className="mt-12 text-center">
          <div className="bg-white border border-gray-200 rounded-sm p-6 max-w-2xl mx-auto">
            <p className="text-gray-600 text-sm font-light">
              <span className="font-medium text-gray-900">Nota:</span> Estos proyectos son maquetas diseñadas para demostrar 
              diferentes enfoques de diseño web y funcionalidades específicas para cada sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
