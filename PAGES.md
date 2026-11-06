# Velour – Page Descriptions

Front-end web application for the Velour luxury services platform (CIS2213 – Full-Stack Web Applications Development).

**Built with:** HTML5, CSS3 ([style.css](style.css)), Bootstrap 5.3.0, JavaScript and jQuery 3.7.1.

## Contents

1. [Home – index.html](#1-home--indexhtml)
2. [Catalogue – catalogue.html](#2-catalogue--cataloguehtml)
3. [Category listing pages](#3-category-listing-pages)
4. [Product detail pages](#4-product-detail-pages)
5. [Cart – cart.html](#5-cart--carthtml)
6. [Booking – booking.html](#6-booking--bookinghtml)
7. [Sign In – login.html](#7-sign-in--loginhtml)
8. [Create Account – register.html](#8-create-account--registerhtml)
9. [Contact – contact.html](#9-contact--contacthtml)

---

## Shared on every page

- **Navigation bar** – Bootstrap `navbar-expand-lg` with Home, Catalogue, Cart, My Bookings and Login. Below 992px it collapses into a hamburger menu.
- **Catalogue dropdown** – opens on mouse hover (`mouseenter` / `mouseleave` in [main.js](main.js)) and lists the six categories.
- **Footer** – links to Catalogue, Cart, My Bookings, Contact, Login and Register in `col-md-2` columns that stack below 768px.
- **Page titles** use `vw` font sizes so they scale with the screen, with a media query setting a fixed size below 768px.

---

## 1. Home – `index.html`

**Description:** The landing page and main entry point. It contains:

- **Hero** – "Exceptional Living, Effortlessly Arranged" with *Explore Catalogue* and *Client Login* buttons
- **Image carousel** – 4 slides (Private yachts, Luxury stays, Private travel, Exclusive events)
- **Feature block** – "Exceptional living, made convenient" with *Contact Us* and *Explore* buttons
- **Our Services** – 4 cards (Luxury Stays, Exclusive Events, Private Travel, Vetted Staff)
- **Signature Vacations** – 3 trip cards linking to their product pages
- **Why Velour** – 4 selling points
- **How It Works** – 3 steps: Choose, Customise, Relax

**Responsive design:**
- Service cards: 1 per row on phones, 2 on tablets (`col-md-6`), 4 on desktops (`col-lg-3`)
- Feature block: text and image side by side on large screens (`col-lg-7` / `col-lg-5`), stacked on smaller ones
- Carousel captions hidden on small screens (`d-none d-md-block`)
- Hero buttons stack on phones and sit side by side from 576px (`d-grid d-sm-flex`)

**Interactive elements:**
- Bootstrap carousel with auto-play, arrows and indicators
- Card hover effect: jQuery adds a gold glow and lifts the card 5px
- *More details* button: jQuery `.toggle()` shows/hides extra info under each service card

**Form validation:** None.

---

## 2. Catalogue – `catalogue.html`

**Description:** Shows all six service categories as cards: Luxury Stays, Exclusive Events, Private Travel, Vetted Staff, Experiences and Vacations. Each card has an image, a short description, a *View all* link to the category page and a *More details* button.

**Responsive design:** Cards use `col-md-6 col-lg-4` – 1 per row on phones, 2 on tablets, 3 on desktops. Card images have a fixed 190px height with `object-fit: cover` so cards line up.

**Interactive elements:**
- *More details* toggles a hidden starting price (e.g. "From $1,800 per night")
- Card hover glow and lift

**Form validation:** None.

---

## 3. Category listing pages

`stays.html`, `events.html`, `travel.html`, `vetted-staff.html`, `experiences.html`, `vacations.html`

**Description:** Each page lists the items in one category as cards, grouped into sub-sections. Each card shows an image, name, key facts, a short description, a price and an *Add to Cart* button. Items marked "Price on request" have an *Enquire* button linking to the contact page instead. Clicking a card's image or title opens its product detail page.

| Page | Items | Filter groups |
|---|---|---|
| Luxury Stays | 18 | Beach Villas, Penthouses, Private Islands, Desert Retreats, Mountain Chalets, Countryside Estates |
| Exclusive Events | 14 | Motorsport, Football, Other Sports, Culture and Fashion |
| Private Travel | 11 | Air, Sea, Road |
| Vetted Staff | 10 | Household, Protection and Transport, Lifestyle (+ an "Our Tiers" table: Select, Premier, Elite) |
| Experiences | 16 | Adventure, Dining, Wellness, Culture and Learning |
| Vacations | 15 | Signature Packages, Island Escapes, City Breaks, Adventure and Nature, Seasonal |

**Responsive design:** Cards use `col-md-6` with `col-lg-3` or `col-lg-4` – 1 per row on phones, 2 on tablets, 3–4 on desktops. Filter pills wrap on narrow screens. The Vetted Staff tiers table uses `table-responsive` so it scrolls sideways on phones.

**Interactive elements:**
- **Filter pills** – jQuery hides all sections and shows only the chosen one; the active pill turns gold. *All* shows everything.
- **Sort by dropdown** ([sort.js](sort.js)) – Relevance, Price low→high, Price high→low, Name A→Z, Name Z→A. Cards are sorted and moved into one grid; *Relevance* puts them back in their sections.
- **Add to Cart** ([main.js](main.js)) – the button is replaced by a `- 1 +` quantity control. At 0 the *Add to Cart* button returns.
- Card hover glow and lift

**Form validation:** None.

---

## 4. Product detail pages

`products/*.html` (e.g. `products/monaco-harbour-penthouse.html`)

**Description:** One page per item, all using the same template: a *Back to …* link, a large image, the item name, key facts, a description, the price and an *Add to Cart* button.

**Responsive design:** Image and details sit side by side on desktops (`col-lg-6`) and stack on smaller screens. The image uses `img-fluid`.

**Interactive elements:** *Add to Cart* with the `- 1 +` quantity control.

**Form validation:** None.

---

## 5. Cart – `cart.html`

**Description:** Shows the cart as a table with Item, Details, Price, Quantity, Total and a Remove button. The subtotal is shown below, with *Clear Cart* and *Proceed to Booking* buttons. The cart starts with four sample items stored in arrays in [cart.js](cart.js).

**Responsive design:** The table is inside `table-responsive`, so it scrolls sideways on small screens.

**Interactive elements and DOM manipulation:** `showCart()` empties the table body and rebuilds every row after each change.
- `+` / `-` buttons change the quantity; at 0 the row is removed
- *Remove* deletes a row
- Row totals (price × quantity) and the subtotal are recalculated each time
- *Clear Cart* empties the cart and shows "Your cart is empty. Browse the catalogue"
- *Proceed to Booking* links to `booking.html`

**Form validation:** None.

---

## 6. Booking – `booking.html`

**Description:** A booking request form and a **My Bookings** table on the same page.

- **Service** – Category and Item name dropdowns
- **Dates and guests** – Start date, End date, Guests
- **Add-ons** – Flights, Chauffeur (shows a Pickup address field), Private Chef
- **Special Requests** text area
- *Submit Request* and *Reset Form* buttons

The My Bookings table (Item, Category, Dates, Guests, Add-ons, Special Requests) has a *Clear All Bookings* button.

**Responsive design:** The form sits in a centred `col-lg-8` column. Date fields sit side by side from 768px (`col-md-6`) and stack on phones. The bookings table uses `table-responsive`.

**Interactive elements:**
- Choosing a Category fills the Item dropdown with that category's items
- Ticking Chauffeur shows the Pickup address field (jQuery `.show()` / `.hide()`)
- A "Between 1 and 20 guests" tip appears when the Guests field is focused
- A valid submit adds a new row to My Bookings and shows "Your request has been added to My Bookings."
- *Reset Form* clears all fields and errors
- *Clear All Bookings* empties the table

**Client-side form validation:**

| Field | Rule | Error message |
|---|---|---|
| Category | Must be chosen | Please choose a category |
| Item name | Must be chosen | Please choose the item you want to book |
| Start / End date | Both required | Choose a start date and an end date |
| Start / End date | End not before start | End date cannot be before the start date |
| Guests | Number from 1 to 20 | Guests must be between 1 and 20 |
| Pickup address | 5+ characters, only if Chauffeur is ticked | Enter a pickup address of at least 5 characters |
| Special Requests | Max 300 characters | Special requests must be 300 characters or less |

---

## 7. Sign In – `login.html`

**Description:** Lets returning clients sign in. A centred "Welcome back" card with Email, Password, *Remember me*, a *Forgot password?* link, a *Sign in* button and a link to create an account.

**Responsive design:** The card is centred with `col-md-8 col-lg-5` – full width on phones, narrower on larger screens.

**Interactive elements:** Fields are checked on `blur` and again on `submit` (`preventDefault()` stops the page reloading). If both are valid, "Login details are valid." is shown.

**Client-side form validation:**

| Field | Rule | Error message |
|---|---|---|
| Email | Regex `^[a-zA-Z0-9._-]{1,}@[a-zA-Z0-9.-]{1,}[.][a-zA-Z]{2,}$` | Enter a valid email, e.g. name@example.com |
| Password | At least 8 characters | Password must be at least 8 characters |

---

## 8. Create Account – `register.html`

**Description:** New user registration. A centred "Create your account" card with Full name, Email, Mobile number, Password, Confirm password, a terms checkbox, a *Create account* button and a link to sign in.

**Responsive design:** The card is centred with `col-md-8 col-lg-5`.

**Interactive elements:** Format tips appear when the Mobile and Password fields are focused. Fields are checked on `blur` (the checkbox on `change`) and all again on `submit`. If everything is valid, "Account details are valid." is shown.

**Client-side form validation:**

| Field | Rule | Error message |
|---|---|---|
| Full name | 3–40 letters and spaces – `^[a-zA-Z ]{3,40}$` | Name must be 3 to 40 letters and spaces |
| Email | Same email regex as login | Enter a valid email, e.g. name@example.com |
| Mobile number | UAE format `^05[0-9]{8}$` (e.g. 0501234567) | Enter a UAE mobile number, e.g. 0501234567 |
| Password | At least 8 characters | Password must be at least 8 characters |
| Confirm password | Required and must match Password | Please confirm your password / Confirm Password does not match Password |
| Terms | Must be ticked | You must agree to the terms and conditions |

---

## 9. Contact – `contact.html`

**Description:** An enquiry form, linked from the home page, the footer, *Forgot password?* and the *Enquire* buttons. A centred "Contact Velour" card with Full name, Email, Phone, Category, Item of interest (optional), Message and a *Send* button.

**Responsive design:** The card is centred with `col-md-8 col-lg-6`.

**Interactive elements:** A phone format tip appears on focus. Fields are checked on `blur` / `change` and on `submit`. A valid submit shows a personalised message ("Thank you, [name]. We will reply within 24 hours.") and clears the form.

**Client-side form validation:**

| Field | Rule | Error message |
|---|---|---|
| Full name | `^[a-zA-Z ]{3,40}$` | Name must be 3 to 40 letters and spaces |
| Email | Email regex | Enter a valid email, e.g. name@example.com |
| Phone | `^05[0-9]{8}$` | Enter a UAE mobile number, e.g. 0501234567 |
| Category | Must be chosen | Please choose a category |
| Message | At least 10 characters | Message must be at least 10 characters |

---

## Limitations

- Front end only: the login, register and contact forms validate input but nothing is saved or sent.
- The cart page shows preset sample items; items added on other pages are not carried over.
- Bookings are cleared when the booking page is reloaded.
