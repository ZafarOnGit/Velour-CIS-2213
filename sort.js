let sortCards = [];
let sortRows = [];
let sortClasses = [];
let sortNames = [];
let sortPrices = [];
let sortSections = [];

function readCards() {
    let section = document.querySelector("#sortBar").nextElementSibling;

    while (section.getAttribute("id") != "sortedSection") {
        if (section.getAttribute("id") != "tiers") {
            sortSections[sortSections.length] = section;

            let row = section.firstElementChild.nextElementSibling;
            let card = row.firstElementChild;

            for (let j = 0; j < row.childElementCount; j++) {
                let i = sortCards.length;
                let footer = card.firstElementChild.lastElementChild;
                let price = parseFloat(footer.firstElementChild.getAttribute("value"));

                if (isNaN(price)) {
                    price = 1000000;
                }

                sortCards[i] = card;
                sortRows[i] = row;
                sortClasses[i] = card.getAttribute("class");
                sortNames[i] = card.querySelector(".card-title").innerText;
                sortPrices[i] = price;

                card = card.nextElementSibling;
            }
        }
        section = section.nextElementSibling;
    }
}

function comesBefore(a, b, type) {
    if (type == "price-low") {
        return sortPrices[a] < sortPrices[b];
    }
    else if (type == "price-high") {
        return sortPrices[a] > sortPrices[b];
    }
    else if (type == "name-az") {
        return sortNames[a] < sortNames[b];
    }
    return sortNames[a] > sortNames[b];
}

function sortOrder(type) {
    let order = [];
    for (let i = 0; i < sortCards.length; i++) {
        order[i] = i;
    }

    for (let i = 0; i < order.length - 1; i++) {
        let best = i;
        for (let j = i + 1; j < order.length; j++) {
            if (comesBefore(order[j], order[best], type)) {
                best = j;
            }
        }
        let temp = order[i];
        order[i] = order[best];
        order[best] = temp;
    }
    return order;
}

function showSorted(type) {
    let order = sortOrder(type);
    let sortedRow = document.querySelector("#sortedRow");

    for (let k = 0; k < order.length; k++) {
        let i = order[k];
        sortCards[i].setAttribute("class", "col-md-6 col-lg-3");
        sortedRow.appendChild(sortCards[i]);
    }

    for (let i = 0; i < sortSections.length; i++) {
        sortSections[i].style.display = "none";
    }
    document.querySelector(".filter-bar").style.display = "none";
    document.querySelector("#sortedSection").style.display = "block";
}

function showRelevance() {
    for (let i = 0; i < sortCards.length; i++) {
        sortCards[i].setAttribute("class", sortClasses[i]);
        sortRows[i].appendChild(sortCards[i]);
    }

    for (let i = 0; i < sortSections.length; i++) {
        sortSections[i].style.display = "block";
    }
    document.querySelector("#sortedSection").style.display = "none";
    document.querySelector(".filter-bar").style.display = "block";

    let bar = document.querySelector(".filter-bar");
    let button = bar.firstElementChild;
    for (let i = 0; i < bar.childElementCount; i++) {
        button.style.backgroundColor = "";
        button.style.color = "";
        button = button.nextElementSibling;
    }

    document.querySelector("#filterAll").style.backgroundColor = "#c9a24a";
    document.querySelector("#filterAll").style.color = "black";
}

readCards();

document.querySelector("#sortBy").addEventListener("change",
    () => {
        let type = document.querySelector("#sortBy").value;

        if (type == "relevance") {
            showRelevance();
        }
        else {
            showSorted(type);
        }
    }
);
