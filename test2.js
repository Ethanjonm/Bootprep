//(node+.js fie to test in terminal) cd in terminal

console.log("somthing".indexOf("0")); // number makes it -1

if(!0){ // not a falsy is a truthy
  console.log("in the if");
} else {
  console.log("in the else");
}

let num = 20
if (num = 30){ // one equal sign is a reassinment ALWAYS
  console.log("in the if");
} else {
  console.log("in the else");
}

function foo(){
  return 'bar';
}
console.log(foo()) // A=bar [this function returns because of ()]
console.log(foo) // A=[Function: foo] [this just log what the function name]

function foo(p1,p2){
  return p1+" "+p2;
}
console.log(foo('ethan','mercado'));

let foo1 = function(){
  return "bar";
}
let foo2 = () =>{
  return 'bar';
}

console.log(foo1())
console.log(foo2())

function average(num1,num2){
  let sum = num1 + num2; // adding the 2 numbers = sum
  let avg = sum /2; //sum /2 = avg
  return avg; // gives back avg
}

function average2 (num1 , num2){
  let sum = sumNums(num1, num2)  // funtion sumNums on num1 and num2 = sum
  let avg = sum/2 //sum  /2 = avg
  return avg; //gives back avg
}

function sumNums(num1, num2){
  return num1 + num2;
}

console.log(average(8,2));
console.log(average2(18,2));
console.log(sumNums(18,12));
