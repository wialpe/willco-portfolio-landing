import type { Project } from '../types/content'
import citasMedicasImage from '../assets/images/citas-medicas.jpg'
import chatIAImage from '../assets/images/chatia.jpg'
import crmGestionComercialImage from '../assets/images/crm-gestion-comercial.jpg'
import dashboardAdministrativoImage from '../assets/images/dashboard-administrativo.jpg'
import facturacionElectronicaImage from '../assets/images/facturacion-electronica.jpg'
import mesaAyudaImage from '../assets/images/mesa-ayuda.jpg'

export const projects: Project[] = [
  {
    name: 'CRM para gestión comercial',
    description:
      'Plataforma con seguimiento de leads, tareas automáticas, historial de clientes y reportes de cierre.',
    highlights: ['Seguimiento de leads', 'Tareas automáticas', 'Reportes de cierre'],
    category: 'Ventas',
    outcome: 'Embudo centralizado y seguimiento multicanal en un solo lugar.',
    image: crmGestionComercialImage,
    imageAlt: 'Equipo comercial revisando indicadores y estrategia en una sala de trabajo.',
  },
  {
    name: 'Plataforma de citas médicas',
    description:
      'Sistema web para agenda, confirmación de pacientes, control de disponibilidad y recordatorios.',
    highlights: ['Agenda digital', 'Confirmación de pacientes', 'Recordatorios automáticos'],
    category: 'Salud',
    outcome: 'Menos ausencias y mejor coordinación entre recepción y personal asistencial.',
    image: citasMedicasImage,
    imageAlt: 'Aplicación de citas médicas con agenda digital, confirmación y recordatorios.',
  },
  {
    name: 'Bot de WhatsApp para confirmación de agendas',
    description:
      'Automatización conectada con calendarios y base de datos para confirmar, mover o cancelar citas.',
    highlights: ['Confirmación automática', 'Cambios de cita', 'Conexión con calendarios'],
    category: 'Automatización',
    outcome: 'Respuestas más rápidas y ahorro de tiempo en llamadas repetitivas.',
    image: chatIAImage,
    imageAlt: 'Asistente automatizado en WhatsApp con flujos conversacionales y tareas conectadas.',
  },
  {
    name: 'Sistema de mesa de ayuda',
    description:
      'Módulo para tickets, asignación por prioridad, seguimiento SLA y trazabilidad de soporte interno.',
    highlights: ['Tickets por prioridad', 'Seguimiento SLA', 'Trazabilidad operativa'],
    category: 'Soporte',
    outcome: 'Mayor control operativo y tiempos de atención medibles.',
    image: mesaAyudaImage,
    imageAlt: 'Equipo colaborando en un entorno de soporte y coordinación operativa.',
  },
  {
    name: 'Dashboard administrativo',
    description:
      'Tablero ejecutivo con indicadores de ventas, operación, cartera y productividad por equipo.',
    highlights: ['KPIs en tiempo real', 'Análisis por equipo', 'Control de cartera y ventas'],
    category: 'Analítica',
    outcome: 'Visibilidad ejecutiva en tiempo real para decisiones de negocio.',
    image: dashboardAdministrativoImage,
    imageAlt: 'Pantalla con gráficos y métricas de negocio para análisis administrativo.',
  },
  {
    name: 'Integración con facturación electrónica',
    description:
      'Sincronización de pedidos, validación de datos y emisión automática con proveedor externo.',
    highlights: ['Sincronización de pedidos', 'Validación de datos', 'Emisión automática'],
    category: 'Integraciones',
    outcome: 'Reducción de errores manuales y continuidad del flujo administrativo.',
    image: facturacionElectronicaImage,
    imageAlt: 'Documentación financiera y procesos administrativos digitales en un escritorio.',
  },
]
