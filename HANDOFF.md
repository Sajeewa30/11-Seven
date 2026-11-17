# 11-seven website — hand-off notes

## 1. Domain: 11seven.lk

The client's domain is **11seven.lk**, registered for one year (renew before it expires in about November 2027).
(117.lk, mentioned at first, is a restricted name at the .lk registry and can't be registered.)

**Status on 12 Nov 2026:** the LK Domain Registry search shows *"11seven.lk Domain name is already REQUESTED … Category -
Economy"*, and the .lk nameservers have no record of it. So the application is in, but the domain is **not active
yet** and doesn't load anywhere.

### Why "Requested", and how to fix it

The registry's process is: online application → **verification email** to the admin contact (click within 24 hours) →
registry **approval** → **payment within 3 working days** of approval (otherwise cancelled) → registered within about
one working day of payment. "Requested" means it hasn't finished that chain. To unblock it:

1. Log in at **register.domains.lk** with the account that applied (the client's, or the agent's if an agent applied)
   and open the domain. Look for an unpaid invoice, a "pay now" button or a request for details.
2. Search the admin contact's inbox, including spam, for emails from domains.lk: the verification link, the approval
   and payment email, or a request for documents.
3. If it's already paid, have the receipt ready. If it's still "Requested" one or two working days after payment,
   contact the registry hostmaster: hostmaster@domains.lk, +94 11 4 216 061 (from the official IANA record).
   If an agent registered it, ask the agent instead.

### Hosting: Netlify (free) — not Vercel

- **Netlify Free** includes custom domains with free HTTPS. It has a 300-credit monthly allowance: a production deploy
  uses 15 credits and bandwidth 20 per GB. That's plenty for a local shop site; keep pushes to `main` batched, since
  every push is a production deploy. Netlify DNS is free too.
- **Vercel Hobby** (free) is for *non-commercial personal use only*, so a business site needs Vercel Pro (US$20/month).
  Keep the Vercel deploy as a preview at most, and don't connect the domain there.

### Connecting 11seven.lk to Netlify (once it's active)

1. Netlify → the site → *Domain management* → *Add a domain* → `11seven.lk`.
2. Point the domain at Netlify in **one** of two ways, both free:
   - **A — DNS records at the registry**, if its dashboard lets you edit records: `A @ 75.2.60.5` and
     `CNAME www 11-seven.netlify.app`.
   - **B — Netlify DNS:** choose *Set up Netlify DNS* in Netlify. It shows four nameservers. Enter those as the
     domain's name servers in the registry account, or email the registry from the registrant, admin or technical
     contact asking them to change them.
3. DNS updates take from a few hours up to 48. Netlify then issues the free HTTPS certificate automatically. Make
   `11seven.lk` the **primary domain**, so `www` and the netlify.app address redirect to it.
4. Trigger one fresh deploy. The site reads Netlify's primary domain at build time, so canonical links, the sitemap and
   link-preview images switch to `https://11seven.lk` without any code change.

## 2. Information still needed from the client

| # | Item | Why |
| --- | --- | --- |
| 1 | Finish 11seven.lk activation, and registry login for the nameservers (see above) | The registry still shows it as "Requested" |
| 2 | School-season discount details (e.g. % off, minimum bill, end date) | Page currently says "special school-season prices", Nov–Dec 2026 |
| 3 | KOKO merchant approval status | Don't share the School Season page widely until KOKO is active at the counter |
| 4 | Store pickup hours: 6 am or 8 am? | The client's delivery policy says pickup from 6.00 am, but opening hours are 8 am – 11 pm. The site uses the opening hours |
| 5 | Exchange window: "3–7 days" | The returns policy gives a range. A single number (e.g. 7 days) is clearer for customers |
| 6 | Gym supplement returns | The client's policies don't mention supplements (e.g. sealed/unopened only) |

### Confirmed by the client (12 Nov 2026)

- Opening hours: every day, 8.00 am – 11.00 pm
- Phones: 081 222 3912 (shop landline) and 077 210 3832 (mobile and WhatsApp). The old 071 491 3832 from the invitation has been removed
- Email: elevensevencommunication@gmail.com
- TikTok: https://www.tiktok.com/@11seven46 · Facebook: https://www.facebook.com/profile.php?id=61590578387934
- The client's 5 policies (privacy, returns, terms, delivery, payments) are translated from Sinhala on `/policies`
- Services: printing, photo/mug/T-shirt printing, banners, wedding and visiting cards, typesetting, awards, reloads and
  bill payments, plus island-wide courier delivery. These are now listed on the home page and in the FAQ

The QR codes on the Contact page (`public/images/qr-tiktok.svg`, `public/images/qr-facebook.svg`) were regenerated to point straight to
the TikTok and Facebook pages. The Facebook QR the client sent goes through me-qr.com, a third-party redirect that can expire.

## 3. Images (added 8 Nov 2026)

Images placed in the site (AI images have their frames cropped off; all compressed):

| File | Used on | Source |
| --- | --- | --- |
| `public/images/stationery.jpg` (919×689) | Home → Stationery & Books card | image 1 |
| `public/images/phone-accessories.jpg` (640×480) | Home → Phone Accessories card | cropped from the wide flat lay (image 5) |
| `public/images/gym-supplements.jpg` (919×689) | Home → Gym Supplements card | image 4 |
| `public/images/school-season.jpg` (919×689) | Home school-season banner, School Season page, its share preview | image 3 |
| `public/images/about.jpg` (1144×858) | About → beside "Our story" | **Real shopfront photo** from the Google Maps listing, by Dulaksha Ekanayake (OK to use, confirmed 8 Nov 2026); no credit shown on the site |
| `public/og.jpg` (1200×630) | Link preview on WhatsApp / Facebook for every other page — wordmark and tagline added on the blank side | image 2 |

The phone-accessories photo is a crop, so it's softer than the others. If you want it sharper, generate one more at
1600 × 1200: *"A phone charger with a coiled cable, wireless earbuds and a plain maroon phone case on a cream surface,
warm natural light, no text, no logos."* Then replace the file with the same name.

### About page photo

The About page now uses the real shopfront photo (replacing the AI interior). To change it, save a new landscape 4:3 photo
over `public/images/about.jpg` and update `alt` and `caption` in `storyImage` at the top of `src/app/about/page.tsx`.

_Confirmed 8 Nov 2026: the shop sells gym supplements. Google Maps link: https://maps.app.goo.gl/U1p9GfakWGwrepps7_

## 4. Clothing page, skincare and phone posters (added 17 Nov 2026)

- **`/clothing`** (in the main menu): custom polos and T-shirts made by **FORGE creations**. As agreed, orders go to
  FORGE directly: call or WhatsApp 071 111 5445, and Facebook https://www.facebook.com/profile.php?id=61591696298829.
  Everything on the page comes from FORGE's Facebook page and posters: the premium polo collection (bulk, 100+),
  sublimation T-shirts and fabrics, branded apparel, mugs and plates, flex/digital/offset printing, island-wide delivery.
- **FORGE logo and photos** (`public/images/forge/`, added 17 Nov 2026 from FORGE's Facebook page): round logo badge
  (hero card, closing call-to-action, home-page clothing link), cover photo (hero background), polo collection banner
  (wide on desktop, portrait on phones) and a gallery of five posters/photos. The banner and the mugs poster had
  `www.forgecreations.lk` printed on them; that domain doesn't resolve, so those strips were cropped off (the mugs strip
  also carried a second number, 025-4627378, that we haven't confirmed).
- **Home → Phone accessories:** the shop's two posters (OTG card readers; iPhone cases and cables),
  `public/images/phone-otg-reader.jpg` and `phone-cases.jpg`, cropped from the phone screenshots.
- **Home → Skincare & beauty** (`/#skincare`): SADOER Collagen Sakura gel, Chamomile face mask and Vitamin C gel, from
  the client's Meta AI images (`public/images/skincare-*.jpg`). Edit names and text in `skincare` in `src/data/site.ts`.
- **Build:** `npm run build` now runs `next build --webpack`, and `netlify.toml` makes Netlify use it. On 17 Nov 2026
  the Turbopack production build failed on the Google Fonts ("next/font/google queries have exactly one entry"), even
  for the 12 Nov code that built fine then. The webpack build is clean. Switch back once a newer Next.js fixes it.
