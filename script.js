function convertCurrency() {
    event.preventDefault();
    let formData = $("form").serializeArray();
    //$('#output').text(formData[0].value + " dollars per");
    //$('#output').append("<br>");    
    //$('#output').append(formData[1].value + " kyat");

    let usd = formData[0].value;
    let kyat = formData[1].value;
    let inDollars = formData[2].value;

    let conversionRate = kyat / usd;

    //$('#formulated').text("1 dollar = " + conversionRate + " kyat");


    converted = inDollars * conversionRate;

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    //visible another form
    // $("#secondForm").style.backgroundColor = "red";
    
    //document.getElementById("secondForm").style.backgroundColor = "red";
    let commaed = numberWithCommas(converted);
    document.getElementById("secondForm").innerHTML = commaed + " MMK for " + inDollars.toString() + "$";


    
    //document.getElementById("testing").innerHTML = commaed;
}