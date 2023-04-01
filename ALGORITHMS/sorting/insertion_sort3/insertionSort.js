
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertion_sort(array) {   
    for(let i = 0; i < array.length; i++) {
        for(let j = i; j > 0; j--) {
            if(j != 0 ){
                if(array[j-1] > array[j]) {
                    let temp = array[j];
                    array[j] = array[j-1];
                    array[j-1] = temp;
                }
            }
        }
    } 
    return array;
}

let result = insertion_sort(numbers);
console.log(result);