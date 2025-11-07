## Project Review — personal-page

Date: 2025-10-29

### Executive Summary

- Strong foundation with Next.js 15 (React 19), App Router, TypeScript, Tailwind v4.
- Landing focuses on services, materials, and CTAs; structure is clear and modular.
- A few critical bugs and several production-readiness gaps (envs, links, Stripe API version, copy typos).

### Critical Bugs

- Stripe API version appears invalid: `"2025-09-30.clover"` in `app/api/checkout/route.ts`. Use an official version (e.g., `2024-06-20`) or omit to use account default.
- Placeholder assets/links referenced but missing:
  - `/Stepan_Sazanavets_CV.pdf` not present under `public/` (used in multiple components).
  - Notion links and Telegram placeholders (`https://t.me/your_channel`) still in code.
- Typo in CTA: `components/ServicesSection.tsx` uses "Book Wirbrolos".
- README references files not present:
  - `.env.example`
  - `.github/workflows/test.yml`

### High-Impact Improvements

- SEO/Metadata
  - Add `openGraph.images` and `twitter` metadata in `app/layout.tsx`.
  - Consider `metadataBase`, canonical URL, and `robots` for production.
- Accessibility
  - Replace `img` with `next/image` for the portrait in `components/Outro.tsx` and ensure descriptive alt text.
  - Ensure button-like anchors include `aria-label`s where text may be ambiguous.
- Payments
  - Move Stripe price IDs to env: one per product. Validate `productType` -> price mapping server-side; reject unknown types.
  - Add server-side schema validation (e.g., Zod) for `/api/checkout` and `/api/notify`.
- Email/Notifications
  - Implement email delivery (Resend/SendGrid) in `/api/notify` with error handling and rate limiting.
  - Persist signups (e.g., to a sheet/DB) or pipe to ESP list.
- DX/Config
  - Add `.env.example` with all required keys.
  - Fill `next.config.ts` with minimal production options (e.g., `images.domains` if needed, `logging`, and headers if using security headers).
  - Remove unused dependencies (DaisyUI is currently not used much) or adopt it consistently.
- Content hygiene
  - Replace placeholders: booking URL, Notion catalogue URL, Telegram channel URL.
  - Upload the CV and the free PDF to `public/` and update links.
- Resilience
  - Add loader/disabled states where outbound links trigger network calls (some present, keep consistent).
  - Protect `/api/notify` against abuse (basic rate limit, bot checks).

### Minor Improvements

- Tailwind config contains `./pages/**` in `content` which isn’t used in App Router; harmless but can be cleaned.
- Consider throttling the scroll handler in `MobileStickyCTA` (requestAnimationFrame or passive listener) though current lightweight use is fine.
- Unify color tokens via CSS variables and Tailwind theme; avoid hard-coded hex where possible.
- Centralize external URLs in a config file to avoid drift.

### Code Quality Notes

- TypeScript setup is strict and modern (`moduleResolution: bundler`); good.
- API routes: add input schemas and typed responses; narrow `catch` error typing and log with structured context.
- Components are clean; props modeled well. Keep prop types colocated and export only if reused.

### Security

- Avoid logging PII (emails) in `/api/notify` in production; at minimum guard by environment.
- Add basic bot/abuse mitigation to form endpoints (hCaptcha/Turnstile or simple proof-of-work/hidden field).

### Performance

- Replace `img` with `next/image` for better optimization.
- Consider deferring non-critical CSS animations to reduce layout thrash on low-end devices (currently short durations already help).

### Testing/CI

- Add a minimal CI: type-check, lint, build. README references a workflow file that isn’t present.

### Concrete Action Items

1) Fix critical issues
   - Update Stripe API version in `app/api/checkout/route.ts`.
   - Add `/public/Stepan_Sazanavets_CV.pdf` and any referenced assets.
   - Replace placeholder links (Telegram, Notion, booking URL) or gate behind feature flags.
   - Correct "Book Wirbrolos" to a real CTA label.

2) Production readiness
   - Create `.env.example` with all required vars (Stripe keys, booking URL, app URL, email service keys).
   - Implement email sending in `/api/notify` and add basic rate limiting.
   - Add `openGraph.images` and `twitter` metadata.

3) Refinements
   - Switch portrait `img` to `next/image` with dimensions and priority as needed.
   - Clean Tailwind `content` paths and consolidate color usage.
   - Centralize external links in a config.

### File-specific Pointers

- app/api/checkout/route.ts
  - Validate `productType` and map to env-based price IDs.
  - Replace `apiVersion` with a valid Stripe version.

- app/api/notify/route.ts
  - Add provider integration and rate limiting; avoid console logging emails in prod.

- components/ServicesSection.tsx
  - Fix CTA label typo and verify Notion link.

- components/Outro.tsx
  - Use `next/image` and ensure the CV file exists.

- README.md
  - Provide `.env.example` and remove or add the referenced GitHub Actions workflow.

---

If you want, I can implement the critical fixes and create the missing `.env.example` next.


