# Gestor de Fichas Sociales

Este proyecto es una aplicación web sencilla creada con **React 18** y **Tailwind CSS** para administrar fichas sociales de usuarios. Permite listar clientes, ver su detalle, crear nuevas fichas y gestionar un plan de acción con archivos adjuntos.

## Funcionalidades principales

- Listado de clientes con búsqueda y filtros.
- Vista detallada de la ficha del cliente con opción de edición.
- Creación de nuevas fichas mediante un formulario.
- Gestión de un plan de acción con alertas según fechas de vencimiento.
- Adjuntar documentos a cada cliente.
- Botones para exportar datos (simulación de exportación a Excel y PDF).

Los datos de ejemplo se encuentran en `src/mock/clients.js` y se cargan al iniciar la aplicación.

## Instalación en un entorno de pruebas

1. Asegúrate de tener **Node.js** instalado (versión 16 o superior).
2. Clona este repositorio y navega hasta la carpeta del proyecto.

```bash
npm install
```

3. Inicia la aplicación en modo desarrollo:

```bash
npm start
```

Esto abrirá la aplicación en `http://localhost:3000`.

4. Para generar una versión de producción puedes ejecutar:

```bash
npm run build
```

Este comando compilará la aplicación en la carpeta `build`.

## Estructura básica del proyecto

- `src/App.js` – Componente principal que gestiona la navegación entre el listado, el detalle de cliente y el formulario de nuevo cliente.
- `src/components/` – Componentes reutilizables para la interfaz: listado, detalle, formularios y botones de exportación.
- `src/utils/` – Utilidades para el manejo de fechas y alertas.
- `public/index.html` – Plantilla HTML base que carga Tailwind desde CDN.

## Notas

Actualmente la exportación a Excel y PDF solo muestra alertas simuladas. Para utilizar la aplicación en producción debería integrarse un backend real y la funcionalidad de exportación.


## Backend (Laravel + MariaDB)

En la carpeta [`backend`](backend/) se incluyen las instrucciones para poner en marcha una API basada en **Laravel** que almacena los datos en **MariaDB**. De forma resumida:

1. Instala PHP \(>=8.1\), Composer y MariaDB.
2. Crea el proyecto dentro de la carpeta `backend` siguiendo la guía de [`backend/README.md`](backend/README.md).

3. Configura las credenciales de base de datos en el archivo `.env` y ejecuta `composer install`.
4. Genera la clave de la aplicación con `php artisan key:generate`.
5. Ejecuta las migraciones con `php artisan migrate` y levanta el servidor con `php artisan serve`.
6. Ejecuta las migraciones con `php artisan migrate` y levanta el servidor con `php artisan serve`.


La aplicación React consumirá estos endpoints, reemplazando los datos de ejemplo actualmente almacenados en `src/mock`.
