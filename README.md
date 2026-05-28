# PSV Clinic — Premium Hospital Website

A full-stack modern hospital website built with React + Vite + Firebase.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open http://localhost:3000

### 3. Build for production
```bash
npm run build
npm run preview
```

---

## 🔐 Admin Panel

URL: `/admin/login`

| Field | Value |
|-------|-------|
| Username | `vidhul` |
| Password | `0211` |

> On first login, the admin account is auto-created in Firebase Authentication.

Admin features:
- Dashboard overview (appointments, doctors, messages)
- Manage appointments (view, confirm, cancel, delete)
- Manage doctors (add, edit, delete)
- Manage services (add, edit, delete)
- View contact messages
- Edit site settings & contact info

---

## 🌐 Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/doctors` | Doctors |
| `/services` | Services |
| `/appointment` | Book Appointment |
| `/contact` | Contact |
| `/admin/login` | Admin Login |
| `/admin` | Admin Dashboard |

---

## 🔥 Firebase Setup

The Firebase config is already included in `src/firebase/config.js`.

Enable these in your Firebase console:
1. **Authentication** → Email/Password (for admin login)
2. **Firestore Database** → Create in test mode
3. **Storage** → Create bucket

### Firestore Collections (auto-created on use):
- `appointments`
- `doctors`
- `services`
- `testimonials`
- `contact_messages`
- `settings`

---

## 📦 Tech Stack

- **React 18** + Vite
- **Tailwind CSS** — styling
- **Framer Motion** — animations
- **React Router v6** — routing
- **Firebase** — auth, Firestore, Storage
- **Swiper** — testimonials slider
- **React CountUp** — animated counters
- **React Hot Toast** — notifications
- **React Icons** — icon library

---

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Sticky animated navbar
- ✅ Smooth scroll & page transitions
- ✅ Hero with animated SVG illustration
- ✅ Animated stat counters
- ✅ Services & doctors preview
- ✅ Testimonials auto-slider
- ✅ Emergency contact banner
- ✅ Working appointment form → Firebase
- ✅ Contact form → Firebase
- ✅ Floating WhatsApp button
- ✅ Google Maps embed
- ✅ Full admin dashboard
- ✅ SEO meta tags & Open Graph

---

## 🚀 Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

---

## WhatsApp Integration

Update the phone number in `src/components/common/WhatsAppFloat.jsx`:
```js
const phone = '919999999999'; // Change to your WhatsApp number
```

---

© 2024 PSV Clinic. All rights reserved.
