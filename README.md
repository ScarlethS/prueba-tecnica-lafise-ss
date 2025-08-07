# Prueba Técnica Web SS

Este proyecto es una aplicación web construida con [Next.js](https://nextjs.org), diseñada para gestionar transacciones bancarias y visualizar información financiera de usuarios.

## Características

- Autenticación y gestión de usuarios.
- Visualización de cuentas y productos bancarios.
- Transferencias entre cuentas propias y de terceros.
- Selección de moneda y conceptos de transacción.
- Notificaciones de éxito en transferencias.
- Interfaz responsiva y moderna.

## Estructura del Proyecto

```
components/         # Componentes reutilizables de la interfaz
app/                # Páginas y rutas principales de la aplicación
hooks/              # Custom hooks para lógica de negocio y datos
lib/                # Utilidades y funciones auxiliares
schemes/            # Esquemas de validación (ej. Zod)
services/           # Servicios para llamadas a APIs
store/              # Estado global (ej. context, redux)
public/             # Recursos públicos (imágenes, fuentes)
```

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/prueba-tecnica-web-ss.git
   cd prueba-tecnica-web-ss
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

## Uso en Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

⚠️ Importante: Para poder realizar pruebas correctamente, asegúrate de que el servidor del API REST proporcionado esté corriendo en http://localhost:5566.
Esta aplicación depende de ese API para cargar la información correctamente.

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Despliegue

La forma más sencilla de desplegar tu aplicación Next.js es usando [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consulta la [documentación oficial de Next.js para despliegue](https://nextjs.org/docs/app/building-your-application/deploying).

## Tecnologías Utilizadas

- Next.js
- React
- TypeScript
- Zod (validación de formularios)
- React Hook Form
- Sonner (notificaciones)
- TailwindCSS

## Personalización

Puedes editar la página principal modificando [`app/page.tsx`](app/page.tsx).  
El formulario de transacciones se encuentra en [`app/transaction/formTransaction.tsx`](app/transaction/formTransaction.tsx).

## Recursos

- [Documentación Next.js](https://nextjs.org/docs)
- [Tutorial interactivo Next.js](https://nextjs.org/learn)
- [Repositorio Next.js en GitHub](https://github.com/vercel/next.js)

---

¡Contribuciones y sugerencias son bienvenidas!