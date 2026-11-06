function checkName() {
    let name = document.querySelector("#full-name").value.trim();
    let pattern = /^[a-zA-Z ]{3,40}$/;

    if (pattern.test(name) == false) {
        document.querySelector("#nameHint").innerHTML = "Name must be 3 to 40 letters and spaces";
        return false;
    }
    document.querySelector("#nameHint").innerHTML = "";
    return true;
}

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

function checkPhone() {
    let phone = document.querySelector("#phone").value.trim();
    let pattern = /^05[0-9]{8}$/;

    if (pattern.test(phone) == false) {
        document.querySelector("#phoneHint").innerHTML = "Enter a UAE mobile number, e.g. 0501234567";
        return false;
    }
    document.querySelector("#phoneHint").innerHTML = "";
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

function checkConfirm() {
    let pwd = document.querySelector("#password").value;
    let confirm = document.querySelector("#confirm-password").value;

    if (confirm == "") {
        document.querySelector("#confirmHint").innerHTML = "Please confirm your password";
        return false;
    }
    if (pwd != confirm) {
        document.querySelector("#confirmHint").innerHTML = "Confirm Password does not match Password";
        return false;
    }
    document.querySelector("#confirmHint").innerHTML = "";
    return true;
}

function checkTerms() {
    if (document.querySelector("#terms").checked == false) {
        document.querySelector("#termsHint").innerHTML = "You must agree to the terms and conditions";
        return false;
    }
    document.querySelector("#termsHint").innerHTML = "";
    return true;
}

document.querySelector("#full-name").addEventListener("blur", checkName);
document.querySelector("#email").addEventListener("blur", checkEmail);
document.querySelector("#confirm-password").addEventListener("blur", checkConfirm);
document.querySelector("#terms").addEventListener("change", checkTerms);

document.querySelector("#phone").addEventListener("focus",
    () => {
        document.querySelector("#phoneTip").innerHTML = "Format: 05 followed by 8 digits";
    }
);

document.querySelector("#phone").addEventListener("blur",
    () => {
        document.querySelector("#phoneTip").innerHTML = "";
        checkPhone();
    }
);

document.querySelector("#password").addEventListener("focus",
    () => {
        document.querySelector("#passwordTip").innerHTML = "8 to 20 characters, with an uppercase letter, a lowercase letter, a number and a symbol";
    }
);

document.querySelector("#password").addEventListener("blur",
    () => {
        document.querySelector("#passwordTip").innerHTML = "";
        checkPassword();
        if (document.querySelector("#confirm-password").value != "") {
            checkConfirm();
        }
    }
);

document.querySelector("#registerForm").addEventListener("submit",
    (evt) => {
        evt.preventDefault();
        let valid = true;

        if (checkName() == false) {
            valid = false;
        }
        if (checkEmail() == false) {
            valid = false;
        }
        if (checkPhone() == false) {
            valid = false;
        }
        if (checkPassword() == false) {
            valid = false;
        }
        if (checkConfirm() == false) {
            valid = false;
        }
        if (checkTerms() == false) {
            valid = false;
        }

        if (valid) {
            document.querySelector("#formMsg").innerHTML = "Account details are valid.";
        }
        else {
            document.querySelector("#formMsg").innerHTML = "";
        }
    }
);
