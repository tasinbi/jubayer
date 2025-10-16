# 🚀 Quick Setup Guide

## ১. EmailJS Install করুন:

```bash
npm install @emailjs/browser
```

## ২. EmailJS Setup করুন:

### A. EmailJS Account তৈরি করুন:
1. https://www.emailjs.com/ এ যান
2. "Sign Up" এ ক্লিক করুন
3. Account তৈরি করুন (Free)

### B. Email Service যোগ করুন:
1. Dashboard → "Email Services" → "Add New Service"
2. Gmail/Outlook/Yahoo যেকোনো একটি সিলেক্ট করুন
3. "Connect Account" করুন
4. **Service ID** কপি করুন

### C. Email Template তৈরি করুন:
1. Dashboard → "Email Templates" → "Create New Template"
2. Template Name: "Portfolio Contact Form"
3. Template এ এই variables যোগ করুন:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email

Example Template:
```
New Contact Form Submission

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from Portfolio Website
```

4. "Save" করুন এবং **Template ID** কপি করুন

### D. Public Key নিন:
1. Dashboard → "Account" → "General"
2. "Public Key" কপি করুন

### E. Contact.tsx আপডেট করুন:
```typescript
// src/components/Contact.tsx (Line 37-39)
const serviceId = 'YOUR_SERVICE_ID';        // ← এখানে আপনার Service ID
const templateId = 'YOUR_TEMPLATE_ID';      // ← এখানে আপনার Template ID
const publicKey = 'YOUR_PUBLIC_KEY';        // ← এখানে আপনার Public Key
```

---

## ৩. Development Server চালান:

```bash
npm run dev
```

Browser এ খুলুন: `http://localhost:5173`

---

## ৪. Features Test করুন:

### ✅ Dark/Light Mode:
- Header এর sun/moon icon এ ক্লিক করুন
- Theme change হচ্ছে কিনা দেখুন
- Page reload করে check করুন (theme save হয়েছে কিনা)

### ✅ Contact Form:
1. Contact section এ scroll করুন
2. Form fill করুন
3. "Send Message" ক্লিক করুন
4. Success message দেখুন
5. আপনার email check করুন

### ✅ Project Filtering:
1. Projects section এ যান
2. Category buttons ক্লিক করুন
3. Search box এ type করুন
4. Technology tags এ ক্লিক করুন
5. "Clear All" button test করুন

### ✅ Testimonials:
1. Testimonials section এ scroll করুন
2. Left/Right arrows ক্লিক করুন
3. Dots indicator ক্লিক করুন
4. Card এ swipe করুন (mobile এ)

### ✅ WhatsApp Button:
- নিচে ডানদিকে floating WhatsApp button দেখুন
- Click করুন (WhatsApp chat খুলবে)

---

## ৫. Customization:

### A. Personal Info আপডেট:
```typescript
// src/data/portfolio.ts

export const personalInfo = {
  name: "Your Name",              // ← আপনার নাম
  email: "your@email.com",        // ← আপনার email
  phone: "+880 1234567890",       // ← আপনার phone
  // ... বাকি info
};
```

### B. Testimonials পরিবর্তন:
```typescript
// src/components/Testimonials.tsx (Line 15-70)

const testimonials = [
  {
    name: "Client Name",
    role: "Position",
    company: "Company Name",
    image: "photo-url",
    rating: 5,
    text: "Testimonial text...",
  },
  // আরো testimonials যোগ করুন
];
```

### C. Projects যোগ/পরিবর্তন:
```typescript
// src/data/portfolio.ts

export const projects = [
  {
    title: "Project Name",
    description: "Short description",
    image: "project-image-url",
    technologies: ["React", "Node.js"],
    liveUrl: "https://...",
    githubUrl: "https://...",
    featured: true,
    category: "web",
  },
  // আরো projects যোগ করুন
];
```

### D. Logo & Favicon পরিবর্তন:
```
/public/logo.png       ← আপনার logo
/public/favicon.png    ← আপনার favicon
/public/favicon.ico    ← favicon (.ico format)
```

### E. Profile Photo:
```
/public/profile-photo.jpg  ← আপনার photo (square, 800x800px recommended)
```

---

## ৬. Build for Production:

```bash
npm run build
```

Output: `/dist` folder

---

## ৭. Deploy করুন:

### Netlify:
1. Netlify.com এ account তৈরি করুন
2. "New site from Git" ক্লিক করুন
3. Repository connect করুন
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

### Vercel:
1. Vercel.com এ account তৈরি করুন
2. "Import Project" ক্লিক করুন
3. Repository select করুন
4. Auto-detect করবে
5. Deploy!

---

## 🆘 Common Issues:

### Issue: EmailJS কাজ করছে না
**Solution:**
- Service ID, Template ID, Public Key ঠিক আছে কিনা check করুন
- EmailJS dashboard এ email service connected কিনা verify করুন
- Browser console এ error দেখুন

### Issue: Theme save হচ্ছে না
**Solution:**
- Browser এর localStorage clear করুন
- Incognito mode এ test করুন
- Console এ error আছে কিনা দেখুন

### Issue: Images দেখাচ্ছে না
**Solution:**
- File path ঠিক আছে কিনা check করুন
- `/public` folder এ images আছে কিনা verify করুন
- Browser cache clear করুন

---

## 📦 Dependencies:

সব dependencies install করতে:
```bash
npm install
```

Individual packages:
```bash
npm install @emailjs/browser
npm install framer-motion
npm install react-router-dom
npm install react-icons
npm install react-intersection-observer
npm install react-type-animation
```

---

## ✨ সম্পূর্ণ!

এখন আপনার পোর্টফোলিও সম্পূর্ণ functional এবং production-ready! 🎉

**Next Steps:**
1. Personal info customize করুন
2. Projects যোগ করুন
3. Testimonials আপডেট করুন
4. EmailJS setup করুন
5. Deploy করুন

**Need Help?**
- EmailJS Documentation: https://www.emailjs.com/docs/
- Framer Motion: https://www.framer.com/motion/
- React Icons: https://react-icons.github.io/react-icons/

---

**Happy Coding! 🚀**
