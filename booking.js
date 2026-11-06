let stays = ["Palm Jumeirah Signature Villa", "Saadiyat Beachfront Villa", "Maldives Overwater Villa", "Downtown Dubai Sky Penthouse", "Monaco Harbour Penthouse", "Mayfair Penthouse", "Maldives Private Island", "Seychelles Island Estate", "Fiji Island Hideaway", "Liwa Desert Palace", "Private Desert Camp", "AlUla Canyon Villa", "Courchevel Ski Chalet", "Zermatt Alpine Lodge", "Aspen Mountain Residence", "Tuscan Vineyard Estate", "Cotswolds Manor House", "Provence Farmhouse"];
let events = ["Abu Dhabi Grand Prix, Paddock Club", "Monaco Grand Prix, Yacht Terrace", "Private Track Day", "Supercar Driving Experience", "Manchester City, Hospitality Box", "Chelsea, Stamford Bridge", "Real Madrid, Santiago Bernabeu", "Champions League Final", "Wimbledon, Centre Court", "Dubai World Cup", "Pro-Am Golf Day", "Paris Fashion Week", "Cannes Film Festival", "Art Basel Miami Beach"];
let travel = ["Light Jet", "Midsize Jet", "Ultra-Long-Range Jet", "Helicopter Transfer", "Day Yacht, 60 ft", "Superyacht Week Charter", "Speedboat Transfer", "Rolls-Royce Phantom", "Stretch Limousine", "Armoured SUV", "Supercar Self-Drive"];
let staff = ["Private Chef", "Butler", "House Manager", "Nanny or Governess", "Close Protection Officer", "Chauffeur", "Private Pilot", "Personal Trainer", "Personal Assistant", "Yacht Crew"];
let experiences = ["Desert Safari with Falconry", "Hot-Air Balloon at Sunrise", "Skydive over the Palm", "Cage-Free Shark Dive", "Michelin Chef's Table", "Dinner in the Dunes", "Restaurant Buyout", "Underwater Dining", "In-Villa Spa Day", "Yoga and Sound Healing", "Royal Hammam", "Sleep and Recovery Retreat", "After-Hours Museum Tour", "Cooking Masterclass", "Watchmaking Workshop", "Perfume Creation"];
let vacations = ["Abu Dhabi GP Weekend", "Monaco GP Week", "Champions League Final Trip", "Maldives, 7 Nights", "Seychelles Island Hopping", "Bora Bora Overwater Retreat", "Paris Fashion Weekend", "Royal London", "Tokyo and Kyoto", "Kenya Safari", "Lapland Glass Igloo", "Patagonia Expedition", "New Year's Eve in Dubai", "Christmas in the Alps", "Mediterranean Yacht Summer"];

let bookingCount = 0;

function getItems(category) {
    if (category == "Luxury Stays") {
        return stays;
    }
    else if (category == "Exclusive Events") {
        return events;
    }
    else if (category == "Private Travel") {
        return travel;
    }
    else if (category == "Vetted Staff") {
        return staff;
    }
    else if (category == "Experiences") {
        return experiences;
    }
    else if (category == "Vacations") {
        return vacations;
    }
    return [];
}

function fillItems(category) {
    let items = getItems(category);
    let list = document.querySelector("#item");

    while (list.childElementCount != 0) {
        list.firstElementChild.remove();
    }

    let first = document.createElement("option");
    first.setAttribute("value", "");
    if (items.length == 0) {
        first.innerText = "Choose a category first";
    }
    else {
        first.innerText = "Choose an item";
    }
    list.appendChild(first);

    for (let i = 0; i < items.length; i++) {
        let option = document.createElement("option");
        option.innerText = items[i];
        list.appendChild(option);
    }
}

function checkCategory() {
    if (document.querySelector("#category").value == "") {
        document.querySelector("#categoryHint").innerHTML = "Please choose a category";
        return false;
    }
    document.querySelector("#categoryHint").innerHTML = "";
    return true;
}

function checkItem() {
    if (document.querySelector("#item").value == "") {
        document.querySelector("#itemHint").innerHTML = "Please choose the item you want to book";
        return false;
    }
    document.querySelector("#itemHint").innerHTML = "";
    return true;
}

function checkDates() {
    let start = document.querySelector("#start").value;
    let end = document.querySelector("#end").value;

    if (start == "" || end == "") {
        document.querySelector("#dateHint").innerHTML = "Choose a start date and an end date";
        return false;
    }
    if (end < start) {
        document.querySelector("#dateHint").innerHTML = "End date cannot be before the start date";
        return false;
    }
    document.querySelector("#dateHint").innerHTML = "";
    return true;
}

function checkGuests() {
    let guests = parseInt(document.querySelector("#guests").value);

    if (isNaN(guests) || guests < 1 || guests > 20) {
        document.querySelector("#guestsHint").innerHTML = "Guests must be between 1 and 20";
        return false;
    }
    document.querySelector("#guestsHint").innerHTML = "";
    return true;
}

function checkPickup() {
    let pickup = document.querySelector("#pickup").value.trim();

    if (document.querySelector("#chauffeur").checked && pickup.length < 5) {
        document.querySelector("#pickupHint").innerHTML = "Enter a pickup address of at least 5 characters";
        return false;
    }
    document.querySelector("#pickupHint").innerHTML = "";
    return true;
}

function checkRequests() {
    let requests = document.querySelector("#requests").value.trim();

    if (requests.length > 300) {
        document.querySelector("#requestsHint").innerHTML = "Special requests must be 300 characters or less";
        return false;
    }
    document.querySelector("#requestsHint").innerHTML = "";
    return true;
}

function addCell(row, text) {
    let cell = document.createElement("td");
    cell.innerText = text;
    row.appendChild(cell);
}

function showEmptyRow() {
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    cell.setAttribute("colspan", "6");
    cell.innerText = "You have no bookings yet.";
    row.appendChild(cell);
    document.querySelector("#bookingList").appendChild(row);
}

function clearHints() {
    document.querySelector("#categoryHint").innerHTML = "";
    document.querySelector("#itemHint").innerHTML = "";
    document.querySelector("#dateHint").innerHTML = "";
    document.querySelector("#guestsHint").innerHTML = "";
    document.querySelector("#pickupHint").innerHTML = "";
    document.querySelector("#requestsHint").innerHTML = "";
}

document.querySelector("#category").addEventListener("change",
    () => {
        fillItems(document.querySelector("#category").value);
        checkCategory();
    }
);

document.querySelector("#item").addEventListener("change", checkItem);
document.querySelector("#start").addEventListener("change", checkDates);
document.querySelector("#end").addEventListener("change", checkDates);
document.querySelector("#pickup").addEventListener("blur", checkPickup);
document.querySelector("#requests").addEventListener("blur", checkRequests);

document.querySelector("#guests").addEventListener("focus",
    () => {
        document.querySelector("#guestsTip").innerHTML = "Between 1 and 20 guests";
    }
);

document.querySelector("#guests").addEventListener("blur",
    () => {
        document.querySelector("#guestsTip").innerHTML = "";
        checkGuests();
    }
);

document.querySelector("#bookingForm").addEventListener("reset",
    () => {
        clearHints();
        $("#pickupSection").hide();
        fillItems("");
        document.querySelector("#formMsg").innerHTML = "All inputs have been cleared.";
    }
);

document.querySelector("#bookingForm").addEventListener("submit",
    (evt) => {
        evt.preventDefault();
        document.querySelector("#formMsg").innerHTML = "";
        let valid = true;

        if (checkCategory() == false) {
            valid = false;
        }
        if (checkItem() == false) {
            valid = false;
        }
        if (checkDates() == false) {
            valid = false;
        }
        if (checkGuests() == false) {
            valid = false;
        }
        if (checkPickup() == false) {
            valid = false;
        }
        if (checkRequests() == false) {
            valid = false;
        }

        if (valid) {
            let addons = "";
            if (document.querySelector("#flights").checked) {
                addons = "Flights";
            }
            if (document.querySelector("#chauffeur").checked) {
                if (addons != "") {
                    addons = addons + ", ";
                }
                addons = addons + "Chauffeur (pickup: " + document.querySelector("#pickup").value.trim() + ")";
            }
            if (document.querySelector("#chef").checked) {
                if (addons != "") {
                    addons = addons + ", ";
                }
                addons = addons + "Private Chef";
            }
            if (addons == "") {
                addons = "None";
            }

            let requests = document.querySelector("#requests").value.trim();
            if (requests == "") {
                requests = "None";
            }

            let list = document.querySelector("#bookingList");
            if (bookingCount == 0) {
                list.firstElementChild.remove();
            }

            let row = document.createElement("tr");
            addCell(row, document.querySelector("#item").value);
            addCell(row, document.querySelector("#category").value);
            addCell(row, document.querySelector("#start").value + " to " + document.querySelector("#end").value);
            addCell(row, document.querySelector("#guests").value);
            addCell(row, addons);
            addCell(row, requests);
            list.appendChild(row);
            bookingCount = bookingCount + 1;

            document.querySelector("#bookingForm").reset();
            document.querySelector("#formMsg").innerHTML = "Your request has been added to My Bookings.";
        }
    }
);

fillItems(document.querySelector("#category").value);

$(document).ready(() => {

    $("#chauffeur").change(
        () => {
            if (document.querySelector("#chauffeur").checked) {
                $("#pickupSection").show();
            }
            else {
                $("#pickupSection").hide();
                document.querySelector("#pickupHint").innerHTML = "";
            }
        }
    );

    $("#clearBookings").click(
        () => {
            let list = document.querySelector("#bookingList");
            while (list.childElementCount != 0) {
                list.firstElementChild.remove();
            }
            showEmptyRow();
            bookingCount = 0;
        }
    );

});
