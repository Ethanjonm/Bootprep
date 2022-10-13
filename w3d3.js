// // Math
// Math.floor(3.7) // => 3 // rounds down // function
// Math.ceil(4.2) // => 5 // rounds up // function
// Math.round(3.8) // => 4 // rounds to nearest integer // function
// Math.sqrt(25) // => 5 // squares a number // function
// Math.PI // => 3.141592653589793 // its just a number //  not a function


// Area = Pi * r^2
function circleArea(radius){
    return Math.PI * radius * radius
    // return Math.floor(Math.PI * radius * radius) // this rounds down
}

// returns the square root of a number rounded to the nearest integer and then multiply it by PI
function weirdSqrt(num){
    return Math.round(Math.sqrt(num)) * Math.PI
}

/* Higher order function
HOF is a function, that takes other functions as arguements and returns functions
*/

// function foo(){ // not a higher order function
//     console.log("foo")
// }

// function bar(fn){ // higher order function
//     fn();
//     return fn    
// }

function myFunc(n){ // n is a integer need to be a function to be HOF
    n += 1;

    function myInnerFunc(){
        console.log('hello');
    }
    return myInnerFunc; // have to return function without ()
}

function example(fn){
    fn();  // invoking a function
    function innerExample(){
        console.log('example');
    }
    return innerExample;  // if you put () it would be undefined
}

/* Call back function
A call back function is a function that is passed as an argument to another function
*/

function HoF(fn1, fn2, n){ // fn1, fn2 is a call back function
    fn1();
    fn2();
    n += 1;
    return fn1; 
}

function test(fn, a, b){
    console.log(fn(a));
    return fn;
}

function air(fn1, fn2, fn3,){
    let arr = [fn1(), fn2(), fn3];
    let result = fn1(fn3());
    return arr[arr.length - 1];
}

/* js predefined Higher order function
<array>.forEach 
<array>.map
<array>.filter
*/
// <array>.forEach takes each element in the array. loops through the array. does not mutates the array
// let arr = [3,5,7,11,13]
// arr.forEach(function(ele, i, arr) { // ele is each element is the first ALWAY , i is the index is secnond ALWAYS,  arr is the array ALWAYS third
//     return ele * 2
// } )

//arr = [6, 10, 14, 22, 26]

//<array>.map takes an array and transformes every element in the array. does not mutate original array returns a new array

// let names = ["alice", "bob", "carol"]
// let newArr = names.map(function(ele, i) {
//     return ele.length
// } )

// // [5, 3, 5]
// let nums = [5, 8, 9, 12, 15, 3]
// nums.map(function(ele, i,) {
//     return ele * i
// } )

// [0, 8, 18, 36, 60, 15]

let numbers = [1, 2, 3, 4, 5]
//[0, 0, 0, 0, 0]
let newNames = ['alice', 'bob', 'carol']
//['alicealice', 'bobbob', 'carolcarol']

let nums0 = numbers.map(function(ele, i) {
    return ele * 0
} )
console.log(nums0)

let doubleNames = newNames.map(function(ele, i){
    return ele + ele
})
console.log(doubleNames)


// <array>.filter  returns newArray
let evenNums = numbers.filter(function(ele, i){
    return ele % 2 === 0
})

console.log(evenNums)