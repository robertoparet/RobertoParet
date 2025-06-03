import { Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-700/50 py-8">
      <div className="max-w-6xl mx-auto px-4">        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <a 
              href="https://instagram.com/robertdev_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>@robertdev_</span>
            </a>
          </div>
          <div className="border-t border-gray-700/50 pt-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Roberto Paret. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
