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

