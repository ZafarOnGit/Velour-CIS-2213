# Create Account Page – `register.html`

**Title:** Velour | Create Account

## Description

Lets new users register. A centred card titled "Create your account" contains:

- Full name
- Email address
- Mobile number
- Password
- Confirm password
- *I agree to the terms and conditions* checkbox
- *Create account* button
- "Already have an account? Sign in" link to [login.html](../../login.html)

## Files used

- [register.html](../../register.html)
- [register.js](../../register.js)
- [style.css](../../style.css)
- [main.js](../../main.js)
- Bootstrap 5.3.0 and jQuery 3.7.1 (CDN)

## Responsive design

- The card is centred with `col-md-8 col-lg-5`: full width on phones, 8/12 on tablets, 5/12 on desktops.
- Card padding grows on larger screens (`p-4 p-md-5`).
- Navbar collapses into a hamburger menu below 992px.

## Interactive elements

| Element | How it works |
|---|---|
| Mobile number tip | On focus, "Format: 05 followed by 8 digits" appears; it disappears on blur |
| Password tip | On focus, "Use at least 8 characters" appears; it disappears on blur |
| Field checks | Each field is checked on `blur` (the terms checkbox on `change`) |
| *Create account* button | Runs every check on `submit`. `evt.preventDefault()` stops the page from reloading. |
| Success message | "Account details are valid." in green when all fields pass |

## Client-side form validation

| Field | Rule | Error message |
|---|---|---|
| Full name | 3–40 letters and spaces only – regex `^[a-zA-Z ]{3,40}$` | Name must be 3 to 40 letters and spaces |
| Email | Regex `^[a-zA-Z0-9._-]{1,}@[a-zA-Z0-9.-]{1,}[.][a-zA-Z]{2,}$` | Enter a valid email, e.g. name@example.com |
| Mobile number | UAE format: `05` + 8 digits – regex `^05[0-9]{8}$` (e.g. 0501234567) | Enter a UAE mobile number, e.g. 0501234567 |
| Password | At least 8 characters | Password must be at least 8 characters |
| Confirm password | Required | Please confirm your password |
| Confirm password | Must match Password | Confirm Password does not match Password |
| Terms checkbox | Must be ticked | You must agree to the terms and conditions |

Errors appear in red text directly under the field.

## Limitations

There is no back end, so no account is actually created. The form only checks the input.
