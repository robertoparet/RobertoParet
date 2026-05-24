import { Mail, ArrowUpRight } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import { siteConfig, whatsappLink } from '../lib/site-config'

const Contact = () => {
  const channels = [
    {
      label: 'Correo electrónico',
      value: siteConfig.email,
      action: 'Enviar correo',
      href: `mailto:${siteConfig.email}`,
      icon: <Mail className="w-7 h-7" />,
      external: false
    },
    {
      label: 'WhatsApp',
      value: siteConfig.phone.display,
      action: 'Abrir chat',
      href: whatsappLink('Hola Roberto, me gustaría hablar contigo sobre un proyecto.'),
      icon: <WhatsAppIcon className="w-7 h-7" />,
      external: true
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Contacto
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Escríbeme directamente por el canal que prefieras y te responderé lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.external ? '_blank' : undefined}
              rel={channel.external ? 'noopener noreferrer' : undefined}
              className="group bg-white border border-gray-200 rounded-sm p-8
                         transition-all duration-300 hover:shadow-md hover:border-gray-900
                         flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-sm bg-gray-900 text-white
                                group-hover:bg-gray-800 transition-colors duration-300">
                  {channel.icon}
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100
                                         group-hover:text-gray-900 transition-all duration-300
                                         -translate-x-1 group-hover:translate-x-0" />
              </div>

              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {channel.label}
              </h3>
              <p className="text-gray-600 font-light text-sm mb-6 break-all">
                {channel.value}
              </p>

              <span className="mt-auto text-sm font-medium text-gray-900
                               border-t border-gray-100 pt-4
                               group-hover:text-gray-700 transition-colors duration-200">
                {channel.action} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
