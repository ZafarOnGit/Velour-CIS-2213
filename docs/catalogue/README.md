# Catalogue Page – `catalogue.html`

**Title:** Velour | Catalogue

## Description

An overview of all six service categories Velour offers. Each category is shown as a card with an image, a short description, a *View all* link to its listing page, and a *More details* button.

| Card | Links to | Hidden detail text |
|---|---|---|
| Luxury Stays | [stays.html](../../stays.html) | From AED 6,600 per night |
| Exclusive Events | [events.html](../../events.html) | From AED 2,400 per person |
| Private Travel | [travel.html](../../travel.html) | Cars from AED 650 per hour |
| Vetted Staff | [vetted-staff.html](../../vetted-staff.html) | From AED 350 per hour |
| Experiences | [experiences.html](../../experiences.html) | From AED 650 per person |
| Vacations | [vacations.html](../../vacations.html) | From AED 17,500 per person |

## Files used

- [catalogue.html](../../catalogue.html)
- [style.css](../../style.css)
- [main.js](../../main.js)
- Bootstrap 5.3.0 and jQuery 3.7.1 (CDN)

## Responsive design

- Cards use `col-md-6 col-lg-4`: 1 per row on phones, 2 per row on tablets, 3 per row on desktops.
- Card images have a fixed height of 190px with `object-fit: cover`, so all cards line up.
- Page title uses `font-size: 3.2vw`, set to `2rem` below 768px.
- Navbar collapses into a hamburger menu below 992px.

## Interactive elements

| Element | How it works |
|---|---|
| *View all* / card image / card title | Links to the category's listing page |
| *More details* button | jQuery `.toggle()` shows or hides the extra price/info paragraph |
| Card hover effect | Gold glow and 5px lift on hover (jQuery `mouseenter` / `mouseleave`) |
| Catalogue dropdown | Opens on hover |

## Form validation

None – this page has no forms.
