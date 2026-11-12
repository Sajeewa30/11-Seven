# 11-seven — website

Informational site for **11-seven** (stationery · phone accessories · gym supplements), No. 204 Kandy Road, Wattegama.
Fully static — no database, no forms, no cart. Every page is pre-rendered at build time.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Pages

| Route | What |
| --- | --- |
| `/` | Home — hero, what we sell, school-season banner, why us, visit info |
| `/about` | Story, shop facts, values (optional photo slot: `storyImage` in the page file) |
| `/school-season` | School-season offer: book lists, pay in 3 with KOKO, FAQ (shareable link) |
| `/contact` | Call, WhatsApp, email (when set), directions, opening hours |
| `/policies` | Returns & exchanges, KOKO payments, WhatsApp orders, privacy |

## Where to edit things

| What | Where |
| --- | --- |
| Address, phone, email, hours, social links | `src/data/site.ts` → `site` |
| School-season dates | `src/data/site.ts` → `schoolSeason` |
| Departments and the items listed under each | `src/data/site.ts` → `departments` |
| Colours, fonts | `src/app/globals.css` |
| Store policy wording | `src/app/policies/page.tsx` |

`email` and the `social` links are empty on purpose — anything left empty is hidden, so the site never shows a fake value.

## Photos

Photos live in `public/images/` (4:3, pre-compressed) and are served as-is (`images.unoptimized` in `next.config.ts`).
To swap one, replace the file with the same name. To add a photo to a department, set `image` and `imageAlt` on it in
`src/data/site.ts`. `public/og.jpg` (1200×630) is the link-preview image.

## Accessibility

All text colour pairs meet WCAG 2.1 AA (4.5:1). Gold is only used as text in its darkest shade (`gold-700`, 5.8:1+) on light
surfaces, or its lightest shades on maroon. Checked with axe-core: no contrast or ARIA violations on any page.

## Deploying

The live domain is **11seven.lk** (see `HANDOFF.md` for connecting it).

- **Netlify (current):** deploys from `main`. The site address used for canonical URLs, the sitemap and link-preview
  images comes from Netlify's `URL` variable, which is the primary domain. Once `11seven.lk` is the primary domain,
  redeploy and everything switches over by itself.
- **Vercel (alternative):** import the repo (framework preset Next.js). It uses `VERCEL_PROJECT_PRODUCTION_URL`
  automatically.
- On any host, setting `NEXT_PUBLIC_SITE_URL` (e.g. `https://11seven.lk`) overrides the above. With none of these set,
  the site defaults to `https://11seven.lk`.
