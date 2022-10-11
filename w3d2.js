// // Scope

// let name = "Jonathan";

// function foo(){
//     console.log(name); // gives Jonathan
// }

// function bar(){
//     let test = "something"
// }
// //console.log(test) // get error test is not defined because test variable only exist in function

// function foo2(){
//     let test1 = "this"

//     for (let i = 0; i < 3; i++){
//         console.log(test1)
//         let bar2 = "other"; // everything inside the for loop is its own scope
//     }
//     console.log(bar2)

// }

// //console.log(test1)

// /* Scope what is scope?
// The environment in which the variable is defined.*/

// let myFavoriteFood = "Pizza";

// function outer(){
//     let myFavoriteFood = "ramen";
//     function inner(){
//         myFavoriteFood = "tacos";
//         console.log(myFavoriteFood);
//     }
//     inner()
// }
// outer() // tacos
// console.log(myFavoriteFood) // Pizza 

// /* write a function sumArray(arr) that takes in a array and returns the sum of all of the elements
// ex: sumArray([1,2,3,4,5]) => 15
// ex: sumArray([2,7,3,8,6,4]) => 30
// */

// function sumArray(arr){
//     let sum = 0

//     for (let i = 0; i < arr.length; i++){
//         let ele = arr[i]
//         sum += ele
//     }
//     return sum
// }
// console.log(sumArray([1,2,3,4,5]))
// console.log("------")

/* Hoisting
Hoisting can be thought of as proof reading your code and moving all your defined functions 
to the top of your code */

// foo();
// function foo(){
//     console.log("bar");
// }
// foo()

// console.log(bar); // referenceError cannot access 'bar' before initialization

// let bar = () => {  // let and const is not hoisted 
//     console.log("foo")
// }
// bar()

/* Difference between variable declartionas
let - defines a variable within the scope of the environment curly braces.
const - defines a variable that cannot be mutated. The scope is once again the environment's
curly braces.
var - defines a variable with global access.
*/


