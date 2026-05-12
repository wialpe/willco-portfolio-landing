import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import { fadeInUp, staggerContainer, viewport } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

export function Testimonials() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonios"
          title="Experiencias que reflejan el impacto de una solución bien implementada."
          description="Estos testimonios ficticios representan el tipo de resultados que buscamos generar con cada implementación."
        />

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.sector}
              className="panel rounded-[30px] p-6"
              variants={fadeInUp}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500 dark:text-brand-300">
                  {testimonial.sector}
                </span>
                <Quote className="h-8 w-8 text-brand-500/60 dark:text-brand-300/70" />
              </div>

              <div className="mt-6 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-6 text-base leading-8 text-slate-700 dark:text-slate-200">
                “{testimonial.quote}”
              </p>

              <div className="mt-8">
                <p className="font-medium text-slate-950 dark:text-white">{testimonial.role}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {testimonial.impact}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
