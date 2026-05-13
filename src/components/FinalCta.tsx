import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeInUp, viewport } from '../lib/motion'

export function FinalCta() {
  return (
    <section className="px-6 py-16 lg:px-8">
      <motion.div
        className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-brand-500/15 bg-[linear-gradient(135deg,_rgba(37,99,235,0.95),_rgba(124,58,237,0.9))] px-8 py-10 text-white shadow-[0_28px_80px_rgba(37,99,235,0.32)] sm:px-10 lg:px-12 lg:py-14"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeInUp}
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
              Próximo paso
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Tienes una idea o proceso que quieres digitalizar?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">
              Convirtamos tu necesidad en una solución tecnológica real, escalable y funcional.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col text-slate-950">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Agendar asesoría
              <ArrowRight className="h-4 w-4 text-slate-950" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Explorar servicios
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
