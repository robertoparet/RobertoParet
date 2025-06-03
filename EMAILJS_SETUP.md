# Guía de Configuración EmailJS

Esta guía te ayudará a configurar EmailJS paso a paso para que el formulario de contacto de tu portfolio funcione correctamente.

## 📋 Requisitos Previos

- Una cuenta de Gmail (recomendado)
- Acceso al archivo `.env` del proyecto

## 🔧 Configuración Paso a Paso

### 1. Crear Cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en **"Sign Up"**
3. Crea tu cuenta con Gmail (recomendado) o email
4. Verifica tu email si es necesario
5. Inicia sesión en tu dashboard

### 2. Configurar Servicio de Email

1. En el dashboard de EmailJS, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona **"Gmail"** como proveedor
4. Haz clic en **"Connect Account"**
5. Autoriza a EmailJS acceso a tu cuenta de Gmail
6. Una vez conectado, verás tu **Service ID** (guárdalo)

### 3. Crear Template de Email

1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura el template con estos datos:

#### Configuración del Template:

**To Email:** `robertoparetdev@gmail.com`

**Subject:** `Nuevo mensaje desde tu portfolio - {{from_name}}`

**Content (HTML):**
```html
<p>Has recibido un nuevo mensaje desde tu portfolio:</p>

<h3>Información del contacto:</h3>
<ul>
  <li><strong>Nombre:</strong> {{from_name}}</li>
  <li><strong>Email:</strong> {{from_email}}</li>
</ul>

<h3>Mensaje:</h3>
<div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
  {{message}}
</div>

<hr>
<p style="color: #666; font-size: 12px;">
  Este mensaje fue enviado desde tu portfolio web el {{date}}.
</p>
```

4. Haz clic en **"Save"**
5. Copia el **Template ID** que se genera

### 4. Obtener Public Key

1. Ve a **"Account"** en el menú lateral
2. Selecciona **"General"**
3. En la sección **"API Keys"**, copia tu **Public Key**

### 5. Configurar Variables de Entorno

Edita el archivo `.env` en la raíz de tu proyecto:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

**Importante:** Reemplaza las 'x' con tus valores reales obtenidos en los pasos anteriores.

### 6. Reiniciar el Servidor de Desarrollo

Después de configurar las variables de entorno:

```bash
# Detener el servidor (Ctrl+C si está corriendo)
# Luego reiniciar:
npm run dev
```

## ✅ Verificar la Configuración

1. Abre tu portfolio en el navegador
2. Ve a la sección de contacto
3. Llena el formulario con datos de prueba
4. Envía el mensaje
5. Revisa tu email (robertoparetdev@gmail.com) para confirmar que llegó

## 🚨 Solución de Problemas

### El formulario no envía emails

1. **Verifica las variables de entorno:**
   - Asegúrate que el archivo `.env` esté en la raíz del proyecto
   - Confirma que los valores sean correctos (sin comillas extra)
   - Reinicia el servidor después de cambiar las variables

2. **Revisa la consola del navegador:**
   - Abre las herramientas de desarrollador (F12)
   - Ve a la pestaña "Console"
   - Busca errores relacionados con EmailJS

3. **Verifica la configuración de EmailJS:**
   - Asegúrate que el servicio de Gmail esté conectado
   - Confirma que el template esté guardado correctamente
   - Verifica que tu Public Key sea válida

### Error "Invalid template ID"

- Asegúrate que el Template ID sea correcto
- Verifica que el template esté publicado (no en borrador)

### Error "Invalid service ID"

- Confirma que el Service ID sea el correcto
- Asegúrate que el servicio de Gmail esté activo

### Error "Invalid public key"

- Verifica que la Public Key sea la correcta
- Asegúrate que no haya espacios extra al copiarla

## 📊 Límites del Plan Gratuito

EmailJS plan gratuito incluye:
- **200 emails por mes**
- **2 servicios de email**
- **1 template**

Para uso personal del portfolio, esto es más que suficiente.

## 🔒 Seguridad

- ✅ Las variables de entorno están configuradas correctamente
- ✅ La Public Key es segura para usar en el frontend
- ✅ EmailJS maneja la autenticación de forma segura
- ✅ Tu email personal está protegido

## 📞 Soporte Adicional

Si sigues teniendo problemas:

1. **Documentación oficial:** [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. **FAQ de EmailJS:** [https://www.emailjs.com/docs/faq/](https://www.emailjs.com/docs/faq/)
3. **Soporte de EmailJS:** Contacta a través de su sitio web

---

Una vez completada esta configuración, tu formulario de contacto enviará emails directamente a `robertoparetdev@gmail.com` cada vez que alguien envíe un mensaje desde tu portfolio.

**¡Tu formulario de contacto está listo para funcionar! 🚀**
