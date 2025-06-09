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
              Soy <span className="text-gray-900 font-medium">Roberto Paret</span>, desarrollador de software desde 2022. 
              Me especializo en crear soluciones funcionales y elegantes que combinan lógica, diseño y eficiencia. 
              Trabajo con tecnologías como Java, SQL y frameworks modernos tanto en frontend como en backend.
            </p>
            <p>
              Disfruto resolver problemas complejos y dar vida a ideas mediante código limpio y bien estructurado. 
              Siempre busco maneras de mejorar, automatizar procesos y crear herramientas que realmente aporten valor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
