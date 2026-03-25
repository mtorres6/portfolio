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

## � Paso 2: Configurar Autenticación

**⚠️ IMPORTANTE:** GitHub no permite passwords. Elige UNA opción:

### Opción A: Personal Access Token (Recomendado)
1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Classic
3. Permisos: ✅ repo, ✅ workflow, ✅ write:packages
4. Clic "Generate token" y **COPIA EL TOKEN** (solo se muestra una vez)

### Opción B: SSH Keys (Más seguro)
```bash
# Generar SSH key
ssh-keygen -t ed25519 -C "tu-email@ejemplo.com"

# Copiar key pública
cat ~/.ssh/id_ed25519.pub
```
Luego agrégala en GitHub → Settings → SSH and GPG keys

### Opción C: GitHub CLI (Más fácil)
```bash
# Instalar GitHub CLI desde https://cli.github.com
gh auth login
# Seguir las instrucciones
```

## 📂 Paso 3: Subir tu Código

En tu terminal (en la carpeta del proyecto):

```bash
# Inicializar Git (si no está inicializado)
git init

# IMPORTANTE: Usar tu username real en la URL
git remote add origin https://github.com/mtorres6/portfolio.git

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
# Si usas PAT: username = tu_github_username, password = tu_token
# Si usas SSH: cambia la URL a git@github.com:mtorres6/portfolio.git
# Si usas GitHub CLI: funcionará automáticamente
git push -u origin main
```

## ⚙️ Paso 4: Configurar GitHub Pages

1. En tu repositorio de GitHub, ve a **Settings** (arriba derecha)
2. En el menú lateral, busca **"Pages"**
3. En **"Source"**, selecciona **"GitHub Actions"**
4. No necesitas hacer nada más - el workflow ya está configurado

## 🎯 Paso 5: Verificar Deploy

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

**❌ Error "Authentication failed" / "Password authentication is not supported":**
Re-configurar autenticación (ve al Paso 2):
- **Si usas PAT:** En el push, username = tu_github_username, password = tu_token
- **Si usas SSH:** Cambia remote URL: `git remote set-url origin git@github.com:mtorres6/portfolio.git`
- **Si usas GitHub CLI:** Ejecuta `gh auth status` para verificar login

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