//fibnocci series

// we cant talk about recursion without talking about fibnocci series  problem 161.js

// 0,1,1,2,3,5,8,13,21,34,55 
// 0,1,2,3,4,5,6 ,7 ,8 ,9,10



// with for loop
// function fib(n){   //o(n)
//     let arr =  [0,1]
//     for(let i=2 ; i<=n; i++){
//         arr.push(arr[i-1] + arr[i-2])
//     }
//     // console.log(arr);
//     return arr[n]
// }

// console.log(fib(100))


function fibnocci(n) {    // o(2^n)
    if (n < 2) {
        return n
    }
    let ans = fibnocci(n - 1) + fibnocci(n - 2)
    return ans
}



console.log(fibnocci(46)) 