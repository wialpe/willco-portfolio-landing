import type { Theme } from '../hooks/useTheme'
import logoDarkMode from '../assets/images/logo-willco-dark-mode.png'
import logoLightMode from '../assets/images/logo-willco-light-mode.png'

interface BrandLogoProps {
  className?: string
  theme: Theme
}

export function BrandLogo({ className = 'h-10 w-32', theme }: BrandLogoProps) {
  const logoSrc = theme === 'dark' ? logoDarkMode : logoLightMode

  return (
    <span className={`inline-flex shrink-0 overflow-hidden ${className}`}>
      <img
        src={logoSrc}
        alt=""
        aria-hidden="true"
        className="h-full w-full scale-[1.12] object-cover object-center"
      />
    </span>
  )
}
