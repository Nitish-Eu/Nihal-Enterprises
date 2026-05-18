# Nihal Enterprises — GitHub Pages Website

This is a fast, mobile‑friendly **static website** prepared for **Nihal Enterprises** (Electronics / Home Appliances).

✅ Runs on **GitHub Pages (free)**  
✅ Edit one file to update content: **`/data/business.json`**  
✅ SEO-ready (meta + Schema.org JSON‑LD)  
✅ Optional enquiry form (Formspree) + WhatsApp/Call buttons  
✅ Mobile responsive + offline support (PWA)

---

## Make it live (GitHub Pages)

### Option A (best): yourusername.github.io

1. Create a new repository named: `yourusername.github.io`
2. Upload all files from this project (extract ZIP first)
3. GitHub → **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** (root)
4. Your website becomes live at: `https://yourusername.github.io`

### Option B: normal repo name (example: `nihal-site`)

Same steps, but URL will be: `https://yourusername.github.io/nihal-site/`

---

## Update store info

Open **`/data/business.json`** and edit:
- `business.name`, `business.description`
- `business.phone`, `business.email`
- `business.address`
- `business.hours` (24-hour format like `06:00-21:00` or `Closed`)
- `products`, `services`, `highlights`
- `links.whatsapp`, `links.directions`, `links.googleReviews`

---

## Update photos (Gallery)

Replace images inside: `assets/gallery/`

Keep the same names:
- `01.jpg` … `08.jpg`

Or add more and update the `gallery` list in `data/business.json`.

---

## Enable enquiry form (optional)

1. Create a free account on **Formspree**
2. Create a form → copy endpoint like: `https://formspree.io/f/abcdwxyz`
3. Put it in: `links.formspreeEndpoint` inside `data/business.json`

If you don’t set it, the form will show an alert and suggest WhatsApp.

---

## Note about Google Business Profile sync

A fully automatic “live sync” from Google Business Profile requires official Google APIs + authentication (not suitable for a purely static GitHub Pages site).
This site is built to be **simple, fast and safe**: update `data/business.json` whenever your GBP info changes.
