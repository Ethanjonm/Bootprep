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

function isOdd(num){
  return num % 2 !== 0;
}

console.log(isOdd(5))

function plusFive(num){
  return num + 5;
}

console.log(plusFive(10))
console.log(plusFive(2))
console.log(plusFive(-8))

function threeOrSeven(num){
  return num % 3 === 0 || num % 7 ===  0
}

console.log(threeOrSeven(3));
console.log(threeOrSeven(42));
console.log(threeOrSeven(8));

function hello(str){
  let message = "Hello, " + str
  console.log(message);
}

console.log(hello("child"))
console.log(hello("Anthony"))

function yell(str){
  let yelling = str.toUpperCase()
  console.log(yelling);
}

console.log(yell("Time to program"))

function whisper(str){
  let whispering = str.toLowerCase()
  console.log(whispering);
}

console.log(whisper("Hey Anthony"));

function echo(str){
  let echo1 = str.toUpperCase()
  let echo2 = str
  let echo3 = str.toLowerCase()
  console.log(echo1, echo2, echo3);
}

console.log(echo("Mom!"))
console.log(echo("hey"))
console.log(echo("JUMp"))

function isSubstring(searchString, subString){
  let searchString1 = searchString.toUpperCase()
  let subString1 = subString.toUpperCase()
  let theString = searchString1.indexOf(subString1)
  return theString > -1;
}

console.log(isSubstring("The cat went to the store", "he cat went"));
console.log(isSubstring("Time to program", "time"));
console.log(isSubstring("Jump for joy", "joys"));

function isEven(num){
  return num % 2 === 0;
}

console.log(isEven(2))
console.log(isEven(5))

function AverageOfFour(num1,num2,num3,num4){
  let sum1 =  num1 + num2 + num3 + num4;
  let avg1 = sum1 /4;
  return avg1
}

console.log(AverageOfFour(10,10,15,5))
console.log(AverageOfFour(3,10,11,4))
console.log(AverageOfFour(1,2,3,4))
