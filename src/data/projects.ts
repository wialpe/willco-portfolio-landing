import type { Project } from '../types/content'
import citasMedicasImage from '../assets/images/citas-medicas.png'
import chatIAImage from '../assets/images/chatia.png'

export const projects: Project[] = [
  {
    name: 'CRM para gestión comercial',
    description:
      'Plataforma con seguimiento de leads, tareas automáticas, historial de clientes y reportes de cierre.',
    technologies: ['React', 'TypeScript', 'Laravel', 'MySQL'],
    category: 'Ventas',
    outcome: 'Embudo centralizado y seguimiento multicanal en un solo lugar.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Equipo comercial revisando indicadores y estrategia en una sala de trabajo.',
  },
  {
    name: 'Plataforma de citas médicas',
    description:
      'Sistema web para agenda, confirmación de pacientes, control de disponibilidad y recordatorios.',
    technologies: ['React', 'PHP', 'MySQL', 'WhatsApp API'],
    category: 'Salud',
    outcome: 'Menos ausencias y mejor coordinación entre recepción y personal asistencial.',
    image: citasMedicasImage,
    imageAlt: 'Aplicación de citas médicas con agenda digital, confirmación y recordatorios.',
  },
  {
    name: 'Bot de WhatsApp para confirmación de agendas',
    description:
      'Automatización conectada con calendarios y base de datos para confirmar, mover o cancelar citas.',
    technologies: ['WhatsApp API', 'Node.js', 'Webhooks'],
    category: 'Automatización',
    outcome: 'Respuestas más rápidas y ahorro de tiempo en llamadas repetitivas.',
    image: chatIAImage,
    imageAlt: 'Asistente automatizado en WhatsApp con flujos conversacionales y tareas conectadas.',
  },
  {
    name: 'Sistema de mesa de ayuda',
    description:
      'Módulo para tickets, asignación por prioridad, seguimiento SLA y trazabilidad de soporte interno.',
    technologies: ['React', 'Laravel', 'Docker'],
    category: 'Soporte',
    outcome: 'Mayor control operativo y tiempos de atención medibles.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Equipo colaborando en un entorno de soporte y coordinación operativa.',
  },
  {
    name: 'Dashboard administrativo',
    description:
      'Tablero ejecutivo con indicadores de ventas, operación, cartera y productividad por equipo.',
    technologies: ['Power BI', 'APIs', 'MySQL'],
    category: 'Analítica',
    outcome: 'Visibilidad ejecutiva en tiempo real para decisiones de negocio.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Pantalla con gráficos y métricas de negocio para análisis administrativo.',
  },
  {
    name: 'Integración con facturación electrónica',
    description:
      'Sincronización de pedidos, validación de datos y emisión automática con proveedor externo.',
    technologies: ['PHP', 'APIs', 'Nginx'],
    category: 'Integraciones',
    outcome: 'Reducción de errores manuales y continuidad del flujo administrativo.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Documentación financiera y procesos administrativos digitales en un escritorio.',
  },
]
