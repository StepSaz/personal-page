# Contributing Guidelines

## Development Workflow: APIT

Every change follows this process:

### 1. ANALYZE 🔍
- Understand the requirement
- Identify affected files
- Consider edge cases
- Plan for errors

### 2. PLAN 📝
- Break into small steps
- Plan tests
- Consider accessibility
- Document approach

### 3. IMPLEMENT 💻
- Follow [CODE_STANDARDS.md](./CODE_STANDARDS.md)
- Write clean, typed code
- Handle errors properly
- Add comments for complex logic

### 4. TEST 🧪
**Required before every commit:**
```bash
npm run validate  # Runs type-check + lint + build
```

**Manual testing:**
- Test in browser (desktop + mobile)
- Check console for errors
- Test all interactions
- Verify accessibility

## Quick Start

1. **Clone and install:**
```bash
git clone <repo-url>
cd personal-page
npm install
```

2. **Set up environment:**
```bash
cp .env.example .env.local
# Edit .env.local with your keys
```

3. **Start development:**
```bash
npm run dev
```

4. **Before committing:**
```bash
npm run validate  # Must pass!
```

## Pull Request Process

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes following APIT workflow
3. Run `npm run validate` - must pass ✅
4. Commit with clear message
5. Push and create PR
6. Wait for CI checks to pass
7. Request review

## Code Review Checklist

Reviewers check for:
- [ ] Follows CODE_STANDARDS.md
- [ ] TypeScript strict typing
- [ ] Proper error handling
- [ ] Accessibility standards
- [ ] No console errors
- [ ] Tests pass
- [ ] Responsive design works

## Questions?

See [CODE_STANDARDS.md](./CODE_STANDARDS.md) for detailed guidelines.
