# Mosque Website Project Intake Form

A simple, dynamic intake form for collecting mosque website project requirements and pricing quotes.

## Features

- **Dynamic pricing**: Hours and costs update automatically as clients select features
- **Standard mosque rate**: USD 12.50/hour with 50% community discount built in
- **Flexible**: Clients can suggest their own hourly rate
- **No dependencies**: Pure HTML, CSS, and JavaScript—works anywhere
- **Easy to use**: Copy & Share button exports formatted summary for email/WhatsApp

## How It Works

1. Client selects features (Basic Package + Add-ons)
2. Pricing updates in real-time
3. Client answers 7 quick questions
4. Client confirms or adjusts hourly rate
5. Clicks "Copy & Send" → formatted summary is copied to clipboard
6. Client emails or WhatsApps the summary to you

## Deployment

### Option 1: Vercel (Recommended – 2 minutes)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Create a new blank project
3. Upload `mosque-website-intake-form.html` as `index.html`
4. Deploy
5. Your form is live with a permanent URL

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop `mosque-website-intake-form.html`
3. Done—URL is live immediately

### Option 3: GitHub Pages (Free & Permanent)

1. Create a GitHub repo named `mosque-intake-form`
2. Upload `mosque-website-intake-form.html` as `index.html`
3. Go to repo Settings > Pages
4. Enable GitHub Pages
5. Your form is live at `yourusername.github.io/mosque-intake-form`

### Option 4: Local Testing

Just open `mosque-website-intake-form.html` in your browser.

## Customization

Edit the HTML file to personalize it:

**Change the title** (line 9):
```html
<title>Mosque Website Project Intake Form</title>
```

**Change the header text** (around line 316):
```html
<h1>Mosque Website Project</h1>
<p>Tell me what you need. Pricing updates as you select features.</p>
```

**Update contact info** (around line 663-664):
```javascript
summary += `Email: your-email@example.com\n`;
summary += `WhatsApp: +1234567890\n`;
```

**Add or remove features**: Find the `<label class="feature-item">` sections and add/remove blocks. Keep the data attributes (`data-hours` and `data-cost`) consistent.

**Adjust the hourly rate** (around line 555):
```html
<label>Standard rate for mosque projects: USD 12.50/hour</label>
```

## What Clients See

1. **Feature selection**: Checkbox list of website features with instant cost calculation
2. **Pricing display**: "Total project: 41-65 hours | USD 512-812"
3. **Questions**: 7 simple questions about timeline, audience, donations, content readiness, etc.
4. **Rate confirmation**: Option to accept or suggest a different hourly rate
5. **Copy button**: One-click copy of formatted summary

## What Gets Sent to You

When a client clicks "Copy & Send", this formatted text is copied:

```
=== MOSQUE WEBSITE PROJECT INTAKE ===

CONTACT
Name: [their name]
Contact: [email/phone]

SELECTED FEATURES & PRICING
Total project: 41-65 hours | USD 512-812
Hourly rate: USD 12.50 (standard mosque rate)

ANSWERS
Timeline: Within 2 weeks
Live audience estimate: Hundreds
Donations: E-transfer only
Maintenance: Your staff
Content ready: Mostly ready
Notes: [any notes they added]

=== Send this to ===
Email: saaima.yaqoob@gmail.com
WhatsApp: +923061115444
```

## Files Included

- `mosque-website-intake-form.html` – The complete form (single file)
- `README.md` – This file

## Browser Support

Works on all modern browsers:
- Chrome / Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## No Tracking, No Cookies

This form collects nothing until the user clicks "Copy & Send". No data is stored on any server. Everything stays on the client's device until they manually share it.

## Questions or Issues?

If you encounter any issues:
1. Make sure you're using a modern browser
2. Check that the HTML file is not opened with a text editor—use a browser
3. If there are JavaScript errors, open the browser console (F12) to see what's wrong

---

**Ready to use?** Deploy it now and start sharing the form link with your clients. They'll fill it out, copy the summary, and send it to you via email or WhatsApp. Simple, fast, no backend needed.
