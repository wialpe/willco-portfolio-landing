# Willco Portfolio Landing

Landing page corporativa para **Willco Tecnología**, construida con **React + TypeScript + Vite + TailwindCSS**. El proyecto presenta a la empresa como proveedor de desarrollo de software, automatización, integraciones y soluciones empresariales.

## Stack

- React 19
- TypeScript
- Vite
- TailwindCSS 4
- Framer Motion
- Lucide React

## Características

- Diseño moderno tipo SaaS / portafolio tecnológico
- Modo claro y oscuro con persistencia local
- Navbar sticky con menú móvil
- Hero con dashboard visual y badges tecnológicos
- Secciones modulares de servicios, proceso, proyectos, tecnologías y testimonios
- Formulario de contacto con confirmación visual sin backend
- Animaciones suaves con Framer Motion
- Diseño responsive para móvil, tablet y escritorio

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

La aplicación quedará disponible en la URL que indique Vite, normalmente `http://localhost:5173`.

## Scripts disponibles

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Estructura del proyecto

```text
src/
  components/
    About.tsx
    Contact.tsx
    FinalCta.tsx
    Footer.tsx
    Header.tsx
    Hero.tsx
    Process.tsx
    Projects.tsx
    SectionHeading.tsx
    Services.tsx
    Stats.tsx
    Technologies.tsx
    Testimonials.tsx
    ThemeToggle.tsx
  data/
    projects.ts
    services.ts
    technologies.ts
    testimonials.ts
  hooks/
    useTheme.ts
  lib/
    motion.ts
  types/
    content.ts
  App.tsx
  index.css
  main.tsx
```

## Personalización rápida

- Cambia los textos y datasets en `src/data/`.
- Ajusta colores, tipografías y utilidades visuales en `src/index.css`.
- Modifica el flujo del formulario en `src/components/Contact.tsx`.
- Reordena o extiende secciones desde `src/App.tsx`.

## Validación realizada

Se verificó el proyecto con:

```bash
npm run lint
npm run build
```
