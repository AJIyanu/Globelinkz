# GlobeLinkz Next.js App Router Conversion

This zip contains the converted Next.js + TypeScript + Tailwind files for the supplied `globelinkz-2.html` landing page.

## Files included

```txt
app/
  layout.tsx
  page.tsx
  globals.css
  api/booking/route.ts
components/
  common/
  forms/
  layout/
  sections/
lib/
  site-config.ts
  types.ts
next.config.ts
tsconfig.json
```

## Notes

- The landing page is structured using the App Router.
- Most of the page is server-rendered by default.
- Only interactive components use `"use client"`: navbar scroll state, reveal animation, and booking form.
- No `any` type is used.
- The booking form posts to `/api/booking`.
- The API route includes mock email sending for the client and website owner.
- Remote images use Unsplash, so `next.config.ts` includes `images.unsplash.com`.
- SEO metadata is included in `app/layout.tsx`.
- JSON-LD structured data is included through `components/common/JsonLd.tsx`.

## Before deploying

Update these values in `lib/site-config.ts`:

```ts
url: "https://globelinkz.com",
ownerEmail: "hello@globelinkz.com",
whatsappNumber: "2347036825350",
```

If you later want real emails, replace `mockSendEmail` in `app/api/booking/route.ts` with Resend, Nodemailer, SendGrid, or your preferred provider.
