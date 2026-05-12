import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewport } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

const steps = [
  {
    title: 'Diagnóstico',
    description: 'Entendemos procesos, objetivos, contexto técnico y prioridades del negocio.',
  },
  {
    title: 'Diseño de solución',
    description: 'Definimos flujos, arquitectura, alcance y experiencia del usuario.',
  },
  {
    title: 'Desarrollo',
    description: 'Construimos módulos, integraciones y automatizaciones con entregas iterativas.',
  },
  {
    title: 'Pruebas',
    description: 'Validamos estabilidad, lógica de negocio, seguridad y experiencia de uso.',
  },
  {
    title: 'Implementación',
    description: 'Desplegamos en ambientes productivos con monitoreo y puesta en marcha controlada.',
  },
  {
    title: 'Soporte y mejora continua',
    description: 'Acompañamos la evolución del sistema con ajustes, optimización y nuevas etapas.',
  },
]

export function Process() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Proceso"
          title="Trabajamos con una metodología clara para reducir riesgo y acelerar resultados."
          description="Cada proyecto pasa por etapas definidas que nos permiten alinear negocio, experiencia, desarrollo e implementación sin perder visibilidad."
        />

        <motion.div
          className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              className="panel rounded-[30px] p-6"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-lg font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                  {step.title}
                </h3>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {step.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
