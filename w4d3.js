/*
Recursion
- a function that calls itself withen itself
- A base case
- A recursive case
- Whatever can be done recursively CAN be done iteratively
why do we care?
-other professionals use it
-elegance**
where you see them
-sorting algorithim
-searching algorithim
- tree traversal
- graph traveral
*/


// function multiply(num1, num2) {
//     //if (num1 === 0) return 0  // if you dont have this base case you get a stack overflow
//     console.log(num1)
//     return num2 + multiply(num1 - 1, num2)
    
// }
// console.log(multiply(2,3))
// console.log(multiply(7,8))

// const fib = n => {
//     if (n === 1 || n === 2) return 1
//     return fib(n-1) + fib(n - 2)
// }

// console.log(fib(5)) // 5
// console.log(fib(10)) // 55
// console.log(fib(90)) // 