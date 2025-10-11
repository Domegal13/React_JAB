# Copilot Instructions for AI Coding Agents

## Arquitectura y Estructura General
- Este repositorio contiene múltiples prácticas y actividades de aprendizaje en React, organizadas por carpetas temáticas (ej: `clase_003_hook_use_state_actividad_01`, `clase_002/eventos`, `Actividades_Practicas/Practica_Clase001`).
- Cada subcarpeta suele ser un proyecto React independiente, inicializado con Vite y gestionado con `pnpm`.
- Los puntos de entrada típicos son `src/main.jsx` y `src/App.jsx`.
- Los recursos estáticos (imágenes, CSS) se ubican en `src/assets/` o `public/`.

## Flujos de Desarrollo
- Para instalar dependencias: `pnpm install` en la raíz de cada subproyecto.
- Para iniciar el servidor de desarrollo: `pnpm run dev` (desde la carpeta del proyecto).
- No existe un sistema de tests automatizados por defecto; enfócate en la ejecución manual y la revisión visual.
- Los archivos de configuración relevantes incluyen `vite.config.js` y `eslint.config.js`.

## Convenciones y Patrones
- Los componentes React se definen principalmente como funciones en archivos `.jsx`.
- Se utiliza el hook `useState` para manejo de estado local en los ejemplos de la carpeta `clase_003_hook_use_state*`.
- Los estilos pueden estar en archivos CSS separados (`App.css`, `miCss.css`) y se importan en los componentes.
- Los nombres de carpetas y archivos reflejan la actividad o clase a la que pertenecen.

## Dependencias y Herramientas
- El gestor de paquetes principal es `pnpm`.
- El bundler y servidor de desarrollo es Vite.
- ESLint se usa para linting, con configuración local en cada subproyecto.

## Ejemplo de flujo típico
```sh
cd clase_003_hook_use_state_actividad_01
pnpm install
pnpm run dev
```

## Archivos clave para patrones
- `src/App.jsx`: Ejemplo de componente principal y uso de hooks.
- `vite.config.js`: Configuración de Vite.
- `eslint.config.js`: Reglas de linting.

## Notas adicionales
- No hay integración continua ni scripts de test automatizados.
- Cada carpeta de práctica es independiente; los cambios en una no afectan a las demás.
- Si agregas nuevas prácticas, sigue la estructura de carpetas y archivos existente.
