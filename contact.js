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

function checkCategory() {
    if (document.querySelector("#category").value == "") {
        document.querySelector("#categoryHint").innerHTML = "Please choose a category";
        return false;
    }
    document.querySelector("#categoryHint").innerHTML = "";
    return true;
}

function checkMessage() {
    let message = document.querySelector("#message").value.trim();

    if (message.length < 10) {
        document.querySelector("#messageHint").innerHTML = "Message must be at least 10 characters";
        return false;
    }
    document.querySelector("#messageHint").innerHTML = "";
    return true;
}

document.querySelector("#full-name").addEventListener("blur", checkName);
document.querySelector("#email").addEventListener("blur", checkEmail);
document.querySelector("#category").addEventListener("change", checkCategory);
document.querySelector("#message").addEventListener("blur", checkMessage);

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

document.querySelector("#contactForm").addEventListener("submit",
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
        if (checkCategory() == false) {
            valid = false;
        }
        if (checkMessage() == false) {
            valid = false;
        }

        if (valid) {
            let name = document.querySelector("#full-name").value.trim();
            document.querySelector("#formMsg").innerHTML = "Thank you, " + name + ". We will reply within 24 hours.";

            document.querySelector("#full-name").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#phone").value = "";
            document.querySelector("#category").value = "";
            document.querySelector("#item").value = "";
            document.querySelector("#message").value = "";
        }
        else {
            document.querySelector("#formMsg").innerHTML = "";
        }
    }
);
