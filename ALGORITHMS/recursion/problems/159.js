function findFactorialRecursion(number) {  // o(n)  
    if (number == 2) {
        return 2
    }
    return factorial = number * findFactorialRecursion(number - 1)
}


let res = findFactorialRecursion(5)
console.log(res, "🙂");

//  using loop
function findFactorialIterative(number) {   // t = o(n)
    let ans = 1
    for (let i = 1; i <= number; i++) {
        ans = ans * i
    }
    return ans
}

console.log(findFactorialIterative(5));


// 5 x 4 x 3 x 2 x 1

