# amadeu.me

Personal consulting website for Amadeu Tolentino — AI strategy, workflow automation, and operational consulting.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no extra configuration needed.
4. Set your custom domain (`amadeu.me`) in Project Settings → Domains.

### Environment Variables

None required for the static site.

## SEO

- Metadata, Open Graph, and Twitter cards in `src/app/layout.tsx`
- JSON-LD structured data (Person, WebSite, ProfessionalService)
- Auto-generated `sitemap.xml` and `robots.txt`

## Content

Edit copy and links in `src/lib/content.ts`.
