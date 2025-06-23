#!/bin/bash
# Set up environment for Fichaplus backend (Laravel + MariaDB)
# This script installs PHP 8.1, Composer, Node.js (via nvm), and MariaDB,
# then creates the database and initializes a Laravel project inside backend/.

set -e

# Install PHP and required extensions
sudo apt update
sudo apt install -y \
    php8.1 php8.1-cli php8.1-mbstring php8.1-xml php8.1-pdo \
    php8.1-mysql php8.1-curl php8.1-zip php8.1-bcmath php8.1-gd

# Install Composer
sudo apt install -y composer

# Install Node.js using nvm
if [ ! -d "$HOME/.nvm" ]; then
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
  source "$HOME/.nvm/nvm.sh"
fi
nvm install 18
nvm use 18

# Install MariaDB and create database
sudo apt install -y mariadb-server
sudo mysql -e "CREATE DATABASE IF NOT EXISTS fichaplus CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# Create Laravel project if it doesn't exist
if [ ! -d backend/fichaplus-backend ]; then
  composer create-project laravel/laravel backend/fichaplus-backend
  cp backend/fichaplus-backend/.env.example backend/fichaplus-backend/.env
  php backend/fichaplus-backend/artisan key:generate --ansi
fi

# Update .env with database credentials
sed -i "s/DB_DATABASE=.*/DB_DATABASE=fichaplus/" backend/fichaplus-backend/.env
sed -i "s/DB_USERNAME=.*/DB_USERNAME=root/" backend/fichaplus-backend/.env
sed -i "s/DB_PASSWORD=.*/DB_PASSWORD=/" backend/fichaplus-backend/.env

# Run migrations
php backend/fichaplus-backend/artisan migrate

printf '\nEnvironment setup complete. Laravel project located at backend/fichaplus-backend\n'
