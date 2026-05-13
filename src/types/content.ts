export type ServiceIconKey =
  | 'web'
  | 'apps'
  | 'whatsapp'
  | 'crm'
  | 'callCenter'
  | 'infra'
  | 'integrations'
  | 'analytics'

export interface Service {
  title: string
  description: string
  icon: ServiceIconKey
  tag: string
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  category: string
  outcome: string
  image: string
  imageAlt: string
}

export type TechnologyCategory =
  | 'Frontend'
  | 'Backend'
  | 'Infraestructura'
  | 'Negocio'

export interface Technology {
  name: string
  category: TechnologyCategory
}

export interface Testimonial {
  sector: string
  role: string
  quote: string
  impact: string
}
