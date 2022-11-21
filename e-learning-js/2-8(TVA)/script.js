function formatInputValue(valueNonFormated) {
    let valueFormated;
    valueFormated = valueNonFormated.replace(",", ".");
    valueFormated = valueFormated.replace(/[^0-9$.]/g, '')

    return valueFormated;
}

function calculateVAT(typeAmountBeginning) {

    let amountDF = formatInputValue(document.getElementById("amountDF").value);
    let amountVAT = formatInputValue(document.getElementById("amountVAT").value);
    let amountTTC = formatInputValue(document.getElementById("amountTTC").value);
    let rateVAT = formatInputValue(document.getElementById("rateVAT").value);

    console.log("amount Duty Free :" + amountDF);
    console.log("amount VAT :" + amountVAT);
    console.log("amount TTC :" + amountTTC);
    console.log("rate VAT :" + rateVAT);

    if (typeAmountBeginning == "rateVAT") {
        typeAmountBeginning = "amountDF";
    }

    if (typeAmountBeginning == "amountDF") {
        console.log("hey");

        amountVAT = Math.round(amountDF * rateVAT / 100);
        amountTTC = Math.round(Number(amountDF) + Number(amountVAT));

        document.getElementById("amountVAT").value = amountVAT + " €";
        document.getElementById("amountTTC").value = amountTTC + " €";

    } else if (typeAmountBeginning == "amountVAT") {

        amountDF = Math.round(amountVAT / (rateVAT / 100));
        amountTTC = Math.round(Number(amountDF) + Number(amountVAT));

        document.getElementById("amountDF").value = amountDF + " €";
        document.getElementById("amountTTC").value = amountTTC + " €";

    } else if (typeAmountBeginning == "amountTTC") {

        amountDF = Math.round(amountTTC / (1 + rateVAT / 100));
        amountVAT = Math.round(amountTTC - amountDF);

        document.getElementById("amountDF").value = amountDF + " €";
        document.getElementById("amountVAT").value = amountVAT + " €";
    }
    document.getElementById("vatTotal").innerHTML = "<p>Amount DF : " + amountDF + " <br> Amount VAT : " + amountVAT + " <br> Amount TTC : " + amountTTC + " </p>"
}

// ---------------------------------------------------
function updateRateVAT(rateVAT) {
    // console.log(rateVAT);
    document.getElementById("rateVAT").value = rateVAT;
}

function reInitInputTelValue(inputId, symbol) {
    let myInput = document.getElementById(inputId),
        inputValue = myInput.value.replace(/\s/g, "");

    if (inputValue.length == 0) {
        myInput.value = 0 + " " + symbol;
    } else if (inputValue.indexOf(symbol) == -1) {
        myInput.value = inputValue + " " + symbol;
    }
}

// ---------------------------------------------------
// keyup
let listInputTel = document.querySelectorAll("input[type='tel']");

for (let i = 0; i < listInputTel.length; i++) {
    listInputTel[i].addEventListener("keyup", function (event) {
        calculateVAT(event.currentTarget.id);
    });

    // BLUR
    listInputTel[i].addEventListener("blur", function (event) {

        if (event.currentTarget.id == "rateVAT") {
            reInitInputTelValue(event.currentTarget.id, "%");
        } else {
            reInitInputTelValue(event.currentTarget.id, "€");

        }

    });
}

// ---------------------------------------------------
// click
let listInputButton = document.querySelectorAll("input[type='button']");

for (let i = 0; i < listInputButton.length; i++) {
    listInputButton[i].addEventListener("click", function (event) {
        updateRateVAT(event.currentTarget.value);
        calculateVAT("tauxTVA");
    });
}
