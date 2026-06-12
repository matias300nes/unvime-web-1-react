# React Router en Vite + React + TypeScript

Guia directa para agregar rutas a una app React creada con Vite.

## 1. Instalar React Router

Desde la carpeta del proyecto:

```bash
cd mi-app-react
npm install react-router
```

## 2. Crear carpetas

Dentro de `src/`, crear esta estructura:

```txt
src/
+-- app/
|   +-- router.tsx
+-- layouts/
|   +-- RootLayout.tsx
+-- pages/
    +-- HomePage.tsx
    +-- AboutPage.tsx
    +-- NotFoundPage.tsx
```

## 3. Crear las paginas

`src/pages/HomePage.tsx`

```tsx
function HomePage() {
  return (
    <main>
      <h1>Inicio</h1>
      <p>Esta es la pagina principal.</p>
    </main>
  )
}

export default HomePage
```

`src/pages/AboutPage.tsx`

```tsx
function AboutPage() {
  return (
    <main>
      <h1>Acerca de</h1>
      <p>Esta es otra pagina de la app.</p>
    </main>
  )
}

export default AboutPage
```

`src/pages/NotFoundPage.tsx`

```tsx
import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <main>
      <h1>404</h1>
      <p>La pagina no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </main>
  )
}

export default NotFoundPage
```

## 4. Crear el layout principal

`src/layouts/RootLayout.tsx`

```tsx
import { Link, Outlet } from 'react-router'

function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Inicio</Link>
          {' | '}
          <Link to="/about">Acerca de</Link>
        </nav>
      </header>

      <Outlet />
    </>
  )
}

export default RootLayout
```

`Outlet` indica donde se renderiza la pagina hija segun la URL.

## 5. Crear el router

`src/app/router.tsx`

```tsx
import { createBrowserRouter } from 'react-router'
import RootLayout from '../layouts/RootLayout'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
])
```

Notas:

- `path: '/'`: ruta principal.
- `index: true`: pagina que se muestra en `/`.
- `path: 'about'`: pagina que se muestra en `/about`.
- `errorElement`: pagina que se muestra si la ruta no existe.

## 6. Conectar el router en main.tsx

Reemplazar el contenido de `src/main.tsx` por:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import { router } from './app/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
```

## 7. Probar

Levantar la app:

```bash
npm run dev
```

Abrir la URL que muestra Vite, por ejemplo:

```txt
http://localhost:5173/
```

Probar estas rutas:

```txt
http://localhost:5173/
http://localhost:5173/about
http://localhost:5173/ruta-que-no-existe
```

## 8. Validar que compila

```bash
npm run build
```

Si el build termina sin errores, React Router quedo funcionando.

## Resumen rapido

```bash
npm install react-router
```

Archivos clave:

```txt
src/main.tsx
src/app/router.tsx
src/layouts/RootLayout.tsx
src/pages/HomePage.tsx
src/pages/AboutPage.tsx
src/pages/NotFoundPage.tsx
```

Conceptos clave:

- `RouterProvider`: activa el router en React.
- `createBrowserRouter`: define las rutas de la app.
- `Link`: navega sin recargar la pagina.
- `Outlet`: muestra la pagina hija dentro del layout.
