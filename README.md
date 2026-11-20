# ZYNESIX

# Zynexis Technologies — Single-product Website Draft

A responsive five-page static website prototype built from the supplied brief.

## Pages
- `index.html` — Home
- `products.html` — Single Power Distribution Unit overview and interactive photo gallery
- `upcoming.html` — Roadmap and register-interest form
- `about.html` — Company story, parent-company positioning and capabilities
- `contact.html` — RFQ form and contact placeholders

## Preview
Open `index.html` in a browser. No build step is required.

## Before launch
1. The business-card logo has been extracted into `assets/zynexis-logo.png`; replace it with a clean original SVG/transparent file if one becomes available.
2. Confirm public phone number(s), enquiry email, full address and map pin.
3. Confirm the public product name. The draft treats the photographed hardware as the Power Distribution Unit (PDU), the only current product; all other product areas are upcoming.
4. Five supplied product photographs are integrated and optimized in `assets/images/`. Confirm approval for public use.
5. Add verified PDU electrical ratings, interfaces, dimensions, datasheet and availability. Upcoming product details and release dates are intentionally unconfirmed.
6. Replace leadership placeholders with approved names, bios and photographs.
7. Connect both forms to a backend, company email or CRM. Current forms are front-end demos and do not transmit submissions.
8. Confirm the parent-company description and CIN with the company secretary / official records before publication.
9. Configure domain, hosting, HTTPS, privacy notice and spam protection.

Fonts load from Google Fonts; a system sans-serif fallback is included.

## Verification
Internal links, resource paths, fragment targets, image alt attributes and heading counts were checked across all five pages. JavaScript syntax and menu, gallery and preview-form behavior passed automated checks. Browser rendering could not be verified because the preview browser could not reach the local server.

## GitHub Pages deployment
This site is ready to serve directly from the repository root with no build step. In GitHub, choose Settings → Pages → Deploy from a branch → main → / (root). The `.nojekyll` file keeps the site as plain static files.

Enquiry forms are previews and do not send or save submissions.
