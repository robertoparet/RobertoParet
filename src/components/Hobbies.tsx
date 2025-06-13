import { Camera, ExternalLink } from 'lucide-react'

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Pasiones & Hobbies
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
        </div>

        <div className="bg-white border border-gray-200 rounded-sm p-8 md:p-12">
          <div className="text-gray-700 text-lg leading-relaxed space-y-6 font-light">
            <p>
              Fuera del teclado, me encanta capturar momentos con mi cámara. La fotografía es mi forma de 
              congelar la belleza de lo cotidiano, y a veces, también de contar historias sin palabras. 
              Me recuerda que en la vida, como en el código, <span className="text-gray-900 font-medium">los pequeños detalles marcan la diferencia</span>.
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://gallery.robertoparet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-gray-300 
                       text-gray-700 font-medium rounded-sm hover:bg-gray-900 hover:text-white 
                       hover:border-gray-900 transition-all duration-300"
            >
              <Camera className="w-5 h-5" />
              Ver mi Galería de Fotos
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hobbies
