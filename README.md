# StormChecks — stormchecks.com

Marketing site for StormChecks, a specialty finance company providing non-recourse pre-litigation
funding for the cost of pursuing commercial property insurance claims.

## Stack

- React 19 + TypeScript, built with Vite
- Routing via `react-router-dom` (client-side SPA)
- Tailwind CSS via CDN, configured inline in `index.html` (`primary` `#0B1F33`, `accent` `#C99700`)
- Deployed on Vercel — `vercel.json` holds the 301 redirect table and the SPA rewrite

## Pages

| Route | File |
| --- | --- |
| `/` | `pages/Home.tsx` |
| `/how-it-works` | `pages/HowItWorks.tsx` |
| `/what-we-fund` | `pages/WhatWeFund.tsx` |
| `/technology` | `pages/Technology.tsx` |
| `/storm-monitoring` | `pages/StormMonitoring.tsx` |
| `/about` | `pages/About.tsx` |
| `/contact` | `pages/Contact.tsx` |
| `/privacy`, `/terms` | `pages/Privacy.tsx`, `pages/Terms.tsx` |
| 404 | `pages/NotFound.tsx` |

## Forms

Both forms POST JSON to the same Make.com webhook and are distinguished by a `formType` field:

- `funding-request` — `pages/Contact.tsx`
- `storm-monitoring` — `pages/StormMonitoring.tsx`

Property address fields use Google Places Autocomplete (script loaded in `index.html`).

## Copy guardrails

The site must never solicit claims, offer claim advice or damage assessments, estimate claim value,
or frame carriers adversarially. StormChecks funds the cost of pursuing a claim; the owner's own
licensed public adjuster and attorney run the claim. The footer disclaimer must remain on every
page.

## Run locally

```bash
npm install
npm run dev
```

```bash
npm run build
```
