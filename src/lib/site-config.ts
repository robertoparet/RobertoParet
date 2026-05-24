export const siteConfig = {
  name: 'Roberto Paret',
  jobTitle: 'Desarrollador Web Full-Stack y Fotógrafo de Marca',
  url: 'https://robertoparet.com',
  domain: 'robertoparet.com',
  description:
    'Desarrollo de aplicaciones web y móviles a medida, optimización SEO y fotografía de marca en Galicia. Soluciones digitales profesionales para tu negocio.',
  locale: 'es-ES',
  region: 'Galicia',
  country: 'España',
  countryCode: 'ES',

  email: 'robertoparetdev@gmail.com',
  phone: {
    display: '+34 631 543 378',
    e164: '+34631543378',
    whatsapp: '34631543378'
  },

  social: {
    instagram: {
      handle: '@robert_s_camera_perspective',
      url: 'https://instagram.com/robert_s_camera_perspective'
    }
  },

  ogImage: '/og-image.png',
  themeColor: '#111827'
} as const

export const whatsappLink = (
  message = 'Hola Roberto, vengo desde tu portafolio y me gustaría hablar contigo sobre un proyecto.'
) => `https://wa.me/${siteConfig.phone.whatsapp}?text=${encodeURIComponent(message)}`
