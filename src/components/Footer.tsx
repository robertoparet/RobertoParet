import { Instagram } from 'lucide-react'
import { siteConfig } from '../lib/site-config'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-8">
          <div className="flex justify-center items-center">
            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-sm text-gray-700 font-medium hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
              <span>{siteConfig.social.instagram.handle}</span>
            </a>
          </div>
          <div className="border-t border-gray-200 pt-6 space-y-3">
            <nav className="flex justify-center gap-6 text-sm text-gray-600">
              <a href="#hero" className="hover:text-gray-900 transition-colors">Inicio</a>
              <a href="#solutions" className="hover:text-gray-900 transition-colors">Servicios</a>
              <a href="#projects" className="hover:text-gray-900 transition-colors">Proyectos</a>
              <a href="/blog" className="hover:text-gray-900 transition-colors">Blog</a>
              <a href="#contact" className="hover:text-gray-900 transition-colors">Contacto</a>
            </nav>
            <p className="text-gray-500 text-sm font-light">
              © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
