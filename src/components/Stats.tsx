import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewport } from '../lib/motion'

const stats = [
  { value: '+5', label: 'años de experiencia' },
  { value: '+30', label: 'proyectos desarrollados' },
  { value: '+10', label: 'integraciones empresariales' },
  { value: 'Soporte', label: 'técnico y acompañamiento' },
]

export function Stats() {
  return (
    <section className="px-6 py-6 lg:px-8">
      <motion.div
        className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="panel rounded-[28px] p-6"
            variants={fadeInUp}
          >
            <p className="font-display text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
              {stat.value}
            </p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
