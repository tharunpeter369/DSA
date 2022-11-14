// Create a fucntion for reverse a String
// 'hi my name tharun peter'
// 'retep nuraht eman ym ih'

let str = 'hi my name tharun peter'

console.log([...str]);  // destructuriing

function reverseString(str) {
  var result = '';
  for (var i = str.length - 1; i >= 0; i--) {
    result += str.charAt(i);
  }
  return result;
}

function reverseStringArray(str) {
    let splitedString = str.split("")
    console.log(splitedString,"splitedString");
    let reversedArray = splitedString.reverse()
    let result = reversedArray.join("")
    return result
} 

const reverse3 = str => str.split('').reverse().join('')



// console.log(reverseString(str));

// console.log(reverse3(str));


