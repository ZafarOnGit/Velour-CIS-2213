# Product Detail Pages – `products/*.html`

**Example:** [products/monaco-harbour-penthouse.html](../../products/monaco-harbour-penthouse.html) – *Velour | Monaco Harbour Penthouse*

## Description

There are 84 product detail pages, one for each item listed on the six category pages. They all use the same template. Each page shows:

- A *Back to …* link to the category page it came from (e.g. "Back to Luxury Stays")
- A large image of the item
- The item name as the page heading
- Key facts (e.g. "Monte Carlo, Monaco · 3 bedrooms · sleeps 6")
- A short description
- The price (e.g. "AED 15,000 / night")
- An *Add to Cart* button

Because the pages are inside the `products/` folder, all links, images, CSS and JS use `../` paths (e.g. `../style.css`, `../assets/monaco.jpeg`).

## Files used

- `products/<item-name>.html`
- [style.css](../../style.css)
- [main.js](../../main.js)
- Images from [assets/](../../assets/)
- Bootstrap 5.3.0 and jQuery 3.7.1 (CDN)

## Responsive design

- Image and details use `col-lg-6`: side by side on desktops, image stacked above the details on tablets and phones.
- The image uses `img-fluid`, so it never overflows its column.
- Navbar collapses into a hamburger menu below 992px.

## Interactive elements

| Element | How it works |
|---|---|
| *Add to Cart* button | `main.js` replaces it with a `-  1  +` quantity control |
| `+` / `-` buttons | Change the quantity. At 0 the *Add to Cart* button comes back. |
| *Back to …* link | Returns to the category listing page |

## Form validation

None – these pages have no forms.
