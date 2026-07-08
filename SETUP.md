# Lavish Foods — lavishfoods.de

## Quick Start

```bash
npm install
npm run dev
# → open http://localhost:3000
```

## Deploy to Vercel (3 steps)

### 1. Push to GitHub
```bash
cd lavishfoods-de
git init
git add .
git commit -m "Initial commit — lavishfoods.de"
gh repo create lavishfoods-de --public --push
# or: git remote add origin https://github.com/YOUR_USERNAME/lavishfoods-de.git
# then: git push -u origin main
```

### 2. Import on Vercel
1. Go to https://vercel.com/new
2. Import your `lavishfoods-de` GitHub repo
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy** — done in ~60 seconds

### 3. Add your domain
In Vercel → Project → Settings → Domains:
- Add `lavishfoods.de` and `www.lavishfoods.de`
- Copy the DNS records Vercel shows you
- In your domain registrar's DNS panel, add those records
- Vercel auto-provisions SSL

---

## Update your WhatsApp number

Open these two files and replace `923001234567` with your actual number (country code + number, no `+` or spaces):

- `app/components/Navbar.tsx` — line with `const WHATSAPP`
- `app/components/Hero.tsx` — line with `const WHATSAPP`
- `app/components/ExportProcess.tsx` — line with `const WHATSAPP`
- `app/components/InquiryForm.tsx` — line with `const PHONE`
- `app/components/Footer.tsx` — line with `const WHATSAPP`

Example for a Pakistani number +92 300 123 4567:
```
const PHONE = "923001234567"
```

---

## Project Structure

```
lavishfoods-de/
├── app/
│   ├── layout.tsx          ← metadata, fonts
│   ├── page.tsx            ← assembles all sections
│   ├── globals.css         ← Tailwind + custom styles
│   └── components/
│       ├── Navbar.tsx      ← sticky nav + mobile menu
│       ├── Hero.tsx        ← hero + stats
│       ├── CertBar.tsx     ← scrolling certifications ticker
│       ├── Products.tsx    ← 6 paddy varieties
│       ├── WhyUs.tsx       ← 6 buyer reasons
│       ├── WhatWeDo.tsx    ← 6 services
│       ├── WhyBasmati.tsx  ← origin story + quality bars
│       ├── Processing.tsx  ← 8-stage mill process
│       ├── Infrastructure.tsx ← facility stats
│       ├── QualityControl.tsx ← 9-parameter lab table
│       ├── FeaturedVarieties.tsx ← 12 grade cards
│       ├── ExportProcess.tsx  ← 4 steps + docs + terms
│       ├── Packaging.tsx   ← 6 packaging formats
│       ├── GlobalReach.tsx ← regions + ports
│       ├── Testimonials.tsx ← 5 buyer quotes
│       ├── InquiryForm.tsx ← WhatsApp-connected form
│       └── Footer.tsx      ← links + certs + CTA
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── .gitignore
```

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (hosting)
