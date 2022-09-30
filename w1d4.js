//let arr = ['c', 'a', 't'];

let str = 'cat';
str[0] = 'x';
console.log(str);

console.log("---1")
// strings are immutable (you cannot mutate, can not change it)
//arrays are mutable

let arr = ['hi', 10, 9, true, undefined, null, [1, 2]];
console.log(arr);
console.log(arr[0]);
console.log(arr[6]);
console.log(arr[6][1]) //we go into the second array in the log

console.log("---2")

let fruits = ['apple', 'orange', 'pear'];
fruits.length; //3
fruits.indexOf('pear') //2
fruits.includes('watermelon') // false
fruits.push('watermelon') // added to the array from the end
console.log(fruits)
fruits.pop() // remove from the end of the array
console.log(fruits)
fruits.unshift('grape'); // added to the array from the front
console.log(fruits)
fruits.shift();  // removes from the front
console.log(fruits)

console.log("---3")

let numbers = [1,2,3]
console.log(fruits.concat(numbers)) //concat does not mutate it will return new array
console.log(fruits)
console.log(numbers.slice()); // no arguemnt gives a copy of array
console.log(numbers.slice(1)); // starts from given index to end of array
console.log(numbers.slice(0,2)); //(0) inclusive (2) exclusive

console.log("---4")

let string = "hi my name is Xander";
console.log(string.split(" ")); // turn string into array
console.log(string);

console.log(numbers.join("___"))

console.log("---5")
// [1,2,3]
for(let i = 0; i < numbers.length; i++){
    let ele = numbers[i];
    console.log(i + ": " + ele);

}

for (let i = numbers.length -1; i >= 0; i--){
    let ele = numbers[i];
    console.log(ele)
}

console.log()

console.log("---6")

function longEach(array1){
    for (let a1 = 0; a1 < array1.length; a1++){
        let ele1 = array1[a1];
        console.log(a1 + ": " + ele1);
    }
}

longEach(["Anthony", "John", "Carson"])

console.log("---7")

function range(start, end){
    for (let r1 = start; r1 <= end; r1 += 1){
        console.log(r1)
        }

    }


console.log(range(1,4))
console.log(range(4,2))

console.log ("--8")

// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
//
//
// Examples:
//
// sumArray([5, 6, 4]); // => 15
// sumArray([7, 3, 9, 11]); // => 30

function sumArray(array3){

}
