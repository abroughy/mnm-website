# MNM Website Design Spec
**Date:** 2026-06-08
**Client:** Matt Norwood Maintenance (MNM)

---

## Overview

A single-page brochure website for Matt Norwood Maintenance, a Gloucester-based building and trades company. The primary goals are lead generation (get visitors to call/WhatsApp for a quote) and credibility building (showcase real work to reassure referrals). Built as plain HTML/CSS/JS, hosted free on Netlify.

---

## Business Details

| Field | Value |
|---|---|
| Business name | Matt Norwood Maintenance (MNM) |
| Owner | Matt Norwood |
| Based | Gloucester |
| Coverage | Gloucestershire |
| Experience | 5 years in the trade |
| Phone / WhatsApp | 07969 359683 |
| Services | Building Renovation, Roofing, Plumbing, Electrics, Groundwork & Decking, Extensions, Kitchens |

---

## Tech Stack

- **HTML5 / CSS3 / vanilla JS** — no frameworks, no dependencies
- **Netlify** — free static hosting, handles contact form submissions via Netlify Forms (no backend required)
- **Custom domain** — client purchases separately (~£10/year via Namecheap or similar)
- **Images** — client-supplied photos of completed work; optimised to WebP at build time

---

## Site Structure

Single scrolling page with a sticky top navigation. All sections reachable via anchor links. No separate pages.

### Navigation
- Logo: text-based placeholder — "MNM" in bold amber on dark background, styled as a wordmark. To be swapped for a real logo asset when client provides one.
- Logo (MNM) left-aligned
- Links: Services | About | Gallery | Testimonials | Contact
- Sticky on scroll, slight background blur on scroll
- Mobile: hamburger menu collapsing to full-screen overlay

### Sections (in order)

#### 1. Hero
- Full-width background: best project photo (cover/parallax)
- Headline: **"Quality Builds Across Gloucestershire"**
- Subheadline: *"Extensions, renovations, roofing and more — built right, first time."*
- Two CTAs side by side:
  - **"Get a Free Quote"** — smooth scrolls to Contact section
  - **"Call Now: 07969 359683"** — `tel:` link, opens dialler on mobile
- Amber accent bar or diagonal cut separating hero from next section

#### 2. Services
- Section heading: **"What We Do"**
- 7 cards in a responsive CSS Grid (3 cols desktop, 2 tablet, 1 mobile)
- Each card: icon (SVG), service name, one-line description

| Service | Description |
|---|---|
| Building Renovation | Bringing properties back to life, inside and out |
| Roofing | Repairs, replacements and new builds done properly |
| Plumbing | Reliable plumbing work for homes and extensions |
| Electrics | Safe, certified electrical installation and repairs |
| Groundwork & Decking | Foundations, driveways, patios and outdoor spaces |
| Extensions | Add space and value to your home |
| Kitchens | Full kitchen fitting from design to finish |

#### 3. About
- Section heading: **"About MNM"**
- Two-column layout (desktop): photo of Matt left, text right
- Copy: *"Matt Norwood has been working in the trades across Gloucestershire for 5 years. From small repairs to full extensions, MNM brings the same care and reliability to every job. Based in Gloucester, we work across the county with a reputation built on word of mouth."*
- Small amber accent line above the heading
- **Accreditations strip** below copy — a row of placeholder badge slots (e.g. Gas Safe, NICEIC, FMB, TrustMark) with "Accreditation name TBC" labels. Client to confirm specific ones and provide badge images.

#### 4. Gallery
- Section heading: **"Our Work"**
- Masonry or CSS Grid photo gallery
- Photos sourced from client (real project photos)
- Lightbox on click (vanilla JS, no library — simple overlay)
- Optional: filter buttons by service type (only if enough photos across categories to warrant it)

#### 5. Testimonials
- Section heading: **"What Our Customers Say"**
- 2–3 quotes displayed as cards with large quotation mark, text, and customer name
- Dark charcoal background to contrast with gallery section
- Quotes to be supplied by client (ask 2–3 past customers for a sentence)

#### 6. Contact
- Section heading: **"Get in Touch"**
- Tagline: *"Free, no-obligation quotes. We cover the whole of Gloucestershire."*
- Two columns:
  - **Left:** Direct contact — phone/WhatsApp button (07969 359683), WhatsApp deep link (`https://wa.me/447969359683`)
  - **Right:** Netlify Form — fields: Name, Phone, Email, Message, Submit
- Form submissions go to Netlify dashboard (no email server needed)

#### Footer
- MNM logo, copyright
- Quick links repeated
- Phone number
- "Serving Gloucester and across Gloucestershire"

---

## Visual Design

### Color Palette
| Role | Value |
|---|---|
| Background (primary) | `#1a1a1a` |
| Background (alternate sections) | `#2c2c2c` |
| Accent | `#e8930a` (warm amber) |
| Text | `#f5f5f5` |
| Text muted | `#a0a0a0` |
| Card background | `#242424` |

### Typography
- **Font:** Inter (Google Fonts, free) — weights 400, 600, 700
- **Headings:** 700 weight, uppercase tracking on section labels
- **Body:** 400 weight, 1.6 line height

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px–1024px
- Desktop: > 1024px

---

## Key UX Decisions

- **Phone number in hero** — most builder site conversions happen via phone call; make it the primary CTA
- **WhatsApp link** — many trade enquiries come via WhatsApp; deep link opens a chat directly
- **No blog, no CMS** — content is stable; Matt doesn't need to update it himself
- **Netlify Forms** — zero-backend contact form, submissions viewable in Netlify dashboard, optional email notifications
- **Real photos only** — no stock imagery; client has good selection of project photos

---

## Hosting & Deployment

1. Code pushed to GitHub repository
2. Netlify connected to GitHub repo — auto-deploys on push
3. Custom domain configured in Netlify DNS settings
4. HTTPS enabled automatically via Netlify (Let's Encrypt)
5. Netlify Forms enabled by adding `netlify` attribute to the `<form>` tag

---

## Out of Scope

- CMS / client self-editing
- Blog
- Online booking system
- Separate pages per service
- Portfolio filtering (unless photo volume warrants it)
