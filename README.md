# Shri Harini Selvakumar — Executive Portfolio 2026

An editorial-grade, modular, and responsive professional engineering portfolio website. Built using **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **motion**, this single-page showcase merges structured technical complexity with a minimal, gorgeous dark aesthetic.

The interface values deliberate spacing, precise typographic contrast, and structural unity to represent an interactive showcase of active development files, certifications, and career journeys.

---

## 🎨 Visual Identity & Aesthetic Choices

The workspace uses a custom-curated **Editorial Gothic Theme** featuring:
- **Ink-Black Foundation & Coral Flare**: A rich off-black core (`#050505`) and elevated card elements (`#0a0a0a`), punctuated by an energetic coral key color (`#f27d26`).
- **Typographic Pairings**: Clean, structural display headings using **Inter** matched with fluid running texts set in elegant, italicized **Cormorant Garamond** serif faces. System states are accented in crisp **JetBrains Mono**.
- **Deliberate Negative Space**: Abandoning dense grids, the design prioritizes high breathing margins, delicate borders (`border-white/10`), and custom-rendered subtle dot-grids (`.dot-grid`).

---

## ⚡ Functional Architecture & Features

The portfolio is structured with responsive custom components designed for modularity and high performance:

1. **Editorial Hero Panel (`Hero.tsx`)**
   - High-contrast displaying typeface emphasizing her engineering status and skill descriptors.
   - Micro-interactions for lightning-fast scrolling, profile attachments, and external links in the header.

2. **Continuous Learning Registry (`Certifications.tsx` & `Skills.tsx`)**
   - Instant filtering and query matching through a integrated reactive locator search. 
   - Beautiful metric counting showing skill categorical counts dynamically.

3. **Journey Timeline & Selected Projects (`Experience.tsx` & `Projects.tsx`)**
   - High-end bento cards emphasizing spotlight repositories and spotlight rewards.
   - Interactive project searching matching tags, categories, and titles.
   - A modern vertical roadmap layout documenting industry tenure.

4. **CV Archive & Modal Engine (`ResumeModal.tsx`)**
   - A beautiful print-ready document modal with complete styling configurations.
   - Includes real-time **Markdown Copy** utilities and browser **PDF Export Print** optimization.

5. **Local Submission Terminal (`Contact.tsx`)**
   - Secure input capturing with real-time browser validations and validation handling.
   - Elegant feedback mechanics indicating transmission completions.

---

## 🛠️ Stack & Implementation Highlights

- **Framework**: React 18+ paired with the rapid Vite HMR bundler.
- **Styling**: Utility-first Tailwind CSS with custom theme attributes declared within standard `@theme { ... }` wrappers.
- **Animations**: Staggered layout entrances and micro-hover states rendered fluidly through `motion` elements.
- **Icons**: Clean Vector UI accents provided uniformly by the modern `lucide-react` library.

---

## 🚀 Running locally

### 📋 Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### ⚙️ Command Sequence
```bash
# 1. Clone or import this package
# 2. Install package dependencies
npm install

# 3. Boot development environment
npm run dev
```

### 📦 Distributing & Building
To resolve and compile client-side static pages to `dist/`, execute:
```bash
npm run build
```
The compiled files are fully self-contained and optimized for low-latency distribution on modern CDNs.

---

*Curated with precision, aligning strict design standards with elegant, high-impact career statements.*
