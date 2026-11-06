# Experiences Page – `experiences.html`

**Title:** Velour | Experiences

## Description

Lists 16 one-off luxury experiences, most lasting a few hours. Prices are per person (e.g. "AED 650 / person").

Experiences are grouped into four sections:

- **Adventure** – Desert Safari with Falconry, Hot-Air Balloon at Sunrise, Skydive over the Palm, Cage-Free Shark Dive
- **Dining** – Michelin Chef's Table, Dinner in the Dunes, Restaurant Buyout, Underwater Dining
- **Wellness** – In-Villa Spa Day, Yoga and Sound Healing, Royal Hammam, Sleep and Recovery Retreat
- **Culture and Learning** – After-Hours Museum Tour, Cooking Masterclass, Watchmaking Workshop, Perfume Creation

15 cards have an *Add to Cart* button. One is "Price on request" and has an *Enquire* button linking to the contact page.

Clicking a card's image or title opens its product detail page (see [docs/products](../products/README.md)).

## Files used

- [experiences.html](../../experiences.html)
- [style.css](../../style.css)
- [main.js](../../main.js) – filters, Add to Cart, hover effect
- [sort.js](../../sort.js) – sorting
- Bootstrap 5.3.0 and jQuery 3.7.1 (CDN)

## Responsive design

- Cards use `col-md-6 col-lg-3`: 1 per row on phones, 2 on tablets, 4 on desktops.
- Navbar collapses into a hamburger menu below 992px.

## Interactive elements

| Element | How it works |
|---|---|
| Filter pills (*All*, *Adventure*, *Dining*, *Wellness*, *Culture and Learning*) | jQuery shows only the chosen section and highlights the active pill in gold |
| *Sort by* dropdown | `sort.js` sorts all cards by price or name into one grid. *Relevance* restores the original sections. |
| *Add to Cart* button | Replaced by a `-  1  +` quantity control (`main.js`) |
| `+` / `-` buttons | Change the quantity. At 0 the *Add to Cart* button comes back. |
| Card hover effect | Gold glow and 5px lift |

## Form validation

None – this page has no forms.
