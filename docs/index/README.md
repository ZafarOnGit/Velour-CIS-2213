# Home Page – `index.html`

**Title:** Velour | Exceptional Living

## Description

The landing page and main entry point of the Velour website. It introduces the brand and points users to the catalogue, login and contact pages.

Sections, from top to bottom:

1. **Hero** – heading "Exceptional Living, Effortlessly Arranged", a short tagline, and two buttons: *Explore Catalogue* and *Client Login*.
2. **Image carousel** – four slides (Private yachts, Luxury stays, Private travel, Exclusive events), each with a caption.
3. **Feature block** – "Exceptional living, made convenient" with *Contact Us* and *Explore* buttons and a Dubai penthouse image.
4. **Our Services** – four cards: Luxury Stays, Exclusive Events, Private Travel, Vetted Staff. Each has a *View all* link and a *More details* button.
5. **Signature Vacations** – three trip cards (Abu Dhabi GP Weekend, Maldives 7 Nights, Bora Bora Island Retreat) linking to their product pages.
6. **Why Velour** – four selling points (vetted professionals, 24/7 concierge, total discretion, one booking).
7. **How It Works** – three steps: Choose, Customise, Relax.

## Files used

- [index.html](../../index.html)
- [style.css](../../style.css)
- [main.js](../../main.js)
- Bootstrap 5.3.0 and jQuery 3.7.1 (CDN)

## Responsive design

- Navbar collapses into a hamburger menu below 992px (`navbar-expand-lg`).
- Hero title uses `font-size: 4.5vw` so it scales with the screen; a media query sets it to `2.4rem` below 768px.
- Carousel captions are hidden on small screens (`d-none d-md-block`).
- Hero buttons stack vertically on phones and sit side by side from 576px up (`d-grid` + `d-sm-flex`).
- Feature block: text (`col-lg-7`) and image (`col-lg-5`) sit side by side on large screens and stack on smaller ones.
- Service cards: 1 per row on phones, 2 per row on tablets (`col-md-6`), 4 per row on desktops (`col-lg-3`).
- Signature Vacations and How It Works use `col-md-4` (3 across from 768px up). Why Velour uses `col-md-3` (4 across).
- `.display-4` heading shrinks to `2.5rem` below 576px.

## Interactive elements

| Element | How it works |
|---|---|
| Image carousel | Bootstrap carousel with auto-play, previous/next arrows and slide indicators |
| Catalogue dropdown | Shown on mouse hover (`mouseenter` / `mouseleave` in `main.js`) |
| Card hover effect | jQuery adds a gold glow and lifts the card 5px on hover, and removes it on mouse leave |
| *More details* button | jQuery `.toggle()` shows or hides the hidden paragraph under each service card (e.g. "From AED 6,600 per night") |

## Form validation

None – this page has no forms.
