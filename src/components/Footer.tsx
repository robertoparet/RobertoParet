const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-700/50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Instagram: 
            <a 
              href="https://instagram.com/robertdev_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 ml-1 transition-colors duration-300"
            >
              @robertdev_
            </a>
          </p>
          <p className="text-gray-300">
            Galería de Fotografías: 
            <a 
              href="https://galeriad.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 ml-1 transition-colors duration-300"
            >
              Ver Galería
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
