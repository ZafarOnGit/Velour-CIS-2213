# Luxury Stays Page – `stays.html`

**Title:** Velour | Luxury Stays

## Description

Lists 18 luxury properties: villas, penthouses, chalets and whole islands. Each card shows an image, the name, location and bedroom/guest capacity, a short description, and a nightly price (e.g. "AED 16,500 / night").

Properties are grouped into six sections:

- Beach Villas
- Penthouses
- Private Islands
- Desert Retreats
- Mountain Chalets
- Countryside Estates

17 cards have an *Add to Cart* button. One is "Price on request" and has an *Enquire* button that links to the contact page instead.

Clicking a card's image or title opens its product detail page (see [docs/products](../products/README.md)).

## Files used

- [stays.html](../../stays.html)
- [style.css](../../style.css)
- [main.js](../../main.js) – filters, Add to Cart, hover effect
- [sort.js](../../sort.js) – sorting
- Bootstrap 5.3.0 and jQuery 3.7.1 (CDN)

## Responsive design

- Cards use `col-md-6 col-lg-4`: 1 per row on phones, 2 on tablets, 3 on desktops.
- When a sort is applied, cards move into one combined grid using `col-md-6 col-lg-3` (4 per row on desktops).
- Filter pills wrap onto new lines on narrow screens.
- Navbar collapses into a hamburger menu below 992px.

## Interactive elements

| Element | How it works |
|---|---|
| Filter pills (*All*, *Beach Villas*, …) | jQuery hides all `.category-section` elements and shows only the chosen one. The active pill is highlighted gold. *All* shows every section. |
| *Sort by* dropdown | `sort.js` listens for `change`. Options: Relevance, Price low→high, Price high→low, Name A→Z, Name Z→A. It sorts the cards (selection sort), moves them into one grid and hides the filter pills. Choosing *Relevance* puts every card back in its original section. "Price on request" items are treated as the most expensive. |
| *Add to Cart* button | `main.js` replaces the button with a `-  1  +` quantity control |
| `+` / `-` buttons | Increase or decrease the quantity. At 0 the control is swapped back to an *Add to Cart* button. |
| Card hover effect | Gold glow and 5px lift |

## Form validation

None – this page has no forms.
