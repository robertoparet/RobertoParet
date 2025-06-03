# Portfolio Roberto Paret

Portfolio profesional de Roberto Paret, desarrollador especializado en soluciones automatizadas con N8N e integración de IA.

## 🚀 Características

- **Diseño Responsivo**: Funciona perfectamente en desktop, tablet y móvil
- **Animaciones Modernas**: Efectos visuales suaves y profesionales
- **Formulario de Contacto**: Integración con EmailJS para envío de emails
- **Optimizado**: Construido con Vite para máximo rendimiento
- **Tecnologías Modernas**: React 18, TypeScript, Tailwind CSS v4

## 🛠️ Stack Tecnológico

- **Frontend**: React 18 + TypeScript
- **Estilos**: Tailwind CSS v4
- **Build Tool**: Vite
- **Email Service**: EmailJS
- **Iconos**: Lucide React

## 📁 Estructura del Proyecto

```
Portafolio-Roberto/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navegación principal
│   │   ├── Hero.tsx            # Sección de presentación
│   │   ├── About.tsx           # Información personal
│   │   ├── Skills.tsx          # Habilidades técnicas
│   │   ├── Solutions.tsx       # Servicios y proyectos
│   │   ├── Hobbies.tsx         # Aficiones (fotografía)
│   │   ├── Contact.tsx         # Formulario de contacto
│   │   └── Footer.tsx          # Pie de página
│   ├── App.tsx                 # Componente principal
│   ├── index.css               # Estilos globales
│   └── main.tsx                # Punto de entrada
├── public/                     # Archivos estáticos
├── .env                        # Variables de entorno
└── package.json                # Dependencias del proyecto
```

## 🔧 Instalación y Configuración

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Configurar EmailJS

Para que el formulario de contacto funcione correctamente, necesitas configurar EmailJS:

#### a) Crear cuenta en EmailJS
1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Inicia sesión en tu dashboard

#### b) Configurar el servicio de email
1. En el dashboard, ve a **"Email Services"**
2. Haz click en **"Add New Service"**
3. Selecciona tu proveedor de email (Gmail recomendado)
4. Sigue las instrucciones para conectar tu cuenta
5. Copia el **Service ID** que se genera

#### c) Crear template de email
1. Ve a **"Email Templates"**
2. Haz click en **"Create New Template"**
3. Usa este template como base:

```
Nuevo mensaje desde tu portfolio:

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu portfolio web.
```

4. Configura:
   - **To Email**: `robertoparetdev@gmail.com`
   - **Subject**: `Nuevo mensaje desde tu portfolio - {{from_name}}`
5. Guarda y copia el **Template ID**

#### d) Obtener Public Key
1. Ve a **"Account"** → **"General"**
2. Copia tu **Public Key**

#### e) Configurar variables de entorno
Edita el archivo `.env` en la raíz del proyecto:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### 4. Construir para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

## 📧 Configuración del Formulario de Contacto

El formulario está configurado para enviar emails a `robertoparetdev@gmail.com`. 

### Características del formulario:
- **Validación**: Todos los campos son requeridos
- **Estados de carga**: Muestra spinner durante el envío
- **Feedback**: Mensajes de éxito y error
- **Reset automático**: Limpia el formulario tras envío exitoso

### Parámetros del template de EmailJS:
- `from_name`: Nombre del contacto
- `from_email`: Email del contacto
- `message`: Mensaje del contacto
- `to_email`: Tu email (robertoparetdev@gmail.com)

## 🚀 Despliegue

### Vercel (Recomendado)
1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Sigue las instrucciones
4. Configura las variables de entorno en el dashboard de Vercel

### Netlify
1. Construye el proyecto: `npm run build`
2. Arrastra la carpeta `dist` a Netlify
3. Configura las variables de entorno en el dashboard

## 🎨 Personalización

### Colores y Estilos
Los estilos están definidos en `src/index.css` usando Tailwind CSS v4. Los colores principales son:
- **Gradientes**: De azul a púrpura y rosa
- **Fondo**: Degradado de gris oscuro
- **Texto**: Blanco con acentos de color

### Contenido
Todos los textos se pueden modificar directamente en los componentes:
- **Información personal**: `About.tsx`
- **Habilidades**: `Skills.tsx`
- **Servicios**: `Solutions.tsx`
- **Aficiones**: `Hobbies.tsx`

## 🔗 Enlaces Importantes

- **Galería de Fotografías**: [robert-s-camera-perspective.vercel.app](https://robert-s-camera-perspective.vercel.app/)
- **Instagram**: [@robertdev_](https://instagram.com/robertdev_)
- **Email**: robertoparetdev@gmail.com

## 📄 Licencia

Este proyecto es privado y pertenece a Roberto Paret.

## 🆘 Soporte

Si necesitas ayuda con la configuración o tienes algún problema:
1. Revisa que todas las variables de entorno estén configuradas
2. Verifica que EmailJS esté correctamente configurado
3. Comprueba la consola del navegador para errores

---

**Desarrollado con ❤️ por Roberto Paret**
- **Optimizado**: Rendimiento optimizado con Vite

## 📋 Secciones

1. **Hero**: Presentación principal con llamadas a la acción
2. **Sobre Mí**: Información personal y presentación profesional
3. **Habilidades**: Tecnologías y herramientas con niveles de competencia
4. **Soluciones**: Servicios ofrecidos y proyectos destacados
5. **Hobbies**: Pasiones personales con enlace especial a galería de fotografía
6. **Contacto**: Formulario de contacto y información de contacto
7. **Footer**: Enlaces sociales y información adicional

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18, TypeScript, Vite
- **Estilos**: Tailwind CSS, CSS personalizado
- **Iconos**: Lucide React
- **Herramientas**: ESLint, PostCSS

## 🎨 Características de Diseño

- **Tema Oscuro**: Paleta de colores en tonos slate con gradientes azul-morado-rosa
- **Animaciones**: Transiciones suaves y efectos de hover
- **Gradientes**: Texto con gradientes coloridos y efectos visuales atractivos
- **Mobile First**: Diseño pensado primero para dispositivos móviles

## 🚀 Desarrollo

### Prerequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

```bash
# Navegar al directorio
cd Portafolio-Roberto

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Vista previa de la construcción
npm run preview

# Linting
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección hero
│   ├── About.tsx       # Sobre mí
│   ├── Skills.tsx      # Habilidades
│   ├── Solutions.tsx   # Soluciones y proyectos
│   ├── Hobbies.tsx     # Hobbies y pasiones
│   ├── Contact.tsx     # Contacto
│   └── Footer.tsx      # Pie de página
├── App.tsx             # Componente principal
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales
```

## 🎯 Características Especiales

### Sección de Hobbies
- **Fotografía Destacada**: Sección especial dedicada a la pasión por la fotografía
- **Enlace a Galería**: Conexión directa con la galería de fotos en [galeriad.vercel.app](https://galeriad.vercel.app)
- **Diseño Atractivo**: Layout especial para destacar la fotografía como hobby principal

### Contacto y Redes Sociales
- **Formulario Funcional**: Validación y manejo de estados
- **Enlaces Sociales**: LinkedIn, GitHub, Instagram (@robertdev_)
- **Información de Contacto**: Email, teléfono y ubicación

## 🔗 Enlaces Importantes

- **Galería de Fotos**: [https://galeriad.vercel.app](https://galeriad.vercel.app)
- **Instagram**: [@robertdev_](https://instagram.com/robertdev_)

## 📱 Responsividad

El portafolio está completamente optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Escritorio (1024px+)
- 🖥️ Pantallas grandes (1280px+)

## 🚀 Despliegue

El proyecto está listo para desplegarse en:
- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Cualquier hosting estático**

### Configuración de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Seguir las instrucciones
```

## 📄 Licencia

Este proyecto es privado y pertenece a Roberto.

---

**Desarrollado con ❤️ y mucho café ☕**

*"La diversidad de intereses alimenta la innovación"* ✨
