# Booking Page – `booking.html`

**Title:** Velour | My Bookings

## Description

Lets users request a booking and see their requests. The page has two parts:

1. **Request a Booking form**, in three groups (`fieldset`):
   - **Service** – Category dropdown and Item name dropdown
   - **Dates and guests** – Start date, End date, Guests
   - **Add-ons** – Flights, Chauffeur (shows a Pickup address field), Private Chef

   Plus a *Special Requests* text area and *Submit Request* / *Reset Form* buttons.

2. **My Bookings table** – columns: Item, Category, Dates, Guests, Add-ons, Special Requests. It starts with "You have no bookings yet." and has a *Clear All Bookings* button.

## Files used

- [booking.html](../../booking.html)
- [booking.js](../../booking.js)
- [style.css](../../style.css)
- [main.js](../../main.js)
- Bootstrap 5.3.0 and jQuery 3.7.1 (CDN)

## Responsive design

- The form sits in a centred `col-lg-8` column; it uses the full width on smaller screens.
- Start and End date fields sit side by side from 768px up (`col-md-6`) and stack on phones.
- The My Bookings table is inside `table-responsive`, so it scrolls sideways on small screens.
- Navbar collapses into a hamburger menu below 992px.

## Interactive elements

| Element | How it works |
|---|---|
| Dependent dropdowns | Choosing a Category fills the Item dropdown with that category's items (from arrays in `booking.js`). Before a category is chosen it says "Choose a category first". |
| Chauffeur checkbox | jQuery shows the Pickup address field when ticked and hides it when unticked |
| Guests tip | On focus, "Between 1 and 20 guests" appears under the field; it disappears on blur |
| *Submit Request* | If everything is valid, a new row is added to the My Bookings table, the form is reset, and "Your request has been added to My Bookings." is shown |
| *Reset Form* | Clears all fields and error messages, hides Pickup, empties the Item list, and shows "All inputs have been cleared." |
| *Clear All Bookings* | Removes all rows and shows "You have no bookings yet." again |

## Client-side form validation

Each field is checked when the user leaves it or changes it, and all fields are checked again on submit (`evt.preventDefault()` stops the page from reloading). Errors appear in red under the field.

| Field | Rule | Error message |
|---|---|---|
| Category | Must be chosen | Please choose a category |
| Item name | Must be chosen | Please choose the item you want to book |
| Start / End date | Both required | Choose a start date and an end date |
| Start / End date | End cannot be before start | End date cannot be before the start date |
| Guests | Whole number from 1 to 20 | Guests must be between 1 and 20 |
| Pickup address | At least 5 characters, only if Chauffeur is ticked | Enter a pickup address of at least 5 characters |
| Special Requests | Optional, max 300 characters | Special requests must be 300 characters or less |

## Limitations

Bookings are only kept in the page. Reloading the page clears the My Bookings table.
