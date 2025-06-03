# 🚨 URGENT: Fix EmailJS Configuration

## 🎯 Current Problem

Your `.env` file has placeholder values instead of real EmailJS credentials. The error message confirms this:

```
"The Public Key is invalid. To find this ID, visit https://dashboard.emailjs.com/admin/account"
```

## ⚡ Quick Fix (10 minutes)

### 1. Create EmailJS Account
- Go to: https://dashboard.emailjs.com/admin/account
- Sign up with your Gmail account
- Verify your email

### 2. Set Up Gmail Service  
- Dashboard → **"Email Services"**
- Click **"Add New Service"**
- Select **"Gmail"** 
- Connect your Gmail account
- **COPY the Service ID** (example: `service_abc1234`)

### 3. Create Email Template
- Go to **"Email Templates"**
- Click **"Create New Template"**
- Configure:
  - **To Email**: `robertoparetdev@gmail.com`
  - **Subject**: `Nuevo mensaje desde portfolio - {{from_name}}`
  - **Content**: 
  ```
  Nombre: {{from_name}}
  Email: {{from_email}}
  Mensaje: {{message}}
  ```
- Save the template
- **COPY the Template ID** (example: `template_xyz5678`)

### 4. Get Public Key
- Go to **"Account"** → **"General"**
- Find **"API Keys"** section  
- **COPY your Public Key** (example: `AbCdEfGhIjKlMnOpQr`)

### 5. Update .env File

Replace the placeholder text in your `.env` file with your REAL values:

```env
# Replace these with your actual EmailJS values:
VITE_EMAILJS_SERVICE_ID=service_your_real_id
VITE_EMAILJS_TEMPLATE_ID=template_your_real_id
VITE_EMAILJS_PUBLIC_KEY=your_real_public_key
```

### 6. Restart Server

In PowerShell:
```powershell
# Stop current server (Ctrl+C)
npm run dev
```

### 7. Test

1. Go to http://localhost:5174
2. Open console (F12)
3. Fill contact form and submit
4. Should see: `Enviando email con: { serviceID: 'service_abc123', ... }`
5. Check email at robertoparetdev@gmail.com

## 🔍 How to Know It's Working

**Before (current):**
```
Error: The Public Key is invalid
```

**After (success):**
```
✅ Green success message
✅ Form clears automatically  
✅ Email arrives at robertoparetdev@gmail.com
```

## ⏱️ Timeline
- EmailJS setup: 8 minutes
- Testing: 2 minutes
- **Total: 10 minutes**

---

**The form is ready to work - you just need real EmailJS credentials instead of placeholder text!**
