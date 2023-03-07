
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {     // t --> o(n2)  s --> o(1)
    for (let i = 0; i <= array.length; i++) {
        console.log(array[i]);
        for (let j = 0; j < array.length - i; j++) {
            console.log(array[j]);
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1]
                array[j + 1] = temp

            };

        }
    }

}


bubbleSort(numbers);
console.log(numbers);