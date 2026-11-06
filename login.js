function checkEmail() {
    let email = document.querySelector("#email").value.trim();
    let pattern = /^[a-zA-Z0-9._-]{1,}@[a-zA-Z0-9.-]{1,}[.][a-zA-Z]{2,}$/;

    if (pattern.test(email) == false) {
        document.querySelector("#emailHint").innerHTML = "Enter a valid email, e.g. name@example.com";
        return false;
    }
    document.querySelector("#emailHint").innerHTML = "";
    return true;
}

function checkPassword() {
    let pwd = document.querySelector("#password").value;
    let errmsgs = "";

    let upperPattern = /[A-Z]/;
    let lowerPattern = /[a-z]/;
    let numberPattern = /[0-9]/;
    let symbolPattern = /[!@#$%^&*]/;
    let spacePattern = /[ ]/;

    if (pwd.length < 8 || pwd.length > 20) {
        errmsgs += "Password must be 8 to 20 characters<br>";
    }
    if (upperPattern.test(pwd) == false) {
        errmsgs += "Add at least one uppercase letter (A-Z)<br>";
    }
    if (lowerPattern.test(pwd) == false) {
        errmsgs += "Add at least one lowercase letter (a-z)<br>";
    }
    if (numberPattern.test(pwd) == false) {
        errmsgs += "Add at least one number (0-9)<br>";
    }
    if (symbolPattern.test(pwd) == false) {
        errmsgs += "Add at least one symbol (! @ # $ % ^ & *)<br>";
    }
    if (spacePattern.test(pwd) == true) {
        errmsgs += "Password cannot contain spaces<br>";
    }

    document.querySelector("#passwordHint").innerHTML = errmsgs;

    if (errmsgs != "") {
        return false;
    }
    return true;
}

document.querySelector("#email").addEventListener("blur", checkEmail);
document.querySelector("#password").addEventListener("blur", checkPassword);

document.querySelector("#loginForm").addEventListener("submit",
    (evt) => {
        evt.preventDefault();
        let valid = true;

        if (checkEmail() == false) {
            valid = false;
        }
        if (checkPassword() == false) {
            valid = false;
        }

        if (valid) {
            document.querySelector("#formMsg").innerHTML = "Login details are valid.";
        }
        else {
            document.querySelector("#formMsg").innerHTML = "";
        }
    }
);
