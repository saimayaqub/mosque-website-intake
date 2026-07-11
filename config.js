/**
 * config.js — deployment & pricing settings for the intake form.
 *
 * This is the ONLY file you edit to configure the form.
 * Do not touch index.html.
 */
window.INTAKE_CONFIG = {

  // Paste your Google Apps Script Web App URL below (it ends in /exec).
  // See Code.gs for the one-time setup steps that produce this URL.
  sheetEndpoint: 'https://script.google.com/macros/s/AKfycbwzt5yWJj8FOzB-Rc6IsedtrnGFfhyhvCdEJXU4JLbe-RgWD8kfT416i9JaOfHve40Xlg/exec',

  // Pricing shown on the form. The discounted (mosque) rate is calculated
  // automatically: regularRate × (1 − discountPercent / 100).
  //   regularRate 30 + discountPercent 50  →  shows $30 struck through, $15 as the rate.
  // All feature costs and the project total are computed from this rate.
  pricing: {
    currency: 'USD',
    regularRate: 30,      // your normal hourly rate (shown with a strikethrough)
    discountPercent: 50   // community discount applied for mosque projects
  },

  // The domain name (e.g. yourmosque.org) is a separate yearly cost the client
  // pays directly — it is NOT part of the build price. Shown as a heads-up so
  // clients budget for it. Actual price depends on the provider (Namecheap,
  // Cloudflare, GoDaddy, etc.) and the specific domain chosen.
  domain: {
    estimatedAnnualCost: 'USD 10–25/year'
  },

  // Payment & next-steps wording shown in the success message after submitting.
  //   quoteTurnaround — how soon you'll send a tailored quote.
  //   bookingFee      — small token (in the currency above) to reserve a slot,
  //                     deducted from the final bill. Keeps starting easy.
  //   depositPercent  — deposit to begin work (or split into milestones).
  payment: {
    quoteTurnaround: '2 business days',
    bookingFee: 50,
    depositPercent: 30
  }
};
