# MNM Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page brochure website for Matt Norwood Maintenance (MNM) that generates leads and builds credibility for a Gloucester-based builder.

**Architecture:** Single `index.html` with all sections, split CSS files per section loaded via `<link>` tags, minimal vanilla JS for nav hamburger and gallery lightbox. Hosted on Netlify with Netlify Forms handling contact submissions.

**Tech Stack:** HTML5, CSS3 (custom properties, Grid, Flexbox), vanilla JS (ES6), Netlify (hosting + forms), Google Fonts (Inter)

---

## File Structure

```
mnm-website/
├── index.html
├── netlify.toml
├── css/
│   ├── variables.css       # CSS custom properties — colors, fonts, spacing
│   ├── base.css            # Reset, body, typography, utility classes
│   ├── nav.css             # Sticky nav, hamburger menu
│   ├── hero.css            # Hero section
│   ├── services.css        # Services grid cards
│   ├── about.css           # About section + accreditations strip
│   ├── gallery.css         # Photo grid + lightbox overlay
│   ├── testimonials.css    # Testimonial cards
│   ├── contact.css         # Contact form + WhatsApp button
│   └── footer.css          # Footer
├── js/
│   ├── nav.js              # Hamburger toggle, scroll-aware nav background
│   └── gallery.js          # Lightbox open/close/keyboard navigation
└── images/
    ├── hero.jpg             # Hero background (client to supply)
    ├── about.jpg            # Photo of Matt (client to supply)
    └── gallery/             # Project photos (client to supply)
        ├── project-1.jpg
        ├── project-2.jpg
        └── ...
```

---

## Task 1: Project Setup

**Files:**
- Create: `index.html`
- Create: `netlify.toml`
- Create: `css/variables.css`
- Create: `css/base.css`

- [ ] **Step 1: Initialise git repo**

```bash
cd /Users/arranbrough/mnm-website
git init
echo "images/" >> .gitignore
git add .gitignore
git commit -m "chore: init repo"
```

- [ ] **Step 2: Create netlify.toml**

```toml
[build]
  publish = "."

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
```

- [ ] **Step 3: Create css/variables.css**

```css
:root {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2c2c2c;
  --bg-card: #242424;
  --accent: #e8930a;
  --accent-hover: #d07e08;
  --text: #f5f5f5;
  --text-muted: #a0a0a0;
  --font: 'Inter', sans-serif;
  --max-width: 1200px;
  --section-padding: 5rem 1.5rem;
}
```

- [ ] **Step 4: Create css/base.css**

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font);
  background: var(--bg-primary);
  color: var(--text);
  line-height: 1.6;
  font-size: 1rem;
}

img { display: block; max-width: 100%; height: auto; }

a { color: inherit; text-decoration: none; }

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.section-heading {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.85rem 1.75rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}

.btn:active { transform: scale(0.98); }

.btn-primary {
  background: var(--accent);
  color: #fff;
}

.btn-primary:hover { background: var(--accent-hover); }

.btn-outline {
  background: transparent;
  color: var(--text);
  border: 2px solid var(--text);
}

.btn-outline:hover { border-color: var(--accent); color: var(--accent); }
```

- [ ] **Step 5: Create index.html skeleton**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Matt Norwood Maintenance — quality building, renovation, roofing, plumbing, electrics and more across Gloucestershire. Call 07969 359683 for a free quote.">
  <title>MNM — Matt Norwood Maintenance | Gloucester Builder</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/nav.css">
  <link rel="stylesheet" href="css/hero.css">
  <link rel="stylesheet" href="css/services.css">
  <link rel="stylesheet" href="css/about.css">
  <link rel="stylesheet" href="css/gallery.css">
  <link rel="stylesheet" href="css/testimonials.css">
  <link rel="stylesheet" href="css/contact.css">
  <link rel="stylesheet" href="css/footer.css">
</head>
<body>

  <header id="nav"><!-- Task 2 --></header>
  <main>
    <section id="hero"><!-- Task 3 --></section>
    <section id="services"><!-- Task 4 --></section>
    <section id="about"><!-- Task 5 --></section>
    <section id="gallery"><!-- Task 6 --></section>
    <section id="testimonials"><!-- Task 7 --></section>
    <section id="contact"><!-- Task 8 --></section>
  </main>
  <footer id="footer"><!-- Task 9 --></footer>

  <script src="js/nav.js"></script>
  <script src="js/gallery.js"></script>
</body>
</html>
```

- [ ] **Step 6: Open index.html in browser — verify blank dark page loads with no console errors**

- [ ] **Step 7: Commit**

```bash
git add .
git commit -m "chore: project scaffold — html skeleton, css variables, base styles"
```

---

## Task 2: Navigation

**Files:**
- Modify: `index.html` — fill `<header id="nav">`
- Create: `css/nav.css`
- Create: `js/nav.js`

- [ ] **Step 1: Add nav HTML inside `<header id="nav">`**

```html
<nav class="nav">
  <div class="container nav__inner">
    <a href="#hero" class="nav__logo">
      <span class="nav__logo-text">MNM</span>
    </a>
    <ul class="nav__links" id="navLinks">
      <li><a href="#services" class="nav__link">Services</a></li>
      <li><a href="#about" class="nav__link">About</a></li>
      <li><a href="#gallery" class="nav__link">Gallery</a></li>
      <li><a href="#testimonials" class="nav__link">Reviews</a></li>
      <li><a href="#contact" class="nav__link nav__link--cta">Get a Quote</a></li>
    </ul>
    <button class="nav__hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
```

- [ ] **Step 2: Create css/nav.css**

```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 0;
  transition: background 0.3s, box-shadow 0.3s;
}

.nav.scrolled {
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 20px rgba(0,0,0,0.4);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.05em;
}

.nav__links {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}

.nav__link {
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.03em;
  transition: color 0.2s;
}

.nav__link:hover { color: var(--accent); }

.nav__link--cta {
  background: var(--accent);
  color: #fff;
  padding: 0.5rem 1.2rem;
  border-radius: 4px;
  transition: background 0.2s;
}

.nav__link--cta:hover { background: var(--accent-hover); color: #fff; }

.nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
}

.nav__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  transition: transform 0.3s, opacity 0.3s;
}

.nav__hamburger[aria-expanded="true"] span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav__hamburger[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
.nav__hamburger[aria-expanded="true"] span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 768px) {
  .nav__hamburger { display: flex; }

  .nav__links {
    display: none;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    font-size: 1.5rem;
  }

  .nav__links.open { display: flex; }
}
```

- [ ] **Step 3: Create js/nav.js**

```js
const nav = document.querySelector('.nav');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

navLinks.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});
```

- [ ] **Step 4: Verify in browser — nav shows, scrolling adds background, hamburger works on narrow viewport**

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: sticky navigation with mobile hamburger menu"
```

---

## Task 3: Hero Section

**Files:**
- Modify: `index.html` — fill `<section id="hero">`
- Create: `css/hero.css`
- Add: `images/hero.jpg` (placeholder — use any dark construction photo for now)

- [ ] **Step 1: Add hero HTML**

```html
<section id="hero" class="hero">
  <div class="hero__overlay"></div>
  <div class="container hero__content">
    <span class="section-label">Gloucester &amp; Gloucestershire</span>
    <h1 class="hero__heading">Quality Builds<br>Across Gloucestershire</h1>
    <p class="hero__sub">Extensions, renovations, roofing and more —<br>built right, first time.</p>
    <div class="hero__ctas">
      <a href="#contact" class="btn btn-primary">Get a Free Quote</a>
      <a href="tel:07969359683" class="btn btn-outline">&#128222; 07969 359683</a>
    </div>
  </div>
  <div class="hero__scroll-hint" aria-hidden="true">&#8595;</div>
</section>
```

- [ ] **Step 2: Add a placeholder hero image**

Place any dark-toned construction/building photo at `images/hero.jpg`. It will be replaced by a real project photo later. Dimensions should be at least 1600×900px.

- [ ] **Step 3: Create css/hero.css**

```css
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url('../images/hero.jpg') center/cover no-repeat;
  padding-top: 80px;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(26,26,26,0.55) 0%,
    rgba(26,26,26,0.75) 60%,
    rgba(26,26,26,1) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 720px;
}

.hero__heading {
  font-size: clamp(2.4rem, 6vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin: 0.5rem 0 1rem;
}

.hero__sub {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-muted);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.hero__ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero__scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: var(--accent);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}

@media (max-width: 640px) {
  .hero__ctas { flex-direction: column; }
  .hero__ctas .btn { text-align: center; }
}
```

- [ ] **Step 4: Verify — hero fills viewport, heading readable over image, both buttons visible, bouncing arrow shows**

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: hero section with CTA buttons"
```

---

## Task 4: Services Section

**Files:**
- Modify: `index.html` — fill `<section id="services">`
- Create: `css/services.css`

- [ ] **Step 1: Add services HTML**

```html
<section id="services" class="services">
  <div class="container">
    <span class="section-label">What We Do</span>
    <h2 class="section-heading">Our Services</h2>
    <div class="services__grid">

      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
        <h3 class="service-card__title">Building Renovation</h3>
        <p class="service-card__desc">Bringing properties back to life, inside and out.</p>
      </div>

      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20M4 20V10l8-6 8 6v10"/><path d="M10 20v-6h4v6"/></svg>
        </div>
        <h3 class="service-card__title">Roofing</h3>
        <p class="service-card__desc">Repairs, replacements and new builds done properly.</p>
      </div>

      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 1 10 10"/><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="3"/></svg>
        </div>
        <h3 class="service-card__title">Plumbing</h3>
        <p class="service-card__desc">Reliable plumbing work for homes and extensions.</p>
      </div>

      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <h3 class="service-card__title">Electrics</h3>
        <p class="service-card__desc">Safe, certified electrical installation and repairs.</p>
      </div>

      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
        </div>
        <h3 class="service-card__title">Groundwork &amp; Decking</h3>
        <p class="service-card__desc">Foundations, driveways, patios and outdoor spaces.</p>
      </div>

      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><line x1="12" y1="22" x2="12" y2="9"/></svg>
        </div>
        <h3 class="service-card__title">Extensions</h3>
        <p class="service-card__desc">Add space and value to your home.</p>
      </div>

      <div class="service-card">
        <div class="service-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </div>
        <h3 class="service-card__title">Kitchens</h3>
        <p class="service-card__desc">Full kitchen fitting from design to finish.</p>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Create css/services.css**

```css
.services {
  padding: var(--section-padding);
  background: var(--bg-secondary);
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}

.service-card {
  background: var(--bg-card);
  border-radius: 8px;
  padding: 2rem 1.75rem;
  border-top: 3px solid transparent;
  transition: border-color 0.2s, transform 0.2s;
}

.service-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
}

.service-card__icon {
  color: var(--accent);
  margin-bottom: 1rem;
}

.service-card__title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.service-card__desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .services__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .services__grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Verify — 7 cards show in 3-col grid on desktop, 2-col on tablet, 1-col on mobile. Hover lifts card with amber top border.**

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: services section with 7 service cards"
```

---

## Task 5: About Section

**Files:**
- Modify: `index.html` — fill `<section id="about">`
- Create: `css/about.css`
- Add: `images/about.jpg` (placeholder photo of Matt or a job site)

- [ ] **Step 1: Add about HTML**

```html
<section id="about" class="about">
  <div class="container about__inner">
    <div class="about__image-wrap">
      <img src="images/about.jpg" alt="Matt Norwood on a job site" class="about__image" loading="lazy">
    </div>
    <div class="about__content">
      <span class="section-label">About MNM</span>
      <h2 class="section-heading">Built on Reliability</h2>
      <p class="about__text">Matt Norwood has been working in the trades across Gloucestershire for 5 years. From small repairs to full extensions, MNM brings the same care and reliability to every job. Based in Gloucester, we work across the county with a reputation built on word of mouth.</p>
      <a href="#contact" class="btn btn-primary" style="margin-top:1.5rem">Get in Touch</a>

      <div class="accreditations">
        <p class="accreditations__label">Accreditations</p>
        <div class="accreditations__badges">
          <div class="accreditation-badge">
            <span class="accreditation-badge__name">Gas Safe<br><small>TBC</small></span>
          </div>
          <div class="accreditation-badge">
            <span class="accreditation-badge__name">NICEIC<br><small>TBC</small></span>
          </div>
          <div class="accreditation-badge">
            <span class="accreditation-badge__name">FMB<br><small>TBC</small></span>
          </div>
          <div class="accreditation-badge">
            <span class="accreditation-badge__name">TrustMark<br><small>TBC</small></span>
          </div>
        </div>
        <p class="accreditations__note">Full accreditation details coming soon</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Create css/about.css**

```css
.about {
  padding: var(--section-padding);
  background: var(--bg-primary);
}

.about__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about__image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
  border-left: 4px solid var(--accent);
}

.about__text {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.8;
  margin-top: 1rem;
}

.accreditations {
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.08);
}

.accreditations__label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.accreditations__badges {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.accreditation-badge {
  background: var(--bg-card);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 6px;
  padding: 0.75rem 1.25rem;
  text-align: center;
  min-width: 90px;
}

.accreditation-badge__name {
  font-size: 0.85rem;
  font-weight: 600;
  line-height: 1.4;
}

.accreditation-badge small {
  font-size: 0.7rem;
  color: var(--text-muted);
  font-weight: 400;
}

.accreditations__note {
  margin-top: 0.75rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  font-style: italic;
}

@media (max-width: 900px) {
  .about__inner { grid-template-columns: 1fr; }
  .about__image { height: 350px; }
}
```

- [ ] **Step 3: Verify — two-column layout on desktop, stacked on mobile. Four accreditation badge placeholders visible.**

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: about section with accreditations strip"
```

---

## Task 6: Gallery Section

**Files:**
- Modify: `index.html` — fill `<section id="gallery">`
- Create: `css/gallery.css`
- Create: `js/gallery.js`
- Add: `images/gallery/project-1.jpg` through `project-6.jpg` (placeholder photos for now)

- [ ] **Step 1: Add gallery HTML**

```html
<section id="gallery" class="gallery">
  <div class="container">
    <span class="section-label">Our Work</span>
    <h2 class="section-heading">Recent Projects</h2>
    <div class="gallery__grid" id="galleryGrid">
      <div class="gallery__item" data-src="images/gallery/project-1.jpg" data-caption="Building Renovation">
        <img src="images/gallery/project-1.jpg" alt="Building renovation project" loading="lazy">
        <div class="gallery__item-overlay"><span>View</span></div>
      </div>
      <div class="gallery__item" data-src="images/gallery/project-2.jpg" data-caption="Roofing">
        <img src="images/gallery/project-2.jpg" alt="Roofing project" loading="lazy">
        <div class="gallery__item-overlay"><span>View</span></div>
      </div>
      <div class="gallery__item" data-src="images/gallery/project-3.jpg" data-caption="Kitchen Fitting">
        <img src="images/gallery/project-3.jpg" alt="Kitchen fitting project" loading="lazy">
        <div class="gallery__item-overlay"><span>View</span></div>
      </div>
      <div class="gallery__item" data-src="images/gallery/project-4.jpg" data-caption="Extension">
        <img src="images/gallery/project-4.jpg" alt="House extension" loading="lazy">
        <div class="gallery__item-overlay"><span>View</span></div>
      </div>
      <div class="gallery__item" data-src="images/gallery/project-5.jpg" data-caption="Groundwork &amp; Decking">
        <img src="images/gallery/project-5.jpg" alt="Groundwork and decking" loading="lazy">
        <div class="gallery__item-overlay"><span>View</span></div>
      </div>
      <div class="gallery__item" data-src="images/gallery/project-6.jpg" data-caption="Plumbing">
        <img src="images/gallery/project-6.jpg" alt="Plumbing work" loading="lazy">
        <div class="gallery__item-overlay"><span>View</span></div>
      </div>
    </div>
  </div>

  <!-- Lightbox -->
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
    <button class="lightbox__close" id="lightboxClose" aria-label="Close">&times;</button>
    <button class="lightbox__prev" id="lightboxPrev" aria-label="Previous">&#8249;</button>
    <button class="lightbox__next" id="lightboxNext" aria-label="Next">&#8250;</button>
    <div class="lightbox__content">
      <img src="" alt="" id="lightboxImg">
      <p class="lightbox__caption" id="lightboxCaption"></p>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Create css/gallery.css**

```css
.gallery {
  padding: var(--section-padding);
  background: var(--bg-secondary);
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-top: 3rem;
}

.gallery__item {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  cursor: pointer;
  aspect-ratio: 4/3;
}

.gallery__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}

.gallery__item:hover img { transform: scale(1.05); }

.gallery__item-overlay {
  position: absolute;
  inset: 0;
  background: rgba(232, 147, 10, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery__item-overlay span {
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.gallery__item:hover .gallery__item-overlay { opacity: 1; }

/* Lightbox */
.lightbox {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.92);
  z-index: 200;
  align-items: center;
  justify-content: center;
}

.lightbox.open { display: flex; }

.lightbox__content {
  max-width: 90vw;
  max-height: 85vh;
  text-align: center;
}

.lightbox__content img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
}

.lightbox__caption {
  margin-top: 0.75rem;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.lightbox__close,
.lightbox__prev,
.lightbox__next {
  position: absolute;
  background: none;
  border: none;
  color: #fff;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
  transition: color 0.2s;
}

.lightbox__close:hover,
.lightbox__prev:hover,
.lightbox__next:hover { color: var(--accent); }

.lightbox__close { top: 1.5rem; right: 1.5rem; }
.lightbox__prev { left: 1.5rem; top: 50%; transform: translateY(-50%); font-size: 3rem; }
.lightbox__next { right: 1.5rem; top: 50%; transform: translateY(-50%); font-size: 3rem; }

@media (max-width: 768px) {
  .gallery__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .gallery__grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Create js/gallery.js**

```js
(function () {
  const items = Array.from(document.querySelectorAll('.gallery__item'));
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  let current = 0;

  function open(index) {
    current = index;
    const item = items[index];
    img.src = item.dataset.src;
    img.alt = item.querySelector('img').alt;
    caption.textContent = item.dataset.caption || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    img.src = '';
  }

  function prev() { open((current - 1 + items.length) % items.length); }
  function next() { open((current + 1) % items.length); }

  items.forEach((item, i) => item.addEventListener('click', () => open(i)));
  document.getElementById('lightboxClose').addEventListener('click', close);
  document.getElementById('lightboxPrev').addEventListener('click', prev);
  document.getElementById('lightboxNext').addEventListener('click', next);

  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
})();
```

- [ ] **Step 4: Add 6 placeholder images to `images/gallery/`** — any construction/building photos named `project-1.jpg` through `project-6.jpg`. Client will replace these with real photos.

- [ ] **Step 5: Verify — 6 photos in 3-col grid, hover shows amber overlay, clicking opens lightbox, prev/next/close/keyboard navigation all work**

- [ ] **Step 6: Commit**

```bash
git add .
git commit -m "feat: gallery section with lightbox"
```

---

## Task 7: Testimonials Section

**Files:**
- Modify: `index.html` — fill `<section id="testimonials">`
- Create: `css/testimonials.css`

- [ ] **Step 1: Add testimonials HTML**

Replace quotes and names below with real ones from Matt's customers when available. These are placeholders.

```html
<section id="testimonials" class="testimonials">
  <div class="container">
    <span class="section-label">Reviews</span>
    <h2 class="section-heading">What Our Customers Say</h2>
    <div class="testimonials__grid">

      <div class="testimonial-card">
        <div class="testimonial-card__quote">&ldquo;</div>
        <p class="testimonial-card__text">Matt did a brilliant job on our kitchen extension. Turned up when he said he would, kept the site tidy, and the finish was excellent. Would recommend to anyone.</p>
        <div class="testimonial-card__author">
          <span class="testimonial-card__name">Sarah T.</span>
          <span class="testimonial-card__location">Gloucester</span>
        </div>
      </div>

      <div class="testimonial-card">
        <div class="testimonial-card__quote">&ldquo;</div>
        <p class="testimonial-card__text">Really reliable and honest. Sorted our roofing issue quickly and didn't try to upsell us on work we didn't need. Great value and a tidy job.</p>
        <div class="testimonial-card__author">
          <span class="testimonial-card__name">James R.</span>
          <span class="testimonial-card__location">Cheltenham</span>
        </div>
      </div>

      <div class="testimonial-card">
        <div class="testimonial-card__quote">&ldquo;</div>
        <p class="testimonial-card__text">MNM renovated our bathroom and laid new decking in the garden. Both look fantastic. Matt's friendly, professional, and the quality of his work speaks for itself.</p>
        <div class="testimonial-card__author">
          <span class="testimonial-card__name">Claire M.</span>
          <span class="testimonial-card__location">Stroud</span>
        </div>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Create css/testimonials.css**

```css
.testimonials {
  padding: var(--section-padding);
  background: var(--bg-primary);
}

.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}

.testimonial-card {
  background: var(--bg-card);
  border-radius: 8px;
  padding: 2rem;
  border-bottom: 3px solid var(--accent);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.testimonial-card__quote {
  font-size: 4rem;
  line-height: 0.6;
  color: var(--accent);
  font-family: Georgia, serif;
}

.testimonial-card__text {
  color: var(--text-muted);
  font-size: 0.98rem;
  line-height: 1.75;
  flex: 1;
}

.testimonial-card__author {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.testimonial-card__name {
  font-weight: 700;
  font-size: 0.95rem;
}

.testimonial-card__location {
  font-size: 0.8rem;
  color: var(--text-muted);
}

@media (max-width: 900px) {
  .testimonials__grid { grid-template-columns: 1fr; max-width: 600px; }
}
```

- [ ] **Step 3: Verify — 3 cards side by side on desktop, stacked on mobile. Amber quote mark and bottom border visible.**

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: testimonials section with 3 customer quote cards"
```

---

## Task 8: Contact Section

**Files:**
- Modify: `index.html` — fill `<section id="contact">`
- Create: `css/contact.css`

- [ ] **Step 1: Add contact HTML**

```html
<section id="contact" class="contact">
  <div class="container">
    <span class="section-label">Get in Touch</span>
    <h2 class="section-heading">Free, No-Obligation Quotes</h2>
    <p class="contact__sub">We cover the whole of Gloucestershire. Call, WhatsApp, or fill in the form and we'll get back to you.</p>

    <div class="contact__inner">
      <div class="contact__direct">
        <h3 class="contact__direct-heading">Call or WhatsApp</h3>
        <a href="tel:07969359683" class="contact__phone btn btn-primary">&#128222; 07969 359683</a>
        <a href="https://wa.me/447969359683" class="contact__whatsapp btn btn-outline" target="_blank" rel="noopener">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;margin-right:0.4rem"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp Us
        </a>
        <div class="contact__coverage">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 0 0-8-8z"/></svg>
          Serving Gloucester and across Gloucestershire
        </div>
      </div>

      <form class="contact__form" name="contact" method="POST" netlify>
        <input type="hidden" name="form-name" value="contact">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" required placeholder="John Smith">
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="07700 000000">
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="john@example.com">
        </div>
        <div class="form-group">
          <label for="message">Tell Us About Your Project</label>
          <textarea id="message" name="message" rows="5" required placeholder="E.g. kitchen extension, loft conversion, roofing repair..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary contact__submit">Send Enquiry</button>
      </form>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Create css/contact.css**

```css
.contact {
  padding: var(--section-padding);
  background: var(--bg-secondary);
}

.contact__sub {
  color: var(--text-muted);
  font-size: 1.05rem;
  margin-top: 0.5rem;
  max-width: 600px;
}

.contact__inner {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  margin-top: 3rem;
  align-items: start;
}

.contact__direct {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact__direct-heading {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.contact__phone,
.contact__whatsapp {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.05rem;
  text-align: center;
}

.contact__coverage {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.5rem;
}

/* Form */
.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.03em;
}

.form-group input,
.form-group textarea {
  background: var(--bg-card);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 4px;
  padding: 0.75rem 1rem;
  color: var(--text);
  font-family: var(--font);
  font-size: 1rem;
  transition: border-color 0.2s;
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
}

.form-group input::placeholder,
.form-group textarea::placeholder { color: var(--text-muted); }

.contact__submit { width: 100%; padding: 1rem; font-size: 1.05rem; }

@media (max-width: 900px) {
  .contact__inner { grid-template-columns: 1fr; gap: 2.5rem; }
}
```

- [ ] **Step 3: Verify — phone button, WhatsApp button, and form all visible. Form fields styled correctly. Coverage note shows.**

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: contact section with Netlify form and WhatsApp link"
```

---

## Task 9: Footer

**Files:**
- Modify: `index.html` — fill `<footer id="footer">`
- Create: `css/footer.css`

- [ ] **Step 1: Add footer HTML**

```html
<footer id="footer" class="footer">
  <div class="container footer__inner">
    <div class="footer__brand">
      <span class="footer__logo">MNM</span>
      <p class="footer__tagline">Matt Norwood Maintenance<br>Serving Gloucester &amp; Gloucestershire</p>
    </div>
    <nav class="footer__links" aria-label="Footer navigation">
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#gallery">Gallery</a>
      <a href="#testimonials">Reviews</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="footer__contact">
      <a href="tel:07969359683" class="footer__phone">07969 359683</a>
      <a href="https://wa.me/447969359683" target="_blank" rel="noopener" class="footer__wa">WhatsApp</a>
    </div>
  </div>
  <div class="footer__bottom">
    <p>&copy; <span id="year"></span> Matt Norwood Maintenance. All rights reserved.</p>
  </div>
  <script>document.getElementById('year').textContent = new Date().getFullYear();</script>
</footer>
```

- [ ] **Step 2: Create css/footer.css**

```css
.footer {
  background: #111;
  border-top: 1px solid rgba(255,255,255,0.06);
}

.footer__inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 2rem;
  padding: 3rem 1.5rem;
  align-items: start;
}

.footer__logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  display: block;
  margin-bottom: 0.5rem;
}

.footer__tagline {
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.6;
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer__links a {
  color: var(--text-muted);
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer__links a:hover { color: var(--accent); }

.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer__phone,
.footer__wa {
  color: var(--text-muted);
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer__phone:hover,
.footer__wa:hover { color: var(--accent); }

.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.06);
  text-align: center;
  padding: 1.25rem;
  color: var(--text-muted);
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .footer__inner { grid-template-columns: 1fr; gap: 1.5rem; }
}
```

- [ ] **Step 3: Verify — three-column footer on desktop, stacked on mobile. Copyright year auto-updates.**

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: footer with navigation links and contact info"
```

---

## Task 10: SEO & Meta Tags

**Files:**
- Modify: `index.html` — `<head>` section

- [ ] **Step 1: Add full meta tags and Open Graph to `<head>`**

Replace the existing `<head>` content with:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Matt Norwood Maintenance (MNM) — quality building, renovation, roofing, plumbing, electrics, extensions and kitchens across Gloucestershire. Based in Gloucester. Call 07969 359683 for a free quote.">
<meta name="keywords" content="builder Gloucester, building renovation Gloucestershire, roofing Gloucester, extensions Gloucester, kitchen fitter Gloucestershire, plumber Gloucester, groundwork Gloucestershire">
<meta name="robots" content="index, follow">

<!-- Open Graph -->
<meta property="og:title" content="MNM — Matt Norwood Maintenance | Gloucester Builder">
<meta property="og:description" content="Quality builds across Gloucestershire. Extensions, renovations, roofing and more. Free quotes. Call 07969 359683.">
<meta property="og:type" content="website">
<meta property="og:image" content="images/hero.jpg">

<title>MNM — Matt Norwood Maintenance | Gloucester Builder</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

- [ ] **Step 2: Verify — page title shows in browser tab, description visible when inspecting meta tags**

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "chore: SEO meta tags and Open Graph"
```

---

## Task 11: Deploy to Netlify

**Files:**
- No file changes — deployment only

- [ ] **Step 1: Push repo to GitHub**

```bash
git remote add origin https://github.com/YOUR_USERNAME/mnm-website.git
git branch -M main
git push -u origin main
```

- [ ] **Step 2: Connect to Netlify**
  1. Go to [netlify.com](https://netlify.com) and log in
  2. Click **Add new site → Import an existing project**
  3. Choose GitHub and select the `mnm-website` repo
  4. Build command: leave blank (static site)
  5. Publish directory: `.` (root)
  6. Click **Deploy site**

- [ ] **Step 3: Enable Netlify Forms**
  1. In Netlify dashboard → **Forms** tab
  2. The `contact` form should appear automatically after first deploy (Netlify detects the `netlify` attribute)
  3. Optionally configure email notifications: **Forms → contact → Form notifications → Add notification → Email**

- [ ] **Step 4: Test contact form on live site — submit a test enquiry, verify it appears in Netlify Forms dashboard**

- [ ] **Step 5: Configure custom domain (when client purchases one)**
  1. Netlify dashboard → **Domain management → Add custom domain**
  2. Point client's domain DNS to Netlify nameservers
  3. HTTPS is provisioned automatically

- [ ] **Step 6: Final checks on live URL**
  - Page loads on mobile
  - Phone number tap-to-call works on mobile
  - WhatsApp link opens WhatsApp
  - Contact form submits successfully
  - All images load
  - Nav hamburger works on mobile

---

## Handoff Notes for Client

- **Replacing placeholder photos:** Drop real project photos into `images/gallery/` named `project-1.jpg` etc., and replace `images/hero.jpg` and `images/about.jpg`. Commit and push — Netlify auto-deploys.
- **Testimonials:** Replace placeholder quotes in `index.html` (Task 7) with real customer quotes from Matt's Facebook/Google reviews.
- **Accreditations:** Replace the four "TBC" badge placeholders in the About section with real accreditation names and logos once Matt confirms them.
- **Logo:** When Matt provides a logo file, place it in `images/logo.svg` (or `.png`) and update the nav and footer to use `<img src="images/logo.svg" alt="MNM">` instead of the text wordmark.
