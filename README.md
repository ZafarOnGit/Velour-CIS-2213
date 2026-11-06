# Velour – Luxury Services Front-End

Velour is a front-end web application for an on-demand luxury services platform. Users can browse luxury stays, exclusive events, private travel, vetted staff, experiences and vacations, add items to a cart, and request bookings.

Built for **CIS2213 – Full-Stack Web Applications Development**.

## Tech stack

- HTML5 (semantic tags: `header`, `nav`, `main`, `section`, `footer`, `fieldset`)
- CSS3 – custom styles in [style.css](style.css) (gold `#c9a24a` / dark theme, media queries)
- Bootstrap 5.3.0 (grid, navbar, carousel, cards, tables, forms) – loaded from CDN
- JavaScript (DOM API) and jQuery 3.7.1 – loaded from CDN

## Pages

Each page has its own README in [docs/](docs/):

| Page | File | README |
|---|---|---|
| Home / Landing | [index.html](index.html) | [docs/index/README.md](docs/index/README.md) |
| Catalogue | [catalogue.html](catalogue.html) | [docs/catalogue/README.md](docs/catalogue/README.md) |
| Luxury Stays | [stays.html](stays.html) | [docs/stays/README.md](docs/stays/README.md) |
| Exclusive Events | [events.html](events.html) | [docs/events/README.md](docs/events/README.md) |
| Private Travel | [travel.html](travel.html) | [docs/travel/README.md](docs/travel/README.md) |
| Vetted Staff | [vetted-staff.html](vetted-staff.html) | [docs/vetted-staff/README.md](docs/vetted-staff/README.md) |
| Experiences | [experiences.html](experiences.html) | [docs/experiences/README.md](docs/experiences/README.md) |
| Vacations | [vacations.html](vacations.html) | [docs/vacations/README.md](docs/vacations/README.md) |
| Product detail pages (84) | [products/](products/) | [docs/products/README.md](docs/products/README.md) |
| Cart | [cart.html](cart.html) | [docs/cart/README.md](docs/cart/README.md) |
| Request a Booking / My Bookings | [booking.html](booking.html) | [docs/booking/README.md](docs/booking/README.md) |
| Sign In | [login.html](login.html) | [docs/login/README.md](docs/login/README.md) |
| Create Account | [register.html](register.html) | [docs/register/README.md](docs/register/README.md) |
| Contact Us | [contact.html](contact.html) | [docs/contact/README.md](docs/contact/README.md) |

## Shared parts (on every page)

- **Navigation bar** – Bootstrap `navbar-expand-lg`. Links: Home, Catalogue (dropdown), Cart, My Bookings, Login. Below 992px wide the links collapse into a hamburger menu.
- **Catalogue dropdown** – opened on mouse hover by [main.js](main.js) (`mouseenter` / `mouseleave` on `#catalogueMenu`). Lists the six categories.
- **Footer** – links to Catalogue, Cart, My Bookings, Contact, Login and Register in `col-md-2` columns, which stack on screens below 768px.

## JavaScript files

| File | Used on | Purpose |
|---|---|---|
| [main.js](main.js) | All pages | Dropdown hover, card hover effect, "More details" toggle, filter pills, Add to Cart / quantity controls |
| [sort.js](sort.js) | Six category pages | Sort-by dropdown (relevance, price, name) |
| [cart.js](cart.js) | Cart | Builds the cart table, quantity buttons, remove, clear, subtotal |
| [booking.js](booking.js) | Booking | Dependent dropdowns, form validation, adds rows to My Bookings |
| [login.js](login.js) | Sign In | Email and password validation |
| [register.js](register.js) | Create Account | Name, email, phone, password, confirm, terms validation |
| [contact.js](contact.js) | Contact | Name, email, phone, category, message validation |

## How to run

No build step or server is needed. Open [index.html](index.html) in a browser (an internet connection is needed for the Bootstrap and jQuery CDNs).

## Known limitations

- This is front-end only. There is no back end or database, so the login, register and contact forms only validate input; nothing is saved or sent.
- Data is not shared between pages. The cart page shows a preset list of sample items, and items added with "Add to Cart" on other pages do not carry over to it.
- Bookings added on the booking page are lost when the page is reloaded.
