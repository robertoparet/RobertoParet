import { Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <a 
              href="https://instagram.com/robertdev_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-sm text-gray-700 font-medium hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
              <span>@robertdev_</span>
            </a>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-500 text-sm font-light">
              © {new Date().getFullYear()} Roberto Paret. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
