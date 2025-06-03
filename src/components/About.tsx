const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </div>        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                ¡Hola! Soy <span className="text-blue-400 font-semibold">Roberto Paret</span>, desarrollador de software en activo desde 2022. 
                Me especializo en crear soluciones funcionales y bien pensadas que combinan lógica, diseño y eficiencia. 
                Desde que empecé en este mundo, he trabajado con tecnologías robustas como Java, SQL y frameworks modernos 
                tanto en frontend como en backend.
              </p>
              <p>
                Soy de los que disfrutan resolver problemas complejos y dar vida a ideas mediante código. 
                Siempre estoy buscando cómo mejorar, automatizar procesos o crear herramientas que realmente aporten valor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
