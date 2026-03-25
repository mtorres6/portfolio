# 🚀 Instrucciones para Lanzar tu Portafolio a GitHub Pages

Tu portafolio está **100% listo** para GitHub Pages con deploy automático. Sigue estos pasos:

## 📋 Paso 1: Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com) y haz login
2. Clic en **"New repository"** (botón verde)
3. Configura el repositorio:
   - **Repository name:** `portfolio` (importante: debe ser exactamente "portfolio")
   - **Description:** `Mi portafolio profesional - WordPress Full-Cycle Engineer`
   - **Public** (seleccionado)
   - ✅ **Add a README file**
   - ✅ **Add .gitignore** → Selecciona "Node"
   - **License:** MIT (opcional)
4. Clic en **"Create repository"**

## 📂 Paso 2: Subir tu Código

En tu terminal (en la carpeta del proyecto):

```bash
# Inicializar Git (si no está inicializado)
git init

# Agregar remote origin (reemplaza TU_USERNAME)
git remote add origin https://github.com/TU_USERNAME/portfolio.git

# Crear rama main si no existe
git branch -M main

# Agregar archivos
git add .

# Commit inicial
git commit -m "feat: Add complete professional portfolio

- Modern React SPA with Tailwind CSS
- WordPress Full-Cycle Engineer profile
- Responsive design with dark/light theme
- Projects showcase with real experience
- Working contact form with Formspree
- Optimized for GitHub Pages deployment"

# Push al repositorio
git push -u origin main
```

## ⚙️ Paso 3: Configurar GitHub Pages

1. En tu repositorio de GitHub, ve a **Settings** (arriba derecha)
2. En el menú lateral, busca **"Pages"**
3. En **"Source"**, selecciona **"GitHub Actions"**
4. No necesitas hacer nada más - el workflow ya está configurado

## 🎯 Paso 4: Verificar Deploy

1. Ve a la pestaña **"Actions"** en tu repositorio
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Espeva unos minutos hasta que aparezca ✅ verde
4. Tu sitio estará disponible en: `https://TU_USERNAME.github.io/portfolio/`

## 🔧 Características Implementadas

✅ **Deploy automático** - Cada push a `main` actualiza el sitio
✅ **Rutas optimizadas** - Configurado para `/portfolio/` en GitHub Pages  
✅ **Build optimizado** - Chunks separados para mejor performance
✅ **Assets optimizados** - Imágenes y CSS comprimidos
✅ **Favicon personalizado** - Con tus iniciales "MT"
✅ **SEO optimizado** - Meta tags, description y keywords
✅ **Formulario funcional** - Formspree configurado con tu endpoint

## 🚨 Solución de Problemas

**Si el sitio no carga:**
1. Verifica que el repositorio se llame exactamente "portfolio"
2. Asegúrate de que GitHub Pages esté configurado en "GitHub Actions"
3. Espera 5-10 minutos después del primer deploy

**Si hay errores en Actions:**
1. Ve a Actions → Clic en el workflow fallido
2. Revisa los logs para detalles  
3. Generalmente es por permisos - ve a Settings → Actions → General → Workflow permissions → "Read and write permissions"

## 🎉 ¡Felicidades!

Tu portafolio profesional estará online en:
**`https://TU_USERNAME.github.io/portfolio/`**

### 📝 Para futuras actualizaciones:
1. Realiza cambios en tu código local
2. `git add .`
3. `git commit -m "descripcion del cambio"`
4. `git push`
5. ¡El sitio se actualiza automáticamente!

---
¿Necesitas ayuda? Revisa los logs en GitHub Actions o contacta para soporte técnico.