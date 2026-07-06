import { ArrowUpRight, GitBranch, Globe, MessageSquareText } from 'lucide-react'
import type { Theme } from '../hooks/useTheme'
import { BrandLogo } from './BrandLogo'

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

const serviceLinks = [
  'Desarrollo web',
  'Automatización',
  'WhatsApp Business API',
  'Infraestructura cloud',
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/willco-tecnologia',
    icon: ArrowUpRight,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/willco-tecnologia',
    icon: GitBranch,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/willco.tecnologia',
    icon: Globe,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/573000000000',
    icon: MessageSquareText,
  },
]

interface FooterProps {
  theme: Theme
}

export function Footer({ theme }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t px-6 py-12 lg:px-8" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.6fr_0.7fr_0.8fr]">
        <div>
          <a href="#inicio" className="inline-flex items-center gap-3" aria-label="Willco Tecnología">
            <BrandLogo theme={theme} className="h-11 w-[7.5rem] sm:h-12 sm:w-[8.5rem]" />
            <span className="font-display text-2xl font-bold tracking-tight">
              Willco <span className="text-brand-500 dark:text-brand-300">Tecnología</span>
            </span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-300">
            Desarrollo de software a la medida para empresas que necesitan automatizar,
            integrar y escalar sus procesos con tecnología confiable.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Links rápidos
          </h3>
          <div className="mt-4 flex flex-col gap-3">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Servicios
          </h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">
            {serviceLinks.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Redes
          </h3>
          <div className="mt-4 flex flex-col gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="nav-link inline-flex items-center gap-2"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t pt-6 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between"
        style={{ borderColor: 'var(--border)' }}
      >
        <p>© {currentYear} Willco Tecnología. Todos los derechos reservados.</p>
        <p>Software, automatización e infraestructura para empresas en crecimiento.</p>
      </div>
    </footer>
  )
}
