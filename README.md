# Coding-Ninja
# CodeNinjas – Coding Platform UI (React + Vite + Tailwind)

An educational, **Coding Ninjas–style** coding platform UI built with **React, Vite, Tailwind CSS, and React Router**.

> ⚠️ This is **not** the official Coding Ninjas website.  
> It’s a custom learning project inspired by the structure & feel of a modern coding-education platform.

---

## ✨ Features

- **Modern tech stack**
  - React 18 + Vite
  - Tailwind CSS
  - React Router for SPA navigation

- **Pages**
  - `/` – Home (hero section, stats, highlights)
  - `/courses` – Courses catalog UI
  - `/practice` – DSA practice problems UI
  - `*` – 404 Not Found page

- **Components**
  - Responsive **Navbar** and **Footer**
  - Hero + stats section
  - Course cards/grid
  - Practice problems list with difficulty & status tags

- **Ready for extension**
  - Easy to plug in real data / API
  - You can add Course Details, Auth, Dashboard, etc.

---

## 🧱 Project Structure

```txt
.
├─ index.html
├─ package.json
├─ vite.config.(js/ts)
├─ tailwind.config.cjs
├─ postcss.config.cjs
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   ├─ components/
   │  ├─ layout/
   │  │  ├─ Navbar.jsx
   │  │  └─ Footer.jsx
   │  └─ ... (more components can be added)
   ├─ pages/
   │  ├─ Home.jsx
   │  ├─ Courses.jsx
   │  ├─ Practice.jsx
   │  └─ NotFound.jsx
   └─ assets/
      └─ (images / icons if you add them)
