document.querySelector("#catalogueMenu").addEventListener("mouseenter",
    () => {
        document.querySelector("#catalogueList").style.display = "block";
    }
);

document.querySelector("#catalogueMenu").addEventListener("mouseleave",
    () => {
        document.querySelector("#catalogueList").style.display = "none";
    }
);

let cartNames = [];
let cartPrices = [];
let cartQty = [];
let cartClasses = [];

function findItem(name) {
    for (let i = 0; i < cartNames.length; i++) {
        if (cartNames[i] == name) {
            return i;
        }
    }
    return -1;
}

function makePageItem(text, i, handler) {
    let item = document.createElement("li");
    item.setAttribute("class", "page-item");

    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "page-link");
    button.setAttribute("value", i);
    button.innerHTML = text;
    button.addEventListener("click", handler);

    item.appendChild(button);
    return item;
}

function makeControl(i) {
    let control = document.createElement("ul");
    control.setAttribute("class", "pagination mb-0");
    control.setAttribute("id", "control" + i);

    let qtyItem = document.createElement("li");
    qtyItem.setAttribute("class", "page-item");

    let qty = document.createElement("span");
    qty.setAttribute("class", "page-link qty");
    qty.setAttribute("id", "qty" + i);
    qty.innerHTML = cartQty[i];
    qtyItem.appendChild(qty);

    control.appendChild(makePageItem("-", i, minusClick));
    control.appendChild(qtyItem);
    control.appendChild(makePageItem("+", i, plusClick));
    return control;
}

function makeAddButton(i) {
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", cartClasses[i]);
    button.setAttribute("name", cartNames[i]);
    button.setAttribute("value", cartPrices[i]);
    button.innerHTML = "Add to Cart";
    button.addEventListener("click", addToCart);
    return button;
}

function addToCart(evt) {
    let button = evt.target;
    let name = button.getAttribute("name");
    let price = parseFloat(button.getAttribute("value"));
    let i = findItem(name);

    if (i == -1) {
        i = cartNames.length;
        cartNames[i] = name;
        cartPrices[i] = price;
        cartClasses[i] = button.getAttribute("class");
    }
    cartQty[i] = 1;

    let holder = button.parentElement;
    button.remove();
    holder.appendChild(makeControl(i));
}

function plusClick(evt) {
    let i = parseInt(evt.target.getAttribute("value"));
    cartQty[i] = cartQty[i] + 1;
    document.querySelector("#qty" + i).innerHTML = cartQty[i];
}

function minusClick(evt) {
    let i = parseInt(evt.target.getAttribute("value"));
    cartQty[i] = cartQty[i] - 1;

    if (cartQty[i] == 0) {
        removeControl(i);
    }
    else {
        document.querySelector("#qty" + i).innerHTML = cartQty[i];
    }
}

function removeControl(i) {
    let control = document.querySelector("#control" + i);
    let holder = control.parentElement;
    control.remove();
    holder.appendChild(makeAddButton(i));
}

$(document).ready(() => {

    $(".add-btn").click(addToCart);

    $(".hover-card").mouseenter(
        (evt) => {
            $(evt.currentTarget).css("box-shadow", "0 0 18px #c9a24a");
            $(evt.currentTarget).css("transform", "translateY(-5px)");
        }
    );

    $(".hover-card").mouseleave(
        (evt) => {
            $(evt.currentTarget).css("box-shadow", "");
            $(evt.currentTarget).css("transform", "");
        }
    );

    $(".details-btn").click(
        (evt) => {
            $(evt.target.nextElementSibling).toggle();
        }
    );

    $("#filterAll").css("background-color", "#c9a24a");
    $("#filterAll").css("color", "black");

    $(".filter-btn").click(
        (evt) => {
            let choice = evt.target.getAttribute("value");

            $(".filter-btn").css("background-color", "");
            $(".filter-btn").css("color", "");
            $(evt.target).css("background-color", "#c9a24a");
            $(evt.target).css("color", "black");

            if (choice == "all") {
                $(".category-section").show();
            }
            else {
                $(".category-section").hide();
                $("#" + choice).show();
            }
        }
    );

});
