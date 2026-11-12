# 11-seven website — hand-off notes

## 1. Domain check (8 Nov 2026)

- **117.lk is not live and cannot be registered.** The official LK Domain Registry (domains.lk) shows
  *"Domain name you searched is restricted"* for `117.lk`, and the .lk registry's own nameservers report it as
  non-existent. (117 is Sri Lanka's national disaster-management hotline number, which is probably why it is reserved.)
- **11seven.lk** and **11-seven.lk** were both **available** (unregistered) on the same date — LKR 8,000/yr (Standard)
  or LKR 5,000/yr (Economy). `11seven.com.lk` / `11-seven.com.lk` are LKR 1,000/yr.
- `11seven.com` and `11-seven.com` are already registered by someone (GoDaddy / NameBright) — confirm whether that's the client.

**Ask the client:** the exact domain he paid for, where he bought it, and the receipt or registrar login.

## 2. Information still needed from the client

| # | Item | Why |
| --- | --- | --- |
| 1 | Final domain + registrar login (see above) | To connect the site on Vercel |
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
