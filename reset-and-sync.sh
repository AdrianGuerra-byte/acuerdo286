#!/bin/bash

# Script para sincronizar completamente el proyecto
# Ejecuta: chmod +x reset-and-sync.sh && ./reset-and-sync.sh

echo "🔄 Iniciando sincronización completa del proyecto..."

# 1. Detener cualquier proceso de Next.js
echo "⏹️  Deteniendo procesos de Next.js..."
pkill -f "next dev" 2>/dev/null || true

# 2. Limpiar caché y node_modules
echo "🧹 Eliminando caché y dependencias..."
rm -rf .next
rm -rf .turbo
rm -rf node_modules

# 3. Limpiar caché de pnpm
echo "🧹 Limpiando caché de pnpm..."
pnpm store prune 2>/dev/null || true

# 4. Hacer stash de cambios locales
echo "💾 Guardando cambios locales (si existen)..."
git stash

# 5. Actualizar desde remoto
echo "⬇️  Descargando últimos cambios..."
git fetch origin

# 6. Cambiar a la rama correcta
echo "🔀 Cambiando a rama fix/Updated..."
git checkout fix/Updated

# 7. Resetear completamente al estado remoto
echo "🔄 Reseteando al estado del servidor..."
git reset --hard origin/fix/Updated

# 8. Limpiar archivos no trackeados
echo "🧹 Limpiando archivos no trackeados..."
git clean -fd

# 9. Reinstalar dependencias
echo "📦 Instalando dependencias..."
pnpm install

echo ""
echo "✅ ¡Sincronización completa!"
echo ""
echo "Ahora ejecuta: pnpm dev"
echo ""
