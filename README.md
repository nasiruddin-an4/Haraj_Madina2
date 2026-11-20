# Used Furniture — Next.js

Arabic-only (`dir="rtl"`) website for Haraj Madina, a used-furniture buyer in Madinah. Built with **Next.js 16** (App Router, Turbopack), **React 19** and **Tailwind CSS v4**. Every page is statically prerendered.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Content

**All page content comes from [`src/content/data.json`](src/content/data.json), from its `ar` section.** To change any text, phone number, service, purchase, FAQ entry or article, edit that file. The `en` section is kept in the file but nothing uses it.

| What | File |
| --- | --- |
| All page text, services, purchases, FAQ, articles | `src/content/data.json` (`ar`) |
| Data helpers, nav links, site domain, small interface labels | `src/lib/data.ts` |
| Brand colors and font (Tailwind `@theme`) | `src/app/globals.css` |
| Images referenced by `data.json` | `public/` |

## Pages

| Route | Built from |
| --- | --- |
| `/` | `home`, `services`, `recentPurchases`, `whyUs`, `seoArticles`, `faq` |
| `/used-furniture`, `/used-appliances`, `/restaurant-equipment`, `/used-kitchens`, `/scrap-buyer`, `/used-ikea-furniture` | `services[slug]` |
| `/purchases/[slug]` | `recentPurchases` |
| `/contact` | `contactPage` (the form sends a WhatsApp message; nothing is stored) |

Adding a service or purchase to `data.json` creates its page automatically.

## Home page: design sections and their data

The home page keeps the original template design. Each section reads from this part of `data.json`:

| Section (original design) | data.json |
| --- | --- |
| Hero (background photo, WhatsApp and phone buttons) | `home.hero`, `business.phoneDisplay` |
| About (heading and text in two columns) | `home.aboutStore` |
| Navy services section with photo cards | `home.servicesSection`, `services` |
| Why us (background photo, bordered cards) | `whyUs` |
| First article | `home.highestPriceSection` |
| Second article (grey background) | `home.whatWeBuySection`, `home.infoColumns` |
| Navy tile grid | `home.recentPurchasesSection`, `recentPurchases` |
| Last article | `seoArticles` |

## Not in data.json

- **Site domain:** `SITE_URL` in `src/lib/data.ts`.
- **Map location:** the Google Maps embed in `src/app/contact/page.tsx`.
- **Design images:** the logo, hero background and why-us background in `public/images/`.
- **Interface labels:** the FAQ heading, menu buttons and 404 text are in `ui` in `src/lib/data.ts`.
