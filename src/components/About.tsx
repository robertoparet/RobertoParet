const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Sobre Mí
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
        </div>
        
        <div className="bg-white rounded-sm border border-gray-200 p-8 md:p-12">
          <div className="text-gray-700 text-lg leading-relaxed space-y-6 font-light">
            <p>
              Soy <span className="text-gray-900 font-medium">Roberto Paret</span>, especialista en desarrollo web y fotografía creativa. 
              Trabajo con marcas y negocios que buscan fortalecer su presencia digital a través de sitios web modernos, 
              funcionales y contenido visual que cuenta historias.
            </p>
            <p>
              Desde aplicaciones web robustas hasta fotografía de eventos, locales y gastronomía, mi enfoque combina 
              tecnología y creatividad para ayudarte a conectar con tu audiencia de forma auténtica y profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
