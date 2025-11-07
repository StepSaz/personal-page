# Stepan Sazanavets - Portfolio & Digital Products

Portfolio and workbooks platform for Business Analysts and Product Owners specializing in AI integration.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📋 What's This?

- **Portfolio**: Showcase BA/PO expertise in AI workflows
- **Digital Products**: Sell workbooks via Stripe
- **Free Materials**: Lead magnets (PDF guides, catalogues)
- **Consultations**: Booking integration for 1-on-1 sessions

See [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) for detailed product vision.

## 🛠 Tech Stack

- **Next.js 15.5.4** (React 19, TypeScript, App Router)
- **Tailwind CSS 4** + DaisyUI
- **Stripe** (payments)
- **Vercel** (hosting)

## 📁 Project Structure

```
app/
├── api/
│   ├── checkout/          # Stripe checkout
│   └── notify/            # Email notifications
├── globals.css
├── layout.tsx
└── page.tsx               # Main landing page

components/
├── MaterialCard.tsx       # Dynamic material cards
├── MaterialsSection.tsx   # Free & paid materials grid
├── HeroWithServices.tsx   # Hero + services section
├── GameSection.tsx
├── Outro.tsx
└── ...

data/
└── free-materials.ts      # Config for all materials (edit here!)

public/
└── rick-morty-portrait.png
```

## 🔧 Configuration

### Required Environment Variables

```bash
# Stripe
STRIPE_SECRET_KEY=sk_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...

# Email Service (Resend/SendGrid)
EMAIL_API_KEY=...
EMAIL_FROM=noreply@yourdomain.com

# Booking
NEXT_PUBLIC_BOOKING_URL=https://cal.com/yourname

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Add these to:
- `.env.local` for development
- Vercel project settings for production

### Adding New Materials

Edit [data/free-materials.ts](data/free-materials.ts):

```typescript
export const freeMaterials: FreeMaterial[] = [
  {
    id: 'new-material',
    title: 'Your Title',
    description: 'Description...',
    type: 'email-download', // or 'external-link', 'purchase', 'coming-soon'
    emailType: 'new-material-type',
    order: 4,
  },
];
```

Component auto-renders new materials. No code changes needed!

## 🧪 Development Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run type-check   # TypeScript validation
npm run lint         # ESLint
npm run validate     # All checks (type + lint + build)
```

**Before committing**: Run `npm run validate` ✅

## 🚀 Deployment (Vercel)

1. Push to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy!

Vercel auto-deploys on every `git push`.

## 📚 Documentation

- [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) - Product vision, services, configuration
- [.github/workflows/test.yml](.github/workflows/test.yml) - CI pipeline

## 🎯 Pre-Launch Checklist

- [ ] Configure Stripe products and price IDs
- [ ] Set up email service (Resend/SendGrid)
- [ ] Add booking URL (Cal.com/Calendly)
- [ ] Upload CV and free PDF to `/public/`
- [ ] Update all external links
- [ ] Test purchase flow
- [ ] Test email delivery
- [ ] Verify mobile responsiveness

See full checklist in [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md).

## 📄 License

© 2025 Stepan Sazanavets. All rights reserved.
