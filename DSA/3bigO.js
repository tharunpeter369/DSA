
//30  //o(n)   ---> 30   -- linear time
//big O depend upon the number of input
const nemo = ['nemo']
const everyone = ['hello', "hiii", "shibin", "tharun", 'nemo', "fighter fish"]
const large = new Array(1000000).fill("tharun")
const t1 = performance.now()
function findNemo(nemo) {
    for (i = 0; i < nemo.length; i++) {
        if (nemo[i] == 'nemo') {
            console.log("🚀 ~ file: sample.js ~ line 6 ~ findNemo ~ nemo", nemo[i])
        }
    }
    const t2 = performance.now()
    console.log('difference', t2 - t1);
}
findNemo(large)

//interview question
function compressFirstBox(boxes) {
    console.log(boxes[0])
}
// ans is o[1]   - constant time

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5;   //o(1)
    let b = 10;  //o(1)
    let c = 50;  //o(1)
    for (let i = 0; i < input; i++) {  //o(n)
        let x = i + 1;   //o(n)
        let y = i + 2;   //o(n)
        let z = i + 3;   //o(n)
    }
    for (let j = 0; j < input; j++) {  //o(n)
        let p = j * 2;   //o(n)
        let q = j * 2;   //o(n)
    }
    let whoAmI = "I don't know";  //o(1)
}

// BigO   -   (4 + 7n)  --> o(n)

/*Rule Book
Rule 1 : Worst case
Rule 2 : Remove Constants
RUle 3 : Different terms for inputs
Rule 4 : Drop Non Dominants */

// Rule 1 : Worst case
const everyone1 = ['hello', "hiii", "shibin", "tharun", "fighter fish", 'nemo']  // nemo at end is the worst case find in loop

// Rule 2 : Remove Constants  or drop the constants
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);   //o(1)
    let middleIndex = Math.floor(items.length / 2);  //o(1)
    let index = 0   //o(1)
    while (middleIndex > index) {  //o(n/2)
        console.log(items[index]);
        index++
    }
    for (i = 0; i < 100; i++) {
        console.log("hi"); //o(100)
    }
}
printFirstItemThenFirstHalfThenSayHi100Times(everyone1)
// BigO - o(1 + n/2 + 100  ) ==> o(n/2 + 1)  ==>  o(n)


//eg
function compressFirstBoxTwise(boxes) {
    boxes.forEach(function (boxes) {    //o(n)
        console.log(boxes);
    })
    boxes.forEach(function (boxes) {    //o(n)
        console.log(boxes);
    })
}
//  o(n) + o(n) ==> o(2n)   ==>  o(n)


// RUle 3 : Different terms for inputs
//eg
function compressFirstBoxTwise(boxes1, boxes2) {
    boxes1.forEach(function (boxes) {    //o(n1)
        console.log(boxes);
    })
    boxes2.forEach(function (boxes) {    //o(n2)
        console.log(boxes);
    })
} //here the input are differnt
// O(n1 + n2)

//log all pairs of array   ==  O(n^2)
const boxes = [1, 2, 3, 4, 5];
function logAllPair() {
    for (i = 0; i < boxes.length; i++) {  //0(n)
        for (j = 0; j < boxes.length; j++) { //0(n)
            console.log(boxes[i], boxes[j]);
        }
    }
}
logAllPair()   // ==>  0(n) * 0(n)  ==> 0(n * n) ==> o(n2)


// Rule 4 : Drop Non Dominants
function printAllNumberThenAllPairSums(numbers) {
    console.log('these are the numbers');
    numbers.forEach((data) => {//0(n)
        console.log(data);
    })
    console.log('thse are the sums');
    numbers.forEach((data) => {//0(n)
        numbers.forEach((d) => {//0(n)
            console.log(data + d);
        })
    })
}
const numberData = [1, 4, 5, 6, 7, 8, 9]
printAllNumberThenAllPairSums(numberData)  // ==> 0(n) + 0(n * n) ==> o(n) + o(n2) ==> o(n2)

// data structure + algorithms = programs

// data structure  :- A data structure is a storage that is used to store and organize data.
// It is a way of arranging data on a computer so that it can be accessed and updated efficiently

// algorithm  :- An algorithm is a procedure used for solving a problem or performing a computation.
// Algorithms act as an exact list of instructions that conduct specified actions step by step in either
// hardware- or software-based

// o(n!)  o of n factorial  :- youre adding loop for every element

// good codes :- readable and scalable

// scalable 1. time  2. space

// what caused the space complexity?
// 1.variables
// 2.data structures
// 3.function call 
// 4.Allocations

const ar1 = [
    {
        tweet:'hi',
        date:2020
    },
    {
        tweet:'oi',
        date:2021
    },
    {
        tweet:'hello',
        date:2022
    },
    {
        tweet:'bonjour',
        date:2023
    }
]    
//o(n2)

const findsome = ar =>{
    for (data of ar){
       if(data.tweet == 'hello'){
        console.log('fuck you');
       }
    }
}

findsome(ar1)
