# EmailJS Setup Guide

Follow these steps to set up EmailJS for your contact form:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down your **Template ID** (e.g., "template_xyz789")

## Step 4: Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (e.g., "user_def456")

## Step 5: Update Configuration
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const emailjsConfig = {
  serviceId: 'service_abc123', // Your Service ID
  templateId: 'template_xyz789', // Your Template ID
  publicKey: 'user_def456', // Your Public Key
}
```

## Step 6: Test the Form
1. Save all files
2. Run your development server: `npm run dev`
3. Navigate to the contact section
4. Fill out and submit the form
5. Check your email inbox for the message

## Troubleshooting
- Make sure all IDs are correct and match your EmailJS dashboard
- Check the browser console for any error messages
- Verify your email service is properly connected in EmailJS
- Ensure your template variables match the ones used in the code

## Free Tier Limits
- EmailJS free tier allows 200 emails per month
- For higher volumes, consider upgrading to a paid plan

## Security Note
The public key is safe to use in frontend code as it's designed for client-side usage.