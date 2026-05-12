import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  CloudCog,
  Globe,
  Headset,
  LayoutDashboard,
  LayoutPanelTop,
  MessageSquareText,
  PlugZap,
  Workflow,
} from 'lucide-react'
import { services } from '../data/services'
import { fadeInUp, staggerContainer, viewport } from '../lib/motion'
import type { ServiceIconKey } from '../types/content'
import { SectionHeading } from './SectionHeading'

const icons: Record<ServiceIconKey, LucideIcon> = {
  web: Globe,
  apps: LayoutPanelTop,
  whatsapp: MessageSquareText,
  crm: Workflow,
  callCenter: Headset,
  infra: CloudCog,
  integrations: PlugZap,
  analytics: LayoutDashboard,
}

export function Services() {
  return (
    <section id="servicios" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Servicios"
          title="Soluciones pensadas para digitalizar, automatizar e integrar tu operación."
          description="Desarrollamos productos y módulos a la medida para diferentes áreas del negocio, con foco en estabilidad, escalabilidad y retorno operativo."
          align="center"
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {services.map((service) => {
            const Icon = icons[service.icon]

            return (
              <motion.article
                key={service.title}
                className="panel group rounded-[30px] p-6 transition duration-300 hover:-translate-y-1"
                variants={fadeInUp}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500 transition duration-300 group-hover:bg-brand-500 group-hover:text-white dark:text-brand-300">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="mt-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500 dark:text-brand-300">
                    {service.tag}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-slate-950 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
