# Swapnil Sisodia — Developer Portfolio

A modern, high-performance, single-page portfolio landing page built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

Showcases 3+ years of professional mobile app development experience, flagship applications (Suhavi Audiobooks, SofriPro, Sendio, Meet Summariser), technical skills matrix, work experience timeline, credentials, and interactive contact channels.

---

## 🚀 Live Local Development

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Build & Deployment Options

This portfolio is configured to deploy anywhere with zero friction:

### Option 1: Vercel (Recommended — 1-Click Deployment)
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete portfolio landing page"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep the default settings and click **Deploy**. Vercel will build and deploy the Next.js app automatically.

---

### Option 2: Netlify
1. Connect your repository on [netlify.com](https://netlify.com).
2. Set Build command to: `npm run build`
3. Set Publish directory to: `.next` (or use Netlify Next.js Runtime).

---

### Option 3: GitHub Pages / Cloudflare Pages / Static Hosting (Free)
Run the static export build:

```bash
npm run build:export
```

This generates a standalone `out/` directory containing purely static HTML, CSS, and JS files that can be hosted on GitHub Pages or dragged and dropped onto Cloudflare Pages or Netlify Drop.

---

## 📋 Features Included
- **Hero & Intro**: Highlights 3+ years experience, 30k+ active listeners metric, and open-for-work status.
- **Projects Showcase**: Interactive tabbed project cards with technical specs:
  - *Suhavi Audiobooks* (30k+ active users, IAP, FCM push notifications, iOS & Android releases)
  - *SofriPro Fintech* (KYC BVN/NIN verification, Redux-Saga banking state)
  - *Sendio* (Multi-restaurant food ordering for Norwegian market, Google Maps API)
  - *Meet Summariser AI* (Gemini AI, AWS S3, transcription & summarization)
- **Work Experience**: Complete career history (WebiWork Technologies, Averybit Solutions, Shoppeal Tech).
- **Skills Matrix**: Categorized tags for Mobile, Languages, State Management, Cloud & APIs, Testing, and DevOps.
- **Interactive Contact**: Direct one-click copy buttons for email and phone with instant toast notifications, LinkedIn external link, and interactive direct email draft form.
