# Cart Page – `cart.html`

**Title:** Velour | Your Cart

## Description

Shows the items in the user's cart as a table with these columns: Item, Details, Price, Quantity, Total, and a Remove button. The subtotal is shown below the table, next to *Clear Cart* and *Proceed to Booking* buttons.

The cart starts with four sample items stored in arrays in `cart.js`:

| Item | Details | Price | Qty |
|---|---|---|---|
| Courchevel Ski Chalet | per night | AED 19,000 | 3 |
| Private Chef | Select tier, per hour | AED 350 | 4 |
| Rolls-Royce Phantom | Chauffeured, per hour | AED 650 | 3 |
| Abu Dhabi GP Weekend | 4 nights, per person | AED 24,000 | 2 |

## Files used

- [cart.html](../../cart.html)
- [cart.js](../../cart.js)
- [style.css](../../style.css)
- [main.js](../../main.js)
- Bootstrap 5.3.0 and jQuery 3.7.1 (CDN)

## Responsive design

- The table is inside `table-responsive`, so on small screens it scrolls sideways instead of squashing the columns.
- Page title uses `font-size: 3.2vw`, set to `2rem` below 768px.
- Navbar collapses into a hamburger menu below 992px.

## Interactive elements and DOM manipulation

The `showCart()` function in `cart.js` empties the table body (`#cartBody`) and rebuilds every row from the arrays. It runs on page load and after every change.

| Element | How it works |
|---|---|
| `+` button | Adds 1 to the item's quantity, then redraws the table |
| `-` button | Subtracts 1. At 0 the row disappears. |
| *Remove* button | Sets the item's quantity to 0, which removes the row |
| Row total | Price × quantity, recalculated each redraw |
| Subtotal | Sum of all row totals, updated in `#subtotal` |
| *Clear Cart* button | Sets every quantity to 0 |
| Empty cart | When nothing is left, the table shows "Your cart is empty. Browse the catalogue" with a link to the catalogue |
| *Proceed to Booking* | Link to [booking.html](../../booking.html) |

## Form validation

None – this page has no forms.

## Limitations

- The cart uses preset sample data. Items added with *Add to Cart* on other pages are not passed to this page, because the site has no storage or back end.
- `cart.js` contains a handler for a `#resetCart` button (restores the starting quantities), but there is no such button in `cart.html`, so it never runs.
