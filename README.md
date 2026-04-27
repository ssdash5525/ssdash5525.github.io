# Personal Website — Shashanka Shekhar Dash

A minimal, data-driven academic website built using plain HTML, CSS, and JavaScript.  
All core content is centrally managed via a single configuration file, enabling easy updates across the entire site.

---

## 🚀 Overview

This website is designed to:
- Present academic profile, research, and publications
- Maintain a clean CV-style layout
- Support a gallery with filtering and lightbox
- Include a lightweight blog system
- Allow updates without editing multiple files

---

## 📁 Project Structure

```

.
├── index.html          # Homepage
├── about.html          # About + Education
├── research.html       # Research areas
├── publications.html   # Publications list
├── gallery.html        # Photo gallery (filter + lightbox)
├── cv.html             # Curriculum Vitae
├── blog.html           # Blog index
├── contact.html        # Contact page
│
├── data.js             # ⭐ CENTRAL CONTENT FILE (edit this)
├── layout.js           # Shared navbar + footer
├── style.css           # Global styling
│
├── assets/             # Images and media
│   ├── profile_pic.jpg
│   ├── *.jpg
│
└── posts/              # Individual blog posts
└── gromacs-plumed-installation.html

````

---

## ✏️ How to Update Content

### 1. Main Content (Single Source of Truth)

Edit:

```js
data.js
````

This file controls:

* Personal details (name, role, institute)
* CV sections (education, experience, awards, references)
* Publications
* Gallery images
* Blog entries
* Contact links

---

### 2. Adding Gallery Images

In `data.js`:

```js
gallery: [
  {
    src: "assets/image.jpg",
    caption: "Description",
    category: "Professional", // Professional | Personal | Others
    date: "2025-12",          // optional (used for sorting)
    focus: "50% 30%"          // optional (image positioning)
  }
]
```

**Notes:**

* Images render in array order unless sorting is implemented
* Missing `date` → treated as pinned (appears first)

---

### 3. Adding Blog Posts

1. Create a new file inside:

```
/posts/
```

2. Register it in `data.js`:

```js
posts: [
  {
    title: "Your Title",
    file: "posts/your-file.html",
    date: "2026-04"
  }
]
```

---

### 4. Updating CV Sections

Modify relevant fields in `data.js`:

* `cvObjective`
* `cvExperience`
* `cvTeaching`
* `cvAwards`
* `cvReferences`

Example:

```js
cvReferences: [
  {
    name: "Dr. Mithun Biswas",
    role: "PhD Supervisor",
    org: "NIT Rourkela",
    email: "biswasm@nitrkl.ac.in"
  }
]
```

---

## ⚙️ How It Works

* `data.js` → central data source
* HTML pages dynamically render content using JavaScript
* `layout.js` injects shared components (navbar, footer)
* Fully static — no frameworks or build tools required

---

## 🌐 Deployment

### GitHub Pages (Recommended)

1. Push repository to:

```
username.github.io
```

2. Enable Pages:

* Go to **Settings → Pages**
* Select branch: `main`
* Root directory: `/`

---

### Alternative Hosting

Deploy to any static hosting platform:

* Netlify
* Vercel
* Traditional web hosting (cPanel)

---

## 🧠 Design Philosophy

* Minimal dependencies
* Centralized data management
* Academic-first layout
* Easy maintenance across multiple devices

---

## ⚠️ Common Pitfalls

* Editing HTML instead of `data.js`
* Incorrect file paths (`assets/...`)
* Missing images in `/assets`
* Leaving empty fields causing layout gaps

---

## 🔧 Possible Enhancements

* Date-based gallery sorting
* Persistent dark mode across pages
* Markdown-based blog system
* CMS or JSON backend integration

---

## 📄 License

Free to use and modify for personal academic websites.

---

## 🤝 Acknowledgment

Developed and maintained by
**Shashanka Shekhar Dash**
PhD Research Scholar, NIT Rourkela

```
