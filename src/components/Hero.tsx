import { motion } from 'framer-motion'
import {
  BadgeCheck,
  Bot,
  ChartNoAxesCombined,
  MessageSquareText,
  ServerCog,
  ShieldCheck,
} from 'lucide-react'
import { fadeInUp, staggerContainer } from '../lib/motion'

const dashboardStats = [
  { label: 'Proyectos activos', value: '08' },
  { label: 'Integraciones', value: '+10' },
  { label: 'Uptime objetivo', value: '99.9%' },
]

const capabilities = [
  {
    title: 'Automatización comercial',
    description: 'Embudo, recordatorios y seguimiento conectado.',
    icon: Bot,
  },
  {
    title: 'Infraestructura lista para crecer',
    description: 'Despliegues seguros, monitoreo y entornos estables.',
    icon: ServerCog,
  },
]

const solutionAreas = [
  { label: 'Integraciones', icon: MessageSquareText },
  { label: 'Analítica', icon: ChartNoAxesCombined },
  { label: 'Seguridad', icon: ShieldCheck },
]

export function Hero() {
  return (
    <section id="inicio" className="relative">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-28 lg:pt-18">
        <motion.div
          className="flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span className="section-kicker w-fit" variants={fadeInUp}>
            Soluciones digitales
          </motion.span>

          <motion.div className="mt-8 space-y-6" variants={fadeInUp}>
            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Creamos software a la medida para empresas que quieren crecer
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Desarrollamos plataformas web, automatizaciones, integraciones y soluciones
              digitales enfocadas en eficiencia, ventas y operación.
            </p>
          </motion.div>

          <motion.div className="mt-8 flex flex-col gap-4 sm:flex-row" variants={fadeInUp}>
            <a href="#servicios" className="btn-primary">
              Ver servicios
            </a>
            <a href="#contacto" className="btn-secondary">
              Contactar ahora
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300"
            variants={fadeInUp}
          >
            <BadgeCheck className="h-5 w-5 text-emerald-500" />
            <span>Arquitectura, automatización y acompañamiento end-to-end.</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-8 h-48 rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-400/10"
          />

          <motion.div className="panel-strong relative overflow-hidden rounded-[32px] p-6 sm:p-8" variants={fadeInUp}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Centro de soluciones
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-slate-950 dark:text-white">
                  Operación conectada al negocio
                </h2>
              </div>
              <span className="chip shrink-0 text-xs">Disponible</span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {dashboardStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/8 bg-slate-950/80 p-4 text-white">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="hero-code mt-6 rounded-[28px] border border-white/8 p-5 text-slate-100">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-slate-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Flujo recomendado
              </div>

              <div className="mt-4 space-y-2 font-mono text-[13px] leading-6 sm:text-sm">
                <p>
                  <span className="text-cyan-300">detectar</span>(cuellos_de_botella, tareas, demoras)
                </p>
                <p>
                  <span className="text-fuchsia-300">ordenar</span>(equipos, seguimiento, prioridades)
                </p>
                <p>
                  <span className="text-emerald-300">automatizar</span>(respuestas, flujos, recordatorios)
                </p>
                <p>
                  <span className="text-amber-300">medir</span>(conversiones, tiempos, resultados)
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {capabilities.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-[28px] border p-5" style={{ borderColor: 'var(--border)' }}>
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-brand-500/10 p-3 text-brand-500 dark:text-brand-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-950 dark:text-white">{title}</h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {solutionAreas.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-2xl border px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-brand-500 dark:text-brand-300" />
                    <span>{label}</span>
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
