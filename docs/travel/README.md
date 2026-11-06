# Private Travel Page – `travel.html`

**Title:** Velour | Private Travel

## Description

Lists 11 private transport options. Prices are by the hour, day or week (e.g. "AED 650 / hour", "AED 881,000 / week").

Options are grouped into three sections:

- **Air** – Light Jet, Midsize Jet, Ultra-Long-Range Jet, Helicopter Transfer
- **Sea** – Day Yacht (60 ft), Superyacht Week Charter, Speedboat Transfer
- **Road** – Rolls-Royce Phantom, Stretch Limousine, Armoured SUV, Supercar Self-Drive

10 cards have an *Add to Cart* button. One is "Price on request" and has an *Enquire* button linking to the contact page.

Clicking a card's image or title opens its product detail page (see [docs/products](../products/README.md)).

## Files used

- [travel.html](../../travel.html)
- [style.css](../../style.css)
- [main.js](../../main.js) – filters, Add to Cart, hover effect
- [sort.js](../../sort.js) – sorting
- Bootstrap 5.3.0 and jQuery 3.7.1 (CDN)

## Responsive design

- Cards use `col-md-6` with `col-lg-3` or `col-lg-4`: 1 per row on phones, 2 on tablets, 3–4 on desktops.
- Sorted view uses one grid of `col-md-6 col-lg-3`.
- Navbar collapses into a hamburger menu below 992px.

## Interactive elements

| Element | How it works |
|---|---|
| Filter pills (*All*, *Air*, *Sea*, *Road*) | jQuery shows only the chosen section and highlights the active pill in gold |
| *Sort by* dropdown | `sort.js` sorts all cards by price or name into one grid. *Relevance* restores the original sections. |
| *Add to Cart* button | Replaced by a `-  1  +` quantity control (`main.js`) |
| `+` / `-` buttons | Change the quantity. At 0 the *Add to Cart* button comes back. |
| Card hover effect | Gold glow and 5px lift |

## Form validation

None – this page has no forms.
