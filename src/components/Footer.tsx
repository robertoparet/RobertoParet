import { Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-700/50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Instagram className="w-5 h-5 text-pink-400" />
            <span className="text-gray-300">Instagram:</span>
            <a 
              href="https://instagram.com/robertdev_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
            >
              @robertdev_
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
