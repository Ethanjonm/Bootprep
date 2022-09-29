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

for(let i = 0; i < numbers.length; i++){
    let ele = numbers [i];
    console.log(ele);
}

for (let i = numbers.lenghts -1; i >= 0; i--){
    let ele = numbers [i];
    console.log(ele)
}


