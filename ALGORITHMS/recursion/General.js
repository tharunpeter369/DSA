// An algorithm is a step-by-step procedure for solving a problem or achieving a goal.
//  It is a set of well-defined rules and instructions that specify how to solve a particular problem.

// In computer science, algorithms are often expressed in pseudocode, which is a mixture of English and code-like syntax that can be easily understood by humans.
//  Once an algorithm is designed, it can be translated into a specific programming language and implemented in software.


function recursion() {
     recursion()
}

recursion()
//example of stack overflow: call above funcition in browser // image 4 and 5 ,7 ,8

// the recursive function has 2 paths  
// 1.recursive case  --> calling function
// 2.base case  --> stop calling function

// recursion example
let counter = 0
function inception() {
     if (counter > o) {
          return 'done'
     }
     counter += 1
     inception()
}

inception()


// we cant talk about recursion without talking about fibnocci series  problem 161.js

// 0,1,1,2,3,5,8,13,21,34,



// recursion is not a good aporoaca as it seems cause it uses lot of stack memory make program slow
// its complexity: o(2^n)   imag :8
