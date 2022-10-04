function catBuilder1(name, color, toys){
    let cat = {}
    cat.name = name
    cat.color = color
    cat.toys = toys
}

function catBuilder2(name, color, toys){
    let cat = {}
    cat["name"] = name
    cat["color"] = color // we can key in objects when they are strings
    cat["toys"] = toys
}

function catBuilder3(name, color, toys){
    let cat = {
    name: name,
    color: color,
    toys: toys,
    }
    return cat
}

// Function Decomp/Objects
/* Breaks down a problem into several functions
CLEAN CODE
MANAGE COMPLEXITY
*/

//laligatSum(num) and returns the sum of all the prime numbers less
// than or equal to that number.
// laligatSum(10) => 2+3+5+7 => 17
// laligatSum(17) => 2+3+5+7+11+13+17 =>58


function isPrime(num){
    if (num < 2){
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0){
            return false
        }
    }
    return true

}

function laligatSum(num) {
    let sum = 0;
    for (let i = 2; i < num; i++){
        if (isPrime(i)){
            sum += i
        }
    }
    return sum
}

console.log(laligatSum(10))

// use helper functions when your function get to long

/* Objects
-Objcest are a JS datastructure
-Mutable
-Key (ALWAYS A STRING)
-value can be anything
-keys are unique
-Objects are unordred, arrays are orderd
*/

let cat = {
    name: "Whiskers",
    color: "blue",
    toys: {
        outside: ["ball", "whistle"],
        inside: ["blaket"]
    }
}

cat ["name"] = "Jael";
cat ["age"] = 21;

console.log(cat) // logs the whole object
console.log(cat["color"]) // blue
console.log(cat.name) // Jael
console.log(cat.age) //21
console.log(cat.toys) // { outside: [ 'ball', 'whistle' ], inside: [ 'blaket' ] }
console.log(cat.toys.outside) //[ 'ball', 'whistle' ]
console.log(cat.toys.outside[0]) //ball
console.log(cat.test) //undefined if the key does not exist

let test = "name";

console.log(cat[test]) //Jael


