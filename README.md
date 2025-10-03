# Stepan Sazanovets - Personal Portfolio & Course Platform

A modern, professional personal website built with Next.js, serving as both a portfolio and course/mentorship platform for Business Analysts.

## 🚀 Live Site
**[View Live Site](https://your-vercel-url.vercel.app)** (Update with your actual URL)

## 📋 Development Standards

**This project follows strict code quality standards.**

Before contributing, read:
- **[CODE_STANDARDS.md](./CODE_STANDARDS.md)** - Complete development guidelines
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - How to contribute

### APIT Workflow
Every change must follow: **Analyze → Plan → Implement → Test**

### Pre-Commit Requirements
```bash
npm run validate  # Must pass before committing ✅
```

## Features

- **Modern Design**: Clean, glassmorphic design with soft pastel gradients
- **Responsive**: Fully responsive for mobile, tablet, and desktop
- **Course Platform**: Expandable course cards with detailed curriculum
- **Stripe Integration**: Ready for course payments via Stripe Checkout
- **Email Notifications**: API endpoint for course launch notifications
- **Mentorship Program**: Dedicated section for 1-on-1 mentorship
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO Optimized**: Meta tags and Open Graph for social sharing

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + DaisyUI
- **Payments**: Stripe
- **Deployment**: Netlify
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn
- Stripe account (for payment processing)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal-page
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Edit `.env.local` with your credentials:
```env
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
NEXT_PUBLIC_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
personal-page/
├── app/
│   ├── api/
│   │   ├── checkout/      # Stripe checkout API route
│   │   └── notify/        # Email notification API route
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page
├── components/
│   ├── Hero.tsx           # Hero section with profile
│   ├── CoursesSection.tsx # Courses and mentorship cards
│   ├── CourseCard.tsx     # Reusable course card component
│   ├── GameSection.tsx    # Game promotional section
│   └── Footer.tsx         # Footer component
├── public/
│   └── avatar.png         # Profile avatar (replace with your photo)
├── tailwind.config.ts     # Tailwind + DaisyUI configuration
├── netlify.toml           # Netlify deployment configuration
└── package.json
```

## Customization

### Update Profile Information

Edit `components/Hero.tsx`:
- Replace avatar image in `public/avatar.png`
- Update LinkedIn URL
- Update Telegram handle
- Modify bio text

### Configure Courses

Edit `components/CoursesSection.tsx`:
- Update course titles and descriptions
- Modify pricing
- Add/remove curriculum items
- Change availability status

### Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Create product prices in Stripe
4. Update `priceId` in course purchase handlers

### Email Notifications

The notification system is stubbed out. To implement:
1. Choose an email service (SendGrid, Mailgun, AWS SES)
2. Update `app/api/notify/route.ts`
3. Add API credentials to `.env.local`

## Deployment to Netlify

### Option 1: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
netlify deploy --prod
```

### Option 2: Deploy via Git

1. Push your code to GitHub/GitLab
2. Connect repository in Netlify Dashboard
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add environment variables in Netlify Dashboard
5. Deploy!

### Environment Variables on Netlify

Add these in Netlify Dashboard → Site Settings → Environment Variables:
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_URL` (your Netlify URL)

## Development

### Running Tests
```bash
npm run test
```

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

### Build for Production
```bash
npm run build
```

## Accessibility

This site follows WCAG 2.1 AA standards:
- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- ARIA labels
- Sufficient color contrast
- Focus indicators

## Performance

- Lighthouse score target: 90+
- Optimized images with Next.js Image
- Lazy loading
- Font optimization
- Code splitting

## License

© 2025 Stepan Sazanavets. All rights reserved.

## Support

For issues or questions, please open an issue on GitHub.
