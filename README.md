# 🛡️ پلیس ایران — Police Website

<div dir="rtl">

وب‌سایت مدرن و واکنش‌گرای فرماندهی انتظامی (پلیس) به زبان فارسی با چینش راست‌به‌چپ (RTL).

</div>
### Desktop
<img width="1905" height="790" alt="police" src="https://github.com/user-attachments/assets/f0d1bfbb-f5ba-4fb4-9274-15ffdb9f0547" />


### Mobile
<img width="295" height="382" alt="mobile_wal" src="https://github.com/user-attachments/assets/003e9b84-3fab-412f-a337-e77ec48ec698" />

A modern, responsive **Persian (Farsi) law enforcement (police) website** with full RTL layout, built with **React**, **TypeScript**, and **Tailwind CSS**. Designed with a focus on secure, professional, and trustworthy UI.

---

## ✨ Features

### 🎨 Design
- **Fully Persian (Farsi)** with **RTL layout** throughout
- **Dark / Light mode** toggle with preference persisted in `localStorage`
- Professional, trustworthy color scheme (navy blue + shield/lock iconography)
- Strong visual hierarchy, high contrast, subtle animations & micro-interactions
- **Mobile-first** responsive design — works seamlessly from phone to desktop
- Vazirmatn Persian font

### 🔐 Authentication (Client-Side Mock)
- Simple **Login** and **Register** pages with mock auth via `localStorage`
- **Protected routes** — users must be logged in to access the Report Incident form
- Automatic redirect to login screen for unauthenticated visitors
- Logged-in users see their name in the navbar with a logout option

### 📄 Pages
| Page | Description |
|------|-------------|
| **Home** (خانه) | Hero section, quick services grid, latest news, emergency contact card |
| **Services** (خدمات) | Full list of police services + step-by-step process guide |
| **News** (اخبار) | Category-filtered news with live search |
| **Contact** (تماس) | Contact info cards + message form |
| **Login** (ورود) | Standalone auth page with secure gradient background |
| **Register** (ثبت‌نام) | Account creation page |
| **Report Incident** (گزارش حادثه) | Protected form with validation |

### 📝 Report Incident Form
The protected report form includes the following Persian fields:
- **نام** (First Name) — required, min 2 chars
- **نام خانوادگی** (Last Name) — required, min 2 chars
- **کد ملی** (National ID) — required, exactly 10 digits
- **شماره تلفن** (Phone) — required, 11 digits starting with `09`
- **مکان سرقت** (Location) — required, min 5 chars
- **توضیحات** (Description) — optional

**Validation features:**
- Persian & English digit support (users can type in either numeral system)
- Clear error messages in Persian
- Submit button **disabled** until the form is valid
- Success screen with a generated tracking code

### ⚙️ Tech & CI/CD
- **React 18** + **TypeScript** + **Tailwind CSS** + **React Router**
- No backend — purely client-side
- **GitHub Actions** CI workflow (lint + typecheck + build on push/PR)
- Clean, minimal code

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Run lint
npm run lint

# Run type checking
npm run typecheck
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling & theming |
| React Router | Client-side routing |
| Lucide React | Icons |
| Vite | Build tool & dev server |

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── Logo.tsx
│   ├── Navbar.tsx
│   ├── PageHeader.tsx
│   ├── ProtectedRoute.tsx
│   ├── ScrollToTop.tsx
│   └── ThemeToggle.tsx
├── context/             # React contexts
│   ├── AuthContext.tsx   # Mock auth state
│   └── ThemeContext.tsx  # Dark/light mode
├── data/
│   └── content.ts        # Services, news, contact data
├── pages/               # Route pages
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── News.tsx
│   ├── Contact.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   └── ReportIncident.tsx
├── types/
│   └── index.ts          # Shared TypeScript interfaces
├── App.tsx               # Router & providers
└── index.css             # Tailwind + custom styles
```

---

## 🔒 Security Notes

This is a **front-end-only** demo project. Authentication is mock (localStorage-based) and not suitable for production use. In a real deployment:
- Use a proper backend authentication system
- Store sensitive data in a secure database
- Implement server-side validation for all form submissions

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div dir="rtl">

ساخته‌شده با تمرکز بر امنیت و اعتماد شهروندان 🛡️

</div>
