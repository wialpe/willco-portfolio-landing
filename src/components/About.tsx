import { motion } from 'framer-motion'
import { CircleCheckBig, Sparkles } from 'lucide-react'
import { fadeInUp, staggerContainer, viewport } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

const advantages = [
  'Desarrollo personalizado',
  'Acompañamiento técnico',
  'Escalabilidad',
  'Integraciones con herramientas existentes',
  'Enfoque en resultados',
]

export function About() {
  return (
    <section id="nosotros" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Nosotros"
          title="Convertimos procesos complejos en soluciones claras, útiles y sostenibles."
          description="En Willco Tecnología ayudamos a empresas a digitalizar procesos, centralizar información y automatizar tareas para operar mejor, vender con más control y escalar con una base tecnológica sólida."
        />

        <motion.div
          className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <motion.div className="panel-strong rounded-[32px] p-8" variants={fadeInUp}>
            <div className="flex items-center gap-3 text-brand-500 dark:text-brand-300">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                Enfoque consultivo
              </span>
            </div>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              <p>
                Diseñamos tecnología alineada con objetivos reales: menos reprocesos,
                trazabilidad, mejor atención al cliente y equipos con información disponible.
              </p>
              <p>
                Nuestro trabajo combina visión comercial, arquitectura técnica y capacidad
                de ejecución para construir soluciones que no solo se ven bien, sino que
                mejoran la operación desde el primer día.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                'Procesos más rápidos',
                'Datos centralizados',
                'Implementaciones seguras',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border px-4 py-5 text-sm font-medium text-slate-700 dark:text-slate-200"
                  style={{ borderColor: 'var(--border)' }}
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="panel rounded-[32px] p-8" variants={fadeInUp}>
            <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">
              Lo que nos diferencia
            </h3>
            <div className="mt-6 space-y-4">
              {advantages.map((advantage) => (
                <div
                  key={advantage}
                  className="flex items-start gap-4 rounded-3xl border px-4 py-4"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-brand-500 dark:text-brand-300" />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-slate-100">{advantage}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      Soluciones pensadas para integrarse con la operación y crecer junto al negocio.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
