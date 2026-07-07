export const companyInfo = {
  name: 'Willco Tecnología',
  email: 'willcotecnologia@gmail.com',
  location: 'Medellín, Colombia',
  whatsappDisplay: '+57 3003273405',
  whatsappNumber: '573003273405',
  responseTime: '72 horas hábiles',
} as const

export const navigationLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
] as const

export function buildWhatsAppHref(message?: string) {
  const url = new URL(`https://wa.me/${companyInfo.whatsappNumber}`)

  if (message) {
    url.searchParams.set('text', message)
  }

  return url.toString()
}
