import WhatsAppIcon from './WhatsAppIcon'

const WhatsAppFloat = () => {
  const whatsappNumber = '346315433678'
  const message = encodeURIComponent(
    'Hola Roberto, vengo desde tu portafolio y me gustaría hablar contigo sobre un proyecto.'
  )
  const href = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className="group fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50"
    >
      <span
        className="hidden md:block absolute right-full top-1/2 -translate-y-1/2 mr-3
                   bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-sm
                   whitespace-nowrap shadow-lg
                   opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
                   transition-all duration-300 pointer-events-none"
      >
        Escríbeme por WhatsApp
      </span>

      <span className="relative flex items-center justify-center">
        <span
          className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping"
          aria-hidden="true"
        ></span>
        <span
          className="relative inline-flex items-center justify-center
                     w-14 h-14 md:w-16 md:h-16 rounded-full
                     bg-[#25D366] hover:bg-[#1FAE54]
                     shadow-lg shadow-black/20
                     transition-all duration-300 group-hover:scale-110"
        >
          <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </span>
      </span>
    </a>
  )
}

export default WhatsAppFloat
