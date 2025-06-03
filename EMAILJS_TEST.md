# 🧪 Test Your EmailJS Configuration

## Quick Test Steps

### 1. After Getting Your Credentials

Replace the values in your `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=service_YOUR_REAL_ID
VITE_EMAILJS_TEMPLATE_ID=template_YOUR_REAL_ID  
VITE_EMAILJS_PUBLIC_KEY=YOUR_REAL_PUBLIC_KEY
```

### 2. Restart the Server

In PowerShell:
```powershell
# Stop the current server (Ctrl+C in the terminal)
# Then restart:
npm run dev
```

### 3. Test the Form

1. Go to http://localhost:5174 (or whatever port is shown)
2. Open browser console (F12 → Console)
3. Fill out the contact form with test data:
   - **Name**: Test User
   - **Email**: test@example.com  
   - **Message**: This is a test message
4. Click "Enviar mensaje"

### 4. Check Results

**In the browser console, you should see:**
```
Enviando email con: { serviceID: 'service_abc123', templateID: 'template_xyz789', publicKey: 'abcDEF123456...' }
```

**If successful:**
- ✅ Green success message appears
- ✅ Form fields clear automatically
- ✅ Email arrives at robertoparetdev@gmail.com within 1-2 minutes

**If still getting errors:**
- ❌ Check that Service ID is correct and service is active in EmailJS
- ❌ Check that Template ID is correct and template is saved (not draft)
- ❌ Check that Public Key is correct (no extra spaces)

### 5. Email Template Variables

Your EmailJS template should use these variables:
- `{{from_name}}` - The sender's name
- `{{from_email}}` - The sender's email  
- `{{message}}` - The message content

### 6. Troubleshooting Common Issues

**Error: "Invalid service"**
- Service ID is wrong or service is not active
- Make sure Gmail service is properly connected

**Error: "Invalid template"**  
- Template ID is wrong or template is still in draft
- Make sure template is saved and published

**Error: "Invalid public key"**
- Public key is wrong or has extra characters
- Copy it exactly from EmailJS dashboard

**Error: "Access denied"**
- Gmail authorization might have expired
- Reconnect your Gmail account in EmailJS

---

**Once working, every form submission will send an email to `robertoparetdev@gmail.com` with the contact details! 📧**
