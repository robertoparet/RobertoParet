# 🚀 Configuración Rápida de EmailJS - Solución al Error 400

## 🔍 Diagnóstico del Problema

El error **400** que estás viendo significa que EmailJS está rechazando la petición porque las credenciales en tu archivo `.env` son placeholders y no las credenciales reales.

## ⚡ Solución Rápida (5 minutos)

### Paso 1: Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en **"Sign Up"** 
3. Usa tu cuenta de Gmail para registrarte rápidamente

### Paso 2: Configurar Gmail Service
1. En el dashboard, ve a **"Email Services"**
2. Clic en **"Add New Service"**
3. Selecciona **"Gmail"**
4. Conecta tu cuenta gmail que recibirá los emails
5. **Copia el Service ID** (algo como `service_abc123`)

### Paso 3: Crear Email Template
1. Ve a **"Email Templates"**
2. Clic en **"Create New Template"**
3. Configura:
   - **Subject**: `Nuevo mensaje desde portfolio - {{from_name}}`
   - **To Email**: `robertoparetdev@gmail.com`
   - **Content**:
   ```
   Nombre: {{from_name}}
   Email: {{from_email}}
   Mensaje: {{message}}
   ```
4. **Copia el Template ID** (algo como `template_xyz789`)

### Paso 4: Obtener Public Key
1. Ve a **"Account"** → **"General"**
2. **Copia tu Public Key** (algo como `abcdef123456`)

### Paso 5: Actualizar tu .env
Edita el archivo `.env` en tu proyecto:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789  
VITE_EMAILJS_PUBLIC_KEY=abcdef123456
```

**¡IMPORTANTE!** Reemplaza los valores de ejemplo con tus valores reales.

### Paso 6: Reiniciar el servidor
En la terminal:

```powershell
# Detener el servidor (Ctrl+C)
# Luego reiniciar:
npm run dev
```

## 🧪 Probar el Formulario

1. Ve a http://localhost:5173
2. Navega a la sección "Contacto"
3. Llena el formulario
4. Envía el mensaje
5. Revisa la consola del navegador (F12) para ver los logs
6. Verifica que llegue el email a `robertoparetdev@gmail.com`

## 🔧 Debugging Adicional

He actualizado el código para que muestre mejor información de debug. Ahora verás en la consola:

- ✅ Si las credenciales están configuradas correctamente
- ❌ Qué credencial específica falta o está mal configurada
- 📝 Información de la petición que se envía

## 🚨 Errores Comunes y Soluciones

### Error: "VITE_EMAILJS_SERVICE_ID no está configurado"
- Verifica que el archivo `.env` esté en la raíz del proyecto
- Asegúrate que no hay espacios extra en el valor

### Error: "Invalid service"
- Confirma que el Service ID sea correcto
- Verifica que el servicio de Gmail esté conectado en EmailJS

### Error: "Invalid template"
- Asegúrate que el Template ID sea correcto
- Verifica que el template esté guardado (no en borrador)

### Error: "Invalid public key"
- Confirma que la Public Key sea la correcta
- No debe tener espacios al inicio o final

## 📞 Si Sigues Teniendo Problemas

1. **Revisa la consola del navegador** (F12 → Console) para ver mensajes específicos
2. **Verifica en EmailJS** que todos los elementos estén activos
3. **Prueba con un template simple** primero
4. **Contacta** si necesitas ayuda adicional

---

**Una vez configurado correctamente, el formulario enviará emails directamente a `robertoparetdev@gmail.com` sin problemas.**

**⏱️ Tiempo total: 5-10 minutos** 
