# Vetted Staff Page – `vetted-staff.html`

**Title:** Velour | Vetted Staff

## Description

Lists 10 types of professional staff that can be hired by the hour (e.g. "From AED 350 / hour").

Staff are grouped into three sections:

- **Household** – Private Chef, Butler, House Manager, Nanny or Governess
- **Protection and Transport** – Close Protection Officer, Chauffeur, Private Pilot
- **Lifestyle** – Personal Trainer, Personal Assistant, Yacht Crew

The page also has an **Our Tiers** table. It explains the three experience levels (Select, Premier, Elite) for five roles: Private Chef, Pilot, Security, Chauffeur and Butler.

All 10 cards have an *Add to Cart* button. Clicking a card's image or title opens its product detail page (see [docs/products](../products/README.md)).

## Files used

- [vetted-staff.html](../../vetted-staff.html)
- [style.css](../../style.css)
- [main.js](../../main.js) – filters, Add to Cart, hover effect
- [sort.js](../../sort.js) – sorting
- Bootstrap 5.3.0 and jQuery 3.7.1 (CDN)

## Responsive design

- Cards use `col-md-6` with `col-lg-3` or `col-lg-4`: 1 per row on phones, 2 on tablets, 3–4 on desktops.
- The tiers table is wrapped in `table-responsive`, so it scrolls sideways on small screens instead of breaking the layout.
- Sorted view uses one grid of `col-md-6 col-lg-3`.
- Navbar collapses into a hamburger menu below 992px.

## Interactive elements

| Element | How it works |
|---|---|
| Filter pills (*All*, *Household*, *Protection and Transport*, *Lifestyle*) | jQuery shows only the chosen section and highlights the active pill in gold |
| *Sort by* dropdown | `sort.js` sorts the staff cards by price or name into one grid. The tiers table is skipped by the sort. *Relevance* restores the original sections. |
| *Add to Cart* button | Replaced by a `-  1  +` quantity control (`main.js`) |
| `+` / `-` buttons | Change the quantity. At 0 the *Add to Cart* button comes back. |
| Tiers table | Bootstrap `table-hover` highlights the row under the mouse |
| Card hover effect | Gold glow and 5px lift |

## Form validation

None – this page has no forms.
