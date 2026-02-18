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
- Ruta específica de error de enlace externo (`/link-error`) para enlaces de GitHub/despliegue que no se pueden abrir.

### 2.2 Presentación de proyectos
- Listado de proyectos con selección desde sidebar.
- Vista de detalle por proyecto con:
- tecnologías destacadas,
- descripción,
- puntos destacados,
- galería de capturas.
- Soporte de visor ampliado (lightbox) para previsualización de imágenes.

### 2.3 Enlaces externos y tolerancia a fallos
- Botones de acceso a GitHub y despliegue por proyecto.
- Vista de repositorios agregada (sección de repositorios de GitHub).
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
- Identidad visual consistente (tipografía, tarjetas, insignias y estados al pasar el cursor).
- Interfaz adaptable para escritorio y móvil.

### 2.6 Calidad técnica
- Scripts de desarrollo, compilación, lint y pruebas definidos en `package.json`.
- Tests básicos con `Vitest`.
- Compilación de producción funcional con `vite build`.

## 3. Requerimientos no funcionales
- Rendimiento: carga rápida y navegación fluida.
- Mantenibilidad: componentes reutilizables y separación por dominio (`components`, `pages`, `data`, `i18n`).
- Escalabilidad: facilidad para añadir nuevos proyectos, idiomas y secciones.
- Accesibilidad base: uso de semántica HTML y estados visuales claros.
- Confiabilidad: manejo explícito de enlaces externos con alternativa visual.

## 4. Líneas de trabajo a futuro
### Línea A: Robustez de enlaces y monitoreo (Alta prioridad)
- Validación automática periódica de URLs de GitHub y despliegues.
- Registro de errores de enlaces (telemetría) para detectar caídas reales.
- Estado de enlace por proyecto (activo/degradado/no disponible) en la interfaz.

### Línea B: Mejora de contenido y CMS ligero (Alta prioridad)
- Migrar `src/data/projects.ts` a contenido desacoplado (`JSON` o headless CMS).
- Definir esquema de datos versionado para proyectos, capturas y traducciones.
- Flujo de alta/edición de proyectos sin tocar código de frontend.

### Línea C: Pruebas y calidad (Alta prioridad)
- Aumentar cobertura de pruebas en:
- navegación y rutas,
- renderizado de detalles,
- flujo de error `/link-error`.
- Integrar pruebas end-to-end (Playwright/Cypress) para flujos clave.
- Añadir CI con verificaciones automáticas de `lint + test + build`.

### Línea D: SEO y descubribilidad (Media prioridad)
- Metadatos por página/proyecto (título, descripción, Open Graph).
- Mapa del sitio y mejoras de indexación.
- Optimización de vistas previas al compartir enlaces del portfolio.

### Línea E: Rendimiento de recursos (Media prioridad)
- Optimización de imágenes (formatos modernos, tamaños responsivos).
- Carga diferida en capturas y componentes pesados.
- Revisión del paquete y división por rutas si aplica.

### Línea F: Accesibilidad avanzada (Media prioridad)
- Auditoría WCAG (contrastes, foco visible, navegación por teclado).
- Etiquetado ARIA en componentes interactivos.
- Mejora de lectura de estados para tecnologías asistivas.

### Línea G: Experiencia de usuario diferencial (Baja-media prioridad)
- Animaciones de transición de vistas más cuidadas.
- Página Acerca de con relato técnico y métricas de impacto.
- Filtros avanzados de proyectos por tecnología, tipo y estado.

## 5. Plan sugerido por fases
### Fase 1 (Corto plazo)
- Línea A + C (robustez de enlaces y calidad automática).
- Entregable: portfolio más estable, con detección temprana de fallos.

### Fase 2 (Medio plazo)
- Línea B + E + D.
- Entregable: gestión de contenido más simple, mejor rendimiento y visibilidad.

### Fase 3 (Evolutivo)
- Línea F + G.
- Entregable: experiencia de alto nivel y mayor accesibilidad global.

## 6. Criterios de éxito
- Enlaces externos críticos con tasa de fallo controlada y trazable.
- Tiempo de actualización de proyectos reducido (sin tocar código en cada cambio).
- Cobertura de pruebas y validación continua en cada entrega.
- Mejora medible en rendimiento y experiencia de usuario.
