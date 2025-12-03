# Solución al Error "iconMap is not defined"

## El problema

Next.js está usando código en caché del servidor. Necesitas limpiar completamente el caché.

## Solución en la otra PC

Ejecuta estos comandos en orden:

```bash
# 1. Detener el servidor de desarrollo si está corriendo
# Presiona Ctrl+C en la terminal donde corre

# 2. Eliminar carpetas de caché y build
rm -rf .next
rm -rf node_modules
rm -rf .turbo

# 3. Limpiar caché de pnpm (o npm)
pnpm store prune
# O si usas npm:
# npm cache clean --force

# 4. Hacer pull de los últimos cambios
git fetch origin
git reset --hard origin/feature/JSONsImplemented

# 5. Reinstalar dependencias
pnpm install
# O: npm install

# 6. Iniciar de nuevo
pnpm dev
# O: npm run dev
```

## Si el error persiste

### Opción A: Borrar completamente el repositorio y volver a clonar

```bash
# Sal del directorio del proyecto
cd ..

# Borra la carpeta completa
rm -rf acuerdo286

# Clona de nuevo
git clone git@github.com:Centro-Universitario-Hidalguense/acuerdo286.git
cd acuerdo286

# Cambia a la rama correcta
git checkout feature/JSONsImplemented

# Instala dependencias
pnpm install

# Ejecuta
pnpm dev
```

### Opción B: Verificar que los archivos JSON existen

```bash
# Verifica que estos archivos existen:
ls -la data/

# Debes ver:
# - examenes.json
# - materiales.json
# - preguntas-frecuentes.json
# - proceso-registro.json
# - testimonios.json
```

Si alguno de estos archivos NO existe, entonces el problema es que no se hicieron commit correctamente.

## Verificar en tu PC (la que sí funciona)

```bash
# Asegúrate de que todo está commiteado
git status

# Si hay cambios sin commitear:
git add .
git commit -m "Fix: Add all JSON files and updated components"
git push origin feature/JSONsImplemented
```

## Causa del Error

El error "iconMap is not defined" ocurre cuando:
1. El código viejo en `.next/` está en caché
2. Los archivos JSON no existen en el repo remoto
3. El componente no se actualizó correctamente

La solución más segura es **borrar completamente `.next/` y `node_modules/`** antes de volver a instalar.
