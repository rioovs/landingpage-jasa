# Landing Page — Next.js + shadcn/ui

A modern, professional landing page built with Next.js 15, shadcn/ui components, and Tailwind CSS.

## Features

- ⚡ Next.js 15 with App Router
- 🎨 shadcn/ui components (Button, Card, Badge)
- 💨 Tailwind CSS for styling
- ✨ Framer Motion animations
- 📱 Fully responsive design
- 🌙 Modern gradient design

## Project Structure

```
.
├── app/
│   ├── sections/        # Page sections
│   │   ├── hero.tsx
│   │   ├── stats-bar.tsx
│   │   ├── pricing.tsx
│   │   ├── terms.tsx
│   │   ├── payment.tsx
│   │   └── footer.tsx
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   └── ui/              # shadcn/ui components
├── lib/
│   └── utils.ts         # Utility functions
├── next.config.js       # Next.js config
├── tailwind.config.ts   # Tailwind config
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static files will be generated in the `dist` folder.

## Sections

1. **Hero** — Gradient hero section with CTA buttons
2. **Stats Bar** — Key metrics display
3. **Pricing** — Two-tier pricing cards (Standard & Premium)
4. **Terms** — Service terms and conditions
5. **Payment** — Bank account information with copy-to-clipboard
6. **Footer** — Contact info and social links

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animation**: Framer Motion
- **Icons**: Lucide React
