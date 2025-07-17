# 🧠 RD Learning Planet – Coaching Website

---

## 🌐 Website Theme & Style Guide

**🎨 General Theme (Based on Logo & Branding)**
- **Primary Color:** #0f172a (dark navy)
- **Accent Colors:** #22d3ee (cyan), #f97316 (orange), #ffffff (white), #1e293b (secondary dark)
- **Font:** Poppins, fallback to sans-serif
- **UI Style:** Minimal, elegant, modern with soft animations and toasts
- **Base Design:** Tailwind utility classes + supporting UI libraries

---

## 📄 Page-wise Design & Library Mapping

### ✅ index.html — Landing Page
| Feature         | Description                                                        |
| -------------- | ------------------------------------------------------------------ |
| Background     | Gradient background from-[#0f172a] to-[#1e293b]                    |
| UI/UX Libraries| Tailwind CSS, AOS, Animate.css, WOW.js                             |
| JS Libraries   | Typed.js, Anime.js, Notyf, ScrollReveal                            |
| Purpose        | First impression, CTA, overview, banner carousel, highlights       |

### ✅ about.html — About Coaching & Founder
| Feature         | Description                                                        |
| -------------- | ------------------------------------------------------------------ |
| Background     | Solid color #0f172a with cards on white background (bg-white text-black) |
| UI/UX Libraries| Bootstrap, Flexbox Grid, Milligram, Animate.css                    |
| JS Libraries   | ScrollReveal, WOW.js, AOS, Tippy.js                                |
| Purpose        | Deep dive into Mr. Deepak Pandey, other teachers, vision, locations, reviews |

### ✅ courses.html — Subjects & Services
| Feature         | Description                                                        |
| -------------- | ------------------------------------------------------------------ |
| Background     | Alternating dark/light sections. Sections per class (6–8, 9–10, 11–12, etc.) |
| UI/UX Libraries| Bulma, UIkit, Hover.css, Spectre.css, W3.CSS                       |
| JS Libraries   | AOS, jQuery UI, Chart.js (to show subject popularity or outcomes)   |
| Purpose        | List of subjects, streams, fees, special classes, entrance coaching |

### ✅ stationary.html — RD Stationary
| Feature         | Description                                                        |
| -------------- | ------------------------------------------------------------------ |
| Background     | Light cyan or white with clean card-based layout                    |
| UI/UX Libraries| Materialize, Skeleton, Pure.css, Normalize.css, Tooltipster         |
| JS Libraries   | Tooltipster, SweetAlert2, Popper.js, Micromodal.js                 |
| Purpose        | Showcasing stationery items with icons, prices, offers, photos      |

### ✅ contact.html — Contact & Form
| Feature         | Description                                                        |
| -------------- | ------------------------------------------------------------------ |
| Background     | Full-width map/banner with form box overlay or side                 |
| UI/UX Libraries| Bootstrap (grid layout), Tachyons, Normalize.css                   |
| JS Libraries   | JustValidate, Parsley.js, Cleave.js, Inputmask, Notyf              |
| Purpose        | Smooth, animated, accessible form with real-time validation and success toast |

---

## 🌟 Global Libraries (in /css/libraries.css and /js/libraries.js)

**CSS Libraries:**
Tailwind CSS, Bootstrap, Bulma, Materialize, Metro 4, Skeleton, Milligram, Pure.css, Spectre.css, Tachyons, W3.CSS, Normalize.css, Animate.css, Hover.css, Magic.css, CSShake, AOS, AniJS, WOW.js, Tooltipster, Micromodal.css, Notyf

**JS Libraries:**
Typed.js, Anime.js, ScrollReveal, AOS, WOW.js, Notyf, Cleave.js, Inputmask, JustValidate, Parsley.js, SweetAlert2, Tooltipster, Tippy.js, Micromodal.js, Popper.js, FullCalendar, Chart.js, GSAP, Axios, Lodash, Day.js, UUID, CryptoJS

---

## 📂 File Placement Reference
| File/Folder         | Purpose                        |
| ------------------- | ------------------------------ |
| /css/main.css       | Your custom overrides          |
| /css/libraries.css  | CDNs or @imports of frameworks |
| /js/main.js         | Typed.js, Notyf, Typed animations |
| /js/validation.js   | JustValidate or Parsley init   |
| /js/animations.js   | Anime.js / GSAP / AOS config   |
| /assets/images/     | Your logo, posters, icons      |
| /assets/icons/      | Favicon and small UI assets    |

---

## 🚀 Website Overview

- 🎓 Coaching for Classes **1 to 12**, **BCA**, **B.Sc IT/CS**, **BBA**, and **Entrance Exams** like **Sainik School**, **Navodaya**, and **Pantnagar**
- 📍 Two centers located in **Halduchaur, Haldwani, Nainital (Uttarakhand)**
- 📚 Includes in-house **RD Stationary** at Center 1
- 🧑‍🏫 Owned & taught by **Mr. Deepak Pandey**
- 📱 Fully **responsive** and optimized for mobile, tablet, and desktop

---

## 🌐 Live Preview

> To be deployed using GitHub Pages or Netlify (optional link)

---

## 📁 Folder Structure

```
rd-learning-planet/
│
├── index.html           # Landing (Home) Page
├── about.html           # About the Coaching & Founder
├── courses.html         # Subjects, Entrance Prep, Extra Services
├── stationary.html      # RD Stationary section
├── contact.html         # Contact + Enquiry Form
│
├── assets/              # All static assets
│   ├── images/          # Logo, banners, gallery, faculty images
│   └── icons/           # Favicon and small UI assets
│
├── css/                 # Stylesheets
│   ├── main.css         # Custom styles
│   ├── libraries.css    # Imported: Tailwind, Bootstrap, AOS, etc.
│   ├── normalize.css    # Reset/normalize CSS
│   └── style.css        # Legacy/optional custom styles
│
├── js/                  # JavaScript files
│   ├── main.js          # Typed.js, animations, modals
│   ├── validation.js    # JustValidate/Parsley + Notyf
│   ├── animations.js    # AOS, GSAP, Anime.js
│   ├── aos.js           # AOS animations init (legacy/optional)
│   ├── form-validation.js # Form validation scripts (legacy/optional)
│   └── libraries.js     # JS loaders/libraries (legacy/optional)
│
├── fonts/               # Optional custom fonts
│
├── docs/                # Documentation or extra pages
│
├── .gitignore           # Git ignore rules
├── README.md            # Project documentation (this file)
└── ...                  # Other config or meta files
```

- **Main HTML pages** are at the root for easy access.
- **assets/** contains all images and icons, organized by type.
- **css/** and **js/** hold all styles and scripts, with clear separation of custom, library, and legacy files.
- **fonts/** is for any custom font files you may add.
- **docs/** is for extra documentation or static pages.
- **README.md** gives an overview and usage info for contributors.

---

## 📄 Pages Breakdown

### index.html (Home)
- Hero + Motto + Typed.js
- Highlights of coaching
- Call-to-action: Enroll Now

### about.html
- About Mr. Deepak Pandey
- Teachers' list with roles
- Center locations

### courses.html
- Class-wise subjects
- Higher education coaching
- Entrance prep
- Tuition modes
- Fees

### stationary.html
- RD Stationary shop
- Item categories
- Offers or discounts

### contact.html
- Contact form
- Embedded map (optional)
- Social/contact info

---

## 📚 Libraries Used Per Page

| Page            | Libraries Used                                     |
| --------------- | -------------------------------------------------- |
| index.html      | AOS, Typed.js, Anime.js, Tailwind, Notyf           |
| about.html      | Bootstrap, ScrollReveal, WOW.js                    |
| courses.html    | AOS, Spectre.css, Hover.css, Tippy.js              |
| contact.html    | JustValidate, Notyf, Parsley, Cleave.js, Inputmask |
| stationary.html | Animate.css, Tailwind, Tooltipster, SweetAlert2    |

---

## 📝 Detailed Page Structure & Libraries

### 🏠 index.html — Landing Page
**🎨 Purpose:**
Welcome users with a bold intro, overview of services, and call-to-action.

**🧩 Sections:**
- Hero Banner
  - Logo + Motto ("A great place for your success.")
  - Typed.js animation for services (1st–12th, BCA, B.Sc., Navodaya, etc.)
- Announcement Bar
  - 📞 8938848457 | CBSE & UK Boards | Hindi & English Medium
- Why RD Learning Planet
  - Cards: Quality Teaching, Multiple Courses, Affordable Fees
- Subjects Snapshot
  - Class-wise subject cards with icons and short info
- Toppers Gallery (optional)
  - Carousel of student success stories
- Quick CTA
  - Enroll Now button → contact.html

**🛠 Libraries:**
- CSS: Tailwind, Animate.css, AOS, Hover.css
- JS: Typed.js, AOS, Anime.js, Notyf, ScrollReveal

---

### 👨‍🏫 about.html — About Coaching & Founder
**🎨 Purpose:**
Tell the story of RD Learning Planet, introduce faculty, and build trust.

**🧩 Sections:**
- About RD Learning Planet
  - Mission, vision, tagline
- Founder Profile
  - Mr. Deepak Pandey (subjects taught, experience, philosophy)
- Other Faculty
  - 1 Ma’am (Bio, Science), 2 Sirs (Math 6–10)
- Centers Info
  - 📍 Center 1: Gopipuram
  - 📍 Center 2: Near Railway Crossing
- Testimonials (optional)

**🛠 Libraries:**
- CSS: Bootstrap, Flexbox Grid, Milligram
- JS: WOW.js, AOS, Tippy.js

---

### 📚 courses.html — Subjects & Entrance Prep
**🎨 Purpose:**
Show full list of courses, class-wise structure, and entrance exam prep.

**🧩 Sections:**
- Classes 6–8
  - ₹500/subject, All Subjects + Science
- Classes 9–10
  - ₹600/subject, Maths & Science
- Classes 11–12
  - ₹700/subject, Physics, Chemistry, Bio, Maths
- Higher Education
  - BCA, B.Sc. IT/CS
- Entrance Coaching
  - Sainik, Navodaya, Pantnagar
- Fees Table
  - Clean grid or cards per class/subject
- Call to Action
  - Enroll or Ask a Question → contact

**🛠 Libraries:**
- CSS: Bulma, UIkit, Spectre.css, W3.CSS, Hover.css
- JS: AOS, Chart.js (for visual data), Tooltipster

---

### 🛍️ stationary.html — RD Stationary
**🎨 Purpose:**
Showcase stationery available at Center 1 with pricing and value appeal.

**🧩 Sections:**
- Overview
  - “Affordable stationery for all students”
- Product Categories
  - 📒 Notebooks
  - 🖊️ Pens & Pencils
  - 📚 Accessories (rulers, erasers, staplers)
- Highlight Offers or Deals
- Photo Grid of Products (optional)
- Location
  - Only available at Center 1

**🛠 Libraries:**
- CSS: Materialize, Skeleton, Normalize.css
- JS: Tooltipster, SweetAlert2, Micromodal.js

---

### 📞 contact.html — Contact & Enquiry Form
**🎨 Purpose:**
Provide a clean, validated form to reach out, with map & contact details.

**🧩 Sections:**
- Contact Form
  - Name, Phone, Message (validate with Parsley/JustValidate)
- Form Toast
  - Success message via Notyf
- Direct Contact Info
  - Phone number, center address
- Map (optional)
  - Embed Google Map of centers
- FAQs or Timings (optional)

**🛠 Libraries:**
- CSS: Bootstrap, Tachyons, Reset.css
- JS: JustValidate, Parsley, Cleave.js, Inputmask, Notyf

---

## 📦 Tech Stack Used

### 🔧 Frontend

- **HTML5 + Tailwind CSS**
- Normalize.css, Animate.css, AOS, Hover.css
- Fully responsive layout using **Flexbox** and **Grid**

### ✨ JavaScript Libraries

| Category        | Libraries Included                          |
|----------------|----------------------------------------------|
| Animations      | [AOS](https://michalsnik.github.io/aos), [Typed.js](https://github.com/mattboldt/typed.js), [Anime.js] |
| Form/UX         | [JustValidate](https://just-validate.dev/), [Notyf](https://github.com/caroso1222/notyf), [Micromodal] |
| Utilities       | [Lodash], [Day.js], [Validator.js], [UUID], [Axios] |
| Effects & Popups| [Tippy.js], [SweetAlert2], [Toastr], [ScrollReveal] |

---

## 📝 How to Use

1. Clone or download the repository
2. Replace logo and image files in `/assets/images/`
3. Customize `index.html` sections as needed
4. Deploy using GitHub Pages or any static hosting (Netlify, Vercel)

---

## 📬 Contact

For coaching or collaboration queries:

- 📞 Phone: **8938848457**
- 📧 Email: `rdlearningplanet@gmail.com`
- 📍 Location:
  - Center 1: Gopipuram Colony, Halduchaur, Haldwani
  - Center 2: Near Railway Crossing, Halduchaur, Haldwani

---

## 📌 Credits

- Project by **Mr. Deepak Pandey** (Maths, Science Teacher & Founder)
- Design inspired by educational website best practices
- Powered by Open Source technologies

---

## 📃 License

This project is for educational and commercial use by **RD Learning Planet**. All rights reserved © 2025.
