# Project Context

## Overview
Portfolio and digital products site for Stepan Sazanavets - Business Analyst and Product Owner consultant specializing in AI workflows and modern BA practices.

**Purpose**:
- Showcase expertise in business analysis and product ownership
- Sell digital workbooks (electronic products)
- Provide free educational materials
- Offer individual consultation services

**Topics**: Business Analysis, Product Ownership, AI integration, Career development

---

## Services Offered

### Paid Services

#### 1. Individual Consultation
- **Focus**: Career guidance, AI workflows implementation
- **Format**: 1-on-1 sessions (45 minutes)
- **Price**: PLN 190 / session
- **Topics**:
  - Career transitions in BA/PO roles
  - AI tools and workflows for business analysts
  - Skills development strategy
  - Interview preparation

#### 2. AI for Business Analysts Workbook
- **Type**: Digital workbook (electronic product)
- **Status**: Available for purchase
- **Price**: 60 PLN
- **Delivery**: Via Stripe checkout
- **Format**: Downloadable PDF/digital content

#### 3. AI for Project Managers Workbook
- **Type**: Digital workbook (electronic product)
- **Status**: Coming soon
- **Price**: PLN 60 (estimated)
- **Format**: Pre-order or early access notification

---

## Free Materials

### 1. PDF: 7 Prompts and AI Use Cases for Business Analysts
- **Content**:
  - 7 practical AI prompts
  - Real-world use cases
  - System prompts for BA workflows
- **Delivery**: Email download link
- **Purpose**: Lead magnet, showcase expertise

### 2. AI Courses and Materials Catalogue
- **Content**:
  - Curated links to AI courses
  - Tool recommendations
  - Learning path guidance
- **Purpose**: Help BAs understand current AI landscape
- **Format**: Online resource / downloadable guide

### 3. Modern BA Skillset Materials
- **Status**: Coming soon
- **Content**: Skills and competencies for modern business analysts
- **Format**: TBD (guide, checklist, or interactive content)

---

## Target Audience

**Primary**:
- Business Analysts seeking AI skills
- Product Owners interested in AI workflows
- Career changers entering BA/PO roles

**Secondary**:
- Project Managers exploring AI tools
- Companies looking for BA/AI consultation

---

## Technical Stack
- **Framework**: Next.js 15.5.4 (React 19, TypeScript)
- **Styling**: Tailwind CSS 4, DaisyUI
- **Payments**: Stripe (for workbook purchases)
- **Email**: Resend (recommended) or SendGrid (for material delivery)
- **Hosting**: Vercel

---

## Key Differentiators
1. **AI Specialization**: Focus on practical AI integration for BAs/POs
2. **Digital Products**: Self-paced workbooks, not courses
3. **Free Value First**: High-quality free materials to build trust
4. **Career Focus**: Not just skills, but career development guidance

---

## Content Tone & Voice
- Professional but approachable
- Practical, no-nonsense advice
- Eastern European perspective (Minsk → Warsaw journey)
- Tech-savvy but accessible to non-technical BAs

---

## Business Model
1. **Free materials** → Build email list + showcase expertise
2. **Workbooks** → Scalable digital product sales (PLN 60 each)
3. **Consultation** → High-touch, premium service (PLN 190/session)
4. **Future**: Potential mentorship program, community, or cohort-based courses

---

## Known Configuration Status

**⚠️ Not Yet Configured** (blocks going live):
- Stripe product/price IDs (placeholder in code)
- Email service integration (API stubs only)
- Booking system URL (environment variable needed)
- Notion catalogue URL (placeholder link)

**✅ Ready**:
- Dynamic materials system (edit `data/free-materials.ts`)
- CI/CD pipeline (GitHub Actions + Vercel auto-deploy)
- Responsive design and accessibility

---

## Configuration Needs

### Environment Variables

Required for `.env.local` (development) and Vercel (production):

```bash
# Stripe Payment
STRIPE_SECRET_KEY=sk_test_... # or sk_live_... for production
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_... # or pk_live_...

# Email Service (Resend/SendGrid)
EMAIL_API_KEY=... # or RESEND_API_KEY
EMAIL_FROM=noreply@yourdomain.com

# Booking System
NEXT_PUBLIC_BOOKING_URL=https://cal.com/yourname # or Calendly

# App URL (for Stripe redirects)
NEXT_PUBLIC_APP_URL=http://localhost:3000 # Production: https://yourdomain.com
```

### External Services to Configure

**1. Stripe** (for workbook sales)
- Create products in Stripe Dashboard
- Get Price IDs for each workbook
- Configure success/cancel URLs
- Update price IDs in `data/free-materials.ts`

**2. Email Service** (for free material delivery)
- Choose: Resend (recommended) or SendGrid
- Get API key
- Configure sender email
- Update `app/api/notify/route.ts`

**3. Booking System** (for consultations)
- Set up Cal.com or Calendly account
- Get booking URL
- Add to environment variables

### Content Assets

**Files to add to `/public/`**:
- `Stepan_Sazanavets_CV.pdf` - Your CV/resume
- `BA_Prompts_Guide.pdf` - Free PDF material
- Profile images (if needed)

**External Links to Update**:
- Telegram: `https://t.me/psyreq`
- LinkedIn: `https://www.linkedin.com/in/stepansazanovets/`
- Notion catalogue: Update URL in `data/free-materials.ts` (currently placeholder)
- Game URL: `https://stepans-emigrant-game.netlify.app/`

### Deployment Checklist

Before going live on Vercel:
- [ ] All environment variables added to Vercel project settings
- [ ] Stripe products and prices configured
- [ ] Email service integrated and tested
- [ ] CV and free PDF files uploaded to `/public/`
- [ ] All external links verified
- [ ] Test purchase flow end-to-end
- [ ] Test email delivery for free materials
- [ ] Verify booking link works
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit (target 90+ score)

---

## Development Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)

# Quality Checks
npm run type-check       # TypeScript validation
npm run lint             # ESLint
npm run build            # Production build
npm run validate         # Run all checks (type + lint + build)

# Deployment
git push                 # Triggers Vercel auto-deploy
```

---

**Last Updated**: 2025-10-29
