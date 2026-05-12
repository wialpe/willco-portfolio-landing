import type { Project } from '../types/content'

export const projects: Project[] = [
  {
    name: 'CRM para gestión comercial',
    description:
      'Plataforma con seguimiento de leads, tareas automáticas, historial de clientes y reportes de cierre.',
    technologies: ['React', 'TypeScript', 'Laravel', 'MySQL'],
    category: 'Ventas',
    outcome: 'Embudo centralizado y seguimiento multicanal en un solo lugar.',
  },
  {
    name: 'Plataforma de citas médicas',
    description:
      'Sistema web para agenda, confirmación de pacientes, control de disponibilidad y recordatorios.',
    technologies: ['React', 'PHP', 'MySQL', 'WhatsApp API'],
    category: 'Salud',
    outcome: 'Menos ausencias y mejor coordinación entre recepción y personal asistencial.',
  },
  {
    name: 'Bot de WhatsApp para confirmación de agendas',
    description:
      'Automatización conectada con calendarios y base de datos para confirmar, mover o cancelar citas.',
    technologies: ['WhatsApp API', 'Node.js', 'Webhooks'],
    category: 'Automatización',
    outcome: 'Respuestas más rápidas y ahorro de tiempo en llamadas repetitivas.',
  },
  {
    name: 'Sistema de mesa de ayuda',
    description:
      'Módulo para tickets, asignación por prioridad, seguimiento SLA y trazabilidad de soporte interno.',
    technologies: ['React', 'Laravel', 'Docker'],
    category: 'Soporte',
    outcome: 'Mayor control operativo y tiempos de atención medibles.',
  },
  {
    name: 'Dashboard administrativo',
    description:
      'Tablero ejecutivo con indicadores de ventas, operación, cartera y productividad por equipo.',
    technologies: ['Power BI', 'APIs', 'MySQL'],
    category: 'Analítica',
    outcome: 'Visibilidad ejecutiva en tiempo real para decisiones de negocio.',
  },
  {
    name: 'Integración con facturación electrónica',
    description:
      'Sincronización de pedidos, validación de datos y emisión automática con proveedor externo.',
    technologies: ['PHP', 'APIs', 'Nginx'],
    category: 'Integraciones',
    outcome: 'Reducción de errores manuales y continuidad del flujo administrativo.',
  },
]
