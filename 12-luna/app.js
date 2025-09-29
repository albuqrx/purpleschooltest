// 4561-2612-1234-5464

const cardNumber = `4561-2612-1234-5464`;

function luna(str) {

    const cleanString = str.replaceAll('-', '').split('').map(Number);
    console.log(cleanString);
    let sum = 0;

    for (let i = cleanString.length - 1; i > 0; i -= 2) {
        console.log(cleanString[i]);
        cleanString[i] *= 2;
        
        if (cleanString[i] > 9) { 
            cleanString[i] -= 9;
        }
    }   

    cleanString.forEach((e) => sum += e );

    console.log(cleanString);
    console.log(sum);

    return sum % 10 === 0;

}


console.log(luna(cardNumber));