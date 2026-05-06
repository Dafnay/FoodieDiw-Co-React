# Foodie Diw&Co

Aplicación web de un restaurante ficticio desarrollada con React + Vite como práctica del módulo de **Interfaces** (DAW2). Permite explorar el menú por categorías, añadir platos al carrito y gestionar el pedido.

## Tecnologías

| Herramienta | Uso |
|---|---|
| React 19 | Framework principal |
| Vite 8 | Bundler y servidor de desarrollo |
| React Router DOM 7 | Enrutamiento SPA |
| Bootstrap 5 + React-Bootstrap | Estilos y componentes UI |
| Leaflet / React-Leaflet | Mapa interactivo en la home |
| jQuery UI | Diálogos modales en el carrito |
| ESLint | Linting |

## Páginas

| Ruta | Página |
|---|---|
| `/` | Home — slider, categorías, info de entrega y mapa |
| `/starters` | Entrantes |
| `/mains` | Principales |
| `/desserts` | Postres |
| `/drinks` | Bebidas |
| `/cart` | Carrito de la compra |
| `/contact` | Formulario de contacto |
| `/faqs` | Preguntas frecuentes |
| `/about-us` | Sobre nosotros |

## Funcionalidades destacadas

- **Carrito global** con React Context (`CartContext`): añadir, eliminar, actualizar cantidad y vaciar.
- **Resumen del pedido** con subtotal, gastos de envío (5 €) y total.
- **Diálogos de confirmación** (vaciar carrito / proceder al pago) con jQuery UI Dialog.
- **Mapa interactivo** con Leaflet cargado de forma lazy para optimizar el bundle inicial.
- **Slider** con imágenes de banner visible en pantallas ≥ SM (Bootstrap breakpoint).
- **SEO básico**: título único por página via `document.title` y `robots.txt`.
- **Validación del formulario** de contacto en `src/utils/contactValidation.js`.

## Estructura del proyecto

```
src/
├── components/
│   ├── shared/          # Navbar, Footer, Slider, Map, ImageTextSection
│   ├── contact/         # ContactForm, ContactHeader, ContactInfoCard
│   ├── Button.jsx
│   ├── CategoryBubble.jsx
│   ├── MenuCategoryNav.jsx
│   └── MenuItem.jsx
├── context/
│   └── CartContext.jsx  # Estado global del carrito
├── css/                 # Hojas de estilo por sección
├── layout/
│   └── AppLayout.jsx
├── pages/               # Una página por ruta
├── routes/
│   └── AppRouter.jsx    # Definición de rutas
└── utils/
    └── contactValidation.js
```

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Previsualizar el build
npm run preview
```

## Despliegue

El proyecto incluye `public/_redirects` para compatibilidad con Netlify (redirige todas las rutas al `index.html` para que React Router funcione correctamente).
