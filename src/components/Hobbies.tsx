import { Camera, ExternalLink } from 'lucide-react'

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Pasiones & Hobbies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        {/* Fotografía destacada */}        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                Fuera del teclado, me encanta capturar momentos con mi cámara. La fotografía es mi forma de 
                congelar la belleza de lo cotidiano, y a veces, también de contar historias sin palabras. 
                Me recuerda que en la vida, como en el código, <span className="text-blue-400 font-semibold">los pequeños detalles marcan la diferencia</span>.
              </p>
            </div>
            
            <div className="mt-8 text-center">              <a 
                href="https://robert-s-camera-perspective.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r 
                         from-blue-500 to-purple-500 text-white font-medium rounded-xl
                         hover:from-blue-600 hover:to-purple-600 transition-all duration-300
                         transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <Camera className="w-5 h-5" />
                Ver mi Galería de Fotos
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hobbies
