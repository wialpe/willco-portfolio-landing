import { motion } from 'framer-motion'
import { fadeInUp, viewport } from '../lib/motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignmentClasses =
    align === 'center'
      ? 'mx-auto max-w-3xl items-center text-center'
      : 'max-w-3xl items-start text-left'

  return (
    <motion.div
      className={`mb-10 flex flex-col gap-4 ${alignmentClasses}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUp}
    >
      <span className="section-kicker">{eyebrow}</span>
      <div className="space-y-4">
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
