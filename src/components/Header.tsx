import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigationLinks } from '../data/site'
import type { Theme } from '../hooks/useTheme'
import { BrandLogo } from './BrandLogo'
import { ThemeToggle } from './ThemeToggle'

interface HeaderProps {
  theme: Theme
  onToggle: () => void
}

export function Header({ theme, onToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let frameId = 0

    const handleScroll = () => {
      if (frameId) {
        return
      }

      frameId = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 16)
        frameId = 0
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header
      className="sticky top-0 z-50 border-b transition duration-300"
      style={{
        borderColor: isScrolled ? 'var(--border)' : 'transparent',
        background: isScrolled ? 'var(--background-elevated)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(18px)' : 'none',
        boxShadow: isScrolled ? '0 14px 40px rgba(15, 23, 42, 0.08)' : 'none',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#inicio" className="inline-flex items-center gap-3" aria-label="Willco Tecnología">
          <BrandLogo theme={theme} className="h-10 w-28 sm:h-11 sm:w-[7.5rem]" />
          <span className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            Willco <span className="text-brand-500 dark:text-brand-300">Tecnología</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navigationLinks.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle theme={theme} onToggle={onToggle} />
          <a href="#contacto" className="btn-primary">
            Solicitar propuesta
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggle} />
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border transition"
            style={{
              borderColor: 'var(--border)',
              background: 'var(--surface)',
              color: 'var(--foreground)',
            }}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="border-t md:hidden"
            style={{
              borderColor: 'var(--border)',
              background: 'var(--background-elevated)',
              backdropFilter: 'blur(18px)',
            }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav
              className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6"
              aria-label="Navegación móvil"
            >
              {navigationLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link rounded-2xl px-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <a href="#contacto" className="btn-primary mt-2" onClick={() => setIsMenuOpen(false)}>
                Solicitar propuesta
                <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
