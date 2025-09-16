let arr = [1, 40, -5, 10, 0];


function sortArray(array) {
    let char = 0;
    let sortArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] > array[j]) {
                continue;
            }

            let newindex = array[j];
            array[j] = array[i];
            array[i] = newindex;

        }
    }

    return array;
}

console.log(sortArray(arr));