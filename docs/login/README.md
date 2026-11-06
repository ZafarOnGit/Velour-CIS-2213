# Sign In Page – `login.html`

**Title:** Velour | Sign In

## Description

Lets returning clients sign in. A centred card titled "Welcome back" contains:

- Email address
- Password
- *Remember me* checkbox
- *Forgot password?* link (goes to the contact page)
- *Sign in* button
- "New to Velour? Create an account" link to [register.html](../../register.html)

## Files used

- [login.html](../../login.html)
- [login.js](../../login.js)
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
| Email and Password fields | Checked when the user leaves the field (`blur` event) |
| *Sign in* button | Runs all checks on `submit`. `evt.preventDefault()` stops the page from reloading. |
| Success message | "Login details are valid." in green when both fields pass |

## Client-side form validation

| Field | Rule | Error message |
|---|---|---|
| Email | Must match the regular expression `^[a-zA-Z0-9._-]{1,}@[a-zA-Z0-9.-]{1,}[.][a-zA-Z]{2,}$` (text, `@`, domain, dot, 2+ letter ending) | Enter a valid email, e.g. name@example.com |
| Password | At least 8 characters | Password must be at least 8 characters |

Errors appear in red text directly under the field and clear as soon as the input is fixed.

## Limitations

There is no back end, so the form only checks the format of the input. It does not check the email and password against real accounts.
