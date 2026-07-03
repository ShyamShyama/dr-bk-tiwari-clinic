# Dr. B. K. Tiwari Clinic — Website

A complete, production-ready 10-page medical clinic website built with **React**, **React Router**, and
**Tailwind CSS**. Designed to build patient trust and drive appointment bookings, with a clean, premium,
mobile-first UI.

## Pages

| Route              | Page                    |
| ------------------- | ----------------------- |
| `/`                  | Home                     |
| `/about`             | About Doctor             |
| `/services`          | Services                 |
| `/appointment`       | Book Appointment          |
| `/gallery`           | Gallery                  |
| `/reviews`           | Patient Reviews          |
| `/faq`               | FAQ                      |
| `/contact`           | Contact                  |
| `/privacy-policy`    | Privacy Policy           |
| `/terms`             | Terms & Disclaimer       |
| `*`                  | 404 Not Found            |

## Getting Started

```bash
npm install
npm run dev       # start local dev server at http://localhost:5173
npm run build     # production build → outputs to /dist
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  components/     Reusable UI: Navbar, Footer, buttons, cards, forms, icons, SEO
  pages/          One file per page (10 pages + 404)
  data/           content.js — all site copy, services, reviews, FAQs, gallery, timings
  index.css       Tailwind directives + design-system utility classes
  App.jsx         Route definitions
  main.jsx        App entry point (Router + SEO provider)
```

## Design System

- **Colors:** Medical Blue (`#0B4F6C` deep / `#1D88B8` bright), soft blue and grey gradients, white — as
  specified in the brief.
- **Typography:** `Fraunces` (elegant serif) for headings, `Plus Jakarta Sans` for body copy, `Inter` for
  small utility/eyebrow labels.
- **Signature element:** a recurring "pulse line" (ECG-style) SVG divider used across every page, tying the
  visual identity to the clinical subject matter without relying on stock stethoscope imagery.
- **Components:** glassmorphism cards, rounded corners, soft shadows, subtle hover/scroll animations, all
  respecting `prefers-reduced-motion`.

## Before Launch — Required Actions

This site is fully functional and production-ready in structure, but it contains **clearly marked
placeholders** for information that must be confirmed by the client before going live. Search the codebase
for `PLACEHOLDER` (primarily in `src/data/content.js`) to find and replace:

- Clinic phone number, WhatsApp number, and email address
- Full clinic street address and verified Google Maps link
- Clinic working hours / timings
- Doctor's qualifications, education, registration number, and achievements
- Consultation fees and cancellation policy
- Real photography of the doctor, clinic, and staff (currently using royalty-free Unsplash placeholder
  images)
- Legal review of the Privacy Policy and Terms & Disclaimer pages by a qualified professional

## Forms

The **Book Appointment** and **Contact** forms are fully validated on the front end but are **not yet
connected to a backend**. Before launch, connect them to one of:

- A form backend service (e.g. Formspree, Getform)
- A custom API endpoint / booking system
- An email service (e.g. via a serverless function)

A WhatsApp-based booking fallback is already wired up and works out of the box once the WhatsApp number in
`src/data/content.js` is confirmed.

## SEO

- Per-page `<title>`, meta description, canonical URL, Open Graph and Twitter Card tags via
  `react-helmet-async` (see `src/components/SEO.jsx`)
- `MedicalClinic` and `FAQPage` JSON-LD schema markup
- `robots.txt` and `sitemap.xml` included in `/public`
- Semantic HTML, descriptive `alt` text, and accessible focus states throughout

## Deployment

This is a static single-page app after `npm run build` — deploy the `/dist` folder to any static host
(Vercel, Netlify, Cloudflare Pages, or a standard web server). If deploying to a host without SPA
rewrite support, configure all routes to fall back to `index.html`.
