# Brookfield School — School Management Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Project](https://img.shields.io/badge/Day%207-30%20Days%20of%20Coding-234E35?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

A single-page school management website for **Brookfield School**, a public charter school in Portland, Oregon. It presents home, about, courses, teachers, timetable and admissions in one accessible page — with no build step, no frameworks and no login required.

> **Day 7 challenge:** build a school management website with Home, About, Courses and Teachers sections using HTML, CSS and JavaScript.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Page Sections](#page-sections)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [Browser Support](#browser-support)
- [Challenge Requirements](#challenge-requirements)
- [Author](#author)
- [License](#license)

---

## Demo

Open `index.html` in any modern browser, or serve the folder locally:

```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve .
```

Then visit [http://localhost:8080](http://localhost:8080).

---

## Features

| Feature | Description |
| --- | --- |
| **Sticky header + mobile menu** | Anchor navigation with a keyboard-friendly `Menu` button on small screens |
| **Course filter chips** | Filter 12 courses by department (Science / Arts / Core); the filter is written to the URL so results are shareable |
| **Teacher directory search** | Live search by name or subject plus a department dropdown, both synced to `?q=` in the address bar |
| **Admissions form validation** | Four-field form with inline error messages, focus management and a simulated submit confirmation |
| **Live status counters** | `role="status"` regions announce "Showing X of Y courses/staff" to screen readers |
| **Term calendar & timetable tables** | Real `<table>` markup with `<caption>` and scoped headers |
| **Shareable deep links** | e.g. `index.html?dept=science` or `index.html?q=physics` pre-filters content on load |
| **Unsaved-form guard** | `beforeunload` warns before leaving with a half-filled application |
| **Responsive layout** | Grids collapse from 4/2 columns to 1 column below 900px |
| **Reduced motion support** | Honours `prefers-reduced-motion` by disabling smooth scrolling and transitions |

---

## Tech Stack

- **HTML5** — semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), ARIA attributes, `<time>` elements, `loading="lazy"` images
- **CSS3** — custom properties, CSS Grid, `clamp()` fluid typography, no preprocessor
- **Vanilla JavaScript** — no dependencies; `URLSearchParams`, `history.replaceState`, event delegation
- **Fonts** — [Archivo](https://fonts.google.com/specimen/Archivo) and [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) from Google Fonts (preconnected and preloaded)

---

## Project Structure

```
day 7/
├── index.html          # Single-page markup for all sections
├── styles.css          # Flat editorial theme (paper/green/ochre palette)
├── app.js              # Filters, search, menu, form validation
├── img/
│   ├── campus.jpg      # Hero — front courtyard
│   ├── library.jpg     # About — reading room
│   ├── science.jpg     # Courses — chemistry lab
│   └── classroom.jpg   # Courses — grade 7 maths
├── day7 challenge.docx # Challenge brief
└── README.md
```

---

## Getting Started

No installation, build tools or package manager are required.

1. Clone or download the repository.
2. Open `index.html` directly in a browser — it works from `file://`.
3. Optionally start a local server (see [Demo](#demo)) for a realistic origin.

**Requirements:** any browser with support for CSS Grid, custom properties and `URLSearchParams` (Chrome 63+, Firefox 57+, Safari 12+, Edge 79+).

---

## Page Sections

| Section | ID | What it contains |
| --- | --- | --- |
| Home | `#home` | Hero headline, term dates, primary CTAs, campus photo |
| Facts | — | 840 pupils · 18:1 ratio · 96% attendance · 42 staff |
| About | `#about` | School story, four operating rules, 2026–27 term calendar |
| Courses | `#courses` | 12 examined courses with lead teacher, weekly periods and grade range, filterable by department |
| Teachers | `#teachers` | 8-staff directory with rooms, office hours and emails |
| Timetable | `#timetable` | Grade 9 Tuesday schedule, periods 1–6 with rooms |
| Admissions | `#admissions` | Four-field application form, contact details, fee summary |
| Legal | `#terms` | Terms of use and privacy policy |

---

## Accessibility

- Skip link (`Skip to main content`) as the first focusable element
- Visible focus rings (`outline: 3px solid` ochre) on all interactive elements
- `aria-pressed` on filter chips, `aria-expanded` on the menu button
- `aria-live="polite"` status regions for filter, search and form feedback
- Descriptive `alt` text on every image, `figcaption` for context
- Mobile menu closes on `Escape` and returns focus to the trigger
- Colour contrast meeting WCAG AA on the paper/ink palette

---

## Performance

- Single CSS and single JS file, both render-blocking-free of third-party scripts
- Hero image uses `fetchpriority="high"`; all other images are `loading="lazy"` with explicit `width`/`height` to prevent layout shift
- Font preconnect + `preload` for the primary Archivo weight
- Total footprint: 3 files, 0 dependencies

---

## Browser Support

| Chrome | Firefox | Safari | Edge |
| :---: | :---: | :---: | :---: |
| 63+ | 57+ | 12+ | 79+ |

---

## Challenge Requirements

From `day7 challenge.docx`:

- [x] School management website
- [x] Home section
- [x] About section
- [x] Courses section
- [x] Teachers section
- [x] Built with HTML, CSS and JavaScript
- [x] Clean, attractive and well-organized design

---

## Author

Built as **Day 7** of the *30 Days of Coding* challenge.

---

## License

This project is provided for educational use. Content, photography and staff details are fictional and belong to the demo "Brookfield School" persona.
