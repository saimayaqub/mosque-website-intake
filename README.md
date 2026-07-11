# Mosque Website Project Intake Form

A dynamic intake form for collecting mosque website project requirements and pricing quotes.
Submissions are saved straight to a Google Sheet and emailed to you — no third-party service, no monthly fees.

**🔗 Live form:** https://saimayaqub.github.io/mosque-website-order/

## Features

- **Saves to Google Sheet** — each submission becomes a row, via a free Google Apps Script web app
- **Email notifications** — you get a formatted copy of every inquiry the moment it's submitted
- **Config-driven pricing** — set your rate once in `config.js`; all feature costs and totals recalculate automatically
- **Discount display** — your regular rate shown struck through next to the discounted community rate
- **Live estimate** — an itemized tentative price shows and updates automatically as features are toggled; the Basic Package starts pre-selected
- **Custom feature request** — an "I don't see a feature I need" option with a free-text box, captured for a separate quote
- **Domain-cost heads-up** — clients are told the domain is a separate yearly cost and pick how to handle it
- **Budget-fit question** — surfaces genuine affordability concerns without inviting rate haggling
- **"Why work with Saima?" trust panel** — reassurance up front to reduce friction
- **Config-driven next steps** — after submitting, clients see your quote turnaround and an easy booking-fee start (all set in `config.js`)
- **Novosols branding** — brand colours and fonts baked in
- **No build step** — plain HTML, CSS, and JavaScript

## How It Works

1. The Basic Package is pre-selected; the client adds or removes features (and add-ons) — the itemized estimate updates live
2. If something's missing, they tick **"I don't see a feature I need"** and describe it
3. Client answers a few questions (timeline, audience, donations, maintenance, content readiness…)
4. Client sees the rate and a domain-cost notice, and answers the budget-fit question
5. Client clicks **Share My Requirements** → the data is written to your Google Sheet and emailed to you, and they see the next steps (your quote turnaround + easy booking-fee start)

## Files

| File | Purpose |
|------|---------|
| `index.html` | The complete form (markup, styles, and logic) |
| `config.js` | **The only file you edit** — endpoint, pricing, domain cost, and payment/next-steps wording |
| `Code.gs` | Google Apps Script backend (paste into your Sheet's Apps Script project) |
| `README.md` | This file |

## Setup

### 1. Configure the form — `config.js`

```js
window.INTAKE_CONFIG = {
  sheetEndpoint: 'PASTE_YOUR_APPS_SCRIPT_URL_HERE', // from step 2 below
  pricing: {
    currency: 'USD',
    regularRate: 30,    // your normal hourly rate (shown struck through)
    discountPercent: 50 // community discount → 30 × (1 − 50/100) = 15/hour
  },
  domain: {
    estimatedAnnualCost: 'USD 10–25/year'
  },
  payment: {
    quoteTurnaround: '2 business days', // how soon you'll send a tailored quote
    bookingFee: 50,                     // small token to reserve a slot (0 hides it)
    depositPercent: 30                  // deposit to begin work
  }
};
```

Change your rate, discount, currency, domain estimate, or the post-submission payment wording here —
nothing in `index.html` needs editing.

### 2. Connect the Google Sheet backend — `Code.gs`

1. Create a Google Sheet (any name).
2. **Extensions → Apps Script**, delete the sample code, paste the contents of `Code.gs`, and Save.
3. Set `NOTIFY_EMAIL` at the top of `Code.gs` to the address that should receive inquiries.
4. **Deploy → New deployment → Web app**:
   - **Execute as:** Me
   - **Who has access:** **Anyone** ← required, or submissions are rejected
5. Deploy, authorize when prompted, and copy the Web app URL (ends in `/exec`).
6. Paste that URL into `sheetEndpoint` in `config.js`.

The header row is created automatically on the first submission. If you change the columns later,
delete row 1 in the sheet and it rebuilds on the next submission.

**After editing `Code.gs`,** re-deploy: **Deploy → Manage deployments → ✏️ edit → New version → Deploy**
(this keeps the same `/exec` URL).

### 3. Deploy the site (GitHub Pages)

1. Push to your GitHub repo.
2. Repo **Settings → Pages** → deploy from `main` branch.
3. Your form goes live at `https://<username>.github.io/<repo>/`.

For local testing, just open `index.html` in a browser.

## Data Captured

Each submission records these columns (17): timestamp, name, contact, selected features,
custom feature request, total hours, total cost, quoted rate, rate-fit answer, budget note,
timeline, live-audience estimate, donation preference, maintenance plan, content readiness,
domain preference, and free-form notes.

If you add or change columns in `Code.gs`, re-deploy it **and** delete row 1 in the sheet so the
new header rebuilds on the next submission (the header is only written when the sheet is empty).

> **Privacy note:** unlike a static page, this form *does* store data — submissions are saved to your
> Google Sheet and emailed to you. Nothing is sent anywhere until the client clicks **Share My Requirements**.

## Browser Support

Works on all modern browsers (Chrome/Edge 90+, Firefox 88+, Safari 14+, and mobile browsers).

## Troubleshooting

- **Nothing appears in the sheet:** confirm the web app's **Who has access** is set to **Anyone**, and that
  `sheetEndpoint` in `config.js` matches your current `/exec` URL.
- **New columns not populating:** re-deploy `Code.gs` as a **New version** (see step 2), and delete row 1 in the sheet so the header rebuilds.
- **Seeing an old version after an update:** the page sends no-cache meta tags, but browsers/CDNs can still hold a copy — a hard refresh (`Ctrl+Shift+R`) pulls the latest.
- **JavaScript errors:** open the browser console (F12) to see details.
