# Backend en Laravel

Este directorio está destinado a contener la API del proyecto utilizando **Laravel** y **MariaDB**.

## Requisitos
- PHP 8.1 o superior
- Composer
- MariaDB

## Pasos iniciales

1. Crear el proyecto:
   ```bash
   composer create-project laravel/laravel backend-api
   cd backend-api
   ```
2. Copiar el archivo `.env.example` a `.env` y configurar las variables de conexión a MariaDB:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=fichaplus
   DB_USERNAME=usuario
   DB_PASSWORD=clave
   ```
3. Ejecutar las migraciones de ejemplo:
   ```bash
   php artisan migrate
   ```

## Estructura sugerida
- `app/Models` para los modelos de Eloquent (por ejemplo, `Cliente`, `Documento`).
- `database/migrations` donde se definen las tablas.
- `routes/api.php` para exponer endpoints que consumirá React.

Consulta la [documentación oficial de Laravel](https://laravel.com/docs) para más detalles sobre cada comando y configuración.
