//'password' должно возвращаться 'ssapdorw'

let password = "password";

// function changeindex(index, array) {
//     for (let i = 2; i < 5; i++) {
//         const element = array[i];
//         // console.log(element);
//         if (i != 4) {
//             array[i] = array.at(i - index);
//             array[i - index] = element;
//             index += 2;
//         } else {
//             index = 3;
//             array[i] = array.at(i + index);
//             array[i + index] = element;
//         }
//     }
//     return array.join('');
// }

function crypto(pass) {
    if (pass.length < 4) return "Пароль слишком короткий!";

    let cryptoPass = "";
    let index = 1;
    let array = pass.split("");
    console.log(array);

    
    for (let i = 2; i < 5; i++) {
        const element = array[i];
        // console.log(element);
        if (i != 4) {
            array[i] = array.at(i - index);
            array[i - index] = element;
            index += 2;
        } else {
            index = 3;
            array[i] = array.at(i + index);
            array[i + index] = element;
        }
    }

    cryptoPass = array.join('');

    return cryptoPass;
}



function check(cryptoPass, pass) {
    let index = 1;
    let array = cryptoPass.split("");

    for (let i = 2; i < 5; i++) {
        const element = array[i];
        // console.log(element);
        if (i != 4) {
            array[i] = array.at(i - index);
            array[i - index] = element;
            index += 2;
        } else {
            index = 3;
            array[i] = array.at(i + index);
            array[i + index] = element;
        }
    }


    const newPass = array.join('');
    console.log(newPass)
    return pass == newPass;

}

const cryptoPass = crypto(password);
console.log(cryptoPass == 'ssapdorw');
// console.log(check(cryptoPass, password));