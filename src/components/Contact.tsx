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
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

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
      
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (emailError) {
      console.error('Error sending email:', emailError)
      setError('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Contacto
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-light">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas
          </p>
        </div>

        {isSubmitted && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-sm flex items-center gap-3 max-w-2xl mx-auto">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-green-700">¡Mensaje enviado correctamente! Te responderé pronto.</p>
          </div>
        )}

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-sm flex items-center gap-3 max-w-2xl mx-auto">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        <div className="bg-white rounded-sm border border-gray-200 p-8 md:p-12 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm
                         text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 
                         focus:ring-gray-900 focus:border-gray-900 transition-all duration-200"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm
                         text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 
                         focus:ring-gray-900 focus:border-gray-900 transition-all duration-200"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
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
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm
                         text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 
                         focus:ring-gray-900 focus:border-gray-900 transition-all duration-200
                         resize-none"
                placeholder="Cuéntame sobre tu proyecto o idea..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-gray-900 text-white font-medium rounded-sm 
                       hover:bg-gray-800 transition-all duration-300 
                       disabled:opacity-50 disabled:cursor-not-allowed
                       flex items-center justify-center gap-3"
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

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm font-light">
              También puedes contactarme directamente en: 
              <a 
                href="mailto:robertoparetdev@gmail.com" 
                className="text-gray-900 hover:underline transition-colors ml-1 font-medium"
              >
                robertoparetdev@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
