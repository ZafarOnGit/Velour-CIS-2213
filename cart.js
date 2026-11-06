let itemNames = ["Courchevel Ski Chalet", "Private Chef", "Rolls-Royce Phantom", "Abu Dhabi GP Weekend"];
let itemDetails = ["Courchevel 1850, France - per night", "Select tier - per hour", "Chauffeured - per hour", "4 nights - per person"];
let itemPrices = [5200, 95, 180, 6500];
let itemQty = [3, 4, 3, 2];
let startQty = [3, 4, 3, 2];

function showCart() {
    $("#cartBody").empty();
    let subtotal = 0;
    let count = 0;

    for (let i = 0; i < itemNames.length; i++) {
        if (itemQty[i] > 0) {
            let lineTotal = itemPrices[i] * itemQty[i];
            subtotal = subtotal + lineTotal;
            count = count + 1;

            $("#cartBody").append(
                "<tr>" +
                "<td>" + itemNames[i] + "</td>" +
                "<td>" + itemDetails[i] + "</td>" +
                "<td>$" + itemPrices[i].toFixed(2) + "</td>" +
                "<td><ul class='pagination mb-0'>" +
                "<li class='page-item'><button type='button' class='page-link minus-btn' value='" + i + "'>-</button></li>" +
                "<li class='page-item'><span class='page-link qty'>" + itemQty[i] + "</span></li>" +
                "<li class='page-item'><button type='button' class='page-link plus-btn' value='" + i + "'>+</button></li>" +
                "</ul></td>" +
                "<td>$" + lineTotal.toFixed(2) + "</td>" +
                "<td><button type='button' class='btn btn-outline-danger btn-sm remove-btn' value='" + i + "'>Remove</button></td>" +
                "</tr>"
            );
        }
    }

    if (count == 0) {
        $("#cartBody").append("<tr><td colspan='6'>Your cart is empty. <a href='catalogue.html'>Browse the catalogue</a></td></tr>");
    }

    $("#subtotal").html("Subtotal: $" + subtotal.toFixed(2));

    $(".plus-btn").click(
        (evt) => {
            let i = parseInt(evt.target.getAttribute("value"));
            itemQty[i] = itemQty[i] + 1;
            showCart();
        }
    );

    $(".minus-btn").click(
        (evt) => {
            let i = parseInt(evt.target.getAttribute("value"));
            itemQty[i] = itemQty[i] - 1;
            showCart();
        }
    );

    $(".remove-btn").click(
        (evt) => {
            let i = parseInt(evt.target.getAttribute("value"));
            itemQty[i] = 0;
            showCart();
        }
    );
}

$(document).ready(() => {

    showCart();

    $("#resetCart").click(
        () => {
            for (let i = 0; i < itemQty.length; i++) {
                itemQty[i] = startQty[i];
            }
            showCart();
        }
    );

    $("#clearCart").click(
        () => {
            for (let i = 0; i < itemQty.length; i++) {
                itemQty[i] = 0;
            }
            showCart();
        }
    );

});
