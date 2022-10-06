// Strings and arrays & styling and debugging
// stings = primitive, non-mutable 
// Arrays = non-primitve, mutable
/* let str = "hello"
    str[0] = "x"
    console.log(str) => "hello" string is non mutable
    let arr = ['h','e','l','l','o']
    arr[0] = 'x'
    console.log(arr) => ['x','e','l','l','o']  arrays are mutable
*/
let arr = ['h','e','l','l','o']
let str = "hello"

console.log(arr.join('')); // .join turns a array into a string
console.log(str.split('')) // .split turns a string into an array

// when using { use indented 

function foo(bar) {
    let n = 0;
    let sum = 0;

    for (let key in bar) {
        n++
    }

    return sum
}
console.log("-------")

/*  (a) Refernce Error
    (b) Type Error
    (c) Syntax Error
*/

//"hello world".join("_") you get type Error because .join only works on arrays not string


