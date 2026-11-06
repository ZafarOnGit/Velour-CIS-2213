# Contact Page – `contact.html`

**Title:** Velour | Contact Us

## Description

Lets users send an enquiry to Velour. It is linked from the home page (*Contact Us*), the footer, the *Forgot password?* link on the login page, and the *Enquire* buttons on "Price on request" items.

A centred card titled "Contact Velour" contains:

- Full name
- Email
- Phone
- Category dropdown (the six service categories)
- Item of interest (optional text)
- Message
- *Send* button

## Files used

- [contact.html](../../contact.html)
- [contact.js](../../contact.js)
- [style.css](../../style.css)
- [main.js](../../main.js)
- Bootstrap 5.3.0 and jQuery 3.7.1 (CDN)

## Responsive design

- The card is centred with `col-md-8 col-lg-6`: full width on phones, 8/12 on tablets, 6/12 on desktops.
- Card padding grows on larger screens (`p-4 p-md-5`).
- Navbar collapses into a hamburger menu below 992px.

## Interactive elements

| Element | How it works |
|---|---|
| Phone tip | On focus, "Format: 05 followed by 8 digits" appears; it disappears on blur |
| Field checks | Name, Email, Phone and Message are checked on `blur`; Category on `change` |
| *Send* button | Runs every check on `submit`. `evt.preventDefault()` stops the page from reloading. |
| Success message | Shows a personalised message, e.g. "Thank you, Sara Ahmed. We will reply within 24 hours.", then clears all fields |

## Client-side form validation

| Field | Rule | Error message |
|---|---|---|
| Full name | 3–40 letters and spaces – regex `^[a-zA-Z ]{3,40}$` | Name must be 3 to 40 letters and spaces |
| Email | Regex `^[a-zA-Z0-9._-]{1,}@[a-zA-Z0-9.-]{1,}[.][a-zA-Z]{2,}$` | Enter a valid email, e.g. name@example.com |
| Phone | UAE format: `05` + 8 digits – regex `^05[0-9]{8}$` | Enter a UAE mobile number, e.g. 0501234567 |
| Category | Must be chosen | Please choose a category |
| Item of interest | Optional – not checked | – |
| Message | At least 10 characters | Message must be at least 10 characters |

Errors appear in red text directly under the field.

## Limitations

There is no back end, so the message is not actually sent anywhere.
