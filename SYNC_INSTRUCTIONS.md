# Instrucciones para Sincronizar el Proyecto

Si clonaste el repositorio o necesitas actualizar tu copia local después de que se limpiara el historial con BFG, sigue estos pasos:

## 1. Si ya tenías el repositorio clonado antes

El historial de Git fue reescrito para eliminar `node_modules` y `.next`. Necesitas actualizar tu repo local:

```bash
# Respalda tus cambios locales si los tienes
git stash

# Obtén los últimos cambios
git fetch origin

# Resetea tu rama al estado remoto (CUIDADO: esto sobrescribe cambios locales)
git reset --hard origin/feature/JSONsImplemented

# O si estás en develop:
git reset --hard origin/develop

# Recupera tus cambios si los tenías
git stash pop
```

## 2. Si acabas de clonar el repositorio

```bash
# Clona el repositorio
git clone git@github.com:Centro-Universitario-Hidalguense/acuerdo286.git
cd acuerdo286

# Cambia a la rama que necesites
git checkout feature/JSONsImplemented
```

## 3. Instala las dependencias

```bash
# Instala las dependencias con pnpm
pnpm install

# O si usas npm
npm install
```

## 4. Ejecuta el proyecto

```bash
# Modo desarrollo
pnpm dev

# O con npm
npm run dev
```

## Errores Comunes

### Error: "iconMap is not defined"
- **Causa:** No tienes los últimos cambios del código
- **Solución:** Ejecuta `git pull origin feature/JSONsImplemented`

### Error: "Module not found"
- **Causa:** No instalaste las dependencias
- **Solución:** Ejecuta `pnpm install` o `npm install`

### Error: archivos grandes en Git
- **Causa:** Estás en una versión antigua del historial
- **Solución:** Sigue las instrucciones del paso 1

## Notas Importantes

⚠️ **El historial de Git fue reescrito:** Si ya tenías el repo clonado, DEBES hacer `git reset --hard` para sincronizar.

⚠️ **NO subas `node_modules/` a Git:** El `.gitignore` ya está configurado correctamente.

✅ **Los archivos JSON ahora manejan el contenido:** 
- `/data/proceso-registro.json` - Pasos del proceso
- `/data/materiales.json` - Materiales de estudio
- `/data/examenes.json` - Catálogo de exámenes
