# GlobeLinkz Landing Page - Complete Setup Guide

## Table of Contents
1. [Local Development Setup](#local-development-setup)
2. [Email Service Configuration](#email-service-configuration)
3. [Environment Variables](#environment-variables)
4. [Deployment to Vercel](#deployment-to-vercel)
5. [Post-Launch Checklist](#post-launch-checklist)

---

## Local Development Setup

### Step 1: Install Node.js
- Download from [nodejs.org](https://nodejs.org)
- Install Node.js 18.17 or later
- Verify installation: `node --version` & `npm --version`

### Step 2: Clone/Setup Project
```bash
# Navigate to your project directory
cd globelinkz-landing

# Install dependencies
npm install

# Install optional packages (choose based on your needs)
npm install resend  # If using Resend for emails
```

### Step 3: Create Environment File
```bash
# Copy the template
cp .env.example .env.local

# Edit it with your configuration
# See "Environment Variables" section below
```

### Step 4: Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your site.

### Step 5: Make Your Changes
- Edit components in `src/components/`
- Edit sections in `src/components/sections/`
- Edit metadata in `src/lib/metadata.ts`
- Changes auto-reload in browser

---

## Email Service Configuration

### Option 1: Resend (RECOMMENDED - Best for Vercel)

**Setup:**
1. Go to [resend.com](https://resend.com)
2. Sign up and create account
3. Navigate to API Keys
4. Copy your API key

**Install:**
```bash
npm install resend
```

**Configure .env.local:**
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
ADMIN_EMAIL=admin@globelinkz.com
```

**Update src/app/actions.ts:**
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitBookSession(
  formData: BookSessionInput
): Promise<{ success: boolean; message: string; error?: string }> {
  const validation = bookSessionSchema.safeParse(formData);
  if (!validation.success) {
    return { success: false, message: 'Validation failed', error: 'Invalid form data' };
  }

  const data = validation.data;

  try {
    await resend.emails.send({
      from: 'noreply@globelinkz.com',
      to: process.env.ADMIN_EMAIL!,
      subject: `🎯 New Booking: ${data.name} - Strategy Session`,
      html: `
        <h2>New Strategy Session Booking</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Business Type:</strong> ${data.businessType}</p>
        <p><strong>Location:</strong> ${data.location || 'Not provided'}</p>
        <p><strong>Challenge:</strong> ${data.challenge || 'Not provided'}</p>
        <p><em>Time: ${new Date().toLocaleString()}</em></p>
      `,
    });

    return { success: true, message: 'Booking submitted successfully!' };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: 'Failed to submit booking',
      error: 'Please try again later',
    };
  }
}
```

### Option 2: SendGrid

**Setup:**
1. Go to [sendgrid.com](https://sendgrid.com)
2. Create account and verify email
3. Get API key from Settings

**Install:**
```bash
npm install @sendgrid/mail
```

**Configure .env.local:**
```
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
ADMIN_EMAIL=admin@globelinkz.com
```

**Update src/app/actions.ts:**
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// In submitBookSession function:
try {
  await sgMail.send({
    to: process.env.ADMIN_EMAIL!,
    from: 'noreply@globelinkz.com',
    subject: `New Booking: ${data.name}`,
    html: `<h2>New Strategy Session Booking</h2>...`,
  });
  return { success: true, message: 'Booking submitted successfully!' };
} catch (error) {
  return { success: false, error: 'Failed to send email' };
}
```

### Option 3: Mailgun

**Setup:**
1. Go to [mailgun.com](https://mailgun.com)
2. Create account
3. Verify domain and get API key

**Install:**
```bash
npm install mailgun.js
```

**Configure .env.local:**
```
MAILGUN_API_KEY=key-xxxxxxxxxxxxx
MAILGUN_DOMAIN=mail.globelinkz.com
ADMIN_EMAIL=admin@globelinkz.com
```

### Option 4: AWS SES

**Setup:**
1. Go to [aws.amazon.com](https://aws.amazon.com)
2. Navigate to SES (Simple Email Service)
3. Verify domain and get credentials

**Install:**
```bash
npm install @aws-sdk/client-ses
```

**Configure .env.local:**
```
AWS_SES_REGION=us-east-1
AWS_SES_ACCESS_KEY_ID=xxxxxxxxxxxxx
AWS_SES_SECRET_ACCESS_KEY=xxxxxxxxxxxxx
ADMIN_EMAIL=admin@globelinkz.com
```

---

## Environment Variables

### Create .env.local File

```bash
# Email Configuration (choose one above)
RESEND_API_KEY=
ADMIN_EMAIL=admin@globelinkz.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://globelinkz.com
NEXT_PUBLIC_WHATSAPP_NUMBER=2347036825350

# Optional: Analytics
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTAG_ID=

# Optional: Database (if using)
DATABASE_URL=
```

### Environment Variables Explained
- `RESEND_API_KEY` - Your Resend email service API key
- `ADMIN_EMAIL` - Where form submissions will be sent
- `NEXT_PUBLIC_*` - Safe to expose in frontend
- `DATABASE_URL` - If using Prisma/Database

---

## Deployment to Vercel

### Method 1: Vercel CLI (Fastest)

**Install Vercel CLI:**
```bash
npm install -g vercel
```

**Deploy:**
```bash
vercel
```

**Follow prompts:**
1. Confirm project name
2. Confirm project root
3. Skip build settings (defaults are fine)
4. Add environment variables when prompted

### Method 2: GitHub + Vercel Dashboard

**Step 1: Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/globelinkz-landing.git
git push -u origin main
```

**Step 2: Connect to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import project
4. Select repository
5. Add environment variables
6. Deploy!

### Method 3: Docker (Advanced)

```bash
# Create Dockerfile
docker build -t globelinkz-landing .
docker run -p 3000:3000 globelinkz-landing
```

---

## Post-Launch Checklist

### Pre-Launch (Before Going Live)
- [ ] Test all forms locally
- [ ] Test email submission (check inbox + spam)
- [ ] Test on mobile (iOS + Android)
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Verify all links work
- [ ] Check for console errors (F12)
- [ ] Test WhatsApp link
- [ ] Verify OG image displays on social media

### Launch Day
- [ ] Update DNS if new domain
- [ ] Update website links in social media bios
- [ ] Test live website thoroughly
- [ ] Set up analytics (Google Analytics 4)
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

### First Week
- [ ] Monitor error logs
- [ ] Check form submissions
- [ ] Review analytics
- [ ] Test forms from different locations
- [ ] Monitor page speed (Lighthouse)

### Monthly Maintenance
- [ ] Review form submissions
- [ ] Check for broken links
- [ ] Update testimonials if new
- [ ] Monitor SEO rankings
- [ ] Check email delivery
- [ ] Update dependencies (`npm update`)
- [ ] Review security issues (`npm audit`)

---

## Common Issues & Solutions

### Issue: "Module not found"
```bash
# Solution: Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Email not sending
1. Check API key is correct in `.env.local`
2. Verify admin email address is correct
3. Check spam folder
4. Review email service error logs
5. Test with simple text email first

### Issue: Images not loading
1. Check image URLs are correct
2. Verify image service is allowed in `next.config.js`
3. Optimize images with webp format

### Issue: Form not submitting
1. Check browser console for errors (F12)
2. Check network tab - see response
3. Verify Zod schema allows the data
4. Check server action is defined in `actions.ts`

### Issue: Build fails on Vercel
1. Check build logs in Vercel dashboard
2. Ensure all env variables are set
3. Run `npm run build` locally to test
4. Check for TypeScript errors: `npm run type-check`

---

## Performance Optimization

### Image Optimization
```typescript
import Image from 'next/image';

// Always use Next.js Image for optimization
<Image
  src="/image.jpg"
  alt="Description"
  width={1200}
  height={630}
  priority={isAboveTheFold}
/>
```

### Code Splitting
```typescript
// Automatic with Next.js - each page is a separate bundle
// Use dynamic imports for heavy components:
const Component = dynamic(() => import('./heavy-component'), {
  loading: () => <div>Loading...</div>,
});
```

### Caching
```typescript
// In next.config.js - already configured
// Cache static content for 60+ seconds
// ISR (Incremental Static Regeneration) for dynamic content
```

---

## SEO Best Practices

### Metadata
- ✅ Unique title tags per page
- ✅ Meta descriptions (155 chars)
- ✅ Open Graph images
- ✅ Twitter cards

### Structure
- ✅ H1 on every page (only 1)
- ✅ Proper heading hierarchy (H2 → H3)
- ✅ Alt text on all images
- ✅ Internal links

### Content
- ✅ Target keywords naturally
- ✅ Update content regularly
- ✅ 300+ words per page
- ✅ Mobile optimized

### Technical
- ✅ Fast page load (< 2s)
- ✅ Mobile responsive
- ✅ HTTPS only
- ✅ XML sitemap
- ✅ robots.txt

---

## Monitoring & Analytics

### Google Analytics 4
```bash
# Install Vercel Analytics
npm install @vercel/analytics @vercel/speed-insights
```

```typescript
// In src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

### Error Tracking
Consider adding:
- Sentry for error tracking
- LogRocket for session replay
- Hotjar for user behavior

---

## Support & Resources

### Official Docs
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)

### Community
- [Next.js Discord](https://discord.gg/nextjs)
- [Tailwind Discord](https://discord.gg/tailwindcss)
- [Stack Overflow](https://stackoverflow.com)

### Contact
- WhatsApp: +234 703 682 5350
- Email: admin@globelinkz.com
- Website: globelinkz.com

---

**You're all set! Happy coding! 🚀**
