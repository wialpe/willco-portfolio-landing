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
  category: string
  outcome: string
  image: string
  imageAlt: string
}
