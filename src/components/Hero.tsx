const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container-max mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Greeting */}
          <p className="text-lg md:text-xl text-slate-400 mb-4 animate-slide-up">
            ¡Hola! Soy
          </p>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text">Roberto Paret</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-300 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Desarrollador Full Stack & Apasionado por la Tecnología
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
            Transformo ideas en soluciones digitales innovadoras. Especializado en crear experiencias web modernas,
            escalables y centradas en el usuario, con un enfoque en la calidad y la atención al detalle.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.6s'}}>
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Trabajemos Juntos
            </a>
            <a
              href="#about"
              className="border-2 border-slate-500 text-slate-300 px-8 py-4 rounded-lg font-semibold hover:border-white hover:text-white transition-all duration-300 hover:scale-105 hover:bg-white/5"
            >
              Conoce más sobre mí
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero
