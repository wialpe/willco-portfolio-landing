import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  BriefcaseBusiness,
  DatabaseZap,
  MonitorSmartphone,
  ServerCog,
} from 'lucide-react'
import { technologies } from '../data/technologies'
import { fadeInUp, staggerContainer, viewport } from '../lib/motion'
import type { Technology, TechnologyCategory } from '../types/content'
import { SectionHeading } from './SectionHeading'

const orderedCategories: TechnologyCategory[] = [
  'Frontend',
  'Backend',
  'Infraestructura',
  'Negocio',
]

const categoryIcons: Record<TechnologyCategory, LucideIcon> = {
  Frontend: MonitorSmartphone,
  Backend: DatabaseZap,
  Infraestructura: ServerCog,
  Negocio: BriefcaseBusiness,
}

const categoryDescriptions: Record<TechnologyCategory, string> = {
  Frontend: 'Interfaces modernas, rápidas y enfocadas en conversión.',
  Backend: 'Reglas de negocio, persistencia e integraciones robustas.',
  Infraestructura: 'Despliegues confiables, monitoreo y ambientes escalables.',
  Negocio: 'Herramientas conectadas con la operación y el análisis.',
}

const groupedTechnologies = orderedCategories.reduce<Record<TechnologyCategory, Technology[]>>(
  (accumulator, category) => {
    accumulator[category] = technologies.filter((technology) => technology.category === category)
    return accumulator
  },
  {
    Frontend: [],
    Backend: [],
    Infraestructura: [],
    Negocio: [],
  },
)

export function Technologies() {
  return (
    <section id="tecnologias" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Tecnologías"
          title="Seleccionamos herramientas sólidas para construir soluciones mantenibles y listas para escalar."
          description="Combinamos frameworks modernos, stacks backend confiables e infraestructura pensada para producción."
          align="center"
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {orderedCategories.map((category) => {
            const Icon = categoryIcons[category]

            return (
              <motion.article
                key={category}
                className="panel rounded-[30px] p-6"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-brand-500/10 p-3 text-brand-500 dark:text-brand-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">
                      {category}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {categoryDescriptions[category]}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {groupedTechnologies[category].map((technology) => (
                    <span key={technology.name} className="chip">
                      {technology.name}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
