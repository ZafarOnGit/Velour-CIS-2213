# Vacations Page – `vacations.html`

**Title:** Velour | Vacations

## Description

Lists 15 complete trip packages that include flights, hotels, transfers and activities. Prices are per person (e.g. "From AED 17,500 / person").

Trips are grouped into five sections:

- **Signature Packages** – Abu Dhabi GP Weekend, Monaco GP Week, Champions League Final Trip
- **Island Escapes** – Maldives 7 Nights, Seychelles Island Hopping, Bora Bora Overwater Retreat
- **City Breaks** – Paris Fashion Weekend, Royal London, Tokyo and Kyoto
- **Adventure and Nature** – Kenya Safari, Lapland Glass Igloo, Patagonia Expedition
- **Seasonal** – New Year's Eve in Dubai, Christmas in the Alps, Mediterranean Yacht Summer

All 15 cards have an *Add to Cart* button. Clicking a card's image or title opens its product detail page (see [docs/products](../products/README.md)).

## Files used

- [vacations.html](../../vacations.html)
- [style.css](../../style.css)
- [main.js](../../main.js) – filters, Add to Cart, hover effect
- [sort.js](../../sort.js) – sorting
- Bootstrap 5.3.0 and jQuery 3.7.1 (CDN)

## Responsive design

- Cards use `col-md-6 col-lg-4`: 1 per row on phones, 2 on tablets, 3 on desktops.
- Sorted view uses one grid of `col-md-6 col-lg-3`.
- Navbar collapses into a hamburger menu below 992px.

## Interactive elements

| Element | How it works |
|---|---|
| Filter pills (*All*, *Signature Packages*, *Island Escapes*, *City Breaks*, *Adventure and Nature*, *Seasonal*) | jQuery shows only the chosen section and highlights the active pill in gold |
| *Sort by* dropdown | `sort.js` sorts all cards by price or name into one grid. *Relevance* restores the original sections. |
| *Add to Cart* button | Replaced by a `-  1  +` quantity control (`main.js`) |
| `+` / `-` buttons | Change the quantity. At 0 the *Add to Cart* button comes back. |
| Card hover effect | Gold glow and 5px lift |

## Form validation

None – this page has no forms.
