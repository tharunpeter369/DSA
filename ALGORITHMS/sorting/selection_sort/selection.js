
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selection(array) {     // t --> o(n2)  s --> o(1)
    for (let i = 0; i <= array.length; i++) {
        console.log(i, "😉----->>>>>>>>>", array.length);
        console.log(array, "🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰");
        let min = i
        let temp = array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }

        console.log(array[min], "😇");
        if (array[i]) {
            array[i] = array[min];
            array[min] = temp

        }
    }
}

selection(numbers);
console.log(numbers);