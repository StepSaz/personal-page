# Code Standards & Development Workflow

## 🎯 Core Principle
**Only production-ready code is committed.**

## 📋 Development Workflow: APIT

Every change must follow this four-step process:

### 1. **ANALYZE** 🔍
Before writing any code, understand the problem:
- What is the requirement?
- What files will be affected?
- What are the dependencies?
- Are there any potential side effects?
- What edge cases need to be handled?

**Example:**
```
Task: Add a new contact form
Analysis:
- Need new component: components/ContactForm.tsx
- Need API route: app/api/contact/route.ts
- Dependencies: React Hook Form, email service
- Edge cases: validation, rate limiting, spam prevention
```

### 2. **PLAN** 📝
Create a detailed implementation plan:
- Break down into small, testable steps
- Identify reusable components or utilities
- Plan error handling
- Consider accessibility
- Plan testing approach

**Example:**
```
Plan:
1. Create ContactForm component with validation
2. Add API route with rate limiting
3. Implement email service integration
4. Add error handling and user feedback
5. Test all edge cases
6. Update documentation
```

### 3. **IMPLEMENT** 💻
Write clean, maintainable code following these standards:

#### TypeScript Standards
- ✅ Always use TypeScript for new files
- ✅ Define proper interfaces/types
- ✅ Avoid `any` type
- ✅ Use strict type checking

```typescript
// ✅ Good
interface CourseCardProps {
  title: string;
  price: number;
  available: boolean;
  onPurchase?: () => void;
}

// ❌ Bad
interface CourseCardProps {
  title: any;
  price: any;
  available: any;
  onPurchase?: any;
}
```

#### React Standards
- ✅ Use functional components
- ✅ Use proper hooks (useState, useEffect, etc.)
- ✅ Extract reusable logic into custom hooks
- ✅ Use React.memo for expensive components
- ✅ Escape HTML entities (&apos; not ')

```typescript
// ✅ Good
export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <h1>Hi! I&apos;m Stepan</h1>
  );
}

// ❌ Bad
export default function Hero() {
  return (
    <h1>Hi! I'm Stepan</h1>
  );
}
```

#### Next.js Image Optimization
- ✅ Use `next/image` instead of `<img>`
- ✅ Specify width and height
- ✅ Use proper alt text

```typescript
// ✅ Good
import Image from 'next/image';

<Image
  src="/avatar.jpg"
  alt="Stepan Sazanovets"
  width={200}
  height={200}
/>

// ❌ Bad
<img src="/avatar.jpg" alt="Stepan Sazanovets" />
```

#### CSS/Styling Standards
- ✅ Use Tailwind CSS utility classes
- ✅ Follow mobile-first approach
- ✅ Use DaisyUI components when appropriate
- ✅ Maintain consistent spacing (4, 8, 12, 16, 20, 24)

```typescript
// ✅ Good - Mobile first, consistent spacing
<div className="p-4 md:p-6 lg:p-8">

// ❌ Bad - Inconsistent, desktop-first
<div className="lg:p-5 md:p-7 p-3">
```

#### Code Organization
```
app/
├── api/           # API routes
│   ├── checkout/
│   └── notify/
├── globals.css    # Global styles
├── layout.tsx     # Root layout
└── page.tsx       # Pages

components/
├── Hero.tsx       # Feature components
├── CourseCard.tsx # Reusable components
└── Footer.tsx

public/
└── avatar.jpg     # Static assets
```

#### Error Handling
- ✅ Always handle errors gracefully
- ✅ Provide user-friendly error messages
- ✅ Log errors for debugging
- ✅ Use try-catch for async operations

```typescript
// ✅ Good
try {
  const response = await fetch('/api/checkout');
  if (!response.ok) {
    throw new Error('Payment failed');
  }
  const data = await response.json();
  return data;
} catch (error) {
  console.error('Checkout error:', error);
  toast.error('Payment failed. Please try again.');
  return null;
}

// ❌ Bad
const data = await fetch('/api/checkout').then(r => r.json());
```

#### Accessibility (WCAG 2.1 AA)
- ✅ Semantic HTML elements
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation support
- ✅ Sufficient color contrast
- ✅ Alt text for images

```typescript
// ✅ Good
<button
  aria-label="Purchase course"
  onClick={handlePurchase}
  className="btn btn-primary"
>
  Buy Now
</button>

// ❌ Bad
<div onClick={handlePurchase}>Buy Now</div>
```

### 4. **TEST** 🧪
Before committing, verify everything works:

#### Pre-Commit Checklist
- [ ] Run `npm run validate` (type-check + lint + build)
- [ ] Test in browser (desktop & mobile)
- [ ] Check console for errors/warnings
- [ ] Test all user interactions
- [ ] Verify accessibility (keyboard navigation)
- [ ] Check responsive design
- [ ] Review code for best practices

#### Testing Commands
```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build
npm run build

# All checks
npm run validate
```

#### Manual Testing Checklist
- [ ] Does it work on Chrome?
- [ ] Does it work on mobile (responsive)?
- [ ] Are all links working?
- [ ] Are all buttons working?
- [ ] Does it handle errors gracefully?
- [ ] Is loading state handled?
- [ ] Are success messages shown?

## 🚫 Common Mistakes to Avoid

### TypeScript
```typescript
// ❌ BAD - Using any
const handleClick = (data: any) => {}

// ✅ GOOD - Proper typing
const handleClick = (data: FormData) => {}
```

### React
```typescript
// ❌ BAD - Unescaped apostrophes
<h1>I'm a developer</h1>

// ✅ GOOD - Escaped entities
<h1>I&apos;m a developer</h1>
```

### Images
```typescript
// ❌ BAD - Regular img tag
<img src="/photo.jpg" />

// ✅ GOOD - Next.js Image
import Image from 'next/image';
<Image src="/photo.jpg" width={500} height={300} alt="Description" />
```

### API Routes
```typescript
// ❌ BAD - No error handling, no environment check
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// ✅ GOOD - Safe initialization
const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;
```

## 📦 Git Workflow

### Commit Message Format
```
<type>: <short description>

<detailed description if needed>

- Added/Changed/Fixed item 1
- Added/Changed/Fixed item 2
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code refactoring
- `style`: Styling changes
- `docs`: Documentation
- `test`: Tests
- `chore`: Build/config changes

**Example:**
```
feat: Add contact form with validation

Implemented new contact form component with:
- Email validation
- Rate limiting
- Error handling
- Success notifications
```

### Before Pushing
```bash
# 1. Validate code
npm run validate

# 2. If validation passes, commit
git add .
git commit -m "your message"

# 3. Push (GitHub Actions will test again)
git push
```

## 🔧 Environment Setup

### Required Files
- `.env.local` - Local environment variables (never commit!)
- `.env.example` - Template for environment variables (commit this)

### Environment Variables
```bash
# .env.local (never commit)
STRIPE_SECRET_KEY=sk_test_actual_key_here
NEXT_PUBLIC_URL=http://localhost:3000

# .env.example (commit this)
STRIPE_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_URL=http://localhost:3000
```

## 📊 Code Quality Metrics

### Performance
- Lighthouse score: 90+ for all categories
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation works
- Screen reader friendly
- Color contrast ratio ≥ 4.5:1

### Best Practices
- No console errors in production
- No TypeScript errors
- ESLint warnings resolved
- Proper error handling
- Loading states for async operations

## 🎯 Production Readiness Checklist

Before deploying:
- [ ] All tests pass locally (`npm run validate`)
- [ ] GitHub Actions CI passes
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices
- [ ] No console errors or warnings
- [ ] Environment variables set in deployment platform
- [ ] Performance tested (Lighthouse)
- [ ] Accessibility tested
- [ ] Error handling verified
- [ ] Loading states implemented
- [ ] Success/error messages shown to users

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Best Practices](https://react.dev/learn)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [DaisyUI Components](https://daisyui.com/components/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Remember: Quality over speed. Take time to do it right the first time.**
