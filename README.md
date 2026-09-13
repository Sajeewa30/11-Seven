# 11-seven — website

Marketing + catalogue site for **11-seven** (stationery · phone accessories · gym supplements), No. 204 Kandy Road, Wattegama.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Where things live

| What | Where |
| --- | --- |
| Business details (address, phone, hours, socials, domain) | `src/data/site.ts` |
| Categories, products, prices, badges | `src/data/products.ts` |
| Design tokens (maroon / gold / cream palette, fonts, animations) | `src/app/globals.css` |
| Pages | `src/app/page.tsx` (home), `shop/`, `shop/[slug]/`, `about/`, `contact/` |
| Shared UI | `src/components/` |
| Brand assets (invitation, cropped original wordmark) | `public/brand/` |
| Contact form endpoint | `src/app/api/contact/route.ts` |

## Placeholder content

Everything marked `PLACEHOLDER` in `src/data/*.ts` and the About page copy is stand-in text.
Product tiles render a styled `<PlaceholderArt />` until a product has an `image` path
(drop photos in `public/images/products/` and set `image: "/images/products/<file>.jpg"`).

## Logo

The wordmark is rendered as live text (`src/components/Logo.tsx`) using Poppins Extra Bold with
the gold gradient sampled from the grand-opening invitation. The original artwork is cropped in
`public/brand/wordmark-original.png` (transparent) and `lockup-original.png` for reference.

## Roadmap

1. Replace placeholder copy, prices and photos.
2. Hook `/api/contact` to email / WhatsApp / n8n.
3. Deploy (Vercel or Netlify) and set `site.url` to the real domain.
4. Cart + checkout with **KOKO** pay-later; school-season book-list pre-orders.
