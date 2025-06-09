const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-white">
      <div className="container-max mx-auto px-6 text-center relative z-10">        <div className="animate-fade-in">
          {/* Greeting */}
          <p className="text-lg md:text-xl text-gray-600 mb-4 animate-fade-in-scale font-light" style={{animationDelay: '0.2s'}}>
            Hola, soy
          </p>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 animate-letter-spacing text-gray-900" style={{animationDelay: '0.4s'}}>
            Roberto Paret
          </h1>
          
          {/* Subtitle */}
          <div className="animate-typewriter text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-8 font-light inline-block" style={{animationDelay: '1.8s'}}>
            Desarrollador Full Stack
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up font-light" style={{animationDelay: '4s'}}>
            Creo soluciones digitales elegantes y funcionales con un enfoque minimalista y atención al detalle.
          </p>
            {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '4.5s'}}>
            <a
              href="#contact"
              className="bg-gray-900 text-white px-8 py-4 rounded-sm font-medium hover:bg-gray-800 transition-all duration-300 btn-minimal"
            >
              Trabajemos Juntos
            </a>            <a
              href="#about"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-sm font-medium hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            >
              Ver mi trabajo
            </a>
          </div>
        </div>
      </div>      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-gray-700 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero
