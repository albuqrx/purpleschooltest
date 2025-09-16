const sum = 1000;
const currency = "EUR";
const target = "RUB";


function currencyСonversion(userSum, userCurrency, targetCurrency) {

    const arrayConversion = {
        "$-RUB": 80,
        "$-EUR": 0.86,
        "RUB-$": 0.0125,
        "RUB-EUR": 0.011,
        "EUR-RUB": 93,
        "EUR-$": 1.16,
    };

    const property = userCurrency + "-" + targetCurrency;

    if (arrayConversion.hasOwnProperty(property)) {
        console.log(arrayConversion[property]);
        return `${userSum * arrayConversion[property]} ${targetCurrency}`;
    } 

    if (userCurrency === targetCurrency) return userSum + userCurrency;

    return null;

}

console.log(currencyСonversion(sum, currency, target));