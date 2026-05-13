import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, ChartColumnIncreasing, PlugZap, Workflow } from 'lucide-react'
import { useState } from 'react'
import {
  siDocker,
  siLaravel,
  siMysql,
  siNginx,
  siNodedotjs,
  siPhp,
  siReact,
  type SimpleIcon,
  siTypescript,
  siWhatsapp,
} from 'simple-icons'
import { projects } from '../data/projects'
import { fadeInUp, staggerContainer, viewport } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

const INITIAL_PROJECTS = 3

type TechnologyVisual =
  | {
      kind: 'simple'
      icon: SimpleIcon
    }
  | {
      kind: 'lucide'
      icon: LucideIcon
      iconClassName: string
    }

const technologyVisuals: Record<string, TechnologyVisual> = {
  React: { kind: 'simple', icon: siReact },
  TypeScript: { kind: 'simple', icon: siTypescript },
  Laravel: { kind: 'simple', icon: siLaravel },
  MySQL: { kind: 'simple', icon: siMysql },
  PHP: { kind: 'simple', icon: siPhp },
  'WhatsApp API': { kind: 'simple', icon: siWhatsapp },
  'Node.js': { kind: 'simple', icon: siNodedotjs },
  Docker: { kind: 'simple', icon: siDocker },
  Nginx: { kind: 'simple', icon: siNginx },
  APIs: {
    kind: 'lucide',
    icon: PlugZap,
    iconClassName: 'text-sky-500 dark:text-sky-300',
  },
  Webhooks: {
    kind: 'lucide',
    icon: Workflow,
    iconClassName: 'text-violet-soft dark:text-violet-300',
  },
  'Power BI': {
    kind: 'lucide',
    icon: ChartColumnIncreasing,
    iconClassName: 'text-amber-500 dark:text-amber-300',
  },
}

function getTechnologyToken(technology: string) {
  return technology
    .split(/[\s./-]+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function TechnologyBadge({ technology }: { technology: string }) {
  const visual = technologyVisuals[technology]

  return (
    <span className="inline-flex items-center gap-3 rounded-full border border-brand-500/12 bg-white/72 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.04)] dark:border-white/8 dark:bg-white/5 dark:text-slate-200 dark:shadow-none">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(15,23,42,0.08)] dark:bg-slate-950/80 dark:shadow-none">
        {visual?.kind === 'simple' ? (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4.5 w-4.5"
            fill={`#${visual.icon.hex}`}
          >
            <path d={visual.icon.path} />
          </svg>
        ) : visual?.kind === 'lucide' ? (
          <visual.icon className={`h-4.5 w-4.5 ${visual.iconClassName}`} />
        ) : (
          <span className="text-[11px] font-bold tracking-[0.12em] text-brand-500 dark:text-brand-300">
            {getTechnologyToken(technology)}
          </span>
        )}
      </span>
      <span>{technology}</span>
    </span>
  )
}

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false)

  const visibleProjects = showAllProjects ? projects : projects.slice(0, INITIAL_PROJECTS)
  const hasMoreProjects = projects.length > INITIAL_PROJECTS

  return (
    <section id="proyectos" className="relative px-6 py-24 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-8 top-20 h-44 w-44 rounded-full bg-brand-500/14 blur-3xl dark:bg-brand-400/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-12 top-32 h-52 w-52 rounded-full bg-violet-soft/12 blur-3xl dark:bg-violet-soft/10"
      />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Proyectos"
          title="Casos representativos del tipo de soluciones que podemos construir contigo."
          description="Estos proyectos ficticios reflejan escenarios reales donde combinamos software, automatización, infraestructura e integración de servicios."
        />

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {visibleProjects.map((project) => (
            <motion.article
              key={project.name}
              className="panel-strong group relative overflow-hidden rounded-[34px] transition duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(37,99,235,0.55),transparent)]"
              />

              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="flex flex-col justify-between bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(219,234,254,0.78))] p-8 sm:p-10 dark:bg-[linear-gradient(180deg,rgba(2,6,23,0.96),rgba(15,23,42,0.98))] lg:min-h-[34rem] lg:p-12">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex rounded-full border border-brand-500/18 bg-brand-500/10 px-3 py-1 text-sm font-semibold tracking-tight text-brand-500 dark:border-brand-300/16 dark:bg-brand-300/10 dark:text-brand-300">
                        {project.category}
                      </span>
                      <span className="font-display text-base font-semibold text-slate-400 dark:text-slate-500">
                        Caso
                      </span>
                    </div>

                    <h3 className="mt-8 max-w-xl font-display text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-[4rem] lg:leading-[1.08]">
                      {project.name}
                    </h3>

                    <p className="mt-8 max-w-lg text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-10">
                    <div className="flex flex-wrap items-center gap-3">
                      {project.technologies.map((technology) => (
                        <TechnologyBadge key={technology} technology={technology} />
                      ))}
                    </div>

                    <div className="mt-8 max-w-md rounded-[24px] border border-brand-500/12 bg-white/55 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.05)] dark:border-white/8 dark:bg-white/4 dark:shadow-none">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        Resultado esperado
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">
                        {project.outcome}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="btn-primary mt-10 w-fit"
                    >
                      Ver proyecto
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div
                  className="relative min-h-[20rem] overflow-hidden border-t lg:min-h-full lg:border-l lg:border-t-0"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(15,23,42,0.08))] dark:bg-[linear-gradient(180deg,rgba(2,6,23,0.04),rgba(2,6,23,0.14))] lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.01),rgba(15,23,42,0.08))] dark:lg:bg-[linear-gradient(90deg,rgba(2,6,23,0.02),rgba(2,6,23,0.16))]" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {hasMoreProjects && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllProjects((current) => !current)}
              className="btn-secondary"
            >
              {showAllProjects ? 'Mostrar menos proyectos' : 'Mostrar más proyectos'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
