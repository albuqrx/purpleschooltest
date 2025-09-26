// [`10-02-2022’, `тест’, `11/12/2023’, `00/13/2022’, `41/12/2023’]

//[`10-02-2022’, `12-11-2023’]

let array = [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`];

function removeExtraData(arr) {

    let dateArray = [];

    for ( let element of arr) {
        
        let checkSlash = element.split(/[/]+/);
        let checkDef = element.split(/[-]+/)

        if (checkSlash.length === 3) {
            let data = checkSlash[0];
            checkSlash[0] = checkSlash[1];
            checkSlash[1] = data;
            dateArray.push(checkSlash);
        } else if (checkDef.length === 3) {
            dateArray.push(checkDef)
        }
    } 
    
    console.log(dateArray);

    const sortArray = dateArray.filter((e) => (Number(e[0]) > 0 && Number(e[0]) < 13) && (Number(e[1]) > 0 && Number(e[1]) < 32)
    );

    return sortArray.map((e) => e.join(`-`));
}

console.log(removeExtraData(array));
