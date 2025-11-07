# Code Standards

## Development Workflow: APIT

Every task follows the **APIT** methodology:

1. **Analyze** - Understand the context, read relevant files, identify patterns
2. **Plan** - Break down into steps, use TodoWrite for tracking
3. **Implement** - Write clean, type-safe code following these standards
4. **Test** - Validate changes with `npm run validate` (type-check, lint, build)

---

## Project Structure

```
personal-page/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
├── data/                  # Static data files
└── public/               # Static assets
```

---

## TypeScript Standards

### Strict Mode
- `strict: true` in tsconfig.json
- No `any` types without justification
- Explicit return types for functions
- Use TypeScript for all new files (.ts/.tsx)

### Type Definitions
```typescript
// ✅ Good
interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return <div>...</div>;
}

// ❌ Bad
export default function ServiceCard(props: any) {
  return <div>...</div>;
}
```

### Environment Variables
- Use `process.env.NEXT_PUBLIC_*` for client-side vars
- Provide fallbacks for optional environment variables
- Never commit `.env` files

```typescript
// ✅ Good
const url = process.env.NEXT_PUBLIC_BOOKING_URL || "#";

// ❌ Bad
const url = process.env.NEXT_PUBLIC_BOOKING_URL; // Could be undefined
```

---

## React/Next.js Standards

### Component Structure
- Use functional components with TypeScript
- One component per file
- Default export for components
- Props interface defined above component

```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

### Server vs Client Components
- Default to Server Components (Next.js 15 App Router)
- Use `'use client'` only when needed (event handlers, useState, useEffect)
- Keep client components minimal

### Naming Conventions
- **Components**: PascalCase (e.g., `ServiceCard.tsx`)
- **Files**: PascalCase for components, kebab-case for utilities
- **Variables/Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **CSS Classes**: Tailwind utilities (no custom classes unless necessary)

---

## Styling Standards

### Tailwind CSS
- Use Tailwind utility classes exclusively
- No inline styles or custom CSS unless absolutely necessary
- Use theme colors defined in `tailwind.config.js`
- Responsive design: mobile-first approach

```typescript
// ✅ Good
<div className="px-6 lg:px-12 pt-20 pb-12">

// ❌ Bad
<div style={{ padding: '20px' }}>
```

### Theme Colors
- Use semantic color names from config:
  - `brand-purple`: Primary brand color
  - `brand-green`: Accent color
  - Follow existing gradient patterns

---

## Code Quality

### ESLint
- Follow `next/core-web-vitals` and `next/typescript` configs
- No ESLint warnings or errors allowed
- Run `npm run lint` before committing

### Accessibility
- Use semantic HTML elements
- Include `alt` text for images
- Use `aria-*` attributes where appropriate
- Proper heading hierarchy (h1 → h2 → h3)
- Keyboard navigation support

```typescript
// ✅ Good
<button onClick={handleClick} aria-label="Close dialog">
  <XIcon />
</button>

// ❌ Bad
<div onClick={handleClick}>
  <XIcon />
</div>
```

### Performance
- Use Next.js Image component for images
- Lazy load components when appropriate
- Minimize client-side JavaScript
- Use React Server Components by default

---

## API Routes

### Structure
- Place in `app/api/[name]/route.ts`
- Export named functions: `GET`, `POST`, `PUT`, `DELETE`
- Use Next.js `NextRequest` and `NextResponse`

### Error Handling
```typescript
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Process request
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### Security
- Validate all inputs
- Use environment variables for secrets
- Never expose API keys client-side
- Implement rate limiting for production

---

## Git Standards

### Commit Messages
- Use conventional commits format:
  - `feat:` New features
  - `fix:` Bug fixes
  - `docs:` Documentation changes
  - `refactor:` Code refactoring
  - `test:` Test changes
  - `chore:` Build/config changes

```bash
# ✅ Good
feat: Add materials section with workbook card
fix: Resolve TypeScript error in checkout route
docs: Update README with deployment steps

# ❌ Bad
updated stuff
fixed bug
changes
```

### Branch Strategy
- `master`: Production-ready code
- Feature branches: `feature/description`
- Bug fixes: `fix/description`

### Pre-commit Checklist
1. Run `npm run validate` (type-check, lint, build)
2. Test manually in browser
3. Review git diff
4. Write clear commit message

---

## Testing Standards

### Validation Pipeline
Always run before committing:
```bash
npm run validate
```

This runs:
1. `npm run type-check` - TypeScript compilation
2. `npm run lint` - ESLint checks
3. `npm run build` - Production build test

### Manual Testing
- Test in both Chrome and Safari
- Test responsive design (mobile, tablet, desktop)
- Test all interactive elements
- Verify external links open in new tabs

---

## Dependencies

### Adding New Dependencies
1. Justify the need (avoid bloat)
2. Check bundle size impact
3. Verify TypeScript support
4. Add to appropriate section:
   - `dependencies`: Runtime requirements
   - `devDependencies`: Build/dev tools

### Current Stack
- **Framework**: Next.js 15.5 with App Router
- **UI**: React 19, Tailwind CSS 4, DaisyUI
- **Language**: TypeScript 5
- **Payments**: Stripe
- **Linting**: ESLint 9

---

## Error Handling

### Client-Side
```typescript
// ✅ Good
try {
  const response = await fetch('/api/endpoint');
  if (!response.ok) {
    throw new Error('Request failed');
  }
  const data = await response.json();
  return data;
} catch (error) {
  console.error('Error fetching data:', error);
  // Show user-friendly error message
}
```

### Server-Side
```typescript
// ✅ Good
export async function GET() {
  try {
    // Business logic
    return NextResponse.json({ data });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
```

---

## Documentation

### Code Comments
- Use comments sparingly (code should be self-documenting)
- Comment "why" not "what"
- Use JSDoc for public APIs

```typescript
// ✅ Good
// Fallback to # to prevent navigation error when URL is not configured
const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#";

// ❌ Bad
// Set the booking URL variable
const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#";
```

### README Updates
- Update README for significant changes
- Document new environment variables
- Include setup instructions for new features

---

## Best Practices

### DRY (Don't Repeat Yourself)
- Extract reusable components
- Create utility functions for common operations
- Use data files for repeated content

### KISS (Keep It Simple, Stupid)
- Favor simple solutions
- Avoid premature optimization
- Write readable code over clever code

### YAGNI (You Aren't Gonna Need It)
- Don't add functionality until needed
- Remove unused code and dependencies
- Keep components focused and single-purpose

### Component Composition
```typescript
// ✅ Good - Composable
<Card>
  <CardHeader title="Service" />
  <CardBody>Content</CardBody>
</Card>

// ❌ Bad - Monolithic
<ComplexCard title="Service" body="Content" hasHeader hasFooter />
```

---

## Performance Checklist

- [ ] Use Next.js Image component
- [ ] Optimize images (WebP, correct sizes)
- [ ] Minimize JavaScript bundles
- [ ] Use Server Components by default
- [ ] Implement proper caching strategies
- [ ] Lazy load below-the-fold content
- [ ] Monitor Core Web Vitals

---

## Accessibility Checklist

- [ ] Semantic HTML elements
- [ ] Proper heading hierarchy
- [ ] Alt text for images
- [ ] ARIA labels for interactive elements
- [ ] Keyboard navigation works
- [ ] Sufficient color contrast
- [ ] Focus indicators visible
- [ ] Screen reader tested

---

## Questions?

When in doubt:
1. Check existing code for patterns
2. Follow Next.js and React best practices
3. Prioritize TypeScript safety
4. Run `npm run validate` frequently
5. Ask for code review

**Remember**: Code is read more often than written. Optimize for readability and maintainability.
