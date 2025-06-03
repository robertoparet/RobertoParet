import { useState } from 'react'
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
    const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Configuración de EmailJS (usando variables de entorno)
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Validar que las credenciales estén configuradas
      if (!serviceID || serviceID === 'your_service_id') {
        throw new Error('VITE_EMAILJS_SERVICE_ID no está configurado correctamente')
      }
      if (!templateID || templateID === 'your_template_id') {
        throw new Error('VITE_EMAILJS_TEMPLATE_ID no está configurado correctamente')
      }
      if (!publicKey || publicKey === 'your_public_key') {
        throw new Error('VITE_EMAILJS_PUBLIC_KEY no está configurado correctamente')
      }

      console.log('Enviando email con:', { serviceID, templateID, publicKey: publicKey.substring(0, 10) + '...' })

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'robertoparetdev@gmail.com'
      }

      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (emailError) {
      console.error('Error sending email:', emailError)
      setError('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          {isSubmitted && (
            <div className="mb-8 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <p className="text-green-300">¡Mensaje enviado correctamente! Te responderé pronto.</p>
            </div>
          )}

          {error && (
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <p className="text-red-300">{error}</p>
            </div>
          )}

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
            <div className="text-center mb-8">
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">¡Hablemos!</h3>
              <p className="text-gray-400">
                ¿Tienes un proyecto en mente? Me encantaría conocer más detalles.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campo Nombre */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg
                           text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                           focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Campo Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg
                           text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                           focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Campo Mensaje */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg
                           text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                           focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200
                           resize-none"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                />
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 
                         text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 
                         transition-all duration-300 transform hover:scale-105 shadow-lg 
                         hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed
                         disabled:transform-none flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando mensaje...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>

            {/* Información adicional */}
            <div className="mt-8 pt-6 border-t border-gray-700/50 text-center">
              <p className="text-gray-400 text-sm">
                También puedes contactarme directamente en: 
                <a 
                  href="mailto:robertoparetdev@gmail.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors ml-1"
                >
                  robertoparetdev@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
