import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import { Clock3, Mail, MapPin, MessageSquareText, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewport } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

interface FormValues {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

const initialFormValues: FormValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
}

const contactDetails = [
  {
    label: 'Correo',
    value: 'contacto@willcotecnologia.com',
    icon: Mail,
  },
  {
    label: 'Ubicación',
    value: 'Medellín, Colombia',
    icon: MapPin,
  },
  {
    label: 'WhatsApp',
    value: '+57 300 000 0000',
    icon: Phone,
  },
  {
    label: 'Respuesta estimada',
    value: 'En horario laboral',
    icon: Clock3,
  },
]

export function Contact() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const fieldName = event.target.name as keyof FormValues
    const { value } = event.target

    setFormValues((currentValues) => ({
      ...currentValues,
      [fieldName]: value,
    }))

    if (isSubmitted) {
      setIsSubmitted(false)
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
    setFormValues(initialFormValues)
  }

  return (
    <section id="contacto" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contacto"
          title="Cuéntanos qué quieres construir y te ayudamos a aterrizar la solución."
          description="Completa el formulario y conversemos sobre objetivos, alcance, tiempos y la mejor ruta para tu proyecto."
        />

        <motion.div
          className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <motion.div className="panel-strong rounded-[32px] p-8" variants={fadeInUp}>
            <div className="flex items-center gap-3 text-brand-500 dark:text-brand-300">
              <MessageSquareText className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                Hablemos de tu idea
              </span>
            </div>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
              Podemos ayudarte a definir una propuesta tecnológica clara para automatizar,
              integrar o crear una plataforma desde cero.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-3xl border px-4 py-4"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div className="rounded-2xl bg-brand-500/10 p-3 text-brand-500 dark:text-brand-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                      {label}
                    </p>
                    <p className="mt-2 text-base text-slate-900 dark:text-slate-100">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="panel rounded-[32px] p-8"
            variants={fadeInUp}
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formValues.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Empresa
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formValues.company}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Nombre de la empresa"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Correo
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="correo@empresa.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Teléfono
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formValues.phone}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="+57 300 000 0000"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  className="input-field min-h-[160px] resize-y"
                  placeholder="Cuéntanos qué proceso, sistema o necesidad quieres resolver."
                  required
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="btn-primary">
                Enviar solicitud
              </button>

              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${
                  isSubmitted
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {isSubmitted
                  ? 'Solicitud enviada correctamente. Nos pondremos en contacto contigo.'
                  : 'Te responderemos con una propuesta o ruta recomendada.'}
              </p>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
