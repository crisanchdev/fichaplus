# Backend en Laravel

Este directorio está destinado a contener la API del proyecto utilizando **Laravel** y **MariaDB**.

## Requisitos
- PHP 8.1 o superior
- Composer
- MariaDB

## Pasos iniciales

1. Crear el proyecto e ingresar al directorio:
   ```bash
   composer create-project laravel/laravel backend-api
   cd backend-api
   ```
2. Copiar el archivo `.env.example` a `.env`, configurar las variables de conexión a MariaDB e instalar las dependencias:
   ```bash
   cp .env.example .env
   composer install
   ```
   Luego edita los valores de `DB_DATABASE`, `DB_USERNAME` y `DB_PASSWORD` en el archivo `.env`.
3. Generar la clave de la aplicación:
   ```bash
   php artisan key:generate
   ```
4. Ejecutar las migraciones:
   ```bash
   php artisan migrate
   ```
5. Levantar el servidor de desarrollo:
   ```bash
   php artisan serve
   ```

## Estructura sugerida
- `app/Models` para los modelos de Eloquent (por ejemplo, `Cliente`, `Documento`).
- `database/migrations` donde se definen las tablas.
- `routes/api.php` para exponer endpoints que consumirá React.

Consulta la [documentación oficial de Laravel](https://laravel.com/docs) para más detalles sobre cada comando y configuración.
