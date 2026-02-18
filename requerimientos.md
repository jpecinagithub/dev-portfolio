# Requerimientos del Proyecto: Dev Portfolio

## 1. Objetivo
Construir y mantener un portfolio profesional de desarrollo web que permita:
- Presentar proyectos de forma visual, clara y multidioma.
- Facilitar acceso a repositorios de GitHub y despliegues.
- Ofrecer una experiencia robusta y elegante ante errores de navegación.

## 2. Alcance actual (características principales)
### 2.1 Navegación y estructura
- Aplicación SPA con `React + TypeScript + Vite`.
- Enrutado con `react-router-dom`.
- Vista principal (`/`) con layout de sidebar + panel de detalle.
- Ruta 404 para páginas inexistentes.
- Ruta específica de error de enlace externo (`/link-error`) para enlaces de GitHub/deployment que no se pueden abrir.

### 2.2 Presentación de proyectos
- Listado de proyectos con selección desde sidebar.
- Vista de detalle por proyecto con:
- tecnologías destacadas,
- descripción,
- highlights,
- galería de capturas.
- Soporte de lightbox para previsualización de imágenes.

### 2.3 Enlaces externos y tolerancia a fallos
- Botones de acceso a GitHub y Deployment por proyecto.
- Vista de repositorios agregada (sección de GitHub repositories).
- Componente de enlace seguro para aperturas externas:
- controla URLs inválidas,
- detecta bloqueo de popup/nueva pestaña,
- redirige a página de error amigable cuando falla la apertura.

### 2.4 Internacionalización
- Sistema i18n integrado.
- Idiomas soportados: `es`, `en`, `de`, `fr`, `it`, `zh`, `ar`, `ru`, `el`.
- Soporte RTL para idioma árabe.

### 2.5 UI/UX
- Diseño moderno con `Tailwind CSS` y componentes `shadcn/ui`.
- Identidad visual consistente (tipografía, tarjetas, badges, estados hover).
- Interfaz responsive para escritorio y móvil.

### 2.6 Calidad técnica
- Scripts de desarrollo, build, lint y test definidos en `package.json`.
- Tests básicos con `Vitest`.
- Build de producción funcional con `vite build`.

## 3. Requerimientos no funcionales
- Rendimiento: carga rápida y navegación fluida.
- Mantenibilidad: componentes reutilizables y separación por dominio (`components`, `pages`, `data`, `i18n`).
- Escalabilidad: facilidad para añadir nuevos proyectos, idiomas y secciones.
- Accesibilidad base: uso de semántica HTML y estados visuales claros.
- Confiabilidad: manejo explícito de enlaces externos con fallback visual.

## 4. Líneas de trabajo a futuro
### Línea A: Robustez de enlaces y monitoreo (Alta prioridad)
- Validación automática periódica de URLs de GitHub y deployments.
- Registro de errores de enlaces (telemetría) para detectar caídas reales.
- Estado de enlace por proyecto (activo/degradado/no disponible) en UI.

### Línea B: Mejora de contenido y CMS ligero (Alta prioridad)
- Migrar `src/data/projects.ts` a contenido desacoplado (`JSON` o headless CMS).
- Definir esquema de datos versionado para proyectos, capturas y traducciones.
- Flujo de alta/edición de proyectos sin tocar código de frontend.

### Línea C: Testing y calidad (Alta prioridad)
- Aumentar cobertura de tests en:
- navegación y rutas,
- rendering de detalles,
- flujo de error `/link-error`.
- Integrar pruebas end-to-end (Playwright/Cypress) para flujos clave.
- Añadir CI con checks automáticos de `lint + test + build`.

### Línea D: SEO y discoverability (Media prioridad)
- Metadatos por página/proyecto (title, description, Open Graph).
- Sitemap y mejoras de indexación.
- Optimización de previews al compartir enlaces de portfolio.

### Línea E: Performance de assets (Media prioridad)
- Optimización de imágenes (formatos modernos, tamaños responsivos).
- Lazy loading en capturas y componentes pesados.
- Revisión de bundle y división por rutas si aplica.

### Línea F: Accesibilidad avanzada (Media prioridad)
- Auditoría WCAG (contrastes, foco visible, navegación por teclado).
- Etiquetado ARIA en componentes interactivos.
- Mejora de lectura de estados para tecnologías asistivas.

### Línea G: Experiencia de usuario diferencial (Baja-media prioridad)
- Animaciones de transición de vistas más cuidadas.
- Página de About con storytelling técnico y métricas de impacto.
- Filtros avanzados de proyectos por stack, tipo y estado.

## 5. Plan sugerido por fases
### Fase 1 (Corto plazo)
- Línea A + C (robustez de enlaces y calidad automática).
- Entregable: portfolio más estable, con detección temprana de fallos.

### Fase 2 (Medio plazo)
- Línea B + E + D.
- Entregable: gestión de contenido más simple, mejor rendimiento y visibilidad.

### Fase 3 (Evolutivo)
- Línea F + G.
- Entregable: experiencia premium y mayor accesibilidad global.

## 6. Criterios de éxito
- Enlaces externos críticos con tasa de fallo controlada y trazable.
- Tiempo de actualización de proyectos reducido (sin tocar código en cada cambio).
- Cobertura de pruebas y validación continua en cada entrega.
- Mejora medible en rendimiento y experiencia de usuario.
