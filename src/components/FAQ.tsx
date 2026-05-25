import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: '¿Cuánto cuesta hacer una página web?',
    a: 'Depende del tipo: una landing page profesional empieza en 400€, una web corporativa entre 1.200€ y 3.500€, un e-commerce entre 2.500€ y 8.000€, y una aplicación web a medida desde 4.000€. Tienes el desglose completo de precios en mi artículo del blog.'
  },
  {
    q: '¿Cuánto tarda en estar lista una página web?',
    a: 'Una landing page suele estar lista en 2-3 semanas. Una web corporativa entre 4-6 semanas. Un e-commerce o aplicación a medida pueden ir de 6 a 12 semanas según la complejidad. Trabajo con entregas por hitos para que veas el progreso desde la primera semana.'
  },
  {
    q: '¿Trabajas solo en Galicia o en toda España?',
    a: 'Trabajo de forma remota con clientes en toda España (y también internacionalmente). Estoy basado en Galicia, pero el 90% de mis proyectos se desarrollan completamente online, con videollamadas regulares y entregas digitales.'
  },
  {
    q: '¿Qué incluye el mantenimiento mensual?',
    a: 'Actualizaciones de seguridad, copias de seguridad automatizadas, monitoreo de tiempo de actividad, correcciones de errores y un margen de horas para pequeños cambios de contenido. Desde 30€/mes según el tamaño del proyecto.'
  },
  {
    q: '¿Optimizas la web para SEO desde el principio?',
    a: 'Sí, siempre. El SEO técnico (meta tags, structured data, sitemap, Core Web Vitals, schema markup, velocidad de carga) está incluido en todos mis desarrollos. No es un extra que se cobra aparte: una web sin SEO técnico es una web a medias.'
  },
  {
    q: '¿También haces aplicaciones móviles?',
    a: 'Sí. Desarrollo aplicaciones móviles para iOS y Android, tanto nativas como cross-platform con React Native. Si tienes un proyecto que necesita web + app, lo coordinamos en un único desarrollo para que compartan backend y mantenimiento.'
  }
]

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Preguntas frecuentes
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Lo que más me preguntan antes de empezar un proyecto
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="border border-gray-200 rounded-sm bg-gray-50 transition-all duration-300 hover:border-gray-300"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base md:text-lg font-medium text-gray-900 pr-2">
                    {faq.q}
                  </h3>
                  <span className="flex-shrink-0 mt-1 text-gray-600">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-2">
                    <p className="text-gray-700 font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <p className="text-center mt-10 text-sm text-gray-600 font-light">
          ¿Tienes otra pregunta?{' '}
          <a href="#contact" className="text-gray-900 font-medium hover:underline">
            Escríbeme directamente
          </a>
        </p>
      </div>
    </section>
  )
}

export default FAQ
