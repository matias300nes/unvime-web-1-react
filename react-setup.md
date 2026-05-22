# React setup con TypeScript

Guía rápida para crear una app React con Vite y TypeScript.

Actualizado: 22 de mayo de 2026.

## 1. Revisar requisitos

Necesitamos tener instalados Node.js y npm.

```bash
node --version
npm --version
```

Si alguno de esos comandos falla, instalar Node.js LTS desde:

https://nodejs.org/

## 2. Crear el proyecto

Desde la carpeta donde queremos guardar la app:

```bash
npm create vite@latest mi-app-react -- --template react-ts
```

`mi-app-react` es el nombre de la carpeta. Se puede cambiar por el nombre del proyecto.

## 3. Instalar dependencias

Entrar a la carpeta del proyecto e instalar:

```bash
cd mi-app-react
npm install
```

## 4. Levantar la app

```bash
npm run dev
```

Vite va a mostrar una URL parecida a:

```txt
http://localhost:5173/
```

Abrir esa URL en el navegador.

## 5. Archivos principales

Los archivos que más vamos a tocar al principio son:

```txt
src/
+-- App.tsx
+-- main.tsx
+-- index.css
```

- `src/main.tsx`: conecta React con el HTML.
- `src/App.tsx`: componente principal de la app.
- `src/index.css`: estilos globales.

En React con TypeScript, los componentes que escriben JSX usan extensión `.tsx`.

## 6. Limpiar la plantilla inicial

Reemplazar `src/App.tsx` por:

```tsx
function App() {
  return (
    <main>
      <h1>Mi primera app React</h1>
      <p>App creada con Vite y TypeScript.</p>
    </main>
  )
}

export default App
```

Revisar que `src/main.tsx` quede así:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

Reemplazar `src/index.css` por:

```css
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #f6f7fb;
  color: #1f2937;
}

main {
  max-width: 720px;
  margin: 48px auto;
  padding: 24px;
}
```

Si `src/App.css` ya no se importa desde ningún archivo, se puede borrar.

## 7. Comandos útiles

```bash
npm run dev
npm run build
npm run preview
```

- `npm run dev`: levanta el servidor de desarrollo.
- `npm run build`: revisa TypeScript y genera la versión de producción.
- `npm run preview`: prueba localmente la versión generada por `build`.

## 8. Probar que funciona

La app está lista si:

- El navegador abre `http://localhost:5173/`.
- Se ve el texto de `Mi primera app React`.
- Al editar `src/App.tsx` y guardar, el navegador se actualiza.

También se puede validar el proyecto con:

```bash
npm run build
```

## 9. Ejemplo de API con TypeScript

Más adelante, React puede consumir una API de Express usando `fetch`.

```ts
type Producto = {
  id: number
  nombre: string
}

async function cargarProductos() {
  const respuesta = await fetch('http://localhost:3000/api/productos')
  const productos: Producto[] = await respuesta.json()
  console.log(productos)
}
```

## Problemas frecuentes

### `npm` no se reconoce como comando

Instalar Node.js LTS y volver a abrir la terminal.

### El puerto está ocupado

Usar otro puerto:

```bash
npm run dev -- --port 5174
```

### Error en `document.getElementById`

Revisar que `src/main.tsx` tenga el signo `!`:

```ts
document.getElementById('root')!
```

## Resumen rápido

```bash
npm create vite@latest mi-app-react -- --template react-ts
cd mi-app-react
npm install
npm run dev
```

Con esos pasos queda creada y corriendo una app React con TypeScript.

## Referencias

- React con TypeScript: https://react.dev/learn/typescript
- Vite: https://vite.dev/guide/
