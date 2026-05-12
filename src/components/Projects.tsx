import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { projects } from '../data/projects'
import { fadeInUp, staggerContainer, viewport } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="proyectos" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Proyectos"
          title="Casos representativos del tipo de soluciones que podemos construir contigo."
          description="Estos proyectos ficticios reflejan escenarios reales donde combinamos software, automatización, infraestructura e integración de servicios."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.article
              key={project.name}
              className="panel group flex h-full flex-col rounded-[30px] p-6 transition duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500 dark:text-brand-300">
                  {project.category}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">Proyecto destacado</span>
              </div>

              <div className="mt-5 flex-1">
                <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="chip text-xs">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-3xl border p-4" style={{ borderColor: 'var(--border)' }}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Resultado esperado
                </p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{project.outcome}</p>
              </div>

              <button type="button" className="btn-secondary mt-6 w-fit">
                Ver detalle
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
